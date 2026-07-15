// Generato automaticamente il 2026-07-15 14:57 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1784127434;

const RSS_SOURCES = [
  {
    "name": "ANSA",
    "url": "https://www.ansa.it/sito/ansait_rss.xml",
    "cat": "politica-italiana"
  },
  {
    "name": "Corriere",
    "url": "https://xml2.corrieredellasera.it/rss/homepage.xml",
    "cat": "politica-italiana"
  },
  {
    "name": "Il Post",
    "url": "https://www.ilpost.it/feed/",
    "cat": "politica-italiana"
  },
  {
    "name": "Sky TG24",
    "url": "https://tg24.sky.it/feed/rss.xml",
    "cat": "politica-italiana"
  },
  {
    "name": "AGI",
    "url": "https://www.agi.it/feed/rss.xml",
    "cat": "politica-italiana"
  },
  {
    "name": "Pagella Politica",
    "url": "https://pagellapolitica.it/feed",
    "cat": "politica-italiana"
  },
  {
    "name": "Facta",
    "url": "https://facta.news/feed/",
    "cat": "politica-italiana"
  },
  {
    "name": "Valigia Blu",
    "url": "https://www.valigiablu.it/feed/",
    "cat": "politica-italiana"
  },
  {
    "name": "Limes",
    "url": "https://www.limesonline.com/feed",
    "cat": "geopolitica"
  },
  {
    "name": "Internazionale",
    "url": "https://www.internazionale.it/feed/tutto",
    "cat": "geopolitica"
  },
  {
    "name": "BBC World",
    "url": "https://feeds.bbci.co.uk/news/world/rss.xml",
    "cat": "geopolitica"
  },
  {
    "name": "AP",
    "url": "https://apnews.com/hub/world-news?output=rss",
    "cat": "geopolitica"
  },
  {
    "name": "The Economist",
    "url": "https://www.economist.com/international/rss.xml",
    "cat": "geopolitica"
  },
  {
    "name": "El Pais",
    "url": "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada",
    "cat": "geopolitica"
  },
  {
    "name": "Reuters",
    "url": "https://feeds.reuters.com/reuters/worldNews",
    "cat": "conflitti"
  },
  {
    "name": "Al Jazeera",
    "url": "https://www.aljazeera.com/xml/rss/all.xml",
    "cat": "conflitti"
  },
  {
    "name": "AP conflitti",
    "url": "https://apnews.com/hub/wars-and-conflicts?output=rss",
    "cat": "conflitti"
  },
  {
    "name": "The Verge",
    "url": "https://www.theverge.com/rss/index.xml",
    "cat": "ai"
  },
  {
    "name": "Wired IT",
    "url": "https://www.wired.it/feed/rss",
    "cat": "ai"
  },
  {
    "name": "TechCrunch",
    "url": "https://techcrunch.com/feed/",
    "cat": "ai"
  },
  {
    "name": "Il Post Tech",
    "url": "https://www.ilpost.it/tecnologia/feed/",
    "cat": "ai"
  },
  {
    "name": "Il Sole 24 Ore",
    "url": "https://www.ilsole24ore.com/rss/economia.xml",
    "cat": "economia-tech"
  },
  {
    "name": "Bloomberg Tech",
    "url": "https://feeds.bloomberg.com/technology/news.rss",
    "cat": "economia-tech"
  },
  {
    "name": "Financial Times",
    "url": "https://www.ft.com/rss/home",
    "cat": "economia-tech"
  },
  {
    "name": "The Economist Ec",
    "url": "https://www.economist.com/business/rss.xml",
    "cat": "economia-tech"
  }
];

