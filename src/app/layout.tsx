import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const CF_ANALYTICS_TOKEN = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN

export const metadata: Metadata = {
  metadataBase: new URL('https://onde.surf'),
  title: 'onde.surf — Sound in motion',
  description:
    'Seven playable audio effects for Ableton Live and macOS: Onde Delay, Reverb, Loop, Wah, Guitar MIDI, Drive and Gate.',
  keywords: [
    'Ableton Live plugins',
    'Apple Silicon audio plugins',
    'creative delay',
    'loop station',
    'guitar MIDI',
    'onde',
  ],
  authors: [{ name: 'Free River House' }],
  openGraph: {
    title: 'onde.surf — Sound in motion',
    description: 'Seven playable audio instruments. Built for Ableton Live and Apple Silicon.',
    url: 'https://onde.surf',
    siteName: 'onde.surf',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Onde audio effects — sound in motion' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'onde.surf — Sound in motion',
    description: 'Seven playable audio instruments. Built for Ableton Live and Apple Silicon.',
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        {children}
        {CF_ANALYTICS_TOKEN && (
          <Script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${CF_ANALYTICS_TOKEN}"}`}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}
