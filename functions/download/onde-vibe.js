const DMG_URL = 'https://github.com/FreeRiverHouse/onde-vibe-releases/releases/latest/download/onde-vibe-1.0.0-arm64.dmg'
const PASSWORD = 'VIBINGFr33!'

const PAGE = (error = '') => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Download ONDE VIBE — onde.surf</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #020817;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      color: #e2e8f0;
    }
    .card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px;
      padding: 48px 40px;
      width: 100%;
      max-width: 420px;
      backdrop-filter: blur(20px);
      text-align: center;
    }
    .logo {
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #0ea5e9;
      margin-bottom: 32px;
    }
    h1 { font-size: 22px; font-weight: 700; margin-bottom: 8px; color: #f1f5f9; }
    p { font-size: 14px; color: #64748b; margin-bottom: 28px; line-height: 1.5; }
    .field { margin-bottom: 10px; text-align: left; }
    label { display: block; font-size: 12px; color: #475569; margin-bottom: 5px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; }
    input {
      width: 100%;
      padding: 13px 16px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 10px;
      color: #f1f5f9;
      font-size: 15px;
      outline: none;
      transition: border-color 0.2s;
    }
    input:focus { border-color: #0ea5e9; }
    input::placeholder { color: #475569; }
    button {
      width: 100%;
      margin-top: 16px;
      padding: 14px;
      background: #0ea5e9;
      color: #fff;
      font-size: 15px;
      font-weight: 600;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: background 0.2s, transform 0.1s;
    }
    button:hover { background: #0284c7; }
    button:active { transform: scale(0.98); }
    .error { margin-top: 14px; font-size: 13px; color: #f97316; text-align: center; }
    .back { display: block; margin-top: 24px; font-size: 13px; color: #475569; text-decoration: none; text-align: center; }
    .back:hover { color: #94a3b8; }
    .divider { margin: 20px 0; border: none; border-top: 1px solid rgba(255,255,255,0.06); }
    .hint { font-size: 12px; color: #334155; margin-top: 16px; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">onde.surf</div>
    <h1>ONDE VIBE</h1>
    <p>Enter your email and access code<br>to download the macOS app.</p>
    <form method="POST" action="/download/onde-vibe">
      <div class="field">
        <label>Email</label>
        <input type="email" name="email" placeholder="you@example.com" required autocomplete="email">
      </div>
      <div class="field">
        <label>Access code</label>
        <input type="password" name="key" placeholder="••••••••••" required autocomplete="off">
      </div>
      <button type="submit">Download for macOS →</button>
      ${error ? `<div class="error">${error}</div>` : ''}
    </form>
    <p class="hint">macOS arm64 · v1.0.0 · ~1.5 GB</p>
    <a class="back" href="/apps/onde-vibe">← Back to Onde Vibe</a>
  </div>
</body>
</html>`

export async function onRequest(context) {
  const { request, env } = context

  if (request.method === 'POST') {
    const body = await request.formData().catch(() => null)
    const email = (body?.get('email') ?? '').trim().toLowerCase()
    const key = body?.get('key') ?? ''

    if (key !== PASSWORD) {
      return new Response(PAGE('Wrong access code. Try again.'), {
        status: 403,
        headers: { 'Content-Type': 'text/html;charset=UTF-8' }
      })
    }

    // Save lead to KV: key = email, value = JSON with timestamp + ip
    if (env.LEADS && email) {
      const ip = request.headers.get('CF-Connecting-IP') ?? ''
      const country = request.headers.get('CF-IPCountry') ?? ''
      const lead = JSON.stringify({
        email,
        ip,
        country,
        app: 'onde-vibe',
        version: '1.0.0',
        ts: new Date().toISOString()
      })
      // store forever (no expiration)
      await env.LEADS.put(`lead:${email}`, lead).catch(() => null)
      // also keep a sorted list by timestamp
      await env.LEADS.put(`ts:${Date.now()}:${email}`, email).catch(() => null)
    }

    // Password correct — follow GitHub redirect server-side, send client to CDN URL
    const resp = await fetch(DMG_URL, {
      redirect: 'follow',
      headers: { 'User-Agent': 'onde.surf/1.0' }
    })
    return Response.redirect(resp.url, 302)
  }

  // GET — show password gate
  return new Response(PAGE(), {
    headers: { 'Content-Type': 'text/html;charset=UTF-8' }
  })
}
