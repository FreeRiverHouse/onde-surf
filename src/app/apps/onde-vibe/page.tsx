import Link from 'next/link'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Onde Vibe — onde.surf',
  description: 'Push-to-talk dictation for macOS. Whisper-powered, 100% local, Apple Silicon native.',
}

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    title: 'Push-to-Talk',
    desc: 'Hold a global hotkey, speak, release. Instant transcription wherever your cursor is — any app, any field.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: '100% Local',
    desc: 'Whisper runs on your machine. Your voice never leaves. No internet required. No account. No subscription.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Apple Silicon Native',
    desc: 'Optimized for M-series chips. Whisper inference runs fast with minimal CPU/GPU overhead.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: 'Whisper Medium',
    desc: 'Ships with the Whisper medium model — state-of-the-art accuracy across 99 languages.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Menubar App',
    desc: 'Lives quietly in your menubar. Configure hotkey, model, and behavior from a clean settings panel.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Signed & Notarized',
    desc: 'Fully signed and notarized by Apple. Opens without Gatekeeper warnings.',
  },
]

const requirements = [
  { label: 'OS', value: 'macOS 15 Sequoia or later' },
  { label: 'Architecture', value: 'Apple Silicon (arm64)' },
  { label: 'Storage', value: '~1.6 GB (includes Whisper medium model)' },
  { label: 'RAM', value: '8 GB minimum, 16 GB recommended' },
  { label: 'Permission', value: 'Microphone & Accessibility access' },
]

