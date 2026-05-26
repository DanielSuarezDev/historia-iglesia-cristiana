'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useIsMobile } from '@/lib/useMediaQuery';

interface Paragraph {
  heading?: string;
  body: string;
}

interface PersecutionEvent {
  year: number;
  yearLabel: string;
  title: string;
  emperor: string;
  short: string;
  icon: string;
  intensity: 'baja' | 'media' | 'alta' | 'extrema' | 'paz';
  intro: string;
  paragraphs: Paragraph[];
  quote?: { text: string; ref: string };
  legacy: string;
  sources: { label: string; href: string }[];
}

const EVENTS: PersecutionEvent[] = [
  {
    year: 64,
    yearLabel: '64 d.C.',
    title: 'Nerón y el incendio de Roma',
    emperor: 'Nerón (54–68)',
    short: 'La primera gran persecución imperial',
    icon: '🔥',
    intensity: 'alta',
    intro:
      'Roma arde durante seis días en el verano del año 64. La gente sospecha que el propio emperador Nerón provocó el incendio para reconstruir la ciudad a su gusto. Para callar el rumor, busca culpables: los cristianos.',
    paragraphs: [
      {
        heading: 'Un chivo expiatorio fácil',
        body:
          'Los cristianos eran una minoría desconocida y rara para los romanos: no adoraban a los dioses del Estado, hablaban de "comer cuerpo y sangre" en sus reuniones secretas y predicaban un reino que no era de este mundo. Eran sospechosos perfectos.',
      },
      {
        heading: 'Una crueldad teatral',
        body:
          'Según el historiador Tácito, fueron cubiertos con pieles de animales y arrojados a los perros, crucificados, o convertidos en antorchas humanas para iluminar los jardines del emperador. Hasta los romanos paganos, dice Tácito, sintieron compasión.',
      },
      {
        heading: 'Pedro y Pablo',
        body:
          'La tradición sitúa entre el 64 y el 67 los martirios de los dos grandes apóstoles: Pedro crucificado cabeza abajo en la colina vaticana y Pablo decapitado en la Vía Ostiense (la decapitación era el "privilegio" reservado a los ciudadanos romanos).',
      },
      {
        heading: 'Solo en Roma',
        body:
          'Esta persecución fue local, limitada a la ciudad de Roma. Pero marcó un precedente: a partir de aquí, ser cristiano podía costar la vida.',
      },
    ],
    quote: {
      text: '"Nerón, para acabar con el rumor, presentó como culpables… a esos que el vulgo llamaba cristianos."',
      ref: 'Tácito, Anales XV, 44',
    },
    legacy:
      'Tertuliano lo dirá un siglo después: "La sangre de los mártires es semilla de nuevos cristianos". Comienza una historia de tres siglos en que la fe crece justamente cuando la aplastan.',
    sources: [
      { label: 'Tácito — Anales (texto en línea)', href: 'https://www.thelatinlibrary.com/tacitus.html' },
      { label: 'Britannica — Nero', href: 'https://www.britannica.com/biography/Nero-Roman-emperor' },
    ],
  },
  {
    year: 95,
    yearLabel: 'c. 95 d.C.',
    title: 'Domiciano y el culto al emperador',
    emperor: 'Domiciano (81–96)',
    short: 'Quien no llame "señor y dios" al César, paga',
    icon: '👑',
    intensity: 'media',
    intro:
      'Domiciano se hace llamar "Dominus et Deus" — Señor y Dios. Exige que se le rinda culto como a una divinidad. Los cristianos, igual que los judíos, se niegan. Algunos pagan con destierro o con la vida.',
    paragraphs: [
      {
        heading: 'Una persecución dispersa',
        body:
          'No fue una campaña sistemática como la de Nerón, sino una hostilidad creciente. Familias nobles convertidas al cristianismo —como la del cónsul Flavio Clemente— fueron ejecutadas o desterradas bajo la acusación de "ateísmo" (no creer en los dioses romanos).',
      },
      {
        heading: 'Juan en Patmos',
        body:
          'La tradición sitúa en este reinado el destierro del apóstol Juan a la isla griega de Patmos. Allí, según el propio libro, recibe las visiones del Apocalipsis: un mensaje de aliento para iglesias que sufren, escrito en clave para que solo los creyentes lo entendieran.',
      },
      {
        heading: 'La Bestia',
        body:
          'Cuando el Apocalipsis habla de la "Bestia" que blasfema y persigue a los santos, sus primeros lectores no pensaban en el futuro lejano: pensaban en Roma, en sus emperadores divinizados, y muy probablemente en Domiciano.',
      },
    ],
    quote: {
      text: '"Aquí está la perseverancia de los santos, los que guardan los mandamientos de Dios y la fe de Jesús."',
      ref: 'Apocalipsis 14:12',
    },
    legacy:
      'Domiciano deja claro lo que será el conflicto central durante 250 años: o el César es dios, o lo es Cristo. No hay acuerdo posible.',
    sources: [
      { label: 'Eusebio — Historia Eclesiástica III', href: 'https://www.newadvent.org/fathers/250103.htm' },
    ],
  },
  {
    year: 112,
    yearLabel: '112 d.C.',
    title: 'Trajano y la carta de Plinio',
    emperor: 'Trajano (98–117)',
    short: 'No se busca a los cristianos… pero si los denuncian, se les ejecuta',
    icon: '📜',
    intensity: 'media',
    intro:
      'Plinio el Joven, gobernador de Bitinia (actual Turquía), no sabe qué hacer con los cristianos que le traen denunciados. Le escribe al emperador Trajano pidiendo instrucciones. La respuesta del emperador se vuelve la norma oficial durante más de un siglo.',
    paragraphs: [
      {
        heading: 'La pregunta de Plinio',
        body:
          'Plinio cuenta que ha interrogado a cristianos: les pide que maldigan a Cristo y ofrezcan incienso a la imagen del emperador. Los que aceptan, los suelta. Los que se niegan, los ejecuta. Pero le incomoda hacerlo y pregunta a Roma si está actuando bien.',
      },
      {
        heading: 'La respuesta de Trajano',
        body:
          'Trajano contesta con tres reglas: (1) no se debe buscar activamente a los cristianos; (2) si alguien los denuncia con nombre y apellido y se demuestra que lo son, deben ser castigados; (3) las denuncias anónimas no valen, "porque sería un pésimo ejemplo y no propio de nuestro tiempo".',
      },
      {
        heading: 'Una persecución "civilizada"',
        body:
          'Suena casi razonable, pero significa esto: ser cristiano sigue siendo un crimen. Cualquier vecino enojado, cualquier acusador puede llevarte ante el juez. La fe es legal hasta que alguien la denuncia.',
      },
      {
        heading: 'Ignacio de Antioquía',
        body:
          'Bajo Trajano muere uno de los grandes obispos de la primera Iglesia: Ignacio de Antioquía. Lo llevan encadenado a Roma para ser arrojado a las fieras. En el camino escribe siete cartas que aún hoy se conservan, pidiendo a las iglesias que no intenten salvarlo: "Soy trigo de Dios; que las fieras me muelan para ser pan limpio de Cristo".',
      },
    ],
    quote: {
      text: '"No deben ser buscados; si son denunciados y reos, deben ser castigados; pero las denuncias anónimas no han de tener cabida en ninguna acusación."',
      ref: 'Trajano a Plinio, c. 112',
    },
    legacy:
      'El protocolo de Trajano convierte el cristianismo en un delito de baja prioridad pero permanente. Se vivía con la espada sobre la nuca: hoy nadie te denuncia, mañana sí.',
    sources: [
      { label: 'Plinio — Carta X.96 (texto)', href: 'https://www.thelatinlibrary.com/pliny.ep10.html' },
      { label: 'Cartas de Ignacio de Antioquía', href: 'https://www.earlychristianwritings.com/ignatius.html' },
    ],
  },
  {
    year: 165,
    yearLabel: 'c. 165 d.C.',
    title: 'Justino mártir',
    emperor: 'Marco Aurelio (161–180)',
    short: 'Un filósofo cristiano paga con la cabeza',
    icon: '⚔️',
    intensity: 'media',
    intro:
      'Marco Aurelio, el "emperador filósofo" estoico, tolera mal a los cristianos. Bajo su gobierno mueren varios apologistas, entre ellos el más importante: Justino, un filósofo convertido que había intentado explicar el cristianismo a los emperadores en sus propias categorías.',
    paragraphs: [
      {
        heading: 'Un cristianismo que piensa',
        body:
          'Justino había nacido pagano en Samaria, estudió todas las filosofías de su tiempo y se convirtió tras leer las Escrituras y conocer mártires que morían sin miedo. Abrió en Roma una escuela cristiana y escribió Apologías dirigidas al emperador, defendiendo que el cristianismo no era una superstición ignorante sino la "verdadera filosofía".',
      },
      {
        heading: 'El juicio',
        body:
          'Conservamos el acta del juicio. El prefecto Rústico le pregunta: "¿Crees que si te decapitan subirás al cielo?". Justino responde: "No lo creo, lo sé". Lo decapitan junto a seis discípulos. Pasa a la historia como "Justino Mártir".',
      },
      {
        heading: 'Por qué los romanos los odiaban',
        body:
          'Para un romano culto, el cristiano era doblemente sospechoso: ateo (no creía en los dioses), antisocial (no iba a los espectáculos ni a los sacrificios cívicos) y poco patriota (rezaba por el César pero no al César). Era "alguien que no juega".',
      },
    ],
    quote: {
      text: '"Podéis matarnos, pero no podéis hacernos daño."',
      ref: 'Justino, Apología I, 2',
    },
    legacy:
      'Justino abre una nueva forma de cristianismo: el que dialoga con la cultura, no la ignora. Sus discípulos serán los Padres de la Iglesia.',
    sources: [
      { label: 'Justino — Apologías y Diálogo', href: 'https://www.newadvent.org/fathers/0126.htm' },
    ],
  },
  {
    year: 177,
    yearLabel: '177 d.C.',
    title: 'Los mártires de Lyon',
    emperor: 'Marco Aurelio (161–180)',
    short: 'Cuarenta y ocho cristianos en el anfiteatro de las Galias',
    icon: '🦁',
    intensity: 'alta',
    intro:
      'En la ciudad gala de Lugdunum (Lyon, en la actual Francia), una multitud enfurecida arrastra a los cristianos al anfiteatro durante una fiesta pública. Mueren cuarenta y ocho personas, incluido el obispo Potino, de noventa años, y la esclava Blandina, una joven frágil que se convertirá en símbolo.',
    paragraphs: [
      {
        heading: 'Una carta que sobrevive',
        body:
          'Las iglesias hermanas de Asia Menor pidieron un relato de lo ocurrido. La carta enviada desde Lyon se conservó completa en la Historia Eclesiástica de Eusebio. Es uno de los testimonios más estremecedores de toda la antigüedad.',
      },
      {
        heading: 'Blandina',
        body:
          'A Blandina la torturaron desde la mañana hasta la noche durante varios días. La colgaron de un poste para que las fieras la devoraran (no la atacaron). La metieron en una red y la arrojaron a un toro. Finalmente la degollaron. Sus compañeros decían que en ella veían "a Cristo crucificado".',
      },
      {
        heading: 'Por qué tanto odio popular',
        body:
          'Los romanos creían rumores horribles: que los cristianos comían niños (malinterpretando la Eucaristía), que practicaban incesto (porque se llamaban entre sí "hermano" y "hermana") y que su "ateísmo" provocaba la ira de los dioses y traía pestes y malas cosechas. La persecución muchas veces venía del pueblo, no del emperador.',
      },
    ],
    quote: {
      text: '"Soy cristiana, y entre nosotros nada malo se hace."',
      ref: 'Blandina, citada en la Carta de Lyon (177)',
    },
    legacy:
      'Lyon muestra que las persecuciones más feroces no siempre venían de leyes imperiales: bastaba una multitud con miedo y un magistrado dispuesto a complacerla.',
    sources: [
      { label: 'Carta de las Iglesias de Lyon y Vienne', href: 'https://www.newadvent.org/fathers/250105.htm' },
    ],
  },
  {
    year: 203,
    yearLabel: '203 d.C.',
    title: 'Perpetua y Felicidad',
    emperor: 'Septimio Severo (193–211)',
    short: 'Una joven madre y su esclava embarazada, frente a las fieras',
    icon: '✝️',
    intensity: 'alta',
    intro:
      'En Cartago (norte de África) cae en prisión un grupo de catecúmenos —cristianos en preparación para el bautismo—. Entre ellos, una joven noble de 22 años llamada Perpetua, con un bebé de pecho, y su esclava Felicidad, embarazada de ocho meses. Septimio Severo había prohibido las nuevas conversiones.',
    paragraphs: [
      {
        heading: 'Un diario en la cárcel',
        body:
          'Perpetua escribió un diario mientras esperaba la muerte. Es el primer texto cristiano escrito por una mujer que conservamos. Cuenta cómo su padre pagano le rogaba de rodillas que renegara, cómo le quitaron al bebé, cómo soñaba con escaleras al cielo guardadas por dragones.',
      },
      {
        heading: 'Felicidad da a luz en la cárcel',
        body:
          'Felicidad temía no poder morir con sus compañeros porque la ley romana prohibía ejecutar a embarazadas. Dos días antes del espectáculo dio a luz a una niña entre dolores. Una guardiana le preguntó cómo soportaría las fieras si gritaba así por un parto. Respondió: "Ahora sufro yo; allí sufrirá Otro en mí, porque también yo sufriré por Él".',
      },
      {
        heading: 'En el anfiteatro',
        body:
          'El día del espectáculo las arrojaron a una vaca salvaje. Heridas pero vivas, fueron rematadas a espada. Perpetua, según el testigo, guió ella misma la mano temblorosa del joven gladiador hacia su garganta.',
      },
    ],
    quote: {
      text: '"No puedo llamarme sino lo que soy: cristiana."',
      ref: 'Perpetua, Pasión de Perpetua y Felicidad',
    },
    legacy:
      'La pasión de Perpetua se leía en las iglesias del norte de África como si fuera Escritura. Agustín tendrá que recordar siglos después: "es relato edificante, pero no es la Biblia".',
    sources: [
      { label: 'Pasión de Perpetua y Felicidad', href: 'https://www.newadvent.org/fathers/0324.htm' },
    ],
  },
  {
    year: 250,
    yearLabel: '250 d.C.',
    title: 'Decio: la primera persecución universal',
    emperor: 'Decio (249–251)',
    short: 'Todos los habitantes del Imperio deben sacrificar a los dioses',
    icon: '📋',
    intensity: 'extrema',
    intro:
      'Hasta ahora las persecuciones habían sido locales o esporádicas. Con Decio cambia todo: por primera vez un emperador ordena que TODOS los habitantes del Imperio ofrezcan un sacrificio a los dioses romanos y reciban un certificado oficial. Es una persecución contra los cristianos disfrazada de unidad religiosa.',
    paragraphs: [
      {
        heading: 'Los libelli',
        body:
          'Quien sacrificaba recibía un certificado en papiro llamado libellus. Hoy conservamos varios de estos certificados, encontrados en Egipto. Sin libellus eras sospechoso. Con libellus —si lo conseguías sacrificando de verdad— habías negado a Cristo.',
      },
      {
        heading: 'La Iglesia se rompe por dentro',
        body:
          'Muchos cristianos sacrificaron por miedo. Otros sobornaron a los funcionarios para conseguir un libellus falso sin sacrificar (a estos se les llamó libellatici). Solo una minoría se mantuvo firme y sufrió la cárcel o la muerte (los confesores y mártires). Cuando termina la persecución, surge un debate brutal: ¿hay que readmitir en la Iglesia a los que negaron la fe?',
      },
      {
        heading: 'Mueren grandes obispos',
        body:
          'Cae el obispo de Roma, Fabián. Cae el de Antioquía. Cae el de Jerusalén. Orígenes, el más grande teólogo de la época, es torturado salvajemente y muere poco después por las heridas. La cabeza de la Iglesia queda sin pastores principales.',
      },
    ],
    quote: {
      text: '"Cualquiera estaría dispuesto a aprobar otro emperador en Roma antes que un nuevo obispo de Roma."',
      ref: 'Atribuido a Decio (Cipriano)',
    },
    legacy:
      'El cisma sobre los "caídos" (lapsi) abrirá grandes debates: nace la pregunta sobre el perdón, la penitencia y la santidad de la Iglesia que llegará hasta Lutero.',
    sources: [
      { label: 'Cipriano de Cartago — De lapsis', href: 'https://www.newadvent.org/fathers/050706.htm' },
    ],
  },
  {
    year: 257,
    yearLabel: '257–260 d.C.',
    title: 'Valeriano: el ataque al clero',
    emperor: 'Valeriano (253–260)',
    short: 'Apuntan directo al liderazgo cristiano',
    icon: '🪨',
    intensity: 'alta',
    intro:
      'Valeriano hace algo más astuto que Decio: en vez de ir contra todos los cristianos, ataca al liderazgo. Confisca propiedades de la Iglesia, prohíbe las reuniones, y exige a obispos, presbíteros y diáconos sacrificar bajo pena de muerte. Quiere descabezar el movimiento.',
    paragraphs: [
      {
        heading: 'Cipriano de Cartago',
        body:
          'El obispo más influyente del momento, Cipriano, había sobrevivido a la persecución de Decio escondiéndose. Esta vez decide quedarse. Es desterrado primero y, al volver, decapitado el 14 de septiembre del 258. Sus últimas palabras al juez fueron: "Doy gracias a Dios".',
      },
      {
        heading: 'Sixto II en las catacumbas',
        body:
          'El obispo de Roma, Sixto II, es sorprendido predicando en las catacumbas de Calixto. Lo decapitan allí mismo, sentado en su silla episcopal. Cuatro de sus diáconos mueren con él. Días después, su diácono Lorenzo es ejecutado también (la tradición dice que sobre una parrilla, aunque probablemente fue decapitado).',
      },
      {
        heading: 'El final irónico de Valeriano',
        body:
          'Valeriano cae prisionero del rey persa Sapor I en la batalla de Edesa (260). Muere humillado en cautiverio: la tradición persa cuenta que el rey lo usaba como banquillo para subir a su caballo. Su hijo Galieno, al asumir el trono, suspende la persecución y devuelve los cementerios a la Iglesia. Es el primer "edicto de tolerancia".',
      },
    ],
    quote: {
      text: '"Deo gratias." (Doy gracias a Dios.)',
      ref: 'Últimas palabras de Cipriano antes de ser decapitado, 258',
    },
    legacy:
      'Cuarenta años de paz siguen al edicto de Galieno. La Iglesia crece enormemente, construye templos visibles, se vuelve influyente. Justo lo que necesitaba la siguiente y peor persecución para tener víctimas a la mano.',
    sources: [
      { label: 'Acta proconsularia de Cipriano', href: 'https://www.newadvent.org/fathers/0506.htm' },
    ],
  },
  {
    year: 303,
    yearLabel: '303–311 d.C.',
    title: 'Diocleciano: la Gran Persecución',
    emperor: 'Diocleciano y los tetrarcas',
    short: 'Diez años de aniquilación sistemática',
    icon: '💀',
    intensity: 'extrema',
    intro:
      'Diocleciano lleva veinte años reformando el Imperio cuando, presionado por su yerno Galerio, lanza el 23 de febrero del 303 el primero de cuatro edictos contra los cristianos. Es la persecución más larga, mejor planificada y más cruel de toda la historia romana. La Iglesia la recordará simplemente como "La Gran Persecución".',
    paragraphs: [
      {
        heading: 'Los cuatro edictos',
        body:
          'Primero: destruir todas las iglesias, quemar las Escrituras, prohibir las reuniones. Segundo: encarcelar a todo el clero. Tercero: torturar a los presos hasta que sacrificaran. Cuarto (304): obligar a TODA la población a sacrificar bajo pena de muerte. Es la maquinaria estatal completa contra una religión.',
      },
      {
        heading: 'Los traditores',
        body:
          'Muchos cristianos entregaron las Escrituras a los soldados para salvar la vida. Se les llamó traditores ("entregadores" — de ahí viene la palabra "traidor"). Después de la persecución, algunos no quisieron readmitirlos: nacerá el cisma donatista en África.',
      },
      {
        heading: 'Una geografía desigual',
        body:
          'En Occidente la persecución fue más blanda: Constancio Cloro, padre del futuro Constantino, apenas la aplicó en Galia y Britania. En Oriente, en cambio, fue brutal, especialmente en Egipto y Palestina. Eusebio de Cesarea, que lo vivió, llenó páginas con nombres y muertes.',
      },
      {
        heading: 'El edicto de Galerio (311)',
        body:
          'Después de ocho años, ya enfermo y derrotado, Galerio —el gran impulsor de la persecución— firma desde su lecho de muerte un edicto increíble: pide a los cristianos que recen por él. Reconoce que la persecución ha fracasado. Pocos días después, muere.',
      },
    ],
    quote: {
      text: '"Tengan misericordia de los cristianos y permítanles existir, con tal de que rueguen a su Dios por nuestra salud."',
      ref: 'Edicto de Galerio, abril de 311',
    },
    legacy:
      'Diocleciano quiso borrar el cristianismo del Imperio. Diez años después, el cristianismo era libre. Doce años después, un emperador cristiano gobernaba Roma.',
    sources: [
      { label: 'Eusebio — Historia Eclesiástica VIII', href: 'https://www.newadvent.org/fathers/250108.htm' },
      { label: 'Lactancio — Sobre la muerte de los perseguidores', href: 'https://www.newadvent.org/fathers/0705.htm' },
    ],
  },
  {
    year: 313,
    yearLabel: '313 d.C.',
    title: 'Edicto de Milán: el final',
    emperor: 'Constantino y Licinio',
    short: 'Libertad religiosa para los cristianos',
    icon: '🕊️',
    intensity: 'paz',
    intro:
      'En febrero del 313, los emperadores Constantino (Occidente) y Licinio (Oriente) se reúnen en Milán y acuerdan algo nuevo en la historia: cualquier persona del Imperio puede practicar la religión que quiera. La Iglesia recupera sus templos, sus tierras, sus muertos. Termina, después de 250 años, la era del martirio.',
    paragraphs: [
      {
        heading: 'Constantino, antes del Edicto',
        body:
          'En octubre del 312, antes de la batalla del Puente Milvio, Constantino —según cuenta él mismo— ve una cruz en el cielo con las palabras "In hoc signo vinces" ("Con este signo vencerás"). Manda pintar el monograma de Cristo en los escudos de sus soldados. Gana la batalla. Desde entonces se considera protegido por el Dios de los cristianos.',
      },
      {
        heading: 'Qué dice el Edicto',
        body:
          'No convierte el cristianismo en religión oficial (eso pasará después, con Teodosio en 380). Solo dice tres cosas: (1) cada persona puede seguir la religión que quiera; (2) los cristianos pueden reunirse libremente; (3) hay que devolverles todas las propiedades confiscadas, incluso si ahora pertenecen a particulares (el Estado los compensará).',
      },
      {
        heading: 'Un cambio de mundo',
        body:
          'Hace solo dos años, ser cristiano podía costarte la vida. Ahora el emperador devuelve iglesias, paga restauraciones y consulta a los obispos. La Iglesia, que aprendió a vivir perseguida, tendrá que aprender ahora algo igual de difícil: vivir en el poder.',
      },
    ],
    quote: {
      text: '"Hemos decidido… conceder a los cristianos y a todos los demás libre facultad de seguir la religión que cada uno desee."',
      ref: 'Edicto de Milán, 313',
    },
    legacy:
      'El año 313 cierra el ciclo abierto en el 64 con Nerón. Empieza otro: el del cristianismo imperial, con sus luces (los grandes concilios, la teología clásica) y sus sombras (la tentación de usar el poder contra otros). Pero los mártires habían ganado.',
    sources: [
      { label: 'Lactancio — De mortibus persecutorum 48', href: 'https://www.newadvent.org/fathers/0705.htm' },
      { label: 'Eusebio — Historia Eclesiástica X', href: 'https://www.newadvent.org/fathers/250110.htm' },
    ],
  },
];

