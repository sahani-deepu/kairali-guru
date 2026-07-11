"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { Globe } from "@phosphor-icons/react";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const localesInfo = [
    { code: "en", label: "English" },
    { code: "de", label: "Deutsch" },
    { code: "fr", label: "Français" },
    { code: "ar", label: "العربية" },
    { code: "ru", label: "Русский" },
  ];

  function onLanguageChange(code: string) {
    startTransition(() => {
      router.replace(pathname, { locale: code });
    });
  }

  return (
    <div className={`relative inline-flex items-center gap-1.5 text-sm text-bark ${isPending ? "opacity-50 pointer-events-none" : ""}`}>
      <Globe size={18} className="text-taupe" />
      <select
        value={locale}
        onChange={(e) => onLanguageChange(e.target.value)}
        disabled={isPending}
        className="bg-transparent border-none py-1 pr-8 focus:ring-0 focus:outline-none cursor-pointer font-sans font-medium text-bark hover:text-laterite transition-colors"
      >
        {localesInfo.map((loc) => (
          <option key={loc.code} value={loc.code} className="bg-sand text-bark">
            {loc.label}
          </option>
        ))}
      </select>
    </div>
  );
}
