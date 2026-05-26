import type { CenturyData } from './centuries';

export const CONCILIOS: CenturyData = {
  num: 0,
  roman: '',
  title: 'Los 21 concilios ecuménicos',
  range: '325 – 1965',
  intro: 'Los grandes concilios universales que definieron la fe, la disciplina y la reforma de la Iglesia. Los siete primeros son reconocidos por católicos y ortodoxos; del octavo en adelante, son considerados ecuménicos por la tradición católica.',
  events: [
    {
      year: 325, yearLabel: '325 d.C.', title: 'I. Nicea I', short: 'Convocado por Constantino. Define la divinidad de Cristo.', icon: '✝',
      intro: 'Primer concilio ecuménico de la historia. Reúne a unos 318 obispos en Nicea de Bitinia, convocados por el emperador Constantino para resolver la controversia arriana.',
      paragraphs: [
        { heading: 'Arrio y la controversia', body: 'El presbítero alejandrino Arrio enseñaba que el Hijo de Dios era una criatura, la primera y más excelsa, pero criatura. La fórmula amenazaba con dividir el Imperio recién pacificado.' },
        { heading: '"Homoousios"', body: 'El concilio define que el Hijo es «consustancial» (homoousios) al Padre, «engendrado, no creado». Atanasio, joven diácono presente, defenderá esta fe durante medio siglo.' },
        { heading: 'Otros decretos', body: 'Fija también la fecha de la Pascua, organiza la jerarquía y prohíbe la usura al clero. Se promulgan 20 cánones disciplinares.' },
      ],
      quote: { text: '“Engendrado, no creado, consustancial al Padre.”', ref: 'Símbolo de Nicea, 325' },
      legacy: 'Funda el modelo conciliar y fija para siempre el corazón trinitario de la fe cristiana. Toda la teología posterior se construye sobre Nicea.',
      sources: [
        { label: 'Atanasio — De decretis Nicaenae synodi', href: 'https://www.newadvent.org/fathers/2809.htm' },
        { label: 'Britannica — Council of Nicaea', href: 'https://www.britannica.com/event/Council-of-Nicaea-325' },
      ],
    },
    {
      year: 381, yearLabel: '381 d.C.', title: 'II. Constantinopla I', short: 'Completa el Credo. Define la divinidad del Espíritu Santo.', icon: '🕊',
      intro: 'Convocado por Teodosio I, reúne unos 150 obispos. Cierra el largo combate del siglo IV con la victoria definitiva de la fe nicena.',
      paragraphs: [
        { heading: 'Espíritu Santo, Señor y dador de vida', body: 'Frente a los pneumatómacos —que negaban la divinidad del Espíritu—, el concilio amplía el Credo con la confesión de fe trinitaria completa: «Creo en el Espíritu Santo, Señor y dador de vida, que procede del Padre…».' },
        { heading: 'Primado de Constantinopla', body: 'Otorga al obispo de Constantinopla la primacía de honor después de Roma, «porque es la nueva Roma». Inicia la rivalidad con Alejandría y matiza el primado romano.' },
      ],
      quote: { text: '“Creemos en el Espíritu Santo, Señor y dador de vida, que con el Padre y el Hijo recibe una misma adoración y gloria.”', ref: 'Credo niceno-constantinopolitano' },
      legacy: 'El Credo niceno-constantinopolitano que rezan católicos, ortodoxos y casi todas las confesiones cristianas viene de aquí.',
      sources: [
        { label: 'Britannica — Council of Constantinople I', href: 'https://www.britannica.com/event/First-Council-of-Constantinople' },
      ],
    },
    {
      year: 431, yearLabel: '431 d.C.', title: 'III. Éfeso', short: 'María, Theotokos. Una sola persona en Cristo.', icon: '👶',
      intro: 'Convocado por Teodosio II en Éfeso, ciudad de María. Cirilo de Alejandría dirige los trabajos contra Nestorio, patriarca de Constantinopla.',
      paragraphs: [
        { heading: '¿Madre de Cristo o Madre de Dios?', body: 'Nestorio prefería el título «Christotokos» (Madre de Cristo) y rechazaba «Theotokos» (Madre de Dios). Cirilo responde: si Cristo es una sola persona, lo que se predica de su humanidad se predica del Verbo: María es Madre de Dios.' },
        { heading: 'Cisma con los nestorianos', body: 'Las iglesias del Imperio Persa rechazan Éfeso y se separan: forman la Iglesia del Oriente, llamada «nestoriana», que misionará hasta China en el siglo VII.' },
      ],
      quote: { text: '“Theotokos: Madre de Dios.”', ref: 'Definición del concilio, 431' },
      legacy: 'Defiende la unidad indisoluble de Cristo y consolida la piedad mariana. Marca el primer cisma cristiano duradero.',
      sources: [
        { label: 'Cirilo — Carta a Nestorio', href: 'https://www.newadvent.org/fathers/3801.htm' },
        { label: 'Britannica — Council of Ephesus', href: 'https://www.britannica.com/event/Council-of-Ephesus' },
      ],
    },
    {
      year: 451, yearLabel: '451 d.C.', title: 'IV. Calcedonia', short: 'Una persona, dos naturalezas.', icon: '⚖',
      intro: 'Convocado por la emperatriz Pulqueria y Marciano, reúne unos 520 obispos. Es el mayor concilio de la antigüedad.',
      paragraphs: [
        { heading: 'La fórmula clásica', body: 'Cristo es «una persona en dos naturalezas, sin confusión, sin cambio, sin división, sin separación». Esta cuádruple negación define el equilibrio cristológico para siempre.' },
        { heading: 'Tomo de León', body: 'León Magno envía un escrito (Tomo a Flaviano) que se lee en el concilio. Los obispos exclaman: «¡Pedro ha hablado por boca de León!». Es la primera gran afirmación oriental de la autoridad romana.' },
        { heading: 'Cisma monofisita', body: 'Las iglesias coptas, etíopes, siríacas y armenias rechazan Calcedonia y se separan. Forman las llamadas Iglesias orientales antiguas. La división persiste hasta hoy.' },
      ],
      quote: { text: '“Una persona en dos naturalezas, sin confusión, sin cambio, sin división, sin separación.”', ref: 'Definición de Calcedonia' },
      legacy: 'Fija el lenguaje cristológico común de católicos, ortodoxos y la mayoría de protestantes. Es el segundo gran cisma cristiano permanente.',
      sources: [
        { label: 'Tomo de León', href: 'https://www.newadvent.org/fathers/3604028.htm' },
        { label: 'Britannica — Council of Chalcedon', href: 'https://www.britannica.com/event/Council-of-Chalcedon' },
      ],
    },
    {
      year: 553, yearLabel: '553 d.C.', title: 'V. Constantinopla II', short: 'Justiniano y los Tres Capítulos.', icon: '📜',
      intro: 'Convocado por el emperador Justiniano para reconciliar a los monofisitas con la Gran Iglesia, condena a tres teólogos antioquenos sospechosos de nestorianismo.',
      paragraphs: [
        { heading: 'Los Tres Capítulos', body: 'El concilio condena los escritos de Teodoro de Mopsuestia, parte de los de Teodoreto de Ciro y la carta de Ibas a Maris. Justiniano busca el imposible: tener contentos a calcedonianos y monofisitas.' },
        { heading: 'Condena de Orígenes', body: 'Se atribuyen al concilio (probablemente en una sesión previa) los famosos anatemas contra Orígenes y la doctrina de la apocatástasis y la preexistencia de las almas.' },
      ],
      quote: { text: '“Si alguien dice que el castigo de los demonios y de los hombres impíos es temporal… sea anatema.”', ref: 'Anatemas atribuidos a Constantinopla II' },
      legacy: 'No logró reconciliar a los monofisitas pero precisó la cristología. La sombra de Orígenes queda formalmente cerrada en la teología oriental.',
      sources: [
        { label: 'Britannica — Council of Constantinople II', href: 'https://www.britannica.com/event/Second-Council-of-Constantinople' },
      ],
    },
    {
      year: 681, yearLabel: '680–681', title: 'VI. Constantinopla III', short: 'Cristo tiene dos voluntades.', icon: '🙏',
      intro: 'Convocado por Constantino IV, condena el monothelismo: la doctrina de que en Cristo hay una sola voluntad. El concilio define que tiene dos —divina y humana— en perfecta armonía.',
      paragraphs: [
        { heading: 'Coherencia con Calcedonia', body: 'Si Cristo tiene dos naturalezas plenas, también tiene dos voluntades. La voluntad humana de Cristo, real y libre, se somete espontáneamente a la divina: «No se haga mi voluntad, sino la tuya».' },
        { heading: 'Condena de Honorio', body: 'El concilio condena al papa Honorio I (muerto en 638) por su tibieza ante el monothelismo. Es uno de los pocos casos de un papa censurado por un concilio ecuménico, y será citado en debates posteriores sobre la infalibilidad papal.' },
      ],
      quote: { text: '“No se haga mi voluntad, sino la tuya.”', ref: 'Lc 22, 42 — citado en el concilio' },
      legacy: 'Cierra el ciclo cristológico de los grandes concilios. Después solo quedará la cuestión de las imágenes en Nicea II.',
      sources: [
        { label: 'Britannica — Council of Constantinople III', href: 'https://www.britannica.com/event/Council-of-Constantinople-680-681' },
      ],
    },
    {
      year: 787, yearLabel: '787 d.C.', title: 'VII. Nicea II', short: 'Restauración del culto a las imágenes.', icon: '🖼',
      intro: 'Convocado por la emperatriz Irene, restablece el culto a los iconos tras 60 años de iconoclastia. Es el último concilio reconocido como ecuménico por la Iglesia ortodoxa.',
      paragraphs: [
        { heading: 'Adoración y veneración', body: 'El concilio distingue: adoración (latría) solo a Dios; veneración (proskynesis) a los iconos, que pasa al prototipo. Como dirá Juan Damasceno: «no adoro la materia, sino al Creador de la materia».' },
      ],
      quote: { text: '“El honor tributado a la imagen pasa al prototipo, y el que adora la imagen, adora a la persona representada en ella.”', ref: 'Definición de Nicea II' },
      legacy: 'Consolida el lugar central del icono en la espiritualidad ortodoxa. Defiende la posibilidad de representar al Verbo encarnado.',
      sources: [
        { label: 'Juan Damasceno — Tratados sobre las imágenes', href: 'https://www.newadvent.org/fathers/3304.htm' },
        { label: 'Britannica — Council of Nicaea II', href: 'https://www.britannica.com/event/Second-Council-of-Nicaea' },
      ],
    },
    {
      year: 870, yearLabel: '869–870', title: 'VIII. Constantinopla IV', short: 'Caso Focio. Último concilio común con Oriente.', icon: '⚡',
      intro: 'Reconocido como ecuménico solo por la Iglesia católica latina (los ortodoxos reconocen otro Constantinopla IV de 879-880, que rehabilita a Focio).',
      paragraphs: [
        { heading: 'El cisma de Focio', body: 'Focio, patriarca laico de Constantinopla, había sido depuesto y reinstalado entre tensiones con Roma. El concilio lo depone definitivamente y reafirma el primado romano.' },
        { heading: 'El divorcio se prepara', body: 'Aunque la separación formal entre Roma y Constantinopla llegará en 1054, las heridas de este concilio (y del subsiguiente «Foziano») marcan la trayectoria de divergencia.' },
      ],
      quote: { text: '“La Iglesia romana es cabeza de todas las iglesias por institución divina.”', ref: 'Cánones del concilio' },
      legacy: 'Último concilio antes del Gran Cisma. Su no reconocimiento por la Iglesia ortodoxa simboliza la creciente distancia entre Oriente y Occidente.',
      sources: [
        { label: 'Britannica — Council of Constantinople IV', href: 'https://www.britannica.com/event/Fourth-Council-of-Constantinople-869-870' },
      ],
    },
    {
      year: 1123, yearLabel: '1123 d.C.', title: 'IX. Letrán I', short: 'Concordato de Worms y reforma gregoriana.', icon: '⛪',
      intro: 'Convocado por Calixto II, es el primer concilio ecuménico celebrado en Occidente. Ratifica el Concordato de Worms (1122) que cierra la querella de las investiduras.',
      paragraphs: [
        { heading: 'Investiduras', body: 'El emperador renuncia a investir a los obispos con los símbolos espirituales. La Iglesia gana independencia en el nombramiento de su jerarquía. Es la victoria de la reforma gregoriana.' },
        { heading: 'Indulgencia de cruzada', body: 'Confirma las indulgencias para los cruzados y promueve la primera reforma disciplinar amplia: simonía, celibato sacerdotal, tregua de Dios.' },
      ],
      quote: { text: '“El que comprare un puesto eclesiástico sea anatema.”', ref: 'Letrán I, canon 1' },
      legacy: 'Cierra una crisis de medio siglo y consolida el papado medieval. Inaugura la serie de concilios «occidentales».',
      sources: [
        { label: 'Britannica — First Lateran Council', href: 'https://www.britannica.com/event/First-Lateran-Council' },
      ],
    },
    {
      year: 1139, yearLabel: '1139 d.C.', title: 'X. Letrán II', short: 'Cierra el cisma de Anacleto II.', icon: '🕊',
      intro: 'Convocado por Inocencio II tras ocho años de cisma. Anula los actos del antipapa Anacleto II y aborda urgentemente la disciplina del clero.',
      paragraphs: [
        { heading: 'Celibato obligatorio', body: 'Refuerza el celibato sacerdotal en Occidente declarando inválidos los matrimonios ya contraídos por subdiáconos y diáconos. La Iglesia latina toma su forma medieval clásica.' },
        { heading: 'Condena de cismas', body: 'Anula las ordenaciones del antipapa, condena las herejías populares (Arnaldo de Brescia, Pedro de Bruys) y prohíbe la ballesta entre cristianos.' },
      ],
      quote: { text: '“No celebren matrimonio quienes han recibido las órdenes mayores.”', ref: 'Letrán II, canon 7' },
      legacy: 'Fija las bases del clero célibe latino y termina con un cisma; estabiliza la Iglesia romana del siglo XII.',
      sources: [
        { label: 'Britannica — Second Lateran Council', href: 'https://www.britannica.com/event/Second-Lateran-Council' },
      ],
    },
    {
      year: 1179, yearLabel: '1179 d.C.', title: 'XI. Letrán III', short: 'Mayoría de dos tercios para elegir papa.', icon: '👑',
      intro: 'Convocado por Alejandro III tras el cisma con el emperador Federico Barbarroja. Reúne más de 300 obispos.',
      paragraphs: [
        { heading: 'Elección del papa', body: 'Establece que la elección papal requiere dos tercios del cardenalicio, sustrayéndola por completo a la influencia imperial. La regla durará casi nueve siglos.' },
        { heading: 'Contra herejes y judíos', body: 'Lanza la primera cruzada formal contra cátaros y valdenses en el sur de Francia. Endurece la legislación contra judíos y musulmanes en territorios cristianos.' },
      ],
      quote: { text: '“El que reciba dos tercios de los votos del colegio cardenalicio se tenga por elegido.”', ref: 'Letrán III, canon 1' },
      legacy: 'La regla de los dos tercios estabiliza el papado y reduce la interferencia imperial. Pero la línea dura contra los disidentes prepara la Inquisición.',
      sources: [
        { label: 'Britannica — Third Lateran Council', href: 'https://www.britannica.com/event/Third-Lateran-Council' },
      ],
    },
    {
      year: 1215, yearLabel: '1215 d.C.', title: 'XII. Letrán IV', short: 'El gran concilio de Inocencio III.', icon: '⚖',
      intro: 'Convocado por Inocencio III, reúne 1200 prelados. Es el cenit de la cristiandad medieval y el concilio más influyente de la Edad Media.',
      paragraphs: [
        { heading: 'Transubstanciación', body: 'Se utiliza por primera vez de forma oficial el término: en la eucaristía, el pan y el vino se convierten en el cuerpo y la sangre de Cristo. Será doctrina central, y punto de quiebre con los reformadores del siglo XVI.' },
        { heading: 'Confesión y comunión anuales', body: 'Obliga a todo fiel a confesarse y comulgar al menos en Pascua. Crea el ritmo sacramental que regirá la vida del pueblo cristiano hasta el siglo XX.' },
        { heading: 'Distintivo a judíos y musulmanes', body: 'Impone signo distintivo a judíos y musulmanes en territorios cristianos. La medida proyectará una sombra que llega al siglo XX.' },
      ],
      quote: { text: '“Una sola es la Iglesia universal de los fieles, fuera de la cual nadie absolutamente se salva.”', ref: 'Letrán IV, canon 1' },
      legacy: 'Letrán IV es la expresión máxima de la sociedad cristiana medieval. La piedad, la teología y la disciplina católicas se modelan según sus cánones durante 750 años.',
      sources: [
        { label: 'Britannica — Fourth Lateran Council', href: 'https://www.britannica.com/event/Fourth-Lateran-Council' },
      ],
    },
    {
      year: 1245, yearLabel: '1245 d.C.', title: 'XIII. Lyon I', short: 'Inocencio IV depone al emperador Federico II.', icon: '⚔',
      intro: 'El papa Inocencio IV, refugiado en Lyon huyendo del emperador Federico II Hohenstaufen, convoca un concilio que depone al emperador y le excomulga.',
      paragraphs: [
        { heading: 'Conflicto papado-imperio', body: 'Federico II, «stupor mundi», había desafiado al papado con su política mediterránea y su entorno tolerante con musulmanes y herejes. El concilio le declara hereje y depuesto.' },
        { heading: 'Otras decisiones', body: 'Promueve una nueva cruzada contra los mongoles que avanzan por Europa oriental y reorganiza la asistencia a Tierra Santa.' },
      ],
      quote: { text: '“Le declaramos privado por sentencia divina del Imperio y de cualquier honor y dignidad.”', ref: 'Sentencia contra Federico II' },
      legacy: 'Marca el clímax del poder papal medieval pero también el inicio de su decadencia: los reyes ya no aceptarán dócilmente este tipo de sentencias.',
      sources: [
        { label: 'Britannica — First Council of Lyon', href: 'https://www.britannica.com/event/First-Council-of-Lyon' },
      ],
    },
    {
      year: 1274, yearLabel: '1274 d.C.', title: 'XIV. Lyon II', short: 'Unión efímera con los ortodoxos.', icon: '🤝',
      intro: 'Convocado por Gregorio X, busca la unión con la Iglesia bizantina, la cruzada y la reforma del clero. Tomás de Aquino muere camino al concilio; Buenaventura muere durante él.',
      paragraphs: [
        { heading: 'Unión con Bizancio', body: 'Por presión del emperador Miguel VIII Paleólogo —que necesitaba apoyo militar contra los turcos— los legados griegos aceptan el filioque y el primado romano. La unión se desmorona en pocos años: el clero y el pueblo griego la rechazan.' },
        { heading: 'Conclave', body: 'Tras la muerte del papa, los cardenales se demoraron tres años en elegir sucesor. Gregorio X fija la regla del cónclave: cardenales encerrados con llave y a régimen reducido si no eligen pronto.' },
      ],
      quote: { text: '“La Iglesia romana posee el supremo y pleno primado.”', ref: 'Lyon II, profesión de fe del emperador Miguel VIII' },
      legacy: 'El primer intento serio de reunión con Oriente fracasa, pero deja el modelo conciliar que se intentará repetir en Florencia.',
      sources: [
        { label: 'Britannica — Second Council of Lyon', href: 'https://www.britannica.com/event/Second-Council-of-Lyon' },
      ],
    },
    {
      year: 1311, yearLabel: '1311–1312', title: 'XV. Vienne', short: 'Supresión de los Templarios.', icon: '🗝',
      intro: 'Convocado por Clemente V bajo presión de Felipe IV de Francia, se reúne en Vienne (Delfinado). Su decisión más recordada es la disolución de la Orden del Temple.',
      paragraphs: [
        { heading: 'El proceso de los Templarios', body: 'La rica Orden del Temple había sido acusada por el rey de Francia de herejía, idolatría y otros crímenes. Bajo presión, el papa la suprime «no por sentencia, sino por providencia apostólica». Sus bienes pasan a los Hospitalarios y a la corona francesa.' },
        { heading: 'Reforma y mística', body: 'Condena los errores de los begardos y beguinas y reafirma la unión sustancial del alma con el cuerpo (contra Pedro Olivi). Aborda la reforma del clero y de las órdenes.' },
      ],
      quote: { text: '“Suprimimos la Orden de los Templarios, no por sentencia, sino por providencia apostólica.”', ref: 'Bula Vox in excelso, 1312' },
      legacy: 'Episodio oscuro del papado avignonés: cede ante el rey de Francia y disuelve una orden sin sentencia firme. La memoria del Temple persiste hasta hoy.',
      sources: [
        { label: 'Britannica — Council of Vienne', href: 'https://www.britannica.com/event/Council-of-Vienne' },
      ],
    },
    {
      year: 1418, yearLabel: '1414–1418', title: 'XVI. Constanza', short: 'Acaba con el Cisma de Occidente. Quema a Hus.', icon: '🕊',
      intro: 'El concilio mejor concurrido de la Edad Media. Resuelve el escándalo de tres papas simultáneos eligiendo a Martín V (1417) tras deponer o aceptar la renuncia de los demás.',
      paragraphs: [
        { heading: 'Haec Sancta y conciliarismo', body: 'Decreta solemnemente que el concilio recibe su autoridad inmediatamente de Cristo y que todos —incluso el papa— le deben obediencia en materias de fe, cisma y reforma. Tesis conciliarista que será revertida más tarde por los papas.' },
        { heading: 'Jan Hus, mártir', body: 'Tras venir con salvoconducto imperial, el reformador checo Jan Hus es arrestado, condenado y quemado vivo (6/7/1415). Su muerte detona las guerras husitas y prepara, un siglo después, la Reforma.' },
      ],
      quote: { text: '“Este concilio… legítimamente congregado en el Espíritu Santo, recibe su potestad inmediatamente de Cristo.”', ref: 'Decreto Haec Sancta, 1415' },
      legacy: 'Salva la unidad pero deja una hipoteca: el debate papa vs. concilio. La hoguera de Hus marca el cisma profundo entre la Iglesia y los reformadores que vendrán.',
      sources: [
        { label: 'Britannica — Council of Constance', href: 'https://www.britannica.com/event/Council-of-Constance' },
      ],
    },
    {
      year: 1445, yearLabel: '1431–1445', title: 'XVII. Florencia', short: 'Intento final de unión con los ortodoxos.', icon: '🤝',
      intro: 'Iniciado en Basilea, trasladado a Ferrara y luego a Florencia, intenta nuevamente reunir Oriente y Occidente bajo presión turca: Constantinopla está al borde de la caída.',
      paragraphs: [
        { heading: 'Unión con los griegos (1439)', body: 'Tras meses de discusión, los obispos griegos aceptan el filioque, el purgatorio, el primado romano y los pan ácimos. Solo Marcos de Éfeso se niega a firmar. La unión se proclama solemnemente en Santa María del Fiore.' },
        { heading: 'Fracaso popular', body: 'En Constantinopla los firmantes son repudiados por el clero y el pueblo. Catorce años después la ciudad cae ante los turcos (1453) y el patriarcado denuncia formalmente la unión.' },
        { heading: 'Otras uniones', body: 'Se firma también la unión con coptos, etíopes, armenios y caldeos, también en gran parte efímera, salvo en algunas porciones que generaron las Iglesias católicas orientales.' },
      ],
      quote: { text: '“Definimos que la santa Sede Apostólica y el romano pontífice tienen el primado en todo el orbe.”', ref: 'Decreto Laetentur Caeli, 1439' },
      legacy: 'Último gran intento de unión visible. Su fracaso fija para siglos la separación entre las dos cristiandades, aunque sienta bases doctrinales aún citadas hoy en el diálogo.',
      sources: [
        { label: 'Britannica — Council of Ferrara-Florence', href: 'https://www.britannica.com/event/Council-of-Ferrara-Florence' },
      ],
    },
    {
      year: 1517, yearLabel: '1512–1517', title: 'XVIII. Letrán V', short: 'La reforma que llegó tarde.', icon: '⏳',
      intro: 'Convocado por Julio II y concluido por León X. Aborda algunos abusos pero no logra detener la corrupción curial ni anticipar la Reforma. Termina meses antes de las 95 tesis de Lutero.',
      paragraphs: [
        { heading: 'Reformas tímidas', body: 'Refuerza la jurisdicción episcopal sobre los conventos, regula la imprenta (primer caso de censura previa) y condena el conciliarismo: «el papa tiene autoridad sobre todos los concilios».' },
        { heading: '"No hay nada que reformar"', body: 'Se cierra en marzo de 1517 con la convicción optimista de que la Iglesia está en buen estado. Siete meses después, Lutero publica las 95 tesis. El catolicismo será forzado a una reforma muy distinta en Trento.' },
      ],
      quote: { text: '“El romano pontífice posee autoridad sobre todos los concilios.”', ref: 'Bula Pastor aeternus, Letrán V' },
      legacy: 'Se recuerda como la oportunidad perdida del papado renacentista: si Letrán V hubiera sido más serio, quizás Lutero no habría sido necesario.',
      sources: [
        { label: 'Britannica — Fifth Lateran Council', href: 'https://www.britannica.com/event/Fifth-Lateran-Council' },
      ],
    },
    {
      year: 1563, yearLabel: '1545–1563', title: 'XIX. Trento', short: 'La gran reforma católica.', icon: '📚',
      intro: 'Convocado por Pablo III, durante 18 años (con dos largas interrupciones) define la doctrina católica frente a la Reforma y reorganiza profundamente la disciplina.',
      paragraphs: [
        { heading: 'Doctrina', body: 'Reafirma los siete sacramentos, la transubstanciación, la justificación por la fe y las obras de la gracia, la autoridad de la Tradición junto a la Escritura, el canon bíblico católico (con los deuterocanónicos).' },
        { heading: 'Reforma disciplinar', body: 'Crea seminarios para formar al clero, exige residencia a los obispos, manda imprimir un catecismo (Catecismo Romano, 1566), un breviario (Pío V, 1568) y un misal (1570). La «Iglesia tridentina» tomará su forma estable hasta el Vaticano II.' },
        { heading: 'Una Iglesia disciplinada', body: 'En las décadas siguientes, una generación de santos —Carlos Borromeo, Felipe Neri, Pío V— aplica Trento por toda Europa. El catolicismo de los siglos XVI–XX se llama justamente «tridentino».' },
      ],
      quote: { text: '“Todos los libros del Antiguo y Nuevo Testamento se reciben con igual afecto de piedad.”', ref: 'Trento, sesión IV, 1546' },
      legacy: 'Trento es el concilio más influyente del segundo milenio. Define el catolicismo moderno y traza la frontera con el protestantismo durante 400 años.',
      sources: [
        { label: 'Decretos del Concilio de Trento', href: 'https://www.vatican.va/archive/hist_councils/' },
        { label: 'Britannica — Council of Trent', href: 'https://www.britannica.com/event/Council-of-Trent' },
      ],
    },
    {
      year: 1870, yearLabel: '1869–1870', title: 'XX. Vaticano I', short: 'Define la infalibilidad pontificia.', icon: '👑',
      intro: 'Convocado por Pío IX, primer concilio en 300 años. Es interrumpido por la guerra franco-prusiana y por la entrada de las tropas italianas en Roma, que pone fin a los Estados Pontificios.',
      paragraphs: [
        { heading: 'Infalibilidad ex cathedra', body: 'La constitución Pastor Aeternus (18/7/1870) define que el papa, cuando habla ex cathedra sobre fe o costumbres, goza de la infalibilidad prometida a la Iglesia. Aprobada por 533 votos contra 2.' },
        { heading: 'Centralización', body: 'Define también el primado universal y la jurisdicción ordinaria, plena e inmediata del papa sobre toda la Iglesia. Los viejos Hijos del concilio (los «viejos católicos») se separarán por rechazo a esta definición.' },
      ],
      quote: { text: '“El romano pontífice goza, por la asistencia divina, de aquella infalibilidad… al definir doctrina de fe o de costumbres.”', ref: 'Pastor Aeternus, 1870' },
      legacy: 'Configura el catolicismo papal moderno. El equilibrio con la colegialidad episcopal será buscado, casi un siglo después, en el Vaticano II.',
      sources: [
        { label: 'Pastor Aeternus', href: 'https://www.vatican.va/archive/hist_councils/i-vatican-council/' },
        { label: 'Britannica — Vatican Council I', href: 'https://www.britannica.com/event/Vatican-Council-I' },
      ],
    },
    {
      year: 1965, yearLabel: '1962–1965', title: 'XXI. Vaticano II', short: 'La gran reforma del siglo XX.', icon: '🕊',
      intro: 'Convocado por Juan XXIII y concluido por Pablo VI. Reúne 2540 obispos. No define dogmas: busca «aggiornar» la Iglesia y ponerla en diálogo con el mundo moderno.',
      paragraphs: [
        { heading: 'Liturgia', body: 'Sacrosanctum Concilium reforma la liturgia: misa en lengua vernácula, mayor participación de los fieles, lecturas más amplias de la Escritura. Cambio visible para todo el pueblo católico.' },
        { heading: 'Iglesia y mundo', body: 'Lumen Gentium presenta a la Iglesia como «pueblo de Dios» y comunión, equilibrando la perspectiva piramidal del Vaticano I. Gaudium et Spes inaugura un diálogo positivo con la modernidad. Dignitatis Humanae reconoce la libertad religiosa.' },
        { heading: 'Diálogo y ecumenismo', body: 'Unitatis Redintegratio compromete a la Iglesia católica en el ecumenismo. Nostra Aetate inicia un nuevo diálogo con judíos, musulmanes y otras religiones, rechazando antisemitismos antiguos.' },
      ],
      quote: { text: '“Los gozos y las esperanzas, las tristezas y las angustias de los hombres de hoy… son también gozos y esperanzas, tristezas y angustias de los discípulos de Cristo.”', ref: 'Gaudium et Spes 1' },
      legacy: 'Vaticano II configura el catolicismo del siglo XXI. Su recepción —entre fidelidad creativa y rupturismo— sigue marcando los debates eclesiales.',
      sources: [
        { label: 'Documentos del Vaticano II', href: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/' },
        { label: 'Britannica — Vatican Council II', href: 'https://www.britannica.com/event/Vatican-Council-II' },
      ],
    },
  ],
};
