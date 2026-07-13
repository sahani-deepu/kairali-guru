import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Breadcrumbs from "@/components/Breadcrumbs";
import { TreeStructure, ArrowRight, Monitor, GraduationCap, MapPin, BookOpen, UserGear, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function SitemapPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const breadcrumbItems = [
    { label: "Sitemap" }
  ];

  return (
    <main className="min-h-screen bg-sand py-12 px-6 sm:px-8 font-sans">
      <div className="max-w-6xl mx-auto text-start">
        <Breadcrumbs items={breadcrumbItems} locale={locale} />

        <div className="text-start max-w-3xl mb-12 border-b border-copper/10 pb-6 mt-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-laterite font-bold flex items-center gap-1.5 mb-2">
            <TreeStructure size={14} className="text-laterite" />
            <span>Visual Directory</span>
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-4">
            Website Sitemap Flowchart
          </h1>
          <p className="text-sm text-taupe leading-relaxed font-serif">
            Browse the complete hierarchical structure of Kairali Guru. Click on any node in the flowchart below to navigate directly to that section of the platform.
          </p>
        </div>

        {/* Visual Flowchart Flow */}
        <div className="flex flex-col items-center">
          
          {/* Root Level: Home */}
          <div className="flex flex-col items-center mb-8 relative">
            <div className="bg-palm text-paper-on-dark px-8 py-4 rounded-2xl shadow-lg border border-palm-2 text-center group hover:scale-[1.02] transition-all duration-300">
              <span className="text-[9px] uppercase tracking-widest text-turmeric font-bold block mb-1">Root Entry</span>
              <Link href="/" className="font-display font-extrabold text-base sm:text-lg hover:underline flex items-center gap-2 justify-center">
                <span>Kairali Guru Homepage</span>
                <ArrowRight size={14} className="text-turmeric" />
              </Link>
              <span className="text-[10px] text-paper-on-dark/65 block mt-1">kairali.guru /</span>
            </div>
            
            {/* Trunk Line */}
            <div className="w-[2px] h-8 bg-copper/30 mt-2" />
          </div>

          {/* Core Pillars Level */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 w-full relative">
            
            {/* Column 1: Academic Programs */}
            <div className="flex flex-col items-center">
              <div className="bg-sand-2/50 border border-sand-2 text-palm font-bold px-4 py-3 rounded-xl text-center w-full shadow-sm flex items-center justify-center gap-2 mb-6 min-h-[56px] hover:border-laterite/40 transition-colors">
                <GraduationCap size={18} className="text-laterite shrink-0" />
                <span className="text-xs uppercase tracking-wider">1. Academic Catalog</span>
              </div>
              
              <div className="w-full flex flex-col pl-4 border-l-2 border-copper/20 space-y-4">
                <div className="relative pl-4">
                  <div className="absolute left-0 top-3 w-4 h-[2px] bg-copper/20" />
                  <div className="bg-sand border border-sand-2 rounded-xl p-3 shadow-xs hover:border-laterite transition-all">
                    <Link href="/courses" className="text-xs font-bold text-palm hover:text-laterite block mb-1">Courses Directory</Link>
                    <span className="text-[10px] text-taupe block font-serif">Main index of all available study programs.</span>
                  </div>
                </div>

                <div className="relative pl-4">
                  <div className="absolute left-0 top-3 w-4 h-[2px] bg-copper/20" />
                  <div className="bg-sand border border-sand-2 rounded-xl p-3 shadow-xs hover:border-laterite transition-all">
                    <Link href="/courses/one-day-ayurveda-workshop" className="text-xs font-semibold text-palm hover:text-laterite block">One-Day Workshop</Link>
                    <span className="text-[9px] text-taupe block font-serif mt-0.5">Introductory foundation workshop.</span>
                  </div>
                </div>

                <div className="relative pl-4">
                  <div className="absolute left-0 top-3 w-4 h-[2px] bg-copper/20" />
                  <div className="bg-sand border border-sand-2 rounded-xl p-3 shadow-xs hover:border-laterite transition-all">
                    <Link href="/courses/three-day-ayurveda-certificate" className="text-xs font-semibold text-palm hover:text-laterite block">Three-Day Certificate</Link>
                    <span className="text-[9px] text-taupe block font-serif mt-0.5">Short-term certificate training.</span>
                  </div>
                </div>

                <div className="relative pl-4">
                  <div className="absolute left-0 top-3 w-4 h-[2px] bg-copper/20" />
                  <div className="bg-sand border border-sand-2 rounded-xl p-3 shadow-xs hover:border-laterite transition-all">
                    <Link href="/courses/intensive-ayurveda-training" className="text-xs font-semibold text-palm hover:text-laterite block">Intensive 5-Day WAP</Link>
                    <span className="text-[9px] text-taupe block font-serif mt-0.5">Hands-on core therapies certification.</span>
                  </div>
                </div>

                <div className="relative pl-4">
                  <div className="absolute left-0 top-3 w-4 h-[2px] bg-copper/20" />
                  <div className="bg-sand border border-sand-2 rounded-xl p-3 shadow-xs hover:border-laterite transition-all">
                    <Link href="/courses/level-one-advanced-ayurveda-training" className="text-xs font-semibold text-palm hover:text-laterite block">Level 1 Professional</Link>
                    <span className="text-[9px] text-taupe block font-serif mt-0.5">10-Day AATP-1 advance training.</span>
                  </div>
                </div>

                <div className="relative pl-4">
                  <div className="absolute left-0 top-3 w-4 h-[2px] bg-copper/20" />
                  <div className="bg-sand border border-sand-2 rounded-xl p-3 shadow-xs hover:border-laterite transition-all">
                    <Link href="/courses/advanced-lifestyle-consultant-therapist" className="text-xs font-semibold text-palm hover:text-laterite block">Advanced AALCT</Link>
                    <span className="text-[9px] text-taupe block font-serif mt-0.5">20-Day complete practitioner track.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Campus Locations */}
            <div className="flex flex-col items-center">
              <div className="bg-sand-2/50 border border-sand-2 text-palm font-bold px-4 py-3 rounded-xl text-center w-full shadow-sm flex items-center justify-center gap-2 mb-6 min-h-[56px] hover:border-laterite/40 transition-colors">
                <MapPin size={18} className="text-laterite shrink-0" />
                <span className="text-xs uppercase tracking-wider">2. Locations</span>
              </div>

              <div className="w-full flex flex-col pl-4 border-l-2 border-copper/20 space-y-4">
                <div className="relative pl-4">
                  <div className="absolute left-0 top-3 w-4 h-[2px] bg-copper/20" />
                  <div className="bg-sand border border-sand-2 rounded-xl p-3 shadow-xs hover:border-laterite transition-all">
                    <Link href="/locations" className="text-xs font-bold text-palm hover:text-laterite block mb-1">Campus Hub</Link>
                    <span className="text-[10px] text-taupe block font-serif">Overview of study centers & accommodations.</span>
                  </div>
                </div>

                <div className="relative pl-4">
                  <div className="absolute left-0 top-3 w-4 h-[2px] bg-copper/20" />
                  <div className="bg-sand border border-sand-2 rounded-xl p-3 shadow-xs hover:border-laterite transition-all">
                    <Link href="/locations/kerala" className="text-xs font-semibold text-palm hover:text-laterite block">Kerala Campus</Link>
                    <span className="text-[9px] text-taupe block font-serif mt-0.5">NABH-accredited healing village details & map.</span>
                  </div>
                </div>

                <div className="relative pl-4">
                  <div className="absolute left-0 top-3 w-4 h-[2px] bg-copper/20" />
                  <div className="bg-sand border border-sand-2 rounded-xl p-3 shadow-xs hover:border-laterite transition-all">
                    <Link href="/locations/delhi" className="text-xs font-semibold text-palm hover:text-laterite block">Delhi Centre</Link>
                    <span className="text-[9px] text-taupe block font-serif mt-0.5">Mehrauli non-residential center & directions.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Student Hub */}
            <div className="flex flex-col items-center">
              <div className="bg-sand-2/50 border border-sand-2 text-palm font-bold px-4 py-3 rounded-xl text-center w-full shadow-sm flex items-center justify-center gap-2 mb-6 min-h-[56px] hover:border-laterite/40 transition-colors">
                <UserGear size={18} className="text-laterite shrink-0" />
                <span className="text-xs uppercase tracking-wider">3. Student Portal</span>
              </div>

              <div className="w-full flex flex-col pl-4 border-l-2 border-copper/20 space-y-4">
                <div className="relative pl-4">
                  <div className="absolute left-0 top-3 w-4 h-[2px] bg-copper/20" />
                  <div className="bg-sand border border-sand-2 rounded-xl p-3 shadow-xs hover:border-laterite transition-all">
                    <Link href="/student-hub" className="text-xs font-bold text-palm hover:text-laterite block mb-1">Student Hub</Link>
                    <span className="text-[10px] text-taupe block font-serif">LMS Portal entry, resources, and credentials.</span>
                  </div>
                </div>

                <div className="relative pl-4">
                  <div className="absolute left-0 top-3 w-4 h-[2px] bg-copper/20" />
                  <div className="bg-sand border border-sand-2 rounded-xl p-3 shadow-xs hover:border-laterite transition-all">
                    <Link href="/travel-visa" className="text-xs font-semibold text-palm hover:text-laterite block">Travel & Visa Info</Link>
                    <span className="text-[9px] text-taupe block font-serif mt-0.5">International student documentation & guidelines.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Knowledge & Media */}
            <div className="flex flex-col items-center">
              <div className="bg-sand-2/50 border border-sand-2 text-palm font-bold px-4 py-3 rounded-xl text-center w-full shadow-sm flex items-center justify-center gap-2 mb-6 min-h-[56px] hover:border-laterite/40 transition-colors">
                <BookOpen size={18} className="text-laterite shrink-0" />
                <span className="text-xs uppercase tracking-wider">4. Resources</span>
              </div>

              <div className="w-full flex flex-col pl-4 border-l-2 border-copper/20 space-y-4">
                <div className="relative pl-4">
                  <div className="absolute left-0 top-3 w-4 h-[2px] bg-copper/20" />
                  <div className="bg-sand border border-sand-2 rounded-xl p-3 shadow-xs hover:border-laterite transition-all">
                    <Link href="/learn" className="text-xs font-bold text-palm hover:text-laterite block mb-1">Learning Hub</Link>
                    <span className="text-[10px] text-taupe block font-serif">Ayurveda articles, history guides, and dosha theory.</span>
                  </div>
                </div>

                <div className="relative pl-4">
                  <div className="absolute left-0 top-3 w-4 h-[2px] bg-copper/20" />
                  <div className="bg-sand border border-sand-2 rounded-xl p-3 shadow-xs hover:border-laterite transition-all">
                    <Link href="/panchakarma" className="text-xs font-semibold text-palm hover:text-laterite block">Panchakarma Guide</Link>
                    <span className="text-[9px] text-taupe block font-serif mt-0.5">Clinical details of five major detox therapies.</span>
                  </div>
                </div>

                <div className="relative pl-4">
                  <div className="absolute left-0 top-3 w-4 h-[2px] bg-copper/20" />
                  <div className="bg-sand border border-sand-2 rounded-xl p-3 shadow-xs hover:border-laterite transition-all">
                    <Link href="/gallery" className="text-xs font-semibold text-palm hover:text-laterite block">Media Gallery</Link>
                    <span className="text-[9px] text-taupe block font-serif mt-0.5">Photos of healing rooms, retreat villas, and center.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 5: Brand & Compliance */}
            <div className="flex flex-col items-center">
              <div className="bg-sand-2/50 border border-sand-2 text-palm font-bold px-4 py-3 rounded-xl text-center w-full shadow-sm flex items-center justify-center gap-2 mb-6 min-h-[56px] hover:border-laterite/40 transition-colors">
                <ShieldCheck size={18} className="text-laterite shrink-0" />
                <span className="text-xs uppercase tracking-wider">5. Legal & Trust</span>
              </div>

              <div className="w-full flex flex-col pl-4 border-l-2 border-copper/20 space-y-4">
                <div className="relative pl-4">
                  <div className="absolute left-0 top-3 w-4 h-[2px] bg-copper/20" />
                  <div className="bg-sand border border-sand-2 rounded-xl p-3 shadow-xs hover:border-laterite transition-all">
                    <Link href="/about" className="text-xs font-semibold text-palm hover:text-laterite block">About Kairali</Link>
                    <span className="text-[9px] text-taupe block font-serif mt-0.5">Our 118-year lineage and medical team.</span>
                  </div>
                </div>

                <div className="relative pl-4">
                  <div className="absolute left-0 top-3 w-4 h-[2px] bg-copper/20" />
                  <div className="bg-sand border border-sand-2 rounded-xl p-3 shadow-xs hover:border-laterite transition-all">
                    <Link href="/testimonials" className="text-xs font-semibold text-palm hover:text-laterite block">Student Testimonials</Link>
                    <span className="text-[9px] text-taupe block font-serif mt-0.5">Reviews and graduates success records.</span>
                  </div>
                </div>

                <div className="relative pl-4">
                  <div className="absolute left-0 top-3 w-4 h-[2px] bg-copper/20" />
                  <div className="bg-sand border border-sand-2 rounded-xl p-3 shadow-xs hover:border-laterite transition-all">
                    <Link href="/faq" className="text-xs font-semibold text-palm hover:text-laterite block">Admissions FAQ</Link>
                    <span className="text-[9px] text-taupe block font-serif mt-0.5">Answers to common accommodation and class queries.</span>
                  </div>
                </div>

                <div className="relative pl-4">
                  <div className="absolute left-0 top-3 w-4 h-[2px] bg-copper/20" />
                  <div className="bg-sand border border-sand-2 rounded-xl p-3 shadow-xs hover:border-laterite transition-all">
                    <Link href="/privacy" className="text-xs font-semibold text-palm hover:text-laterite block">Privacy Policy</Link>
                    <span className="text-[9px] text-taupe block font-serif mt-0.5">Official data processing statements and cookies.</span>
                  </div>
                </div>

                <div className="relative pl-4">
                  <div className="absolute left-0 top-3 w-4 h-[2px] bg-copper/20" />
                  <div className="bg-sand border border-sand-2 rounded-xl p-3 shadow-xs hover:border-laterite transition-all">
                    <Link href="/terms" className="text-xs font-semibold text-palm hover:text-laterite block">Terms & Conditions</Link>
                    <span className="text-[9px] text-taupe block font-serif mt-0.5">Accreditation guidelines and stay restrictions.</span>
                  </div>
                </div>

                <div className="relative pl-4">
                  <div className="absolute left-0 top-3 w-4 h-[2px] bg-copper/20" />
                  <div className="bg-sand border border-sand-2 rounded-xl p-3 shadow-xs hover:border-laterite transition-all">
                    <Link href="/refund" className="text-xs font-semibold text-palm hover:text-laterite block">Cancellation & Refund</Link>
                    <span className="text-[9px] text-taupe block font-serif mt-0.5">Payment details and cancellation threshold terms.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Global Utility Links Row (Bottom connected) */}
          <div className="w-[2px] h-8 bg-copper/30 mt-8" />
          <div className="bg-palm/5 border border-palm/10 rounded-2xl p-5 w-full max-w-3xl text-center shadow-xs">
            <span className="text-[9px] uppercase tracking-widest text-laterite font-bold block mb-2">Registration & Admissions Funnel</span>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <Link href="/enquiry" className="text-xs font-bold text-palm hover:text-laterite flex items-center gap-1.5">
                <span>1. Submit Admissions Enquiry Form</span>
                <ArrowRight size={12} className="text-laterite" />
              </Link>
              <span className="text-copper/30 hidden sm:inline">|</span>
              <a href="/sitemap.xml" className="text-xs font-bold text-palm hover:text-laterite flex items-center gap-1.5">
                <span>2. Open XML Sitemap (Search Engine indexing)</span>
                <ArrowRight size={12} className="text-laterite" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
