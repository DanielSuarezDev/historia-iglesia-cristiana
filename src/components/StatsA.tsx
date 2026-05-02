'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useIsMobile } from '@/lib/useMediaQuery';

type PresenceType = 'Mayoría' | 'Alta presencia' | 'Minoría significativa';

interface CountryRow {
  country: string;
  flag: string;
  pct: number | null;
  total: number | null;
  type: PresenceType;
  sourceLabel: string;
  sourceHref: string;
}

const CATHOLIC_COUNTRIES: CountryRow[] = [
  { country: 'Polonia',          flag: '🇵🇱', pct: 86,   total: 33,  type: 'Mayoría',               sourceLabel: 'Pew Research Center', sourceHref: 'https://www.pewresearch.org/religion/' },
  { country: 'Croacia',          flag: '🇭🇷', pct: 86,   total: 3.5, type: 'Mayoría',               sourceLabel: 'CIA World Factbook',  sourceHref: 'https://www.cia.gov/the-world-factbook/countries/croatia/' },
  { country: 'Italia',           flag: '🇮🇹', pct: 80,   total: 50,  type: 'Mayoría',               sourceLabel: 'Annuario Pontificio', sourceHref: 'https://www.vatican.va' },
  { country: 'Portugal',         flag: '🇵🇹', pct: 79,   total: 8,   type: 'Mayoría',               sourceLabel: 'Pew Research Center', sourceHref: 'https://www.pewresearch.org/religion/' },
  { country: 'Filipinas',        flag: '🇵🇭', pct: 79,   total: 85,  type: 'Mayoría',               sourceLabel: 'CIA World Factbook',  sourceHref: 'https://www.cia.gov/the-world-factbook/countries/philippines/' },
  { country: 'México',           flag: '🇲🇽', pct: 78,   total: 110, type: 'Mayoría',               sourceLabel: 'Pew Research Center', sourceHref: 'https://www.pewresearch.org/religion/' },
  { country: 'Colombia',         flag: '🇨🇴', pct: 70,   total: 36,  type: 'Mayoría',               sourceLabel: 'Pew Research Center', sourceHref: 'https://www.pewresearch.org/religion/' },
  { country: 'Irlanda',          flag: '🇮🇪', pct: 69,   total: 3.5, type: 'Mayoría',               sourceLabel: 'CIA World Factbook',  sourceHref: 'https://www.cia.gov/the-world-factbook/countries/ireland/' },
  { country: 'Perú',             flag: '🇵🇪', pct: 66,   total: 22,  type: 'Mayoría',               sourceLabel: 'Pew Research Center', sourceHref: 'https://www.pewresearch.org/religion/' },
  { country: 'Brasil',           flag: '🇧🇷', pct: 65,   total: 135, type: 'Mayoría',               sourceLabel: 'Pew Research Center', sourceHref: 'https://www.pewresearch.org/religion/' },
  { country: 'Argentina',        flag: '🇦🇷', pct: 63,   total: 28,  type: 'Mayoría',               sourceLabel: 'Pew Research Center', sourceHref: 'https://www.pewresearch.org/religion/' },
  { country: 'España',           flag: '🇪🇸', pct: 58,   total: 28,  type: 'Mayoría',               sourceLabel: 'Pew Research Center', sourceHref: 'https://www.pewresearch.org/religion/' },
  { country: 'Rep. Dem. Congo',  flag: '🇨🇩', pct: 50,   total: 45,  type: 'Mayoría',               sourceLabel: 'Annuario Pontificio', sourceHref: 'https://www.vatican.va' },
  { country: 'Francia',          flag: '🇫🇷', pct: 47,   total: 30,  type: 'Alta presencia',        sourceLabel: 'Pew Research Center', sourceHref: 'https://www.pewresearch.org/religion/' },
  { country: 'Canadá',           flag: '🇨🇦', pct: 39,   total: 15,  type: 'Alta presencia',        sourceLabel: 'Pew Research Center', sourceHref: 'https://www.pewresearch.org/religion/' },
  { country: 'Alemania',         flag: '🇩🇪', pct: 26,   total: 21,  type: 'Alta presencia',        sourceLabel: 'Pew Research Center', sourceHref: 'https://www.pewresearch.org/religion/' },
  { country: 'Estados Unidos',   flag: '🇺🇸', pct: 22,   total: 72,  type: 'Alta presencia',        sourceLabel: 'Pew Research Center', sourceHref: 'https://www.pewresearch.org/religion/' },
  { country: 'Australia',        flag: '🇦🇺', pct: 22,   total: 5.5, type: 'Alta presencia',        sourceLabel: 'CIA World Factbook',  sourceHref: 'https://www.cia.gov/the-world-factbook/countries/australia/' },
  { country: 'Nigeria',          flag: '🇳🇬', pct: 11,   total: 25,  type: 'Minoría significativa', sourceLabel: 'Annuario Pontificio', sourceHref: 'https://www.vatican.va' },
  { country: 'Reino Unido',      flag: '🇬🇧', pct: 8,    total: 5,   type: 'Minoría significativa', sourceLabel: 'Pew Research Center', sourceHref: 'https://www.pewresearch.org/religion/' },
  { country: 'Vietnam',          flag: '🇻🇳', pct: 7,    total: 7,   type: 'Minoría significativa', sourceLabel: 'CIA World Factbook',  sourceHref: 'https://www.cia.gov/the-world-factbook/countries/vietnam/' },
  { country: 'India',            flag: '🇮🇳', pct: 1.5,  total: 20,  type: 'Minoría significativa', sourceLabel: 'Pew Research Center', sourceHref: 'https://www.pewresearch.org/religion/' },
  { country: 'China',            flag: '🇨🇳', pct: 0.7,  total: 10,  type: 'Minoría significativa', sourceLabel: 'World Religion Database', sourceHref: 'https://www.worldreligiondatabase.org/' },
];

