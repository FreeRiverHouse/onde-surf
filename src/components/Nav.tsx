'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const path = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="glass border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8">
              <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
                <defs>
                  <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#38bdf8" />
                    <stop offset="1" stopColor="#0284c7" />
                  </linearGradient>
                </defs>
                <path d="M4 20 Q10 10 16 16 Q22 22 28 12" stroke="url(#logo-grad)" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M4 24 Q10 14 16 20 Q22 26 28 16" stroke="url(#logo-grad)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
              </svg>
            </div>
            <span className="font-bold text-base tracking-tight text-white group-hover:text-wave-400 transition-colors">
              onde<span className="text-wave-500">.surf</span>
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-1">
            <NavLink href="/" active={path === '/'}>Home</NavLink>
            <NavLink href="/apps/" active={path.startsWith('/apps')}>Apps</NavLink>
            <a
              href="https://onde.la"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
            >
              onde.la ↗
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
        active
          ? 'text-wave-400 bg-wave-500/10'
          : 'text-slate-400 hover:text-white hover:bg-white/5'
      }`}
    >
      {children}
    </Link>
  )
}
