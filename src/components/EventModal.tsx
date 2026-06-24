'use client';

import { useTheme } from '@/context/ThemeContext';
import { useIsMobile } from '@/lib/useMediaQuery';
import type { TimelineEvent } from '@/data/centuries';

export default function EventModal({ event, prefix, onClose }: { event: TimelineEvent; prefix: string; onClose: () => void }) {
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
          maxWidth: isMobile ? '100%' : 760,
          height: isMobile ? '100dvh' : 'auto',
          maxHeight: isMobile ? '100dvh' : '88vh',
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
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 12,
          padding: isMobile ? '12px 16px' : '14px 20px',
          background: t.bgCard,
          borderBottom: `1px solid ${t.border}`,
          paddingTop: isMobile ? 'max(12px, env(safe-area-inset-top))' : undefined,
        }}>
          <span style={{
            fontFamily: 'var(--font-crimson), serif', fontSize: 11, color: t.accent,
            letterSpacing: '0.25em', textTransform: 'uppercase',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>{event.yearLabel} · {prefix}</span>
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
            padding: isMobile ? '24px 20px 32px' : '40px 56px 44px',
            paddingBottom: isMobile ? 'calc(40px + env(safe-area-inset-bottom))' : 44,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <span style={{ fontSize: isMobile ? 28 : 34 }}>{event.icon}</span>
              <h3 style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: isMobile ? 24 : 36, color: t.text, fontWeight: 700,
                lineHeight: 1.15, margin: 0,
              }}>{event.title}</h3>
            </div>
            <div style={{ width: 48, height: 2, background: t.accent, marginBottom: 22 }} />

            <p style={{
              fontFamily: 'var(--font-crimson), serif',
              fontSize: isMobile ? 16 : 18,
              color: t.text, lineHeight: 1.7, fontStyle: 'italic',
              margin: '0 0 28px',
            }}>{event.intro}</p>

            {event.paragraphs.map((p, idx) => (
              <div key={idx} style={{ marginBottom: 22 }}>
                {p.heading && (
                  <h4 style={{
                    fontFamily: 'var(--font-playfair), serif',
                    fontSize: isMobile ? 17 : 19,
                    color: t.accent, fontWeight: 700,
                    margin: '0 0 8px', letterSpacing: '0.01em',
                  }}>{p.heading}</h4>
                )}
                <p style={{
                  fontFamily: 'var(--font-crimson), serif',
                  fontSize: isMobile ? 15 : 16,
                  color: t.textMuted, lineHeight: 1.75, margin: 0,
                }}>{p.body}</p>
              </div>
            ))}

            {event.quote && (
              <blockquote style={{
                margin: '28px 0',
                borderLeft: `3px solid ${t.accent}`,
                padding: '12px 0 12px 20px',
                background: `${t.accent}08`,
              }}>
                <p style={{
                  fontFamily: 'var(--font-playfair), serif',
                  fontSize: isMobile ? 17 : 19, fontStyle: 'italic',
                  color: t.text, margin: '0 0 10px', lineHeight: 1.5,
                }}>{event.quote.text}</p>
                <footer style={{
                  fontFamily: 'var(--font-crimson), serif',
                  fontSize: 12, color: t.textMuted, letterSpacing: '0.05em',
                }}>— {event.quote.ref}</footer>
              </blockquote>
            )}

            {event.legacy && (
              <div style={{
                marginTop: 28,
                background: `${t.accent}10`,
                border: `1px solid ${t.accent}30`,
                padding: '16px 20px',
              }}>
                <div style={{
                  fontFamily: 'var(--font-crimson), serif', fontSize: 11, color: t.accent,
                  letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 8,
                }}>Por qué importa</div>
                <p style={{
                  fontFamily: 'var(--font-crimson), serif',
                  fontSize: isMobile ? 15 : 16,
                  color: t.text, lineHeight: 1.7, margin: 0,
                }}>{event.legacy}</p>
              </div>
            )}

            {event.sources.length > 0 && (
              <div style={{ marginTop: 28, borderTop: `1px solid ${t.border}`, paddingTop: 18 }}>
                <div style={{
                  fontFamily: 'var(--font-crimson), serif', fontSize: 11, color: t.accent,
                  letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 10,
                }}>Para profundizar</div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {event.sources.map(s => (
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
