'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useIsMobile } from '@/lib/useMediaQuery';

interface Paragraph {
  heading?: string;
  body: string;
}

interface TimelineEvent {
  year: number;
  yearLabel: string;
  title: string;
  short: string;
  icon: string;
  intro: string;
  paragraphs: Paragraph[];
  quote?: { text: string; ref: string };
  legacy: string;
  sources: { label: string; href: string }[];
}

const EVENTS: TimelineEvent[] = [
  {
  year: 0,
  yearLabel: 'Intro',
  title: 'Introducción',
  short: 'Contexto histórico',
  icon: '👀',
  intro:
    'Para entender el contexto del Nuevo Testamento, es importante ver qué pasó antes de que llegaran los romanos. Israel pasó por varios gobiernos y cada uno dejó una marca importante.',
  paragraphs: [
    {
      heading: '1. Dominio griego (período helenístico)',
      body:
        'Después de las conquistas de Alejandro Magno (alrededor del 330 a.C.), Palestina quedó bajo el dominio griego. A este tiempo se le conoce como período helenístico. Uno de los gobernantes más conocidos fue Antíoco IV Epífanes, quien intentó imponer la cultura griega sobre los judíos, provocando gran tensión.'
    },
    {
      heading: '2. Rebelión de los Macabeos (167 a.C.)',
      body:
        'En el año 167 a.C., los judíos se levantaron contra el dominio griego. El líder principal fue Judas Macabeo, quien luchó por defender la fe judía. Gracias a esta rebelión, lograron recuperar Jerusalén y restaurar sus prácticas religiosas.'
    },
    {
      heading: '3. Independencia judía (Hasmoneos)',
      body:
        'Después de la victoria, comenzó el gobierno de la familia Hasmonea. Este período duró casi 100 años (aprox. 160–63 a.C.). Los judíos gobernaron su propio territorio, pero hubo conflictos internos entre sus líderes, lo que debilitó su estabilidad.'
    },
    {
      heading: '4. Llegada del Imperio romano (63 a.C.)',
      body:
        'En el año 63 a.C., el general romano Pompeyo entró en Jerusalén y tomó el control. Esto ocurrió en medio de conflictos internos entre los mismos judíos. Desde ese momento, Israel quedó bajo el dominio del Imperio romano.'
    },
    {
      heading: 'El Nuevo Testamento da evidencia del gobierno romano',
      body:
        'Cuando leemos el Nuevo Testamento, vemos centuriones, gobernadores y autoridades romanas. Incluso, a Jesús se le hace una pregunta sobre si era correcto servir a Dios bajo ese gobierno (Mateo 22:21).'
    },
    {
      heading: '¿El gobierno romano fue bueno?',
      body:
        'El gobierno romano no fue completamente bueno ni completamente malo. Mantenía el orden y facilitó cosas como las carreteras y los viajes, lo que más adelante ayudó a la expansión del evangelio.'
    },
    {
      heading: '¿Roma fue enemiga de los cristianos?',
      body:
        'Con el tiempo, especialmente hacia finales del siglo I, los romanos comenzaron a perseguir a los cristianos porque no adoraban a sus dioses ni al emperador.'
    }
  ],
  quote: {
    text: 'Dad, pues, a César lo que es de César, y a Dios lo que es de Dios.',
    ref: 'Mateo 22:21'
  },
  legacy: '',
  sources: []
},
  {
    year: 30,
    yearLabel: 'c. 30 d.C.',
    title: 'El Evangelio',
    short: 'Muerte, resurrección de Jesús y nacimiento de la Iglesia',
    icon: '✝',
    intro:
      'En la Pascua del año 30, bajo el procurador romano Poncio Pilato, Jesús de Nazaret es crucificado en las afueras de Jerusalén. Tres días después, sus discípulos proclaman que ha resucitado. Cincuenta días más tarde, en Pentecostés, nace lo que la historia llamará la Iglesia.',
    paragraphs: [
      {
        heading: 'El contexto',
        body:
          'Judea es una provincia agitada del Imperio Romano. El judaísmo del Segundo Templo convive con corrientes diversas: fariseos, saduceos, esenios y zelotes. En medio de tensiones políticas y religiosas, un predicador galileo recorre las aldeas anunciando que “el Reino de Dios se ha acercado”.',
      },
      {
        heading: "Escribas",
        body: "Conocidos como los intérpretes de la ley, al principio, su deber principal era copiar las Escrituras, pero dado que llegaron a ser expertos en lo que las Escrituras decían sus funciones se fueran ampliando, no solamente copiaban las Escrituras, ahora en sus deberes incluía la interpretación e instrucción escrituraria."
      },
      {
        heading: "Esenios",
        body: "Muchos como Baker piensa que este grupo salió a raiz del contacto entre los las ideas religioesas judías y persas, este grupo se encargaba de una ortodoxa rigurosa, el celibato, la propiedad común y el no sacrificar animales en el culto."
      },
      {
        heading: "Fariseos",
        body: "Baker lo define así: Indudblemente se desarrollaron de las tendencias separatistas cuando las proposiciones de los samaritnanos fieron rechazadas dueante los días de Esdras y Nehemías (alrededor del año 500 a de J.C) durante la lucha de los Macabeos (que empezón aproximadamente en el año 167 a de J.C). Este partido tomó una forma distinta, en el N.T son descritos con criterios estrechos, fanáticos, y hasta cierto punto hipócritas. Eran numerosos y populares en los tiempos de Jesús."
      },
      {
        heading: 'La cruz y la tumba vacía',
        body:
          'Acusado de blasfemia por las autoridades del Templo y entregado a Roma como agitador, Jesús muere crucificado, la pena reservada a esclavos y rebeldes. Para sus seguidores, todo parecía haber terminado. Pero el testimonio unánime de los primeros cristianos —recogido por Pablo apenas dos décadas después en 1 Corintios 15— es que el sepulcro apareció vacío y que el Resucitado se manifestó “a más de quinientos hermanos a la vez”.',
      },
      {
        heading: 'Pentecostés: el inicio',
        body:
          'Hechos 2 narra que, reunidos en Jerusalén durante la fiesta judía de Shavuot, los discípulos reciben el Espíritu Santo. Pedro predica públicamente y, según el relato, “se añadieron aquel día como tres mil personas”. Esa pequeña comunidad —judía, mesiánica, pobre y temerosa— es el embrión de un movimiento que en tres siglos cambiará al mundo conocido.',
      },
    ],
    quote: {
      text:
        '“Si Cristo no resucitó, vana es entonces nuestra predicación, vana es también vuestra fe.”',
      ref: '1 Corintios 15:14 — Pablo de Tarso, c. 54 d.C.',
    },
    legacy:
      'Sin la resurrección y sin Pentecostés no habría iglesia, ni Nuevo Testamento, ni cristianismo. Toda la historia que sigue es comentario sobre este punto de partida.',
    sources: [
      { label: 'González, Justo — Historia del cristianismo, vol. I', href: 'https://www.editorialclie.es/' },
      { label: 'Britannica — Early Christianity', href: 'https://www.britannica.com/topic/Christianity/The-history-of-Christianity' },
    ],
  },
  {
    year: 64,
    yearLabel: '64 d.C.',
    title: 'Nerón y el incendio de Roma',
    short: 'Primera gran persecución imperial contra los cristianos',
    icon: '🔥',
    intro:
      'En la noche del 18 al 19 de julio del año 64, un incendio devora Roma durante seis días. Diez de los catorce barrios resultan destruidos. El emperador Nerón, sospechoso de haberlo provocado para reconstruir la ciudad a su gusto, busca un chivo expiatorio: encuentra a los cristianos.',
    paragraphs: [
      {
        heading: 'Una secta extraña',
        body:
          'A los romanos los cristianos les resultaban incomprensibles: no adoraban a los dioses del Estado, hablaban de comer “cuerpo y sangre”, se reunían en secreto y predicaban un reino que no era de este mundo. Eran fáciles de convertir en culpables de la desgracia colectiva.',
      },
      {
        heading: 'El testimonio de Tácito',
        body:
          'Cincuenta años después, el historiador romano Tácito —ningún amigo de los cristianos— describe la persecución: fueron cubiertos con pieles de animales y arrojados a los perros, crucificados, o quemados como antorchas en los jardines imperiales. “Surgió la compasión, aunque eran culpables y merecían los castigos más extremos” (Anales XV, 44).',
      },
      {
        heading: 'Persecución',
        body:
          'Aquí podemos decir que empieza la primera persecución Romana.',
      },
      {
        heading: 'Pedro y Pablo',
        body:
          'La tradición eclesiástica más antigua sitúa entre el 64 y el 67 los martirios de Pedro —crucificado, según se cuenta, cabeza abajo en la colina vaticana— y de Pablo —decapitado en la Vía Ostiense por ser ciudadano romano—. Sus tumbas se convertirán siglos después en las basílicas de San Pedro y San Pablo Extramuros.',
      },
    ],
    quote: {
      text:
        '“Nerón, para acabar con el rumor, presentó como culpables… a esos que el vulgo llamaba cristianos.”',
      ref: 'Tácito, Anales XV, 44 — c. 116 d.C.',
    },
    legacy:
      'La persecución neroniana inaugura tres siglos de hostilidad intermitente del Estado romano contra los cristianos. La sangre de los mártires, escribirá Tertuliano, será “semilla de nuevos cristianos”.',
    sources: [
      { label: 'Tácito — Anales (texto latino-español)', href: 'https://www.thelatinlibrary.com/tacitus.html' },
      { label: 'Britannica — Nero', href: 'https://www.britannica.com/biography/Nero-Roman-emperor' },
    ],
  },
  {
    year: 70,
    yearLabel: '70 d.C.',
    title: 'Destrucción del Templo',
    short: 'Tito arrasa Jerusalén y cae el Segundo Templo',
    icon: '⛓',
    intro:
      'Tras una rebelión judía de cuatro años contra Roma, el general Tito —hijo del emperador Vespasiano— sitia Jerusalén y, en el verano del año 70, toma la ciudad. El Segundo Templo, corazón de la vida religiosa judía durante cinco siglos, es incendiado y demolido piedra sobre piedra.',
    paragraphs: [
      {
        heading: 'El asedio',
        body:
          'El historiador judío Flavio Josefo, testigo presencial al servicio de los romanos, describe el hambre y el horror del asedio en La guerra de los judíos. Cientos de miles murieron; otros tantos fueron esclavizados. El Arco de Tito en el Foro Romano todavía muestra a soldados llevando la menorá del Templo como botín.',
      },
      {
        heading: 'Cumplimiento de una profecía',
        body:
          'Para los cristianos, la caída del Templo confirma las palabras atribuidas a Jesús pocas décadas antes: “No quedará aquí piedra sobre piedra” (Mt 24:2). Marcos, Mateo y Lucas escriben sus evangelios en torno a este acontecimiento, dándole un peso teológico decisivo.',
      },
      {
        heading: 'Separación con el judaísmo',
        body:
          'Sin Templo, sin sacerdocio sacrificial y con Jerusalén en ruinas, el judaísmo se reorganiza en torno a la sinagoga y la Torá (concilio de Yavné). El cristianismo, ya mayoritariamente gentil tras la misión de Pablo, deja de ser percibido como una corriente del judaísmo: nace como religión propia.',
      },
    ],
    quote: {
      text:
        '“Vendrán días sobre ti en que tus enemigos te rodearán… y no dejarán en ti piedra sobre piedra.”',
      ref: 'Lucas 19:43-44',
    },
    legacy:
      'El año 70 marca el fin del judaísmo del Templo y el principio de un cristianismo que se piensa a sí mismo como nuevo pueblo de Dios. Es la frontera entre el mundo de Jesús y el mundo de la Iglesia.',
    sources: [
      { label: 'Flavio Josefo — La guerra de los judíos', href: 'https://www.gutenberg.org/ebooks/2850' },
      { label: 'Britannica — Siege of Jerusalem (70 CE)', href: 'https://www.britannica.com/event/Siege-of-Jerusalem-70' },
    ],
  },
  {
    year: 100,
    yearLabel: 'c. 100 d.C.',
    title: 'Muerte de los apóstoles',
    short: 'Fin de la era apostólica con la muerte de Juan',
    icon: '📜',
    intro:
      'Hacia el final del siglo I, en torno al año 100, muere en Éfeso el apóstol Juan, último de los Doce. Con él se cierra la generación que vio, oyó y tocó a Jesús. Comienza el tiempo en que la Iglesia ya no escucha al Maestro por boca de testigos directos, sino a través de sus escritos y sus discípulos.',
    paragraphs: [
      {
        heading: 'Una generación que se apaga',
        body:
          'Casi todos los apóstoles murieron mártires en distintos rincones del Imperio y más allá: Andrés en Patras, Tomás —según una tradición sólida— en la India, Santiago el Mayor decapitado en Jerusalén ya en el 44, Felipe en Hierápolis. Solo Juan, según Ireneo de Lyon, alcanzó “la edad de un anciano” y murió de muerte natural.',
      },
      {
        heading: 'El cierre del Nuevo Testamento',
        body:
          'En este último tramo del siglo se completan los escritos joánicos: el Cuarto Evangelio, las tres cartas y el Apocalipsis, redactado probablemente desde el destierro en la isla de Patmos bajo Domiciano. Con ellos queda esencialmente cerrado el corpus que la Iglesia reconocerá luego como Nuevo Testamento.',
      },
      {
        heading: 'Surgen los Padres Apostólicos',
        body:
          'La autoridad pasa ahora a los obispos discípulos directos de los apóstoles: Clemente de Roma, Ignacio de Antioquía, Policarpo de Esmirna. Sus cartas, escritas entre el 95 y el 110, son los primeros testimonios cristianos fuera del Nuevo Testamento y muestran una Iglesia ya jerárquicamente organizada en torno al obispo, los presbíteros y los diáconos.',
      },
    ],
    quote: {
      text:
        '“Lo que hemos oído, lo que hemos visto con nuestros ojos, lo que contemplamos y palparon nuestras manos… eso os anunciamos.”',
      ref: '1 Juan 1:1',
    },
    legacy:
      'El final del siglo I marca el paso del cristianismo del testigo presencial al cristianismo de la tradición. Lo que viene a continuación —apologistas, mártires, concilios— se construirá siempre sobre la fe transmitida por esa primera generación.',
    sources: [
      { label: 'Ireneo de Lyon — Contra las herejías', href: 'https://www.newadvent.org/fathers/0103.htm' },
      { label: 'Padres Apostólicos (texto en línea)', href: 'https://www.earlychristianwritings.com/' },
    ],
  },
];

