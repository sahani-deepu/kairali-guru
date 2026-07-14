import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import StudentHubClient from "./StudentHubClient";
import { getServerSession } from "@/lib/auth";

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

  const user = await getServerSession();
  const initialUser = user ? { id: user.id, email: user.email || "" } : null;

  return <StudentHubClient initialUser={initialUser} initialIsLoggedIn={!!user} />;
}

