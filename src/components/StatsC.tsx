'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useIsMobile } from '@/lib/useMediaQuery';

const WORLD_RELIGIONS = [
  {
    key: 'islam', name: 'Islam', arabic: 'الإسلام', total: '1,900M', totalNum: 1900, pctWorld: 24.1,
    color: '#2e6eb5', icon: '☪', founded: '622 d.C.', fundador: 'Profeta Mahoma', libro: 'Corán',
    desc: 'El Islam es la religión de más rápido crecimiento en el mundo. Sus seguidores se llaman musulmanes y creen en Alá (Dios) como único creador y en Mahoma como su último profeta. Está dividido principalmente en dos ramas: Sunita (85-90%) y Chiita (10-15%).',
    creencias: [
      'Tawhid: Alá es uno, indivisible y sin asociados; el mayor pecado es el shirk (asociarle algo).',
      'Mahoma es el "Sello de los profetas", último y definitivo de una cadena que incluye a Adán, Abraham, Moisés y Jesús.',
      'El Corán es la palabra literal e increada de Alá, revelada en árabe al profeta a través del ángel Gabriel.',
      'Los Cinco Pilares estructuran la vida: Shahada (confesión), Salat (oración 5 veces/día), Zakat (limosna), Sawm (ayuno de Ramadán) y Hajj (peregrinación a La Meca).',
      'Creen en ángeles, profetas, libros revelados, el Día del Juicio y el qadar (decreto divino), con cielo (Yannah) e infierno (Yahannam).',
    ],
    visionJesus: 'Para el Islam, Jesús (Isa ibn Maryam) es uno de los profetas más grandes y honrados, nacido milagrosamente de la virgen María, hacedor de milagros y palabra de Alá, pero estrictamente humano. Niegan que sea Hijo de Dios o que Dios pueda tener hijos (Corán 4:171; 5:72-75), niegan la Trinidad y, según la sura 4:157, niegan que fuera crucificado: enseñan que Alá lo elevó al cielo vivo y que volverá al final de los tiempos para derrotar al Anticristo (Dajjal) y restaurar la justicia, pero como siervo de Alá, no como Dios.',
    topCountries: [
      { name: 'Indonesia', val: 231, flag: '🇮🇩' }, { name: 'Pakistán', val: 212, flag: '🇵🇰' },
      { name: 'India', val: 200, flag: '🇮🇳' }, { name: 'Bangladesh', val: 153, flag: '🇧🇩' },
      { name: 'Nigeria', val: 105, flag: '🇳🇬' },
    ],
    facts: ['Mayor crecimiento demográfico de todas las religiones', 'Los 5 pilares: Shahada, Oración, Zakat, Ramadán, Hajj', 'Para 2075 podría superar al Cristianismo en número', 'Mecca y Medina reciben 20M+ peregrinos anuales'],
  },
  {
    key: 'hinduism', name: 'Hinduismo', arabic: 'हिन्दू धर्म', total: '1,200M', totalNum: 1200, pctWorld: 15.1,
    color: '#c94c4c', icon: '🕉', founded: '~1500 a.C.', fundador: 'Sin fundador único', libro: 'Vedas, Upanishads, Bhagavad Gita',
    desc: 'El Hinduismo es la religión más antigua del mundo aún practicada. No tiene un fundador único ni una doctrina central unificada, sino que es un conjunto de tradiciones filosóficas, rituales y culturales. Cree en el Brahman (realidad última), el karma, el dharma y la reencarnación.',
    creencias: [
      'Brahman es la realidad última, impersonal e infinita; el alma individual (atman) es en esencia una con Brahman.',
      'Existen millones de devas (deidades) que son manifestaciones de esa realidad única; populares son Brahma, Vishnú, Shiva y la Diosa (Devi).',
      'Samsara: el alma transmigra de cuerpo en cuerpo según la ley del karma (toda acción produce consecuencias).',
      'Dharma: deber moral, social y religioso propio de cada persona según su etapa de vida y casta.',
      'Moksha: la liberación final del ciclo de reencarnaciones se busca por la vía del conocimiento (jnana), la devoción (bhakti) o la acción (karma yoga).',
    ],
    visionJesus: 'El hinduismo no tiene una postura única sobre Jesús, pero la lectura más extendida lo considera un sadhu o gran maestro espiritual iluminado, e incluso un avatar (manifestación divina) similar a Krishna o Rama, comparable a otros santos y gurús. Es admirado por su compasión, su mensaje de amor y su autodominio, pero no como el único camino: para el hinduismo todas las religiones son senderos válidos hacia la misma realidad última, por lo que Jesús es uno entre muchos rostros de lo divino, no el Salvador exclusivo de la humanidad.',
    topCountries: [
      { name: 'India', val: 1050, flag: '🇮🇳' }, { name: 'Nepal', val: 23, flag: '🇳🇵' },
      { name: 'Bangladesh', val: 14, flag: '🇧🇩' }, { name: 'Indonesia', val: 4.7, flag: '🇮🇩' },
      { name: 'Pakistán', val: 4, flag: '🇵🇰' },
    ],
    facts: ['La religión organizada más antigua del mundo', 'Aproximadamente 33 millones de deidades en su panteón', '94% de hindúes viven en India y Nepal', 'El Yoga y el Ayurveda son prácticas hinduistas globales'],
  },
  {
    key: 'buddhism', name: 'Budismo', arabic: '佛教', total: '530M', totalNum: 530, pctWorld: 6.9,
    color: '#9c4cc9', icon: '☸', founded: '~563–483 a.C.', fundador: 'Siddhartha Gautama', libro: 'Tripitaka, Sutras',
    desc: 'El Budismo enseña que el sufrimiento tiene causa y puede ser superado a través de la práctica del Camino Óctuple. No adora a un Dios creador personal. Sus dos grandes ramas son el Theravada (sur y sureste asiático) y el Mahayana (Asia oriental y el Tíbet).',
    creencias: [
      'Las Cuatro Nobles Verdades: la vida implica sufrimiento (dukkha); el sufrimiento nace del deseo y el apego; puede cesar; y hay un camino para lograrlo.',
      'El Noble Camino Óctuple: recta visión, intención, palabra, acción, medio de vida, esfuerzo, atención plena y concentración.',
      'Anatta (no-yo): no existe un alma permanente; el "yo" es un flujo de fenómenos en constante cambio.',
      'Karma y renacimiento: las acciones determinan futuras existencias dentro del samsara.',
      'Nirvana: la meta final es la extinción del deseo, el fin del ciclo de renacimientos y la liberación total del sufrimiento.',
    ],
    visionJesus: 'El budismo no tiene una doctrina propia sobre Jesús, pero suele verlo con respeto como un bodhisattva o ser iluminado que renunció a sí mismo por compasión hacia los demás. El Dalai Lama lo ha llamado "un maestro plenamente iluminado" cuya enseñanza de amor a los enemigos resuena con la compasión (karuna) budista. Sin embargo, el budismo no acepta la idea de un Dios creador ni de un Salvador único; cada persona debe alcanzar la liberación por su propio esfuerzo y comprensión, por lo que Jesús es admirado como modelo, no adorado como Dios.',
    topCountries: [
      { name: 'China', val: 185, flag: '🇨🇳' }, { name: 'Tailandia', val: 57, flag: '🇹🇭' },
      { name: 'Japón', val: 45, flag: '🇯🇵' }, { name: 'Myanmar', val: 43, flag: '🇲🇲' },
      { name: 'Sri Lanka', val: 15, flag: '🇱🇰' },
    ],
    facts: ['No requiere creer en un Dios creador', 'Las 4 Nobles Verdades y el Camino Óctuple como ética central', 'La meditación budista es adoptada globalmente', 'En Occidente crece el budismo laico y secular'],
  },
  {
    key: 'animism', name: 'Animismo / Religiones Indígenas', arabic: 'Religiones folk', total: '430M', totalNum: 430, pctWorld: 5.7,
    color: '#4c9c6b', icon: '🌿', founded: 'Prehistoria', fundador: 'Tradiciones ancestrales', libro: 'Tradición oral',
    desc: 'El Animismo y las religiones tradicionales incluyen una gran diversidad de prácticas espirituales indígenas, chamánicas y de culto a los ancestros. Creen que los espíritus habitan en la naturaleza, los animales y los objetos. Son las prácticas espirituales más antiguas de la humanidad.',
    creencias: [
      'Todo cuanto existe —ríos, montañas, animales, árboles, vientos— posee espíritu o fuerza vital propia.',
      'Los ancestros siguen presentes y participan activamente en la vida de la comunidad; honrarlos es deber sagrado.',
      'El equilibrio entre el mundo visible y el invisible se mantiene mediante rituales, ofrendas, danzas y tabúes.',
      'El chamán, curandero o sacerdote tradicional es mediador entre los humanos y los espíritus, capaz de viajar en sueños o trance.',
      'Suelen reconocer un Ser Supremo lejano o creador, pero la vida religiosa cotidiana gira en torno a espíritus locales y ancestros.',
    ],
    visionJesus: 'No existe una visión unificada de Jesús, ya que estas tradiciones son muy diversas. Donde han tenido contacto con el cristianismo, suele integrarse de manera sincrética: Jesús es percibido como un espíritu poderoso, un gran ancestro o un sanador entre otros, capaz de proteger contra fuerzas malignas. En la santería, el vudú, el candomblé o las religiones afroamericanas, Cristo y los santos católicos son a menudo identificados con orishas o loas. En las cosmovisiones indígenas no contactadas por el Evangelio, Jesús simplemente es desconocido como figura histórica.',
    topCountries: [
      { name: 'China (folk)', val: 294, flag: '🇨🇳' }, { name: 'África Subsahariana', val: 90, flag: '🌍' },
      { name: 'India (tribal)', val: 25, flag: '🇮🇳' }, { name: 'América indígena', val: 12, flag: '🌎' },
      { name: 'Oceanía', val: 9, flag: '🌏' },
    ],
    facts: ['Las prácticas espirituales más antiguas conocidas', 'Bajo constante presión de religiones misioneras', 'Revitalización global de identidades indígenas', 'Reconocidas por la ONU en declaración de pueblos indígenas'],
  },
  {
    key: 'judaism', name: 'Judaísmo', arabic: 'יהדות', total: '15.2M', totalNum: 15.2, pctWorld: 0.19,
    color: '#4cc9a0', icon: '✡', founded: '~2000 a.C.', fundador: 'Abraham, Moisés', libro: 'Torá (Tanaj), Talmud',
    desc: 'El Judaísmo es la religión monoteísta más antigua, madre del Cristianismo y el Islam. Sus seguidores creen en un Dios único, en la alianza del pueblo judío con Dios, y en la Torá como ley divina. Pese a ser la minoría religiosa más pequeña de esta lista, su influencia histórica es incomparable.',
    creencias: [
      'Shemá Israel: Dios (YHWH) es uno, eterno, creador del universo, sin imagen ni cuerpo (Deuteronomio 6:4).',
      'Alianza con Abraham, Isaac y Jacob, renovada con Moisés en el Sinaí: el pueblo de Israel es elegido para ser luz a las naciones.',
      'La Torá (5 libros de Moisés) más el resto del Tanaj y la tradición oral del Talmud son la guía de fe y vida.',
      'Cumplimiento de los 613 mitzvot (mandamientos) y observancia del Shabbat, las festividades y la kashrut (leyes alimentarias).',
      'Esperan la venida del Mesías, la reconstrucción del Templo, la resurrección de los muertos y un mundo redimido (olam ha-bá).',
    ],
    visionJesus: 'El judaísmo no reconoce a Jesús como Mesías, ni como Hijo de Dios, ni como divino. Para la fe judía, el Mesías traerá paz mundial, reunirá a Israel, reconstruirá el Templo y será reconocido por todas las naciones, cosas que —desde su perspectiva— Jesús no cumplió. La idea misma de un Dios encarnado o trino contradice el monoteísmo absoluto del Shemá. Algunos judíos contemporáneos lo aprecian como rabino judío, maestro ético o mártir del pueblo judío bajo Roma, pero adorarle se considera idolatría. El "judaísmo mesiánico" que sí lo reconoce es visto como cristianismo, no como judaísmo.',
    topCountries: [
      { name: 'Israel', val: 7.2, flag: '🇮🇱' }, { name: 'Estados Unidos', val: 6.0, flag: '🇺🇸' },
      { name: 'Francia', val: 0.5, flag: '🇫🇷' }, { name: 'Argentina', val: 0.18, flag: '🇦🇷' },
      { name: 'Canadá', val: 0.39, flag: '🇨🇦' },
    ],
    facts: ['La religión monoteísta más antigua', '14 premios Nobel sobre cada millón de judíos (tasa más alta)', 'El Hebreo fue resucitado como idioma moderno en el s. XX', 'El Holocausto (1933–1945) eliminó 1/3 de la población judía mundial'],
  },
];

