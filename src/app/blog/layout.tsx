import type { Metadata } from 'next'
import Script from 'next/script'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://onde.surf',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://onde.surf/blog',
    },
  ],
}

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': 'https://onde.surf/blog',
  name: 'Onde Engineering Blog',
  description:
    'Deep dives into AI agents, ML experiments, and architectural stories from the Onde Lab.',
  url: 'https://onde.surf/blog',
  publisher: {
    '@type': 'Organization',
    name: 'Free River House',
    url: 'https://onde.surf',
  },
  inLanguage: 'en',
}

export const metadata: Metadata = {
  title: 'Engineering Blog | Onde.surf',
  description:
    'Deep dives into AI agents, ML experiments, and architectural stories from the Onde Lab.',
  keywords: [
    'blog',
    'tech',
    'AI agents',
    'ML experiments',
    'engineering',
    'macOS',
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Onde Engineering Blog',
    description:
      'Deep dives into AI agents, ML experiments, and architectural stories from the Onde Lab.',
    url: 'https://onde.surf/blog',
    siteName: 'Onde.surf',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onde Engineering Blog',
    description:
      'Deep dives into AI agents, ML experiments, and architectural stories from the Onde Lab.',
    creator: '@Onde_FRH',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="blog-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="blog-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <div className="relative min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </>
  )
}
