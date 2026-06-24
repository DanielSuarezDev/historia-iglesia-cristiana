'use client';

import { useEffect, useMemo, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useIsMobile } from '@/lib/useMediaQuery';
import { CENTURIES_DATA, type TimelineEvent } from '@/data/centuries';
import { CONCILIOS } from '@/data/concilios';
import { ERRORES } from '@/data/errores';
import { EVENTS as PERSECUCIONES } from './TimelinePersecuciones';
import { LUGARES, ENLACES, COSTA_MEDITERRANEO, ISLAS, type Lugar, type Fuente } from '@/data/lugares';
import EventModal from './EventModal';

// --- Proyección equirectangular sobre la cuenca mediterránea ---
const LNG0 = -10, LNG1 = 42, LAT0 = 20, LAT1 = 54;
const W = 1040, H = 680;
const projX = (lng: number) => ((lng - LNG0) / (LNG1 - LNG0)) * W;
const projY = (lat: number) => ((LAT1 - lat) / (LAT1 - LAT0)) * H;

const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII'];
function romanCentury(year: number): string {
  const c = Math.floor((year - 1) / 100) + 1;
  return ROMAN[c] ?? String(c);
}

// Etiqueta editorial por fuente, para el contexto del modal.
const FUENTE_LABEL: Record<Fuente, string> = {
  siglos: 'Siglos', concilios: 'Concilios', errores: 'Desviaciones', persecuciones: 'Persecuciones',
};

// Índices por (fuente -> año -> evento). Persecuciones es estructuralmente
// compatible con TimelineEvent (tiene todos sus campos requeridos).
function buildIndex(): Record<Fuente, Record<number, TimelineEvent>> {
  const siglos: Record<number, TimelineEvent> = {};
  for (let c = 1; c <= 13; c++) {
    const cd = CENTURIES_DATA[c];
    if (!cd) continue;
    for (const ev of cd.events) siglos[ev.year] = ev;
  }
  const concilios: Record<number, TimelineEvent> = {};
  for (const ev of CONCILIOS.events) concilios[ev.year] = ev;
  const errores: Record<number, TimelineEvent> = {};
  for (const ev of ERRORES.events) errores[ev.year] = ev;
  const persecuciones: Record<number, TimelineEvent> = {};
  for (const ev of PERSECUCIONES) persecuciones[ev.year] = ev;
  return { siglos, concilios, errores, persecuciones };
}

interface CityData {
  lugar: Lugar;
  x: number;
  y: number;
  events: { event: TimelineEvent; source: Fuente }[];
}

