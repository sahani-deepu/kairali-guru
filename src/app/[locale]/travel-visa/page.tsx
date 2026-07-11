import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Airplane, House, IdentificationCard, Suitcase, EnvelopeOpen } from "@phosphor-icons/react/dist/ssr";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function TravelVisaPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Navigation");
  const tr = await getTranslations("Travel");

  const breadcrumbItems = [
    { label: "Travel & Visa Support" }
  ];

  return (
    <main className="min-h-screen bg-sand py-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto font-sans text-start">
        <Breadcrumbs items={breadcrumbItems} locale={locale} />

        <div className="max-w-3xl mb-16 mt-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-laterite block mb-3">
            Logistics Guide
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-4">
            {tr("heading")}
          </h1>
          <p className="text-base text-taupe leading-relaxed font-serif">
            {tr("welcomeMsg")}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 max-w-5xl mx-auto">
          {/* Getting Here */}
          <div className="bg-sand border border-sand-2 rounded-3xl p-8 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-palm/5 flex items-center justify-center text-palm border border-palm/10 mb-6">
              <Airplane size={24} className="text-laterite" />
            </div>
            <h3 className="font-display font-bold text-xl text-palm mb-4">{tr("getHere")}</h3>
            <p className="text-sm text-taupe leading-relaxed font-serif">{tr("keralaInfo")}</p>
          </div>

          {/* Accommodation */}
          <div className="bg-sand border border-sand-2 rounded-3xl p-8 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-palm/5 flex items-center justify-center text-palm border border-palm/10 mb-6">
              <House size={24} className="text-laterite" />
            </div>
            <h3 className="font-display font-bold text-xl text-palm mb-4">Staying with Us</h3>
            <p className="text-sm text-taupe leading-relaxed font-serif">{tr("stayInfo")}</p>
          </div>

          {/* Visa Info */}
          <div className="bg-sand border border-sand-2 rounded-3xl p-8 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-palm/5 flex items-center justify-center text-palm border border-palm/10 mb-6">
              <IdentificationCard size={24} className="text-laterite" />
            </div>
            <h3 className="font-display font-bold text-xl text-palm mb-4">Indian e-Visa Support</h3>
            <p className="text-sm text-taupe leading-relaxed font-serif">{tr("visaInfo")}</p>
          </div>

          {/* What to Bring */}
          <div className="bg-sand border border-sand-2 rounded-3xl p-8 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-palm/5 flex items-center justify-center text-palm border border-palm/10 mb-6">
              <Suitcase size={24} className="text-laterite" />
            </div>
            <h3 className="font-display font-bold text-xl text-palm mb-4">{tr("bring")}</h3>
            <p className="text-sm text-taupe leading-relaxed font-serif">{tr("bringInfo")}</p>
          </div>
        </div>

        {/* Dynamic CTA */}
        <div className="bg-palm text-paper-on-dark rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <EnvelopeOpen size={44} className="text-turmeric mx-auto mb-4" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">Request Travel Assistance</h2>
          <p className="text-xs sm:text-sm text-paper-on-dark/70 mb-8 max-w-md mx-auto leading-relaxed">
            Need an enrollment letter to apply for your Indian visa? Contact our global support desk today.
          </p>
          <Link
            href="/enquiry"
            className="inline-block bg-turmeric text-bark hover:opacity-95 font-semibold px-8 py-3.5 rounded-full text-xs transition-all shadow-md"
          >
            Contact Admissions
          </Link>
        </div>

      </div>
    </main>
  );
}
