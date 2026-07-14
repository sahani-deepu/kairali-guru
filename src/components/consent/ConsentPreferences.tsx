"use client";

import { X } from "@phosphor-icons/react";
import { useConsent } from "./ConsentProvider";

export default function ConsentPreferences() {
  const { isPreferencesOpen, closePreferences, savePreferences, preferences, setPreferences } = useConsent();

  if (!isPreferencesOpen) return null;

  return (
    <div
      className="consent-preferences consent-pref-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-preferences-title"
    >
      <div className="consent-pref-container w-full max-w-2xl overflow-hidden rounded-[24px] bg-sand-2 p-6 shadow-[0_40px_120px_rgba(14,28,18,0.18)] ring-1 ring-laterite/15">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="consent-pref-title-pre text-[9px] uppercase tracking-[0.25em] text-palm font-bold">Cookie Preferences</p>
            <h2 id="cookie-preferences-title" className="consent-pref-title mt-2 text-2xl font-semibold text-palm">Manage your cookie settings</h2>
          </div>
          <button
            onClick={closePreferences}
            className="rounded-full border border-leaf/40 bg-white p-2.5 text-bark transition hover:bg-leaf/10 focus:outline-none focus:ring-1 focus:ring-palm"
            aria-label="Close cookie preferences"
          >
            <X size={18} />
          </button>
        </div>

        <p className="consent-pref-desc mt-4 text-[11px] leading-5 text-taupe">
          Choose which optional cookies you allow. Strictly necessary cookies are required for the site to function and cannot be disabled.
        </p>

        <div className="mt-6 space-y-4">
          <div className="consent-pref-card rounded-2xl border border-laterite/10 bg-white p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="consent-pref-section-title text-sm font-semibold text-palm">Strictly Necessary</h3>
                <p className="consent-pref-section-desc text-[10px] leading-5 text-taupe">Essential cookies required for basic site operations.</p>
              </div>
              <span className="rounded-full bg-palm/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-palm">Always active</span>
            </div>
          </div>

          <div className="consent-pref-card rounded-2xl border border-laterite/10 bg-white p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="consent-pref-section-title text-sm font-semibold text-palm">Functional</h3>
                <p className="consent-pref-section-desc text-[10px] leading-5 text-taupe">Enhances experience, remembers preferences, and supports performance features.</p>
              </div>
              <label className="inline-flex items-center gap-2 rounded-full border border-leaf/20 bg-sand px-3 py-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  onChange={(event) => setPreferences((prev) => ({ ...prev, functional: event.target.checked }))}
                  className="h-3.5 w-3.5 rounded border-gray-300 text-palm focus:ring-palm"
                />
                <span className="text-xs text-palm font-medium">Allow</span>
              </label>
            </div>
          </div>

          <div className="consent-pref-card rounded-2xl border border-laterite/10 bg-white p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="consent-pref-section-title text-sm font-semibold text-palm">Analytics</h3>
                <p className="consent-pref-section-desc text-[10px] leading-5 text-taupe">Collects anonymous metrics to improve our site and content.</p>
              </div>
              <label className="inline-flex items-center gap-2 rounded-full border border-leaf/20 bg-sand px-3 py-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(event) => setPreferences((prev) => ({ ...prev, analytics: event.target.checked }))}
                  className="h-3.5 w-3.5 rounded border-gray-300 text-palm focus:ring-palm"
                />
                <span className="text-xs text-palm font-medium">Allow</span>
              </label>
            </div>
          </div>

          <div className="consent-pref-card rounded-2xl border border-laterite/10 bg-white p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="consent-pref-section-title text-sm font-semibold text-palm">Marketing</h3>
                <p className="consent-pref-section-desc text-[10px] leading-5 text-taupe">Supports ads and personalised marketing only when allowed.</p>
              </div>
              <label className="inline-flex items-center gap-2 rounded-full border border-leaf/20 bg-sand px-3 py-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(event) => setPreferences((prev) => ({ ...prev, marketing: event.target.checked }))}
                  className="h-3.5 w-3.5 rounded border-gray-300 text-palm focus:ring-palm"
                />
                <span className="text-xs text-palm font-medium">Allow</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-end">
          <button
            onClick={closePreferences}
            className="consent-pref-button-secondary rounded-full border border-laterite/20 bg-white px-4 py-2 text-xs font-semibold text-palm transition hover:bg-sand focus:outline-none focus:ring-1 focus:ring-palm"
          >
            Cancel
          </button>
          <button
            onClick={() => savePreferences(preferences)}
            className="consent-pref-button-primary rounded-full bg-palm px-4 py-2 text-xs font-semibold text-white transition hover:bg-palm-2 focus:outline-none focus:ring-1 focus:ring-palm"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
