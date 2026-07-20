"use client";

import { useConsent } from "./ConsentProvider";
import { ShieldCheck, Gear } from "@phosphor-icons/react";

export default function ConsentBanner() {
  const { isBannerVisible, acceptAll, rejectNonEssential, openPreferences } = useConsent();

  if (!isBannerVisible) return null;

  return (
    <div
      className="consent-banner consent-banner-container fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-[420px] rounded-2xl border border-copper/20 bg-[#281A12] p-4 sm:p-5 shadow-2xl text-palm opacity-100"
      role="dialog"
      aria-label="Cookie consent banner"
    >
      <div className="flex items-start gap-3">
        <ShieldCheck size={22} className="text-turmeric mt-0.5 flex-shrink-0" />
        <div className="space-y-3 w-full min-w-0">
          <div>
            <p className="consent-banner-title text-[10px] font-bold uppercase tracking-[0.15em] text-turmeric">Privacy & Cookies</p>
            <p className="consent-banner-text mt-1 text-[10px] leading-relaxed text-taupe font-serif">
              We use cookies for essential site functions, analytics, and marketing. Customize your choices via “Settings”.
            </p>
          </div>
          <div className="flex items-center gap-2 w-full">
            <button
              onClick={rejectNonEssential}
              className="flex-1 rounded-lg border border-copper/30 bg-[#362217] hover:bg-[#452c1e] py-2 px-2 text-[9px] font-bold uppercase tracking-tight text-palm transition whitespace-nowrap text-center focus:outline-none focus:ring-1 focus:ring-turmeric"
            >
              Reject
            </button>
            <button
              onClick={openPreferences}
              className="flex-1 rounded-lg border border-copper/30 bg-[#362217] hover:bg-[#452c1e] py-2 px-2 text-[9px] font-bold uppercase tracking-tight text-palm transition whitespace-nowrap text-center focus:outline-none focus:ring-1 focus:ring-turmeric"
            >
              Settings
            </button>
            <button
              onClick={acceptAll}
              className="flex-1 rounded-lg bg-terracotta hover:bg-terracotta/90 py-2 px-2 text-[9px] font-bold uppercase tracking-tight text-white shadow-md transition whitespace-nowrap text-center focus:outline-none focus:ring-1 focus:ring-terracotta"
            >
              Accept All
            </button>
          </div>
          <div className="consent-banner-footer flex items-center gap-1.5 text-[9px] text-taupe/80 font-serif">
            <Gear size={11} className="text-turmeric" />
            <span>Strictly necessary cookies are always active.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
