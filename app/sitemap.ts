import type { MetadataRoute } from 'next'
import { FIRM } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${FIRM.domain}`
  return [
    { url: base,              lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/privacy`,    lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/disclaimer`, lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