const INTENSITY_COLORS: Record<PersecutionEvent['intensity'], string> = {
  baja: '#9ca3af',
  media: '#f59e0b',
  alta: '#ef4444',
  extrema: '#7f1d1d',
  paz: '#22c55e',
};

const INTENSITY_LABEL: Record<PersecutionEvent['intensity'], string> = {
  baja: 'Intensidad baja',
  media: 'Intensidad media',
  alta: 'Alta',
  extrema: 'Extrema',
  paz: 'Paz / Tolerancia',
};

export default function TimelinePersecuciones() {
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
          Persecuciones romanas <span style={{ color: t.textMuted, fontWeight: 400 }}>(64 – 313 d.C.)</span>
        </h3>
        <p style={{
          fontFamily: 'var(--font-crimson), serif',
          fontSize: isMobile ? 14 : 16, color: t.textMuted,
          maxWidth: 720, lineHeight: 1.7, margin: 0,
        }}>
          Durante 250 años ser cristiano fue, en el mejor de los casos, sospechoso; en el peor, motivo de muerte. Aquí están las olas más importantes de hostilidad, contadas con lenguaje sencillo. Toca cada hito para conocer su historia.
        </p>

        {/* Legend */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 18,
          fontFamily: 'var(--font-crimson), serif', fontSize: 12, color: t.textMuted,
        }}>
          {(['media', 'alta', 'extrema', 'paz'] as const).map(k => (
            <span key={k} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <span style={{
                display: 'inline-block', width: 10, height: 10, borderRadius: '50%',
                background: INTENSITY_COLORS[k],
              }} />
              {INTENSITY_LABEL[k]}
            </span>
          ))}
        </div>
      </div>

      {isMobile ? (
        <VerticalTimeline events={EVENTS} visible={visible} onOpen={setOpenIdx} />
      ) : (
        <HorizontalTimeline events={EVENTS} visible={visible} onOpen={setOpenIdx} hoverIdx={hoverIdx} setHoverIdx={setHoverIdx} />
      )}

      <p style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 12, color: t.textMuted, marginTop: isMobile ? 24 : 32, textAlign: 'center', fontStyle: 'italic' }}>
        Pulsa cualquier evento para leer su explicación completa.
      </p>

      {event && (
        <EventModal event={event} onClose={() => setOpenIdx(null)} />
      )}
    </div>
  );
}