export default function TimelineCentury1() {
  const { t } = useTheme();
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = openIdx !== null ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpenIdx(null); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [openIdx]);

  const event = openIdx !== null ? EVENTS[openIdx] : null;

  return (
    <div ref={sectionRef} style={{ position: 'relative' }}>
      {/* Sub-header */}
      <div style={{ marginBottom: isMobile ? 28 : 40, opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease' }}>
        <h3 style={{
          fontFamily: 'var(--font-playfair), serif',
          fontSize: isMobile ? 22 : 30, color: t.text, margin: '0 0 8px',
          fontWeight: 700, lineHeight: 1.2,
        }}>
          Siglo I · Los cimientos <span style={{ color: t.textMuted, fontWeight: 400 }}>(30 – 100 d.C.)</span>
        </h3>
        <p style={{
          fontFamily: 'var(--font-crimson), serif',
          fontSize: isMobile ? 14 : 16, color: t.textMuted,
          maxWidth: 720, lineHeight: 1.7, margin: 0,
        }}>
          Setenta años bastaron para que un movimiento de discípulos galileos se transformara en una Iglesia presente desde Jerusalén hasta Roma. Toca cada hito para conocer su historia.
        </p>
      </div>

      {/* Timeline */}
      {isMobile ? (
        <VerticalTimeline events={EVENTS} visible={visible} onOpen={setOpenIdx} hoverIdx={hoverIdx} setHoverIdx={setHoverIdx} />
      ) : (
        <HorizontalTimeline events={EVENTS} visible={visible} onOpen={setOpenIdx} hoverIdx={hoverIdx} setHoverIdx={setHoverIdx} />
      )}

      <p style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 12, color: t.textMuted, marginTop: isMobile ? 24 : 32, textAlign: 'center', fontStyle: 'italic' }}>
        Pulsa cualquier evento para leer su explicación completa.
      </p>

      {/* Modal */}
      {event && (
        <EventModal event={event} onClose={() => setOpenIdx(null)} />
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
    <div style={{ position: 'relative', padding: '40px 0 24px' }}>
      {/* Line */}
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
              key={ev.year}
              onClick={() => onOpen(i)}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
              aria-label={`Abrir evento del año ${ev.year}: ${ev.title}`}
              style={{
                position: 'relative',
                background: 'none', border: 'none', cursor: 'pointer',
                padding: 0,
                minHeight: 240,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(20px)',
                transition: `opacity 0.7s ease ${0.15 + i * 0.12}s, transform 0.7s ease ${0.15 + i * 0.12}s`,
              }}
            >
              {/* Card */}
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

              {/* Connector */}
              <div style={{
                position: 'absolute',
                [above ? 'bottom' : 'top']: '50%',
                width: 1, height: 24,
                background: isHover ? t.accent : `${t.accent}60`,
                transition: 'background 0.25s',
              }} />

              {/* Node */}
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

              {/* Year */}
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
      {/* Vertical line in the rail */}
      <div style={{
        position: 'absolute', left: RAIL / 2 - 1, top: 24, bottom: 24, width: 2,
        background: `linear-gradient(to bottom, transparent, ${t.accent}90 6%, ${t.accent}90 94%, transparent)`,
        opacity: visible ? 1 : 0, transition: 'opacity 1s ease',
        zIndex: 0,
      }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {events.map((ev, i) => (
          <div
            key={ev.year}
            style={{
              display: 'flex', alignItems: 'stretch',
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateX(12px)',
              transition: `opacity 0.5s ease ${0.1 + i * 0.1}s, transform 0.5s ease ${0.1 + i * 0.1}s`,
            }}
          >
            {/* Rail with node */}
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

            {/* Card */}
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

function EventModal({ event, onClose }: { event: TimelineEvent; onClose: () => void }) {
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
        {/* Sticky header bar with close */}
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
          }}>{event.yearLabel} · Siglo I</span>
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

        {/* Scrollable content */}
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
            {/* Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <span style={{ fontSize: isMobile ? 28 : 34 }}>{event.icon}</span>
              <h3 style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: isMobile ? 24 : 36, color: t.text, fontWeight: 700,
                lineHeight: 1.15, margin: 0,
              }}>{event.title}</h3>
            </div>
            <div style={{ width: 48, height: 2, background: t.accent, marginBottom: 22 }} />

            {/* Intro */}
            <p style={{
              fontFamily: 'var(--font-crimson), serif',
              fontSize: isMobile ? 16 : 18,
              color: t.text, lineHeight: 1.7, fontStyle: 'italic',
              margin: '0 0 28px',
            }}>{event.intro}</p>

            {/* Paragraphs */}
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

            {/* Quote */}
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

            {/* Legacy */}
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

            {/* Sources */}
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
          </div>
        </div>
      </div>
    </div>
  );
}
