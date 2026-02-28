import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-ocean-950">
      <Nav />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'linear-gradient(rgba(14,165,233,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Radial fade overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/0 via-ocean-950/20 to-ocean-950" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-24 pb-16">
          <div className="badge mb-8 mx-auto w-fit animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-wave-400 animate-pulse" />
            Now available for macOS
          </div>

          <h1
            className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-6"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="text-gradient-wave">Tools</span>
            <br />
            <span className="text-white">that flow.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto leading-relaxed mb-12">
            Handcrafted apps for creators who move at the speed of waves.
            <br />
            <span className="text-slate-500">Built by Free River House.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/apps/" className="btn-primary text-base px-8 py-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Browse Apps
            </Link>
            <Link href="/apps/onde-vibe/" className="btn-ghost text-base px-8 py-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              Download Onde Vibe
            </Link>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
              fill="rgba(14,165,233,0.06)"
            />
            <path
              d="M0,80 C360,40 720,100 1080,60 C1260,40 1380,80 1440,80 L1440,120 L0,120 Z"
              fill="rgba(14,165,233,0.03)"
            />
          </svg>
        </div>
      </section>

      {/* Featured App */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mb-4">Featured</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our latest release
            </h2>
          </div>

          <Link href="/apps/onde-vibe/" className="block group">
            <div className="glass glass-hover rounded-3xl p-8 md:p-12 glow-cyan">
              <div className="flex flex-col md:flex-row items-start gap-10">
                {/* App icon */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl flex items-center justify-center animate-float"
                    style={{
                      background: 'linear-gradient(135deg, #0f2d54 0%, #0a1f3d 100%)',
                      boxShadow: '0 0 40px rgba(14,165,233,0.2)',
                      border: '1px solid rgba(14,165,233,0.2)',
                    }}
                  >
                    <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 md:w-20 md:h-20">
                      <defs>
                        <linearGradient id="vibe-icon" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#38bdf8" />
                          <stop offset="0.5" stopColor="#0ea5e9" />
                          <stop offset="1" stopColor="#f97316" />
                        </linearGradient>
                      </defs>
                      {/* Waveform bars */}
                      <rect x="8" y="24" width="6" height="16" rx="3" fill="url(#vibe-icon)" opacity="0.6" />
                      <rect x="18" y="16" width="6" height="32" rx="3" fill="url(#vibe-icon)" opacity="0.8" />
                      <rect x="28" y="10" width="6" height="44" rx="3" fill="url(#vibe-icon)" />
                      <rect x="38" y="18" width="6" height="28" rx="3" fill="url(#vibe-icon)" opacity="0.8" />
                      <rect x="48" y="26" width="6" height="12" rx="3" fill="url(#vibe-icon)" opacity="0.6" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="badge">macOS</span>
                    <span className="badge" style={{ color: '#4ade80', borderColor: 'rgba(74,222,128,0.3)', background: 'rgba(74,222,128,0.08)' }}>Free</span>
                    <span className="badge" style={{ color: '#c084fc', borderColor: 'rgba(192,132,252,0.3)', background: 'rgba(192,132,252,0.08)' }}>Apple Silicon</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-gradient-wave transition-all">
                    Onde Vibe
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-6 max-w-xl">
                    Push-to-talk dictation for macOS, powered by Whisper AI.
                    Everything runs locally — your words never leave your machine.
                  </p>

                  <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(14,165,233,0.2)' }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-wave-400" />
                      </div>
                      100% local AI
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(14,165,233,0.2)' }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-wave-400" />
                      </div>
                      Whisper medium model
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(14,165,233,0.2)' }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-wave-400" />
                      </div>
                      macOS 15+ Notarized
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center self-center">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover:bg-wave-500/20 group-hover:border-wave-500/30 transition-all">
                    <svg className="w-5 h-5 text-slate-400 group-hover:text-wave-400 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Values / vibe */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: 'Privacy First',
                desc: 'No accounts, no telemetry, no cloud. Your data stays on your machine.'
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
                title: 'Performance',
                desc: 'Optimized for Apple Silicon. Native speed, minimal footprint.'
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                ),
                title: 'Craft',
                desc: 'Small team. Deep focus. Each app ships when it\'s genuinely ready.'
              }
            ].map((item, i) => (
              <div key={i} className="glass rounded-2xl p-7 group glass-hover">
                <div className="feature-icon-wrap w-12 h-12 rounded-xl mb-5 flex items-center justify-center"
                  style={{ background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.15)' }}>
                  <span className="text-wave-400">{item.icon}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="rounded-3xl p-12 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(2,132,199,0.12) 100%)',
              border: '1px solid rgba(14,165,233,0.15)',
            }}
          >
            <div className="orb-3 orb" style={{ position: 'absolute' }} />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to ride the wave?
              </h2>
              <p className="text-slate-400 mb-8 text-lg">
                Start with Onde Vibe — free, local, fast.
              </p>
              <Link href="/apps/onde-vibe/" className="btn-primary text-base px-10 py-4 inline-flex">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                Get Onde Vibe — Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
