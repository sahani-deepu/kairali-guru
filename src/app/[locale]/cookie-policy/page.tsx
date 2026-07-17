import { setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Kairali – The Ayurvedic Healing Village",
  description: "Learn how Kairali – The Ayurvedic Healing Village uses cookies and similar tracking technologies to improve your user experience.",
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function CookiePolicyPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const breadcrumbItems = [
    { label: "Cookie Policy" }
  ];

  return (
    <main className="min-h-screen bg-sand py-12 px-6 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto text-start">
        <Breadcrumbs items={breadcrumbItems} locale={locale} />

        <div className="mb-8 mt-6">
          <span className="text-xs font-mono font-bold text-laterite uppercase tracking-wider block mb-2">
            Last Update: February 18, 2025
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight">
            Cookie Policy
          </h1>
        </div>

        <div className="font-serif text-sm sm:text-base text-taupe leading-relaxed space-y-6">
          <p>
            Kairali – The Ayurvedic Healing Village is dedicated to respecting your privacy and providing transparency in how we gather, utilize, and manage your information. This Cookie Policy describes how we use cookies and similar tracking technologies on our website (kairaliguru) to improve your user experience.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">1. What are Cookies?</h3>
          <p>
            Cookies are small text files that our website stores on your device (computer, smartphone, or tablet). They enable us to recognize your device, remember your preferences, and enhance your surfing experience. Cookies are frequently used to improve website performance and provide useful insights into user behavior.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">2. How We Use Cookies</h3>
          <p>
            We use cookies to guarantee that our website works properly, monitor website performance, personalize content, and display relevant adverts. Our use of cookies falls under the following categories as required by the GDPR framework &amp; ePrivacy Directive (EU), PDPA (Singapore), and PIPA (South Korea):
          </p>

          <div className="space-y-4 pl-4 border-l-2 border-copper/20">
            <p>
              <strong>a. Strictly Necessary:</strong><br />
              These cookies are necessary for the website to function properly. They allow essential functions including security, accessibility, and session management. Without certain cookies, some aspects of our website may not function properly.
            </p>
            <p>
              <strong>b. Performance:</strong><br />
              These cookies collect information about how visitors use our website. They help us analyze traffic patterns, identify areas for improvement, and enhance overall user experience. We use tools such as Google Analytics to track website usage without personally identifying visitors.
            </p>
            <p>
              <strong>c. Functional (Preference):</strong><br />
              Functional cookies enable us to remember your preferences, such as language, login credentials, and region, allowing us to give a more personalized experience.
            </p>
            <p>
              <strong>d. Targeting (Marketing):</strong><br />
              We may use cookies to display tailored ads depending on your browsing history. These cookies enable us and third-party advertisers to offer relevant content and track the effectiveness of campaigns.
            </p>
          </div>

          <h3 className="font-display text-xl font-bold text-palm pt-4">3. Third-Party Cookies</h3>
          <p>
            We may enable reputable third-party service providers to set cookies on our website for analytics, advertising, and social media integration. These third parties may collect information about your browser behaviour across multiple websites.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">4. Managing Cookies</h3>
          <p>
            You have full control over your cookie preferences. You can manage or delete cookies at any time by adjusting your browser settings. Most browsers allow you to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Accept or reject cookies automatically</li>
            <li>Delete stored cookies</li>
            <li>Block third-party cookies</li>
            <li>Set preferences for specific websites</li>
          </ul>

          <h3 className="font-display text-xl font-bold text-palm pt-4">5. Changes to This Cookie Policy</h3>
          <p>
            We may update this Cookie Policy periodically to reflect changes in technology, legal requirements, or our services. Any updates will be posted on this page with the last updated date mentioned.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">6. Contact Us</h3>
          <p>
            If you have any questions or concerns regarding our Cookie Policy, please contact us at:
          </p>

          <div className="bg-sand-2/30 border border-copper/10 rounded-2xl p-6 font-sans text-xs sm:text-sm space-y-2 max-w-lg">
            <p className="font-bold text-palm text-sm sm:text-base">Kairali – The Ayurvedic Healing Village</p>
            <p><strong>Email:</strong> info@kairali.com</p>
            <p><strong>Phone:</strong> +91-9555156156</p>
            <p><strong>Website:</strong> kairaliguru</p>
          </div>

          <p className="font-sans font-bold text-palm pt-6">
            By continuing to use our website, you agree to our use of cookies as described in this policy.
          </p>
        </div>
      </div>
    </main>
  );
}
