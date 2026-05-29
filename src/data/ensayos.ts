export interface EssaySection {
  heading?: string;
  body: string;
}

export interface Essay {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  readingTime: string;
  icon: string;
  excerpt: string;
  sections: EssaySection[];
  quote?: { text: string; ref: string };
  sources: { label: string; href: string }[];
}

const E1: Essay = {
  slug: 'plinio-trajano',
  title: 'La correspondencia entre Plinio y Trajano',
  subtitle: 'El primer documento romano oficial sobre los cristianos',
  period: 'c. 111 – 113 d.C.',
  readingTime: '8 min',
  icon: '📜',
  excerpt: 'Un gobernador romano, culto y meticuloso, se topa con una secta que nadie le ha enseñado a juzgar. Le escribe al emperador. La respuesta de Trajano marcará la política religiosa del Imperio durante siglo y medio.',
  sections: [
    {
      heading: 'El gobernador y su provincia',
      body: 'Hacia el año 111 d.C., un caballero romano llamado Plinio el Joven llegó a Bitinia, en las orillas del Mar Negro, enviado por el emperador Trajano para enderezar las cuentas de una provincia rica pero mal gobernada. Plinio era amigo del historiador Tácito, abogado, escritor y, sobre todo, un hombre meticuloso. Acostumbraba a consultar al emperador hasta los detalles más pequeños. Conservamos casi cien cartas suyas a Trajano: pregunta por acueductos, por baños públicos, por cómo tratar a un esclavo prófugo. Y, en medio de ese rosario de consultas burocráticas, hay una carta —la número 96 del libro X— que cambió la manera en que el Imperio miraría al cristianismo durante los siguientes ciento cincuenta años.',
    },
    {
      heading: 'Una secta inesperada',
      body: 'Plinio se encontró con un problema que no aparecía en ningún manual. Cada cierto tiempo, alguien le presentaba ante el tribunal a personas acusadas de ser cristianas. Él nunca había asistido a un juicio así. No sabía qué se castigaba: ¿el nombre mismo de cristiano, aunque no hubiera delito? ¿O solo los crímenes que se les atribuían? Empezó como acostumbraba a empezar: preguntando. A quien decía ser cristiano lo interrogaba dos y tres veces, advirtiéndole del peligro. Si insistía, lo mandaba ejecutar. No por lo que hacía, sino por lo que él llamaba su «obstinación inflexible».',
    },
    {
      heading: 'Lo que descubrió en los interrogatorios',
      body: 'Quienes negaban serlo eran absueltos si invocaban a los dioses, ofrecían vino e incienso ante la imagen del emperador y maldecían a Cristo. Plinio descubrió que algunos habían dejado la fe hacía años, otros hacía veinte. De ellos pudo reconstruir lo que hacían los cristianos cuando se reunían: se juntaban antes del amanecer en un día fijo, cantaban a coro himnos «a Cristo como a un dios» y se obligaban por juramento. Pero —le sorprendió escribirlo— ese juramento no era a cometer crímenes, sino a no cometerlos: no robar, no adulterar, no faltar a la palabra empeñada, no negar un depósito reclamado. Después se separaban y volvían a juntarse para una comida común y completamente ordinaria.',
    },
    {
      heading: 'Las dos diaconisas',
      body: 'Para asegurarse de que aquellos exconversos no le mentían, Plinio mandó torturar a dos esclavas a las que los cristianos llamaban ministrae —el equivalente latino de «diaconisas»—. Después de aquella interrogación brutal, su informe es casi de decepción intelectual: «no descubrí más que una superstición depravada y desmesurada». Es decir: nada de los crímenes oscuros que la calle atribuía a los cristianos. Ni canibalismo, ni incesto, ni conspiración política. Solo una devoción tenaz a un personaje crucificado bajo Tiberio.',
    },
    {
      heading: 'Un crimen sin crimen',
      body: 'Aquí está la grieta del caso. Plinio era un funcionario serio; no quería condenar a inocentes ni dejar impunes a culpables. Pero no encontraba el crimen. Encontraba personas honestas, leales, escrupulosas en su palabra. Y al mismo tiempo encontraba algo que le inquietaba como administrador: la nueva fe se había propagado de tal modo «no solo por las ciudades, sino también por las aldeas y los campos», que los templos paganos se habían quedado casi desiertos y las víctimas de sacrificio ya no tenían comprador. Cuando empezó a procesarlos, los templos volvieron a llenarse y los criadores de animales recuperaron su mercado. Para Plinio, aquello probaba dos cosas a la vez: que el cristianismo era peligrosamente atractivo, y que aún se podía corregir. Por eso escribió a Trajano. No buscaba una pena más dura; buscaba una regla clara.',
    },
    {
      heading: 'La respuesta de Trajano',
      body: 'La carta del emperador es asombrosamente breve y casi moderna en su sobriedad. Felicita a Plinio por haber procedido con cautela y le da tres principios. Primero: a los cristianos no se les debe buscar. Es decir, el Estado no debe organizar batidas contra ellos. Segundo: si alguien los denuncia y se les prueba el cargo, deben ser castigados; pero quien niegue ser cristiano y lo demuestre invocando a los dioses, debe ser perdonado «por arrepentimiento», por más sospechoso que haya parecido. Tercero: los libelos anónimos no se admiten en ningún proceso, «porque dan el peor ejemplo y son indignos de nuestro tiempo».',
    },
    {
      heading: 'La lógica del rescripto',
      body: 'La fórmula de Trajano es un compromiso típicamente romano: cínico para algunos, civilizado para otros. Reconoce que ser cristiano es ilegal —de lo contrario no habría a quién castigar—, pero se niega a convertir esa ilegalidad en una caza activa. La Iglesia podría vivir en relativa paz mientras nadie quisiera denunciarla, y enfrentarse a la muerte en cualquier ciudad donde un enemigo personal, un comerciante arruinado por el éxito cristiano o un magistrado celoso decidiera acusarla. Era una persecución intermitente, local, impredecible: la peor forma posible de vivir bajo amenaza, porque nunca terminaba del todo y podía estallar en cualquier esquina del Imperio.',
    },
    {
      heading: 'Lo que dejó esta correspondencia',
      body: 'Estos dos breves textos —apenas unas páginas— son la primera vez que el mundo romano oficial pone por escrito qué piensa de los cristianos. Tertuliano, un siglo después, todavía discutirá con la lógica de Trajano: «¡Qué sentencia tan necesariamente enredada! No quieres buscarlos, como si fueran inocentes; y los castigas, como si fueran culpables». Plinio, sin pretenderlo, nos legó también el más antiguo retrato externo del culto cristiano: una reunión sencilla al amanecer, un himno, un compromiso moral, una comida compartida. Pocas cosas en la antigüedad están descritas con tanta sobriedad y tanta exactitud por un testigo hostil. Y Trajano, con su rescripto, escribió la primera política religiosa del Imperio frente al cristianismo: una política tibia, irregular y, durante ciento cincuenta años, suficiente para llenar los anfiteatros de mártires sin acabar nunca con la Iglesia.',
    },
  ],
  quote: {
    text: '«Cantan a coro un himno a Cristo como a un dios y se obligan por juramento, no a algún crimen, sino a no cometer hurtos, ni adulterios, ni a faltar a la palabra empeñada.»',
    ref: 'Plinio el Joven, Cartas X, 96',
  },
  sources: [
    { label: 'Plinio el Joven — Cartas X, 96-97 (texto latino)', href: 'https://www.thelatinlibrary.com/pliny.ep10.html' },
    { label: 'Britannica — Pliny the Younger', href: 'https://www.britannica.com/biography/Pliny-the-Younger' },
    { label: 'Tertuliano — Apologético', href: 'https://www.newadvent.org/fathers/0301.htm' },
  ],
};