interface TLProps {
  events: PersecutionEvent[];
  visible: boolean;
  onOpen: (i: number) => void;
  hoverIdx?: number | null;
  setHoverIdx?: (i: number | null) => void;
}

function HorizontalTimeline({ events, visible, onOpen, hoverIdx, setHoverIdx }: TLProps) {
  const { t } = useTheme();
  return (
    <div style={{ position: 'relative', padding: '80px 0 80px', overflowX: 'auto' }}>
      <div style={{ minWidth: events.length * 180, position: 'relative' }}>
        {/* Line */}
        <div style={{
          position: 'absolute', left: '3%', right: '3%', top: '50%', height: 2,
          background: `linear-gradient(to right, transparent, ${t.accent}80 6%, ${t.accent}80 94%, transparent)`,
          transform: 'translateY(-1px)',
          opacity: visible ? 1 : 0, transition: 'opacity 1s ease',
        }} />

        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${events.length}, 1fr)`, position: 'relative' }}>
          {events.map((ev, i) => {
            const above = i % 2 === 0;
            const isHover = hoverIdx === i;
            const dot = INTENSITY_COLORS[ev.intensity];
            return (
              <button
                key={ev.year}
                onClick={() => onOpen(i)}
                onMouseEnter={() => setHoverIdx?.(i)}
                onMouseLeave={() => setHoverIdx?.(null)}
                aria-label={`Abrir evento del año ${ev.year}: ${ev.title}`}
                style={{
                  position: 'relative',
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: 0,
                  minHeight: 360,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'none' : 'translateY(20px)',
                  transition: `opacity 0.7s ease ${0.1 + i * 0.08}s, transform 0.7s ease ${0.1 + i * 0.08}s`,
                }}
              >
                <div style={{
                  position: 'absolute',
                  [above ? 'bottom' : 'top']: 'calc(50% + 28px)',
                  left: '50%', transform: `translateX(-50%) ${isHover ? 'translateY(-4px)' : 'translateY(0)'}`,
                  width: 'min(200px, 90vw)',
                  background: t.bgCard,
                  border: `1px solid ${isHover ? t.accent : t.border}`,
                  borderTop: `3px solid ${dot}`,
                  padding: '14px 14px',
                  textAlign: 'center',
                  transition: 'all 0.25s ease',
                  boxShadow: isHover ? `0 12px 32px ${t.accent}25` : 'none',
                }}>
                  <div style={{ fontSize: 26, marginBottom: 6 }}>{ev.icon}</div>
                  <div style={{
                    fontFamily: 'var(--font-playfair), serif', fontSize: 15, fontWeight: 700,
                    color: t.text, lineHeight: 1.25, marginBottom: 4,
                  }}>{ev.title}</div>
                  <div style={{
                    fontFamily: 'var(--font-crimson), serif', fontSize: 11, color: t.textMuted,
                    lineHeight: 1.4, marginBottom: 6,
                  }}>{ev.emperor}</div>
                  <div style={{
                    fontFamily: 'var(--font-crimson), serif', fontSize: 11, color: t.textMuted,
                    lineHeight: 1.4,
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
                  background: t.bg, border: `2px solid ${dot}`,
                  boxShadow: isHover ? `0 0 0 6px ${dot}33` : `0 0 0 3px ${dot}15`,
                  transition: 'box-shadow 0.25s',
                }}>
                  <div style={{
                    position: 'absolute', inset: 4, borderRadius: '50%',
                    background: isHover ? dot : 'transparent',
                    transition: 'background 0.25s',
                  }} />
                </div>

                <div style={{
                  position: 'absolute',
                  [above ? 'top' : 'bottom']: 'calc(50% + 22px)',
                  fontFamily: 'var(--font-playfair), serif',
                  fontSize: 18, fontWeight: 700,
                  color: isHover ? t.accent : t.text,
                  letterSpacing: '0.02em',
                  transition: 'color 0.25s',
                  whiteSpace: 'nowrap',
                }}>{ev.yearLabel}</div>
              </button>
            );
          })}
        </div>
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
        {events.map((ev, i) => {
          const dot = INTENSITY_COLORS[ev.intensity];
          return (
            <div
              key={ev.year}
              style={{
                display: 'flex', alignItems: 'stretch',
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateX(12px)',
                transition: `opacity 0.5s ease ${0.1 + i * 0.08}s, transform 0.5s ease ${0.1 + i * 0.08}s`,
              }}
            >
              <div style={{ width: RAIL, flexShrink: 0, position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: RAIL / 2 - NODE / 2,
                  top: 22,
                  width: NODE, height: NODE, borderRadius: '50%',
                  background: dot,
                  boxShadow: `0 0 0 4px ${t.bgSec}, 0 0 0 5px ${dot}55`,
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
                  borderLeft: `3px solid ${dot}`,
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
                    fontFamily: 'var(--font-playfair), serif', fontSize: 17, fontWeight: 700,
                    color: t.accent, letterSpacing: '0.02em',
                  }}>{ev.yearLabel}</span>
                  <span style={{ fontSize: 18, opacity: 0.9 }}>{ev.icon}</span>
                </div>
                <div style={{
                  fontFamily: 'var(--font-playfair), serif', fontSize: 16, fontWeight: 700,
                  color: t.text, lineHeight: 1.25, marginBottom: 2,
                }}>{ev.title}</div>
                <div style={{
                  fontFamily: 'var(--font-crimson), serif', fontSize: 12, color: t.textMuted,
                  lineHeight: 1.4, marginBottom: 6,
                }}>{ev.emperor}</div>
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
          );
        })}
      </div>
    </div>
  );
}

function EventModal({ event, onClose }: { event: PersecutionEvent; onClose: () => void }) {
  const { t } = useTheme();
  const isMobile = useIsMobile();
  const dot = INTENSITY_COLORS[event.intensity];

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
        {/* Color band by intensity */}
        <div style={{ height: 4, background: dot, flexShrink: 0 }} />

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
          }}>{event.yearLabel} · Persecuciones</span>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <span style={{ fontSize: isMobile ? 32 : 40 }}>{event.icon}</span>
              <h3 style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: isMobile ? 24 : 36, color: t.text, fontWeight: 700,
                lineHeight: 1.15, margin: 0,
              }}>{event.title}</h3>
            </div>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: 'var(--font-crimson), serif', fontSize: 12,
              color: t.textMuted, marginBottom: 14,
            }}>
              <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: dot }} />
              {event.emperor} · {INTENSITY_LABEL[event.intensity]}
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
