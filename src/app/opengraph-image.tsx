import { ImageResponse } from 'next/og';
import { SITE_NAME } from '@/lib/seo';

export const alt = 'Historia de la Iglesia Cristiana — Compendio Histórico y Estadístico';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #1a1410 0%, #2a1f17 50%, #0f0a06 100%)',
          color: '#f5e9d4',
          padding: '80px',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            marginBottom: 32,
            color: '#c9a063',
            fontSize: 22,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
          }}
        >
          <div style={{ width: 60, height: 1, background: '#c9a063' }} />
          COMPENDIO
          <div style={{ width: 60, height: 1, background: '#c9a063' }} />
        </div>
        <div
          style={{
            fontSize: 86,
            fontWeight: 700,
            fontStyle: 'italic',
            textAlign: 'center',
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 28,
            color: '#d8c8a8',
            textAlign: 'center',
            fontStyle: 'italic',
          }}
        >
          Historia · Estadísticas · Tradiciones
        </div>
        <div
          style={{
            marginTop: 56,
            fontSize: 20,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#9a8466',
          }}
        >
          Por Daniel Suárez
        </div>
      </div>
    ),
    { ...size }
  );
}
