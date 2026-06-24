import type { CenturyData } from './centuries';

// "Línea de Tiempo 3" (Proyecto 5), en tres partes:
//   a) GRUPOS_APARTADOS  — los que se mantuvieron apartados de la Iglesia de Roma
//   b) PRECURSORES       — los que prepararon el camino de la Reforma
//   c) REFORMADORES_CATOLICOS — los líderes que reformaron a Roma desde dentro
//
// Escrito con convicción bautista y con cariño: estos disidentes son, en buena
// medida, la familia espiritual de la que venimos. Se cuida la honestidad
// histórica (no afirmamos una cadena ininterrumpida de iglesias bautistas), y se
// distingue con claridad a los que amaron la Biblia de los que mezclaron errores.

export const GRUPOS_APARTADOS: CenturyData = {
  num: 0, roman: '', title: 'Los que no se sometieron', range: 'siglos IV – XVI',
  intro: 'Esta es, en parte, nuestra propia historia. A lo largo de los siglos hubo creyentes que no quisieron —o no pudieron— someterse a la Iglesia de Roma, y buscaron volver a una fe más sencilla, más bíblica, más libre. No todos creyeron lo mismo: algunos cayeron en errores graves, pero entre ellos brilló siempre un hilo de gente humilde, amante de la Escritura, que se parece muchísimo a nosotros. No decimos que haya una cadena ininterrumpida de iglesias bautistas desde los apóstoles; eso sería forzar la historia. Lo que sí vemos es una familia de fe: hombres y mujeres que, en distintos siglos, redescubrieron el evangelio y casi siempre lo pagaron con sangre. Toca cada hito para conocerlos.',
  events: [
    {
      year: 311, yearLabel: 'c. 311 d.C.', title: 'Los donatistas', short: 'Una iglesia de creyentes firmes en el norte de África', icon: '🕊️',
      intro: 'Tras la Gran Persecución, en el norte de África estalló una pregunta: los obispos que habían entregado las Escrituras para salvar la vida (los «traditores»), ¿podían seguir siendo ministros válidos? Un grupo numeroso, llamado luego donatista por su líder Donato, dijo que no, y se separó para formar iglesias de creyentes que se habían mantenido firmes.',
      paragraphs: [
        { heading: 'Una iglesia de los fieles', body: 'Los donatistas querían una iglesia santa, de gente comprometida de verdad, no una multitud tibia respaldada por el Estado. Rebautizaban a los que venían de la iglesia oficial, porque para ellos aquel bautismo no valía. Durante más de un siglo fueron mayoría en muchas regiones de África. Rechazaban que el emperador metiera mano en la fe: la Iglesia, decían, no es asunto del César.' },
        { heading: 'Por qué nos toca el corazón', body: 'No estaban en todo acertados, pero pusieron el dedo en algo precioso: la iglesia es una comunidad de creyentes nacidos de nuevo, libre del poder político. Tristemente, fue contra ellos que Agustín justificó por primera vez «obligar a entrar» por la fuerza (compelle intrare), abriendo una puerta terrible. Los donatistas nos recuerdan que la pureza y la libertad de la iglesia importan, y que defenderlas casi siempre cuesta caro.' },
      ],
      quote: { text: '«¿Qué tiene que ver el emperador con la Iglesia?»', ref: 'Donatistas, ante la intervención imperial' },
      legacy: 'Primer gran movimiento que se aparta de la iglesia imperial soñando con una comunidad de creyentes santos y libres. Esa misma sed —una iglesia de verdaderos discípulos— late en el corazón bautista.',
      sources: [
        { label: 'Britannica — Donatist', href: 'https://www.britannica.com/topic/Donatist' },
        { label: 'González, Justo — Historia del cristianismo, vol. I', href: 'https://www.editorialclie.es/' },
      ],
    },
    {
      year: 650, yearLabel: 'c. 650 d.C.', title: 'Los paulicianos', short: 'Amantes de Pablo y de la Biblia en Armenia', icon: '📖',
      intro: 'En las montañas de Armenia y Asia Menor surgió un movimiento que tomó su nombre del amor por el apóstol Pablo: los paulicianos. Leían las Escrituras directamente, rechazaban las imágenes, las reliquias y la veneración de María, y desconfiaban de toda la pompa de la jerarquía.',
      paragraphs: [
        { heading: 'Volver al Libro', body: 'Los paulicianos querían un cristianismo despojado: sin estatuas, sin clero poderoso, sin rituales que la Biblia no manda. Apreciaban los Evangelios y las cartas de Pablo por encima de todo. Por eso el Imperio bizantino, casado con su culto a las imágenes, los persiguió con crueldad durante generaciones: ya en el siglo IX, hacia el año 843, se cuenta que la emperatriz Teodora mandó matar a decenas de miles.' },
        { heading: 'Con honestidad', body: 'Algunos escritores antiguos los acusaron de caer en un dualismo (la idea de dos principios, uno bueno y otro malo), y no es fácil saber cuánto hay de cierto, porque casi todo lo que sabemos viene de sus enemigos. Lo que sí brilla en ellos es la pasión por la Escritura y el rechazo a la idolatría, dos cosas que llevamos en el alma. Deportados a los Balcanes, sembraron lo que después germinaría en otros disidentes.' },
      ],
      quote: { text: '«No te harás imagen, ni ninguna semejanza… No te inclinarás a ellas.»', ref: 'Éxodo 20:4-5, bandera de los paulicianos' },
      legacy: 'Un pueblo de las montañas que, lejos de Roma y de Constantinopla, se aferró a la Biblia y rechazó la idolatría. Su luz fue tenaz, aun bajo persecución brutal.',
      sources: [
        { label: 'Britannica — Paulician', href: 'https://www.britannica.com/topic/Paulician' },
      ],
    },
    {
      year: 950, yearLabel: 'c. 950 d.C.', title: 'Los bogomilos', short: 'Disidentes de los Balcanes, entre la luz y la sombra', icon: '⛪',
      intro: 'En Bulgaria, un sacerdote llamado Bogomil («amado de Dios») encabezó un movimiento popular que rechazaba a la jerarquía rica, las imágenes, las reliquias y los rituales vacíos, y predicaba una vida sencilla y de oración a partir de la Escritura.',
      paragraphs: [
        { heading: 'Lo bueno', body: 'Los bogomilos denunciaron con valentía la corrupción del clero y la idolatría de su tiempo, y pusieron la Biblia y la oración del pueblo por encima del boato. Eran pobres, austeros y populares, y por eso temidos por las autoridades.' },
        { heading: 'Lo que no podemos aprobar', body: 'Con honestidad: los bogomilos cayeron en el dualismo, la vieja idea de que el mundo material lo hizo un poder malo. Eso es un error grave, porque la Biblia enseña que un solo Dios bueno creó todas las cosas y las llamó «buenas en gran manera» (Génesis 1:31). Los incluimos porque también son parte de la historia de la disidencia, pero amando la verdad debemos decir dónde acertaron y dónde se equivocaron. Su influencia llegó hasta el sur de Francia y dio origen a los cátaros.' },
      ],
      quote: { text: '«Y vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera.»', ref: 'Génesis 1:31' },
      legacy: 'Una advertencia y una lección: se puede tener razón al rechazar la corrupción de Roma y, al mismo tiempo, errar gravemente en la doctrina. Solo la Escritura nos guarda de ambos peligros.',
      sources: [
        { label: 'Britannica — Bogomil', href: 'https://www.britannica.com/topic/Bogomil' },
      ],
    },
    {
      year: 1176, yearLabel: 'c. 1176 d.C.', title: 'Los valdenses', short: 'Los Pobres de Lyon, la luz que brilla en las tinieblas', icon: '🕯️',
      intro: 'Este hito merece detenerse. Hacia 1176, un rico comerciante de Lyon llamado Pedro Valdo leyó el evangelio, vendió todo lo que tenía y lo repartió entre los pobres para seguir a Cristo en pobreza. Pero hizo algo aún más revolucionario: mandó traducir la Biblia a la lengua del pueblo para que cualquiera pudiera leerla.',
      paragraphs: [
        { heading: 'La Biblia en manos del pueblo', body: 'Valdo y sus seguidores —los «Pobres de Lyon»— empezaron a predicar de dos en dos, hombres y mujeres laicos, con la Escritura en su propio idioma. Rechazaron el purgatorio, las indulgencias, las oraciones a los muertos y los juramentos; enseñaban que solo se debe obedecer a Dios y predicar su Palabra. Roma les prohibió predicar y, al no callar, los excomulgó en 1184. Su «delito» fue querer que el pueblo conociera la Biblia.' },
        { heading: 'Siglos de fidelidad y sangre', body: 'Perseguidos sin tregua, los valdenses se refugiaron en los valles de los Alpes, entre Francia e Italia, donde sobrevivieron escondidos casi cuatrocientos años, pasándose la Escritura de generación en generación. Cuando llegó la Reforma, en 1532 se unieron a ella con gozo. Su lema lo dice todo: «Lux lucet in tenebris» —la luz brilla en las tinieblas—. Todavía en 1655 sufrieron una masacre tan atroz que conmovió a toda Europa.' },
      ],
      quote: { text: '«Lux lucet in tenebris» — La luz brilla en las tinieblas.', ref: 'Lema de los valdenses (cf. Juan 1:5)' },
      legacy: 'Si alguien encarna lo que amamos —la Biblia en manos del pueblo, la predicación libre, la fe sencilla y costosa—, son los valdenses. De todos los grupos apartados de Roma, son los que más se parecen a nosotros, y los que más amamos.',
      sources: [
        { label: 'Britannica — Waldenses', href: 'https://www.britannica.com/topic/Waldenses' },
        { label: 'Juan 1 (Reina-Valera)', href: 'https://www.biblegateway.com/passage/?search=Juan+1&version=RVR1960' },
      ],
    },
    {
      year: 1208, yearLabel: '1208 d.C.', title: 'Los cátaros y la cruzada albigense', short: 'La intolerancia de Roma frente a toda disidencia', icon: '⚔️',
      intro: 'En el sur de Francia, en torno a la ciudad de Albi, floreció un movimiento llamado cátaro (de «puros») o albigense. Eran tan numerosos que llegaron a tener sus propias iglesias y obispos, en abierta independencia de Roma.',
      paragraphs: [
        { heading: 'Con honestidad: no eran de los nuestros', body: 'Hay que decirlo claro: los cátaros no eran cristianos evangélicos. Sostenían un dualismo extremo —dos dioses, uno del espíritu y otro de la materia—, despreciaban el cuerpo y la creación, y negaban verdades centrales de la fe. No los reclamamos como antepasados en la doctrina. Pero su historia nos enseña algo importante sobre Roma.' },
        { heading: 'Mátenlos a todos', body: 'En 1208 el papa Inocencio III lanzó una cruzada militar contra ellos: la primera vez que la Iglesia organizaba una guerra santa contra cristianos bautizados en su propio suelo. En la matanza de Béziers (1209), ante la duda de cómo distinguir herejes de católicos, se atribuye al legado papal la orden: «Mátenlos a todos, que Dios reconocerá a los suyos». Para perseguir a los disidentes nació entonces la Inquisición. La lección es sobria: cuando la Iglesia empuña la espada del Estado, termina aplastando a justos y a errados por igual.' },
      ],
      quote: { text: '«Mátenlos a todos, que Dios reconocerá a los suyos.»', ref: 'Atribuido al legado papal en Béziers, 1209' },
      legacy: 'No comparten nuestra fe, pero su exterminio muestra hasta dónde llegó Roma para callar toda voz disidente. Por eso defendemos la libertad de conciencia: nadie debe ser forzado ni perseguido por lo que cree.',
      sources: [
        { label: 'Britannica — Albigensian Crusade', href: 'https://www.britannica.com/event/Albigensian-Crusade' },
        { label: 'Britannica — Cathari', href: 'https://www.britannica.com/topic/Cathari' },
      ],
    },
    {
      year: 1525, yearLabel: '1525 d.C.', title: 'Los anabautistas', short: 'El bautismo del creyente vuelve a la luz', icon: '💧',
      intro: 'Este es el hito que más cerca está de nosotros. En Zúrich, el 21 de enero de 1525, un pequeño grupo que estudiaba la Biblia llegó a una conclusión que cambiaría todo: el bautismo es para los que creen, no para los bebés. Esa noche se bautizaron unos a otros como creyentes. Sus enemigos los llamaron «anabautistas» (rebautizadores); ellos decían que era el único bautismo verdadero.',
      paragraphs: [
        { heading: 'Una iglesia de creyentes, libre y voluntaria', body: 'Los anabautistas enseñaron lo que hoy sostenemos los bautistas: que a la iglesia se entra por una fe personal y un bautismo de creyente; que la iglesia debe ser libre del Estado; que la fe no se impone por la fuerza, sino que se abraza por convicción. En 1527, en la Confesión de Schleitheim, lo pusieron por escrito con sencillez y valentía.' },
        { heading: 'Mártires entre dos fuegos', body: 'Lo pagaron carísimo: fueron perseguidos por católicos y también por protestantes. A Félix Manz lo ahogaron en el río de Zúrich en 1527; con burla cruel llamaron a aquella muerte su «tercer bautismo». A Miguel Sattler lo quemaron ese mismo año. Conviene ser honestos: nosotros los bautistas no descendemos en línea directa de ellos (nuestras raíces están en los separatistas ingleses del siglo XVII), y hubo un grupo fanático en Münster que los avergonzó a todos. Pero en lo esencial —el bautismo del creyente, la iglesia libre, la libertad de conciencia— son hermanos de la misma fe.' },
      ],
      quote: { text: '«El bautismo se ha de dar a todos los que han aprendido el arrepentimiento… y creen de verdad que sus pecados son quitados por Cristo.»', ref: 'Confesión de Schleitheim, 1527' },
      legacy: 'Aquí vuelve a encenderse, después de siglos, la verdad que nos da nombre: el bautismo del creyente y la iglesia de los que han nacido de nuevo. Su sangre regó el camino por el que hoy caminamos.',
      sources: [
        { label: 'Britannica — Anabaptist', href: 'https://www.britannica.com/topic/Anabaptist' },
        { label: 'Confesión de Schleitheim (1527)', href: 'https://anabaptistwiki.org/mediawiki/index.php/Schleitheim_Confession_(source)' },
      ],
    },
  ],
};

