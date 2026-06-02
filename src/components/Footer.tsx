'use client';

import { useTheme } from '@/context/ThemeContext';

export default function Footer() {
  const { t } = useTheme();
  return (
    <footer style={{ background: t.bgCard, borderTop: `1px solid ${t.border}`, padding: 'clamp(24px, 5vw, 40px) clamp(18px, 4vw, 48px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="22" height="22" viewBox="0 0 28 28">
            <rect x="12" y="2" width="4" height="24" fill={t.accent} rx="1" />
            <rect x="6" y="8" width="16" height="4" fill={t.accent} rx="1" />
          </svg>
          <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 14, color: t.textMuted }}>Historia de la Iglesia Cristiana</span>
        </div>
        <a
          href="#suscribete"
          style={{
            fontFamily: 'var(--font-crimson), serif', fontSize: 12, color: t.accent,
            letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.7'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
        >
          Suscríbete <span style={{ fontSize: 14 }}>→</span>
        </a>
        <span style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 13, color: t.textMuted }}>
          Datos ilustrativos con fines educativos · 2026
        </span>
      </div>
    </footer>
  );
}
