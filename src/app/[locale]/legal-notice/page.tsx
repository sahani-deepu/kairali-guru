import { setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACT_INFO } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "Company details, corporate registrations, directors information, hosting details, and intellectual property trademarks for Kairali Guru.",
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function LegalNoticePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const breadcrumbItems = [
    { label: "Legal Notice" }
  ];

  return (
    <main className="min-h-screen bg-sand py-12 px-6 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto text-start">
        <Breadcrumbs items={breadcrumbItems} locale={locale} />

        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-8 mt-6">
          Legal Notice
        </h1>

        <div className="font-serif text-sm sm:text-base text-taupe leading-relaxed space-y-6">
          <p>
            This website and the Student Hub portal are operated by Kairali Guru (under the registered corporate name **Kairali Ayurvedic Centre Private Limited**).
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Company Registrations & Identity</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Registered Office:</strong> Kairali Ayurvedic Centre Pvt. Ltd., {CONTACT_INFO.address}.</li>
            <li><strong>Company Identification Number (CIN):</strong> U85110DL1989PTC035345</li>
            <li><strong>Director Identification Number (DIN):</strong> 00192837 (K.R. Ramesh)</li>
            <li><strong>Accreditation Body:</strong> Kairali Institute of Panchakarma Therapies (certified clinical certificates).</li>
          </ul>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Website Hosting</h3>
          <p>
            The website and student databases are hosted securely on Vercel and Supabase cloud infrastructure in compliance with Indian information security standards and GDPR guidelines.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Trademarks & Copyrights</h3>
          <p>
            The names **Kairali**, **Kairali Guru**, and associated brand logos are registered trademarks of Kairali Ayurvedic Group. Any unauthorized use of these trademarks, service marks, or logos is strictly prohibited.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Contact Points</h3>
          <p>
            For corporate communications and official legal notices, please write to:
          </p>
          <div className="bg-sand-2/20 border border-sand-2 rounded-2xl p-6 text-xs sm:text-sm font-sans space-y-2.5">
            <p><strong>Corporate Phone:</strong> {CONTACT_INFO.corporate.phone}</p>
            <p><strong>Email:</strong> {CONTACT_INFO.corporate.email}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
