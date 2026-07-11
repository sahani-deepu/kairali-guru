import { setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const breadcrumbItems = [
    { label: "Terms of Service" }
  ];

  return (
    <main className="min-h-screen bg-sand py-12 px-6 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto text-start">
        <Breadcrumbs items={breadcrumbItems} locale={locale} />

        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-8 mt-6">
          Terms of Service
        </h1>

        <div className="font-serif text-sm sm:text-base text-taupe leading-relaxed space-y-6">
          <p>
            Welcome to Kairali Guru. By accessing our portal, submitting an enquiry, or enrolling in our programs, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">1. Enrollment Credentials</h3>
          <p>
            To complete enrollment and join training programs, students must present a valid government-issued photo ID (or valid international passport for foreign learners) and two passport-sized photographs.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">2. Authoritative Fees & Payments</h3>
          <p>
            All course fees are formally established in Indian Rupees (INR). Pricing displayed in USD or other currencies is strictly indicative and will be processed based on the current market exchange rates during transaction execution.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">3. Code of Conduct & Accreditations</h3>
          <p>
            Practical training sessions are conducted under strict clinical guidelines at our NABH-accredited healing village. Students must adhere to hospital safety codes and physician directions at all times.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">4. Governing Law</h3>
          <p>
            These terms are governed by the laws of India. Any disputes arising from registrations, admissions, or certifications will be subject to the exclusive jurisdiction of the courts of Palakkad, Kerala.
          </p>
        </div>
      </div>
    </main>
  );
}
