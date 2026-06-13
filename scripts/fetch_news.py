#!/usr/bin/env python3
"""
fetch_news.py - scarica RSS, genera news.js (ordinato per data decrescente)
e aggiorna index.html con cache-bust timestamp.
"""

import feedparser
import json
import re
from datetime import datetime, timezone, timedelta
from pathlib import Path

RSS_SOURCES = [
    {"name": "ANSA",             "url": "https://www.ansa.it/sito/ansait_rss.xml",                          "cat": "politica-italiana"},
    {"name": "Corriere",         "url": "https://xml2.corrieredellasera.it/rss/homepage.xml",                "cat": "politica-italiana"},
    {"name": "Il Post",          "url": "https://www.ilpost.it/feed/",                                       "cat": "politica-italiana"},
    {"name": "Sky TG24",         "url": "https://tg24.sky.it/feed/rss.xml",                                  "cat": "politica-italiana"},
    {"name": "AGI",              "url": "https://www.agi.it/feed/rss.xml",                                   "cat": "politica-italiana"},
    {"name": "Pagella Politica", "url": "https://pagellapolitica.it/feed",                                   "cat": "politica-italiana"},
    {"name": "Facta",            "url": "https://facta.news/feed/",                                          "cat": "politica-italiana"},
    {"name": "Valigia Blu",      "url": "https://www.valigiablu.it/feed/",                                   "cat": "politica-italiana"},
    {"name": "Limes",            "url": "https://www.limesonline.com/feed",                                  "cat": "geopolitica"},
    {"name": "Internazionale",   "url": "https://www.internazionale.it/feed/tutto",                          "cat": "geopolitica"},
    {"name": "BBC World",        "url": "https://feeds.bbci.co.uk/news/world/rss.xml",                       "cat": "geopolitica"},
    {"name": "AP",               "url": "https://apnews.com/hub/world-news?output=rss",                      "cat": "geopolitica"},
    {"name": "The Economist",    "url": "https://www.economist.com/international/rss.xml",                   "cat": "geopolitica"},
    {"name": "El Pais",          "url": "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada",  "cat": "geopolitica"},
    {"name": "Reuters",          "url": "https://feeds.reuters.com/reuters/worldNews",                       "cat": "conflitti"},
    {"name": "Al Jazeera",       "url": "https://www.aljazeera.com/xml/rss/all.xml",                         "cat": "conflitti"},
    {"name": "AP conflitti",     "url": "https://apnews.com/hub/wars-and-conflicts?output=rss",              "cat": "conflitti"},
    {"name": "The Verge",        "url": "https://www.theverge.com/rss/index.xml",                            "cat": "ai"},
    {"name": "Wired IT",         "url": "https://www.wired.it/feed/rss",                                     "cat": "ai"},
    {"name": "TechCrunch",       "url": "https://techcrunch.com/feed/",                                      "cat": "ai"},
    {"name": "Il Post Tech",     "url": "https://www.ilpost.it/tecnologia/feed/",                            "cat": "ai"},
    {"name": "Il Sole 24 Ore",   "url": "https://www.ilsole24ore.com/rss/economia.xml",                      "cat": "economia-tech"},
    {"name": "Bloomberg Tech",   "url": "https://feeds.bloomberg.com/technology/news.rss",                   "cat": "economia-tech"},
    {"name": "Financial Times",  "url": "https://www.ft.com/rss/home",                                       "cat": "economia-tech"},
    {"name": "The Economist Ec", "url": "https://www.economist.com/business/rss.xml",                        "cat": "economia-tech"},
]

KEYWORDS = {
    "politica-italiana": ["italia","governo","meloni","parlamento","senato","camera","ministro","pd","fdi","lega","forza italia","m5s","decreto","riforma","quirinale","premier","elezioni","regione","comune","sindaco"],
    "geopolitica": ["nato","geopolitics","geopolitica","summit","diplomacy","diplomazia","us","usa","china","cina","russia","europe","europa","trump","xi","un ","onu","g7","g20","sanctions","treaty","election","president","presidente"],
    "conflitti": ["war","guerra","conflict","conflitto","ukraine","ucraina","russia","gaza","israel","israele","hamas","attack","attacco","missile","troops","ceasefire","military","militare","nato","bombing","refugee","iran","syria"],
    "ai": ["artificial intelligence","intelligenza artificiale","ai","machine learning","openai","chatgpt","gpt","gemini","claude","anthropic","deepmind","llm","neural","model","robot","automation","chip","nvidia","tech","technology","software","algorithm"],
    "economia-tech": ["economia","economy","market","mercato","stock","borsa","bce","fed","inflation","inflazione","rate","tasso","startup","investment","gdp","pil","trade","semiconductor","energy","crypto","bitcoin","fintech","ipo"],
}

MAX_PER_CAT    = 10
MAX_AGE_HOURS  = 48
MIN_BODY_CHARS = 800
ROOT = Path(__file__).parent.parent


def clean_html(text):
    text = re.sub(r"<[^>]+>", " ", text or "")
    return re.sub(r"\s+", " ", text).strip()

def truncate(text, max_chars=300):
    if len(text) <= max_chars:
        return text
    return text[:max_chars].rsplit(" ", 1)[0] + "\u2026"

def get_pub_dt(entry):
    parsed = entry.get("published_parsed") or entry.get("updated_parsed")
    if not parsed:
        return None
    try:
        return datetime(*parsed[:6], tzinfo=timezone.utc)
    except Exception:
        return None

