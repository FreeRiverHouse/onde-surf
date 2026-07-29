import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleDot,
  Mail,
  Waves,
} from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { effects } from '@/data/effects'

type Gesture = {
  label: string
  title: string
  body: string
}

type ProductDetail = {
  eyebrow: string
  headline: string
  headlineAccent: string
  narrative: string
  signal: string[]
  gestures: Gesture[]
  stat: string
  statLabel: string
  releaseNote: string
}

const productDetails: Record<string, ProductDetail> = {
  'onde-reverb': {
    eyebrow: 'Spatial instrument',
    headline: 'Space that moves',
    headlineAccent: 'with the source.',
    narrative:
      'Onde Reverb is shaped around one idea: a big space should never erase the thing that entered it. The field widens, blooms and suspends while the dry gesture stays legible.',
    signal: ['Source', 'Early field', 'Bloom core', 'Stereo air', 'Output'],
    gestures: [
      {
        label: '01 · Field',
        title: 'Near to endless',
        body: 'Move from a tight reflective room to an open, floating field without a hard change in character.',
      },
      {
        label: '02 · Bloom',
        title: 'Let the tail arrive',
        body: 'Push energy into the space after the transient, keeping drums, voices and guitar in front.',
      },
      {
        label: '03 · Hold',
        title: 'Suspend the air',
        body: 'Catch the current field as a playable layer, then perform over it without a click or abrupt seam.',
      },
    ],
    stat: '25',
    statLabel: 'automatable parameters arranged for hands-on control',
    releaseNote:
      'The spatial engine and automation surface are in active development. The current build has passed Ableton host validation.',
  },
  'onde-loop': {
    eyebrow: 'Performance loop station',
    headline: 'Memory that never',
    headlineAccent: 'breaks the flow.',
    narrative:
      'Onde Loop is designed for the dangerous moment when an idea appears once. Capture it in time, build on it, undo it or multiply the phrase while the session keeps moving.',
    signal: ['Listen', 'Capture', 'Overdub', 'Multiply', 'Perform'],
    gestures: [
      {
        label: '01 · Capture',
        title: 'Land on the beat',
        body: 'Tempo-aware recording closes the phrase musically, so the first loop already feels intentional.',
      },
      {
        label: '02 · Layer',
        title: 'Overdub without fear',
        body: 'Build density, then return instantly with an O(1) undo architecture designed away from the audio thread.',
      },
      {
        label: '03 · Multiply',
        title: 'Make the phrase breathe',
        body: 'Extend the memory into a longer structure while playback and the performance remain uninterrupted.',
      },
    ],
    stat: '30s',
    statLabel: 'per memory bank with embedded project-state restoration',
    releaseNote:
      'Core, processor and state tests are passing. The hardened build now uses preallocated audio memory and embedded PCM state; final host and Push revalidation comes next.',
  },
  'onde-wah': {
    eyebrow: 'Expressive filter',
    headline: 'A filter under',
    headlineAccent: 'your foot.',
    narrative:
      'Onde Wah treats the sweep as a gesture, not a parameter. Play it from a pedal, let the envelope follow your touch, or move between the two without losing the human shape.',
    signal: ['Input', 'Gesture', 'Resonance', 'Contour', 'Output'],
    gestures: [
      {
        label: '01 · Pedal',
        title: 'Direct pressure',
        body: 'A continuous, calibrated pedal response gives the sweep enough resolution for slow vowel movement and fast attacks.',
      },
      {
        label: '02 · Envelope',
        title: 'Follow the player',
        body: 'Let picking dynamics open the filter with musical attack and release rather than a mechanical trigger.',
      },
      {
        label: '03 · Calibrate',
        title: 'Fit the hardware',
        body: 'Auto calibration adapts the full travel of an expression pedal, including compact or imperfect ranges.',
      },
    ],
    stat: 'CC11',
    statLabel: 'native expression-pedal control with automatic calibration',
    releaseNote:
      'The AU and VST3 development builds are universal and have passed host and AU validation. Pedal feel and factory gestures are being refined.',
  },
  'onde-guitar-midi': {
    eyebrow: 'Audio-to-MIDI instrument',
    headline: 'Let the guitar',
    headlineAccent: 'speak synth.',
    narrative:
      'Onde Guitar MIDI turns a monophonic performance into notes and pitch movement while the original audio keeps passing through. It is built around feel, not a laboratory readout.',
    signal: ['String', 'Pitch lock', 'Note logic', 'Pitch bend', 'MIDI out'],
    gestures: [
      {
        label: '01 · Chromatic',
        title: 'Clear note intent',
        body: 'Confident note changes for riffs, bass lines and parts where the destination matters more than the slide.',
      },
      {
        label: '02 · Legato',
        title: 'Keep the movement',
        body: 'Preserve continuous pitch gestures and let bends speak through the receiving instrument.',
      },
      {
        label: '03 · Route',
        title: 'Built for Live',
        body: 'Use the audio effect on the guitar track and route its MIDI output to a second instrument track.',
      },
    ],
    stat: '2',
    statLabel: 'tracks in Ableton: guitar analysis plus the instrument you want to play',
    releaseNote:
      'The audio-effect architecture, pass-through and MIDI output load cleanly in Ableton. Tracking feel and the two-track workflow are still being tuned.',
  },
  'onde-drive': {
    eyebrow: 'Low-alias saturation',
    headline: 'Pressure without',
    headlineAccent: 'the rubble.',
    narrative:
      'Onde Drive adds density where a sound needs to step forward. The shape stays compact: push the core, contour the punch and keep the low end useful.',
    signal: ['Input', 'Pressure', 'Color', 'Punch', 'Output'],
    gestures: [
      {
        label: '01 · Drive',
        title: 'Add useful density',
        body: 'Move from nearly invisible reinforcement to an assertive edge without turning every source into the same distortion.',
      },
      {
        label: '02 · Punch',
        title: 'Protect the front',
        body: 'Contour the transient against the saturated body so drums and picked material stay physically present.',
      },
      {
        label: '03 · Output',
        title: 'Judge at level',
        body: 'A direct five-control workflow makes it fast to compare character instead of being fooled by loudness.',
      },
    ],
    stat: '15',
    statLabel: 'samples of prepared latency in the current low-alias engine',
    releaseNote:
      'The universal development build is passing strictness and Ableton loading tests. The final character set and release presets are in progress.',
  },
  'onde-gate': {
    eyebrow: 'Transport-synced rhythm',
    headline: 'Turn silence',
    headlineAccent: 'into rhythm.',
    narrative:
      'Onde Gate cuts movement into sustained audio without making it feel like a spreadsheet. Patterns follow transport, while swing, accent and Fill keep the phrase playable.',
    signal: ['Input', 'Pattern', 'Swing', 'Accent / Fill', 'Output'],
    gestures: [
      {
        label: '01 · Pattern',
        title: 'Lock to transport',
        body: 'Cut pads, noise, guitars and loops into musical divisions that recover correctly from host position changes.',
      },
      {
        label: '02 · Swing',
        title: 'Move off the grid',
        body: 'Shift the internal pulse from strict machine time toward a looser pocket without rebuilding the pattern.',
      },
      {
        label: '03 · Fill',
        title: 'Break the repetition',
        body: 'Push into a denser performance variation, then return to the original rhythm on release.',
      },
    ],
    stat: '16',
    statLabel: 'automatable controls including sidechain pulse, swing, accent and Fill',
    releaseNote:
      'The rhythmic engine and sidechain pulse path have passed Ableton loading validation. Pattern design and performance mapping are being refined.',
  },
}

