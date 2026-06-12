// ============================================================
// APP LOGIC
// ============================================================

(function () {
  const CAT_LABELS = {
    'politica-italiana': 'Politica IT',
    'geopolitica': 'Geopolitica',
    'conflitti': 'Conflitti',
    'ai': 'AI & Tech',
    'economia-tech': 'Economia'
  };

  let activeCategory = 'all';
  let activeNews = null;

  // ---- DOM refs ----
  const grid         = document.getElementById('newsGrid');
  const heroTitle    = document.getElementById('heroTitle');
  const heroSummary  = document.getElementById('heroSummary');
  const heroCat      = document.getElementById('heroCat');
  const heroTime     = document.getElementById('heroTime');
  const heroReadBtn  = document.getElementById('heroReadBtn');
  const heroSection  = document.getElementById('heroSection');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose   = document.getElementById('modalClose');
  const modalTitle   = document.getElementById('modalTitle');
  const modalCat     = document.getElementById('modalCat');
  const modalSource  = document.getElementById('modalSource');
  const modalTime    = document.getElementById('modalTime');
  const modalBody    = document.getElementById('modalBody');
  const modalLink    = document.getElementById('modalLink');
  const themeToggle  = document.getElementById('themeToggle');
  const catBtns      = document.querySelectorAll('.cat-btn');

  // ---- Theme ----
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  // ---- Category filter ----
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.cat;
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderAll();
    });
  });

  // ---- Modal ----
  function openModal(news) {
    activeNews = news;
    modalCat.textContent   = CAT_LABELS[news.cat] || news.cat;
    modalTitle.textContent = news.title;
    modalSource.textContent = '📰 ' + news.source;
    modalTime.textContent  = '🕐 ' + news.time;
    modalBody.innerHTML    = news.body.replace(/<strong>/g, '<strong>').replace(/<\/strong>/g, '</strong>');
    modalLink.href         = news.url;
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
    activeNews = null;
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // ---- Hero ----
  function renderHero(news) {
    heroTitle.textContent   = news.title;
    heroSummary.textContent = news.summary;
    heroCat.textContent     = CAT_LABELS[news.cat] || news.cat;
    heroTime.textContent    = news.time;
    heroReadBtn.onclick     = () => openModal(news);
  }

  // ---- Grid ----
  function renderGrid(list) {
    grid.innerHTML = '';
    if (list.length === 0) {
      grid.innerHTML = '<div class="empty-state">Nessuna notizia in questa categoria al momento.</div>';
      return;
    }
    list.forEach(news => {
      const card = document.createElement('div');
      card.className = `news-card cat-${news.cat}`;
      card.innerHTML = `
        <div class="card-cat-bar"></div>
        <div class="card-body">
          <span class="card-cat-badge">${CAT_LABELS[news.cat] || news.cat}</span>
          <div class="card-title">${news.title}</div>
          <div class="card-summary">${news.summary}</div>
        </div>
        <div class="card-footer">
          <span class="card-source">${news.source}</span>
          <span>${news.time}</span>
        </div>
      `;
      card.addEventListener('click', () => openModal(news));
      grid.appendChild(card);
    });
  }

  // ---- Main render ----
  function renderAll() {
    const filtered = activeCategory === 'all'
      ? NEWS
      : NEWS.filter(n => n.cat === activeCategory);

    const heroNews   = filtered[0];
    const gridNews   = filtered.slice(1);

    if (heroNews) {
      heroSection.style.display = '';
      renderHero(heroNews);
    } else {
      heroSection.style.display = 'none';
    }
    renderGrid(gridNews);
  }

  // ---- Init ----
  renderAll();
})();
