"use client";

import { useConsent } from "./ConsentProvider";

export default function CookieSettingsButton() {
  const { openPreferences } = useConsent();

  return (
    <button
      type="button"
      onClick={openPreferences}
      className="text-xs text-paper-on-dark/70 hover:text-turmeric transition-colors"
    >
      Cookie Settings
    </button>
  );
}