const pageEffects = effects.filter((effect) => effect.slug !== 'onde-delay')

export function generateStaticParams() {
  return pageEffects.map((effect) => ({ slug: effect.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const effect = pageEffects.find((candidate) => candidate.slug === params.slug)

  if (!effect) return {}

  return {
    title: `${effect.name} — ${effect.tagline}`,
    description: effect.description,
    openGraph: {
      title: `${effect.name} — ${effect.tagline}`,
      description: effect.description,
      images: [{ url: effect.image }],
    },
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const effect = pageEffects.find((candidate) => candidate.slug === params.slug)
  const detail = productDetails[params.slug]

  if (!effect || !detail) notFound()

  const effectIndex = effects.findIndex((candidate) => candidate.slug === effect.slug)
  const nextEffect = effects[(effectIndex + 1) % effects.length]

  return (
    <div
      className="min-h-screen suite-shell product-shell"
      style={
        {
          '--accent': effect.accent,
          '--accent-soft': effect.accentSoft,
        } as React.CSSProperties
      }
    >
      <Nav />

      <main>
        <section className="product-hero">
          <div className="product-art">
            <Image
              src={effect.image}
              alt={`${effect.name} 3D sound sculpture`}
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className="product-art-wash" />
          <div className="product-grid-lines" aria-hidden="true" />

          <div className="suite-wrap product-hero-content">
            <Link href="/apps/" className="product-back">
              <ArrowLeft size={15} />
              All effects
            </Link>

            <div className="product-hero-copy">
              <div className="suite-kicker">
                <Waves size={15} />
                Onde / {effect.index} · {detail.eyebrow}
              </div>
              <h1>{effect.name}</h1>
              <p className="product-tagline">{effect.tagline}</p>
              <p className="product-lede">{effect.description}</p>

              <div className="product-status-line">
                <span>
                  <CircleDot size={13} />
                  {effect.status}
                </span>
                <em>{effect.statusDetail}</em>
              </div>
            </div>

            <div className="product-hero-index">{effect.index}</div>
          </div>
        </section>

        <section className="product-story">
          <div className="suite-wrap product-story-grid">
            <div className="product-story-title">
              <div className="suite-kicker">Design principle</div>
              <h2>
                {detail.headline}
                <span>{detail.headlineAccent}</span>
              </h2>
            </div>
            <div className="product-story-copy">
              <p>{detail.narrative}</p>
              <div className="product-stat">
                <strong>{detail.stat}</strong>
                <span>{detail.statLabel}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="product-signal">
          <div className="suite-wrap">
            <div className="product-section-head">
              <div className="suite-kicker">Signal movement</div>
              <span>Designed for automation + performance</span>
            </div>
            <div className="signal-path">
              {detail.signal.map((node, index) => (
                <div key={node} className="signal-node">
                  <i>{String(index + 1).padStart(2, '0')}</i>
                  <strong>{node}</strong>
                  {index < detail.signal.length - 1 && <ArrowRight size={16} />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="product-gestures">
          <div className="suite-wrap">
            <div className="product-section-head">
              <div>
                <div className="suite-kicker">Three gestures</div>
                <h2>Built to be played.</h2>
              </div>
              <p>
                The interface will keep the important moves close, with smooth
                automation and a logical order for Ableton and Push.
              </p>
            </div>

            <div className="gesture-grid">
              {detail.gestures.map((gesture) => (
                <article key={gesture.label}>
                  <span>{gesture.label}</span>
                  <h3>{gesture.title}</h3>
                  <p>{gesture.body}</p>
                  <Check size={18} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="product-release">
          <div className="suite-wrap product-release-grid">
            <div>
              <div className="suite-kicker">Release status</div>
              <h2>Visible now. Download when it is ready.</h2>
            </div>
            <div>
              <p>{detail.releaseNote}</p>
              <a
                href={`mailto:hello@onde.surf?subject=${encodeURIComponent(`${effect.name} release updates`)}`}
                className="btn-primary"
              >
                Follow the release <Mail size={16} />
              </a>
            </div>
          </div>
        </section>

        <Link
          href={nextEffect.href}
          className="product-next"
          style={
            {
              '--next-accent': nextEffect.accent,
              '--next-soft': nextEffect.accentSoft,
            } as React.CSSProperties
          }
        >
          <div className="suite-wrap">
            <span>Next instrument · {nextEffect.index}</span>
            <strong>{nextEffect.name}</strong>
            <ArrowUpRight size={36} />
          </div>
        </Link>
      </main>

      <Footer />
    </div>
  )
}
