import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaRenderer from "@/components/SchemaRenderer";
import { BlogPosting, WithContext } from "schema-dts";
import { Calendar, User, ArrowLeft, GraduationCap } from "@phosphor-icons/react/dist/ssr";

const articleData = [
  {
    slug: "how-to-learn-ayurveda",
    title: "How to Learn Ayurveda: A Step-by-Step Guide",
    desc: "Our comprehensive roadmap for beginners, yoga teachers, and wellness professionals who want to master authentic Ayurveda.",
    date: "July 10, 2026",
    author: "Dr. Radhakrishnan",
    category: "Guides",
    content: `
Ayurveda, the 'Science of Life', is a comprehensive natural healthcare system that has been practiced in India for over five thousand years. For modern learners, understanding how to begin studying this vast subject can be overwhelming. This step-by-step guide maps out the traditional clinical route to learning Ayurveda.

### Step 1: Grasp the Foundational Philosophies (Tridoshas)
All Ayurvedic diagnosis and therapy is built upon the Panchamahabhutas (five great elements: Space, Air, Fire, Water, and Earth) and the Tridoshas — Vata, Pitta, and Kapha. Beginners must start by learning how these dynamic energies govern human physiology, mental states, and digestion. 

### Step 2: Establish a Daily Self-Care Regimen (Dinacharya)
Ayurveda is a living science. Before treating others, one must integrate its principles into daily life. This involves practicing Dinacharya (morning self-care routines like oil pulling and tongue scraping), understanding Ritucharya (seasonal regimens), and adopting an Ayurvedic diet suited to your body's constitution (Prakriti).

### Step 3: Gain Clinical Hands-On Training
While reading textbooks provides theoretical grounding, hands-on practice is indispensable. Learning the exact strokes for classical massage therapies (like Abhyanga and Udwarthana), oil temperature management, and preparing herbal decoctions requires supervised clinical practice in a hospital setting under experienced senior therapists.

### Step 4: Study Under Practicing Doctors
To develop clinical judgement — knowing who a therapy is for, when it should be administered, and why — you must study under qualified physicians. Learning to analyze patient charts, observing pulse diagnosis (Nadi Pariksha), and evaluating treatment cycles are critical milestones in your training.
    `
  },
  {
    slug: "understanding-panchakarma-detox",
    title: "Understanding Panchakarma Detoxification",
    desc: "An in-depth explanation of the classical five-fold purification process, its clinical benefits, and how it is applied to the Tridoshas.",
    date: "July 05, 2026",
    author: "Dr. Latha Radhakrishnan",
    category: "Therapies",
    content: `
Panchakarma is Ayurveda's signature system of deep detoxification and cellular renewal. It translates literally to 'five actions', representing the five therapeutic paths designed to remove accumulated toxins (Ama) and restore metabolic balance.

### The Five Actions of Panchakarma
1. **Vamana (Therapeutic Emesis):** Used to eliminate excess Kapha toxins from the respiratory and upper gastrointestinal tract.
2. **Virechana (Purgation Therapy):** Highly effective in cleansing excess Pitta toxins from the liver, gallbladder, and small intestine.
3. **Basti (Medicated Enema):** The crown jewel of Panchakarma, targeting Vata disorders in the colon and nervous system.
4. **Nasya (Nasal Administration):** Clears toxins from the head, sinuses, and throat, enhancing mental clarity.
5. **Raktamokshana (Bloodletting):** Classical therapy used to treat blood-borne disorders and skin ailments under close medical supervision.

### Why Accreditations Matter for Panchakarma
Because Panchakarma involves clinical intervention and metabolic shifts, it must be performed inside a licensed, accredited hospital setting like our NABH village in Kerala. Supervised practical training ensures that students learn the physiological triggers and contraindications of each therapy.
    `
  },
  {
    slug: "introduction-to-tridosha-theory",
    title: "Introduction to Tridosha Theory",
    desc: "Explore Vata, Pitta, and Kapha — the three vital energies that govern human physiology and mental wellbeing.",
    date: "June 28, 2026",
    author: "Dr. Sreejit",
    category: "Foundations",
    content: `
In Ayurveda, every individual is governed by a unique combination of three vital energies or Doshas: Vata, Pitta, and Kapha. These Doshas control all physical and mental processes, and maintaining their equilibrium is the key to optimal health.

### Vata: The Energy of Movement
Composed of Air and Space, Vata governs all biological movement, including breathing, muscle contractions, heartbeat, and nerve impulses. When in balance, Vata fosters creativity and vitality. An imbalance leads to dry skin, anxiety, insomnia, and joint pain.

### Pitta: The Energy of Transformation
Composed of Fire and Water, Pitta governs metabolism, digestion, body temperature, and intelligence. In balance, it promotes sharp thinking, leadership, and healthy digestion. An imbalance manifests as skin rashes, inflammation, heartburn, and anger.

### Kapha: The Energy of Structure
Composed of Earth and Water, Kapha governs growth, lubrication, physical strength, and immunity. In balance, it provides love, calm, and stability. An imbalance causes weight gain, lethargy, congestion, and attachment issues.
    `
  }
];

