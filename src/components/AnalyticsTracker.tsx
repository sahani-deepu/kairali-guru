"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { CONSENT_ACCEPTED_EVENT, CONSENT_UPDATED_EVENT } from "@/lib/consent/events";
import { getStoredConsent } from "@/lib/consent/storage";

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const initAnalytics = () => {
      const consent = getStoredConsent();
      if (consent?.analytics) {
        console.log(`[Analytics] Tracked pageview: ${pathname}`);
      }
    };

    initAnalytics();
    window.addEventListener(CONSENT_ACCEPTED_EVENT, initAnalytics);
    window.addEventListener(CONSENT_UPDATED_EVENT, initAnalytics);
    return () => {
      window.removeEventListener(CONSENT_ACCEPTED_EVENT, initAnalytics);
      window.removeEventListener(CONSENT_UPDATED_EVENT, initAnalytics);
    };
  }, [pathname]);

  return null;
}
