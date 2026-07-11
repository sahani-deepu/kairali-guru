import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // Supported locales
  locales: ["en", "de", "fr", "ar", "ru"],
  
  // Default locale
  defaultLocale: "en",

  // Locale prefix configuration (ensures locale is always prefixed)
  localePrefix: "always"
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

