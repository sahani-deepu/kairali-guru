import { buildConsentPreferences, currentConsentVersion } from "./config";
import { ConsentPreferences, CONSENT_STORAGE_KEY } from "./types";

export function isConsentPreferences(value: unknown): value is ConsentPreferences {
  if (typeof value !== "object" || value === null) return false;
  const candidate = value as Record<string, unknown>;
  return (
    candidate.version === currentConsentVersion || typeof candidate.version === "string"
  ) &&
    candidate.timestamp !== undefined &&
    candidate.necessary === true &&
    typeof candidate.functional === "boolean" &&
    typeof candidate.analytics === "boolean" &&
    typeof candidate.marketing === "boolean";
}

export function getStoredConsent(): ConsentPreferences | null {
  if (typeof window === "undefined") return null;

  const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);
    if (isConsentPreferences(parsed)) {
      return parsed;
    }
  } catch (error) {
    console.warn("Failed to parse stored consent", error);
  }

  return null;
}

export function saveConsent(consent: ConsentPreferences) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
}

export function clearConsent() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CONSENT_STORAGE_KEY);
}

export function isConsentVersionOutdated(consent: ConsentPreferences) {
  return consent.version !== currentConsentVersion;
}

export function createConsentForVersion(
  fallback: Partial<Omit<ConsentPreferences, "version" | "timestamp" | "necessary">> = {}
): ConsentPreferences {
  return buildConsentPreferences(fallback);
}
