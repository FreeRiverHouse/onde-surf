import Link from 'next/link'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Apps — onde.surf',
  description: 'All apps and tools by Free River House.',
}

const apps = [
  {
    slug: 'onde-vibe',
    name: 'Onde Vibe',
    tagline: 'Push-to-talk dictation for macOS',
    description: 'Whisper-powered voice dictation that runs 100% locally. Press a key, speak, release — text appears wherever your cursor is.',
    tags: ['macOS', 'Free', 'Apple Silicon'],
    tagColors: [
      { color: '#38bdf8', border: 'rgba(56,189,248,0.3)', bg: 'rgba(56,189,248,0.08)' },
      { color: '#4ade80', border: 'rgba(74,222,128,0.3)', bg: 'rgba(74,222,128,0.08)' },
      { color: '#c084fc', border: 'rgba(192,132,252,0.3)', bg: 'rgba(192,132,252,0.08)' },
    ],
    status: 'Available',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
        <defs>
          <linearGradient id="vibe-icon-apps" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="0.5" stopColor="#0ea5e9" />
            <stop offset="1" stopColor="#f97316" />
          </linearGradient>
        </defs>
        <rect x="8" y="24" width="6" height="16" rx="3" fill="url(#vibe-icon-apps)" opacity="0.6" />
        <rect x="18" y="16" width="6" height="32" rx="3" fill="url(#vibe-icon-apps)" opacity="0.8" />
        <rect x="28" y="10" width="6" height="44" rx="3" fill="url(#vibe-icon-apps)" />
        <rect x="38" y="18" width="6" height="28" rx="3" fill="url(#vibe-icon-apps)" opacity="0.8" />
        <rect x="48" y="26" width="6" height="12" rx="3" fill="url(#vibe-icon-apps)" opacity="0.6" />
      </svg>
    ),
  },
]

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-ocean-950">
      <Nav />

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="section-label mb-4">Apps & Tools</div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              Built to last.
            </h1>
            <p className="text-xl text-slate-400 max-w-xl">
              Small, focused, native apps for macOS. No subscriptions, no bullshit.
            </p>
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {apps.map((app) => (
              <Link key={app.slug} href={`/apps/${app.slug}/`} className="block group">
                <div className="glass glass-hover rounded-3xl p-8 h-full">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div
                      className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #0f2d54 0%, #0a1f3d 100%)',
                        border: '1px solid rgba(14,165,233,0.2)',
                        boxShadow: '0 0 30px rgba(14,165,233,0.1)',
                      }}
                    >
                      {app.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {app.tags.map((tag, i) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                            style={{
                              color: app.tagColors[i]?.color,
                              borderColor: app.tagColors[i]?.border,
                              background: app.tagColors[i]?.bg,
                              border: `1px solid ${app.tagColors[i]?.border}`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-wave-400 transition-colors">
                        {app.name}
                      </h2>
                      <p className="text-wave-500/70 text-sm font-medium mb-3">{app.tagline}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{app.description}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-green-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      {app.status}
                    </div>
                    <span className="text-sm text-slate-500 group-hover:text-wave-400 transition-colors flex items-center gap-1">
                      View app
                      <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {/* Coming soon card */}
            <div className="glass rounded-3xl p-8 opacity-50 border-dashed" style={{ borderStyle: 'dashed' }}>
              <div className="flex items-center justify-center h-full min-h-48">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>
                  <p className="text-slate-500 font-medium">More coming</p>
                  <p className="text-slate-600 text-sm mt-1">Stay tuned.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
