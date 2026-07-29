export type OndeEffect = {
  slug: string
  index: string
  name: string
  kind: string
  tagline: string
  description: string
  features: string[]
  status: string
  statusDetail: string
  accent: string
  accentSoft: string
  href: string
  image: string
}

export const effects: OndeEffect[] = [
  {
    slug: 'onde-delay',
    index: '01',
    name: 'Onde Delay',
    kind: 'Creative delay',
    tagline: 'Make time misbehave.',
    description:
      'A performance delay built for electronic music and hip-hop: rhythmic memory, playable transitions and controlled instability in one focused instrument.',
    features: ['Straight · Bounce · Flip · Bloom', 'Throw + Hold performance controls', 'Host sync · AU + VST3'],
    status: 'Released',
    statusDetail: 'Signed & notarized for macOS',
    accent: '#62f6ff',
    accentSoft: 'rgba(98, 246, 255, 0.18)',
    href: '/apps/onde-delay/',
    image: '/onde-delay-static/assets/onde-delay-2-waves.webp',
  },
  {
    slug: 'onde-reverb',
    index: '02',
    name: 'Onde Reverb',
    kind: 'Spatial reverb',
    tagline: 'A room with no walls.',
    description:
      'A wide, musical stereo field that moves from intimate air to suspended atmospheres without losing the source.',
    features: ['Adaptive stereo field', 'Bloom + Hold', '25 automatable parameters'],
    status: 'In development',
    statusDetail: 'Ableton validation passed',
    accent: '#9d8cff',
    accentSoft: 'rgba(157, 140, 255, 0.18)',
    href: '/apps/onde-reverb/',
    image: '/effects/onde-reverb.webp',
  },
  {
    slug: 'onde-loop',
    index: '03',
    name: 'Onde Loop',
    kind: 'Loop station',
    tagline: 'Catch it. Bend it. Keep moving.',
    description:
      'A performance looper for ideas that cannot wait: capture, overdub and reshape phrases while the music keeps flowing.',
    features: ['Quantized capture', 'Overdub · Undo · Multiply', 'Tempo-aware performance flow'],
    status: 'In development',
    statusDetail: 'Core + state tests passed',
    accent: '#ffca62',
    accentSoft: 'rgba(255, 202, 98, 0.18)',
    href: '/apps/onde-loop/',
    image: '/effects/onde-loop.webp',
  },
  {
    slug: 'onde-wah',
    index: '04',
    name: 'Onde Wah',
    kind: 'Expressive filter',
    tagline: 'Put motion under your foot.',
    description:
      'A fluid wah that follows a pedal or follows your playing, designed to stay expressive instead of sounding mechanical.',
    features: ['Pedal + envelope modes', 'MIDI CC 11 control', 'Auto calibration'],
    status: 'In development',
    statusDetail: 'Ableton validation passed',
    accent: '#ff6b9d',
    accentSoft: 'rgba(255, 107, 157, 0.18)',
    href: '/apps/onde-wah/',
    image: '/effects/onde-wah.webp',
  },
  {
    slug: 'onde-guitar-midi',
    index: '05',
    name: 'Onde Guitar MIDI',
    kind: 'Audio to MIDI',
    tagline: 'Let the guitar speak synth.',
    description:
      'A direct monophonic bridge from guitar performance to MIDI instruments, with playable note tracking and pitch movement.',
    features: ['Chromatic + legato modes', 'Pitch-bend output', 'Two-track Ableton routing'],
    status: 'In development',
    statusDetail: 'Ableton validation passed',
    accent: '#66f29b',
    accentSoft: 'rgba(102, 242, 155, 0.18)',
    href: '/apps/onde-guitar-midi/',
    image: '/effects/onde-guitar-midi.webp',
  },
  {
    slug: 'onde-drive',
    index: '06',
    name: 'Onde Drive',
    kind: 'Saturation',
    tagline: 'Pressure without the rubble.',
    description:
      'A compact low-alias drive that adds weight, edge and punch while keeping transients useful and the low end together.',
    features: ['Low-alias saturation', 'Punch contour', 'Five-control workflow'],
    status: 'In development',
    statusDetail: 'Ableton validation passed',
    accent: '#ff794d',
    accentSoft: 'rgba(255, 121, 77, 0.18)',
    href: '/apps/onde-drive/',
    image: '/effects/onde-drive.webp',
  },
  {
    slug: 'onde-gate',
    index: '07',
    name: 'Onde Gate',
    kind: 'Rhythmic gate',
    tagline: 'Turn silence into rhythm.',
    description:
      'A transport-synced gate that cuts patterns into audio, with enough swing and accent to feel played rather than programmed.',
    features: ['Transport-synced patterns', 'Swing + accent + Fill', 'Sidechain pulse input'],
    status: 'In development',
    statusDetail: 'Ableton validation passed',
    accent: '#5f9dff',
    accentSoft: 'rgba(95, 157, 255, 0.18)',
    href: '/apps/onde-gate/',
    image: '/effects/onde-gate.webp',
  },
]
