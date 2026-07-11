import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import FAQAccordion from "@/components/FAQAccordion";
import TrustBar from "@/components/TrustBar";
import { 
  ArrowRight, 
  Star, 
  Quotes, 
  FlowerLotus, 
  SealCheck, 
  Calendar, 
  BookOpen, 
  GraduationCap, 
  MapPin, 
  Users,
  Compass 
} from "@phosphor-icons/react/dist/ssr";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Load locale translation namespaces
  const t = await getTranslations("Home");
  const cta = await getTranslations("CTAs");
  const f = await getTranslations("FAQ");
  const ab = await getTranslations("About");
  const tr = await getTranslations("Travel");
  const nav = await getTranslations("Navigation");

  const faqItems = [
    { question: f("q1"), answer: f("a1") },
    { question: f("q2"), answer: f("a2") },
    { question: f("q3"), answer: f("a3") },
    { question: f("q4"), answer: f("a4") },
    { question: f("q5"), answer: f("a5") },
    { question: f("q6"), answer: f("a6") }
  ];

  const studentReviews = [
    {
      name: "Tessy Pacheco",
      country: "Spain",
      programme: "Intensive Ayurveda Training (WAP)",
      quote: "Kairali Guru provided the most authentic platform to learn Ayurveda without losing its traditional values. Taught directly by practicing BAMS physicians at a real healing hospital campus in India."
    },
    {
      name: "Ms. Arti Joshi",
      country: "Canada",
      programme: "Advanced Lifestyle Consultant (AALCT)",
      quote: "Studying on-site at the Palakkad Healing Village in Kerala was a life-changing clinical experience. The BAMS and MD physicians were exceptionally detailed and guided us through physical therapies on real patients."
    },
    {
      name: "Heena C. Sehgal",
      country: "Gurgaon, India",
      programme: "Level-One Advanced for Wellness Professionals (AATP1)",
      quote: "The hybrid delivery model with a robust online foundation and intensive hands-on training at the Delhi Mehrauli centre fit perfectly into my practice. It elevated my wellness consultancy business to a new level of clinical credibility."
    }
  ];

  const featuredCourses = [
    {
      slug: "intensive-ayurveda-training",
      name: "Intensive Ayurveda Training (WAP)",
      desc: "Comprehensive hands-on therapist practice inside our Palakkad teaching hospital.",
      duration: "4 weeks",
      mode: "Residential (Kerala)",
      category: "Professional Certificate",
      image: "kerala-class-1.jpg"
    },
    {
      slug: "ayurveda-therapy-training-level-1",
      name: "Level-One Advanced for Wellness Professionals (AATP1)",
      desc: "Hybrid model combining robust online foundation with intensive practicals in Delhi.",
      duration: "80 Hours",
      mode: "Hybrid (Delhi / Online)",
      category: "Advanced Specialization",
      image: "delhi-centre-1.jpg"
    },
    {
      slug: "advanced-ayurveda-therapist-training-kerala",
      name: "Advanced Lifestyle Consultant & Therapist (AALCT)",
      desc: "Our flagship clinical immersion programme guided by senior physicians.",
      duration: "12 Weeks",
      mode: "Residential (Kerala)",
      category: "Professional Diploma",
      image: "kerala-pharmacy-1.jpg"
    }
  ];

  return (
    <div className="flex flex-col w-full text-start bg-sand/20 gap-32 md:gap-48 pb-32">
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden flex items-end justify-center bg-palm">
        <div className="absolute inset-0 w-full h-full">
          <img
            alt="Kairali Guru Ayurvedic Sanctuary"
            className="w-full h-full object-cover"
            src="/images/kerala-campus-1.jpg"
          />
          {/* Natural organic overlay */}
          <div className="absolute inset-0 bg-palm/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-palm via-transparent to-black/30" />
        </div>

        <div className="absolute inset-0 z-10 pt-32 pb-20 px-6 flex flex-col items-center justify-end text-center text-sand">
          <div className="max-w-4xl flex flex-col items-center gap-6">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-turmeric font-bold flex items-center gap-2">
              <FlowerLotus size={14} className="text-turmeric" />
              <span>EST. 1908 · NABH-ACCREDITED TEACHING HOSPITAL</span>
            </span>
            <h1 className="text-4xl md:text-7xl font-display text-white leading-tight font-light tracking-tight max-w-3xl">
              Learn Ayurveda <br className="hidden md:inline" />
              <span className="font-serif italic font-normal text-turmeric">Where Its Living Tradition</span> Continues
            </h1>
            <p className="text-sm md:text-base text-sand/85 leading-relaxed max-w-xl font-serif">
              Study authentic Ayurveda through structured courses, experienced faculty, and practical learning within Kairali’s established wellness ecosystem.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              <Link
                href="/courses"
                className="inline-flex items-center gap-4 bg-turmeric text-palm hover:bg-turmeric/90 py-3.5 px-8 rounded-md font-semibold transition-all duration-300 text-xs tracking-wider uppercase"
              >
                <span>{cta("explore")}</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/enquiry"
                className="inline-flex items-center gap-4 bg-transparent py-3.5 px-8 rounded-md font-semibold border border-sand/30 text-sand hover:bg-sand/15 transition-all text-xs tracking-wider uppercase"
              >
                <span>{cta("speak")}</span>
              </Link>
            </div>
            <span className="text-[9px] text-sand/65 tracking-[0.2em] font-semibold uppercase mt-6 border-t border-sand/15 pt-4 w-64">
              Welcoming learners from around the world
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST STRIP */}
      <div className="max-w-7xl mx-auto w-full px-6">
        <TrustBar />
      </div>

      {/* SECTION 3: EDITORIAL INTRODUCTION */}
      <section className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-8 rounded-lg overflow-hidden border border-copper/15 aspect-[4/5] shadow-sm">
            <img
              src="/preview/kairali-nabh-teaching-hospital-kerala.webp"
              alt="NABH accredited clinical teaching hospital campus"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-4 rounded-lg overflow-hidden border border-copper/15 aspect-square shadow-sm translate-y-8 hidden md:block">
            <img
              src="/images/kerala-cottage-detail.jpg"
              alt="Ayurveda sanctuary details"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] font-bold tracking-[0.25em] text-laterite uppercase block">
              OUR HISTORICAL HERITAGE
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-palm leading-tight tracking-tight">
              {ab("h1")}
            </h2>
          </div>
          <p className="text-sm text-taupe leading-relaxed font-serif">
            {ab("desc1")}
          </p>
          <div className="border-s-2 border-laterite ps-6 py-1 italic font-serif text-sm text-palm/90">
            "स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं च।" <br />
            <span className="text-[10px] uppercase font-mono tracking-wider text-taupe not-italic block mt-2">— Charaka Samhita</span>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs font-bold text-laterite hover:text-palm transition-colors group"
          >
            <span className="border-b border-laterite/45 pb-0.5 group-hover:border-palm transition-colors">Discover Our Story</span>
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* SECTION 4: PATHWAY SELECTOR */}
      <section className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6 text-start">
          <span className="text-[10px] uppercase tracking-[0.25em] text-laterite font-bold block">
            TAILORED EDUCATION
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-light text-palm leading-tight tracking-tight">
            Which pathway is <span className="font-serif italic">right for you?</span>
          </h2>
          <p className="text-xs text-taupe leading-relaxed font-serif">
            Whether you are starting from zero or seeking accredited qualifications, Kairali offers structured paths for your goals.
          </p>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { title: "For Beginners", desc: "Gain personal wellness tools, constitution self-analysis, and kitchen herb setups.", path: "/courses", img: "kerala-garden-1.jpg" },
            { title: "For Yoga Teachers", desc: "Integrate Ayurvedic diagnostics and daily regimens into your hatha classes.", path: "/courses", img: "kerala-yoga-1.jpg" },
            { title: "For Spa Therapists", desc: "Master physical strokes, clinical steps, and post-therapy care routines.", path: "/panchakarma", img: "ayurveda-treatment-table.jpg" },
            { title: "For Global Students", desc: "Complete travel support, on-site lodging, and structured English modules.", path: "/travel-visa", img: "kerala-campus-1.jpg" }
          ].map((path, idx) => (
            <div
              key={idx}
              className="border border-copper/10 rounded-2xl overflow-hidden bg-sand/35 flex flex-col justify-between hover:shadow-sm transition-all text-start"
            >
              <div className="aspect-[16/9] overflow-hidden border-b border-copper/10">
                <img src={`/images/${path.img}`} alt={path.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 space-y-4">
                <h4 className="font-display text-lg text-palm font-bold">{path.title}</h4>
                <p className="text-xs text-taupe leading-relaxed font-serif">{path.desc}</p>
                <Link
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-laterite hover:underline"
                  href={path.path}
                >
                  <span>Explore Route</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: FEATURED COURSES */}
      <section className="max-w-7xl mx-auto w-full px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-copper/10 pb-8 mb-16">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-laterite font-bold block">
              ACADEMIC PROGRAMMES
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-light text-palm tracking-tight">
              Featured Ayurveda <span className="font-serif italic">Courses</span>
            </h2>
          </div>
          <Link
            href="/courses"
            className="text-xs font-bold text-palm hover:text-laterite transition-colors inline-flex items-center gap-2 group"
          >
            <span className="border-b border-palm/45 pb-0.5">View all courses</span>
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredCourses.map((course, idx) => (
            <div
              key={idx}
              className="bg-sand border border-sand-2 rounded-3xl overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="aspect-[4/3] bg-sand-2/40 overflow-hidden relative border-b border-sand-2">
                <img
                  src={`/images/${course.image}`}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <span className="absolute top-4 start-4 font-mono text-[9px] text-paper-on-dark font-bold bg-palm px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {course.category}
                </span>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between text-start">
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-palm text-lg leading-snug group-hover:text-laterite transition-colors">
                    {course.name}
                  </h3>
                  <p className="text-xs text-taupe leading-relaxed font-serif">
                    {course.desc}
                  </p>
                </div>

                <div className="border-t border-sand-2 pt-4 mt-6 flex justify-between items-center text-[10px] font-semibold text-palm">
                  <span className="flex items-center gap-1.5 text-taupe">
                    <Calendar size={12} />
                    <span>{course.duration}</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-taupe">
                    <MapPin size={12} />
                    <span>{course.mode}</span>
                  </span>
                </div>

                <Link
                  href={`/courses/${course.slug}`}
                  className="w-full text-center mt-6 bg-palm hover:bg-palm-2 text-paper-on-dark font-semibold py-3 rounded-lg text-xs transition-all tracking-wider uppercase"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: HERITAGE TIMELINE */}
      <section className="bg-palm text-paper-on-dark py-24 border-y border-palm-2">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-8 text-start">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-turmeric block">
                OUR LINEAGE HERITAGE
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-light text-paper-on-dark tracking-tight leading-tight">
                118 Years of unbroken <span className="font-serif italic text-turmeric font-normal">family practice</span>
              </h2>
            </div>
            <p className="text-sm text-paper-on-dark/75 leading-relaxed font-serif">
              {ab("desc2")}
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-paper-on-dark/10 text-start">
              <div>
                <span className="text-2xl sm:text-3xl font-display font-bold text-turmeric block">1908</span>
                <span className="text-[9px] text-paper-on-dark/60 uppercase tracking-widest font-mono">Est. Date</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-display font-bold text-turmeric block">Palakkad</span>
                <span className="text-[9px] text-paper-on-dark/60 uppercase tracking-widest font-mono">Kerala Center</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-display font-bold text-turmeric block">NABH</span>
                <span className="text-[9px] text-paper-on-dark/60 uppercase tracking-widest font-mono">Accredited</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 rounded-lg overflow-hidden border border-paper-on-dark/10 aspect-[16/10] shadow-md">
            <img
              src="/images/kerala-campus-1.jpg"
              alt="Palakkad Kerala teaching campus"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 7: PRACTICAL LEARNING */}
      <section className="max-w-7xl mx-auto w-full px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] text-laterite font-bold block">
            PEDAGOGICAL STRUCTURE
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-light text-palm mt-2">
            The Pathway to <span className="font-serif italic text-laterite">Ayurvedic Mastery</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "I", title: "Learn the Principles", desc: "Build a strong theoretical foundation in Sanskrit concepts and dosha constitutional dynamics." },
            { step: "II", title: "Observe Clinicians", desc: "Watch BAMS doctors conduct pulse analysis (Nadi Pariksha) and formulate medicated organic preparations." },
            { step: "III", title: "Guided Practice", desc: "Perform therapies under direct supervision on patients inside our NABH accredited village." },
            { step: "IV", title: "Apply Responsibly", desc: "Secure certification and start practicing as a consultant or therapist in your region." }
          ].map((item, idx) => (
            <div key={idx} className="border-t-2 border-laterite/35 pt-6 text-start space-y-4">
              <span className="font-mono text-xs text-laterite font-bold tracking-widest uppercase block">
                Stage {item.step}
              </span>
              <h4 className="font-display font-bold text-palm text-base">{item.title}</h4>
              <p className="text-xs text-taupe leading-relaxed font-serif">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: INTERNATIONAL STUDENTS */}
      <section className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 rounded-lg overflow-hidden border border-copper/15 aspect-[4/3] shadow-sm">
          <img
            src="/images/kerala-yoga-1.jpg"
            alt="Sunrise yoga training on campus"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:col-span-7 space-y-6 text-start">
          <span className="text-[10px] uppercase tracking-[0.25em] text-laterite font-bold block">
            GLOBAL COMMUNITY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-palm leading-tight tracking-tight">
            Welcoming International Learners
          </h2>
          <p className="text-sm text-taupe leading-relaxed font-serif">
            {tr("welcomeMsg")} {tr("visaInfo")}
          </p>
          <Link
            href="/travel-visa"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-palm hover:text-laterite transition-colors group mt-2"
          >
            <span className="border-b border-palm/45 pb-0.5 group-hover:border-laterite">Explore International Student Support</span>
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* SECTION 9: FACULTY */}
      <section className="max-w-7xl mx-auto w-full px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] text-laterite font-bold block">
            ACADEMIC LEADERSHIP
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-light text-palm mt-2">
            Taught by Respected <span className="font-serif italic">Physicians & Experts</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { name: "Dr. Radhakrishnan", role: "Chief Physician & Academic Director", spec: "BAMS · 30+ Years Experience", img: "kairali-ayurveda-training-centre-delhi.webp" },
            { name: "Dr. Latha Radhakrishnan", role: "Senior Consultant", spec: "BAMS, MD · Panchakarma Expert", img: "kairali-nabh-teaching-hospital-kerala.webp" },
            { name: "Dr. Sreejit", role: "Resident Faculty Physician", spec: "BAMS · Pharmacy & Herbs Pharmacology", img: "kairali-learn-medicine-factory-preparation.webp" }
          ].map((phys, idx) => (
            <div key={idx} className="bg-sand/35 border border-copper/10 rounded-2xl overflow-hidden text-start group">
              <div className="aspect-[4/3] bg-sand-2/40 relative overflow-hidden">
                <img
                  src={`/preview/${phys.img}`}
                  alt={phys.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h4 className="font-display font-bold text-palm text-lg">{phys.name}</h4>
                <span className="text-xs text-laterite font-semibold block mt-0.5">{phys.role}</span>
                <span className="text-[10px] text-taupe block mt-2 uppercase tracking-wider font-mono font-bold">{phys.spec}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10: TESTIMONIALS */}
      <section className="max-w-7xl mx-auto w-full px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] text-laterite font-bold block">
            ALUMNI VOICES
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-light text-palm mt-2">
            Student Reviews & <span className="font-serif italic">Success Stories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {studentReviews.map((rev, index) => (
            <div
              key={index}
              className="border-t border-copper/25 pt-6 text-start flex flex-col justify-between relative"
            >
              <div className="space-y-4">
                <div className="flex gap-1 text-turmeric">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} weight="fill" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-bark/90 leading-relaxed font-serif italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-6 mt-8 flex flex-col">
                <span className="font-display font-bold text-palm text-sm">
                  {rev.name}
                </span>
                <span className="text-[10px] text-laterite font-semibold block mt-0.5">
                  {rev.country}
                </span>
                <span className="text-[9px] text-taupe font-semibold block mt-2 uppercase tracking-wider font-mono">
                  {rev.programme}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 11: CAMPUSES */}
      <section className="max-w-7xl mx-auto w-full px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] text-laterite font-bold block">
            OUR LOCATIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-light text-palm mt-2">
            Where Ayurveda is Taught <span className="font-serif italic">& Practised</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="border border-copper/10 rounded-2xl overflow-hidden bg-sand/35 text-start group">
            <div className="aspect-[16/9] relative overflow-hidden">
              <img
                src="/preview/kairali-kerala-healing-village-hero.webp"
                alt="Kerala campus"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-4">
              <h4 className="font-display font-bold text-palm text-xl">Palakkad Campus, Kerala</h4>
              <p className="text-xs text-taupe leading-relaxed font-serif">
                A 65-acre residential campus with traditional red-brick cottages, daily organic vegetarian meals, and hands-on training inside our NABH-accredited hospital.
              </p>
              <Link href="/locations/kerala" className="inline-flex items-center gap-1 text-xs font-bold text-laterite hover:underline">
                <span>Explore Kerala Campus</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          <div className="border border-copper/10 rounded-2xl overflow-hidden bg-sand/35 text-start group">
            <div className="aspect-[16/9] relative overflow-hidden">
              <img
                src="/preview/kairali-ayurveda-training-centre-delhi.webp"
                alt="Delhi campus"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-4">
              <h4 className="font-display font-bold text-palm text-xl">Mehrauli Center, New Delhi</h4>
              <p className="text-xs text-taupe leading-relaxed font-serif">
                Our modern, non-residential practice center located in South Delhi. Perfect for professionals looking to build skills without lodging requirements.
              </p>
              <Link href="/locations/delhi" className="inline-flex items-center gap-1 text-xs font-bold text-laterite hover:underline">
                <span>Explore Delhi Center</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: KNOWLEDGE CENTRE */}
      <section className="max-w-7xl mx-auto w-full px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-copper/10 pb-8 mb-16">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-laterite font-bold block">
              EDITORIAL PUBLICATION
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-light text-palm tracking-tight">
              From the <span className="font-serif italic text-palm">Learning Hub</span>
            </h2>
          </div>
          <Link
            href="/learn"
            className="text-xs font-bold text-palm hover:text-laterite transition-colors inline-flex items-center gap-2 group"
          >
            <span className="border-b border-palm/45 pb-0.5">Explore Knowledge Centre</span>
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-start">
          <div className="lg:col-span-8 space-y-6 group">
            <div className="aspect-[21/10] relative rounded-lg overflow-hidden border border-copper/15 shadow-sm">
              <img
                src="/preview/kairali-learn-medicine-factory-preparation.webp"
                alt="How to study Ayurveda"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-laterite uppercase tracking-wider font-mono">Featured Article</span>
              <h4 className="font-display font-bold text-palm text-2xl leading-tight">
                How to Learn Ayurveda: A Step-by-Step Guide
              </h4>
              <p className="text-xs sm:text-sm text-taupe leading-relaxed font-serif">
                Discover the traditional methods of studying Ayurveda, the differences between online learning and clinical hospital practice, and how to verify certifications.
              </p>
              <Link href="/learn/how-to-learn-ayurveda" className="inline-flex items-center gap-1.5 text-xs font-bold text-laterite hover:underline">
                <span>Read Full Article</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            {[
              { slug: "understanding-panchakarma-detox", title: "Understanding Panchakarma Detoxification", desc: "A clinical guide to the five detoxification stages." },
              { slug: "introduction-to-tridosha-theory", title: "Introduction to Tridosha Theory", desc: "Discover how Vata, Pitta, and Kapha govern bodily health." }
            ].map((art, idx) => (
              <div key={idx} className="border-b border-copper/10 pb-6 space-y-3">
                <span className="text-[9px] font-bold text-laterite uppercase tracking-wider block font-mono">Clinical Explainer</span>
                <h5 className="font-display font-bold text-palm text-lg leading-tight">{art.title}</h5>
                <p className="text-xs text-taupe leading-relaxed font-serif">{art.desc}</p>
                <Link href={`/learn/${art.slug}`} className="inline-flex items-center gap-1 text-xs font-bold text-laterite hover:underline">
                  <span>Read Article</span>
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13: FAQ */}
      <section className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 text-start">
        <div className="lg:col-span-4 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.25em] text-laterite font-bold block">
            ACCORDION SUPPORT
          </span>
          <h2 className="text-3xl font-display font-light text-palm tracking-tight">
            Frequently Asked <span className="font-serif italic">Questions</span>
          </h2>
          <p className="text-xs text-taupe leading-relaxed font-serif">
            Everything you need to know about our courses, BAMS doctors, visa clearance, and Palakkad campus.
          </p>
        </div>
        <div className="lg:col-span-8">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* SECTION 14: IMMERSIVE CALL-TO-ACTION */}
      <section className="max-w-5xl mx-auto w-full px-6">
        <div className="bg-palm text-paper-on-dark rounded-[2.5rem] py-20 px-8 sm:px-16 text-center border border-palm-2 relative overflow-hidden shadow-md">
          <div className="max-w-xl mx-auto space-y-6 relative z-10">
            <h2 className="font-display text-3xl sm:text-5xl font-light leading-tight">
              Begin Your <span className="font-serif italic text-turmeric font-normal">Ayurveda Learning</span> Journey
            </h2>
            <p className="text-xs sm:text-sm text-paper-on-dark/70 leading-relaxed font-serif">
              Ready to learn from practicing doctors? Fill out our enquiry form and a physician-advisor will contact you to answer any questions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/enquiry"
                className="bg-turmeric text-bark hover:opacity-95 font-semibold px-8 py-3.5 rounded-md text-xs transition-all shadow-md tracking-wider uppercase"
              >
                Explore Programmes
              </Link>
              <Link
                href="/enquiry"
                className="bg-transparent py-3.5 px-8 rounded-md font-semibold border border-sand/30 text-sand hover:bg-sand/15 transition-all text-xs tracking-wider uppercase"
              >
                Speak to an Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
