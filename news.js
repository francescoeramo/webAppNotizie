// ============================================================
// FONTI RSS (usate per etichettare le notizie per categoria)
// Per un vero fetch automatico serve un backend/proxy o GitHub Actions
// che aggiri i limiti CORS di GitHub Pages.
// ============================================================
const RSS_SOURCES = [
  { name: 'ANSA',          url: 'https://www.ansa.it/sito/ansait_rss.xml',                             cat: 'politica-italiana' },
  { name: 'Corriere',      url: 'https://xml2.corrieredellasera.it/rss/homepage.xml',                  cat: 'politica-italiana' },
  { name: 'Il Sole 24 Ore',url: 'https://www.ilsole24ore.com/rss/economia.xml',                        cat: 'economia-tech' },
  { name: 'Reuters',       url: 'https://feeds.reuters.com/reuters/topNews',                           cat: 'conflitti' },
  { name: 'BBC World',     url: 'https://feeds.bbci.co.uk/news/world/rss.xml',                         cat: 'geopolitica' },
  { name: 'AP News',       url: 'https://apnews.com/hub/world-news?output=rss',                        cat: 'geopolitica' },
  { name: 'Al Jazeera',    url: 'https://www.aljazeera.com/xml/rss/all.xml',                           cat: 'conflitti' },
  { name: 'The Verge',     url: 'https://www.theverge.com/rss/index.xml',                              cat: 'ai' },
  { name: 'Wired IT',      url: 'https://www.wired.it/feed/rss',                                       cat: 'ai' },
  { name: 'TechCrunch',    url: 'https://techcrunch.com/feed/',                                        cat: 'ai' },
  { name: 'Bloomberg',     url: 'https://feeds.bloomberg.com/technology/news.rss',                     cat: 'economia-tech' },
  { name: 'Financial Times',url:'https://www.ft.com/rss/home',                                         cat: 'economia-tech' }
];

