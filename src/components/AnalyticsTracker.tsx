"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const initAnalytics = () => {
      const consent = localStorage.getItem("kairali_consent");
      if (consent === "accepted") {
        // Mock analytics registration
        console.log(`[Analytics] Tracked pageview: ${pathname}`);
      }
    };

    // Run on initial load
    initAnalytics();

    // Listen for consent changes
    window.addEventListener("cookie_consent_accepted", initAnalytics);
    return () => window.removeEventListener("cookie_consent_accepted", initAnalytics);
  }, [pathname]);

  return null;
}
