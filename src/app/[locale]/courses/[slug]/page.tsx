import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaRenderer from "@/components/SchemaRenderer";
import { Course, WithContext } from "schema-dts";
import { Calendar, Clock, GraduationCap, ShieldCheck, ArrowLeft, Hourglass, CheckCircle, SealCheck, Sparkle } from "@phosphor-icons/react/dist/ssr";

import { courses as courseData } from "@/lib/coursesData";


interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Navigation");
  const f = await getTranslations("FAQ");

  const course = courseData.find((c) => c.slug === slug);
  if (!course) {
    notFound();
  }

  const courseTitle = course.title[locale as keyof typeof course.title] || course.title.en;
  const courseDesc = course.desc[locale as keyof typeof course.desc] || course.desc.en;
  const courseLevel = typeof course.level === "string" ? course.level : (course.level[locale as keyof typeof course.level] || course.level.en);


  const breadcrumbItems = [
    { label: t("courses"), path: "/courses" },
    { label: courseTitle }
  ];

  // Course schema definition
  const schema: WithContext<Course> = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseTitle,
    "description": courseDesc,
    "provider": {
      "@type": "Organization",
      "name": "Kairali Guru",
      "sameAs": "https://kairali.guru"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "residential",
      "courseWorkload": `PT${course.hours.replace(/[^\d]/g, "")}H`,
      "offers": {
        "@type": "Offer",
        "price": course.priceINR.replace(/[^\d]/g, ""),
        "priceCurrency": "INR",
        "category": "Education"
      }
    }
  };

  const schedule = course.schedule || [
    { time: "06:00", activity: "Wake & self-care (dinacharya)" },
    { time: "06:30", activity: "Yoga session" },
    { time: "07:15", activity: "Pranayama & meditation" },
    { time: "08:00", activity: "Herbal detox drink" },
    { time: "08:30", activity: "Ayurvedic breakfast" },
    { time: "10:00", activity: "Theory / Philosophy Workshop" },
    { time: "12:30", activity: "Ayurvedic vegetarian lunch" },
    { time: "14:00", activity: "Practical therapy training sessions" }
  ];

  const faqs = [
    { question: f("q1"), answer: f("a1") },
    { question: f("q3"), answer: f("a3") },
    { question: f("q6"), answer: f("a6") }
  ];

  return (
    <>
      <SchemaRenderer schema={schema} />
      <main className="min-h-screen bg-sand/30 py-12 px-6 sm:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumbs */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-copper/10 pb-4 mb-8">
            <Breadcrumbs items={breadcrumbItems} locale={locale} />
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-xs font-semibold text-laterite hover:text-palm transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to all courses</span>
            </Link>
          </div>

          {/* Immersive Course Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            {/* Left Content */}
            <div className="lg:col-span-8 text-start space-y-6">
              <span className="font-mono text-[10px] text-laterite font-bold bg-laterite/10 px-3.5 py-1 rounded-full uppercase tracking-wider w-max block">
                Programme Code: {course.code}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight">
                {courseTitle}
              </h1>
              <p className="whitespace-pre-line text-base sm:text-lg text-taupe leading-relaxed font-serif">
                {courseDesc}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-3 gap-6 border-y border-sand-2 py-6 font-sans text-start">
                <div>
                  <span className="text-[10px] text-taupe uppercase tracking-widest font-semibold block">Duration</span>
                  <span className="text-base text-palm font-bold block mt-1">{course.duration}</span>
                </div>
                <div>
                  <span className="text-[10px] text-taupe uppercase tracking-widest font-semibold block">Workload</span>
                  <span className="text-base text-palm font-bold block mt-1">{course.hours}</span>
                </div>
                <div>
                  <span className="text-[10px] text-taupe uppercase tracking-widest font-semibold block">Difficulty</span>
                  <span className="text-base text-palm font-bold block mt-1">{courseLevel}</span>
                </div>
              </div>

              {/* Overview Section */}
              {course.overview && (
                <div className="pt-6 space-y-3 text-start">
                  <h2 className="font-display text-2xl font-bold text-palm border-b border-sand-2 pb-2">
                    Overview
                  </h2>
                  <p className="whitespace-pre-line text-xs sm:text-sm text-taupe leading-relaxed font-serif">
                    {course.overview}
                  </p>
                </div>
              )}

              {/* Recommended For Section */}
              {course.recommendedFor && (
                <div className="pt-6 space-y-3 text-start">
                  <h2 className="font-display text-2xl font-bold text-palm border-b border-sand-2 pb-2">
                    Recommended For
                  </h2>
                  <p className="whitespace-pre-line text-xs sm:text-sm text-taupe leading-relaxed font-serif">
                    {course.recommendedFor}
                  </p>
                </div>
              )}

              {/* Interactive syllabus preview */}
              <div className="pt-6 space-y-6">
                <h2 className="font-display text-2xl font-bold text-palm border-b border-sand-2 pb-2">
                  Syllabus Structure
                </h2>
                <ol className="flex flex-col gap-6">
                  {(course.syllabus || [
                    { title: "1. Orientation & Foundations", desc: "Introduction to Ayurveda's history, philosophy, the Tridosha system (Vata, Pitta, Kapha), and basic wellness regimens." },
                    { title: "2. Ayurvedic Anatomy & Herbology", desc: "Understanding bodily constitutions, basic herb identification in our medicinal gardens, and natural drug pharmacology." },
                    { title: "3. Classical Practical Therapies", desc: "Supervised hands-on training in therapies like Abhyanga, Shirodhara, Nasya, and Panchakarma detoxification protocols." }
                  ]).map((step, idx) => (
                    <li key={idx} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-palm text-paper-on-dark flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-palm text-sm">{step.title}</h4>
                        <p className="text-xs sm:text-sm text-taupe mt-1 leading-relaxed font-serif">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right Sticky Side Panel */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-8">
              {/* Fact sheet Box */}
              <div className="bg-sand border border-sand-2 rounded-3xl p-6 shadow-sm text-start space-y-6">
                <div>
                  <span className="text-[10px] text-taupe uppercase tracking-wider font-bold block mb-2">Authoritative Fee</span>
                  {course.pricing ? (
                    <div className="space-y-3.5 font-sans">
                      {course.pricing.map((p, idx) => (
                        <div key={idx} className="border-b border-sand-2 last:border-0 pb-2 last:pb-0">
                          <span className="text-[10px] text-laterite font-semibold block">{p.location}</span>
                          <span className="text-2xl font-bold text-palm inline-block mt-0.5">{p.inr}</span>
                          <span className="text-xs text-taupe inline-block ms-2">({p.usd})</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <span className="text-3xl font-bold text-palm block leading-none">{course.priceINR}</span>
                      <span className="text-xs text-taupe block mt-1.5">{course.priceUSD} ( indicative USD equivalent) *</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-sand-2 pt-4 space-y-3.5 text-xs text-taupe">
                  {(course.highlights || [
                    "Includes all accommodation and daily meals (Kerala)",
                    "Practicing BAMS / MD physician advisors"
                  ]).map((hl, idx) => (
                    <div key={idx} className="flex gap-2">
                      <SealCheck size={18} className="text-laterite shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/enquiry"
                  className="w-full text-center bg-palm hover:bg-palm-2 text-paper-on-dark font-semibold py-3 rounded-xl text-xs transition-all shadow-sm block"
                >
                  Request Registration prospectus
                </Link>
              </div>

              {/* Day schedule snapshot */}
              <div className="bg-sand-2/20 border border-sand-2 rounded-3xl p-6 text-start">
                <h3 className="font-display text-base font-bold text-palm mb-4 flex items-center gap-2">
                  <Hourglass size={18} className="text-laterite" />
                  <span>{course.schedule ? "Course Schedule" : "A Day on Campus"}</span>
                </h3>
                <div className={`relative border-s border-copper/30 pl-4 ml-2 space-y-3.5 ${schedule.length > 5 ? "max-h-96 overflow-y-auto pr-2" : ""}`}>
                  {schedule.map((sched, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -start-[21px] top-1.5 w-2 h-2 rounded-full bg-copper" />
                      <span className="font-mono text-[10px] text-laterite font-bold block">{sched.time}</span>
                      <span className="text-xs text-taupe leading-relaxed block font-serif mt-0.5">{sched.activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Institutional Compliance */}
          <div className="bg-sand border border-sand-2 rounded-3xl p-8 max-w-4xl mx-auto mb-12 text-start font-sans shadow-sm">
            <div className="flex gap-4 items-start">
              <ShieldCheck size={28} className="text-laterite shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-bold text-palm text-lg mb-2">NABH Certification & Legal Compliance</h4>
                <p className="text-xs text-taupe leading-relaxed font-serif">
                  Certificates are issued by the <strong>Kairali Institute of Panchakarma Therapies / Kairali Ayurvedic Centre Pvt Ltd</strong>. All course modules are delivered under clinical BAMS / MD guidelines at our NABH-accredited healing village in Kerala or Delhi. Learnings are completely compliant with international training certifications.
                </p>
              </div>
            </div>
          </div>

          {/* Terms & Enrollment Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20 text-start">
            <div className="bg-sand border border-sand-2 rounded-3xl p-8 shadow-sm">
              <h3 className="font-display font-bold text-palm text-base mb-4">Terms & Conditions</h3>
              <ul className="list-disc pl-5 space-y-2.5 text-xs text-taupe font-serif leading-relaxed">
                <li>Accommodation facility is only available at our Kairali- The Ayurvedic Healing Village, Kerala (included in the cost).</li>
                <li>Other location to avail training programs is Delhi (non-residential).</li>
                <li>Theory classes are conducted by expert Ayurvedic Doctors.</li>
                <li>Practical sessions are conducted by Senior Ayurvedic Trainers and Ayurvedic Doctors.</li>
                <li>Certificates are issued by Kairali Institute of Panchakarma Therapies / Kairali Ayurvedic Centre.</li>
                <li>Photography and videography is not permitted during practical and training sessions.</li>
                <li>Payment Policy: Full payment in advance to sign up for the program.</li>
                <li>Classes will be from Monday to Friday only at Delhi location.</li>
                <li>Sundays are off; no classes take place on Public Holidays.</li>
              </ul>
            </div>
            <div className="bg-sand border border-sand-2 rounded-3xl p-8 shadow-sm">
              <h3 className="font-display font-bold text-palm text-base mb-4">Enrollment Guidelines</h3>
              <ul className="list-disc pl-5 space-y-2.5 text-xs text-taupe font-serif leading-relaxed">
                <li>To sign up for the course, please bring a valid identity proof & 2 passport-size photographs.</li>
                <li>There will be a 20% discount for groups with more than 5 students.</li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-palm mb-8 text-center">
              Program FAQs
            </h2>
            <FAQAccordion items={faqs} />
          </div>

        </div>
      </main>
    </>
  );
}

export function generateStaticParams() {
  return courseData.map((c) => ({
    slug: c.slug
  }));
}