export default function StatsC() {
  const { t } = useTheme();
  const isMobile = useIsMobile();
  const [active, setActive] = useState('islam');
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const barChartRef = useRef<HTMLCanvasElement>(null);
  const barInst = useRef<import('chart.js').Chart | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const grp = WORLD_RELIGIONS.find(r => r.key === active)!;

  useEffect(() => {
    if (!visible || !barChartRef.current || !grp) return;
    import('chart.js/auto').then(({ default: Chart }) => {
      if (barInst.current) barInst.current.destroy();
      if (!barChartRef.current) return;
      barInst.current = new Chart(barChartRef.current, {
        type: 'bar',
        data: {
          labels: grp.topCountries.map(c => `${c.flag} ${c.name}`),
          datasets: [{ label: 'Millones', data: grp.topCountries.map(c => c.val), backgroundColor: `${grp.color}bb`, borderRadius: 3 }],
        },
        options: {
          responsive: true, maintainAspectRatio: false, animation: { duration: 800 },
          plugins: {
            legend: { display: false },
            tooltip: { backgroundColor: t.bgCard, titleColor: t.text, bodyColor: t.textMuted, borderColor: t.border, borderWidth: 1, callbacks: { label: c => ` ${c.parsed.y}M` } },
          },
          scales: {
            x: { ticks: { color: t.text, font: { family: 'var(--font-crimson), serif', size: 12 } }, grid: { display: false } },
            y: { ticks: { color: t.textMuted, font: { family: 'var(--font-crimson), serif' }, callback: (v) => v + 'M' }, grid: { color: `${t.border}60` } },
          },
        },
      });
    });
    return () => { if (barInst.current) { barInst.current.destroy(); barInst.current = null; } };
  }, [visible, active, t, grp]);

  const maxAll = 1900;

  return (
    <section id="secC" ref={sectionRef} style={{ background: t.bg, padding: isMobile ? '64px 0 80px' : '100px 0 120px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '0 18px' : '0 48px' }}>

        <div style={{ marginBottom: isMobile ? 32 : 48, opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 16, marginBottom: 16 }}>
            <div style={{ width: 4, height: isMobile ? 36 : 48, background: t.accent, flexShrink: 0 }} />
            <div style={{ minWidth: 0 }}>
              <p style={{ fontFamily: 'var(--font-crimson), serif', color: t.accent, letterSpacing: '0.25em', fontSize: isMobile ? 11 : 12, textTransform: 'uppercase', margin: '0 0 6px' }}>Sección C</p>
              <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: isMobile ? 26 : 40, color: t.text, margin: 0, fontWeight: 700, lineHeight: 1.15 }}>Otras Religiones del Mundo</h2>
            </div>
          </div>
          <p style={{ fontFamily: 'var(--font-crimson), serif', fontSize: isMobile ? 15 : 17, color: t.textMuted, maxWidth: 700, lineHeight: 1.7, marginLeft: isMobile ? 0 : 20 }}>
            Más allá del Cristianismo, miles de millones de personas profesan el Islam, el Hinduismo, el Budismo, las religiones animistas e indígenas, y el Judaísmo. Datos estimados al año 2024.
          </p>
        </div>

        {/* Overview */}
        <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, padding: isMobile ? '20px 18px' : '24px 28px', marginBottom: isMobile ? 22 : 28, opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease 0.2s' }}>
          <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: isMobile ? 16 : 18, color: t.text, margin: '0 0 18px', fontWeight: 600 }}>Escala comparativa de fieles (millones)</h3>
          {WORLD_RELIGIONS.map((r, i) => (
            <div key={r.key} style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '24px 1fr 70px' : '30px 220px 1fr 80px',
              gridTemplateRows: isMobile ? 'auto auto' : 'auto',
              columnGap: isMobile ? 10 : 12,
              rowGap: isMobile ? 4 : 0,
              alignItems: 'center',
              marginBottom: isMobile ? 14 : 10,
            }}>
              <span style={{ fontSize: isMobile ? 16 : 18, textAlign: 'center' }}>{r.icon}</span>
              <span
                style={{
                  fontFamily: 'var(--font-crimson), serif',
                  fontSize: isMobile ? 13 : 14,
                  color: active === r.key ? t.text : t.textMuted,
                  cursor: 'pointer', transition: 'color 0.2s',
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}
                onClick={() => setActive(r.key)}
              >{r.name}</span>
              <span style={{
                fontFamily: 'var(--font-playfair), serif', fontSize: isMobile ? 13 : 14,
                color: r.color, fontWeight: 700, textAlign: 'right',
              }}>{r.total}</span>
              <div
                style={{
                  position: 'relative', height: isMobile ? 14 : 20, background: `${t.border}40`, cursor: 'pointer',
                  gridColumn: isMobile ? '1 / -1' : 'auto',
                }}
                onClick={() => setActive(r.key)}
              >
                <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', background: r.color, opacity: active === r.key ? 1 : 0.5, width: visible ? `${(r.totalNum / maxAll) * 100}%` : '0%', transition: `width 0.9s ease ${0.3 + i * 0.08}s, opacity 0.2s` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Religion tabs */}
        <div style={{
          display: 'flex', gap: 6, marginBottom: isMobile ? 18 : 24,
          flexWrap: isMobile ? 'nowrap' : 'wrap',
          overflowX: isMobile ? 'auto' : 'visible',
          WebkitOverflowScrolling: 'touch',
          margin: isMobile ? '0 -18px 18px' : '0 0 24px',
          padding: isMobile ? '0 18px 4px' : 0,
        }}>
          {WORLD_RELIGIONS.map(r => (
            <button key={r.key} onClick={() => setActive(r.key)} style={{
              padding: isMobile ? '8px 14px' : '10px 20px', borderRadius: 2, cursor: 'pointer',
              border: `1px solid ${active === r.key ? r.color : t.border}`,
              background: active === r.key ? `${r.color}18` : 'transparent',
              color: active === r.key ? t.text : t.textMuted,
              fontFamily: 'var(--font-crimson), serif', fontSize: isMobile ? 13 : 15, transition: 'all 0.2s',
              display: 'flex', alignItems: 'center', gap: 6,
              whiteSpace: 'nowrap', flexShrink: 0,
            }}>
              <span>{r.icon}</span> {r.name}
            </button>
          ))}
        </div>

        {grp && (
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 20 : 28, opacity: visible ? 1 : 0, transition: 'opacity 0.5s ease' }}>
            <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, padding: isMobile ? '22px 20px' : '28px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16, gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
                  <span style={{ fontSize: isMobile ? 30 : 36, flexShrink: 0 }}>{grp.icon}</span>
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: isMobile ? 18 : 22, color: t.text, margin: 0, fontWeight: 700, lineHeight: 1.2 }}>{grp.name}</h3>
                    <span style={{ fontFamily: 'var(--font-crimson), serif', fontSize: isMobile ? 12 : 14, color: grp.color, fontStyle: 'italic' }}>{grp.arabic}</span>
                  </div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: isMobile ? 22 : 30, color: grp.color, fontWeight: 700, lineHeight: 1 }}>{grp.total}</div>
                  <div style={{ fontFamily: 'var(--font-crimson), serif', fontSize: isMobile ? 11 : 12, color: t.textMuted }}>{grp.pctWorld}% mundial</div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 8, marginBottom: 16 }}>
                {[{ l: 'Fundado', v: grp.founded }, { l: 'Fundador', v: grp.fundador }, { l: 'Libro sagrado', v: grp.libro }].map(f => (
                  <div key={f.l} style={{ padding: '10px 14px', background: t.bgSec, borderLeft: `2px solid ${grp.color}` }}>
                    <div style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 11, color: t.accent, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{f.l}</div>
                    <div style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 14, color: t.text, marginTop: 2 }}>{f.v}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 15, color: t.textMuted, lineHeight: 1.7, margin: '0 0 20px' }}>{grp.desc}</p>

              <div style={{ marginBottom: 18, padding: isMobile ? '14px 16px' : '16px 18px', background: t.bgSec, borderLeft: `3px solid ${grp.color}` }}>
                <h4 style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 11, color: t.accent, letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 10px', fontWeight: 600 }}>Lo que creen</h4>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {grp.creencias.map((c, i) => (
                    <li key={i} style={{ display: 'flex', gap: 10, fontFamily: 'var(--font-crimson), serif', fontSize: 14, color: t.text, lineHeight: 1.6 }}>
                      <span style={{ color: grp.color, flexShrink: 0, fontWeight: 700 }}>{i + 1}.</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginBottom: 20, padding: isMobile ? '14px 16px' : '16px 18px', background: `${grp.color}10`, border: `1px solid ${grp.color}40` }}>
                <h4 style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 11, color: grp.color, letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 10px', fontWeight: 700 }}>✝ Cómo ven a Jesús</h4>
                <p style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 14, color: t.text, lineHeight: 1.7, margin: 0 }}>{grp.visionJesus}</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {grp.facts.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, paddingTop: 8, borderTop: `1px solid ${t.border}` }}>
                    <span style={{ color: grp.color, flexShrink: 0 }}>◆</span>
                    <span style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 13, color: t.textMuted, lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, padding: isMobile ? '22px 20px' : '28px 32px' }}>
              <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: isMobile ? 16 : 18, color: t.text, margin: '0 0 20px', fontWeight: 700 }}>Países con Mayor Número de Fieles</h3>
              <div style={{ height: isMobile ? 260 : 260 }}><canvas ref={barChartRef} /></div>
              <p style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 11, color: t.textMuted, marginTop: 16, borderTop: `1px solid ${t.border}`, paddingTop: 10 }}>
                Cifras en millones · Estimaciones 2024 · Fuentes: Pew Research Center, World Religion Database
              </p>
            </div>
          </div>
        )}

        <div style={{ marginTop: isMobile ? 32 : 48, padding: isMobile ? '18px 20px' : '20px 28px', border: `1px solid ${t.border}`, background: t.bgCard, opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease 0.5s' }}>
          <h4 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 16, color: t.text, margin: '0 0 10px', fontWeight: 700 }}>Fuentes y Notas Metodológicas</h4>
          <p style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 14, color: t.textMuted, lineHeight: 1.7, margin: 0 }}>
            Los datos presentados provienen de: <strong style={{ color: t.text }}>Pew Research Center</strong> (Global Religious Futures Project 2023–2024), <strong style={{ color: t.text }}>World Religion Database</strong> (Brill), <strong style={{ color: t.text }}>Anuario Pontificio 2024</strong> (Santa Sede), <strong style={{ color: t.text }}>World Christian Database</strong> y <strong style={{ color: t.text }}>Joshua Project 2024</strong>. Los números son estimaciones y pueden variar según metodología.
          </p>
        </div>
      </div>
    </section>
  );
}
