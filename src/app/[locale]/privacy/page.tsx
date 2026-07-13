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
            KAIRALI’S privacy policy sets out the protocol as to how [www.ayurvedichealingvillage.com] uses, secures and respect any information that you provide to [www.ayurvedichealingvillage.com] when you visit and use this website. We never misuse it. It explains what information is collected about you, why we collect it, how we use it, the control we have over your personal information and the procedures we have in place to protect your personal information.
          </p>
          <p>
            [www.ayurvedichealingvillage.com] may be reviewed and updated at regular intervals. You are advised to visit the page from time to time to update yourself with the revised policy. This policy is effective from 1st April, 2017.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Questions & Contact</h3>
          <p>
            Questions and comments about KAIRALI or our privacy policy should be directed as follows:
          </p>
          <div className="bg-sand-2/20 border border-sand-2 rounded-2xl p-6 text-xs sm:text-sm font-sans space-y-2.5">
            <p><strong>Address:</strong> Kairali Ayurvedic Health Resort Pvt. Ltd.<br />D – 130, Ambedkar Colony, Mehrauli, New Delhi – 110030.</p>
            <p><strong>Phone No:</strong> (+91)-9555156156</p>
            <p><strong>Email:</strong> info@kairali.com</p>
          </div>

          <h3 className="font-display text-xl font-bold text-palm pt-4">What we collect</h3>
          <p>We may collect the following information:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Name</li>
            <li>Contact information including email address</li>
            <li>Demographic information such as postcode, preferences and interests</li>
            <li>Other information relevant to customer surveys and/or offers</li>
          </ul>

          <h3 className="font-display text-xl font-bold text-palm pt-4">What we do with the information we gather</h3>
          <p>We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Internal record keeping.</li>
            <li>We may use the information to improve our services.</li>
            <li>We may periodically send promotional emails about our services, special offers or other information which we think you may find interesting using the email address which you have provided.</li>
            <li>We may use your information to contact you for market research purposes via email, phone, fax or mail. We may use the information to customize the website according to your interests.</li>
          </ul>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Security</h3>
          <p>
            Committed to protect your personal information and privacy, KAIRALI uses appropriate technical and organizational measures, including encryption. A regular review is done to protect your personal information by utilizing IT security controls, including access controls that restrict and manage the way in which your personal information and data is processed, managed and handled. A trained staff is always working towards safeguarding and securing the information we collect online.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">How we use cookies</h3>
          <p>
            Our website uses cookies. We will ask you to consent to our use of cookies in accordance with the terms of this policy when you first visit our website. By using our website and agreeing to this policy, you consent to our use of cookies in accordance with the terms of this policy.
          </p>
          <p>
            A cookie is a file containing an identifier that is sent by a web server to a web browser, and stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the server.
          </p>
          <p>
            We use traffic log cookies to identify which pages are being used. This helps us analyze data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes.
          </p>
          <p>
            Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
          </p>
          <p>
            You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent us from taking full advantage of the website.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Controlling your personal information</h3>
          <p>You may choose to restrict the collection or use of your personal information in the following ways:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>While filling in a form on the website, click on the boxes that you do not want the information to be used by anybody for direct marketing purposes.</li>
            <li>If you change your mind at any point of time and would want us to avoid using your personal information for direct marketing purposes, you may inform us by writing to or emailing us at info@kairali.com.</li>
          </ul>
          <p>
            Your personal information will not be sold, distributed or leased to third parties unless we have your permission or are required by law to do so. In case, we find any promotional information about third parties that might be interesting for you, we can send it to you if only you want us to.
          </p>
          <p>
            If you would like a copy of the information held on you please write to info@kairali.com.
          </p>
          <p>
            Kindly write to or email us without any delay, if you believe that any information we are holding on you is incorrect or incomplete at the above address. We will immediately correct any information found to be incorrect.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Credit Card information</h3>
          <p>
            In the course of doing business, we transmit credit card clearing information to a third party service provider for the purposes of charging or refunding credit cards of our guests. Information transferred during this business operation is transmitted via CC AVENUE provided credit and debit card processing equipment, using a secure link employing industry-standard secure protocols, and does not transmit any individual personal information other than credit card number. Such information is required to verify the validity of the credit card number, and the transaction amount.
          </p>
        </div>
      </div>
    </main>
  );
}
