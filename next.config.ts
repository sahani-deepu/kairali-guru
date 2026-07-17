import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  experimental: {
    cpus: 1
  },
  async redirects() {
    return [
      { source: "/default.aspx", destination: "/", permanent: true },
      { source: "/one-day-ayurveda-workshop-program.aspx", destination: "/courses/one-day-ayurveda-workshop", permanent: true },
      { source: "/three-day-short-term-ayurveda-certificate-program.aspx", destination: "/courses/three-day-ayurveda-certificate", permanent: true },
      { source: "/intensive-ayurveda-training-program.aspx", destination: "/courses/intensive-ayurveda-training", permanent: true },
      { source: "/level-one-advanced-ayurveda-training-program-for-wellness-professionals.aspx", destination: "/courses/level-one-advanced-ayurveda-training", permanent: true },
      { source: "/advanced-ayurveda-lifestyle-consultant-and-therapist-training-program.aspx", destination: "/courses/advanced-lifestyle-consultant-therapist", permanent: true },
      { source: "/Turing.aspx", destination: "/", permanent: true },
      { source: "/:path*.aspx", destination: "/courses", permanent: true }
    ];
  },
  async headers() {
    const isDev = process.env.NODE_ENV === "development";
    const cspScriptSrc = isDev ? " 'unsafe-eval'" : "";

    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "Content-Security-Policy", value: `default-src 'self'; script-src 'self' 'unsafe-inline'${cspScriptSrc} https://*.supabase.co https://riivtioklmmlkkatvoqc.supabase.co; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://*.supabase.co https://riivtioklmmlkkatvoqc.supabase.co; connect-src 'self' https://*.supabase.co https://riivtioklmmlkkatvoqc.supabase.co; frame-src 'self' https://www.google.com https://maps.google.com https://*.google.com https://*.google.co.in;` },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" }
        ]
      }
    ];
  }
};

export default withNextIntl(nextConfig);
