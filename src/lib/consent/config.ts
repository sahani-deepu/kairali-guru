import { ConsentPreferences } from "./types";

export const currentConsentVersion = "1.0";

export function buildConsentPreferences(
  overrides: Partial<Omit<ConsentPreferences, "version" | "timestamp" | "necessary">> = {}
): ConsentPreferences {
  return {
    version: currentConsentVersion,
    timestamp: new Date().toISOString(),
    necessary: true,
    functional: overrides.functional ?? false,
    analytics: overrides.analytics ?? false,
    marketing: overrides.marketing ?? false,
  };
}
