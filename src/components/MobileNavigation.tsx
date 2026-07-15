"use client";

import { useState } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { List, X } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  const navLinks = [
    { href: "/courses", label: t("courses") },
    { href: "/panchakarma", label: t("panchakarma") },
    { href: "/kerala", label: t("kerala") },
    { href: "/locations", label: t("locations") },
    { href: "/about", label: t("about") },
  ];

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className="p-2 text-palm hover:text-laterite transition-colors"
      >
        <List size={26} />
      </button>

      {/* Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-palm/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer Body */}
      <div
        className={`fixed top-0 bottom-0 z-50 w-72 max-w-[80vw] border-s p-6 shadow-2xl transition-transform duration-300 ease-editorial ${
          isOpen ? "translate-x-0" : "translate-x-full rtl:-translate-x-full"
        } end-0`}
        style={{ backgroundColor: "#ffffff", borderColor: "#EFE7D6" }}
      >
        <div className="flex justify-between items-center mb-8">
          <span className="font-display font-bold text-lg text-palm">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="p-2 text-palm hover:text-laterite transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-5 text-base font-semibold">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-2 border-b border-sand-2 hover:text-laterite transition-colors ${
                  isActive ? "text-laterite" : "text-bark"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          
          <div className="mt-8 pt-6 border-t border-sand-2 flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-taupe">
              Change Language
            </span>
            <LanguageSwitcher />
          </div>

          <Link
            href="/enquiry"
            onClick={() => setIsOpen(false)}
            className="mt-6 w-full text-center bg-palm hover:bg-palm-2 text-paper-on-dark py-3 rounded-full text-sm font-semibold transition-all shadow-md"
          >
            {t("enquire")}
          </Link>
        </nav>
      </div>
    </div>
  );
}
