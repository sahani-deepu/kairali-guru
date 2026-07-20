import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MapPin, ArrowRight, ShieldCheck, Calendar } from "@phosphor-icons/react/dist/ssr";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus Locations - Kerala & New Delhi Centres",
  description: "Explore Kairali Guru's campuses. Study dynamically at our NABH-accredited residential Healing Village in Palakkad, Kerala, or our non-residential centre in South Delhi.",
};

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

              {/* Google Map */}
              <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-copper/10 mb-8 relative shadow-sm">
                <iframe
                  title="Palakkad Campus, Kerala Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.4735237895056!2d76.62125137577531!3d10.473432489679198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7e69f8c148e23%3A0x6a1005a5a1f269a8!2sKairali%20-%20The%20Ayurvedic%20Healing%20Village!5e0!3m2!1sen!2sin!4v1721200000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <Link
              href="/locations/kerala"
              className="w-full flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta/90 text-white font-semibold py-3.5 rounded-full text-xs transition-all shadow-md"
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

              {/* Google Map */}
              <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-copper/10 mb-8 relative shadow-sm">
                <iframe
                  title="Mehrauli Center, New Delhi Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.203362143431!2d77.1752837753634!3d28.528498875689133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d6a695e263d%3A0x6b44917a86f91605!2sKairali%20Ayurvedic%20Centre!5e0!3m2!1sen!2sin!4v1721200000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <Link
              href="/locations/delhi"
              className="w-full flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta/90 text-white font-semibold py-3.5 rounded-full text-xs transition-all shadow-md"
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