const NEWS = [
  {
    id: 1,
    cat: "politica-italiana",
    title: "Legge elettorale: Ciriani: 'Il governo non si ferma'. In Aula bocciato l'emendamento dei vannacciani, ma sono 130 i sì",
    summary: "Il ministro dei Rapporti con il Parlamento risponde sulla posizione dell'esecutivo dopo la sconfitta sulle preferenze in Aula. Schlein: 'Elezioni a settembre? Noi siamo pronti in ogni momento'",
    body: "Il ministro dei Rapporti con il Parlamento risponde sulla posizione dell'esecutivo dopo la sconfitta sulle preferenze in Aula. Schlein: 'Elezioni a settembre? Noi siamo pronti in ogni momento'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/politica/2026/07/15/legge-elettorale-ciriani-il-nostro-governo-va-avanti-con-orgoglio_d2d28010-63c6-4a72-baa8-3527101899bf.html",
    time: "1 ora fa",
    pub_ts: 1784123548,
    tags: [],
  },
  {
    id: 2,
    cat: "geopolitica",
    title: "Iran threatens to block more trade routes as US launches fresh strikes",
    summary: "US President Donald Trump vowed to strike Iran's bridges and power plants next week if the country does not return to talks.",
    body: "US President Donald Trump vowed to strike Iran's bridges and power plants next week if the country does not return to talks.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c9323zgq6wvo?at_medium=RSS&at_campaign=rss",
    time: "2 ore fa",
    pub_ts: 1784118398,
    tags: [],
  },
  {
    id: 3,
    cat: "geopolitica",
    title: "China economic growth falls sharply, missing target",
    summary: "Weak demand domestically and the impact of the Iran war on oil prices overshadowed the country's strong exports.",
    body: "Weak demand domestically and the impact of the Iran war on oil prices overshadowed the country's strong exports.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cd959x4edy8o?at_medium=RSS&at_campaign=rss",
    time: "4 ore fa",
    pub_ts: 1784110908,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "Boss of fake government agency arrested in Nigeria after weeks on the run",
    summary: "The case has gripped Nigeria since President Bola Tinubu ordered a corruption investigation last week.",
    body: "The case has gripped Nigeria since President Bola Tinubu ordered a corruption investigation last week.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c17y7ykzgrgo?at_medium=RSS&at_campaign=rss",
    time: "5 ore fa",
    pub_ts: 1784108529,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "Desahuciada en Madrid la familia de Dulce, madre de cinco hijos, pese a la intervención de la ONU",
    summary: "El Comité de los Derechos del Niño pidió suspender el desalojo hasta lograr una solución habitacional con el objetivo de evitar “daños irreparables”",
    body: "Dulce y sus cinco hijos, tres de ellos menores de edad y el más pequeño con síndrome de Down, han sido desahuciados este miércoles del hogar donde residían en Moratalaz, propiedad de la Agencia de Vivienda Social de la Comunidad de Madrid. Junto a Herminio, llevaban residiendo cinco años en una casa en El Ruedo, a orillas de la M-30. Habían accedido a esta sin título, sin un contrato oficial del piso, tras varios intentos fallidos de conseguir una vivienda pública y de negociar un contrato de alquiler social para quedarse, según las asociaciones vecinales que durante tres horas han intentado frenar el actual desenlace entre la tristeza y la indignación.\n\nEl Comité de los Derechos del Niño de las Naciones Unidas pidió suspender el desalojo hasta lograr una solución habitacional con el objetivo de evitar “daños irreparables” a los menores. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/madrid/2026-07-15/desahuciada-en-madrid-la-familia-de-dulce-madre-de-cinco-hijos-pese-a-la-intervencion-de-la-onu.html",
    time: "18 min fa",
    pub_ts: 1784126316,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "Sánchez tras la desaparición de la Verja de Gibraltar: “Cae el último muro de la Europa continental”",
    summary: "El presidente del Gobierno ha presenciado el desmontaje de una de las puertas del lado español de la frontera",
    body: "Si los linenses se las ingeniaron para robarle palabras al inglés —ahí está liquirbá , regaliz, por liquorice bar— y los gibraltareños hicieron lo propio con otras tantas expresiones —voy para atrás, por go back —, ¿cómo no iba a existir un término para designar algo tan condicionante para sus vidas como la frontera? En llanito ese paso es la focona , una deformación fonética de Four Corners, conocida así por el cruce de caminos que fue en el siglo XIX.\n\nLuego llegó la Verja física, el hostigamiento y cierre franquista, la reapertura de los años 80, el terror fundado del Brexit duro y, desde esta medianoche, su desaparición , en derribo simbólico mediante en la parte gibraltareña. Apenas 12 horas después, Pedro Sánchez ha querido tener también su momento piqueta y ha asistido al desmontaje de una de las puertas que seguían allí abiertas. “Hoy cae el último muro de la Europa continental”, ha declarado el presidente español.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-07-15/sanchez-tras-la-desaparicion-de-la-verja-de-gibraltar-las-columnas-de-hercules-son-una-puerta-al-futuro-compartido.html",
    time: "3 ore fa",
    pub_ts: 1784114633,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "Feijóo acusa a Sánchez de ser un “presidente autoritario” ante los líderes del PP europeo",
    summary: "El líder popular reivindica el giro derechista en América Latina en un foro del PPE en Madrid con la participación de Keiko Fujimori",
    body: "Ante algunos de los principales líderes del Partido Popular Europeo, reunidos este miércoles en Madrid, Alberto Núñez Feijóo ha lanzado la acusación más gruesa hasta la fecha contra Pedro Sánchez. El líder del PP no ha dudado en describir al líder socialista como “un presidente autoritario” delante del presidente del Partido Popular Europeo, Manfred Weber; del vicepresidente de Italia, Antonio Tajani; y de los cientos de delegados de los conservadores europeos concentrados en un hotel de lujo de la capital.\n\n“Para reconocer a un autoritario basta con mirar qué quiere controlar”, ha reflexionado Feijóo ante el auditorio. Y ha añadido, en referencia a Sánchez: “Si recela de los jueces, si desprecia las mayorías parlamentarias cuando no le favorecen, si sustituye el mérito y el esfuerzo por la dependencia estatal, si cuestiona la independencia de las instituciones y si teme a las urnas si no le aseguran el poder, no busquen más: ¡Eso es un presidente autoritario!”.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-07-15/feijoo-acusa-a-sanchez-de-ser-un-presidente-autoritario-ante-los-lideres-del-pp-europeo.html",
    time: "4 ore fa",
    pub_ts: 1784111592,
    tags: [],
  },
  {
    id: 8,
    cat: "geopolitica",
    title: "When China’s open-source AI is a trap",
    summary: "America’s quest for AI dominance is scary. China is not the solution",
    body: "America’s quest for AI dominance is scary. China is not the solution",
    source: "The Economist",
    url: "https://www.economist.com/international/2026/07/14/when-chinas-open-source-ai-is-a-trap",
    time: "18 ore fa",
    pub_ts: 1784060249,
    tags: [],
  },
  {
    id: 9,
    cat: "conflitti",
    title: "Israeli air attack on Gaza apartment kills family of three",
    summary: "One child survives hit on Deir el-Balah home as Israel escalates attacks across territory despite October 'ceasefire'.",
    body: "One child survives hit on Deir el-Balah home as Israel escalates attacks across territory despite October 'ceasefire'.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/15/israeli-air-attack-on-gaza-apartment-kills-family-of-3?traffic_source=rss",
    time: "2 ore fa",
    pub_ts: 1784117471,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "‘Cycle of chaos’: Israel killing Gaza civil officials to derail its future",
    summary: "Israel's relentless Gaza attacks aim to sabotage the 'ceasefire' and ensure perpetual chaos, analysts warn.",
    body: "Israel's relentless Gaza attacks aim to sabotage the 'ceasefire' and ensure perpetual chaos, analysts warn.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/15/cycle-of-chaos-israel-killing-gaza-civil-officials-to-derail-its-future?traffic_source=rss",
    time: "3 ore fa",
    pub_ts: 1784115392,
    tags: [],
  },
  {
    id: 11,
    cat: "conflitti",
    title: "As the US restarts war on Iran, is its weapons stockpile running low?",
    summary: "The US has expended a significant number of munitions since the war began in February.",
    body: "The US has expended a significant number of munitions since the war began in February.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/15/as-the-us-restarts-war-on-iran-is-its-weapons-stockpile-running-low?traffic_source=rss",
    time: "2 ore fa",
    pub_ts: 1784120133,
    tags: [],
  },
  {
    id: 12,
    cat: "ai",
    title: "La causa di Apple è una rogna per OpenAI",
    summary: "Da tempo l'azienda che sviluppa ChatGPT dice che sta sviluppando dispositivi che supereranno gli iPhone: un lungo contenzioso legale potrebbe rallentarla",
    body: "Da tempo l'azienda che sviluppa ChatGPT dice che sta sviluppando dispositivi che supereranno gli iPhone: un lungo contenzioso legale potrebbe rallentarla",
    source: "Il Post Tech",
    url: "https://www.ilpost.it/2026/07/14/causa-apple-openai/",
    time: "1 giorno fa",
    pub_ts: 1784023422,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "Si sa qualcosa in più sul misterioso dispositivo a cui sta lavorando OpenAI",
    summary: "Secondo quanto rivelato da un dipendente dell'azienda a Bloomberg sarà un assistente vocale AI con «caratteristiche umane» e in grado di muoversi",
    body: "Secondo quanto rivelato da un dipendente dell'azienda a Bloomberg sarà un assistente vocale AI con «caratteristiche umane» e in grado di muoversi",
    source: "Il Post Tech",
    url: "https://www.ilpost.it/2026/07/15/open-ai-misterioso-dispositivo/",
    time: "6 ore fa",
    pub_ts: 1784103119,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "Perché i chatbot sono fissati con: “Non è X, è Y”?",
    summary: "È una struttura ricorrente dei testi prodotti con ChatGPT e altri software, molto più che nella scrittura umana",
    body: "È una struttura ricorrente dei testi prodotti con ChatGPT e altri software, molto più che nella scrittura umana",
    source: "Il Post Tech",
    url: "https://www.ilpost.it/2026/07/13/chatbot-non-solo-x-ma-y/",
    time: "1 giorno fa",
    pub_ts: 1783955980,
    tags: [],
  },
  {
    id: 15,
    cat: "ai",
    title: "OpenAI researcher Miles Wang in talks to launch AI drug discovery startup valued at $2B",
    summary: "The funding discussions point to investor interest in applying AI to make breakthroughs in life sciences.",
    body: "The funding discussions point to investor interest in applying AI to make breakthroughs in life sciences.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/14/openai-researcher-miles-wang-in-talks-to-launch-ai-drug-discovery-startup-valued-at-2b/",
    time: "14 ore fa",
    pub_ts: 1784075224,
    tags: [],
  },
  {
    id: 16,
    cat: "ai",
    title: "OpenAI’s first hardware device is reportedly a screenless speaker that can move",
    summary: "The device is weirdly described as involving \"mechanical elements that can move on their own\" and the Bloomberg report includes the detail that the device is designed to \"feel like a companion and become a physical manifestation of OpenAI’s ChatGPT.\"",
    body: "The device is weirdly described as involving \"mechanical elements that can move on their own\" and the Bloomberg report includes the detail that the device is designed to \"feel like a companion and become a physical manifestation of OpenAI’s ChatGPT.\"",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/14/openais-first-hardware-device-is-reportedly-a-screenless-speaker-that-can-move/",
    time: "16 ore fa",
    pub_ts: 1784067744,
    tags: [],
  },
  {
    id: 17,
    cat: "ai",
    title: "OpenAI’s new flagship model deletes files on its own, people keep warning",
    summary: "A number of social media posts claim that GPT-5.6 Sol deleted files and data without warning. OpenAI had basically disclosed the problem in June.",
    body: "A number of social media posts claim that GPT-5.6 Sol deleted files and data without warning. OpenAI had basically disclosed the problem in June.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/14/openais-new-flagship-model-deletes-files-on-its-own-people-keep-warning/",
    time: "17 ore fa",
    pub_ts: 1784065811,
    tags: [],
  },
  {
    id: 18,
    cat: "ai",
    title: "Spotify’s Daniel Ek is bringing his body-scanning clinics to the US",
    summary: "Spotify founder Daniel Ek's body-scanning startup, Neko Health, is setting its sights on the United States after raising $700 million from a star-studded group of celebrities, entrepreneurs, and investment firms. It plans to open its first clinic in New York this year before expanding rapidly across the country. Neko operates private clinics offering full-body scans",
    body: "Health startup Neko Health was founded by Hjalmar Nilsonne, left, and Daniel Ek, right. | Image: Neko Health Spotify founder Daniel Ek's body-scanning startup, Neko Health, is setting its sights on the United States after raising $700 million from a star-studded group of celebrities, entrepreneurs, and investment firms. It plans to open its first clinic in New York this year before expanding rapidly across the country.\n\nNeko operates private clinics offering full-body scans and blood tests using AI and custom-built medical equipment. Scans are designed to proactively screen customers for conditions including skin cancer, heart disease, and diabetes. The company says its goal is to catch problems early, prevent disease, and help people live longer. …",
    source: "The Verge",
    url: "https://www.theverge.com/science/965849/spotify-founder-ek-startup-neko-health-scanner-us-push",
    time: "4 ore fa",
    pub_ts: 1784110427,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "La Ue vara il codice per contrastare foto e video manipolati dall’AI",
    summary: "Falsi dottori che offrono consigli sbagliati. Ministri delle finanze che suggeriscono investimenti. Volti e voci di celebrità che chiedono aiuto per qualcuno. I video fake sono sempre più numerosi, dall’India...",
    body: "Falsi dottori che offrono consigli sbagliati. Ministri delle finanze che suggeriscono investimenti. Volti e voci di celebrità che chiedono aiuto per qualcuno. I video fake sono sempre più numerosi, dall’India...",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/la-ue-vara-codice-contrastare-foto-e-video-manipolati-dall-ai-AJQidcJ",
    time: "7 ore fa",
    pub_ts: 1784098805,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "Rai, Mediaset e Sky al 67% ma piattaforme in crescita e ormai quarto polo",
    summary: "Rai, Sky e Mediaset conservano il comando, ma il loro recinto si restringe. I tre maggiori operatori controllano ancora il 67% del mercato italiano della Tv: Rai al 26,6%, Comcast-Sky...",
    body: "Rai, Sky e Mediaset conservano il comando, ma il loro recinto si restringe. I tre maggiori operatori controllano ancora il 67% del mercato italiano della Tv: Rai al 26,6%, Comcast-Sky...",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/rai-mediaset-e-sky-67percento-ma-piattaforme-crescita-e-ormai-quarto-polo-AJplUUJ",
    time: "11 ore fa",
    pub_ts: 1784085045,
    tags: [],
  },
  {
    id: 21,
    cat: "economia-tech",
    title: "L’AI delle Pmi passa dai distretti: serve un dataspace industriale",
    summary: "L’intelligenza artificiale è un mercato in crescita e in Italia vale 1,8 miliardi: +50% su base annua. Germania, Francia, Regno Unito e Paesi Bassi sono più avanti: hanno strategie consolidate...",
    body: "L’intelligenza artificiale è un mercato in crescita e in Italia vale 1,8 miliardi: +50% su base annua. Germania, Francia, Regno Unito e Paesi Bassi sono più avanti: hanno strategie consolidate...",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/l-ai-pmi-passa-distretti-serve-dataspace-industriale-AJuFSQJ",
    time: "23 ore fa",
    pub_ts: 1784044200,
    tags: [],
  },
  {
    id: 22,
    cat: "economia-tech",
    title: "China’s economy grows at one of lowest rates in decades",
    summary: "Second-quarter GDP figure falls below annual target range as economic pressure mounts",
    body: "Second-quarter GDP figure falls below annual target range as economic pressure mounts",
    source: "Financial Times",
    url: "https://www.ft.com/content/5b12e491-dcd0-4e0c-a464-96ec37b737ab",
    time: "9 ore fa",
    pub_ts: 1784094815,
    tags: [],
  },
  {
    id: 23,
    cat: "economia-tech",
    title: "Morgan Stanley wealth management boosted by SpaceX millionaires",
    summary: "Investment bank becomes latest to shatter forecasts on back of AI boom",
    body: "Investment bank becomes latest to shatter forecasts on back of AI boom",
    source: "Financial Times",
    url: "https://www.ft.com/content/fff726e3-42df-4525-bb8e-278254932a48",
    time: "3 ore fa",
    pub_ts: 1784115814,
    tags: [],
  },
  {
    id: 24,
    cat: "economia-tech",
    title: "BlackRock assets rise to record $15.3tn",
    summary: "Second-quarter net income at US-based asset manager jumped 20% to $1.9bn amid capital markets boom",
    body: "Second-quarter net income at US-based asset manager jumped 20% to $1.9bn amid capital markets boom",
    source: "Financial Times",
    url: "https://www.ft.com/content/ea81b3ad-8154-421b-aeae-01407877f548",
    time: "4 ore fa",
    pub_ts: 1784110251,
    tags: [],
  },
];
