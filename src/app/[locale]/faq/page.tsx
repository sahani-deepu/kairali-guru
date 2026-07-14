import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import { Question } from "@phosphor-icons/react/dist/ssr";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQs)",
  description: "Find answers to commonly asked questions regarding our credentials, online foundations, campus accommodation in Kerala, and study prerequisites.",
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function FAQPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const f = await getTranslations("FAQ");

  const breadcrumbItems = [
    { label: "FAQs" }
  ];

  const faqItems = [
    { question: f("q1"), answer: f("a1") },
    { question: f("q2"), answer: f("a2") },
    { question: f("q3"), answer: f("a3") },
    { question: f("q4"), answer: f("a4") },
    { question: f("q5"), answer: f("a5") },
    { question: f("q6"), answer: f("a6") },
    { question: f("q7"), answer: f("a7") }
  ];

  return (
    <main className="min-h-screen bg-sand py-12 px-6 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto text-start">
        <Breadcrumbs items={breadcrumbItems} locale={locale} />

        <div className="mb-16 mt-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-laterite block mb-3">
            Q&A Hub
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-taupe leading-relaxed font-serif">
            Find answers to commonly asked questions regarding our credentials, online foundations, campus accommodation in Kerala, and study prerequisites.
          </p>
        </div>

        {/* Collapsible FAQ Accordion */}
        <div className="mb-20">
          <FAQAccordion items={faqItems} />
        </div>

        {/* Dynamic CTA */}
        <div className="bg-sand border border-sand-2 rounded-3xl p-8 text-center max-w-xl mx-auto shadow-sm">
          <Question size={32} className="text-laterite mx-auto mb-4" />
          <h3 className="font-display font-bold text-palm text-lg mb-2">Still Have Questions?</h3>
          <p className="text-xs text-taupe leading-relaxed mb-6">
            If you need details about custom groups, company workshops, or regional calendar cycles, please speak with an advisor.
          </p>
          <Link
            href="/enquiry"
            className="inline-block bg-palm hover:bg-palm-2 text-paper-on-dark font-semibold px-6 py-2.5 rounded-full text-xs transition-all shadow-sm"
          >
            Contact Advisor
          </Link>
        </div>

      </div>
    </main>
  );
}

