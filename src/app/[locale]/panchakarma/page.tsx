import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ShieldCheck, ArrowRight, Plant, Sparkle, Heart } from "@phosphor-icons/react/dist/ssr";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function PanchakarmaPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Navigation");
  const p = await getTranslations("Panchakarma");
  const cta = await getTranslations("CTAs");

  const breadcrumbItems = [
    { label: t("panchakarma") }
  ];

  const therapies = [
    {
      name: "Abhyanga",
      desc: "Classical warm herbal oil massage to balance Vata, improve circulation, and liquefy bodily toxins."
    },
    {
      name: "Shirodhara",
      desc: "Rhythmic pouring of warm medicated oil onto the forehead, calming the nervous system and easing stress."
    },
    {
      name: "Podikizhi",
      desc: "Therapeutic oil fomentation using linen bags packed with herbal powder to relieve pain and joint stiffness."
    },
    {
      name: "Udwarthana",
      desc: "Invigorating dry herbal powder scrub to stimulate lymphatic drainage, reduce fat, and soften skin."
    },
    {
      name: "Kativasti",
      desc: "Medicated oil pool retained on the lower back to strengthen tissues, lubricate joints, and alleviate pain."
    }
  ];

  return (
    <main className="min-h-screen bg-sand py-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={breadcrumbItems} locale={locale} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-6 mb-20 text-start">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-widest uppercase text-laterite block mb-3">
              {p("eyebrow")}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-6">
              {p("h1")}
            </h1>
            <p className="text-base sm:text-lg text-bark/85 mb-8 leading-relaxed font-serif">
              {p("desc1")}
            </p>
            <p className="text-sm sm:text-base text-taupe leading-relaxed font-serif mb-8">
              {p("desc2")}
            </p>
            <p className="text-xs sm:text-sm text-taupe leading-relaxed font-serif mb-8 italic">
              {p("desc3")}
            </p>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 bg-palm hover:bg-palm-2 text-paper-on-dark font-semibold px-8 py-4 rounded-full transition-all shadow-md"
            >
              <span>Explore Panchakarma programmes</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm aspect-[4/5] bg-sand-2/30 border border-sand-2 rounded-3xl p-8 flex flex-col justify-between overflow-hidden shadow-inner">
              <div className="w-12 h-12 rounded-full bg-palm/5 flex items-center justify-center text-palm border border-palm/10">
                <Sparkle size={24} className="text-laterite" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-laterite font-bold block mb-1">Therapist Training</span>
                <h3 className="font-display font-bold text-xl text-palm leading-tight">
                  Taught hands-on by BAMS doctors.
                </h3>
                <p className="text-xs text-taupe mt-2 leading-relaxed font-serif">
                  Master the physical strokes, oil preparation, and diagnostic reasoning behind classical Panchakarma therapies inside our teaching hospital.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Five core therapies */}
        <div className="mb-20 text-start">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-palm mb-10 text-center">
            The Five Classical Panchakarma Therapies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapies.map((therapy, index) => (
              <div
                key={index}
                className="bg-sand border border-sand-2 rounded-2xl p-6 hover:shadow-md transition-all shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-palm/5 flex items-center justify-center text-palm border border-palm/10 mb-4">
                  <Heart size={20} className="text-laterite" />
                </div>
                <h3 className="font-display font-bold text-lg text-palm mb-2">{therapy.name}</h3>
                <p className="text-xs sm:text-sm text-taupe leading-relaxed font-serif">{therapy.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical accreditation Layer */}
        <div className="bg-sand-2/40 border border-sand-2 rounded-3xl p-8 max-w-4xl mx-auto mb-20 text-start font-sans">
          <div className="flex gap-4 items-start">
            <ShieldCheck size={28} className="text-laterite shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display font-bold text-palm text-lg mb-2">Hospital Setting Certification</h4>
              <p className="text-xs text-taupe leading-relaxed">
                Panchakarma is clinical work. We ensure that you study under the supervision of qualified Ayurvedic Doctors who manage active patient cases daily. You practice using organic oils pressed directly inside our manufacturing unit in Kerala.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
