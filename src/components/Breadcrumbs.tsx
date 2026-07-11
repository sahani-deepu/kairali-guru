import { Link } from "@/i18n/routing";
import { CaretRight, CaretLeft } from "@phosphor-icons/react/dist/ssr";
import SchemaRenderer from "./SchemaRenderer";
import { BreadcrumbList, WithContext } from "schema-dts";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  locale: string;
}

export default function Breadcrumbs({ items, locale }: BreadcrumbsProps) {
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? CaretLeft : CaretRight;

  // Build Breadcrumb JSON-LD schema
  const schema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `https://kairali.guru/${locale}${item.href}` : `https://kairali.guru/${locale}`
    }))
  };

  return (
    <>
      <SchemaRenderer schema={schema} />
      <nav aria-label="Breadcrumbs" className="py-4 text-xs font-medium text-taupe font-sans">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href="/" className="hover:text-laterite transition-colors">
              {locale === "ar" ? "الرئيسية" : "Home"}
            </Link>
          </li>
          
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-2">
                <ArrowIcon size={12} className="text-copper" />
                {isLast || !item.href ? (
                  <span className="text-bark font-semibold" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-laterite transition-colors">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
