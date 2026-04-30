'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function NavBar() {
  const { t, themeKey } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 100, behavior: 'smooth' });
  };

  const onDark = themeKey === 'modern' && !scrolled;
  const mainTextColor = onDark ? '#c8d8f0' : t.textMuted;

  const mainSections = [
    { key: 'estadisticas', label: 'Estadísticas', active: true, soon: false },
    { key: 'ensayos', label: 'Ensayos', soon: true },
    { key: 'timeline', label: 'Líneas de Tiempo', soon: true },
    { key: 'galeria', label: 'Galería', soon: true },
  ];

  const subLinks = [
    { id: 'secA', label: 'A · Católicos' },
    { id: 'secB', label: 'B · Cristianos' },
    { id: 'secC', label: 'C · Religiones' },
  ];

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, transition: 'all 0.4s' }}>
      <div style={{
        background: scrolled ? t.navBg : 'rgba(0,0,0,0.35)',
        backdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${scrolled ? t.border : 'rgba(255,255,255,0.08)'}`,
        padding: '0 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 52,
        transition: 'all 0.4s',
      }}>
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg width="22" height="22" viewBox="0 0 28 28">
            <rect x="12" y="2" width="4" height="24" fill={t.accent} rx="1" />
            <rect x="6" y="8" width="16" height="4" fill={t.accent} rx="1" />
          </svg>
          <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 15, color: onDark ? '#f0f4ff' : t.text, fontWeight: 700, letterSpacing: '0.02em' }}>
            Historia de la Iglesia Cristiana
          </span>
        </div>

        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {mainSections.map(s => (
            <div key={s.key} style={{ position: 'relative' }}>
              <button
                style={{
                  background: 'none', border: 'none', cursor: s.soon ? 'default' : 'pointer',
                  fontFamily: 'var(--font-crimson), serif', fontSize: 13, letterSpacing: '0.1em',
                  color: s.key === 'estadisticas' ? t.accent : mainTextColor,
                  textTransform: 'uppercase', padding: '0 16px', height: 52,
                  borderBottom: s.key === 'estadisticas' ? `2px solid ${t.accent}` : '2px solid transparent',
                  opacity: s.soon ? 0.45 : 1, transition: 'all 0.2s',
                  display: 'flex', alignItems: 'center', gap: 6,
                }}
              >
                {s.label}
                {s.soon && (
                  <span style={{ fontSize: 9, background: `${t.accent}30`, color: t.accent, padding: '2px 5px', borderRadius: 2, letterSpacing: '0.1em' }}>
                    PRONTO
                  </span>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        background: t.navBg, backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${t.border}`,
        padding: '0 48px', display: 'flex', alignItems: 'center', gap: 32,
        height: scrolled ? 40 : 0, overflow: 'hidden', transition: 'height 0.35s ease',
      }}>
        <span style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 11, color: t.accent, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.7 }}>
          Estadísticas
        </span>
        <div style={{ width: 1, height: 16, background: t.border }} />
        {subLinks.map(l => (
          <button
            key={l.id}
            onClick={() => scrollTo(l.id)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-crimson), serif', fontSize: 12, letterSpacing: '0.1em',
              color: t.textMuted, textTransform: 'uppercase', padding: '0', transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = t.accent)}
            onMouseLeave={e => (e.currentTarget.style.color = t.textMuted)}
          >
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
