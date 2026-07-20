import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BookOpen, ArrowRight, Calendar, User, Sparkle } from "@phosphor-icons/react/dist/ssr";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function LearnHubPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Navigation");

  const breadcrumbItems = [
    { label: t("learn") }
  ];

  const articles = [
    {
      slug: "how-to-learn-ayurveda",
      title: "How to Learn Ayurveda: A Step-by-Step Guide",
      excerpt: "Our comprehensive roadmap for beginners, yoga teachers, and wellness professionals who want to master authentic Ayurveda.",
      date: "July 10, 2026",
      author: "Dr. Radhakrishnan",
      category: "Guides",
      image: "panchkarma-image.webp",
    },
    {
      slug: "understanding-panchakarma-detox",
      title: "Understanding Panchakarma Detoxification",
      excerpt: "An in-depth explanation of the classical five-fold purification process, its clinical benefits, and how it is applied to the Tridoshas.",
      date: "July 05, 2026",
      author: "Dr. Latha Radhakrishnan",
      category: "Therapies",
      image: "kerala-pharmacy-1.jpg"
    },
    {
      slug: "introduction-to-tridosha-theory",
      title: "Introduction to Tridosha Theory",
      excerpt: "Explore Vata, Pitta, and Kapha — the three vital energies that govern human physiology and mental wellbeing.",
      date: "June 28, 2026",
      author: "Dr. Sreejit",
      category: "Foundations",
      image: "kerala-garden-1.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-sand/30 py-12 px-6 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-start">

        <div className="border-b border-copper/10 pb-4 mb-8">
          <Breadcrumbs items={breadcrumbItems} locale={locale} />
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-16 mt-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-laterite font-bold flex items-center gap-1.5 mb-3">
            <Sparkle size={12} className="text-laterite" />
            <span>Ayurveda Knowledge Centre</span>
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-4">
            Ayurvedic Wisdom & Guides
          </h1>
          <p className="text-sm text-taupe leading-relaxed font-serif">
            Access clinical perspectives and step-by-step guides written directly by our practicing doctors to educate and support your learning journey.
          </p>
        </div>

        {/* Magazine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto mb-20">

          {/* Main Large Featured Article */}
          <div className="lg:col-span-8 bg-sand border border-sand-2 rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 group">
            <div className="aspect-[21/10] relative overflow-hidden">
              <img
                src={`/images/${articles[0].image}`}
                alt={articles[0].title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <span className="absolute top-4 start-4 font-mono text-[9px] text-white font-bold bg-terracotta px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {articles[0].category}
              </span>
            </div>
            <div className="p-6 space-y-4">
              <h2 className="font-display text-2xl font-extrabold text-palm leading-snug group-hover:text-laterite transition-colors">
                <Link href={`/learn/${articles[0].slug}`}>{articles[0].title}</Link>
              </h2>
              <p className="text-xs sm:text-sm text-taupe leading-relaxed font-serif">
                {articles[0].excerpt}
              </p>
              <div className="border-t border-copper/15 pt-4 flex justify-between items-center text-[10px] text-taupe font-semibold">
                <span className="flex items-center gap-1">
                  <User size={12} />
                  <span>{articles[0].author}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{articles[0].date}</span>
                </span>
              </div>
              <Link
                href={`/learn/${articles[0].slug}`}
                className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta/90 text-white font-semibold py-2.5 px-6 rounded-xl text-xs transition-all shadow-md"
              >
                <span>Read Full Article</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Side Articles Grid */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {articles.slice(1).map((art) => (
              <div
                key={art.slug}
                className="bg-sand border border-sand-2 rounded-2xl p-5 hover:shadow-sm transition-all text-start flex flex-col justify-between flex-grow"
              >
                <div>
                  <span className="font-mono text-[8px] text-laterite font-bold bg-laterite/10 px-2 py-0.5 rounded uppercase tracking-wider mb-3 inline-block">
                    {art.category}
                  </span>
                  <h3 className="font-display font-bold text-palm text-base mb-2 leading-tight">
                    <Link href={`/learn/${art.slug}`} className="hover:text-laterite transition-colors">{art.title}</Link>
                  </h3>
                  <p className="text-xs text-taupe leading-relaxed font-serif mb-4">
                    {art.excerpt}
                  </p>
                </div>

                <div className="border-t border-sand-2 pt-4 flex justify-between items-center text-[9px] text-taupe font-semibold">
                  <span>{art.author}</span>
                  <Link href={`/learn/${art.slug}`} className="text-laterite font-bold hover:underline">
                    Read →
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </main>
  );
}