const E2: Essay = {
  slug: 'ignacio-antioquia',
  title: 'Ignacio de Antioquía',
  subtitle: 'El obispo que caminó hacia los leones escribiendo cartas',
  period: 'c. 107 d.C.',
  readingTime: '5 min',
  icon: '🦁',
  excerpt: 'Camino a su ejecución en Roma, un anciano discípulo del apóstol Juan escribió siete cartas que se volverían piedra angular del cristianismo primitivo. En una de ellas aparece, por primera vez, la expresión «iglesia católica». Conviene aclarar enseguida qué significaba.',
  sections: [
    {
      heading: 'Un anciano camino del Coliseo',
      body: 'Hacia el año 107 d.C., bajo el emperador Trajano, fue arrestado en Siria un anciano llamado Ignacio. Era el segundo o tercer obispo de Antioquía, una de las grandes capitales del cristianismo primitivo —allí, dice el libro de los Hechos, los discípulos fueron llamados «cristianos» por primera vez (Hechos 11:26)—. La tradición más antigua lo cuenta como discípulo directo del apóstol Juan, lo que hace de él un puente vivo entre la generación apostólica y la siguiente. Condenado a morir devorado por las fieras, fue enviado a Roma escoltado por diez soldados a los que llamaba, con humor amargo, «mis diez leopardos».',
    },
    {
      heading: 'Siete cartas escritas en cadenas',
      body: 'Durante el largo viaje terrestre hacia Roma, Ignacio fue recibido por comunidades cristianas en cada parada. Aprovechó para escribir siete cartas que han llegado hasta nosotros: a las iglesias de Éfeso, Magnesia, Tralles, Roma, Filadelfia y Esmirna, y una más a Policarpo, obispo de esta última y también discípulo de Juan. Son textos breves, ardientes, escritos con prisa. En ellos defiende tres cosas que le importaban casi por igual: la unidad de la Iglesia en torno al obispo, la realidad del cuerpo de Cristo —contra quienes decían que la encarnación había sido pura apariencia— y su deseo de morir mártir sin que nadie intentara salvarlo.',
    },
    {
      heading: '«Iglesia católica»: una palabra que conviene aclarar',
      body: 'En la carta a los esmirniotas aparece por primera vez en toda la literatura cristiana la expresión «iglesia católica»: «Donde está Jesucristo, allí está la iglesia católica». Aquí hay que detenerse. «Católica» viene del griego katholiké, que significa simplemente «universal», «entera», «completa». Ignacio no está hablando de lo que hoy conocemos como Iglesia Católica Romana —esa institución, con su papado consolidado, sus dogmas particulares y su estructura jurídica, tomará forma a lo largo de los siglos siguientes y especialmente desde la Edad Media—. Ignacio está diciendo otra cosa: que la Iglesia verdadera es la que está extendida por todo el mundo y unida en Cristo, frente a las pequeñas sectas locales que ya empezaban a separarse. En su boca, «católica» es un adjetivo, no una denominación.',
    },
    {
      heading: 'Trigo de Dios',
      body: 'La carta más famosa es la dirigida a los cristianos de Roma. En ella les suplica con una intensidad casi incómoda que no muevan influencias para librarlo de la muerte: «Soy trigo de Dios y debo ser molido por los dientes de las fieras para llegar a ser pan puro de Cristo». No es fanatismo desesperado; es la convicción serena de que morir como murió Cristo es la forma más limpia de seguirlo. Llegado a Roma —probablemente al Coliseo o al Circo Flaminio—, fue despedazado por leones ante una multitud para la que aquello era simple espectáculo.',
    },
    {
      heading: 'Lo que nos dejó',
      body: 'Ignacio fija dos cosas que marcarán la historia cristiana. Primero, la figura del obispo como garantía de unidad: en una época en la que cada ciudad podía inventarse su propio evangelio, él insiste en que «nada se haga sin el obispo». Segundo, el modelo del mártir gozoso, que va a la muerte sin huida y sin maldición. Sus siete cartas son, junto a las de Clemente de Roma, el testimonio cristiano más antiguo fuera del Nuevo Testamento. Y aquella expresión suya —«iglesia católica»— quedó en el vocabulario común de todos los cristianos: católicos romanos, ortodoxos y protestantes la siguen recitando cada domingo en el Credo, cada uno entendiéndola a su manera, pero todos remontándose, sin saberlo a veces, a un anciano que caminaba hacia los leones escribiendo cartas.',
    },
  ],
  quote: {
    text: '«Donde está Jesucristo, allí está la iglesia católica.»',
    ref: 'Ignacio de Antioquía, Carta a los Esmirniotas 8, 2',
  },
  sources: [
    { label: 'Cartas de Ignacio de Antioquía (texto)', href: 'https://www.newadvent.org/fathers/0104.htm' },
    { label: 'Britannica — Ignatius of Antioch', href: 'https://www.britannica.com/biography/Saint-Ignatius-of-Antioch' },
    { label: 'Padres Apostólicos (textos originales)', href: 'https://www.earlychristianwritings.com/' },
  ],
};

