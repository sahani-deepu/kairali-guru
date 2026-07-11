import { ConsentPreferences } from "./types";

export const CONSENT_UPDATED_EVENT = "kairali_consent_updated";
export const CONSENT_ACCEPTED_EVENT = "kairali_consent_accepted";
export const CONSENT_DECLINED_EVENT = "kairali_consent_declined";

export function dispatchConsentUpdated(consent: ConsentPreferences) {
  window.dispatchEvent(new CustomEvent(CONSENT_UPDATED_EVENT, { detail: { consent } }));
}

export function dispatchConsentAccepted() {
  window.dispatchEvent(new Event(CONSENT_ACCEPTED_EVENT));
}

export function dispatchConsentDeclined() {
  window.dispatchEvent(new Event(CONSENT_DECLINED_EVENT));
}
