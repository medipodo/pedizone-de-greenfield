import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pedizone.de'
  const today = new Date('2026-04-07')
  const unchangedDate = new Date('2026-04-01')
  const april6 = new Date('2026-04-06')

  return [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/wissen`,
      lastModified: unchangedDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/wissen/fusspilz`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/wissen/fusspilz/was-ist-fusspilz`,
      lastModified: unchangedDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/wissen/fusspilz/ursachen`,
      lastModified: unchangedDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/wissen/fusspilz/symptome`,
      lastModified: unchangedDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/wissen/fusspilz/ansteckung`,
      lastModified: unchangedDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/wissen/fusspilz/arten`,
      lastModified: unchangedDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/wissen/fusspilz/behandlung`,
      lastModified: unchangedDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/wissen/fusspilz/vorbeugung`,
      lastModified: unchangedDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Blog Pages
    {
      url: `${baseUrl}/blog`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/fusspilz`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/fusspilz/hausmittel`,
      lastModified: april6,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/fusspilz/creme`,
      lastModified: april6,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/fusspilz/ansteckend`,
      lastModified: april6,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/fusspilz/dusche`,
      lastModified: april6,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // New articles added on April 7, 2026
    {
      url: `${baseUrl}/blog/fusspilz/behandeln`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/fusspilz/socken`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/fusspilz/wie-lange`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/fusspilz/bilder`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
