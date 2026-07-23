// Generato automaticamente il 2026-07-23 23:03 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1784847776;

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
    time: "4 ore fa",
    pub_ts: 1784833124,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "L'AfD vola a Berlino, per la prima volta avanti nei sondaggi",
    summary: "Il partito al 19%, seguito da Cdu e Linke. Ma nessuno vuole allearsi con l'estrema destra",
    body: "Il partito al 19%, seguito da Cdu e Linke. Ma nessuno vuole allearsi con l'estrema destra",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/europa/2026/07/23/lafd-vola-a-berlino-per-la-prima-volta-avanti-nei-sondaggi_42bb0070-2ae5-460e-8020-7c8dbf00099c.html",
    time: "1 ora fa",
    pub_ts: 1784841947,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "Guerra ai baby-delinquenti, minori imputabili dai 14 anni",
    summary: "Meloni, 'Chi sbaglia risponde delle proprie azioni, anche i minorenni'. L'opposizione attacca",
    body: "Meloni, 'Chi sbaglia risponde delle proprie azioni, anche i minorenni'. L'opposizione attacca",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/politica/2026/07/23/guerra-ai-baby-delinquenti-minori-imputabili-dai-14-anni_1008440b-330b-4cf4-b62c-7a068dc7b39d.html",
    time: "1 ora fa",
    pub_ts: 1784841638,
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
    time: "5 ore fa",
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
    time: "5 ore fa",
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
    time: "5 ore fa",
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
    time: "16 ore fa",
    pub_ts: 1784789174,
    tags: [],
  },
  {
    id: 8,
    cat: "conflitti",
    title: "US war on Iran: The $110 billion price tag",
    summary: "America's war on Iran has cost the US nearly $110 billion. Now, the Trump administration wants another $67 billion.",
    body: "America's war on Iran has cost the US nearly $110 billion. Now, the Trump administration wants another $67 billion.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/23/us-war-on-iran-the-110-billion-price-tag?traffic_source=rss",
    time: "58 min fa",
    pub_ts: 1784844263,
    tags: [],
  },
  {
    id: 9,
    cat: "conflitti",
    title: "Trump warns of largest strikes on Iran yet as Tehran lashes out across Gulf",
    summary: "The US president's threat comes after another day of Iranian attacks on Bahrain, Kuwait and Jordan.",
    body: "The US president's threat comes after another day of Iranian attacks on Bahrain, Kuwait and Jordan.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/23/trump-warns-of-biggest-strikes-yet-on-iran-as-tehran-lashes-out-across-gulf?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1784843008,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "US-Saudi nuclear deal hinges on normalisation with Israel",
    summary: "President Trump said a proposed US-Saudi civilian nuclear deal is subject to Saudi Arabia joining the Abraham Accords",
    body: "President Trump said a proposed US-Saudi civilian nuclear deal is subject to Saudi Arabia joining the Abraham Accords",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/23/us-saudi-nuclear-deal-hinges-on-normalisation-with-israel?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1784842885,
    tags: [],
  },
  {
    id: 11,
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
    id: 12,
    cat: "ai",
    title: "Claude’s voice mode is now available for Opus and Sonnet",
    summary: "Until now, voice mode has only been available on Claude Haiku, Anthropic's faster but less powerful model. Now the company is making its Opus and Sonnet models available in voice mode, and extending its reach into apps like Gmail, Slack, and Canva. When Anthropic launched voice mode last year, it was primarily focused on delivering",
    body: "Until now, voice mode has only been available on Claude Haiku , Anthropic's faster but less powerful model. Now the company is making its Opus and Sonnet models available in voice mode , and extending its reach into apps like Gmail, Slack, and Canva. When Anthropic launched voice mode last year, it was primarily focused on delivering answers to quick questions with minimal delay. But in a blog post, the company said people immediately started using voice mode for far more than casual queries.\n\nThey were using it to work \"through real business problems,\" which Haiku was not really designed for. That model \"kept conversations quick, but not alwa …",
    source: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/970065/anthropic-voice-mode-claude-opus-sonnet-haiku-ai",
    time: "4 ore fa",
    pub_ts: 1784833200,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "Anthropic updates Claude voice mode with more capable models",
    summary: "Claude's new voice model will let you reschedule your meeting or draft an email.",
    body: "Claude's new voice model will let you reschedule your meeting or draft an email.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/23/anthropic-updates-claude-voice-mode-with-more-capable-models/",
    time: "4 ore fa",
    pub_ts: 1784833200,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "OpenAI is making big claims as it rolls out ChatGPT Health to everyone",
    summary: "OpenAI is rolling out ChatGPT Health to everyone in the US on Thursday, allowing more people to connect their medical records and health-tracking information to the chatbot. During a briefing, Ashley Alexander, OpenAI's vice president of health product, says the company's models \"are now capable of reasoning at levels that are better than clinician level.\"",
    body: "OpenAI is rolling out ChatGPT Health to everyone in the US on Thursday, allowing more people to connect their medical records and health-tracking information to the chatbot. During a briefing, Ashley Alexander, OpenAI's vice president of health product, says the company's models \"are now capable of reasoning at levels that are better than clinician level.\" When asked for more information about how the performance of OpenAI's models stacks up against human clinicians, OpenAI health lead Karan Singhal says that he would \"temper\" the claim that they are reasoning at better levels, but that \"there have been individual studies that have been poi …",
    source: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/970115/openai-chatgpt-health-launch-claims",
    time: "6 ore fa",
    pub_ts: 1784826000,
    tags: [],
  },
  {
    id: 15,
    cat: "ai",
    title: "OpenAI makes ChatGPT Health available to all US users",
    summary: "Users can also integrate their personal data from services like Apple Health, Function, and MyFitnessPal.",
    body: "Users can also integrate their personal data from services like Apple Health, Function, and MyFitnessPal.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/23/openai-makes-chatgpt-health-available-to-all-u-s-users/",
    time: "6 ore fa",
    pub_ts: 1784826000,
    tags: [],
  },
  {
    id: 16,
    cat: "ai",
    title: "AI chip startup Etched defies skeptics, hits $10.3B valuation from big-name investors",
    summary: "Etched, founded by three Harvard dropouts, has created new chips and memory components that speed up inference on any AI model -- no GPUs required, it says.",
    body: "Etched, founded by three Harvard dropouts, has created new chips and memory components that speed up inference on any AI model -- no GPUs required, it says.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/23/ai-chip-startup-etched-defies-skeptics-hits-10-3b-valuation-from-big-name-investors/",
    time: "8 ore fa",
    pub_ts: 1784818800,
    tags: [],
  },
  {
    id: 17,
    cat: "economia-tech",
    title: "R&S, La startup campana KforB produrrà nanocellulosa batterica",
    summary: "La società Knowledge for Business realizza investe 1,2 milioni in un nuovo impianto e in un nuovo progetto di ricerca",
    body: "La società Knowledge for Business realizza investe 1,2 milioni in un nuovo impianto e in un nuovo progetto di ricerca",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/rs-startup-campana-kforb-produrra-nanocellulosa-batterica-AJQOfQS",
    time: "14 ore fa",
    pub_ts: 1784797321,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "Sardegna, corsa contro il tempo per salvare la Cermed",
    summary: "Corsa contro il tempo per salvare la fabbrica di ceramiche Cermed di Guspini in Sardegna. E rilanciare le produzioni di mattonelle, salvaguardando l’occupazione di oltre cento lavoratori. L’azienda, nata nel...",
    body: "Corsa contro il tempo per salvare la fabbrica di ceramiche Cermed di Guspini in Sardegna. E rilanciare le produzioni di mattonelle, salvaguardando l’occupazione di oltre cento lavoratori. L’azienda, nata nel...",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/sardegna-corsa-contro-tempo-salvare-cermed-AJbvVZS",
    time: "19 ore fa",
    pub_ts: 1784775960,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "Robotics Startup Genesis in Talks to Raise About $500 Million",
    summary: "AI robotics startup Genesis AI is in talks with investors to raise around $500 million in a new funding round, according to people familiar with the efforts.",
    body: "AI robotics startup Genesis AI is in talks with investors to raise around $500 million in a new funding round, according to people familiar with the efforts.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-23/robotics-startup-genesis-in-talks-to-raise-about-500-million",
    time: "43 min fa",
    pub_ts: 1784845213,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "Tech Bonds Hit by Selloff as AI Debt Fears Race Through Markets",
    summary: "The bonds of some of the biggest US tech companies slid Thursday amid renewed worries about the scale of the debt-fueled artificial-intelligence boom and escalating conflict in the Middle East.",
    body: "The bonds of some of the biggest US tech companies slid Thursday amid renewed worries about the scale of the debt-fueled artificial-intelligence boom and escalating conflict in the Middle East.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-23/tech-bonds-hit-by-selloff-as-ai-debt-fears-race-through-markets",
    time: "2 ore fa",
    pub_ts: 1784839721,
    tags: [],
  },
  {
    id: 21,
    cat: "economia-tech",
    title: "Alphabet’s Anthropic Stake Jumps to Around $124 Billion",
    summary: "The value of Alphabet Inc.’s stake in the artificial intelligence startup Anthropic PBC has soared to around $124 billion, making it one of the most lucrative bets in the company’s history.",
    body: "The value of Alphabet Inc.’s stake in the artificial intelligence startup Anthropic PBC has soared to around $124 billion, making it one of the most lucrative bets in the company’s history.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-23/alphabet-s-anthropic-stake-jumps-to-around-124-billion",
    time: "3 ore fa",
    pub_ts: 1784836415,
    tags: [],
  },
  {
    id: 22,
    cat: "economia-tech",
    title: "The US needs a new Manhattan Project for fusion energy",
    summary: "If we are to outpace China and own the future of this technology, we must fund it properly",
    body: "If we are to outpace China and own the future of this technology, we must fund it properly",
    source: "Financial Times",
    url: "https://www.ft.com/content/822f5326-d93b-4b9d-b43f-58113da909b1",
    time: "5 ore fa",
    pub_ts: 1784826784,
    tags: [],
  },
];
