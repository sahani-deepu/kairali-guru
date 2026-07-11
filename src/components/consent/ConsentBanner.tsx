"use client";

import { useConsent } from "./ConsentProvider";
import { ShieldCheck, Gear } from "@phosphor-icons/react";

export default function ConsentBanner() {
  const { isBannerVisible, acceptAll, rejectNonEssential, openPreferences } = useConsent();

  if (!isBannerVisible) return null;

  return (
    <div
      className="fixed bottom-6 end-6 z-50 w-[calc(100vw-2rem)] max-w-lg rounded-3xl border border-copper/20 bg-warm-ivory p-6 shadow-[0_30px_80px_rgba(14,28,18,0.16)] text-charcoal"
      role="dialog"
      aria-label="Cookie consent banner"
    >
      <div className="flex items-start gap-4">
        <ShieldCheck size={28} className="text-terracotta mt-1" />
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-deep-forest">Privacy & Cookies</p>
            <p className="mt-3 text-xs leading-6 text-soft-text">
              We use cookies for essential site functions, analytics, and marketing only with your choice. Select “Manage Preferences” to set each category.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={rejectNonEssential}
              className="rounded-full border border-charcoal/15 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal transition hover:border-charcoal/30 focus:outline-none focus:ring-2 focus:ring-terracotta"
            >
              Reject Non-Essential
            </button>
            <button
              onClick={openPreferences}
              className="rounded-full border border-terracotta text-terracotta bg-transparent px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-terracotta/10 focus:outline-none focus:ring-2 focus:ring-terracotta"
            >
              Manage Preferences
            </button>
            <button
              onClick={acceptAll}
              className="rounded-full bg-deep-forest px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm transition hover:bg-forest-green focus:outline-none focus:ring-2 focus:ring-terracotta"
            >
              Accept All
            </button>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-soft-text">
            <Gear size={14} />
            <span>Strictly necessary cookies are always active.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
