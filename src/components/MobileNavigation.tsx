"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { List, X, CaretRight } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/courses", label: t("courses") },
    { href: "/panchakarma", label: t("panchakarma") },
    { href: "/kerala", label: t("kerala") },
    { href: "/locations", label: t("locations") },
    { href: "/student-hub", label: "Student Hub" },
    { href: "/learn", label: "Knowledge Centre" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: t("about") },
  ];

  return (
    <div className="md:hidden">
      {/* Menu Hamburger Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        className="p-2 text-palm hover:text-turmeric transition-colors rounded-lg focus:outline-none focus:ring-1 focus:ring-copper/40"
      >
        <List size={26} />
      </button>

      {/* Backdrop Overlay (Hidden until clicked) */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* 100vh Mobile Navigation Drawer (Hidden off-screen until clicked) */}
      <div
        className={`fixed inset-y-0 end-0 z-50 w-80 max-w-[85vw] h-[100dvh] h-screen bg-[#1E120C] border-s border-copper/20 p-6 shadow-2xl transition-transform duration-300 ease-out flex flex-col justify-between overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full rtl:-translate-x-full"
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex justify-between items-center pb-6 border-b border-copper/15 mb-6">
            <span className="font-display font-bold text-lg text-palm tracking-tight">Navigation</span>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="p-2 text-palm hover:text-turmeric transition-colors rounded-full bg-[#281A12] border border-copper/20"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1 text-base font-semibold">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 px-3 rounded-xl border-b border-copper/10 hover:bg-[#281A12] hover:text-turmeric transition-all flex items-center justify-between ${
                    isActive ? "text-turmeric font-bold bg-[#281A12]" : "text-palm"
                  }`}
                >
                  <span>{link.label}</span>
                  <CaretRight size={14} className="text-taupe/60" />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer Actions */}
        <div className="pt-6 border-t border-copper/15 space-y-6 mt-6">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-taupe font-mono">
              Change Language
            </span>
            <LanguageSwitcher />
          </div>

          <Link
            href="/enquiry"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-terracotta hover:bg-terracotta/90 text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md block"
          >
            {t("enquire")}
          </Link>
        </div>
      </div>
    </div>
  );
}
