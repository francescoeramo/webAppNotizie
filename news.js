// Generato automaticamente il 2026-07-19 17:05 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1784480707;

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
    title: "La Russa: 'Oggi Borsellino sarebbe ministro di FdI'. Monta la polemica",
    summary: "Il presidente del Senato: 'Spiace per le parole del fratello di Borsellino, ci vuole rispetto per tutt'. Conte: 'Parole dal sen fuggite'",
    body: "Il presidente del Senato: 'Spiace per le parole del fratello di Borsellino, ci vuole rispetto per tutt'. Conte: 'Parole dal sen fuggite'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/videogallery/italia/2026/07/19/la-russa-spiace-per-le-parole-del-fratello-di-borsellino-ci-vuole-rispetto-per_5de36b00-4536-4f15-857a-57771abcca08.html",
    time: "3 ore fa",
    pub_ts: 1784466397,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Medio Oriente, Trump al Congresso americano: estendere anche all'Iran la legge sulle sanzioni alla Russia - LIVE",
    summary: "Nuovi attacchi Usa contro Teheran 'in risposta ai raid in Giordania'",
    body: "Nuovi attacchi Usa contro Teheran 'in risposta ai raid in Giordania'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/2026/07/18/usa-nuovi-attacchi-contro-liran-in-risposta-a-raid-in-giordania_dfb6e694-f464-4ed9-86e5-90774f489a62.html",
    time: "1 ora fa",
    pub_ts: 1784475237,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "Riforma degli autovelox, il Mit spegne quelli non in regola",
    summary: "Salvini: 'Non si fa cassa alle spalle dei cittadini con controlli poco trasparenti'",
    body: "Salvini: 'Non si fa cassa alle spalle dei cittadini con controlli poco trasparenti'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/economia/2026/07/18/riforma-degli-autovelox-il-mit-spegne-quelli-non-in-regola_5c9d8e12-df06-422f-8d69-d1de3d0532c3.html",
    time: "7 ore fa",
    pub_ts: 1784453645,
    tags: [],
  },
  {
    id: 4,
    cat: "politica-italiana",
    title: "Il golpe giudiziario di Erdoğan: 2400 anni di carcere per fermare il sindaco di Istanbul",
    summary: "Dalla condanna shock del sindaco İmamoğlu al sovraffollamento delle carceri: come Erdoğan sta cancellando l'opposizione in Turchia",
    body: "Dopo più di 20 anni al potere, il presidente Recep Tayyip Erdoğan è ormai una figura centrale della vita politica turca, tanto da aver cambiato l’immagine stessa della Repubblica fondata più di cento anni prima da Kemal Atuturk. Il presidente è anche riuscito a trasformare la Turchia in una media potenza, utile per gestire dossier come quello dell’immigrazione , per mediare nei conflitti regionali e non, e da ultimo per il rafforzamento della difesa dell’Unione Europea .\n\nTutto questo ha dato a Erdoğan spazio di manovra all’interno della Turchia per ridurre sempre di più gli spazi democratici nel paese , arrestando oppositori, giornalisti, avvocati, attivisti e semplici cittadini scesi pacificamente in strada. La libertà di stampa e di espressione è stata ugualmente limitata e la giustizia è ormai nelle mani del governo. Anche la vita politica del paese è sempre più ristretta, tanto che gli analisti descrivono da anni la Turchia come un “autoritarismo competitivo”, anche se di recente il paese starebbe virando verso un “autoritarismo egemonico”, in cui l’opposizione è relegata a un ruolo marginale senza alcuna possibilità di vittoria.\n\nQuesto spostamento sta avvenendo nel quasi totale silenzio dei media - anche stranieri - e senza un particolare interesse da parte di quei governi europei che si stanno legando sempre di più alla Turchia. Leader dell’opposizione rimossi, università chiuse, proteste represse: l’assalto finale di Erdogan alla democrazia Un caso che ben rappresenta la deriva sempre più autocratica del paese è quello del sindaco di Istanbul, Ekrem İmamoğlu .\n\nNel 2019 è diventato sindaco di Istanbul dopo aver sconfitto il candidato del presidente turco e si è confermato nel 2024 portando per la prima volta il CHP a battere il partito di Erdoğan da quando è al potere. Considerato uno dei pochi politici in grado di attirare il consenso di un ampio spettro di elettori, tra cui curdi, conservatori e laici, il primo cittadino di Istanbul è da tempo identificato come il potenziale rivale di Erdoğan per le elezioni del 2028, proprio grazie alla schiacciante vittoria conseguita in occasione delle amministrative del 2024.\n\nUna vittoria che il Consiglio elettorale supremo turco annullò in fretta e furie, indicendo nuove elezioni che furono ugualmente vinte da İmamoğlu, segnando la sconfitta definitiva del candidato scelto dal presidente. A quel punto, Erdoğan è ricorso alla magistratura, come già fatto nel 2016 con un altro potenziale rivale, il leader del partito filo-curdo Selahattin Demirtas. La Turchia in piazza contro la deriva autoritaria di Erdogan e l’arresto del sindaco di Istanbul A fine febbraio 2025 , İmamoğlu ha annunciato la sua candidatura alle presidenziali del 2028 in rappresentanza del CHP, ma poche settimane dopo l'Università di Istanbul gli ha revocato la laurea, rendendolo di fatto ineleggibile a qualsiasi carica politica.\n\nLa mattina dopo, il sindaco è stato arrestato con l’accusa, tra le tante, di appartenere a un'organizzazione criminale, di avere legami con il Partito dei Lavoratori del Kurdistan, di aver accettato tangenti, aver interferito con gli appalti pubblici e numerosi altri reati finanziari. In seguito è stato anche accusato di spionaggio. Sommando tutti i capi di accusa, İmamoğlu rischia una pena fino a 2.430 anni di prigione.\n\nInsieme a lui, sono finite sotto accusa altre 400 persone, di cui 68 già in carcere. Il processo è iniziato il 9 marzo, ma in realtà İmamoğlu è stato già condannato a settembre del 2025 a due anni e sette mesi di carcere, perdendo il diritto a partecipare a qualsiasi futura attività politica, per un altro processo per corruzione. Il sindaco ha provato a mantenere un’immagine pubblica attiva anche dal carcere con l’aiuto dei suoi assistenti e dei social media, ma i suoi account sono stati spesso censurati, riducendo ulteriormente le possibilità di İmamoğlu di raccontare la sua versione della storia e di continuare a fare campagna elettorale.\n\n[NEWSLETTER_HERE] Tra repressione politica e carceri Non è la prima volta che İmamoğlu deve affrontare delle indagini nei suoi confronti. Nel dicembre del 2022 gli è stato imposto il divieto di partecipare alla vita politica per presunte offese alla commissione elettorale della Turchia nel 2019. E İmamoğlu non è l’unico sindaco a essere finito sotto accusa per corruzione e legami con entità terroristiche.\n\nQueste stesse motivazioni hanno portato all’arresto e alla destituzione di centinaia di primi cittadini appartenenti all’opposizione, principalmente curda. Il loro ruolo viene spesso ricoperto di cosiddetti kayyım , amministratori fiduciari designati dal governo. Come ricostruito dal Guardian , 30 comuni che rappresentano 28 milioni di persone sono amministrati da politici non eletti dai cittadini.\n\nTra le elezioni amministrative di marzo 2024 e maggio 2026, 76 sindaci di diversi partiti, tra cui 17 del CHP, sono passati all'AKP, il partito di Erdoğan, presumibilmente per sfuggire alla stessa sorte di İmamoğlu. Ma l’arresto del primo cittadino di Istanbul ha riacceso i riflettori anche su un’altra questione: le condizioni delle carceri in Turchia. İmamoğlu si trova nel complesso penitenziario di Marmara, noto fino al 2022 come carcere di Silivri, a circa 70 chilometri dal centro di Istanbul.\n\nIl penitenziario è stato inaugurato nel 2008 ed è diventato da allora il più grande istituto di massima sicurezza d'Europa. Le organizzazioni per i diritti umani lo definiscono un \"campo di internamento\" per membri dell'opposizione, dissidenti e curdi. Secondo i dati ufficiali, il complesso comprende 10 istituti penitenziari, un ospedale e diverse aule di tribunale. Sono presenti 500 unità abitative, oltre a una scuola elementare, un asilo, un centro commerciale e altre strutture per il personale.\n\nInizialmente progettato per ospitare 11mila detenuti, secondo un'inchiesta sui diritti umani del parlamento turco, alla fine del 2019 ne ospitava talvolta fino a 23mila, segno di un grave sovraffollamento. Il problema non riguarda solo Silivri. Secondo gli ultimi dati della Direzione Generale delle Carceri e degli Istituti di Detenzione (CTEGM), al 1° dicembre 2025 il numero dei detenuti in tutto il paese era pari a 433.543 in 403 carceri con una capacità totale di 305.286 posti.\n\nAl sovraffollamento si aggiungono anche torture e maltrattamenti. La Commissione carceraria della sezione di Istanbul dell'Associazione per i Diritti Umani (İHD) ha identificato oltre 5mila violazioni nel suo \"Rapporto sulle violazioni dei diritti nelle carceri della Regione di Marmara\" relativo al 2025. Come riportato da diverse organizzazioni per i diritti umani, in Turchia si assiste a una crescente cultura dell'impunità verso le forze dell'ordine e i funzionari penitenziari e le indagini sulle accuse di tortura hanno portato raramente a dei risultati.\n\nA fronte di ciò, l'Organizzazione Mondiale Contro la Tortura ha classificato la Turchia come il secondo paese al mondo per rischio di tortura nel suo Indice Globale 2025, pubblicato a giugno. Immagine in anteprima: CeeGee, CC BY-SA 4.0 , via Wikimedia Commons",
    source: "Valigia Blu",
    url: "https://www.valigiablu.it/golpe-giudiziario-erdogan-caso-imamoglu-turchia/",
    time: "1 giorno fa",
    pub_ts: 1784358219,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "US and Iran trade fire after two US soldiers killed in Jordan",
    summary: "Kuwait says an electricity and water plant is on fire after the second such attack in two days. Iran says US strikes hit an under-construction nuclear power plant.",
    body: "Kuwait says an electricity and water plant is on fire after the second such attack in two days. Iran says US strikes hit an under-construction nuclear power plant.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cgk417jp83po?at_medium=RSS&at_campaign=rss",
    time: "1 ora fa",
    pub_ts: 1784475318,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "Russia launches major ballistic missile attack on Ukrainian cities",
    summary: "Five people are killed and at least 35 injured as Ukraine's two largest cities are targeted, as Kyiv continues its own assault on Russian infrastructure.",
    body: "Five people are killed and at least 35 injured as Ukraine's two largest cities are targeted, as Kyiv continues its own assault on Russian infrastructure.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c2el7xpnzrpo?at_medium=RSS&at_campaign=rss",
    time: "5 ore fa",
    pub_ts: 1784460504,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "Cuban dissident Luis Manuel Otero Alcántara goes into exile in US",
    summary: "He was arrested in 2021 during Cuba's largest anti-government protests in decades and spent five years ⁠in prison.",
    body: "He was arrested in 2021 during Cuba's largest anti-government protests in decades and spent five years ⁠in prison.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cx2k77p2r1xo?at_medium=RSS&at_campaign=rss",
    time: "9 ore fa",
    pub_ts: 1784447222,
    tags: [],
  },
  {
    id: 8,
    cat: "geopolitica",
    title: "El presidente de Hungría firma la reforma Constitucional de Magyar que le destituye",
    summary: "Tamás Sulyok, nombrado por Orbán, denuncia “un grave y vergonzoso ejemplo histórico de abuso del poder político”",
    body: "El presidente de Hungría, Tamás Sulyok, anunció este sábado que ha refrendado l a reforma constitucional que implica el fin de su mandato , a pesar de considerar esa enmienda “un grave y vergonzoso ejemplo histórico de abuso del poder político”. “Tras una cuidadosa consideración de mis posibilidades legales y de mi conciencia, cumplo con mi obligación conforme a la Ley Fundamental. Mi firma es el sello definitivo de mis obligaciones como presidente de la República”, declaró en un vídeo el jefe de Estado, un político vinculado al ex primer ministro húngaro Viktor Orbán.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/internacional/2026-07-19/el-presidente-de-hungria-firma-la-reforma-constitucional-de-magyar-que-le-destituye.html",
    time: "10 ore fa",
    pub_ts: 1784442797,
    tags: [],
  },
  {
    id: 9,
    cat: "geopolitica",
    title: "El fútbol argentino, entre la ilusión de un nuevo título, el uso político y los manejos opacos de su dirigencia",
    summary: "La justicia investiga por irregularidades al presidente de la AFA, mientras se libra un pulso por capitalizar los resultados de la Albiceleste",
    body: "Claudio Chiqui Tapia, el presidente de la Asociación de Fútbol Argentino (AFA), observó el partido de su selección contra Inglaterra desde el palco VIP, sentado a la derecha del mandamás de la FIFA, Gianni Infantino. De traje azul, corbata y zapatos de cuero lustrados, celebró con lágrimas de emoción los dos goles que llevaron a Argentina a la final de la Copa del Mundo y cerró la jornada con un aluvión de fotos en sus redes, abrazado a los protagonistas.\n\n“El que promete, cumple”, escribió sobre sí mismo, dándose parte en una victoria que todavía conmueve al país entero. La sonrisa refulgente con la que acompaña cada una de sus apariciones está a tono con lo que sucede con el fútbol en el país sudamericano, pero no con su situación judicial, cada vez más comprometida. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/argentina/2026-07-19/el-futbol-argentino-entre-la-ilusion-de-un-nuevo-titulo-el-uso-politico-y-los-manejos-opacos-de-su-dirigencia.html",
    time: "13 ore fa",
    pub_ts: 1784431801,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "Iran attacks US Gulf allies, causing a fire at Kuwait power plant",
    summary: "Kuwait and Bahrain report several rounds of Iranian missile, drone attacks; sirens reportedly sound in Jordan.",
    body: "Kuwait and Bahrain report several rounds of Iranian missile, drone attacks; sirens reportedly sound in Jordan.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/19/kuwaiti-power-plant-ablaze-as-iran-hits-us-gulf-allies?traffic_source=rss",
    time: "2 ore fa",
    pub_ts: 1784471273,
    tags: [],
  },
  {
    id: 11,
    cat: "conflitti",
    title: "Iranians suffer from power blackouts during war and heatwave",
    summary: "Collapsing grid, battered by military strikes and chronic underinvestment, leaves Iranians sweltering in the dark.",
    body: "Collapsing grid, battered by military strikes and chronic underinvestment, leaves Iranians sweltering in the dark.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/19/iranians-suffer-from-power-blackouts-during-war-and-heatwave?traffic_source=rss",
    time: "5 ore fa",
    pub_ts: 1784459780,
    tags: [],
  },
  {
    id: 12,
    cat: "conflitti",
    title: "Syria’s Al-Sharaa reshuffles security and intelligence leadership",
    summary: "Government says the shake-up will strengthen security and clear the way for reconstruction.",
    body: "Government says the shake-up will strengthen security and clear the way for reconstruction.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/19/syrias-al-sharaa-reshuffles-security-and-intelligence-leadership?traffic_source=rss",
    time: "21 min fa",
    pub_ts: 1784479435,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "Dave Eggers told OpenAI staff that ChatGPT was ‘silencing an entire generation’",
    summary: "Last year, Sam Altman invited author Dave Eggers to give a talk to around 200 OpenAI staffers. The man has written countless novels, screenplays, pieces of journalism, started McSweeney's, and founded multiple schools and nonprofits that support writers and the arts more broadly. So one might expect he'd roll into the company's offices and offer",
    body: "Dave Eggers attends the \"The Turning Point: To Be Destroyed\" premiere. | Image: John Lamparski/Getty Images for Tribeca Festival Last year, Sam Altman invited author Dave Eggers to give a talk to around 200 OpenAI staffers. The man has written countless novels , screenplays, pieces of journalism, started McSweeney's , and founded multiple schools and nonprofits that support writers and the arts more broadly.\n\nSo one might expect he'd roll into the company's offices and offer tips on being relentlessly prolific, or how to excel in multiple fields. Instead, he apparently laced into the company. According to the Financial Times , Eggers told the staff: \"The effect of ChatGPT on educators' lives is catastrophic. Whether you intended to do it or not, you've made every teache …",
    source: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/967630/dave-eggers-openai-chatgpt-silencing-an-entire-generation",
    time: "20 ore fa",
    pub_ts: 1784408082,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "Applications close in 48 hours — here’s everything Australian founders need to know about Stripe x Startup Battlefield",
    summary: "The window is almost shut. On August 19, eight startups will take the stage at Stripe Tour Sydney in front of investors, global press, and the Australian tech community. One startup walks away with automatic entry into TechCrunch Disrupt in San Francisco — no application, no further competition, a guaranteed spot on the world’s most",
    body: "The window is almost shut. On August 19, eight startups will take the stage at Stripe Tour Sydney in front of investors, global press, and the Australian tech community. One startup walks away with automatic entry into TechCrunch Disrupt in San Francisco — no application, no further competition, a guaranteed spot on the world’s most",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/17/applications-close-in-48-hours-heres-everything-australian-founders-need-to-know-about-stripe-x-startup-battlefield/",
    time: "1 giorno fa",
    pub_ts: 1784329680,
    tags: [],
  },
  {
    id: 15,
    cat: "ai",
    title: "Databricks hits $188B valuation, extending its run as AI’s favorite second act",
    summary: "Databricks has remade its image into an AI company and has published research on the cost savings of open weight AI models for coding.",
    body: "Databricks has remade its image into an AI company and has published research on the cost savings of open weight AI models for coding.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/17/databricks-hits-188b-valuation-extending-its-run-as-ais-favorite-second-act/",
    time: "1 giorno fa",
    pub_ts: 1784326376,
    tags: [],
  },
  {
    id: 16,
    cat: "ai",
    title: "Agility Robotics plants its flag in Tesla’s backyard",
    summary: "Agility is opening a new training center for its Digit robots in Fremont, California.",
    body: "Agility is opening a new training center for its Digit robots in Fremont, California.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/17/agility-robotics-plants-its-flag-in-teslas-backyard/",
    time: "1 giorno fa",
    pub_ts: 1784319589,
    tags: [],
  },
  {
    id: 17,
    cat: "economia-tech",
    title: "Como hotels verso l’acquisto di asset in Puglia e nelle Langhe",
    summary: "Il gruppo di Singapore ha 19 resort nel mondo e ville di lusso da Bali ai Caraibi. Pronti investimenti in Italia per edifici storici da valorizzare",
    body: "Il gruppo di Singapore ha 19 resort nel mondo e ville di lusso da Bali ai Caraibi. Pronti investimenti in Italia per edifici storici da valorizzare",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/como-hotels-l-acquisto-asset-puglia-e-langhe-AJkFVGO",
    time: "10 ore fa",
    pub_ts: 1784442720,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "Moonshot Plans IPO in Six Months After China AI Breakthrough",
    summary: "Moonshot AI has told investors it’s preparing to list in as early as six months, seizing the opportunity to tap capital markets after its latest model upended industry perceptions of China’s artificial intelligence capabilities and sent tech stocks reeling.",
    body: "Moonshot AI has told investors it’s preparing to list in as early as six months, seizing the opportunity to tap capital markets after its latest model upended industry perceptions of China’s artificial intelligence capabilities and sent tech stocks reeling.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-19/china-s-moonshot-plans-ipo-in-six-months-after-ai-breakthrough",
    time: "11 ore fa",
    pub_ts: 1784439091,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "US day traders flock to ‘the most dangerous product in crypto’",
    summary: "Trump administration has opened American markets to highly leveraged perpetual futures",
    body: "Trump administration has opened American markets to highly leveraged perpetual futures",
    source: "Financial Times",
    url: "https://www.ft.com/content/8da4243f-820c-428c-bcfb-ba63dac48c1c?syn-25a6b1a6=1",
    time: "6 ore fa",
    pub_ts: 1784455853,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "Singapore Eyes Hedge Fund Tax Cuts to Boost Hub Role: FT",
    summary: "The Monetary Authority of Singapore has held talks with investment firms on reducing taxes for fund managers in a bid to maintain the island’s competitiveness and retain talent, the Financial Times reported.",
    body: "The Monetary Authority of Singapore has held talks with investment firms on reducing taxes for fund managers in a bid to maintain the island’s competitiveness and retain talent, the Financial Times reported.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-19/singapore-weighs-hedge-fund-tax-cuts-to-be-more-competitive-ft",
    time: "12 ore fa",
    pub_ts: 1784436098,
    tags: [],
  },
];
