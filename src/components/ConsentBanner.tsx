"use client";

import { useEffect, useState } from "react";
import { ShieldCheck } from "@phosphor-icons/react";

export default function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if consent has already been given or declined
    const consent = localStorage.getItem("kairali_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("kairali_consent", "accepted");
    setShowBanner(false);
    // Trigger any analytics init here
    window.dispatchEvent(new Event("cookie_consent_accepted"));
  };

  const handleDecline = () => {
    localStorage.setItem("kairali_consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 end-6 max-w-sm w-[calc(100vw-2rem)] md:w-96 z-40 bg-sand border border-sand-2 rounded-2xl shadow-xl p-5 animate-in fade-in slide-in-from-bottom-6 duration-300">
      <div className="flex gap-3 items-start">
        <ShieldCheck size={28} className="text-laterite shrink-0 mt-0.5" />
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-palm mb-1">Privacy & Cookies</h4>
          <p className="text-xs text-taupe leading-relaxed mb-4">
            We use cookies to enhance your experience, analyze site usage, and support our admissions support. You can choose to accept or decline.
          </p>
          <div className="flex gap-2 justify-end">
            <button
              onClick={handleDecline}
              className="text-xs text-taupe hover:text-bark px-3 py-1.5 rounded-md hover:bg-sand-2 transition-colors font-medium"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="text-xs bg-palm hover:bg-palm-2 text-paper-on-dark px-4 py-1.5 rounded-full transition-colors font-semibold"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
