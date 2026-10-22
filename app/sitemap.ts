import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = false // <-- Add this here too

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://inferreach.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://inferreach.com/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://inferreach.com/terms',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}