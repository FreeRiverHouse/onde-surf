const RELEASE_PATH =
  '/onde-delay-static/release-payloads/d9b8c72f76df6c21538f472f954a64327fba0b5b9c81b136b9b3e5379a278e25.dmg'

function hasAccess(request) {
  return (request.headers.get('Cookie') || '')
    .split(';')
    .some((entry) => entry.trim() === 'onde_delay_access=granted')
}

export async function onRequestGet({ request, env }) {
  if (!hasAccess(request)) {
    return new Response('Private release code required.', {
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
    'attachment; filename="Onde-Delay-2.0.0-macOS.dmg"',
  )
  headers.set('X-Content-Type-Options', 'nosniff')

  const contentLength = release.headers.get('Content-Length')
  if (contentLength) headers.set('Content-Length', contentLength)

  return new Response(release.body, { status: 200, headers })
}
