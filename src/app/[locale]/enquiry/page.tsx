import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import EnquiryForm from "@/components/EnquiryForm";
import { Phone, Envelope, Chats } from "@phosphor-icons/react/dist/ssr";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function EnquiryPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Navigation");

  const breadcrumbItems = [
    { label: t("enquire") }
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
                Admissions
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-4">
                Connect With Us
              </h1>
              <p className="text-base text-taupe leading-relaxed font-serif">
                Whether you want to learn the basics of home remedy preparation or build a career as a certified Ayurvedic lifestyle consultant, our advisors will guide you through the enrollment process.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-palm/5 flex items-center justify-center text-palm border border-palm/10 shrink-0">
                  <Phone size={20} className="text-laterite" />
                </div>
                <div>
                  <h4 className="font-semibold text-palm text-sm">Call Admissions Support</h4>
                  <p className="text-xs text-taupe mt-0.5">+91-9289838797</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-palm/5 flex items-center justify-center text-palm border border-palm/10 shrink-0">
                  <Envelope size={20} className="text-laterite" />
                </div>
                <div>
                  <h4 className="font-semibold text-palm text-sm">Email Admissions Office</h4>
                  <p className="text-xs text-taupe mt-0.5">admissions@kairali.guru · info@kairali.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-palm/5 flex items-center justify-center text-palm border border-palm/10 shrink-0">
                  <Chats size={20} className="text-laterite" />
                </div>
                <div>
                  <h4 className="font-semibold text-palm text-sm">WhatsApp Consultation</h4>
                  <p className="text-xs text-taupe mt-0.5">Message us at +91-9289838797 for instant support.</p>
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