export default function MapaHistorico() {
  const { t } = useTheme();
  const isMobile = useIsMobile();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [open, setOpen] = useState<{ event: TimelineEvent; prefix: string } | null>(null);

  const cities = useMemo<CityData[]>(() => {
    const idx = buildIndex();
    return LUGARES.map(lugar => {
      const events = ENLACES
        .filter(e => e.placeId === lugar.id)
        .map(e => { const event = idx[e.source]?.[e.year]; return event ? { event, source: e.source } : null; })
        .filter((x): x is { event: TimelineEvent; source: Fuente } => x !== null)
        .sort((a, b) => a.event.year - b.event.year);
      return { lugar, x: projX(lugar.lng) + (lugar.dx ?? 0), y: projY(lugar.lat) + (lugar.dy ?? 0), events };
    }).filter(c => c.events.length > 0);
  }, []);

  const totalHitos = useMemo(() => cities.reduce((n, c) => n + c.events.length, 0), [cities]);

  const selected = selectedId ? cities.find(c => c.lugar.id === selectedId) ?? null : null;

  // Bloquear scroll y cerrar con Escape mientras el modal está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [open]);

  const coastPath = useMemo(() => {
    const pts = COSTA_MEDITERRANEO.map(([lng, lat]) => `${projX(lng).toFixed(1)},${projY(lat).toFixed(1)}`);
    return `M${pts.join('L')}Z`;
  }, []);

  const radiusOf = (count: number) => Math.min(30, 11 + Math.sqrt(count) * 5);

  return (
    <div style={{ position: 'relative' }}>
      {/* Sub-encabezado */}
      <div style={{ marginBottom: isMobile ? 20 : 28 }}>
        <h3 style={{
          fontFamily: 'var(--font-playfair), serif',
          fontSize: isMobile ? 22 : 30, color: t.text, margin: '0 0 8px',
          fontWeight: 700, lineHeight: 1.2,
        }}>
          Mapa de la cristiandad <span style={{ color: t.textMuted, fontWeight: 400 }}>(siglos I – XIII)</span>
        </h3>
        <p style={{
          fontFamily: 'var(--font-crimson), serif',
          fontSize: isMobile ? 14 : 16, color: t.textMuted,
          maxWidth: 720, lineHeight: 1.7, margin: 0,
        }}>
          Cada ciudad reúne los hechos que ocurrieron allí. {isMobile ? 'Toca' : 'Haz clic en'} un lugar para ver
          qué pasó y en qué siglo, y abrir su historia completa.
        </p>
        <p style={{
          fontFamily: 'var(--font-crimson), serif', fontSize: 12, color: t.accent,
          letterSpacing: '0.18em', textTransform: 'uppercase', margin: '12px 0 0',
        }}>
          {totalHitos} hitos · {cities.length} lugares
        </p>
      </div>

      {isMobile ? (
        <MobileList cities={cities} onOpen={(event, prefix) => setOpen({ event, prefix })} />
      ) : (
        <div style={{ display: 'flex', gap: 20, alignItems: 'stretch' }}>
          {/* Mapa SVG */}
          <div style={{
            flex: '1 1 0', minWidth: 0,
            background: t.bg, border: `1px solid ${t.border}`,
            borderRadius: 4, overflow: 'hidden',
          }}>
            <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }} role="img"
              aria-label="Mapa del Mediterráneo con los lugares de la historia cristiana">
              {/* Mar */}
              <path d={coastPath} fill={`${t.accent}1A`} stroke={`${t.accent}55`} strokeWidth={1.2} />
              {/* Islas */}
              {ISLAS.map((is, i) => (
                <circle key={i} cx={projX(is.lng)} cy={projY(is.lat)} r={is.r}
                  fill={t.bg} stroke={`${t.accent}55`} strokeWidth={1} />
              ))}
              {/* Etiquetas de región */}
              {REGION_LABELS.map((r, i) => (
                <text key={i} x={projX(r.lng)} y={projY(r.lat)}
                  textAnchor="middle"
                  style={{ fontFamily: 'var(--font-crimson), serif', fontSize: r.size ?? 14, letterSpacing: '0.18em' }}
                  fill={t.textMuted} opacity={0.5}>{r.text}</text>
              ))}

              {/* Marcadores */}
              {cities.map(c => {
                const isSel = selectedId === c.lugar.id;
                const isHov = hoverId === c.lugar.id;
                const r = radiusOf(c.events.length);
                const showLabel = isSel || isHov || c.events.length >= 4;
                return (
                  <g key={c.lugar.id}
                    transform={`translate(${c.x},${c.y})`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setSelectedId(c.lugar.id)}
                    onMouseEnter={() => setHoverId(c.lugar.id)}
                    onMouseLeave={() => setHoverId(null)}>
                    {(isSel || isHov) && (
                      <circle r={r + 6} fill="none" stroke={t.accent} strokeWidth={1} opacity={0.5} />
                    )}
                    <circle r={r}
                      fill={isSel ? t.accent : `${t.accent}D0`}
                      stroke={isSel ? t.text : t.bg} strokeWidth={isSel ? 2 : 1.5} />
                    {c.events.length > 1 && (
                      <text textAnchor="middle" dy="0.34em"
                        style={{ fontFamily: 'var(--font-playfair), serif', fontSize: Math.max(12, r * 0.8), fontWeight: 700, pointerEvents: 'none' }}
                        fill={t.bg}>{c.events.length}</text>
                    )}
                    {showLabel && (
                      <text x={0} y={-r - 6} textAnchor="middle"
                        style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 15, fontWeight: 700, pointerEvents: 'none' }}
                        fill={t.text} stroke={t.bg} strokeWidth={3} paintOrder="stroke">{c.lugar.name}</text>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Panel lateral */}
          <div style={{
            flex: '0 0 350px', maxWidth: 350,
            background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 4,
            padding: '20px 22px', alignSelf: 'flex-start',
            position: 'sticky', top: 20, maxHeight: '80vh', overflowY: 'auto',
          }}>
            {selected ? (
              <CityPanel city={selected} onOpen={(event, prefix) => setOpen({ event, prefix })} />
            ) : (
              <div>
                <h4 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 20, color: t.text, margin: '0 0 10px' }}>
                  Elige un lugar
                </h4>
                <p style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 15, color: t.textMuted, lineHeight: 1.6, margin: '0 0 16px' }}>
                  Pasa el cursor por el mapa y haz clic en una ciudad. El número dentro de cada punto indica cuántos hitos ocurrieron allí.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {[...cities].sort((a, b) => b.events.length - a.events.length).slice(0, 8).map(c => (
                    <button key={c.lugar.id} onClick={() => setSelectedId(c.lugar.id)}
                      onMouseEnter={() => setHoverId(c.lugar.id)} onMouseLeave={() => setHoverId(null)}
                      style={{
                        background: 'transparent', border: `1px solid ${t.border}`, color: t.text,
                        fontFamily: 'var(--font-crimson), serif', fontSize: 13, cursor: 'pointer',
                        padding: '5px 10px', borderRadius: 2,
                      }}>
                      {c.lugar.name} <span style={{ color: t.accent }}>{c.events.length}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {open && (
        <EventModal event={open.event} prefix={open.prefix} onClose={() => setOpen(null)} />
      )}
    </div>
  );
}

function CityPanel({ city, onOpen }: { city: CityData; onOpen: (event: TimelineEvent, prefix: string) => void }) {
  const { t } = useTheme();
  // Agrupar por siglo (romano) preservando el orden cronológico.
  const groups: { century: string; items: { event: TimelineEvent; source: Fuente }[] }[] = [];
  for (const it of city.events) {
    const century = romanCentury(it.event.year);
    const last = groups[groups.length - 1];
    if (last && last.century === century) last.items.push(it);
    else groups.push({ century, items: [it] });
  }
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 11, color: t.accent, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 4 }}>
        {city.lugar.region}
      </div>
      <h4 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 24, color: t.text, margin: '0 0 2px', fontWeight: 700 }}>
        {city.lugar.name}
      </h4>
      <div style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 13, color: t.textMuted, marginBottom: 16 }}>
        {city.lugar.modernName} · {city.events.length} {city.events.length === 1 ? 'hito' : 'hitos'}
      </div>
      {groups.map(g => (
        <div key={g.century} style={{ marginBottom: 16 }}>
          <div style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 11, color: t.textMuted, letterSpacing: '0.2em', textTransform: 'uppercase', borderBottom: `1px solid ${t.border}`, paddingBottom: 4, marginBottom: 8 }}>
            Siglo {g.century}
          </div>
          {g.items.map((it, i) => (
            <button key={`${it.source}-${it.event.year}-${i}`}
              onClick={() => onOpen(it.event, `${city.lugar.name} · ${FUENTE_LABEL[it.source]}`)}
              style={{
                display: 'block', width: '100%', textAlign: 'left', cursor: 'pointer',
                background: 'transparent', border: 'none', borderLeft: `2px solid ${t.accent}`,
                padding: '4px 0 8px 12px', marginBottom: 8, color: 'inherit', font: 'inherit',
              }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontSize: 15 }}>{it.event.icon}</span>
                <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 13, fontWeight: 700, color: t.accent }}>{it.event.yearLabel}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 15, fontWeight: 700, color: t.text, lineHeight: 1.25, margin: '2px 0' }}>{it.event.title}</div>
              <div style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 12.5, color: t.textMuted, lineHeight: 1.5 }}>{it.event.short}</div>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

