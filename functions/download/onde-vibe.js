const DMG_URL = 'https://github.com/FreeRiverHouse/onde-vibe-releases/releases/latest/download/onde-vibe-1.0.3-arm64.dmg'
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
    <div id="error-msg" style="display:none;margin-top:14px;font-size:13px;color:#f97316;text-align:center"></div>
    <div class="field">
      <label>Email</label>
      <input type="email" id="email" placeholder="you@example.com" required autocomplete="email">
    </div>
    <div class="field">
      <label>Access code</label>
      <input type="password" id="key" placeholder="••••••••••" required autocomplete="off">
    </div>
    <button id="btn" onclick="doDownload()">Download for macOS →</button>
    <script>
    async function doDownload() {
      const email = document.getElementById('email').value.trim()
      const key = document.getElementById('key').value
      const btn = document.getElementById('btn')
      const err = document.getElementById('error-msg')
      if (!email || !key) return
      btn.disabled = true
      btn.textContent = 'Checking...'
      err.style.display = 'none'
      try {
        const resp = await fetch('/download/onde-vibe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, key }),
          redirect: 'manual'
        })
        if (resp.type === 'opaqueredirect' || resp.status === 302 || resp.ok) {
          btn.textContent = 'Starting download...'
          // Follow the redirect by navigating
          const data = await resp.json().catch(() => null)
          if (data && data.url) {
            window.location.href = data.url
          } else {
            btn.textContent = 'Download started!'
          }
        } else {
          const data = await resp.json().catch(() => ({}))
          err.textContent = data.error || 'Wrong access code. Try again.'
          err.style.display = 'block'
          btn.disabled = false
          btn.textContent = 'Download for macOS →'
        }
      } catch(e) {
        err.textContent = 'Network error. Try again.'
        err.style.display = 'block'
        btn.disabled = false
        btn.textContent = 'Download for macOS →'
      }
    }
    document.addEventListener('keydown', e => { if(e.key==='Enter') doDownload() })
    </script>
    <p class="hint">macOS arm64 · v1.0.1 · ~1.5 GB</p>
    <a class="back" href="/apps/onde-vibe">← Back to Onde Vibe</a>
  </div>
</body>
</html>`

export async function onRequest(context) {
  const { request, env } = context

  if (request.method === 'POST') {
    // Accept JSON (from fetch) — avoids all special-char encoding issues
    const ct = request.headers.get('content-type') ?? ''
    let email = '', key = ''
    if (ct.includes('application/json')) {
      const json = await request.json().catch(() => ({}))
      email = (json.email ?? '').trim().toLowerCase()
      key = json.key ?? ''
    } else {
      const body = await request.formData().catch(() => null)
      email = (body?.get('email') ?? '').trim().toLowerCase()
      key = body?.get('key') ?? ''
    }

    if (key !== PASSWORD) {
      return new Response(JSON.stringify({ error: 'Wrong access code. Try again.' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Save lead to KV
    if (env.LEADS && email) {
      const ip = request.headers.get('CF-Connecting-IP') ?? ''
      const country = request.headers.get('CF-IPCountry') ?? ''
      const lead = JSON.stringify({ email, ip, country, app: 'onde-vibe', version: '1.0.1', ts: new Date().toISOString() })
      await env.LEADS.put(`lead:${email}`, lead).catch(() => null)
      await env.LEADS.put(`ts:${Date.now()}:${email}`, email).catch(() => null)
    }

    // Follow GitHub redirect server-side, return CDN URL to client
    const resp = await fetch(DMG_URL, {
      redirect: 'follow',
      headers: { 'User-Agent': 'onde.surf/1.0' }
    })
    return new Response(JSON.stringify({ url: resp.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  // GET — show password gate (no-cache so browsers always get fresh JS)
  return new Response(PAGE(), {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate'
    }
  })
}
