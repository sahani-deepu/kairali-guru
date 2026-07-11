import { MetadataRoute } from "next";

const locales = ["en", "de", "fr", "ar", "ru"];
const paths = [
  "",
  "/about",
  "/courses",
  "/panchakarma",
  "/kerala",
  "/locations",
  "/locations/kerala",
  "/locations/delhi",
  "/travel-visa",
  "/faq",
  "/student-hub",
  "/learn",
  "/gallery",
  "/enquiry",
  "/privacy",
  "/terms"
];


export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  
  for (const path of paths) {
    for (const locale of locales) {
      const url = `https://kairali.guru/${locale}${path}`;
      
      // Build alternates
      const languages: Record<string, string> = {};
      for (const l of locales) {
        languages[l] = `https://kairali.guru/${l}${path}`;
      }

      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: path === "" ? 1.0 : 0.8,
      });
    }
  }

  return entries;
}
