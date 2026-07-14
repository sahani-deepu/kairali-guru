import { setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACT_INFO } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Read Kairali Guru's accessibility guidelines. Learn about keyboard navigation, contrast ratios, and screen reader compatibility details.",
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AccessibilityPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const breadcrumbItems = [
    { label: "Accessibility Statement" }
  ];

  return (
    <main className="min-h-screen bg-sand py-12 px-6 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto text-start">
        <Breadcrumbs items={breadcrumbItems} locale={locale} />

        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-8 mt-6">
          Accessibility Statement
        </h1>

        <div className="font-serif text-sm sm:text-base text-taupe leading-relaxed space-y-6">
          <p>
            Kairali Guru is dedicated to ensuring digital accessibility for all users, including individuals with disabilities. We constantly audit and improve the user experience for everyone, striving to align with the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA standards.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Measures We Take</h3>
          <p>We implement accessibility through the following methods:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Keyboard Navigation:</strong> All menu elements, buttons, and links are fully accessible using standard tab and keyboard navigation.</li>
            <li><strong>Contrast and Font Sizing:</strong> Core fonts and background pairings are selected to achieve a minimum contrast ratio of 4.5:1.</li>
            <li><strong>ARIA Landmarks:</strong> Standard tags, descriptive labels, and screen reader-friendly roles are implemented across structural layouts.</li>
            <li><strong>Alternative Text:</strong> Image assets have descriptive `alt` tags to guide visually impaired students.</li>
          </ul>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Current Compliance Status</h3>
          <p>
            The website is fully compatible with modern screen readers and keyboard accessibility engines. We run regular automated Lighthouse and manual audits to keep accessibility scores above **95/100**.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Feedback & Support</h3>
          <p>
            We welcome your feedback on the accessibility of the Kairali Guru platform. If you encounter any barriers, please email us:
          </p>
          <div className="bg-sand-2/20 border border-sand-2 rounded-2xl p-6 text-xs sm:text-sm font-sans space-y-2.5">
            <p><strong>Accessibility Support:</strong> Data Privacy and Accessibility Team</p>
            <p><strong>Email:</strong> {CONTACT_INFO.corporate.email}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
