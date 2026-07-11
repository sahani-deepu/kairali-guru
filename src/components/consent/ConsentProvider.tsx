"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import ConsentBanner from "./ConsentBanner";
import ConsentPreferences from "./ConsentPreferences";
import { buildConsentPreferences } from "@/lib/consent/config";
import { getStoredConsent, isConsentVersionOutdated, saveConsent } from "@/lib/consent/storage";
import { dispatchConsentUpdated, dispatchConsentAccepted, dispatchConsentDeclined } from "@/lib/consent/events";
import type { ConsentPreferences as ConsentPreferencesType } from "@/lib/consent/types";

interface ConsentContextValue {
  consent: ConsentPreferencesType | null;
  isBannerVisible: boolean;
  isPreferencesOpen: boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (preferences: Partial<Omit<ConsentPreferencesType, "version" | "timestamp" | "necessary">>) => void;
}

const ConsentContext = createContext<ConsentContextValue | undefined>(undefined);

export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error("useConsent must be used within ConsentProvider");
  }
  return context;
}

export default function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentPreferencesType | null>(null);
  const [isBannerVisible, setBannerVisible] = useState(false);
  const [isPreferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      setBannerVisible(true);
      return;
    }

    if (isConsentVersionOutdated(stored)) {
      setConsent(stored);
      setBannerVisible(true);
      return;
    }

    setConsent(stored);
  }, []);

  useEffect(() => {
    if (isPreferencesOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isPreferencesOpen]);

  const persistConsent = (updated: ConsentPreferencesType) => {
    saveConsent(updated);
    setConsent(updated);
    setBannerVisible(false);
    setPreferencesOpen(false);
    dispatchConsentUpdated(updated);
  };

  const acceptAll = () => {
    const nextConsent = buildConsentPreferences({ functional: true, analytics: true, marketing: true });
    persistConsent(nextConsent);
    dispatchConsentAccepted();
  };

  const rejectNonEssential = () => {
    const nextConsent = buildConsentPreferences({ functional: false, analytics: false, marketing: false });
    persistConsent(nextConsent);
    dispatchConsentDeclined();
  };

  const savePreferences = (preferences: Partial<Omit<ConsentPreferencesType, "version" | "timestamp" | "necessary">>) => {
    const nextConsent = buildConsentPreferences(preferences);
    persistConsent(nextConsent);
    if (nextConsent.analytics) {
      dispatchConsentAccepted();
    } else {
      dispatchConsentDeclined();
    }
  };

  const openPreferences = () => {
    setBannerVisible(false);
    setPreferencesOpen(true);
  };

  const closePreferences = () => {
    setPreferencesOpen(false);
    if (!consent) {
      setBannerVisible(true);
    }
  };

  return (
    <ConsentContext.Provider
      value={{
        consent,
        isBannerVisible,
        isPreferencesOpen,
        openPreferences,
        closePreferences,
        acceptAll,
        rejectNonEssential,
        savePreferences,
      }}
    >
      {children}
      <ConsentBanner />
      <ConsentPreferences />
    </ConsentContext.Provider>
  );
}
