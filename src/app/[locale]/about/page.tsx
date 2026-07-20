import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ShieldCheck, Medal, Users, Hourglass, FlowerLotus } from "@phosphor-icons/react/dist/ssr";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our 118-Year Family Lineage",
  description: "Discover Kairali's family practice of Ayurveda since 1908. Learn about our lineage, our practicing BAMS physicians, and our NABH-accredited healing village.",
};

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
      name: "Dr. Deepu John",
      role: "Chief Physician & HOD",
      spec: "12+ Years Experience · Tridosha & Prakriti Diagnosis",
      image: "/images/Dr.-Deepu-John.webp",
      desc: "Expertise in diagnosis of Tridosha balance (Vata, Pitta, Kapha) and Prakriti (Unique body constitution)."
    },
    {
      name: "Dr. Ashikha Raj",
      role: "Physician / RMO",
      spec: "8+ Years Experience · Traditional & Modern Therapeutics",
      image: "/images/Dr.-Ashikha-Raj.webp",
      desc: "Dr. Ashikha Raj exemplifies the integration of traditional Ayurvedic principles with modern therapeutic techniques."
    },
    {
      name: "Dr. Rahul R",
      role: "Ayurvedic Physician",
      spec: "7+ Years Experience · Tridosha & Prakriti Diagnosis",
      image: "/images/Dr.-Rahul-R.webp",
      desc: "Expertise in diagnosis of Tridosha balance (Vata, Pitta, Kapha) and Prakriti (Unique body constitution)."
    },
    {
      name: "Dr. Akhila Oommen",
      role: "Ayurvedic Physician",
      spec: "9+ Years Experience · Arthritis & Women's Health",
      image: "/images/Dr.-Akhila-Oommen.webp",
      desc: "Expertise in treating various arthritis conditions, gynecological issues, stress, and sleep disorders."
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

  const boardOfDirectors = [
    {
      name: "K.V Ramesh",
      role: "Chairman and Managing Director",
      image: "/images/d1-2.png"
    },
    {
      name: "Gita Ramesh",
      role: "Joint Managing Director",
      image: "/images/gita-mam-500x368.webp"
    },
    {
      name: "Abhilash K.R",
      role: "Director",
      image: "/images/director-kairali-500x368.webp"
    },
    {
      name: "Abishek",
      role: "Director",
      image: "/images/K.R.-ABISHEK-min.png"
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
                <p className="text-xs text-taupe mt-0.5 leading-relaxed font-serif">Family lineage carrying the clinical tradition since 1908.</p>
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

        {/* Board of Directors section */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-laterite font-bold block">
              Board of Directors
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-light text-palm mt-2">
              Our <span className="text-laterite">Founding Leadership</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardOfDirectors.map((director, index) => (
              <div key={index} className="bg-sand border border-copper/10 rounded-2xl overflow-hidden text-start group flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div className="aspect-[4/5] bg-sand-2/20 relative overflow-hidden">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-display font-bold text-palm text-lg">{director.name}</h4>
                  <span className="text-xs text-laterite font-semibold block mt-1">{director.role}</span>
                </div>
              </div>
            ))}
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
            <span>Taught by Respected Physicians & Experts</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.map((doc, index) => (
              <div key={index} className="group [perspective:1000px] h-[450px] w-full cursor-pointer">
                <div className="relative w-full h-full rounded-3xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-sm hover:shadow-md">

                  {/* Front Face (Seated Photo & Title) */}
                  <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden bg-sand border border-sand-2 [backface-visibility:hidden] flex flex-col justify-between">
                    <div className="aspect-[4/5] bg-sand-2/20 relative overflow-hidden">
                      <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="p-5 text-start">
                      <h3 className="font-display font-bold text-base text-palm leading-snug">{doc.name}</h3>
                      <span className="text-[11px] text-laterite font-semibold block mt-0.5">{doc.role}</span>
                      <span className="text-[9px] text-taupe block font-mono uppercase tracking-wider mt-1">{doc.spec}</span>
                    </div>
                  </div>

                  {/* Back Face (Info & Description) */}
                  <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden bg-sand-2 text-palm p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between text-start border border-copper/20">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-display font-bold text-base text-palm leading-snug">{doc.name}</h3>
                        <span className="text-xs text-turmeric font-semibold block mt-0.5">{doc.role}</span>
                        <span className="text-[9px] text-taupe block font-mono uppercase tracking-wider mt-1 border-b border-copper/15 pb-3">{doc.spec}</span>
                      </div>
                      <p className="text-xs text-taupe leading-relaxed font-serif">
                        {doc.desc}
                      </p>
                    </div>
                    <span className="text-[9px] font-mono text-turmeric/80 uppercase tracking-widest border-t border-copper/15 pt-3">
                      Kairali Academic Faculty
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
