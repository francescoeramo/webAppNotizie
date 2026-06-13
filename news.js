// Generato automaticamente il 2026-06-13 05:24 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.

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
    "name": "AFP",
    "url": "https://www.afp.com/en/agency/rss-feeds",
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
    title: "Il Pakistan: 'C'è un testo comune Iran-Usa'. Voci sulla firma domenica a Ginevra",
    summary: "Il ministro degli Esteri, Araghchi: 'Una volta finalizzata la bozza sarà firmata da remoto. L'unico modo per gestire l'uranio arricchito è diluirlo a Teheran'",
    body: "Il ministro degli Esteri, Araghchi: 'Una volta finalizzata la bozza sarà firmata da remoto. L'unico modo per gestire l'uranio arricchito è diluirlo a Teheran'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/2026/06/12/il-pakistan-ce-un-testo-comune-iran-usa.-voci-sulla-firma-domenica-a-ginevra_a6ecc0b7-9fe7-4b29-be1b-445da5427101.html",
    time: "8 ore fa",
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Vertice ad Antibes, Macron e Meloni sbloccano il Trattato del Quirinale",
    summary: "Il 25 summit con 9 ministri e forum d'affari. Roma e Parigi al lavoro sul post Unifil",
    body: "Il 25 summit con 9 ministri e forum d'affari. Roma e Parigi al lavoro sul post Unifil",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/2026/06/12/primo-vertice-bilaterale-macron-meloni-il-25-giugno-ad-antibes_1d21cf27-b63b-40df-962d-7620318af14c.html",
    time: "11 ore fa",
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "Ma davvero il PD pensa di battere la destra con patrimoniale e bonus?",
    summary: "Patrimoniale e \"diritto a restare\": perché le proposte economiche di Elly Schlein non bastano a cambiare l’Italia.",
    body: "La Segreteria Schlein doveva rappresentare una svolta a sinistra per il Partito Democratico. L’esito delle Primarie, che ha ribaltato il risultato del voto degli iscritti e delle iscritte, era sintomatico di una disaffezione nei confronti di un partito percepito troppo centrista. Eppure nel corso degli anni sul fronte delle proposte si è visto ben poco. Semmai, la segreteria Schlein è apparsa più focalizzata sulla costruzione del cosiddetto “Campo Largo” per battere la coalizione di destra oggi al governo.\n\nNegli ultimi giorni però Schlein ha fatto discutere per due proposte in ambito economico.&nbsp; La prima è un progetto per il “diritto a restare”. Secondo la segreteria del partito, l’emigrazione dei giovani all’estero non è necessariamente un problema. Ma questa deve essere una scelta volontaria, non una costrizione dovuta a un paese che non offre prospettive ai giovani.&nbsp; A seguire, la segretaria si è detta favorevole a un’imposta patrimoniale nel nostro paese.\n\nDurante un’apparizione al programma Accordi e Disaccordi Schelin ha dichiarato che un’imposta di questo tipo non può essere un tabù. Ha poi aggiunto che per quanto auspichi a una tassazione a livello europeo, si può intervenire anche a livello nazionale. Queste dichiarazioni hanno fatto scaturire una serie di reazioni, sia tra gli alleati del PD che a destra. Se Alleanza Verdi Sinistra si trova d’accordo, Forza Italia ha denunciato l’ennesimo tentativo di mettere le mani nelle tasche degli italiani.\n\nTuttavia, anche la gamba centrista del Campo Largo si è detta contraria: secondo il leader di Italia Viva Matteo Renzi, contro una Meloni che ha raggiunto il record di pressione fiscale, non si può rispondere con più tasse. Il leader centrista ha anche aggiunto che una patrimoniale porterebbe a una fuga di capitali. Anche la deputata del Movimento 5 Stelle Vittoria Baldino ha definito la misura fumo negli occhi.\n\nNei giorni seguenti Schlein ha chiarito , durante un intervento all’evento di Confindustria Giovani a Rapallo, che la patrimoniale non è nel programma dell’Alleanza Progressista.&nbsp; Per quanto queste proposte non siano da scartare a priori, come vedremo, delineano una proposta di politica economica basata su redistribuzione e bonus. Al contrario, quello che manca alla sinistra di questo paese è proprio una visione per la crescita, che sia inclusiva e basata sui buoni lavori.&nbsp; Di cosa parliamo in questo articolo: Il diritto a restare: poche cose buone, molte inutile se non dannose I miti sulla patrimoniale e i limiti della redistribuzione Per battere la destra serve una visione di paese Il diritto a restare: poche cose buone, molte inutile se non dannose Partiamo dall’annuncio del Progetto di Legge sul “Diritto a Restare”.&nbsp;&nbsp; Le proposte cardine, secondo quanto riporta Pagella Politica , sarebbero diverse.\n\nLa più importante riguarda un aumento di 200 euro netti in busta paga per i giovani under 35. Secondo le indiscrezioni, però, questa misura si applicherebbe soltanto a chi ha già un contratto di lavoro a tempo determinato. Non è chiaro inoltre se questo aumento si applicherebbe a tutti i giovani o soltanto a coloro che verranno assunti dopo l’approvazione della legge.&nbsp; La proposta punta poi a istituire un fondo per l’imprenditoria giovanile.\n\nSempre stando a quanto riporta Pagella Politica , il fondo avrebbe un valore di 50 milioni per il 2026 per imprese innovative.&nbsp; A questo si aggiungono, come illustrato nella presentazione del Progetto di Legge da parte del Partito alla Camera, contributi alle aziende che incentivano il lavoro da remoto. Si legge nel comunicato che questa proposta andrebbe a favorire i giovani che abitano in zone più periferiche.\n\nSullo stesso tema, la proposta punta a un piano straordinario di assunzione di giovani nei comuni delle aree interne, per rendere la Pubblica Amministrazione più efficiente in queste zone che hanno visto un netto peggioramento nel corso degli ultimi anni.&nbsp; Infine, sono previste agevolazioni per l’acquisto e l’affitto di casa, per rispondere all’emergenza abitativa.&nbsp; All’interno di questo progetto di legge, ci sono sicuramente delle misure che, seppur non ottimali, sono almeno in principio condivisibili.\n\nIn particolare, vale la pena menzionare l’attenzione per le Aree Interne. Si tratta di territori lontani dai centri che, come rivelano i dati ISTAT, sono stati più colpiti da fenomeni di invecchiamento e calo della popolazione. Dal 2014 al 2023, il calo di popolazione residente si è attestato al 5 per cento, sensibilmente più alto rispetto all’1,4 dei centri urbani. In particolare, si assiste a una fuga di giovani laureati verso questi ultimi, con una conseguente perdita di capitale umano nelle aree interne.\n\nA questo si aggiunge il taglio della spesa in servizi a causa del tentativo di efficientare le risorse davanti al calo della popolazione. Ma questo va a influire sulle scelte residenziali dei più giovani, che cercano posti in cui poter sistemarsi. Tagliare i servizi pubblici nelle aree interne per via dello spopolamento rischia quindi di acuire questa tendenza. Un aumento della spesa per la pubblica amministrazione dei Comuni interni, che vada a migliorare l’erogazione dei servizi grazie a giovani qualificati, è da considerare dunque un elemento positivo.&nbsp; Per quel che riguarda gli incentivi per il lavoro da remoto, la situazione è più complessa.\n\nIn primo luogo perché non tutti i lavori possono essere svolti da remoto. Questa proposta va quindi integrata in una strategia più ampia per il rilancio delle aree interne e le opportunità lavorative in loco.&nbsp; In secondo luogo, vale la pena sottolineare che le posizioni cosiddette junior, cioè quelle in cui ricadono molti giovani, richiedono un processo di formazione che spesso non può che essere fatto all’interno dell’azienda, grazie all’interazione con lavoratori più esperti.\n\nLe competenze necessarie per svolgere molte professioni non si acquisiscono soltanto attraverso corsi o percorsi formali, ma anche tramite l’affiancamento quotidiano, l’osservazione e lo scambio continuo di conoscenze con colleghi che hanno maggiore esperienza.&nbsp; Per questo motivo, il lavoro da remoto tende a essere più adatto a chi ha già accumulato competenze e autonomia nel corso della propria carriera.\n\nSe da un lato può rendere più attrattive le aree interne per una parte dei lavoratori qualificati, dall’altro rischia di incidere meno proprio sui giovani, che sono tra le categorie la cui permanenza sul territorio sarebbe più importante per contrastare lo spopolamento. Passiamo ora agli elementi di criticità. Le agevolazioni per l'acquisto o l'affitto di una casa rappresentano, in larga misura, dei palliativi rispetto alla crisi abitativa.\n\nQuesta emergenza, che non riguarda soltanto l'Italia ma gran parte dell'Europa, è un fenomeno complesso a cui concorrono molteplici fattori. Intervenire attraverso sussidi alla domanda - cioè offrendo condizioni più favorevoli ai giovani che desiderano acquistare o affittare un'abitazione - significa non affrontare il problema alla radice e, in alcuni casi, rischiare persino di aggravarlo. Se infatti la difficoltà principale è che i giovani non riescono più a permettersi una casa a causa di prezzi degli immobili troppo elevati rispetto alla loro capacità di spesa, aumentare artificialmente tale capacità non risolve il problema strutturale, ma si limita a tamponare temporaneamente gli effetti.\n\nTuttavia, la proposta che manifesta più criticità riguarda l’aumento della busta paga dei giovani lavoratori. Il primo elemento di criticità può essere collegato ai problemi della sinistra sottolineati in questo altro articolo : proposte che vanno ad avvantaggiare gli insider (ovvero, chi è già dentro al mondo del lavoro in modo stabile) - o in questo caso i futuri insider - senza tenere conto delle problematiche affrontate dai giovani nel mondo del lavoro.\n\nCome fa notare il giornalista economico Massimo Taddei su Pagella Politica , molti giovani non sono occupati a tempo indeterminato: spesso si barcamenano tra lavori a tempo determinato in una lunga sequela di precarietà; altri sono invece costretti ad aprire la partita IVA nonostante siano a tutti gli effetti lavoratori dipendenti; a questo si aggiunge il tasso di disoccupazione di giovani e giovani adulti, che rimane su valori alti rispetto al resto d’Europa nonostante la buona performance degli ultimi anni.\n\nPertanto la proposta di Schlein andrebbe di fatto a incidere su giovani relativamente più protetti.&nbsp; Ma l’aspetto più problematico è analogo a quanto detto rispetto alla crisi abitativa. Da oltre trent’anni i salari reali italiani sono sostanzialmente fermi , caso pressoché unico nel panorama europeo.&nbsp; I salari non crescono perché una parte rilevante del tessuto produttivo italiano opera in settori a basso valore aggiunto, investe poco in innovazione e può spesso competere più sul costo del lavoro che sull’aumento della produttività, contribuendo a una dinamica della produttività debole rispetto ai principali paesi europei.\n\nUn trasferimento monetario come quello proposto da Schlein può alleviare il problema nel breve periodo, ma non modifica i fattori che determinano la crescita dei salari nel lungo periodo. Sotto certi aspetti, si tratta di una visione speculare a quella proposta dal governo Meloni : al bonus del PD, si sostituisce la leva fiscale - aiutata dal fiscal drag - per alzare i salari netti. Se il Partito Democratico vuole davvero insidiare il governo Meloni, non può farlo con misure simili, ma proponendo un piano per la crescita che passi dalla revisione delle leggi sul lavoro, dal salario minimo e da una politica industriale votata all’innovazione.&nbsp; I miti sulla patrimoniale e i limiti della redistribuzione Veniamo ora alla seconda proposta economica citata da Elly Schlein: l’introduzione di un’imposta patrimoniale.\n\nNon è la prima volta che nel nostro paese se ne parla. Ogni volta, però, che il tema torna d’attualità emergono critiche alla natura stessa dell’imposta. Queste critiche, quando non del tutto smentite, sono ridimensionate dagli studi in merito.&nbsp; Il primo tema, citato anche dal leader di Italia Viva Matteo Renzi, riguarda la fuga dei capitali. In un periodo di libertà di movimento dei capitali, introdurre un’imposta patrimoniale porterebbe i più ricchi a spostare il loro patrimonio in paesi con regimi fiscali più favorevoli.\n\nLa questione, però, è più complicata. Già nel 2018, l’OECD spiegava che le evidenze in merito sono perlopiù anedottiche.&nbsp;&nbsp; Un secondo tema, di carattere più morale, riguarda la legittimità di tassare l’accumulazione di ricchezze che, di per sé, sono già state tassate. È una critica che fa presa, ma che contrasta con la situazione corrente: già oggi in Italia si pagano imposte/tasse su redditi già tassati.\n\nOgni volta che si acquista qualcosa, si utilizza il proprio reddito - che è stato tassato. Ma quell’acquisto comprende a sua volta l’IVA: quindi buona parte dei consumi privati ricade in questo fenomeno di doppia tassazione. Senza nulla togliere al tema della legittimità, la realtà è già così, soprattutto per i cittadini normali che dedicano una porzione più elevata di reddito ai consumi. Si tratta, dunque, di un falso problema.\n\nInfine, come riporta un articolo di Open , si è diffusa l’idea che in Italia la patrimoniale esista già. Dal punto di vista tecnico, è vero che in Italia vi sono contributi come l’IMU, il Bollo e l’Imposta sulle Successioni che hanno le caratteristiche di imposte patrimoniali. Ma su questo punto è necessario fare una precisazione: per quanto Schlein non abbia articolato la sua proposta, quella presentata dal Partito Democratico nel 2020, al tempo della pandemia, rappresentava un’imposta sostitutiva.\n\nNon si sarebbe trattato, quindi, di una tassa aggiuntiva, ma di una sostituzione dei tributi esistenti. Sulla falsa riga, a seconda di come viene definita la base imponibile, il prelievo potrebbe così colpire soprattutto i patrimoni più elevati, restringendo la platea dei contribuenti interessati ed evitando di gravare sul ceto medio. Non solo, si cita il caso dell’Imposta sulle Successioni. Ma in Italia questa imposta è particolarmente bassa, rispetto alla maggior parte dei paesi europei.\n\nE per quanto il gettito atteso sia modesto, andrebbe in parte a scalfire il maggior peso dell’eredità sul patrimonio che crea condizioni ancora più diseguali in partenza.&nbsp; Questo ci porta a uno dei principali motivi per cui sarebbe auspicabile: nel nostro paese la ricchezza è sempre più concentrata nelle mani di pochi. Secondo i dati pubblicati da Banca d’Italia, il 60 per cento della ricchezza sarebbe detenuto da appena il 10 per cento delle famiglie, il livello più alto da quasi quindici anni a questa parte.&nbsp; Il problema non riguarda soltanto l'equità: un'eccessiva concentrazione della ricchezza può avere conseguenze economiche concrete.\n\nQuando quote sempre maggiori di patrimonio finiscono nelle mani di una minoranza, una parte crescente delle risorse tende a essere destinata all'accumulazione finanziaria e immobiliare piuttosto che ai consumi e agli investimenti produttivi. Allo stesso tempo, chi dispone di patrimoni elevati beneficia di rendimenti finanziari e opportunità che consentono di accrescere ulteriormente la propria posizione.&nbsp; Il risultato potrebbe quindi essere un irrigidimento dell’ascensore sociale, con una società in cui il punto di partenza conta sempre più del merito o della capacità di innovare.&nbsp; A questo si aggiunge un aspetto spesso sottovalutato: la concentrazione della ricchezza non ha soltanto effetti economici.\n\nCome mostra con chiarezza il caso statunitense, il potere economico derivante dall'accumulazione di grandi patrimoni può trasformarsi in potere politico, influenzando direttamente o indirettamente il dibattito pubblico, l'attività di lobbying e, in ultima analisi, le decisioni del legislatore. C’è però una differenza sostanziale tra i super ricchi negli Stati Uniti e in Italia - anche se si potrebbe estendere il discorso all’Europa.\n\nSe nel primo caso, si tratta spesso di individui le cui attività sono in settori innovativi, in Italia appare invece una situazione cristallizzata, dove cambiano i nomi ma non i cognomi. Anche in questo caso, non basta la redistribuzione delle ricchezze - che è necessaria - ma anche un piano per rilanciare la crescita e dare opportunità a chi ha competenze ma non risorse. La patrimoniale, assieme a una revisione dell’intero sistema tributario italiano che pesa troppo sul lavoro, può fornire un primo nucleo di risorse per intervenire in tal senso, puntando su maggiori investimenti in infrastrutture, ricerca e istruzione.\n\nIl Partito Democratico dovrebbe puntare proprio su questo tema, per non dare adito a chi lo accusa di voler mettere le mani nelle tasche degli italiani.&nbsp; Per battere la destra serve una visione di paese&nbsp; Abbiamo visto le criticità del Progetto di Legge sul Diritto a Restare, evidenziando come ancora una volta si voglia cercare di attenuare il problema dei salari, in questo caso dei giovani, con misure circostanziate come i bonus.\n\nPer quel che riguarda la patrimoniale, nonostante sia auspicabile una sua introduzione non solo in Italia ma anche nel resto d’Europa, il rischio è di concentrare la strategia solamente sulla redistribuzione, lasciando sullo sfondo i problemi sistemici del paese. Per riprendere un vecchio slogan, non basta che “Anche i ricchi piangano” per migliorare la vita della classe lavoratrice.&nbsp; È questa, probabilmente, la principale debolezza della proposta economica della sinistra italiana.\n\nBonus, trasferimenti e redistribuzione possono attenuare alcuni effetti della stagnazione, ma non possono sostituire una strategia di sviluppo. Senza un progetto credibile per aumentare la produttività, favorire l'innovazione, sostenere gli investimenti e creare lavoro qualificato e sicuro, il rischio è da una parte elettorale, ma soprattutto per il futuro del paese.&nbsp; Per questo il Partito Democratico dovrebbe concentrare la propria attenzione meno sugli strumenti redistributivi in sé e più sul modello di crescita che intende proporre al paese.\n\nPerché dopo tre decenni di crescita debole, la domanda che molti elettori si pongono non è soltanto come redistribuire la ricchezza esistente, ma come tornare a creare opportunità, salari più alti e prosperità diffusa. Perché il punto non è soltanto sconfiggere la destra alle elezioni, ma ridare un futuro a un paese che da anni l’ha perso. Immagine in anteprima: frame video Il Sole 24 Ore via YouTube",
    source: "Valigia Blu",
    url: "https://www.valigiablu.it/patrimoniale-diritto-restare-schlein-pd-economia/",
    time: "1 giorno fa",
    tags: [],
  },
  {
    id: 4,
    cat: "politica-italiana",
    title: "Scuole finite e mondiali, l'irresistibile voglia del calcio da cortile",
    summary: "Ricerca Ipsos Doxa, patrimonio italiano da conservare, celebrazione massima di leggerezza",
    body: "Ricerca Ipsos Doxa, patrimonio italiano da conservare, celebrazione massima di leggerezza",
    source: "ANSA",
    url: "https://www.ansa.it/canale_lifestyle/notizie/tempo_libero/2026/06/10/scuole-finite-e-mondiali-lirresistibile-voglia-del-calcio-da-cortile_5f7773d9-edfc-4fe8-ae91-adc7e22f5ae5.html",
    time: "1 giorno fa",
    tags: [],
  },
  {
    id: 5,
    cat: "politica-italiana",
    title: "Problema all'aereo, il Papa torna a Roma con il jet del re di Spagna",
    summary: "Felipe offre il Falcon. Delegazione e giornalisti su altro mezzo, salta conferenza stampa",
    body: "Felipe offre il Falcon. Delegazione e giornalisti su altro mezzo, salta conferenza stampa",
    source: "ANSA",
    url: "https://www.ansa.it/vaticano/notizie/2026/06/12/un-guasto-allaereo-iberia-leone-torna-a-roma-con-laereo-di-re-felipe_8f35351a-ccdb-4cbb-b7fe-ac1c2f7baf29.html",
    time: "10 ore fa",
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "Why strongmen are wrong to loathe Europe",
    summary: "The leaders of America, China and Russia scorn consensual politics. That is a mistake",
    body: "The leaders of America, China and Russia scorn consensual politics. That is a mistake",
    source: "The Economist",
    url: "https://www.economist.com/international/2026/06/09/why-strongmen-are-wrong-to-loathe-europe",
    time: "3 giorni fa",
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "Esperando a Zapatero",
    summary: "El gobierno contiene el aliento ante las 48 horas que el expresidente estará frente al juez de la Audiencia Nacional explicando las acusaciones de tráfico de influencias y el origen de las joyas",
    body: "El gobierno contiene el aliento ante las 48 horas que el expresidente estará frente al juez de la Audiencia Nacional explicando las acusaciones de tráfico de influencias y el origen de las joyas",
    source: "El Pais",
    url: "https://elpais.com/videos/2026-06-13/esperando-a-zapatero.html",
    time: "1 ora fa",
    tags: [],
  },
  {
    id: 8,
    cat: "geopolitica",
    title: "Estados Unidos e Irán aseguran que el acuerdo está “más cerca que nunca” pero discrepan sobre su contenido",
    summary: "Trump ha acusado a Teherán de difundir términos que “no tienen nada que ver” con lo pactado por escrito, mientras un alto cargo en Washington considera posible la firma este fin de semana",
    body: "Anunciar que hay un pacto es lo fácil. Ponerse de acuerdo en cuáles son exactamente los términos y qué significan, parece que no tanto. Un día después de que el presidente de Estados Unidos, Donald Trump, anunciara que el memorando de entendimiento entre su país e Irán está prácticamente listo para su firma , las dos partes han difundido versiones muy diferentes sobre el contenido de ese documento que debe poner fin a la guerra de tres meses y medio entre ambos . Pero sí parecen en sintonía en una cosa: “El acuerdo está más cerca que nunca”, según ha afirmado en X el ministro de Exteriores iraní, Abás Araghchí, cuyo departamento había negado un día antes una aproximación de posturas. Trump le ha retuiteado. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/internacional/2026-06-12/estados-unidos-e-iran-aseguran-que-el-acuerdo-esta-mas-cerca-que-nunca-pero-discrepan-sobre-su-contenido.html",
    time: "9 ore fa",
    tags: [],
  },
  {
    id: 9,
    cat: "geopolitica",
    title: "To fight Russia, Europe needs Ukraine",
    summary: "It is risky to let Ukraine into the EU. It’s more dangerous to keep it out",
    body: "It is risky to let Ukraine into the EU. It’s more dangerous to keep it out",
    source: "The Economist",
    url: "https://www.economist.com/international/2026/04/28/to-fight-russia-europe-needs-ukraine",
    time: "45 giorni fa",
    tags: [],
  },
  {
    id: 10,
    cat: "geopolitica",
    title: "La oposición más codiciada de Europa: más de 5.500 euros al mes en Bruselas",
    summary: "Con más de 174.000 aspirantes para 1.490 plazas que ni siquiera están garantizadas, el mayor proceso de selección para la función pública de la UE revela una batalla poco visible: la de los gobiernos que intentan aumentar la presencia de sus nacionales en la burocracia europea",
    body: "Desde hace semanas, los foros y grupos especializados en oposiciones europeas echan humo. Bullen con consejos para superar las pruebas, con rumores sobre las fechas de examen, hojas de cálculo para estimar posibilidades de éxito y mensajes de quienes llevaban años esperando el momento para examinarse. La razón de tanta expectación cabe en una cifra: más de 174.000 personas han solicitado participar en la principal oposición para convertirse en funcionario de la Unión Europea, atraídas por hacer carrera internacional, estabilidad laboral y un salario de entrada de en torno a los 5.500 euros brutos mensuales; una cantidad que para los países del sur de Europa es tremendamente atractiva.\n\nDetrás de esta competencia masiva, además, se libra otra batalla menos visible: la de los Estados miembros por aumentar la presencia de sus nacionales en la administración europea. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/economia/negocios/carta-del-corresponsal/2026-06-13/la-oposicion-mas-codiciada-de-europa-mas-de-5500-euros-al-mes-en-bruselas.html",
    time: "1 ora fa",
    tags: [],
  },
  {
    id: 11,
    cat: "conflitti",
    title: "Iran war live: US, Tehran signal peace deal within reach but not signed yet",
    summary: "Four activists from Palestine Action jailed by a British court over protest raid on Israeli arms firm in UK.",
    body: "Four activists from Palestine Action jailed by a British court over protest raid on Israeli arms firm in UK.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/liveblog/2026/6/13/iran-war-live-us-tehran-signal-peace-deal-within-reach-but-not-signed-yet?traffic_source=rss",
    time: "5 ore fa",
    tags: [],
  },
  {
    id: 12,
    cat: "conflitti",
    title: "UAE to unlock frozen Iranian funds amid US ceasefire push: Sources",
    summary: "Reuters reports UAE agreed to unlock billions for Iran, but Abu Dhabi swiftly issued a categorical denial.",
    body: "Reuters reports UAE agreed to unlock billions for Iran, but Abu Dhabi swiftly issued a categorical denial.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/6/12/uae-to-unlock-frozen-iranian-funds-amid-us-ceasefire-push?traffic_source=rss",
    time: "8 ore fa",
    tags: [],
  },
  {
    id: 13,
    cat: "conflitti",
    title: "Will there be a deal to end the Iran war this time?",
    summary: "After cancelling planned strikes on Iran, Trump has said an agreement to end the war will be finalised soon.",
    body: "After cancelling planned strikes on Iran, Trump has said an agreement to end the war will be finalised soon.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/inside-story/2026/6/12/will-there-be-a-deal-to-end-the-iran-war-this-time?traffic_source=rss",
    time: "8 ore fa",
    tags: [],
  },
  {
    id: 14,
    cat: "conflitti",
    title: "UK court jails Palestine Action activists on ‘terrorism’ charges",
    summary: "UK court has sentenced four pro-Palestine activists to jail for a raid on an Israeli arms factory near Bristol in 2024.",
    body: "UK court has sentenced four pro-Palestine activists to jail for a raid on an Israeli arms factory near Bristol in 2024.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/6/13/aje-onl-nf_uk-court-jails-palestine-action-activists-130626?traffic_source=rss",
    time: "1 ora fa",
    tags: [],
  },
  {
    id: 15,
    cat: "conflitti",
    title: "Mother sues OpenAI in US after daughter’s death linked to ChatGPT use",
    summary: "The lawsuit accuses OpenAI of failing to intervene despite warning signs in daughter&#039;s ChatGPT conversations.",
    body: "The lawsuit accuses OpenAI of failing to intervene despite warning signs in daughter&#039;s ChatGPT conversations.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/economy/2026/6/12/mother-sues-openai-in-us-after-daughters-death-linked-to-chatgpt-use?traffic_source=rss",
    time: "7 ore fa",
    tags: [],
  },
  {
    id: 16,
    cat: "ai",
    title: "Anthropic ha infine reso disponibile una versione di Mythos",
    summary: "Cioè il modello di intelligenza artificiale che ad aprile aveva messo in allerta aziende e istituzioni, ma con delle limitazioni",
    body: "Cioè il modello di intelligenza artificiale che ad aprile aveva messo in allerta aziende e istituzioni, ma con delle limitazioni",
    source: "Il Post Tech",
    url: "https://www.ilpost.it/2026/06/10/prima-versione-mythos-aperta-a-tutti/",
    time: "2 giorni fa",
    tags: [],
  },
  {
    id: 17,
    cat: "ai",
    title: "Intervista a Stefan Mesken: “La traduzione resta uno dei problemi più complessi dell’intelligenza artificiale”",
    summary: "A The Big Interview lo chief AI scientist di DeepL racconta le prossime sfide: dalla traduzione vocale all’AI agentica, passando per l’apprendimento continuo e il ruolo dell’Europa nella corsa globale verso l'intelligenza artificiale",
    body: "A The Big Interview lo chief AI scientist di DeepL racconta le prossime sfide: dalla traduzione vocale all’AI agentica, passando per l’apprendimento continuo e il ruolo dell’Europa nella corsa globale verso l'intelligenza artificiale",
    source: "Wired IT",
    url: "https://www.wired.it/article/intervista-stefan-mesken-deepl-traduzione-problemi-piu-complessi-intelligenza-artificiale/",
    time: "24 min fa",
    tags: [],
  },
  {
    id: 18,
    cat: "ai",
    title: "Google deve rispondere degli errori di AI Overviews, sostiene un tribunale tedesco",
    summary: "La sentenza, legata a un caso avviato da due editori, potrebbe ripercussioni su tutto il settore dell’intelligenza artificiale",
    body: "La sentenza, legata a un caso avviato da due editori, potrebbe ripercussioni su tutto il settore dell’intelligenza artificiale",
    source: "Wired IT",
    url: "https://www.wired.it/article/google-deve-rispondere-degli-errori-di-ai-overviews-sentenza-tribunale-tedesco/",
    time: "44 min fa",
    tags: [],
  },
  {
    id: 19,
    cat: "ai",
    title: "I rischi di un’intelligenza artificiale che si sviluppa da sola",
    summary: "Anthropic dice di esserci vicina, e che la cosa da fare – ma che non faremo – sarebbe rallentare tutto il settore",
    body: "Anthropic dice di esserci vicina, e che la cosa da fare – ma che non faremo – sarebbe rallentare tutto il settore",
    source: "Il Post Tech",
    url: "https://www.ilpost.it/2026/06/09/rischi-ai-si-sviluppa-da-sola/",
    time: "3 giorni fa",
    tags: [],
  },
  {
    id: 20,
    cat: "ai",
    title: "Airbnb vuole diventare l’«Amazon dei servizi»",
    summary: "Ha esteso la sua offerta agli hotel, al noleggio d'auto e al cibo a domicilio, e il suo CEO ora punta all'intelligenza artificiale",
    body: "Ha esteso la sua offerta agli hotel, al noleggio d'auto e al cibo a domicilio, e il suo CEO ora punta all'intelligenza artificiale",
    source: "Il Post Tech",
    url: "https://www.ilpost.it/2026/06/05/airbnb-diventa-come-amazon/",
    time: "7 giorni fa",
    tags: [],
  },
  {
    id: 21,
    cat: "economia-tech",
    title: "Wall Street Week | SpaceX Goes Public, Google’s AI Bet, World Cup Price Backlash",
    summary: "This week, the arrival of mega-IPOs is testing capital markets as investor appetite grows larger than supply. The federal government is making a direct investment in private technology companies, betting on quantum computing. Plus, Google is making its most radical change to…",
    body: "This week, the arrival of mega-IPOs is testing capital markets as investor appetite grows larger than supply. The federal government is making a direct investment in private technology companies, betting on quantum computing. Plus, Google is making its most radical change to search in twenty years by incorporating AI. Later, the most lucrative World Cup in history is testing how much fans are willing and able to pay for football. (Source: Bloomberg)",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/videos/2026-06-12/wall-street-week-google-s-ai-bet-world-cup-backlash-video",
    time: "6 ore fa",
    tags: [],
  },
  {
    id: 22,
    cat: "economia-tech",
    title: "SpaceX Shares Close 19% Higher After Historic $75 Billion IPO",
    summary: "SpaceX’s first day on the stock market transformed the startup into one of the world’s most-valuable public companies, handed buyers of the IPO a 19% return and turned its founder Elon Musk into the world’s first trillionaire.",
    body: "SpaceX’s first day on the stock market transformed the startup into one of the world’s most-valuable public companies, handed buyers of the IPO a 19% return and turned its founder Elon Musk into the world’s first trillionaire.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-06-12/spacex-ipo-spcx-prepares-for-debut-after-75-billion-ipo-smashes-record",
    time: "20 ore fa",
    tags: [],
  },
  {
    id: 23,
    cat: "economia-tech",
    title: "SpaceX Makes History With Biggest-Ever IPO | Bloomberg Tech 6/12/2026",
    summary: "Bloomberg’s Caroline Hyde and Ed Ludlow break down SpaceX's big debut in the public markets as shares start trading on the Nasdaq. They are joined by 137 Ventures Partner Christian Garrett, Pegasus Tech Ventures Founder Anis Uzzaman, Laffer Tengler Investments CEO & CIO Nancy…",
    body: "Bloomberg’s Caroline Hyde and Ed Ludlow break down SpaceX's big debut in the public markets as shares start trading on the Nasdaq. They are joined by 137 Ventures Partner Christian Garrett, Pegasus Tech Ventures Founder Anis Uzzaman, Laffer Tengler Investments CEO & CIO Nancy Tengler, and Tesla retail investor Alexandra Merz to discuss what it means for investors, the space economy, and the AI IPO pipeline. (Source: Bloomberg)",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/videos/2026-06-12/bloomberg-tech-6-12-2026-video",
    time: "11 ore fa",
    tags: [],
  },
  {
    id: 24,
    cat: "economia-tech",
    title: "SpaceX IPO Leaves Billions on the Table Amid High Valuation Concerns",
    summary: "Jay Ritter, director of The IPO Initiative and Emeritus Professor at the University of Florida, discussed the unprecedented $75 billion SpaceX IPO, highlighting its fixed $135 offer price set before the roadshow&mdash;a highly unusual approach. This pricing strategy resulted in…",
    body: "Jay Ritter, director of The IPO Initiative and Emeritus Professor at the University of Florida, discussed the unprecedented $75 billion SpaceX IPO, highlighting its fixed $135 offer price set before the roadshow&mdash;a highly unusual approach. This pricing strategy resulted in a first-day stock price jump that left approximately $20 billion in first-day profits on the table, more than double the previous U.S. IPO record held by Alibaba. He speaks with Romaine Bostick & Katie Greifeld on \"The Close.\" (Source: Bloomberg)",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/videos/2026-06-12/spacex-ipo-leaves-billions-on-the-table-video",
    time: "7 ore fa",
    tags: [],
  },
  {
    id: 25,
    cat: "economia-tech",
    title: "SpaceX's Wall Street Debut Breaks Records",
    summary: "On today’s Big Take podcast, David Gura and Bloomberg’s Ed Ludlow break down the over $1.7 trillion SpaceX IPO and what it means for Musk, the space economy and the financial markets. (Source: Bloomberg)",
    body: "On today’s Big Take podcast, David Gura and Bloomberg’s Ed Ludlow break down the over $1.7 trillion SpaceX IPO and what it means for Musk, the space economy and the financial markets. (Source: Bloomberg)",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/videos/2026-06-12/spacex-s-wall-street-debut-breaks-records-video",
    time: "8 ore fa",
    tags: [],
  },
];
