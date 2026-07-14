(function () {
  'use strict';

  var CAT_LABELS = { 'politica-italiana': 'Italia', geopolitica: 'Mondo', conflitti: 'Conflitti', ai: 'Tecnologia', 'economia-tech': 'Economia', preferiti: 'Preferiti', 'leggi-dopo': 'Leggi dopo' };
  var CAT_DESCRIPTIONS = {
    all: ['Panoramica', 'Le notizie da seguire', 'Una selezione ordinata per rilevanza e aggiornamento.'],
    'politica-italiana': ['Italia', 'Dentro l’Italia', 'Politica, società e fatti rilevanti raccontati da fonti italiane affidabili.'],
    geopolitica: ['Mondo', 'Scenari internazionali', 'Diplomazia, relazioni globali e cambiamenti che incidono anche sull’Italia.'],
    conflitti: ['Conflitti', 'Le crisi aperte', 'Aggiornamenti distinti dal contesto: fatti, sviluppi e fonti da seguire.'],
    ai: ['Tecnologia', 'AI e innovazione', 'Tecnologie, ricerca e impatti concreti su lavoro, imprese e società.'],
    'economia-tech': ['Economia', 'Mercati e imprese', 'Economia reale, finanza e innovazione con attenzione alle ricadute in Italia.'],
    preferiti: ['La tua raccolta', 'Preferiti', 'Le notizie che vuoi ritrovare.'],
    'leggi-dopo': ['La tua coda', 'Leggi dopo', 'Gli articoli che hai scelto di approfondire.']
  };
  var NO_HERO_CATS = { preferiti: true, 'leggi-dopo': true };
  var FAV_KEY = 'lagraffaFavorites', LATER_KEY = 'lagraffaReadLater', READ_KEY = 'lagraffaRead', THEME_KEY = 'lagraffaTheme';
  var REFRESH_MS = 60 * 60 * 1000;
  var activeCategory = 'all', currentModalNews = null, aiContent = null, showingAi = false;
  var SORTED_NEWS = (typeof NEWS === 'undefined' ? [] : NEWS).slice().sort(function (a, b) { return (b.pub_ts || 0) - (a.pub_ts || 0); });
  var favs = readSet(FAV_KEY), later = readSet(LATER_KEY), read = readSet(READ_KEY);

  function readSet(key) { try { return new Set(JSON.parse(localStorage.getItem(key) || '[]')); } catch (_) { return new Set(); } }
  function saveSet(key, value) { localStorage.setItem(key, JSON.stringify(Array.from(value))); }
  function escapeHTML(value) { var d = document.createElement('div'); d.textContent = String(value || ''); return d.innerHTML; }
  function isFav(id) { return favs.has(id); } function isLater(id) { return later.has(id); } function isRead(id) { return read.has(id); }
  function toggleFav(id) { isFav(id) ? favs.delete(id) : favs.add(id); saveSet(FAV_KEY, favs); updateModalButtons(); renderAll(); }
  function toggleLater(id) { isLater(id) ? later.delete(id) : later.add(id); saveSet(LATER_KEY, later); updateModalButtons(); renderAll(); }
  function markRead(id) { if (!isRead(id)) { read.add(id); saveSet(READ_KEY, read); } }
  function cleanText(text) { return String(text || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(); }
  function detectLang(news) {
    var text = (news.title + ' ' + news.summary).toLowerCase();
    if (/\b(il|la|di|che|con|per|notizie|italia|secondo|una|sono)\b/.test(text)) return 'it';
    if (/\b(el|la|los|las|según|una|con|para|es)\b/.test(text)) return 'es';
    return 'en';
  }
  function formatBody(text) { return cleanText(text).split(/\n{2,}/).filter(Boolean).map(function (p) { return '<p>' + escapeHTML(p) + '</p>'; }).join(''); }
  function cacheKey(news) { return 'lagraffa-ai-' + news.id + '-' + (NEWS_TIMESTAMP || 'current'); }

  var heroSection = document.getElementById('heroSection'), heroTitle = document.getElementById('heroTitle'), heroSummary = document.getElementById('heroSummary'), heroCat = document.getElementById('heroCat'), heroTime = document.getElementById('heroTime'), heroSource = document.getElementById('heroSource'), heroReadBtn = document.getElementById('heroReadBtn'), heroReadIndicator = document.getElementById('heroReadIndicator');
  var grid = document.getElementById('newsGrid'), modalOverlay = document.getElementById('modalOverlay'), modalClose = document.getElementById('modalClose'), modalTitle = document.getElementById('modalTitle'), modalCat = document.getElementById('modalCat'), modalSource = document.getElementById('modalSource'), modalTime = document.getElementById('modalTime'), modalBody = document.getElementById('modalBody'), modalLink = document.getElementById('modalLink'), modalFavBtn = document.getElementById('modalFavBtn'), modalLaterBtn = document.getElementById('modalLaterBtn'), translateBtn = document.getElementById('translateBtn'), modalSourcesBlock = document.getElementById('modalSourcesBlock');
  var themeToggle = document.getElementById('themeToggle'), refreshBtn = document.getElementById('refreshBtn'), refreshTimer = document.getElementById('refreshTimer'), menuToggle = document.getElementById('menuToggle'), mobileNav = document.getElementById('mobileNav');

  function applyTheme(theme) { document.documentElement.setAttribute('data-theme', theme); themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙'; }
  applyTheme(localStorage.getItem(THEME_KEY) || 'light');
  themeToggle.addEventListener('click', function () { var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'; applyTheme(next); localStorage.setItem(THEME_KEY, next); });
  menuToggle.addEventListener('click', function () { mobileNav.classList.toggle('open'); });
  document.querySelectorAll('.cat-btn').forEach(function (button) { button.addEventListener('click', function () { activeCategory = button.dataset.cat; document.querySelectorAll('.cat-btn').forEach(function (item) { item.classList.toggle('active', item.dataset.cat === activeCategory); }); mobileNav.classList.remove('open'); renderAll(); window.scrollTo({ top: 0, behavior: 'smooth' }); }); });
  refreshBtn.addEventListener('click', function () { location.replace(location.pathname + '?t=' + Date.now()); });
  var nextRefreshAt = Date.now() + REFRESH_MS;
  setInterval(function () { var seconds = Math.max(0, Math.round((nextRefreshAt - Date.now()) / 1000)); refreshTimer.textContent = seconds > 60 ? 'Aggiorn. tra ' + Math.ceil(seconds / 60) + ' min' : 'Aggiornamento imminente'; if (!seconds) location.replace(location.pathname + '?t=' + Date.now()); }, 1000);

  function updateModalButtons() { if (!currentModalNews) return; modalFavBtn.classList.toggle('fav-on', isFav(currentModalNews.id)); modalLaterBtn.classList.toggle('later-on', isLater(currentModalNews.id)); }
  function setModalContent(news, content) { modalTitle.textContent = content && content.title || news.title; modalBody.innerHTML = formatBody(content && content.summary || news.body || news.summary); }
  function openModal(news) {
    currentModalNews = news; aiContent = null; showingAi = false; markRead(news.id); modalCat.textContent = CAT_LABELS[news.cat] || news.cat; modalSource.textContent = '📰 ' + news.source; modalTime.textContent = '🕐 ' + news.time; modalLink.href = news.url; setModalContent(news);
    var cached; try { cached = JSON.parse(localStorage.getItem(cacheKey(news)) || 'null'); } catch (_) { cached = null; }
    if (cached && cached.summary) { aiContent = cached; translateBtn.textContent = '✨ Mostra sintesi AI'; } else { translateBtn.textContent = detectLang(news) === 'it' ? '✨ Approfondisci con AI' : '✨ Traduci e approfondisci'; }
    translateBtn.style.display = ''; translateBtn.disabled = false;
    var sources = (typeof RSS_SOURCES === 'undefined' ? [] : RSS_SOURCES.filter(function (source) { return source.cat === news.cat; }));
    modalSourcesBlock.textContent = ''; var strong = document.createElement('strong'); strong.textContent = 'Fonti monitorate:'; modalSourcesBlock.appendChild(strong); sources.forEach(function (source) { var tag = document.createElement('span'); tag.textContent = source.name; modalSourcesBlock.appendChild(tag); }); modalSourcesBlock.style.display = sources.length ? '' : 'none';
    modalFavBtn.onclick = function () { toggleFav(news.id); }; modalLaterBtn.onclick = function () { toggleLater(news.id); }; updateModalButtons(); modalOverlay.classList.add('open'); document.body.style.overflow = 'hidden'; modalClose.focus();
  }
  translateBtn.addEventListener('click', function () {
    if (!currentModalNews) return;
    if (aiContent) { showingAi = !showingAi; setModalContent(currentModalNews, showingAi ? aiContent : null); translateBtn.textContent = showingAi ? '↩ Mostra testo originale' : '✨ Mostra sintesi AI'; return; }
    translateBtn.disabled = true; translateBtn.textContent = '⏳ Sintesi in preparazione…';
    fetch('/api/ai', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: currentModalNews.title, text: cleanText(currentModalNews.body || currentModalNews.summary), source: currentModalNews.source, language: detectLang(currentModalNews) }) })
      .then(function (response) { if (!response.ok) throw new Error('AI unavailable'); return response.json(); })
      .then(function (data) { aiContent = data; showingAi = true; localStorage.setItem(cacheKey(currentModalNews), JSON.stringify(data)); setModalContent(currentModalNews, data); translateBtn.textContent = '↩ Mostra testo originale'; translateBtn.disabled = false; })
      .catch(function () { translateBtn.textContent = '✨ Riprova più tardi'; translateBtn.disabled = false; });
  });
  function closeModal() { modalOverlay.classList.remove('open'); document.body.style.overflow = ''; currentModalNews = null; renderAll(); }
  modalClose.addEventListener('click', closeModal); modalOverlay.addEventListener('click', function (event) { if (event.target === modalOverlay) closeModal(); }); document.addEventListener('keydown', function (event) { if (event.key === 'Escape') closeModal(); });

  function renderHero(news) { if (!news) { heroSection.style.display = 'none'; return; } heroSection.style.display = ''; heroSection.className = 'hero-section cat-bg-' + news.cat; heroTitle.textContent = news.title; heroSummary.textContent = news.summary; heroCat.textContent = CAT_LABELS[news.cat] || news.cat; heroTime.textContent = news.time; heroSource.textContent = news.source; heroReadBtn.onclick = function () { openModal(news); }; heroReadIndicator.style.display = isRead(news.id) ? 'flex' : 'none'; }
  function buildCard(news) {
    var card = document.createElement('article'), wasRead = isRead(news.id); card.className = 'news-card cat-' + news.cat + (wasRead ? ' card-read' : ''); card.tabIndex = 0;
    card.innerHTML = '<div class="card-cat-bar"></div><div class="card-body"><div class="card-topline"><span class="card-cat-badge">' + escapeHTML(CAT_LABELS[news.cat] || news.cat) + '</span><span class="card-read-badge" style="display:' + (wasRead ? 'inline-flex' : 'none') + '">✔</span></div><h3 class="card-title">' + escapeHTML(news.title) + '</h3><p class="card-summary">' + escapeHTML(news.summary) + '</p></div><div class="card-footer"><span class="card-source">' + escapeHTML(news.source) + '</span><span class="card-footer-right"><span class="card-time">' + escapeHTML(news.time) + '</span><button class="card-later-btn' + (isLater(news.id) ? ' later-on' : '') + '" aria-label="Aggiungi a Leggi dopo">⏰</button></span></div>';
    function show() { openModal(news); } card.addEventListener('click', show); card.addEventListener('keydown', function (event) { if (event.key === 'Enter') show(); }); card.querySelector('.card-later-btn').addEventListener('click', function (event) { event.stopPropagation(); toggleLater(news.id); }); return card;
  }
  function getFiltered() { if (activeCategory === 'preferiti') return SORTED_NEWS.filter(function (n) { return isFav(n.id); }); if (activeCategory === 'leggi-dopo') return SORTED_NEWS.filter(function (n) { return isLater(n.id); }); return activeCategory === 'all' ? SORTED_NEWS : SORTED_NEWS.filter(function (n) { return n.cat === activeCategory; }); }
  function renderAll() { var description = CAT_DESCRIPTIONS[activeCategory], filtered = getFiltered(), noHero = NO_HERO_CATS[activeCategory]; document.getElementById('sectionKicker').textContent = description[0]; document.getElementById('sectionTitle').textContent = description[1]; document.getElementById('sectionDescription').textContent = description[2]; renderHero(noHero ? null : filtered[0]); grid.textContent = ''; var shown = noHero ? filtered : filtered.slice(1); if (!shown.length) { var empty = document.createElement('p'); empty.className = 'empty-state'; empty.textContent = noHero ? 'Non ci sono ancora notizie in questa sezione.' : 'Non ci sono altre notizie disponibili in questa sezione.'; grid.appendChild(empty); return; } shown.forEach(function (news) { grid.appendChild(buildCard(news)); }); }
  renderAll();
})();
