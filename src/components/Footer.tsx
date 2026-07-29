import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="suite-footer">
      <div className="suite-wrap">
        <div className="suite-footer-top">
          <div>
            <Link href="/" className="suite-logo" aria-label="onde.surf home">
              <span className="suite-logo-mark" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span>
                onde<em>.surf</em>
              </span>
            </Link>
            <p>Playable audio instruments for sound in motion.</p>
          </div>

          <div className="suite-footer-links">
            <div>
              <span>Effects</span>
              <Link href="/apps/">Full collection</Link>
              <Link href="/apps/onde-delay/">Onde Delay</Link>
            </div>
            <div>
              <span>Studio</span>
              <Link href="/blog/">Journal</Link>
              <a href="https://onde.la" target="_blank" rel="noopener noreferrer">
                onde.la ↗
              </a>
            </div>
            <div>
              <span>Contact</span>
              <a href="mailto:hello@onde.surf">hello@onde.surf</a>
            </div>
          </div>
        </div>

        <div className="suite-footer-bottom">
          <span>© {new Date().getFullYear()} Free River House</span>
          <span>Designed in Italy · Built for Apple Silicon</span>
        </div>
      </div>
    </footer>
  )
}
