import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import GalleryGrid, { GalleryItem } from "@/components/GalleryGrid";

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

  const galleryItems: GalleryItem[] = [
    {
      title: "Kerala Healing Village Campus",
      desc: "Lush 65-acre campus with traditional red-brick (laterite) therapy cottages and lush green gardens.",
      category: "Venues",
      img: "kerala-campus-1.jpg",
      images: [
        "kerala-campus-1.jpg",
        "kerala-cottage-detail.jpg"
      ]
    },
    {
      title: "Medicinal Herb Gardens",
      desc: "Students identifying organic medicinal flora among 1,200+ native herb species in Palakkad.",
      category: "Campus",
      img: "kerala-garden-1.jpg",
      images: [
        "kerala-garden-1.jpg",
        "ayurveda-treatment-table.jpg"
      ]
    },
    {
      title: "Panchakarma Practical Session",
      desc: "Senior BAMS physicians demonstrating Shirodhara oil-pouring techniques to international trainees.",
      category: "Classes",
      img: "kerala-class-1.jpg",
      images: [
        "kerala-class-1.jpg",
        "kerala-pharmacy-1.jpg"
      ]
    },
    {
      title: "Morning Yoga & Meditation",
      desc: "Integrated yoga training at sunrise on the outdoor wooden deck overlooking the forest.",
      category: "Lifestyle",
      img: "kerala-yoga-1.jpg",
      images: [
        "kerala-yoga-1.jpg",
        "kerala-campus-1.jpg"
      ]
    },
    {
      title: "Mehrauli Delhi Centre Classroom",
      desc: "Our modern non-residential practice hall and anatomy classrooms located in South Delhi.",
      category: "Venues",
      img: "delhi-centre-1.jpg",
      images: [
        "delhi-centre-1.jpg"
      ]
    },
    {
      title: "Traditional Oil Preparation",
      desc: "Practitioners boiling raw organic herbs in copper vessels to prepare medicated Abhyanga massage oils.",
      category: "Classes",
      img: "kerala-pharmacy-1.jpg",
      images: [
        "kerala-pharmacy-1.jpg",
        "kerala-class-1.jpg"
      ]
    },
    {
      title: "Ayurvedic Panchakarma Therapies",
      desc: "Clinical observation and hands-on practice of traditional detoxification and rejuvenation treatments like Abhyanga and Shirodhara.",
      category: "Therapies",
      img: "ayurveda-treatment-table.jpg",
      images: [
        "ayurveda-treatment-table.jpg",
        "Bati.jpg",
        "Body Therapy.jpg",
        "Oil Therapy.jpg",
        "Forehead Therapy.jpg ",
        "Head Therapy.jpg",
        "Kati & Greeva Basti.jpg",
        "Kizhi Therapy.jpg",
        "Kizhi Therapy1.jpg",
        "Therapy Process.jpg",
        "Therapy,Droni Table.jpg",
        "Shirodhata.jpg",
        "Thalapothichil.jpg",
        "Udwarthanam Dry Powder.jpg",
        "Udwarthanam Dry Powder (2).jpg",
        "Udwarthanam.jpg",
        "Traditional Therapy (1).jpg",
        "Traditional Therapy (2).jpg",
        "Traditional Therapy (3).jpg",
        "Traditional Therapy (4).jpg",
      ]
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

        {/* Gallery Grid and Lightbox Album */}
        <GalleryGrid items={galleryItems} />

      </div>
    </main>
  );
}

