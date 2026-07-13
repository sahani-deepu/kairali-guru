import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowRight, Clock, Calendar, ShieldCheck, GraduationCap, MapPin, Sparkle } from "@phosphor-icons/react/dist/ssr";

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

  // Real authoritative prices and metadata
  const courses = [
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
      level: {
        en: "Beginner",
        de: "Einsteiger",
        fr: "Débutant",
        ar: "مبتدئ",
        ru: "Начальный"
      },
      priceINR: "₹18,400",
      priceUSD: "$307",
      image: "kerala-garden-1.jpg",
      desc: {
        en: "A single-day introduction to Ayurveda with a certificate — its principles, the three doshas, and a first taste of practice.",
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
      level: {
        en: "Beginner",
        de: "Einsteiger",
        fr: "Débutant",
        ar: "مبتدئ",
        ru: "Начальный"
      },
      priceINR: "₹55,200",
      priceUSD: "$921",
      image: "kerala-yoga-1.jpg",
      desc: {
        en: "A short, structured certificate covering Ayurveda's foundations and introductory therapies.",
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
      level: {
        en: "Intermediate",
        de: "Mittelstufe",
        fr: "Intermédiaire",
        ar: "متوسط",
        ru: "Средний"
      },
      priceINR: "₹92,000",
      priceUSD: "$1,535",
      image: "kerala-class-1.jpg",
      desc: {
        en: "Intensive, hands-on training in the five core therapies — Abhyangam, Shirodhara, Podikizhi, Udwarthanam and Kativasti.",
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
      level: {
        en: "Advanced",
        de: "Fortgeschritten",
        fr: "Avancé",
        ar: "متقدم",
        ru: "Продвинутый"
      },
      priceINR: "₹184,000",
      priceUSD: "$3,070",
      image: "delhi-centre-1.jpg",
      desc: {
        en: "Kairali's most sought-after programme. Master basic Ayurvedic therapies and run basic wellness consultations.",
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
      level: {
        en: "Advanced",
        de: "Fortgeschritten",
        fr: "Avancé",
        ar: "متقدم",
        ru: "Продвинутый"
      },
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
                    <span className="font-mono text-[9px] text-paper-on-dark font-bold bg-palm px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {course.code}
                    </span>
                    <span className="font-mono text-[9px] text-palm font-bold bg-turmeric px-2.5 py-0.5 rounded-full uppercase tracking-wider">
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
                    <div className="grid grid-cols-2 gap-4 border-y border-sand-2 py-4 mb-6 text-start text-xs font-semibold text-palm">
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
                      className="w-full flex items-center justify-center gap-2 bg-palm hover:bg-palm-2 text-paper-on-dark font-semibold py-3 rounded-xl text-xs transition-all shadow-sm group-hover:shadow"
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
        <div className="bg-palm text-paper-on-dark rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <GraduationCap size={44} className="text-turmeric mx-auto mb-4" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">{c("heading")}</h2>
          <p className="text-xs sm:text-sm text-paper-on-dark/70 mb-8 max-w-md mx-auto leading-relaxed font-serif">
            {c("subhead")}
          </p>
          <Link
            href="/enquiry"
            className="inline-block bg-turmeric text-bark hover:opacity-95 font-semibold px-8 py-3.5 rounded-full text-xs transition-all shadow-md"
          >
            {cta("explore")}
          </Link>
        </div>

      </div>
    </main>
  );
}
