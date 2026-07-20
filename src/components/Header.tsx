import Image from "next/image";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileNavigation from "./MobileNavigation";
import { CaretDown, Phone, Envelope, User } from "@phosphor-icons/react/dist/ssr";
import { CONTACT_INFO } from "@/lib/config";

export default async function Header() {
  const t = await getTranslations("Navigation");

  return (
    <div className="w-full flex flex-col">
      {/* 1. Top Utility Bar */}
      <div className="w-full bg-[#140C08] text-paper-on-dark border-b border-copper/15 py-2 px-6 sm:px-8 text-xs font-medium font-sans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Support Brief */}
          <div className="flex items-center gap-6 text-paper-on-dark/80">
            <span className="hidden md:inline-block italic text-turmeric">International Ayurveda Training</span>
            <a href={`tel:${CONTACT_INFO.admissions.phone.replace(/[^\d+]/g, "")}`} className="flex items-center gap-1.5 hover:text-turmeric transition-colors">
              <Phone size={12} />
              <span>{CONTACT_INFO.admissions.phone}</span>
            </a>
            <a href={`mailto:${CONTACT_INFO.corporate.email}`} className="flex items-center gap-1.5 hover:text-turmeric transition-colors">
              <Envelope size={12} />
              <span>{CONTACT_INFO.corporate.email}</span>
            </a>
          </div>

          {/* Student login and switchers */}
          <div className="flex items-center gap-4">
            <Link
              href="/student-hub"
              className="flex items-center gap-1 hover:text-turmeric transition-colors text-paper-on-dark/90 font-semibold"
            >
              <User size={12} />
              <span>Student Portal</span>
            </Link>
            <span className="text-paper-on-dark/30">|</span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <header className="sticky top-0 z-30 w-full bg-sand border-b border-copper/15 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex justify-between items-center">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group text-start">
            <Image
              src="/images/ayurveda-guru-logo.svg"
              alt="Kairali Ayurveda logo"
              width={60}
              height={60}
              className="object-contain h-[60px] w-auto brightness-0 invert opacity-90 transition-opacity hover:opacity-100"
              priority
            />
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-palm group-hover:text-laterite transition-colors whitespace-nowrap">
                Kairali Guru
              </span>
              <span className="text-[9px] font-mono tracking-[0.2em] text-laterite uppercase -mt-1 font-bold hidden sm:block">
                Lineage since 1908
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Mega-Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {/* Courses Mega-menu Trigger */}
            <div className="relative group/menu py-4">
              <button className="flex items-center gap-1.5 text-bark hover:text-laterite transition-colors font-semibold cursor-pointer">
                <span>{t("courses")}</span>
                <CaretDown size={14} className="text-taupe" />
              </button>

              {/* Pure CSS Megamenu container */}
              <div className="absolute top-full start-0 mt-1 w-[680px] bg-sand-2 border border-copper/20 rounded-3xl p-6 shadow-2xl opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-300 z-50 grid grid-cols-12 gap-6 text-start">
                {/* Course sections */}
                <div className="col-span-8 grid grid-cols-2 gap-6 border-e border-copper/15 pe-6">
                  <div>
                    <h5 className="text-[10px] font-bold text-laterite uppercase tracking-widest mb-3">Foundations</h5>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/courses/one-day-ayurveda-workshop" className="block group/link">
                          <span className="text-xs text-palm font-bold hover:text-laterite transition-colors block">One-Day Workshop</span>
                          <span className="text-[10px] text-taupe block font-serif mt-0.5 leading-snug">Introductory Ayurveda & herbs.</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/courses/three-day-ayurveda-certificate" className="block group/link">
                          <span className="text-xs text-palm font-bold hover:text-laterite transition-colors block">Three-Day Certificate</span>
                          <span className="text-[10px] text-taupe block font-serif mt-0.5 leading-snug">Syllabus overview and basic detox.</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-[10px] font-bold text-laterite uppercase tracking-widest mb-3">Professional</h5>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/courses/intensive-ayurveda-training" className="block group/link">
                          <span className="text-xs text-palm font-bold hover:text-laterite transition-colors block">Intensive Ayurveda (WAP)</span>
                          <span className="text-[10px] text-taupe block font-serif mt-0.5 leading-snug">Hands-on residential certificate.</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/courses/advanced-lifestyle-consultant-therapist" className="block group/link">
                          <span className="text-xs text-palm font-bold hover:text-laterite transition-colors block">Advanced Consultant (AALCT)</span>
                          <span className="text-[10px] text-taupe block font-serif mt-0.5 leading-snug">Clinical practice, 20 Days.</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Mega-menu Featured slot */}
                <div className="col-span-4 bg-sand-2 border border-copper/15 text-palm rounded-2xl p-4 flex flex-col justify-between shadow-sm">
                  <div className="space-y-2">
                    <span className="inline-block bg-terracotta text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      Featured Course
                    </span>
                    <h4 className="font-display font-bold text-sm text-palm leading-snug">
                      Intensive Ayurveda Training
                    </h4>
                    <p className="text-[10px] text-taupe font-serif leading-relaxed">
                      NABH accredited hospital practice in Palakkad, Kerala.
                    </p>
                  </div>
                  <Link
                    href="/courses/intensive-ayurveda-training"
                    className="mt-4 flex items-center gap-1 text-[10px] font-bold text-turmeric hover:text-palm transition-colors"
                  >
                    <span>Admission details</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/locations" className="text-bark hover:text-laterite transition-colors">
              {t("locations")}
            </Link>
            <Link href="/student-hub" className="text-bark hover:text-laterite transition-colors">
              Student Hub
            </Link>
            <Link href="/learn" className="text-bark hover:text-laterite transition-colors">
              Knowledge Centre
            </Link>
            <Link href="/gallery" className="text-bark hover:text-laterite transition-colors">
              Gallery
            </Link>
            <Link href="/about" className="text-bark hover:text-laterite transition-colors">
              {t("about")}
            </Link>
          </nav>

          {/* Action Items */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/enquiry"
              className="bg-terracotta hover:bg-terracotta/90 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs font-semibold tracking-wide shadow-md transition-all whitespace-nowrap"
            >
              {t("enquire")}
            </Link>
            <MobileNavigation />
          </div>
        </div>
      </header>
    </div>
  );
}
