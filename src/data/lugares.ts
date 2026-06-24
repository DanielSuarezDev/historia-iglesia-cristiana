// Capa geográfica del mapa interactivo (MVP, siglos I–XIII).
//
// NO duplica el contenido de los eventos. Cada `Enlace` apunta por clave natural
// (source + year) a un evento que YA vive en su dataset original
// (CENTURIES_DATA, CONCILIOS, ERRORES, o el array EVENTS de persecuciones).
// El componente MapaHistorico resuelve esos enlaces a los objetos reales y abre
// el mismo EventModal de las líneas de tiempo. Conteo = hitos únicos: cuando un
// mismo hecho aparece en varios datasets, se enlaza una sola vez (de-dup manual).

export type Fuente = 'siglos' | 'concilios' | 'errores' | 'persecuciones';

export interface Lugar {
  id: string;
  name: string;        // nombre histórico
  modernName: string;  // ciudad/país actual
  lat: number;
  lng: number;
  region: string;
  dx?: number;         // nudge en píxeles para des-solapar marcadores muy juntos
  dy?: number;
}

export interface Enlace {
  placeId: string;
  source: Fuente;
  year: number;        // clave natural: año del evento dentro de su dataset
  match?: string;      // desambiguación opcional si dos eventos comparten año
}

export const LUGARES: Lugar[] = [
  { id: 'roma', name: 'Roma', modernName: 'Roma, Italia', lat: 41.9, lng: 12.5, region: 'Italia' },
  { id: 'constantinopla', name: 'Constantinopla', modernName: 'Estambul, Turquía', lat: 41.01, lng: 28.98, region: 'Bósforo / Bizancio', dx: -6, dy: -12 },
  { id: 'jerusalen', name: 'Jerusalén', modernName: 'Jerusalén', lat: 31.78, lng: 35.22, region: 'Judea / Levante' },
  { id: 'antioquia', name: 'Antioquía', modernName: 'Antakya, Turquía', lat: 36.2, lng: 36.16, region: 'Siria' },
  { id: 'alejandria', name: 'Alejandría', modernName: 'Alejandría, Egipto', lat: 31.2, lng: 29.92, region: 'Egipto' },
  { id: 'cartago', name: 'Cartago', modernName: 'Túnez, Túnez', lat: 36.85, lng: 10.33, region: 'Norte de África' },
  { id: 'lyon', name: 'Lyon', modernName: 'Lyon, Francia', lat: 45.76, lng: 4.84, region: 'Galia' },
  { id: 'nicea', name: 'Nicea', modernName: 'İznik, Turquía', lat: 40.43, lng: 29.72, region: 'Bitinia', dx: 6, dy: 14 },
  { id: 'efeso', name: 'Éfeso', modernName: 'Selçuk, Turquía', lat: 37.94, lng: 27.34, region: 'Asia Menor', dy: 8 },
  { id: 'esmirna', name: 'Esmirna', modernName: 'İzmir, Turquía', lat: 38.42, lng: 27.14, region: 'Asia Menor', dx: -8, dy: -6 },
  { id: 'milan', name: 'Milán', modernName: 'Milán, Italia', lat: 45.46, lng: 9.19, region: 'Italia' },
  { id: 'hipona', name: 'Hipona', modernName: 'Annaba, Argelia', lat: 36.9, lng: 7.77, region: 'Norte de África' },
  { id: 'montecassino', name: 'Monte Cassino', modernName: 'Montecassino, Italia', lat: 41.49, lng: 13.81, region: 'Italia', dy: 10 },
  { id: 'irlanda', name: 'Irlanda', modernName: 'Irlanda', lat: 53.0, lng: -7.5, region: 'Islas Británicas' },
  { id: 'hispania', name: 'Hispania', modernName: 'España (Guadalete)', lat: 36.6, lng: -5.9, region: 'Península Ibérica' },
  { id: 'poitiers', name: 'Poitiers', modernName: 'Poitiers, Francia', lat: 46.58, lng: 0.34, region: 'Galia' },
  { id: 'moravia', name: 'Moravia', modernName: 'Moravia, Chequia', lat: 49.2, lng: 16.6, region: 'Europa Central' },
  { id: 'cluny', name: 'Cluny', modernName: 'Cluny, Francia', lat: 46.43, lng: 4.66, region: 'Borgoña' },
  { id: 'kiev', name: 'Kiev', modernName: 'Kiev, Ucrania', lat: 50.45, lng: 30.52, region: 'Rus de Kiev' },
  { id: 'canossa', name: 'Canossa', modernName: 'Canossa, Italia', lat: 44.58, lng: 10.45, region: 'Italia', dx: 6, dy: -8 },
  { id: 'clermont', name: 'Clermont', modernName: 'Clermont-Ferrand, Francia', lat: 45.78, lng: 3.08, region: 'Galia' },
  { id: 'claraval', name: 'Claraval', modernName: 'Clairvaux, Francia', lat: 48.16, lng: 4.78, region: 'Galia' },
  { id: 'canterbury', name: 'Canterbury', modernName: 'Canterbury, Inglaterra', lat: 51.28, lng: 1.08, region: 'Islas Británicas' },
  { id: 'patmos', name: 'Patmos', modernName: 'Patmos, Grecia', lat: 37.31, lng: 26.55, region: 'Mar Egeo', dx: -10, dy: 6 },
  { id: 'edesa', name: 'Edesa', modernName: 'Şanlıurfa, Turquía', lat: 37.15, lng: 38.79, region: 'Mesopotamia' },
  { id: 'nicomedia', name: 'Nicomedia', modernName: 'İzmit, Turquía', lat: 40.77, lng: 29.92, region: 'Bitinia', dx: 16, dy: -4 },
  { id: 'tesalonica', name: 'Tesalónica', modernName: 'Tesalónica, Grecia', lat: 40.64, lng: 22.94, region: 'Macedonia' },
  { id: 'calcedonia', name: 'Calcedonia', modernName: 'Kadıköy, Turquía', lat: 40.99, lng: 29.03, region: 'Bósforo', dx: 12, dy: 12 },
  { id: 'bitinia', name: 'Bitinia', modernName: 'NO de Anatolia, Turquía', lat: 40.4, lng: 31.2, region: 'Asia Menor' },
];

