'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useIsMobile } from '@/lib/useMediaQuery';
import TimelineCentury1 from './TimelineCentury1';

type TabKey = 'siglos' | 'persecuciones';

const TABS: { key: TabKey; label: string; soon?: boolean }[] = [
  { key: 'siglos', label: 'Siglos' },
  { key: 'persecuciones', label: 'Persecuciones', soon: true },
];

const CENTURIES = Array.from({ length: 21 }, (_, i) => ({
  num: i + 1,
  roman: toRoman(i + 1),
  available: i === 0,
}));

function toRoman(n: number): string {
  const map: [number, string][] = [
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
  ];
  let res = '';
  let x = n;
  for (const [v, s] of map) {
    while (x >= v) { res += s; x -= v; }
  }
  return res;
}

export default function Timelines() {
  const { t } = useTheme();
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [tab, setTab] = useState<TabKey>('siglos');
  const [century, setCentury] = useState(1);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="timelines"
      ref={sectionRef}
      style={{ background: t.bgSec, padding: isMobile ? '64px 0' : '100px 0', position: 'relative' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '0 18px' : '0 48px' }}>

        {/* Section header */}
        <div style={{ marginBottom: isMobile ? 28 : 40, opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 16, marginBottom: 16 }}>
            <div style={{ width: 4, height: isMobile ? 36 : 48, background: t.accent, flexShrink: 0 }} />
            <div style={{ minWidth: 0 }}>
              <p style={{ fontFamily: 'var(--font-crimson), serif', color: t.accent, letterSpacing: '0.25em', fontSize: isMobile ? 11 : 12, textTransform: 'uppercase', margin: '0 0 6px' }}>
                Sección · Líneas de Tiempo
              </p>
              <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: isMobile ? 26 : 40, color: t.text, margin: 0, fontWeight: 700, lineHeight: 1.15 }}>
                Recorridos por la Historia
              </h2>
            </div>
          </div>
          <p style={{ fontFamily: 'var(--font-crimson), serif', fontSize: isMobile ? 15 : 17, color: t.textMuted, maxWidth: 720, lineHeight: 1.7, marginLeft: isMobile ? 0 : 20 }}>
            Líneas de tiempo organizadas por temas. Cada hito es un punto de entrada a su contexto, sus protagonistas y su huella.
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex', gap: 0, borderBottom: `1px solid ${t.border}`,
          marginBottom: isMobile ? 24 : 36,
          overflowX: 'auto', WebkitOverflowScrolling: 'touch',
          opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease 0.1s',
        }}>
          {TABS.map(tb => {
            const active = tab === tb.key;
            const disabled = !!tb.soon;
            return (
              <button
                key={tb.key}
                onClick={() => !disabled && setTab(tb.key)}
                disabled={disabled}
                style={{
                  background: 'none', border: 'none',
                  borderBottom: `2px solid ${active ? t.accent : 'transparent'}`,
                  padding: isMobile ? '12px 16px' : '14px 24px',
                  cursor: disabled ? 'not-allowed' : 'pointer',
                  fontFamily: 'var(--font-crimson), serif',
                  fontSize: isMobile ? 13 : 14,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: active ? t.accent : disabled ? t.textMuted : t.text,
                  opacity: disabled ? 0.55 : 1,
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
              >
                {tb.label}
                {tb.soon && (
                  <span style={{
                    fontSize: 9, background: `${t.accent}25`, color: t.accent,
                    padding: '2px 6px', borderRadius: 2, letterSpacing: '0.15em',
                  }}>PRONTO</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        {tab === 'siglos' && (
          <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease 0.2s' }}>
            {/* Century chips */}
            <div style={{
              display: 'flex', gap: 8, flexWrap: 'wrap',
              marginBottom: isMobile ? 24 : 32,
            }}>
              {CENTURIES.map(c => {
                const active = century === c.num;
                const disabled = !c.available;
                return (
                  <button
                    key={c.num}
                    onClick={() => c.available && setCentury(c.num)}
                    disabled={disabled}
                    title={disabled ? 'Próximamente' : `Siglo ${c.roman}`}
                    style={{
                      background: active ? t.accent : 'transparent',
                      border: `1px solid ${active ? t.accent : t.border}`,
                      color: active ? t.bg : disabled ? t.textMuted : t.text,
                      padding: '6px 12px',
                      minWidth: 44,
                      fontFamily: 'var(--font-playfair), serif',
                      fontSize: 13,
                      fontWeight: active ? 700 : 500,
                      cursor: disabled ? 'not-allowed' : 'pointer',
                      opacity: disabled ? 0.4 : 1,
                      transition: 'all 0.2s',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {c.roman}
                  </button>
                );
              })}
            </div>

            {century === 1 && <TimelineCentury1 />}
          </div>
        )}

        {tab === 'persecuciones' && (
          <ComingSoon
            title="Persecuciones"
            text="Próximamente: una línea de tiempo dedicada a las grandes persecuciones contra los cristianos, desde Nerón (64) hasta Diocleciano (303–311), pasando por las olas locales del siglo II y III."
          />
        )}
      </div>
    </section>
  );
}

function ComingSoon({ title, text }: { title: string; text: string }) {
  const { t } = useTheme();
  const isMobile = useIsMobile();
  return (
    <div style={{
      background: t.bgCard, border: `1px dashed ${t.border}`,
      padding: isMobile ? '32px 22px' : '56px 48px',
      textAlign: 'center',
    }}>
      <div style={{
        fontFamily: 'var(--font-crimson), serif', fontSize: 11, color: t.accent,
        letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 12,
      }}>En preparación</div>
      <h3 style={{
        fontFamily: 'var(--font-playfair), serif', fontSize: isMobile ? 22 : 28,
        color: t.text, margin: '0 0 12px', fontWeight: 700,
      }}>{title}</h3>
      <p style={{
        fontFamily: 'var(--font-crimson), serif', fontSize: isMobile ? 14 : 16,
        color: t.textMuted, lineHeight: 1.7, maxWidth: 560, margin: '0 auto',
      }}>{text}</p>
    </div>
  );
}