export const PRECURSORES: CenturyData = {
  num: 0, roman: '', title: 'Los luceros del alba de la Reforma', range: 'siglos XIV – XVI',
  intro: 'Antes de que amaneciera la Reforma, Dios fue levantando «luceros del alba»: hombres que, todavía dentro de la Iglesia de Roma, vieron sus errores, abrieron la Biblia al pueblo y pagaron por ello. No lograron solos el cambio, pero encendieron las antorchas que Lutero y otros tomarían un siglo después. Sus nombres merecen recordarse con gratitud.',
  events: [
    {
      year: 1382, yearLabel: 'c. 1382 d.C.', title: 'John Wycliffe', short: 'La estrella matutina de la Reforma', icon: '📖',
      intro: 'En Oxford, el profesor John Wycliffe se atrevió a decir lo que pocos: que la Biblia, y no el papa ni la tradición, es la suprema autoridad, y que todo cristiano tiene derecho a leerla en su propia lengua. Por eso lo llaman «la estrella matutina de la Reforma».',
      paragraphs: [
        { heading: 'La Biblia para todos', body: 'Wycliffe impulsó la primera traducción completa de la Biblia al inglés, para que el labrador y la criada pudieran conocer a Dios por sí mismos. Atacó la riqueza del clero, la autoridad del papa, las indulgencias y la transubstanciación. Sus seguidores, los lolardos, recorrieron Inglaterra predicando con la Escritura en la mano.' },
        { heading: 'Su semilla', body: 'Murió en paz en 1384, pero Roma le temió tanto que, cuarenta y cuatro años después, desenterró sus huesos, los quemó y arrojó sus cenizas al río. Quisieron borrarlo; en cambio, las aguas llevaron su mensaje al mundo. Su influencia cruzó el mar hasta Bohemia y encendió a Jan Hus.' },
      ],
      quote: { text: '«La Sagrada Escritura es la ley de Cristo, suficiente y suprema.»', ref: 'John Wycliffe' },
      legacy: 'El primero en poner la Biblia entera en manos del pueblo en su idioma, dos siglos antes de la Reforma. Todo lo que amamos de la «sola Escritura» tiene en él un padre valiente.',
      sources: [
        { label: 'Britannica — John Wycliffe', href: 'https://www.britannica.com/biography/John-Wycliffe' },
      ],
    },
    {
      year: 1415, yearLabel: '1415 d.C.', title: 'Jan Hus', short: 'El ganso que anunció al cisne', icon: '🔥',
      intro: 'En Bohemia (hoy Chequia), el predicador Jan Hus tomó las ideas de Wycliffe y las predicó con fuego: la Escritura por encima del papa, Cristo como única cabeza de la Iglesia, y la copa de la comunión también para el pueblo, no solo para el clero.',
      paragraphs: [
        { heading: 'Fiel hasta la hoguera', body: 'Acudió al Concilio de Constanza con un salvoconducto que prometía protegerlo. Roma lo traicionó: lo arrestó, lo condenó y lo quemó vivo el 6 de julio de 1415. Murió cantando. «Hus» significa «ganso» en checo; según la tradición, profetizó: «hoy asan un ganso, pero dentro de cien años vendrá un cisne que no podrán quemar». Cien años después llegó Lutero, que se vio a sí mismo en aquel cisne.' },
        { heading: 'Una nación encendida', body: 'Su muerte desató en Bohemia un movimiento que defendió su memoria durante generaciones. Hus dejó claro que ningún concilio ni papa está por encima de la Palabra de Dios, y que vale más morir en la verdad que vivir en la mentira.' },
      ],
      quote: { text: '«Buscad la verdad, oíd la verdad, aprended la verdad, amad la verdad, decid la verdad, defended la verdad hasta la muerte.»', ref: 'Jan Hus' },
      legacy: 'Mártir de la conciencia y de la Escritura, un siglo antes de la Reforma. Su valentía nos enseña que la verdad de Dios vale más que la propia vida.',
      sources: [
        { label: 'Britannica — Jan Hus', href: 'https://www.britannica.com/biography/Jan-Hus' },
      ],
    },
    {
      year: 1418, yearLabel: 'c. 1418 d.C.', title: 'La Devotio Moderna y Tomás de Kempis', short: 'Una fe del corazón, no de la pompa', icon: '🌱',
      intro: 'Mientras unos discutían de poder, en los Países Bajos floreció un movimiento callado y hermoso: la «Devotio Moderna», la devoción nueva. Eran los Hermanos de la Vida Común, que buscaban una piedad sencilla, interior, centrada en seguir personalmente a Jesús.',
      paragraphs: [
        { heading: 'Imitar a Cristo', body: 'De este ambiente salió el libro de devoción más leído de la historia después de la Biblia: La Imitación de Cristo, atribuido a Tomás de Kempis. No habla de poder ni de ritos, sino de humildad, oración y amor a Jesús en lo secreto del corazón. Educaron a generaciones —incluido el joven Erasmo— en una religión del alma, no de la apariencia.' },
        { heading: 'Por qué importa', body: 'Estos hermanos no rompieron con Roma, pero corrieron el foco de las ceremonias hacia la fe personal y viva: el trato directo del creyente con su Señor. Esa búsqueda de una religión del corazón preparó suelo para el mensaje de la Reforma, que pondría esa fe personal en el centro de todo.' },
      ],
      quote: { text: '«¿De qué te sirve disputar profundamente sobre la Trinidad, si careces de humildad?»', ref: 'Tomás de Kempis, La Imitación de Cristo' },
      legacy: 'Recordaron que la fe no es ceremonia sino corazón: caminar humildemente con Cristo cada día. Esa religión interior y personal es también el latido del cristianismo bíblico.',
      sources: [
        { label: 'Britannica — Thomas à Kempis', href: 'https://www.britannica.com/biography/Thomas-a-Kempis' },
        { label: 'Britannica — Devotio Moderna', href: 'https://www.britannica.com/topic/Brethren-of-the-Common-Life' },
      ],
    },
    {
      year: 1498, yearLabel: '1498 d.C.', title: 'Girolamo Savonarola', short: 'El predicador que clamó contra la corrupción', icon: '⚖️',
      intro: 'En la Florencia del Renacimiento, deslumbrante y corrompida, un fraile dominico llamado Savonarola predicó como un trueno contra el pecado, el lujo y la corrupción de la Iglesia, incluso del propio papa Alejandro VI, uno de los más escandalosos de la historia.',
      paragraphs: [
        { heading: 'Una voz incómoda', body: 'Savonarola llamó a la ciudad al arrepentimiento y a una vida sencilla. No era protestante —seguía siendo católico—, pero denunció sin miedo la podredumbre de la jerarquía y proclamó que Cristo, no el papa corrupto, debía reinar. Por eso se ganó el odio de Roma.' },
        { heading: 'Quemado, pero no olvidado', body: 'Fue excomulgado, torturado, ahorcado y quemado en la plaza de Florencia en 1498. Años más tarde, Lutero reimprimió algunas de sus meditaciones y lo vio como un hermano anterior a su tiempo. Su grito contra la corrupción ayudó a despertar las conciencias.' },
      ],
      quote: { text: '«La única razón por la que vale la pena vivir es Cristo.»', ref: 'Atribuido a Girolamo Savonarola' },
      legacy: 'Un predicador que prefirió la hoguera antes que callar ante la corrupción de la Iglesia. Su valor mostró que se podía amar a Cristo y, por eso mismo, denunciar a Roma.',
      sources: [
        { label: 'Britannica — Girolamo Savonarola', href: 'https://www.britannica.com/biography/Girolamo-Savonarola' },
      ],
    },
    {
      year: 1516, yearLabel: '1516 d.C.', title: 'Erasmo de Rotterdam', short: 'El que puso el Nuevo Testamento griego en la mesa', icon: '🪶',
      intro: 'Erasmo fue el sabio más célebre de su tiempo. Sin romper nunca con Roma, hizo algo decisivo: en 1516 publicó el Nuevo Testamento en su griego original, con una nueva traducción al latín, devolviendo a la Iglesia el texto puro de la Palabra.',
      paragraphs: [
        { heading: 'De vuelta a las fuentes', body: 'Aquel Nuevo Testamento griego fue la herramienta con la que Lutero tradujo la Biblia al alemán y Tyndale al inglés. Erasmo también se burló con ingenio de la superstición, la venta de reliquias y la ignorancia del clero, y soñó con que hasta el campesino cantara las Escrituras tras el arado.' },
        { heading: 'A medio camino', body: 'Erasmo abrió la puerta, pero no quiso cruzarla: se quedó dentro de Roma y hasta discutió con Lutero. Se dijo de él que «puso el huevo que Lutero empolló». Aun así, al poner la Palabra original al alcance de todos, prestó a la Reforma un servicio que nadie más podía dar.' },
      ],
      quote: { text: '«Quisiera que hasta la mujer más humilde leyera los Evangelios y las cartas de Pablo.»', ref: 'Erasmo de Rotterdam' },
      legacy: 'Sin disparar un solo cañón doctrinal, devolvió a la Iglesia el Nuevo Testamento en su lengua original. La Reforma, que se levanta sobre la Biblia, le debe sus cimientos.',
      sources: [
        { label: 'Britannica — Erasmus', href: 'https://www.britannica.com/biography/Erasmus-Dutch-humanist' },
      ],
    },
  ],
};

