export interface Paragraph {
  heading?: string;
  body: string;
}

export interface TimelineEvent {
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

export interface CenturyData {
  num: number;
  roman: string;
  title: string;
  range: string;
  intro: string;
  events: TimelineEvent[];
}

const C1: CenturyData = {
  num: 1, roman: 'I',
  title: 'Los cimientos',
  range: '30 – 100 d.C.',
  intro: 'Setenta años bastaron para que un movimiento de discípulos galileos se transformara en una Iglesia presente desde Jerusalén hasta Roma. Toca cada hito para conocer su historia.',
  events: [
    {
      year: 0, yearLabel: 'Intro', title: 'Introducción', short: 'Contexto histórico', icon: '👀',
      intro: 'Para entender el contexto del Nuevo Testamento, es importante ver qué pasó antes de que llegaran los romanos. Israel pasó por varios gobiernos y cada uno dejó una marca importante.',
      paragraphs: [
        { heading: '1. Dominio griego (período helenístico)', body: 'Después de las conquistas de Alejandro Magno (alrededor del 330 a.C.), Palestina quedó bajo el dominio griego. A este tiempo se le conoce como período helenístico. Uno de los gobernantes más conocidos fue Antíoco IV Epífanes, quien intentó imponer la cultura griega sobre los judíos, provocando gran tensión.' },
        { heading: '2. Rebelión de los Macabeos (167 a.C.)', body: 'En el año 167 a.C., los judíos se levantaron contra el dominio griego. El líder principal fue Judas Macabeo, quien luchó por defender la fe judía. Gracias a esta rebelión, lograron recuperar Jerusalén y restaurar sus prácticas religiosas.' },
        { heading: '3. Independencia judía (Hasmoneos)', body: 'Después de la victoria, comenzó el gobierno de la familia Hasmonea. Este período duró casi 100 años (aprox. 160–63 a.C.). Los judíos gobernaron su propio territorio, pero hubo conflictos internos entre sus líderes, lo que debilitó su estabilidad.' },
        { heading: '4. Llegada del Imperio romano (63 a.C.)', body: 'En el año 63 a.C., el general romano Pompeyo entró en Jerusalén y tomó el control. Esto ocurrió en medio de conflictos internos entre los mismos judíos. Desde ese momento, Israel quedó bajo el dominio del Imperio romano.' },
        { heading: 'El Nuevo Testamento da evidencia del gobierno romano', body: 'Cuando leemos el Nuevo Testamento, vemos centuriones, gobernadores y autoridades romanas. Incluso, a Jesús se le hace una pregunta sobre si era correcto servir a Dios bajo ese gobierno (Mateo 22:21).' },
        { heading: '¿El gobierno romano fue bueno?', body: 'El gobierno romano no fue completamente bueno ni completamente malo. Mantenía el orden y facilitó cosas como las carreteras y los viajes, lo que más adelante ayudó a la expansión del evangelio.' },
        { heading: '¿Roma fue enemiga de los cristianos?', body: 'Con el tiempo, especialmente hacia finales del siglo I, los romanos comenzaron a perseguir a los cristianos porque no adoraban a sus dioses ni al emperador.' },
      ],
      quote: { text: 'Dad, pues, a César lo que es de César, y a Dios lo que es de Dios.', ref: 'Mateo 22:21' },
      legacy: '', sources: [],
    },
    {
      year: 30, yearLabel: 'c. 30 d.C.', title: 'El Evangelio', short: 'Muerte, resurrección de Jesús y nacimiento de la Iglesia', icon: '✝',
      intro: 'En la Pascua del año 30, bajo el procurador romano Poncio Pilato, Jesús de Nazaret es crucificado en las afueras de Jerusalén. Tres días después, sus discípulos proclaman que ha resucitado. Cincuenta días más tarde, en Pentecostés, nace lo que la historia llamará la Iglesia.',
      paragraphs: [
        { heading: 'El contexto', body: 'Judea es una provincia agitada del Imperio Romano. El judaísmo del Segundo Templo convive con corrientes diversas: fariseos, saduceos, esenios y zelotes. En medio de tensiones políticas y religiosas, un predicador galileo recorre las aldeas anunciando que “el Reino de Dios se ha acercado”.' },
        { heading: 'Escribas', body: 'Conocidos como los intérpretes de la ley, al principio, su deber principal era copiar las Escrituras, pero dado que llegaron a ser expertos en lo que las Escrituras decían sus funciones se fueran ampliando, no solamente copiaban las Escrituras, ahora en sus deberes incluía la interpretación e instrucción escrituraria.' },
        { heading: 'Esenios', body: 'Muchos como Baker piensa que este grupo salió a raiz del contacto entre los las ideas religioesas judías y persas, este grupo se encargaba de una ortodoxa rigurosa, el celibato, la propiedad común y el no sacrificar animales en el culto.' },
        { heading: 'Fariseos', body: 'Baker lo define así: Indudblemente se desarrollaron de las tendencias separatistas cuando las proposiciones de los samaritnanos fieron rechazadas dueante los días de Esdras y Nehemías (alrededor del año 500 a de J.C) durante la lucha de los Macabeos (que empezón aproximadamente en el año 167 a de J.C). Este partido tomó una forma distinta, en el N.T son descritos con criterios estrechos, fanáticos, y hasta cierto punto hipócritas. Eran numerosos y populares en los tiempos de Jesús.' },
        { heading: 'La cruz y la tumba vacía', body: 'Acusado de blasfemia por las autoridades del Templo y entregado a Roma como agitador, Jesús muere crucificado, la pena reservada a esclavos y rebeldes. Para sus seguidores, todo parecía haber terminado. Pero el testimonio unánime de los primeros cristianos —recogido por Pablo apenas dos décadas después en 1 Corintios 15— es que el sepulcro apareció vacío y que el Resucitado se manifestó “a más de quinientos hermanos a la vez”.' },
        { heading: 'Pentecostés: el inicio', body: 'Hechos 2 narra que, reunidos en Jerusalén durante la fiesta judía de Shavuot, los discípulos reciben el Espíritu Santo. Pedro predica públicamente y, según el relato, “se añadieron aquel día como tres mil personas”. Esa pequeña comunidad —judía, mesiánica, pobre y temerosa— es el embrión de un movimiento que en tres siglos cambiará al mundo conocido.' },
      ],
      quote: { text: '“Si Cristo no resucitó, vana es entonces nuestra predicación, vana es también vuestra fe.”', ref: '1 Corintios 15:14 — Pablo de Tarso, c. 54 d.C.' },
      legacy: 'Sin la resurrección y sin Pentecostés no habría iglesia, ni Nuevo Testamento, ni cristianismo. Toda la historia que sigue es comentario sobre este punto de partida.',
      sources: [
        { label: 'González, Justo — Historia del cristianismo, vol. I', href: 'https://www.editorialclie.es/' },
        { label: 'Britannica — Early Christianity', href: 'https://www.britannica.com/topic/Christianity/The-history-of-Christianity' },
      ],
    },
    {
      year: 64, yearLabel: '64 d.C.', title: 'Nerón y el incendio de Roma', short: 'Primera gran persecución imperial contra los cristianos', icon: '🔥',
      intro: 'En la noche del 18 al 19 de julio del año 64, un incendio devora Roma durante seis días. Diez de los catorce barrios resultan destruidos. El emperador Nerón, sospechoso de haberlo provocado para reconstruir la ciudad a su gusto, busca un chivo expiatorio: encuentra a los cristianos.',
      paragraphs: [
        { heading: 'Una secta extraña', body: 'A los romanos los cristianos les resultaban incomprensibles: no adoraban a los dioses del Estado, hablaban de comer “cuerpo y sangre”, se reunían en secreto y predicaban un reino que no era de este mundo. Eran fáciles de convertir en culpables de la desgracia colectiva.' },
        { heading: 'El testimonio de Tácito', body: 'Cincuenta años después, el historiador romano Tácito —ningún amigo de los cristianos— describe la persecución: fueron cubiertos con pieles de animales y arrojados a los perros, crucificados, o quemados como antorchas en los jardines imperiales. “Surgió la compasión, aunque eran culpables y merecían los castigos más extremos” (Anales XV, 44).' },
        { heading: 'Persecución', body: 'Aquí podemos decir que empieza la primera persecución Romana.' },
        { heading: 'Pedro y Pablo', body: 'La tradición eclesiástica más antigua sitúa entre el 64 y el 67 los martirios de Pedro —crucificado, según se cuenta, cabeza abajo en la colina vaticana— y de Pablo —decapitado en la Vía Ostiense por ser ciudadano romano—. Sus tumbas se convertirán siglos después en las basílicas de San Pedro y San Pablo Extramuros.' },
      ],
      quote: { text: '“Nerón, para acabar con el rumor, presentó como culpables… a esos que el vulgo llamaba cristianos.”', ref: 'Tácito, Anales XV, 44 — c. 116 d.C.' },
      legacy: 'La persecución neroniana inaugura tres siglos de hostilidad intermitente del Estado romano contra los cristianos. La sangre de los mártires, escribirá Tertuliano, será “semilla de nuevos cristianos”.',
      sources: [
        { label: 'Tácito — Anales (texto latino-español)', href: 'https://www.thelatinlibrary.com/tacitus.html' },
        { label: 'Britannica — Nero', href: 'https://www.britannica.com/biography/Nero-Roman-emperor' },
      ],
    },
    {
      year: 70, yearLabel: '70 d.C.', title: 'Destrucción del Templo', short: 'Tito arrasa Jerusalén y cae el Segundo Templo', icon: '⛓',
      intro: 'Tras una rebelión judía de cuatro años contra Roma, el general Tito —hijo del emperador Vespasiano— sitia Jerusalén y, en el verano del año 70, toma la ciudad. El Segundo Templo, corazón de la vida religiosa judía durante cinco siglos, es incendiado y demolido piedra sobre piedra.',
      paragraphs: [
        { heading: 'El asedio', body: 'El historiador judío Flavio Josefo, testigo presencial al servicio de los romanos, describe el hambre y el horror del asedio en La guerra de los judíos. Cientos de miles murieron; otros tantos fueron esclavizados. El Arco de Tito en el Foro Romano todavía muestra a soldados llevando la menorá del Templo como botín.' },
        { heading: 'Cumplimiento de una profecía', body: 'Para los cristianos, la caída del Templo confirma las palabras atribuidas a Jesús pocas décadas antes: “No quedará aquí piedra sobre piedra” (Mt 24:2). Marcos, Mateo y Lucas escriben sus evangelios en torno a este acontecimiento, dándole un peso teológico decisivo.' },
        { heading: 'Separación con el judaísmo', body: 'Sin Templo, sin sacerdocio sacrificial y con Jerusalén en ruinas, el judaísmo se reorganiza en torno a la sinagoga y la Torá (concilio de Yavné). El cristianismo, ya mayoritariamente gentil tras la misión de Pablo, deja de ser percibido como una corriente del judaísmo: nace como religión propia.' },
      ],
      quote: { text: '“Vendrán días sobre ti en que tus enemigos te rodearán… y no dejarán en ti piedra sobre piedra.”', ref: 'Lucas 19:43-44' },
      legacy: 'El año 70 marca el fin del judaísmo del Templo y el principio de un cristianismo que se piensa a sí mismo como nuevo pueblo de Dios. Es la frontera entre el mundo de Jesús y el mundo de la Iglesia.',
      sources: [
        { label: 'Flavio Josefo — La guerra de los judíos', href: 'https://www.gutenberg.org/ebooks/2850' },
        { label: 'Britannica — Siege of Jerusalem (70 CE)', href: 'https://www.britannica.com/event/Siege-of-Jerusalem-70' },
      ],
    },
    {
      year: 100, yearLabel: 'c. 100 d.C.', title: 'Muerte de los apóstoles', short: 'Fin de la era apostólica con la muerte de Juan', icon: '📜',
      intro: 'Hacia el final del siglo I, en torno al año 100, muere en Éfeso el apóstol Juan, último de los Doce. Con él se cierra la generación que vio, oyó y tocó a Jesús. Comienza el tiempo en que la Iglesia ya no escucha al Maestro por boca de testigos directos, sino a través de sus escritos y sus discípulos.',
      paragraphs: [
        { heading: 'Una generación que se apaga', body: 'Casi todos los apóstoles murieron mártires en distintos rincones del Imperio y más allá: Andrés en Patras, Tomás —según una tradición sólida— en la India, Santiago el Mayor decapitado en Jerusalén ya en el 44, Felipe en Hierápolis. Solo Juan, según Ireneo de Lyon, alcanzó “la edad de un anciano” y murió de muerte natural.' },
        { heading: 'El cierre del Nuevo Testamento', body: 'En este último tramo del siglo se completan los escritos joánicos: el Cuarto Evangelio, las tres cartas y el Apocalipsis, redactado probablemente desde el destierro en la isla de Patmos bajo Domiciano. Con ellos queda esencialmente cerrado el corpus que la Iglesia reconocerá luego como Nuevo Testamento.' },
        { heading: 'Surgen los Padres Apostólicos', body: 'La autoridad pasa ahora a los obispos discípulos directos de los apóstoles: Clemente de Roma, Ignacio de Antioquía, Policarpo de Esmirna. Sus cartas, escritas entre el 95 y el 110, son los primeros testimonios cristianos fuera del Nuevo Testamento y muestran una Iglesia ya jerárquicamente organizada en torno al obispo, los presbíteros y los diáconos.' },
      ],
      quote: { text: '“Lo que hemos oído, lo que hemos visto con nuestros ojos, lo que contemplamos y palparon nuestras manos… eso os anunciamos.”', ref: '1 Juan 1:1' },
      legacy: 'El final del siglo I marca el paso del cristianismo del testigo presencial al cristianismo de la tradición. Lo que viene a continuación —apologistas, mártires, concilios— se construirá siempre sobre la fe transmitida por esa primera generación.',
      sources: [
        { label: 'Ireneo de Lyon — Contra las herejías', href: 'https://www.newadvent.org/fathers/0103.htm' },
        { label: 'Padres Apostólicos (texto en línea)', href: 'https://www.earlychristianwritings.com/' },
      ],
    },
  ],
};

const C2: CenturyData = {
  num: 2, roman: 'II', title: 'Apologistas y mártires', range: '100 – 200 d.C.',
  intro: 'La Iglesia post-apostólica se enfrenta al Imperio, a las herejías internas y a la necesidad de explicar su fe al mundo grecorromano. Surgen los primeros teólogos, los primeros apologistas y los primeros grandes mártires.',
  events: [
    {
      year: 107, yearLabel: 'c. 107 d.C.', title: 'Martirio de Ignacio de Antioquía', short: 'Devorado por las fieras en el Coliseo', icon: '🦁',
      intro: 'Ignacio, obispo de Antioquía y discípulo del apóstol Juan, es arrestado bajo el emperador Trajano y enviado a Roma para ser ejecutado. Durante el viaje escribe siete cartas que se convertirán en piedra angular del cristianismo primitivo.',
      paragraphs: [
        { heading: 'Las siete cartas', body: 'Camino al martirio, Ignacio escribe a las iglesias de Éfeso, Magnesia, Tralles, Roma, Filadelfia, Esmirna y a Policarpo. En ellas defiende la autoridad del obispo, la unidad de la Iglesia y la realidad de la encarnación contra los docetas que negaban que Cristo hubiera tenido cuerpo verdadero.' },
        { heading: 'El "trigo de Cristo"', body: 'En su carta a los romanos suplica que no intercedan por él: «Soy trigo de Dios y debo ser molido por los dientes de las fieras para llegar a ser pan puro de Cristo». Su deseo se cumple: muere despedazado por leones en el Coliseo o el Circo Flaminio.' },
        { heading: 'Primer uso de "Iglesia católica"', 
          body: 'En la carta a los esmirniotas aparece por primera vez la expresión «Iglesia católica» (universal): «Donde está Cristo Jesús, allí está la Iglesia católica». La frase marcará para siempre la autocomprensión cristiana, aclaro cuando hablamos de católica no hablamos de "iglesia católica de roma" como acostumbramos a ver hoy en día, “católica” significa “universal” o “completa”, refiriéndose a la iglesia verdadera extendida por el mundo y unida a Cristo. No debe confundirse directamente con el catolicismo romano moderno, aunque esa tradición posteriormente adoptó y desarrolló el término.".' },
      ],
      quote: { text: '“Mejor para mí morir por Cristo Jesús que reinar sobre los confines de la tierra.”', ref: 'Ignacio, Carta a los Romanos 6,1' },
      legacy: 'Ignacio establece dos pilares duraderos: el episcopado monárquico como garantía de unidad y el martirio como expresión suprema del seguimiento de Cristo.',
      sources: [
        { label: 'Cartas de Ignacio (texto)', href: 'https://www.newadvent.org/fathers/0104.htm' },
        { label: 'Britannica — Ignatius of Antioch', href: 'https://www.britannica.com/biography/Saint-Ignatius-of-Antioch' },
      ],
    },
    {
      year: 112, yearLabel: 'c. 112 d.C.', title: 'Carta de Plinio a Trajano', short: 'Primer documento romano oficial sobre los cristianos', icon: '📜',
      intro: 'Plinio el Joven, gobernador de Bitinia, escribe al emperador Trajano pidiendo instrucciones sobre cómo juzgar a los cristianos. La respuesta imperial fija la política romana durante más de un siglo.',
      paragraphs: [
        { heading: 'El problema de Plinio', body: 'Plinio describe a los cristianos como gente que se reúne antes del amanecer para cantar himnos «a Cristo como a un dios», y que se compromete por juramento no a un crimen sino a no robar, no adulterar y no faltar a la palabra. No encuentra delito real, pero los condena por su «obstinación inflexible».' },
        { heading: 'El rescripto de Trajano', body: 'Trajano responde con tres reglas: no se les debe buscar activamente; si son denunciados y convictos, deben ser castigados; pero el que niegue ser cristiano y lo demuestre adorando a los dioses debe ser absuelto. Las denuncias anónimas no tienen valor.' },
      ],
      quote: { text: '“Cantan un himno a Cristo como a un dios y se obligan por juramento no a algún crimen, sino a no cometer hurtos, ni adulterios.”', ref: 'Plinio el Joven, Cartas X, 96' },
      legacy: 'La correspondencia de Plinio es el primer testimonio externo detallado sobre el culto cristiano y establece el marco legal que perseguirá a la Iglesia hasta el siglo III.',
      sources: [
        { label: 'Plinio — Cartas X, 96-97', href: 'https://www.thelatinlibrary.com/pliny.ep10.html' },
        { label: 'Britannica — Pliny the Younger', href: 'https://www.britannica.com/biography/Pliny-the-Younger' },
      ],
    },
    {
      year: 144, yearLabel: '144 d.C.', title: 'Marción es excomulgado', short: 'La Iglesia rechaza el primer canon alternativo', icon: '⚖',
      intro: 'Marción, hijo de un obispo del Ponto y rico armador, llega a Roma proponiendo una reforma radical: separar al Dios de Jesús del Dios del Antiguo Testamento. La Iglesia romana lo expulsa y le devuelve su donativo.',
      paragraphs: [
        { heading: 'Dos dioses', body: 'Marción enseña que el Dios creador del Antiguo Testamento es un demiurgo justo pero cruel, distinto del Padre amoroso revelado por Jesús. Rechaza todo el AT y reduce el Nuevo a un Lucas mutilado y diez cartas paulinas editadas.' },
        { heading: 'La reacción', body: 'La amenaza es tan seria que obliga a la Gran Iglesia a definir por primera vez su propio canon: los cuatro evangelios, las cartas paulinas íntegras y el AT como Escritura cristiana. Tertuliano le dedicará cinco libros (Contra Marción).' },
      ],
      quote: { text: '“No hay vino nuevo en odres viejos, ni remiendo nuevo en vestido viejo.”', ref: 'Marción, citando Lc 5,36-37 contra el AT' },
      legacy: 'Marción aceleró la formación del canon bíblico cristiano y forzó a la Iglesia a reafirmar la unidad de los dos Testamentos. Su sombra acompaña toda discusión posterior sobre el AT.',
      sources: [
        { label: 'Tertuliano — Contra Marción', href: 'https://www.newadvent.org/fathers/0312.htm' },
        { label: 'Britannica — Marcion', href: 'https://www.britannica.com/biography/Marcion' },
      ],
    },
    {
      year: 155, yearLabel: 'c. 155 d.C.', title: 'Martirio de Policarpo', short: 'El obispo anciano de Esmirna muere quemado', icon: '🔥',
      intro: 'Policarpo, obispo de Esmirna y discípulo directo del apóstol Juan, es arrestado a los 86 años durante una fiesta pública. Su negativa serena a maldecir a Cristo lo lleva a la hoguera.',
      paragraphs: [
        { heading: '"Ochenta y seis años"', body: 'Cuando el procónsul le pide que blasfeme contra Cristo para salvarse, Policarpo responde: «Ochenta y seis años hace que le sirvo, y ningún mal me ha hecho. ¿Cómo podría blasfemar de mi Rey, que me salvó?». La frase queda grabada en la memoria cristiana.' },
        { heading: 'El primer relato de martirio', body: 'La carta de la iglesia de Esmirna que narra su muerte es el primer Acta martyrum cristiana conservada y modelo de toda la literatura martirial posterior. Inaugura el culto a las reliquias y la celebración del aniversario del mártir como su «día de nacimiento» al cielo.' },
      ],
      quote: { text: '“Ochenta y seis años llevo sirviéndole, y ningún mal me ha hecho. ¿Cómo podría blasfemar de mi Rey, que me salvó?”', ref: 'Martirio de Policarpo 9,3' },
      legacy: 'Policarpo encarna el puente vivo entre los apóstoles y la Iglesia del siglo II. Su martirio fija el modelo cristiano de morir como morirá Cristo: sin huida, sin maldición, en oración.',
      sources: [
        { label: 'Martirio de Policarpo (texto)', href: 'https://www.newadvent.org/fathers/0102.htm' },
        { label: 'Britannica — Polycarp', href: 'https://www.britannica.com/biography/Saint-Polycarp' },
      ],
    },
    {
      year: 165, yearLabel: 'c. 165 d.C.', title: 'Martirio de Justino', short: 'El filósofo que defendió la fe como «verdadera filosofía»', icon: '🏛',
      intro: 'Justino, nacido pagano en Samaria, recorrió todas las escuelas filosóficas de su tiempo antes de convertirse al cristianismo. Abrió una escuela en Roma y escribió las primeras grandes apologías dirigidas a los emperadores. Bajo Marco Aurelio es decapitado junto a seis discípulos.',
      paragraphs: [
        { heading: 'La fe como filosofía', body: 'Frente a Celso y a los paganos cultos que despreciaban a los cristianos por ignorantes, Justino sostuvo lo contrario: el cristianismo no es una superstición de incultos, sino la «verdadera filosofía». Enseñó que las semillas del Logos divino estaban repartidas también en Sócrates y Platón, y que en Cristo esa Razón se había revelado entera. Inauguró así la tradición de un cristianismo que dialoga con la cultura en vez de ignorarla.' },
        { heading: '"No lo creo, lo sé"', body: 'Conservamos el acta de su juicio ante el prefecto Rústico. Cuando este le pregunta si cree que al ser decapitado subirá al cielo, Justino responde: «No lo creo, lo sé». Lo ejecutan con seis compañeros. Pasa a la historia como Justino Mártir, el apologista que selló con su sangre lo que había defendido con la pluma.' },
      ],
      quote: { text: '“No lo creo, lo sé.”', ref: 'Actas del martirio de Justino, ante el prefecto Rústico' },
      legacy: 'Justino abre una vía decisiva: la del cristianismo que razona y dialoga con la filosofía, no solo el que predica y muere. Sus apologías son el primer intento serio de explicar la fe en las categorías de la cultura grecorromana, y sus discípulos prolongarán esa tarea entre los Padres de la Iglesia.',
      sources: [
        { label: 'Justino — Apologías y Diálogo con Trifón', href: 'https://www.newadvent.org/fathers/0126.htm' },
        { label: 'Britannica — Justin Martyr', href: 'https://www.britannica.com/biography/Saint-Justin-Martyr' },
      ],
    },
    {
      year: 180, yearLabel: 'c. 180 d.C.', title: 'Ireneo y Contra las herejías', short: 'Primera gran síntesis teológica', icon: '📚',
      intro: 'Ireneo, obispo de Lyon y discípulo de Policarpo, publica Adversus Haereses, cinco libros contra el gnosticismo. La obra es la primera teología sistemática cristiana y la primera defensa razonada de la regla de fe.',
      paragraphs: [
        { heading: 'Contra el gnosticismo', body: 'El gnosticismo enseñaba un dualismo extremo, un dios desconocido superior al creador y la salvación por «conocimiento» (gnosis) reservado a una élite. Ireneo desmonta sus mitos y opone tres criterios de verdad: las Escrituras, la sucesión apostólica y la regla de fe transmitida públicamente.' },
        { heading: 'Recapitulación en Cristo', body: 'Ireneo desarrolla la idea de que Cristo «recapituló» en sí toda la historia humana: lo que Adán perdió, Cristo lo restaura. Esta visión cósmica de la salvación marcará toda la teología posterior, sobre todo la oriental.' },
      ],
      quote: { text: '“La gloria de Dios es el hombre vivo; y la vida del hombre es la visión de Dios.”', ref: 'Ireneo, Adv. Haer. IV, 20, 7' },
      legacy: 'Con Ireneo el cristianismo deja de ser solo predicación y martirio para convertirse en teología. Define lo que es ortodoxia y lo que es herejía con una claridad que marcará los siglos siguientes.',
      sources: [
        { label: 'Ireneo — Contra las herejías', href: 'https://www.newadvent.org/fathers/0103.htm' },
        { label: 'Britannica — Irenaeus', href: 'https://www.britannica.com/biography/Saint-Irenaeus' },
      ],
    },
  ],
};

const C3: CenturyData = {
  num: 3, roman: 'III', title: 'Mártires y pensadores', range: '200 – 300 d.C.',
  intro: 'El siglo III alterna períodos de paz con persecuciones imperiales sistemáticas. Mientras tanto, escuelas teológicas en Alejandría y Cartago dan al cristianismo su primera elaboración intelectual madura.',
  events: [
    {
      year: 203, yearLabel: '203 d.C.', title: 'Perpetua y Felicidad', short: 'Mártires en Cartago bajo Septimio Severo', icon: '🌹',
      intro: 'En el anfiteatro de Cartago, una joven aristócrata de 22 años llamada Vibia Perpetua y su esclava embarazada Felicidad son ejecutadas por negarse a sacrificar a los dioses. Su diario en prisión es uno de los textos más extraordinarios de la antigüedad.',
      paragraphs: [
        { heading: 'Un diario en la cárcel', body: 'La Pasión de Perpetua y Felicidad incluye páginas escritas por la propia Perpetua, lo que la convierte en uno de los primeros textos de autoría femenina del mundo cristiano. Describe sus visiones, las visitas de su padre suplicándole que abjure y su decisión inquebrantable.' },
        { heading: 'La arena', body: 'Felicidad da a luz en prisión dos días antes de la ejecución. Ambas son llevadas al anfiteatro durante los juegos por el cumpleaños del César. Atacadas por una vaca salvaje y rematadas por gladiadores, son sepultadas como mártires.' },
      ],
      quote: { text: '“Soy cristiana.”', ref: 'Perpetua, ante el procurador Hilariano' },
      legacy: 'El relato de Perpetua se leyó en las iglesias africanas durante siglos. Fija la imagen del mártir como testigo gozoso y consolida el papel de las mujeres en la memoria cristiana.',
      sources: [
        { label: 'Pasión de Perpetua y Felicidad', href: 'https://www.newadvent.org/fathers/0324.htm' },
        { label: 'Britannica — Perpetua and Felicity', href: 'https://www.britannica.com/biography/Saints-Perpetua-and-Felicity' },
      ],
    },
    {
      year: 230, yearLabel: 'c. 230 d.C.', title: 'Orígenes y la escuela de Alejandría', short: 'El primer gran teólogo sistemático', icon: '🧠',
      intro: 'Orígenes Adamantio, hijo de mártir y maestro genial, dirige en Alejandría la primera escuela teológica del cristianismo. Escribe miles de obras y crea una teología que será discutida durante 1500 años.',
      paragraphs: [
        { heading: 'Una obra colosal', body: 'Orígenes produce las Hexapla (la Biblia en seis columnas comparadas), comentarios a casi todos los libros bíblicos, el primer tratado sistemático de teología (De Principiis) y la mayor apología antigua (Contra Celso). La tradición le atribuye unas 6000 obras.' },
        { heading: 'Luz y sombra', body: 'Brillante y polémico, defiende la preexistencia de las almas y un universalismo (apocatástasis) que será condenado en el siglo VI. Sin embargo, su método alegórico de leer la Escritura y su pasión por unir fe y razón inspiran a todos los Padres griegos posteriores.' },
      ],
      quote: { text: '“La Escritura tiene cuerpo, alma y espíritu, como el hombre.”', ref: 'Orígenes, De Principiis IV' },
      legacy: 'Sin Orígenes no hay teología cristiana sistemática. Atanasio, los Capadocios y Agustín lo leen y lo discuten; condenado y rehabilitado, sigue siendo el padre del pensamiento cristiano.',
      sources: [
        { label: 'Orígenes — De Principiis', href: 'https://www.newadvent.org/fathers/04121.htm' },
        { label: 'Britannica — Origen', href: 'https://www.britannica.com/biography/Origen' },
      ],
    },
    {
      year: 250, yearLabel: '250 d.C.', title: 'Edicto de Decio', short: 'Primera persecución universal y sistemática', icon: '📜',
      intro: 'El emperador Decio decreta que todos los habitantes del Imperio deben sacrificar a los dioses y obtener un certificado (libellus). Por primera vez la persecución es general y obligatoria, no local o esporádica.',
      paragraphs: [
        { heading: 'Los lapsi', body: 'Muchos cristianos resisten y mueren mártires; otros muchos sacrifican o compran certificados falsos. Los lapsi —«caídos»— se convierten en un problema pastoral enorme: ¿pueden ser readmitidos a la comunión? La respuesta dividirá a la Iglesia durante una generación.' },
        { heading: 'Cipriano y la pastoral', body: 'Cipriano de Cartago, obispo refugiado durante la persecución, defiende una vía intermedia: readmisión tras penitencia pública, contra los rigoristas (Novaciano) que la niegan y los laxos que la dan sin más. Su tratado De Lapsis es la primera gran reflexión sobre el pecado postbautismal.' },
      ],
      quote: { text: '“Fuera de la Iglesia no hay salvación.”', ref: 'Cipriano, Epístola 73, 21' },
      legacy: 'La crisis de los lapsi obliga a la Iglesia a desarrollar una doctrina del perdón, del episcopado y de la unidad. La frase de Cipriano resonará durante toda la historia eclesiástica.',
      sources: [
        { label: 'Cipriano — De Lapsis', href: 'https://www.newadvent.org/fathers/050701.htm' },
        { label: 'Britannica — Decius', href: 'https://www.britannica.com/biography/Decius' },
      ],
    },
    {
      year: 258, yearLabel: '258 d.C.', title: 'Martirio de Cipriano', short: 'El obispo de Cartago decapitado bajo Valeriano', icon: '⚔',
      intro: 'Bajo el emperador Valeriano, Cipriano es desterrado y luego decapitado por negarse a sacrificar. Muere ante una multitud que le sigue hasta el lugar de la ejecución.',
      paragraphs: [
        { heading: '"Deo gratias"', body: 'Cuando le leen la sentencia, Cipriano responde simplemente: «Deo gratias». Ante el verdugo se venda los ojos, ofrece 25 monedas de oro como agradecimiento y entrega su cuello.' },
        { heading: 'Una iglesia africana fuerte', body: 'Cipriano deja una iglesia norteafricana organizada, intelectualmente fuerte y conocedora de su identidad. La región dará a la Iglesia universal a Tertuliano, Cipriano, Agustín y siglos de teología.' },
      ],
      quote: { text: '“Deo gratias.”', ref: 'Cipriano, al oír su sentencia de muerte' },
      legacy: 'Cipriano fija el ideal del obispo-pastor que muere con su rebaño y deja al cristianismo latino su vocabulario sobre la unidad de la Iglesia.',
      sources: [
        { label: 'Acta de Cipriano', href: 'https://www.newadvent.org/fathers/0506.htm' },
        { label: 'Britannica — Cyprian', href: 'https://www.britannica.com/biography/Saint-Cyprian' },
      ],
    },
    {
      year: 284, yearLabel: '284 d.C.', title: 'Ascenso de Diocleciano', short: 'Reorganiza el Imperio y prepara la última gran persecución', icon: '👑',
      intro: 'Diocleciano sube al trono y reorganiza el Imperio en la Tetrarquía: dos augustos y dos césares. Durante 19 años deja a los cristianos en paz; en 303 desencadenará la peor persecución de todas.',
      paragraphs: [
        { heading: 'Calma antes de la tormenta', body: 'En la última década del siglo III hay cristianos en el palacio imperial, en el ejército y en la administración. Iglesias visibles se construyen incluso enfrente de palacios. La paz parece consolidarse… hasta que el César Galerio convence a Diocleciano de que el cristianismo amenaza la unidad del Imperio.' },
      ],
      quote: { text: '“Los cristianos eran tan numerosos que no había manera de matarlos a todos.”', ref: 'Eusebio, Historia Eclesiástica VIII' },
      legacy: 'La pausa de Diocleciano permite el crecimiento de una Iglesia visible que la persecución no logrará destruir y que en 313 será reconocida por Constantino.',
      sources: [
        { label: 'Eusebio — Historia Eclesiástica', href: 'https://www.newadvent.org/fathers/2501.htm' },
        { label: 'Britannica — Diocletian', href: 'https://www.britannica.com/biography/Diocletian' },
      ],
    },
  ],
};

const C4: CenturyData = {
  num: 4, roman: 'IV', title: 'Del martirio al trono', range: '300 – 400 d.C.',
  intro: 'En menos de un siglo el cristianismo pasa de ser religión perseguida a religión oficial del Imperio. Se celebran los primeros concilios ecuménicos y se fija la doctrina trinitaria.',
  events: [
    {
      year: 303, yearLabel: '303 d.C.', title: 'Gran persecución de Diocleciano', short: 'La última y más violenta persecución imperial', icon: '🔥',
      intro: 'El 23 de febrero de 303, en Nicomedia, Diocleciano publica el primer edicto: ordena la destrucción de iglesias, la quema de Escrituras y la apostasía obligatoria. Tres edictos más siguen en menos de un año.',
      paragraphs: [
        { heading: 'Diez años de furor', body: 'En Oriente la persecución dura hasta 311; en Occidente termina antes gracias a Constancio Cloro. Miles mueren mártires: Mauricio y la legión tebana, Vicente de Zaragoza, Inés, Lucía, Sebastián, Jorge. Las prisiones se llenan tanto que los criminales no caben.' },
        { heading: 'Los traditores', body: 'La obligación de entregar las Escrituras crea otra crisis: los traditores, que en África donde la rigidez es mayor desencadenarán el cisma donatista a partir del 311.' },
      ],
      quote: { text: '“La sangre de los mártires es semilla de cristianos.”', ref: 'Tertuliano, Apologético 50' },
      legacy: 'La Gran Persecución demuestra al Imperio que el cristianismo no puede ser destruido por la fuerza. Diez años después, el sucesor de Galerio firmará un edicto de tolerancia.',
      sources: [
        { label: 'Lactancio — De mortibus persecutorum', href: 'https://www.newadvent.org/fathers/0703.htm' },
        { label: 'Britannica — Diocletianic Persecution', href: 'https://www.britannica.com/topic/Diocletianic-Persecution' },
      ],
    },
    {
      year: 313, yearLabel: '313 d.C.', title: 'Edicto de Milán', short: 'Constantino y Licinio legalizan el cristianismo', icon: '🕊',
      intro: 'En Milán, Constantino y Licinio acuerdan conceder a los cristianos —y a todos— libertad de culto. Se devuelven los bienes confiscados y termina legalmente la persecución.',
      paragraphs: [
        { heading: 'Una conversión política', body: 'En 312, antes de la batalla del puente Milvio, Constantino dice haber visto una cruz en el cielo con la inscripción «In hoc signo vinces». Vence a Majencio, entra en Roma y empieza a favorecer al cristianismo, aunque su bautismo se aplaza hasta el lecho de muerte.' },
        { heading: 'De minoría a poder', body: 'A partir de 313 los cristianos pasan a ocupar cargos públicos, a recibir donaciones imperiales y a construir basílicas (San Juan de Letrán, San Pedro). El cambio es vertiginoso y abrirá tensiones nuevas.' },
      ],
      quote: { text: '“Demos a los cristianos y a todos la libre facultad de seguir la religión que cada cual quiera.”', ref: 'Edicto de Milán, 313' },
      legacy: 'El Edicto de Milán cierra la era de los mártires y abre la era de la cristiandad. La relación Iglesia–Estado quedará marcada para los próximos 1500 años.',
      sources: [
        { label: 'Lactancio — texto del edicto', href: 'https://www.newadvent.org/fathers/0703.htm' },
        { label: 'Britannica — Edict of Milan', href: 'https://www.britannica.com/topic/Edict-of-Milan' },
      ],
    },
    {
      year: 325, yearLabel: '325 d.C.', title: 'Concilio de Nicea', short: 'Primer concilio ecuménico: el Credo y la divinidad de Cristo', icon: '✝',
      intro: 'Convocado por Constantino, unos 300 obispos se reúnen en Nicea (Bitinia) para zanjar la controversia arriana. El Hijo es declarado «consustancial» (homoousios) al Padre.',
      paragraphs: [
        { heading: 'Arrio y la crisis', body: 'El presbítero alejandrino Arrio enseñaba que el Hijo era la primera criatura del Padre, no eterno. La fórmula amenazaba con dividir todo el Imperio recién pacificado.' },
        { heading: 'El Credo', body: 'El concilio formula la primera versión del Credo niceno: el Hijo es «engendrado, no creado, de la misma sustancia del Padre». Atanasio de Alejandría, joven diácono, será el campeón de esta fe durante el medio siglo siguiente, pasando cinco veces al destierro.' },
      ],
      quote: { text: '“Engendrado, no creado, consustancial al Padre.”', ref: 'Símbolo de Nicea, 325' },
      legacy: 'Nicea funda el modelo conciliar y fija para siempre la fe trinitaria. Toda la teología cristiana posterior —católica, ortodoxa, protestante— se construye sobre esta confesión.',
      sources: [
        { label: 'Atanasio — De decretis Nicaenae synodi', href: 'https://www.newadvent.org/fathers/2809.htm' },
        { label: 'Britannica — Council of Nicaea', href: 'https://www.britannica.com/event/Council-of-Nicaea-325' },
      ],
    },
    {
      year: 380, yearLabel: '380 d.C.', title: 'Edicto de Tesalónica', short: 'El cristianismo, religión oficial del Imperio', icon: '👑',
      intro: 'Teodosio I decreta que todos los súbditos del Imperio deben profesar la fe nicena. El paganismo será progresivamente prohibido y los templos cerrados.',
      paragraphs: [
        { heading: 'De tolerada a obligatoria', body: 'En menos de 70 años el cristianismo pasa de perseguido (303) a tolerado (313) a obligatorio (380). El edicto Cunctos populos hace de la fe nicena la única legítima y nombra «herejes» a todos los demás.' },
        { heading: 'El concilio de Constantinopla I (381)', body: 'Un año después, Teodosio convoca el segundo concilio ecuménico, que completa el Credo niceno con la afirmación de la divinidad del Espíritu Santo y consolida la teología trinitaria.' },
      ],
      quote: { text: '“Es nuestra voluntad que todos los pueblos sigan la religión que el divino Pedro entregó a los romanos.”', ref: 'Cunctos populos, 380' },
      legacy: 'Comienza la cristiandad: la sociedad cristiana donde religión y política se entrelazan. Por primera vez ser cristiano deja de costar y empieza a convenir.',
      sources: [
        { label: 'Codex Theodosianus 16.1.2', href: 'https://www.thelatinlibrary.com/theodosius/theod16.shtml' },
        { label: 'Britannica — Theodosius I', href: 'https://www.britannica.com/biography/Theodosius-I' },
      ],
    },
    {
      year: 397, yearLabel: '397 d.C.', title: 'Confesiones de Agustín', short: 'Nace la introspección cristiana moderna', icon: '📖',
      intro: 'Agustín, obispo de Hipona desde 395, escribe las Confesiones: la primera autobiografía espiritual de Occidente. Inaugura un modo de hablar de Dios desde la propia interioridad que marcará 1500 años.',
      paragraphs: [
        { heading: 'Del maniqueísmo a Cristo', body: 'Agustín relata su recorrido: educación cristiana de Mónica, juventud disipada en Cartago, años en el maniqueísmo, descubrimiento del neoplatonismo en Milán, conversión bajo la higuera al oír «tolle, lege» en 386, bautismo por Ambrosio.' },
        { heading: 'Una nueva teología', body: 'Agustín escribirá luego La Ciudad de Dios, De Trinitate y los anti-pelagianos. Su pensamiento sobre la gracia, el pecado original y la predestinación será la matriz de toda la teología latina.' },
      ],
      quote: { text: '“Nos hiciste para Ti, Señor, y nuestro corazón está inquieto hasta que descanse en Ti.”', ref: 'Confesiones I, 1, 1' },
      legacy: 'Agustín es el último Padre de la antigüedad y el primer pensador medieval. Sin él no se entienden ni Tomás de Aquino ni Lutero ni el protestantismo.',
      sources: [
        { label: 'Agustín — Confesiones', href: 'https://www.augustinus.it/spagnolo/confessioni/index2.htm' },
        { label: 'Britannica — Augustine of Hippo', href: 'https://www.britannica.com/biography/Saint-Augustine' },
      ],
    },
  ],
};

const C5: CenturyData = {
  num: 5, roman: 'V', title: 'Caída de Roma y concilios cristológicos', range: '400 – 500 d.C.',
  intro: 'El siglo V ve el colapso del Imperio romano de Occidente y, en paralelo, la cristalización definitiva de la fe cristiana sobre la persona de Cristo en cuatro grandes concilios.',
  events: [
    {
      year: 410, yearLabel: '410 d.C.', title: 'Saqueo de Roma por Alarico', short: 'Por primera vez en 800 años, Roma cae', icon: '⚔',
      intro: 'El 24 de agosto del 410, los visigodos de Alarico entran en Roma y la saquean durante tres días. La ciudad eterna, símbolo del orden del mundo, parece haber muerto.',
      paragraphs: [
        { heading: 'Conmoción universal', body: 'Jerónimo, en Belén, escribe: «Mi voz se ahoga en sollozos al dictar estas líneas: la ciudad que conquistó el mundo ha sido conquistada». Los paganos culpan a los cristianos: Roma cayó por abandonar a sus antiguos dioses.' },
        { heading: 'La Ciudad de Dios', body: 'Agustín dedica los siguientes 13 años a escribir La Ciudad de Dios, la obra que reinterpretará toda la historia humana como peregrinación de dos ciudades —la del hombre y la de Dios— y que dará a Occidente su filosofía de la historia.' },
      ],
      quote: { text: '“Si Roma puede caer, ¿qué cosa puede estar segura?”', ref: 'Jerónimo, Carta 127' },
      legacy: 'El saqueo del 410 abre la conciencia de que las civilizaciones son mortales y empuja a la teología a separar la fe del destino de los imperios.',
      sources: [
        { label: 'Agustín — La Ciudad de Dios', href: 'https://www.augustinus.it/spagnolo/cdd/index2.htm' },
        { label: 'Britannica — Sack of Rome 410', href: 'https://www.britannica.com/event/Sack-of-Rome-410' },
      ],
    },
    {
      year: 431, yearLabel: '431 d.C.', title: 'Concilio de Éfeso', short: 'María, Theotokos: Madre de Dios', icon: '👶',
      intro: 'El tercer concilio ecuménico condena al patriarca de Constantinopla, Nestorio, que negaba el título de Theotokos a María. Cirilo de Alejandría defiende la unidad de la persona de Cristo.',
      paragraphs: [
        { heading: 'Una persona, dos naturalezas', body: 'Nestorio prefería llamar a María «madre de Cristo», sugiriendo dos personas en el Verbo encarnado. Cirilo responde: si la naturaleza humana y la divina están unidas en una sola persona, lo que se predica de una se predica de la otra: María es Madre de Dios.' },
      ],
      quote: { text: '“Theotokos: Madre de Dios.”', ref: 'Definición del Concilio de Éfeso, 431' },
      legacy: 'Éfeso defiende la unidad indisoluble de Cristo y consolida una piedad mariana que será central en Oriente y Occidente durante toda la historia cristiana.',
      sources: [
        { label: 'Cirilo — Carta a Nestorio', href: 'https://www.newadvent.org/fathers/3801.htm' },
        { label: 'Britannica — Council of Ephesus', href: 'https://www.britannica.com/event/Council-of-Ephesus' },
      ],
    },
    {
      year: 451, yearLabel: '451 d.C.', title: 'Concilio de Calcedonia', short: 'Cristo: una persona, dos naturalezas', icon: '⚖',
      intro: 'Convocado por la emperatriz Pulqueria, el cuarto concilio ecuménico define la fórmula clásica de la cristología: Cristo es una sola persona en dos naturalezas, sin confusión, sin cambio, sin división, sin separación.',
      paragraphs: [
        { heading: 'El Tomo de León', body: 'León Magno, papa, envía un escrito (Tomo a Flaviano) que se convierte en base de la definición. Los obispos exclaman: «¡Pedro ha hablado por boca de León!». Es el primer gran momento de afirmación de la autoridad romana en Oriente.' },
        { heading: 'Primer cisma duradero', body: 'Las iglesias coptas, etíopes, siríacas y armenias rechazan Calcedonia y se separan formando las iglesias «no calcedonianas» u «orientales antiguas». La división persiste hasta hoy.' },
      ],
      quote: { text: '“Una persona en dos naturalezas, sin confusión, sin cambio, sin división, sin separación.”', ref: 'Definición de Calcedonia, 451' },
      legacy: 'Calcedonia fija el lenguaje cristológico común a católicos, ortodoxos y la mayoría de protestantes. Marca también el primer cisma cristiano persistente.',
      sources: [
        { label: 'Tomo de León', href: 'https://www.newadvent.org/fathers/3604028.htm' },
        { label: 'Britannica — Council of Chalcedon', href: 'https://www.britannica.com/event/Council-of-Chalcedon' },
      ],
    },
    {
      year: 432, yearLabel: 'c. 432 d.C.', title: 'Patricio en Irlanda', short: 'Comienza la evangelización de los celtas', icon: '☘',
      intro: 'Patricio, exesclavo britano-romano, vuelve como misionero a Irlanda hacia el 432. Funda comunidades, ordena clero y siembra el monacato celta que más tarde reevangelizará a Europa.',
      paragraphs: [
        { heading: 'La luz desde una isla', body: 'Mientras el Continente cae con el Imperio, Irlanda —que nunca fue romana— se cristianiza pacíficamente. Sus monasterios (Iona, Lindisfarne, Bobbio) preservarán manuscritos clásicos y bíblicos durante los siglos oscuros.' },
      ],
      quote: { text: '“Cristo conmigo, Cristo delante, Cristo detrás, Cristo en mí, Cristo debajo, Cristo arriba.”', ref: 'Lorica de San Patricio' },
      legacy: 'La misión de Patricio inicia el cristianismo celta, que será uno de los grandes vehículos de evangelización de Europa entre los siglos VI y IX.',
      sources: [
        { label: 'Confesión de San Patricio', href: 'https://www.confessio.ie/etexts/confessio_spanish' },
        { label: 'Britannica — Saint Patrick', href: 'https://www.britannica.com/biography/Saint-Patrick' },
      ],
    },
    {
      year: 476, yearLabel: '476 d.C.', title: 'Caída de Roma de Occidente', short: 'Termina el Imperio romano occidental', icon: '🏛',
      intro: 'Odoacro, jefe germano, depone al último emperador romano de Occidente, Rómulo Augústulo. La fecha simboliza el fin de la antigüedad y el comienzo de la Edad Media.',
      paragraphs: [
        { heading: 'La Iglesia, último orden visible', body: 'En el vacío político dejado por Roma, los obispos —encabezados por el papa— heredan funciones cívicas: defensa de las ciudades, distribución de alimentos, mediación con los bárbaros. La Iglesia se convierte en columna vertebral de la futura Europa.' },
      ],
      quote: { text: '“Cuando vino el bárbaro, encontró a la Iglesia esperándolo.”', ref: 'Adagio histórico' },
      legacy: 'La caída de Roma desplaza el centro de gravedad del cristianismo: en Occidente la Iglesia tendrá que reconstruirse junto a los reinos germánicos; en Oriente, sobrevive el Imperio en Constantinopla.',
      sources: [
        { label: 'Britannica — Fall of Rome', href: 'https://www.britannica.com/topic/decline-of-Rome' },
        { label: 'Procopio — Historias', href: 'https://www.gutenberg.org/ebooks/16763' },
      ],
    },
  ],
};

const C6: CenturyData = {
  num: 6, roman: 'VI', title: 'Monjes y emperadores', range: '500 – 600 d.C.',
  intro: 'En Occidente, Benito de Nursia organiza el monacato latino. En Oriente, Justiniano sueña con restaurar el Imperio cristiano y construye Hagia Sophia. La Iglesia toma su forma medieval.',
  events: [
    {
      year: 529, yearLabel: '529 d.C.', title: 'Benito funda Monte Cassino', short: 'Nace el monacato latino y la Regla benedictina', icon: '⛰',
      intro: 'Benito de Nursia funda en lo alto de un monte, sobre un templo de Apolo, el monasterio de Monte Cassino. Allí escribe la Regla que organizará la vida monástica de Occidente durante 1500 años.',
      paragraphs: [
        { heading: '"Ora et labora"', body: 'La Regla equilibra oración, trabajo manual, lectura espiritual y vida común bajo un abad electo. Su moderación y sentido común la imponen frente a las prácticas más extremas del monacato oriental.' },
        { heading: 'El motor de Europa', body: 'Los monasterios benedictinos serán durante siglos centros agrícolas, escolares, hospitalarios y bibliotecarios. Salvaron la cultura clásica copiando manuscritos cuando nadie más lo hacía.' },
      ],
      quote: { text: '“Que en todo sea Dios glorificado.”', ref: 'Regla de San Benito 57, 9' },
      legacy: 'Benito da a Occidente su modelo monástico estable. De sus monasterios saldrán santos, papas, misioneros y el armazón cultural de la Europa medieval.',
      sources: [
        { label: 'Regla de San Benito (texto)', href: 'https://www.newadvent.org/fathers/15071.htm' },
        { label: 'Britannica — Benedict of Nursia', href: 'https://www.britannica.com/biography/Saint-Benedict-of-Nursia' },
      ],
    },
    {
      year: 537, yearLabel: '537 d.C.', title: 'Hagia Sophia', short: 'Justiniano consagra la mayor iglesia del mundo', icon: '🏛',
      intro: 'El emperador Justiniano dedica en Constantinopla la nueva basílica de Santa Sofía, construida en cinco años. Al entrar exclama: «¡Salomón, te he superado!».',
      paragraphs: [
        { heading: 'La gran cúpula', body: 'La cúpula de 31 metros de diámetro parece flotar sobre la luz que entra por sus ventanas. Será el modelo arquitectónico de la cristiandad oriental durante mil años y, tras 1453, de las grandes mezquitas otomanas.' },
        { heading: 'Justiniano y el Código', body: 'El mismo emperador codifica el derecho romano (Corpus Iuris Civilis), que estructura la sociedad cristiana. Sueña con reunir Oriente y Occidente, pero su éxito es efímero: la peste y las guerras agotan el Imperio.' },
      ],
      quote: { text: '“¡Salomón, te he superado!”', ref: 'Justiniano, al consagrar Hagia Sophia, 537' },
      legacy: 'Hagia Sophia es la encarnación arquitectónica del cristianismo bizantino: belleza sagrada, liturgia como cielo en la tierra. Hasta hoy fascina a quien la visita.',
      sources: [
        { label: 'Procopio — De Aedificiis', href: 'https://www.thelatinlibrary.com/procopius.html' },
        { label: 'Britannica — Hagia Sophia', href: 'https://www.britannica.com/topic/Hagia-Sophia' },
      ],
    },
    {
      year: 590, yearLabel: '590 d.C.', title: 'Gregorio Magno, papa', short: 'El papado adquiere su forma medieval', icon: '🕊',
      intro: 'Aristócrata romano, monje y pastor, Gregorio I es elegido papa en plena peste. Reorganiza la liturgia, defiende Roma de los lombardos y envía misioneros a Inglaterra.',
      paragraphs: [
        { heading: 'Pastor de pastores', body: 'Su Regla pastoral será el manual del obispo durante toda la Edad Media. Reordena el culto (canto gregoriano), administra las propiedades de la Iglesia para alimentar a la población y ejerce poder civil que la huida del Imperio le ha dejado.' },
        { heading: 'La misión a Inglaterra', body: 'En 596 envía a Agustín de Canterbury con cuarenta monjes a evangelizar a los anglosajones. En pocas décadas Inglaterra es cristiana: la Iglesia ha aprendido a misionar a los bárbaros.' },
      ],
      quote: { text: '“Siervo de los siervos de Dios.”', ref: 'Título adoptado por Gregorio Magno' },
      legacy: 'Gregorio inaugura el papado medieval: pastor universal, gobernante temporal y misionero. Es uno de los cuatro grandes Doctores latinos.',
      sources: [
        { label: 'Gregorio Magno — Regla pastoral', href: 'https://www.newadvent.org/fathers/3601.htm' },
        { label: 'Britannica — Gregory I', href: 'https://www.britannica.com/biography/Saint-Gregory-I' },
      ],
    },
  ],
};

const C7: CenturyData = {
  num: 7, roman: 'VII', title: 'El islam y el repliegue', range: '600 – 700 d.C.',
  intro: 'En tres décadas, los ejércitos del islam arrebatan al cristianismo más de la mitad de su territorio histórico. Egipto, Siria, Palestina y África del Norte dejan de ser cristianas para siempre.',
  events: [
    {
      year: 622, yearLabel: '622 d.C.', title: 'La Hégira de Mahoma', short: 'Año cero del calendario islámico', icon: '🌙',
      intro: 'Mahoma huye de La Meca a Medina con sus seguidores. Desde allí organiza una comunidad religiosa y política que en una década dominará Arabia.',
      paragraphs: [
        { heading: 'Una nueva fe', body: 'El islam recoge elementos del judaísmo y del cristianismo, pero rechaza la divinidad de Cristo y la Trinidad. Considera a Jesús un gran profeta, pero no Hijo de Dios. Tras la muerte de Mahoma (632), sus sucesores —los califas— lanzan una expansión militar fulgurante.' },
      ],
      quote: { text: '“Di: Él es Allah, Uno.”', ref: 'Corán 112, 1' },
      legacy: 'Con la Hégira nace una fe que en pocas décadas remodela el mapa religioso del Mediterráneo y plantea al cristianismo el desafío teológico más duradero de su historia.',
      sources: [
        { label: 'Britannica — Hijrah', href: 'https://www.britannica.com/topic/Hijrah-Islam' },
        { label: 'Britannica — Muhammad', href: 'https://www.britannica.com/biography/Muhammad' },
      ],
    },
    {
      year: 638, yearLabel: '638 d.C.', title: 'Caída de Jerusalén', short: 'El califa Omar entra en la Ciudad Santa', icon: '🕌',
      intro: 'Tras el asedio del patriarca Sofronio, Jerusalén capitula ante el califa Omar. Por primera vez desde Constantino, la Ciudad Santa cristiana queda bajo dominio no cristiano.',
      paragraphs: [
        { heading: 'Estatus de "dhimmis"', body: 'Cristianos y judíos son tolerados como «gente del Libro» a cambio del pago del impuesto jizya y restricciones legales. La cristiandad oriental aprende a sobrevivir como minoría.' },
      ],
      quote: { text: '“Te entrego las llaves de Jerusalén.”', ref: 'Sofronio al califa Omar, 638' },
      legacy: 'La pérdida de Jerusalén obsesionará a la cristiandad durante siglos y desencadenará en 1095 las cruzadas.',
      sources: [
        { label: 'Britannica — Siege of Jerusalem 637', href: 'https://www.britannica.com/event/Siege-of-Jerusalem-636-637' },
      ],
    },
    {
      year: 680, yearLabel: '680 d.C.', title: 'Concilio de Constantinopla III', short: 'Cristo tiene dos voluntades', icon: '⚖',
      intro: 'El sexto concilio ecuménico cierra la última gran controversia cristológica al definir que Cristo posee dos voluntades, divina y humana, en perfecta armonía.',
      paragraphs: [
        { heading: 'Dyothelismo', body: 'Frente al monothelismo —que defendía una sola voluntad para mantener la unidad— el concilio sigue la lógica de Calcedonia: si hay dos naturalezas plenas, hay dos voluntades. La voluntad humana de Cristo se somete libremente a la divina.' },
      ],
      quote: { text: '“No se haga mi voluntad, sino la tuya.”', ref: 'Lucas 22, 42 — citado en el concilio' },
      legacy: 'Constantinopla III completa el edificio cristológico de los concilios. Después solo quedará la cuestión de las imágenes y, lejos en Occidente, el filioque.',
      sources: [
        { label: 'Britannica — Council of Constantinople III', href: 'https://www.britannica.com/event/Council-of-Constantinople-680-681' },
      ],
    },
  ],
};

const C8: CenturyData = {
  num: 8, roman: 'VIII', title: 'Iconoclastia y Carlomagno', range: '700 – 800 d.C.',
  intro: 'Mientras el Oriente cristiano se desgarra por el debate sobre las imágenes, en Occidente nace una nueva potencia política aliada con Roma: el Imperio carolingio.',
  events: [
    {
      year: 711, yearLabel: '711 d.C.', title: 'Conquista musulmana de Hispania', short: 'Tariq cruza el estrecho y derrota a Don Rodrigo', icon: '🏰',
      intro: 'En la batalla de Guadalete, el rey visigodo Rodrigo es derrotado por las tropas de Tariq ibn Ziyad. En siete años, casi toda la península Ibérica queda bajo dominio musulmán.',
      paragraphs: [
        { heading: 'Comienza la Reconquista', body: 'Pequeños reductos cristianos sobreviven en Asturias y los Pirineos. La batalla de Covadonga (722) inicia un proceso de 770 años que culminará en 1492.' },
      ],
      quote: { text: '“España fue conquistada en siete años. La reconquista costaría setecientos.”', ref: 'Adagio histórico' },
      legacy: 'La invasión convierte a Hispania en frontera del cristianismo y forja una identidad religioso-militar única en Europa.',
      sources: [
        { label: 'Britannica — Umayyad conquest of Hispania', href: 'https://www.britannica.com/event/Battle-of-the-Guadalete' },
      ],
    },
    {
      year: 726, yearLabel: '726 d.C.', title: 'Crisis iconoclasta', short: 'El emperador León III prohíbe las imágenes', icon: '🖼',
      intro: 'León III ordena retirar las imágenes sagradas del culto bizantino. Comienza más de un siglo de violencia entre iconoclastas (que las rechazan) e iconódulos (que las defienden).',
      paragraphs: [
        { heading: 'Razones políticas y teológicas', body: 'Influido por el avance del islam y por sectores monofisitas, el emperador ve en las imágenes una idolatría. Juan Damasceno, desde el monasterio de Mar Saba bajo dominio musulmán, escribe la gran defensa teológica del icono.' },
        { heading: 'Nicea II (787)', body: 'La emperatriz Irene convoca el séptimo concilio ecuménico, que restablece el culto a las imágenes: el icono no es adorado, sino venerado, y el honor pasa al prototipo. La controversia continuará hasta 843.' },
      ],
      quote: { text: '“No adoro la materia, sino al Creador de la materia, que se hizo materia por mí.”', ref: 'Juan Damasceno, Tratado sobre las imágenes' },
      legacy: 'La crisis iconoclasta consolida el lugar del icono en la espiritualidad ortodoxa y aleja aún más a Oriente y Occidente.',
      sources: [
        { label: 'Juan Damasceno — Tratados sobre las imágenes', href: 'https://www.newadvent.org/fathers/3304.htm' },
        { label: 'Britannica — Iconoclastic Controversy', href: 'https://www.britannica.com/topic/Iconoclastic-Controversy' },
      ],
    },
    {
      year: 732, yearLabel: '732 d.C.', title: 'Batalla de Poitiers', short: 'Carlos Martel detiene la expansión musulmana', icon: '⚔',
      intro: 'Cerca de Poitiers, Carlos Martel derrota al ejército omeya de Abderramán. La cristiandad latina sobrevive y los musulmanes no avanzarán más allá de los Pirineos.',
      paragraphs: [
        { heading: 'Frontera de Europa', body: 'Edward Gibbon imaginó qué hubiera pasado de no ganar Carlos Martel: «el Corán se enseñaría hoy en las aulas de Oxford». La frase es exagerada, pero refleja la importancia simbólica de la batalla.' },
      ],
      quote: { text: '“Como un muro, como un témpano de hielo, los francos resistieron.”', ref: 'Crónica mozárabe del 754' },
      legacy: 'Poitiers fija el límite occidental del islam y consolida la dinastía carolingia, que pronto producirá a Carlomagno.',
      sources: [
        { label: 'Britannica — Battle of Tours', href: 'https://www.britannica.com/event/Battle-of-Tours' },
      ],
    },
    {
      year: 800, yearLabel: '800 d.C.', title: 'Coronación de Carlomagno', short: 'León III lo corona emperador en Roma', icon: '👑',
      intro: 'En la Navidad del 800, en San Pedro, el papa León III corona emperador romano a Carlos, rey de los francos. Renace el Imperio en Occidente, ahora cristiano y latino.',
      paragraphs: [
        { heading: 'Renovatio Imperii', body: 'Carlomagno gobierna desde Aquisgrán un territorio que va del Ebro al Elba. Promueve el «renacimiento carolingio»: escuelas catedralicias, copia de manuscritos, reforma litúrgica, escritura carolingia.' },
        { heading: 'Tensión con Bizancio', body: 'La coronación irrita a Constantinopla, que considera ilegítima la pretensión de un segundo emperador. La grieta entre los dos cristianismos se agranda.' },
      ],
      quote: { text: '“Carlos Augusto, coronado por Dios, gran y pacífico emperador de los romanos.”', ref: 'Aclamación en San Pedro, 25/12/800' },
      legacy: 'Nace el Sacro Imperio Romano (que durará hasta 1806) y la idea misma de Europa cristiana como unidad cultural y política.',
      sources: [
        { label: 'Eginardo — Vida de Carlomagno', href: 'https://www.thelatinlibrary.com/ein.html' },
        { label: 'Britannica — Charlemagne', href: 'https://www.britannica.com/biography/Charlemagne' },
      ],
    },
  ],
};

const C9: CenturyData = {
  num: 9, roman: 'IX', title: 'Misiones y reformas', range: '800 – 900 d.C.',
  intro: 'Cirilo y Metodio evangelizan a los eslavos. En Occidente, el Imperio carolingio se fragmenta y prepara la sociedad feudal. Surge la primera gran reforma monástica.',
  events: [
    {
      year: 843, yearLabel: '843 d.C.', title: 'Triunfo de la Ortodoxia', short: 'Restauración definitiva de las imágenes', icon: '🖼',
      intro: 'El primer domingo de Cuaresma del 843, la emperatriz Teodora restablece de forma definitiva el culto a las imágenes en Bizancio. La fecha se celebra hasta hoy como el «Domingo de la Ortodoxia».',
      paragraphs: [
        { heading: 'Cierre de la crisis', body: 'Tras 117 años de conflictos, iconódulos e iconoclastas se reconcilian bajo la fórmula de Nicea II. La identidad ortodoxa queda fijada en torno a la liturgia, el icono y los siete concilios ecuménicos.' },
      ],
      quote: { text: '“Esta es la fe de los apóstoles, esta es la fe de los Padres, esta es la fe de los ortodoxos.”', ref: 'Synodikon de la Ortodoxia, 843' },
      legacy: 'La Iglesia oriental sale de la crisis con una espiritualidad icónica que no se ha movido desde entonces.',
      sources: [
        { label: 'Britannica — Triumph of Orthodoxy', href: 'https://www.britannica.com/topic/Feast-of-Orthodoxy' },
      ],
    },
    {
      year: 863, yearLabel: '863 d.C.', title: 'Cirilo y Metodio', short: 'La misión a los eslavos', icon: '✍',
      intro: 'Los hermanos griegos Constantino (Cirilo) y Metodio parten de Constantinopla a Moravia por petición del príncipe Rastislav. Crean el alfabeto glagolítico, traducen la Biblia y la liturgia al eslavo eclesiástico.',
      paragraphs: [
        { heading: 'Una liturgia en lengua propia', body: 'Por primera vez en Europa, después del latín y el griego, una liturgia se celebra en lengua vernácula. La decisión es revolucionaria y polémica: el clero germano se opone, pero el papa Adriano II la aprueba.' },
        { heading: 'Padres de los eslavos', body: 'Su trabajo cristianiza a búlgaros, serbios, rusos y otros pueblos eslavos en los siglos siguientes. El alfabeto cirílico (derivado del glagolítico) es su herencia visible hasta hoy.' },
      ],
      quote: { text: '“Toda nación que no alaba a Dios en su propia lengua es como un cuerpo sin alma.”', ref: 'Atribuido a Cirilo' },
      legacy: 'Cirilo y Metodio inauguran el cristianismo eslavo y son patronos de Europa junto con Benito de Nursia.',
      sources: [
        { label: 'Vita Constantini — Vida de Cirilo', href: 'https://en.wikipedia.org/wiki/Vita_Cyrilli' },
        { label: 'Britannica — Saints Cyril and Methodius', href: 'https://www.britannica.com/biography/Saints-Cyril-and-Methodius' },
      ],
    },
  ],
};

const C10: CenturyData = {
  num: 10, roman: 'X', title: 'Cluny y la cristianización del Norte', range: '900 – 1000 d.C.',
  intro: 'Considerado a menudo «siglo oscuro», es también el siglo en que nace Cluny y se cristianizan Polonia, Hungría, Dinamarca y la Rus de Kiev. La cristiandad da un salto al norte y al este.',
  events: [
    {
      year: 910, yearLabel: '910 d.C.', title: 'Fundación de Cluny', short: 'Comienza la gran reforma monástica', icon: '⛪',
      intro: 'El duque Guillermo de Aquitania funda en Borgoña la abadía de Cluny y la entrega directamente al papa, exenta de cualquier autoridad laica. Es el inicio de la mayor red monástica de la Edad Media.',
      paragraphs: [
        { heading: 'Reforma de la Iglesia', body: 'Cluny vuelve a la observancia estricta de la Regla benedictina y se convierte en el modelo de la reforma. En su apogeo, más de mil monasterios cluniacenses se extienden por toda Europa.' },
        { heading: 'Liturgia esplendorosa', body: 'Cluny desarrolla una liturgia solemne y prolongada: el oficio divino ocupa hasta diez horas diarias. La belleza del culto se convierte en argumento misional y catequético.' },
      ],
      quote: { text: '“Donde se reúnen monjes para alabar a Dios, allí está el cielo en la tierra.”', ref: 'Tradición cluniacense' },
      legacy: 'Cluny prepara la reforma gregoriana del siglo XI y forma generaciones de obispos y papas reformadores.',
      sources: [
        { label: 'Britannica — Cluniac Reform', href: 'https://www.britannica.com/topic/Cluniac-Reform' },
      ],
    },
    {
      year: 988, yearLabel: '988 d.C.', title: 'Bautismo de Vladimir', short: 'La Rus de Kiev se hace cristiana', icon: '✝',
      intro: 'El gran príncipe Vladimir de Kiev se bautiza en Quersoneso y manda bautizar a su pueblo en el río Dniéper. Nace el cristianismo ruso, ortodoxo y bizantino.',
      paragraphs: [
        { heading: 'La elección de la fe', body: 'La Crónica de Néstor cuenta que Vladimir envió embajadores a estudiar el islam, el judaísmo y el cristianismo latino y bizantino. En Hagia Sophia los enviados quedaron tan impresionados por la liturgia que dijeron: «no sabíamos si estábamos en el cielo o en la tierra». Vladimir eligió Bizancio.' },
      ],
      quote: { text: '“No sabíamos si estábamos en el cielo o en la tierra.”', ref: 'Crónica de Néstor' },
      legacy: 'Rusia entra en el orbe cristiano oriental. Tras 1453 se considerará a sí misma «Tercera Roma», sucesora de Bizancio caído.',
      sources: [
        { label: 'Crónica de Néstor', href: 'https://en.wikipedia.org/wiki/Primary_Chronicle' },
        { label: 'Britannica — Vladimir I', href: 'https://www.britannica.com/biography/Vladimir-I-grand-prince-of-Kiev' },
      ],
    },
  ],
};

const C11: CenturyData = {
  num: 11, roman: 'XI', title: 'Cisma y cruzada', range: '1000 – 1100 d.C.',
  intro: 'En 1054 se rompe la unidad cristiana entre Roma y Constantinopla. En 1095 el papa Urbano II convoca la Primera Cruzada. Dos acontecimientos que marcarán toda la historia posterior.',
  events: [
    {
      year: 1054, yearLabel: '1054 d.C.', title: 'Gran Cisma de Oriente', short: 'Roma y Constantinopla se excomulgan', icon: '⚡',
      intro: 'El 16 de julio, en Hagia Sophia, los legados papales depositan sobre el altar una bula excomulgando al patriarca Miguel Cerulario. Él responde excomulgando a los legados. La cristiandad se parte en dos.',
      paragraphs: [
        { heading: 'Razones acumuladas', body: 'Diferencias largas: el filioque (añadido latino al Credo), el pan ácimo o fermentado en la eucaristía, el celibato, y sobre todo la cuestión del primado romano. Lo de 1054 es la chispa, no la causa.' },
        { heading: 'Una herida abierta', body: 'Las excomuniones mutuas se levantarán en 1965 por Pablo VI y Atenágoras, pero la separación entre catolicismo y ortodoxia continúa.' },
      ],
      quote: { text: '“Que Dios mire y juzgue.”', ref: 'Patriarca Miguel Cerulario, al recibir la excomunión' },
      legacy: 'El Cisma divide la cristiandad en dos grandes ramas. La distancia teológica, litúrgica y cultural se profundiza con los siglos.',
      sources: [
        { label: 'Britannica — East-West Schism', href: 'https://www.britannica.com/event/East-West-Schism-1054' },
      ],
    },
    {
      year: 1077, yearLabel: '1077 d.C.', title: 'Canossa', short: 'El emperador Enrique IV se humilla ante Gregorio VII', icon: '🏔',
      intro: 'En enero, durante tres días con sus noches, el emperador Enrique IV permanece descalzo y vestido de penitente ante las puertas del castillo de Canossa, esperando que Gregorio VII levante su excomunión.',
      paragraphs: [
        { heading: 'La querella de las investiduras', body: 'Gregorio VII (Hildebrando) había prohibido al emperador nombrar obispos. Enrique se rebeló, fue excomulgado y se vio obligado a humillarse para conservar el trono. La escena marca el cenit del poder pontificio.' },
      ],
      quote: { text: '“Ir a Canossa.”', ref: 'Expresión que aún significa humillarse para obtener perdón' },
      legacy: 'La reforma gregoriana redefine la autoridad eclesiástica frente al poder civil y prepara la teocracia papal de los siglos XII y XIII.',
      sources: [
        { label: 'Britannica — Investiture Controversy', href: 'https://www.britannica.com/event/Investiture-Controversy' },
      ],
    },
    {
      year: 1095, yearLabel: '1095 d.C.', title: 'Concilio de Clermont', short: 'Urbano II convoca la Primera Cruzada', icon: '⚔',
      intro: 'El 27 de noviembre, ante una multitud reunida en Clermont (Francia), el papa Urbano II llama a recuperar Tierra Santa. La multitud responde: «¡Dios lo quiere!».',
      paragraphs: [
        { heading: 'Liberar al hermano oriental', body: 'Bizancio había pedido ayuda contra los turcos selyúcidas. Urbano amplía la idea: liberar también el Santo Sepulcro de Jerusalén. Promete indulgencia plenaria a quien participe.' },
        { heading: 'Toma de Jerusalén (1099)', body: 'Cuatro años después, los cruzados toman Jerusalén. La masacre de musulmanes y judíos en la ciudad es uno de los episodios más oscuros del cristianismo medieval.' },
      ],
      quote: { text: '“¡Dios lo quiere!”', ref: 'Aclamación en Clermont, 1095' },
      legacy: 'Las cruzadas marcan dos siglos de relación violenta con el islam y el judaísmo, y dejan una herencia compleja que llega hasta hoy.',
      sources: [
        { label: 'Roberto el Monje — Historia Hierosolymitana', href: 'https://sourcebooks.fordham.edu/source/urban2-5vers.asp' },
        { label: 'Britannica — First Crusade', href: 'https://www.britannica.com/event/First-Crusade' },
      ],
    },
  ],
};

const C12: CenturyData = {
  num: 12, roman: 'XII', title: 'Renacimiento del siglo XII', range: '1100 – 1200 d.C.',
  intro: 'Florecen las catedrales góticas, las primeras universidades, las órdenes nuevas. Bernardo de Claraval domina espiritualmente el siglo. Roma consolida su poder y Tomás Becket muere mártir en Canterbury.',
  events: [
    {
      year: 1115, yearLabel: '1115 d.C.', title: 'Bernardo funda Claraval', short: 'El gran reformador del siglo XII', icon: '🌿',
      intro: 'A los 25 años, Bernardo funda con un puñado de monjes la abadía de Claraval. En tres décadas la orden cisterciense, en la que se integra, llegará a tener más de 300 monasterios.',
      paragraphs: [
        { heading: 'Voz de la cristiandad', body: 'Bernardo aconseja a papas, predica la Segunda Cruzada, escribe sobre el amor de Dios y la Virgen. Su elocuencia y su santeza lo convierten en el hombre más influyente del siglo XII.' },
      ],
      quote: { text: '“Amar a Dios sin medida es la medida del amor a Dios.”', ref: 'Bernardo, De diligendo Deo' },
      legacy: 'La reforma cisterciense renueva el monacato y devuelve a Occidente una espiritualidad mística y mariana que marcará toda la Edad Media.',
      sources: [
        { label: 'Bernardo — Sobre el amor de Dios', href: 'https://www.newadvent.org/fathers/0211.htm' },
        { label: 'Britannica — Bernard of Clairvaux', href: 'https://www.britannica.com/biography/Saint-Bernard-of-Clairvaux' },
      ],
    },
    {
      year: 1170, yearLabel: '1170 d.C.', title: 'Asesinato de Tomás Becket', short: 'Mártir en la catedral de Canterbury', icon: '🗡',
      intro: 'El 29 de diciembre, cuatro caballeros del rey Enrique II de Inglaterra asesinan al arzobispo Tomás Becket en su propia catedral de Canterbury, durante las Vísperas.',
      paragraphs: [
        { heading: 'La libertad de la Iglesia', body: 'Becket, antiguo amigo del rey, se había enfrentado a él para defender los derechos eclesiásticos. Su muerte conmociona a Europa: en tres años es canonizado y Canterbury se convierte en el mayor centro de peregrinación del norte.' },
      ],
      quote: { text: '“Por el nombre de Jesús y por la defensa de la Iglesia, estoy dispuesto a morir.”', ref: 'Tomás Becket, antes del martirio' },
      legacy: 'El asesinato de Becket consolida la doctrina medieval de la libertad de la Iglesia frente al poder real y deja Canterbury como gran lugar santo.',
      sources: [
        { label: 'Britannica — Thomas Becket', href: 'https://www.britannica.com/biography/Saint-Thomas-Becket' },
      ],
    },
    {
      year: 1187, yearLabel: '1187 d.C.', title: 'Saladino reconquista Jerusalén', short: 'Cae el reino latino de Tierra Santa', icon: '🌙',
      intro: 'Tras la victoria de Saladino en los Cuernos de Hattin, Jerusalén se rinde. La ciudad vuelve a manos musulmanas tras 88 años de dominio cruzado.',
      paragraphs: [
        { heading: 'El fin de un sueño', body: 'Las cruzadas siguientes —Tercera, Cuarta, etc.— intentarán recuperar Jerusalén sin éxito. La Cuarta (1204) acabará incluso saqueando Constantinopla cristiana, agravando para siempre el cisma con Oriente.' },
      ],
      quote: { text: '“Saladino, el más noble de nuestros enemigos.”', ref: 'Crónicas cruzadas' },
      legacy: 'La pérdida de Jerusalén marca el principio del fin de las cruzadas y del proyecto de cristiandad militar en Tierra Santa.',
      sources: [
        { label: 'Britannica — Saladin', href: 'https://www.britannica.com/biography/Saladin' },
      ],
    },
  ],
};

const C13: CenturyData = {
  num: 13, roman: 'XIII', title: 'El siglo de las catedrales y los frailes', range: '1200 – 1300 d.C.',
  intro: 'Nacen las órdenes mendicantes —franciscanos y dominicos— y las grandes universidades. Tomás de Aquino sintetiza fe y razón. La cristiandad alcanza su apogeo medieval.',
  events: [
    {
      year: 1209, yearLabel: '1209 d.C.', title: 'Francisco de Asís funda su orden', short: 'Pobreza radical y predicación itinerante', icon: '🐦',
      intro: 'Inocencio III aprueba oralmente la regla de Francisco y sus doce compañeros. Comienza un movimiento que en pocas décadas tendrá miles de hermanos por toda Europa.',
      paragraphs: [
        { heading: 'Don Pobreza', body: 'Francisco renuncia a toda propiedad, abraza la pobreza como esposa y predica el evangelio en las plazas. Su mensaje contrasta con la riqueza de la jerarquía y conmueve a la cristiandad.' },
        { heading: 'Las llagas', body: 'En 1224, en La Verna, recibe los estigmas: las heridas de Cristo aparecen en su cuerpo. Es el primer caso documentado de la historia.' },
      ],
      quote: { text: '“Hazme, Señor, instrumento de tu paz.”', ref: 'Atribuida a Francisco de Asís' },
      legacy: 'Francisco renueva la cristiandad desde abajo. Su orden se convierte en una de las grandes fuerzas espirituales y misioneras de la Iglesia.',
      sources: [
        { label: 'Tomás de Celano — Vida primera', href: 'https://www.franciscanos.org/celano/celano1.html' },
        { label: 'Britannica — Francis of Assisi', href: 'https://www.britannica.com/biography/Saint-Francis-of-Assisi' },
      ],
    },
    {
      year: 1215, yearLabel: '1215 d.C.', title: 'IV Concilio de Letrán', short: 'Cumbre del poder pontificio', icon: '⚖',
      intro: 'Inocencio III convoca el mayor concilio medieval: 1200 prelados. Define la transubstanciación, impone la confesión y comunión anuales, y organiza la cuarta cruzada.',
      paragraphs: [
        { heading: 'Transubstanciación', body: 'Por primera vez se utiliza oficialmente el término: en la eucaristía, el pan y el vino se convierten en el cuerpo y la sangre de Cristo. Será doctrina central, y luego punto de quiebre con los reformadores del siglo XVI.' },
        { heading: 'Disciplina universal', body: 'Se obliga a confesarse y comulgar al menos en Pascua. Se impone el distintivo a judíos y musulmanes, una decisión cuya sombra llegará hasta el siglo XX.' },
      ],
      quote: { text: '“Una sola es la Iglesia universal de los fieles, fuera de la cual nadie absolutamente se salva.”', ref: 'IV Letrán, c. 1' },
      legacy: 'Letrán IV es el cenit de la cristiandad medieval: una Iglesia que regula vida, fe y sociedad de todo Occidente.',
      sources: [
        { label: 'Britannica — Fourth Lateran Council', href: 'https://www.britannica.com/event/Fourth-Lateran-Council' },
      ],
    },
    {
      year: 1273, yearLabel: '1273 d.C.', title: 'Tomás de Aquino y la Suma', short: 'Síntesis de fe y razón', icon: '📚',
      intro: 'Tomás de Aquino, dominico y profesor en París y Nápoles, escribe la Summa Theologiae: la mayor síntesis teológica del Medioevo. En diciembre de 1273 deja de escribir tras una experiencia mística: «todo lo que he escrito es paja».',
      paragraphs: [
        { heading: 'Aristóteles bautizado', body: 'Tomás integra la filosofía de Aristóteles —recién recuperada por los árabes— con la fe cristiana. Distingue claramente naturaleza y gracia, razón y revelación, sin oponerlas. La síntesis tomista será oficial en la Iglesia católica hasta el siglo XX.' },
      ],
      quote: { text: '“El asombro mueve al filósofo a filosofar.”', ref: 'Tomás de Aquino' },
      legacy: 'Tomás define el modelo medieval del teólogo-filósofo y deja a Occidente una herencia intelectual que sigue viva.',
      sources: [
        { label: 'Suma Teológica (texto)', href: 'https://hjg.com.ar/sumat/' },
        { label: 'Britannica — Thomas Aquinas', href: 'https://www.britannica.com/biography/Saint-Thomas-Aquinas' },
      ],
    },
  ],
};

const C14: CenturyData = {
  num: 14, roman: 'XIV', title: 'Crisis y cisma', range: '1300 – 1400 d.C.',
  intro: 'El siglo XIV es de tragedia: peste, hambre, guerra de los Cien Años y un papado dividido entre Roma y Aviñón. La cristiandad medieval empieza a resquebrajarse.',
  events: [
    {
      year: 1309, yearLabel: '1309 d.C.', title: 'Cautiverio de Aviñón', short: 'El papa abandona Roma', icon: '🏰',
      intro: 'Clemente V traslada la Curia a Aviñón, en territorio influido por Francia. Durante 68 años los papas residirán en el Ródano, lejos de la tumba de Pedro.',
      paragraphs: [
        { heading: 'Un papado afrancesado', body: 'Los siete papas de Aviñón son todos franceses. La cristiandad lo percibe como un cautiverio babilónico —según la fuerte expresión de Petrarca— y crece la crítica al lujo curial.' },
      ],
      quote: { text: '“Babilonia, fuente de aflicciones, residencia de penas.”', ref: 'Petrarca sobre Aviñón' },
      legacy: 'El cautiverio debilita la imagen del papado y prepara la mayor crisis: el Cisma de Occidente que estallará en 1378.',
      sources: [
        { label: 'Britannica — Avignon papacy', href: 'https://www.britannica.com/event/Avignon-papacy' },
      ],
    },
    {
      year: 1347, yearLabel: '1347 d.C.', title: 'La Peste Negra', short: 'Un tercio de Europa muere', icon: '☠',
      intro: 'Llega a Europa por Sicilia la mayor pandemia de la historia conocida. En cinco años mata entre el 30 y el 50 % de la población. La fe medieval recibe un golpe espiritual, social y económico devastador.',
      paragraphs: [
        { heading: 'Iglesia diezmada', body: 'Los clérigos que asisten a los moribundos mueren en proporciones enormes. La calidad pastoral cae en muchas regiones. Surgen flagelantes, búsqueda de chivos expiatorios (pogromos antijudíos), y una piedad obsesionada con la muerte.' },
      ],
      quote: { text: '“Y muchos murieron sin sacerdote ni sacramentos.”', ref: 'Crónicas medievales' },
      legacy: 'La Peste reorganiza la economía, mina la confianza en las instituciones y siembra el malestar que estallará en la Reforma.',
      sources: [
        { label: 'Britannica — Black Death', href: 'https://www.britannica.com/event/Black-Death' },
      ],
    },
    {
      year: 1378, yearLabel: '1378 d.C.', title: 'Cisma de Occidente', short: 'Dos —y luego tres— papas a la vez', icon: '⚡',
      intro: 'A la muerte de Gregorio XI, los cardenales eligen a Urbano VI en Roma; meses después, descontentos, eligen a un segundo papa, Clemente VII, que se instala en Aviñón. La cristiandad se divide.',
      paragraphs: [
        { heading: 'Tres papas', body: 'En 1409 el concilio de Pisa intenta resolverlo eligiendo un tercer papa, sin que los otros dos cedan. Habrá tres papas a la vez. La crisis solo se resolverá en el concilio de Constanza (1414-1418).' },
      ],
      quote: { text: '“Los reinos cristianos no saben a quién obedecer.”', ref: 'Crónicas del cisma' },
      legacy: 'El cisma destruye la imagen unitaria del papado y abre el camino al conciliarismo y, más tarde, a las críticas reformistas.',
      sources: [
        { label: 'Britannica — Western Schism', href: 'https://www.britannica.com/event/Western-Schism' },
      ],
    },
    {
      year: 1380, yearLabel: 'c. 1380 d.C.', title: 'Wycliffe y la Biblia inglesa', short: 'Primer movimiento "pre-reformista"', icon: '📖',
      intro: 'El profesor de Oxford John Wycliffe denuncia los abusos de la Iglesia y traduce la Biblia al inglés. Sus seguidores —los lolardos— anticipan en más de un siglo las tesis de Lutero.',
      paragraphs: [
        { heading: 'Sola Scriptura avant la lettre', body: 'Wycliffe sostiene que la Escritura, no la jerarquía, es la suprema autoridad y que cada cristiano debe poder leerla. Es condenado, pero su influencia llega a Bohemia y a Jan Hus.' },
      ],
      quote: { text: '“La Sagrada Escritura es la ley de Cristo, suficiente y suprema.”', ref: 'John Wycliffe' },
      legacy: 'Wycliffe es la primera grieta visible del edificio medieval. Sus huesos serán desenterrados y quemados en 1428 por un concilio que comprende su peligro.',
      sources: [
        { label: 'Britannica — John Wycliffe', href: 'https://www.britannica.com/biography/John-Wycliffe' },
      ],
    },
  ],
};

const C15: CenturyData = {
  num: 15, roman: 'XV', title: 'Constanza, Constantinopla, Colón', range: '1400 – 1500 d.C.',
  intro: 'Un concilio cierra el cisma; Constantinopla cae ante los turcos; Colón abre un mundo nuevo a evangelizar. La cristiandad pasa del Mediterráneo al Atlántico.',
  events: [
    {
      year: 1415, yearLabel: '1415 d.C.', title: 'Hus en la hoguera', short: 'Quemado en Constanza por orden conciliar', icon: '🔥',
      intro: 'El reformador checo Jan Hus, discípulo de Wycliffe, acude al concilio de Constanza con salvoconducto imperial. Es arrestado, condenado por hereje y quemado vivo el 6 de julio.',
      paragraphs: [
        { heading: 'Mártir de Bohemia', body: 'Su muerte desencadena las guerras husitas en Bohemia y siembra una memoria de injusticia que un siglo después fertilizará la Reforma. «Hus» significa «ganso»; sus discípulos profetizan que vendrá un cisne. Lutero se identificará con esa figura.' },
      ],
      quote: { text: '“Hoy queman un ganso, pero dentro de cien años vendrá un cisne que no podrán quemar.”', ref: 'Profecía atribuida a Jan Hus' },
      legacy: 'Hus es el último gran disidente medieval ejecutado por la Iglesia. Su memoria viva en Centroeuropa abrirá camino al protestantismo.',
      sources: [
        { label: 'Britannica — Jan Hus', href: 'https://www.britannica.com/biography/Jan-Hus' },
      ],
    },
    {
      year: 1417, yearLabel: '1417 d.C.', title: 'Fin del Cisma', short: 'Constanza elige a Martín V', icon: '🕊',
      intro: 'El concilio de Constanza depone o acepta la renuncia de los tres papas y elige a Otto Colonna como Martín V. La cristiandad recupera un solo papa después de cuarenta años.',
      paragraphs: [
        { heading: 'Conciliarismo', body: 'El decreto Haec Sancta afirma que el concilio recibe su autoridad directamente de Cristo y está por encima del papa. La tesis es práctica para resolver la crisis, pero los papas posteriores la rechazarán y vencerán.' },
      ],
      quote: { text: '“Salvar la unidad de la Iglesia es salvar la salvación de las almas.”', ref: 'Decreto Haec Sancta, 1415' },
      legacy: 'Constanza salva la unidad pero deja un debate latente entre papa y concilio que reaparecerá en el Vaticano I.',
      sources: [
        { label: 'Britannica — Council of Constance', href: 'https://www.britannica.com/event/Council-of-Constance' },
      ],
    },
    {
      year: 1453, yearLabel: '1453 d.C.', title: 'Caída de Constantinopla', short: 'Mehmed II toma la capital de Bizancio', icon: '🏛',
      intro: 'El 29 de mayo, tras 53 días de asedio, los turcos otomanos entran en Constantinopla. El emperador Constantino XI muere en combate. Mil años de Imperio cristiano oriental terminan.',
      paragraphs: [
        { heading: 'Hagia Sophia, mezquita', body: 'La gran iglesia justineana se convierte en mezquita (lo será hasta 1934 y de nuevo desde 2020). Muchos sabios bizantinos huyen a Italia con manuscritos griegos: nutren el Renacimiento.' },
      ],
      quote: { text: '“Mejor que reine en la ciudad el turbante turco que la mitra latina.”', ref: 'Notaras, gran duque bizantino, antes de la caída' },
      legacy: 'Termina la cristiandad bizantina visible. Moscú se proclamará «Tercera Roma». Para Occidente, el oriente cristiano queda oculto cuatro siglos bajo el dominio otomano.',
      sources: [
        { label: 'Britannica — Fall of Constantinople', href: 'https://www.britannica.com/event/Fall-of-Constantinople-1453' },
      ],
    },
    {
      year: 1492, yearLabel: '1492 d.C.', title: 'Descubrimiento de América', short: 'Comienza la evangelización del Nuevo Mundo', icon: '⛵',
      intro: 'El 12 de octubre, las carabelas de Cristóbal Colón llegan a Guanahaní. El mismo año caen Granada (fin de la Reconquista) y son expulsados los judíos de España. La cristiandad latina mira por primera vez al Atlántico.',
      paragraphs: [
        { heading: 'Cruz y espada', body: 'La conquista es violenta y a menudo brutal. Pero junto a ella llega una evangelización masiva que en un siglo dará a América millones de cristianos. Bartolomé de las Casas y Antonio de Montesinos denuncian los abusos.' },
        { heading: 'Guadalupe (1531)', body: 'La aparición de la Virgen al indio Juan Diego acelera la conversión de los pueblos del centro de México y se convierte en símbolo del catolicismo americano.' },
      ],
      quote: { text: '“¿Estos no son hombres? ¿No tienen almas racionales?”', ref: 'Antonio de Montesinos, sermón de Adviento, 1511' },
      legacy: 'América se incorpora a la cristiandad. Hoy la mitad de los católicos del mundo vive en el continente.',
      sources: [
        { label: 'Bartolomé de las Casas — Brevísima relación', href: 'https://www.gutenberg.org/ebooks/23466' },
        { label: 'Britannica — Spanish colonization of the Americas', href: 'https://www.britannica.com/topic/Spanish-Empire' },
      ],
    },
  ],
};

const C16: CenturyData = {
  num: 16, roman: 'XVI', title: 'La Reforma', range: '1500 – 1600 d.C.',
  intro: 'Lutero, Calvino, Enrique VIII. La cristiandad latina se quiebra. Trento responde con una reforma católica profunda. Nacen los jesuitas. Misioneros llegan a India, Japón y América.',
  events: [
    {
      year: 1517, yearLabel: '1517 d.C.', title: '95 tesis de Lutero', short: 'Comienza la Reforma protestante', icon: '📜',
      intro: 'El 31 de octubre, Martín Lutero, monje agustino y profesor en Wittenberg, publica 95 tesis contra las indulgencias. La invención de la imprenta convierte un debate académico en revolución continental.',
      paragraphs: [
        { heading: 'Sola gratia, sola fide, sola Scriptura', body: 'Lutero predica la justificación por la fe sola, en contra del sistema sacramental que se entendía como negociado. Su redescubrimiento de Romanos 1:17 cambia su vida y la historia.' },
        { heading: 'Excomunión y Dieta de Worms (1521)', body: 'Ante el emperador Carlos V, Lutero se niega a retractarse: «No puedo ni quiero retractarme. Aquí estoy, no puedo hacer otra cosa, que Dios me ayude». Se rompe la unidad religiosa de Europa Occidental.' },
      ],
      quote: { text: '“Aquí estoy, no puedo hacer otra cosa. Que Dios me ayude. Amén.”', ref: 'Lutero en la Dieta de Worms, 1521' },
      legacy: 'La Reforma divide Occidente y desencadena un siglo de transformaciones religiosas, políticas y culturales. Sin ella no se entiende la modernidad.',
      sources: [
        { label: 'Lutero — 95 tesis (texto)', href: 'https://www.luther.de/leben/anschlag/95thesen.html' },
        { label: 'Britannica — Martin Luther', href: 'https://www.britannica.com/biography/Martin-Luther' },
      ],
    },
    {
      year: 1536, yearLabel: '1536 d.C.', title: 'Calvino: Institución cristiana', short: 'La Reforma se sistematiza en Ginebra', icon: '📘',
      intro: 'Juan Calvino, jurista francés convertido al evangelio, publica en Basilea la Institución de la religión cristiana. Es la primera gran síntesis sistemática de la teología reformada.',
      paragraphs: [
        { heading: 'Ginebra, ciudad reformada', body: 'Calvino organiza Ginebra como una ciudad cristiana modelo: presbíteros, disciplina eclesiástica, formación bíblica. Su influencia se extiende a Holanda, Escocia, Inglaterra y, vía los puritanos, a las futuras colonias americanas.' },
      ],
      quote: { text: '“Toda nuestra sabiduría consiste en el conocimiento de Dios y de nosotros mismos.”', ref: 'Calvino, Institución I, 1, 1' },
      legacy: 'El calvinismo da al protestantismo su rama más rigurosa y misionera. Configurará culturas enteras: Holanda, Escocia, Norteamérica, Sudáfrica, Corea.',
      sources: [
        { label: 'Calvino — Institución (texto)', href: 'https://www.iglesiareformada.com/Calvino_Institucion.html' },
        { label: 'Britannica — John Calvin', href: 'https://www.britannica.com/biography/John-Calvin' },
      ],
    },
    {
      year: 1540, yearLabel: '1540 d.C.', title: 'Compañía de Jesús', short: 'Pablo III aprueba la orden de Ignacio', icon: '✝',
      intro: 'Pablo III aprueba la Compañía de Jesús, fundada por Ignacio de Loyola, antiguo militar vasco convertido tras una herida en Pamplona. Diez años después la orden tendrá mil miembros.',
      paragraphs: [
        { heading: 'Ejercicios espirituales', body: 'Los Ejercicios de Ignacio son un método riguroso de conversión personal. Producirán generaciones de líderes católicos durante cinco siglos.' },
        { heading: 'Misiones globales', body: 'Francisco Javier evangeliza India y Japón. Mateo Ricci entra en China vestido de mandarín. Los jesuitas llegan a América, África y Asia con una audacia misionera sin precedentes.' },
      ],
      quote: { text: '“A mayor gloria de Dios.”', ref: 'Lema ignaciano' },
      legacy: 'La Compañía es el motor de la reforma católica y de la primera globalización cristiana. Sigue siendo la mayor orden religiosa masculina de la Iglesia.',
      sources: [
        { label: 'Ignacio — Autobiografía', href: 'https://www.jesuitas.es/autobiografia' },
        { label: 'Britannica — Society of Jesus', href: 'https://www.britannica.com/topic/Society-of-Jesus' },
      ],
    },
    {
      year: 1545, yearLabel: '1545–1563', title: 'Concilio de Trento', short: 'La gran reforma católica', icon: '⚖',
      intro: 'En 25 sesiones a lo largo de 18 años, el concilio de Trento define la doctrina católica frente a la Reforma y reorganiza la disciplina eclesiástica. Sus efectos durarán cuatro siglos.',
      paragraphs: [
        { heading: 'Doctrina', body: 'Reafirma los siete sacramentos, la transubstanciación, la justificación por la fe y las obras de la gracia, la autoridad de la Tradición junto a la Escritura, y el canon bíblico católico (con los deuterocanónicos).' },
        { heading: 'Reforma disciplinar', body: 'Crea seminarios para formar al clero, exige la residencia de los obispos, impone catecismos y un misal universal (San Pío V, 1570). Nace la "Iglesia tridentina".' },
      ],
      quote: { text: '“Todos los libros del Antiguo y Nuevo Testamento se reciben con igual afecto de piedad.”', ref: 'Trento, sesión IV, 1546' },
      legacy: 'Trento fija el catolicismo moderno. La liturgia, la teología, la espiritualidad y la disciplina eclesiástica seguirán siendo "tridentinas" hasta el Vaticano II.',
      sources: [
        { label: 'Decretos del Concilio de Trento', href: 'https://www.vatican.va/archive/hist_councils/' },
        { label: 'Britannica — Council of Trent', href: 'https://www.britannica.com/event/Council-of-Trent' },
      ],
    },
  ],
};

const C17: CenturyData = {
  num: 17, roman: 'XVII', title: 'Guerras de religión y misiones', range: '1600 – 1700 d.C.',
  intro: 'La cristiandad europea se desangra en la Guerra de los Treinta Años. Surge el racionalismo. Pero también florecen el barroco católico, el puritanismo inglés y las misiones jesuitas en América y Asia.',
  events: [
    {
      year: 1611, yearLabel: '1611 d.C.', title: 'Biblia del rey Jacobo', short: 'La gran traducción inglesa', icon: '📕',
      intro: 'Por encargo del rey Jacobo I de Inglaterra, 47 eruditos publican la King James Version. Será durante 300 años la Biblia del mundo angloparlante y una piedra angular de la lengua inglesa.',
      paragraphs: [
        { heading: 'Forma a un pueblo', body: 'Su prosa marca a Shakespeare, a Bunyan, a Lincoln, a Martin Luther King. Junto con la Vulgata y la Biblia de Lutero, es una de las traducciones más influyentes de la historia.' },
      ],
      quote: { text: '“Hágase la luz, y la luz se hizo.”', ref: 'KJV — Génesis 1:3' },
      legacy: 'La KJV difunde el cristianismo en lengua inglesa por todo el mundo y marca para siempre la cultura anglosajona.',
      sources: [
        { label: 'Britannica — King James Version', href: 'https://www.britannica.com/topic/King-James-Version' },
      ],
    },
    {
      year: 1618, yearLabel: '1618–1648', title: 'Guerra de los Treinta Años', short: 'Última gran guerra de religión europea', icon: '⚔',
      intro: 'Comenzada como conflicto religioso entre católicos y protestantes en el Sacro Imperio, se convierte en una guerra europea total. Cuando termina con la Paz de Westfalia, Centroeuropa ha perdido un tercio de su población.',
      paragraphs: [
        { heading: 'Westfalia (1648)', body: 'El tratado consagra el principio cuius regio, eius religio adaptado: cada príncipe decide la religión de su territorio (calvinismo incluido). Nace el Estado moderno y se separa de hecho la política de la confesión.' },
      ],
      quote: { text: '“Que Dios nos libre de tales paces y de tales guerras.”', ref: 'Lamento de la época' },
      legacy: 'La guerra agota a Europa de los conflictos religiosos. Westfalia inaugura el sistema internacional moderno y aleja la fe del centro del Estado.',
      sources: [
        { label: 'Britannica — Thirty Years\' War', href: 'https://www.britannica.com/event/Thirty-Years-War' },
      ],
    },
    {
      year: 1620, yearLabel: '1620 d.C.', title: 'El Mayflower', short: 'Los puritanos llegan a Norteamérica', icon: '⛵',
      intro: 'Un grupo de separatistas ingleses huye de la persecución y desembarca en Plymouth tras dos meses en el Mayflower. Antes de bajar a tierra firman un pacto que se considera embrión del constitucionalismo americano.',
      paragraphs: [
        { heading: 'Una nación bíblica', body: 'Los puritanos se ven como un nuevo Israel en una nueva Canaán. Esta autocomprensión bíblica marcará la cultura política de Estados Unidos durante siglos.' },
      ],
      quote: { text: '“Seremos como una ciudad sobre un monte.”', ref: 'John Winthrop, 1630 — citando Mateo 5,14' },
      legacy: 'Norteamérica se construye con un fuerte sustrato bíblico-protestante que sigue marcando su política, su lenguaje y sus reflejos morales.',
      sources: [
        { label: 'Britannica — Mayflower', href: 'https://www.britannica.com/topic/Mayflower-ship' },
      ],
    },
    {
      year: 1685, yearLabel: '1685 d.C.', title: 'Revocación del Edicto de Nantes', short: 'Luis XIV expulsa a los hugonotes', icon: '🚪',
      intro: 'Luis XIV revoca el edicto de tolerancia que protegía a los protestantes franceses desde 1598. Cientos de miles de hugonotes huyen a Holanda, Inglaterra, Prusia y Sudáfrica.',
      paragraphs: [
        { heading: 'Diáspora hugonota', body: 'Los exiliados son comerciantes, artesanos y pensadores. Enriquecen los países que los acogen y empobrecen económicamente a Francia. Bayle, Pierre Jurieu y otros prepararán el terreno de la Ilustración desde el destierro.' },
      ],
      quote: { text: '“Un rey, una ley, una fe.”', ref: 'Lema de Luis XIV' },
      legacy: 'La revocación cierra el experimento francés de tolerancia y muestra los límites del modelo confesional. El siglo siguiente reaccionará con la Ilustración.',
      sources: [
        { label: 'Britannica — Edict of Fontainebleau', href: 'https://www.britannica.com/topic/Edict-of-Fontainebleau' },
      ],
    },
  ],
};

const C18: CenturyData = {
  num: 18, roman: 'XVIII', title: 'Despertar y Revolución', range: '1700 – 1800 d.C.',
  intro: 'El siglo de la Ilustración es también el siglo de los grandes despertares evangélicos en Inglaterra y América, y del nacimiento del movimiento misionero protestante moderno.',
  events: [
    {
      year: 1738, yearLabel: '1738 d.C.', title: 'Conversión de Wesley', short: 'Aldersgate Street: nace el metodismo', icon: '🔥',
      intro: 'El 24 de mayo, en una pequeña reunión en Aldersgate Street (Londres), el clérigo anglicano John Wesley siente «extrañamente caldeado» el corazón al oír leer el prefacio de Lutero a la carta a los Romanos.',
      paragraphs: [
        { heading: 'Predicación al aire libre', body: 'Wesley y George Whitefield comienzan a predicar fuera de las iglesias, a mineros, obreros y marineros. El metodismo nace como movimiento de avivamiento dentro del anglicanismo y termina constituyéndose en denominación propia.' },
      ],
      quote: { text: '“Sentí mi corazón extrañamente caldeado.”', ref: 'Diario de John Wesley, 24/05/1738' },
      legacy: 'El metodismo será una de las grandes fuerzas misioneras y sociales del siglo XIX y dará nacimiento, en el siglo XX, al pentecostalismo.',
      sources: [
        { label: 'Diario de John Wesley', href: 'https://www.ccel.org/ccel/wesley/journal.html' },
        { label: 'Britannica — John Wesley', href: 'https://www.britannica.com/biography/John-Wesley' },
      ],
    },
    {
      year: 1740, yearLabel: 'c. 1740 d.C.', title: 'Gran Despertar', short: 'Avivamiento masivo en las colonias americanas', icon: '⚡',
      intro: 'George Whitefield recorre las colonias atrayendo multitudes de hasta 30 000 personas. Jonathan Edwards predica en Northampton sermones que provocan conversiones masivas. Nace una identidad evangélica americana.',
      paragraphs: [
        { heading: 'Pecadores en manos de un Dios airado', body: 'El sermón de Edwards (1741) es uno de los textos más influyentes del Despertar. La conmoción social es enorme y prepara el terreno espiritual y cultural para la independencia.' },
      ],
      quote: { text: '“Dios os tiene sobre el pozo del infierno como se sostiene a una araña.”', ref: 'Jonathan Edwards, sermón de 1741' },
      legacy: 'El Gran Despertar funda la tradición evangélica norteamericana y exporta a través de las misiones una piedad que llegará a todo el mundo.',
      sources: [
        { label: 'Edwards — Sinners in the Hands of an Angry God', href: 'https://www.ccel.org/ccel/edwards/sermons.sinners.html' },
        { label: 'Britannica — Great Awakening', href: 'https://www.britannica.com/event/Great-Awakening' },
      ],
    },
    {
      year: 1789, yearLabel: '1789 d.C.', title: 'Revolución Francesa', short: 'La Iglesia, blanco de la revolución', icon: '⚖',
      intro: 'La Asamblea Nacional confisca los bienes eclesiásticos, suprime las órdenes religiosas y promulga la Constitución Civil del Clero. La Iglesia francesa queda escindida entre juramentados y refractarios.',
      paragraphs: [
        { heading: 'Mártires del Terror', body: 'Bajo el Terror (1793-94) son guillotinados o ahogados sacerdotes, monjas y laicos católicos. Las dieciséis carmelitas de Compiègne suben al cadalso cantando el Veni Creator.' },
        { heading: 'Diosa Razón y Concordato', body: 'Notre-Dame se convierte en templo de la Diosa Razón. En 1801 Napoleón firma con Pío VII un concordato que restablece la relación con Roma, pero la cristiandad medieval ha terminado.' },
      ],
      quote: { text: '“No olvidemos que somos parte de un orden mayor que nuestro tiempo.”', ref: 'Carmelitas de Compiègne, antes del cadalso' },
      legacy: 'La Revolución abre la era moderna del laicismo y obliga a la Iglesia a repensar su relación con el Estado liberal. El siglo XIX será el siglo del conflicto.',
      sources: [
        { label: 'Britannica — French Revolution', href: 'https://www.britannica.com/event/French-Revolution' },
      ],
    },
    {
      year: 1793, yearLabel: '1793 d.C.', title: 'William Carey parte a la India', short: 'Comienza el movimiento misionero protestante moderno', icon: '🌏',
      intro: 'El zapatero baptista William Carey se embarca a la India tras publicar un libro que sacude a su denominación: An Enquiry into the Obligations of Christians to Use Means for the Conversion of the Heathens.',
      paragraphs: [
        { heading: '"Esperad grandes cosas; intentad grandes cosas"', body: 'Carey traduce la Biblia a varias lenguas indias, lucha contra la quema de viudas (sati) y funda escuelas. Su modelo inspira la formación de sociedades misioneras en Inglaterra, Estados Unidos y el continente.' },
      ],
      quote: { text: '“Esperad grandes cosas de Dios; intentad grandes cosas para Dios.”', ref: 'William Carey, sermón de Nottingham, 1792' },
      legacy: 'Comienza la gran era misionera protestante. En el siglo XIX el cristianismo dará el salto definitivo de Europa al mundo.',
      sources: [
        { label: 'Britannica — William Carey', href: 'https://www.britannica.com/biography/William-Carey' },
      ],
    },
  ],
};

const C19: CenturyData = {
  num: 19, roman: 'XIX', title: 'Misión y modernidad', range: '1800 – 1900 d.C.',
  intro: 'El siglo de las grandes misiones, las sociedades bíblicas, la abolición de la esclavitud y de la confrontación entre la Iglesia y el mundo moderno. La fe cristiana se vuelve global.',
  events: [
    {
      year: 1804, yearLabel: '1804 d.C.', title: 'Sociedad Bíblica Británica', short: 'La Biblia para todos los pueblos', icon: '📚',
      intro: 'Se funda en Londres la British and Foreign Bible Society con el lema: «La Biblia, sin nota ni comentario, en todas las lenguas». Inicia un movimiento global que continúa hoy.',
      paragraphs: [
        { heading: 'Traducciones masivas', body: 'En el siglo XIX la Biblia es traducida a centenares de lenguas. Es uno de los mayores fenómenos editoriales y misioneros de toda la historia.' },
      ],
      quote: { text: '“La Biblia, sin nota ni comentario, en todas las lenguas.”', ref: 'Lema fundacional de la BFBS' },
      legacy: 'Las sociedades bíblicas multiplican el acceso popular a la Escritura y aceleran la cristianización global.',
      sources: [
        { label: 'Britannica — Bible Society', href: 'https://www.britannica.com/topic/British-and-Foreign-Bible-Society' },
      ],
    },
    {
      year: 1807, yearLabel: '1807 d.C.', title: 'Abolición del comercio de esclavos', short: 'Wilberforce vence en el Parlamento británico', icon: '⛓',
      intro: 'Tras 20 años de campaña liderada por el evangélico William Wilberforce y el grupo de Clapham, el Parlamento británico prohíbe el comercio de esclavos. La esclavitud misma será abolida en 1833.',
      paragraphs: [
        { heading: 'Fe y reforma social', body: 'La campaña abolicionista es uno de los mayores ejemplos históricos de cómo la fe evangélica se traduce en acción política y social. Frederick Douglass, Sojourner Truth y otros líderes evangélicos negros prolongan la lucha en Estados Unidos.' },
      ],
      quote: { text: '“Dios todopoderoso me ha puesto delante dos grandes objetivos: la abolición del comercio de esclavos y la reforma de las costumbres.”', ref: 'William Wilberforce, diario, 1787' },
      legacy: 'La abolición prueba que el cristianismo puede ser motor de transformaciones sociales profundas. El siglo XX heredará esa convicción.',
      sources: [
        { label: 'Britannica — William Wilberforce', href: 'https://www.britannica.com/biography/William-Wilberforce' },
      ],
    },
    {
      year: 1865, yearLabel: '1865 d.C.', title: 'Ejército de Salvación', short: 'William y Catherine Booth en los suburbios de Londres', icon: '🥁',
      intro: 'William Booth, predicador metodista, funda la Misión Cristiana en el East End londinense para evangelizar a alcohólicos, prostitutas y obreros sin techo. En 1878 toma el nombre de Salvation Army.',
      paragraphs: [
        { heading: 'Sopa, jabón y salvación', body: 'El Ejército combina predicación, asistencia social y una organización de tipo militar. Llega hoy a más de 130 países y es una de las mayores ONGs cristianas del mundo.' },
      ],
      quote: { text: '“Mientras quede una mujer llorando, yo lucharé.”', ref: 'William Booth, último discurso, 1912' },
      legacy: 'Booth muestra que el evangelio se predica con la mano abierta a los pobres. Su modelo influye en la acción social cristiana del siglo XX.',
      sources: [
        { label: 'Britannica — Salvation Army', href: 'https://www.britannica.com/topic/Salvation-Army' },
      ],
    },
    {
      year: 1869, yearLabel: '1869–1870', title: 'Concilio Vaticano I', short: 'Definición de la infalibilidad pontificia', icon: '👑',
      intro: 'Pío IX convoca el primer concilio ecuménico en 300 años. En medio de la guerra franco-prusiana define el dogma de la infalibilidad papal cuando habla ex cathedra sobre fe y costumbres.',
      paragraphs: [
        { heading: 'Una Iglesia romana', body: 'El dogma centraliza la autoridad doctrinal en el papa. Pocas semanas después, las tropas italianas entran en Roma y desaparecen los Estados Pontificios. El papa "prisionero del Vaticano" gana en autoridad espiritual lo que pierde en poder temporal.' },
      ],
      quote: { text: '“El romano pontífice goza, por la asistencia divina, de aquella infalibilidad… al definir doctrina de fe o de costumbres.”', ref: 'Pastor Aeternus, 1870' },
      legacy: 'Vaticano I configura la Iglesia católica moderna como Iglesia centrada en el papa. Vaticano II (1962-65) lo equilibrará con la colegialidad episcopal.',
      sources: [
        { label: 'Pastor Aeternus (texto)', href: 'https://www.vatican.va/archive/hist_councils/i-vatican-council/' },
        { label: 'Britannica — Vatican Council I', href: 'https://www.britannica.com/event/Vatican-Council-I' },
      ],
    },
  ],
};

const C20: CenturyData = {
  num: 20, roman: 'XX', title: 'Mártires, ecumenismo y Vaticano II', range: '1900 – 2000 d.C.',
  intro: 'El siglo XX produce más mártires cristianos que todos los anteriores juntos: regímenes ateos, totalitarismos, persecuciones. Pero también es el siglo del Pentecostalismo, del Concilio Vaticano II y del ecumenismo.',
  events: [
    {
      year: 1906, yearLabel: '1906 d.C.', title: 'Avivamiento de Azusa Street', short: 'Nace el pentecostalismo', icon: '🔥',
      intro: 'En una vieja iglesia metodista del centro de Los Ángeles, el predicador afroamericano William Seymour dirige reuniones donde personas de todas las razas reciben el «bautismo del Espíritu Santo» con glosolalia.',
      paragraphs: [
        { heading: 'De Azusa al mundo', body: 'En tres años el movimiento se extiende a más de 50 países. Hoy, los pentecostales y carismáticos son cerca de 600 millones, una de las ramas con mayor crecimiento del cristianismo mundial.' },
      ],
      quote: { text: '“La línea del color ha sido lavada por la sangre.”', ref: 'Frank Bartleman, sobre Azusa Street' },
      legacy: 'Azusa transforma el cristianismo global del siglo XX. El centro de gravedad del cristianismo se desplaza hacia el Sur (África, América Latina, Asia).',
      sources: [
        { label: 'Britannica — Azusa Street Revival', href: 'https://www.britannica.com/topic/Azusa-Street-Revival' },
      ],
    },
    {
      year: 1910, yearLabel: '1910 d.C.', title: 'Conferencia de Edimburgo', short: 'Inicio del movimiento ecuménico moderno', icon: '🤝',
      intro: 'Mil doscientos delegados de las principales sociedades misioneras protestantes se reúnen en Edimburgo para coordinar la evangelización mundial. La conferencia es el punto de partida del ecumenismo del siglo XX.',
      paragraphs: [
        { heading: 'Del campo misionero al diálogo', body: 'En 1948 nace el Consejo Mundial de Iglesias en Ámsterdam. Las divisiones entre cristianos comienzan a percibirse como obstáculo a la misión. La Iglesia católica se incorporará tras Vaticano II.' },
      ],
      quote: { text: '“Que todos sean uno… para que el mundo crea.”', ref: 'Juan 17, 21 — versículo lema del ecumenismo' },
      legacy: 'Edimburgo abre cien años de diálogo entre las Iglesias cristianas que, sin restablecer la unidad visible, han transformado profundamente sus relaciones.',
      sources: [
        { label: 'Britannica — Ecumenism', href: 'https://www.britannica.com/topic/ecumenism' },
      ],
    },
    {
      year: 1945, yearLabel: '1945 d.C.', title: 'Bonhoeffer ahorcado', short: 'Mártir de la resistencia al nazismo', icon: '✝',
      intro: 'El 9 de abril de 1945, semanas antes del fin de la guerra, el teólogo luterano alemán Dietrich Bonhoeffer es ahorcado en el campo de Flossenbürg por su participación en la resistencia contra Hitler.',
      paragraphs: [
        { heading: 'Iglesia confesante', body: 'Bonhoeffer había ayudado a fundar la Iglesia Confesante frente a los "cristianos alemanes" pronazis. Sus libros —El precio de la gracia, Resistencia y sumisión— son lectura clásica del cristianismo del siglo XX.' },
      ],
      quote: { text: '“Cuando Cristo llama a alguien, le manda morir.”', ref: 'Bonhoeffer, El precio de la gracia' },
      legacy: 'Bonhoeffer encarna el cristianismo radical del siglo XX: una fe que cuesta y que se opone al mal aunque sea legal. Es referencia ineludible.',
      sources: [
        { label: 'Britannica — Dietrich Bonhoeffer', href: 'https://www.britannica.com/biography/Dietrich-Bonhoeffer' },
      ],
    },
    {
      year: 1962, yearLabel: '1962–1965', title: 'Concilio Vaticano II', short: 'La gran reforma católica del siglo XX', icon: '🕊',
      intro: 'Convocado por Juan XXIII y concluido por Pablo VI, el Vaticano II reúne a 2540 obispos. Reforma la liturgia, abre el diálogo con el mundo moderno, con las otras Iglesias y con las religiones.',
      paragraphs: [
        { heading: '"Aggiornamento"', body: 'Misa en lengua vernácula, eclesiología de comunión, libertad religiosa, declaración Nostra Aetate sobre las religiones no cristianas. El catolicismo cambia de rostro como no lo había hecho desde Trento.' },
      ],
      quote: { text: '“Abrir las ventanas de la Iglesia para que entre aire fresco.”', ref: 'Atribuido a Juan XXIII' },
      legacy: 'Vaticano II define el catolicismo del siglo XXI. Sus interpretaciones —de la fidelidad creativa a la ruptura— siguen marcando los debates.',
      sources: [
        { label: 'Documentos del Vaticano II', href: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/' },
        { label: 'Britannica — Vatican Council II', href: 'https://www.britannica.com/event/Vatican-Council-II' },
      ],
    },
    {
      year: 1989, yearLabel: '1989 d.C.', title: 'Caída del Muro de Berlín', short: 'Fin del comunismo soviético', icon: '🧱',
      intro: 'El 9 de noviembre cae el Muro de Berlín. En dos años se desploma el bloque soviético. La Iglesia perseguida —católicos polacos, ortodoxos rusos, evangélicos clandestinos— recobra libertad.',
      paragraphs: [
        { heading: 'Juan Pablo II y Solidarność', body: 'El papa polaco Karol Wojtyła había sido pieza clave: su visita a Polonia en 1979 («No tengáis miedo») desencadenó el sindicato Solidarność y, con él, el principio del fin del régimen.' },
      ],
      quote: { text: '“¡No tengáis miedo!”', ref: 'Juan Pablo II, homilía inaugural, 1978' },
      legacy: 'Cae el ateísmo de Estado más extenso de la historia. Pero la cristiandad europea no se reconstruye: el secularismo posterior será un nuevo desafío.',
      sources: [
        { label: 'Britannica — Fall of the Berlin Wall', href: 'https://www.britannica.com/topic/Berlin-Wall' },
      ],
    },
  ],
};

const C21: CenturyData = {
  num: 21, roman: 'XXI', title: 'Cristianismo global', range: '2000 – hoy',
  intro: 'El centro del cristianismo se ha desplazado al Sur. África, Asia y América Latina son los nuevos motores. La secularización europea convive con el avance del islam, el martirio en muchos países y el ascenso del cristianismo digital.',
  events: [
    {
      year: 2000, yearLabel: '2000 d.C.', title: 'Jubileo del Año 2000', short: 'Juan Pablo II pide perdón por los pecados de la Iglesia', icon: '🕊',
      intro: 'El 12 de marzo, en San Pedro, Juan Pablo II pide perdón en nombre de la Iglesia por los pecados cometidos en su historia: cruzadas, inquisición, antisemitismo, abusos. Es un gesto sin precedentes.',
      paragraphs: [
        { heading: 'Una memoria purificada', body: 'El Jubileo abre la era cristiana del nuevo milenio con un tono de humildad y esperanza. Reúne a millones de peregrinos en Roma y consolida el ecumenismo y el diálogo interreligioso.' },
      ],
      quote: { text: '“Pedimos perdón… y perdonamos también nosotros.”', ref: 'Juan Pablo II, Día del Perdón, 12/03/2000' },
      legacy: 'El Jubileo marca un cambio de tono en la Iglesia católica frente a su historia y abre un siglo de purificación de la memoria.',
      sources: [
        { label: 'Discursos de Juan Pablo II', href: 'https://www.vatican.va/content/john-paul-ii/es.html' },
      ],
    },
    {
      year: 2013, yearLabel: '2013 d.C.', title: 'Francisco, primer papa latinoamericano', short: 'Renuncia de Benedicto XVI; elección de Bergoglio', icon: '🌎',
      intro: 'El 11 de febrero, Benedicto XVI renuncia: primer papa que lo hace en seis siglos. Un mes más tarde es elegido Jorge Mario Bergoglio, jesuita argentino, que toma el nombre de Francisco.',
      paragraphs: [
        { heading: 'Una Iglesia "en salida"', body: 'Francisco impulsa una Iglesia más misionera y abierta a las periferias. Sus encíclicas Laudato Si\' (sobre la ecología) y Fratelli Tutti (sobre la fraternidad universal) marcan agenda en el debate global.' },
      ],
      quote: { text: '“Prefiero una Iglesia accidentada, herida y manchada por salir a la calle.”', ref: 'Francisco, Evangelii Gaudium 49' },
      legacy: 'Por primera vez en dos milenios, el papa viene del Sur. El cristianismo global encuentra rostros propios distintos del europeo.',
      sources: [
        { label: 'Evangelii Gaudium', href: 'https://www.vatican.va/content/francesco/es/apost_exhortations/documents/papa-francesco_esortazione-ap_20131124_evangelii-gaudium.html' },
      ],
    },
    {
      year: 2015, yearLabel: 'Hoy', title: 'Mártires del siglo XXI', short: 'Cristianos perseguidos en muchos países', icon: '🩸',
      intro: 'En Siria, Irak, Nigeria, China y Corea del Norte, millones de cristianos viven bajo persecución. Los "21 mártires de Libia" decapitados por Estado Islámico en 2015 son un símbolo entre muchos.',
      paragraphs: [
        { heading: 'El cristianismo como minoría perseguida', body: 'Según diversos informes, más de 360 millones de cristianos sufren algún tipo de discriminación seria. La sangre de los mártires sigue siendo, dieciocho siglos después de Tertuliano, semilla de cristianos.' },
      ],
      quote: { text: '“Ya Rabbi Yasou (Señor mío Jesús).”', ref: 'Últimas palabras de los 21 mártires coptos en Libia, 2015' },
      legacy: 'El siglo XXI hereda la gran paradoja del XX: nunca hubo más cristianos en el mundo y nunca hubo tantos perseguidos.',
      sources: [
        { label: 'Open Doors — World Watch List', href: 'https://www.opendoors.org/' },
      ],
    },
    {
      year: 2020, yearLabel: '2020 d.C.', title: 'Pandemia y fe digital', short: 'COVID-19 cierra los templos del mundo', icon: '🌐',
      intro: 'La pandemia obliga a cerrar templos en todo el planeta. El 27 de marzo, el papa Francisco preside una bendición Urbi et Orbi en una plaza de San Pedro vacía y bajo la lluvia. Es vista por más de mil millones.',
      paragraphs: [
        { heading: 'La Iglesia conectada', body: 'Misas y cultos transmitidos en línea, comunidades por videollamada, predicación en redes. El cristianismo se reorganiza para una era digital donde la presencia física y la virtual ya no se oponen.' },
      ],
      quote: { text: '“Estamos todos en la misma barca.”', ref: 'Francisco, Urbi et Orbi extraordinario, 27/03/2020' },
      legacy: 'La pandemia acelera la transformación digital de la Iglesia y plantea preguntas nuevas sobre el cuerpo, la comunidad y los sacramentos en un mundo conectado.',
      sources: [
        { label: 'Urbi et Orbi 27/03/2020', href: 'https://www.vatican.va/content/francesco/es/messages/urbi/documents/papa-francesco_20200327_urbietorbi-epidemia.html' },
      ],
    },
  ],
};

export const CENTURIES_DATA: Record<number, CenturyData> = {
  1: C1, 2: C2, 3: C3, 4: C4, 5: C5, 6: C6, 7: C7, 8: C8, 9: C9, 10: C10,
  11: C11, 12: C12, 13: C13, 14: C14, 15: C15, 16: C16, 17: C17, 18: C18,
  19: C19, 20: C20, 21: C21,
};
