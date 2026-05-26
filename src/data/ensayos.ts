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

export const ESSAYS: Essay[] = [E1];