export const ENLACES: Enlace[] = [
  // Roma
  { placeId: 'roma', source: 'siglos', year: 64 },
  { placeId: 'roma', source: 'siglos', year: 144 },
  { placeId: 'roma', source: 'siglos', year: 165 },
  { placeId: 'roma', source: 'siglos', year: 410 },
  { placeId: 'roma', source: 'siglos', year: 476 },
  { placeId: 'roma', source: 'siglos', year: 590 },
  { placeId: 'roma', source: 'siglos', year: 800 },
  { placeId: 'roma', source: 'errores', year: 593 },
  { placeId: 'roma', source: 'errores', year: 1059 },
  { placeId: 'roma', source: 'concilios', year: 1123 },
  { placeId: 'roma', source: 'concilios', year: 1139 },
  { placeId: 'roma', source: 'concilios', year: 1179 },
  { placeId: 'roma', source: 'concilios', year: 1215 },
  // Constantinopla
  { placeId: 'constantinopla', source: 'siglos', year: 537 },
  { placeId: 'constantinopla', source: 'siglos', year: 680 },
  { placeId: 'constantinopla', source: 'siglos', year: 1054 },
  { placeId: 'constantinopla', source: 'concilios', year: 381 },
  { placeId: 'constantinopla', source: 'concilios', year: 553 },
  { placeId: 'constantinopla', source: 'concilios', year: 870 },
  // Jerusalén
  { placeId: 'jerusalen', source: 'siglos', year: 30 },
  { placeId: 'jerusalen', source: 'siglos', year: 70 },
  { placeId: 'jerusalen', source: 'siglos', year: 638 },
  { placeId: 'jerusalen', source: 'siglos', year: 1187 },
  // Antioquía
  { placeId: 'antioquia', source: 'siglos', year: 107 },
  { placeId: 'antioquia', source: 'errores', year: 110 },
  // Alejandría
  { placeId: 'alejandria', source: 'siglos', year: 230 },
  // Cartago
  { placeId: 'cartago', source: 'siglos', year: 203 },
  { placeId: 'cartago', source: 'siglos', year: 250 },
  { placeId: 'cartago', source: 'siglos', year: 258 },
  { placeId: 'cartago', source: 'errores', year: 250 },
  // Lyon
  { placeId: 'lyon', source: 'siglos', year: 180 },
  { placeId: 'lyon', source: 'persecuciones', year: 177 },
  { placeId: 'lyon', source: 'concilios', year: 1245 },
  { placeId: 'lyon', source: 'concilios', year: 1274 },
  // Nicea
  { placeId: 'nicea', source: 'siglos', year: 325 },
  { placeId: 'nicea', source: 'concilios', year: 787 },
  // Éfeso
  { placeId: 'efeso', source: 'siglos', year: 100 },
  { placeId: 'efeso', source: 'siglos', year: 431 },
  { placeId: 'efeso', source: 'errores', year: 431 },
  // Esmirna
  { placeId: 'esmirna', source: 'siglos', year: 155 },
  // Milán
  { placeId: 'milan', source: 'siglos', year: 313 },
  // Hipona
  { placeId: 'hipona', source: 'siglos', year: 397 },
  // Monte Cassino
  { placeId: 'montecassino', source: 'siglos', year: 529 },
  // Irlanda
  { placeId: 'irlanda', source: 'siglos', year: 432 },
  // Hispania
  { placeId: 'hispania', source: 'siglos', year: 711 },
  // Poitiers
  { placeId: 'poitiers', source: 'siglos', year: 732 },
  // Moravia
  { placeId: 'moravia', source: 'siglos', year: 863 },
  // Cluny
  { placeId: 'cluny', source: 'siglos', year: 910 },
  // Kiev
  { placeId: 'kiev', source: 'siglos', year: 988 },
  // Canossa
  { placeId: 'canossa', source: 'siglos', year: 1077 },
  // Clermont
  { placeId: 'clermont', source: 'siglos', year: 1095 },
  { placeId: 'clermont', source: 'errores', year: 1095 },
  // Claraval
  { placeId: 'claraval', source: 'siglos', year: 1115 },
  // Canterbury
  { placeId: 'canterbury', source: 'siglos', year: 1170 },
  // Patmos
  { placeId: 'patmos', source: 'persecuciones', year: 95 },
  // Edesa
  { placeId: 'edesa', source: 'persecuciones', year: 257 },
  // Nicomedia
  { placeId: 'nicomedia', source: 'siglos', year: 303 },
  // Tesalónica
  { placeId: 'tesalonica', source: 'siglos', year: 380 },
  // Calcedonia
  { placeId: 'calcedonia', source: 'siglos', year: 451 },
  // Bitinia
  { placeId: 'bitinia', source: 'siglos', year: 112 },
];

