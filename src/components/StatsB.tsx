'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useIsMobile } from '@/lib/useMediaQuery';

const CHRISTIAN_GROUPS = [
  {
    key: 'orthodox',
    name: 'Iglesia Ortodoxa',
    total: '260–300M',
    totalNum: 280,
    pctWorld: 3.5,
    color: '#4c8bc9',
    icon: '☦',
    founded: '~33–1054 d.C.',
    sede: 'Constantinopla / Moscú',
    desc: 'Las Iglesias Ortodoxas son las sucesoras directas de las Iglesias orientales del primer milenio. Se separaron de Roma en el Gran Cisma de 1054. Son autocéfalas (autogobernadas) y se caracterizan por su rica liturgia, iconografía y teología mística.',
    branches: [
      { name: 'Ortodoxa Rusa', val: 100, flag: '🇷🇺' },
      { name: 'Ortodoxa Etíope', val: 45, flag: '🇪🇹' },
      { name: 'Ortodoxa Ucraniana', val: 30, flag: '🇺🇦' },
      { name: 'Ortodoxa Rumana', val: 19, flag: '🇷🇴' },
      { name: 'Ortodoxa Griega', val: 12, flag: '🇬🇷' },
      { name: 'Copta Egipcia', val: 18, flag: '🇪🇬' },
      { name: 'Ortodoxa Serbia', val: 8, flag: '🇷🇸' },
      { name: 'Otras Ortodoxas', val: 48, flag: '🌐' },
    ],
    facts: [
      'Usan el Calendario Juliano para fiestas litúrgicas',
      'La liturgia puede durar 3+ horas',
      'No tienen un líder único equivalente al Papa',
      'Fuerte presencia en Rusia, Grecia, Etiopía, Serbia',
    ],
  },
  {
    key: 'evangelical',
    name: 'Protestantes Evangélicos',
    total: '600–900M',
    totalNum: 750,
    pctWorld: 9.2,
    color: '#4c9c6b',
    icon: '✟',
    founded: '1517 d.C.',
    sede: 'Sin sede central',
    desc: 'Los Protestantes Evangélicos son el grupo cristiano de más rápido crecimiento en el mundo. Surgidos de la Reforma Protestante del siglo XVI, incluyen denominaciones pentecostales, carismáticas, bautistas, metodistas, presbiterianas y no denominacionales.',
    branches: [
      { name: 'Pentecostales / Carismáticos', val: 600, flag: '🔥' },
      { name: 'No Denominacionales', val: 80, flag: '⛪' },
      { name: 'Metodistas', val: 80, flag: '📖' },
      { name: 'Presbiterianos / Reformados', val: 75, flag: '🏛' },
      { name: 'Luteranos', val: 77, flag: '🔨' },
      { name: 'Anglicanos', val: 90, flag: '🇬🇧' },
    ],
    facts: [
      'El Pentecostalismo es el movimiento cristiano de mayor crecimiento',
      'Fuerte expansión en América Latina, África y Asia',
      'Los servicios suelen ser en idioma local',
      'Énfasis en conversión personal y evangelización activa',
    ],
  },
  {
    key: 'baptist',
    name: 'Bautistas',
    total: '100–110M',
    totalNum: 105,
    pctWorld: 1.3,
    color: '#c97b4c',
    icon: '💧',
    founded: '1609 d.C.',
    sede: 'Alliance Bautista Mundial',
    desc: 'Los Bautistas son una de las denominaciones protestantes más grandes e influyentes del mundo. Se distinguen por el bautismo de creyentes (no de infantes), la autonomía de cada congregación local, la separación Iglesia-Estado y el sacerdocio universal de todos los creyentes.',
    branches: [
      { name: 'Convención Bautista del Sur (EE.UU.)', val: 13, flag: '🇺🇸' },
      { name: 'Bautistas de África (varios países)', val: 20, flag: '🌍' },
      { name: 'Bautistas de Brasil', val: 8, flag: '🇧🇷' },
      { name: 'Bautistas de India', val: 6, flag: '🇮🇳' },
      { name: 'Bautistas de Myanmar/Birmania', val: 5, flag: '🇲🇲' },
      { name: 'Otros Bautistas', val: 53, flag: '🌐' },
    ],
    facts: [
      'Martin Luther King Jr. era pastor bautista',
      'Defensa histórica de la libertad religiosa',
      'Cada iglesia local es autónoma e independiente',
      'La Alianza Bautista Mundial agrupa 47M de miembros',
    ],
  },
];

