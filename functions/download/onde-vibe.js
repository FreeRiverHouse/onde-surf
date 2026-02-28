export async function onRequest(context) {
  const upstream = 'https://github.com/FreeRiverHouse/onde-vibe-releases/releases/latest/download/onde-vibe-1.0.0-arm64.dmg'
  
  // Fetch server-side (no browser session = no 2FA redirect)
  // Follow redirects to get the final signed CDN URL
  const resp = await fetch(upstream, {
    redirect: 'follow',
    headers: { 'User-Agent': 'onde.surf/1.0' }
  })
  
  // Redirect client to the final CDN URL (release-assets.githubusercontent.com)
  return Response.redirect(resp.url, 302)
}
