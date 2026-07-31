import type { MetadataRoute } from 'next'
import { blogPosts, SITE_URL } from '@/data/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/apps', '/apps/onde-tuner', '/blog'].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }))

  const blogRoutes = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.dateISO,
  }))

  return [...staticRoutes, ...blogRoutes]
}
