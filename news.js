// Generato automaticamente il 2026-07-24 03:23 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1784863388;

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
    title: "L'Emilia-Romagna approva la legge sul fine vita, è la terza regione",
    summary: "Associazione Coscioni: 'Ora fare approvare progetto 'Liberi subito' in tutte le Regioni'",
    body: "Associazione Coscioni: 'Ora fare approvare progetto 'Liberi subito' in tutte le Regioni'",
    source: "ANSA",
    url: "https://www.ansa.it/emiliaromagna/notizie/2026/07/23/lemilia-romagna-approva-la-legge-sul-fine-vita-e-la-terza-regione_f1dcbeb2-1118-4bb1-a937-97ae95db810f.html",
    time: "8 ore fa",
    pub_ts: 1784833124,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Guerra ai baby-delinquenti, minori imputabili dai 14 anni",
    summary: "Meloni, 'Chi sbaglia risponde delle proprie azioni, anche i minorenni'. L'opposizione attacca",
    body: "Meloni, 'Chi sbaglia risponde delle proprie azioni, anche i minorenni'. L'opposizione attacca",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/politica/2026/07/23/guerra-ai-baby-delinquenti-minori-imputabili-dai-14-anni_1008440b-330b-4cf4-b62c-7a068dc7b39d.html",
    time: "6 ore fa",
    pub_ts: 1784841638,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "Stop alle piscine con bocchettoni non a norma e fondo da quasi 5 milioni",
    summary: "La stretta sulla sicurezza degli impianti è legge. In 2 anni 37 morti",
    body: "La stretta sulla sicurezza degli impianti è legge. In 2 anni 37 morti",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/politica/2026/07/23/dalla-camera-via-libera-bipartisan-alla-stretta-sulla-sicurezza-delle_a17e40c0-4100-4655-a21f-882d1275ac08.html",
    time: "11 ore fa",
    pub_ts: 1784823453,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "Houthi attacks raise fears of wider Middle East conflict and more global economic damage",
    summary: "The Iran-backed group in Yemen has threatened to target Saudi vessels in a vital shipping route.",
    body: "The Iran-backed group in Yemen has threatened to target Saudi vessels in a vital shipping route.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cvgve0vxy1yo?at_medium=RSS&at_campaign=rss",
    time: "1 ora fa",
    pub_ts: 1784858389,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "Los seis candidatos a liderar la ONU protagonizan un debate de guante blanco sin un vencedor claro",
    summary: "Las cuatro mujeres y dos hombres que aspiran a sustituir a Guterres en 2027 explican sus ideas para un organismo que lucha contra la irrelevancia en los grandes conflictos del mundo",
    body: "La carrera por el liderazgo de la ONU toma por fin vuelo. Tras las escaramuzas de los últimos meses, la batalla real comienza ahora. Dentro de una semana, los 15 miembros del Consejo de Seguridad se reunirán a puerta cerrada para estudiar las candidaturas. Es entonces cuando la cosa irá en serio. Como aperitivo, la Asamblea General ha acogido este jueves un debate público entre las cuatro mujeres y los dos hombres que han hecho oficial su deseo de sustituir al portugués António Guterres a partir de 2017.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/internacional/2026-07-24/los-seis-candidatos-a-liderar-la-onu-protagonizan-un-debate-de-guante-blanco-sin-un-vencedor-claro.html",
    time: "2 ore fa",
    pub_ts: 1784853968,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "Saudis must recognise Israel for nuclear deal, says Trump",
    summary: "The US president says the landmark agreement to help Saudis develop nuclear energy is dependent on it joining the Abraham Accords.",
    body: "The US president says the landmark agreement to help Saudis develop nuclear energy is dependent on it joining the Abraham Accords.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cwye71yq8wwo?at_medium=RSS&at_campaign=rss",
    time: "9 ore fa",
    pub_ts: 1784829482,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "Ukraine's ousted defence minister insists on being reinstated",
    summary: "Mykhailo Fedorov refuses President Zelensky's offer to accept an alternative post, as the battle of wills continues.",
    body: "Mykhailo Fedorov refuses President Zelensky's offer to accept an alternative post, as the battle of wills continues.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/ce97nm53pgxo?at_medium=RSS&at_campaign=rss",
    time: "9 ore fa",
    pub_ts: 1784828279,
    tags: [],
  },
  {
    id: 8,
    cat: "geopolitica",
    title: "El Gobierno propone a Yolanda Díaz como directora general de la OIT, el organismo de la ONU dedicado al trabajo",
    summary: "La vicepresidenta segunda aspira a desplazar al togolés Gilbert F. Houngbo, acusado por los sindicatos de alinearse con Trump. De ganar, Díaz no tomaría posesión del cargo hasta noviembre de 2027",
    body: "El Gobierno propone a Yolanda Díaz como directora general de la Organización Internacional del Trabajo ( OIT ), según ha podido saber EL PAÍS por fuentes conocedoras de la decisión y ha confirmado La Moncloa este jueves. La vicepresidenta segunda y ministra de Trabajo plantará cara a Gilbert F. Houngbo , que dirige desde 2022 la agencia de la ONU dedicada a las relaciones laborales. Los sindicatos españoles vienen criticando la “ deriva trumpista ” del organismo bajo la dirección del togolés, mensaje en el que profundizó Díaz en su última intervención en la sede de la OIT, en Ginebra (Suiza).\n\n“La OIT está en crisis y es relevante porque lo que está en juego es su mandato. Si el trabajo no es una mercancía, tampoco puede serlo la organización que representa el trabajo”, dijo el 9 de junio la vicepresidenta segunda y ministra de Trabajo. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/economia/2026-07-23/el-gobierno-propone-a-yolanda-diaz-como-directora-general-de-la-oit-el-organismo-de-la-onu-dedicado-al-trabajo.html",
    time: "20 ore fa",
    pub_ts: 1784789174,
    tags: [],
  },
  {
    id: 9,
    cat: "conflitti",
    title: "Ukraine’s Zelenskyy meets with far-right US activist Laura Loomer",
    summary: "Pro-Israel Trump ally sits down with Ukrainian president as she says Russia is helping Iran kill US soldiers.",
    body: "Pro-Israel Trump ally sits down with Ukrainian president as she says Russia is helping Iran kill US soldiers.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/24/ukraine-zelenskyy-meets-with-trump-ally-laura-loomer?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1784857767,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "Israel bombs Gaza after displacement orders, kills two Palestinians",
    summary: "Humanitarian situation in Gaza is 'desperate', UN official says, as Israeli violations of 'ceasefire' intensify.",
    body: "Humanitarian situation in Gaza is 'desperate', UN official says, as Israeli violations of 'ceasefire' intensify.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/24/israel-bombs-gaza-after-displacement-orders-kills-two-palestinians?traffic_source=rss",
    time: "2 ore fa",
    pub_ts: 1784852948,
    tags: [],
  },
  {
    id: 11,
    cat: "conflitti",
    title: "Iran war live: US completes 13th night of strikes on Iran",
    summary: "Trump says he is considering a ‘massive attack’, as Iran's Araghchi says 'mindless aggression' won't help a deal.",
    body: "Trump says he is considering a ‘massive attack’, as Iran's Araghchi says 'mindless aggression' won't help a deal.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/liveblog/2026/7/24/iran-war-live-trump-weighs-massive-attack-on-iran?traffic_source=rss",
    time: "3 ore fa",
    pub_ts: 1784851200,
    tags: [],
  },
  {
    id: 12,
    cat: "ai",
    title: "Quanto possiamo fidarci delle AI che fanno da sole?",
    summary: "Per superare un test, due modelli di intelligenza artificiale di OpenAI hanno preso una strada imprevista: attaccare un’altra azienda",
    body: "Per superare un test, due modelli di intelligenza artificiale di OpenAI hanno preso una strada imprevista: attaccare un’altra azienda",
    source: "Il Post Tech",
    url: "https://www.ilpost.it/2026/07/22/agenti-intelligenza-artificiale-openai-hugging-face/",
    time: "1 giorno fa",
    pub_ts: 1784734397,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "How AI guardrails are impeding the work of offensive cybersecurity researchers",
    summary: "We spoke with several cybersecurity researchers, who look for unknown vulnerabilities and develop tools to exploit them, about how OpenAI’s and Anthropic’s guardrails affect their work.",
    body: "We spoke with several cybersecurity researchers, who look for unknown vulnerabilities and develop tools to exploit them, about how OpenAI’s and Anthropic’s guardrails affect their work.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/23/how-ai-guardrails-are-impeding-the-work-of-offensive-cybersecurity-researchers/",
    time: "2 ore fa",
    pub_ts: 1784854800,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "Claude’s voice mode is now available for Opus and Sonnet",
    summary: "Until now, voice mode has only been available on Claude Haiku, Anthropic's faster but less powerful model. Now the company is making its Opus and Sonnet models available in voice mode, and extending its reach into apps like Gmail, Slack, and Canva. When Anthropic launched voice mode last year, it was primarily focused on delivering",
    body: "Until now, voice mode has only been available on Claude Haiku , Anthropic's faster but less powerful model. Now the company is making its Opus and Sonnet models available in voice mode , and extending its reach into apps like Gmail, Slack, and Canva. When Anthropic launched voice mode last year, it was primarily focused on delivering answers to quick questions with minimal delay. But in a blog post, the company said people immediately started using voice mode for far more than casual queries.\n\nThey were using it to work \"through real business problems,\" which Haiku was not really designed for. That model \"kept conversations quick, but not alwa …",
    source: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/970065/anthropic-voice-mode-claude-opus-sonnet-haiku-ai",
    time: "8 ore fa",
    pub_ts: 1784833200,
    tags: [],
  },
  {
    id: 15,
    cat: "ai",
    title: "Anthropic updates Claude voice mode with more capable models",
    summary: "Claude's new voice model will let you reschedule your meeting or draft an email.",
    body: "Claude's new voice model will let you reschedule your meeting or draft an email.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/23/anthropic-updates-claude-voice-mode-with-more-capable-models/",
    time: "8 ore fa",
    pub_ts: 1784833200,
    tags: [],
  },
  {
    id: 16,
    cat: "ai",
    title: "OpenAI is making big claims as it rolls out ChatGPT Health to everyone",
    summary: "OpenAI is rolling out ChatGPT Health to everyone in the US on Thursday, allowing more people to connect their medical records and health-tracking information to the chatbot. During a briefing, Ashley Alexander, OpenAI's vice president of health product, says the company's models \"are now capable of reasoning at levels that are better than clinician level.\"",
    body: "OpenAI is rolling out ChatGPT Health to everyone in the US on Thursday, allowing more people to connect their medical records and health-tracking information to the chatbot. During a briefing, Ashley Alexander, OpenAI's vice president of health product, says the company's models \"are now capable of reasoning at levels that are better than clinician level.\" When asked for more information about how the performance of OpenAI's models stacks up against human clinicians, OpenAI health lead Karan Singhal says that he would \"temper\" the claim that they are reasoning at better levels, but that \"there have been individual studies that have been poi …",
    source: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/970115/openai-chatgpt-health-launch-claims",
    time: "10 ore fa",
    pub_ts: 1784826000,
    tags: [],
  },
  {
    id: 17,
    cat: "ai",
    title: "OpenAI makes ChatGPT Health available to all US users",
    summary: "Users can also integrate their personal data from services like Apple Health, Function, and MyFitnessPal.",
    body: "Users can also integrate their personal data from services like Apple Health, Function, and MyFitnessPal.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/23/openai-makes-chatgpt-health-available-to-all-u-s-users/",
    time: "10 ore fa",
    pub_ts: 1784826000,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "R&S, La startup campana KforB produrrà nanocellulosa batterica",
    summary: "La società Knowledge for Business realizza investe 1,2 milioni in un nuovo impianto e in un nuovo progetto di ricerca",
    body: "La società Knowledge for Business realizza investe 1,2 milioni in un nuovo impianto e in un nuovo progetto di ricerca",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/rs-startup-campana-kforb-produrra-nanocellulosa-batterica-AJQOfQS",
    time: "18 ore fa",
    pub_ts: 1784797321,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "South Korea’s cash-rich winners of AI boom go on US buying spree",
    summary: "Companies make biggest US investment push in years to build up tech capabilities and avoid Donald Trump’s tariffs",
    body: "Companies make biggest US investment push in years to build up tech capabilities and avoid Donald Trump’s tariffs",
    source: "Financial Times",
    url: "https://www.ft.com/content/8ebab4c1-f36a-455e-a3d1-b36247296669?syn-25a6b1a6=1",
    time: "16 min fa",
    pub_ts: 1784862395,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "SK Hynix, Samsung and Kioxia Face Pivotal Earnings Test on AI Swings",
    summary: "SK Hynix Inc. and Samsung Electronics Co. are set to test investor appetite for memory chips as South Korea’s stock market — now a bellwether for global AI sentiment — grapples with violent swings driven by leveraged chip bets.",
    body: "SK Hynix Inc. and Samsung Electronics Co. are set to test investor appetite for memory chips as South Korea’s stock market — now a bellwether for global AI sentiment — grapples with violent swings driven by leveraged chip bets.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-24/sk-hynix-samsung-and-kioxia-face-pivotal-earnings-test-on-ai-swings",
    time: "2 ore fa",
    pub_ts: 1784855907,
    tags: [],
  },
  {
    id: 21,
    cat: "economia-tech",
    title: "Top Environmental Fund Sees Japan Key to AI Energy Challenge",
    summary: "Asia’s best-performing environmental fund has increased exposure to Japan as it expects the nation’s technology sector to prove increasingly pivotal in solving the artificial intelligence industry’s surging power demands.",
    body: "Asia’s best-performing environmental fund has increased exposure to Japan as it expects the nation’s technology sector to prove increasingly pivotal in solving the artificial intelligence industry’s surging power demands.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-24/top-environmental-fund-sees-japan-key-to-ai-energy-challenge",
    time: "3 ore fa",
    pub_ts: 1784851440,
    tags: [],
  },
  {
    id: 22,
    cat: "economia-tech",
    title: "Robotics Startup Genesis in Talks to Raise About $500 Million",
    summary: "AI robotics startup Genesis AI is in talks with investors to raise around $500 million in a new funding round, according to people familiar with the efforts.",
    body: "AI robotics startup Genesis AI is in talks with investors to raise around $500 million in a new funding round, according to people familiar with the efforts.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-23/robotics-startup-genesis-in-talks-to-raise-about-500-million",
    time: "5 ore fa",
    pub_ts: 1784845213,
    tags: [],
  },
  {
    id: 23,
    cat: "economia-tech",
    title: "The US needs a new Manhattan Project for fusion energy",
    summary: "If we are to outpace China and own the future of this technology, we must fund it properly",
    body: "If we are to outpace China and own the future of this technology, we must fund it properly",
    source: "Financial Times",
    url: "https://www.ft.com/content/822f5326-d93b-4b9d-b43f-58113da909b1",
    time: "10 ore fa",
    pub_ts: 1784826784,
    tags: [],
  },
];
