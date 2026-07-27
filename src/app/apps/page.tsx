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
    slug: 'onde-delay',
    name: 'Onde Delay',
    tagline: 'Two delays. One current.',
    description: 'A complete analog delay and a precise digital delay in series, with reverse, freeze, host sync and performance-first control.',
    tags: ['AU + VST3', 'Private Release', 'Apple Silicon'],
    tagColors: [
      { color: '#f5a524', border: 'rgba(245,165,36,0.3)', bg: 'rgba(245,165,36,0.08)' },
      { color: '#4ade80', border: 'rgba(74,222,128,0.3)', bg: 'rgba(74,222,128,0.08)' },
      { color: '#40d9ff', border: 'rgba(64,217,255,0.3)', bg: 'rgba(64,217,255,0.08)' },
    ],
    status: 'Available',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
        <circle cx="20" cy="32" r="11" stroke="#f5a524" strokeWidth="3" />
        <circle cx="44" cy="32" r="11" stroke="#40d9ff" strokeWidth="3" />
        <path d="M31 32h2" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
        <path d="M20 21v6M44 21v6" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
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

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
