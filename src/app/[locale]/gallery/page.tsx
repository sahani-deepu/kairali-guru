import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import GalleryGrid, { GalleryItem } from "@/components/GalleryGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo & Video Gallery - Kerala Campus & Practical Classes",
  description: "Take a visual tour of our 65-acre Palakkad clinical Healing Village campus in Kerala, student practice lectures, and traditional pharmacy setups.",
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function GalleryPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const breadcrumbItems = [
    { label: "Gallery" }
  ];

  const galleryItems: GalleryItem[] = [
    {
      title: "Kairali Healing Village Campus",
      desc: "Lush 65-acre campus with traditional red-brick (laterite) therapy cottages and lush green gardens.",
      category: "Venues",
      img: "HEALING VILLAGE FRONT IMAGE.jpg",
      images: [
        "kerala-campus-1.jpg",
        "kerala-cottage-detail.jpg",
        "HEALING VILLAGE FRONT IMAGE.jpg",
        "Drone View.jpg",
        "Kairali Fountain.jpg",
        "Kairali Dispensary.jpg",
        "Activites at KTAHV.jpg",
        "Activites at KTAHV (2) (1).jpg",
        "Ayurvedic Food (1).jpg",
        "Ayurvedic Food (2).jpg",
        "Ayurvedic Food (3).jpg",
        "Cultural  (1).jpg",
        "Cultural  (2).jpg",
        "Happy Client.jpg",
        "yoga-1.jpg"
      ]
    },
    {
      title: "Our Students",
      desc: "International and domestic students learning, practicing, and experiencing authentic Ayurveda training at our campus.",
      category: "Students",
      img: "1.jpg",
      images: [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg"
      ]
    },

    {
      title: "Morning Yoga & Meditation",
      desc: "Integrated yoga training at sunrise outdoors overlooking the forest.",
      category: "Lifestyle",
      img: "QgSp0PLtf4hnCc8VLa1LIUEiTIQYgM4YP4SiCOPW6HBqwBBDl4AAA==.webp",
      images: [
        "kerala-yoga-1.jpg",
        "kerala-campus-1.jpg",
        "_MG_1549.jpg",
        "_MG_1570.jpg",
        "_MG_1573f.jpg",
        "_R6_3095 - Copy.jpg",
        "_R6_3107.jpg",
        "_R6_3115.jpg",
        "_R6_3141.jpg",
        "_R6_3142.jpg",
        "_R6_3689.jpg",
        "_R6_3813.jpg",
        "_R6_3900.jpg",
        "_R6_3904 - Copy.jpg",
        "9k= (4).jpeg",
        "57.jpg",
        "247A3295.jpg",
        "Activites at KTAHV (2) (1).jpg",
        "Activites at KTAHV.jpg",
        "Ayurvedic Food (2).jpg",
        "Cultural  (2).jpg",
        "Exterior With Yoga Professional.jpg",
        "QgSp0PLtf4hnCc8VLa1LIUEiTIQYgM4YP4SiCOPW6HBqwBBDl4AAA==.webp",
        "Yoga Pose 4.jpg",
        "Yoga Pose 4(1).jpg",
        "yoga13.jpg",
        "yoga14.jpg",
        "yoga15.jpg",
        "yoga16.jpg",
        "yoga20.jpg",
        "yoga22.jpg",
        "yoga24.jpg",
        "yoga26.jpg",
        "yoga28.jpg",
        "yoga29.jpg",
        "yoga30.jpg",
        "yoga31.jpg",
        "yoga32.jpg",
        "yoga33.jpg",
        "yoga36.jpg",
        "yoga37.jpg",
        "yoga38.jpg",
        "yoga41.jpg",
        "yoga42 (1).jpg",
        "yoga43.jpg",
        "yoga44.jpg",
        "yoga47.jpg",
        "yoga48 - Copy.jpg",
        "yoga51.jpg",
        "yoga54.jpg",
        "yoga55.jpg",
        "yoga56.jpg",
        "yoga57.jpg",
        "yoga58.jpg",
        "yoga59.jpg",
        "yoga60.jpg",
        "yoga61.jpg",
        "yoga62.jpg",
        "yoga63.jpg",
        "yoga64.jpg",
        "yoga66.jpg",
        "yoga65.jpg",
        "yoga67.jpg",
        "yoga68.jpg",
        "yoga71.jpg",
        "yoga91.jpg",
        "yoga92.jpg",
        "yoga94.jpg",
        "yoga95.jpg",
        "yoga96.jpg"
      ]
    },
    {
      title: "Mehrauli Delhi Centre Classroom",
      desc: "Our modern non-residential practice hall and anatomy classrooms located in South Delhi.",
      category: "Venues",
      img: "WhatsApp Image 2026-07-17 at 12.19.45 PM (1).jpeg",
      images: [
        "delhi-centre-1.jpg",
        "IMG_8694-2.jpg",
        "IMG_8694.jpg",
        "IMG_8695-2.jpg",
        "IMG_8695.jpg",
        "IMG_8704-2.jpg",
        "IMG_8704.jpg",
        "IMG_8713-2.jpg",
        "IMG_8719-2 - Copy.jpg",
        "IMG_8722.jpg",
        "IMG_8731.jpg",
        "IMG_8736.jpg",
        "IMG_8739.jpg",
        "IMG_8746.jpg",
        "IMG_8764 - Copy.jpg",
        "IMG_8791.jpg",
        "IMG_8821 - Copy.jpg",
        "IMG_8833 - Copy.jpg",
        "IMG_8848.jpg",
        "IMG_8879.jpg",
        "IMG_8887.jpg",
        "IMG_8892.jpg",
        "IMG_9610-2 - Copy.jpg",
        "IMG_9616-2.jpg",
        "IMG_9683.jpg",
        "WhatsApp Image 2026-07-17 at 12.19.45 PM (1).jpeg",
        "WhatsApp Image 2026-07-17 at 12.19.45 PM (2).jpeg",
        "WhatsApp Image 2026-07-17 at 12.19.45 PM.jpeg",
        "WhatsApp Image 2026-07-17 at 12.19.46 PM (1).jpeg",
        "WhatsApp Image 2026-07-17 at 12.19.46 PM (2).jpeg",
        "WhatsApp Image 2026-07-17 at 12.19.46 PM.jpeg",
        "WhatsApp Image 2026-07-17 at 12.19.47 PM (1).jpeg",
        "WhatsApp Image 2026-07-17 at 12.19.47 PM.jpeg",
        "WhatsApp Image 2026-07-17 at 12.19.48 PM.jpeg"
      ]
    },
    {
      title: "Traditional Oil Therapies",
      desc: "Practitioners boiling raw organic herbs in copper vessels to prepare medicated Abhyanga massage oils.",
      category: "Classes",
      img: "kAIRALI PALAK KAD_DEPICTIONS BY PRACHI KHASGIWALA-201.jpg",
      images: [
        "kerala-pharmacy-1.jpg",
        "kerala-class-1.jpg",
        "kAIRALI PALAK KAD_DEPICTIONS BY PRACHI KHASGIWALA-201.jpg",
        "kAIRALI PALAK KAD_DEPICTIONS BY PRACHI KHASGIWALA-178.jpg",
        "kAIRALI PALAK KAD_DEPICTIONS BY PRACHI KHASGIWALA-176.jpg",
        "kAIRALI PALAK KAD_DEPICTIONS BY PRACHI KHASGIWALA-173.jpg",
        "_R6_3260.jpg",
        "_R6_3502.jpg",
        "247A3671.jpg"
      ]
    },
    {
      title: "Ayurvedic Therapies",
      desc: "Clinical observation and hands-on practice of traditional detoxification and rejuvenation treatments like Abhyanga and Shirodhara.",
      category: "Therapies",
      img: "Therapy Process.jpg",
      images: [
        "ayurveda-treatment-table.jpg",
        "Basti.jpg",
        "Body Therapy.jpg",
        "Oil Therapy.jpg",
        "Forehead Therapy.jpg",
        "Head Therapy.jpg",
        "Kati & Greeva Basti.jpg",
        "Kizhi Therapy.jpg",
        "Kizhi Therapy1.jpg",
        "Therapy Process.jpg",
        "Therapy, Droni Table.jpg",
        "Shirodata.jpg",
        "Thalapothichil.jpg",
        "Udwarthanam Dry Powder.jpg",
        "Udwarthanam Dry Powder (2).jpg",
        "Udwarthanam.jpg",
        "Traditional Therapy (1).jpg",
        "Traditional Therapy (2).jpg",
        "Traditional Therapy (3).jpg",
        "Traditional Therapy (4).jpg"
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

