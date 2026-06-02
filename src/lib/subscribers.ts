/**
 * Capa de almacenamiento de suscriptores — PUNTO ÚNICO DE SWAP.
 *
 * Hoy solo recolectamos correos (Upstash Redis). Cuando se elija el proveedor de
 * envío (Resend / MailerLite / etc.), basta con editar ESTE archivo: añadir el alta
 * en la audiencia del proveedor dentro de `addSubscriber`, junto al SADD. La UI
 * (`Subscribe.tsx`) y el endpoint (`/api/subscribe`) no cambian.
 *
 * Server-only: usa env/SDK sensibles. No importar desde componentes cliente.
 */
import { Redis } from '@upstash/redis';

export type SubscribeResult = 'subscribed' | 'already';

export interface SubscriberMeta {
  source?: string;
  ip?: string;
}

export interface SubscriberRecord {
  email: string;
  createdAt: string;
  source: string;
  ip?: string;
}

const SET_KEY = 'subs:set'; // SET de correos normalizados → dedup
const DATA_KEY = 'subs:data'; // HASH email → JSON(record) → ver/exportar

let client: Redis | null = null;

/**
 * Construye el cliente leyendo cualquiera de los dos pares de variables que la
 * integración de Vercel puede inyectar (KV_* del producto "Vercel KV" o UPSTASH_*
 * del producto Upstash). NO usamos `Redis.fromEnv()` porque solo lee los nombres
 * `UPSTASH_*` y rompería con los `KV_*`.
 */
function getClient(): Redis {
  if (client) return client;

  const url =
    process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token =
    process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    throw new Error(
      'Almacenamiento de suscriptores no configurado: faltan las variables KV_REST_API_URL/TOKEN o UPSTASH_REDIS_REST_URL/TOKEN.'
    );
  }

  client = new Redis({ url, token });
  return client;
}

/**
 * Da de alta un correo (ya normalizado por quien llama). Devuelve 'subscribed' si
 * es nuevo o 'already' si ya existía. Usa el valor de retorno de SADD para dedup
 * sin una consulta extra.
 */
export async function addSubscriber(
  email: string,
  meta: SubscriberMeta = {}
): Promise<SubscribeResult> {
  const redis = getClient();

  const added = await redis.sadd(SET_KEY, email);
  if (added === 0) return 'already';

  const record: SubscriberRecord = {
    email,
    createdAt: new Date().toISOString(),
    source: meta.source ?? 'site',
    ...(meta.ip ? { ip: meta.ip } : {}),
  };
  await redis.hset(DATA_KEY, { [email]: JSON.stringify(record) });

  return 'subscribed';
}

/** Lista completa de suscriptores (para exportar). */
export async function getSubscribers(): Promise<SubscriberRecord[]> {
  const redis = getClient();
  const data = await redis.hgetall<Record<string, unknown>>(DATA_KEY);
  if (!data) return [];

  return Object.values(data)
    .map((value) => {
      // @upstash/redis puede devolver el JSON ya deserializado o como string.
      if (typeof value === 'string') {
        try {
          return JSON.parse(value) as SubscriberRecord;
        } catch {
          return null;
        }
      }
      return value as SubscriberRecord;
    })
    .filter((r): r is SubscriberRecord => r !== null)
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt));
}

/** Número de suscriptores. */
export async function countSubscribers(): Promise<number> {
  const redis = getClient();
  return redis.scard(SET_KEY);
}
