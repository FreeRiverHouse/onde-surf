/**
 * Blog posts data for Onde.surf (Technical Blog)
 */

export type BlogCategory = 'Tech' | 'AI' | 'Engineering' | 'Setup'

export const BLOG_CATEGORIES: { value: BlogCategory | 'All'; label: string; emoji: string }[] = [
  { value: 'All', label: 'All', emoji: '⚡' },
  { value: 'Tech', label: 'Tech', emoji: '🧪' },
  { value: 'AI', label: 'AI', emoji: '🤖' },
  { value: 'Engineering', label: 'Engineering', emoji: '🏗️' },
]

export interface BlogPost {
  slug: string
  title: string
  subtitle: string
  description: string
  date: string
  dateISO: string
  readTime: string
  category: BlogCategory
  tags: string[]
  emoji: string
  gradient: string
  excerpt: string
  lang: 'en' | 'it'
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'radeon-7900-xtx-mac-tinygrad',
    title: 'Running AMD Radeon RX 7900 XTX on macOS with TinyGrad',
    subtitle: 'The "Impossible" Setup',
    description: 'We got a Radeon RX 7900 XTX (24GB VRAM) running ML inference on a MacBook Pro M1 via Thunderbolt eGPU, using TinyGrad with a small patch.',
    date: 'February 2026',
    dateISO: '2026-02-15T00:00:00Z',
    readTime: '8 min read',
    category: 'Tech',
    tags: ['GPU', 'TinyGrad', 'macOS', 'AMD', 'ML', 'eGPU'],
    emoji: '🔥',
    gradient: 'from-red-500 via-orange-500 to-amber-500',
    excerpt: 'Detailed guide on how we achieved 24GB VRAM ML inference on M1 Macs using external GPUs and TinyGrad.',
    lang: 'en',
  },
  {
    slug: 'multi-agent-setup',
    title: 'Multi-Agent Setup: 2 Macs, 5 Bots, Zero Humans',
    subtitle: 'Our 24/7 AI Team',
    description: 'How we run a coordinated team of 5 AI agents across 2 machines using git-based task management.',
    date: 'February 2026',
    dateISO: '2026-02-10T00:00:00Z',
    readTime: '12 min read',
    category: 'AI',
    tags: ['AI Agents', 'Claude', 'Automation', 'DevOps'],
    emoji: '🤖',
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
    excerpt: 'A deep dive into our distributed AI infrastructure and the lessons learned building an autonomous development team.',
    lang: 'en',
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export const SITE_URL = 'https://onde.surf'
export const BLOG_TITLE = 'Onde.surf Technical Blog'
export const BLOG_DESCRIPTION = 'Deep dives into AI, ML, and the engineering behind FreeRiverHouse.'
