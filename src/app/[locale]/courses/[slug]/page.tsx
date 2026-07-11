import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaRenderer from "@/components/SchemaRenderer";
import { Course, WithContext } from "schema-dts";
import { Calendar, Clock, GraduationCap, ShieldCheck, ArrowLeft, Hourglass, CheckCircle, SealCheck, Sparkle } from "@phosphor-icons/react/dist/ssr";

const courseData = [
  {
    code: "OAP-HV",
    slug: "one-day-ayurveda-workshop",
    title: {
      en: "One Day Ayurveda Workshop",
      de: "Eintägiger Ayurveda-Workshop",
      fr: "Atelier d'Ayurveda d'une Journée",
      ar: "ورشة أيورفيدا ليوم واحد",
      ru: "Однодневный воркшоп по Аюрведе"
    },
    duration: "1 day",
    hours: "3 hrs",
    level: "Beginner",
    priceINR: "₹18,400",
    priceUSD: "$307",
    image: "kerala-garden-1.jpg",
    desc: {
      en: "A single-day introduction to Ayurveda with a certificate — its principles, the three doshas, and a first taste of practice. Ideal for groups, travellers, corporates, and clubs who want an authentic, guided first step.",
      de: "Eintägiger Ayurveda-Workshop mit Zertifikat – eine authentische Einführung in die Tridoshas und erste Anwendungen.",
      fr: "Atelier d'Ayurveda d'une journée avec certificat – une introduction authentique aux Tridoshas et premiers soins.",
      ar: "ورشة أيورفيدا ليوم واحد مع شهادة – مقدمة أصيلة للمبادئ، والدوشا الثلاث، وتجربة أولى للممارسة.",
      ru: "Однодневное введение в Аюрведу с сертификатом — принципы, три доши и первые практические шаги."
    }
  },
  {
    code: "TAP-HV",
    slug: "three-day-ayurveda-certificate",
    title: {
      en: "Three-Day Short-Term Certificate",
      de: "Dreitägiges Kurzzeit-Zertifikat",
      fr: "Certificat Court de Trois Jours",
      ar: "شهادة قصيرة من ثلاثة أيام",
      ru: "Трёхдневный краткий сертификат"
    },
    duration: "3 days",
    hours: "9 hrs",
    level: "Beginner",
    priceINR: "₹55,200",
    priceUSD: "$921",
    image: "kerala-yoga-1.jpg",
    desc: {
      en: "A short, structured certificate covering Ayurveda's foundations and introductory therapies. Suited to spa & wellness staff, salon managers and owners, IT professionals, and diplomats who want grounding without a long stay.",
      de: "Dreitägiges Kurzzeit-Zertifikat – Grundlagen des Ayurveda und erste Therapien, ideal für Wellness-Fachkräfte.",
      fr: "Certificat court de trois jours – les fondements de l'Ayurveda et les premières thérapies, idéal pour les professionnels.",
      ar: "شهادة قصيرة من ثلاثة أيام – أساسيات الأيورفيدا وأولى العلاجات، مثالية لأخصائيي العافية.",
      ru: "Короткий структурированный сертификат, охватывающий основы Аюрведы и вводные терапевтические методы."
    }
  },
  {
    code: "WAP-HV",
    slug: "intensive-ayurveda-training",
    title: {
      en: "Intensive Ayurveda Training",
      de: "Intensivtraining Ayurveda",
      fr: "Formation Intensive en Ayurveda",
      ar: "تدريب مكثّف في الأيورفيدا",
      ru: "Интенсивное обучение Аюрведе"
    },
    duration: "5 days",
    hours: "15 hrs",
    level: "Intermediate",
    priceINR: "₹92,000",
    priceUSD: "$1,535",
    image: "kerala-class-1.jpg",
    desc: {
      en: "Intensive, hands-on training in the five core therapies — Abhyangam, Shirodhara, Podikizhi, Udwarthanam and Kativasti — alongside Ayurvedic philosophy and wellness concepts. For professionals ready to practise confidently.",
      de: "Intensivtraining – die fünf zentralen Therapien (Abhyangam, Shirodhara, Podikizhi, Udwarthanam, Kativasti) plus Philosophie.",
      fr: "Formation intensive – les cinq thérapies essentielles (Abhyangam, Shirodhara, Podikizhi, Udwarthanam, Kativasti) et la philosophie.",
      ar: "تدريب مكثّف – العلاجات الخمسة الأساسية (أبهيانغام، شيرودارا، بوديكيزهي، أودوارتانام، كاتيفاستي) مع الفلسفة.",
      ru: "Интенсивная практическая подготовка по пяти ключевым процедурам: Абхьянгам, Широдхара, Подикижи, Удвартанам и Кативасти."
    }
  },
  {
    code: "AATP1-HV",
    slug: "level-one-advanced-ayurveda-training",
    title: {
      en: "Level-One Advanced for Wellness Professionals",
      de: "Level-One Advanced für Wellness-Fachkräfte",
      fr: "Niveau 1 Avancé pour Professionnels",
      ar: "المستوى الأول المتقدّم لأخصائيي العافية",
      ru: "Продвинутый уровень 1 для специалистов"
    },
    duration: "10 days",
    hours: "40 hrs",
    level: "Advanced",
    priceINR: "₹184,000",
    priceUSD: "$3,070",
    image: "delhi-centre-1.jpg",
    desc: {
      en: "Kairali's most sought-after programme. Master basic Ayurvedic therapies and learn to run basic wellness consultations — theory plus supervised practical (Abhyangam, Shirodhara, Nasya and more), living on campus for the ten days.",
      de: "Level-One Advanced – die grundlegenden ayurvedischen Therapien meistern und einfache Wellness-Beratungen führen.",
      fr: "Niveau 1 avancé – maîtriser les thérapies ayurvédiques de base et mener des consultations bien-être simples.",
      ar: "برنامج كايرالي الأكثر طلبًا. إتقان العلاجات الأيورفيدية الأساسية وإجراء استشارات عافية أولية.",
      ru: "Самая популярная программа Kairali. Освойте базовые аюрведические процедуры и научитесь проводить велнес-консультации."
    }
  },
  {
    code: "AALCT-HV",
    slug: "advanced-lifestyle-consultant-therapist",
    title: {
      en: "Advanced Lifestyle Consultant & Therapist Training",
      de: "Advanced Lifestyle Consultant & Therapist",
      fr: "Advanced Lifestyle Consultant & Therapist",
      ar: "استشاري ومعالج أسلوب الحياة المتقدم",
      ru: "Advanced Lifestyle Consultant & Therapist"
    },
    duration: "20 days",
    hours: "80 hrs",
    level: "Advanced",
    priceINR: "₹368,000",
    priceUSD: "$6,140",
    image: "kerala-pharmacy-1.jpg",
    desc: {
      en: "The complete practitioner certification: full service list, supervised practice, and constitution (Prakriti) analysis.",
      de: "Dreiwöchige Praktiker-Zertifizierung: alle Leistungen meistern, inklusive Prakriti-Analyse und 9 Haupttherapien.",
      fr: "La certification complète de praticien : maîtriser tous les services, dont l'analyse Prakriti et 9 thérapies majeures.",
      ar: "شهادة الممارس الكاملة: إتقان جميع الخدمات، بما فيها تحليل «براكريتي» وتسع علاجات رئيسية.",
      ru: "Полная сертификация практика: освоение всего списка услуг, разбор конституции тела (Пракрити) и терапия."
    }
  }
];

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

  const schedule = [
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
              <p className="text-base sm:text-lg text-taupe leading-relaxed font-serif">
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
                  <span className="text-base text-palm font-bold block mt-1">{course.level}</span>
                </div>
              </div>

              {/* Interactive syllabus preview */}
              <div className="pt-6 space-y-6">
                <h2 className="font-display text-2xl font-bold text-palm border-b border-sand-2 pb-2">
                  Syllabus Structure
                </h2>
                <ol className="flex flex-col gap-6">
                  {[
                    { title: "1. Orientation & Foundations", desc: "Introduction to Ayurveda's history, philosophy, the Tridosha system (Vata, Pitta, Kapha), and basic wellness regimens." },
                    { title: "2. Ayurvedic Anatomy & Herbology", desc: "Understanding bodily constitutions, basic herb identification in our medicinal gardens, and natural drug pharmacology." },
                    { title: "3. Classical Practical Therapies", desc: "Supervised hands-on training in therapies like Abhyanga, Shirodhara, Nasya, and Panchakarma detoxification protocols." }
                  ].map((step, idx) => (
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
                  <span className="text-[10px] text-taupe uppercase tracking-wider font-bold block mb-1">Authoritative Fee</span>
                  <span className="text-3xl font-bold text-palm block leading-none">{course.priceINR}</span>
                  <span className="text-xs text-taupe block mt-1.5">{course.priceUSD} ( indicative USD equivalent) *</span>
                </div>

                <div className="border-t border-sand-2 pt-4 space-y-3.5 text-xs text-taupe">
                  <div className="flex gap-2">
                    <SealCheck size={18} className="text-laterite shrink-0 mt-0.5" />
                    <span>Includes all accommodation and daily meals (Kerala)</span>
                  </div>
                  <div className="flex gap-2">
                    <SealCheck size={18} className="text-laterite shrink-0 mt-0.5" />
                    <span>Practicing BAMS / MD physician advisors</span>
                  </div>
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
                  <span>A Day on Campus</span>
                </h3>
                <div className="relative border-s border-copper/30 pl-4 ml-2 space-y-3.5">
                  {schedule.slice(0, 5).map((sched, idx) => (
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
          <div className="bg-sand border border-sand-2 rounded-3xl p-8 max-w-4xl mx-auto mb-20 text-start font-sans shadow-sm">
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
