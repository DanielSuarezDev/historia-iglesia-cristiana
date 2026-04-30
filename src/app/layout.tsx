import type { Metadata } from 'next';
import { Playfair_Display, Crimson_Pro } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

const crimson = Crimson_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-crimson',
});

export const metadata: Metadata = {
  title: 'Historia de la Iglesia Cristiana — Estadísticas',
  description: 'Compendio histórico y estadístico de la Iglesia Cristiana. Por Daniel Suárez.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${crimson.variable}`}>
      <body>{children}</body>
    </html>
  );
}
