"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { CalendarBlank, ChatTeardropText } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function StickyCTA() {
  const t = useTranslations("Navigation");
  const cta = useTranslations("CTAs");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide sticky bar when scrolling down, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-0 start-0 w-full md:w-auto md:max-w-md md:bottom-6 md:start-6 z-40 bg-sand/95 border-t border-sand-2 md:border md:rounded-2xl md:shadow-xl transition-all duration-300 ease-editorial ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between gap-4 p-4">
        <div className="hidden sm:block text-start">
          <span className="text-xs font-semibold uppercase tracking-widest text-laterite block">Kairali Guru</span>
          <span className="text-xs text-taupe block font-medium">Ayurveda training since 1908</span>
        </div>
        
        <div className="flex w-full sm:w-auto gap-3">
          <Link
            href="/free-consultation"
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 border border-copper hover:bg-sand-2 text-bark px-5 py-2.5 rounded-full text-xs font-medium transition-all"
          >
            <ChatTeardropText size={16} />
            <span>{cta("speak")}</span>
          </Link>
          
          <Link
            href="/enquiry"
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-palm hover:bg-palm-2 text-paper-on-dark px-5 py-2.5 rounded-full text-xs font-medium transition-all"
          >
            <CalendarBlank size={16} />
            <span>{t("enquire")}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