export async function generateStaticParams() {
  const slugs = articleData.map((a) => a.slug);
  const locales = ["en", "de", "fr", "ar", "ru"];

  const paramsList = [];
  for (const locale of locales) {
    for (const slug of slugs) {
      paramsList.push({ locale, slug });
    }
  }
  return paramsList;
}

interface ArticlePageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = articleData.find((a) => a.slug === slug);
  if (!article) {
    notFound();
  }

  const t = await getTranslations("Navigation");
  const c = await getTranslations("Enquiry");

  const breadcrumbItems = [
    { label: t("learn"), href: "/learn" },
    { label: article.title }
  ];

  // BlogPosting schema
  const schema: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.desc,
    "datePublished": "2026-07-10",
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kairali Guru",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kairali.guru/images/logo.png"
      }
    }
  };

  return (
    <>
      <SchemaRenderer schema={schema} />
      <main className="min-h-screen bg-sand py-12 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto font-sans text-start">
          <Breadcrumbs items={breadcrumbItems} locale={locale} />

          {/* Back button */}
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-xs font-semibold text-laterite hover:text-palm transition-colors mb-8 mt-2"
          >
            <ArrowLeft size={14} />
            <span>Back to knowledge center</span>
          </Link>

          {/* Article Header */}
          <article className="mb-20">
            <span className="font-mono text-xs text-laterite font-bold bg-laterite/10 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
              {article.category}
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-6">
              {article.title}
            </h1>
            
            <div className="flex gap-6 items-center text-xs text-taupe border-y border-sand-2 py-4 mb-8 font-semibold">
              <span className="flex items-center gap-1.5">
                <User size={16} className="text-copper" />
                <span>By {article.author}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={16} className="text-copper" />
                <span>Published on {article.date}</span>
              </span>
            </div>

            {/* Long-form Content Area */}
            <div className="font-serif text-base sm:text-lg text-bark/90 leading-relaxed space-y-6 prose max-w-none">
              {article.content.trim().split("\n\n").map((para, idx) => {
                if (para.startsWith("###")) {
                  return (
                    <h3 key={idx} className="font-display text-xl sm:text-2xl font-bold text-palm pt-4 mb-3">
                      {para.replace("###", "").trim()}
                    </h3>
                  );
                }
                
                if (para.startsWith("1.") || para.startsWith("-")) {
                  return (
                    <ul key={idx} className="list-disc pl-6 space-y-2 text-sm sm:text-base font-sans text-taupe">
                      {para.split("\n").map((li, lIdx) => (
                        <li key={lIdx}>
                          {li.replace(/^\d+\.\s*/, "").replace(/^-\s*/, "").trim()}
                        </li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p key={idx}>
                    {para.trim()}
                  </p>
                );
              })}
            </div>
          </article>

          {/* Direct CTA */}
          <div className="bg-sand-2 text-palm border border-copper/20 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
            <GraduationCap size={44} className="text-turmeric mx-auto mb-4" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-palm">{c("heading")}</h2>
            <p className="text-xs sm:text-sm text-taupe mb-8 max-w-md mx-auto leading-relaxed font-serif">
              Ready to learn Ayurveda inside a clinical lineage? Enquire now to speak with a physician-advisor.
            </p>
            <Link
              href="/enquiry"
              className="inline-block bg-terracotta text-white hover:bg-terracotta/90 font-semibold px-8 py-3.5 rounded-full text-xs transition-all shadow-md"
            >
              Contact Advisor
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
