'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useIsMobile } from '@/lib/useMediaQuery';

export default function NavBar() {
  const { t, themeKey } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - (isMobile ? 70 : 100), behavior: 'smooth' });
    setMenuOpen(false);
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
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${scrolled ? t.border : 'rgba(255,255,255,0.08)'}`,
        padding: isMobile ? '0 16px' : '0 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: isMobile ? 56 : 52,
        transition: 'all 0.4s',
      }}>
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', minWidth: 0, flex: 1 }}
          onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }}
        >
          <svg width="22" height="22" viewBox="0 0 28 28" style={{ flexShrink: 0 }}>
            <rect x="12" y="2" width="4" height="24" fill={t.accent} rx="1" />
            <rect x="6" y="8" width="16" height="4" fill={t.accent} rx="1" />
          </svg>
          <span style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: isMobile ? 13 : 15,
            color: onDark ? '#f0f4ff' : t.text,
            fontWeight: 700,
            letterSpacing: '0.02em',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            {isMobile ? 'Historia · Iglesia Cristiana' : 'Historia de la Iglesia Cristiana'}
          </span>
        </div>

        {!isMobile && (
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
        )}

        {isMobile && (
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menú"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              width: 40, height: 40, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 5,
              flexShrink: 0,
            }}
          >
            <span style={{ width: 22, height: 2, background: onDark ? '#f0f4ff' : t.text, transition: 'transform 0.25s', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
            <span style={{ width: 22, height: 2, background: onDark ? '#f0f4ff' : t.text, opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
            <span style={{ width: 22, height: 2, background: onDark ? '#f0f4ff' : t.text, transition: 'transform 0.25s', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
          </button>
        )}
      </div>

      {/* Sub-nav (desktop) */}
      {!isMobile && (
        <div style={{
          background: t.navBg, backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
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
      )}

      {/* Sub-nav scroll chips (mobile) */}
      {isMobile && scrolled && !menuOpen && (
        <div style={{
          background: t.navBg, backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${t.border}`,
          padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 8,
          overflowX: 'auto', WebkitOverflowScrolling: 'touch',
        }}>
          {subLinks.map(l => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              style={{
                background: `${t.accent}10`, border: `1px solid ${t.border}`,
                borderRadius: 999, padding: '6px 12px', cursor: 'pointer',
                fontFamily: 'var(--font-crimson), serif', fontSize: 12, letterSpacing: '0.05em',
                color: t.textMuted, whiteSpace: 'nowrap', flexShrink: 0,
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}

      {/* Mobile drawer */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: 56, left: 0, right: 0, bottom: 0,
          background: t.navBg, backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          padding: '24px 20px', overflowY: 'auto',
          borderTop: `1px solid ${t.border}`,
          animation: 'fadeIn 0.2s ease',
        }}>
          <p style={{
            fontFamily: 'var(--font-crimson), serif', fontSize: 11,
            color: t.accent, letterSpacing: '0.25em', textTransform: 'uppercase',
            margin: '0 0 12px',
          }}>Secciones</p>
          {mainSections.map(s => (
            <div key={s.key} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '14px 4px', borderBottom: `1px solid ${t.border}`,
              opacity: s.soon ? 0.45 : 1,
            }}>
              <span style={{
                fontFamily: 'var(--font-crimson), serif', fontSize: 16,
                color: s.key === 'estadisticas' ? t.accent : t.text,
                letterSpacing: '0.05em',
              }}>{s.label}</span>
              {s.soon && (
                <span style={{ fontSize: 9, background: `${t.accent}30`, color: t.accent, padding: '3px 6px', borderRadius: 2, letterSpacing: '0.1em' }}>
                  PRONTO
                </span>
              )}
            </div>
          ))}

          <p style={{
            fontFamily: 'var(--font-crimson), serif', fontSize: 11,
            color: t.accent, letterSpacing: '0.25em', textTransform: 'uppercase',
            margin: '24px 0 12px',
          }}>Estadísticas</p>
          {subLinks.map(l => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '14px 4px', borderBottom: `1px solid ${t.border}`,
                fontFamily: 'var(--font-crimson), serif', fontSize: 16,
                color: t.textMuted, letterSpacing: '0.05em',
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
