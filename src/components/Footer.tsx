import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { InstagramLogo, FacebookLogo, YoutubeLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import CookieSettingsButton from "@/components/consent/CookieSettingsButton";

export default async function Footer() {
  const f = await getTranslations("Footer");
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-palm text-paper-on-dark/85 border-t border-palm-2/50 py-16 px-6 sm:px-8 mt-auto font-sans text-start">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
        
        {/* Column 1: Brand & Socials */}
        <div className="flex flex-col gap-6">
          <div>
            <Link href="/" className="font-display text-2xl font-bold tracking-tight text-paper-on-dark block">
              Kairali Guru
            </Link>
            <span className="text-[10px] uppercase tracking-[0.25em] text-turmeric font-semibold mt-1 block">
              Ayurveda Lineage since 1908
            </span>
          </div>
          <p className="text-xs leading-relaxed text-paper-on-dark/70 max-w-xs font-serif">
            {f("about")}
          </p>
          <div className="flex gap-4 items-center mt-2 text-paper-on-dark/60">
            <a href="https://www.facebook.com/KairaliTheAyurvedicHealingVillage" target="_blank" rel="noopener noreferrer" className="hover:text-turmeric transition-colors" aria-label="Facebook">
              <FacebookLogo size={20} />
            </a>
            <a href="https://www.instagram.com/kairaliayurvedichealingvillage/" target="_blank" rel="noopener noreferrer" className="hover:text-turmeric transition-colors" aria-label="Instagram">
              <InstagramLogo size={20} />
            </a>
            <a href="https://www.youtube.com/@kairaliayurvedagroup" target="_blank" rel="noopener noreferrer" className="hover:text-turmeric transition-colors" aria-label="YouTube">
              <YoutubeLogo size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-turmeric transition-colors" aria-label="LinkedIn">
              <LinkedinLogo size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Programmes & Courses */}
        <div className="flex flex-col gap-4">
          <span className="font-display text-sm text-paper-on-dark font-semibold border-b border-copper/10 pb-1.5 uppercase tracking-wider">
            Programmes & Courses
          </span>
          <ul className="flex flex-col gap-2.5 text-xs text-paper-on-dark/70">
            <li>
              <Link href="/courses" className="hover:text-turmeric transition-colors">Beginner Courses</Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-turmeric transition-colors">Short-Term Courses</Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-turmeric transition-colors">Professional Certification</Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-turmeric transition-colors">Advanced Practitioner Programs</Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-turmeric transition-colors">Course Comparison & Fees</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Student Hub */}
        <div className="flex flex-col gap-4">
          <span className="font-display text-sm text-paper-on-dark font-semibold border-b border-copper/10 pb-1.5 uppercase tracking-wider">
            Student Hub
          </span>
          <ul className="flex flex-col gap-2.5 text-xs text-paper-on-dark/70">
            <li>
              <Link href="/student-hub" className="hover:text-turmeric transition-colors">Student Portal Dashboard</Link>
            </li>
            <li>
              <Link href="/student-hub" className="hover:text-turmeric transition-colors">LMS Login Gateway</Link>
            </li>
            <li>
              <Link href="/student-hub" className="hover:text-turmeric transition-colors">Assignments & Syllabus</Link>
            </li>
            <li>
              <Link href="/student-hub" className="hover:text-turmeric transition-colors">Alumni Network</Link>
            </li>
            <li>
              <Link href="/travel-visa" className="hover:text-turmeric transition-colors">Student Placement Support</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Knowledge Centre */}
        <div className="flex flex-col gap-4">
          <span className="font-display text-sm text-paper-on-dark font-semibold border-b border-copper/10 pb-1.5 uppercase tracking-wider">
            Knowledge Centre
          </span>
          <ul className="flex flex-col gap-2.5 text-xs text-paper-on-dark/70">
            <li>
              <Link href="/learn" className="hover:text-turmeric transition-colors">Ayurveda Blog & Articles</Link>
            </li>
            <li>
              <Link href="/panchakarma" className="hover:text-turmeric transition-colors">Panchakarma Guide</Link>
            </li>
            <li>
              <Link href="/learn" className="hover:text-turmeric transition-colors">Ayurvedic Herbs Glossary</Link>
            </li>
            <li>
              <Link href="/learn" className="hover:text-turmeric transition-colors">Nutrition & Diet Tips</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-turmeric transition-colors">Videos & Media resources</Link>
            </li>
          </ul>
        </div>

        {/* Column 5: About & Resources */}
        <div className="flex flex-col gap-4">
          <span className="font-display text-sm text-paper-on-dark font-semibold border-b border-copper/10 pb-1.5 uppercase tracking-wider">
            About & Resources
          </span>
          <ul className="flex flex-col gap-2.5 text-xs text-paper-on-dark/70">
            <li>
              <Link href="/about" className="hover:text-turmeric transition-colors">Our Story & History</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-turmeric transition-colors">Our Faculty & Experts</Link>
            </li>
            <li>
              <Link href="/locations" className="hover:text-turmeric transition-colors">Campus Infrastructure</Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-turmeric transition-colors">Frequently Asked Questions</Link>
            </li>
            <li>
              <Link href="/enquiry" className="hover:text-turmeric transition-colors">Career Opportunities</Link>
            </li>
          </ul>
        </div>

      </div>

      <div className="h-[1px] w-full bg-copper/20 mb-8" />

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 mb-8 text-xs text-paper-on-dark/70 font-sans border-b border-copper/10 pb-8">
        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2.5">
          <Link href="/about/csr" className="hover:text-turmeric transition-colors">CSR</Link>
          <span className="text-paper-on-dark/30">|</span>
          <Link href="/about/careers" className="hover:text-turmeric transition-colors">Careers</Link>
          <span className="text-paper-on-dark/30">|</span>
          <Link href="/faq" className="hover:text-turmeric transition-colors">FAQ&apos;s &amp; Downloads</Link>
          <span className="text-paper-on-dark/30">|</span>
          <Link href="/terms" className="hover:text-turmeric transition-colors">Terms and Conditions</Link>
          <span className="text-paper-on-dark/30">|</span>
          <Link href="/privacy" className="hover:text-turmeric transition-colors">Privacy Policy</Link>
          <span className="text-paper-on-dark/30">|</span>
          <Link href="/disclaimer" className="hover:text-turmeric transition-colors">Disclaimer</Link>
          <span className="text-paper-on-dark/30">|</span>
          <Link href="/refund" className="hover:text-turmeric transition-colors">Cancellation & Refund Policy</Link>
          <span className="text-paper-on-dark/30">|</span>
          <Link href="/learn" className="hover:text-turmeric transition-colors">Blog</Link>
          <span className="text-paper-on-dark/30">|</span>
          <Link href="/sitemap" className="hover:text-turmeric transition-colors">Sitemap</Link>
          <span className="text-paper-on-dark/30">|</span>
          <a href="/sitemap.xml" className="hover:text-turmeric transition-colors">Sitemap XML</a>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2.5">
          <Link href="/cookie-policy" className="hover:text-turmeric transition-colors">Cookie Policy</Link>
          <span className="text-paper-on-dark/30">|</span>
          <Link href="/privacy" className="hover:text-turmeric transition-colors">Privacy Statement</Link>
          <span className="text-paper-on-dark/30">|</span>
          <CookieSettingsButton />
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-paper-on-dark/50">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <span>
            © {currentYear} Kairali Guru. All rights reserved. Lineage established 1908.
          </span>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
          <Link href="/accessibility" className="hover:text-turmeric transition-colors">Accessibility Statement</Link>
        </div>
      </div>
    </footer>
  );
}
