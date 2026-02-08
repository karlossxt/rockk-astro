
import { Release, NewsItem } from './types';

export const RELEASES: Release[] = [
  {
    id: '1',
    title: 'Eternal Sunshine',
    artist: 'Ariana Grande',
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=400',
    spotifyUrl: '#'
  },
  {
    id: '2',
    title: 'Blue Lips',
    artist: 'Schoolboy Q',
    coverUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=400',
    spotifyUrl: '#'
  },
  {
    id: '3',
    title: 'Everything I Thought It Was',
    artist: 'Justin Timberlake',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400',
    spotifyUrl: '#'
  },
  {
    id: '4',
    title: 'Las Mujeres Ya No Lloran',
    artist: 'Shakira',
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400',
    spotifyUrl: '#'
  }
];

export const FRIENDS = [
  { name: 'Radio Kaos', logo: 'RK' },
  { name: 'Fanzine X', logo: 'FX' },
  { name: 'Underground Press', logo: 'UP' },
  { name: 'Sonic Labs', logo: 'SL' },
  { name: 'Riff Mag', logo: 'RM' },
  { name: 'Indie Soul', logo: 'IS' }
];

export const WEEKLY_PLAYLIST = [
  { title: 'Inhaler', artist: 'Your House', id: 'p1' },
  { title: 'The Voidz', artist: 'All the Same', id: 'p2' },
  { title: 'Fontaines D.C.', artist: 'Starburster', id: 'p3' },
  { title: 'Amyl and the Sniffers', artist: 'U Should Not Be Doing That', id: 'p4' },
  { title: 'IDLES', artist: 'Gift Horse', id: 'p5' }
];

