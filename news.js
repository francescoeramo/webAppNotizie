// Generato automaticamente il 2026-07-22 18:13 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1784743991;

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
    title: "Caso Delmastro, la Camera boccia la richiesta dei pm sulle chat con Caroccia. I senatori del M5s occupano i banchi del governo",
    summary: "I senatori del M5s occupano i banchi e mostrano i cartelli 'Fuori le chat'",
    body: "I senatori del M5s occupano i banchi e mostrano i cartelli 'Fuori le chat'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/politica/2026/07/22/caso-delmastro-la-camera-boccia-la-richiesta-dei-pm-sulle-chat_0585e1bd-5302-4277-8ff9-5aff52807480.html",
    time: "2 ore fa",
    pub_ts: 1784734965,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Ancora rincari per i carburanti. Urso: 'Se necessario agiremo'",
    summary: "Giorgetti: 'Valuteremo sulle accise mobili'. Arriva il ddl concorrenza con la riforma dei distributori",
    body: "Giorgetti: 'Valuteremo sulle accise mobili'. Arriva il ddl concorrenza con la riforma dei distributori",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/economia/aziende/2026/07/22/carburanti-stangata-per-lestate-prezzi-ancora-in-salita_49f44c77-9d6d-43ea-acc6-6e18ce34edb5.html",
    time: "19 min fa",
    pub_ts: 1784742800,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "Trump: 'Ogni volta che l'Iran spara a Hormuz colpiremo un ponte o una centrale elettrica'",
    summary: "Gli Stati Uniti hanno lanciato nuovi attacchi contro obiettivi militari in Iran per l'undicesima notte consecutiva. Teheran: 'Un attacco ai nostri siti nucleari espanderà la guerra nella regione'",
    body: "Gli Stati Uniti hanno lanciato nuovi attacchi contro obiettivi militari in Iran per l'undicesima notte consecutiva. Teheran: 'Un attacco ai nostri siti nucleari espanderà la guerra nella regione'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/2026/07/22/usa-lanciati-nuovi-attacchi-contro-target-militari-in-iran_6b47e3c9-5f60-4545-8bad-29e6206739ef.html",
    time: "40 min fa",
    pub_ts: 1784741581,
    tags: [],
  },
  {
    id: 4,
    cat: "politica-italiana",
    title: "Trump accusa la Cina, ma i documenti che ha declassificato sulle elezioni inchiodano la Russia",
    summary: "La Casa Bianca ha declassificato centinaia di documenti segreti per denunciare le vulnerabilità del voto e accusare la Cina. Tuttavia, le analisi ufficiali dei servizi segreti USA dicono che a fare propaganda per favorire Trump e danneggiare Biden è stata la Russia, mentre su Pechino non c'è alcuna prova di interferenza diretta.",
    body: "Il 16 luglio la Casa Bianca ha pubblicato online centinaia di documenti segreti dei servizi di informazione americani, resi accessibili a tutti per ordine del presidente. Quel giorno Donald Trump è andato in televisione a spiegare cosa proverebbero: che le elezioni americane sono esposte a manomissioni e che la Cina ha rubato i dati di 220 milioni di elettori. La pagina che li ospita si intitola Election Integrity ed è divisa in quattro capitoli: le macchine con cui si vota e si contano le schede, i dati elettorali finiti a Pechino, un'indagine su registrazioni fraudolente in Michigan, gli stranieri iscritti nelle liste elettorali.\n\nNel testo che accompagna quei documenti la Russia è nominata una volta sola, e di sfuggita: in un elenco di paesi che avrebbero la capacità di attaccare i sistemi elettorali americani. Nessuna operazione russa, nessun nome. La protagonista è la Cina. Dentro i documenti il rapporto è rovesciato. Di cosa parliamo in questo articolo: Le carte parlano della Russia L'unica volta che qualcuno è entrato davvero Sulla Cina i documenti dicono che non successe niente L'accusa di insabbiamento Le stesse frasi, nelle stesse settimane A cosa serve tutto questo Le carte parlano della Russia Il documento più importante del gruppo è una valutazione del 19 agosto 2020 firmata dal National Intelligence Council.\n\nÈ l'ufficio che mette insieme le analisi di tutte le agenzie di intelligence americane e ne ricava una posizione comune: quando scrive qualcosa, quella è la conclusione ufficiale dei servizi statunitensi. Il documento dice che alcuni uomini al servizio di Mosca lavoravano per far perdere Joe Biden e far vincere Trump. Non è una deduzione dei giornali, è la frase che c'è nel testo. Attorno c'è il resto della ricostruzione: Vladimir Putin e i suoi principali collaboratori dirigevano l'operazione; l'obiettivo era diffondere accuse di corruzione contro Biden e far scoppiare uno scandalo nelle settimane decisive della campagna.\n\nI due nomi che compaiono sono noti. Andrii Derkach è un deputato ucraino filorusso che tre settimane dopo quel documento il Tesoro americano ha colpito con sanzioni, definendolo un agente russo attivo da più di dieci anni. Konstantin Kilimnik è l'uomo che la commissione Intelligence del Senato, in un'indagine condotta insieme da democratici e repubblicani, ha indicato come ufficiale dei servizi segreti russi.\n\nNello stesso documento c'è una tabella che mette a confronto quello che Russia, Cina e Iran avevano effettivamente fatto. Secondo l'agenzia Associated Press, che l'ha esaminata, un solo paese risulta segnato alla voce che riguarda gli attacchi ai sistemi elettorali, ed è la Russia. Per la Cina la casella indica tentativi esplorativi e nessun attacco osservato. L'unica volta che qualcuno è entrato davvero Nelle carte una violazione vera dei sistemi elettorali americani c'è, ed è russa.\n\nÈ del 2016 ed è la stessa ricostruita dal Senato: i sistemi di tutti e cinquanta gli stati furono presi di mira, e in Illinois gli hacker russi entrarono davvero nell'archivio delle registrazioni, arrivando a 200.000 schede anagrafiche, con nomi, indirizzi e frammenti di codice fiscale e patente. Un secondo Stato, di cui il rapporto non fa il nome, fu violato allo stesso modo. Il punto interessante è cosa non fecero.\n\nIl Senato scrive che avrebbero potuto cancellare o modificare quei dati e che non risulta lo abbiano fatto. Interrogati dai senatori, i tecnici del Dipartimento per la Sicurezza Interna, il ministero che negli Stati Uniti si occupa anche di protezione informatica, hanno detto che la spiegazione più probabile è un'altra: l'obiettivo non era cambiare i voti, era far sapere di essere entrati e togliere fiducia al risultato .\n\nC'è una distinzione da tenere ferma, perché su quella si gioca tutto il resto. Una cosa è l'influenza: propaganda, notizie false, campagne sui social per far perdere consenso a un candidato. Un'altra è l'interferenza vera e propria: entrare nei computer che contano i voti e cambiare i numeri. Le carte declassificate documentano la prima, in abbondanza, e la attribuiscono al vertice dello Stato russo.\n\nDella seconda non c'è traccia, per nessun paese. Chi presenta questi documenti come la prova che un'elezione americana è stata manomessa sta dicendo l'opposto di quello che vi è scritto. Sulla Cina i documenti dicono che non successe niente Il capitolo cinese non è inventato e conviene guardarlo per intero prima di discuterlo. Si regge su informazioni raccolte dalla Central Intelligence Agency: nel 2018 la linea del Partito comunista cinese sarebbe stata sfruttare chiunque fosse ostile a Trump per fargli perdere voti o impedirgli un secondo mandato, mettergli contro i grandi imprenditori americani e pagare giornalisti per articoli sfavorevoli.\n\nNel lavoro dei servizi segreti ci sono due tipi di carta, e la differenza fra i due nel discorso non compare. Ci sono le informazioni grezze, che arrivano da una fonte e non sono state controllate: possono essere vere, false o interessate. E ci sono le valutazioni, che nascono quando gli analisti confrontano quelle informazioni fra loro, le pesano e decidono cosa reggerebbe in una discussione. Il materiale sulla Cina del 2018 appartiene al primo tipo.\n\nPresentarlo come se fosse una conclusione dei servizi è il passaggio su cui si regge l'intera accusa di Trump. Le valutazioni vere dicono un'altra cosa, e la ripetono tre volte. Nell'agosto 2020: Pechino preferiva che Trump perdesse, ma non intendeva muoversi per condizionare il voto. Nell'ottobre 2020, con la spiegazione del perché: i dirigenti cinesi davano Trump per sconfitto e non ritenevano utile correre rischi per un risultato che consideravano già acquisito.\n\nE nel marzo 2021, nel documento riassuntivo sulle elezioni, dove la conclusione è che la Cina non mise in campo alcuna operazione di interferenza. C'è un ultimo dettaglio che ribalta l'accusa. Una nota della CIA dell'estate 2020 segnala che gli hacker cinesi stavano attaccando qualcuno, ma quel qualcuno era la campagna elettorale di Biden, probabilmente per raccogliere informazioni da usare in futuro; e chiude scrivendo che la Cina non aveva al momento intenzione di intervenire di nascosto per cambiare l'esito del voto .\n\nL'unica attività cinese documentata nel 2020 era rivolta contro l'avversario di Trump. Restano i 220 milioni di schede elettorali finite a Pechino. Il testo della Casa Bianca dice che sono state comprate, rubate o hackerate, e la prima parola cambia il senso della frase: negli Stati Uniti le liste elettorali sono in gran parte pubbliche, si possono acquistare, e partiti e comitati elettorali lo fanno regolarmente per sapere a chi mandare la posta.\n\nNessuno dei documenti mostra che quei dati siano serviti a modificare un voto. [NEWSLETTER_HERE] L'accusa di insabbiamento Il discorso di Trump sostiene che dentro le agenzie qualcuno abbia nascosto le prove dell'ingerenza cinese, tenendole all'oscuro degli americani e della presidenza. L'accusa non nasce dal nulla, e liquidarla senza guardarla sarebbe un favore a chi la fa. Nel gennaio 2021 Barry Zulauf , il funzionario incaricato di raccogliere le lamentele degli analisti quando ritengono che il loro lavoro venga distorto, consegnò al Senato un rapporto di quattordici pagine.\n\nVi scriveva che nelle agenzie si era diffusa la sensazione che l'analisi sulle interferenze elettorali venisse piegata alla politica, e che gli analisti che si occupavano di Cina sembravano esitare a definire indebite le mosse di Pechino, perché quella conclusione contraddiceva la linea dell'amministrazione. Lo stesso rapporto però dice anche il contrario, e questa parte non viene mai citata. Gli analisti che si occupavano di Russia lamentavano che i superiori ammorbidissero le loro conclusioni e alzassero invece il livello della minaccia cinese.\n\nZulauf concluse che la pressione arrivava da entrambe le parti e che la responsabilità non era dei dirigenti né degli analisti, ma del clima politico del paese . Poi ci sono due fatti che rendono difficile parlare di insabbiamento. Il primo: la tesi minoritaria sulla Cina non è mai stata nascosta, è finita dentro il documento pubblicato nel marzo 2021, quello che conclude che la Cina non interferì.\n\nIl secondo: a sostenerla in pubblico era John Ratcliffe, nominato da Trump a capo di tutti i servizi segreti americani, che nell'autunno 2020 la difese apertamente e che oggi dirige la CIA. Nella stessa direzione va l'osservazione di Mark Warner, vicepresidente della commissione Intelligence del Senato: le cose che oggi vengono denunciate come occultate risalgono ad anni in cui al vertice dei servizi c'erano persone nominate dallo stesso Trump.\n\nLe stesse frasi, nelle stesse settimane Il paragrafo finale della pagina della Casa Bianca lamenta le decine di milioni di schede che circolerebbero per posta senza controllo. È un argomento con una storia, e la storia sta negli archivi dello stesso governo americano. Il 3 settembre 2020 l'ufficio analisi del Dipartimento per la Sicurezza Interna mandò a polizie e amministrazioni locali un documento in cui affermava, con un alto grado di certezza, che da mesi la propaganda russa attaccava il voto per posta: sosteneva che le liste elettorali vecchie avrebbero fatto arrivare schede a persone senza diritto, e che milioni di schede sarebbero rimaste in giro senza controllo, esposte a manomissioni.\n\nIl Washington Post notò allora che quelle frasi erano quasi identiche a cose che il presidente e il ministro della Giustizia ripetevano da mesi . Qui conviene fermarsi un passo prima di quello che i documenti consentono di dire. Le carte registrano una sovrapposizione di contenuti, non un accordo: nessun documento fra quelli pubblicati mostra un contatto fra gli operatori russi e la campagna elettorale di Trump sul tema delle schede postali.\n\nAnche solo la sovrapposizione, però, basta a spiegare perché un discorso sulle ingerenze del 2020 possa preferire non nominare la Russia. Nominarla significherebbe ricordare che i servizi americani ritennero Mosca impegnata a favore della vittoria di Trump, e che alcuni argomenti della sua campagna erano gli stessi della propaganda russa . Intelligence USA: le accuse a Putin e l’impossibilità per giornalisti e cittadini di valutarle C'è un ultimo elemento, e riguarda proprio l'insabbiamento.\n\nDopo la diffusione di quel documento il ministro dell'Interno di allora annunciò che il dipartimento lo stava rivedendo, e la CBS accertò che poche settimane prima ne era stato bloccato un altro, sulle operazioni russe contro Biden, con una motivazione ufficiale che citava la qualità delle fonti. L'unico caso accertato di un documento sulle ingerenze elettorali fermato prima di uscire riguarda la Russia, ed è avvenuto sotto l'amministrazione che oggi chiede indagini per documenti occultati.\n\nA cosa serve tutto questo Il giorno dopo il discorso la Casa Bianca ha risposto alle critiche sostenendo che il presidente non aveva parlato delle elezioni passate, ma di vulnerabilità che esistono oggi e che gli avversari hanno la capacità e l'intenzione di sfruttare. È una posizione che nessuno può smentire, ed è il punto in cui conviene guardare bene. Dire che le elezioni del 2020 furono rubate è un'affermazione che si può smentire, ed è stata smentita: i ricorsi sono stati respinti dai tribunali in Pennsylvania, Arizona, Michigan, Nevada e Georgia.\n\nDire che i sistemi elettorali sono vulnerabili è invece un'affermazione vera e che nessuno potrà mai smentire, perché non esiste un controllo capace di dimostrare che un sistema informatico sia inattaccabile. Il vantaggio politico però è lo stesso di prima: se il sistema è fragile, qualunque sconfitta si può mettere in discussione. Nel frattempo l'amministrazione ha rimosso i membri della commissione elettorale federale, l'organismo composto in parti uguali da democratici e repubblicani che controlla e certifica le macchine per il voto.\n\nHa tagliato i fondi all'agenzia che aiutava i funzionari elettorali locali a difendersi dagli attacchi informatici. Ha sciolto la squadra dell'FBI che si occupava di operazioni di influenza straniera. La legge di riforma del voto che chiede al Congresso, il SAVE America Act , che imporrebbe di dimostrare la cittadinanza con un documento per potersi registrare, è ferma al Senato, e l'archivio federale su cui dovrebbe basarsi quella verifica è stato bloccato da un giudice, che lo ha ritenuto troppo impreciso e a rischio di cancellare elettori legittimi.\n\nAlle elezioni di metà mandato, quelle che rinnovano il Congresso, mancano meno di quattro mesi. L’assalto di Trump al sistema di voto per vincere le elezioni di metà mandato di novembre Nel gennaio 2020 il National Intelligence Council aveva messo per iscritto un avvertimento: quasi nessuno sa come funziona davvero l'organizzazione di un'elezione, ed è per questo che le voci false attecchiscono; e se si diffonde la notizia che i sistemi sono stati violati, la fiducia nel risultato crolla anche quando nessun voto è stato toccato.\n\nEra lo stesso obiettivo che i tecnici americani attribuivano agli hacker entrati in Illinois nel 2016. Sei anni dopo, per ottenerlo non serve più violare un sistema elettorale: basta una conferenza stampa del presidente degli Stati Uniti. Immagine in anteprima: Dario De Leonardis",
    source: "Valigia Blu",
    url: "https://www.valigiablu.it/trump-documenti-segreti-elezioni-russia-cina/",
    time: "1 giorno fa",
    pub_ts: 1784624660,
    tags: [],
  },
  {
    id: 5,
    cat: "politica-italiana",
    title: "La vera preda è la presidenza della Repubblica",
    summary: "L'offensiva mediatica e politica da parte della destra al governo (e non) sul caso Roggero nasconde un obiettivo più ambizioso: mettere le mani sulla presidenza della Repubblica dopo la fine del mandato di Mattarella.",
    body: "Non c’era un’occasione migliore della condanna definitiva a Mario Roggero per la maggioranza. La vicenda legata al gioielliere che ha sparato e ucciso due ladri nel 2021 e che è stato condannato a 14 anni di carcere e 9 mesi è stata subito sfruttata dal governo Meloni. Dopo la sconfitta al referendum costituzionale, il governo ha dovuto certificare un crescente dissenso nel paese. Una situazione che è peggiorata ancora di più con l’emergere del fenomeno Vannacci.\n\nMa proprio la vicenda di Roggero offre alla compagine di governo un’occasione per poter tirare fuori i cavalli di battaglia della destra radicale e smentire le accuse di Vannacci secondo cui il governo avrebbe tradito i suoi ideali. Non solo, l’operazione del governo sembra configurarsi come uno scontro con il Quirinale, proprio mentre si comincia a parlare del post-Mattarella. Il caso Roggero e gli sciacalli C’è poi un aspetto più profondo, che investe l’intero operato del governo Meloni e la sua base di consenso.\n\nSe dopo il referendum il governo Meloni si è impantanato, è altrettanto vero che già in precedenza il governo aveva toccato poco o nulla sul fronte economico, nonostante sia la questione più problematica e ingombrante nel nostro paese. Per reagire però al calo del consensi, il governo ha deciso di riprendere temi identitari più che economici. È un segnale preoccupante su come è mutato il dibattito pubblico nel paese e sono cambiate le esigenze di una parte dell’elettorato.\n\nDi cosa parliamo in questo articolo: Governo Meloni: nulla sul fronte economico Il consenso di Meloni e le tensioni con il Quirinale La conservazione e la protezione della miseria Governo Meloni: nulla sul fronte economico Sono almeno tre gli aspetti su cui dobbiamo valutare il governo Meloni. Il primo è che il governo Meloni si è ritrovato a fare i conti con un paese che versa in una crisi profonda: da oltre trent’anni l’Italia è incapace di produrre ricchezza e prosperità diffusa.\n\nSe si scorrono i giornali o anche solo le breaking news che compaiono sugli smartphone, non è improbabile leggere statistiche che certificano questa situazione: dai salari al palo a una crescita economica fiacca, passando per un tessuto economico che non riesce a essere produttivo. A questa crisi strutturale si è aggiunta quella contingente: l’invasione russa dell’Ucraina e il conseguente aumento del prezzo dei beni energetici hanno portato a livelli di inflazione che non si vedevano dagli anni ‘80.\n\nQuesto ha eroso il potere d’acquisto dei cittadin i e messo a dura prova il settore industriale italiano . A sua volta, proprio perché le grandi aziende italiane sono all’export, la politica economica, che ha imposto dazi sui prodotti europei , della nuova amministrazione Trump ha peggiorato la situazione. La crisi della Germania a sua volta ha avuto ripercussioni sull’industria italiana, vista l’interdipendenza tra i due paesi.\n\nDavanti a queste crisi, però, è necessario tenere conto di una peculiarità del governo Meloni: la sua stabilità. Non si era mai visto forse nella storia repubblicana un governo in grado di arrivare in fondo alla legislatura senza rimpasti o senza scossoni. La maggioranza tanto alla Camera quanto al Senato, ottenuta grazie alle divisioni tra i partiti d’opposizione nei collegi uninominali durante le elezioni del 2022, ha garantito al governo Meloni un margine di manovra inedito.\n\nSe quindi le sfide che si trovava ad affrontare erano profonde, allo stesso tempo questa solida maggioranza parlamentare avrebbe dovuto permettere, in linea teorica, di imprimere una svolta - condivisibile o meno - per alleviare la stagnazione decennale in cui si trova il paese. Tutto ciò non si è verificato. In questi anni, quando il dibattito sulla finanziaria preannunciava l’arrivo dei mesi più freddi dell’anno, ci si è trovati a commentare provvedimenti di piccola portata , spesso derivanti dalla situazione contingente.\n\nE su questa ha potuto far leva la narrazione del governo Meloni. Le difficoltà, indiscutibili, sono state utilizzate come scudo contro ogni critica o per attaccare l’opposizione: fin dal discorso di insediamento Meloni ha ribadito che l’Italia si trovava in una situazione economica complessa, incolpando i governi dei precedenti dieci anni. Al contrario, proprio la situazione contingente ha permesso al governo di prendere provvedimenti in qualche modo dovuti e di vantare meriti non suoi.\n\nPiù volte abbiamo discusso del fenomeno del Fiscal Drag indotto dall’inflazione. Proprio questo ha trainato gli interventi, sbandierati da Meloni come taglio delle tasse, sull’IRPEF che si sono susseguiti nel corso degli anni. Ma l’aspetto più critico è quello sul record degli occupati. Il governo ha più volte messo l’accento sulla performance positiva del mercato del lavoro. Uno sguardo più ampio mostra però che si è assistito allo stesso fenomeno in buona parte dei paesi occidentali.\n\nÈ quindi improbabile che questa situazione derivi dai provvedimenti presi dal governo, che anzi sono andati a ridurre le tutele dei lavoratori precari. Sul fronte economico, quindi, il governo Meloni non ha inciso né è stato in grado di cambiare il nostro paese – pur avendo i mezzi per farlo, nonostante le contingenze a favore (che hanno aiutato il governo Meloni) e la stabilità politica, un fattore importante sul fronte delle finanze pubbliche (che vede il nostro paese ancora in una situazione di fragilità) per ridurre i rischi per il finanziamento del debito.\n\nIl consenso di Meloni e le tensioni con il Quirinale Questa valutazione economica deve essere però interpretata anche dal punto di vista politico e in particolare del consenso. La strategia di Meloni, fatta di interventi di piccola portata, sembrava non intaccare il consenso dei partiti di governo. D’altronde, un programma più incisivo avrebbe potuto scontentare una parte dell’elettorato - anche quello che aveva votato la destra alle politiche.\n\nMentre nessuno si potrebbe lamentare di un governo che riduce il peso dell’IRPEF, anzi, pur scontando le difficoltà sul fronte dell’inflazione. Una lettura di questo tipo è stata fortemente ridimensionata dall’esito del referendum. Proprio vista la natura squisitamente tecnica del quesito , l’esito delle urne si è inevitabilmente trasformato in un test politico per il consenso del governo. La sconfitta netta, a fronte di sondaggi che inizialmente davano un netto vantaggio per il Sì, ha fatto cambiare marcia al governo, purtroppo non in positivo.\n\nA peggiorare la situazione c’è stato l’emergere del partito di Vannacci, Futuro Nazionale, che è andato a raccogliere i voti dei delusi del governo Meloni. In particolare, è la Lega di Matteo Salvini, partito che aveva candidato Vannacci alle Europee, a uscirne peggio. Il partito si trova oggi in una crisi da cui è difficile uscire. Salvini era riuscito a trasformarlo da partito attento agli interessi del nord a forza di destra radicale in grado di sfondare anche al Sud.\n\nOggi quello spazio è sempre più occupato tanto da Fratelli d’Italia quanto da Futuro Nazionale, mentre una svolta moderata andrebbe a scontrarsi con la presenza di Forza Italia. Questo fa sorgere interrogativi sul futuro del partito, sulla sua identità e sul suo peso elettorale. Viaggio nella politica italiana #18 I fattori citati hanno portato a un’accelerazione sul progetto di riforma della Legge Elettorale.\n\nDavanti a un’opposizione unita - che quindi non garantirebbe più un vantaggio alla destra nei collegi uninominali - e a un’erosione dei partiti della maggioranza, il governo ha costruito appositamente una sistema che limiterebbe i danni in caso di sconfitta, oltre a inserire clausole che vanno volontariamente a danneggiare l’opposizione: si pensi ad esempio all’indicazione del candidato alla Presidenza del Consiglio - quando la destra ha sempre avuto la legge non scritta per cui il primo partito della coalizione esprime il candidato - o al fatto che le liste al di sotto del 3 per cento non contribuiscono, al di fuori della prima delle escluse, alla percentuale per accedere al premio di maggioranza - che penalizza i vari partiti centristi all’interno del Campo Largo.\n\nDavanti a un’erosione del consenso, il governo sta chiaramente cercando di cambiare le regole del gioco per mantenere il potere o, quantomeno, ridurre il margine della sconfitta. [NEWSLETTER_HERE] Anche al netto di ciò, i consensi di Vannacci rappresentano una problematica per Meloni. Il riscontro che sta raccogliendo Vannacci affonda le sue radici anche nella disaffezione dell’elettorato più intransigente di Fratelli d’Italia e della Lega.\n\nUna volta al governo, infatti, la destra non ha dato seguito ai suoi proclami su immigrazione e sicurezza, scontrandosi con il vincolo di realtà. Proprio sul terreno costruito dalla destra , cioè su quella narrazione nostalgica, securitaria e di sfiducia nei confronti delle istituzioni e dell’Europa, si è innestato il fenomeno Vannacci. Le ricette di Futuro Nazionale: nostalgiche, violente e impossibili da realizzare Per questo motivo il governo sta puntando tutto sulla vicenda di Mario Roggero.\n\nIl caso del gioielliere condannato per aver sparato e ucciso due ladri è un’occasione d’oro per riprendere quei temi su cui si è costruito il consenso della destra di governo, considerato che – ed è qui il punto nevralgico – il governo, agli occhi dell’elettorato, ha maggior influenza rispetto a Vannacci. Infatti si è prontamente mobilitato: sia a livello di opinione pubblica che con le richieste di grazia - che resta comunque prerogativa del Presidente della Repubblica - per mostrare a quell’elettorato insoddisfatto che il governo non ha affatto abbandonato la sua visione di destra radicale, ma ha trovato degli ostacoli che è possibile rimuovere.\n\nSu questo c’è un aspetto di pura speculazione, ma che è forse la chiave interpretativa della situazione odierna. Come abbiamo detto, la grazia a Roggero è una prerogativa del Presidente della Repubblica Sergio Mattarella, non del ministero della Giustizia. Eppure, proprio la celerità con cui si è mosso il governo, compresa la Presidente del Consiglio , potrebbero suggerire un tentativo di scontro con il Colle.\n\nIl tema del Quirinale d’altronde è già stato messo al centro della propaganda del governo. Proprio il mese scorso, Meloni aveva ribadito che un Presidente della Repubblica di destra non deve essere un tabù. Lo scontro con Mattarella, visto come un corpo estraneo e ostile per la destra radicale, può essere sfruttato dalla destra di governo per le elezioni del 2027. Sarà proprio durante quella legislatura che si voterà per il successore di Mattarella: aizzando l’elettorato contro il Quirinale, la destra può trasformare le elezioni legislative in una sorta di presidenziali: tradotto, votateci per avere un presidente affine che ci permette di implementare il nostro programma.\n\nSpostare l’attenzione su questo aspetto può inoltre contribuire all’indebolimento di Vannacci. Al netto della crescita dei sondaggi, il partito del generale difficilmente raggiungerebbe percentuali tali da garantirgli l’elezione del prossimo Presidente della Repubblica. Questo scontro con il Quirinale potrebbe essere letto, dunque, come il tentativo da parte del governo, dell’informazione di destra e della sua influenza sui social di contrapporre due visioni opposte.\n\nDa una parte, c’è il custode del vecchio ordine, rappresentato dal Presidente Sergio Mattarella, distaccato dagli interessi e dalle richieste della cittadinanza; e dall’altra, appunto, la costruzione retorica di un uomo del popolo, finito nel mirino della giustizia per aver difeso la sua impresa e la sua famiglia dai ladri. Si tratta esattamente dei temi della visione di destra radicale da cui scaturiscono tanto Meloni quanto Salvini e Vannacci: sicurezza, famiglia, piccola impresa, il tutto coniugato in una visione violenta, deumanizzante, antagonista di quelle regole all’apparenza intralcianti della giustizia su cui si regge lo stato di diritto.\n\nA portare avanti questa visione ci sono anche vari membri del mondo dello spettacolo e dell’intrattenimento : a partire da Giuseppe Cruciani, conduttore de La Zanzara, secondo cui il gioielliere non sarebbe stato protetto dalla giustizia. Altri VIP hanno manifestato il loro sostegno a Roggero. Gli interventi fanno leva sull’aspetto umano, come la showgirl Melissa Satta, che afferma che i giudici avrebbero dovuto mettersi nei panni di un uomo profondamente sconvolto.\n\nSulla falsariga il rapper Emis Killa che definisce Roggero “ uno che potrebbe essere vostro nonno ” che lo Stato non tutela anche davanti a queste situazioni. Si tratta di un lessico e un immaginario che hanno lo scopo di mostrare la “normalità” del gioielliere, cercando di innescare un sentimento di empatia. Come già successo con termini come “buon senso”, il tentativo è normalizzare posizioni in aperto contrasto con la visione del diritto: per citare Hannah Arendt nelle prime pagine de La Banalità del Male , la giustizia “vuole più dolore che collera”.\n\nLa differenza è fondamentale: il diritto non nasce dal desiderio di vendetta, ma dal tentativo di sottrarre la risposta alla violenza della reazione individuale. Non è un caso che uno dei testi fondativi della cultura classica - che certa destra vorrebbe preservare dall’invasione degli immigrati - come l’Orestea di Eschilo, ruoti proprio attorno al passaggio dalla vendetta privata alla giustizia pubblica.\n\nUna visione del mondo che ha più di un tratto in comune con l’universo MAGA, al netto degli screzi tra Meloni e Trump. Non deve quindi stupire che Elon Musk sia intervenuto sulla vicenda, dichiarando che andrebbero “condannati giudici e PM”. Il fatto che questa visione sia in realtà trasversale è sintomatico della visione che la destra radicale è riuscita a imporre nel dibattito pubblico . Il piano MAGA di Trump per conquistare l’Europa La conservazione e la protezione della miseria Non si può non vedere un collegamento tra il fenomeno Vannacci e gli sforzi del governo Meloni di capitalizzare sulla vicenda Roggero.\n\nEntrambi sono sintomatici di un qualcosa di più profondo: c’è una parte dell’elettorato che, davanti all’insoddisfazione e alle difficoltà che affronta il paese, non è suscettibile a un’offerta politica volta a migliorare la propria condizione economica. Siamo dei falliti Si è ormai cementata l’idea che, al variare del colore politico, la politica non garantisca più un cambiamento radicale e un miglioramento delle condizioni di vita.\n\nIl suo ruolo, al contrario, deve essere la conservazione e la protezione della miseria: “Se le cose non possono migliorare, almeno che non peggiorino” pare essere lo slogan inconscio di una fetta dell’elettorato. E questo fattore influenza le pulsioni identitarie che si intersecano con l’economia e la crisi della socialità. Questa parte di elettorato chiede una stretta securitaria declinata in una maggior giustificazione della violenza o da parte dello Stato o lasciata addirittura agli individui; l’emarginazione o la remigrazione degli immigrati che “ infestano le nostre piazze ”- senza nessun dibattito sul perché questi discorsi che oggi facciamo sui centri un tempo erano confinati alle periferie- o “ sfruttano il nostro welfare ”; la difesa della propria roba davanti al “ comunismo ecologista ” che vuole toglierci le nostre case e distruggere le nostre imprese.\n\nQuesta visione è prontamente recepita dai partiti della maggioranza, che ora intendono allargare la definizione di legittima difesa, snaturandola a tal punto da farla diventare giustizia privata. Per quanto l’opposizione abbia le sue colpe, è necessario prendere atto di questa involuzione del paese - e forse dell’Europa intera. Le promesse di un futuro migliore, prontamente infrante, dei vari governi che si sono succeduti hanno creato una sacca di elettorato che non riesce nemmeno a concepire politiche di sinistra.\n\nIl miglioramento dei servizi pubblici, una maggior equità sociale, un’inversione di rotta nelle politiche sul lavoro e una maggior attenzione tanto ai salari quanto alla produttività sono proposte che scalfiscono soltanto l’opinione pubblica. Quello che emerge, quindi, non è un quadro edificante: un paese che da trent'anni non cresce più, disilluso da decenni di promesse economiche incapaci di tradursi in un reale miglioramento delle condizioni di vita e che finisce per chiedere alla politica non di costruire un futuro migliore, ma semplicemente di proteggere quel poco che gli è rimasto.",
    source: "Valigia Blu",
    url: "https://www.valigiablu.it/meloni-roggero-destra-preda-mattarella-quirinale/",
    time: "1 giorno fa",
    pub_ts: 1784573325,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "Who is Mykhailo Drapatyi, Ukraine's new commander-in-chief?",
    summary: "Drapatyi becomes Ukraine's third commander-in-chief since Russia's full-scale invasion in February 2022.",
    body: "Drapatyi becomes Ukraine's third commander-in-chief since Russia's full-scale invasion in February 2022.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c93483k0lp1o?at_medium=RSS&at_campaign=rss",
    time: "2 ore fa",
    pub_ts: 1784733588,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "Feijóo promete una “limpieza total” en el Gobierno y espera votar “en más ocasiones” con Vox y Junts en el Congreso",
    summary: "El líder del PP hace balance de la legislatura y carga contra el presidente, a quien acusa de ser el “señor X” de los procesos judiciales",
    body: "La mañana siguiente a las elecciones generales del 23 de julio, los periódicos se levantaron con el titular: “El PP gana las elecciones pero necesitará pactar”. Meses después, cuando intentó su investidura con los apoyos insuficientes de Vox, UPN y Coalición Canaria, Alberto Núñez Feijóo acuñó la frase “No soy presidente porque no quiero” tras haber mantenido contactos informales con Junts aquel verano.\n\nLuego convocó una decena de manifestaciones contra la amnistía pactada por Pedro Sánchez con los nacionalistas catalanes. Hoy, transcurridos tres años, aprovechando el tercer aniversario de las urnas del 23-J y en el cierre de un curso político en el que ha endurecido su ofensiva por los casos de corrupción que atenazan al PSOE , Feijóo ha hecho balance de una legislatura que da por muerta. “Sánchez no merece otra cosa que el mayor castigo electoral porque ha sido una desgracia para este país.\n\nEspaña ya ha cambiado de opinión”, ha sentenciado Feijóo, este miércoles, en una comparecencia en la que se ha ofrecido como la alternativa frente a la corrupción “sistémica” del Ejecutivo. “No será un relevo, será una limpieza total”, ha prometido. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-07-22/feijoo-promete-una-limpieza-total-en-el-gobierno-y-espera-votar-en-mas-ocasiones-con-vox-y-junts-en-el-congreso.html",
    time: "4 ore fa",
    pub_ts: 1784728532,
    tags: [],
  },
  {
    id: 8,
    cat: "geopolitica",
    title: "Trump threatens to target Iran's bridges and power plants if Hormuz attacks persist",
    summary: "Donald Trump says the US will respond any time Iranian forces shoot at a ship in the Strait of Hormuz.",
    body: "Donald Trump says the US will respond any time Iranian forces shoot at a ship in the Strait of Hormuz.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cdrv0p37k8jo?at_medium=RSS&at_campaign=rss",
    time: "7 ore fa",
    pub_ts: 1784715303,
    tags: [],
  },
  {
    id: 9,
    cat: "geopolitica",
    title: "India's Modi government under growing pressure as 'cockroach' protests intensify",
    summary: "The CJP got a boost on Tuesday when the opposition Congress party demonstrated outside the PM's house.",
    body: "The CJP got a boost on Tuesday when the opposition Congress party demonstrated outside the PM's house.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c9d8p88lyjdo?at_medium=RSS&at_campaign=rss",
    time: "10 ore fa",
    pub_ts: 1784707324,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "Hamas’s new leader calls for permanent Gaza ceasefire",
    summary: "In his first speech since being elected Hamas political chief, Khalil al-Hayya called for a permanent ceasefire in Gaza.",
    body: "In his first speech since being elected Hamas political chief, Khalil al-Hayya called for a permanent ceasefire in Gaza.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/22/hamass-new-leader-calls-for-permanent-gaza-ceasefire?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1784739770,
    tags: [],
  },
  {
    id: 11,
    cat: "conflitti",
    title: "Iran’s judiciary warns against ‘infiltrators’, announces new executions",
    summary: "Many cases related to security offences are prosecuted using a law announced after last year's 12-day war with Israel.",
    body: "Many cases related to security offences are prosecuted using a law announced after last year's 12-day war with Israel.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/22/irans-judiciary-warns-against-infiltrators-announces-new-executions?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1784738133,
    tags: [],
  },
  {
    id: 12,
    cat: "conflitti",
    title: "War on Iran: Hegseth wants $70B more to keep fighting",
    summary: "Iran activated air defence systems across Tehran on the 11th night of US strikes.",
    body: "Iran activated air defence systems across Tehran on the 11th night of US strikes.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/22/war-on-iran-hegseth-wants-70b-more-to-keep-fighting?traffic_source=rss",
    time: "2 ore fa",
    pub_ts: 1784735574,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "The Anthropic-Physical Intelligence rumor roiling AI Twitter",
    summary: "Anthropic and OpenAI's aggressive 2026 acquisition sprees set the stage for a weekend rumor.",
    body: "Anthropic and OpenAI's aggressive 2026 acquisition sprees set the stage for a weekend rumor.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/21/the-anthropic-physical-intelligence-rumor-roiling-ai-twitter/",
    time: "14 ore fa",
    pub_ts: 1784690457,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "Menlo Ventures’ Matt Murphy explains why Anthropic is winning (and it’s not the model)",
    summary: "Anthropic leaped to a $47 billion revenue run rate by May, compared to $9 billion in 2025. It’s the kind of growth that Menlo Ventures’ Matt Murphy says he’s never seen in 25 years of investing, not in the internet wave, not in mobile, not in the first cloud boom. Menlo led Anthropic’s $500M Series D, and Murphy has had a front-row seat as the company went from a pre-revenue,",
    body: "Anthropic leaped to a $47 billion revenue run rate by May, compared to $9 billion in 2025. It’s the kind of growth that Menlo Ventures’ Matt Murphy says he’s never seen in 25 years of investing, not in the internet wave, not in mobile, not in the first cloud boom. Menlo led Anthropic’s $500M Series D, and Murphy has had a front-row seat as the company went from a pre-revenue,",
    source: "TechCrunch",
    url: "https://techcrunch.com/video/menlo-ventures-matt-murphy-explains-why-anthropic-is-winning-and-its-not-the-model/",
    time: "10 min fa",
    pub_ts: 1784743377,
    tags: [],
  },
  {
    id: 15,
    cat: "ai",
    title: "OpenAI’s AI spending spree has ballooned to $750B",
    summary: "OpenAI will spend the equivalent of Sweden's GDP on infrastructure through 2030.",
    body: "OpenAI will spend the equivalent of Sweden's GDP on infrastructure through 2030.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/22/openais-ai-spending-spree-has-ballooned-to-750b/",
    time: "2 ore fa",
    pub_ts: 1784736810,
    tags: [],
  },
  {
    id: 16,
    cat: "ai",
    title: "AMD commits up to $5 billion to Anthropic",
    summary: "AMD says it's going to invest up to $5 billion in Anthropic, while helping to expand the AI company's computing power, according to an announcement on Wednesday. As part of the new partnership, Anthropic will deploy up to 2 gigawatts of AMD's Instinct MI450 AI GPUs using the chipmaker's new Helios rack-scale system, as reported",
    body: "AMD says it's going to invest up to $5 billion in Anthropic, while helping to expand the AI company's computing power, according to an announcement on Wednesday . As part of the new partnership, Anthropic will deploy up to 2 gigawatts of AMD's Instinct MI450 AI GPUs using the chipmaker's new Helios rack-scale system, as reported earlier by The Wall Street Journal . The companies plan to deploy the first gigawatt in the first half of 2027, building upon recent data center deals Anthropic has reached with SpaceX and TeraWulf .\n\nAnthropic has also signed AI infrastructure deals with Google, Broadcom , and Amazon , with rumors suggesting that it coul …",
    source: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/969285/amd-anthropic-ai-infrastructure-deal",
    time: "3 ore fa",
    pub_ts: 1784731467,
    tags: [],
  },
  {
    id: 17,
    cat: "economia-tech",
    title: "La crisi non ferma il made in Italy: le aziende continuano a investire all’estero",
    summary: "Osservatorio Assocamerestero: il 51% delle imprese italiane orientate a scommettere sui mercato esteri, soprattutto in Sud America",
    body: "Osservatorio Assocamerestero: il 51% delle imprese italiane orientate a scommettere sui mercato esteri, soprattutto in Sud America",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/la-crisi-non-ferma-made-italy-aziende-continuano-investire-all-estero-AJDufGM",
    time: "10 ore fa",
    pub_ts: 1784707321,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "Cremonini, in arrivo investimenti per 600 milioni",
    summary: "Un piano triennale al 2028 che punta su quattro pilastri: l’implementazione di una catena del valore integrata, l’internazionalizzazione, l’efficientamento e la crescita per vie interne grazie a un pacchetto d’investimenti...",
    body: "Un piano triennale al 2028 che punta su quattro pilastri: l’implementazione di una catena del valore integrata, l’internazionalizzazione, l’efficientamento e la crescita per vie interne grazie a un pacchetto d’investimenti...",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/cremonini-arrivo-investimenti-600-milioni-AJg6NSN",
    time: "11 ore fa",
    pub_ts: 1784703721,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "Venture capital, il mercato cresce ma la svolta non c’è",
    summary: "Osservatorio Growth Capital con Italian Tech Alliance: aumenta il numero dei round nel primo semestre 2026, per un valore complessivo di 813 milioni",
    body: "Osservatorio Growth Capital con Italian Tech Alliance: aumenta il numero dei round nel primo semestre 2026, per un valore complessivo di 813 milioni",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/venture-capital-mercato-cresce-ma-svolta-non-c-e-AJJxTRO",
    time: "13 ore fa",
    pub_ts: 1784696784,
    tags: [],
  },
];
