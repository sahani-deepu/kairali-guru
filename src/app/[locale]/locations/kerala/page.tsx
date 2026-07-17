import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaRenderer from "@/components/SchemaRenderer";
import { LocalBusiness, WithContext } from "schema-dts";
import { MapPin, Airplane, Train, House, Phone, Envelope } from "@phosphor-icons/react/dist/ssr";
import { CONTACT_INFO } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ayurveda Training in Kerala - Palakkad Healing Village",
  description: "Train hands-on at our NABH-accredited healing village in Palakkad, Kerala. Learn from practicing doctors among green organic gardens with residential stay.",
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function KeralaLocationPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Navigation");
  const l = await getTranslations("Locations");

  const breadcrumbItems = [
    { label: t("locations"), href: "/locations" },
    { label: "Kerala Campus" }
  ];

  // Specific LocalBusiness schema for Palakkad Healing Village
  const schema: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kairali- The Ayurvedic Healing Village",
    "image": "https://kairali.guru/images/kerala-campus.jpg",
    "telephone": CONTACT_INFO.admissions.phone,
    "address": {

      "@type": "PostalAddress",
      "streetAddress": "Kairali, P.O. Olassery, Kodumbu",
      "addressLocality": "Palakkad",
      "addressRegion": "Kerala",
      "postalCode": "678551",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.727275,
      "longitude": 76.710507
    },
    "url": "https://kairali.guru/locations/kerala"
  };

  return (
    <>
      <SchemaRenderer schema={schema} />
      <main className="min-h-screen bg-sand py-12 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto font-sans text-start">
          <Breadcrumbs items={breadcrumbItems} locale={locale} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6 mb-20">
            {/* Core Info */}
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold tracking-widest uppercase text-laterite block mb-3">
                {l("kerala.eyebrow")}
              </span>
              <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-6">
                {l("kerala.h1")}
              </h1>
              <p className="text-base sm:text-lg text-bark/85 mb-8 leading-relaxed font-serif">
                {l("kerala.intro")}
              </p>

              <div className="bg-sand-2/30 border border-sand-2 rounded-2xl p-6 mb-8">
                <h3 className="font-display font-bold text-lg text-palm mb-4 flex items-center gap-2">
                  <MapPin size={22} className="text-laterite" />
                  <span>{l("kerala.address")}</span>
                </h3>
                <p className="text-sm text-bark/90 leading-relaxed font-medium">
                  {l("kerala.addressInfo")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4 pt-4 border-t border-sand-2 text-xs text-taupe">
                  <a href={`tel:${CONTACT_INFO.admissions.phone.replace(/[^\d+]/g, "")}`} className="flex items-center gap-2 hover:text-laterite transition-colors">
                    <Phone size={14} className="text-copper" />
                    <span>{CONTACT_INFO.admissions.phone}</span>
                  </a>
                  <a href={`mailto:${CONTACT_INFO.admissions.email}`} className="flex items-center gap-2 hover:text-laterite transition-colors">
                    <Envelope size={14} className="text-copper" />
                    <span>{CONTACT_INFO.admissions.email}</span>
                  </a>
                </div>
              </div>

              {/* Staying on Campus */}
              <div className="mb-12">
                <h3 className="font-display text-2xl font-bold text-palm mb-4 flex items-center gap-2">
                  <House size={24} className="text-laterite" />
                  <span>{l("kerala.stay")}</span>
                </h3>
                <p className="text-sm sm:text-base text-taupe leading-relaxed font-serif">
                  {l("kerala.stayInfo")}
                </p>
              </div>

              {/* Getting Here */}
              <div>
                <h3 className="font-display text-2xl font-bold text-palm mb-6">Getting Here</h3>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-palm/5 flex items-center justify-center text-palm border border-palm/10 shrink-0 mt-1">
                      <Airplane size={20} className="text-laterite" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-palm text-sm">{l("kerala.byAir")}</h4>
                      <p className="text-xs sm:text-sm text-taupe mt-1 leading-relaxed font-serif">
                        {l("kerala.byAirInfo")}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-palm/5 flex items-center justify-center text-palm border border-palm/10 shrink-0 mt-1">
                      <Train size={20} className="text-laterite" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-palm text-sm">{l("kerala.byRail")}</h4>
                      <p className="text-xs sm:text-sm text-taupe mt-1 leading-relaxed font-serif">
                        {l("kerala.byRailInfo")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: CTA & Map */}
            <div className="lg:col-span-4 space-y-8">
              {/* CTA Box */}
              <div className="bg-sand border border-sand-2 rounded-3xl p-6 shadow-md">
                <h3 className="font-display font-bold text-xl text-palm mb-4">Admissions Guidance</h3>
                <p className="text-xs text-taupe leading-relaxed mb-6">
                  Our support team will coordinate airport transfers from Coimbatore (CJB) or Kochi (COK), issue enrollment letters to support your visa application, and manage diet requirements.
                </p>
                <Link
                  href="/enquiry"
                  className="w-full bg-palm hover:bg-palm-2 text-paper-on-dark text-center font-semibold py-3.5 rounded-full text-xs transition-all shadow-md block"
                >
                  {l("kerala.cta")}
                </Link>
              </div>

              {/* Map Box */}
              <div className="bg-sand border border-sand-2 rounded-3xl p-2.5 shadow-md overflow-hidden h-[320px] relative">
                <iframe
                  title="Kairali- The Ayurvedic Healing Village Map"
                  src="https://www.google.com/maps?q=Kairali+-+The+Ayurvedic+Healing+Village,+Olassery,+Palakkad,+Kerala&amp;output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
