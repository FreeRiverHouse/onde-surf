const ACCESS_CODE = '0nd3'
const ACCESS_WINDOW_SECONDS = 15 * 60
const encoder = new TextEncoder()

function base64Url(bytes) {
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  return btoa(binary)
    .replaceAll('+', '-')
    .replaceAll('/', '_')
    .replaceAll('=', '')
}

async function createToken(secret) {
  const expires = Math.floor(Date.now() / 1000) + ACCESS_WINDOW_SECONDS
  const payload = `ondexj:${expires}`
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const signature = await crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode(payload),
  )
  return `${expires}.${base64Url(new Uint8Array(signature))}`
}

export async function onRequestPost({ request, env }) {
  let code = ''
  try {
    const body = await request.json()
    code = typeof body?.code === 'string' ? body.code : ''
  } catch {
    return Response.json({ ok: false }, { status: 400 })
  }

  if (code !== (env.DOWNLOAD_CODE || ACCESS_CODE)) {
    return Response.json(
      { ok: false },
      { status: 401, headers: { 'Cache-Control': 'no-store' } },
    )
  }

  const token = await createToken(
    env.DOWNLOAD_SIGNING_SECRET || 'onde-private-preview-signing-key',
  )
  return Response.json(
    { ok: true },
    {
      headers: {
        'Cache-Control': 'no-store',
        'Set-Cookie':
          `ondexj_release_access=${token}; Max-Age=${ACCESS_WINDOW_SECONDS}; ` +
          'Path=/download/ondexj; HttpOnly; Secure; SameSite=Strict',
      },
    },
  )
}