// Trazado simplificado y estilizado de la cuenca del Mediterráneo, como pares
// [lng, lat]. Se proyecta con la MISMA función que las ciudades, de modo que los
// marcadores caen siempre del lado correcto de la costa. Es una ilustración
// sobria (no cartografía de precisión); sin fronteras políticas modernas.
export const COSTA_MEDITERRANEO: [number, number][] = [
  // Costa norte, de oeste a este
  [-5.6, 36.0], [-2.5, 36.8], [-0.5, 37.6], [0.1, 38.8], [0.0, 40.0], [1.0, 40.8],
  [3.2, 41.9], [4.8, 43.4], [7.5, 43.8], [9.0, 44.4], [10.2, 44.0], [11.0, 42.5],
  [12.3, 41.7], [13.6, 41.2], [14.2, 40.8], [15.3, 40.0], [15.6, 38.2],   // bota de Italia
  [16.5, 38.9], [17.2, 40.5], [18.5, 40.1], [16.0, 41.5], [14.0, 42.4], [13.5, 43.6],
  [12.5, 44.9], [12.4, 45.5], [13.6, 45.4], [15.2, 44.2], [16.7, 43.4], [18.1, 42.6],
  [19.3, 41.9], [19.5, 40.4], [20.2, 39.2], [21.1, 38.3], [21.6, 37.0], [22.5, 36.4],
  [23.2, 36.8], [23.6, 37.9], [24.0, 38.9], [23.7, 39.9], [22.9, 40.6], [24.0, 40.0],
  [25.9, 40.9], [26.2, 40.0], [26.7, 39.0], [27.0, 38.4], [27.3, 37.9], [27.5, 37.0],
  [29.1, 36.6], [30.6, 36.9], [32.0, 36.2], [34.6, 36.8], [35.9, 36.6],
  // Levante, de norte a sur
  [35.8, 35.5], [35.6, 34.4], [35.4, 33.6], [35.1, 33.0], [34.9, 32.5], [34.7, 31.9], [34.4, 31.5],
  // Norte de África, de este a oeste
  [32.6, 31.0], [31.5, 31.4], [29.9, 31.2], [27.5, 31.2], [24.0, 32.0], [21.8, 32.9],
  [20.0, 32.0], [18.5, 30.8], [16.5, 31.2], [15.2, 32.4], [13.2, 32.9], [11.1, 33.5],
  [10.3, 34.6], [10.6, 35.9], [10.9, 36.5], [10.5, 37.2], [9.8, 37.3], [8.0, 37.0], [5.8, 36.9],
  [3.1, 36.8], [0.0, 36.0], [-1.9, 35.4], [-3.9, 35.4], [-5.4, 35.8],
];

// Islas dibujadas como pequeñas elipses (centro [lng, lat], radio en píxeles).
export const ISLAS: { lng: number; lat: number; r: number }[] = [
  { lng: 14.1, lat: 37.5, r: 20 }, // Sicilia
  { lng: 9.0, lat: 40.1, r: 15 },  // Cerdeña
  { lng: 9.1, lat: 42.2, r: 11 },  // Córcega
  { lng: 24.9, lat: 35.2, r: 17 }, // Creta
  { lng: 33.3, lat: 35.1, r: 13 }, // Chipre
  { lng: 2.9, lat: 39.6, r: 8 },   // Baleares
  { lng: 26.55, lat: 37.31, r: 4 },// Patmos
];
