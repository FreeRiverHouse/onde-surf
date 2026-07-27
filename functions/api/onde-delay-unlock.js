const ACCESS_CODE = '0nd3'

export async function onRequestPost({ request }) {
  let code = ''

  try {
    const body = await request.json()
    code = typeof body?.code === 'string' ? body.code : ''
  } catch {
    return Response.json({ ok: false }, { status: 400 })
  }

  if (code !== ACCESS_CODE) {
    return Response.json(
      { ok: false },
      {
        status: 401,
        headers: { 'Cache-Control': 'no-store' },
      },
    )
  }

  return Response.json(
    { ok: true },
    {
      headers: {
        'Cache-Control': 'no-store',
        'Set-Cookie':
          'onde_delay_access=granted; Max-Age=900; Path=/download/onde-delay; HttpOnly; Secure; SameSite=Strict',
      },
    },
  )
}
