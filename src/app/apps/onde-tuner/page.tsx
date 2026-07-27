import type { Metadata } from 'next'
import './tuner-theme.css'

export const metadata: Metadata = {
  title: 'Onde Tuner — Every cent visible.',
  description:
    'Onde Tuner is a chromatic tuner for guitar, bass and voice on iPhone, iPad and Apple Watch: sub-millisecond pitch detection, five gauge skins, calibration down to the cent.',
  keywords: ['tuner app', 'chromatic tuner', 'guitar tuner', 'bass tuner', 'iOS', 'Apple Watch', 'Onde Tuner'],
  openGraph: {
    title: 'Onde Tuner — Every cent visible.',
    description: 'Sub-millisecond pitch detection, five gauge skins, calibration down to the cent.',
    url: 'https://onde.surf/apps/onde-tuner/',
    siteName: 'Onde Audio',
    type: 'website',
    images: [
      {
        url: 'https://onde.surf/onde-tuner-static/assets/onde-tuner-hero.webp',
        width: 1240,
        height: 1240,
        alt: 'Onde Tuner porthole gauge — chrome bezel, anodized dial, live needle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onde Tuner — Every cent visible.',
    description: 'Sub-millisecond pitch detection, five gauge skins, calibration down to the cent.',
  },
}

const GAUGES = [
  { key: 'porthole', name: 'PORTHOLE', img: '/onde-tuner-static/assets/porthole_bezel.webp', desc: 'Chrome bezel, anodized dial, live needle — rendered in Blender.' },
  { key: 'needle', name: 'NEEDLE', img: null, desc: 'Classic analog sweep, warm and immediate.' },
  { key: 'ring', name: 'RING', img: null, desc: 'A luminous ring that closes as you land the note.' },
  { key: 'ledStrip', name: 'LED STRIP', img: null, desc: 'Stage-ready horizontal LED ladder, readable from a distance.' },
  { key: 'minimal', name: 'MINIMAL', img: null, desc: 'Just the note and the color. Nothing else.' },
]

const SPECS: [string, string][] = [
  ['PLATFORMS', 'iPhone · iPad · Apple Watch'],
  ['REQUIRES', 'iOS 17+ · watchOS 10+'],
  ['LATENCY', 'Sub-millisecond detection'],
  ['CALIBRATION', '±50 cents, adjustable A4 reference'],
  ['SKINS', '5 free gauge styles, more premium'],
  ['INSTRUMENTS', 'Guitar · Bass · Voice · Chromatic'],
]

export default function OndeTunerPage() {
  return (
    <div className="tuner-page">
      <link rel="stylesheet" href="/onde-tuner-static/assets/blacksite.css" />
      <main>
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="wordmark" href="#top" aria-label="Onde Tuner home">
            <span className="wordmark-name">ONDE</span>
            <span className="wordmark-product">TUNER / 01</span>
          </a>
          <div className="nav-links">
            <a href="#engines">Engines</a>
            <a href="#sound">Sound</a>
            <a href="#specs">Specs</a>
          </div>
          <a className="nav-download" href="#download">
            Private download<span aria-hidden="true">↘</span>
          </a>
        </nav>

        <section className="hero" id="top">
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Version 1.0.0 · iOS · iPadOS · watchOS
            </div>
            <h1>
              EVERY CENT
              <span>VISIBLE.</span>
            </h1>
            <p className="hero-lede">
              A chromatic tuner built on the same signal-path obsession as our audio plugins.
              Sub-millisecond pitch detection, a calibrated cent scale you can actually read,
              and a needle that never lies.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#download">
                Download for iOS<span aria-hidden="true">↓</span>
              </a>
              <a className="button button-ghost" href="#sound">
                Hear the reference tones<span aria-hidden="true">→</span>
              </a>
            </div>
            <dl className="hero-facts" aria-label="Release facts">
              <div>
                <dt>PLATFORMS</dt>
                <dd>iPhone · iPad · Watch</dd>
              </div>
              <div>
                <dt>DETECTION</dt>
                <dd>Sub-ms autocorrelation</dd>
              </div>
              <div>
                <dt>SKINS</dt>
                <dd>5 gauge styles</dd>
              </div>
            </dl>
          </div>
          <div className="hero-product" aria-label="Onde Tuner porthole gauge interface">
            <div className="product-aura product-aura-amber" aria-hidden="true" />
            <div className="product-aura product-aura-cyan" aria-hidden="true" />
            <div className="product-frame">
              <div className="frame-label frame-label-left">BLACKSITE</div>
              <div className="frame-label frame-label-right">PORTHOLE / 01</div>
              <img
                src="/onde-tuner-static/assets/onde-tuner-hero.webp"
                alt="Onde Tuner porthole gauge: chrome bezel, anodized dial with cent scale, red needle centered in tune"
                width={1240}
                height={1240}
                fetchPriority="high"
              />
            </div>
            <div className="hero-build-tag">
              <span>ONDE AUDIO</span>
              <span>BUILD 10</span>
            </div>
          </div>
          <div className="hero-scroll" aria-hidden="true">
            <span>EXPLORE</span>
            <i />
          </div>
        </section>

        <section className="manifesto section-shell">
          <div className="section-index">01 / ARCHITECTURE</div>
          <div className="manifesto-grid">
            <h2>
              NOT A METER.
              <span>A SIGNAL PATH.</span>
            </h2>
            <div className="manifesto-copy">
              <p>
                SwiftUI drives the interface, Skia-accelerated rendering keeps every needle
                motion smooth, and a Core Audio tap feeds a sample-accurate autocorrelation
                pitch detector — the same DSP discipline as our desktop plugins, tuned for
                the phone in your hand.
              </p>
              <p className="micro-copy">Needle response settles in under 350ms, smoothed by an exponential moving average.</p>
            </div>
          </div>
        </section>

        <section className="engines section-shell" id="engines">
          <div className="section-index">02 / ENGINES</div>
          <h2 style={{ marginBottom: 44 }}>FIVE GAUGES. ONE ENGINE.</h2>
          <div className="gauge-grid">
            {GAUGES.map((g) => (
              <article className="gauge-card" key={g.key}>
                {g.img ? (
                  <img src={g.img} alt={`${g.name} gauge skin`} />
                ) : (
                  <div className="gauge-icon" aria-hidden="true">{g.name}</div>
                )}
                <h3>{g.name}</h3>
                <p>{g.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="performance">
          <div className="section-shell performance-inner">
            <div className="performance-heading">
              <div className="section-index">03 / PERFORMANCE</div>
              <h2>BUILT TO BE TRUSTED.</h2>
              <p>Every reading is the real detector output — no smoothing that hides a bad take, no fake precision.</p>
            </div>
            <div className="performance-list">
              <article>
                <span>01</span>
                <h3>SUB-MS LATENCY</h3>
                <p>Autocorrelation pitch detection running on every audio buffer, not a throttled poll.</p>
              </article>
              <article>
                <span>02</span>
                <h3>CHROMATIC</h3>
                <p>All twelve semitones, any octave — not locked to a fixed string set.</p>
              </article>
              <article>
                <span>03</span>
                <h3>CALIBRATION</h3>
                <p>Adjustable A4 reference from 415 to 466 Hz for orchestral and historical tunings.</p>
              </article>
              <article>
                <span>04</span>
                <h3>WATCH-READY</h3>
                <p>The same detector, a glanceable dial, tuning from your wrist mid-set.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="sound section-shell" id="sound">
          <div className="sound-heading">
            <div>
              <div className="section-index">04 / SOUND LAB</div>
              <h2>REFERENCE TONES.</h2>
            </div>
            <p>Four pure tones used to validate the detector end-to-end — accurate within 3 cents on real audio, not synthetic frequency values.</p>
          </div>
          <div className="sound-grid">
            <div className="sound-card">
              <div className="sound-meta">
                <span>A4</span>
                <div>
                  <h3>440.00 Hz</h3>
                  <div className="waveform sound-amber" aria-hidden="true">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <i key={i} style={{ height: `${20 + 55 * Math.abs(Math.sin(i * 0.5))}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="sound-card">
              <div className="sound-meta">
                <span>C4</span>
                <div>
                  <h3>261.63 Hz</h3>
                  <div className="waveform sound-cyan" aria-hidden="true">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <i key={i} style={{ height: `${20 + 55 * Math.abs(Math.sin(i * 0.35))}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="sound-card">
              <div className="sound-meta">
                <span>E4</span>
                <div>
                  <h3>329.63 Hz</h3>
                  <div className="waveform sound-violet" aria-hidden="true">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <i key={i} style={{ height: `${20 + 55 * Math.abs(Math.sin(i * 0.42))}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="sound-card">
              <div className="sound-meta">
                <span>B4</span>
                <div>
                  <h3>493.88 Hz</h3>
                  <div className="waveform sound-ice" aria-hidden="true">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <i key={i} style={{ height: `${20 + 55 * Math.abs(Math.sin(i * 0.58))}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="specs section-shell" id="specs">
          <div className="specs-grid">
            <div className="specs-title">
              <h2>SYSTEM.</h2>
              <p>Onde Tuner runs natively on Apple Silicon devices — no server round-trip, no account, no ads. Your instrument never leaves your device.</p>
            </div>
            <dl className="spec-list">
              {SPECS.map(([dt, dd]) => (
                <div key={dt}>
                  <dt>{dt}</dt>
                  <dd>{dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="download-section" id="download">
          <div className="download-panel">
            <div className="download-glow download-glow-amber" aria-hidden="true" />
            <div className="download-glow download-glow-cyan" aria-hidden="true" />
            <div className="download-copy">
              <div className="section-index">05 / ACCESS</div>
              <h2>PRIVATE BETA.</h2>
              <p>Onde Tuner is in TestFlight beta. Request access and we&apos;ll send an invite.</p>
              <div className="release-meta">
                <span>BUILD 10</span>
                <span>TESTFLIGHT</span>
                <span>iOS 17+</span>
              </div>
            </div>
            <div className="code-form">
              <a className="button button-primary" href="mailto:hello@onde.surf?subject=Onde%20Tuner%20TestFlight" style={{ width: '100%', justifyContent: 'center' }}>
                Request TestFlight access<span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <p className="release-note">No account required. No tracking. Onde Audio, 2026.</p>
        </section>

        <footer>
          <div className="footer-mark">
            <span>ONDE</span>
            <small>Free River House · Onde Audio</small>
          </div>
          <div className="footer-meta">
            <span>PRIVACY-FIRST</span>
            <span>NO ACCOUNT</span>
            <span>APPLE SILICON NATIVE</span>
          </div>
        </footer>
      </main>
    </div>
  )
}
