"use client";

import { useEffect } from "react";
import Link from "next/link";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global crash boundary triggered:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F9F6F0] flex items-center justify-center p-6 font-sans antialiased text-[#2C2421]">
        <div className="max-w-md w-full bg-[#F4EFE6] border border-[#E4DCD0] rounded-3xl p-8 shadow-xl text-center">
          <div className="w-16 h-16 rounded-full bg-[#5C4D3C]/5 flex items-center justify-center text-[#5C4D3C] border border-[#5C4D3C]/10 mb-6 mx-auto">
            <svg
              className="w-8 h-8 text-[#A66E4E]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <h1 className="font-serif text-2xl font-bold text-[#1C352D] mb-3">System Offline</h1>
          <p className="text-sm text-[#70645E] mb-6 leading-relaxed">
            The platform encountered an unexpected error. Our systems have logged this incident and our technical team is resolving it.
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => reset()}
              className="bg-[#1C352D] hover:bg-[#152822] text-[#F9F6F0] font-semibold py-3 px-6 rounded-full text-xs transition-all shadow-md cursor-pointer"
            >
              Reload Page
            </button>
            <Link
              href="/"
              className="border border-[#A66E4E] hover:bg-[#EAE2D5] text-[#2C2421] font-semibold py-3 px-6 rounded-full text-xs transition-all text-center block cursor-pointer"
            >
              Return Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
