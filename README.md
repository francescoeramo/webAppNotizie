# Il Punto — WebApp Notizie

Webapp stile Column per seguire politica italiana, geopolitica, conflitti, AI ed economia tech.

## Funzionalità v2
- **Preferiti con stellina**: clicca ★ su qualsiasi notizia (card, hero, modal) per salvarla. Stellina gialla = salvata. I preferiti persistono in `localStorage`.
- **Sezione Preferiti** filtrabile dalla navbar.
- **Notizie approfondite**: ogni articolo ha 5-6 sezioni con analisi estesa.
- **Tag per notizia**: etichette tematiche visibili nelle card.
- **Countdown refresh** in header: aggiornamento automatico ogni ora con timer visibile.
- **Refresh manuale** con pulsante ↻.
- **Fonti RSS multiple** elencate in `news.js` → `RSS_SOURCES` (12 fonti).
- **Dark mode** persistente.

## Fonti RSS configurate
ANSA, Corriere della Sera, Il Sole 24 Ore, Reuters, BBC World, AP News, Al Jazeera, The Verge, Wired IT, TechCrunch, Bloomberg, Financial Times.

## Aggiornamento automatico delle notizie
GitHub Pages è statico: per un vero fetch automatico dai feed RSS serve un'opzione server-side.
Le due strade più semplici:

### 1. GitHub Actions (consigliata)
Un workflow `.github/workflows/fetch_news.yml` che ogni ora:
1. Scarica i feed RSS con Python (`feedparser`)
2. Rigenera `news.js` con i nuovi articoli
3. Fa il commit e pusha su `main`
Puoi chiedermi di crearlo.

### 2. Backend proxy
Un piccolo server Node/Python che espone un endpoint `/api/news` che aggrega i feed e risolve i problemi CORS.

## Deploy
```bash
git clone https://github.com/francescoeramo/webAppNotizie
cd webAppNotizie
python3 -m http.server 8080
```
Oppure attiva GitHub Pages: Settings → Pages → Branch main → / (root).
