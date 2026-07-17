import type { Metadata } from "next";
import { Kurale, Asap, Lato } from "next/font/google";
import "../globals.css";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import SchemaRenderer from "@/components/SchemaRenderer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyCTA from "@/components/StickyCTA";
import ConsentProvider from "@/components/consent/ConsentProvider";
import AnalyticsTracker from "@/components/AnalyticsTracker";

const kurale = Kurale({
  variable: "--font-kurale",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const asap = Asap({
  variable: "--font-asap",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kairali.guru"),
  title: {
    default: "Kairali Guru | Authentic Kerala Ayurveda Training & Certification",
    template: "%s | Kairali Guru"
  },
  description: "Learn authentic Kerala Ayurveda at Kairali Guru. Taught by practicing doctors at our NABH-accredited healing village in Kerala, India. Start online now.",
  alternates: {
    canonical: "./",
    languages: {
      en: "/en",
      de: "/de",
      fr: "/fr",
      ar: "/ar",
      ru: "/ru",
      "x-default": "/en"
    }
  },
  openGraph: {
    title: "Kairali Guru | Authentic Kerala Ayurveda Training & Certification",
    description: "Learn authentic Kerala Ayurveda at Kairali Guru. Taught by practicing doctors at our NABH-accredited healing village in Kerala, India. Start online now.",
    url: "./",
    siteName: "Kairali Guru",
    type: "website",
    images: [
      {
        url: "/images/image.png",
        width: 1200,
        height: 630,
        alt: "Kairali Guru Ayurveda"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kairali Guru | Authentic Kerala Ayurveda Training & Certification",
    description: "Learn authentic Kerala Ayurveda at Kairali Guru. Taught by practicing doctors at our NABH-accredited healing village in Kerala, India. Start online now.",
    images: ["/images/image.png"]
  }
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Load translation messages
  const messages = await getMessages();

  const isRtl = locale === "ar";

  // Global schemas
  const orgSchema = {
    "@context": "https://schema.org" as const,
    "@type": "Organization" as const,
    "name": "Kairali Guru",
    "url": "https://kairali.guru",
    "logo": "https://kairali.guru/images/logo.png",
    "foundingDate": "1908",
    "parentOrganization": {
      "@type": "Organization" as const,
      "name": "Kairali Ayurvedic Group",
      "url": "https://www.kairali.com"
    },
    "sameAs": [
      "https://www.facebook.com/KairaliTheAyurvedicHealingVillage",
      "https://www.instagram.com/kairaliayurvedichealingvillage/",
      "https://www.youtube.com/@kairaliayurvedagroup",
      "https://www.linkedin.com/in/kairaliayurvedicgroup/"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org" as const,
    "@type": "EducationalOrganization" as const,
    "name": "Kairali Guru Ayurveda Training Centre",
    "description": "Authentic Kerala Ayurveda education, training, and certification by practicing physicians.",
    "url": "https://kairali.guru",
    "address": {
      "@type": "PostalAddress" as const,
      "streetAddress": "Kairali, P.O. Olassery, Kodumbu",
      "addressLocality": "Palakkad",
      "addressRegion": "Kerala",
      "postalCode": "678551",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates" as const,
      "latitude": 10.727275,
      "longitude": 76.710507
    }
  };

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className={`${kurale.variable} ${asap.variable} ${lato.variable} h-full antialiased`}
    >

      <head>
        <SchemaRenderer schema={orgSchema} />
        <SchemaRenderer schema={localBusinessSchema} />
      </head>
      <body className="min-h-[100dvh] flex flex-col bg-sand text-bark font-sans">
        <NextIntlClientProvider messages={messages}>
          <ConsentProvider>
            <AnalyticsTracker />
            <Header />
            <div className="flex-grow">{children}</div>
            <Footer />
            <WhatsAppButton />
            <StickyCTA />
          </ConsentProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}




