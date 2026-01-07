import { Metadata } from "next";
import { getPillarData, getAllArticles, BASE_URL } from "@/lib/content";
import {
  generateBreadcrumbSchema,
  generateArticleSchema,
  BreadcrumbItem,
} from "@/lib/schema";
import { TableOfContents } from "@/components/TableOfContents";
import { Breadcrumb } from "@/components/Breadcrumb";

const pillar = getPillarData();
const articles = getAllArticles();
const canonicalUrl = `${BASE_URL}/wissen/fusspilz`;

export const metadata: Metadata = {
  title: pillar.title,
  description: pillar.description,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: pillar.title,
    description: pillar.description,
    url: canonicalUrl,
    type: "article",
    locale: "de_DE",
  },
};

export default function FusspilzPage() {
  // Breadcrumb data
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: "Startseite", url: BASE_URL },
    { name: "Wissen", url: `${BASE_URL}/wissen` },
    { name: "Fußpilz", url: canonicalUrl },
  ];

  // Schema data
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const articleSchema = generateArticleSchema({
    headline: pillar.h1,
    description: pillar.description,
    url: canonicalUrl,
    datePublished: pillar.lastModified,
    dateModified: pillar.lastModified,
  });

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <main>
        <Breadcrumb items={breadcrumbItems} />

        <article>
          <h1>{pillar.h1}</h1>

          {/* Navigation to satellite pages */}
          <nav>
            <ul>
              {articles.map((article) => (
                <li key={article.slug}>
                  <a href={`/wissen/fusspilz/${article.slug}`}>
                    {article.h1}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <TableOfContents sections={pillar.sections} />

          {pillar.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2>{section.h2}</h2>
              {section.content && <p>{section.content}</p>}
            </section>
          ))}
        </article>
      </main>
    </>
  );
}
