import { setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACT_INFO } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy",
  description: "Learn about Kairali Guru's payment procedures, cancellation policies, deferral guidelines, and refund schedules.",
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function RefundPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const breadcrumbItems = [
    { label: "Cancellation & Refund Policy" }
  ];

  return (
    <main className="min-h-screen bg-sand py-12 px-6 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto text-start">
        <Breadcrumbs items={breadcrumbItems} locale={locale} />

        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-8 mt-6">
          Cancellation & Refund Policy
        </h1>

        <div className="font-serif text-sm sm:text-base text-taupe leading-relaxed space-y-6">
          <p>
            At Kairali Guru, we are committed to providing premium, authentic education and practical clinical training. Because course enrollment sizes are capped and resources are allocated in advance, our cancellation, deferral, and refund guidelines are outlined below:
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Enrolment & Payment Procedure</h3>
          <p>
            To confirm registration in any Kairali Guru certification programme or workshop, a 100% advance payment of the course fee is required. This payment reserves your seat in both the theoretical portal modules and the practical clinical components. Acceptable payment methods include credit/debit cards, bank wire transfers, UPI, PayPal, and Razorpay.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Cancellation and Deferral Guidelines</h3>
          <div className="space-y-4">
            <div className="bg-sand-2/20 border border-sand-2 rounded-2xl p-6 font-sans">
              <h4 className="font-bold text-palm text-sm uppercase tracking-wider mb-2">30 Days or More Prior to Course Start</h4>
              <p className="text-xs sm:text-sm text-taupe font-serif">
                Cancellations requested 30 days or more prior to the scheduled course launch (or portal access start date) will receive a **100% refund**, minus a 5% administrative fee and bank transaction costs.
              </p>
            </div>

            <div className="bg-sand-2/20 border border-sand-2 rounded-2xl p-6 font-sans">
              <h4 className="font-bold text-palm text-sm uppercase tracking-wider mb-2">15 to 29 Days Prior to Course Start</h4>
              <p className="text-xs sm:text-sm text-taupe font-serif">
                Cancellations requested between 15 and 29 days prior to the course launch date are eligible for a **50% refund** of the amount paid.
              </p>
            </div>

            <div className="bg-sand-2/20 border border-sand-2 rounded-2xl p-6 font-sans">
              <h4 className="font-bold text-palm text-sm uppercase tracking-wider mb-2">Less Than 15 Days Prior or After Access is Granted</h4>
              <p className="text-xs sm:text-sm text-taupe font-serif">
                No refunds will be granted for cancellations requested less than 15 days before the course start date, or after access credentials for the Student Hub portal have been generated and dispatched.
              </p>
            </div>
          </div>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Deferral & Schedule Modifications</h3>
          <p>
            If you are unable to attend the practical session on campus due to professional conflicts or health conditions, you may request a deferral to a subsequent batch. 
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Deferral requests must be submitted in writing at least 15 days before the practical start date.</li>
            <li>One deferral is allowed free of charge. Additional deferrals will incur a scheduling fee of ₹5,000 / $70.</li>
          </ul>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Practical Component No-Show Policy</h3>
          <p>
            If a student fails to arrive at the Palakkad campus for the practical training schedule without at least 72 hours of written notification, the practical hours will be forfeited. No rescheduling, credit, or refund will be issued under such conditions.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Refund Processing Timeline</h3>
          <p>
            Once a refund request is officially approved by administration, the refund will be processed and returned to the original payment source (or bank account) within **7 to 10 working days**. You will receive an automated transaction receipt via email.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Force Majeure Clause</h3>
          <p>
            In the event that the Academy must cancel or postpone a course due to circumstances beyond control (e.g. natural disasters, pandemic lockdowns, state travel restrictions), Kairali Guru will:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Offer a priority seat in the next scheduled block or batch.</li>
            <li>Issue an educational credit note valid for any other certification programme within 12 months.</li>
            <li>Process a full refund in exceptional scenarios, after deducting irrecoverable third-party material or licensing costs.</li>
          </ul>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Questions</h3>
          <p>
            For all cancellations and refund requests, write directly to the Registrar:
          </p>
          <div className="bg-sand-2/20 border border-sand-2 rounded-2xl p-6 text-xs sm:text-sm font-sans space-y-2.5">
            <p><strong>Email:</strong> {CONTACT_INFO.admissions.email}</p>
            <p><strong>Phone:</strong> {CONTACT_INFO.admissions.phone}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
