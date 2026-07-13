import { setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";

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
            At Kairali – The Ayurvedic Healing Village, we strive to offer a seamless booking experience while understanding that plans can change unexpectedly. To ensure transparency and ease for our valued guests, our booking, cancellation and refund policy is outlined below:
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Booking Procedure</h3>
          <p>
            To make a reservation at Kairali – The Ayurvedic Healing Village, guests must submit a booking request through our website, email, or phone. A 100% payment is required to confirm the booking. Guests must provide valid ID proof or a passport during check-in. Date modifications are subject to availability. Smoking, alcohol, and non-vegetarian food are strictly prohibited within the premises to maintain a pure Ayurvedic wellness environment. For assistance, guests can contact our reservations team.
          </p>
          <p>
            <strong>Payment terms:</strong> Accepted payment methods include credit/debit cards, UPI, Wire Transfer, PayPal, and Razorpay.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Payment Policy</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Full payment must be made at the time of booking to confirm the reservation.</li>
            <li>Payment methods include credit cards, debit cards, net banking, and digital wallets. Ensure that the transaction is successful to receive a confirmation.</li>
          </ul>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Cancellation Terms</h3>
          <div className="space-y-4">
            <div className="bg-sand-2/20 border border-sand-2 rounded-2xl p-6">
              <h4 className="font-sans font-bold text-palm text-sm uppercase tracking-wider mb-2">30 Days or More Before Arrival</h4>
              <p className="text-xs sm:text-sm text-taupe font-serif">
                Cancellations made 30 days or more prior to the check-in date will receive a full refund of the amount paid. Any bank or transaction fees incurred during payment will also be refunded.
              </p>
            </div>

            <div className="bg-sand-2/20 border border-sand-2 rounded-2xl p-6">
              <h4 className="font-sans font-bold text-palm text-sm uppercase tracking-wider mb-2">15 Days Before Arrival</h4>
              <p className="text-xs sm:text-sm text-taupe font-serif">
                Cancellations made between 15 days and 30 days prior to the check-in date will be eligible for a 50% refund of the amount paid. This amount excludes any non-refundable charges, such as booking fees or taxes.
              </p>
            </div>

            <div className="bg-sand-2/20 border border-sand-2 rounded-2xl p-6">
              <h4 className="font-sans font-bold text-palm text-sm uppercase tracking-wider mb-2">Less Than 15 Days Before Arrival or Changes During Stay</h4>
              <p className="text-xs sm:text-sm text-taupe font-serif">
                Cancellations made less than 15 days before the check-in date will not be eligible for a refund. Any changes to booking dates made during the stay will also not be eligible for a refund.
              </p>
              <p className="text-xs text-copper font-sans mt-2 font-medium">
                * Exceptions may be made in cases of medical emergencies or other unforeseen circumstances, subject to documentation and management approval.
              </p>
            </div>
          </div>

          <h3 className="font-display text-xl font-bold text-palm pt-4">No-Show Policy</h3>
          <p>
            If a guest fails to check in on the scheduled day without providing prior notice, the booking will be considered a no-show. No refund or rescheduling will be provided in such cases.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Early Departure</h3>
          <p>
            In cases where guests choose to depart earlier than their planned stay, refunds will not be provided for the unused portion of their booking.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Refund Turnaround Time</h3>
          <p>
            For eligible cancellations, the refund process will be initiated within 5-7 working days from the date of cancellation confirmation. The refund will be credited to the customer’s bank account or the original payment method used during the booking.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
            <li>Customers will receive a confirmation email once the refund has been processed.</li>
            <li>Please ensure accurate bank or payment details are provided to avoid delays.</li>
          </ul>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Force Majeure Clause</h3>
          <p>
            In the event of circumstances beyond our control, such as natural disasters, pandemics, government-imposed travel restrictions, or other force majeure events, Kairali – The Ayurvedic Healing Village reserves the right to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Reschedule the booking to a mutually agreeable date without additional charges.</li>
            <li>Offer a credit note for the amount paid, valid for future use within a fixed timeline from the date of issuance.</li>
            <li>Process a refund in exceptional cases, subject to management approval and applicable deductions for non-refundable costs incurred.</li>
          </ul>
          <p className="pt-2">
            Guests are encouraged to contact our reservations team to discuss available options in such situations.
          </p>
          <p className="italic font-sans text-xs text-taupe mt-4">
            We appreciate your understanding and cooperation in adhering to these policies. For further assistance or queries, please contact our support team.
          </p>
        </div>
      </div>
    </main>
  );
}
