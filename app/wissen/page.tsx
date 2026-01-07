import type { Metadata } from "next";
import { BASE_URL } from "@/lib/content";
import { generateBreadcrumbSchema, BreadcrumbItem } from "@/lib/schema";
import { Breadcrumb } from "@/components/Breadcrumb";

const canonicalUrl = `${BASE_URL}/wissen`;

export const metadata: Metadata = {
  title: "Wissen – Informationen zur Fußgesundheit",
  description: "Fundiertes Wissen rund um die Fußgesundheit. Erfahren Sie mehr über häufige Erkrankungen, Ursachen, Symptome und Möglichkeiten der Vorbeugung.",
  alternates: {
    canonical: canonicalUrl,
  },
};

export default function WissenPage() {
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: "Startseite", url: BASE_URL },
    { name: "Wissen", url: canonicalUrl },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main>
        <Breadcrumb items={breadcrumbItems} />

        <article>
          <h1>Wissen</h1>

          <section>
            <h2>Themen zur Fußgesundheit</h2>
            <ul>
              <li>
                <a href="/wissen/fusspilz">Fußpilz – Ursachen, Symptome und Behandlung</a>
              </li>
            </ul>
          </section>
        </article>
      </main>
    </>
  );
}
