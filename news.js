// Generato automaticamente il 2026-07-18 15:02 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1784386925;

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
    title: "Mamdani: 'valuto l'arresto di Netanyahu se verrà all'assemblea Onu'",
    summary: "Il sindaco di New York: 'Il premier israeliano criminale di guerra, va processato all'Aja'",
    body: "Il sindaco di New York: 'Il premier israeliano criminale di guerra, va processato all'Aja'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/2026/07/18/mamdani-valuto-larresto-di-netanyahu-se-verra-allassemblea-onu_92450be0-4465-4422-af88-5853d1ab16cf.html",
    time: "42 min fa",
    pub_ts: 1784384368,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Scontro fra due auto sull'Adriatica, un morto e due feriti a Cesenatico",
    summary: "Il sindaco di Cesenatico: \"La notizia peggiore che si possa ricevere\"",
    body: "Il sindaco di Cesenatico: \"La notizia peggiore che si possa ricevere\"",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/07/18/scontro-fra-due-auto-sulladriatica-un-morto-e-due-feriti-a-cesenatico_4202ebfa-eb9c-4d42-be03-0a4e54cbdfad.html",
    time: "1 ora fa",
    pub_ts: 1784379810,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "Merz scarica il capogruppo della Cdu diventato padre con la maternità surrogata, lui si dimette",
    summary: "Come presidente del partito ha chiesto le dimissioni di Jens Spahn che ha avuto un figlio con il compagno ricorrendo alla procedura negli Stati Uniti",
    body: "Come presidente del partito ha chiesto le dimissioni di Jens Spahn che ha avuto un figlio con il compagno ricorrendo alla procedura negli Stati Uniti",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/2026/07/18/merz-scarica-il-capogruppo-della-cdu-diventato-padre-con-la-maternita-surrogata_224f5f1a-0162-422e-9094-9e7f555338f9.html",
    time: "2 ore fa",
    pub_ts: 1784379338,
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
    time: "7 ore fa",
    pub_ts: 1784358219,
    tags: [],
  },
  {
    id: 5,
    cat: "politica-italiana",
    title: "Il caso Roggero non è legittima difesa. La sentenza dei giudici è giusta e corretta",
    summary: "La condanna definitiva a Mario Roggero riaccende il dibattito sulla legittima difesa in Italia. Ecco perché, dati e legge alla mano, la decisione dei giudici sul caso del gioielliere di Grinzane è giuridicamente ineccepibile.",
    body: "di Francesco Gatti (Avvocato del Foro di Perugia) Mario Roggero, il gioielliere settantaduenne di Gallo di Grinzane, in provincia di Cuneo, imputato per l'uccisione di due rapinatori e per il ferimento di un terzo uomo dopo un assalto al suo negozio, sta per entrare in carcere. La Prima sezione penale della Suprema Corte di Cassazione ha reso definitiva la condanna a 14 anni e 9 mesi di reclusione rigettando il ricorso presentato contro la precedente sentenza della Corte di Assise di Appello di Torino.\n\nIntorno al caso si è scatenata una polemica furiosa, con politici e opinionisti che parlano di una sentenza “ingiusta” e di sanzione pesante verso un uomo che si è solo difeso e argomentano che si sarebbe dovuta applicare la legittima difesa. Ma i fatti, e la legge, raccontano una storia diversa. La decisione dei giudici piemontesi e dei magistrati è giusta e corretta, e un gran lavoro hanno svolto i difensori dell’imputato, capaci di contenere in misura rilevante, una pena che - si vedrà - Roggero non necessariamente sconterà per intero in carcere.\n\nDi cosa parliamo in questo articolo: Cos'è successo Perché non è legittima difesa Perché non si possono usare le armi come negli Stati Uniti? \"Ma era esasperato dopo tante rapine\" Perché allora \"solo\" 14 anni e 9 mesi? Mario Roggero andrà in carcere? Sarà graziato? Cos'è successo Il caso è tristemente noto: alla fine di aprile 2021 tre rapinatori mascherati, armati di coltello e di una pistola giocattolo, cui era stato occultato il tappo rosso, assaltano la gioielleria di Roggero minacciando lui, la moglie e la figlia.\n\nI tre scappano dal retro del negozio e, mentre stavano salendo su un’auto utilitaria (uno era già a bordo, al posto di guida, e due stavano salendo), Roggero li insegue sparando numerosi colpi di pistola: due rapinatori vengono uccisi sul colpo, il terzo resta gravemente ferito. L’intera scena viene ripresa dalle telecamere di servizio e da quelle della vicina filiale delle Poste Italiane. Roggero viene processato per duplice omicidio volontario, tentato omicidio e porto illegale di armi (la pistola che usava era regolarmente detenuta, ma non poteva portarla per strada).\n\nIn primo grado la Corte d'Assise di Asti lo condanna a 17 anni; in appello la pena è scesa a 14 anni e 9 mesi, accogliendo l’appello solo in punto di trattamento sanzionatorio. La sentenza è reperibile qui . Perché non è legittima difesa L’istituto della legittima difesa è presente nel nostro ordinamento dalla metà del 1800 ed è attualmente disciplinato dall’art. 52 c.p. del Codice Rocco del 1930.\n\nIn breve, la legge stabilisce che non è punibile chi commette un reato (anche grave) perché costretto dalla necessità di difendere se stesso o gli altri da un pericolo immediato e ingiusto, a patto che la difesa sia proporzionata all'offesa. Infatti secondo l’articolo di legge, “Non è punibile chi ha commesso il fatto per esservi stato costretto dalla necessità di difendere un diritto proprio od altrui contro il pericolo attuale di un'offesa ingiusta, sempre che la difesa sia proporzionata all'offesa”.\n\nAnche se questa legge ha subito due importanti modifiche nel 2006 e nel 2019 , che ne hanno ampliato i limiti, i suoi requisiti fondamentali non sono cambiati. Se un giudice accerta che si è trattato di vera legittima difesa, l'azione non è più considerata un reato e la persona viene assolta. C’è davvero bisogno di una riforma della legittima difesa? Tuttavia, farsi giustizia da soli è un'eccezione che lo Stato concede solo a condizioni severissime.\n\nDevono essere presenti, contemporaneamente, tre elementi: 1) Il pericolo deve essere attuale: la minaccia deve essere concreta e immediata (sta succedendo in quel preciso istante). 2) La reazione deve essere necessaria: non c'era altro modo per salvarsi (ad esempio, non era possibile scappare o barricarsi). La reazione deve essere l'unica strada percorribile. 3) Deve esserci proporzione tra offesa e difesa: non si può difendere un bene materiale (come i soldi o un oggetto) uccidendo o ferendo gravemente qualcuno.\n\nLa proporzione si valuta confrontando il valore dei beni in gioco (es. vita contro vita, o vita contro patrimonio) e i mezzi usati (es. un'arma vera contro una finta). A ben vedere, nel caso Roggero, come ha correttamente osservato la Corte di Assise di Appello di Torino, mancavano tutti e tre i requisiti della legittima difesa: 1) Il pericolo non era attuale. La rapina si era conclusa e i tre rapinatori erano usciti dal negozio e stavano salendo sull’auto per scappare; 2) Era ampiamente discutibile la proporzione tra offesa e difesa: come è evidente, i rapinatori stavano rubando dei gioielli (un danno economico), mentre la reazione del gioielliere ha causato la morte di due persone e il ferimento grave di una terza (la vita umana ha un valore giuridico immensamente superiore al denaro).\n\nInoltre, c'è stato uno squilibrio nei mezzi: i rapinatori avevano un coltello e una pistola finta, mentre Roggero ha usato un'arma vera; 3) La reazione non era necessaria: se Roggero avesse davvero temuto per l’incolumità sua e dei suoi familiari, avrebbe potuto agevolmente chiudersi dentro il negozio (che aveva porte e vetri blindati) e chiamare le forze dell'ordine, invece di inseguire i ladri in strada per cercare lo scontro.\n\nI video delle telecamere di sorveglianza hanno confermato chiaramente questa dinamica. Per questo motivo, i giudici hanno concluso che non si è trattato di legittima difesa perché mancavano con certezza i requisiti 1 e 3: la rapina era terminata e non c'era più alcun bisogno di sparare per difendersi. La loro decisione è quindi perfettamente in linea con i principi giuridici vigenti nel nostro ordinamento.\n\n[NEWSLETTER_HERE] Perché non si possono usare le armi come negli Stati Uniti? Nel dibattito suscitato dal caso, c’è stato chi ha invocato il sistema americano per l’uso delle armi e la difesa personale. Tuttavia, la realtà giuridica italiana è completamente diversa da quella statunitense per due motivi fondamentali: 1) In Italia l’uso legittimo delle armi è un’esclusiva dello Stato ed è consentito solo alle forze dell'ordine (Polizia, Carabinieri, Guardia di Finanza, Esercito) nell'esercizio delle loro funzioni e non indiscriminatamente a tutti i cittadini (che, dunque, non possono decidere autonomamente di usare un'arma per farsi giustizia); 2) Non abbiamo una legge costituzionale come il “Secondo Emendamento” (in vigore dal 1791 quando non esistevano ancora forze di polizia pubbliche in grado di proteggere la popolazione) che tutela “il diritto dei cittadini di detenere e portare armi perché necessario alla sicurezza dello Stato” e consente ai cittadini USA di girare armati (salve alcune disposizioni speciali in certi Stati o Contee).\n\n\"Ma era esasperato dopo tante rapine\" Molti sostengono che si sarebbe dovuta comprendere l'esasperazione di Roggero, considerando la grave violenza e le minacce subite da lui e dalla sua famiglia quel giorno. Tuttavia, il nostro Codice Penale è chiarissimo anche su questo punto e non è mai cambiato dal 1930. L'articolo 90 stabilisce infatti che gli stati emotivi o passionali (come la rabbia, la paura, la foga o l'esasperazione) non cancellano e non riducono la responsabilità di un reato.\n\nIn parole povere: essere sotto shock o infuriati non è una scusa valida per la legge. L'unico caso in cui una forte emozione potrebbe evitare la condanna è se questa avesse provocato una totale incapacità di intendere e di volere (una temporanea follia, che va dimostrata con rigorose perizie psichiatriche). Ma non è questo il caso di Roggero: la sua azione in quel momento è stata lucida, volontaria e intenzionale.\n\nPerché allora \"solo\" 14 anni e 9 mesi? In Italia, la legge stabilisce che la pena minima per l’omicidio volontario (art. 575 c.p.) non è inferiore ai 21 anni di carcere. Mario Roggero, che ha ucciso due persone, ne ha ferita gravemente una terza e portava con sé un'arma abusiva, è stato condannato in via definitiva a 14 anni e 9 mesi. Questa pena è stata decisa con un processo ordinario; se Roggero avesse optato per il “rito abbreviato” (un processo più rapido che prevede sconti automatici), la condanna sarebbe stata ridotta di un ulteriore terzo.\n\nA conti fatti, si tratta di una sanzione relativamente mite se si pensa alla gravità della situazione (due morti e un ferito grave). Questo risultato è stato possibile grazie all'ottimo lavoro dei suoi avvocati difensori e a un approccio garantista dei giudici. I giudici hanno concesso a Roggero diversi sconti di pena (le cosiddette attenuanti): le attenuanti generiche e l'attenuante della provocazione (perché il tutto è nato dalla rapina subita).\n\nQuesti sconti gli sono stati concessi nonostante Roggero non abbia mai mostrato un reale pentimento, un elemento che di solito i giudici considerano molto importante quando decidono la gravità della condanna. Inoltre, sono minimi gli aumenti per la somma dei vari reati (il secondo omicidio, il tentato omicidio e il porto abusivo d'arma). Nelle stesse circostanze, chiunque altro avesse commesso gli stessi identici reati sarebbe stato condannato a 30 anni di carcere.\n\nSe Roggero ha ricevuto una pena così ridotta, è solo perché i giudici hanno tenuto conto del contesto eccezionale e drammatico in cui si sono svolti i fatti. Mario Roggero andrà in carcere? Sarà graziato? Il gioielliere andrà sicuramente in carcere. Costituendosi spontaneamente, avrà la possibilità di scegliere in quale struttura presentarsi e, di conseguenza, quale Tribunale di Sorveglianza seguirà il suo percorso da detenuto ( un po' come fece l’ex amministratore di FS Mauro Moretti , che decise di presentarsi al carcere di Orvieto).\n\nMolti in questo periodo stanno parlando della grazia. Bisogna precisare che la grazia prevede un percorso burocratico molto lungo e complesso, e l'ultima parola spetta unicamente al Presidente della Repubblica. Chi sta ventilando questa strada lo sta facendo più che altro per motivi politici e ideologici. Tanto è vero che in un incontro con il ministro della Giustizia Nordio, il Presidente Mattarella ha ricordato che “la grazia spetta solo al Presidente della Repubblica”, citando al ministro durante il colloquio le parole di Luigi Einaudi: “È dovere del Presidente della Repubblica di evitare si pongano precedenti, grazie ai quali accada o sembri accadere che egli non trasmetta al suo successore immuni da qualsiasi incrinatura le facoltà che la Costituzione gli attribuisce”.\n\nLa strada più concreta e probabile per Roggero è un'altra: dopo aver trascorso un primo periodo in cella (circa 4-8 mesi) per le valutazioni dei medici e degli educatori, potrebbero essergli concessi i domiciliari a casa o in una struttura di cura. La legge italiana (l'articolo 47-ter sull’ordinamento penitenziario), infatti, permette a tutti i detenuti che hanno più di 70 anni di scontare la condanna a domicilio.\n\nInfine, potrebbero esserci ulteriori sconti di pena, previsti tra i benefici di legge, come la “liberazione anticipata”, che toglie tre mesi di reclusione per ogni anno di pena scontata comportandosi bene.",
    source: "Valigia Blu",
    url: "https://www.valigiablu.it/caso-roggero-legittima-difesa-sentenza-giusta/",
    time: "1 giorno fa",
    pub_ts: 1784229590,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "China hits out at British Steel nationalisation",
    summary: "The UK government said taking the firm into public hands would safeguard \"a vital national capability\".",
    body: "The UK government said taking the firm into public hands would safeguard \"a vital national capability\".",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cjd4kvxpd3do?at_medium=RSS&at_campaign=rss",
    time: "22 ore fa",
    pub_ts: 1784306662,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "Trump alleges China meddled in 2020 election and questions voting security ahead of midterms",
    summary: "China said Trump's claims were fabricated and US Democrats said he was paving the way to undermine November's elections.",
    body: "China said Trump's claims were fabricated and US Democrats said he was paving the way to undermine November's elections.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cx2k9wvv5wyo?at_medium=RSS&at_campaign=rss",
    time: "1 giorno fa",
    pub_ts: 1784288220,
    tags: [],
  },
  {
    id: 8,
    cat: "geopolitica",
    title: "Jamie Dimon, el banquero más poderoso del mundo: “Sé que Europa no ve a EE UU como un amigo, pero lo es. Somos aliados desde la II Guerra Mundial y esa relación, con algunos cambios, continuará”",
    summary: "El presidente y consejero delegado de JPMorgan avisa de que las Bolsas “están muy caras” en un entorno de múltiples riesgos. “Nadie vio venir la crisis de 1974, el ‘crash’ de 1987 o la burbuja inmobiliaria, pero hay que estar preparados por si vuelve a suceder”, asegura en una entrevista exclusiva con EL PAÍS",
    body: "En el Edificio Pirámide, situado en el paseo de la Castellana de Madrid, se diseñan algunas de las operaciones empresariales más importantes de España y las grandes fortunas acuden en busca de alternativas de inversión para su dinero. Es la sede de JPMorgan, el mayor banco del mundo (sin contar las firmas chinas con control estatal), y el pasado 10 de julio se respiraba el ambiente de las grandes ocasiones.\n\nTodo estaba dispuesto, centros de rosas con los colores de las banderas de España y de Estados Unidos incluidos, para recibir al “jefe”. Nada menos que Jamie Dimon, el último banquero previo a la crisis financiera que sobrevive en el puesto. Nacido en Nueva York hace 70 años, ejerce como presidente y consejero delegado desde 2006. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/economia/negocios/2026-07-18/jamie-dimon-el-banquero-mas-poderoso-del-mundo-se-que-europa-no-ve-a-ee-uu-como-un-amigo-pero-lo-es-somos-aliados-desde-la-ii-guerra-mundial-y-esa-relacion-con-algunos-cambios-continuara.html",
    time: "50 min fa",
    pub_ts: 1784383900,
    tags: [],
  },
  {
    id: 9,
    cat: "geopolitica",
    title: "Ruido y furia entre políticos y jueces: cómo reparar la (maltrecha) justicia",
    summary: "Vivimos días agitados en torno al funcionamiento del sistema judicial español. El Gobierno socialista denuncia una confabulación de un sector de la judicatura para derribar a Pedro Sánchez mientras la derecha sostiene que los jueces son los héroes que están poniendo freno a los desmanes del presidente. ¿Qué se puede hacer para mejorar el sistema? Algunos juristas apuntan a que, en algunos…",
    body: "Vivimos días agitados en torno al funcionamiento del sistema judicial español. El Gobierno socialista denuncia una confabulación de un sector de la judicatura para derribar a Pedro Sánchez mientras la derecha sostiene que los jueces son los héroes que están poniendo freno a los desmanes del presidente. ¿Qué se puede hacer para mejorar el sistema? Algunos juristas apuntan a que, en algunos aspectos, seguimos en el siglo XIX",
    source: "El Pais",
    url: "https://elpais.com/ideas/2026-07-18/ruido-y-furia-entre-politicos-y-jueces-como-reparar-la-maltrecha-justicia.html",
    time: "51 min fa",
    pub_ts: 1784383842,
    tags: [],
  },
  {
    id: 10,
    cat: "geopolitica",
    title: "Dimite el líder parlamentario conservador alemán tras tener un bebé por vientre de alquiler: “Mi felicidad no es compatible con mi cargo”",
    summary: "La decisión del presidente del grupo parlamentario CDU/CSU en el Bundestag, Jens Spahn, de viajar a Estados Unidos para recurrir a esta práctica prohibida en Alemania generó indignación",
    body: "Este sábado, uno de los hombres más poderosos de la política alemana, Jens Spahn , presidente del grupo parlamentario conservador CDU/CSU en el Bundestag alemán, ha dimitido. Spahn y su marido Daniel Funke anunciaron el miércoles pasado que se habían convertido en padres del bebé Georg. En declaraciones al diario sensacionalista Bild , confirmaron que para ello habían recurrido a un vientre de alquiler en Estados Unidos.\n\nEsta práctica, sin embargo, está estrictamente prohibida en Alemania ; y es considerada por organismos internacionales como violencia contra las mujeres al considerarla como explotación reproductiva. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/sociedad/2026-07-18/dimite-el-lider-parlamentario-conservador-aleman-tras-tener-un-bebe-por-vientre-de-alquiler-mi-felicidad-no-es-compatible-con-mi-cargo.html",
    time: "1 ora fa",
    pub_ts: 1784381085,
    tags: [],
  },
  {
    id: 11,
    cat: "geopolitica",
    title: "US strikes hit Iran for seventh consecutive night",
    summary: "Iran has retaliated against US allies in the region, with Kuwait reporting that a power and water plant had been hit.",
    body: "Iran has retaliated against US allies in the region, with Kuwait reporting that a power and water plant had been hit.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cy748n8zx8ro?at_medium=RSS&at_campaign=rss",
    time: "3 ore fa",
    pub_ts: 1784375324,
    tags: [],
  },
  {
    id: 12,
    cat: "conflitti",
    title: "Iran accuses US of striking critical infrastructure as war intensifies",
    summary: "The conflict has been escalating since US President Donald Trump declared 10 days ago the peace deal with Iran is over.",
    body: "The conflict has been escalating since US President Donald Trump declared 10 days ago the peace deal with Iran is over.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/18/iran-accuses-us-of-striking-critical-infrastructure-as-war-intensifies?traffic_source=rss",
    time: "2 ore fa",
    pub_ts: 1784379566,
    tags: [],
  },
  {
    id: 13,
    cat: "conflitti",
    title: "Israel’s ‘Crimson Thread’ military barrier is strangling the West Bank",
    summary: "A new military barrier in the West Bank's Jordan Valley is cutting off Palestinian communities from their land.",
    body: "A new military barrier in the West Bank's Jordan Valley is cutting off Palestinian communities from their land.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/features/2026/7/18/israels-crimson-thread-military-barrier-is-strangling-the-west-bank?traffic_source=rss",
    time: "9 ore fa",
    pub_ts: 1784351711,
    tags: [],
  },
  {
    id: 14,
    cat: "conflitti",
    title: "Iraq signs 48 deals with US companies during PM’s visit to Washington",
    summary: "The deals include rebuilding the long-defunct Iraq-Syria crude oil pipeline, which could bypass the Strait of Hormuz.",
    body: "The deals include rebuilding the long-defunct Iraq-Syria crude oil pipeline, which could bypass the Strait of Hormuz.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/18/iraq-signs-48-deals-with-us-companies-during-pms-visit-to-washington?traffic_source=rss",
    time: "38 min fa",
    pub_ts: 1784384613,
    tags: [],
  },
  {
    id: 15,
    cat: "ai",
    title: "Applications close in 48 hours — here’s everything Australian founders need to know about Stripe x Startup Battlefield",
    summary: "The window is almost shut. On August 19, eight startups will take the stage at Stripe Tour Sydney in front of investors, global press, and the Australian tech community. One startup walks away with automatic entry into TechCrunch Disrupt in San Francisco — no application, no further competition, a guaranteed spot on the world’s most",
    body: "The window is almost shut. On August 19, eight startups will take the stage at Stripe Tour Sydney in front of investors, global press, and the Australian tech community. One startup walks away with automatic entry into TechCrunch Disrupt in San Francisco — no application, no further competition, a guaranteed spot on the world’s most",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/17/applications-close-in-48-hours-heres-everything-australian-founders-need-to-know-about-stripe-x-startup-battlefield/",
    time: "15 ore fa",
    pub_ts: 1784329680,
    tags: [],
  },
  {
    id: 16,
    cat: "ai",
    title: "Databricks hits $188B valuation, extending its run as AI’s favorite second act",
    summary: "Databricks has remade its image into an AI company and has published research on the cost savings of open weight AI models for coding.",
    body: "Databricks has remade its image into an AI company and has published research on the cost savings of open weight AI models for coding.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/17/databricks-hits-188b-valuation-extending-its-run-as-ais-favorite-second-act/",
    time: "16 ore fa",
    pub_ts: 1784326376,
    tags: [],
  },
  {
    id: 17,
    cat: "ai",
    title: "Agility Robotics plants its flag in Tesla’s backyard",
    summary: "Agility is opening a new training center for its Digit robots in Fremont, California.",
    body: "Agility is opening a new training center for its Digit robots in Fremont, California.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/17/agility-robotics-plants-its-flag-in-teslas-backyard/",
    time: "18 ore fa",
    pub_ts: 1784319589,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "Mutti apre la campagna del pomodoro con vendite in crescita del 5%",
    summary: "Si avvia alla nuova campagna di raccolta e lavorazione del pomodoro forte di risultati di mercato positivi Francesco Mutti, amministratore delegato dell’azienda conserviera ormai tra i leader non solo italiani...",
    body: "Si avvia alla nuova campagna di raccolta e lavorazione del pomodoro forte di risultati di mercato positivi Francesco Mutti, amministratore delegato dell’azienda conserviera ormai tra i leader non solo italiani...",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/mutti-apre-campagna-pomodoro-vendite-crescita-5percento-AJ30Q1M",
    time: "1 giorno fa",
    pub_ts: 1784282580,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "What Is Moonshot AI? Why China’s New Model Is Roiling Markets",
    summary: "Chinese startup Moonshot AI released a new artificial-intelligence model on July 17 that drew global attention both for its powerful capabilities and for sending stock markets reeling around the world.",
    body: "Chinese startup Moonshot AI released a new artificial-intelligence model on July 17 that drew global attention both for its powerful capabilities and for sending stock markets reeling around the world.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-17/what-is-moonshot-ai-why-china-s-new-model-is-roiling-markets",
    time: "20 ore fa",
    pub_ts: 1784311449,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "Traders are increasingly betting against SpaceX just weeks after IPO",
    summary: "Shares of Elon Musk’s rockets and AI company have slipped below their listing price for the first time",
    body: "Shares of Elon Musk’s rockets and AI company have slipped below their listing price for the first time",
    source: "Financial Times",
    url: "https://www.ft.com/content/2b96703d-440b-46db-8d86-9fff9ecc59d5?syn-25a6b1a6=1",
    time: "4 ore fa",
    pub_ts: 1784372402,
    tags: [],
  },
  {
    id: 21,
    cat: "economia-tech",
    title: "Martin Wolf: the next crash — why this time might not be different",
    summary: "Stock markets are not only ignoring the obvious threats, but seem imbued with extreme optimism",
    body: "Stock markets are not only ignoring the obvious threats, but seem imbued with extreme optimism",
    source: "Financial Times",
    url: "https://www.ft.com/content/de2978b0-481c-4af5-9e77-9e34650fb20f?syn-25a6b1a6=1",
    time: "11 ore fa",
    pub_ts: 1784347211,
    tags: [],
  },
  {
    id: 22,
    cat: "economia-tech",
    title: "IPhone Hacking Firm Sues Ex-Worker Over Alleged Theft of Secrets",
    summary: "Magnet Forensics Inc., a Canadian cybersecurity firm, accused a former contractor of sharing trade secrets about a previously unknown flaw used to hack iPhones with a rival firm.",
    body: "Magnet Forensics Inc., a Canadian cybersecurity firm, accused a former contractor of sharing trade secrets about a previously unknown flaw used to hack iPhones with a rival firm.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-17/iphone-hacking-firm-sues-ex-worker-over-alleged-theft-of-secrets",
    time: "18 ore fa",
    pub_ts: 1784319079,
    tags: [],
  },
  {
    id: 23,
    cat: "economia-tech",
    title: "Sateliot Expands Funding to Offer Satellite Service to Phones",
    summary: "Satellite startup Sateliot is seeking to boost an ongoing fundraising round to as much as €150 million ($172 million), about a 50% increase as the Spanish company aims to offer satellite connectivity directly to smartphones.",
    body: "Satellite startup Sateliot is seeking to boost an ongoing fundraising round to as much as €150 million ($172 million), about a 50% increase as the Spanish company aims to offer satellite connectivity directly to smartphones.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-17/sateliot-expands-funding-to-offer-satellite-service-to-phones",
    time: "22 ore fa",
    pub_ts: 1784307433,
    tags: [],
  },
];
