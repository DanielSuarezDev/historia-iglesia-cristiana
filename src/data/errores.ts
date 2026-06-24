import type { CenturyData } from './centuries';

// Línea de tiempo de las desviaciones doctrinales examinadas desde una convicción
// bautista clara: la Biblia es la única regla de fe y conducta (sola Scriptura).
// Se narra primero, con honestidad histórica (al estilo de Justo González), cómo y
// por qué apareció cada práctica; pero la valoración es firme y sin rodeos, como la
// haría un predicador bautista (Spurgeon, MacArthur): lo que se añade a la Palabra y
// no se halla en ella es error, por muy antiguo o respetado que sea. No es ataque a
// las personas, sino amor por la verdad y por la sencillez de la fe de los apóstoles.
export const ERRORES: CenturyData = {
  num: 0,
  roman: '',
  title: 'Desviaciones doctrinales',
  range: '30 – 1215 d.C.',
  intro: 'Esta web mira la historia con la Biblia en la mano. Cada práctica de esta lista nació muchas veces de una intención sincera o de una necesidad real; pero, siglo tras siglo, se fueron añadiendo cosas que el Nuevo Testamento no enseña, y varias de ellas son errores serios que oscurecen el evangelio. Lo decimos con claridad y sin rodeos, como creyentes bautistas: la única regla es la Palabra de Dios, y lo que se le añade termina oponiéndose a ella. Aquí contamos primero cómo apareció cada desviación y luego la medimos con la Escritura. No es para atacar a nadie, sino porque amamos la verdad y la fe sencilla de los apóstoles. Toca cada hito para conocer su historia.',
  events: [
    {
      year: 110, yearLabel: 'c. 110 d.C.', title: 'El obispo único sobre los ancianos', short: 'Del gobierno de varios ancianos al obispo que manda solo', icon: '🪑',
      intro: 'En el Nuevo Testamento, las palabras «obispo» (supervisor) y «anciano» (presbítero) describen el mismo oficio, ejercido por un grupo de hombres en cada iglesia, bajo el único Pastor que es Cristo (Hechos 20:17,28; Tito 1:5-7; 1 Pedro 5:1-4). A comienzos del siglo II empezó a imponerse algo distinto: un solo obispo por encima de los demás ancianos y de los diáconos.',
      paragraphs: [
        { heading: 'Cómo empezó', body: 'Las cartas de Ignacio de Antioquía (hacia el año 107) repiten una y otra vez que «nada se haga sin el obispo». Fue una respuesta práctica a las divisiones y las herejías: tener una sola cabeza visible parecía la forma más fácil de mantener la unidad. La intención era buena, pero el cambio era real.' },
        { heading: 'Lo que enseña la Biblia', body: 'En el Nuevo Testamento ninguna iglesia tiene un solo hombre mandando por encima del resto. Cristo es la única Cabeza, los ancianos guían en pluralidad y sirven, no señorean (1 Pedro 5:3), y la congregación tiene un papel real. Aquel pequeño paso —un obispo sobre los ancianos— fue la primera piedra de una escalera que con los siglos llevaría al obispo sobre las iglesias, y al fin al papa sobre todos. Por eso los bautistas sostenemos la autoridad de la iglesia local y el liderazgo de ancianos que sirven, no de un señor que gobierna.' },
      ],
      quote: { text: '«Apacentad la grey de Dios… no como teniendo señorío sobre los que están a vuestro cuidado, sino siendo ejemplos de la grey.»', ref: '1 Pedro 5:2-3' },
      legacy: 'No es la peor de las desviaciones, pero sí la primera grieta. De aquí brota el clericalismo: esa pared entre «clero» y «pueblo» que el Nuevo Testamento no conoce, porque todos los creyentes somos sacerdotes delante de Dios.',
      sources: [
        { label: 'Cartas de Ignacio de Antioquía (texto)', href: 'https://www.newadvent.org/fathers/0104.htm' },
        { label: 'Hechos 20 (Reina-Valera)', href: 'https://www.biblegateway.com/passage/?search=Hechos+20&version=RVR1960' },
      ],
    },
    {
      year: 200, yearLabel: 'c. 200 d.C.', title: 'El bautismo de niños', short: 'Se cambia el bautismo del creyente por el del recién nacido', icon: '💧',
      intro: 'En el Nuevo Testamento el orden es siempre el mismo: primero se oye el evangelio, se cree y se arrepiente uno, y entonces se bautiza. «El que creyere y fuere bautizado, será salvo» (Marcos 16:16). A lo largo del siglo III se fue extendiendo la costumbre de bautizar a niños pequeños, e incluso a recién nacidos que todavía no podían creer nada.',
      paragraphs: [
        { heading: 'Cómo empezó', body: 'Tertuliano, hacia el año 200, es el primero en mencionar la costumbre… para pedir que se espere. Pero la práctica avanzó, empujada por la idea de que el bebé nace ya con culpa y de que el agua del bautismo lo salva. Cipriano, hacia el 250, ya defendía bautizar al recién nacido sin esperar. En pocas generaciones se volvió lo normal.' },
        { heading: 'Por qué es un error', body: 'Un bebé no puede oír, creer ni arrepentirse, y el Nuevo Testamento jamás bautiza a quien no ha creído. Se dirá que el bautismo vino a sustituir a la circuncisión, o que se bautizó «a casas enteras»; pero la circuncisión era señal de nacer en un pueblo, mientras que al nuevo pacto se entra por la fe, no por la sangre de los padres, y aquellas «casas» eran familias que primero oyeron y creyeron (Hechos 16:32-34). Bautizar a quien no cree invierte el evangelio y hace pensar que un rito, y no Cristo, salva. Por esto somos bautistas: bautizamos por inmersión a los que confiesan su fe, tal como hizo la Iglesia del Nuevo Testamento.' },
      ],
      quote: { text: '«Arrepentíos, y bautícese cada uno de vosotros en el nombre de Jesucristo para perdón de los pecados.»', ref: 'Hechos 2:38' },
      legacy: 'No es un detalle menor: es el corazón de nuestra convicción. El bautismo es el «sí» de alguien que ya creyó, no un trámite sobre un niño que aún no entiende. Devolverle ese sentido es volver a la sencillez del evangelio.',
      sources: [
        { label: 'Tertuliano — Sobre el bautismo', href: 'https://www.newadvent.org/fathers/0321.htm' },
        { label: 'Marcos 16 (Reina-Valera)', href: 'https://www.biblegateway.com/passage/?search=Marcos+16&version=RVR1960' },
      ],
    },
    {
      year: 250, yearLabel: 'c. 250 d.C.', title: 'Oraciones por los muertos y culto a los mártires', short: 'Se empieza a rezar por los difuntos y a pedirles a los santos', icon: '🕯️',
      intro: 'Hacia mediados del siglo III aparecen dos prácticas nuevas: orar por las almas de los difuntos y reunirse junto a las tumbas de los mártires para honrarlos y, poco a poco, pedirles favores.',
      paragraphs: [
        { heading: 'Cómo empezó', body: 'Los cristianos siempre recordaron con esperanza a sus muertos. Pero ahora se dio un paso más: ofrecer oraciones «por» los difuntos y creer que los mártires, ya con Cristo, podían interceder por los vivos. Tertuliano y Cipriano son testigos de esos comienzos.' },
        { heading: 'Por qué es un error', body: 'La Biblia no manda en ningún lugar orar por los muertos ni orar a los muertos. Después de la muerte viene el juicio, no una segunda etapa que podamos acortar con rezos (Hebreos 9:27). Y hay «un solo mediador entre Dios y los hombres, Jesucristo» (1 Timoteo 2:5): pedir que un santo interceda por nosotros le quita a Cristo el lugar que solo Él tiene. Tenemos acceso directo al Padre por medio del Hijo; no necesitamos intermediarios.' },
      ],
      quote: { text: '«Porque hay un solo Dios, y un solo mediador entre Dios y los hombres, Jesucristo hombre.»', ref: '1 Timoteo 2:5' },
      legacy: 'De esta pequeña costumbre brotaron tres errores mayores: rezar a los santos, venerar reliquias e inventar el purgatorio. Todo se evita volviendo a una sola verdad: Cristo es nuestro único mediador, y basta.',
      sources: [
        { label: 'Cipriano de Cartago — Cartas', href: 'https://www.newadvent.org/fathers/050601.htm' },
        { label: '1 Timoteo 2 (Reina-Valera)', href: 'https://www.biblegateway.com/passage/?search=1+Timoteo+2&version=RVR1960' },
      ],
    },
    {
      year: 313, yearLabel: '313 – 380 d.C.', title: 'La unión del trono y el altar', short: 'La Iglesia perseguida se vuelve Iglesia que persigue', icon: '👑',
      intro: 'Con el Edicto de Milán (313) cesó la persecución, y con el de Tesalónica (380) el cristianismo pasó a ser religión oficial y obligatoria del Imperio. En menos de 70 años la fe pasó de ser perseguida a perseguir a otros.',
      paragraphs: [
        { heading: 'Cómo empezó', body: 'El favor del emperador trajo templos, dinero, cargos y prestigio. Pero también ató la Iglesia al Estado: el poder político empezó a meterse en la fe, y la espada del gobierno se usó contra los llamados «herejes». Lo que antes se ganaba con el testimonio empezó a imponerse con la ley.' },
        { heading: 'Por qué es un error', body: 'Jesús dijo: «mi reino no es de este mundo» (Juan 18:36), y prohibió a los suyos defenderlo con la espada. Una fe obligada por el Estado no es fe; nadie nace de nuevo por decreto. Esta mezcla de trono y altar abrió siglos de poder, ambición y violencia en nombre de Cristo, y más adelante caería sobre los propios bautistas y anabautistas, perseguidos por predicar el bautismo del creyente. Por eso defendemos con fuerza dos cosas bautistas de siempre: la libertad de conciencia (cada alma responde ante Dios) y la separación entre la iglesia y el Estado.' },
      ],
      quote: { text: '«Mi reino no es de este mundo; si mi reino fuera de este mundo, mis servidores pelearían.»', ref: 'Juan 18:36' },
      legacy: 'Cuando la Iglesia se casa con el poder, casi siempre termina traicionando al Cordero. La fe se propaga por el testimonio y la persuasión, nunca por la fuerza.',
      sources: [
        { label: 'González, Justo — Historia del cristianismo, vol. I', href: 'https://www.editorialclie.es/' },
        { label: 'Britannica — Edict of Milan', href: 'https://www.britannica.com/topic/Edict-of-Milan' },
        { label: 'Juan 18 (Reina-Valera)', href: 'https://www.biblegateway.com/passage/?search=Juan+18&version=RVR1960' },
      ],
    },
    {
      year: 350, yearLabel: 'c. 350 d.C.', title: 'Del sacerdocio de todos al sacerdote del altar', short: 'La Cena del Señor se convierte en un sacrificio que ofrece un sacerdote', icon: '🍷',
      intro: 'El Nuevo Testamento llama sacerdotes a todos los creyentes (1 Pedro 2:9; Apocalipsis 1:6) y reserva el sacerdocio propiamente dicho a Cristo (carta a los Hebreos). En los siglos IV y V el lenguaje cambió: los ministros pasaron a llamarse «sacerdotes», y la Cena se empezó a describir como un «sacrificio» ofrecido sobre un «altar».',
      paragraphs: [
        { heading: 'Cómo empezó', body: 'En los primeros días la reunión giraba en torno a una «mesa» y una «acción de gracias» (eso significa eucaristía). Poco a poco se habló de «altar», de «sacrificio» y de un «sacerdote» que lo ofrece, y se enseñó que solo el clero ordenado podía celebrarlo.' },
        { heading: 'Por qué es un error', body: 'La carta a los Hebreos repite que el sacrificio de Cristo fue «una vez para siempre» y que ya no necesita repetirse: «con una sola ofrenda hizo perfectos para siempre a los santificados» (Hebreos 10:14). Convertir la Cena en un sacrificio que se repite, y al pastor en un sacerdote que media entre Dios y el pueblo, tapa dos verdades preciosas: que la obra de Cristo está terminada, y que todos los creyentes somos sacerdotes con acceso directo a Dios. La Cena es una mesa para recordar, no un altar para volver a sacrificar.' },
      ],
      quote: { text: '«Porque con una sola ofrenda hizo perfectos para siempre a los santificados.»', ref: 'Hebreos 10:14' },
      legacy: 'Si el sacrificio de Cristo bastó de una vez para siempre, sobra todo intento de repetirlo. Volver a la «mesa» y al sacerdocio de todos los creyentes es volver al evangelio.',
      sources: [
        { label: 'Hebreos 10 (Reina-Valera)', href: 'https://www.biblegateway.com/passage/?search=Hebreos+10&version=RVR1960' },
        { label: 'Britannica — Eucharist', href: 'https://www.britannica.com/topic/Eucharist' },
      ],
    },
    {
      year: 431, yearLabel: '431 d.C.', title: 'El auge de la veneración de María', short: 'María empieza a recibir un culto que la Biblia nunca le da', icon: '👸',
      intro: 'El Concilio de Éfeso (431) llamó a María Theotokos, «Madre de Dios», para defender que en Cristo hay una sola persona divina. La frase hablaba de Cristo, no de María; pero abrió la puerta a una devoción mariana que después creció sin freno.',
      paragraphs: [
        { heading: 'Cómo empezó', body: 'Tras Éfeso se multiplicaron las fiestas, los himnos y los templos dedicados a María. Con los siglos se le dieron títulos cada vez mayores —intercesora, reina del cielo— y nacieron doctrinas como su virginidad perpetua y, mucho más tarde, su inmaculada concepción y su asunción.' },
        { heading: 'Por qué es un error', body: 'Honramos a María: fue bendita y un ejemplo de fe, y así la llamó el ángel (Lucas 1:48). Pero la Biblia jamás nos manda orar a ella, ni la presenta como mediadora, ni como reina del cielo. Cada oración dirigida a María, y cada título que la pone donde solo cabe Cristo, es robarle a Él lo que es suyo. Y doctrinas como su inmaculada concepción o su asunción no tienen ni una sola línea en la Escritura. Honrar a María como creyente bendita es bíblico; rezarle o ponerla junto a Cristo, no.' },
      ],
      quote: { text: '«Porque ha mirado la bajeza de su sierva; pues he aquí, desde ahora me dirán bienaventurada todas las generaciones.»', ref: 'Lucas 1:48' },
      legacy: 'La María de los Evangelios es humilde y señala siempre a su Hijo: «Haced todo lo que él os diga» (Juan 2:5). Ese es el lugar que ella misma quiso, y el único que le corresponde.',
      sources: [
        { label: 'Britannica — Council of Ephesus', href: 'https://www.britannica.com/event/Council-of-Ephesus' },
        { label: 'Lucas 1 (Reina-Valera)', href: 'https://www.biblegateway.com/passage/?search=Lucas+1&version=RVR1960' },
      ],
    },
    {
      year: 450, yearLabel: 'c. 450 d.C.', title: 'Reliquias e intercesión de los santos', short: 'Huesos y objetos sagrados, y oraciones dirigidas a los santos', icon: '🦴',
      intro: 'A partir del siglo V se afianza el culto a las reliquias —restos de mártires y santos, u objetos que tocaron— y la costumbre de pedirles a los santos que intercedan ante Dios.',
      paragraphs: [
        { heading: 'Cómo empezó', body: 'Se creyó que las reliquias daban gracia y curaciones; los altares se construían sobre ellas y se repartían trozos entre muchas iglesias. La demanda creció tanto que, siglos después, el negocio de reliquias —muchas falsas— se volvió un escándalo abierto.' },
        { heading: 'Por qué es un error', body: 'Dios prohíbe en su Palabra buscar a los muertos: «no sea hallado en ti… quien consulte a los muertos» (Deuteronomio 18:11), y toda oración se dirige al Padre por medio de Cristo. Venerar huesos y rezar a los santos confunde el honor con la adoración, abre la puerta a la superstición y le quita a Jesús su lugar de único mediador. Ningún santo en el cielo está esperando nuestras oraciones; el cielo escucha al que ora directamente a Dios en el nombre de Cristo.' },
        { heading: 'Lo que la Biblia pone en su lugar', body: 'No necesitamos un hueso ni un santo: tenemos a un Salvador vivo y un trono de gracia al que podemos «acercarnos confiadamente» (Hebreos 4:16). Esa es una riqueza mucho mayor que cualquier reliquia.' },
      ],
      quote: { text: '«No sea hallado en ti… quien consulte a los muertos. Porque es abominación para con Jehová cualquiera que hace estas cosas.»', ref: 'Deuteronomio 18:10-12' },
      legacy: 'Donde sobran reliquias y mediadores, falta confianza en el acceso directo que Cristo nos ganó. La fe sencilla no busca huesos: busca al Señor resucitado.',
      sources: [
        { label: 'Britannica — Relic', href: 'https://www.britannica.com/topic/relic' },
        { label: 'Deuteronomio 18 (Reina-Valera)', href: 'https://www.biblegateway.com/passage/?search=Deuteronomio+18&version=RVR1960' },
      ],
    },
    {
      year: 593, yearLabel: 'c. 593 d.C.', title: 'El purgatorio', short: 'Se inventa un lugar de castigo temporal después de la muerte', icon: '🔥',
      intro: 'La idea de que las almas que mueren en gracia, pero imperfectas, pasan por un lugar de castigo y purificación antes del cielo se venía insinuando desde antiguo. El papa Gregorio Magno (590-604) la enseñó con claridad y la difundió con relatos de apariciones y misas por los difuntos.',
      paragraphs: [
        { heading: 'Cómo empezó', body: 'Gregorio enseñó que hay faltas que se pueden «purgar» después de la muerte, y popularizó ofrecer misas para acortar ese sufrimiento. La idea creció durante toda la Edad Media y quedó atada, con el tiempo, a la venta de indulgencias.' },
        { heading: 'Por qué es un error', body: 'El purgatorio no está en la Biblia. La sangre de Cristo «nos limpia de TODO pecado» (1 Juan 1:7): no deja una parte para que la paguemos nosotros ardiendo. Pablo dice que estar ausentes del cuerpo es estar «presentes al Señor» (2 Corintios 5:8), y Jesús prometió al ladrón arrepentido: «Hoy estarás conmigo en el paraíso» (Lucas 23:43), no «dentro de unos siglos». Su único apoyo bíblico (2 Macabeos) está en un libro que ni siquiera es Escritura para nosotros. El purgatorio convierte la salvación gratuita en una deuda que se sigue pagando después de muerto; eso niega el evangelio.' },
      ],
      quote: { text: '«La sangre de Jesucristo su Hijo nos limpia de todo pecado.»', ref: '1 Juan 1:7' },
      legacy: 'Si Cristo lo pagó todo, no queda nada por pagar en un purgatorio. Esta invención, unida a las indulgencias, fue lo que encendió la Reforma: y con razón.',
      sources: [
        { label: 'Britannica — Purgatory', href: 'https://www.britannica.com/topic/purgatory' },
        { label: '1 Juan 1 (Reina-Valera)', href: 'https://www.biblegateway.com/passage/?search=1+Juan+1&version=RVR1960' },
      ],
    },
    {
      year: 787, yearLabel: '787 d.C.', title: 'El culto a las imágenes', short: 'Se aprueba inclinarse ante imágenes de Cristo, María y los santos', icon: '🖼️',
      intro: 'Tras décadas de pelea (la iconoclastia, que quería destruir las imágenes), el Segundo Concilio de Nicea (787) aprobó oficialmente venerar los iconos, diciendo que eso no es lo mismo que adorar a Dios.',
      paragraphs: [
        { heading: 'Cómo empezó', body: 'El concilio enseñó que las imágenes de Cristo, María y los santos merecen «veneración», porque el honor «pasa» a quien está representado, mientras que la «adoración» es solo para Dios. Sobre el papel suena fino; pero en la práctica el pueblo besa, inciensa y se arrodilla ante las imágenes.' },
        { heading: 'Por qué es un error', body: 'El segundo mandamiento es directo: «No te harás imagen… No te inclinarás a ellas, ni las honrarás» (Éxodo 20:4-5). Por mucho que se distinga entre «venerar» y «adorar», arrodillarse ante una estatua es justo lo que Dios prohíbe; en la práctica, es idolatría. Dios busca adoradores que le adoren «en espíritu y en verdad» (Juan 4:24), no ante imágenes hechas por manos de hombre. La gloria de Dios no se reparte con tablas ni con esculturas.' },
      ],
      quote: { text: '«No te harás imagen, ni ninguna semejanza… No te inclinarás a ellas, ni las honrarás.»', ref: 'Éxodo 20:4-5' },
      legacy: 'Por algo los templos bautistas son sencillos y sin imágenes para inclinarse: adoramos a un Dios que es Espíritu, y guardamos el segundo mandamiento tal como está escrito.',
      sources: [
        { label: 'Britannica — Second Council of Nicaea', href: 'https://www.britannica.com/event/Second-Council-of-Nicaea' },
        { label: 'Éxodo 20 (Reina-Valera)', href: 'https://www.biblegateway.com/passage/?search=Exodo+20&version=RVR1960' },
      ],
    },
    {
      year: 1059, yearLabel: 'c. 1059 d.C.', title: 'El primado papal absoluto', short: 'El obispo de Roma se proclama cabeza de toda la Iglesia y de los reyes', icon: '🔑',
      intro: 'La honra antigua de Roma se transformó, con la reforma del siglo XI, en una monarquía espiritual. El Dictatus Papae de Gregorio VII (1075) llegó a afirmar que solo el papa puede deponer emperadores y que la Iglesia romana «nunca ha errado».',
      paragraphs: [
        { heading: 'Cómo empezó', body: 'Decretos como el de 1059 (que dejó la elección del papa solo en manos de los cardenales) y las tesis de Gregorio VII levantaron un poder papal sin precedentes, espiritual y también político. Inocencio III (1198-1216) se llamaría «Vicario de Cristo» y se creería árbitro de los reinos. Es la cima de aquella escalera que empezó con el obispo único.' },
        { heading: 'Por qué es un error', body: 'La Iglesia tiene una sola Cabeza, y no está en Roma: «Él es la cabeza del cuerpo que es la iglesia» (Colosenses 1:18; Efesios 1:22). Ningún hombre es cabeza universal de la Iglesia ni «vicario» (sustituto) de Cristo en la tierra. Jesús reprendió a los discípulos que se disputaban quién mandaba: «el que quiera hacerse grande… sea vuestro servidor» (Mateo 20:26). El «tú eres Pedro» no convirtió a los obispos de Roma en monarcas infalibles; ni Pedro mismo se comportó así. Este es el gran error del que brotaron tantos otros.' },
      ],
      quote: { text: '«Y él es la cabeza del cuerpo que es la iglesia… para que en todo tenga la preeminencia.»', ref: 'Colosenses 1:18' },
      legacy: 'Cristo no dejó un papa: dejó su Palabra y su Espíritu. Cuando un hombre ocupa el lugar que es solo de Cristo, todo lo demás se tuerce. Solo Jesús es Cabeza de su Iglesia.',
      sources: [
        { label: 'Britannica — Papacy', href: 'https://www.britannica.com/topic/papacy' },
        { label: 'Colosenses 1 (Reina-Valera)', href: 'https://www.biblegateway.com/passage/?search=Colosenses+1&version=RVR1960' },
      ],
    },
    {
      year: 1074, yearLabel: 'c. 1074 d.C.', title: 'El celibato obligatorio del clero', short: 'Se prohíbe casarse a sacerdotes y obispos', icon: '⛪',
      intro: 'Aunque la idea venía de antes, fue la reforma del siglo XI la que impuso con fuerza el celibato obligatorio a todo el clero de Occidente, prohibiendo y anulando los matrimonios de los sacerdotes.',
      paragraphs: [
        { heading: 'Cómo empezó', body: 'Gregorio VII (desde 1074) y luego los concilios de Letrán (1123 y 1139) declararon inválidos los matrimonios de los clérigos mayores. El celibato pasó de consejo a ley obligatoria en Occidente.' },
        { heading: 'Por qué es un error', body: 'El Nuevo Testamento da por hecho que muchos ministros eran casados: Pedro tenía suegra (Marcos 1:30), y Pablo dice que el obispo debe ser «marido de una sola mujer» y gobernar bien su casa (1 Timoteo 3:2-5). Es más, Pablo advierte con palabras durísimas contra los que «prohíben casarse»: lo llama «doctrina de demonios» (1 Timoteo 4:1-3). Convertir en ley lo que Dios dejó como un don libre, y prohibir lo que Él bendijo, es ir en contra de la Escritura.' },
      ],
      quote: { text: '«…prohibirán casarse… Porque todo lo que Dios creó es bueno, y nada es de desecharse, si se toma con acción de gracias.»', ref: '1 Timoteo 4:3-4' },
      legacy: 'Dios mismo dijo «no es bueno que el hombre esté solo». Una ley humana que prohíbe lo que Dios permite siempre acaba haciendo daño. La Biblia, no la tradición, define quién puede servir y cómo.',
      sources: [
        { label: 'Britannica — Celibacy', href: 'https://www.britannica.com/topic/celibacy' },
        { label: '1 Timoteo 3 (Reina-Valera)', href: 'https://www.biblegateway.com/passage/?search=1+Timoteo+3&version=RVR1960' },
      ],
    },
    {
      year: 1095, yearLabel: '1095 d.C.', title: 'Las indulgencias y las cruzadas', short: 'Se ofrece perdón a cambio de obras, peregrinaciones o dinero', icon: '🎗️',
      intro: 'En el Concilio de Clermont (1095), el papa Urbano II prometió a los cruzados la remisión de las penas por sus pecados. Así nació, atada a la guerra santa, la práctica de las indulgencias: la Iglesia repartía, de un supuesto «tesoro de méritos», la cancelación de penas.',
      paragraphs: [
        { heading: 'Cómo empezó', body: 'Al principio la indulgencia pedía una obra dura —ir a la cruzada, peregrinar, ayunar—. Con el tiempo esa obra se pudo cambiar por una limosna, y la indulgencia se empezó a comprar con dinero. En el siglo XVI se vendían con frases como «en cuanto la moneda suena, el alma del purgatorio vuela». Eso colmó la paciencia de Lutero.' },
        { heading: 'Por qué es un error', body: 'El evangelio anuncia el perdón como un regalo gratis: «por gracia sois salvos por medio de la fe… no por obras, para que nadie se gloríe» (Efesios 2:8-9). El perdón no se gana con obras, no se compra ni se vende. Poner precio a la gracia es una de las peores corrupciones del evangelio que ha existido, porque convierte la salvación en un negocio y deja al pecador confiando en su dinero en vez de en Cristo.' },
      ],
      quote: { text: '«Porque por gracia sois salvos por medio de la fe… no por obras, para que nadie se gloríe.»', ref: 'Efesios 2:8-9' },
      legacy: 'La salvación es gratis porque a Cristo le costó todo. Cualquiera que te cobre por el perdón te está vendiendo lo que Dios ya regaló. Contra este error nació la Reforma.',
      sources: [
        { label: 'Britannica — Indulgence', href: 'https://www.britannica.com/topic/indulgence' },
        { label: 'Efesios 2 (Reina-Valera)', href: 'https://www.biblegateway.com/passage/?search=Efesios+2&version=RVR1960' },
      ],
    },
    {
      year: 1215, yearLabel: '1215 d.C.', title: 'Transubstanciación y confesión obligatoria', short: 'Se vuelven dogma dos prácticas que la Biblia no enseña', icon: '🍞',
      intro: 'El IV Concilio de Letrán, convocado por Inocencio III, fue la cumbre de la Iglesia medieval. Allí se usó por primera vez de forma oficial la palabra «transubstanciación» y se obligó a todo fiel a confesar sus pecados a un sacerdote al menos una vez al año.',
      paragraphs: [
        { heading: 'Transubstanciación', body: 'El concilio definió que en la Cena el pan y el vino se convierten realmente en el cuerpo y la sangre de Cristo, conservando solo la apariencia. Es una explicación filosófica (con ideas de Aristóteles) de una creencia que se había ido formando durante siglos.' },
        { heading: 'Confesión al sacerdote', body: 'El mismo concilio impuso la confesión privada y secreta de los pecados ante un sacerdote como obligación para todos. Hasta entonces la penitencia había tenido formas muy variadas.' },
        { heading: 'Por qué es un error', body: 'Jesús dijo de la Cena: «haced esto en memoria de mí» (Lucas 22:19); es una mesa para recordar su muerte, no una repetición de su sacrificio que ya fue «una vez para siempre». La transubstanciación es una explicación inventada por hombres, que la Biblia no pide ni enseña. Y en cuanto a la confesión, la Escritura nos manda confesar nuestros pecados a Dios, que es el único que perdona: «Si confesamos nuestros pecados, él es fiel y justo para perdonar» (1 Juan 1:9). No hace falta un sacerdote en medio: el creyente va directo a Cristo, su único Sumo Sacerdote.' },
      ],
      quote: { text: '«Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad.»', ref: '1 Juan 1:9' },
      legacy: 'Aquí, en 1215, se volvió ley obligatoria lo que mil años antes nadie enseñaba. Tres siglos después, estas mismas doctrinas marcarían la frontera entre Roma y la fe que solo se apoya en la Biblia.',
      sources: [
        { label: 'Britannica — Fourth Lateran Council', href: 'https://www.britannica.com/event/Fourth-Lateran-Council' },
        { label: '1 Juan 1 (Reina-Valera)', href: 'https://www.biblegateway.com/passage/?search=1+Juan+1&version=RVR1960' },
      ],
    },
  ],
};
