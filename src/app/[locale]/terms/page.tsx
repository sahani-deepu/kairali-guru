import { setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACT_INFO } from "@/lib/config";
import { Link } from "@/i18n/routing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the academic terms and conditions of Kairali Guru. Covers course registration, student responsibilities, clinical conduct, and certification guidelines.",
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const breadcrumbItems = [
    { label: "Terms & Conditions" }
  ];

  return (
    <main className="min-h-screen bg-sand py-12 px-6 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto text-start">
        <Breadcrumbs items={breadcrumbItems} locale={locale} />

        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-8 mt-6">
          Terms & Conditions
        </h1>

        <div className="font-serif text-sm sm:text-base text-taupe leading-relaxed space-y-6">
          <p>
            <strong>1. Introduction</strong><br />
            Welcome to Kairali Guru (“we,” “us,” “our”). We are an authentic Ayurvedic training academy dedicated to providing courses, certifications, and educational resources in traditional Ayurvedic sciences. By enrolling in our courses, visiting our campus, using our student portal, or accessing our services, you agree to comply with the terms and conditions set forth herein.
          </p>

          <p>
            <strong>2. Acceptance of Terms</strong><br />
            These Terms and Conditions (“Terms”) govern your registration, enrollment, portal usage, and academic participation at Kairali Guru. By finalizing your application, paying course fees, or logging into our Student Hub portal, you acknowledge that you have read, understood, and agreed to these Terms. If you do not agree, please refrain from enrolling in our programmes.
          </p>

          <p>
            <strong>3. Definitions</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2.5">
            <li><strong>“Student” or “You”</strong> refers to any individual registered, enrolled, or participating in our training programmes, workshops, or certifications.</li>
            <li><strong>“Academy” or “Campus”</strong> refers to Kairali Guru academic institutions, including the clinical campus at Palakkad, Kerala, and the non-residential centre in Mehrauli, New Delhi.</li>
            <li><strong>“Programmes” or “Courses”</strong> includes all online modules, practical schedules, workshops, lectures, and examinations offered by Kairali Guru.</li>
          </ul>

          <p>
            <strong>4. Academic Eligibility & Registration</strong><br />
            Enrolment is open to wellness professionals, holistic healers, yoga practitioners, and health enthusiasts aged 18 or above. To complete your registration, you must provide accurate personal detail, a valid identity proof (Passport/Aadhaar), and two passport-sized photographs. We reserve the right to refuse admission to any applicant who fails to submit required documents.
          </p>

          <p>
            <strong>5. Course Delivery & Campus Guidelines</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2.5">
            <li><strong>Course Workloads:</strong> Every course demands dedicated theory and practical hours (e.g., 40 hours for Level-One, 80 hours for Advanced Therapist) as outlined in the curriculum.</li>
            <li><strong>Clinical Conduct:</strong> While at our Palakkad, Kerala campus, students must maintain a respectful, quiet, and tobacco/alcohol/drug-free lifestyle to align with Ayurvedic clinical values.</li>
            <li><strong>Photography & Recording:</strong> Strictly prohibited during practical therapy sessions and live clinical treatments to safeguard privacy and clinical ethics.</li>
          </ul>

          <div className="bg-sand-2/30 border border-sand-2 rounded-2xl p-6 my-6 font-sans">
            <p className="font-semibold text-palm mb-2">6. Practical Training Cut-off & Attendance</p>
            <p className="text-xs sm:text-sm text-taupe leading-relaxed">
              Attendance of at least <strong>90%</strong> in both theoretical lectures and practical sessions is mandatory for students to be eligible for certification. Late check-ins or unexcused absences during clinical postings in Palakkad will delay graduation and require re-scheduling.
            </p>
          </div>

          <p>
            <strong>7. Intellectual Property</strong><br />
            All curriculum materials, student portal content, lecture videos, terminology sheets, textbooks, slide presentations, and proprietary clinical methods provided to you remain the exclusive intellectual property of Kairali Guru. You are granted a limited, personal, non-transferable licence to access these materials for personal study. Redistribution, copying, broadcasting, or commercial use of our training materials is strictly prohibited and subject to legal action.
          </p>

          <p>
            <strong>8. Student Portal Usage</strong><br />
            Students are assigned unique login credentials for the Kairali Guru Student Hub. You are solely responsible for preserving the confidentiality of your credentials. Sharing your account with third parties is a breach of security and will lead to instant account termination and expulsion from the programme without a refund.
          </p>

          <p>
            <strong>9. Certification & Grading</strong><br />
            Certificates are issued by the <strong>Kairali Institute of Panchakarma Therapies / Kairali Ayurvedic Centre Pvt Ltd</strong>. Certification is not guaranteed merely by payment of fees. It requires successful completion of all online theory modules, practical training hours, clinical assessments, and passing of final examinations.
          </p>

          <p>
            <strong>10. Fee Payments & Cancellations</strong><br />
            All course registration fees must be paid in full prior to the start of the course. For cancellations, date modifications, and refunds, please review our comprehensive <Link href="/refund" className="text-laterite font-medium underline">Cancellation & Refund Policy</Link>.
          </p>

          <p>
            <strong>11. Governing Law & Dispute Resolution</strong><br />
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of New Delhi, India.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Contact Information</h3>
          <p>
            If you have any questions regarding these Terms, please contact our administrative offices:
          </p>
          <div className="bg-sand-2/20 border border-sand-2 rounded-2xl p-6 text-xs sm:text-sm font-sans space-y-2.5">
            <p><strong>Academy Campus:</strong> Kairali Guru Admissions Dept.<br />{CONTACT_INFO.address}</p>
            <p><strong>Admissions Phone:</strong> {CONTACT_INFO.admissions.phone}</p>
            <p><strong>Admissions Email:</strong> {CONTACT_INFO.admissions.email}</p>
            <p><strong>Corporate Office:</strong> {CONTACT_INFO.corporate.email}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
