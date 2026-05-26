'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useIsMobile } from '@/lib/useMediaQuery';
import { ESSAYS, type Essay } from '@/data/ensayos';

export default function Ensayos() {
  const { t } = useTheme();
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = openSlug !== null ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpenSlug(null); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [openSlug]);

  const openEssay = openSlug ? ESSAYS.find(e => e.slug === openSlug) ?? null : null;

  return (
    <section
      id="ensayos"
      ref={sectionRef}
      style={{ background: t.bg, padding: isMobile ? '64px 0' : '100px 0', position: 'relative' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '0 18px' : '0 48px' }}>
        <div style={{ marginBottom: isMobile ? 28 : 40, opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 16, marginBottom: 16 }}>
            <div style={{ width: 4, height: isMobile ? 36 : 48, background: t.accent, flexShrink: 0 }} />
            <div style={{ minWidth: 0 }}>
              <p style={{ fontFamily: 'var(--font-crimson), serif', color: t.accent, letterSpacing: '0.25em', fontSize: isMobile ? 11 : 12, textTransform: 'uppercase', margin: '0 0 6px' }}>
                Sección · Ensayos
              </p>
              <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: isMobile ? 26 : 40, color: t.text, margin: 0, fontWeight: 700, lineHeight: 1.15 }}>
                Lecturas para detenerse
              </h2>
            </div>
          </div>
          <p style={{ fontFamily: 'var(--font-crimson), serif', fontSize: isMobile ? 15 : 17, color: t.textMuted, maxWidth: 720, lineHeight: 1.7, marginLeft: isMobile ? 0 : 20 }}>
            Pequeños ensayos sobre momentos, textos y personas que ayudaron a darle forma al cristianismo. Pensados para leerse en una pausa, sin prisa.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: isMobile ? 16 : 22,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.7s ease 0.15s',
        }}>
          {ESSAYS.map((e, i) => (
            <EssayCard key={e.slug} essay={e} idx={i} onOpen={() => setOpenSlug(e.slug)} visible={visible} />
          ))}
        </div>
      </div>

      {openEssay && <EssayModal essay={openEssay} onClose={() => setOpenSlug(null)} />}
    </section>
  );
}