export default function OndeVibePage() {
  return (
    <div className="min-h-screen bg-ocean-950">
      <Nav />

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="orb orb-1" style={{ opacity: 0.6 }} />
        <div className="orb orb-2" style={{ opacity: 0.4 }} />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-10">
            <Link href="/" className="hover:text-slate-300 transition-colors">onde.surf</Link>
            <span>/</span>
            <Link href="/apps/" className="hover:text-slate-300 transition-colors">apps</Link>
            <span>/</span>
            <span className="text-slate-300">onde-vibe</span>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div
                className="w-28 h-28 md:w-36 md:h-36 rounded-3xl flex items-center justify-center animate-float"
                style={{
                  background: 'linear-gradient(135deg, #0f2d54 0%, #0a1f3d 100%)',
                  border: '1px solid rgba(14,165,233,0.25)',
                  boxShadow: '0 0 60px rgba(14,165,233,0.2), 0 0 120px rgba(14,165,233,0.08)',
                }}
              >
                <svg viewBox="0 0 64 64" fill="none" className="w-20 h-20 md:w-24 md:h-24">
                  <defs>
                    <linearGradient id="vibe-hero" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#38bdf8" />
                      <stop offset="0.5" stopColor="#0ea5e9" />
                      <stop offset="1" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                  <rect x="8" y="24" width="6" height="16" rx="3" fill="url(#vibe-hero)" opacity="0.5" />
                  <rect x="18" y="16" width="6" height="32" rx="3" fill="url(#vibe-hero)" opacity="0.7" />
                  <rect x="28" y="8" width="6" height="48" rx="3" fill="url(#vibe-hero)" />
                  <rect x="38" y="16" width="6" height="32" rx="3" fill="url(#vibe-hero)" opacity="0.7" />
                  <rect x="48" y="24" width="6" height="16" rx="3" fill="url(#vibe-hero)" opacity="0.5" />
                </svg>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="badge">macOS</span>
                <span className="badge" style={{ color: '#4ade80', borderColor: 'rgba(74,222,128,0.3)', background: 'rgba(74,222,128,0.08)' }}>Free</span>
                <span className="badge" style={{ color: '#c084fc', borderColor: 'rgba(192,132,252,0.3)', background: 'rgba(192,132,252,0.08)' }}>Apple Silicon</span>
                <span className="badge" style={{ color: '#fb923c', borderColor: 'rgba(251,146,60,0.3)', background: 'rgba(251,146,60,0.08)' }}>Notarized</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-black text-white mb-3 leading-tight">
                Onde Vibe
              </h1>
              <p className="text-xl text-wave-400/80 font-medium mb-4">
                Push-to-talk dictation for macOS
              </p>
              <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-8">
                Hold a key, speak, release. Your words appear instantly — anywhere, in any app.
                Powered by Whisper AI, running entirely on your device.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/FreeRiverHouse/onde-vibe-releases/releases/latest/download/onde-vibe-1.0.0-arm64.dmg"
                  className="btn-primary text-base px-8 py-4"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  Download — Free
                </a>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  Signed &amp; Notarized by Apple
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-label mb-4">Features</div>
          <h2 className="text-4xl font-bold text-white mb-12">Everything you need, nothing you don&apos;t.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={i} className="glass glass-hover rounded-2xl p-6 group">
                <div
                  className="feature-icon-wrap w-11 h-11 rounded-xl mb-4 flex items-center justify-center"
                  style={{ background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.15)' }}
                >
                  <span className="text-wave-400">{f.icon}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12"
            style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.05) 0%, rgba(2,8,23,0.8) 100%)' }}>
            <div className="section-label mb-4">How it works</div>
            <h2 className="text-4xl font-bold text-white mb-10">Three steps.</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { n: '01', title: 'Hold', desc: 'Press and hold your configured hotkey (default: Option). The app enters recording mode.' },
                { n: '02', title: 'Speak', desc: 'Say anything. Onde Vibe records your voice locally with no cloud involved.' },
                { n: '03', title: 'Release', desc: 'Release the key. Whisper transcribes instantly and types the text into your active app.' },
              ].map((step) => (
                <div key={step.n} className="relative">
                  <div className="text-6xl font-black text-wave-500/10 mb-3 leading-none">{step.n}</div>
                  <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-label mb-4">Requirements</div>
          <h2 className="text-3xl font-bold text-white mb-8">System requirements</h2>

          <div className="glass rounded-2xl overflow-hidden">
            {requirements.map((req, i) => (
              <div
                key={req.label}
                className={`flex items-center justify-between px-6 py-4 ${i < requirements.length - 1 ? 'border-b border-white/5' : ''}`}
              >
                <span className="text-slate-400 text-sm font-medium">{req.label}</span>
                <span className="text-slate-200 text-sm">{req.value}</span>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-slate-600">
            v1.0.0 · arm64 · Requires macOS Accessibility permission for text injection
          </p>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="rounded-3xl p-12 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(2,132,199,0.12) 100%)',
              border: '1px solid rgba(14,165,233,0.15)',
            }}
          >
            {/* Waveform decoration */}
            <div className="flex items-end justify-center gap-1 mb-8 opacity-30">
              {[3, 8, 14, 20, 28, 20, 14, 8, 3].map((h, i) => (
                <div
                  key={i}
                  className="w-2 rounded-full"
                  style={{
                    height: `${h * 2}px`,
                    background: 'linear-gradient(to top, #0ea5e9, #38bdf8)',
                  }}
                />
              ))}
            </div>

            <h2 className="text-4xl font-bold text-white mb-3">
              Start dictating today.
            </h2>
            <p className="text-slate-400 mb-2 text-lg">Free. Local. Fast.</p>
            <p className="text-slate-600 text-sm mb-8">~1.6 GB download · arm64 DMG</p>

            <a
              href="https://github.com/FreeRiverHouse/onde-vibe-releases/releases/latest/download/onde-vibe-1.0.0-arm64.dmg"
              className="btn-primary text-base px-10 py-4 inline-flex"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              Download Onde Vibe — Free
            </a>

            <p className="mt-6 text-xs text-slate-600">
              macOS 15+ · Apple Silicon · Signed &amp; Notarized by Apple ·{' '}
              <a href="https://github.com/FreeRiverHouse/ONDE-VIBE" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">
                Open source ↗
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
