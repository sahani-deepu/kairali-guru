import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
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
  }
};

export default withNextIntl(nextConfig);
