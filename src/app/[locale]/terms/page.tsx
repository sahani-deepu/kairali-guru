import { setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";

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
            Welcome to Kairali – The Ayurvedic Healing Village (“we,” “us,” “our”). We specialize in providing authentic Ayurvedic therapies and a serene environment designed for relaxation, rejuvenation, and holistic wellness. By accessing or using our website, facilities, accommodations, or services, you agree to comply with the terms and conditions set forth herein.
          </p>

          <p>
            <strong>2. Acceptance of Terms</strong><br />
            These Terms and Conditions (“Terms”) govern your use of our services, including bookings, Ayurvedic treatments, accommodations, website access, and related offerings. By confirming a reservation, checking into our property, or utilizing any of our services, you acknowledge that you have read, understood, and agreed to these Terms. If you do not agree with these Terms, please refrain from using our services.
          </p>

          <p>
            <strong>3. Definitions and Terminology</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2.5">
            <li><strong>“Guest” or “You”</strong> refers to any individual making a reservation, staying at our property, or participating in our treatments or activities.</li>
            <li><strong>“Property”</strong> refers to Kairali – The Ayurvedic Healing Village premises, Palakkad, Kerala, including accommodations, treatment centers, dining areas, recreational facilities, and other related services.</li>
            <li><strong>“Services”</strong> include all Ayurvedic treatments, therapies, wellness consultations, accommodation bookings, dining, activities, and any additional offerings provided by Kairali – The Ayurvedic Healing Village.</li>
          </ul>

          <p>
            <strong>4. Eligibility to Use</strong><br />
            You must be at least 18 years of age or the age of legal majority in your jurisdiction to make a reservation or use our services. Minors (below 18 years) must be accompanied by a parent or guardian, who will assume full responsibility for the minor’s actions and adherence to these Terms.
          </p>

          <p>
            <strong>5. Booking and Reservation Policy</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2.5">
            <li><strong>Booking Confirmation:</strong> Reservations will be confirmed against 100% advance payment.</li>
            <li><strong>Advance Requirements:</strong> We may request additional information, such as identification documents or health details, to ensure appropriate treatments and arrangements.</li>
            <li><strong>Child Policy:</strong> Children below 5 years can stay and have meals free of charge when sharing the room and existing bedding with adults. Additional charges may apply for older children or extra beds.</li>
          </ul>

          <div className="bg-sand-2/30 border border-sand-2 rounded-2xl p-6 my-6">
            <p className="font-semibold text-palm mb-2">6. Doctor Consultation Timing</p>
            <p className="text-xs sm:text-sm text-taupe leading-relaxed">
              Guests with same-day bookings or walk-in arrivals must check in before <strong>3:30 PM</strong> to be eligible for a doctor consultation on the same day. This cut-off is essential to allow our Ayurvedic doctors to provide a detailed and unhurried consultation experience.
            </p>
            <p className="text-xs sm:text-sm text-taupe leading-relaxed mt-2">
              Arrivals after 3:30 PM will have their consultation scheduled for the next available day, depending on doctor availability. We encourage all guests to plan their travel accordingly to avoid delays in beginning their healing program.
            </p>
          </div>

          <p>
            <strong>7. Payment Terms and Methods</strong><br />
            <strong>Payment Methods:</strong> Guests may pay by credit/debit card, bank transfer, or other acceptable methods as specified at the time of booking. All payments will be processed in the specified currency. Any bank charges, transaction fees, or exchange rate differences are the responsibility of the Guest.
          </p>

          <p>
            <strong>8. Pricing, Offers, and Taxes</strong><br />
            <strong>Pricing:</strong> All rates and charges will be as stated at the time of booking. We reserve the right to modify prices, promotions, and packages without prior notice but changes will not affect confirmed bookings. All applicable taxes, government levies, and service charges will be added to the bill as required by law.
          </p>

          <p>
            <strong>9. Cancellation, Amendments, and Refund Policy</strong><br />
            For details on cancellations, amendments, and eligible refunds, please refer directly to our comprehensive <a href="/refund" className="text-laterite font-medium underline">Cancellation & Refund Policy</a>.
          </p>

          <p>
            <strong>10. Check-in, Check-out, and Stay Policies</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2.5">
            <li><strong>Check-In Time:</strong> 12:00 PM</li>
            <li><strong>Check-Out Time:</strong> 10:00 AM</li>
            <li><strong>Early/Late Requests:</strong> Early check-ins and late check-outs are subject to availability and may incur additional charges.</li>
            <li><strong>Length of Stay:</strong> Minimum or maximum stay requirements may apply during certain seasons, offers, or events.</li>
          </ul>

          <p>
            <strong>11. Guest Conduct and Usage Restrictions</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2.5">
            <li><strong>Ayurvedic Guidelines:</strong> Guests are expected to follow Ayurvedic guidelines provided by our experts and maintain the tranquility of the environment.</li>
            <li><strong>Prohibited Items and Behavior:</strong> Smoking, alcohol consumption, and non-vegetarian food are strictly forbidden.</li>
            <li><strong>Disruptive Conduct:</strong> Any unacceptable behavior or violation of Property rules may lead to immediate termination of stay without refund.</li>
          </ul>

          <p>
            <strong>12. Additional Services and Charges</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2.5">
            <li><strong>Facilities Use:</strong> Guests may use recreational grounds, yoga studios, and swimming pools during operational hours and must adhere to posted rules.</li>
            <li><strong>Damage to Property:</strong> Guests are liable for any damage caused to Property facilities or equipment. Repair or replacement costs will be charged to the Guest’s account.</li>
            <li><strong>Extra Services:</strong> Additional services such as laundry, guided tours, or special diets may incur extra charges.</li>
          </ul>

          <p>
            <strong>13. Privacy and Data Protection</strong><br />
            <strong>Data Use:</strong> Personal information collected during booking and treatment consultations will be kept confidential and used solely for reservation, treatment planning, and associated services.<br />
            <strong>Marketing Consent:</strong> With prior authorization, we may use anonymous feedback or endorsements for promotional purposes. Guests can opt-out by notifying management.<br />
            <strong>International Data Protection Compliance:</strong> We are committed to protecting your personal data in accordance with applicable laws and regulations worldwide. While we primarily operate under the Digital Personal Data Protection Act (DPDPA) and IT Act of India, we also comply with relevant international data protection standards that may apply to our global guests, including but not limited to:
          </p>
          <ul className="list-disc pl-5 space-y-2.5 text-xs sm:text-sm">
            <li>European Union’s General Data Protection Regulation (GDPR)</li>
            <li>California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA)</li>
            <li>South Korea’s Personal Information Protection Act (PIPA)</li>
            <li>Singapore’s Personal Data Protection Act (PDPA)</li>
            <li>Japan’s Act on the Protection of Personal Information (APPI)</li>
            <li>Brazil’s Lei Geral de Proteção de Dados (LGPD)</li>
          </ul>
          <p>
            For specific inquiries regarding how we handle your data in accordance with regulations in your region, please contact our Data Protection Officer via the contact information provided in Section 25.
          </p>

          <p>
            <strong>14. Third-Party Services and Links</strong><br />
            Our website or other materials may reference third-party services, links, or resources. We do not control or endorse these external entities and are not responsible for the content, privacy practices, or services provided by third parties.
          </p>

          <p>
            <strong>15. Force Majeure</strong><br />
            We are not liable for cancellations, delays, modifications, or interruptions caused by events beyond our control (e.g., natural disasters, pandemics, government restrictions). In such cases, we will endeavor to reschedule or provide suitable alternatives as circumstances permit.
          </p>

          <p>
            <strong>16. Website Use and Intellectual Property</strong><br />
            <strong>Content Ownership:</strong> All content, trademarks, logos, and intellectual property displayed on our website and marketing materials are owned or licensed by Kairali – The Ayurvedic Healing Village.<br />
            <strong>Permitted Use:</strong> You may not reproduce, modify, distribute, or exploit our content without express written permission.
          </p>

          <p>
            <strong>17. Liability and Disclaimers</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2.5">
            <li><strong>Health Disclosure:</strong> Guests must disclose any allergies, pre-existing medical conditions, or health concerns before treatments.</li>
            <li><strong>Assumption of Risk:</strong> Guests participate in therapies, activities, and exercises at their own risk. We are not responsible for injuries resulting from undisclosed conditions or non-compliance with instructions.</li>
            <li><strong>No Warranties:</strong> While we strive to provide exceptional services, we do not guarantee the outcome or effectiveness of any particular treatment or activity.</li>
          </ul>

          <p>
            <strong>18. Indemnification</strong><br />
            You agree to indemnify, defend, and hold harmless Kairali – The Ayurvedic Healing Village, its employees, and affiliates from any claims, losses, liabilities, damages, costs, or expenses arising from your misuse of our services, violation of these Terms, or infringement of any third-party rights.
          </p>

          <p>
            <strong>19. Prohibited Activities</strong><br />
            <strong>Illegal Activities:</strong> Guests shall not engage in any illegal, harmful, or fraudulent activities while on our Property or using our services.<br />
            <strong>Unauthorized Commercial Use:</strong> The Property, its facilities, and online platforms may not be used for any unauthorized commercial purpose.
          </p>

          <p>
            <strong>20. Security and Fraud Prevention</strong><br />
            We take reasonable measures to protect your information and maintain the security of our Property. Guests are expected to safeguard their personal belongings, payment information, and identification documents. We reserve the right to refuse service or report suspicious activities to the authorities.
          </p>

          <p>
            <strong>21. Governing Law and Dispute Resolution</strong><br />
            These Terms are governed by and construed in accordance with Indian law, and any disputes arising out of or related to these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Kerala, India.
          </p>

          <p>
            <strong>22. Termination of Services</strong><br />
            We reserve the right to terminate or restrict access to our services at any time, for any reason, including but not limited to non-compliance with these Terms, without any liability to you.
          </p>

          <p>
            <strong>23. Changes to Terms and Conditions</strong><br />
            We may update or modify these Terms at any time without prior notice. Such changes will be effective upon posting on our website. Your continued use of our services after such modifications constitutes acceptance of the revised Terms.
          </p>

          <p>
            <strong>24. Feedback and Reviews</strong><br />
            We welcome your feedback and reviews. By submitting feedback or testimonials, you grant us the right to use, reproduce, and publish such content for marketing and promotional purposes. If you prefer not to have your feedback publicly shared, please inform us in advance.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">25. Contact Information</h3>
          <div className="bg-sand-2/20 border border-sand-2 rounded-2xl p-6 text-xs sm:text-sm font-sans space-y-2.5">
            <p><strong>Address:</strong> Kairali – The Ayurvedic Healing Village, Palakkad, Kerala, India</p>
            <p><strong>Phone:</strong> +91-9555156156</p>
            <p><strong>Email:</strong> info@kairali.com</p>
            <p><strong>Website:</strong> <a href="https://www.ayurvedichealingvillage.com" target="_blank" rel="noopener noreferrer" className="text-laterite underline font-medium">www.ayurvedichealingvillage.com</a></p>
          </div>
        </div>
      </div>
    </main>
  );
}