export default function StatsB() {
  const { t } = useTheme();
  const isMobile = useIsMobile();
  const [active, setActive] = useState('orthodox');
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInst = useRef<import('chart.js').Chart | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const grp = CHRISTIAN_GROUPS.find(g => g.key === active)!;

  useEffect(() => {
    if (!visible || !chartRef.current || !grp) return;
    import('chart.js/auto').then(({ default: Chart }) => {
      if (chartInst.current) chartInst.current.destroy();
      if (!chartRef.current) return;
      chartInst.current = new Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels: grp.branches.map(b => b.name),
          datasets: [{ label: 'Millones', data: grp.branches.map(b => b.val), backgroundColor: `${grp.color}cc`, borderRadius: 2 }],
        },
        options: {
          indexAxis: 'y', responsive: true, maintainAspectRatio: false,
          animation: { duration: 900 },
          plugins: {
            legend: { display: false },
            tooltip: { backgroundColor: t.bgCard, titleColor: t.text, bodyColor: t.textMuted, borderColor: t.border, borderWidth: 1, callbacks: { label: c => ` ~${c.parsed.x}M` } },
          },
          scales: {
            x: { ticks: { color: t.textMuted, font: { family: 'var(--font-crimson), serif' }, callback: (v) => v + 'M' }, grid: { color: `${t.border}60` } },
            y: { ticks: { color: t.text, font: { family: 'var(--font-crimson), serif', size: 12 } }, grid: { display: false } },
          },
        },
      });
    });
    return () => {
      if (chartInst.current) { chartInst.current.destroy(); chartInst.current = null; }
    };
  }, [visible, active, t, grp]);

  const BASE = 1390;
  const compData = [
    { name: 'Católicos', val: 1390, color: '#c9a84c' },
    ...CHRISTIAN_GROUPS.map(g => ({ name: g.name.split(' ').slice(-1)[0], val: g.totalNum, color: g.color })),
  ];

  return (
    <section id="secB" ref={sectionRef} style={{ background: t.bgSec, padding: isMobile ? '64px 0' : '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '0 18px' : '0 48px' }}>

        <div style={{ marginBottom: isMobile ? 32 : 48, opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 16, marginBottom: 16 }}>
            <div style={{ width: 4, height: isMobile ? 36 : 48, background: t.accent, flexShrink: 0 }} />
            <div style={{ minWidth: 0 }}>
              <p style={{ fontFamily: 'var(--font-crimson), serif', color: t.accent, letterSpacing: '0.25em', fontSize: isMobile ? 11 : 12, textTransform: 'uppercase', margin: '0 0 6px' }}>Sección B</p>
              <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: isMobile ? 26 : 40, color: t.text, margin: 0, fontWeight: 700, lineHeight: 1.15 }}>Otras Tradiciones Cristianas</h2>
            </div>
          </div>
          <p style={{ fontFamily: 'var(--font-crimson), serif', fontSize: isMobile ? 15 : 17, color: t.textMuted, maxWidth: 700, lineHeight: 1.7, marginLeft: isMobile ? 0 : 20 }}>
            El Cristianismo alberga más de 45,000 denominaciones. Además de los Católicos, las tres tradiciones más significativas son la Ortodoxa, la Protestante Evangélica y la Bautista.
          </p>
        </div>

        {/* Comparison bar */}
        <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, padding: isMobile ? '20px 18px' : '24px 28px', marginBottom: isMobile ? 24 : 32, opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease 0.2s' }}>
          <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: isMobile ? 16 : 18, color: t.text, margin: '0 0 18px', fontWeight: 600 }}>Comparación de tamaño (millones)</h3>
          {compData.map((d, i) => (
            <div key={d.name} style={{ display: 'grid', gridTemplateColumns: isMobile ? '110px 1fr 60px' : '160px 1fr 72px', gap: isMobile ? 8 : 12, alignItems: 'center', marginBottom: 10 }}>
              <span style={{ fontFamily: 'var(--font-crimson), serif', fontSize: isMobile ? 12 : 13, color: t.textMuted, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{d.name}</span>
              <div style={{ position: 'relative', height: 18, background: `${t.border}40` }}>
                <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', background: d.color, width: visible ? `${(d.val / BASE) * 100}%` : '0%', transition: `width 0.9s ease ${0.3 + i * 0.1}s` }} />
              </div>
              <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: isMobile ? 12 : 14, color: d.color, fontWeight: 700, textAlign: 'right' }}>
                {d.val >= 1000 ? (d.val / 1000).toFixed(2) + 'B' : d.val + 'M'}
              </span>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 0, marginBottom: isMobile ? 20 : 28, border: `1px solid ${t.border}` }}>
          {CHRISTIAN_GROUPS.map((g, i) => (
            <button key={g.key} onClick={() => setActive(g.key)} style={{
              flex: 1, padding: isMobile ? '14px 18px' : '16px 20px', border: 'none', cursor: 'pointer',
              background: active === g.key ? t.bgCard : t.bgSec,
              borderRight: !isMobile && i < CHRISTIAN_GROUPS.length - 1 ? `1px solid ${t.border}` : 'none',
              borderBottom: isMobile
                ? (active === g.key ? `3px solid ${g.color}` : (i < CHRISTIAN_GROUPS.length - 1 ? `1px solid ${t.border}` : 'none'))
                : (active === g.key ? `3px solid ${g.color}` : '3px solid transparent'),
              borderLeft: isMobile && active === g.key ? `3px solid ${g.color}` : 'none',
              transition: 'all 0.2s',
              textAlign: 'left',
              display: isMobile ? 'flex' : 'block',
              alignItems: isMobile ? 'center' : undefined,
              gap: isMobile ? 12 : undefined,
            }}>
              <div style={{ fontSize: isMobile ? 24 : 22, marginBottom: isMobile ? 0 : 6, flexShrink: 0 }}>{g.icon}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: isMobile ? 14 : 15, color: active === g.key ? t.text : t.textMuted, fontWeight: active === g.key ? 700 : 400 }}>{g.name}</div>
                <div style={{ fontFamily: 'var(--font-crimson), serif', fontSize: isMobile ? 15 : 18, color: g.color, fontWeight: 700, marginTop: 2 }}>{g.total}</div>
              </div>
            </button>
          ))}
        </div>

        {grp && (
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 20 : 28, opacity: visible ? 1 : 0, transition: 'opacity 0.5s ease' }}>
            <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, padding: isMobile ? '22px 20px' : '28px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <span style={{ fontSize: 32 }}>{grp.icon}</span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 22, color: t.text, margin: 0, fontWeight: 700 }}>{grp.name}</h3>
                  <span style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 13, color: t.textMuted }}>Fundada: {grp.founded} · {grp.sede}</span>
                </div>
              </div>
              <p style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 16, color: t.textMuted, lineHeight: 1.7, marginBottom: 20 }}>{grp.desc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <div style={{ gridColumn: '1/-1', background: `${grp.color}10`, border: `1px solid ${grp.color}30`, padding: '12px 16px' }}>
                  <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 32, color: grp.color, fontWeight: 700 }}>{grp.total}</span>
                  <span style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 13, color: t.textMuted, display: 'block' }}>fieles estimados · {grp.pctWorld}% de la población mundial</span>
                </div>
                {grp.facts.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, padding: '8px 0', borderTop: `1px solid ${t.border}` }}>
                    <span style={{ color: grp.color, fontSize: 14, flexShrink: 0, marginTop: 1 }}>◆</span>
                    <span style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 13, color: t.textMuted, lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, padding: isMobile ? '22px 20px' : '28px 32px' }}>
              <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: isMobile ? 16 : 18, color: t.text, margin: '0 0 20px', fontWeight: 700 }}>Principales Ramas / Iglesias</h3>
              <div style={{ height: isMobile ? 280 : 260 }}><canvas ref={chartRef} /></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
