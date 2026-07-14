"use client";

import { useConsent } from "./ConsentProvider";
import { ShieldCheck, Gear } from "@phosphor-icons/react";

export default function ConsentBanner() {
  const { isBannerVisible, acceptAll, rejectNonEssential, openPreferences } = useConsent();

  if (!isBannerVisible) return null;

  return (
    <div
      className="consent-banner fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-[360px] rounded-xl border border-copper/15 bg-white p-3.5 shadow-[0_12px_40px_rgba(14,28,18,0.1)] text-charcoal opacity-100"
      role="dialog"
      aria-label="Cookie consent banner"
    >
      <div className="flex items-start gap-2.5">
        <ShieldCheck size={20} className="text-terracotta mt-0.5 flex-shrink-0" />
        <div className="space-y-2.5 w-full">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-deep-forest">Privacy & Cookies</p>
            <p className="mt-1 text-[10px] leading-4 text-soft-text">
              We use cookies for essential site functions, analytics, and marketing. Customize your choices via “Settings”.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <button
              onClick={rejectNonEssential}
              className="w-full rounded-full border border-charcoal/20 bg-white py-1.5 text-[9px] font-bold uppercase tracking-[0.05em] text-charcoal transition hover:bg-charcoal/5 focus:outline-none focus:ring-1 focus:ring-charcoal"
            >
              Reject
            </button>
            <button
              onClick={openPreferences}
              className="w-full rounded-full border border-charcoal/20 bg-white py-1.5 text-[9px] font-bold uppercase tracking-[0.05em] text-charcoal transition hover:bg-charcoal/5 focus:outline-none focus:ring-1 focus:ring-charcoal"
            >
              Settings
            </button>
            <button
              onClick={acceptAll}
              className="w-full rounded-full border border-charcoal/20 bg-white py-1.5 text-[9px] font-bold uppercase tracking-[0.05em] text-charcoal transition hover:bg-charcoal/5 focus:outline-none focus:ring-1 focus:ring-charcoal"
            >
              Accept All
            </button>
          </div>
          <div className="flex items-center gap-1.5 text-[9px] text-soft-text">
            <Gear size={11} />
            <span>Strictly necessary cookies are always active.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
