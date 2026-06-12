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
  const REFRESH_INTERVAL_MS = 60 * 60 * 1000; // 1 ora

  let activeCategory = 'all';
  let currentModalNews = null;
  let refreshCountdown = REFRESH_INTERVAL_MS / 1000;
  let countdownInterval = null;

  // Carica preferiti da localStorage
  const favs = new Set(JSON.parse(localStorage.getItem(FAV_KEY) || '[]'));

  function saveFavs() {
    localStorage.setItem(FAV_KEY, JSON.stringify([...favs]));
  }

  function isFav(id) { return favs.has(id); }

  function toggleFav(id) {
    if (favs.has(id)) favs.delete(id);
    else favs.add(id);
    saveFavs();
    renderAll();
    // aggiorna il modal se aperto
    if (currentModalNews && currentModalNews.id === id) {
      updateModalFavBtn();
    }
  }

  // ---- DOM refs ----
  const grid          = document.getElementById('newsGrid');
  const heroSection   = document.getElementById('heroSection');
  const heroTitle     = document.getElementById('heroTitle');
  const heroSummary   = document.getElementById('heroSummary');
  const heroCat       = document.getElementById('heroCat');
  const heroTime      = document.getElementById('heroTime');
  const heroSource    = document.getElementById('heroSource');
  const heroReadBtn   = document.getElementById('heroReadBtn');
  const heroFavBtn    = document.getElementById('heroFavBtn');
  const modalOverlay  = document.getElementById('modalOverlay');
  const modalClose    = document.getElementById('modalClose');
  const modalTitle    = document.getElementById('modalTitle');
  const modalCat      = document.getElementById('modalCat');
  const modalSource   = document.getElementById('modalSource');
  const modalTime     = document.getElementById('modalTime');
  const modalBody     = document.getElementById('modalBody');
  const modalLink     = document.getElementById('modalLink');
  const modalFavBtn   = document.getElementById('modalFavBtn');
  const modalSourcesBlock = document.getElementById('modalSourcesBlock');
  const themeToggle   = document.getElementById('themeToggle');
  const refreshBtn    = document.getElementById('refreshBtn');
  const refreshTimer  = document.getElementById('refreshTimer');
  const catBtns       = document.querySelectorAll('.cat-btn');

  // ---- Tema ----
  applyTheme(localStorage.getItem(THEME_KEY) || 'light');
  themeToggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    themeToggle.textContent = t === 'dark' ? '☀️' : '🌙';
  }

  // ---- Filtri categoria ----
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.cat;
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderAll();
    });
  });

  // ---- Refresh manuale ----
  refreshBtn.addEventListener('click', () => {
    resetCountdown();
    renderAll();
  });

  // ---- Countdown timer ----
  function formatCountdown(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return m > 0 ? `Aggiorn. tra ${m} min` : `Aggiorn. tra ${s}s`;
  }

  function resetCountdown() {
    refreshCountdown = REFRESH_INTERVAL_MS / 1000;
    if (countdownInterval) clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
      refreshCountdown--;
      if (refreshTimer) refreshTimer.textContent = formatCountdown(refreshCountdown);
      if (refreshCountdown <= 0) {
        resetCountdown();
        renderAll();
      }
    }, 1000);
  }
  resetCountdown();

  // ---- Modal ----
  function updateModalFavBtn() {
    if (!currentModalNews) return;
    const on = isFav(currentModalNews.id);
    modalFavBtn.classList.toggle('fav-on', on);
    modalFavBtn.title = on ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti';
  }

  function openModal(news) {
    currentModalNews = news;
    modalCat.textContent    = CAT_LABELS[news.cat] || news.cat;
    modalTitle.textContent  = news.title;
    modalSource.textContent = '📰 ' + news.source;
    modalTime.textContent   = '🕐 ' + news.time;
    modalBody.innerHTML     = news.body;
    modalLink.href          = news.url;

    // Fonti correlate
    const relatedSources = (typeof RSS_SOURCES !== 'undefined')
      ? RSS_SOURCES.filter(s => s.cat === news.cat)
      : [];
    if (relatedSources.length) {
      modalSourcesBlock.innerHTML = `<strong>Fonti monitorate per questa categoria</strong>${relatedSources.map(s => `<span>${s.name}</span>`).join('')}`;
      modalSourcesBlock.style.display = '';
    } else {
      modalSourcesBlock.style.display = 'none';
    }

    updateModalFavBtn();
    modalFavBtn.onclick = () => toggleFav(news.id);
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
    currentModalNews = null;
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // ---- Hero ----
  function renderHero(news) {
    if (!news) { heroSection.style.display = 'none'; return; }
    heroSection.style.display = '';
    heroTitle.textContent   = news.title;
    heroSummary.textContent = news.summary;
    heroCat.textContent     = CAT_LABELS[news.cat] || news.cat;
    heroTime.textContent    = news.time;
    heroSource.textContent  = news.source;
    heroReadBtn.onclick     = () => openModal(news);
    const favOn = isFav(news.id);
    heroFavBtn.classList.toggle('fav-on', favOn);
    heroFavBtn.onclick = () => toggleFav(news.id);
  }

  // ---- Card ----
  function buildCard(news) {
    const card = document.createElement('div');
    card.className = `news-card cat-${news.cat}`;
    const favOn = isFav(news.id);
    const tags = (news.tags || []).map(t => `<span class="card-tag">#${t}</span>`).join('');
    card.innerHTML = `
      <div class="card-cat-bar"></div>
      <div class="card-body">
        <div class="card-topline">
          <span class="card-cat-badge">${CAT_LABELS[news.cat] || news.cat}</span>
          <button class="fav-btn ${favOn ? 'fav-on' : ''}" aria-label="Preferito">★</button>
        </div>
        <div class="card-title">${news.title}</div>
        <div class="card-summary">${news.summary}</div>
        ${tags ? `<div class="card-tags">${tags}</div>` : ''}
      </div>
      <div class="card-footer">
        <span class="card-source">${news.source}</span>
        <span>${news.time}</span>
      </div>`;
    card.querySelector('.fav-btn').addEventListener('click', e => {
      e.stopPropagation();
      toggleFav(news.id);
    });
    card.addEventListener('click', () => openModal(news));
    return card;
  }

  // ---- Render principale ----
  function getFiltered() {
    if (activeCategory === 'preferiti') return NEWS.filter(n => isFav(n.id));
    if (activeCategory === 'all')       return NEWS;
    return NEWS.filter(n => n.cat === activeCategory);
  }

  function renderAll() {
    const filtered = getFiltered();
    renderHero(filtered[0] || null);
    grid.innerHTML = '';
    const rest = filtered.slice(1);
    if (!rest.length) {
      const msg = activeCategory === 'preferiti'
        ? 'Nessuna notizia salvata. Premi ★ su una notizia per aggiungerla qui.'
        : 'Nessuna notizia disponibile in questa categoria.';
      grid.innerHTML = `<div class="empty-state">${msg}</div>`;
      return;
    }
    rest.forEach(n => grid.appendChild(buildCard(n)));
  }

  // ---- Init ----
  renderAll();

})();
