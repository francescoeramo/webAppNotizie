// Generato automaticamente il 2026-07-23 19:35 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1784835300;

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
    title: "Varato il decreto legge anti-maranza, minorenni sempre imputabili tra i 14 e i 18 anni",
    summary: "Meloni, 'Chi sbaglia risponde delle proprie azioni, anche i minorenni'. L'opposizione attacca",
    body: "Meloni, 'Chi sbaglia risponde delle proprie azioni, anche i minorenni'. L'opposizione attacca",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/politica/2026/07/23/varato-il-decreto-legge-anti-maranza-minorenni-sempre-imputabili-tra-i-14-e-i-18-anni_1008440b-330b-4cf4-b62c-7a068dc7b39d.html",
    time: "15 min fa",
    pub_ts: 1784834386,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "L'Emilia-Romagna approva la legge sul fine vita, è la terza regione",
    summary: "Associazione Coscioni: 'Ora fare approvare progetto 'Liberi subito' in tutte le Regioni'",
    body: "Associazione Coscioni: 'Ora fare approvare progetto 'Liberi subito' in tutte le Regioni'",
    source: "ANSA",
    url: "https://www.ansa.it/emiliaromagna/notizie/2026/07/23/lemilia-romagna-approva-la-legge-sul-fine-vita-e-la-terza-regione_f1dcbeb2-1118-4bb1-a937-97ae95db810f.html",
    time: "36 min fa",
    pub_ts: 1784833124,
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
    time: "3 ore fa",
    pub_ts: 1784823453,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "Saudis must recognise Israel for nuclear deal, says Trump",
    summary: "The US president says the landmark agreement to help Saudis develop nuclear energy is dependent on it joining the Abraham Accords.",
    body: "The US president says the landmark agreement to help Saudis develop nuclear energy is dependent on it joining the Abraham Accords.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cwye71yq8wwo?at_medium=RSS&at_campaign=rss",
    time: "1 ora fa",
    pub_ts: 1784829482,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "Ukraine's ousted defence minister insists on being reinstated",
    summary: "Mykhailo Fedorov refuses President Zelensky's offer to accept an alternative post, as the battle of wills continues.",
    body: "Mykhailo Fedorov refuses President Zelensky's offer to accept an alternative post, as the battle of wills continues.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/ce97nm53pgxo?at_medium=RSS&at_campaign=rss",
    time: "1 ora fa",
    pub_ts: 1784828279,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "Houthi attacks raise fears of wider Middle East conflict and more global economic damage",
    summary: "The Iran-backed group in Yemen has threatened to target Saudi vessels in a vital shipping route.",
    body: "The Iran-backed group in Yemen has threatened to target Saudi vessels in a vital shipping route.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cvgve0vxy1yo?at_medium=RSS&at_campaign=rss",
    time: "2 ore fa",
    pub_ts: 1784826368,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "El Gobierno propone a Yolanda Díaz como directora general de la OIT, el organismo de la ONU dedicado al trabajo",
    summary: "La vicepresidenta segunda aspira a desplazar al togolés Gilbert F. Houngbo, acusado por los sindicatos de alinearse con Trump. De ganar, Díaz no tomaría posesión del cargo hasta noviembre de 2027",
    body: "El Gobierno propone a Yolanda Díaz como directora general de la Organización Internacional del Trabajo ( OIT ), según ha podido saber EL PAÍS por fuentes conocedoras de la decisión y ha confirmado La Moncloa este jueves. La vicepresidenta segunda y ministra de Trabajo plantará cara a Gilbert F. Houngbo , que dirige desde 2022 la agencia de la ONU dedicada a las relaciones laborales. Los sindicatos españoles vienen criticando la “ deriva trumpista ” del organismo bajo la dirección del togolés, mensaje en el que profundizó Díaz en su última intervención en la sede de la OIT, en Ginebra (Suiza).\n\n“La OIT está en crisis y es relevante porque lo que está en juego es su mandato. Si el trabajo no es una mercancía, tampoco puede serlo la organización que representa el trabajo”, dijo el 9 de junio la vicepresidenta segunda y ministra de Trabajo. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/economia/2026-07-23/el-gobierno-propone-a-yolanda-diaz-como-directora-general-de-la-oit-el-organismo-de-la-onu-dedicado-al-trabajo.html",
    time: "12 ore fa",
    pub_ts: 1784789174,
    tags: [],
  },
  {
    id: 8,
    cat: "geopolitica",
    title: "The Iran war is consuming the Trump presidency",
    summary: "Donald Trump may hate to hear it, but Barack Obama was right about avoiding “stupid shit”",
    body: "Donald Trump may hate to hear it, but Barack Obama was right about avoiding “stupid shit”",
    source: "The Economist",
    url: "https://www.economist.com/international/2026/07/21/the-iran-war-is-consuming-the-trump-presidency",
    time: "1 giorno fa",
    pub_ts: 1784666552,
    tags: [],
  },
  {
    id: 9,
    cat: "conflitti",
    title: "US House votes to limit Iran war for first time since ceasefire breakdown",
    summary: "Senate fails to pass latest War Powers resolution, in largely symbolic move attempting to reign in Trump.",
    body: "Senate fails to pass latest War Powers resolution, in largely symbolic move attempting to reign in Trump.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/23/us-house-votes-to-limit-iran-war-for-first-time-since-ceasefire-breakdown?traffic_source=rss",
    time: "3 ore fa",
    pub_ts: 1784823163,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "Has Russia helped Iran target CIA sites in the Gulf?",
    summary: "Reports of Iran targeting sites belonging to the US's CIA first emerged in the early days of the Iran war.",
    body: "Reports of Iran targeting sites belonging to the US's CIA first emerged in the early days of the Iran war.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/23/has-russia-helped-iran-target-cia-sites-in-the-gulf?traffic_source=rss",
    time: "5 ore fa",
    pub_ts: 1784816311,
    tags: [],
  },
  {
    id: 11,
    cat: "conflitti",
    title: "Iraqi PM makes first official visit to Iran in bid to deepen ties",
    summary: "Ali al-Zaidi will hold talks with senior Iranian officials on cooperation, shared interests and security.",
    body: "Ali al-Zaidi will hold talks with senior Iranian officials on cooperation, shared interests and security.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/23/iraqi-pm-makes-first-official-visit-to-iran-to-deepen-ties?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1784831681,
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
    title: "Claude’s voice mode is now available for Opus and Sonnet",
    summary: "Until now, voice mode has only been available on Claude Haiku, Anthropic's faster but less powerful model. Now the company is making its Opus and Sonnet models available in voice mode, and extending its reach into apps like Gmail, Slack, and Canva. When Anthropic launched voice mode last year, it was primarily focused on delivering",
    body: "Until now, voice mode has only been available on Claude Haiku , Anthropic's faster but less powerful model. Now the company is making its Opus and Sonnet models available in voice mode , and extending its reach into apps like Gmail, Slack, and Canva. When Anthropic launched voice mode last year, it was primarily focused on delivering answers to quick questions with minimal delay. But in a blog post, the company said people immediately started using voice mode for far more than casual queries.\n\nThey were using it to work \"through real business problems,\" which Haiku was not really designed for. That model \"kept conversations quick, but not alwa …",
    source: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/970065/anthropic-voice-mode-claude-opus-sonnet-haiku-ai",
    time: "35 min fa",
    pub_ts: 1784833200,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "Anthropic updates Claude voice mode with more capable models",
    summary: "Claude's new voice model will let you reschedule your meeting or draft an email",
    body: "Claude's new voice model will let you reschedule your meeting or draft an email",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/23/anthropic-updates-claude-voice-mode-with-more-capable-models/",
    time: "35 min fa",
    pub_ts: 1784833200,
    tags: [],
  },
  {
    id: 15,
    cat: "ai",
    title: "OpenAI is making big claims as it rolls out ChatGPT Health to everyone",
    summary: "OpenAI is rolling out ChatGPT Health to everyone in the US on Thursday, allowing more people to connect their medical records and health-tracking information to the chatbot. During a briefing, Ashley Alexander, OpenAI's vice president of health product, says the company's models \"are now capable of reasoning at levels that are better than clinician level.\"",
    body: "OpenAI is rolling out ChatGPT Health to everyone in the US on Thursday, allowing more people to connect their medical records and health-tracking information to the chatbot. During a briefing, Ashley Alexander, OpenAI's vice president of health product, says the company's models \"are now capable of reasoning at levels that are better than clinician level.\" When asked for more information about how the performance of OpenAI's models stacks up against human clinicians, OpenAI health lead Karan Singhal says that he would \"temper\" the claim that they are reasoning at better levels, but that \"there have been individual studies that have been poi …",
    source: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/970115/openai-chatgpt-health-launch-claims",
    time: "2 ore fa",
    pub_ts: 1784826000,
    tags: [],
  },
  {
    id: 16,
    cat: "ai",
    title: "OpenAI makes ChatGPT Health available to all US users",
    summary: "Users can also integrate their personal data from services like Apple Health, Function, and MyFitnessPal.",
    body: "Users can also integrate their personal data from services like Apple Health, Function, and MyFitnessPal.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/23/openai-makes-chatgpt-health-available-to-all-u-s-users/",
    time: "2 ore fa",
    pub_ts: 1784826000,
    tags: [],
  },
  {
    id: 17,
    cat: "ai",
    title: "AI chip startup Etched defies skeptics, hits $10.3B valuation from big-name investors",
    summary: "Etched, founded by three Harvard dropouts, has created new chips and memory components that speed up inference on any AI model -- no GPUs required, it says.",
    body: "Etched, founded by three Harvard dropouts, has created new chips and memory components that speed up inference on any AI model -- no GPUs required, it says.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/23/ai-chip-startup-etched-defies-skeptics-hits-10-3b-valuation-from-big-name-investors/",
    time: "4 ore fa",
    pub_ts: 1784818800,
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
    time: "10 ore fa",
    pub_ts: 1784797321,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "Sardegna, corsa contro il tempo per salvare la Cermed",
    summary: "Corsa contro il tempo per salvare la fabbrica di ceramiche Cermed di Guspini in Sardegna. E rilanciare le produzioni di mattonelle, salvaguardando l’occupazione di oltre cento lavoratori. L’azienda, nata nel...",
    body: "Corsa contro il tempo per salvare la fabbrica di ceramiche Cermed di Guspini in Sardegna. E rilanciare le produzioni di mattonelle, salvaguardando l’occupazione di oltre cento lavoratori. L’azienda, nata nel...",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/sardegna-corsa-contro-tempo-salvare-cermed-AJbvVZS",
    time: "16 ore fa",
    pub_ts: 1784775960,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "South Africa Fund Plans $609 Million VC Raise With Exits Rising",
    summary: "A key South Africa fund plans to raise as much as 10 billion rand ($609 million) in venture capital to help scale high-growth startups, a move that would expand its technology sector and accelerate the development of one the continent’s most mature startup markets.",
    body: "A key South Africa fund plans to raise as much as 10 billion rand ($609 million) in venture capital to help scale high-growth startups, a move that would expand its technology sector and accelerate the development of one the continent’s most mature startup markets.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-23/south-africa-fund-plans-609-million-vc-raise-with-exits-rising",
    time: "7 ore fa",
    pub_ts: 1784808908,
    tags: [],
  },
  {
    id: 21,
    cat: "economia-tech",
    title: "Trump Expands AI Data Center Pledge in Bid to Ease Power Costs",
    summary: "President Donald Trump on Thursday welcomed fresh commitments from power utilities and data center developers to put technology companies on the hook to pay for the electricity they need to drive energy-hungry artificial-intelligence systems.",
    body: "President Donald Trump on Thursday welcomed fresh commitments from power utilities and data center developers to put technology companies on the hook to pay for the electricity they need to drive energy-hungry artificial-intelligence systems.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-23/trump-expands-ai-data-center-pledge-in-bid-to-ease-power-costs",
    time: "27 min fa",
    pub_ts: 1784833639,
    tags: [],
  },
  {
    id: 22,
    cat: "economia-tech",
    title: "Google Fined €890 Million by EU Over Search, Play Store Breaches",
    summary: "Alphabet Inc.’s Google was fined a total of €890 million ($1 billion) by the European Union for violating the bloc’s Digital Markets Act, in a decision that has inflamed tensions with US President Donald Trump’s administration.",
    body: "Alphabet Inc.’s Google was fined a total of €890 million ($1 billion) by the European Union for violating the bloc’s Digital Markets Act, in a decision that has inflamed tensions with US President Donald Trump’s administration.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-23/google-fined-890-million-in-eu-over-search-app-store-breaches",
    time: "9 ore fa",
    pub_ts: 1784800914,
    tags: [],
  },
  {
    id: 23,
    cat: "economia-tech",
    title: "Japan awakes",
    summary: "Why 1 per cent interest rates could shake everything up after a generation of deflation",
    body: "Why 1 per cent interest rates could shake everything up after a generation of deflation",
    source: "Financial Times",
    url: "https://www.ft.com/content/397c04d8-db0f-4902-9ea0-269584f43697?syn-25a6b1a6=1",
    time: "15 ore fa",
    pub_ts: 1784779221,
    tags: [],
  },
];
