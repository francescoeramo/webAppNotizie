# Il Punto — WebApp Notizie

Una webapp stile Column per leggere i riassunti delle notizie più importanti su:
- 🇮🇹 Politica italiana
- 🌍 Geopolitica mondiale
- ⚔️ Conflitti internazionali
- 🤖 AI & Tecnologia
- 📈 Economia collegata alla tecnologia

## Caratteristiche
- Zero pubblicità, zero paywall
- Hero section con la top story
- Grid di card selezionabili con modale di approfondimento
- Filtro per categoria
- Dark mode
- Design responsive

## Struttura
```
├── index.html   # Struttura HTML
├── style.css    # Tutti gli stili (dark mode inclusa)
├── news.js      # Dati delle notizie (aggiornabili manualmente o via RSS)
└── app.js       # Logica dell'app
```

## Come aggiornare le notizie
Modifica `news.js` aggiungendo oggetti al array `NEWS`:

```js
{
  id: 13,
  cat: 'ai',  // 'politica-italiana' | 'geopolitica' | 'conflitti' | 'ai' | 'economia-tech'
  title: 'Titolo della notizia',
  summary: 'Breve riassunto (2-3 righe) mostrato nella card.',
  body: `Testo esteso mostrato nel modale.

<strong>Sezione</strong>
Contenuto della sezione...`,
  source: 'Nome fonte',
  url: 'https://url-fonte.com',
  time: '2 ore fa'
}
```

## Deploy
Basta un server statico qualsiasi:
```bash
# Python
python3 -m http.server 8080

# Node
npx serve .

# O apri direttamente index.html nel browser
```

## GitHub Pages
Vai su Settings → Pages → Branch: main → / (root) → Save.
