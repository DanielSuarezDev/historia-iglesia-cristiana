import {
  addSubscriber,
  countSubscribers,
  getSubscribers,
} from '@/lib/subscribers';

// No cachear: cada alta debe ejecutarse en el servidor. `nodejs` deja la puerta
// abierta a SDKs Node del futuro proveedor de envío.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Contrato estable que consume la UI (Subscribe.tsx):
type SubscribeStatus = 'subscribed' | 'already' | 'invalid' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(status: SubscribeStatus, ok: boolean, httpStatus: number) {
  return Response.json({ ok, status }, { status: httpStatus });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json('invalid', false, 400);
  }

  // Honeypot: si un bot rellena el campo oculto, devolvemos éxito falso (200) sin
  // guardar, para no darle ninguna señal.
  const honeypot = String(body.company ?? '').trim();
  if (honeypot) return json('subscribed', true, 200);

  const email = String(body.email ?? '')
    .trim()
    .toLowerCase();
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return json('invalid', false, 400);
  }

  const source =
    typeof body.source === 'string' && body.source ? body.source : 'site';
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();

  try {
    const result = await addSubscriber(email, { source, ip });
    return json(result, true, 200);
  } catch (err) {
    console.error('[subscribe] storage error:', err);
    return json('error', false, 500);
  }
}

// Exportación protegida por token (opcional). Devuelve PII: mantener ADMIN_TOKEN
// secreto, sin enlazar, y con noindex.
export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get('token');
  const expected = process.env.ADMIN_TOKEN;

  if (!expected || !token || token !== expected) {
    return Response.json(
      { ok: false },
      { status: 401, headers: { 'X-Robots-Tag': 'noindex' } }
    );
  }

  try {
    const [count, subscribers] = await Promise.all([
      countSubscribers(),
      getSubscribers(),
    ]);
    return Response.json(
      { ok: true, count, subscribers },
      { headers: { 'X-Robots-Tag': 'noindex' } }
    );
  } catch (err) {
    console.error('[subscribe] export error:', err);
    return Response.json(
      { ok: false },
      { status: 500, headers: { 'X-Robots-Tag': 'noindex' } }
    );
  }
}
