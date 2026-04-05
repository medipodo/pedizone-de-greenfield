import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pedizone.de'
  const today = new Date('2026-04-05')
  const unchangedDate = new Date('2026-04-01')

  return [
    {
      url: baseUrl,
      lastModified: today, // Bugün güncellendi - zengin içerik eklendi
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
      lastModified: today, // Bugün güncellendi - modern görsel kartlar
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
  ]
}