function EssayCard({ essay, idx, onOpen, visible }: { essay: Essay; idx: number; onOpen: () => void; visible: boolean }) {
  const { t } = useTheme();
  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={onOpen}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={`Abrir ensayo: ${essay.title}`}
      style={{
        textAlign: 'left',
        background: t.bgCard,
        border: `1px solid ${hover ? t.accent : t.border}`,
        borderLeft: `3px solid ${t.accent}`,
        padding: '22px 24px 24px',
        cursor: 'pointer',
        font: 'inherit',
        color: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        transform: visible ? 'none' : 'translateY(14px)',
        opacity: visible ? 1 : 0,
        transition: `opacity 0.55s ease ${0.2 + idx * 0.08}s, transform 0.55s ease ${0.2 + idx * 0.08}s, border-color 0.2s, box-shadow 0.25s`,
        boxShadow: hover ? `0 12px 32px ${t.accent}22` : 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <span style={{
          fontFamily: 'var(--font-crimson), serif', fontSize: 11, color: t.accent,
          letterSpacing: '0.25em', textTransform: 'uppercase',
        }}>{essay.period}</span>
        <span style={{ fontSize: 22, opacity: 0.85 }}>{essay.icon}</span>
      </div>

      <h3 style={{
        fontFamily: 'var(--font-playfair), serif', fontSize: 22, fontWeight: 700,
        color: t.text, lineHeight: 1.2, margin: 0,
      }}>{essay.title}</h3>

      <p style={{
        fontFamily: 'var(--font-crimson), serif', fontSize: 13, color: t.accent,
        margin: 0, fontStyle: 'italic', letterSpacing: '0.01em',
      }}>{essay.subtitle}</p>

      <p style={{
        fontFamily: 'var(--font-crimson), serif', fontSize: 15, color: t.textMuted,
        lineHeight: 1.65, margin: 0,
      }}>{essay.excerpt}</p>

      <div style={{
        marginTop: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 12, paddingTop: 12, borderTop: `1px solid ${t.border}`,
      }}>
        <span style={{
          fontFamily: 'var(--font-crimson), serif', fontSize: 11, color: t.textMuted,
          letterSpacing: '0.15em', textTransform: 'uppercase',
        }}>{essay.readingTime} de lectura</span>
        <span style={{
          fontFamily: 'var(--font-crimson), serif', fontSize: 11, color: t.accent,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>
          Leer ensayo <span style={{ fontSize: 14 }}>→</span>
        </span>
      </div>
    </button>
  );
}

function EssayModal({ essay, onClose }: { essay: Essay; onClose: () => void }) {
  const { t } = useTheme();
  const isMobile = useIsMobile();

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        background: 'rgba(0,0,0,0.72)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        display: 'flex', alignItems: isMobile ? 'stretch' : 'center', justifyContent: 'center',
        padding: isMobile ? 0 : 24,
        animation: 'fadeIn 0.25s ease',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: t.bgCard,
          border: isMobile ? 'none' : `1px solid ${t.border}`,
          width: '100%',
          maxWidth: isMobile ? '100%' : 780,
          height: isMobile ? '100dvh' : 'auto',
          maxHeight: isMobile ? '100dvh' : '90vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          boxShadow: isMobile ? 'none' : `0 30px 80px rgba(0,0,0,0.6)`,
          animation: isMobile ? 'slideUp 0.3s ease' : 'fadeIn 0.3s ease',
          overflow: 'hidden',
        }}
      >
        <div style={{
          flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
          padding: isMobile ? '12px 16px' : '14px 20px',
          background: t.bgCard,
          borderBottom: `1px solid ${t.border}`,
          paddingTop: isMobile ? 'max(12px, env(safe-area-inset-top))' : undefined,
        }}>
          <span style={{
            fontFamily: 'var(--font-crimson), serif', fontSize: 11, color: t.accent,
            letterSpacing: '0.25em', textTransform: 'uppercase',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>{essay.period} · Ensayo</span>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            style={{
              flexShrink: 0,
              width: 36, height: 36, borderRadius: '50%',
              background: t.bg, border: `1px solid ${t.border}`,
              color: t.text, cursor: 'pointer',
              fontSize: 20, lineHeight: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >×</button>
        </div>

        <div style={{
          flex: 1,
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'contain',
        }}>
          <div style={{
            padding: isMobile ? '24px 20px 36px' : '44px 60px 52px',
            paddingBottom: isMobile ? 'calc(40px + env(safe-area-inset-bottom))' : 52,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <span style={{ fontSize: isMobile ? 28 : 34 }}>{essay.icon}</span>
              <span style={{
                fontFamily: 'var(--font-crimson), serif', fontSize: 11, color: t.textMuted,
                letterSpacing: '0.22em', textTransform: 'uppercase',
              }}>{essay.readingTime} de lectura</span>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: isMobile ? 26 : 38, color: t.text, fontWeight: 700,
              lineHeight: 1.15, margin: '0 0 10px',
            }}>{essay.title}</h3>

            <p style={{
              fontFamily: 'var(--font-crimson), serif',
              fontSize: isMobile ? 16 : 18, color: t.accent,
              fontStyle: 'italic', margin: '0 0 20px', lineHeight: 1.5,
            }}>{essay.subtitle}</p>

            <div style={{ width: 48, height: 2, background: t.accent, marginBottom: 26 }} />

            <p style={{
              fontFamily: 'var(--font-crimson), serif',
              fontSize: isMobile ? 16 : 18,
              color: t.text, lineHeight: 1.75, fontStyle: 'italic',
              margin: '0 0 30px',
            }}>{essay.excerpt}</p>

            {essay.sections.map((s, idx) => (
              <div key={idx} style={{ marginBottom: 24 }}>
                {s.heading && (
                  <h4 style={{
                    fontFamily: 'var(--font-playfair), serif',
                    fontSize: isMobile ? 18 : 20,
                    color: t.accent, fontWeight: 700,
                    margin: '0 0 10px', letterSpacing: '0.01em',
                  }}>{s.heading}</h4>
                )}
                <p style={{
                  fontFamily: 'var(--font-crimson), serif',
                  fontSize: isMobile ? 16 : 17,
                  color: t.textMuted, lineHeight: 1.8, margin: 0,
                }}>{s.body}</p>
              </div>
            ))}

            {essay.quote && (
              <blockquote style={{
                margin: '30px 0',
                borderLeft: `3px solid ${t.accent}`,
                padding: '14px 0 14px 22px',
                background: `${t.accent}08`,
              }}>
                <p style={{
                  fontFamily: 'var(--font-playfair), serif',
                  fontSize: isMobile ? 17 : 19, fontStyle: 'italic',
                  color: t.text, margin: '0 0 10px', lineHeight: 1.55,
                }}>{essay.quote.text}</p>
                <footer style={{
                  fontFamily: 'var(--font-crimson), serif',
                  fontSize: 12, color: t.textMuted, letterSpacing: '0.05em',
                }}>— {essay.quote.ref}</footer>
              </blockquote>
            )}

            {essay.sources.length > 0 && (
              <div style={{ marginTop: 30, borderTop: `1px solid ${t.border}`, paddingTop: 20 }}>
                <div style={{
                  fontFamily: 'var(--font-crimson), serif', fontSize: 11, color: t.accent,
                  letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 10,
                }}>Para profundizar</div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {essay.sources.map(s => (
                    <li key={s.href}>
                      <a
                        href={s.href} target="_blank" rel="noopener noreferrer"
                        style={{
                          fontFamily: 'var(--font-crimson), serif', fontSize: 13,
                          color: t.textMuted, textDecoration: 'none',
                          display: 'inline-flex', alignItems: 'center', gap: 6,
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.color = t.accent; e.currentTarget.style.textDecoration = 'underline'; }}
                        onMouseLeave={e => { e.currentTarget.style.color = t.textMuted; e.currentTarget.style.textDecoration = 'none'; }}
                      >
                        🔗 {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
