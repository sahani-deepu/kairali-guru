"use client";

import { useConsent } from "./ConsentProvider";
import { ShieldCheck, Gear } from "@phosphor-icons/react";

export default function ConsentBanner() {
  const { isBannerVisible, acceptAll, rejectNonEssential, openPreferences } = useConsent();

  if (!isBannerVisible) return null;

  return (
    <div
      className="consent-banner consent-banner-container fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-[340px] rounded-xl border border-laterite/20 bg-sand p-3 shadow-[0_12px_36px_rgba(14,28,18,0.1)] text-bark opacity-100"
      role="dialog"
      aria-label="Cookie consent banner"
    >
      <div className="flex items-start gap-2.5">
        <ShieldCheck size={20} className="text-palm mt-0.5 flex-shrink-0" />
        <div className="space-y-2.5 w-full">
          <div>
            <p className="consent-banner-title text-[10px] font-bold uppercase tracking-[0.15em] text-palm">Privacy & Cookies</p>
            <p className="consent-banner-text mt-1 text-[10px] leading-4 text-taupe">
              We use cookies for essential site functions, analytics, and marketing. Customize your choices via “Settings”.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <button
              onClick={rejectNonEssential}
              className="consent-banner-button w-full rounded-full border border-bark/20 bg-white py-1.5 text-[9px] font-bold uppercase tracking-[0.05em] text-bark transition hover:bg-sand focus:outline-none focus:ring-1 focus:ring-palm"
            >
              Reject
            </button>
            <button
              onClick={openPreferences}
              className="consent-banner-button w-full rounded-full border border-bark/20 bg-white py-1.5 text-[9px] font-bold uppercase tracking-[0.05em] text-bark transition hover:bg-sand focus:outline-none focus:ring-1 focus:ring-palm"
            >
              Settings
            </button>
            <button
              onClick={acceptAll}
              className="consent-banner-button w-full rounded-full border border-bark/20 bg-white py-1.5 text-[9px] font-bold uppercase tracking-[0.05em] text-bark transition hover:bg-sand focus:outline-none focus:ring-1 focus:ring-palm"
            >
              Accept All
            </button>
          </div>
          <div className="consent-banner-footer flex items-center gap-1.5 text-[9px] text-taupe">
            <Gear size={11} className="text-taupe" />
            <span>Strictly necessary cookies are always active.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
