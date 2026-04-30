'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

const TOP_CATHOLIC_COUNTRIES = [
  { country: 'Brasil', flag: '🇧🇷', total: 173, pct: 80 },
  { country: 'México', flag: '🇲🇽', total: 110, pct: 83 },
  { country: 'Filipinas', flag: '🇵🇭', total: 90, pct: 80 },
  { country: 'Estados Unidos', flag: '🇺🇸', total: 72, pct: 21 },
  { country: 'Rep. Dem. Congo', flag: '🇨🇩', total: 55, pct: 58 },
  { country: 'Italia', flag: '🇮🇹', total: 50, pct: 84 },
  { country: 'Colombia', flag: '🇨🇴', total: 42, pct: 79 },
  { country: 'España', flag: '🇪🇸', total: 38, pct: 80 },
  { country: 'Francia', flag: '🇫🇷', total: 35, pct: 52 },
  { country: 'Argentina', flag: '🇦🇷', total: 34, pct: 74 },
  { country: 'Polonia', flag: '🇵🇱', total: 33, pct: 86 },
  { country: 'Perú', flag: '🇵🇪', total: 25, pct: 74 },
];

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
  delay: number;
  visible: boolean;
}

function Card({ icon, value, label, sub, delay, visible }: CardProps) {
  const { t } = useTheme();
  return (
    <div style={{
      background: t.bgCard, border: `1px solid ${t.border}`, padding: '28px 32px',
      opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)',
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    }}>
      <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
      <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 36, color: t.accent, fontWeight: 700, lineHeight: 1 }}>{value}</div>
      <div style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 15, color: t.text, fontWeight: 600, margin: '8px 0 4px' }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 13, color: t.textMuted, lineHeight: 1.5 }}>{sub}</div>
    </div>
  );
}

export default function StatsA() {
  const { t } = useTheme();
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

  const maxBar = Math.max(...TOP_CATHOLIC_COUNTRIES.map(c => c.total));

  return (
    <section id="secA" ref={sectionRef} style={{ background: t.bg, padding: '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>

        <div style={{ marginBottom: 56, opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
            <div style={{ width: 4, height: 48, background: t.accent }} />
            <div>
              <p style={{ fontFamily: 'var(--font-crimson), serif', color: t.accent, letterSpacing: '0.25em', fontSize: 12, textTransform: 'uppercase', margin: '0 0 6px' }}>Sección A</p>
              <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 40, color: t.text, margin: 0, fontWeight: 700 }}>Iglesia Católica Romana</h2>
            </div>
          </div>
          <p style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 17, color: t.textMuted, maxWidth: 700, lineHeight: 1.7, marginLeft: 20 }}>
            La Iglesia Católica Romana es la denominación cristiana más grande del mundo, con presencia en todos los continentes y una estructura institucional centralizada bajo el liderazgo del Papa en Roma. Datos estimados al año 2024.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 48 }}>
          <Card icon="✝" value="1,390M" label="Católicos en el mundo" sub="17.1% de la población global" delay={0} visible={visible} />
          <Card icon="🌍" value="126" label="Países con mayoría católica" sub="De 195 naciones reconocidas" delay={0.1} visible={visible} />
          <Card icon="👑" value="2,800+" label="Diócesis en el mundo" sub="Divisiones territoriales activas" delay={0.2} visible={visible} />
          <Card icon="⛪" value="221,700+" label="Parroquias registradas" sub="Congregaciones locales activas" delay={0.3} visible={visible} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 48 }}>
          <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, padding: '28px 32px', opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease 0.2s' }}>
            <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 20, color: t.text, margin: '0 0 24px', fontWeight: 700 }}>Distribución por Región</h3>
            <div style={{ height: 280 }}><canvas ref={chartRef} /></div>
          </div>

          <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, padding: '28px 32px', opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease 0.35s' }}>
            <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 20, color: t.text, margin: '0 0 20px', fontWeight: 700 }}>Países con Mayor Número de Católicos</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {TOP_CATHOLIC_COUNTRIES.map((c, i) => (
                <div key={c.country} style={{ display: 'grid', gridTemplateColumns: '22px 28px 1fr 52px 46px', gap: 8, alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 12, color: t.textMuted, textAlign: 'right' }}>{i + 1}.</span>
                  <span style={{ fontSize: 16 }}>{c.flag}</span>
                  <div style={{ position: 'relative', height: 22, background: `${t.border}40`, overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: visible ? `${(c.total / maxBar) * 100}%` : '0%', background: `${t.accent}${i < 3 ? 'dd' : '88'}`, transition: `width 0.8s ease ${0.4 + i * 0.05}s` }} />
                    <span style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', fontFamily: 'var(--font-crimson), serif', fontSize: 12, color: t.text, whiteSpace: 'nowrap', zIndex: 1 }}>{c.country}</span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 14, color: t.accent, fontWeight: 700, textAlign: 'right' }}>{c.total}M</span>
                  <span style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 11, color: t.textMuted, textAlign: 'right' }}>{c.pct}%</span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 11, color: t.textMuted, marginTop: 12, borderTop: `1px solid ${t.border}`, paddingTop: 10 }}>
              M = millones · % = porcentaje de la población nacional · Fuente: Anuario Pontificio 2024
            </p>
          </div>
        </div>

        <div style={{ background: `${t.accent}0c`, border: `1px solid ${t.accent}30`, padding: '20px 28px', display: 'flex', gap: 16, alignItems: 'flex-start', opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease 0.5s' }}>
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
