import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import EnquiryForm from "@/components/EnquiryForm";
import { Phone, Envelope, Chats } from "@phosphor-icons/react/dist/ssr";
import { CONTACT_INFO } from "@/lib/config";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const cta = await getTranslations({ locale, namespace: "CTAs" });
  return {
    title: `${cta("speak")} | Kairali Guru`,
    description: "Schedule a free consultation with our BAMS and MD physician-advisors to discuss your learning goals, campus options, and certification path.",
  };
}

export default async function FreeConsultationPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Navigation");
  const cta = await getTranslations("CTAs");

  const breadcrumbItems = [
    { label: cta("speak") }
  ];

  return (
    <main className="min-h-screen bg-sand py-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto font-sans text-start">
        <Breadcrumbs items={breadcrumbItems} locale={locale} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-6 items-start">
          {/* Sidebar admissions details */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-laterite block mb-3">
                Admissions & Guidance
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-4">
                {cta("speak")}
              </h1>
              <p className="text-base text-taupe leading-relaxed font-serif">
                Schedule a free consultation with our certified BAMS and MD physician-advisors. Discuss your learning goals, explore the campus options (Kerala or Delhi), and find the right certification path for your clinical practice or personal wellness journey.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-palm/5 flex items-center justify-center text-palm border border-palm/10 shrink-0">
                  <Phone size={20} className="text-laterite" />
                </div>
                <div>
                  <h4 className="font-semibold text-palm text-sm">Call Admissions Support</h4>
                  <p className="text-xs text-taupe mt-0.5">{CONTACT_INFO.admissions.phone}</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-palm/5 flex items-center justify-center text-palm border border-palm/10 shrink-0">
                  <Envelope size={20} className="text-laterite" />
                </div>
                <div>
                  <h4 className="font-semibold text-palm text-sm">Email Admissions Office</h4>
                  <p className="text-xs text-taupe mt-0.5">{CONTACT_INFO.admissions.email} · {CONTACT_INFO.corporate.email}</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-palm/5 flex items-center justify-center text-palm border border-palm/10 shrink-0">
                  <Chats size={20} className="text-laterite" />
                </div>
                <div>
                  <h4 className="font-semibold text-palm text-sm">WhatsApp Consultation</h4>
                  <p className="text-xs text-taupe mt-0.5">Message us at {CONTACT_INFO.admissions.whatsapp} for instant support.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form wrapper */}
          <div className="lg:col-span-6 w-full">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </main>
  );
}
