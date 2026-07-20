// Generato automaticamente il 2026-07-20 11:51 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1784548272;

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
    title: "Starmer si è dimesso nella mani del re, a Burnham l'incarico di premier",
    summary: "Nel discorso finale al Paese da primo ministro promette sostegno al successore: 'Gli lascio un Paese migliore'",
    body: "Nel discorso finale al Paese da primo ministro promette sostegno al successore: 'Gli lascio un Paese migliore'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/2026/07/20/starmer-saluta-downing-street-lascio-a-burnham-un-paese-migliore_566f5999-9480-49f1-ac8e-185882608aca.html",
    time: "43 min fa",
    pub_ts: 1784545641,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Zelensky: 'Colpite due petroliere della flotta ombra russa e quattro mercantili nel Mar Nero'",
    summary: "'Nella regione di Mosca attaccate infrastrutture logistiche e un deposito di petrolio'",
    body: "'Nella regione di Mosca attaccate infrastrutture logistiche e un deposito di petrolio'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/2026/07/20/zelensky-colpite-due-petroliere-della-flotta-ombra-russa-e-quattro-mercantili_93416d3d-9ce4-48e6-b9bf-3acf5e43b95c.html",
    time: "1 ora fa",
    pub_ts: 1784542072,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "Migliaia di persone protestano nel centro di Nuova Delhi",
    summary: "Chiedono le dimissioni del ministro dell'Istruzione dopo una presunta fuga di informazioni sul test di Medicina",
    body: "Chiedono le dimissioni del ministro dell'Istruzione dopo una presunta fuga di informazioni sul test di Medicina",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/2026/07/20/migliaia-di-persone-protestano-nel-centro-di-nuova-delhi-_3d0e12e6-a225-41a1-a492-31ed48242cf1.html",
    time: "5 ore fa",
    pub_ts: 1784529330,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "Trump says US strikes hit Iran in 'honour' of American soldiers killed",
    summary: "Iran responded with attacks in Syria and Jordan, as two ships reportedly exploded in the Strait of Hormuz.",
    body: "Iran responded with attacks in Syria and Jordan, as two ships reportedly exploded in the Strait of Hormuz.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cly52xzjd3qo?at_medium=RSS&at_campaign=rss",
    time: "32 min fa",
    pub_ts: 1784546320,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "Food delivery rider wins China's top literary prize",
    summary: "Wang Jibing is among blue-collar Chinese workers gaining wider attention for their literary works.",
    body: "Wang Jibing is among blue-collar Chinese workers gaining wider attention for their literary works.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c5ydr3xd0kvo?at_medium=RSS&at_campaign=rss",
    time: "7 ore fa",
    pub_ts: 1784519587,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "Sánchez culmina en Argel la superación de la crisis que provocó el giro sobre el Sáhara",
    summary: "El presidente viaja al país magrebí con la vicepresidenta Aagesen, Albares y los directivos de grandes compañías energéticas para aumentar el suministro de gas",
    body: "El presidente del Gobierno, Pedro Sánchez, visitará este lunes Argel para pactar un aumento del suministro de gas y culminar la superación de la crisis diplomática bilateral que se abrió en marzo de 2022, después de que España rompiera en favor de Marruecos su tradicional neutralidad en el conflicto del Sáhara. Sánchez viajará directamente desde Nueva York, ciudad a la que se había desplazado previamente para asistir a la final de la Copa del Mundo de fútbol, y se entrevistará con el primer ministro argelino, Sifi Ghrieb, y el presidente, Abdelmayid Tebún, además de mantener un encuentro con empresarios españoles que operan en el país.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-07-20/sanchez-culmina-en-argel-la-superacion-de-la-crisis-que-provoco-el-giro-sobre-el-sahara.html",
    time: "8 ore fa",
    pub_ts: 1784518200,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "El palco de las pocas palabras: Trump y Sánchez aparcan temporalmente las diferencias durante la final del Mundial",
    summary: "El presidente estadounidense se salta el protocolo y le da unos cachetes a la copa de campeón del mundo de fútbol",
    body: "El palco de las pocas palabras. El presidente de Estados Unidos, Donald Trump, ha ejercido este domingo de anfitrión de la gran final del Mundial 2026, el partido que disputan España y Argentina en el MetLife Stadium de New Jersey. Un palco rodeado con un cristal blindado en un estadio con enormes medidas de seguridad. En esa especie de pecera de tiburones, Trump ha estado acompañado por algunos de los líderes mundiales con los que se siente más incómodo.\n\nUna representación de dos visiones antagónicas del mundo. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/deportes/mundial-futbol/2026-07-19/el-palco-de-las-pocas-palabras-trump-y-sanchez-aparcan-temporalmente-las-diferencias-durante-la-final-del-mundial.html",
    time: "15 ore fa",
    pub_ts: 1784494093,
    tags: [],
  },
  {
    id: 8,
    cat: "geopolitica",
    title: "Russia launches major ballistic missile attack on Ukrainian cities",
    summary: "Eight people die and dozens are injured as several cities are hit by missile and drone attacks, while Kyiv continues its own assault on Russian infrastructure.",
    body: "Eight people die and dozens are injured as several cities are hit by missile and drone attacks, while Kyiv continues its own assault on Russian infrastructure.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c2el7xpnzrpo?at_medium=RSS&at_campaign=rss",
    time: "17 ore fa",
    pub_ts: 1784485540,
    tags: [],
  },
  {
    id: 9,
    cat: "conflitti",
    title: "Why is Iran bombing Gulf states while avoiding US naval assets and Israel?",
    summary: "Analysts say Iran is using Gulf states to pressure Washington while avoiding direct confrontation with US forces.",
    body: "Analysts say Iran is using Gulf states to pressure Washington while avoiding direct confrontation with US forces.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/20/why-is-iran-bombing-gulf-states-while-avoiding-us-naval-assets-and-israel?traffic_source=rss",
    time: "16 min fa",
    pub_ts: 1784547302,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "What does Iran’s attack on Kuwait infrastructure mean for Gulf?",
    summary: "What does Iran’s attack on Kuwait infrastructure mean for Gulf?",
    body: "What does Iran’s attack on Kuwait infrastructure mean for Gulf?",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/20/what-does-irans-attack-on-kuwait-infrastructure-mean-for-gulf?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1784542080,
    tags: [],
  },
  {
    id: 11,
    cat: "conflitti",
    title: "Rubio: US ‘open to diplomacy’ after ninth night of bombing Iran",
    summary: "Rubio: US ‘open to diplomacy’ after ninth night of bombing Iran",
    body: "Rubio: US ‘open to diplomacy’ after ninth night of bombing Iran",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/20/rubio-us-open-to-diplomacy-after-ninth-night-of-bombing-iran?traffic_source=rss",
    time: "3 ore fa",
    pub_ts: 1784536866,
    tags: [],
  },
  {
    id: 12,
    cat: "ai",
    title: "Le minacce contro le aziende di AI sono in aumento",
    summary: "OpenAI, Anthropic e le altre stanno spendendo milioni di dollari per la sicurezza dei loro dirigenti negli Stati Uniti",
    body: "OpenAI, Anthropic e le altre stanno spendendo milioni di dollari per la sicurezza dei loro dirigenti negli Stati Uniti",
    source: "Il Post Tech",
    url: "https://www.ilpost.it/2026/07/20/minacce-aziende-dirigenti-intelligenza-artificiale/",
    time: "5 ore fa",
    pub_ts: 1784529602,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "China delivers a one-two punch to America’s AI dominance",
    summary: "China's leading AI companies are ramping up the pressure on Silicon Valley, as Moonshot and Alibaba unveiled models they claim can go toe-to-toe with the best from OpenAI and Anthropic at a fraction of the cost. The rapid-fire releases suggest America's lead at the AI frontier is increasingly tight, just as the technology is becoming",
    body: "China's leading AI companies are ramping up the pressure on Silicon Valley, as Moonshot and Alibaba unveiled models they claim can go toe-to-toe with the best from OpenAI and Anthropic at a fraction of the cost. The rapid-fire releases suggest America's lead at the AI frontier is increasingly tight, just as the technology is becoming central to national security, economic power, and geopolitical influence.\n\nThe opening salvo came from Beijing-based Moonshot AI, one of China's leading AI model developers, which unveiled Kimi K3 on Friday. Moonshot claims its own testing ranks it consistently above nearly every US system, trailing only OpenAI …",
    source: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/967781/chinese-ai-models-open-source-moonshot-kimi-k3-alibaba-qwen",
    time: "1 ora fa",
    pub_ts: 1784542593,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "Netflix paid $587M for Ben Affleck’s AI filmmaking startup",
    summary: "Netflix revealed that it paid $587 million in cash for InterPositive, a startup co-founded by Ben Affleck.",
    body: "Netflix revealed that it paid $587 million in cash for InterPositive, a startup co-founded by Ben Affleck.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/19/netflix-paid-587m-for-ben-afflecks-ai-filmmaking-startup/",
    time: "14 ore fa",
    pub_ts: 1784497500,
    tags: [],
  },
  {
    id: 15,
    cat: "ai",
    title: "Can an Apple lawsuit derail OpenAI’s hardware plans?",
    summary: "On the latest episode of Equity, we debate whether Apple's lawsuit will cast over OpenAi's much-discussed plans to get into hardware and go public.",
    body: "On the latest episode of Equity, we debate whether Apple's lawsuit will cast over OpenAi's much-discussed plans to get into hardware and go public.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/19/can-an-apple-lawsuit-derail-openais-hardware-plans/",
    time: "16 ore fa",
    pub_ts: 1784489085,
    tags: [],
  },
  {
    id: 16,
    cat: "ai",
    title: "I hate that I don’t hate this song made with Suno",
    summary: "I would never go so far as to say there's no place for AI in music (I'm a fan of Holly Herndon, after all). But I generally find music made with generative AI to be offensively boring, especially the outputs of Suno. So I'm having a bit of a tough time processing the fact that",
    body: "1010Benja won’t apologize for using AI. | Image: 1010Benja / Instagram I would never go so far as to say there's no place for AI in music (I'm a fan of Holly Herndon, after all). But I generally find music made with generative AI to be offensively boring , especially the outputs of Suno . So I'm having a bit of a tough time processing the fact that I actually quite enjoy 1010Benja's \" Semiramis' Dream .\" Benja has been unapologetic about his use of generative AI on his latest EP, Time Has Nothing To Do With What You Choose… The other three tracks can't quite hold a candle to what you find on 2024's Ten Total .\n\nBut the opener \"Semiramis' Dream\" is infectious. It explodes out of the speakers with a jungle beat and Be …",
    source: "The Verge",
    url: "https://www.theverge.com/entertainment/967678/1010benja-semiramis-dream-suno-ai-music",
    time: "18 ore fa",
    pub_ts: 1784482554,
    tags: [],
  },
  {
    id: 17,
    cat: "economia-tech",
    title: "Ansaldo torna sul mercato Usa con un contratto per otto turbine",
    summary: "Contratto firmato con la Pacifico Energy. Le macchine sono destinate a un data center in Texas",
    body: "Contratto firmato con la Pacifico Energy. Le macchine sono destinate a un data center in Texas",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/ansaldo-torna-mercato-usa-un-contratto-otto-turbine-AJ2S1oP",
    time: "3 ore fa",
    pub_ts: 1784535960,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "Italo firma contratto con Siemens da 3 miliardi per l’acquisto di 26 treni per il mercato tedesco",
    summary: "Entra nel vivo il piano per fare concorrenza a Deutsche Bahn (Db) sulle tratte interne. I primi servizi operativi a metà del 2028, collegando 18 città attraverso una rete di 1.300 chilometri con 50 corse giornaliere",
    body: "Entra nel vivo il piano per fare concorrenza a Deutsche Bahn (Db) sulle tratte interne. I primi servizi operativi a metà del 2028, collegando 18 città attraverso una rete di 1.300 chilometri con 50 corse giornaliere",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/italo-firma-contratto-siemens-3-miliardi-l-acquisto-26-treni-il-mercato-tedesco-AJZ7BtP",
    time: "1 ora fa",
    pub_ts: 1784541900,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "Como hotels verso l’acquisto di asset in Puglia e nelle Langhe",
    summary: "Il gruppo di Singapore ha 19 resort nel mondo e ville di lusso da Bali ai Caraibi. Pronti investimenti in Italia per edifici storici da valorizzare",
    body: "Il gruppo di Singapore ha 19 resort nel mondo e ville di lusso da Bali ai Caraibi. Pronti investimenti in Italia per edifici storici da valorizzare",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/como-hotels-l-acquisto-asset-puglia-e-langhe-AJkFVGO",
    time: "1 giorno fa",
    pub_ts: 1784442720,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "Moonshot Is Creating New Winners and Losers in the AI Trade",
    summary: "Moonshot AI’s surprise release of a new artificial intelligence model has sent a jolt through markets, forcing investors to reassess some of the biggest assumptions behind the global tech rally.",
    body: "Moonshot AI’s surprise release of a new artificial intelligence model has sent a jolt through markets, forcing investors to reassess some of the biggest assumptions behind the global tech rally.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-20/moonshot-ai-is-creating-new-winners-and-losers-in-the-ai-trade",
    time: "3 ore fa",
    pub_ts: 1784536481,
    tags: [],
  },
  {
    id: 21,
    cat: "economia-tech",
    title: "AI Pioneer Kai-Fu Lee’s Startup Targets Hong Kong IPO Next Year",
    summary: "01.ai, the Chinese AI startup founded by computer scientist Kai-Fu Lee, is pushing ahead with plans to raise funds before an initial public offering in 2027.",
    body: "01.ai, the Chinese AI startup founded by computer scientist Kai-Fu Lee, is pushing ahead with plans to raise funds before an initial public offering in 2027.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-20/ai-pioneer-kai-fu-lee-s-startup-targets-hong-kong-ipo-next-year",
    time: "8 ore fa",
    pub_ts: 1784518812,
    tags: [],
  },
  {
    id: 22,
    cat: "economia-tech",
    title: "Moonshot Plans IPO in Six Months After China AI Breakthrough",
    summary: "Moonshot AI has told investors it’s preparing to list in as early as six months, seizing the opportunity to tap capital markets after its latest model upended industry perceptions of China’s artificial intelligence capabilities and sent tech stocks reeling.",
    body: "Moonshot AI has told investors it’s preparing to list in as early as six months, seizing the opportunity to tap capital markets after its latest model upended industry perceptions of China’s artificial intelligence capabilities and sent tech stocks reeling.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-19/china-s-moonshot-plans-ipo-in-six-months-after-ai-breakthrough",
    time: "1 giorno fa",
    pub_ts: 1784439091,
    tags: [],
  },
];
