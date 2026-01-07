import { Section } from "@/lib/content";

interface TOCProps {
  sections: Section[];
}

export function TableOfContents({ sections }: TOCProps) {
  if (sections.length === 0) return null;

  return (
    <nav aria-label="Inhaltsverzeichnis">
      <h2>Inhaltsverzeichnis</h2>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`}>{section.h2}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
