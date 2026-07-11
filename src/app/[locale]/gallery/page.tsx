import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import GalleryImage from "@/components/GalleryImage";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function GalleryPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Navigation");

  const breadcrumbItems = [
    { label: "Gallery" }
  ];

  const galleryItems = [
    {
      title: "Kerala Healing Village Campus",
      desc: "Lush 65-acre campus with traditional red-brick (laterite) therapy cottages and lush green gardens.",
      category: "Venues",
      img: "kerala-campus-1.jpg"
    },
    {
      title: "Medicinal Herb Gardens",
      desc: "Students identifying organic medicinal flora among 1,200+ native herb species in Palakkad.",
      category: "Campus",
      img: "kerala-garden-1.jpg"
    },
    {
      title: "Panchakarma Practical Session",
      desc: "Senior BAMS physicians demonstrating Shirodhara oil-pouring techniques to international trainees.",
      category: "Classes",
      img: "kerala-class-1.jpg"
    },
    {
      title: "Morning Yoga & Meditation",
      desc: "Integrated yoga training at sunrise on the outdoor wooden deck overlooking the forest.",
      category: "Lifestyle",
      img: "kerala-yoga-1.jpg"
    },
    {
      title: "Mehrauli Delhi Centre Classroom",
      desc: "Our modern non-residential practice hall and anatomy classrooms located in South Delhi.",
      category: "Venues",
      img: "delhi-centre-1.jpg"
    },
    {
      title: "Traditional Oil Preparation",
      desc: "Practitioners boiling raw organic herbs in copper vessels to prepare medicated Abhyanga massage oils.",
      category: "Classes",
      img: "kerala-pharmacy-1.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-sand py-12 px-6 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-start">
        <Breadcrumbs items={breadcrumbItems} locale={locale} />

        <div className="max-w-3xl mb-16 mt-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-laterite block mb-3">
            Visual Story
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-4">
            Life At Kairali Guru
          </h1>
          <p className="text-base text-taupe leading-relaxed font-serif">
            A glimpse into our clinical settings, hands-on student practice hours, organic medicinal herb gardens, and traditional Kerala hospitality.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="bg-sand border border-sand-2 rounded-3xl overflow-hidden hover:shadow-md transition-all flex flex-col justify-between"
            >
              <GalleryImage img={item.img} title={item.title} />

              <div className="p-6 text-start">
                <span className="font-mono text-[10px] text-laterite font-bold bg-laterite/10 px-2.5 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                  {item.category}
                </span>
                <h3 className="font-display font-bold text-palm text-lg mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-taupe leading-relaxed font-serif">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>



      </div>
    </main>
  );
}
