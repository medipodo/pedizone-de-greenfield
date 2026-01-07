import { MetadataRoute } from "next";
import { getAllArticles, getPillarData, BASE_URL } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const pillar = getPillarData();
  const articles = getAllArticles();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/wissen`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/wissen/fusspilz`,
      lastModified: new Date(pillar.lastModified),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Dynamic article pages
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/wissen/fusspilz/${article.slug}`,
    lastModified: new Date(article.lastModified),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages];
}
