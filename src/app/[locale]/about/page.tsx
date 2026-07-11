import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ShieldCheck, Medal, Users, Hourglass, FlowerLotus } from "@phosphor-icons/react/dist/ssr";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Navigation");
  const a = await getTranslations("About");

  const breadcrumbItems = [
    { label: t("about") }
  ];

  const faculty = [
    {
      name: "Dr. Radhakrishnan, BAMS",
      role: "Chief Ayurvedic Physician & Director of Clinical Studies",
      spec: "30+ Years Experience · Panchakarma Therapeutics",
      image: "kairali-ayurveda-training-centre-delhi.webp",
      desc: "Over 30 years of clinical experience specializing in Panchakarma therapies and metabolic disorders at our Palakkad village."
    },
    {
      name: "Dr. Latha Radhakrishnan, BAMS",
      role: "Senior Ayurvedic Physician",
      spec: "25+ Years Experience · traditional Nutrition & Herbs",
      image: "kairali-nabh-teaching-hospital-kerala.webp",
      desc: "25+ years in practice, coordinating women's health regimens, traditional nutrition, and herbal pharmacology classes."
    },
    {
      name: "Dr. Sreejit, BAMS",
      role: "Resident Ayurvedic Doctor & Anatomy Lecturer",
      spec: "10+ Years Experience · Physiology Audits",
      image: "kairali-learn-medicine-factory-preparation.webp",
      desc: "Supervises residential training, student therapy practice audits, and teaches the clinical fundamentals of Tridosha physiology."
    }
  ];

  const historyTimeline = [
    {
      year: "1908",
      title: "The Family Foundation",
      desc: "Our ancestors establish the first traditional Ayurvedic practice in Kerala, treating local communities using hand-pressed herbal oils."
    },
    {
      year: "1989",
      title: "First Ayurvedic Center in New Delhi",
      desc: "Kairali expands authentic Kerala Ayurveda to the national capital, establishing our flagship treatment center."
    },
    {
      year: "1999",
      title: "The Palakkad Healing Village",
      desc: "Opening of the 65-acre residential campus in Kerala to offer combined medical care and practitioner training."
    },
    {
      year: "2015",
      title: "NABH Accreditation",
      desc: "Our Kerala teaching hospital is awarded national NABH accreditation, validating our strict safety and clinical standards."
    }
  ];

  return (
    <main className="min-h-screen bg-sand/30 py-12 px-6 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-start">
        <div className="border-b border-copper/10 pb-4 mb-8">
          <Breadcrumbs items={breadcrumbItems} locale={locale} />
        </div>

        {/* Brand Story Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6 mb-24">
          <div className="lg:col-span-8 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-laterite font-bold flex items-center gap-1.5 mb-3">
              <FlowerLotus size={12} className="text-laterite" />
              <span>{a("eyebrow")}</span>
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-6">
              {a("h1")}
            </h1>
            <div className="text-sm sm:text-base text-taupe leading-relaxed font-serif space-y-6">
              <p>{a("desc1")}</p>
              <p>{a("desc2")}</p>
              <p className="text-xs sm:text-sm text-laterite font-semibold border-s-4 border-laterite ps-4 bg-laterite/5 py-2 rounded-e-lg">{a("desc3")}</p>
            </div>
          </div>

          {/* Quick Lineage Stats */}
          <div className="lg:col-span-4 bg-sand border border-sand-2 rounded-3xl p-6 shadow-sm space-y-6 mt-8 lg:mt-0">
            <h3 className="font-display font-bold text-lg text-palm border-b border-sand-2 pb-4">
              Institutional Heritage
            </h3>
            
            <div className="flex gap-4 items-start">
              <Medal size={24} className="text-laterite shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-palm text-sm">4 Generations</h4>
                <p className="text-xs text-taupe mt-0.5 leading-relaxed font-serif">Direct family lineage carrying the clinical tradition since 1908.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <ShieldCheck size={24} className="text-laterite shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-palm text-sm">NABH Accredited</h4>
                <p className="text-xs text-taupe mt-0.5 leading-relaxed font-serif">Rigorous safety standards and certified teaching clinics in Kerala.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Users size={24} className="text-laterite shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-palm text-sm">Global Alumni</h4>
                <p className="text-xs text-taupe mt-0.5 leading-relaxed font-serif">Over 1,500 trained therapists and practitioners across 40+ countries.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Immersive Photo section */}
        <div className="rounded-[2.5rem] overflow-hidden border border-copper/10 aspect-[21/9] mb-24 relative shadow-sm">
          <img
            src="/images/kerala-campus-1.jpg"
            alt="Scenic Palakkad Ayurveda training village"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end p-8 text-sand">
            <div className="max-w-xl text-start">
              <span className="text-[10px] uppercase tracking-widest text-turmeric font-bold">Kairali Healing Sanctuary</span>
              <h3 className="font-display text-2xl font-bold mt-1 text-white">Palakkad Campus Gardens</h3>
            </div>
          </div>
        </div>

        {/* Historical Timeline */}
        <div className="mb-24">
          <h2 className="font-display text-3xl font-bold text-palm mb-12 text-center flex items-center justify-center gap-2">
            <Hourglass size={26} className="text-laterite" />
            <span>Our 118-Year Timeline</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {historyTimeline.map((item, index) => (
              <div key={index} className="bg-sand border border-sand-2 rounded-2xl p-6 hover:shadow-sm transition-all text-start relative">
                <span className="font-mono text-xl font-bold text-laterite block mb-2">
                  {item.year}
                </span>
                <h4 className="font-display font-bold text-palm text-base mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-taupe leading-relaxed font-serif">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Directory Preview */}
        <div className="mb-24">
          <h2 className="font-display text-3xl font-bold text-palm mb-12 text-center flex items-center justify-center gap-2">
            <Users size={26} className="text-laterite" />
            <span>Taught By Practicing Physicians</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faculty.map((doc, index) => (
              <div key={index} className="bg-sand border border-sand-2 rounded-3xl overflow-hidden hover:shadow-md transition-all text-start">
                <div className="aspect-[4/3] bg-sand-2/40 relative overflow-hidden">
                  <img src={`/preview/${doc.image}`} alt={doc.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-palm leading-snug">{doc.name}</h3>
                  <span className="text-xs text-laterite font-semibold block mt-0.5">{doc.role}</span>
                  <span className="text-[10px] text-taupe block font-mono uppercase tracking-wider mt-2 mb-4">{doc.spec}</span>
                  <p className="text-xs text-taupe leading-relaxed font-serif">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
