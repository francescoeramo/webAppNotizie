/* Server-side Vercel function: the Groq key never reaches the browser. */
const MAX_INPUT_LENGTH = 12000;
const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';

function send(res, status, payload) {
  res.status(status).setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(payload));
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return send(res, 405, { error: 'Metodo non consentito' });
  if (!process.env.GROQ_API_KEY) return send(res, 503, { error: 'Il servizio AI non è configurato.' });

  const { title, text, source, language } = req.body || {};
  if (![title, text, source].every(value => typeof value === 'string')) {
    return send(res, 400, { error: 'Dati della notizia non validi.' });
  }
  const safeTitle = title.trim().slice(0, 500);
  const safeText = text.trim().slice(0, MAX_INPUT_LENGTH);
  const safeSource = source.trim().slice(0, 100);
  if (!safeTitle || !safeText || !safeSource) return send(res, 400, { error: 'Dati della notizia incompleti.' });

  const prompt = `Sei il redattore di LaGraffa. Basandoti ESCLUSIVAMENTE sul testo fornito, restituisci JSON valido senza markdown nel formato {"title":"...","summary":"..."}. Traduci il titolo in italiano se necessario. Scrivi un riassunto italiano neutrale, accurato e leggibile di 180-260 parole, in 2-3 brevi paragrafi. Non inventare dettagli, non presentare ipotesi come fatti e segnala con formule come “secondo ${safeSource}” le attribuzioni o i dati non confermati. Non aggiungere commenti o fonti non presenti nel testo. Lingua originale dichiarata: ${String(language || 'sconosciuta').slice(0, 10)}.\n\nTitolo: ${safeTitle}\nFonte: ${safeSource}\nTesto: ${safeText}`;

  try {
    const response = await fetch(GROQ_URL, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${process.env.GROQ_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        temperature: 0.2,
        max_tokens: 650,
        response_format: { type: 'json_object' },
        messages: [{ role: 'user', content: prompt }]
      })
    });
    if (!response.ok) return send(res, 502, { error: 'Il provider AI non è temporaneamente disponibile.' });
    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content || '';
    const result = JSON.parse(content);
    if (typeof result.title !== 'string' || typeof result.summary !== 'string') throw new Error('Invalid model output');
    return send(res, 200, { title: result.title.trim().slice(0, 600), summary: result.summary.trim().slice(0, 3000) });
  } catch (error) {
    return send(res, 502, { error: 'Non è stato possibile generare la sintesi.' });
  }
};
