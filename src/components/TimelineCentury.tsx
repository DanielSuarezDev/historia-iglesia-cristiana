'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useIsMobile } from '@/lib/useMediaQuery';
import type { CenturyData, TimelineEvent } from '@/data/centuries';
import EventModal from './EventModal';

interface TimelineCenturyProps {
  century: CenturyData;
  labelPrefix?: string;
  forceVertical?: boolean;
}

export default function TimelineCentury({ century, labelPrefix, forceVertical }: TimelineCenturyProps) {
  const { t } = useTheme();
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  useEffect(() => {
    setVisible(false);
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, [century.num]);

  useEffect(() => {
    document.body.style.overflow = openIdx !== null ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpenIdx(null); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [openIdx]);

  const events = century.events;
  const event = openIdx !== null ? events[openIdx] : null;
  const prefix = labelPrefix ?? `Siglo ${century.roman}`;
  const useVertical = isMobile || forceVertical;

  return (
    <div ref={sectionRef} style={{ position: 'relative' }}>
      <div style={{ marginBottom: isMobile ? 28 : 40, opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease' }}>
        <h3 style={{
          fontFamily: 'var(--font-playfair), serif',
          fontSize: isMobile ? 22 : 30, color: t.text, margin: '0 0 8px',
          fontWeight: 700, lineHeight: 1.2,
        }}>
          {prefix} · {century.title} <span style={{ color: t.textMuted, fontWeight: 400 }}>({century.range})</span>
        </h3>
        <p style={{
          fontFamily: 'var(--font-crimson), serif',
          fontSize: isMobile ? 14 : 16, color: t.textMuted,
          maxWidth: 720, lineHeight: 1.7, margin: 0,
        }}>
          {century.intro}
        </p>
      </div>

      {useVertical ? (
        <VerticalTimeline events={events} visible={visible} onOpen={setOpenIdx} hoverIdx={hoverIdx} setHoverIdx={setHoverIdx} />
      ) : (
        <HorizontalTimeline events={events} visible={visible} onOpen={setOpenIdx} hoverIdx={hoverIdx} setHoverIdx={setHoverIdx} />
      )}

      <p style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 12, color: t.textMuted, marginTop: isMobile ? 24 : 32, textAlign: 'center', fontStyle: 'italic' }}>
        Pulsa cualquier evento para leer su explicación completa.
      </p>

      {event && (
        <EventModal event={event} prefix={prefix} onClose={() => setOpenIdx(null)} />
      )}
    </div>
  );
}

interface TLProps {
  events: TimelineEvent[];
  visible: boolean;
  onOpen: (i: number) => void;
  hoverIdx: number | null;
  setHoverIdx: (i: number | null) => void;
}

function HorizontalTimeline({ events, visible, onOpen, hoverIdx, setHoverIdx }: TLProps) {
  const { t } = useTheme();
  return (
    <div style={{ position: 'relative', padding: '72px 0 72px' }}>
      <div style={{
        position: 'absolute', left: '6%', right: '6%', top: '50%', height: 2,
        background: `linear-gradient(to right, transparent, ${t.accent}80 10%, ${t.accent}80 90%, transparent)`,
        transform: 'translateY(-1px)',
        opacity: visible ? 1 : 0, transition: 'opacity 1s ease',
      }} />

      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${events.length}, 1fr)`, position: 'relative' }}>
        {events.map((ev, i) => {
          const above = i % 2 === 0;
          const isHover = hoverIdx === i;
          return (
            <button
              key={`${ev.year}-${i}`}
              onClick={() => onOpen(i)}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
              aria-label={`Abrir evento del año ${ev.year}: ${ev.title}`}
              style={{
                position: 'relative',
                background: 'none', border: 'none', cursor: 'pointer',
                padding: 0,
                minHeight: 320,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(20px)',
                transition: `opacity 0.7s ease ${0.15 + i * 0.12}s, transform 0.7s ease ${0.15 + i * 0.12}s`,
              }}
            >
              <div style={{
                position: 'absolute',
                [above ? 'bottom' : 'top']: 'calc(50% + 28px)',
                left: '50%', transform: `translateX(-50%) ${isHover ? 'translateY(-4px)' : 'translateY(0)'}`,
                width: 'min(220px, 90%)',
                background: t.bgCard,
                border: `1px solid ${isHover ? t.accent : t.border}`,
                padding: '16px 18px',
                textAlign: 'center',
                transition: 'all 0.25s ease',
                boxShadow: isHover ? `0 12px 32px ${t.accent}25` : 'none',
              }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>{ev.icon}</div>
                <div style={{
                  fontFamily: 'var(--font-playfair), serif', fontSize: 17, fontWeight: 700,
                  color: t.text, lineHeight: 1.25, marginBottom: 6,
                }}>{ev.title}</div>
                <div style={{
                  fontFamily: 'var(--font-crimson), serif', fontSize: 12, color: t.textMuted,
                  lineHeight: 1.5,
                }}>{ev.short}</div>
              </div>

              <div style={{
                position: 'absolute',
                [above ? 'bottom' : 'top']: '50%',
                width: 1, height: 24,
                background: isHover ? t.accent : `${t.accent}60`,
                transition: 'background 0.25s',
              }} />

              <div style={{
                position: 'relative', width: 18, height: 18, borderRadius: '50%',
                background: t.bg, border: `2px solid ${t.accent}`,
                boxShadow: isHover ? `0 0 0 6px ${t.accent}25` : `0 0 0 3px ${t.accent}10`,
                transition: 'box-shadow 0.25s',
              }}>
                <div style={{
                  position: 'absolute', inset: 4, borderRadius: '50%',
                  background: isHover ? t.accent : 'transparent',
                  transition: 'background 0.25s',
                }} />
              </div>

              <div style={{
                position: 'absolute',
                [above ? 'top' : 'bottom']: 'calc(50% + 22px)',
                fontFamily: 'var(--font-playfair), serif',
                fontSize: 22, fontWeight: 700,
                color: isHover ? t.accent : t.text,
                letterSpacing: '0.02em',
                transition: 'color 0.25s',
              }}>{ev.yearLabel}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function VerticalTimeline({ events, visible, onOpen }: TLProps) {
  const { t } = useTheme();
  const RAIL = 44;
  const NODE = 14;
  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute', left: RAIL / 2 - 1, top: 24, bottom: 24, width: 2,
        background: `linear-gradient(to bottom, transparent, ${t.accent}90 6%, ${t.accent}90 94%, transparent)`,
        opacity: visible ? 1 : 0, transition: 'opacity 1s ease',
        zIndex: 0,
      }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {events.map((ev, i) => (
          <div
            key={`${ev.year}-${i}`}
            style={{
              display: 'flex', alignItems: 'stretch',
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateX(12px)',
              transition: `opacity 0.5s ease ${0.1 + i * 0.1}s, transform 0.5s ease ${0.1 + i * 0.1}s`,
            }}
          >
            <div style={{ width: RAIL, flexShrink: 0, position: 'relative' }}>
              <div style={{
                position: 'absolute',
                left: RAIL / 2 - NODE / 2,
                top: 22,
                width: NODE, height: NODE, borderRadius: '50%',
                background: t.accent,
                boxShadow: `0 0 0 4px ${t.bgSec}, 0 0 0 5px ${t.accent}40`,
                zIndex: 1,
              }} />
            </div>

            <button
              onClick={() => onOpen(i)}
              aria-label={`Abrir evento del año ${ev.year}: ${ev.title}`}
              style={{
                flex: 1,
                background: t.bgCard,
                border: `1px solid ${t.border}`,
                borderLeft: `3px solid ${t.accent}`,
                padding: '14px 16px',
                textAlign: 'left',
                cursor: 'pointer',
                font: 'inherit',
                color: 'inherit',
                position: 'relative',
                minWidth: 0,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 4 }}>
                <span style={{
                  fontFamily: 'var(--font-playfair), serif', fontSize: 18, fontWeight: 700,
                  color: t.accent, letterSpacing: '0.02em',
                }}>{ev.yearLabel}</span>
                <span style={{ fontSize: 16, opacity: 0.85 }}>{ev.icon}</span>
              </div>
              <div style={{
                fontFamily: 'var(--font-playfair), serif', fontSize: 16, fontWeight: 700,
                color: t.text, lineHeight: 1.25, marginBottom: 4,
              }}>{ev.title}</div>
              <div style={{
                fontFamily: 'var(--font-crimson), serif', fontSize: 13, color: t.textMuted,
                lineHeight: 1.55, marginBottom: 10,
              }}>{ev.short}</div>
              <div style={{
                fontFamily: 'var(--font-crimson), serif', fontSize: 10.5, color: t.accent,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                Leer más <span style={{ fontSize: 13 }}>→</span>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
