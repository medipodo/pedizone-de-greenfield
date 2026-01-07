import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllArticleSlugs,
  getArticleBySlug,
  BASE_URL,
} from "@/lib/content";
import {
  generateBreadcrumbSchema,
  generateArticleSchema,
  BreadcrumbItem,
} from "@/lib/schema";
import { TableOfContents } from "@/components/TableOfContents";
import { Breadcrumb } from "@/components/Breadcrumb";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// SSG: Generate all static paths at build time
export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Seite nicht gefunden",
    };
  }

  const canonicalUrl = `${BASE_URL}/wissen/fusspilz/${slug}`;

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: canonicalUrl,
      type: "article",
      locale: "de_DE",
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const canonicalUrl = `${BASE_URL}/wissen/fusspilz/${slug}`;

  // Breadcrumb data
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: "Startseite", url: BASE_URL },
    { name: "Wissen", url: `${BASE_URL}/wissen` },
    { name: "Fußpilz", url: `${BASE_URL}/wissen/fusspilz` },
    { name: article.h1, url: canonicalUrl },
  ];

  // Schema data
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const articleSchema = generateArticleSchema({
    headline: article.h1,
    description: article.description,
    url: canonicalUrl,
    datePublished: article.lastModified,
    dateModified: article.lastModified,
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
          <h1>{article.h1}</h1>

          <TableOfContents sections={article.sections} />

          {article.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2>{section.h2}</h2>
              {section.paragraphs?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </section>
          ))}

          <section>
            <a href="/wissen/fusspilz">Übersichtsseite Fußpilz</a>
          </section>
        </article>
      </main>
    </>
  );
}
