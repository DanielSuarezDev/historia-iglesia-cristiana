This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Suscripción a novedades

Formulario de captación de correos (`src/components/Subscribe.tsx`) que envía a
`POST /api/subscribe` y guarda los suscriptores en **Upstash Redis** (el "Vercel KV"
actual). Hoy **solo se recolectan** correos; el envío de boletines se elegirá más
adelante (Resend / MailerLite / etc.) editando un único archivo: `src/lib/subscribers.ts`.

### Variables de entorno

Crea un `.env.local` (ya está en `.gitignore`) y configúralas también en Vercel
(Production + Preview). La integración de Upstash/KV en Vercel inyecta automáticamente
el par `KV_*` o `UPSTASH_*` al conectar el store; el código lee cualquiera de los dos.

```bash
# Uno de estos dos pares (la integración de Vercel suele inyectarlos sola):
UPSTASH_REDIS_REST_URL=...
UPSTASH_REDIS_REST_TOKEN=...
# o bien:
# KV_REST_API_URL=...
# KV_REST_API_TOKEN=...

# Opcional: token secreto para exportar la lista por GET /api/subscribe?token=...
ADMIN_TOKEN=un-secreto-largo-y-aleatorio
```

Localmente puedes traer las variables ya configuradas en Vercel con
`vercel env pull .env.local`.

### Ver / exportar suscriptores

- Consola web de Upstash: inspecciona las claves `subs:set` (set para dedup) y
  `subs:data` (hash `email → JSON`).
- Endpoint protegido: `GET /api/subscribe?token=$ADMIN_TOKEN` → `{ ok, count, subscribers }`.
  Devuelve correos (PII): mantén `ADMIN_TOKEN` en secreto y no enlaces la URL.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
