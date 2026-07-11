import { setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const breadcrumbItems = [
    { label: "Privacy Policy" }
  ];

  return (
    <main className="min-h-screen bg-sand py-12 px-6 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto text-start">
        <Breadcrumbs items={breadcrumbItems} locale={locale} />

        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-8 mt-6">
          Privacy Policy
        </h1>

        <div className="font-serif text-sm sm:text-base text-taupe leading-relaxed space-y-6">
          <p>
            At Kairali Guru, we are committed to safeguarding your privacy and protecting any personal details you share with us. This policy describes how we collect, process, and protect your information when you visit kairali.guru.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">1. Information We Collect</h3>
          <p>
            When you enquire about our courses, request a prospectus, or schedule a call, we collect the personal details you directly input, which include: your name, contact information (phone number and email address), preferred training location, and course interests.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">2. How We Use Your Details</h3>
          <p>
            Your information is used solely to coordinate your course admissions, send the training brochure, arrange transfers, and facilitate communications with our physician-advisors. We never rent or sell student records to third parties.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">3. GDPR & Cookie Compliance</h3>
          <p>
            For international learners inside the EU or UK, we comply fully with GDPR guidelines. Non-essential cookies and analytics scripts are disabled by default and only launch upon your explicit consent via our cookie banner.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">4. Contact Information</h3>
          <p>
            If you have questions about your stored data, want to request deletion, or update details, please email our data protection desk at privacy@kairali.com.
          </p>
        </div>
      </div>
    </main>
  );
}
