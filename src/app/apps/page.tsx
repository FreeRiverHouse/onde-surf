import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ArrowDownRight,
  ArrowUpRight,
  AudioLines,
  Check,
  CircleDot,
} from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { effects } from '@/data/effects'

export const metadata: Metadata = {
  title: 'Onde Effects — Seven instruments for sound in motion',
  description:
    'Explore Onde Delay, Reverb, Loop, Wah, Guitar MIDI, Drive and Gate — a focused suite for Ableton Live and macOS.',
}

export default function AppsPage() {
  return (
    <div className="min-h-screen suite-shell">
      <Nav />

      <main>
        <section className="suite-catalog-hero">
          <div className="suite-noise" />
          <div className="suite-beam suite-beam-one" />
          <div className="suite-beam suite-beam-two" />

          <div className="suite-wrap relative z-10">
            <div className="suite-kicker">
              <AudioLines size={15} />
              Onde audio instruments · 01—07
            </div>

            <div className="catalog-title-grid">
              <h1>
                Seven ways
                <span>to move sound.</span>
              </h1>
              <div className="catalog-intro">
                <p>
                  A new family of focused effects for producers and performers.
                  Built on macOS, validated in Ableton Live and designed as playable
                  instruments—not utility boxes.
                </p>
                <a href="#collection" className="suite-text-link">
                  Enter the collection <ArrowDownRight size={17} />
                </a>
              </div>
            </div>

            <div className="catalog-wave" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>

        <section id="collection" className="suite-catalog">
          <div className="suite-wrap">
            <div className="catalog-rail">
              <span>THE ONDE COLLECTION</span>
              <span>MAC + ABLETON FIRST</span>
              <span>APPLE SILICON NATIVE</span>
            </div>

            <div className="effect-stack">
              {effects.map((effect) => {
                const content = (
                  <article
                    className={`effect-row ${effect.status === 'Released' ? 'effect-row-live' : ''}`}
                    style={
                      {
                        '--accent': effect.accent,
                        '--accent-soft': effect.accentSoft,
                      } as React.CSSProperties
                    }
                  >
                    <div className="effect-index">{effect.index}</div>
                    <div className="effect-art">
                      <img src={effect.image} alt="" loading="lazy" />
                      <span aria-hidden="true">{effect.index}</span>
                    </div>

                    <div className="effect-copy">
                      <div className="effect-kind">{effect.kind}</div>
                      <h2>{effect.name}</h2>
                      <p className="effect-tagline">{effect.tagline}</p>
                      <p className="effect-description">{effect.description}</p>
                      <ul>
                        {effect.features.map((feature) => (
                          <li key={feature}>
                            <Check size={13} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="effect-meta">
                      <div className={`effect-status ${effect.status === 'Released' ? 'is-live' : ''}`}>
                        <CircleDot size={13} />
                        {effect.status}
                      </div>
                      <p>{effect.statusDetail}</p>
                      {effect.status === 'Released' ? (
                        <span className="effect-action">
                          Explore + download <ArrowUpRight size={17} />
                        </span>
                      ) : (
                        <span className="effect-action">
                          Open product concept <ArrowUpRight size={17} />
                        </span>
                      )}
                    </div>

                    <div className="effect-scanline" aria-hidden="true" />
                  </article>
                )

                return (
                  <Link key={effect.slug} href={effect.href} className="effect-link">
                    {content}
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <section className="suite-manifesto">
          <div className="suite-wrap manifesto-grid">
            <div>
              <div className="suite-kicker">Built as instruments</div>
              <h2>Fast enough for instinct. Deep enough for accidents.</h2>
            </div>
            <div className="manifesto-copy">
              <p>
                Every control is exposed for automation. Every module is ordered
                for hands-on work. The first target is a tight macOS and Ableton
                experience; wider formats arrive only after the sound and workflow
                are genuinely ready.
              </p>
              <Link href="/apps/onde-delay/" className="btn-primary">
                Get Onde Delay <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
