// ============================================================
// NEWS DATA
// Aggiorna queste notizie manualmente o collega un'API RSS.
// Ogni notizia ha: id, cat, title, summary, body, source, url, time
// cat: 'politica-italiana' | 'geopolitica' | 'conflitti' | 'ai' | 'economia-tech'
// ============================================================

const NEWS = [
  {
    id: 1,
    cat: 'politica-italiana',
    title: 'Riforma fiscale: il governo approva il nuovo catasto',
    summary: 'Il Consiglio dei Ministri ha dato il via libera alla revisione del catasto immobiliare. La riforma mira ad aggiornare i valori degli immobili, rimasti fermi agli anni \'80, con impatto stimato su milioni di proprietari.',
    body: `Il governo Meloni ha approvato in CdM il decreto attuativo della riforma catastale, uno dei dossier più complessi e politicamente sensibili degli ultimi anni.

<strong>Cosa cambia</strong>
I valori catastali saranno rivalutati progressivamente entro il 2028 su base di valori di mercato reali. L'obiettivo dichiarato è ridurre l'evasione fiscale nel settore immobiliare stimata in oltre 8 miliardi annui.

<strong>Le reazioni</strong>
L'opposizione accusa il governo di aver tradito le promesse elettorali di «non toccare la casa». Confedilizia parla di «stangata mascherata». Il MEF replica che non ci sarà aumento della pressione fiscale complessiva.

<strong>Cosa succede ora</strong>
Il decreto passa ora alle Camere per la conversione. I tecnici del Tesoro stimano un periodo transitorio di tre anni prima che le nuove rendite abbiano effetto sulle imposte.`,
    source: 'Il Sole 24 Ore',
    url: 'https://www.ilsole24ore.com',
    time: '2 ore fa'
  },
  {
    id: 2,
    cat: 'politica-italiana',
    title: 'Europee 2026: FdI stabile al 27%, il PD insegue al 21%',
    summary: 'I sondaggi della settimana confermano il primato di Fratelli d\'Italia in vista delle elezioni europee di autunno. Il centrosinistra prova a stringere le distanze con il nuovo segretario dem.',
    body: `A sei mesi dalle elezioni europee del novembre 2026, il quadro politico italiano mostra una sostanziale stabilità.

<strong>Il centrodestra</strong>
FdI si attesta attorno al 27%, confermando la leadership di Giorgia Meloni. FI guadagna un punto grazie alla gestione del dossier migranti a Bruxelles. La Lega resta bloccata all'8%.

<strong>Il centrosinistra</strong>
Il PD segna 21%, in leggera risalita rispetto al minimo di marzo. Il M5S consolida il 15% nel Sud Italia. AVS si attesta al 6%, sopra la soglia di sbarramento europea.

<strong>Il contesto</strong>
Il dibattito si concentra su difesa europea, migrazioni e bilancio UE. L'Italia chiede margini di flessibilità per il piano industriale legato ai fondi PNRR 2.0.`,
    source: 'Corriere della Sera',
    url: 'https://www.corriere.it',
    time: '5 ore fa'
  },
  {
    id: 3,
    cat: 'geopolitica',
    title: 'NATO espande la presenza nell\'Indo-Pacifico: ufficio di liaison a Tokyo',
    summary: 'L\'Alleanza Atlantica apre un ufficio permanente in Giappone, segnando il più significativo ampliamento geografico della sua storia. La Cina protesta formalmente.',
    body: `Il Segretario Generale della NATO ha inaugurato a Tokyo il primo ufficio di collegamento permanente dell'Alleanza in Asia, una mossa che ridefinisce il perimetro geopolitico del blocco occidentale.

<strong>Il significato strategico</strong>
L'ufficio non implica obblighi di difesa collettiva per il Giappone, ma crea un canale stabile di condivisione di intelligence e coordinamento su cyber-sicurezza, supply chain critica e deterrenza navale nel Pacifico.

<strong>La risposta cinese</strong>
Pechino ha convocato l'ambasciatore giapponese e ha emesso una nota di protesta formale, definendo la mossa «una provocazione destabilizzante». Il Ministero della Difesa PLA ha annunciato esercitazioni navali nello Stretto di Taiwan.

<strong>Il quadro più ampio</strong>
L'apertura segue l'accordo AUKUS 2.0 e il rafforzamento del Quad. Analisti vedono un'accelerazione verso una NATO de facto con dimensione indo-pacifica entro il 2030.`,
    source: 'Foreign Policy',
    url: 'https://foreignpolicy.com',
    time: '3 ore fa'
  },
  {
    id: 4,
    cat: 'geopolitica',
    title: 'Elezioni in India: Modi vince il terzo mandato, ma con meno seggi',
    summary: 'Il BJP di Narendra Modi ottiene la maggioranza grazie ai partner di coalizione, ma perde terreno nei seggi diretti. L\'opposizione Congress torna protagonista in diversi stati chiave.',
    body: `Le elezioni generali indiane si chiudono con una vittoria di Modi che però ridisegna gli equilibri interni della coalizione NDA.

<strong>I numeri</strong>
Il BJP ottiene circa 240 seggi su 543, sotto la soglia di maggioranza assoluta (272). Modi governerà grazie a TDP e JD(U), i partner regionali, che diventano arbitri dell'agenda legislativa.

<strong>Le implicazioni economiche</strong>
I mercati hanno reagito con una correzione del 5% sul Sensex. Gli investitori temono che le concessioni ai partner di coalizione rallentino le riforme strutturali, in particolare sul mercato del lavoro e sulle privatizzazioni.

<strong>Il quadro geopolitico</strong>
L'India mantiene la sua postura di «autonomia strategica»: partner degli USA nella tecnologia e difesa, ma riluttante a isolare la Russia sulle forniture energetiche. Il terzo mandato Modi non cambierà questa equazione di fondo.`,
    source: 'The Economist',
    url: 'https://www.economist.com',
    time: '8 ore fa'
  },
  {
    id: 5,
    cat: 'conflitti',
    title: 'Ucraina: negoziati a Istanbul, cessate il fuoco tecnico di 72 ore',
    summary: 'Russia e Ucraina hanno accettato un cessate il fuoco temporaneo di 72 ore in vista dei colloqui mediati dalla Turchia. È il primo contatto diretto ad alto livello da più di un anno.',
    body: `I governi di Mosca e Kyiv hanno concordato una pausa nei combattimenti di tre giorni, che entra in vigore dalla mezzanotte di oggi, in concomitanza con i colloqui di pace di Istanbul.

<strong>La struttura dei negoziati</strong>
Al tavolo siederanno delegazioni di secondo livello, non i rispettivi ministri degli Esteri. La mediazione turca è affiancata da un rappresentante dell'ONU. Gli USA partecipano come osservatori.

<strong>I nodi aperti</strong>
Le posizioni restano distanti: Mosca chiede il riconoscimento dei territori occupati; Kyiv esige il ritiro totale come precondizione. Il tema delle garanzie di sicurezza post-accordo è il vero ostacolo.

<strong>Reazioni internazionali</strong>
L'UE saluta «con cauto ottimismo» la tregua. La Polonia e i Baltici avvertono contro accordi che cristallizzino le conquiste territoriali russe. Zelensky ha definito i colloqui «un test, non una svolta».`,
    source: 'Reuters',
    url: 'https://www.reuters.com',
    time: '1 ora fa'
  },
  {
    id: 6,
    cat: 'conflitti',
    title: 'Gaza: accordo per una seconda fase di cessate il fuoco',
    summary: 'Mediatori egiziani e qatarini riferiscono di un accordo di principio per estendere la tregua a Gaza a una seconda fase di 42 giorni, che includerebbe il rilascio di ulteriori ostaggi.',
    body: `Le trattative per la seconda fase dell'accordo di cessate il fuoco a Gaza sono entrate nella fase finale, con l'Egitto e il Qatar che riferiscono di un testo condiviso ancora da ratificare.

<strong>I termini dell'accordo</strong>
La seconda fase prevede 42 giorni di tregua, il rilascio di ulteriori 33 ostaggi israeliani in cambio di centinaia di detenuti palestinesi e un incremento significativo degli aiuti umanitari nel nord di Gaza.

<strong>Le difficoltà</strong>
All'interno del gabinetto israeliano ci sono voci contrarie a qualsiasi accordo che non preveda la definitiva smilitarizzazione di Hamas. Hamas, dal canto suo, chiede garanzie di un ritiro permanente delle IDF.

<strong>La situazione umanitaria</strong>
Oltre 2,1 milioni di persone restano sfollate. Le agenzie ONU stimano che il 70% delle infrastrutture civili di Gaza sia stato distrutto. L'OMS segnala il rischio di carestia in alcune aree.`,
    source: 'Al Jazeera',
    url: 'https://www.aljazeera.com',
    time: '4 ore fa'
  },
  {
    id: 7,
    cat: 'ai',
    title: 'GPT-5 supera i medici umani nei test diagnostici: lo studio di Stanford',
    summary: 'Un paper peer-reviewed pubblicato su Nature Medicine mostra che GPT-5 raggiunge il 92% di accuratezza diagnostica su casi clinici complessi, superando la media dei medici generalisti.',
    body: `Uno studio condotto da Stanford e pubblicato su Nature Medicine ha valutato le capacità diagnostiche di GPT-5 su un dataset di 5.000 casi clinici reali anonimizzati.

<strong>I risultati</strong>
GPT-5 ha raggiunto il 92,3% di accuratezza nelle diagnosi, contro l'84,7% dei medici generalisti e il 90,1% degli specialisti. La performance cala al 78% per le condizioni rare (malattie orfane).

<strong>Le implicazioni</strong>
Gli autori sottolineano che l'AI non sostituisce il medico, ma può essere uno strumento di triage e supporto decisionale potente, specialmente in aree con scarsità di specialisti.

<strong>Le critiche</strong>
Alcuni ricercatori contestano il dataset: casi clinici scritti in inglese accademico potrebbero favorire un modello linguistico. La variabilità nella qualità delle cartelle cliniche reali è un fattore di rischio ignorato nello studio.`,
    source: 'Nature Medicine',
    url: 'https://www.nature.com/nm',
    time: '6 ore fa'
  },
  {
    id: 8,
    cat: 'ai',
    title: 'UE: entra in vigore l\'AI Act, prime sanzioni possibili dal 2027',
    summary: 'Il regolamento europeo sull\'intelligenza artificiale è ufficialmente in vigore. Le aziende hanno 24 mesi per adeguarsi; le violazioni rischiano multe fino al 7% del fatturato globale.',
    body: `L'AI Act europeo ha completato il suo iter legislativo ed è ora pienamente in vigore, segnando il primo sistema regolatorio globale completo sull'intelligenza artificiale.

<strong>La struttura del regolamento</strong>
Il testo adotta un approccio basato sul rischio: sistemi ad alto rischio (medici, giudiziari, infrastrutture critiche) devono soddisfare requisiti stringenti di trasparenza e supervisione umana. I sistemi di AI generale (come i grandi modelli linguistici) hanno obblighi di disclosure sulle capacità.

<strong>Chi è più colpito</strong>
OpenAI, Google DeepMind, Anthropic e Meta dovranno registrare i propri modelli nel database EU entro 12 mesi. Le aziende che sviluppano sistemi di riconoscimento facciale in spazi pubblici sono de facto vietate.

<strong>Le critiche industriali</strong>
Confindustria Digitale e DigitalEurope lamentano che la regolazione penalizzi le startup europee rispetto ai giganti americani e cinesi, già dotati di risorse per la compliance.`,
    source: 'Politico EU',
    url: 'https://www.politico.eu',
    time: '12 ore fa'
  },
  {
    id: 9,
    cat: 'economia-tech',
    title: 'NVIDIA supera Apple come azienda più capitalizzata al mondo',
    summary: 'Per la prima volta nella storia, NVIDIA ha superato Apple per capitalizzazione di mercato, toccando i 3,4 trilioni di dollari. I chip H200 per AI continuano a generare una domanda senza precedenti.',
    body: `NVIDIA ha chiuso la settimana con una capitalizzazione di 3,42 trilioni di dollari, superando per la prima volta Apple (3,38T) e diventando l'azienda più preziosa della storia dei mercati pubblici.

<strong>I driver della crescita</strong>
La domanda di chip H200 e Blackwell Ultra per i data center AI è cresciuta del 340% anno su anno. I margini operativi di NVIDIA hanno raggiunto il 67%, un record assoluto per un'azienda hardware.

<strong>Il contesto competitivo</strong>
AMD sta guadagnando quote con i chip MI350, ma resta lontana. Intel è fuori dalla competizione nell'AI accelerated computing. Le Big Tech stanno sviluppando chip proprietari (TPU di Google, Trainium di Amazon) ma per ora integrano piuttosto che sostituiscono i prodotti NVIDIA.

<strong>I rischi</strong>
Le restrizioni all'export verso la Cina pesano sul 15% del fatturato. Una potenziale bolla dei capex AI nei cloud provider è il principale rischio sistemico per i prossimi 18 mesi.`,
    source: 'Bloomberg',
    url: 'https://www.bloomberg.com',
    time: '3 ore fa'
  },
  {
    id: 10,
    cat: 'economia-tech',
    title: 'BCE taglia i tassi al 2%: l\'inflazione scende sotto il target',
    summary: 'La Banca Centrale Europea ha annunciato un quarto taglio consecutivo dei tassi di interesse, portandoli al 2%. L\'inflazione nell\'Eurozona è scesa all\'1,8%, sotto il target del 2%.',
    body: `Il Consiglio Direttivo della BCE ha deciso un ulteriore taglio da 25 punti base, portando il tasso sui depositi al 2,0%, il livello più basso dal 2022.

<strong>Le motivazioni</strong>
L'inflazione core è scesa all'1,8%, sotto il target per la prima volta dal 2021. La crescita del PIL dell'Eurozona rimane debole (0,4% nel Q1 2026), con la Germania ancora in territorio di stagnazione.

<strong>Le implicazioni per mutui e prestiti</strong>
I tassi sui mutui a tasso variabile scenderanno ulteriormente. L'Euribor 3 mesi è già al 2,1%. Per un mutuo medio italiano da 200.000€, il risparmio annuo è stimato in circa 800€.

<strong>Il rischio di deflazione</strong>
Alcuni membri del board hanno espresso cautela: con il tasso reale ora vicino allo zero, la BCE ha meno spazio di manovra in caso di nuovi shock. La prossima mossa dipenderà dai dati di maggio sull'occupazione.`,
    source: 'Financial Times',
    url: 'https://www.ft.com',
    time: '7 ore fa'
  },
  {
    id: 11,
    cat: 'ai',
    title: 'Anthropic lancia Claude 4: ragionamento avanzato e memoria persistente',
    summary: 'Anthropic ha annunciato Claude 4, con capacità di ragionamento multi-step nettamente superiori e una nuova funzionalità di memoria persistente tra le sessioni. Disponibile subito per gli abbonati Pro.',
    body: `Anthropic ha presentato Claude 4, la sua più recente generazione di modelli, con miglioramenti significativi nelle capacità di ragionamento complesso e nella gestione della memoria a lungo termine.

<strong>Le nuove funzionalità</strong>
Claude 4 introduce la «memoria episodica»: il modello può ricordare informazioni tra sessioni diverse, con il consenso dell'utente. Il benchmark su problemi di matematica avanzata e coding mostra un miglioramento del 40% rispetto a Claude 3.5.

<strong>Posizionamento competitivo</strong>
Antropic si posiziona esplicitamente come alternativa «safety-first» a GPT-5. Il modello è stato addestrato con tecniche di Constitutional AI di terza generazione. Il pricing rimane comparabile a quello di OpenAI.

<strong>Le applicazioni enterprise</strong>
Le prime partnership annunciate includono Salesforce, per l'integrazione nei workflow CRM, e un contratto con il Dipartimento di Stato USA per analisi geopolitica automatizzata.`,
    source: 'TechCrunch',
    url: 'https://techcrunch.com',
    time: '9 ore fa'
  },
  {
    id: 12,
    cat: 'geopolitica',
    title: 'Trump e Xi a Mar-a-Lago: accordo parziale sui dazi',
    summary: 'Il summit tra il presidente USA Donald Trump e il leader cinese Xi Jinping si è concluso con un accordo parziale che sospende i dazi aggiuntivi per 90 giorni, aprendo a negoziati sul tech.',
    body: `Il vertice bilaterale tra Trump e Xi a Mar-a-Lago ha prodotto un documento congiunto di intenti che prevede una pausa di 90 giorni sui dazi aggiuntivi introdotti nel 2025.

<strong>I termini dell'intesa</strong>
Gli USA sospendono i dazi aggiuntivi del 15% sulle importazioni cinesi di beni di consumo. La Cina si impegna ad aumentare gli acquisti di prodotti agricoli americani per 50 miliardi di dollari nei prossimi due anni.

<strong>I nodi irrisolti</strong>
Le restrizioni tech restano intatte: NVIDIA, ASML e altri fornitori di semiconduttori avanzati non possono vendere a Cina. Il dossier Taiwan non è stato discusso formalmente.

<strong>Le reazioni dei mercati</strong>
Wall Street ha risposto con un rialzo dell'1,8% sull'S&P 500. L'euro si è rafforzato sul dollaro. Gli analisti avvertono che i 90 giorni sono solo un respiro, non una risoluzione strutturale.`,
    source: 'Wall Street Journal',
    url: 'https://www.wsj.com',
    time: '5 ore fa'
  }
];
