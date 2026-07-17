import { NextResponse } from "next/server";
import { courses } from "@/lib/coursesData";

const DOMAIN = "https://kairali.guru";
const LOCALES = ["en", "de", "fr", "ar", "ru"];

const STATIC_PATHS = [
  "",
  "/about",
  "/about/csr",
  "/about/careers",
  "/panchakarma",
  "/kerala",
  "/locations",
  "/locations/kerala",
  "/locations/delhi",
  "/learn",
  "/enquiry",
  "/travel-visa",
  "/faq",
  "/gallery",
  "/free-consultation",
  "/courses",
  "/terms",
  "/privacy",
  "/disclaimer",
  "/refund",
  "/cookie-policy",
  "/legal-notice",
  "/accessibility"
];

export async function GET() {
  const urls: string[] = [];

  // Generate sitemap items for static pages
  for (const path of STATIC_PATHS) {
    for (const locale of LOCALES) {
      const loc = `${DOMAIN}/${locale}${path}`;
      let alternates = "";
      for (const altLocale of LOCALES) {
        alternates += `    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${DOMAIN}/${altLocale}${path}"/>\n`;
      }
      alternates += `    <xhtml:link rel="alternate" hreflang="x-default" href="${DOMAIN}/en${path}"/>`;

      urls.push(`  <url>
    <loc>${loc}</loc>
${alternates}
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === "" ? "1.0" : "0.8"}</priority>
  </url>`);
    }
  }

  // Generate sitemap items for dynamic course pages
  for (const course of courses) {
    const path = `/courses/${course.slug}`;
    for (const locale of LOCALES) {
      const loc = `${DOMAIN}/${locale}${path}`;
      let alternates = "";
      for (const altLocale of LOCALES) {
        alternates += `    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${DOMAIN}/${altLocale}${path}"/>\n`;
      }
      alternates += `    <xhtml:link rel="alternate" hreflang="x-default" href="${DOMAIN}/en${path}"/>`;

      urls.push(`  <url>
    <loc>${loc}</loc>
${alternates}
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`);
    }
  }

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>`;

  return new NextResponse(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}

