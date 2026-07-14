import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaRenderer from "@/components/SchemaRenderer";
import { AggregateRating, WithContext } from "schema-dts";
import { Star, Quotes, GraduationCap } from "@phosphor-icons/react/dist/ssr";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Testimonials & Reviews",
  description: "Read success stories and reviews from international students who completed our Ayurveda training and clinical internship programs.",
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function TestimonialsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const breadcrumbItems = [
    { label: "Student Stories" }
  ];

  const studentReviews = [
    {
      name: "Tessy Pacheco",
      country: "Spain",
      programme: "Intensive Ayurveda Training (WAP)",
      quote: "Kairali Guru provided the most authentic platform to learn Ayurveda without losing its traditional values. Taught directly by practicing BAMS physicians at a real healing hospital campus in India, it stands in stark contrast to theoretical online academies."
    },
    {
      name: "Ms. Arti Joshi",
      country: "Canada",
      programme: "Advanced Lifestyle Consultant & Therapist (AALCT)",
      quote: "Studying on-site at the Palakkad Healing Village in Kerala was a life-changing clinical experience. The BAMS and MD physicians were exceptionally detailed and guided us through physical therapies on real patients. I highly recommend Kairali to any international wellness seeker."
    },
    {
      name: "Heena C. Sehgal",
      country: "Gurgaon, India",
      programme: "Level-One Advanced for Wellness Professionals (AATP1)",
      quote: "The hybrid delivery model with a robust online foundation and intensive hands-on training at the Delhi Mehrauli centre fit perfectly into my practice. It has elevated my wellness consultancy business to a new level of clinical credibility."
    }
  ];

  // Build JSON-LD schemas for reviews & AggregateRating
  const schema: WithContext<AggregateRating> = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "EducationalOrganization",
      "name": "Kairali Guru",
      "url": "https://kairali.guru"
    },
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "48"
  };

  return (
    <>
      <SchemaRenderer schema={schema} />
      <main className="min-h-screen bg-sand py-12 px-6 sm:px-8 font-sans">
        <div className="max-w-7xl mx-auto text-start">
          <Breadcrumbs items={breadcrumbItems} locale={locale} />

          <div className="max-w-3xl mb-16 mt-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-laterite block mb-3">
              Alumni Voice
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-4">
              Voices From Our Students
            </h1>
            <p className="text-base text-taupe leading-relaxed font-serif">
              Read authentic feedback from wellness practitioners, international learners, and spa therapists who completed certifications with Kairali Guru.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
            {studentReviews.map((rev, index) => (
              <div
                key={index}
                className="bg-sand border border-sand-2 rounded-3xl p-6 flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden"
              >
                <Quotes size={64} className="absolute -top-4 -end-4 text-laterite/5 shrink-0" />
                
                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6 text-turmeric">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} weight="fill" />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-bark/90 leading-relaxed font-serif mb-8 italic">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                <div className="border-t border-sand-2 pt-4">
                  <span className="font-display font-bold text-palm block text-base">
                    {rev.name}
                  </span>
                  <span className="text-xs text-laterite font-semibold block mt-0.5">
                    {rev.country}
                  </span>
                  <span className="text-[10px] text-taupe font-semibold block mt-2 uppercase tracking-wide">
                    {rev.programme}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="bg-palm text-paper-on-dark rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
            <GraduationCap size={44} className="text-turmeric mx-auto mb-4" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">Begin Your Study</h2>
            <p className="text-xs sm:text-sm text-paper-on-dark/70 mb-8 max-w-md mx-auto leading-relaxed">
              Become part of our global alumni community. Speak with a physician-advisor today.
            </p>
            <Link
              href="/enquiry"
              className="inline-block bg-turmeric text-bark hover:opacity-95 font-semibold px-8 py-3.5 rounded-full text-xs transition-all shadow-md"
            >
              Request Prospectus
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
