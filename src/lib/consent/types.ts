export type ConsentCategory = "necessary" | "functional" | "analytics" | "marketing";

export interface ConsentPreferences {
  version: string;
  timestamp: string;
  necessary: true;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

export const CONSENT_STORAGE_KEY = "kairali_consent";
