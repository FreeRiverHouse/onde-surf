'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const path = usePathname()

  return (
    <nav className="suite-nav">
      <div className="suite-nav-inner">
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

        <div className="suite-nav-links">
          <NavLink href="/" active={path === '/'}>Home</NavLink>
          <NavLink href="/apps/" active={path.startsWith('/apps')}>Effects</NavLink>
          <NavLink href="/blog/" active={path.startsWith('/blog')}>Journal</NavLink>
          <a
            href="https://onde.la"
            target="_blank"
            rel="noopener noreferrer"
            className="suite-nav-external"
          >
            onde.la ↗
          </a>
        </div>

        <Link href="/apps/onde-delay/" className="suite-nav-cta">
          Get Delay
          <span aria-hidden="true">↘</span>
        </Link>
      </div>
    </nav>
  )
}

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link href={href} className={active ? 'active' : ''}>
      <span>{children}</span>
    </Link>
  )
}
