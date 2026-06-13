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

  // Template di espansione IN ITALIANO (usati solo quando il body originale è troppo corto)
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

  // Template di espansione IN INGLESE (usati per tradurre notizie inglesi corte)
  var EXPANSION_TEMPLATES_EN = [
    function(n) {
      return 'This story reported by ' + n.source + ' has drawn significant public attention. ' +
        'According to the latest available information, ' + (n.summary || '') + ' ' +
        'Full details are still being verified by editorial teams across major newsrooms. ' +
        'The situation is being monitored in real time by leading international news agencies. ' +
        'Further updates are expected in the coming hours as new elements emerge. ' +
        'For the complete article with all background details, please refer to the original source.';
    },
    function(n) {
      return 'Source ' + n.source + ' reports an update on this significant development. ' +
        (n.summary || '') + ' ' +
        'The context surrounding this news is rapidly evolving. ' +
        'Relevant institutions are closely monitoring the situation. ' +
        'Experts in the field highlight the importance of this development in the current global landscape. ' +
        'Follow updates on our platform to stay informed in real time.';
    }
  ];

  // Template di espansione IN SPAGNOLO
  var EXPANSION_TEMPLATES_ES = [
    function(n) {
      return 'Esta noticia reportada por ' + n.source + ' ha captado la atenci\u00f3n p\u00fablica. ' +
        'Seg\u00fan la informaci\u00f3n disponible, ' + (n.summary || '') + ' ' +
        'Los detalles completos est\u00e1n siendo verificados por los equipos editoriales. ' +
        'La situaci\u00f3n est\u00e1 siendo monitoreada en tiempo real por las principales agencias de noticias. ' +
        'Se esperan m\u00e1s actualizaciones en las pr\u00f3ximas horas. ' +
        'Para el art\u00edculo completo, consulte la fuente original.';
    },
    function(n) {
      return 'La fuente ' + n.source + ' informa sobre este importante tema. ' +
        (n.summary || '') + ' ' +
        'El contexto de esta noticia est\u00e1 en r\u00e1pida evoluci\u00f3n. ' +
        'Las instituciones competentes siguen de cerca la situaci\u00f3n. ' +
        'Los expertos subrayan la importancia de este desarrollo. ' +
        'Siga las actualizaciones en nuestra plataforma para mantenerse informado.';
    }
  ];

  var FAV_KEY    = 'ilPuntoFavorites';
  var LATER_KEY  = 'ilPuntoReadLater';
  var READ_KEY   = 'ilPuntoRead';
  var THEME_KEY  = 'ilPuntoTheme';
  var REFRESH_MS = 60 * 60 * 1000;

  var activeCategory    = 'all';
  var currentModalNews  = null;
  var isTranslated      = false;
  var refreshCountdown  = REFRESH_MS / 1000;
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
    saveFavs(); updateModalButtons(); refreshCard(id);
  }
  function toggleLater(id) {
    if (later.has(id)) later.delete(id); else later.add(id);
    saveLater(); updateModalButtons(); refreshCard(id);
  }
  function markRead(id) {
    if (!read.has(id)) { read.add(id); saveRead(); }
  }

  function refreshCard(id) {
    if (activeCategory === 'leggi-dopo' && !isLater(id)) { renderAll(); return; }
    if (activeCategory === 'preferiti'  && !isFav(id))   { renderAll(); return; }
    var cards = grid.querySelectorAll('.news-card');
    cards.forEach(function(card) {
      if (card._newsId === id) {
        card.classList.toggle('card-read', isRead(id));
      }
    });
  }

  // --- Espansione body per la VISUALIZZAZIONE (con template nella lingua corretta) ---
  // lang: 'it' | 'en' | 'es'  — determina quale template usare
  function expandBodyForLang(news, lang) {
    var body = (news.body || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (body.length >= 200) return body; // body originale sufficientemente lungo
    var idx = news.id % 2;
    if (lang === 'en') return EXPANSION_TEMPLATES_EN[idx](news);
    if (lang === 'es') return EXPANSION_TEMPLATES_ES[idx](news);
    // italiano (default per la visualizzazione normale)
    return EXPANSION_TEMPLATES[idx](news);
  }

  // Versione italiana per il modal (visualizzazione normale)
  function expandBodyIT(news) {
    return expandBodyForLang(news, 'it');
  }

  // --- Rilevamento lingua sul testo ORIGINALE ---
  var IT_RE = /\b(il|la|le|gli|dei|che|con|per|una|del|della|delle|degli|nel|nella|nelle|negli|anche|dopo|prima|mentre|quando|per\u00f2|inoltre|quindi|tuttavia|secondo|governo|stato|paese|sono|questa|questo|essere|aveva|hanno|viene|venire|loro|come|dove|tutto|tutti|tutte|ogni|molto|anni|anno|parte|caso|modo|volta|sempre|ancora|pi\u00f9|gi\u00e0|solo|fare|fatto|dire|detto|nuovo|grande|primo|italiano|italiana|italiani|italiane|nazionale|ministro|parlamento|regione|comune|impresa|azienda|lavoro|economia|politica|guerra|pace|accordo|legge|decreto|riforma|elezioni|partito|coalizione|sinistra|destra|centro|euro|milioni|miliardi)\b/gi;
  var ES_RE = /\b(el|los|las|del|de|en|con|por|para|que|una|un|es|son|ha|han|ser|estar|tiene|tienen|este|esta|estos|estas|pero|como|cuando|donde|todo|todos|todas|sobre|entre|cada|muy|bien|m\u00e1s|tambi\u00e9n|a\u00f1o|pa\u00eds|gobierno|partido|espa\u00f1a|madrid|barcelona|seg\u00fan|tras|durante|fue|sus|siendo|su|sus|al|ni|o\u00f3)\b/gi;
  var EN_RE = /\b(the|and|for|are|but|not|you|all|can|had|her|was|one|our|out|has|him|his|how|its|may|new|now|old|see|two|way|who|said|have|that|from|they|this|will|with|been|into|more|also|when|your|time|than|then|them|some|would|could|about|which|their|there|these|those|where|while|being|after|under|since|before|between|through|during|however|because|therefore|government|minister|president|country|national|political|military|economic|according|reported|official|sources|amid|push|deal|talks|says|ceasefire|frozen|unlock|why|wrong|loathe|leaders|scorn|mistake|strongmen)\b/gi;

  var IT_SOURCES = ['ansa','corriere','repubblica','stampa','sole 24','wired it','sky tg','agi ','internazionale','limes','il post','valigia','pagella','facta','fanpage','open '];
  var ES_SOURCES = ['pa\u00eds','pais','el mundo','abc ','vanguardia','expansi\u00f3n','expansion','cinco d\u00edas','lavanguardia'];

  function detectLangRaw(news) {
    var raw = ((news.title || '') + ' ' + (news.body || '') + ' ' + (news.summary || '')).slice(0, 1500);
    var itC = (raw.match(IT_RE) || []).length;
    var esC = (raw.match(ES_RE) || []).length;
    var enC = (raw.match(EN_RE) || []).length;
    var tot = itC + esC + enC;

    if (tot < 5) {
      // Testo troppo corto: usa la fonte come fallback
      var src = (news.source || '').toLowerCase();
      for (var i = 0; i < IT_SOURCES.length; i++) {
        if (src.indexOf(IT_SOURCES[i]) !== -1) return 'it';
      }
      for (var j = 0; j < ES_SOURCES.length; j++) {
        if (src.indexOf(ES_SOURCES[j]) !== -1) return 'es';
      }
      return 'en';
    }

    var itRatio = itC / tot;
    if (itRatio >= 0.35) return 'it';
    if (esC > enC * 1.2 && esC > 3) return 'es';
    return 'en';
  }

  // --- Traduzione MyMemory ---
  function translateText(text, sl) {
    var langpair = (sl || 'en') + '|it';
    var chunks = [];
    var rem = text;
    while (rem.length > 0) {
      var cut = Math.min(480, rem.length);
      if (rem.length > 480) {
        var ld = rem.lastIndexOf('. ', 480);
        if (ld > 150) cut = ld + 2;
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
      .replace(/&amp;/g,'&').replace(/&#039;/g,"'").replace(/&quot;/g,'"')
      .replace(/&#8217;/g,'\u2019').replace(/&#8216;/g,'\u2018')
      .replace(/&#8220;/g,'\u201c').replace(/&#8221;/g,'\u201d')
      .replace(/&#160;/g,' ').replace(/&#8230;/g,'\u2026')
      .replace(/<img[^>]*>/gi,'').replace(/<a[^>]*>(.*?)<\/a>/gi,'$1')
      .replace(/<[^>]+>/g,' ').replace(/\s{2,}/g,' ').trim();
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
    return paras.map(function(p){return p.trim();})
      .filter(function(p){return p.length > 0;})
      .map(function(p){return '<p>'+p+'</p>';}).join('');
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

  menuToggle.addEventListener('click', function() { mobileNav.classList.toggle('open'); });

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

  function openModal(news) {
    currentModalNews = news;
    isTranslated = false;

    markRead(news.id);

    modalCat.textContent    = CAT_LABELS[news.cat] || news.cat;
    modalTitle.textContent  = news.title;
    modalSource.textContent = '\ud83d\udcf0 ' + news.source;
    modalTime.textContent   = '\ud83d\udd50 ' + news.time;
    modalLink.href          = news.url;

    // Rileva lingua sul testo ORIGINALE
    var lang = detectLangRaw(news);
    translateBtn._sl = lang;

    // Visualizza il body espanso nella lingua originale (non tradotta)
    var displayBody = expandBodyForLang(news, lang);
    modalBody.innerHTML = formatBody(displayBody);

    if (lang !== 'it') {
      translateBtn.style.display = '';
      translateBtn.textContent = '\ud83c\udf10 Traduci in italiano';
      translateBtn.disabled = false;
    } else {
      translateBtn.style.display = 'none';
    }

    var rel = (typeof RSS_SOURCES !== 'undefined')
      ? RSS_SOURCES.filter(function(s) { return s.cat === news.cat; }) : [];
    if (rel.length) {
      modalSourcesBlock.innerHTML = '<strong>Fonti monitorate:</strong> '
        + rel.map(function(s) { return '<span>' + s.name + '</span>'; }).join('');
      modalSourcesBlock.style.display = '';
    } else {
      modalSourcesBlock.style.display = 'none';
    }

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
    var news = currentModalNews;
    var sl = translateBtn._sl || 'en';

    if (isTranslated) {
      // Torna all'originale (nella lingua originale)
      var origBody = expandBodyForLang(news, sl);
      modalBody.innerHTML = formatBody(origBody);
      translateBtn.textContent = '\ud83c\udf10 Traduci in italiano';
      isTranslated = false;
      return;
    }

    translateBtn.textContent = '\u23f3 Traduzione in corso\u2026';
    translateBtn.disabled = true;

    // Testo da tradurre: titolo + body espanso nella lingua originale
    var textToTranslate = news.title + '. ' + expandBodyForLang(news, sl);

    translateText(textToTranslate, sl).then(function(translated) {
      modalBody.innerHTML = formatBody(translated);
      translateBtn.textContent = "\u21a9 Torna all'originale";
      translateBtn.disabled = false;
      isTranslated = true;
    }).catch(function() {
      translateBtn.textContent = '\ud83c\udf10 Traduci in italiano';
      translateBtn.disabled = false;
    });
  });

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
    currentModalNews = null;
    isTranslated = false;
    renderAll();
  }
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', function(e) { if (e.target === modalOverlay) closeModal(); });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

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

  function getFiltered() {
    if (activeCategory === 'preferiti')  return NEWS.filter(function(n) { return isFav(n.id); });
    if (activeCategory === 'leggi-dopo') return NEWS.filter(function(n) { return isLater(n.id); });
    if (activeCategory === 'all') return NEWS;
    return NEWS.filter(function(n) { return n.cat === activeCategory; });
  }

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
