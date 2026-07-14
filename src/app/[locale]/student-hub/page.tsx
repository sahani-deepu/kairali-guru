import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import StudentHubClient from "./StudentHubClient";

// Set robots meta tag to prevent search engines from indexing the portal
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function StudentHubPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <StudentHubClient />;
}