// ============================================================
// NOTIZIE — corpo esteso e approfondito
// ============================================================
const NEWS = [
  {
    id: 1,
    cat: 'politica-italiana',
    title: 'Riforma fiscale: il governo approva il nuovo catasto',
    summary: 'Il Consiglio dei Ministri ha dato il via libera alla revisione del catasto immobiliare. La riforma mira ad aggiornare i valori degli immobili rimasti fermi agli anni \u201980, con un impatto stimato su milioni di proprietari e un effetto potenziale sulla tassazione della casa.',
    body: `Il governo ha approvato il decreto attuativo sulla revisione del catasto, uno dei dossier più complessi e politicamente divisivi degli ultimi anni in Italia.

<strong>Il contesto</strong>
I valori catastali in Italia sono fermi in media agli anni '80 e '90, creando una distanza enorme tra la base imponibile ufficiale e i prezzi reali di mercato. Questa forbice alimenta forme di elusione fiscale difficili da perseguire e distorce il gettito delle imposte patrimoniali locali come l'IMU.

<strong>Cosa cambia operativamente</strong>
Il decreto prevede un aggiornamento progressivo delle rendite catastali sulla base di valori di mercato aggiornati, da realizzare entro un arco di tre anni. Non ci sarà un aumento automatico delle aliquote, ma la base di calcolo per IMU, TARI e imposte di registro cambierà per molti immobili.

<strong>Il dibattito politico</strong>
L'opposizione denuncia una contraddizione rispetto alle promesse elettorali sul fisco e sulla protezione della prima casa. Confedilizia parla di "riforma mascherata da riordino tecnico". Il MEF risponde che i correttivi previsti neutralizzeranno gli effetti sulle abitazioni principali.

<strong>Effetti attesi sul mercato</strong>
Gli esperti segnalano che la rivalutazione catastale potrebbe avere effetti sul mercato immobiliare, rendendo più costoso detenere immobili non produttivi e aumentando il valore fiscale delle compravendite.

<strong>I prossimi passi</strong>
Il decreto passa ora al Parlamento per la conversione in legge. I sindacati della proprietà promettono emendamenti massicci. La tempistica è stretta: il governo vuole il via libera entro l'estate.`,
    source: 'Il Sole 24 Ore',
    url: 'https://www.ilsole24ore.com',
    time: '2 ore fa',
    tags: ['fisco', 'immobili', 'catasto', 'governo']
  },
  {
    id: 2,
    cat: 'politica-italiana',
    title: 'Sondaggi: FdI stabile al 27%, il PD risale al 21%',
    summary: 'A sei mesi dalle europee, il quadro politico italiano resta sostanzialmente stabile. Il partito di Meloni mantiene il primato, ma il centrosinistra rosicchia qualche punto in zone chiave.',
    body: `I sondaggi della settimana offrono un quadro di sostanziale stabilità con alcune dinamiche interessanti sia nel centrodestra che nell'opposizione.

<strong>Il quadro numerico</strong>
Fratelli d'Italia si attesta tra il 26% e il 28% secondo le diverse rilevazioni. La Lega si stabilizza all'8%, Forza Italia recupera al 9% grazie a una comunicazione più attiva sui dossier europei. Nel centrosinistra, il PD sale al 21% mentre il M5S si consolida al 15% con una forte radice nel Mezzogiorno.

<strong>La partita europea</strong>
Il vero campo di battaglia è la composizione dei gruppi parlamentari a Bruxelles. L'Italia conta molto per i numeri di ECR e del PPE, e ogni accordo pre-elettorale condizionerà le posizioni dei partiti italiani sui temi cruciali: difesa europea, allargamento, bilancio e immigrazione.

<strong>Il fattore PNRR</strong>
La gestione dei fondi europei e i ritardi nelle riforme strutturali continuano ad essere un elemento di vulnerabilità per il governo. L'opposizione prova a capitalizzare, ma non riesce ancora a tradurre la critica in consenso netto.

<strong>Il centrosinistra e la leadership</strong>
Il nuovo segretario democratico sta tentando una linea più netta su lavoro, transizione ecologica e welfare. La sfida è costruire un'alleanza larga senza perdere l'identità politica di riferimento.`,
    source: 'Corriere della Sera',
    url: 'https://www.corriere.it',
    time: '5 ore fa',
    tags: ['sondaggi', 'elezioni', 'FdI', 'PD', 'europee']
  },
  {
    id: 3,
    cat: 'geopolitica',
    title: 'NATO nell'Indo-Pacifico: ufficio permanente a Tokyo',
    summary: 'L'Alleanza Atlantica apre un ufficio di collegamento in Giappone, segnando il più significativo ampliamento geografico della sua storia. La Cina protesta formalmente e annuncia esercitazioni navali.',
    body: `L'inaugurazione dell'ufficio di collegamento NATO a Tokyo è un momento di svolta nel modo in cui l'Alleanza pensa alla sicurezza globale.

<strong>Il significato strategico</strong>
L'ufficio non estende formalmente l'articolo 5 al Giappone, ma crea un canale permanente di coordinamento su intelligence, cyber-sicurezza, supply chain critiche e deterrenza navale nel Pacifico. Per gli analisti, è il primo passo verso una NATO con una vera dimensione asiatica.

<strong>Il contesto geopolitico</strong>
La scelta arriva in un momento in cui la Cina ha accelerato la modernizzazione militare, aumentato la pressione su Taiwan e stretto legami con la Russia. Il Giappone, dal canto suo, ha già raddoppiato il budget della difesa al 2% del PIL e sta sviluppando capacità di contrattacco.

<strong>La reazione cinese</strong>
Pechino ha convocato l'ambasciatore giapponese e ha emesso una nota di protesta formale, definendo la mossa una "grave provocazione destabilizzante". Il ministero della Difesa PLA ha annunciato esercitazioni navali nello stretto di Taiwan nei prossimi giorni.

<strong>L'asse AUKUS e Quad</strong>
L'apertura a Tokyo si inserisce in un quadro più ampio che include AUKUS 2.0, il rafforzamento del Quad (USA, India, Giappone, Australia) e i nuovi accordi di difesa tra Corea del Sud e NATO. Insieme, questi segnali disegnano un nuovo perimetro di sicurezza occidentale in Asia.

<strong>Le implicazioni economiche</strong>
Il dossier della sicurezza è inseparabile da quello economico: semiconduttori, terre rare, rotte commerciali e tecnologia dual-use sono al centro di una competizione che l'ufficio NATO contribuisce a inquadrare in termini di sicurezza collettiva.`,
    source: 'Foreign Policy',
    url: 'https://foreignpolicy.com',
    time: '3 ore fa',
    tags: ['NATO', 'Giappone', 'Cina', 'Indo-Pacifico', 'difesa']
  },
  {
    id: 4,
    cat: 'geopolitica',
    title: 'Trump e Xi a Mar-a-Lago: accordo parziale sui dazi',
    summary: 'Il summit bilaterale si chiude con una tregua commerciale di 90 giorni e impegni agricoli cinesi. Restano intatte le restrizioni tech sui semiconduttori.',
    body: `Il vertice tra Trump e Xi ha prodotto un documento di intenti che allenta le tensioni immediate senza risolvere i nodi strutturali del conflitto commerciale tra le due superpotenze.

<strong>I termini dell'accordo</strong>
Gli USA sospendono per 90 giorni i dazi aggiuntivi del 15% sui beni di consumo cinesi. La Cina si impegna ad acquistare prodotti agricoli americani per 50 miliardi di dollari nei prossimi due anni e a facilitare l'accesso al mercato cinese per alcune categorie di servizi finanziari americani.

<strong>I nodi irrisolti</strong>
Le restrizioni tecnologiche restano intatte: NVIDIA, ASML e altri fornitori di tecnologie avanzate per semiconduttori non possono esportare in Cina. Il dossier Taiwan non è stato discusso formalmente, ma rimane lo scenario di rischio massimo per entrambe le parti.

<strong>La lettura dei mercati</strong>
Wall Street ha risposto con un rialzo dell'1,8% sull'S&P 500 nella giornata dell'annuncio. Gli analisti avvertono però che la tregua di 90 giorni è un respiro tattico, non una soluzione strutturale, e che i fondamentali del conflitto tecnologico e geopolitico tra USA e Cina restano immutati.

<strong>Il ruolo dell'Europa</strong>
Bruxelles guarda con attenzione all'evoluzione: un possibile accordo bilaterale USA-Cina potrebbe marginalizzare l'UE oppure, al contrario, costringerla a scegliere con più nettezza a quale blocco tecnologico allinearsi.`,
    source: 'Wall Street Journal',
    url: 'https://www.wsj.com',
    time: '5 ore fa',
    tags: ['Trump', 'Xi', 'dazi', 'commercio', 'geopolitica']
  },
  {
    id: 5,
    cat: 'conflitti',
    title: 'Ucraina: colloqui a Istanbul, tregua tecnica di 72 ore',
    summary: 'Russia e Ucraina hanno concordato una pausa temporanea nei combattimenti per consentire i negoziati mediati dalla Turchia. È il primo contatto diretto ad alto livello da oltre un anno.',
    body: `La tregua di 72 ore e l'apertura dei colloqui di Istanbul rappresentano un segnale limitato ma significativo dopo mesi di stagnazione diplomatica totale.

<strong>La struttura dei negoziati</strong>
Al tavolo siederanno delegazioni tecniche di secondo livello, non i rispettivi ministri degli Esteri. La mediazione turca è affiancata da un osservatore ONU. Gli USA partecipano come osservatori senza poteri negoziali formali.

<strong>I temi sul tavolo</strong>
I colloqui coprono cinque aree: corridoi umanitari, prigionieri di guerra, status dei territori occupati, garanzie di sicurezza post-accordo e un eventuale meccanismo di monitoraggio del cessate il fuoco. Le posizioni restano molto distanti su quasi tutti i punti.

<strong>I nodi politici</strong>
Mosca chiede il riconoscimento formale dei territori occupati come condizione per qualsiasi accordo duraturo. Kyiv insiste sul ritiro totale come precondizione e sul mantenimento pieno della sovranità territoriale. La questione delle garanzie di sicurezza — chi garantisce cosa a Kyiv in caso di violazione — è forse il nodo più difficile.

<strong>Le reazioni internazionali</strong>
L'UE accoglie la tregua "con cauto ottimismo". Polonia e Paesi baltici avvertono contro accordi che cristallizzino le conquiste territoriali russe. Zelensky ha definito i colloqui "un test, non una svolta".

<strong>Lo scenario più probabile</strong>
Gli analisti ritengono improbabile un accordo complessivo in tempi brevi. Il valore della tregua è soprattutto umanitario: ridurre le perdite civili immediate e creare uno spazio minimo per ulteriori contatti diplomatici.`,
    source: 'Reuters',
    url: 'https://www.reuters.com',
    time: '1 ora fa',
    tags: ['Ucraina', 'Russia', 'negoziati', 'guerra', 'Turchia']
  },
  {
    id: 6,
    cat: 'conflitti',
    title: 'Gaza: accordo di principio per la seconda fase del cessate il fuoco',
    summary: 'Mediatori egiziani e qatarini annunciano un testo condiviso per una tregua di 42 giorni con rilascio di ostaggi e aumento degli aiuti. Restano resistenze interne in entrambi i campi.',
    body: `Le trattative per la seconda fase dell'accordo di cessate il fuoco a Gaza sono entrate nella fase finale, con un testo di massima condiviso tra le parti.

<strong>I termini dell'accordo</strong>
La seconda fase prevede 42 giorni di tregua, il rilascio di 33 ostaggi israeliani in cambio di centinaia di detenuti palestinesi, un incremento massiccio degli aiuti umanitari nel nord della Striscia e l'apertura di corridoi per i civili sfollati.

<strong>Le resistenze interne</strong>
All'interno del gabinetto israeliano, la destra nazionalista si oppone a qualsiasi accordo che non garantisca la smilitarizzazione definitiva di Hamas. Hamas, dal canto suo, chiede garanzie scritte di un ritiro permanente delle IDF e il ripristino delle infrastrutture civili prima di qualsiasi impegno formale sul proprio futuro politico-militare.

<strong>La situazione umanitaria</strong>
Oltre 2,1 milioni di persone restano sfollate. Le agenzie ONU stimano che il 70% delle infrastrutture civili di Gaza sia distrutto. L'OMS segnala rischio di carestia in diverse aree del nord. Ogni giorno di ritardo nell'accordo ha un costo umano immediato e misurabile.

<strong>Il ruolo degli attori regionali</strong>
Egitto e Qatar si sono guadagnati un ruolo di mediatori indispensabili. La Giordania e l'Arabia Saudita spingono per una soluzione che non escluda prospettive di governance civile palestinese nel post-conflitto. Il dossier si intreccia direttamente con la normalizzazione dei rapporti tra Israele e Arabia Saudita.

<strong>Cosa succede ora</strong>
L'accordo deve essere ratificato da entrambe le delegazioni nei prossimi giorni. Anche un'intesa firmata non garantisce automaticamente la tenuta della tregua sul campo.`,
    source: 'Al Jazeera',
    url: 'https://www.aljazeera.com',
    time: '4 ore fa',
    tags: ['Gaza', 'Israele', 'Hamas', 'cessate-il-fuoco', 'ostaggi']
  },
  {
    id: 7,
    cat: 'ai',
    title: 'GPT-5 supera i medici nei test diagnostici: lo studio di Stanford',
    summary: 'Un paper su Nature Medicine mostra che GPT-5 raggiunge il 92% di accuratezza diagnostica su casi clinici complessi, superando la media dei medici generalisti.',
    body: `Uno studio peer-reviewed pubblicato su Nature Medicine ha valutato le capacità diagnostiche di un modello linguistico di nuova generazione su un dataset di 5.000 casi clinici reali anonimizzati.

<strong>La metodologia</strong>
I ricercatori hanno sottoposto gli stessi casi clinici a gruppi di medici generalisti, specialisti e al modello AI. I casi includevano patologie comuni, sindromi rare e presentazioni atipiche. Ogni diagnosi è stata confrontata con la diagnosi definitiva certificata.

<strong>I risultati principali</strong>
Il modello ha raggiunto il 92,3% di accuratezza complessiva, contro l'84,7% dei generalisti e il 90,1% degli specialisti. La performance cala al 78% per le malattie rare (malattie orfane), dove la scarsità di dati di addestramento pesa in modo evidente.

<strong>Le implicazioni cliniche</strong>
Gli autori sottolineano che il modello non sostituisce il medico: manca della capacità di esaminare fisicamente il paziente, raccogliere anamnesi contestuale e gestire la relazione terapeutica. Il valore è nel triage, nel supporto alla diagnosi differenziale e nella sintesi di documentazione clinica complessa.

<strong>Le critiche metodologiche</strong>
Alcuni ricercatori contestano che i casi clinici scritti in inglese accademico, già strutturati per essere leggibili, favoriscano artificialmente un modello linguistico. Le cartelle cliniche reali sono spesso frammentate, ambigue e multilingue — un contesto molto più difficile per l'AI.

<strong>Il quadro regolatorio</strong>
In Europa, l'AI Act classifica i sistemi AI in ambito medico come "ad alto rischio", richiedendo certificazione, supervisione umana e trasparenza sugli errori. L'adozione clinica sarà lenta e molto vigilata.`,
    source: 'Nature Medicine',
    url: 'https://www.nature.com/nm',
    time: '6 ore fa',
    tags: ['AI', 'medicina', 'GPT-5', 'diagnostica', 'Stanford']
  },
  {
    id: 8,
    cat: 'ai',
    title: 'AI Act UE: in vigore, prime sanzioni possibili dal 2027',
    summary: 'Il regolamento europeo sull'intelligenza artificiale è ora pienamente operativo. Le aziende hanno 24 mesi per adeguarsi. Violazioni rischiamo multe fino al 7% del fatturato globale.',
    body: `L'AI Act europeo ha completato il suo iter legislativo ed è ora pienamente in vigore, segnando il primo sistema regolatorio globale completo sull'intelligenza artificiale.

<strong>La struttura del regolamento</strong>
L'AI Act adotta un approccio basato sul rischio, suddividendo i sistemi AI in quattro categorie: rischio inaccettabile (vietati), alto rischio (regolamentati), rischio limitato (obblighi di trasparenza) e rischio minimo (liberi). I grandi modelli linguistici rientrano in una categoria trasversale con obblighi specifici di disclosure.

<strong>Chi è più colpito</strong>
OpenAI, Google DeepMind, Anthropic e Meta dovranno registrare i propri modelli nel database europeo entro 12 mesi. I sistemi di riconoscimento biometrico in tempo reale in spazi pubblici sono de facto vietati, con eccezioni molto ristrette per le forze dell'ordine.

<strong>Il meccanismo sanzionatorio</strong>
Le violazioni delle norme sui sistemi ad alto rischio rischiano multe fino al 3% del fatturato globale. La commercializzazione di sistemi vietati arriva fino al 7%. Per le PMI e startup sono previste riduzioni significative.

<strong>Le critiche dell'industria</strong>
Confindustria Digitale e DigitalEurope lamentano che la regolazione penalizzi le startup europee rispetto ai giganti americani e cinesi, già dotati di strutture legali per la compliance. Il rischio è che l'innovazione si sposti fuori dall'UE.

<strong>Il quadro globale</strong>
Mentre l'Europa regola, gli USA hanno scelto un approccio prevalentemente volontario. La Cina ha emanato regole settoriali. L'AI Act europeo potrebbe diventare un modello globale — il cosiddetto effetto Bruxelles — o trasformarsi in un handicap competitivo.`,
    source: 'Politico EU',
    url: 'https://www.politico.eu',
    time: '12 ore fa',
    tags: ['AI Act', 'UE', 'regolazione', 'OpenAI', 'compliance']
  },
  {
    id: 9,
    cat: 'ai',
    title: 'Anthropic lancia Claude 4: ragionamento avanzato e memoria persistente',
    summary: 'Anthropic presenta Claude 4 con capacità di ragionamento multi-step superiori e una nuova funzionalità di memoria episodica tra le sessioni. Disponibile subito per gli abbonati Pro.',
    body: `Anthropic ha annunciato Claude 4, la sua più recente generazione di modelli, con miglioramenti significativi nelle capacità di ragionamento complesso e nella gestione della memoria a lungo termine.

<strong>Le novità principali</strong>
Claude 4 introduce la "memoria episodica": con il consenso esplicito dell'utente, il modello può ricordare informazioni rilevanti tra sessioni diverse. I benchmark su matematica avanzata, coding e ragionamento logico mostrano un miglioramento stimato del 40% rispetto a Claude 3.5.

<strong>Ragionamento multi-step</strong>
Il modello gestisce catene di ragionamento molto più lunghe senza "perdere il filo". In test interni su problemi di ricerca complessa, Claude 4 ha dimostrato una coerenza superiore su archi di ragionamento che richiedono decine di passaggi intermedi.

<strong>Il posizionamento competitivo</strong>
Antropic si posiziona esplicitamente come alternativa "safety-first" a GPT-5. Il modello è addestrato con tecniche di Constitutional AI di terza generazione, con un focus su riducibilità degli errori e interpretabilità delle risposte.

<strong>Le partnership enterprise</strong>
Le prime integrazioni annunciate includono Salesforce (workflow CRM), un contratto con il Dipartimento di Stato USA per analisi geopolitica automatizzata e una collaborazione con Siemens per applicazioni industriali.

<strong>Il mercato dei modelli</strong>
La competizione tra OpenAI, Anthropic, Google DeepMind e Meta si intensifica. I differenziali tecnici tra i modelli si riducono, spostando la competizione su prezzo, affidabilità, sicurezza e integrazioni verticali.`,
    source: 'TechCrunch',
    url: 'https://techcrunch.com',
    time: '9 ore fa',
    tags: ['Anthropic', 'Claude 4', 'LLM', 'AI', 'memoria']
  },
  {
    id: 10,
    cat: 'economia-tech',
    title: 'NVIDIA supera Apple: prima volta come azienda più capitalizzata al mondo',
    summary: 'Per la prima volta nella storia, NVIDIA raggiunge 3,4 trilioni di dollari di capitalizzazione, superando Apple. I chip per AI continuano a generare una domanda senza precedenti.',
    body: `NVIDIA ha chiuso la settimana con una capitalizzazione di 3,42 trilioni di dollari, superando Apple (3,38T) e diventando l'azienda più preziosa mai quotata nei mercati pubblici.

<strong>I driver della crescita</strong>
La domanda di chip H200 e Blackwell Ultra per i data center AI è cresciuta del 340% anno su anno. I margini operativi di NVIDIA hanno raggiunto il 67%, un record assoluto per un'azienda hardware. Ogni grande cloud provider — Amazon, Microsoft, Google, Meta — sta moltiplicando gli ordini.

<strong>Il contesto competitivo</strong>
AMD sta guadagnando quote di mercato con i chip MI350, ma resta lontana in termini di ecosistema software (CUDA è ancora lo standard de facto). Intel è uscita dalla competizione nell'AI accelerated computing. Le Big Tech stanno sviluppando chip proprietari (TPU di Google, Trainium di Amazon), ma per ora integrano piuttosto che sostituiscono NVIDIA.

<strong>I rischi strutturali</strong>
Le restrizioni all'export verso la Cina riguardano circa il 15% del fatturato. Una potenziale bolla dei capex AI nei cloud provider — che stanno investendo cifre enormi con ritorni ancora incerti — è il principale rischio sistemico per i prossimi 12-18 mesi.

<strong>Le implicazioni geopolitiche</strong>
I chip NVIDIA sono diventati un asset strategico: gli USA li usano come leva nelle relazioni con alleati e avversari, condizionando l'accesso alle tecnologie GPU più avanzate. Il controllo della supply chain dei semiconduttori è ormai questione di sicurezza nazionale.

<strong>Prospettive</strong>
Gli analisti di Wall Street sono divisi: il consensus è positivo sul breve termine, ma sul lungo termine il punto di equilibrio dipenderà da quanto la domanda AI si tradurrà in valore economico misurabile per i clienti enterprise.`,
    source: 'Bloomberg',
    url: 'https://www.bloomberg.com',
    time: '3 ore fa',
    tags: ['NVIDIA', 'Apple', 'capitalizzazione', 'AI', 'chip']
  },
  {
    id: 11,
    cat: 'economia-tech',
    title: 'BCE taglia i tassi al 2%: inflazione sotto il target per la prima volta',
    summary: 'La Banca Centrale Europea porta i tassi al 2%, il livello più basso dal 2022. L'inflazione scende all'1,8%, aprendo scenari nuovi per mutui, credito e crescita nell'Eurozona.',
    body: `Il Consiglio Direttivo della BCE ha deciso un ulteriore taglio da 25 punti base, portando il tasso sui depositi al 2,0%. È la quarta riduzione consecutiva di questo ciclo.

<strong>Il contesto macro</strong>
L'inflazione core nell'Eurozona è scesa all'1,8%, sotto il target del 2% per la prima volta dal 2021. La crescita del PIL dell'area euro rimane debole: 0,4% nel Q1 2026, con la Germania ancora in territorio di stagnazione. Il mercato del lavoro resta solido, con la disoccupazione al 6,2%.

<strong>Effetti su mutui e credito</strong>
I tassi sui mutui a tasso variabile scenderanno nelle prossime settimane. L'Euribor 3 mesi è già al 2,1%. Per un mutuo medio italiano da 200.000 euro, la riduzione mensile della rata è stimata in circa 65 euro, con un risparmio annuo di circa 800 euro rispetto al picco del 2023.

<strong>Implicazioni per le imprese tech</strong>
Il costo del capitale più basso facilita il finanziamento dei data center e dei progetti di espansione AI in Europa. Le startup tech europee potrebbero trovare condizioni di funding più favorevoli nel secondo semestre 2026.

<strong>Il rischio di deflazione</strong>
Alcuni membri del board hanno espresso cautela: con il tasso reale vicino allo zero, la BCE ha meno spazio di manovra in caso di nuovi shock esogeni — energetici, geopolitici o finanziari. La prossima mossa dipenderà dai dati di occupazione e inflazione di maggio.

<strong>La risposta dei mercati</strong>
I titoli bancari europei hanno perso terreno, poiché tassi più bassi comprimono i margini di interesse. I BTP italiani si sono apprezzati con un calo dello spread verso i 110 punti base.`,
    source: 'Financial Times',
    url: 'https://www.ft.com',
    time: '7 ore fa',
    tags: ['BCE', 'tassi', 'inflazione', 'mutui', 'Eurozona']
  },
  {
    id: 12,
    cat: 'economia-tech',
    title: 'OpenAI lancia i modelli o3: ragionamento scientifico oltre i benchmark umani',
    summary: 'OpenAI presenta la famiglia o3, progettata per il ragionamento scientifico e matematico avanzato. In alcuni test supera i migliori esperti umani. Il prezzo per query è molto più alto dei modelli standard.',
    body: `OpenAI ha annunciato la famiglia di modelli o3, successori di o1, progettati specificamente per compiti che richiedono ragionamento multi-step profondo in matematica, fisica, chimica e programmazione.

<strong>I risultati nei benchmark</strong>
Sui problemi di matematica olimpica (AIME), o3 risolve oltre il 96% dei quesiti contro il 69% di o1. Su SWE-Bench (debug di codice reale), raggiunge il 72%. Sul benchmark scientifico GPQA-Diamond, supera la performance media di esperti PhD nel loro dominio.

<strong>Come funziona</strong>
I modelli o3 usano una tecnica di "ragionamento computazionale": prima di rispondere, il modello genera una catena di pensiero interna (non visibile all'utente) che può durare secondi o minuti a seconda della difficoltà. Più "tempo di pensiero" si concede, più alta è la performance — a scapito della velocità e del costo.

<strong>Il trade-off costo/prestazione</strong>
Il costo per query di o3 è significativamente più alto dei modelli GPT-4o. OpenAI ha introdotto un parametro "compute budget" che permette agli sviluppatori di bilanciare costo e qualità in base al caso d'uso.

<strong>Le applicazioni più promettenti</strong>
Scoperta scientifica assistita, verifica formale di codice, analisi giuridica complessa, progettazione ingegneristica e supporto alla ricerca medica sono i settori dove il modello mostra il maggior potenziale trasformativo.

<strong>Le preoccupazioni</strong>
Il gap crescente tra capacità del modello e possibilità di verifica umana degli output preoccupa i ricercatori di sicurezza. Quando un modello supera i migliori esperti umani in un dominio, diventa più difficile capire se sta "ragionando" davvero o producendo output plausibili.`,
    source: 'The Verge',
    url: 'https://www.theverge.com',
    time: '11 ore fa',
    tags: ['OpenAI', 'o3', 'ragionamento', 'benchmark', 'matematica']
  }
];
