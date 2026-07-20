"use client";

import { Link } from "@/i18n/routing";
import { Sparkle } from "@phosphor-icons/react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-sand px-6 py-24 font-sans text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-palm/5 flex items-center justify-center text-palm border border-palm/10 mx-auto">
          <Sparkle size={32} className="text-laterite animate-pulse" />
        </div>
        
        <div className="space-y-2">
          <span className="font-mono text-[10px] text-laterite font-bold uppercase tracking-[0.2em] block">
            Error 404
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-palm leading-tight tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-taupe leading-relaxed font-serif max-w-sm mx-auto">
            The study path or campus brochure page you requested does not exist or has been shifted within our database.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-block bg-terracotta hover:bg-terracotta/90 text-white font-semibold px-6 py-3 rounded-full text-xs transition-all shadow-md"
          >
            Return to Academy Home
          </Link>
        </div>
      </div>
    </main>
  );
}
