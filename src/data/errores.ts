import type { CenturyData } from './centuries';

// Línea de tiempo de las desviaciones doctrinales leídas con el método de un
// historiador como Justo González: narrar cada desarrollo con empatía y contexto
// —explicando por qué surgió y qué necesidad pastoral respondía— antes de
// evaluarlo. La valoración como "desviación" respecto del Nuevo Testamento es la
// lectura evangélica y bautista; católicos y ortodoxos las ven como desarrollos
// legítimos guiados por el Espíritu. Se distingue siempre la historia del juicio.
export const ERRORES: CenturyData = {
  num: 0,
  roman: '',
  title: 'Desviaciones doctrinales',
  range: '30 – 1215 d.C.',
  intro: 'Ningún cambio de esta lista apareció de golpe ni con mala intención: cada práctica nació de una necesidad real —mantener la unidad, consolar a los que enterraban a sus muertos, defender la fe frente a una herejía— y solo con los siglos se fue alejando del cristianismo sencillo del Nuevo Testamento. Siguiendo el espíritu de historiadores como Justo González, aquí se cuenta primero cómo y por qué surgió cada desarrollo, y solo después la objeción que le hace la tradición evangélica y bautista. Conviene recordar que católicos y ortodoxos no los ven como errores, sino como crecimiento legítimo de la fe; el lector juzga con la Escritura en la mano. Toca cada hito para conocer su historia.',
  events: [
    {
      year: 110, yearLabel: 'c. 110 d.C.', title: 'El obispo único sobre los ancianos', short: 'Del gobierno plural de presbíteros al obispo monárquico', icon: '🪑',
      intro: 'En el Nuevo Testamento, las palabras «obispo» (epískopos, supervisor) y «anciano» (presbýteros) parecen describir el mismo oficio, ejercido por un grupo de hombres en cada iglesia (Hechos 20:17,28; Tito 1:5-7; 1 Pedro 5:1-2). A comienzos del siglo II empieza a imponerse otra estructura: un solo obispo por encima de los presbíteros y los diáconos.',
      paragraphs: [
        { heading: 'Lo que cambió', body: 'Las cartas de Ignacio de Antioquía (c. 107) insisten una y otra vez en que «nada se haga sin el obispo» y presentan al obispo único como centro de la unidad de cada iglesia local. Era una respuesta práctica a las divisiones y las herejías: tener una sola cabeza visible facilitaba mantener la unidad. Pero supone un paso desde el liderazgo compartido de ancianos que se observa en el Nuevo Testamento hacia una jerarquía de tres grados.' },
        { heading: 'La objeción', body: 'Desde la perspectiva restauracionista, aquí comienza el largo camino hacia el clericalismo: la distinción cada vez más fuerte entre «clero» y «laicado» y, siglos más tarde, la pirámide que culminará en el papado. Quienes defienden el cambio responden que se trata de un desarrollo natural y legítimo, ya insinuado en el papel de Santiago en Jerusalén o de Timoteo y Tito.' },
      ],
      quote: { text: '«Por tanto, tened cuidado de vosotros, y de todo el rebaño en que el Espíritu Santo os ha puesto por obispos, para apacentar la iglesia del Señor.»', ref: 'Hechos 20:28 (Pablo a los ancianos de Éfeso)' },
      legacy: 'No es una doctrina falsa en sí, pero marca el primer alejamiento estructural respecto del modelo neotestamentario de ancianos. Todo el debate posterior sobre la autoridad en la Iglesia —hasta la Reforma— arranca de aquí.',
      sources: [
        { label: 'Cartas de Ignacio de Antioquía (texto)', href: 'https://www.newadvent.org/fathers/0104.htm' },
        { label: 'Hechos 20 (Reina-Valera)', href: 'https://www.biblegateway.com/passage/?search=Hechos+20&version=RVR1960' },
      ],
    },
    {
      year: 200, yearLabel: 'c. 200 d.C.', title: 'El bautismo de niños', short: 'De la confesión personal de fe al bautismo de recién nacidos', icon: '💧',
      intro: 'En el Nuevo Testamento el bautismo sigue siempre a la fe y al arrepentimiento personales: «el que creyere y fuere bautizado, será salvo» (Marcos 16:16). A lo largo del siglo III se generaliza la práctica de bautizar a los niños pequeños, e incluso a los recién nacidos.',
      paragraphs: [
        { heading: 'Cómo se extendió', body: 'Tertuliano, hacia el año 200, es el primero en mencionar la costumbre de bautizar niños… para aconsejar que se espere. Pero la práctica avanza, impulsada sobre todo por la doctrina del pecado original: si el bebé nace con culpa heredada de Adán y muere sin bautizar, ¿qué será de él? Cipriano, hacia el 250, ya defiende bautizar al recién nacido sin esperar siquiera al octavo día. En pocas generaciones se vuelve lo normal.' },
        { heading: 'La objeción', body: 'Para quienes leen el Nuevo Testamento como norma, el bautismo presupone una decisión consciente: creer, arrepentirse, confesar. Un bebé no puede hacer nada de eso. Por eso los anabaptistas del siglo XVI («re-bautizadores») y, más tarde, bautistas y muchos evangélicos rechazarán el bautismo infantil. Los que lo defienden lo comparan con la circuncisión de los niños judíos y apelan a los pasajes donde se bautiza «a toda la casa» (Hechos 16:15,33).' },
      ],
      quote: { text: '«Arrepentíos, y bautícese cada uno de vosotros en el nombre de Jesucristo para perdón de los pecados.»', ref: 'Hechos 2:38' },
      legacy: 'El bautismo de niños cambia el sentido mismo del rito: de sello de una fe ya profesada a puerta de entrada automática a la Iglesia. Será uno de los grandes puntos de ruptura de la Reforma radical.',
      sources: [
        { label: 'Tertuliano — Sobre el bautismo', href: 'https://www.newadvent.org/fathers/0321.htm' },
        { label: 'Britannica — Baptism', href: 'https://www.britannica.com/topic/baptism' },
      ],
    },
    {
      year: 250, yearLabel: 'c. 250 d.C.', title: 'Oraciones por los muertos y culto a los mártires', short: 'Empieza a rogarse por los difuntos y a venerarse sus tumbas', icon: '🕯️',
      intro: 'Hacia mediados del siglo III aparecen, con claridad, dos prácticas nuevas: orar por las almas de los difuntos y reunirse junto a las tumbas de los mártires para honrarlos en el aniversario de su muerte.',
      paragraphs: [
        { heading: 'De recordar a interceder', body: 'Los cristianos siempre recordaron a sus muertos con esperanza. Pero ahora se da un paso más: se ofrece la eucaristía «por» los difuntos y se pide a Dios por su descanso, como atestiguan Tertuliano y Cipriano. En paralelo, las tumbas de los mártires se convierten en lugares de oración; se cree que esos santos, ya con Cristo, pueden interceder por los vivos.' },
        { heading: 'La objeción', body: 'En el Nuevo Testamento no aparece la oración a los muertos ni la petición de su intercesión; la mediación es de Cristo, «uno solo el mediador entre Dios y los hombres» (1 Timoteo 2:5). Para la tradición protestante, aquí germinan tanto la futura invocación de los santos como la doctrina del purgatorio. La tradición católica responde que la «comunión de los santos» une a vivos y difuntos, y que pedir la oración de un santo no es distinto de pedírsela a un hermano vivo.' },
      ],
      quote: { text: '«Porque hay un solo Dios, y un solo mediador entre Dios y los hombres, Jesucristo hombre.»', ref: '1 Timoteo 2:5' },
      legacy: 'Estas costumbres devocionales, aún incipientes, son la semilla de tres desarrollos muy discutidos: la veneración de los santos, las reliquias y el purgatorio. La Reforma los rechazará en bloque apelando a la única mediación de Cristo.',
      sources: [
        { label: 'Cipriano de Cartago — Cartas', href: 'https://www.newadvent.org/fathers/050601.htm' },
        { label: '1 Timoteo 2 (Reina-Valera)', href: 'https://www.biblegateway.com/passage/?search=1+Timoteo+2&version=RVR1960' },
      ],
    },
    {
      year: 313, yearLabel: '313 – 380 d.C.', title: 'La unión del trono y el altar', short: 'La Iglesia perseguida se convierte en Iglesia del poder', icon: '👑',
      intro: 'Con el Edicto de Milán (313) cesa la persecución, y con el de Tesalónica (380) el cristianismo se vuelve religión oficial y obligatoria del Imperio. En menos de 70 años la fe pasa de ser perseguida a perseguir.',
      paragraphs: [
        { heading: 'De mártires a magistrados', body: 'El favor imperial trae templos, rentas, privilegios y cargos para los obispos. Pero también ata a la Iglesia al Estado: el emperador convoca concilios, interviene en nombramientos y usa la fuerza pública contra los «herejes». Lo que antes se ganaba con el testimonio empieza a imponerse con la ley.' },
        { heading: 'La objeción', body: 'Jesús dijo «mi reino no es de este mundo» (Juan 18:36) y rechazó las espadas. Para muchos —desde los donatistas antiguos hasta los anabaptistas y buena parte del evangelicalismo— la alianza entre Iglesia y poder político (el «constantinismo») es una de las grandes desviaciones: cambió la cruz por el trono y abrió la puerta a guerras de religión e inquisiciones. Otros valoran que esa cristiandad dio a Europa derecho, cultura y estabilidad.' },
      ],
      quote: { text: '«Mi reino no es de este mundo; si mi reino fuera de este mundo, mis servidores pelearían.»', ref: 'Juan 18:36' },
      legacy: 'La conversión del Imperio fue un triunfo y una trampa a la vez. La pregunta que abre —¿puede la Iglesia usar el poder del Estado sin traicionar el Evangelio?— recorrerá toda la historia cristiana posterior.',
      sources: [
        { label: 'González, Justo — Historia del cristianismo, vol. I', href: 'https://www.editorialclie.es/' },
        { label: 'Britannica — Edict of Milan', href: 'https://www.britannica.com/topic/Edict-of-Milan' },
        { label: 'Britannica — Theodosius I', href: 'https://www.britannica.com/biography/Theodosius-I' },
      ],
    },
    {
      year: 350, yearLabel: 'c. 350 d.C.', title: 'Del sacerdocio de todos al sacerdote del altar', short: 'La Cena del Señor empieza a entenderse como sacrificio ofrecido por un sacerdote', icon: '🍷',
      intro: 'El Nuevo Testamento llama sacerdotes a todos los creyentes (1 Pedro 2:9; Apocalipsis 1:6) y reserva el sacerdocio propiamente dicho a Cristo (Hebreos). En los siglos IV y V el lenguaje cambia: los ministros pasan a llamarse «sacerdotes» y la eucaristía se describe cada vez más como un «sacrificio» ofrecido sobre un «altar».',
      paragraphs: [
        { heading: 'Un vocabulario nuevo', body: 'En los primeros textos la reunión gira en torno a una «mesa» y una «acción de gracias» (eso significa eucaristía). Poco a poco se habla de «altar», de «sacrificio» y de «sacerdote» (en latín, sacerdos) que lo ofrece. La cena memorial se reinterpreta como la renovación incruenta del sacrificio de Cristo, y solo el clero ordenado puede celebrarla.' },
        { heading: 'La objeción', body: 'La carta a los Hebreos insiste en que el sacrificio de Cristo fue «una vez para siempre» (Hebreos 10:10-14) y que no necesita repetirse. Para los reformadores, convertir la Cena en un sacrificio reiterado y al ministro en un sacerdote mediador oscurece tanto la obra acabada de Cristo como el sacerdocio común de los creyentes. La tradición católica y ortodoxa responde que la misa no repite, sino que hace presente el único sacrificio.' },
      ],
      quote: { text: '«Mas vosotros sois linaje escogido, real sacerdocio, nación santa, pueblo adquirido por Dios.»', ref: '1 Pedro 2:9' },
      legacy: 'La aparición de un sacerdocio y un altar sacrificiales reconfigura el culto cristiano para mil años. La Reforma intentará volver a la «mesa» y al sacerdocio de todos los creyentes.',
      sources: [
        { label: 'Hebreos 10 (Reina-Valera)', href: 'https://www.biblegateway.com/passage/?search=Hebreos+10&version=RVR1960' },
        { label: 'Britannica — Eucharist', href: 'https://www.britannica.com/topic/Eucharist' },
      ],
    },
    {
      year: 431, yearLabel: '431 d.C.', title: 'El auge de la veneración de María', short: 'El título "Madre de Dios" impulsa una devoción mariana creciente', icon: '👸',
      intro: 'El Concilio de Éfeso (431) proclama a María Theotokos, «Madre de Dios», para defender que en Cristo hay una sola persona divina. La definición era cristológica —hablaba de Cristo, no de María—, pero abrió la puerta a una devoción mariana que crecería sin freno.',
      paragraphs: [
        { heading: 'De la defensa de Cristo a la devoción a María', body: 'Tras Éfeso se multiplican las fiestas, los himnos y las iglesias dedicadas a María. En los siglos siguientes se le atribuirán títulos y privilegios cada vez mayores —intercesora, reina del cielo— y nacerán doctrinas que la tradición protestante considera sin base bíblica, como su perpetua virginidad o, mucho más tarde, su inmaculada concepción y su asunción.' },
        { heading: 'La objeción', body: 'Los Evangelios honran a María como bienaventurada (Lucas 1:48), pero no la presentan como objeto de oración ni como mediadora. Para los reformadores, la devoción mariana terminó ocupando un lugar que solo corresponde a Cristo. Los católicos y ortodoxos distinguen entre la «veneración» a María y la «adoración» debida solo a Dios, y la ven como la primera de los redimidos.' },
      ],
      quote: { text: '«Porque ha mirado la bajeza de su sierva; pues he aquí, desde ahora me dirán bienaventurada todas las generaciones.»', ref: 'Lucas 1:48' },
      legacy: 'Éfeso no inventó el culto mariano, pero le dio un impulso decisivo. La distancia entre la María de los Evangelios y la mariología medieval será uno de los grandes reproches de la Reforma.',
      sources: [
        { label: 'Britannica — Council of Ephesus', href: 'https://www.britannica.com/event/Council-of-Ephesus' },
        { label: 'Lucas 1 (Reina-Valera)', href: 'https://www.biblegateway.com/passage/?search=Lucas+1&version=RVR1960' },
      ],
    },
    {
      year: 450, yearLabel: 'c. 450 d.C.', title: 'Reliquias e intercesión de los santos', short: 'Huesos, objetos y oraciones dirigidas a los santos', icon: '🦴',
      intro: 'A partir del siglo V se consolida el culto a las reliquias —restos físicos de los mártires y santos, u objetos que tocaron— y la costumbre de pedir directamente a los santos su intercesión ante Dios.',
      paragraphs: [
        { heading: 'El poder atribuido a las reliquias', body: 'Se cree que las reliquias transmiten gracia y curaciones; los altares se construyen sobre ellas, se trasladan en procesión y se fragmentan para repartirlas entre muchas iglesias. La demanda es tal que, siglos después, el comercio de reliquias —muchas dudosas o falsas— se vuelve un escándalo que el propio Erasmo y luego Calvino ridiculizarán.' },
        { heading: 'La objeción', body: 'El Antiguo Testamento prohíbe consultar a los muertos (Deuteronomio 18:11) y el Nuevo dirige toda oración al Padre por medio de Cristo. Para la tradición protestante, venerar huesos y rezar a los santos confunde el honor con la adoración y desplaza la única mediación de Jesús. La respuesta católica y ortodoxa apela de nuevo a la comunión de los santos y a que el honor a la reliquia «pasa» a Dios que obró en ese santo.' },
      ],
      quote: { text: '«No sea hallado en ti… quien consulte a los muertos. Porque es abominación para con Jehová cualquiera que hace estas cosas.»', ref: 'Deuteronomio 18:10-12' },
      legacy: 'El culto a las reliquias y la invocación de los santos llenan la piedad medieval. Su exceso —y su comercio— estará entre las chispas que enciendan la Reforma.',
      sources: [
        { label: 'Britannica — Relic', href: 'https://www.britannica.com/topic/relic' },
        { label: 'Deuteronomio 18 (Reina-Valera)', href: 'https://www.biblegateway.com/passage/?search=Deuteronomio+18&version=RVR1960' },
      ],
    },
    {
      year: 593, yearLabel: 'c. 593 d.C.', title: 'El purgatorio toma forma', short: 'Un estado intermedio de purificación tras la muerte', icon: '🔥',
      intro: 'La idea de que las almas que mueren en gracia pero imperfectas pasan por un lugar o estado de purificación antes del cielo se venía insinuando desde Tertuliano y Orígenes. El papa Gregorio Magno (590-604) la formula con claridad y la difunde con relatos de apariciones y misas por los difuntos.',
      paragraphs: [
        { heading: 'Una doctrina que se sistematiza', body: 'Gregorio enseña que hay faltas leves que pueden purgarse después de la muerte, y populariza ofrecer misas por las almas para acortar ese proceso. La doctrina se desarrollará durante la Edad Media hasta quedar definida en concilios posteriores y enlazada, fatalmente, con el sistema de indulgencias.' },
        { heading: 'La objeción', body: 'Los reformadores negaron el purgatorio porque no lo hallaban en la Escritura: para ellos, la sangre de Cristo «limpia de todo pecado» (1 Juan 1:7) y el creyente pasa a estar «presente al Señor» al morir (2 Corintios 5:8). El apoyo principal del purgatorio (2 Macabeos 12) está en un libro que el protestantismo no considera canónico. La Iglesia católica lo mantiene como purificación, no como segunda oportunidad.' },
      ],
      quote: { text: '«La sangre de Jesucristo su Hijo nos limpia de todo pecado.»', ref: '1 Juan 1:7' },
      legacy: 'El purgatorio, unido a las misas y luego a las indulgencias, se convertirá en el detonante directo de la Reforma: contra su comercio escribirá Lutero las 95 tesis en 1517.',
      sources: [
        { label: 'Britannica — Purgatory', href: 'https://www.britannica.com/topic/purgatory' },
        { label: 'Gregorio Magno — Diálogos (lib. IV)', href: 'https://www.newadvent.org/fathers/3601.htm' },
      ],
    },
    {
      year: 787, yearLabel: '787 d.C.', title: 'El culto a las imágenes', short: 'Se aprueba venerar iconos de Cristo, María y los santos', icon: '🖼️',
      intro: 'Tras décadas de feroz disputa (la iconoclastia, que quería destruir las imágenes), el Segundo Concilio de Nicea (787) aprueba oficialmente la veneración de los iconos, distinguiéndola de la adoración debida solo a Dios.',
      paragraphs: [
        { heading: 'La distinción del concilio', body: 'Nicea II establece que las imágenes de Cristo, María y los santos merecen «veneración» (proskýnesis), porque el honor «pasa al prototipo» representado, mientras que la «adoración» (latría) corresponde solo a Dios. Es una distinción fina, pero en la práctica el pueblo besa, inciensa y se postra ante las imágenes.' },
        { heading: 'La objeción', body: 'El segundo mandamiento prohíbe expresamente hacerse imágenes para inclinarse ante ellas (Éxodo 20:4-5). Para la tradición protestante —y para el islam y el judaísmo— esta práctica roza la idolatría que la Biblia condena, por muchas distinciones técnicas que se hagan. Los defensores responden que, desde que Dios se hizo visible en Cristo, sí se le puede representar, y que venerar no es adorar.' },
      ],
      quote: { text: '«No te harás imagen, ni ninguna semejanza… No te inclinarás a ellas, ni las honrarás.»', ref: 'Éxodo 20:4-5' },
      legacy: 'El culto a las imágenes separa a Oriente y Occidente del judaísmo y, más tarde, del protestantismo, que en el siglo XVI vaciará de imágenes muchas iglesias. Es uno de los desacuerdos más visibles entre confesiones cristianas.',
      sources: [
        { label: 'Britannica — Second Council of Nicaea', href: 'https://www.britannica.com/event/Second-Council-of-Nicaea' },
        { label: 'Éxodo 20 (Reina-Valera)', href: 'https://www.biblegateway.com/passage/?search=Exodo+20&version=RVR1960' },
      ],
    },
    {
      year: 1059, yearLabel: 'c. 1059 d.C.', title: 'El primado papal absoluto', short: 'El obispo de Roma se afirma como cabeza universal con poder sobre reyes', icon: '🔑',
      intro: 'La primacía de honor que Roma tuvo desde antiguo se transforma, con la reforma del siglo XI, en una monarquía espiritual. El Dictatus Papae de Gregorio VII (1075) llega a afirmar que solo el papa puede deponer emperadores y que la Iglesia romana «nunca ha errado».',
      paragraphs: [
        { heading: 'De primero entre iguales a soberano', body: 'Decretos como el de 1059 (que reserva la elección del papa a los cardenales) y las tesis de Gregorio VII consolidan un poder papal sin precedentes, espiritual y también político. Inocencio III (1198-1216) se llamará «Vicario de Cristo» y se considerará árbitro de los reinos. Es la culminación de la pirámide clerical que empezó con el obispo único.' },
        { heading: 'La objeción', body: 'Jesús reprendió a sus discípulos por disputarse la primacía: «el que quiera hacerse grande… sea vuestro servidor» (Mateo 20:26-27). Para la tradición protestante y la ortodoxa, ningún obispo recibe autoridad universal sobre toda la Iglesia ni sobre los Estados; la cabeza de la Iglesia es Cristo (Efesios 1:22). Roma defiende el primado petrino apelando a «tú eres Pedro» (Mateo 16:18).' },
      ],
      quote: { text: '«El que quiera hacerse grande entre vosotros será vuestro servidor… como el Hijo del Hombre, que no vino para ser servido, sino para servir.»', ref: 'Mateo 20:26-28' },
      legacy: 'El primado papal absoluto es el rechazo más radical de la Reforma y la causa más profunda del cisma con Oriente (1054). Define el catolicismo medieval y moderno.',
      sources: [
        { label: 'Britannica — Papacy', href: 'https://www.britannica.com/topic/papacy' },
        { label: 'Britannica — Investiture Controversy', href: 'https://www.britannica.com/event/Investiture-Controversy' },
      ],
    },
    {
      year: 1074, yearLabel: 'c. 1074 d.C.', title: 'El celibato obligatorio del clero', short: 'Se prohíbe a sacerdotes y obispos estar casados', icon: '⛪',
      intro: 'Aunque la continencia clerical se venía promoviendo desde el siglo IV, es la reforma gregoriana del siglo XI la que impone con fuerza el celibato obligatorio para todo el clero latino, prohibiendo y anulando los matrimonios de los sacerdotes.',
      paragraphs: [
        { heading: 'Una ley, no un dogma', body: 'Gregorio VII (desde 1074) y luego los concilios de Letrán I (1123) y II (1139) declaran inválidos los matrimonios de los clérigos mayores. El celibato pasa de consejo a ley universal en Occidente. La Iglesia oriental nunca lo adoptó del todo: conserva un clero casado hasta hoy.' },
        { heading: 'La objeción', body: 'El Nuevo Testamento da por supuesto que muchos ministros eran casados: Pedro tenía suegra (Marcos 1:30) y Pablo dice que el obispo debe ser «marido de una sola mujer» y gobernar bien su casa (1 Timoteo 3:2-5). Más aún, advierte contra «prohibir casarse» como doctrina engañosa (1 Timoteo 4:1-3). Por eso los reformadores rechazaron el celibato obligatorio y muchos se casaron. La Iglesia católica lo mantiene como disciplina, no como dogma, y reconoce que podría cambiar.' },
      ],
      quote: { text: '«Pero es necesario que el obispo sea… marido de una sola mujer… que gobierne bien su casa.»', ref: '1 Timoteo 3:2-4' },
      legacy: 'El celibato obligatorio distingue al clero católico latino del oriental y del protestante. La Reforma lo abolió apelando directamente a las cartas pastorales de Pablo.',
      sources: [
        { label: 'Britannica — Celibacy', href: 'https://www.britannica.com/topic/celibacy' },
        { label: '1 Timoteo 3 (Reina-Valera)', href: 'https://www.biblegateway.com/passage/?search=1+Timoteo+3&version=RVR1960' },
      ],
    },
    {
      year: 1095, yearLabel: '1095 d.C.', title: 'Las indulgencias y las cruzadas', short: 'Se ofrece perdón de penas a cambio de obras, peregrinaciones o dinero', icon: '🎗️',
      intro: 'En el Concilio de Clermont (1095), el papa Urbano II promete a los cruzados la remisión de las penas por sus pecados. Nace así, ligada a la guerra santa, la práctica de las indulgencias: la Iglesia concede, de su «tesoro de méritos», la cancelación de penas temporales.',
      paragraphs: [
        { heading: 'De la penitencia al mercado', body: 'Al principio la indulgencia exige una obra penitencial seria —ir a la cruzada, peregrinar, ayunar—. Con el tiempo esa obra puede sustituirse por una limosna, y la indulgencia empieza a comprarse con dinero. En el siglo XVI, la venta de indulgencias para financiar la basílica de San Pedro, predicada con eslóganes como «en cuanto la moneda suena, el alma del purgatorio vuela», colmará la paciencia de Lutero.' },
        { heading: 'La objeción', body: 'El Evangelio anuncia el perdón como don gratuito por la fe en Cristo: «por gracia sois salvos… no por obras» (Efesios 2:8-9). Vender o ganar con obras la remisión de las penas contradice, para los reformadores, esa gratuidad y trata la salvación como una transacción. La Iglesia católica reformó después los abusos (el comercio fue prohibido en Trento) pero mantiene las indulgencias entendidas correctamente.' },
      ],
      quote: { text: '«Porque por gracia sois salvos por medio de la fe… no por obras, para que nadie se gloríe.»', ref: 'Efesios 2:8-9' },
      legacy: 'Las indulgencias, unidas al purgatorio, son la chispa concreta de la Reforma: las 95 tesis de Lutero (1517) son, literalmente, una protesta contra ellas.',
      sources: [
        { label: 'Britannica — Indulgence', href: 'https://www.britannica.com/topic/indulgence' },
        { label: 'Britannica — Crusades', href: 'https://www.britannica.com/event/Crusades' },
      ],
    },
    {
      year: 1215, yearLabel: '1215 d.C.', title: 'Transubstanciación y confesión obligatoria', short: 'El IV Concilio de Letrán dogmatiza dos prácticas muy discutidas', icon: '🍞',
      intro: 'El IV Concilio de Letrán, convocado por Inocencio III, es el cenit de la cristiandad medieval. Allí se usa oficialmente por primera vez el término «transubstanciación» y se obliga a todo fiel a confesar sus pecados a un sacerdote al menos una vez al año.',
      paragraphs: [
        { heading: 'Transubstanciación', body: 'El concilio define que en la eucaristía el pan y el vino se convierten en sustancia en el cuerpo y la sangre de Cristo, conservando solo la apariencia. Es la formulación filosófica (con categorías de Aristóteles) de una creencia que se venía desarrollando durante siglos.' },
        { heading: 'Confesión auricular anual', body: 'El mismo concilio impone la confesión privada y secreta de los pecados ante un sacerdote como obligación para todos, ligada a la comunión pascual. Hasta entonces la penitencia había tenido formas muy variadas, a menudo públicas y comunitarias.' },
        { heading: 'La objeción', body: 'Los reformadores rechazaron la transubstanciación como una explicación filosófica no exigida por la Escritura, y entendieron la Cena de otros modos (presencia espiritual o memorial). Y aunque animaron a confesar los pecados, negaron que hiciera falta un sacerdote para absolver: el creyente confiesa a Dios directamente y «a Dios uno y otro confesad vuestras ofensas» (Santiago 5:16; 1 Juan 1:9). Para el catolicismo, ambas definiciones expresan y protegen verdades recibidas de la Tradición.' },
      ],
      quote: { text: '«Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad.»', ref: '1 Juan 1:9' },
      legacy: 'Letrán IV (1215) cierra esta línea de tiempo: convierte en dogma obligatorio lo que se había ido desarrollando durante mil años. Tres siglos después, esas mismas definiciones marcarán la frontera entre Roma y la Reforma.',
      sources: [
        { label: 'Britannica — Fourth Lateran Council', href: 'https://www.britannica.com/event/Fourth-Lateran-Council' },
        { label: 'Britannica — Transubstantiation', href: 'https://www.britannica.com/topic/transubstantiation' },
      ],
    },
  ],
};