const E3: Essay = {
  slug: 'marcion',
  title: 'Marción de Sínope',
  subtitle: 'El hombre que quiso quedarse con medio cristianismo',
  period: 'c. 85 – 160 d.C.',
  readingTime: '8 min',
  icon: '✂️',
  excerpt: 'Un rico armador del Mar Negro llegó a Roma con dinero, inteligencia y una idea explosiva: que el Dios del Antiguo Testamento no era el mismo Dios del que habló Jesús. Para defenderla recortó la Biblia hasta dejarla a su medida. Sin proponérselo, obligó a la Iglesia a decidir qué libros eran de verdad Escritura.',
  sections: [
    {
      heading: 'El hijo del armador',
      body: 'Marción nació hacia el año 85 d.C. en Sínope, un puerto del Ponto, en la costa sur del Mar Negro (hoy Turquía). Su padre era, según la tradición, obispo de aquella ciudad. Marción se hizo armador —dueño de barcos de carga— y reunió una fortuna considerable. No era, por tanto, un predicador callejero ni un pobre iluminado: era un hombre de negocios culto, viajado y acostumbrado a pensar en grande. Hacia el año 140 d.C. llegó a Roma, la capital del Imperio, y se presentó ante la comunidad cristiana de la ciudad. Para ganarse su confianza hizo algo llamativo: donó una suma enorme de dinero, doscientos mil sestercios. Al principio fue bien recibido. El problema vino cuando empezó a explicar lo que de verdad pensaba.',
    },
    {
      heading: 'El problema que lo obsesionaba',
      body: 'A Marción le quitaba el sueño una pregunta que muchos cristianos de su tiempo se hacían en voz baja: ¿cómo encajan el Dios del Antiguo Testamento y el Dios del que habla Jesús? En las Escrituras judías leía a un Dios que ordena guerras, que castiga con dureza, que exige sacrificios, que es —decía él— justo pero severo, casi de mal genio. En los evangelios, en cambio, encontraba a un Jesús que predica el perdón, que abraza a los pecadores, que habla de un Padre puro amor. Para Marción, esos dos retratos eran tan distintos que no podían referirse al mismo Dios. Y de ahí sacó su conclusión más radical.',
    },
    {
      heading: 'Dos dioses, no uno',
      body: 'Marción propuso que existían en realidad dos divinidades distintas. Por un lado, el Demiurgo —palabra griega que significa «artesano» o «fabricante»—, el Dios que creó este mundo material y que aparece en el Antiguo Testamento: justiciero, vengativo, atado a la ley. Por otro lado, un Dios superior, completamente desconocido hasta entonces, un Dios de pura bondad y amor, que no tenía nada que ver con este mundo ni lo había creado. Según Marción, ese Dios bueno se compadeció de la humanidad atrapada bajo el Dios creador y envió a Jesús para rescatarla. Jesús no venía a cumplir las promesas del Antiguo Testamento: venía a liberarnos de ellas. En el fondo, Marción enfrentaba dos palabras que para él lo resumían todo: la Ley (dura) frente al Evangelio (misericordioso).',
    },
    {
      heading: 'Un Cristo sin cuerpo de verdad',
      body: 'De esa idea se desprendía otra. Si el mundo material era obra de un dios inferior, entonces la materia era algo de segunda categoría, casi sucio. ¿Cómo iba el Dios bueno a mancharse naciendo de una mujer, con sangre, pañales y muerte? Marción sostuvo que Cristo no había tenido un cuerpo real: solo aparentó tenerlo. Esta idea tiene nombre técnico, docetismo, del griego dokéo, «parecer». Según el docetismo, Jesús era como una imagen proyectada: parecía comer, parecía sufrir, parecía morir, pero no era carne verdadera. Por eso Marción rechazaba la Navidad tal como la entendemos: para él, Cristo simplemente apareció ya adulto en tiempos del emperador Tiberio, sin haber nacido.',
    },
    {
      heading: 'Las tijeras sobre la Biblia',
      body: 'Aquí está su aportación más duradera, y la más peligrosa. Marción se dio cuenta de que su teoría chocaba de frente con muchísimos textos cristianos que citaban con respeto el Antiguo Testamento. Su solución fue tajante: recortar. Rechazó por completo las Escrituras judías —lo que hoy llamamos Antiguo Testamento— por considerarlas obra del dios inferior. Y del resto se quedó solo con lo que le convenía: una versión recortada del Evangelio de Lucas (al que quitó, por ejemplo, el nacimiento de Jesús) y diez cartas del apóstol Pablo, también editadas para borrar los pasajes que elogiaban la ley judía. A esa colección la llamó simplemente «Evangelio» y «Apóstol». Fue, que sepamos, la primera vez que alguien fijó por escrito una lista cerrada de libros cristianos y dijo: «estos sí, los demás no».',
    },
    {
      heading: 'Por qué eligió a Pablo',
      body: 'No es casualidad que Marción se aferrara a Pablo. En las cartas del apóstol encontraba frases sobre la libertad frente a la ley, sobre la gracia que salva sin las obras de la ley de Moisés, sobre un «evangelio» nuevo. Marción las leyó de forma extrema: donde Pablo distinguía entre la ley y la fe dentro de un mismo plan de Dios, él vio la prueba de que había dos dioses opuestos. Es un ejemplo clásico de cómo un texto puede ser forzado hasta decir lo que el lector ya quería oír. Para Marción, Pablo era el único apóstol que había entendido de verdad a Jesús; a los demás los acusaba de haberlo «judaizado», de haber contaminado el mensaje puro con las viejas Escrituras.',
    },
    {
      heading: 'La ruptura y la Iglesia rival',
      body: 'En julio del año 144 d.C., la comunidad cristiana de Roma se reunió, escuchó las ideas de Marción y las rechazó. Le devolvieron incluso su donación de doscientos mil sestercios. Marción fue expulsado. Pero lejos de rendirse, hizo lo que un hombre con dinero y organización podía hacer: fundó su propia iglesia, con sus obispos, su culto y su Biblia recortada. Y tuvo un éxito arrollador. Durante décadas las iglesias marcionitas se extendieron por todo el Imperio, desde Italia hasta Siria y Egipto. En algunas regiones llegaron a rivalizar en número con las comunidades ortodoxas. Marción murió hacia el 160 d.C., pero sus seguidores duraron siglos en algunos lugares de Oriente.',
    },
    {
      heading: 'La reacción: una Biblia para todos',
      body: 'La gran paradoja es que Marción, queriendo recortar el cristianismo, obligó a la Iglesia a definirse. Hasta entonces los cristianos usaban muchos escritos sin haber decidido oficialmente cuáles eran «Escritura» y cuáles no. El desafío de Marción —que llegó con su lista cerrada— forzó la pregunta: ¿qué libros aceptamos de verdad? La respuesta de la Iglesia fue exactamente la contraria a la suya. Reafirmó que el Antiguo Testamento era Palabra de Dios, conservó los cuatro evangelios (no uno recortado), guardó las trece cartas de Pablo completas y añadió las demás. El proceso de fijar ese «canon» —la lista oficial de libros de la Biblia— tardó todavía mucho en cerrarse, pero el empujón decisivo vino, en buena parte, como respuesta a Marción.',
    },
    {
      heading: 'Lo que nos dejó Marción',
      body: 'Marción fue condenado como hereje por figuras como Justino Mártir, Ireneo de Lyon y, sobre todo, Tertuliano, que le dedicó cinco libros enteros para refutarlo. De sus propios escritos no se conserva casi nada directo: lo conocemos, irónicamente, por las palabras de quienes lo combatieron. Pero su huella es enorme. Tres ideas suyas marcaron para siempre los debates cristianos: que un solo Dios es a la vez Creador y Salvador (lo que la Iglesia defendió contra él), que Jesús tuvo un cuerpo humano real (frente a su docetismo), y que la Biblia incluye tanto el Antiguo como el Nuevo Testamento. Cada vez que un cristiano abre una Biblia que empieza en el Génesis y termina en el Apocalipsis, está, sin saberlo, dándole la respuesta que la Iglesia le dio a Marción hace casi dos mil años.',
    },
  ],
  quote: {
    text: '«Oh maravilla sobre maravilla, éxtasis, poder y asombro: que no se pueda decir nada del Evangelio, ni pensarlo, ni compararlo con nada.»',
    ref: 'Marción, Antítesis (citado por Tertuliano)',
  },
  sources: [
    { label: 'Tertuliano — Contra Marción (texto)', href: 'https://www.newadvent.org/fathers/0312.htm' },
    { label: 'Britannica — Marcion', href: 'https://www.britannica.com/biography/Marcion' },
    { label: 'Ireneo — Contra las herejías', href: 'https://www.newadvent.org/fathers/0103.htm' },
  ],
};