def relative_time(dt):
    if dt is None:
        return "poco fa"
    delta = datetime.now(timezone.utc) - dt
    minutes = int(delta.total_seconds() / 60)
    if minutes < 2:   return "poco fa"
    if minutes < 60:  return f"{minutes} min fa"
    hours = minutes // 60
    if hours < 24:    return f"{hours} {'ora' if hours == 1 else 'ore'} fa"
    days = hours // 24
    return f"{days} {'giorno' if days == 1 else 'giorni'} fa"

def score_entry(entry, cat):
    text = (entry.get("title", "") + " " + clean_html(entry.get("summary", ""))).lower()
    return sum(1 for kw in KEYWORDS.get(cat, []) if kw in text)

def build_body(entry):
    summary = clean_html(entry.get("summary", "") or entry.get("description", ""))
    content_list = entry.get("content", [])
    full = ""
    for c in content_list:
        candidate = clean_html(c.get("value", ""))
        if len(candidate) > len(full):
            full = candidate
    body = full if len(full) > len(summary) + 50 else summary
    if len(body) < MIN_BODY_CHARS:
        return body
    words = body.split()
    paragraphs, current, count = [], [], 0
    for w in words:
        current.append(w)
        count += len(w) + 1
        if count >= 400 and w.endswith("."):
            paragraphs.append(" ".join(current))
            current, count = [], 0
    if current:
        paragraphs.append(" ".join(current))
    return "\n\n".join(paragraphs)

def fetch_all():
    buckets = {cat: [] for cat in KEYWORDS}
    cutoff = datetime.now(timezone.utc) - timedelta(hours=MAX_AGE_HOURS)

    for source in RSS_SOURCES:
        cat = source["cat"]
        print(f"  Fetching {source['name']}...")
        try:
            feed = feedparser.parse(source["url"])
            entries = feed.entries[:30]
        except Exception as e:
            print(f"    ERRORE: {e}")
            continue

        for entry in entries:
            pub_dt = get_pub_dt(entry)
            if pub_dt and pub_dt < cutoff:
                continue

            score = score_entry(entry, cat)
            if score == 0 and cat not in ("ai", "economia-tech"):
                continue

            title   = clean_html(entry.get("title", "")).strip()
            summary = clean_html(entry.get("summary", "") or entry.get("description", ""))
            if not title or len(summary) < 30:
                continue

            # pub_ts: Unix timestamp intero (0 se assente)
            pub_ts = int(pub_dt.timestamp()) if pub_dt else 0

            buckets[cat].append({
                "title":   title,
                "summary": truncate(summary, 280),
                "body":    build_body(entry),
                "source":  source["name"],
                "url":     entry.get("link", source["url"]),
                "time":    relative_time(pub_dt),
                "pub_ts":  pub_ts,
                "score":   score,
            })

    result = {}
    for cat, items in buckets.items():
        seen = set()
        unique = []
        # Ordina: data decrescente prima, score come secondario
        for item in sorted(items, key=lambda x: (x["pub_ts"], x["score"]), reverse=True):
            norm = re.sub(r"[^a-z0-9]", "", item["title"].lower())[:60]
            if norm not in seen:
                seen.add(norm)
                unique.append(item)
            if len(unique) >= MAX_PER_CAT:
                break
        result[cat] = unique
    return result

def js_string(s):
    return json.dumps(s, ensure_ascii=False)

def generate_news_js(buckets, ts):
    now = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    lines = []
    lines.append(f"// Generato automaticamente il {now} da scripts/fetch_news.py")
    lines.append("// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.")
    lines.append(f"var NEWS_TIMESTAMP = {ts};")
    lines.append("")
    lines.append("const RSS_SOURCES = " + json.dumps(
        [{"name": s["name"], "url": s["url"], "cat": s["cat"]} for s in RSS_SOURCES],
        ensure_ascii=False, indent=2
    ) + ";")
    lines.append("")
    lines.append("const NEWS = [")
    news_id = 1
    for cat, items in buckets.items():
        for item in items:
            lines.append("  {")
            lines.append(f"    id: {news_id},")
            lines.append(f"    cat: {js_string(cat)},")
            lines.append(f"    title: {js_string(item['title'])},")
            lines.append(f"    summary: {js_string(item['summary'])},")
            lines.append(f"    body: {js_string(item['body'])},")
            lines.append(f"    source: {js_string(item['source'])},")
            lines.append(f"    url: {js_string(item['url'])},")
            lines.append(f"    time: {js_string(item['time'])},")
            lines.append(f"    pub_ts: {item['pub_ts']},")
            lines.append("    tags: [],")
            lines.append("  },")
            news_id += 1
    lines.append("];")    
    return "\n".join(lines) + "\n"

def update_index_html(ts):
    index_path = ROOT / "index.html"
    html = index_path.read_text(encoding="utf-8")
    html = re.sub(
        r'(<script src="news\.js)(?:\?t=\d+)?(">)',
        rf'\g<1>?t={ts}\2',
        html
    )
    index_path.write_text(html, encoding="utf-8")
    print(f"index.html aggiornato con ?t={ts}")

if __name__ == "__main__":
    print("=== fetch_news.py ===")
    ts = int(datetime.now(timezone.utc).timestamp())
    print(f"Avviato: {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')} (ts={ts})")
    buckets = fetch_all()
    total = sum(len(v) for v in buckets.values())
    print(f"Articoli raccolti: {total}")
    for cat, items in buckets.items():
        print(f"  {cat}: {len(items)}")
    js = generate_news_js(buckets, ts)
    out_path = ROOT / "news.js"
    out_path.write_text(js, encoding="utf-8")
    print(f"news.js aggiornato ({len(js)} byte)")
    update_index_html(ts)