const HIGH_COUNT_THRESHOLD = 50;

const REGIONAL_CATHOLICS = [
  { region: 'América Latina', total: 486, color: '#c9a84c' },
  { region: 'Europa', total: 285, color: '#d4a850' },
  { region: 'África Subsahariana', total: 248, color: '#e8c060' },
  { region: 'Asia-Pacífico', total: 149, color: '#f0d080' },
  { region: 'América del Norte', total: 90, color: '#c8982a' },
  { region: 'Medio Oriente / N. África', total: 14, color: '#b88820' },
];

interface CardProps {
  icon: string;
  value: string;
  label: string;
  sub: string;
  sourceLabel: string;
  sourceHref: string;
  delay: number;
  visible: boolean;
}

function Card({ icon, value, label, sub, sourceLabel, sourceHref, delay, visible }: CardProps) {
  const { t } = useTheme();
  const [hover, setHover] = useState(false);
  const isMobile = useIsMobile();
  return (
    <div style={{
      background: t.bgCard, border: `1px solid ${t.border}`, padding: isMobile ? '20px 22px' : '28px 32px',
      opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)',
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ fontSize: isMobile ? 24 : 28, marginBottom: 8 }}>{icon}</div>
      <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: isMobile ? 28 : 36, color: t.accent, fontWeight: 700, lineHeight: 1 }}>{value}</div>
      <div style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 15, color: t.text, fontWeight: 600, margin: '8px 0 4px' }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 13, color: t.textMuted, lineHeight: 1.5 }}>{sub}</div>
      <a
        href={sourceHref}
        target="_blank"
        rel="noopener noreferrer"
        title="Ver fuente oficial"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          marginTop: 'auto',
          paddingTop: 14,
          fontFamily: 'var(--font-crimson), serif',
          fontSize: 11,
          color: hover ? t.accent : t.textMuted,
          textDecoration: hover ? 'underline' : 'none',
          letterSpacing: '0.02em',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          transition: 'color 0.2s ease',
        }}
      >
        <span style={{ fontSize: 10 }}>🔗</span>
        <span>Fuente: {sourceLabel}</span>
      </a>
    </div>
  );
}

