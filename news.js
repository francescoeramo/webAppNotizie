// Generato automaticamente il 2026-07-17 19:19 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1784315971;

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
    title: "Mario Roggero è arrivato nel carcere milanese di Bollate: \"Mattarella ha graziato Minetti, si metta una mano alla coscienza\". Il ministero della Giustizia, l'iter non è partito",
    summary: "La moglie fa istanza per la grazia. Ministero della Giustizia, l'iter non è partito.",
    body: "La moglie fa istanza per la grazia. Ministero della Giustizia, l'iter non è partito.",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/politica/2026/07/17/mario-roggero-e-arrivato-nel-carcere-milanese-di-bollate-mattarella-ha-graziato-minetti_8512f725-5f9e-467c-ab28-9cef0ac24fe1.html",
    time: "1 ora fa",
    pub_ts: 1784310542,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Preferenze, nuovo round al Senato. Scontro FdI-FI sulla giustizia",
    summary: "Lupi annuncia un emendamento. Donzelli: 'Niente scambi su intercettazioni'. Mulè: 'Non passano'",
    body: "Lupi annuncia un emendamento. Donzelli: 'Niente scambi su intercettazioni'. Mulè: 'Non passano'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/politica/2026/07/17/preferenze-nuovo-round-al-senato.-scontro-fdi-fi-sulla-giustizia_d86fd413-bf58-42df-9595-2488dce19035.html",
    time: "2 ore fa",
    pub_ts: 1784308105,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "Il caso Roggero non è legittima difesa. La sentenza dei giudici è giusta e corretta",
    summary: "La condanna definitiva a Mario Roggero riaccende il dibattito sulla legittima difesa in Italia. Ecco perché, dati e legge alla mano, la decisione dei giudici sul caso del gioielliere di Grinzane è giuridicamente ineccepibile.",
    body: "di Francesco Gatti (Avvocato del Foro di Perugia) Mario Roggero, il gioielliere settantaduenne di Gallo di Grinzane, in provincia di Cuneo, imputato per l'uccisione di due rapinatori e per il ferimento di un terzo uomo dopo un assalto al suo negozio, sta per entrare in carcere. La Prima sezione penale della Suprema Corte di Cassazione ha reso definitiva la condanna a 14 anni e 9 mesi di reclusione rigettando il ricorso presentato contro la precedente sentenza della Corte di Assise di Appello di Torino.\n\nIntorno al caso si è scatenata una polemica furiosa, con politici e opinionisti che parlano di una sentenza “ingiusta” e di sanzione pesante verso un uomo che si è solo difeso e argomentano che si sarebbe dovuta applicare la legittima difesa. Ma i fatti, e la legge, raccontano una storia diversa. La decisione dei giudici piemontesi e dei magistrati è giusta e corretta, e un gran lavoro hanno svolto i difensori dell’imputato, capaci di contenere in misura rilevante, una pena che - si vedrà - Roggero non necessariamente sconterà per intero in carcere.\n\nDi cosa parliamo in questo articolo: Cos'è successo Perché non è legittima difesa Perché non si possono usare le armi come negli Stati Uniti? \"Ma era esasperato dopo tante rapine\" Perché allora \"solo\" 14 anni e 9 mesi? Mario Roggero andrà in carcere? Sarà graziato? Cos'è successo Il caso è tristemente noto: alla fine di aprile 2021 tre rapinatori mascherati, armati di coltello e di una pistola giocattolo, cui era stato occultato il tappo rosso, assaltano la gioielleria di Roggero minacciando lui, la moglie e la figlia.\n\nI tre scappano dal retro del negozio e, mentre stavano salendo su un’auto utilitaria (uno era già a bordo, al posto di guida, e due stavano salendo), Roggero li insegue sparando numerosi colpi di pistola: due rapinatori vengono uccisi sul colpo, il terzo resta gravemente ferito. L’intera scena viene ripresa dalle telecamere di servizio e da quelle della vicina filiale delle Poste Italiane. Roggero viene processato per duplice omicidio volontario, tentato omicidio e porto illegale di armi (la pistola che usava era regolarmente detenuta, ma non poteva portarla per strada).\n\nIn primo grado la Corte d'Assise di Asti lo condanna a 17 anni; in appello la pena è scesa a 14 anni e 9 mesi, accogliendo l’appello solo in punto di trattamento sanzionatorio. La sentenza è reperibile qui . Perché non è legittima difesa L’istituto della legittima difesa è presente nel nostro ordinamento dalla metà del 1800 ed è attualmente disciplinato dall’art. 52 c.p. del Codice Rocco del 1930.\n\nIn breve, la legge stabilisce che non è punibile chi commette un reato (anche grave) perché costretto dalla necessità di difendere se stesso o gli altri da un pericolo immediato e ingiusto, a patto che la difesa sia proporzionata all'offesa. Infatti secondo l’articolo di legge, “Non è punibile chi ha commesso il fatto per esservi stato costretto dalla necessità di difendere un diritto proprio od altrui contro il pericolo attuale di un'offesa ingiusta, sempre che la difesa sia proporzionata all'offesa”.\n\nAnche se questa legge ha subito due importanti modifiche nel 2006 e nel 2019 , che ne hanno ampliato i limiti, i suoi requisiti fondamentali non sono cambiati. Se un giudice accerta che si è trattato di vera legittima difesa, l'azione non è più considerata un reato e la persona viene assolta. C’è davvero bisogno di una riforma della legittima difesa? Tuttavia, farsi giustizia da soli è un'eccezione che lo Stato concede solo a condizioni severissime.\n\nDevono essere presenti, contemporaneamente, tre elementi: 1) Il pericolo deve essere attuale: la minaccia deve essere concreta e immediata (sta succedendo in quel preciso istante). 2) La reazione deve essere necessaria: non c'era altro modo per salvarsi (ad esempio, non era possibile scappare o barricarsi). La reazione deve essere l'unica strada percorribile. 3) Deve esserci proporzione tra offesa e difesa: non si può difendere un bene materiale (come i soldi o un oggetto) uccidendo o ferendo gravemente qualcuno.\n\nLa proporzione si valuta confrontando il valore dei beni in gioco (es. vita contro vita, o vita contro patrimonio) e i mezzi usati (es. un'arma vera contro una finta). A ben vedere, nel caso Roggero, come ha correttamente osservato la Corte di Assise di Appello di Torino, mancavano tutti e tre i requisiti della legittima difesa: 1) Il pericolo non era attuale. La rapina si era conclusa e i tre rapinatori erano usciti dal negozio e stavano salendo sull’auto per scappare; 2) Era ampiamente discutibile la proporzione tra offesa e difesa: come è evidente, i rapinatori stavano rubando dei gioielli (un danno economico), mentre la reazione del gioielliere ha causato la morte di due persone e il ferimento grave di una terza (la vita umana ha un valore giuridico immensamente superiore al denaro).\n\nInoltre, c'è stato uno squilibrio nei mezzi: i rapinatori avevano un coltello e una pistola finta, mentre Roggero ha usato un'arma vera; 3) La reazione non era necessaria: se Roggero avesse davvero temuto per l’incolumità sua e dei suoi familiari, avrebbe potuto agevolmente chiudersi dentro il negozio (che aveva porte e vetri blindati) e chiamare le forze dell'ordine, invece di inseguire i ladri in strada per cercare lo scontro.\n\nI video delle telecamere di sorveglianza hanno confermato chiaramente questa dinamica. Per questo motivo, i giudici hanno concluso che non si è trattato di legittima difesa perché mancavano con certezza i requisiti 1 e 3: la rapina era terminata e non c'era più alcun bisogno di sparare per difendersi. La loro decisione è quindi perfettamente in linea con i principi giuridici vigenti nel nostro ordinamento.\n\n[NEWSLETTER_HERE] Perché non si possono usare le armi come negli Stati Uniti? Nel dibattito suscitato dal caso, c’è stato chi ha invocato il sistema americano per l’uso delle armi e la difesa personale. Tuttavia, la realtà giuridica italiana è completamente diversa da quella statunitense per due motivi fondamentali: 1) In Italia l’uso legittimo delle armi è un’esclusiva dello Stato ed è consentito solo alle forze dell'ordine (Polizia, Carabinieri, Guardia di Finanza, Esercito) nell'esercizio delle loro funzioni e non indiscriminatamente a tutti i cittadini (che, dunque, non possono decidere autonomamente di usare un'arma per farsi giustizia); 2) Non abbiamo una legge costituzionale come il “Secondo Emendamento” (in vigore dal 1791 quando non esistevano ancora forze di polizia pubbliche in grado di proteggere la popolazione) che tutela “il diritto dei cittadini di detenere e portare armi perché necessario alla sicurezza dello Stato” e consente ai cittadini USA di girare armati (salve alcune disposizioni speciali in certi Stati o Contee).\n\n\"Ma era esasperato dopo tante rapine\" Molti sostengono che si sarebbe dovuta comprendere l'esasperazione di Roggero, considerando la grave violenza e le minacce subite da lui e dalla sua famiglia quel giorno. Tuttavia, il nostro Codice Penale è chiarissimo anche su questo punto e non è mai cambiato dal 1930. L'articolo 90 stabilisce infatti che gli stati emotivi o passionali (come la rabbia, la paura, la foga o l'esasperazione) non cancellano e non riducono la responsabilità di un reato.\n\nIn parole povere: essere sotto shock o infuriati non è una scusa valida per la legge. L'unico caso in cui una forte emozione potrebbe evitare la condanna è se questa avesse provocato una totale incapacità di intendere e di volere (una temporanea follia, che va dimostrata con rigorose perizie psichiatriche). Ma non è questo il caso di Roggero: la sua azione in quel momento è stata lucida, volontaria e intenzionale.\n\nPerché allora \"solo\" 14 anni e 9 mesi? In Italia, la legge stabilisce che la pena minima per l’omicidio volontario (art. 575 c.p.) non è inferiore ai 21 anni di carcere. Mario Roggero, che ha ucciso due persone, ne ha ferita gravemente una terza e portava con sé un'arma abusiva, è stato condannato in via definitiva a 14 anni e 9 mesi. Questa pena è stata decisa con un processo ordinario; se Roggero avesse optato per il “rito abbreviato” (un processo più rapido che prevede sconti automatici), la condanna sarebbe stata ridotta di un ulteriore terzo.\n\nA conti fatti, si tratta di una sanzione relativamente mite se si pensa alla gravità della situazione (due morti e un ferito grave). Questo risultato è stato possibile grazie all'ottimo lavoro dei suoi avvocati difensori e a un approccio garantista dei giudici. I giudici hanno concesso a Roggero diversi sconti di pena (le cosiddette attenuanti): le attenuanti generiche e l'attenuante della provocazione (perché il tutto è nato dalla rapina subita).\n\nQuesti sconti gli sono stati concessi nonostante Roggero non abbia mai mostrato un reale pentimento, un elemento che di solito i giudici considerano molto importante quando decidono la gravità della condanna. Inoltre, sono minimi gli aumenti per la somma dei vari reati (il secondo omicidio, il tentato omicidio e il porto abusivo d'arma). Nelle stesse circostanze, chiunque altro avesse commesso gli stessi identici reati sarebbe stato condannato a 30 anni di carcere.\n\nSe Roggero ha ricevuto una pena così ridotta, è solo perché i giudici hanno tenuto conto del contesto eccezionale e drammatico in cui si sono svolti i fatti. Mario Roggero andrà in carcere? Sarà graziato? Il gioielliere andrà sicuramente in carcere. Costituendosi spontaneamente, avrà la possibilità di scegliere in quale struttura presentarsi e, di conseguenza, quale Tribunale di Sorveglianza seguirà il suo percorso da detenuto ( un po' come fece l’ex amministratore di FS Mauro Moretti , che decise di presentarsi al carcere di Orvieto).\n\nMolti in questo periodo stanno parlando della grazia. Bisogna precisare che la grazia prevede un percorso burocratico molto lungo e complesso, e l'ultima parola spetta unicamente al Presidente della Repubblica. Chi sta ventilando questa strada lo sta facendo più che altro per motivi politici e ideologici. Tanto è vero che in un incontro con il ministro della Giustizia Nordio, il Presidente Mattarella ha ricordato che “la grazia spetta solo al Presidente della Repubblica”, citando al ministro durante il colloquio le parole di Luigi Einaudi: “È dovere del Presidente della Repubblica di evitare si pongano precedenti, grazie ai quali accada o sembri accadere che egli non trasmetta al suo successore immuni da qualsiasi incrinatura le facoltà che la Costituzione gli attribuisce”.\n\nLa strada più concreta e probabile per Roggero è un'altra: dopo aver trascorso un primo periodo in cella (circa 4-8 mesi) per le valutazioni dei medici e degli educatori, potrebbero essergli concessi i domiciliari a casa o in una struttura di cura. La legge italiana (l'articolo 47-ter sull’ordinamento penitenziario), infatti, permette a tutti i detenuti che hanno più di 70 anni di scontare la condanna a domicilio.\n\nInfine, potrebbero esserci ulteriori sconti di pena, previsti tra i benefici di legge, come la “liberazione anticipata”, che toglie tre mesi di reclusione per ogni anno di pena scontata comportandosi bene.",
    source: "Valigia Blu",
    url: "https://www.valigiablu.it/caso-roggero-legittima-difesa-sentenza-giusta/",
    time: "23 ore fa",
    pub_ts: 1784229590,
    tags: [],
  },
  {
    id: 4,
    cat: "politica-italiana",
    title: "Ucraina in piazza contro la rimozione di Fedorov, il ministro che aveva rivoluzionato il modo di combattere",
    summary: "La rimozione di Mychajlo Fedorov dalla Difesa accende le proteste in Ucraina. Dietro il siluramento, tensioni militari e calcoli politici.",
    body: "Kyiv trattiene il fiato. La rimozione di Mychajlo Fedorov dal ministero della Difesa – il più popolare tra i tecnocrati di Zelens’kyj, l’uomo dei droni e dello Starlink negato ai russi – ha acceso in poche ore piazze, caserme e Verchovna Rada (il parlamento ucraino). Il quadro cambia di ora in ora, ma quel che rimane, a prescindere da come evolverà la situazione, è il sostegno incondizionato degli ucraini a Fedorov.\n\nNei giorni scorsi, il presidente ucraino Volodymyr Zelens’kyj ha avviato un rimpasto di governo che ha portato prima alle dimissioni della premier Julija Svyrydenko e del suo esecutivo, e poi alla rimozione, dopo appena sei mesi di incarico, del ministro della Difesa Mychajlo Fedorov, tecnocrate 35enne noto per aver guidato la trasformazione digitale dell’Ucraina fin dai tempi in cui coordinò la campagna presidenziale di Zelens’kyj nel 2019.\n\nIl capo di Stato ucraino non ha spiegato pubblicamente le ragioni della rimozione, limitandosi a chiedere una struttura militare più compatta, con un rapporto diretto tra i vertici delle forze armate e il ministero della Difesa. La decisione sarebbe maturata dopo un incontro tra Zelens’kyj, Fedorov e il comandante in capo delle forze armate Oleksandr Syrs’kyj, con il quale il ministro avrebbe avuto divergenze sulla gestione dell’apparato militare.\n\nAl suo posto è stato indicato come possibile successore il ministro dell’Interno uscente Ihor Klymenko , la cui nomina dovrà però essere approvata dal Parlamento. Prima dell’annuncio ufficiale, diversi deputati – sia di maggioranza che di opposizione – si erano detti contrari alla sostituzione del capo della Difesa. Fedorov ha confermato l’uscita dal governo con un messaggio sui social in cui ha rivendicato 22 risultati ottenuti in sei mesi di mandato : dal blocco dell’accesso russo a Starlink (che avrebbe ridotto l’efficacia dei droni russi) al dirottamento di fondi verso la produzione di droni a lungo raggio, fino al primo contratto per missili Patriot e alla campagna di isolamento logistico della Crimea occupata .\n\nL’elenco dettagliato dei successi ha reso, secondo diversi osservatori, ancora meno chiare le ragioni del suo allontanamento. La rimozione ha scatenato reazioni immediate nella società civile: gli attivisti ucraini hanno organizzato proteste contro la decisione di Zelens’kyj, con una manifestazione convocata per giovedì mattina, in vista di un atteso voto parlamentare per approvare il nuovo governo.\n\nIl luogo scelto ha un forte valore simbolico: è lo stesso dove, nel luglio 2025, migliaia di ucraini si riunirono dopo che il Parlamento aveva tolto l’indipendenza alle agenzie anticorruzione NABU e SAP, proteste che furono tra le più grandi contro il governo dall’inizio dell'invasione russa e che spinsero poi Zelens’kyj a fare marcia indietro . Alcuni analisti, come il politologo Volodymyr Fesenko, hanno avvertito che l’allontanamento di Fedorov rischia di compromettere riforme militari importanti in un momento delicato del conflitto con la Russia.\n\nFedorov tra Zelens’kyj e Syrs’kyj Fedorov è uno dei collaboratori più stretti di Zelens’kyj, con cui lavora fin dalla campagna elettorale del 2019, quando il futuro presidente era ancora attore e produttore. Proprio per questo legame, il presidente gli avrebbe offerto la guida del nuovo governo come premier – proposta che Fedorov aveva rifiutato, dichiarando di voler portare a termine le riforme militari avviate.\n\nPrima di arrivare alla Difesa, Fedorov era già una figura centrale della politica ucraina: dal 2019 guidava la Trasformazione Digitale, dove aveva creato Diia , l’app che ha digitalizzato i servizi pubblici e il passaporto ucraino, rivelatasi particolarmente utile per gli sfollati durante la guerra. Arrivato al ministero della Difesa a gennaio 2026, ha impresso una svolta di stampo manageriale e imprenditoriale a un apparato tradizionalmente lento e opaco.\n\nHa ordinato una revisione interna del ministero e delle brigate che, secondo l’ Economist , ha fatto emergere sprechi per l’equivalente tra 6,7 e 7,2 miliardi di dollari a seconda delle stime (circa 300 miliardi di hryvnja). Ha aperto alcuni sistemi di approvvigionamento a gare pubbliche , riuscendo a ridurre in tempi brevi il costo dei proiettili d’artiglieria da 155 mm del 16%. Sul fronte tecnologico ha portato avanti la disattivazione dell’accesso russo a Starlink, la campagna “Turning Crimea into an island” per isolare la penisola annessa illegalmente dalla Russia nel 2014, l’aumento della produzione di droni a lungo raggio e da ricognizione, i primi contratti per missili Patriot Pac-2 GEM-T e la richiesta di fondi europei per i più avanzati Pac-3.\n\nHa inoltre riformato i contratti militari, alzato gli stipendi per fanteria e piloti, aperto il reclutamento a cittadini stranieri e previsto incentivi per il rientro dei disertori. Il suo punto debole riconosciuto è, tuttavia, la riforma della mobilitazione : nonostante gli sforzi, l’esercito ucraino continua a soffrire una carenza cronica di uomini, e alcuni interventi sono stati giudicati insufficienti o impopolari tra i soldati.\n\nA dare la misura di quanto il tema della mobilitazione sia già incandescente in Ucraina, basti ricordare l’episodio dello scorso 8 luglio a Leopoli, nel quartiere di Sykhiv: dopo il fermo di un ventenne da parte degli agenti del TCC (il centro di reclutamento territoriale), una folla di circa 200 persone ha circondato e ribaltato il veicolo dei reclutatori al grido di “vergogna”, ferendo anche un funzionario della polizia locale intervenuto per sedare gli scontri.\n\nUn episodio isolato, ma sintomatico di una frattura sociale attorno alla leva forzata che precede di una settimana le proteste per Fedorov e ne costituisce, in un certo senso, lo sfondo emotivo. Il rapporto con il comandante in capo delle forze armate Oleksandr Syrs’kyj è invece descritto da più fonti come uno scontro quasi generazionale e culturale: da una parte un giovane manager digitale abituato ai metodi delle startup , dall’altra un generale di formazione più tradizionale.\n\nSecondo la testata indipendente Ukrainska Pravda , tra i due si sarebbe consumato un “conflitto sistemico”, alimentato anche dalla resistenza di Fedorov alla corruzione contro una parte della lobby della difesa, che lo liquidava come un abile comunicatore più che un vero innovatore. “È come se parlassero lingue diverse”: un giudizio condiviso da gran parte dei vertici, ma capovolto tra i giovani ufficiali e i reparti impegnati sulle nuove tecnologie, che invece lo apprezzano.\n\nLe sue proposte di riforma del funzionamento del ministero – compreso un tentativo fallito di rimuovere lo stesso Syrs’kyj – avrebbero contribuito a incrinare in modo definitivo il rapporto tra i due, fino alla riunione con Zelens’kyj che avrebbe sancito la sua uscita. La piazza in fermento Nella piazza della capitale davanti al teatro “Ivan Franko”, ai piedi dell’ufficio presidenziale, le urla degli slogan di protesta sono cominciate puntuali alle ore 9, subito dopo il minuto di silenzio nazionale che onora la memoria di tutti gli ucraini caduti per la guerra.\n\nLe scritte sui soliti cartoni parlano da sole: “avete scelto quello sbagliato da rimuovere”, “non era questo il cambiamento che volevamo” e “davvero siamo di nuovo qui?”, “siamo stufi di scrivere e disegnare su pezzi di cartone” accompagnano anche quelle più dirette sull’ex ministro della Difesa “ridateci Fedorov”, “Fedorov siamo con te”. Eloquente anche la scritta “se volete scambiare qualcuno, scambiate i prigionieri non Fedorov”, con accanto il giornalista e attivista per i diritti umani Maksym Butkevych che, brevemente, racconta a Valigia Blu di come sia appena tornato da un evento a Bruxelles per parlare proprio della prigionia di guerra (che lui stesso ha vissuto sulla propria pelle ) e che oggi si ritrova nuovamente a protestare contro un sistema che non ne vuole sapere di funzionare correttamente.\n\n“Probabilmente è davvero il destino dell’Ucraina quello di lottare e scendere in piazza a far valere i propri diritti”, afferma. Tra la folla, colpisce in particolare la testimonianza di un ragazzo giovanissimo, figlio di un dipendente del ministero della Trasformazione Digitale – quindi cresciuto, in un certo senso, all’ombra dello stesso ambiente che ha lanciato la carriera politica di Fedorov.\n\nIl suo racconto offre paradossalmente una lettura più politica e meno emotiva della vicenda rispetto agli slogan sui cartelli. Secondo lui, e secondo quanto trapela anche da diversi ambienti politici vicini alla Rada, il consenso attorno a Fedorov non è populismo da piazza: è il riconoscimento di una competenza reale, di qualcuno capace di portare a termine riforme complesse – dalla ristrutturazione degli appalti militari alla campagna sui droni – in un apparato statale spesso paralizzato da lentezze burocratiche e resistenze interne.\n\nUn profilo raro, dice il ragazzo, nell’attuale classe dirigente ucraina, dove la retorica spesso supera i risultati concreti. Ma è proprio questa efficacia a rendere Fedorov scomodo agli occhi di Zelens’kyj. Il ragionamento – che circolerebbe non solo tra i giovani in piazza ma anche in ambienti politici più smaliziati – si regge su due pilastri. Il primo riguarda il discorso che ruota intorno alla vittoria: quando e se la guerra dovesse concludersi, e se questo dovesse accadere anche grazie ai risultati ottenuti da Fedorov alla Difesa – il merito politico rischierebbe di essere condiviso, se non addirittura assorbito, da lui piuttosto che dal presidente, complicando la costruzione di un’eredità politica tutta intestata a Zelens’kyj.\n\nIl secondo pilastro è più esplicitamente elettorale: un ministro così popolare, giovane e capace di mobilitare piazze intere in sua difesa potrebbe trasformarsi, nel giro di pochi anni, in un avversario credibile alle prossime elezioni – chiunque sia a indirle e qualunque sia il contesto in cui si terranno. In questa lettura, insomma, l’allontanamento di Fedorov non sarebbe soltanto la conseguenza delle tensioni con il comandante in capo Syrs’kyj o delle divergenze sulla gestione dell’esercito riportate dai media ucraini, ma anche il sintomo di un calcolo più freddo, di sopravvivenza politica, da parte di un presidente che guarda già al dopoguerra.\n\n[NEWSLETTER_HERE] Le crepe nelle istituzioni A dare ulteriore peso alla protesta, trasformandola da malcontento popolare a crepa interna alle stesse forze armate, è arrivata la notizia delle dimissioni del colonnello Pavlo Jelizarov, vicecomandante dell’Aeronautica ucraina e figura chiave nella guerra dei droni del paese. Jelizarov ha reso pubblica la sua decisione attraverso un post sul proprio profilo Facebook , dando come unica motivazione ufficiale la rimozione di Fedorov.\n\nNella lettera di dimissioni, il colonnello ha definito l’ormai ex ministro l’iniziatore di “riforme strategiche nel campo della difesa aerea” e ha avvertito che bloccarle, allontanando chi le aveva concepite, “provocherà numerose vittime e distruzioni in Ucraina” a causa dell’aggressione russa con missili e droni. Jelizarov, che si era arruolato nelle forze armate ucraine fin dal primo giorno dell’invasione su vasta scala, il 24 febbraio 2022, ha inoltre precisato di non voler proseguire il servizio militare nemmeno nella riserva, definendo la rimozione di Fedorov “un grande male per la capacità di difesa del Paese”.\n\nIl suo gesto si aggiunge a quello di altri collaboratori stretti del ministro uscente – tra cui i consulenti Serhij Sternenko e Serhij “Flash” Beskrestnov . Anch’essi hanno annunciato la fine del loro incarico al ministero della Difesa a conferma di come la rimozione di Fedorov non venga percepita, da chi ha lavorato a stretto contatto con lui, come un semplice avvicendamento tecnico, ma come l’interruzione di un percorso di riforma che una parte consistente dell’establishment militare considerava vitale per la tenuta del Paese sotto attacco russo.\n\nAnche Mustafa Najem (ex capo dell’Agenzia statale per il ripristino e lo sviluppo delle infrastrutture dell’Ucraina, giornalista, figura di spicco di Euromajdan) ha commentato sul suo canale Telegram la rimozione di Fedorov: gli è grato per tutto quello che ha fatto, ma invita a non giudicare la vicenda solo sulla base di simpatie o antipatie personali perché la decisione, sostiene, ridistribuisce l’intera responsabilità politica all’interno della catena di comando della difesa, rendendo Zelens’kyj il diretto responsabile dei risultati futuri del settore.\n\nSostituire un ministro in tempo di guerra può essere legittimo, ammette Nayem – ad esempio se non porta a termine i compiti, perde il controllo o non ottiene risultati. Ma nel caso di Fedorov, alla società non è stato ancora spiegato quali decisioni specifiche abbia fallito, con quali criteri sia stato valutato, e perché il suo mandato non potesse proseguire. La spiegazione ufficiosa data finora è il conflitto tra la leadership civile del ministero e il comando militare.\n\nSe questa è davvero la causa principale, osserva Nayem, allora il conflitto è stato risolto rimuovendo la parte civile, mentre l’altra parte – il comando militare – ha mantenuto intatte le proprie posizioni. E conclude: le conseguenze di questa scelta sono “molto più ampie di una singola nomina”. Il briefing di Fedorov e il voto in Rada Durante il briefing stampa tenuto poche ore dopo l’ondata di proteste , lo stesso Fedorov ha confermato un retroscena finora solo ipotizzato: Zelens’kyj gli avrebbe offerto il ruolo di consigliere presidenziale per restare comunque nella sua squadra, ma l’ex ministro avrebbe rifiutato.\n\nNello stesso intervento, Fedorov ha ripercorso alcuni risultati del suo mandato che aveva precedentemente elencato in chiaro sui social. Interpellato sulle manifestazioni scoppiate in suo sostegno in tutto il paese, Fedorov ha scelto parole nette per prendere le distanze da qualsiasi lettura personalistica della protesta ( video Suspilne ): “Le persone non sono scese in piazza per Fedorov, sono scese in piazza per loro stesse.\n\nNon si tratta di me, adesso. Si tratta della radice del problema, che va risolta. È impossibile vincere con questa struttura”. E ha aggiunto, riferendosi al proprio ruolo istituzionale: “Non ho bisogno di questa posizione per essere il ministro della Difesa. Ho bisogno di questa posizione per VINCERE la guerra”. Zelens’kyj a fine giornata ha annunciato la nomina di Yevhen Khmara , capo ad interim del Servizio di sicurezza ucraino (SBU), a ministro della Difesa ad interim.\n\n\"Una volta completate le necessarie procedure legali, chiederò ai parlamentari di appoggiare la nomina di Yevhen Khmara a ministro della Difesa\", ha dichiarato Zelens’kyj. Khmara, scrive The Kyiv Independent, ha precedentemente diretto il Centro per le Operazioni Speciali Alpha dell'agenzia, che ha svolto un ruolo chiave nella campagna di attacchi a lungo raggio dell'Ucraina contro la Russia, tenendosi però lontano dai riflettori.\n\nIl presidente ha dichiarato che Khmara ha acquisito \"un'esperienza vasta e, per molti versi, senza precedenti\" nella conduzione di operazioni di attacco tecnologico, aggiungendo che la difesa ucraina dovrebbe concentrarsi sullo sviluppo di capacità a lungo raggio, una delle aree chiave promosse da Fedorov durante il suo mandato. Khmara è noto per aver guidato l'operazione per la liberazione dell'Isola del Serpente.\n\nA gennaio, Zelens’kyj lo aveva nominato capo ad interim dell'SBU dopo le dimissioni di Vasyl Maliuk, che si è concentrato sulle operazioni contro la Russia. Immagine in anteprima: Claudia Bettiol",
    source: "Valigia Blu",
    url: "https://www.valigiablu.it/ucraina-proteste-rimozione-fedorov-difesa-droni/",
    time: "1 giorno fa",
    pub_ts: 1784209413,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "China hits out at British Steel nationalisation",
    summary: "The UK government said taking the firm into public hands would safeguard \"a vital national capability\".",
    body: "The UK government said taking the firm into public hands would safeguard \"a vital national capability\".",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cjd4kvxpd3do?at_medium=RSS&at_campaign=rss",
    time: "2 ore fa",
    pub_ts: 1784306662,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "Trump alleges China meddled in 2020 election and questions voting security ahead of midterms",
    summary: "China said Trump's claims were fabricated and US Democrats said he was paving the way to undermine November's elections.",
    body: "China said Trump's claims were fabricated and US Democrats said he was paving the way to undermine November's elections.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cx2k9wvv5wyo?at_medium=RSS&at_campaign=rss",
    time: "7 ore fa",
    pub_ts: 1784288220,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "JD Vance accuses Israel of 'manipulating' US public opinion to prolong Iran war",
    summary: "The US vice president says he thinks some Israeli politicians are trying to detail efforts to end the conflict.",
    body: "The US vice president says he thinks some Israeli politicians are trying to detail efforts to end the conflict.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c1m107yj327o?at_medium=RSS&at_campaign=rss",
    time: "21 ore fa",
    pub_ts: 1784236929,
    tags: [],
  },
  {
    id: 8,
    cat: "geopolitica",
    title: "China busca encabezar un nuevo orden mundial de la Inteligencia Artificial",
    summary: "Pekín lanza un organismo internacional con 29 países que aspira a influir en las reglas de esta tecnología y se perfila como polo alternativo al dominio de EE UU",
    body: "El presidente de China, Xi Jinping , ha presentado este viernes a su país como impulsor de un nuevo orden mundial para la inteligencia artificial (IA) . En un discurso pronunciado en Shanghái durante la apertura de la Conferencia Mundial de Inteligencia Artificial (WAIC, por sus siglas en inglés), el líder chino ha defendido el desarrollo abierto de esta tecnología y ha reclamado una mayor participación de los países en desarrollo en la elaboración de las normas que determinarán su futuro.\n\nSu intervención ha servido para lanzar la Organización Mundial de Cooperación en IA, una iniciativa promovida por Pekín y cuyo acuerdo fundacional han firmado este jueves 29 países, entre ellos Rusia, Brasil, Indonesia y Pakistán. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/internacional/2026-07-17/china-busca-encabezar-un-nuevo-orden-mundial-de-la-inteligencia-artificial.html",
    time: "3 ore fa",
    pub_ts: 1784302343,
    tags: [],
  },
  {
    id: 9,
    cat: "geopolitica",
    title: "Kimi K3, la IA china que ha puesto en guardia a Silicon Valley",
    summary: "El nuevo modelo, el mayor del mundo de código abierto, vuelve a colocar a China en la carrera por liderar los avances de esta tecnología",
    body: "La frenética carrera por liderar la industria de la inteligencia artificial (IA) generativa tiene un nuevo candidato a ganador. Se llama Kimi K3 y ha salido de los laboratorios de la start-up china Moonshot AI. El modelo ha creado mucho revuelo en el sector, ya que los resultados de los tests públicos de rendimiento que ha publicado la compañía lo sitúan por delante de Claude Fable 5, el más potente de Anthropic , o de GPT5.6 Sol, el mejor de ChatGPT.\n\nEl hecho de que sea de código abierto, es decir, que sus tripas pueden ser manipuladas y modificadas por cualquier usuario, lo convierte en un temible adversario para los modelos privativos, como los de Google (Gemini), OpenAI (ChatGPT), Anthropic (Claude) o Microsoft (Copilot). Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/tecnologia/2026-07-17/kimi-k3-la-ia-china-que-ha-puesto-en-guardia-a-silicon-valley.html",
    time: "3 ore fa",
    pub_ts: 1784301726,
    tags: [],
  },
  {
    id: 10,
    cat: "geopolitica",
    title: "Sovereign AI, independent of America and China, is a pipe dream",
    summary: "But a degree of protection from coercion remains possible",
    body: "But a degree of protection from coercion remains possible",
    source: "The Economist",
    url: "https://www.economist.com/international/2026/07/16/sovereign-ai-independent-of-america-and-china-is-a-pipe-dream",
    time: "1 giorno fa",
    pub_ts: 1784194743,
    tags: [],
  },
  {
    id: 11,
    cat: "conflitti",
    title: "Can the US and Iran reach a lasting deal to end the conflict?",
    summary: "Air strikes intensify raising fear of an all-out war.",
    body: "Air strikes intensify raising fear of an all-out war.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/inside-story/2026/7/17/can-the-us-and-iran-reach-a-lasting-deal-to-end-the-conflict?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1784311920,
    tags: [],
  },
  {
    id: 12,
    cat: "conflitti",
    title: "Life after amputation: Gaza women find recovery through football",
    summary: "Palestinian women in Gaza who have lost limbs during Israel's genocidal war are using football as a way of recovering.",
    body: "Palestinian women in Gaza who have lost limbs during Israel's genocidal war are using football as a way of recovering.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/features/2026/7/17/life-after-amputation-gaza-women-find-recovery-through-football?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1784311359,
    tags: [],
  },
  {
    id: 13,
    cat: "conflitti",
    title: "Israeli attacks on Gaza kill 14, including mourners attending funeral",
    summary: "Eight killed and 20 injured in strike on funeral procession for Palestinian killed by Israel earlier in the day.",
    body: "Eight killed and 20 injured in strike on funeral procession for Palestinian killed by Israel earlier in the day.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/17/israeli-attacks-on-gaza-kill-14-including-mourners-attending-funeral?traffic_source=rss",
    time: "2 ore fa",
    pub_ts: 1784305309,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "How Apple’s big lawsuit could disrupt OpenAI’s IPO plans",
    summary: "Apple filed a trade secrets lawsuit against OpenAI last Friday, and it’s not messing around. The complaint alleges a pattern of misconduct reaching all the way up to OpenAI’s chief hardware officer and claims more than 400 former Apple employees now work at the company. OpenAI’s response so far has been carefully hedged, and the timing couldn’t be worse with the company reportedly eyeing an IPO",
    body: "Apple filed a trade secrets lawsuit against OpenAI last Friday, and it’s not messing around. The complaint alleges a pattern of misconduct reaching all the way up to OpenAI’s chief hardware officer and claims more than 400 former Apple employees now work at the company. OpenAI’s response so far has been carefully hedged, and the timing couldn’t be worse with the company reportedly eyeing an IPO",
    source: "TechCrunch",
    url: "https://techcrunch.com/video/how-apples-big-lawsuit-could-disrupt-openais-ipo-plans/",
    time: "1 ora fa",
    pub_ts: 1784310346,
    tags: [],
  },
  {
    id: 15,
    cat: "ai",
    title: "Apple’s plot to crush OpenAI",
    summary: "Apple is suing OpenAI. The complaint is readable and intense, as these things often are, though many experts seem to think many of the allegations are just the ways things are done. So what does Apple really want here, and why is it picking such a public fight with OpenAI? On this episode of The",
    body: "Apple is suing OpenAI . The complaint is readable and intense, as these things often are, though many experts seem to think many of the allegations are just the ways things are done . So what does Apple really want here, and why is it picking such a public fight with OpenAI? On this episode of The Vergecast , Nilay and David go through the lawsuit, and look at Apple's history of splashy litigation to determine whether Apple is worried about a possible competitor or simply looking to capitalize on a weak moment for OpenAI .\n\nAll this is happening as Apple ships the public betas of its new software, headlined by the new Siri AI , and we have though …",
    source: "The Verge",
    url: "https://www.theverge.com/podcast/967244/apple-openai-lawsuit-vergecast",
    time: "1 ora fa",
    pub_ts: 1784310092,
    tags: [],
  },
  {
    id: 16,
    cat: "ai",
    title: "Why the first GPU financiers are turning to inference chips in a $400 million deal",
    summary: "A $400 million chip-backed loan points to the next wave of AI infrastructure deals.",
    body: "A $400 million chip-backed loan points to the next wave of AI infrastructure deals.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/17/why-the-first-gpu-financiers-are-turning-to-inference-chips-in-a-400-million-deal/",
    time: "7 ore fa",
    pub_ts: 1784289600,
    tags: [],
  },
  {
    id: 17,
    cat: "ai",
    title: "Founders Fund hires former OpenAI exec Ryan Beiermeister (and not because of her ‘Mafia’ skills)",
    summary: "Ryan Beiermeister, who demonstrated cool analysis in the Founders Fund YouTube series \"Mafia,\" has joined the firm as a partner.",
    body: "Ryan Beiermeister, who demonstrated cool analysis in the Founders Fund YouTube series \"Mafia,\" has joined the firm as a partner.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/16/founders-fund-hires-former-openai-exec-ryan-beiermeister-and-not-because-of-her-mafia-skills/",
    time: "23 ore fa",
    pub_ts: 1784232434,
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
    time: "9 ore fa",
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
    time: "1 ora fa",
    pub_ts: 1784311449,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "How long can oil markets absorb the Hormuz shock?",
    summary: "Improvements in oil intensity have cushioned the global economy so far — but could prompt reckless political choices",
    body: "Improvements in oil intensity have cushioned the global economy so far — but could prompt reckless political choices",
    source: "Financial Times",
    url: "https://www.ft.com/content/55f5860b-6ef0-42ed-a87f-c49af6ef9d29",
    time: "1 ora fa",
    pub_ts: 1784310757,
    tags: [],
  },
  {
    id: 21,
    cat: "economia-tech",
    title: "Sateliot Expands Funding to Offer Satellite Service to Phones",
    summary: "Satellite startup Sateliot is seeking to boost an ongoing fundraising round to as much as €150 million ($172 million), about a 50% increase as the Spanish company aims to offer satellite connectivity directly to smartphones.",
    body: "Satellite startup Sateliot is seeking to boost an ongoing fundraising round to as much as €150 million ($172 million), about a 50% increase as the Spanish company aims to offer satellite connectivity directly to smartphones.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-17/sateliot-expands-funding-to-offer-satellite-service-to-phones",
    time: "2 ore fa",
    pub_ts: 1784307433,
    tags: [],
  },
  {
    id: 22,
    cat: "economia-tech",
    title: "Meta in Talks to Sell Computing Power to Anthropic",
    summary: "Meta Platforms Inc. is in early discussions to lease computing power from its data centers to Anthropic PBC, according to people familiar with the matter, an opportunity for the social media giant to build a new business around its heavy investment in AI infrastructure.",
    body: "Meta Platforms Inc. is in early discussions to lease computing power from its data centers to Anthropic PBC, according to people familiar with the matter, an opportunity for the social media giant to build a new business around its heavy investment in AI infrastructure.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-17/meta-in-talks-to-sell-computing-power-to-anthropic-nyt-reports",
    time: "2 ore fa",
    pub_ts: 1784306415,
    tags: [],
  },
  {
    id: 23,
    cat: "economia-tech",
    title: "The perils of relying on PE ratios",
    summary: "Global gyrations in stock prices and earnings favour other markets",
    body: "Global gyrations in stock prices and earnings favour other markets",
    source: "Financial Times",
    url: "https://www.ft.com/content/478fe638-84d5-4eab-a2c5-5b43ec106bdf?syn-25a6b1a6=1",
    time: "8 ore fa",
    pub_ts: 1784286008,
    tags: [],
  },
  {
    id: 24,
    cat: "economia-tech",
    title: "Apple targets dozens of OpenAI employees with legal letters",
    summary: "iPhone maker steps up aggressive tactics in trade secrets dispute with AI lab",
    body: "iPhone maker steps up aggressive tactics in trade secrets dispute with AI lab",
    source: "Financial Times",
    url: "https://www.ft.com/content/1b8c9d52-88a9-426b-ba47-f1811f859166?syn-25a6b1a6=1",
    time: "9 ore fa",
    pub_ts: 1784282405,
    tags: [],
  },
];