export const NEWS: NewsItem[] = [
  {
    id: '101',
    title: 'El Renacimiento de los Paisajes Visuales',
    excerpt: 'Cómo los artistas contemporáneos están redefiniendo la relación entre la acústica y los visuales abstractos.',
    content: 'Estamos viviendo una era donde el sonido ya no basta. Los conciertos se han transformado en instalaciones de arte cinético. Artistas como Max Cooper o Ryoji Ikeda están empujando los límites de lo que el ojo puede procesar mientras el oído es bombardeado por frecuencias granulares. No es solo música, es una experiencia multisensorial que desafía la percepción misma de la realidad.',
    category: 'Cultura',
    imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800',
    date: '24 Oct, 2023',
    author: 'Elena Vance',
    featured: true
  },
  {
    id: '106',
    title: 'El Under Argentino: Más que una Moda',
    excerpt: 'Un recorrido por los sótanos de Buenos Aires donde el nuevo post-punk está gestando una revolución.',
    content: 'En los rincones oscuros de Almagro y Chacarita, el ruido está volviendo a su esencia. Bandas que rechazan el autotune y abrazan el feedback de amplificadores valvulares. Hay una urgencia en el aire, una necesidad de escupir verdades sobre ritmos motorik.',
    category: 'Escena Nacional',
    imageUrl: 'https://images.unsplash.com/photo-1514525253361-bee8d48700df?auto=format&fit=crop&q=80&w=800',
    date: '25 Oct, 2023',
    author: 'Franco Zurd',
    featured: true
  },
  {
    id: '108',
    title: 'Terror en 8-Bits: El fenómeno de lo Analógico',
    excerpt: '¿Por qué los gráficos de PS1 están aterrorizando a una nueva generación de gamers?',
    content: 'El horror indie ha encontrado su hogar en la nostalgia de lo poligonal. Juegos como los de Puppet Combo demuestran que la baja resolución permite que la imaginación rellene los huecos con miedos primarios. Es el regreso a lo táctil, a lo ruidoso, a lo que no se ve claramente pero se siente en la nuca.',
    category: 'BYTEMOS',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    date: '26 Oct, 2023',
    author: 'Gabi Byte',
    featured: true
  },
  {
    id: '102',
    title: 'Cine-Sónico: El Auge de las Bandas Sonoras',
    excerpt: 'Explorando por qué los compositores de cine recurren cada vez más a la síntesis ambiental.',
    content: 'El cine contemporáneo está abandonando las orquestas grandilocuentes por texturas de sintetizadores modulares. Desde el trabajo de Mica Levi hasta la distorsión de Trent Reznor.',
    category: 'Cine',
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
    date: '23 Oct, 2023',
    author: 'Mark Sterling'
  },
  {
    id: '109',
    title: 'Cyberpunk Local: Modding en el Tercer Mundo',
    excerpt: 'La cultura del modding en Latinoamérica como un acto de resistencia tecnológica.',
    content: 'Reparar consolas con piezas de desecho, traducir juegos de forma pirata y crear mundos que reflejan nuestras calles.',
    category: 'BYTEMOS',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    date: '27 Oct, 2023',
    author: 'Rafa Glitch'
  },
  {
  id: 'zoe-unplugged-15',
  title: 'ZOÉ: 15 AÑOS DE MÚSICA DE FONDO',
  category: 'Música',
  author: 'Karlos SXT',
  date: '08 FEB 2024',
  imageUrl: '/images/zoe-1.jpg', // Imagen principal (la del header)
  excerpt: 'A 15 años de su histórico MTV Unplugged, recordamos cómo Zoé redefinió el rock en español desde los Estudios Churubusco.',
  content: `Hace 15 años, en los Estudios Churubusco de la Ciudad de México, Zoé grabó lo que se convertiría en uno de los momentos más emblemáticos de su trayectoria: Unplugged: Música de Fondo. La sesión, fue el resultado de una dinámica organizada por la banda en Twitter, mediante la cual varios seguidores tuvieron la oportunidad de presenciar en vivo la grabación.\n\nEl concierto reunió a destacados invitados, entre ellos Denise Gutiérrez y el legendario Enrique Bunbury. El setlist incluyó 15 temas: reinterpretaciones acústicas de sus éxitos y una versión Deluxe de “Bésame Mucho”. El primer sencillo, “Sombras”, marcó un giro notable al dejar atrás los arreglos electrónicos, apostando por una propuesta más orgánica y atmosférica.\n\nMúsica de Fondo no solo se convirtió en el álbum más exitoso de la banda, sino que también redefinió su lugar en la industria. La producción obtuvo múltiples discos de platino y marcó un antes y un después en el panorama del rock en español de la década.\n\nQuince años después, Zoé sigue siendo un referente indiscutible. Música de Fondo permanece como testimonio de un momento en el que el rock mexicano alcanzó una de sus cimas más creativas y emocionales.`
},
{
  id: 'kiss-alive-50',
  title: 'A 50 AÑOS DE KISS ALIVE!: EL DISCO QUE CAMBIÓ LAS REGLAS',
  category: 'Música',
  author: 'Karlos SXT',
  date: '08 FEB 2026',
  imageUrl: '/images/kiss-alive.jpg',
  excerpt: 'Antes de 1975, los discos en vivo eran un trámite. Después de Kiss, se convirtieron en un arma de destrucción masiva.',
  content: `En los años sesenta y primeros setenta, los discos en directo eran rarezas. James Brown, The Who y Deep Purple habían dejado sus huellas, pero las discográficas los veían como un complemento, nunca como el centro de la estrategia. Kiss tenía un problema: su propuesta visual era imbatible, pero sus tres primeros discos no lograban capturar esa energía.\n\nLa solución fue radical: grabar un doble en vivo que mostrara a la banda tal cual se vivía en los escenarios. Alive! se lanzó el 10 de septiembre de 1975. Aunque gran parte del disco fue retocado en estudio para corregir voces y guitarras, Paul Stanley reconoció: "Capturamos la esencia. Si hubiera sido crudo, se habría perdido la magia".\n\nUn detalle de leyenda es la contraportada: Fin Costello captó de casualidad a dos adolescentes con un cartel hecho a mano. Eran Bruce Redoute y Lee Neaves, quienes se convirtieron en la imagen de la euforia de toda una generación.\n\nMedio siglo más tarde, Alive! no solo se escucha como testimonio de la fuerza de Kiss: se recuerda como el disco que salvó a su sello, Casablanca Records, y que probó que un álbum en directo podía ser más importante que uno de estudio.`
},
{
  id: 'andor-s2-politica',
  title: 'ANDOR TEMPORADA 2: LA REBELIÓN COMO REFLEJO DE LA REALIDAD',
  category: 'Cine',
  author: 'Karlos SXT',
  date: '08 FEB 2026',
  imageUrl: '/images/andor-s2.jpg',
  excerpt: 'Más que ciencia ficción, un comentario político brutal. La serie que abandona los sables de luz para hablarnos de vigilancia masiva y resistencia real.',
  content: `La segunda temporada de Andor no solo consolida su lugar como la serie más madura del universo Star Wars, sino que se convierte en un espejo incómodo de las realidades políticas que vivimos fuera de la pantalla. Tony Gilroy entrega una obra que abandona los sables de luz para sumergirse en los engranajes más oscuros de la resistencia: espionaje, vigilancia y sacrificios personales.\n\nEn lugar de enfrentamientos épicos, Andor nos da conversaciones encriptadas en pasillos fríos del Imperio y actos de violencia que, aunque justificables por la causa, no dejan de ser moralmente turbios. La vigilancia masiva resuena con ecos de dictaduras reales —desde los regímenes totalitarios del siglo XX hasta sistemas contemporáneos de opresión tecnológica.\n\nEste enfoque desmitifica el conflicto y lo acerca a luchas de resistencia históricas: movimientos antifascistas, la Guerra Civil Española y masacres reales como las de Tlatelolco 1968 o la Noche de los Lápices en 1976. Aquí, la Fuerza no interviene para salvar el día; son decisiones humanas, con consecuencias humanas.\n\nAndor es un recordatorio de que Star Wars siempre ha tratado sobre la lucha entre libertad y control. La diferencia es que ahora lo hace con la crudeza y profundidad de una serie que no teme parecerse demasiado a nuestra realidad.`
}
];
