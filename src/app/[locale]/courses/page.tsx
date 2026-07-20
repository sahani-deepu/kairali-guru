import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowRight, Clock, Calendar, ShieldCheck, GraduationCap, MapPin, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { courses } from "@/lib/coursesData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ayurveda Training & Certification Catalog",
  description: "Browse our authentic Kerala Ayurveda training programs. Learn from practicing BAMS and MD physicians in Palakkad, Kerala (residential) or Delhi (non-residential).",
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function CoursesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Navigation");
  const h = await getTranslations("Home");
  const c = await getTranslations("Enquiry");
  const cta = await getTranslations("CTAs");


  return (
    <main className="min-h-screen bg-sand/30 py-20 px-6 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Page Header */}
        <div className="text-start max-w-3xl mb-20 border-b border-copper/10 pb-8">
          <span className="text-[10px] uppercase tracking-[0.25em] text-laterite font-bold flex items-center gap-1.5 mb-3">
            <Sparkle size={12} className="text-laterite" />
            <span>Kairali Guru Academic Catalog</span>
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-4">
            Ayurveda Training & Certification Programmes
          </h1>
          <p className="text-sm text-taupe leading-relaxed font-serif">
            Study inside a 118-year clinical lineage in India. Learn from practicing BAMS and MD physicians in Palakkad, Kerala (residential) or Mehrauli, Delhi (non-residential).
          </p>
        </div>

        {/* Dynamic Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {courses.map((course) => {
            const courseTitle = course.title[locale as keyof typeof course.title] || course.title.en;
            const courseDesc = course.desc[locale as keyof typeof course.desc] || course.desc.en;
            const courseLevel = course.level[locale as keyof typeof course.level] || course.level.en;

            return (
              <div
                key={course.code}
                className="bg-sand border border-sand-2 rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
              >
                {/* Image panel with subtle zoom */}
                <div className="aspect-[4/3] bg-sand-2/40 overflow-hidden relative border-b border-sand-2">
                  <img
                    src={`/images/${course.image}`}
                    alt={courseTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 start-4 flex items-center gap-2">
                    <span className="font-mono text-[9px] text-white font-bold bg-terracotta px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {course.code}
                    </span>
                    <span className="font-mono text-[9px] text-[#1E120C] font-bold bg-turmeric px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {courseLevel}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="text-start">
                    <h3 className="font-display text-xl font-bold text-palm mb-3 leading-snug group-hover:text-laterite transition-colors">
                      {courseTitle}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-taupe leading-relaxed mb-6 font-serif">
                      {courseDesc}
                    </p>
                  </div>

                  <div>
                    <div className="grid grid-cols-2 gap-4 border-y border-copper/15 py-4 mb-6 text-start text-xs font-semibold text-palm">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-laterite shrink-0" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-laterite shrink-0" />
                        <span>{course.hours} Lectures</span>
                      </div>
                    </div>

                    <Link
                      href={`/courses/${course.slug}`}
                      className="w-full flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta/90 text-white font-semibold py-3 rounded-xl text-xs transition-all shadow-md group-hover:shadow-lg"
                    >
                      <span>Explore Syllabus</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing disclaimer & details */}
        <div className="bg-sand border border-sand-2 rounded-3xl p-8 text-start max-w-4xl mx-auto mb-20 font-sans shadow-sm">
          <div className="flex gap-4 items-start">
            <ShieldCheck size={28} className="text-laterite shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display font-bold text-palm text-lg mb-2">Authoritative Booking Conditions</h4>
              <ul className="list-disc pl-5 text-xs text-taupe space-y-2.5 leading-relaxed font-serif">
                <li>
                  <strong>Authorized Pricing:</strong> All training fees are defined and processed in Indian Rupees (INR). USD/Euro conversions shown are indicative and subject to currency exchange rates.
                </li>
                <li>
                  <strong>Residential stay:</strong> For training conducted at our Palakkad, Kerala healing village, the price **includes all accommodation and organic Ayurvedic vegetarian food** on campus.
                </li>
                <li>
                  <strong>Non-Residential Option:</strong> Training conducted at our Mehrauli, Delhi centre is non-residential (accommodation and food are not included in the fee).
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dynamic CTA */}
        <div className="bg-sand-2 text-palm border border-copper/20 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <GraduationCap size={44} className="text-turmeric mx-auto mb-4" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-palm">{c("heading")}</h2>
          <p className="text-xs sm:text-sm text-taupe mb-8 max-w-md mx-auto leading-relaxed font-serif">
            {c("subhead")}
          </p>
          <Link
            href="/enquiry"
            className="inline-block bg-terracotta text-white hover:bg-terracotta/90 font-semibold px-8 py-3.5 rounded-full text-xs transition-all shadow-md"
          >
            {cta("explore")}
          </Link>
        </div>

      </div>
    </main>
  );
}
