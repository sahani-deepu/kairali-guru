import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ShieldCheck, ArrowRight, Tree, House, Plant } from "@phosphor-icons/react/dist/ssr";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function KeralaTopicPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Navigation");
  const k = await getTranslations("Kerala");
  const cta = await getTranslations("CTAs");

  const breadcrumbItems = [
    { label: t("kerala") }
  ];

  return (
    <main className="min-h-screen bg-sand py-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto font-sans">
        <Breadcrumbs items={breadcrumbItems} locale={locale} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-6 mb-20 text-start">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-widest uppercase text-laterite block mb-3">
              {k("eyebrow")}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-6">
              {k("h1")}
            </h1>
            <p className="text-base sm:text-lg text-bark/85 mb-8 leading-relaxed font-serif">
              {k("desc1")}
            </p>
            <p className="text-sm sm:text-base text-taupe leading-relaxed font-serif mb-8">
              {k("desc2")}
            </p>
            <p className="text-xs sm:text-sm text-taupe leading-relaxed font-serif mb-8 italic">
              {k("desc3")}
            </p>
            <div className="flex gap-4">
              <Link
                href="/locations/kerala"
                className="inline-flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta/90 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-md"
              >
                <span>Palakkad campus details</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Graphical side-piece */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm aspect-[4/5] bg-sand-2/30 border border-sand-2 rounded-3xl p-8 flex flex-col justify-between overflow-hidden shadow-inner">
              <div className="w-12 h-12 rounded-full bg-palm/5 flex items-center justify-center text-palm border border-palm/10">
                <Tree size={24} className="text-laterite" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-laterite font-bold block mb-1">Palakkad Campus</span>
                <h3 className="font-display font-bold text-xl text-palm leading-tight">
                  A living Ayurvedic ecosystem.
                </h3>
                <p className="text-xs text-taupe mt-2 leading-relaxed font-serif">
                  Our NABH accredited teaching hospital sits inside 65 acres of lush Kerala flora. Study where your ingredients grow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Camp features */}
        <div className="mb-20 text-start">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-palm mb-10 text-center">
            Inside the Palakkad Healing Village
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-sand border border-sand-2 rounded-2xl p-6 shadow-sm">
              <Plant size={28} className="text-laterite mb-4" />
              <h3 className="font-display font-bold text-lg text-palm mb-2">Medicinal Gardens</h3>
              <p className="text-xs sm:text-sm text-taupe leading-relaxed font-serif">
                Over 1,200 species of medicinal herbs are cultivated on campus. Identify and harvest raw materials for formulation prep.
              </p>
            </div>
            <div className="bg-sand border border-sand-2 rounded-2xl p-6 shadow-sm">
              <House size={28} className="text-laterite mb-4" />
              <h3 className="font-display font-bold text-lg text-palm mb-2">Ayurvedic Kitchen</h3>
              <p className="text-xs sm:text-sm text-taupe leading-relaxed font-serif">
                Organic, vegetarian meals prepared fresh according to your constitution (Prakriti), matching Ayurvedic nutrition lessons.
              </p>
            </div>
            <div className="bg-sand border border-sand-2 rounded-2xl p-6 shadow-sm">
              <ShieldCheck size={28} className="text-laterite mb-4" />
              <h3 className="font-display font-bold text-lg text-palm mb-2">NABH Hospital</h3>
              <p className="text-xs sm:text-sm text-taupe leading-relaxed font-serif">
                A fully licensed and accredited hospital setting where real consultations, pulse readings, and Panchakarma take place daily.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
