import { setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACT_INFO } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Kairali Guru collects, processes, and protects your personal data in compliance with GDPR and Indian DPDP privacy regulations.",
};

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
            Kairali Guru is committed to protecting the privacy and personal data of our students, prospective applicants, and portal users. This Privacy Policy explains how we collect, process, secure, and respect your personal information when you enroll in our Ayurvedic training courses, access the student portal, or interact with our website.
          </p>

          <p>
            We adhere to global privacy principles, including the General Data Protection Regulation (GDPR) for European Union residents and the Digital Personal Data Protection (DPDP) Act of India. This policy is updated regularly to ensure alignment with active regulations.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Data Controller & Contact</h3>
          <p>
            For any queries or rights requests under privacy laws, please contact our Data Protection Officer:
          </p>
          <div className="bg-sand-2/20 border border-sand-2 rounded-2xl p-6 text-xs sm:text-sm font-sans space-y-2.5">
            <p><strong>Office:</strong> Kairali Ayurvedic Health Resort Pvt. Ltd.<br />{CONTACT_INFO.address}</p>
            <p><strong>Email:</strong> {CONTACT_INFO.corporate.email}</p>
            <p><strong>Admissions Inquiries:</strong> {CONTACT_INFO.admissions.email}</p>
          </div>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Personal Data We Collect</h3>
          <p>We may collect and process the following categories of information:</p>
          <ul className="list-disc pl-5 space-y-2 font-sans text-xs sm:text-sm">
            <li><strong>Enrollment Details:</strong> Full name, date of birth, gender, nationality, passport details (for international students), or Aadhaar details (for Indian students).</li>
            <li><strong>Contact Information:</strong> Mailing address, phone number, WhatsApp contact, and email address.</li>
            <li><strong>Academic History & Credentials:</strong> Past professional certificates, yoga certifications, medical backgrounds, or CV transcripts.</li>
            <li><strong>Student Portal Usage:</strong> Login details, session duration, quiz progress, syllabus tracking, and interaction logs within the Student Hub.</li>
            <li><strong>Payment & Transaction Information:</strong> Bank details, transfer receipts, and billing identifiers (payment tokens are processed securely by Razorpay/Stripe, and card numbers are never stored on our servers).</li>
          </ul>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Legal Basis & Purpose of Processing</h3>
          <p>We process your data under the following legal bases:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Performance of Contract:</strong> To manage your student registration, deliver courses, conduct practical assessments, process payments, and issue academic certifications.</li>
            <li><strong>Consent:</strong> When you subscribe to our newsletter or request a prospectus via our enquiry form, you explicitly consent to receiving marketing communications.</li>
            <li><strong>Compliance with Legal Obligations:</strong> To comply with tax, education, and health standards required by Indian state and central regulators.</li>
          </ul>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Your Rights under GDPR & DPDP</h3>
          <p>Depending on your location, you have the following rights regarding your personal information:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Right to Access:</strong> Ask for copies of the personal data we hold about you.</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete details.</li>
            <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request deletion of your data when it is no longer required for academic tracking or tax record retention.</li>
            <li><strong>Right to Restrict or Object to Processing:</strong> Ask us to limit or cease processing your data.</li>
            <li><strong>Right to Data Portability:</strong> Obtain your transcripts and portal data in a structured, machine-readable format.</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw marketing consent at any time.</li>
          </ul>
          <p>To exercise any of these rights, please email us at <a href={`mailto:${CONTACT_INFO.corporate.email}`} className="text-laterite font-medium underline">{CONTACT_INFO.corporate.email}</a>. We respond to all verified requests within 30 days.</p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Data Security & Encryption</h3>
          <p>
            Kairali Guru implements industry-standard physical, technical, and administrative controls to protect your data. All communication with our website and Student Hub portal is encrypted using Secure Socket Layer (SSL/TLS) technology. Database access is strictly controlled, and environment secrets are managed server-side to prevent leaks.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Data Retention Policy</h3>
          <p>
            Student registration records, academic transcripts, and certifications are retained indefinitely to allow verification of credentials by employers or institutions. Standard portal logs and query entries are kept for 3 years, after which they are anonymized or permanently deleted.
          </p>
        </div>
      </div>
    </main>
  );
}
