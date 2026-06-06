import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const CF_ANALYTICS_TOKEN = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN

export const metadata: Metadata = {
  title: 'onde.surf — Tools that flow.',
  description: 'Handcrafted macOS apps and tools for creators who move at the speed of waves.',
  keywords: ['macOS apps', 'developer tools', 'onde', 'surf', 'onde vibe', 'dictation app'],
  authors: [{ name: 'Free River House' }],
  openGraph: {
    title: 'onde.surf — Tools that flow.',
    description: 'Handcrafted macOS apps and tools for creators.',
    url: 'https://onde.surf',
    siteName: 'onde.surf',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'onde.surf — Tools that flow.',
    description: 'Handcrafted macOS apps and tools for creators.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
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
