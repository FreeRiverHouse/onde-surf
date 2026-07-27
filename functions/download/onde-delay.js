const RELEASE_PATH =
  '/onde-delay-static/releases/bd65a30771a3a4ffd1a4d0129964208640b873e58fc868ea.dmg'

function hasAccess(request) {
  return (request.headers.get('Cookie') || '')
    .split(';')
    .some((entry) => entry.trim() === 'onde_delay_access=granted')
}

export async function onRequestGet({ request }) {
  if (!hasAccess(request)) {
    return new Response('Private release code required.', {
      status: 403,
      headers: {
        'Cache-Control': 'no-store',
        'Content-Type': 'text/plain; charset=utf-8',
      },
    })
  }

  const release = await fetch(new URL(RELEASE_PATH, request.url))

  if (!release.ok || !release.body) {
    return new Response('Release payload unavailable.', { status: 503 })
  }

  const headers = new Headers()
  headers.set('Cache-Control', 'private, no-store')
  headers.set('Content-Type', 'application/x-apple-diskimage')
  headers.set(
    'Content-Disposition',
    'attachment; filename="Onde-Delay-1.0.0-macOS.dmg"',
  )
  headers.set('X-Content-Type-Options', 'nosniff')

  const contentLength = release.headers.get('Content-Length')
  if (contentLength) headers.set('Content-Length', contentLength)

  return new Response(release.body, { status: 200, headers })
}
