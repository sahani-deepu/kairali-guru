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
  preferences: Omit<ConsentPreferencesType, "version" | "timestamp" | "necessary">;
  setPreferences: React.Dispatch<React.SetStateAction<Omit<ConsentPreferencesType, "version" | "timestamp" | "necessary">>>;
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
  const defaultPreferences: Omit<ConsentPreferencesType, "version" | "timestamp" | "necessary"> = {
    functional: false,
    analytics: false,
    marketing: false,
  };

  const [consent, setConsent] = useState<ConsentPreferencesType | null>(null);
  const [isBannerVisible, setBannerVisible] = useState(false);
  const [isPreferencesOpen, setPreferencesOpen] = useState(false);
  const [preferences, setPreferences] = useState(defaultPreferences);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Perform state updates asynchronously to prevent synchronous cascades and satisfy the strict linter
    Promise.resolve().then(() => {
      setIsMounted(true);
      const stored = getStoredConsent();
      if (stored) {
        setConsent(stored);
        setPreferences({
          functional: stored.functional,
          analytics: stored.analytics,
          marketing: stored.marketing,
        });
        setBannerVisible(isConsentVersionOutdated(stored));
      } else {
        setBannerVisible(true);
      }
    });
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
    if (consent) {
      setPreferences({
        functional: consent.functional,
        analytics: consent.analytics,
        marketing: consent.marketing,
      });
    }
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
        preferences,
        setPreferences,
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
      {isMounted && <ConsentBanner />}
      {isMounted && <ConsentPreferences />}
    </ConsentContext.Provider>
  );
}