export default function StatsA() {
  const { t } = useTheme();
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartCreated = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || chartCreated.current || !chartRef.current) return;
    import('chart.js/auto').then(({ default: Chart }) => {
      if (!chartRef.current || chartCreated.current) return;
      chartCreated.current = true;
      new Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels: REGIONAL_CATHOLICS.map(r => r.region),
          datasets: [{
            label: 'Millones de Católicos',
            data: REGIONAL_CATHOLICS.map(r => r.total),
            backgroundColor: REGIONAL_CATHOLICS.map(r => r.color),
            borderRadius: 2,
          }],
        },
        options: {
          indexAxis: 'y', responsive: true, maintainAspectRatio: false,
          animation: { duration: 1200 },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: t.bgCard, titleColor: t.text, bodyColor: t.textMuted,
              borderColor: t.border, borderWidth: 1,
              callbacks: { label: ctx => ` ${ctx.parsed.x}M católicos` },
            },
          },
          scales: {
            x: { ticks: { color: t.textMuted, font: { family: 'var(--font-crimson), serif' }, callback: (v) => v + 'M' }, grid: { color: `${t.border}60` } },
            y: { ticks: { color: t.text, font: { family: 'var(--font-crimson), serif', size: 13 } }, grid: { display: false } },
          },
        },
      });
    });
  }, [visible, t]);

  return (
    <section id="secA" ref={sectionRef} style={{ background: t.bg, padding: isMobile ? '64px 0' : '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '0 18px' : '0 48px' }}>

        <div style={{ marginBottom: isMobile ? 36 : 56, opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 16, marginBottom: 16 }}>
            <div style={{ width: 4, height: isMobile ? 36 : 48, background: t.accent, flexShrink: 0 }} />
            <div style={{ minWidth: 0 }}>
              <p style={{ fontFamily: 'var(--font-crimson), serif', color: t.accent, letterSpacing: '0.25em', fontSize: isMobile ? 11 : 12, textTransform: 'uppercase', margin: '0 0 6px' }}>Sección A</p>
              <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: isMobile ? 26 : 40, color: t.text, margin: 0, fontWeight: 700, lineHeight: 1.15 }}>Iglesia Católica Romana</h2>
            </div>
          </div>
          <p style={{ fontFamily: 'var(--font-crimson), serif', fontSize: isMobile ? 15 : 17, color: t.textMuted, maxWidth: 700, lineHeight: 1.7, marginLeft: isMobile ? 0 : 20 }}>
            La Iglesia Católica Romana es la comunidad cristiana más grande del mundo, con presencia en todos los continentes y una estructura institucional centralizada bajo el liderazgo del Papa en Roma, según datos del Annuario Pontificio 2026.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? 12 : 20, marginBottom: isMobile ? 28 : 48 }}>
          <Card icon="✝" value="1,422M" label="Católicos en el mundo" sub="17.8% de la población global" sourceLabel="Vatican News – Annuario Pontificio 2026" sourceHref="https://www.vaticannews.va/es/vaticano/news/2026-03/publicado-nuevos-datos-del-anuario-pontificio-2026.html" delay={0} visible={visible} />
          <Card icon="🌍" value="126" label="Países con mayoría católica" sub="De 195 países reconocidos" sourceLabel="Pew Research Center" sourceHref="https://www.pewresearch.org/religion/" delay={0.1} visible={visible} />
          <Card icon="👑" value="2,800+" label="Diócesis en el mundo" sub="Divisiones territoriales activas" sourceLabel="Vatican News" sourceHref="https://www.vaticannews.va/en/vatican-city/news/2026-03/new-data-from-annuario-pontificio-2026-shows-catholics-growing.html" delay={0.2} visible={visible} />
          <Card icon="⛪" value="221,700+" label="Parroquias registradas" sub="Congregaciones locales activas" sourceLabel="Vatican / Annuarium Statisticum Ecclesiae" sourceHref="https://www.vatican.va" delay={0.3} visible={visible} />
        </div>

        <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, padding: isMobile ? '20px 18px' : '28px 32px', marginBottom: isMobile ? 20 : 32, opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease 0.2s' }}>
          <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: isMobile ? 17 : 20, color: t.text, margin: '0 0 20px', fontWeight: 700 }}>Distribución por Región</h3>
          <div style={{ height: isMobile ? 260 : 320 }}><canvas ref={chartRef} /></div>
        </div>

        <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, padding: isMobile ? '20px 18px' : '28px 32px', marginBottom: isMobile ? 20 : 32, opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease 0.3s' }}>
          <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: isMobile ? 17 : 20, color: t.text, margin: '0 0 6px', fontWeight: 700, lineHeight: 1.25 }}>Presencia del Catolicismo por País</h3>
          <p style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 13, color: t.textMuted, margin: '0 0 20px', lineHeight: 1.5 }}>
            Selección de 23 países representativos de América Latina, Europa, África, Asia y Oceanía. Ordenados por porcentaje de población católica; en caso de empate, por cantidad total.
          </p>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', margin: isMobile ? '0 -18px' : 0, padding: isMobile ? '0 18px' : 0 }}>
            <table style={{ width: '100%', minWidth: isMobile ? 560 : 'auto', borderCollapse: 'collapse', fontFamily: 'var(--font-crimson), serif', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${t.border}` }}>
                  <th style={{ textAlign: 'left',  padding: '10px 12px', color: t.accent, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 11 }}>País</th>
                  <th style={{ textAlign: 'right', padding: '10px 12px', color: t.accent, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 11 }}>% Católicos</th>
                  <th style={{ textAlign: 'right', padding: '10px 12px', color: t.accent, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 11 }}>Cantidad</th>
                  <th style={{ textAlign: 'left',  padding: '10px 12px', color: t.accent, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 11 }}>Tipo</th>
                  <th style={{ textAlign: 'left',  padding: '10px 12px', color: t.accent, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 11 }}>Fuente</th>
                </tr>
              </thead>
              <tbody>
                {CATHOLIC_COUNTRIES.map((c) => {
                  const isHighCount = c.total !== null && c.total >= HIGH_COUNT_THRESHOLD;
                  const typeColor =
                    c.type === 'Mayoría' ? t.accent :
                    c.type === 'Alta presencia' ? t.text : t.textMuted;
                  return (
                    <tr key={c.country} style={{ borderBottom: `1px solid ${t.border}40` }}>
                      <td style={{ padding: '10px 12px', color: t.text, fontWeight: isHighCount ? 700 : 400 }}>
                        <span style={{ marginRight: 8 }}>{c.flag}</span>{c.country}
                      </td>
                      <td style={{ padding: '10px 12px', textAlign: 'right', color: t.text, fontFamily: 'var(--font-playfair), serif' }}>
                        {c.pct !== null ? `${c.pct}%` : 'No disponible'}
                      </td>
                      <td style={{ padding: '10px 12px', textAlign: 'right', color: isHighCount ? t.accent : t.text, fontFamily: 'var(--font-playfair), serif', fontWeight: isHighCount ? 700 : 400 }}>
                        {c.total !== null ? `${c.total}M` : 'No disponible'}
                      </td>
                      <td style={{ padding: '10px 12px', color: typeColor, fontStyle: c.type === 'Minoría significativa' ? 'italic' : 'normal' }}>
                        {c.type}
                      </td>
                      <td style={{ padding: '10px 12px' }}>
                        <a href={c.sourceHref} target="_blank" rel="noopener noreferrer" title="Ver fuente oficial"
                          style={{ color: t.textMuted, textDecoration: 'none', fontSize: 12, transition: 'color 0.2s ease' }}
                          onMouseEnter={(e) => { e.currentTarget.style.color = t.accent; e.currentTarget.style.textDecoration = 'underline'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.color = t.textMuted; e.currentTarget.style.textDecoration = 'none'; }}
                        >
                          🔗 {c.sourceLabel}
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 12, color: t.textMuted, marginTop: 18, borderTop: `1px solid ${t.border}`, paddingTop: 12, lineHeight: 1.6 }}>
            <strong style={{ color: t.text }}>Nota metodológica:</strong> Los valores son estimaciones y pueden variar según la fuente, la metodología (autoidentificación vs. registro eclesial) y el año de referencia (2024–2026). M = millones de católicos; el porcentaje refiere a la población nacional total. Cuando un dato no está disponible se indica explícitamente. Fuentes consultadas: Pew Research Center, Annuario Pontificio (Vaticano), CIA World Factbook y World Religion Database.
          </p>
        </div>

        <div style={{ background: `${t.accent}0c`, border: `1px solid ${t.accent}30`, padding: isMobile ? '16px 18px' : '20px 28px', display: 'flex', gap: isMobile ? 12 : 16, alignItems: 'flex-start', opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease 0.5s' }}>
          <div style={{ color: t.accent, fontSize: 20, lineHeight: 1, flexShrink: 0 }}>◈</div>
          <div style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 15, color: t.textMuted, lineHeight: 1.65 }}>
            <strong style={{ color: t.text }}>Tendencia 2024:</strong> El catolicismo crece principalmente en{' '}
            <strong style={{ color: t.text }}>África Subsahariana</strong> (+2.5% anual) y Asia, mientras experimenta declive en Europa Occidental y América del Norte. Se estima que para 2050, más del 40% de los católicos vivirá en África.
          </div>
        </div>
      </div>
    </section>
  );
}
