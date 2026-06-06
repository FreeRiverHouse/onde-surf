import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-32">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
                <defs>
                  <linearGradient id="foot-logo" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#38bdf8" />
                    <stop offset="1" stopColor="#0284c7" />
                  </linearGradient>
                </defs>
                <path d="M4 20 Q10 10 16 16 Q22 22 28 12" stroke="url(#foot-logo)" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M4 24 Q10 14 16 20 Q22 26 28 16" stroke="url(#foot-logo)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
              </svg>
              <span className="font-bold text-white">onde<span className="text-wave-500">.surf</span></span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Handcrafted tools for creators who move at the speed of waves.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm">
            <div className="col-span-2 text-xs font-semibold tracking-widest uppercase text-slate-600 mb-1">Products</div>
            <Link href="/apps/" className="text-slate-400 hover:text-wave-400 transition-colors">Apps</Link>
            <Link href="/apps/onde-vibe/" className="text-slate-400 hover:text-wave-400 transition-colors">Onde Vibe</Link>
            <div className="col-span-2 text-xs font-semibold tracking-widest uppercase text-slate-600 mb-1 mt-4">Company</div>
            <a href="https://onde.la" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-wave-400 transition-colors">onde.la</a>
            <a href="mailto:hello@onde.surf" className="text-slate-400 hover:text-wave-400 transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Free River House. All rights reserved.
          </p>
          <p className="text-xs text-slate-700">
            Built with ☀️ in Italy
          </p>
        </div>
      </div>
    </footer>
  )
}
