import { setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACT_INFO } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn how Kairali Guru uses cookies and similar tracking technologies on our website and student portal to deliver personalized content.",
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

        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-8 mt-6">
          Cookie Policy
        </h1>

        <div className="font-serif text-sm sm:text-base text-taupe leading-relaxed space-y-6">
          <p>
            This Cookie Policy explains how Kairali Guru (“we,” “us,” “our”) uses cookies and similar tracking technologies on our website and Student Hub portal. By continuing to browse our platform, you consent to our use of cookies as detailed in this policy.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">What Are Cookies?</h3>
          <p>
            Cookies are small text files stored on your computer or mobile device when you load web pages. They are widely used to make websites work efficiently, enhance security, and provide statistical insights to the site owners.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Types of Cookies We Use</h3>
          <ul className="list-disc pl-5 space-y-4">
            <li>
              <strong>Essential / Necessary Cookies:</strong><br />
              These cookies are mandatory for the core operation of our platform. They include session cookies for authentication, security logs, cookie consent state tracking, and layout localization preferences. Disabling these cookies in your browser settings will break core features like the Student Hub.
            </li>
            <li>
              <strong>Performance & Analytical Cookies:</strong><br />
              We use these cookies to monitor site traffic, analyze user navigation paths, and track load speeds. This helps us optimize performance and deliver a high-quality experience. All data collected by these cookies is aggregated and anonymized.
            </li>
            <li>
              <strong>Functional Cookies:</strong><br />
              These cookies enable enhanced personalization, such as remembering your student email on the login form or saving your language preference.
            </li>
          </ul>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Managing Your Cookie Preferences</h3>
          <p>
            You can customize, review, or revoke your cookie choices at any time. When you first visit our website, you are prompted to configure your cookie preferences through our consent banner. 
          </p>
          <p>
            Additionally, you can configure your browser to reject some or all cookies. Note that restricting cookies may prevent you from logging into the Student Hub.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Contact</h3>
          <p>
            For any queries regarding our cookie usage, please email:
          </p>
          <div className="bg-sand-2/20 border border-sand-2 rounded-2xl p-6 text-xs sm:text-sm font-sans space-y-2.5">
            <p><strong>Email:</strong> {CONTACT_INFO.corporate.email}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
