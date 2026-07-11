import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileNavigation from "./MobileNavigation";
import { CaretDown, Phone, Envelope, User, BookOpen } from "@phosphor-icons/react/dist/ssr";

export default async function Header() {
  const t = await getTranslations("Navigation");

  return (
    <div className="w-full flex flex-col">
      {/* 1. Top Utility Bar */}
      <div className="w-full bg-palm text-paper-on-dark border-b border-palm-2/45 py-2 px-6 sm:px-8 text-xs font-medium font-sans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Support Brief */}
          <div className="flex items-center gap-6 text-paper-on-dark/80">
            <span className="hidden md:inline-block font-serif italic text-turmeric">International Ayurveda Training</span>
            <a href="tel:+919289838797" className="flex items-center gap-1.5 hover:text-turmeric transition-colors">
              <Phone size={12} />
              <span>+91-9289838797</span>
            </a>
            <a href="mailto:info@kairali.com" className="flex items-center gap-1.5 hover:text-turmeric transition-colors">
              <Envelope size={12} />
              <span>info@kairali.com</span>
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
      <header className="sticky top-0 z-30 w-full bg-sand/90 backdrop-blur-md border-b border-sand-2">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex justify-between items-center">
          {/* Brand Logo */}
          <Link href="/" className="flex items-baseline gap-2 group text-start">
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold tracking-tight text-palm group-hover:text-laterite transition-colors">
                Kairali Guru
              </span>
              <span className="text-[9px] font-mono tracking-[0.2em] text-laterite uppercase -mt-1 font-bold">
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
              <div className="absolute top-full start-0 mt-1 w-[680px] bg-sand border border-sand-2 rounded-3xl p-6 shadow-xl opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-300 z-50 grid grid-cols-12 gap-6 text-start">
                {/* Course sections */}
                <div className="col-span-8 grid grid-cols-2 gap-6 border-e border-sand-2 pe-6">
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
                        <Link href="/courses/three-day-ayurveda-foundation-course" className="block group/link">
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
                        <Link href="/courses/advanced-ayurveda-therapist-training-kerala" className="block group/link">
                          <span className="text-xs text-palm font-bold hover:text-laterite transition-colors block">Advanced Consultant (AALCT)</span>
                          <span className="text-[10px] text-taupe block font-serif mt-0.5 leading-snug">Clinical practice, 12 weeks.</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Mega-menu Featured slot */}
                <div className="col-span-4 bg-palm text-paper-on-dark rounded-2xl p-4 flex flex-col justify-between shadow-sm">
                  <div className="space-y-2">
                    <span className="inline-block bg-turmeric text-bark text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      Featured Course
                    </span>
                    <h4 className="font-display font-bold text-sm text-paper-on-dark leading-snug">
                      Intensive Ayurveda Training
                    </h4>
                    <p className="text-[10px] text-paper-on-dark/70 font-serif leading-relaxed">
                      NABH accredited hospital practice in Palakkad, Kerala.
                    </p>
                  </div>
                  <Link
                    href="/courses/intensive-ayurveda-training"
                    className="mt-4 flex items-center gap-1 text-[10px] font-bold text-turmeric hover:text-paper-on-dark transition-colors"
                  >
                    <span>Admission details</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

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
          <div className="flex items-center gap-4">
            <Link
              href="/enquiry"
              className="bg-palm hover:bg-palm-2 text-paper-on-dark px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide shadow-sm hover:shadow transition-all"
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
