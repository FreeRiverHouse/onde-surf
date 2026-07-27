const RELEASE_ORIGIN =
  'https://onde-delay-blacksite.sharp-alder-0264.chatgpt.site'
const ACCESS_CODE = '0nd3'

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

  const unlock = await fetch(`${RELEASE_ORIGIN}/api/unlock`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code: ACCESS_CODE }),
  })

  const releaseCookie = unlock.headers.get('Set-Cookie')?.split(';')[0]
  if (!unlock.ok || !releaseCookie) {
    return new Response('Release service unavailable.', { status: 503 })
  }

  const release = await fetch(`${RELEASE_ORIGIN}/download`, {
    headers: { Cookie: releaseCookie },
  })

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
