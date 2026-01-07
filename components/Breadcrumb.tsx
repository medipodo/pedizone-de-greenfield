import { BreadcrumbItem } from "@/lib/schema";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={item.url}>
            {index < items.length - 1 ? (
              <>
                <a href={item.url}>{item.name}</a>
                <span aria-hidden="true"> › </span>
              </>
            ) : (
              <span aria-current="page">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
