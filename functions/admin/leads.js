// Admin endpoint to view collected leads
// Access: /admin/leads?secret=VIBINGFr33!admin
const ADMIN_SECRET = 'VIBINGFr33!admin'

export async function onRequest(context) {
  const { request, env } = context
  const url = new URL(request.url)
  const secret = url.searchParams.get('secret') ?? ''

  if (secret !== ADMIN_SECRET) {
    return new Response('Unauthorized', { status: 401 })
  }

  if (!env.LEADS) {
    return new Response('KV not bound', { status: 500 })
  }

  // List all leads sorted by timestamp
  const list = await env.LEADS.list({ prefix: 'ts:' })
  const rows = []

  for (const key of list.keys) {
    const email = await env.LEADS.get(key.name)
    const detail = await env.LEADS.get(`lead:${email}`)
    if (detail) {
      try { rows.push(JSON.parse(detail)) } catch {}
    }
  }

  // Sort newest first
  rows.sort((a, b) => b.ts.localeCompare(a.ts))

  const csvHeader = 'email,country,ip,app,version,ts'
  const csvRows = rows.map(r =>
    `${r.email},${r.country ?? ''},${r.ip ?? ''},${r.app ?? ''},${r.version ?? ''},${r.ts}`
  )
  const csv = [csvHeader, ...csvRows].join('\n')

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Leads — onde.surf</title>
  <style>
    body { font-family: monospace; background: #020817; color: #e2e8f0; padding: 32px; }
    h1 { color: #0ea5e9; margin-bottom: 16px; font-size: 18px; }
    table { border-collapse: collapse; width: 100%; font-size: 13px; }
    th, td { padding: 8px 12px; border-bottom: 1px solid rgba(255,255,255,0.08); text-align: left; }
    th { color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
    tr:hover td { background: rgba(255,255,255,0.03); }
    .count { color: #64748b; margin-bottom: 16px; font-size: 13px; }
    .csv { margin-top: 32px; }
    pre { background: rgba(255,255,255,0.04); padding: 16px; border-radius: 8px; font-size: 12px; overflow-x: auto; color: #94a3b8; }
  </style>
</head>
<body>
  <h1>onde.surf — Download Leads</h1>
  <p class="count">${rows.length} lead${rows.length !== 1 ? 's' : ''} raccolti</p>
  <table>
    <thead><tr><th>Email</th><th>Country</th><th>App</th><th>Version</th><th>Date</th></tr></thead>
    <tbody>
      ${rows.map(r => `<tr>
        <td>${r.email}</td>
        <td>${r.country ?? '-'}</td>
        <td>${r.app ?? '-'}</td>
        <td>${r.version ?? '-'}</td>
        <td>${r.ts?.replace('T', ' ').slice(0, 16)}</td>
      </tr>`).join('')}
    </tbody>
  </table>
  <div class="csv">
    <p style="color:#64748b;font-size:12px;margin-bottom:8px;">CSV Export:</p>
    <pre>${csv}</pre>
  </div>
</body>
</html>`

  return new Response(html, {
    headers: { 'Content-Type': 'text/html;charset=UTF-8' }
  })
}
