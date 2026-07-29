import Link from 'next/link'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  AudioWaveform,
  Check,
  CircleDot,
} from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { effects } from '@/data/effects'

export default function Home() {
  const delay = effects[0]

  return (
    <div className="min-h-screen suite-shell">
      <Nav />

      <main>
        <section className="suite-home-hero">
          <div className="suite-noise" />
          <div className="suite-beam suite-beam-one" />
          <div className="suite-beam suite-beam-two" />
          <div className="hero-frequency" aria-hidden="true">
            {Array.from({ length: 42 }).map((_, index) => (
              <i
                key={index}
                style={{ '--bar': `${18 + ((index * 29) % 78)}%` } as React.CSSProperties}
              />
            ))}
          </div>

          <div className="suite-wrap home-hero-inner">
            <div className="home-hero-copy">
              <div className="suite-kicker">
                <AudioWaveform size={15} />
                Seven effects · one current
              </div>
              <h1>
                Sound is not
                <span>supposed to sit still.</span>
              </h1>
              <p>
                Onde is a family of playable audio instruments for producers who
                shape sound in motion. Built for Ableton Live. Native on Apple
                Silicon.
              </p>
              <div className="home-actions">
                <Link href="/apps/" className="btn-primary">
                  Explore all seven <ArrowRight size={17} />
                </Link>
                <Link href="/apps/onde-delay/" className="btn-minimal">
                  Download Onde Delay <ArrowDownRight size={17} />
                </Link>
              </div>
            </div>

            <Link
              href="/apps/onde-delay/"
              className="hero-device"
              style={
                {
                  '--accent': delay.accent,
                  '--accent-soft': delay.accentSoft,
                } as React.CSSProperties
              }
            >
              <div className="device-topline">
                <span>ONDE / 01</span>
                <span className="device-live">
                  <CircleDot size={12} />
                  RELEASED
                </span>
              </div>

              <div className="device-screen">
                <div className="device-screen-label">MODE</div>
                <strong>BOUNCE</strong>
                <span>1/8 D · 112 BPM</span>
              </div>

              <div className="device-controls">
                {['TIME', 'FEEL', 'FEEDBACK', 'MIX'].map((label, index) => (
                  <div className="device-knob-group" key={label}>
                    <div className={`device-knob knob-${index + 1}`}>
                      <i />
                    </div>
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              <div className="device-footer">
                <div>
                  <span className="device-dot" />
                  THROW
                </div>
                <div>
                  <span className="device-dot muted" />
                  HOLD
                </div>
                <ArrowUpRight size={19} />
              </div>
            </Link>
          </div>
        </section>

        <section className="suite-ticker" aria-label="Onde effect collection">
          <div>
            {effects.concat(effects).map((effect, index) => (
              <span key={`${effect.slug}-${index}`}>
                {effect.name} <i>✦</i>
              </span>
            ))}
          </div>
        </section>

        <section className="home-collection">
          <div className="suite-wrap">
            <div className="collection-heading">
              <div>
                <div className="suite-kicker">The collection</div>
                <h2>One purpose per instrument.</h2>
              </div>
              <p>
                Clear enough to grab in a session. Characterful enough to become
                part of the composition.
              </p>
            </div>

            <div className="home-effect-grid">
              {effects.map((effect) => (
                <div
                  key={effect.slug}
                  className={`home-effect-card ${effect.status === 'Released' ? 'is-released' : ''}`}
                  style={
                    {
                      '--accent': effect.accent,
                      '--accent-soft': effect.accentSoft,
                    } as React.CSSProperties
                  }
                >
                  <div className="home-card-top">
                    <span>{effect.index}</span>
                    <span>{effect.kind}</span>
                  </div>
                  <div className="home-card-art">
                    <img src={effect.image} alt="" loading="lazy" />
                    <i aria-hidden="true" />
                  </div>
                  <h3>{effect.name}</h3>
                  <p>{effect.tagline}</p>
                  <div className="home-card-bottom">
                    <span>{effect.status}</span>
                    <Link href={effect.href} aria-label={`Open ${effect.name}`}>
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="collection-link-wrap">
              <Link href="/apps/" className="suite-text-link">
                Features and development status <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="delay-feature">
          <div className="suite-wrap delay-feature-grid">
            <div className="delay-visual" aria-hidden="true">
              <div className="delay-ripple ripple-one" />
              <div className="delay-ripple ripple-two" />
              <div className="delay-ripple ripple-three" />
              <div className="delay-core">01</div>
            </div>
            <div className="delay-feature-copy">
              <div className="suite-kicker">Available now · Onde Delay</div>
              <h2>Memory you can play.</h2>
              <p>
                Onde Delay turns repeats into movement. Flip time, throw fragments,
                hold a texture and move between tight rhythm and blooming space
                without interrupting the track.
              </p>
              <ul>
                {delay.features.map((feature) => (
                  <li key={feature}>
                    <Check size={14} />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="delay-actions">
                <Link href="/apps/onde-delay/" className="btn-primary">
                  Listen + download <ArrowUpRight size={17} />
                </Link>
                <span>Access code: 0nd3</span>
              </div>
            </div>
          </div>
        </section>

        <section className="home-principles">
          <div className="suite-wrap principles-grid">
            <div className="principle-number">7</div>
            <div>
              <div className="suite-kicker">The Onde method</div>
              <h2>Small controls. Big gestures.</h2>
            </div>
            <div className="principle-copy">
              <p>
                No filler modules, no fake complexity. Parameters are smoothed,
                automatable and ordered for hands-on use. Release builds are signed,
                tested and validated before the download button appears.
              </p>
              <Link href="/apps/" className="btn-minimal">
                See the full suite <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