const E4: Essay = {
  slug: 'gnosticismo',
  title: 'El gnosticismo',
  subtitle: 'La salvación por el conocimiento secreto',
  period: 'siglos II – III d.C.',
  readingTime: '9 min',
  icon: '🔮',
  excerpt: 'No fue una secta, sino una corriente difusa que prometía algo irresistible: que dentro de ti dormía una chispa divina y que conocer el secreto de su origen bastaba para salvarte. Mezcló cristianismo, filosofía griega y mitos orientales en un relato fascinante. La Iglesia tardó casi dos siglos en explicar por qué la rechazaba.',
  sections: [
    {
      heading: 'Una palabra que conviene aclarar',
      body: 'La palabra «gnosticismo» viene del griego gnosis, que significa «conocimiento». Pero no se trata del conocimiento de quien estudia o investiga, sino de un saber espiritual, íntimo y secreto: la revelación de quién eres en realidad, de dónde vienes y a dónde puedes volver. Conviene decir desde el principio que el gnosticismo no fue una iglesia, ni un partido, ni un libro. Fue una corriente difusa, con muchas escuelas y maestros distintos, que floreció sobre todo en los siglos II y III dentro y alrededor del cristianismo. Por eso los historiadores prefieren hablar de «los gnósticos», en plural: había docenas de versiones, a veces contradictorias entre sí. Pero casi todas compartían un mismo aire de familia.',
    },
    {
      heading: 'La gran idea: la chispa atrapada',
      body: 'En el corazón del gnosticismo hay una intuición poderosa y un poco trágica. Según los gnósticos, dentro de algunos seres humanos hay una «chispa» divina, un fragmento de luz que procede de un mundo superior y perfecto. Pero esa chispa está atrapada, prisionera, dentro del cuerpo y del mundo material, como una joya hundida en el barro. La mayoría de la gente vive sin saberlo: anda dormida, ignorante de su verdadero origen. La salvación, para un gnóstico, no consiste en que Dios te perdone los pecados, sino en despertar: en recibir el conocimiento (la gnosis) que te revela que eres luz atrapada y te enseña el camino de vuelta a casa, al mundo de arriba. No te salva la fe ni las buenas obras: te salva saber.',
    },
    {
      heading: 'Un mundo creado por error',
      body: 'Para explicar cómo la luz acabó atrapada en el barro, los gnósticos contaban mitos largos y complicados. La versión más típica es así. En el principio existe un Dios verdadero, lejano e inefable, rodeado de seres divinos llamados eones, que forman como una escalera de plenitud (el Pleroma, «la plenitud»). En algún momento, uno de esos seres inferiores —a menudo llamado Sofía, «sabiduría»— comete un error o cae, y de esa caída surge un dios menor y arrogante: el Demiurgo, el «fabricante». Este Demiurgo, que no conoce al Dios verdadero, cree ser el único dios y fabrica el mundo material. Para los gnósticos, ese Demiurgo torpe es nada menos que el Dios creador del Antiguo Testamento. De ahí su conclusión inquietante: el mundo no es una obra buena de un Dios bueno, sino una especie de cárcel mal hecha por un dios equivocado.',
    },
    {
      heading: 'Por qué desconfiaban de la materia',
      body: 'De ese mito se sigue todo lo demás. Si el mundo físico es obra de un dios inferior, entonces el cuerpo, la materia y los placeres son una trampa, no un regalo. Esta visión —que el espíritu es bueno y la materia es mala— se llama dualismo, y es la columna vertebral del pensamiento gnóstico. Curiosamente, llevó a dos comportamientos opuestos. Algunos gnósticos se volvieron muy ascéticos: rechazaban el matrimonio, el sexo y los placeres, porque todo eso ataba la chispa al cuerpo. Otros razonaron al revés: si el cuerpo no importa nada y solo cuenta el espíritu, da igual lo que hagas con él, así que se permitían toda clase de libertades. Sus críticos cristianos los acusaron de ambas cosas, a veces a la vez.',
    },
    {
      heading: 'Un Cristo que solo aparenta',
      body: 'El cristianismo gnóstico tenía que encajar a Jesús en este esquema, y lo hizo a su manera. Para muchos gnósticos, Cristo era un ser celestial enviado por el Dios verdadero —no por el Demiurgo— para traer la gnosis, el conocimiento que despierta a las chispas dormidas. Pero como la materia era despreciable, no podían aceptar que ese Cristo tuviera un cuerpo real. Recurrieron, igual que Marción, al docetismo (del griego dokéo, «parecer»): Jesús solo aparentaba tener carne, aparentaba sufrir, aparentaba morir. Para un gnóstico, lo importante de Cristo no era su muerte en la cruz para perdonar pecados, sino sus enseñanzas secretas, las palabras reveladas que abren los ojos del que las entiende.',
    },
    {
      heading: 'Una salvación para unos pocos',
      body: 'Había en el gnosticismo un punto especialmente difícil de tragar para los cristianos comunes: la salvación no era para todos. Muchas escuelas gnósticas dividían a la humanidad en tres clases. Los «espirituales», que poseían la chispa divina y estaban destinados a salvarse por la gnosis. Los «psíquicos», gente corriente de fe sencilla, que como mucho alcanzaría un nivel intermedio. Y los «materiales» o «carnales», sin chispa alguna, condenados a perderse con el mundo. Era, en el fondo, una religión elitista: prometía secretos reservados a una minoría iluminada. Frente a esto, la Iglesia insistía en lo contrario: que el evangelio se predicaba abiertamente a todos, sabios e ignorantes, y que la salvación no dependía de tener acceso a un saber oculto.',
    },
    {
      heading: 'Los grandes maestros y sus escuelas',
      body: 'El gnosticismo tuvo maestros brillantes. El más célebre fue Valentín, que vivió en Roma hacia mediados del siglo II y estuvo a punto, dicen, de ser elegido obispo de la ciudad. Su sistema, lleno de eones que se emparejan y de dramas celestiales, fue el más refinado y atrajo a discípulos cultos. Otro fue Basílides, en Alejandría, conocido por sus especulaciones vertiginosas sobre los cielos. La tradición cristiana situaba el origen de toda esta corriente en Simón el Mago, aquel personaje que aparece en el libro de los Hechos queriendo comprar el poder del Espíritu Santo. Junto a ellos circulaban evangelios y escritos propios, con títulos como Evangelio de Tomás, Evangelio de la Verdad o Evangelio de Felipe, que no narran la vida de Jesús sino que recogen supuestas enseñanzas secretas.',
    },
    {
      heading: 'El hallazgo de Nag Hammadi',
      body: 'Durante siglos solo conocimos a los gnósticos por boca de sus enemigos, que los citaban para refutarlos. Eso cambió de golpe en 1945. Cerca de la localidad egipcia de Nag Hammadi, unos campesinos desenterraron una vasija con trece códices —libros de papiro— escritos en copto y enterrados hacia el siglo IV, probablemente por unos monjes que querían salvarlos de la destrucción. Eran más de cincuenta textos gnósticos, muchos desconocidos hasta entonces. Por primera vez podíamos leer a los gnósticos en sus propias palabras y no solo en las de sus adversarios. El hallazgo revolucionó el estudio del cristianismo primitivo y confirmó, en buena medida, lo que los antiguos padres habían descrito.',
    },
    {
      heading: 'La respuesta de la Iglesia',
      body: 'Contra el gnosticismo se levantó toda una generación de pensadores cristianos. El más importante fue Ireneo de Lyon, que hacia el año 180 escribió una obra monumental, Contra las herejías, dedicada a exponer y desmontar uno por uno los sistemas gnósticos. Frente a la idea de un saber secreto reservado a unos pocos, Ireneo defendió tres armas que resultarían decisivas. Primera: la regla de fe, un resumen de las creencias compartidas por todas las iglesias, transparente y público. Segunda: la sucesión apostólica, es decir, que la verdadera doctrina se podía rastrear hasta los apóstoles a través de una cadena conocida de obispos, sin secretos. Tercera: el canon de las Escrituras, los evangelios y cartas reconocidos por todos, frente a los escritos «secretos» gnósticos. En otras palabras, la Iglesia respondió al secreto con la publicidad y a la élite con la universalidad.',
    },
    {
      heading: 'Lo que nos dejó el gnosticismo',
      body: 'El gnosticismo acabó marchitándose a partir del siglo IV, aunque sus ecos resurgieron una y otra vez a lo largo de la historia, en movimientos medievales y modernos. Pero al combatirlo, la Iglesia se vio obligada a definir con claridad lo que creía. Muchas de las afirmaciones que hoy nos parecen obvias del cristianismo se afilaron precisamente contra los gnósticos: que hay un solo Dios, Creador del cielo y de la tierra (y que la creación es buena); que Jesús fue verdadero hombre, con carne, sangre y muerte real; que la salvación es para todos y no para una élite iluminada; y que la fe se transmite abiertamente, no como un secreto. El gnosticismo fue, en cierto modo, el gran adversario que ayudó al cristianismo a saber quién era. Por eso entender qué proponían los gnósticos es entender, en negativo, buena parte de lo que la Iglesia decidió ser.',
    },
  ],
  quote: {
    text: '«Cuando lleguéis a conocer quiénes sois, entonces seréis conocidos, y sabréis que sois hijos del Padre viviente.»',
    ref: 'Evangelio de Tomás 3 (texto gnóstico de Nag Hammadi)',
  },
  sources: [
    { label: 'Ireneo de Lyon — Contra las herejías', href: 'https://www.newadvent.org/fathers/0103.htm' },
    { label: 'Biblioteca de Nag Hammadi (textos en inglés)', href: 'https://www.gnosis.org/naghamm/nhl.html' },
    { label: 'Britannica — Gnosticism', href: 'https://www.britannica.com/topic/gnosticism' },
  ],
};

export const ESSAYS: Essay[] = [E1, E2, E3, E4];
