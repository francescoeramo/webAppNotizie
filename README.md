# LaGraffa

LaGraffa è una rassegna di notizie con priorità alle fonti italiane affidabili e il necessario contesto internazionale. I feed RSS vengono aggiornati ogni ora da GitHub Actions; Vercel serve il sito e una sola API server-side per le sintesi AI. Non usa Cloudflare Workers.

## Sezioni

- **Italia** — ANSA, Corriere, Il Post, Sky TG24, AGI, Pagella Politica, Facta e Valigia Blu.
- **Mondo e conflitti** — Limes e Internazionale in primo piano, integrate con BBC, AP, Reuters, Al Jazeera ed El País.
- **Tecnologia** — Wired Italia e Il Post Tech, con fonti internazionali di supporto.
- **Economia** — Il Sole 24 Ore, con Bloomberg, Financial Times ed Economist per il contesto globale.

Il selettore RSS conserva prima la freschezza della notizia e, a parità, favorisce rilevanza e fonti italiane. Per ogni articolo la funzione “Approfondisci con AI” genera una sintesi italiana neutrale di 180–260 parole, oppure traduce e contestualizza le fonti estere. Il modello deve attenersi al testo disponibile e attribuire le informazioni alla fonte.

## Deploy su Vercel

1. Importa il repository in [Vercel](https://vercel.com/new). Non serve un framework né un build command: il progetto è statico e `api/ai.js` diventa automaticamente una Serverless Function.
2. Crea gratuitamente una chiave nella [Groq Console](https://console.groq.com/keys).
3. In Vercel vai in **Project settings → Environment Variables**, crea `GROQ_API_KEY` e incolla la chiave. Applicala a Production, Preview e Development se necessario, poi effettua un redeploy.
4. Per lo sviluppo locale copia `.env.example` in `.env` e inserisci la chiave. `.env` è ignorato da Git: non inserirlo mai nei commit.

La funzione usa `llama-3.3-70b-versatile` tramite Groq, disponibile con piano gratuito soggetto ai limiti del provider. La chiave rimane solo lato server e non viene esposta nel JavaScript del browser.

## Aggiornamento feed

Il workflow `.github/workflows/fetch_news.yml` esegue `scripts/fetch_news.py` ogni ora e pubblica `news.js`. Vercel ridistribuisce automaticamente quando riceve il push. Il pulsante di aggiornamento nel sito ricarica l’ultima versione già pubblicata: non forza una chiamata remota né avvia workflow dall’utente.

## Sicurezza

- Chiavi e file locali esclusi con `.gitignore`.
- Header di sicurezza configurati in `vercel.json`.
- Input dell’API con tipo, lunghezza e metodo validati.
- Contenuto dei feed inserito nell’interfaccia con escaping, non come HTML eseguibile.
