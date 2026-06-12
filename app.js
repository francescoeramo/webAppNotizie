(function () {
  'use strict';

  const CAT_LABELS = {
    'politica-italiana': 'Politica IT',
    'geopolitica':       'Geopolitica',
    'conflitti':         'Conflitti',
    'ai':                'AI & Tech',
    'economia-tech':     'Economia',
    'preferiti':         '★ Preferiti'
  };

  const FAV_KEY   = 'ilPuntoFavorites';
  const THEME_KEY = 'ilPuntoTheme';
  const REFRESH_INTERVAL_MS = 60 * 60 * 1000;

  let activeCategory = 'all';
  let currentModalNews = null;
  let isTranslated = false;
  let refreshCountdown = REFRESH_INTERVAL_MS / 1000;
  let countdownInterval = null;

  const favs = new Set(JSON.parse(localStorage.getItem(FAV_KEY) || '[]'));
  function saveFavs() { localStorage.setItem(FAV_KEY, JSON.stringify([...favs])); }
  function isFav(id) { return favs.has(id); }
  function toggleFav(id) {
    if (favs.has(id)) favs.delete(id); else favs.add(id);
    saveFavs();
    renderAll();
    if (currentModalNews && currentModalNews.id === id) updateModalFavBtn();
  }

  const grid         = document.getElementById('newsGrid');
  const heroSection  = document.getElementById('heroSection');
  const heroTitle    = document.getElementById('heroTitle');
  const heroSummary  = document.getElementById('heroSummary');
  const heroCat      = document.getElementById('heroCat');
  const heroTime     = document.getElementById('heroTime');
  const heroSource   = document.getElementById('heroSource');
  const heroReadBtn  = document.getElementById('heroReadBtn');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose   = document.getElementById('modalClose');
  const modalTitle   = document.getElementById('modalTitle');
  const modalCat     = document.getElementById('modalCat');
  const modalSource  = document.getElementById('modalSource');
  const modalTime    = document.getElementById('modalTime');
  const modalBody    = document.getElementById('modalBody');
  const modalLink    = document.getElementById('modalLink');
  const modalFavBtn  = document.getElementById('modalFavBtn');
  const translateBtn = document.getElementById('translateBtn');
  const modalSourcesBlock = document.getElementById('modalSourcesBlock');
  const themeToggle  = document.getElementById('themeToggle');
  const refreshBtn   = document.getElementById('refreshBtn');
  const refreshTimer = document.getElementById('refreshTimer');
  const catBtns      = document.querySelectorAll('.cat-btn');

  // Tema
  applyTheme(localStorage.getItem(THEME_KEY) || 'light');
  themeToggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next); localStorage.setItem(THEME_KEY, next);
  });
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    themeToggle.textContent = t === 'dark' ? '☀️' : '🌙';
  }

  // Filtri categoria
  catBtns.forEach(btn => btn.addEventListener('click', () => {
    activeCategory = btn.dataset.cat;
    catBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderAll();
  }));

  // Refresh: ricarica la pagina per prendere il news.js aggiornato
  refreshBtn.addEventListener('click', () => {
    resetCountdown();
    location.reload();
  });

  // Countdown
  function formatCountdown(sec) {
    const m = Math.floor(sec / 60), s = sec % 60;
    return m > 0 ? 'Aggiorn. tra ' + m + ' min' : 'Aggiorn. tra ' + s + 's';
  }
  function resetCountdown() {
    refreshCountdown = REFRESH_INTERVAL_MS / 1000;
    if (countdownInterval) clearInterval(countdownInterval);
    countdownInterval = setInterval(function() {
      refreshCountdown--;
      if (refreshTimer) refreshTimer.textContent = formatCountdown(refreshCountdown);
      if (refreshCountdown <= 0) { resetCountdown(); location.reload(); }
    }, 1000);
  }
  resetCountdown();

  // Rilevamento lingua italiana
  function isItalian(text) {
    const itWords = /\b(il|la|le|gli|dei|che|con|per|una|del|della|delle|degli|nel|nella|nelle|negli|dal|dalla|dalle|dagli|sul|sulla|sulle|sugli|questo|questa|questi|queste|sono|essere|avere|fare|viene|anche|dopo|prima|mentre|quando|però|inoltre|quindi|tuttavia|secondo|governo|stato|paese)\b/i;
    return itWords.test(text);
  }

  // Traduzione via MyMemory API (gratuita, no key)
  async function translateText(text) {
    const chunks = [];
    let remaining = text;
    while (remaining.length > 0) {
      let cut = 450;
      if (remaining.length > cut) {
        const lastDot = remaining.lastIndexOf('.', cut);
        if (lastDot > 200) cut = lastDot + 1;
      }
      chunks.push(remaining.slice(0, cut).trim());
      remaining = remaining.slice(cut).trim();
    }
    const translated = [];
    for (const chunk of chunks) {
      if (!chunk) continue;
      const url = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(chunk) + '&langpair=en|it';
      try {
        const res = await fetch(url);
        const data = await res.json();
        translated.push(data && data.responseData && data.responseData.translatedText ? data.responseData.translatedText : chunk);
      } catch (e) {
        translated.push(chunk);
      }
    }
    return translated.join(' ');
  }

  // Modal fav button
  function updateModalFavBtn() {
    if (!currentModalNews) return;
    const on = isFav(currentModalNews.id);
    modalFavBtn.classList.toggle('fav-on', on);
    modalFavBtn.title = on ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti';
  }

  function openModal(news) {
    currentModalNews = news;
    isTranslated = false;

    modalCat.textContent    = CAT_LABELS[news.cat] || news.cat;
    modalTitle.textContent  = news.title;
    modalSource.textContent = '📰 ' + news.source;
    modalTime.textContent   = '🕐 ' + news.time;
    modalLink.href          = news.url;

    // Formatta il corpo: paragrafi separati da \n\n, titoli in <strong>
    const bodyHtml = news.body
      .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"').replace(/&#8217;/g, "'").replace(/&#8216;/g, "'")
      .replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/&#160;/g, ' ')
      .replace(/\n\n+/g, '</p><p>').replace(/\n/g, '<br>');
    modalBody.innerHTML = '<p>' + bodyHtml + '</p>';

    // Pulsante traduzione solo se non italiano
    const fullText = news.title + ' ' + news.body.replace(/<[^>]+>/g, ' ');
    if (!isItalian(fullText)) {
      translateBtn.style.display = '';
      translateBtn.textContent = '🌐 Traduci in italiano';
      translateBtn.disabled = false;
    } else {
      translateBtn.style.display = 'none';
    }

    // Fonti correlate
    const relatedSources = (typeof RSS_SOURCES !== 'undefined') ? RSS_SOURCES.filter(function(s) { return s.cat === news.cat; }) : [];
    if (relatedSources.length) {
      modalSourcesBlock.innerHTML = '<strong>Fonti monitorate per questa categoria</strong>' + relatedSources.map(function(s) { return '<span>' + s.name + '</span>'; }).join('');
      modalSourcesBlock.style.display = '';
    } else {
      modalSourcesBlock.style.display = 'none';
    }

    updateModalFavBtn();
    modalFavBtn.onclick = function() { toggleFav(news.id); };
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  // Traduzione
  translateBtn.addEventListener('click', async function() {
    if (!currentModalNews) return;
    if (isTranslated) {
      const bodyHtml = currentModalNews.body
        .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#039;/g, "'")
        .replace(/\n\n+/g, '</p><p>').replace(/\n/g, '<br>');
      modalBody.innerHTML = '<p>' + bodyHtml + '</p>';
      translateBtn.textContent = '🌐 Traduci in italiano';
      isTranslated = false;
      return;
    }
    translateBtn.textContent = '⏳ Traduzione in corso…';
    translateBtn.disabled = true;
    try {
      const rawText = currentModalNews.body.replace(/<[^>]+>/g, '');
      const translated = await translateText(rawText);
      modalBody.innerHTML = '<p>' + translated.replace(/\n\n+/g, '</p><p>').replace(/\n/g, '<br>') + '</p>';
      translateBtn.textContent = "↩ Torna all'originale";
      translateBtn.disabled = false;
      isTranslated = true;
    } catch(e) {
      translateBtn.textContent = '🌐 Traduci in italiano';
      translateBtn.disabled = false;
    }
  });

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
    currentModalNews = null;
    isTranslated = false;
  }
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', function(e) { if (e.target === modalOverlay) closeModal(); });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

  // Hero — senza stellina
  function renderHero(news) {
    if (!news) { heroSection.style.display = 'none'; return; }
    heroSection.style.display = '';
    heroTitle.textContent   = news.title;
    heroSummary.textContent = news.summary;
    heroCat.textContent     = CAT_LABELS[news.cat] || news.cat;
    heroTime.textContent    = news.time;
    heroSource.textContent  = news.source;
    heroReadBtn.onclick     = function() { openModal(news); };
  }

  // Card — senza stellina
  function buildCard(news) {
    const card = document.createElement('div');
    card.className = 'news-card cat-' + news.cat;
    const tags = (news.tags || []).map(function(t) { return '<span class="card-tag">#' + t + '</span>'; }).join('');
    card.innerHTML =
      '<div class="card-cat-bar"></div>' +
      '<div class="card-body">' +
        '<div class="card-topline">' +
          '<span class="card-cat-badge">' + (CAT_LABELS[news.cat] || news.cat) + '</span>' +
        '</div>' +
        '<div class="card-title">' + news.title + '</div>' +
        '<div class="card-summary">' + news.summary + '</div>' +
        (tags ? '<div class="card-tags">' + tags + '</div>' : '') +
      '</div>' +
      '<div class="card-footer">' +
        '<span class="card-source">' + news.source + '</span>' +
        '<span>' + news.time + '</span>' +
      '</div>';
    card.addEventListener('click', function() { openModal(news); });
    return card;
  }

  function getFiltered() {
    if (activeCategory === 'preferiti') return NEWS.filter(function(n) { return isFav(n.id); });
    if (activeCategory === 'all') return NEWS;
    return NEWS.filter(function(n) { return n.cat === activeCategory; });
  }

  function renderAll() {
    const filtered = getFiltered();
    renderHero(filtered[0] || null);
    grid.innerHTML = '';
    const rest = filtered.slice(1);
    if (!rest.length) {
      const msg = activeCategory === 'preferiti'
        ? 'Nessuna notizia salvata. Apri una notizia e premi ★ per aggiungerla qui.'
        : 'Nessuna notizia disponibile in questa categoria.';
      grid.innerHTML = '<div class="empty-state">' + msg + '</div>';
      return;
    }
    rest.forEach(function(n) { grid.appendChild(buildCard(n)); });
  }

  renderAll();
})();
