import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaRenderer from "@/components/SchemaRenderer";
import ScheduleViewer from "@/components/ScheduleViewer";
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

  const faqs = course.faqs || [
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

              {/* Why Participants Choose This Program */}
              {course.whyChoose && (
                <div className="pt-6 space-y-3 text-start">
                  <h2 className="font-display text-2xl font-bold text-palm border-b border-sand-2 pb-2">
                    Why Participants Choose This Program
                  </h2>
                  <p className="whitespace-pre-line text-xs sm:text-sm text-taupe leading-relaxed font-serif">
                    {course.whyChoose}
                  </p>
                </div>
              )}

              {/* What You Will Learn */}
              {course.whatYouWillLearn && (
                <div className="pt-6 space-y-3 text-start">
                  <h2 className="font-display text-2xl font-bold text-palm border-b border-sand-2 pb-2">
                    What You Will Learn
                  </h2>
                  <p className="whitespace-pre-line text-xs sm:text-sm text-taupe leading-relaxed font-serif">
                    {course.whatYouWillLearn}
                  </p>
                </div>
              )}

              {/* Learning Environment and Expectations */}
              {course.learningExpectations && (
                <div className="pt-6 space-y-3 text-start">
                  <h2 className="font-display text-2xl font-bold text-palm border-b border-sand-2 pb-2">
                    Learning Environment and Expectations
                  </h2>
                  <p className="whitespace-pre-line text-xs sm:text-sm text-taupe leading-relaxed font-serif">
                    {course.learningExpectations}
                  </p>
                </div>
              )}

              {/* Certificate and Progression */}
              {course.certificateProgression && (
                <div className="pt-6 space-y-3 text-start">
                  <h2 className="font-display text-2xl font-bold text-palm border-b border-sand-2 pb-2">
                    Certificate and Progression
                  </h2>
                  <p className="whitespace-pre-line text-xs sm:text-sm text-taupe leading-relaxed font-serif">
                    {course.certificateProgression}
                  </p>
                </div>
              )}

              {/* Enquiry and Admissions */}
              {course.enquiryAdmissions && (
                <div className="pt-6 space-y-3 text-start">
                  <h2 className="font-display text-2xl font-bold text-palm border-b border-sand-2 pb-2">
                    Enquiry and Admissions
                  </h2>
                  <p className="whitespace-pre-line text-xs sm:text-sm text-taupe leading-relaxed font-serif">
                    {course.enquiryAdmissions}
                  </p>
                </div>
              )}

              {/* Important Guidance */}
              {course.importantGuidance && (
                <div className="pt-6 space-y-3 text-start">
                  <h2 className="font-display text-2xl font-bold text-palm border-b border-sand-2 pb-2">
                    Important Guidance
                  </h2>
                  <p className="whitespace-pre-line text-xs sm:text-sm text-taupe leading-relaxed font-serif">
                    {course.importantGuidance}
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
                      <div className="w-8 h-8 rounded-full bg-terracotta text-white flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-0.5 shadow-sm">
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
                {/* KAC Non-Residential Tariff & Weekly Off Notice */}
                <div className="bg-sand-2/40 border border-sand-2 rounded-2xl p-3.5 text-[11px] text-taupe space-y-2 font-sans mt-3">
                  <p className="leading-snug">
                    <strong>KAC Non-Residential Tariff Note:</strong> Accommodation and food facilities are not included in the Kairali Ayurvedic Centre package. Any KAC fee applies only to the training component and its associated inclusions as per approved schedule.
                  </p>
                  <span className="font-bold text-palm block text-xs border-t border-sand-2 pt-2 mt-1">Weekly Off Schedule (KAC Centres):</span>
                  <p className="leading-snug">• <strong>Tuesday:</strong> Weekly off for Mehrauli, New Delhi and Gurugram, Haryana. No classes will be conducted.</p>
                  <p className="leading-snug">• <strong>Monday:</strong> Weekly off for Siri Fort Sports Complex Centre. No classes will be conducted.</p>
                </div>
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
                  className="w-full text-center bg-terracotta hover:bg-terracotta/90 text-white font-semibold py-3 rounded-xl text-xs transition-all shadow-md block"
                >
                  Request Registration prospectus
                </Link>
              </div>

              {/* Day schedule snapshot with interactive Read More expansion */}
              <div className="bg-sand-2/20 border border-sand-2 rounded-3xl p-6 text-start">
                <h3 className="font-display text-base font-bold text-palm mb-4 flex items-center gap-2">
                  <Hourglass size={18} className="text-laterite" />
                  <span>{course.schedule ? "Course Schedule" : "A Day on Campus"}</span>
                </h3>
                <ScheduleViewer schedule={schedule} />
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

          {/* Palakkad Residential Tariff & Program Inclusions */}
          <div className="bg-sand border border-sand-2 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto mb-12 text-start font-sans shadow-sm space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-laterite block mb-1">
                KTAHV Kerala Residential Tariff Model
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-palm">
                Palakkad, Kerala Residential Format & Villa Per-Night Tariff
              </h3>
              <p className="text-xs sm:text-sm text-taupe leading-relaxed font-serif mt-2">
                At Kairali – The Ayurvedic Healing Village, Kerala, training programs may be integrated within a stay-linked, per-night all-inclusive tariff framework. In this model, any payable amount is based on the applicable per-night rate and the confirmed program duration.
              </p>
            </div>

            {/* Per-Night Rate Table */}
            <div className="overflow-x-auto rounded-2xl border border-sand-2 bg-sand-2/30 shadow-sm">
              <table className="w-full text-xs text-start font-sans">
                <thead className="bg-sand-2/60 text-palm uppercase font-mono text-[10px]">
                  <tr>
                    <th className="p-3">Villa Type</th>
                    <th className="p-3">INR Single</th>
                    <th className="p-3">INR Double</th>
                    <th className="p-3">USD Single</th>
                    <th className="p-3">USD Double</th>
                    <th className="p-3">EURO Single</th>
                    <th className="p-3">EURO Double</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand-2 text-bark">
                  <tr className="hover:bg-sand-2/20">
                    <td className="p-3 font-bold text-palm">Deluxe Villa</td>
                    <td className="p-3 font-semibold text-laterite">₹18,410</td>
                    <td className="p-3">₹30,530</td>
                    <td className="p-3 font-semibold">$263</td>
                    <td className="p-3">$436</td>
                    <td className="p-3 font-semibold">€230</td>
                    <td className="p-3">€382</td>
                  </tr>
                  <tr className="hover:bg-sand-2/20">
                    <td className="p-3 font-bold text-palm">Classic Villa</td>
                    <td className="p-3 font-semibold text-laterite">₹20,855</td>
                    <td className="p-3">₹32,735</td>
                    <td className="p-3 font-semibold">$298</td>
                    <td className="p-3">$468</td>
                    <td className="p-3 font-semibold">€261</td>
                    <td className="p-3">€409</td>
                  </tr>
                  <tr className="hover:bg-sand-2/20">
                    <td className="p-3 font-bold text-palm">Royal Villa</td>
                    <td className="p-3 font-semibold text-laterite">₹25,160</td>
                    <td className="p-3">₹36,620</td>
                    <td className="p-3 font-semibold">$359</td>
                    <td className="p-3">$523</td>
                    <td className="p-3 font-semibold">€315</td>
                    <td className="p-3">€458</td>
                  </tr>
                  <tr className="hover:bg-sand-2/20">
                    <td className="p-3 font-bold text-palm">Suite / Maharaja Suite</td>
                    <td className="p-3 font-semibold text-laterite">₹45,110</td>
                    <td className="p-3">₹55,520</td>
                    <td className="p-3 font-semibold">$644</td>
                    <td className="p-3">$793</td>
                    <td className="p-3 font-semibold">€564</td>
                    <td className="p-3">€694</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Residential Total Calculation Logic Notice */}
            <div className="bg-sand-2/40 border border-sand-2 p-4 rounded-2xl text-xs font-serif text-taupe leading-relaxed space-y-1">
              <span className="font-sans font-bold text-palm text-xs block">
                Residential Total Calculation Logic:
              </span>
              <p className="font-mono text-laterite text-xs font-semibold">
                Total {course.code ? `${course.code} ` : ''}residential fee = Per-night rate for the chosen villa category × Number of nights for the confirmed stay
              </p>
              <p className="text-[11px] text-taupe/80 italic mt-1">
                Note: No outdated Delhi/Mumbai bundled fees, group-discount notes, or old rate-validity lines apply to this package.
              </p>
            </div>

            {/* Ayurveda Training Program Inclusions */}
            <div className="pt-2 border-t border-sand-2 space-y-4">
              <h4 className="font-display font-bold text-palm text-base">
                Ayurveda Training Program Inclusions (KTAHV Residential Format)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-taupe font-serif">
                <div className="bg-sand-2/20 p-4 rounded-2xl border border-sand-2 space-y-2">
                  <span className="font-bold text-palm block font-sans text-xs">1. Professional Training</span>
                  <ul className="space-y-1.5 list-disc pl-4 leading-relaxed">
                    <li>Daily theory classes conducted by expert Ayurvedic doctors</li>
                    <li>Hands-on practical training led by senior Ayurvedic trainers and Ayurvedic doctors</li>
                    <li>Structured training in authentic Ayurvedic therapies and techniques</li>
                  </ul>
                </div>
                <div className="bg-sand-2/20 p-4 rounded-2xl border border-sand-2 space-y-2">
                  <span className="font-bold text-palm block font-sans text-xs">2. Accommodation & Meals</span>
                  <ul className="space-y-1.5 list-disc pl-4 leading-relaxed">
                    <li>Villa accommodation, with category as per package selected</li>
                    <li>Three wholesome vegetarian Ayurvedic meals daily (organic ingredients)</li>
                    <li>Daily in-room mineral water and herbal detox water service</li>
                  </ul>
                </div>
                <div className="bg-sand-2/20 p-4 rounded-2xl border border-sand-2 space-y-2">
                  <span className="font-bold text-palm block font-sans text-xs">3. Additional Benefits</span>
                  <ul className="space-y-1.5 list-disc pl-4 leading-relaxed">
                    <li>Access to swimming pool, library, gym and outdoor facilities</li>
                    <li>Organic farm tours and cultural immersion experiences</li>
                    <li>All-inclusive pricing with no hidden costs (stay, meals, training, taxes)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Program Notes (Training Operations) */}
            <div className="bg-sand-2/30 p-4 rounded-2xl border border-sand-2 text-xs text-taupe space-y-1.5 font-serif">
              <span className="font-bold text-palm block font-sans text-xs">Program Notes (Training Operations):</span>
              <p className="leading-relaxed">• <strong>Classes:</strong> Conducted Monday to Friday for training programs; schedules may vary by batch.</p>
              <p className="leading-relaxed">• <strong>Payment:</strong> Full advance payment required for confirmed enrolment.</p>
              <p className="leading-relaxed">• <strong>Sessions Policy:</strong> Photography and videography are not permitted during practical training sessions.</p>
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