function MobileList({ cities, onOpen }: { cities: CityData[]; onOpen: (event: TimelineEvent, prefix: string) => void }) {
  const { t } = useTheme();
  const [openId, setOpenId] = useState<string | null>(null);
  const ordered = [...cities].sort((a, b) => b.events.length - a.events.length);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {ordered.map(c => {
        const isOpen = openId === c.lugar.id;
        return (
          <div key={c.lugar.id} style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderLeft: `3px solid ${t.accent}` }}>
            <button onClick={() => setOpenId(isOpen ? null : c.lugar.id)}
              aria-expanded={isOpen}
              style={{
                display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between',
                gap: 10, padding: '12px 14px', background: 'transparent', border: 'none',
                cursor: 'pointer', color: 'inherit', font: 'inherit', textAlign: 'left',
              }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 17, fontWeight: 700, color: t.text }}>{c.lugar.name}</div>
                <div style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 12, color: t.textMuted }}>{c.lugar.region}</div>
              </div>
              <span style={{
                flexShrink: 0, minWidth: 26, height: 26, borderRadius: '50%', background: t.accent, color: t.bg,
                fontFamily: 'var(--font-playfair), serif', fontSize: 13, fontWeight: 700,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}>{c.events.length}</span>
            </button>
            {isOpen && (
              <div style={{ padding: '0 14px 12px' }}>
                {c.events.map((it, i) => (
                  <button key={`${it.source}-${it.event.year}-${i}`}
                    onClick={() => onOpen(it.event, `${c.lugar.name} · ${FUENTE_LABEL[it.source]}`)}
                    style={{
                      display: 'block', width: '100%', textAlign: 'left', cursor: 'pointer',
                      background: 'transparent', border: 'none', borderTop: `1px solid ${t.border}`,
                      padding: '10px 0', color: 'inherit', font: 'inherit',
                    }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                      <span style={{ fontSize: 15 }}>{it.event.icon}</span>
                      <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 13, fontWeight: 700, color: t.accent }}>{it.event.yearLabel}</span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 15, fontWeight: 700, color: t.text, lineHeight: 1.25, margin: '2px 0' }}>{it.event.title}</div>
                    <div style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 12.5, color: t.textMuted, lineHeight: 1.5 }}>{it.event.short}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

const REGION_LABELS: { text: string; lng: number; lat: number; size?: number }[] = [
  { text: 'MAR MEDITERRÁNEO', lng: 17.5, lat: 34.5, size: 17 },
  { text: 'HISPANIA', lng: -6.5, lat: 41.5 },
  { text: 'GALIA', lng: 2.0, lat: 47.5 },
  { text: 'ITALIA', lng: 13.7, lat: 42.4, size: 12 },
  { text: 'GRECIA', lng: 21.6, lat: 39.6, size: 12 },
  { text: 'ÁFRICA', lng: 7.5, lat: 31.0 },
  { text: 'EGIPTO', lng: 30.5, lat: 27.8 },
];
