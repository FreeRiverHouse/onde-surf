const RELEASE_PATH =
  '/onde-delay-static/release-payloads/c8b0845dac9805fbe2758070d5650abc62b0f6e318530a6bbcf536dedeedb64d.dmg'
const encoder = new TextEncoder()

function decodeBase64Url(value) {
  const normalized = value.replaceAll('-', '+').replaceAll('_', '/')
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, '=')
  const binary = atob(padded)
  return Uint8Array.from(binary, (character) => character.charCodeAt(0))
}

function cookieValue(request) {
  for (const entry of (request.headers.get('Cookie') || '').split(';')) {
    const [key, ...value] = entry.trim().split('=')
    if (key === 'ondexj_release_access') return value.join('=')
  }
}

async function hasAccess(request, secret) {
  const token = cookieValue(request)
  if (!token) return false
  const [expiresRaw, signatureRaw] = token.split('.')
  const expires = Number(expiresRaw)
  if (
    !expiresRaw ||
    !signatureRaw ||
    !Number.isFinite(expires) ||
    expires < Math.floor(Date.now() / 1000)
  ) {
    return false
  }

  try {
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify'],
    )
    return crypto.subtle.verify(
      'HMAC',
      key,
      decodeBase64Url(signatureRaw),
      encoder.encode(`ondexj:${expiresRaw}`),
    )
  } catch {
    return false
  }
}

export async function onRequestGet({ request, env }) {
  if (
    !(await hasAccess(
      request,
      env.DOWNLOAD_SIGNING_SECRET || 'onde-private-preview-signing-key',
    ))
  ) {
    return new Response('Private beta code required.', {
      status: 403,
      headers: {
        'Cache-Control': 'no-store',
        'Content-Type': 'text/plain; charset=utf-8',
      },
    })
  }

  const release = await env.ASSETS.fetch(
    new Request(new URL(RELEASE_PATH, request.url)),
  )
  if (!release.ok || !release.body) {
    return new Response('Release payload unavailable.', { status: 503 })
  }

  const headers = new Headers()
  headers.set('Cache-Control', 'private, no-store')
  headers.set('Content-Type', 'application/x-apple-diskimage')
  headers.set(
    'Content-Disposition',
    'attachment; filename="OndeXJ-0.1.0-Apple-Silicon-Preview-15.dmg"',
  )
  headers.set('X-Content-Type-Options', 'nosniff')
  const contentLength = release.headers.get('Content-Length')
  if (contentLength) headers.set('Content-Length', contentLength)
  return new Response(release.body, { status: 200, headers })
}
