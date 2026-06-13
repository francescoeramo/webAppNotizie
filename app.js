(function () {
  'use strict';

  var CAT_LABELS = {
    'politica-italiana': 'Politica IT',
    'geopolitica':       'Geopolitica',
    'conflitti':         'Conflitti',
    'ai':                'AI & Tech',
    'economia-tech':     'Economia',
    'preferiti':         '\u2605 Preferiti',
    'leggi-dopo':        '\u23f0 Leggi dopo'
  };

  var EXPANSION_TEMPLATES = [
    function(n) {
      return 'La notizia riportata da ' + n.source + ' ha attirato l\'attenzione dell\'opinione pubblica. ' +
        'Secondo le prime informazioni disponibili, ' + n.summary + ' ' +
        'I dettagli completi sono in corso di verifica da parte delle redazioni. ' +
        'L\'evoluzione della situazione viene monitorata in tempo reale dalle principali agenzie di stampa. ' +
        'Ulteriori aggiornamenti sono attesi nelle prossime ore, man mano che emergono nuovi elementi. ' +
        'Per l\'articolo completo con tutti gli approfondimenti, consulta la fonte originale.';
    },
    function(n) {
      return 'La fonte ' + n.source + ' riporta un aggiornamento su questo tema di rilievo. ' +
        n.summary + ' ' +
        'Il contesto in cui si inserisce questa notizia \u00e8 in rapida evoluzione. ' +
        'Le istituzioni competenti stanno seguendo la situazione con attenzione. ' +
        'Esperti del settore sottolineano l\'importanza di questo sviluppo nel quadro attuale. ' +
        'Segui gli aggiornamenti sulla nostra piattaforma per restare informato in tempo reale.';
    }
  ];

  var FAV_KEY    = 'ilPuntoFavorites';
  var LATER_KEY  = 'ilPuntoReadLater';
  var READ_KEY   = 'ilPuntoRead';
  var THEME_KEY  = 'ilPuntoTheme';
  var REFRESH_MS = 60 * 60 * 1000;

  var activeCategory   = 'all';
  var currentModalNews = null;
  var isTranslated     = false;
  var refreshCountdown = REFRESH_MS / 1000;
  var countdownInterval = null;

  var favs  = new Set(JSON.parse(localStorage.getItem(FAV_KEY)   || '[]'));
  var later = new Set(JSON.parse(localStorage.getItem(LATER_KEY) || '[]'));
  var read  = new Set(JSON.parse(localStorage.getItem(READ_KEY)  || '[]'));

  function saveFavs()  { localStorage.setItem(FAV_KEY,   JSON.stringify(Array.from(favs)));  }
  function saveLater() { localStorage.setItem(LATER_KEY, JSON.stringify(Array.from(later))); }
  function saveRead()  { localStorage.setItem(READ_KEY,  JSON.stringify(Array.from(read)));  }

  function isFav(id)   { return favs.has(id);  }
  function isLater(id) { return later.has(id); }
  function isRead(id)  { return read.has(id);  }

  function toggleFav(id) {
    if (favs.has(id)) favs.delete(id); else favs.add(id);
    saveFavs();
    updateModalButtons();
    // Aggiorna solo la card coinvolta senza ridisegnare tutto
    refreshCard(id);
  }
  function toggleLater(id) {
    if (later.has(id)) later.delete(id); else later.add(id);
    saveLater();
    updateModalButtons();
    refreshCard(id);
  }
  function markRead(id) {
    if (!read.has(id)) { read.add(id); saveRead(); }
  }

  // Aggiorna una singola card già nel DOM (evita re-render completo mentre il modal è aperto)
  function refreshCard(id) {
    // Se siamo in leggi-dopo e togliamo la notizia, la card sparisce
    if (activeCategory === 'leggi-dopo' && !isLater(id)) { renderAll(); return; }
    if (activeCategory === 'preferiti'  && !isFav(id))   { renderAll(); return; }
    // Altrimenti aggiorna solo badge e classe
    var cards = grid.querySelectorAll('.news-card');
    cards.forEach(function(card) {
      if (card._newsId === id) {
        card.classList.toggle('card-read', isRead(id));
        var badge = card.querySelector('.card-read-badge');
        if (isRead(id) && !badge) {
          var topline = card.querySelector('.card-topline');
          if (topline) {
            var sp = document.createElement('span');
            sp.className = 'card-read-badge';
            sp.title = 'Gi\u00e0 letta';
            sp.textContent = '\u2714';
            topline.appendChild(sp);
          }
        }
      }
    });
  }

  // --- Espansione body corto (usata SOLO per la visualizzazione, NON per il rilevamento lingua) ---
  function expandBody(news) {
    var body = (news.body || '').trim();
    if (body.length < 300) {
      var tmpl = EXPANSION_TEMPLATES[news.id % EXPANSION_TEMPLATES.length];
      body = tmpl(news);
    }
    return body;
  }

  // --- Rilevamento lingua sul testo ORIGINALE (title + body grezzo, prima dell'espansione) ---
  var IT_RE = /\b(il|la|le|gli|dei|che|con|per|una|del|della|delle|degli|nel|nella|nelle|negli|anche|dopo|prima|mentre|quando|per\u00f2|inoltre|quindi|tuttavia|secondo|governo|stato|paese|sono|questa|questo|essere|aveva|hanno|viene|venire|loro|come|dove|tutto|tutti|tutte|ogni|molto|anni|anno|parte|caso|modo|volta|sempre|ancora|pi\u00f9|gi\u00e0|solo|fare|fatto|dire|detto|nuovo|grande|primo|italiano|italiana|italiani|italiane|nazionale|ministro|parlamento|regione|comune|impresa|azienda|lavoro|economia|politica|guerra|pace|accordo|legge|decreto|riforma|elezioni|partito|coalizione|sinistra|destra|centro|euro|milioni|miliardi)\b/gi;
  var ES_RE = /\b(el|los|las|del|de|en|con|por|para|que|una|un|es|son|ha|han|ser|estar|tiene|tienen|este|esta|estos|estas|pero|como|cuando|donde|todo|todos|todas|sobre|entre|cada|muy|bien|m\u00e1s|tambi\u00e9n|a\u00f1o|pa\u00eds|gobierno|partido|espa\u00f1a|madrid|barcelona|seg\u00fan|tras|durante|fue|han|sus|entre|siendo)\b/gi;
  var EN_RE = /\b(the|and|for|are|but|not|you|all|can|had|her|was|one|our|out|has|him|his|how|its|may|new|now|old|see|two|way|who|said|have|that|from|they|this|will|with|been|into|more|also|when|your|time|than|then|them|some|would|could|about|which|their|there|these|those|where|while|being|after|under|since|before|between|through|during|however|because|therefore|government|minister|president|country|national|political|military|economic|according|reported|official|sources|amid|push|deal|talks|says|amid|while|after|over|amid|ceasefire|frozen|unlock)\b/gi;

  function detectLangRaw(news) {
    // Usa SOLO il testo originale: titolo + body grezzo (non espanso)
    var raw = (news.title + ' ' + (news.body || '') + ' ' + (news.summary || '')).slice(0, 1500);
    var itC = (raw.match(IT_RE) || []).length;
    var esC = (raw.match(ES_RE) || []).length;
    var enC = (raw.match(EN_RE) || []).length;
    var tot = itC + esC + enC;
    if (tot === 0) {
      // Nessuna parola riconosciuta: fallback su source
      var src = (news.source || '').toLowerCase();
      if (src.indexOf('ansa') !== -1 || src.indexOf('corriere') !== -1 ||
          src.indexOf('post') !== -1 || src.indexOf('valigia') !== -1 ||
          src.indexOf('pagella') !== -1 || src.indexOf('facta') !== -1 ||
          src.indexOf('sole') !== -1 || src.indexOf('wired it') !== -1 ||
          src.indexOf('sky tg') !== -1 || src.indexOf('agi') !== -1 ||
          src.indexOf('internazionale') !== -1 || src.indexOf('limes') !== -1) {
        return 'it';
      }
      if (src.indexOf('pa\u00eds') !== -1 || src.indexOf('pais') !== -1) return 'es';
      return 'en';
    }
    var itRatio = itC / tot;
    if (itRatio >= 0.35) return 'it';
    if (esC > enC * 1.2) return 'es';
    return 'en';
  }

  // --- Traduzione MyMemory ---
  function translateText(text, sl) {
    var langpair = (sl || 'en') + '|it';
    var chunks = [];
    var rem = text;
    while (rem.length > 0) {
      var cut = Math.min(450, rem.length);
      if (rem.length > 450) {
        var ld = rem.lastIndexOf('.', 450);
        if (ld > 200) cut = ld + 1;
      }
      chunks.push(rem.slice(0, cut).trim());
      rem = rem.slice(cut).trim();
    }
    return Promise.all(chunks.map(function(chunk) {
      if (!chunk) return Promise.resolve('');
      var url = 'https://api.mymemory.translated.net/get?q='
        + encodeURIComponent(chunk) + '&langpair=' + encodeURIComponent(langpair);
      return fetch(url)
        .then(function(r) { return r.json(); })
        .then(function(d) {
          return (d && d.responseData && d.responseData.translatedText) ? d.responseData.translatedText : chunk;
        })
        .catch(function() { return chunk; });
    })).then(function(parts) { return parts.join(' '); });
  }

  // --- Formattazione HTML body ---
  function formatBody(raw) {
    var html = (raw || '')
      .replace(/&amp;/g, '&').replace(/&#039;/g, "'").replace(/&quot;/g, '"')
      .replace(/&#8217;/g, '\u2019').replace(/&#8216;/g, '\u2018')
      .replace(/&#8220;/g, '\u201c').replace(/&#8221;/g, '\u201d')
      .replace(/&#160;/g, ' ').replace(/&#8230;/g, '\u2026')
      .replace(/<img[^>]*>/gi, '').replace(/<a[^>]*>(.*?)<\/a>/gi, '$1')
      .replace(/<[^>]+>/g, ' ').replace(/\s{2,}/g, ' ').trim();
    var paras;
    if (html.indexOf('\n\n') !== -1) {
      paras = html.split(/\n\n+/);
    } else if (html.indexOf('\n') !== -1) {
      paras = html.split(/\n+/);
    } else {
      paras = [];
      var r = html;
      while (r.length > 500) {
        var dot = r.indexOf('. ', 300);
        if (dot === -1 || dot > 700) dot = 500; else dot += 1;
        paras.push(r.slice(0, dot).trim());
        r = r.slice(dot).trim();
      }
      if (r) paras.push(r);
    }
    return paras.map(function(p) { return p.trim(); })
      .filter(function(p) { return p.length > 0; })
      .map(function(p) { return '<p>' + p + '</p>'; }).join('');
  }

  // --- DOM refs ---
  var grid              = document.getElementById('newsGrid');
  var heroSection       = document.getElementById('heroSection');
  var heroTitle         = document.getElementById('heroTitle');
  var heroSummary       = document.getElementById('heroSummary');
  var heroCat           = document.getElementById('heroCat');
  var heroTime          = document.getElementById('heroTime');
  var heroSource        = document.getElementById('heroSource');
  var heroReadBtn       = document.getElementById('heroReadBtn');
  var modalOverlay      = document.getElementById('modalOverlay');
  var modalClose        = document.getElementById('modalClose');
  var modalTitle        = document.getElementById('modalTitle');
  var modalCat          = document.getElementById('modalCat');
  var modalSource       = document.getElementById('modalSource');
  var modalTime         = document.getElementById('modalTime');
  var modalBody         = document.getElementById('modalBody');
  var modalLink         = document.getElementById('modalLink');
  var modalFavBtn       = document.getElementById('modalFavBtn');
  var modalLaterBtn     = document.getElementById('modalLaterBtn');
  var translateBtn      = document.getElementById('translateBtn');
  var modalSourcesBlock = document.getElementById('modalSourcesBlock');
  var themeToggle       = document.getElementById('themeToggle');
  var refreshBtn        = document.getElementById('refreshBtn');
  var refreshTimer      = document.getElementById('refreshTimer');
  var menuToggle        = document.getElementById('menuToggle');
  var mobileNav         = document.getElementById('mobileNav');
  var allCatBtns        = document.querySelectorAll('.cat-btn');

  // --- Tema ---
  applyTheme(localStorage.getItem(THEME_KEY) || 'light');
  themeToggle.addEventListener('click', function() {
    var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next); localStorage.setItem(THEME_KEY, next);
  });
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    themeToggle.textContent = t === 'dark' ? '\u2600\ufe0f' : '\ud83c\udf19';
  }

  // --- Menu mobile ---
  menuToggle.addEventListener('click', function() { mobileNav.classList.toggle('open'); });

  // --- Filtri categoria ---
  allCatBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      activeCategory = btn.dataset.cat;
      allCatBtns.forEach(function(b) { b.classList.remove('active'); });
      document.querySelectorAll('[data-cat="' + activeCategory + '"]').forEach(function(b) {
        b.classList.add('active');
      });
      mobileNav.classList.remove('open');
      renderAll();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // --- Refresh ---
  refreshBtn.addEventListener('click', function() { resetCountdown(); location.reload(); });
  function formatCountdown(sec) {
    var m = Math.floor(sec / 60);
    return m > 0 ? 'Aggiorn. tra ' + m + ' min' : 'Aggiorn. tra ' + sec + 's';
  }
  function resetCountdown() {
    refreshCountdown = REFRESH_MS / 1000;
    if (countdownInterval) clearInterval(countdownInterval);
    countdownInterval = setInterval(function() {
      refreshCountdown--;
      if (refreshTimer) refreshTimer.textContent = formatCountdown(refreshCountdown);
      if (refreshCountdown <= 0) { resetCountdown(); location.reload(); }
    }, 1000);
  }
  resetCountdown();

  // --- Aggiorna stato pulsanti modal ---
  function updateModalButtons() {
    if (!currentModalNews) return;
    var id = currentModalNews.id;
    var fOn = isFav(id);
    modalFavBtn.classList.toggle('fav-on', fOn);
    modalFavBtn.title = fOn ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti';
    var lOn = isLater(id);
    modalLaterBtn.classList.toggle('later-on', lOn);
    modalLaterBtn.title = lOn ? 'Rimuovi da Leggi dopo' : 'Aggiungi a Leggi dopo';
  }

  // --- Apri modal ---
  function openModal(news) {
    currentModalNews = news;
    isTranslated = false;

    markRead(news.id);

    modalCat.textContent    = CAT_LABELS[news.cat] || news.cat;
    modalTitle.textContent  = news.title;
    modalSource.textContent = '\ud83d\udcf0 ' + news.source;
    modalTime.textContent   = '\ud83d\udd50 ' + news.time;
    modalLink.href          = news.url;

    // Mostra il body espanso nel modal
    var bodyDisplay = expandBody(news);
    modalBody.innerHTML = formatBody(bodyDisplay);

    // IMPORTANTE: rileva la lingua sul testo ORIGINALE (news.title + news.body + news.summary)
    // prima che venga aggiunto il wrapper italiano dell'expansion template
    var lang = detectLangRaw(news);
    if (lang !== 'it') {
      translateBtn.style.display = '';
      translateBtn.textContent = '\ud83c\udf10 Traduci in italiano';
      translateBtn.disabled = false;
      translateBtn._sl = lang;
    } else {
      translateBtn.style.display = 'none';
      translateBtn._sl = 'it';
    }

    // Fonti correlate
    var rel = (typeof RSS_SOURCES !== 'undefined')
      ? RSS_SOURCES.filter(function(s) { return s.cat === news.cat; }) : [];
    if (rel.length) {
      modalSourcesBlock.innerHTML = '<strong>Fonti monitorate:</strong> '
        + rel.map(function(s) { return '<span>' + s.name + '</span>'; }).join('');
      modalSourcesBlock.style.display = '';
    } else {
      modalSourcesBlock.style.display = 'none';
    }

    // Collega i pulsanti
    modalFavBtn.onclick   = function(e) { e.stopPropagation(); toggleFav(news.id); };
    modalLaterBtn.onclick = function(e) { e.stopPropagation(); toggleLater(news.id); };

    updateModalButtons();
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  // --- Traduzione ---
  translateBtn.addEventListener('click', function() {
    if (!currentModalNews) return;
    if (isTranslated) {
      modalBody.innerHTML = formatBody(expandBody(currentModalNews));
      translateBtn.textContent = '\ud83c\udf10 Traduci in italiano';
      isTranslated = false;
      return;
    }
    translateBtn.textContent = '\u23f3 Traduzione in corso\u2026';
    translateBtn.disabled = true;
    // Traduci il body originale (non il wrapper italiano)
    var rawText = (currentModalNews.body || currentModalNews.summary || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (!rawText) rawText = currentModalNews.summary || '';
    translateText(rawText, translateBtn._sl || 'en').then(function(t) {
      modalBody.innerHTML = formatBody(t);
      translateBtn.textContent = "\u21a9 Torna all'originale";
      translateBtn.disabled = false;
      isTranslated = true;
    }).catch(function() {
      translateBtn.textContent = '\ud83c\udf10 Traduci in italiano';
      translateBtn.disabled = false;
    });
  });

  // --- Chiudi modal ---
  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
    currentModalNews = null;
    isTranslated = false;
    renderAll(); // aggiorna spunte letto
  }
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', function(e) { if (e.target === modalOverlay) closeModal(); });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

  // --- Hero ---
  function renderHero(news) {
    if (!news) { heroSection.style.display = 'none'; return; }
    heroSection.style.display = '';
    heroSection.className = 'hero-section cat-bg-' + news.cat + (isRead(news.id) ? ' hero-read' : '');
    heroTitle.textContent   = news.title;
    heroSummary.textContent = news.summary;
    heroCat.textContent     = CAT_LABELS[news.cat] || news.cat;
    heroTime.textContent    = news.time;
    heroSource.textContent  = news.source;
    heroReadBtn.onclick     = function() { openModal(news); };
  }

  // --- Card ---
  function buildCard(news) {
    var card = document.createElement('div');
    var readCls = isRead(news.id) ? ' card-read' : '';
    card.className = 'news-card cat-' + news.cat + readCls;
    card._newsId = news.id;
    var tags = (news.tags || []).map(function(t) {
      return '<span class="card-tag">#' + t + '</span>';
    }).join('');
    var readBadge = isRead(news.id)
      ? '<span class="card-read-badge" title="Gi\u00e0 letta">\u2714</span>' : '';
    card.innerHTML =
      '<div class="card-cat-bar"></div>' +
      '<div class="card-body">' +
        '<div class="card-topline">' +
          '<span class="card-cat-badge">' + (CAT_LABELS[news.cat] || news.cat) + '</span>' +
          readBadge +
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

  // --- Filtro ---
  function getFiltered() {
    if (activeCategory === 'preferiti')  return NEWS.filter(function(n) { return isFav(n.id); });
    if (activeCategory === 'leggi-dopo') return NEWS.filter(function(n) { return isLater(n.id); });
    if (activeCategory === 'all') return NEWS;
    return NEWS.filter(function(n) { return n.cat === activeCategory; });
  }

  // --- Render ---
  function renderAll() {
    var filtered = getFiltered();
    renderHero(filtered[0] || null);
    grid.innerHTML = '';
    var rest = filtered.slice(1);
    if (!rest.length) {
      var msgs = {
        'preferiti':  'Nessuna notizia salvata. Apri una notizia e premi \u2605 per aggiungerla qui.',
        'leggi-dopo': 'Nessuna notizia in coda. Apri una notizia e premi \u23f0 per aggiungerla qui.'
      };
      grid.innerHTML = '<div class="empty-state">' + (msgs[activeCategory] || 'Nessuna notizia disponibile.') + '</div>';
      return;
    }
    rest.forEach(function(n) { grid.appendChild(buildCard(n)); });
  }

  renderAll();
})();
