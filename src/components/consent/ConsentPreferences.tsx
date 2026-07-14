"use client";

import { X } from "@phosphor-icons/react";
import { useConsent } from "./ConsentProvider";

export default function ConsentPreferences() {
  const { isPreferencesOpen, closePreferences, savePreferences, preferences, setPreferences } = useConsent();

  if (!isPreferencesOpen) return null;

  return (
    <div
      className="consent-preferences fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-preferences-title"
    >
      <div className="w-full max-w-2xl overflow-hidden rounded-[32px] bg-white p-8 shadow-[0_40px_120px_rgba(14,28,18,0.18)] ring-1 ring-copper/15">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-terracotta font-semibold">Cookie Preferences</p>
            <h2 id="cookie-preferences-title" className="mt-3 text-3xl font-semibold text-deep-forest">Manage your cookie settings</h2>
          </div>
          <button
            onClick={closePreferences}
            className="rounded-full border border-sage/40 bg-white p-3 text-charcoal transition hover:bg-sage/10 focus:outline-none focus:ring-2 focus:ring-terracotta"
            aria-label="Close cookie preferences"
          >
            <X size={20} />
          </button>
        </div>

        <p className="mt-5 text-sm leading-7 text-soft-text">
          Choose which optional cookies you allow. Strictly necessary cookies are required for the site to function and cannot be disabled.
        </p>

        <div className="mt-8 space-y-6">
          <div className="rounded-3xl border border-copper/10 bg-white p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-deep-forest">Strictly Necessary</h3>
                <p className="text-sm leading-6 text-soft-text">Essential cookies required for basic site operations.</p>
              </div>
              <span className="rounded-full bg-terracotta/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta">Always active</span>
            </div>
          </div>

          <div className="rounded-3xl border border-copper/10 bg-white p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-deep-forest">Functional</h3>
                <p className="text-sm leading-6 text-soft-text">Enhances experience, remembers preferences, and supports performance features.</p>
              </div>
              <label className="inline-flex items-center gap-3 rounded-full border border-sage/20 bg-sand px-4 py-2">
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  onChange={(event) => setPreferences((prev) => ({ ...prev, functional: event.target.checked }))}
                  className="h-4 w-4 rounded border-gray-300 text-deep-forest focus:ring-terracotta"
                />
                <span className="text-sm text-deep-forest">Allow</span>
              </label>
            </div>
          </div>

          <div className="rounded-3xl border border-copper/10 bg-white p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-deep-forest">Analytics</h3>
                <p className="text-sm leading-6 text-soft-text">Collects anonymous metrics to improve our site and content.</p>
              </div>
              <label className="inline-flex items-center gap-3 rounded-full border border-sage/20 bg-sand px-4 py-2">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(event) => setPreferences((prev) => ({ ...prev, analytics: event.target.checked }))}
                  className="h-4 w-4 rounded border-gray-300 text-deep-forest focus:ring-terracotta"
                />
                <span className="text-sm text-deep-forest">Allow</span>
              </label>
            </div>
          </div>

          <div className="rounded-3xl border border-copper/10 bg-white p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-deep-forest">Marketing</h3>
                <p className="text-sm leading-6 text-soft-text">Supports ads and personalised marketing only when allowed.</p>
              </div>
              <label className="inline-flex items-center gap-3 rounded-full border border-sage/20 bg-sand px-4 py-2">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(event) => setPreferences((prev) => ({ ...prev, marketing: event.target.checked }))}
                  className="h-4 w-4 rounded border-gray-300 text-deep-forest focus:ring-terracotta"
                />
                <span className="text-sm text-deep-forest">Allow</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <button
            onClick={closePreferences}
            className="rounded-full border border-copper/20 bg-white px-5 py-3 text-sm font-semibold text-deep-forest transition hover:bg-sand/80 focus:outline-none focus:ring-2 focus:ring-terracotta"
          >
            Cancel
          </button>
          <button
            onClick={() => savePreferences(preferences)}
            className="rounded-full bg-deep-forest px-5 py-3 text-sm font-semibold text-white transition hover:bg-forest-green focus:outline-none focus:ring-2 focus:ring-terracotta"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