export const REFORMADORES_CATOLICOS: CenturyData = {
  num: 0, roman: '', title: 'La reforma de Roma desde dentro', range: 'siglos X – XVI',
  intro: 'Roma también intentó reformarse a sí misma, una y otra vez. Hubo en ella hombres y mujeres sinceros, valientes y disciplinados, que limpiaron abusos, renovaron la vida monástica y entregaron su vida a Dios como ellos lo entendían. Lo decimos con respeto y sin rencor. Pero conviene notar algo: estas reformas cambiaron las costumbres y la disciplina de Roma, sin volver al evangelio de la gracia y a la sola Escritura. Reformaron la vida de la Iglesia, no su corazón.',
  events: [
    {
      year: 910, yearLabel: '910 d.C.', title: 'La reforma de Cluny', short: 'Limpiar la vida de los monasterios', icon: '⛪',
      intro: 'En plena decadencia del siglo X, el duque Guillermo de Aquitania fundó la abadía de Cluny y la libró del control de los señores y reyes. Fue el comienzo de la mayor reforma monástica de la Edad Media.',
      paragraphs: [
        { heading: 'Volver a la regla', body: 'Cluny exigió a los monjes vivir en serio su voto: oración, disciplina, honestidad, lejos de la corrupción y la simonía (la compra de cargos). Llegó a tener cerca de mil monasterios por toda Europa y formó a generaciones de líderes que querían una Iglesia más limpia.' },
        { heading: 'Una reforma de costumbres', body: 'Cluny hizo un bien real al combatir la corrupción y elevar la vida del clero. Pero su reforma fue de disciplina, no de doctrina: no tocó los errores de fondo —la salvación por obras, el poder papal, la misa como sacrificio—. Limpió la casa sin cambiar sus cimientos.' },
      ],
      quote: { text: '«Donde se reúnen monjes para alabar a Dios, allí está el cielo en la tierra.»', ref: 'Tradición cluniacense' },
      legacy: 'La prueba de que Roma sabía indignarse contra su propia corrupción. Pero reformar las costumbres sin volver al evangelio deja el problema más hondo intacto.',
      sources: [
        { label: 'Britannica — Cluniac Reform', href: 'https://www.britannica.com/topic/Cluniac-Reform' },
      ],
    },
    {
      year: 1073, yearLabel: '1073 d.C.', title: 'La reforma gregoriana', short: 'Gregorio VII limpia y centraliza el clero', icon: '🔑',
      intro: 'El papa Gregorio VII (Hildebrando) emprendió una reforma enérgica: acabar con la compra de cargos, imponer el celibato al clero y librar a la Iglesia del control de reyes y nobles en el nombramiento de obispos.',
      paragraphs: [
        { heading: 'Disciplina y poder', body: 'Por un lado, Gregorio combatió abusos reales, como la simonía. Por otro, usó la reforma para concentrar un poder papal sin precedentes, hasta afirmar que el papa podía deponer reyes. Su pulso con el emperador terminó con aquel arrodillado en la nieve de Canossa.' },
        { heading: 'Reforma que agrandó el problema', body: 'Aquí se ve con claridad el límite de las reformas de Roma: al «reformar», Gregorio reforzó justamente lo que más se había desviado de la Biblia —el poder absoluto del papa y el celibato obligatorio—. Una reforma que cura un abuso mientras agranda otro no es la que el evangelio pedía.' },
      ],
      quote: { text: '«El romano pontífice puede deponer a los emperadores.»', ref: 'Dictatus Papae de Gregorio VII, 1075' },
      legacy: 'Mostró que Roma podía reformar su disciplina; pero al hacerlo, afianzó el poder papal, una de las mayores desviaciones respecto del Nuevo Testamento.',
      sources: [
        { label: 'Britannica — Investiture Controversy', href: 'https://www.britannica.com/event/Investiture-Controversy' },
      ],
    },
    {
      year: 1209, yearLabel: '1209 d.C.', title: 'Francisco de Asís y los mendicantes', short: 'Renovar la Iglesia desde la pobreza', icon: '🐦',
      intro: 'Francisco de Asís, hijo de un rico comerciante, lo dejó todo para abrazar la pobreza y predicar el evangelio por los caminos. Con él y con Domingo de Guzmán nacieron las órdenes mendicantes, que renovaron la Iglesia desde abajo.',
      paragraphs: [
        { heading: 'Un soplo de aire fresco', body: 'Frente a una jerarquía rica y lejana, Francisco vivió con sencillez, amó a los pobres y a la creación, y predicó a Cristo con una alegría contagiosa. Su sinceridad y su amor son admirables, y hay mucho en él que conmueve a cualquier creyente.' },
        { heading: 'Renovación dentro de los límites de Roma', body: 'Francisco no quiso reformar la doctrina, sino vivir el evangelio dentro de la obediencia total a la Iglesia. Su renovación fue de vida y de fervor, no de teología. Por eso Roma lo abrazó: no amenazaba sus dogmas, los revitalizaba. Admiramos su entrega, aunque su camino no es el de la sola fe y la sola Escritura.' },
      ],
      quote: { text: '«Predicad el evangelio en todo tiempo; si es necesario, usad palabras.»', ref: 'Atribuido a Francisco de Asís' },
      legacy: 'Un corazón sincero que renovó la Iglesia con pobreza y amor. Recordatorio de que puede haber gran fervor sin una vuelta plena al evangelio de la gracia.',
      sources: [
        { label: 'Britannica — Francis of Assisi', href: 'https://www.britannica.com/biography/Saint-Francis-of-Assisi' },
      ],
    },
    {
      year: 1540, yearLabel: '1540 d.C.', title: 'Ignacio de Loyola y los jesuitas', short: 'La punta de lanza de la Contrarreforma', icon: '✠',
      intro: 'Un soldado español, Ignacio de Loyola, se convirtió tras una herida de guerra y fundó la Compañía de Jesús, aprobada por el papa en 1540. Los jesuitas serían la fuerza más disciplinada y eficaz de la reforma católica frente al avance protestante.',
      paragraphs: [
        { heading: 'Disciplina, educación y misión', body: 'Con sus Ejercicios Espirituales, sus colegios y sus misiones por todo el mundo, los jesuitas levantaron el ánimo del catolicismo y frenaron en muchos lugares la expansión de la Reforma. Eran cultos, entregados y obedientes «hasta como un cadáver» a la voluntad del papa.' },
        { heading: 'Reforma para defender a Roma', body: 'Su objetivo no era volver al evangelio de Lutero, sino fortalecer y defender a la Iglesia de Roma y su autoridad papal. Fueron sinceros y abnegados, pero al servicio de las mismas doctrinas que la Reforma había denunciado. Reformaron la energía de Roma, no su mensaje.' },
      ],
      quote: { text: '«Para acertar en todo, debemos tener siempre por cierto que lo blanco que yo veo es negro, si la Iglesia jerárquica así lo determina.»', ref: 'Ignacio de Loyola, Ejercicios Espirituales' },
      legacy: 'La reforma católica más eficaz: disciplina, escuelas y misiones. Pero puesta toda al servicio de la autoridad papal, no de la sola Escritura.',
      sources: [
        { label: 'Britannica — Ignatius of Loyola', href: 'https://www.britannica.com/biography/Saint-Ignatius-of-Loyola' },
      ],
    },
    {
      year: 1545, yearLabel: '1545 – 1563 d.C.', title: 'El Concilio de Trento', short: 'La gran reforma —y la gran frontera— de Roma', icon: '📜',
      intro: 'Ante el terremoto de la Reforma, Roma convocó el Concilio de Trento, que durante casi veinte años definió la fe católica y reorganizó su disciplina. Fue su reforma más profunda y la que dio forma al catolicismo de los siguientes cuatro siglos.',
      paragraphs: [
        { heading: 'Lo que reformó', body: 'Trento corrigió abusos reales: creó seminarios para formar al clero, exigió a los obispos vivir en sus diócesis, ordenó catecismos y frenó la venta descarada de cargos. En lo disciplinar, hizo un trabajo serio y necesario.' },
        { heading: 'Lo que endureció', body: 'Pero en la doctrina, Trento hizo lo contrario de reformar: definió como dogma justo lo que la Reforma había denunciado. Condenó la salvación solo por la fe, reafirmó los siete sacramentos, la transubstanciación, el purgatorio, las indulgencias y la autoridad de la tradición junto a la Escritura. Trento limpió la casa, pero cerró con llave la puerta del evangelio de la gracia. Por eso marca, hasta hoy, la frontera entre Roma y la fe que se apoya solo en la Biblia.' },
      ],
      quote: { text: '«Si alguno dijere que el hombre es justificado por la sola fe… sea anatema.»', ref: 'Concilio de Trento, sesión VI, canon 9' },
      legacy: 'La reforma interna más completa de Roma y, a la vez, su rechazo formal del evangelio de la sola gracia. Reformó la disciplina y blindó el error.',
      sources: [
        { label: 'Britannica — Council of Trent', href: 'https://www.britannica.com/event/Council-of-Trent' },
        { label: 'Romanos 3 (Reina-Valera)', href: 'https://www.biblegateway.com/passage/?search=Romanos+3&version=RVR1960' },
      ],
    },
    {
      year: 1562, yearLabel: '1562 d.C.', title: 'Teresa de Ávila', short: 'Reforma de la vida y de la oración', icon: '🕊️',
      intro: 'Teresa de Ávila, monja española, emprendió una reforma de su orden, el Carmelo, buscando una vida de oración más pobre, recogida y sincera. Junto a Juan de la Cruz, dejó algunas de las páginas más intensas sobre la oración escritas jamás.',
      paragraphs: [
        { heading: 'Una vida de oración', body: 'Teresa luchó contra la relajación de los conventos y fundó casas de vida austera y entregada. Sus escritos sobre la oración y el trato íntimo con Dios revelan un alma de verdad enamorada de Cristo, y por eso conmueven incluso a quienes no compartimos su teología.' },
        { heading: 'Hermosa y, a la vez, lejana del evangelio', body: 'Reconocemos en Teresa una sed real de Dios y una vida de oración admirable. Pero su espiritualidad está envuelta en la teología de Roma —méritos, mediaciones, sacramentos— que no devuelve al alma al descanso de la sola fe en Cristo. Honramos su sinceridad, aunque señalemos que la paz que tanto buscó se halla, plena y gratuita, en confiar solo en la obra terminada de Jesús.' },
      ],
      quote: { text: '«Nada te turbe, nada te espante; quien a Dios tiene, nada le falta.»', ref: 'Atribuido a Teresa de Ávila' },
      legacy: 'Una reforma de la vida y la oración dentro de Roma, llena de sinceridad. Nos recuerda que la sed de Dios es real en muchos corazones, y que esa sed solo se sacia del todo en el evangelio de la gracia.',
      sources: [
        { label: 'Britannica — Teresa of Ávila', href: 'https://www.britannica.com/biography/Saint-Teresa-of-Avila' },
      ],
    },
  ],
};
