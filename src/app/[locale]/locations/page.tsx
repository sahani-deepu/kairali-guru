import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MapPin, ArrowRight, ShieldCheck, Calendar } from "@phosphor-icons/react/dist/ssr";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function LocationsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Navigation");
  const l = await getTranslations("Locations");

  const breadcrumbItems = [
    { label: t("locations") }
  ];

  return (
    <main className="min-h-screen bg-sand py-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto font-sans text-start">
        <Breadcrumbs items={breadcrumbItems} locale={locale} />

        <div className="max-w-3xl mb-16 mt-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-laterite block mb-3">
            Training Venues
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-4">
            Our Training Locations
          </h1>
          <p className="text-base text-taupe leading-relaxed font-serif">
            Choose where to complete your hands-on practical training. Live on campus at our accredited clinical village in Kerala, or study closer to the capital at our Delhi centre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
          {/* Kerala Card */}
          <div className="bg-sand border border-sand-2 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition-all">
            <div>
              <div className="flex justify-between items-start gap-4 mb-6">
                <span className="font-mono text-xs text-laterite font-bold bg-laterite/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  Residential
                </span>
                <span className="text-xs text-taupe font-semibold">Palakkad, Kerala</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-palm mb-4">
                {l("kerala.eyebrow")}
              </h3>
              <p className="text-sm text-taupe leading-relaxed mb-8 font-serif">
                {l("kerala.intro")}
              </p>
              <div className="space-y-4 border-t border-sand-2 pt-6 mb-8 text-xs text-taupe">
                <div className="flex gap-3">
                  <MapPin size={18} className="text-copper shrink-0" />
                  <span>Palakkad District 678551, Kerala, India</span>
                </div>
                <div className="flex gap-3">
                  <ShieldCheck size={18} className="text-copper shrink-0" />
                  <span>NABH-accredited Ayurvedic Teaching Hospital</span>
                </div>
              </div>
            </div>
            <Link
              href="/locations/kerala"
              className="w-full flex items-center justify-center gap-2 bg-palm hover:bg-palm-2 text-paper-on-dark font-semibold py-3.5 rounded-full text-xs transition-all shadow-sm"
            >
              <span>Explore Kerala campus</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Delhi Card */}
          <div className="bg-sand border border-sand-2 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition-all">
            <div>
              <div className="flex justify-between items-start gap-4 mb-6">
                <span className="font-mono text-xs text-laterite font-bold bg-laterite/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  Non-Residential
                </span>
                <span className="text-xs text-taupe font-semibold">South Delhi</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-palm mb-4">
                {l("delhi.eyebrow")}
              </h3>
              <p className="text-sm text-taupe leading-relaxed mb-8 font-serif">
                {l("delhi.intro")}
              </p>
              <div className="space-y-4 border-t border-sand-2 pt-6 mb-8 text-xs text-taupe">
                <div className="flex gap-3">
                  <MapPin size={18} className="text-copper shrink-0" />
                  <span>Mehrauli, New Delhi 110030, India</span>
                </div>
                <div className="flex gap-3">
                  <Calendar size={18} className="text-copper shrink-0" />
                  <span>Weekly theoretical and practical training classes</span>
                </div>
              </div>
            </div>
            <Link
              href="/locations/delhi"
              className="w-full flex items-center justify-center gap-2 bg-palm hover:bg-palm-2 text-paper-on-dark font-semibold py-3.5 rounded-full text-xs transition-all shadow-sm"
            >
              <span>Explore Delhi centre</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
