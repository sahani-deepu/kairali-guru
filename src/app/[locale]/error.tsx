"use client";

import { useEffect } from "react";
import { Link } from "@/i18n/routing";
import { Warning } from "@phosphor-icons/react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Hydration or server error:", error);
  }, [error]);

  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-sand px-6 py-24 font-sans text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-laterite/5 flex items-center justify-center text-laterite border border-laterite/10 mx-auto">
          <Warning size={32} className="text-laterite" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-[10px] text-laterite font-bold uppercase tracking-[0.2em] block">
            Error 500
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-palm leading-tight tracking-tight">
            System Error Occurred
          </h1>
          <p className="text-sm text-taupe leading-relaxed font-serif max-w-sm mx-auto">
            An unexpected error occurred during database access or server rendering. Let&apos;s try reloading the section.
          </p>
        </div>

        <div className="flex gap-4 justify-center items-center pt-4">
          <button
            onClick={() => reset()}
            className="bg-palm hover:bg-palm-2 text-paper-on-dark font-semibold px-6 py-3 rounded-full text-xs transition-all shadow-md"
          >
            Retry Connection
          </button>
          <Link
            href="/"
            className="border border-copper text-bark hover:bg-sand-2 px-6 py-3 rounded-full text-xs font-semibold transition-all"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
