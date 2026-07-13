import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaRenderer from "@/components/SchemaRenderer";
import { Course, WithContext } from "schema-dts";
import { Calendar, Clock, GraduationCap, ShieldCheck, ArrowLeft, Hourglass, CheckCircle, SealCheck, Sparkle } from "@phosphor-icons/react/dist/ssr";

const courseData = [
  {
    code: "OAP-HV",
    slug: "one-day-ayurveda-workshop",
    title: {
      en: "One Day Ayurveda Workshop",
      de: "Eintägiger Ayurveda-Workshop",
      fr: "Atelier d'Ayurveda d'une Journée",
      ar: "ورشة أيورفيدا ليوم واحد",
      ru: "Однодневный воркшоп по Аюрведе"
    },
    duration: "1 day",
    hours: "3 hrs",
    level: "Beginner",
    priceINR: "₹15,500",
    priceUSD: "$260",
    image: "kerala-garden-1.jpg",
    desc: {
      en: "‘Ayur’ meaning ‘life’ and Veda’ meaning ‘science’ thus unites together to form the ‘Science of Life’. This discipline is practiced from the past 5000 years and hence, Kairali Ayurvedic Group comes up with the Ayurveda Training Programs of varied levels.\n\nOut of the five Ayurvedic Training Programs, the One Day Ayurveda Workshop Program (OAP) is an attempt to create general awareness about the discipline of Ayurveda and to educate people for a healthy standard of life.",
      de: "Eintägiger Ayurveda-Workshop mit Zertifikat – eine authentische Einführung in die Tridoshas und erste Anwendungen.",
      fr: "Atelier d'Ayurveda d'une journée avec certificat – une introduction authentique aux Tridoshas et premiers soins.",
      ar: "ورشة أيورفيدا ليوم واحد مع شهادة – مقدمة أصيلة للمبادئ، والدوشا الثلاث، وتجربة أولى للممارسة.",
      ru: "Однодневное введение в Аюрведу с сертификатом — принципы, три доши и первые практические шаги."
    },
    overview: "The One Day Ayurveda Workshop Program is a general awareness program where the theoretical session would consist of Discourse on Ayurveda, History of Ayurveda, Basic Principles & Philosophies of Ayurveda & practical aspects of Ayurveda in our day to day life. The workshop will also include a video demo on basic Ayurveda therapies. A certificate will be provided to you after successful completion of the course or workshop.",
    recommendedFor: "Suitable for all Ayurveda enthusiasts to know the basics of this holistic science. Recommended for various groups across the fields like corporates, group travellers, members of various associations and clubs.",
    highlights: [
      "Learn Basics of Ayurveda",
      "Get Certification",
      "One Informative Theory Session",
      "One Complimentary Ayurveda therapy session"
    ],
    pricing: [
      { location: "Palakkad, Kerala (Kairali- The Ayurvedic Healing Village)*", inr: "₹15,500", usd: "$260" },
      { location: "Delhi / Mumbai (non-residential)", inr: "₹9,000", usd: "$150" }
    ],
    schedule: [
      { time: "2 Hours", activity: "Theory Class: What is Ayurveda, Origin, Branches, Philosophy, scriptures & benefits in the 21st century." },
      { time: "1 Hour", activity: "Therapy Session: Abhyangam therapy session (for 45 mins) and Kairali product demonstration." }
    ],
    syllabus: [
      {
        title: "1. Basics of Ayurveda",
        desc: "Introduction to Ayurveda's history, philosophy, branches, and the ancient scriptures and compendiums."
      },
      {
        title: "2. Ayurvedic Pharmacology",
        desc: "Overview of classical and proprietary Ayurvedic medicines, their benefits, and their role in the 21st century."
      },
      {
        title: "3. Therapies Demonstration",
        desc: "Watch informative video demonstrations of basic Ayurvedic therapies and clinical practices."
      },
      {
        title: "4. Products Demonstration",
        desc: "Live demonstration of Kairali products, custom formulations, and herbal preparation standards."
      }
    ]
  },
  {
    code: "TAP-HV",
    slug: "three-day-ayurveda-certificate",
    title: {
      en: "Three-Day Short-Term Certificate",
      de: "Dreitägiges Kurzzeit-Zertifikat",
      fr: "Certificat Court de Trois Jours",
      ar: "شهادة قصيرة من ثلاثة أيام",
      ru: "Трёхдневный краткий сертификат"
    },
    duration: "3 days",
    hours: "9 hrs",
    level: "Beginner",
    priceINR: "₹42,500",
    priceUSD: "$710",
    image: "kerala-yoga-1.jpg",
    desc: {
      en: "The discipline of Ayurveda in Kerala has been passed on from generations that has never for a moment lost its originality which is often the case, with the passage of time. Armed with an innate vision, knowledge and expertise of their forefathers, Kairali Ayurvedic Group took the initiative to infuse a training program whereby its authenticity and educational category can be maintained.\n\nOut of the five programs, the Three Days Short Term Ayurveda Certification Program (TAP) is an attempt to provide a wider spectrum to the knowledge of Ayurveda, where everything from basics to practical of specific therapies would be taught.",
      de: "Dreitägiges Kurzzeit-Zertifikat – Grundlagen des Ayurveda und erste Therapien, ideal für Wellness-Fachkräfte.",
      fr: "Certificat court de trois jours – les fondements de l'Ayurveda et les premières thérapies, idéal pour les professionnels.",
      ar: "شهادة قصيرة من ثلاثة أيام – أساسيات الأيورفيدا وأولى العلاجات، مثالية لأخصائيي العافية.",
      ru: "Короткий структурированный сертификат, охватывающий основы Аюрведы и вводные терапевтические методы."
    },
    overview: "Program will cover core concepts in Ayurveda like Tridosha theory, Panchamahabooth concept, Ayurveda philosophies & theory part of 3 important Ayurvedic Therapies. One-hour theory class & one hour of personalised session of deep relaxing Ayurvedic Therapy session (3 different Ayurvedic therapies covered over 3 days). Revamp yourself with the knowledge of Ayurveda with an additional benefit of Deep Relaxation through this Ayurvedic Certification Program. A certificate will be provided to you after successful completion of the course or workshop.",
    recommendedFor: "Ideal program for small group travellers, mind-body enthusiasts, corporates, IT professionals, diplomats, FIT’s, doctors, nutritionists, wellness enthusiasts, yoga experts, spa & hospitality professionals.",
    highlights: [
      "Learn Basics of Ayurveda",
      "Get Certification",
      "Three Informative Theory sessions",
      "Three Practical sessions",
      "Three Complimentary Ayurveda therapy sessions"
    ],
    pricing: [
      { location: "Palakkad, Kerala (Kairali- The Ayurvedic Healing Village)*", inr: "₹42,500", usd: "$710" },
      { location: "Delhi & Mumbai (non-residential)", inr: "₹25,000", usd: "$420" }
    ],
    schedule: [
      { time: "Day 1", activity: "Theory: What is Ayurveda, History, Branches, Benefits, Abhyangam theory. Practical: Abhyangam therapy session (45 mins)." },
      { time: "Day 2", activity: "Theory: Panchamahabhuta, Tridosha, Saptadhatu, Trimala, Agni, Swastha, Disease & Shirodhara theory. Practical: Shirodhara therapy session (55 mins)." },
      { time: "Day 3", activity: "Theory: Prakriti, Ojas, Ayurvedic Medicine (Classical/Proprietary), Products Demo, Podikizhi theory. Practical: Podikizhi session (50 mins)." }
    ],
    syllabus: [
      {
        title: "1. Basics & History of Ayurveda",
        desc: "Origin, history, branches, benefits, and the Tridosha, Panchamahabhuta, Saptadhatu, Trimala, and Agni theories."
      },
      {
        title: "2. Prakriti & Ayurvedic Pharmacology",
        desc: "Introduction to body constitution (Prakriti), Ojas, classical and proprietary medicines, and Kairali products demonstration."
      },
      {
        title: "3. Abhyangam & Shirodhara Therapies",
        desc: "Detailed theoretical and practical training in Abhyangam (benefits, procedure, do's & don'ts) and Shirodhara (types, benefits, contraindications)."
      },
      {
        title: "4. Podikizhi Therapy Training",
        desc: "Detailed theoretical and practical training in Podikizhi, including types of Kizhis, Kizhi-making demonstration, and proper therapy procedures."
      }
    ]
  },
  {
    code: "WAP-HV",
    slug: "intensive-ayurveda-training",
    title: {
      en: "Intensive Ayurveda Training",
      de: "Intensivtraining Ayurveda",
      fr: "Formation Intensive en Ayurveda",
      ar: "تدريب مكثّف في الأيورفيدا",
      ru: "Интенсивное обучение Аюрведе"
    },
    duration: "5 days",
    hours: "15 hrs",
    level: "Intermediate",
    priceINR: "₹69,000",
    priceUSD: "$1150",
    image: "kerala-class-1.jpg",
    desc: {
      en: "The learning of Ayurveda can never be complete in one’s lifetime. The more you learn the wiser and expert you become in that field. Ayurveda is an ancient practise that enriches the body, mind and soul. It is not just a discipline to study but a way of life.\n\nKeeping in mind this vision, Kairali Ayurvedic Group motivated the initiation of Ayurvedic Training Programs to cater to the specific requirements of the individual.\n\nThe Intensive Ayurveda Training Program (WAP) focuses on the learning of the basics of Ayurveda, its origin, the different therapies (both theory and practical) and the basic concepts on Ayurvedic Philosophy.",
      de: "Intensivtraining – die fünf zentralen Therapien (Abhyangam, Shirodhara, Podikizhi, Udwarthanam, Kativasti) plus Philosophie.",
      fr: "Formation intensive – les cinq thérapies essentielles (Abhyangam, Shirodhara, Podikizhi, Udwarthanam, Kativasti) et la philosophie.",
      ar: "تدريب مكثّف – العلاجات الخمسة الأساسية (أبهيانغام، شيرودارا، بوديكيزهي، أودوارتانام، كاتيفاستي) مع الفلسفة.",
      ru: "Интенсивная практическая подготовка по пяти ключевым процедурам: Абхьянгам, Широдхара, Подикижи, Удвартанам и Кативасти."
    },
    overview: "The Intensive Ayurveda Training Program (WAP) provides the crux of Ayurveda and will make you more knowledgeable on 5 of the most important therapies of Ayurveda along with deep insight about natural way of living & the importance of balancing bio-humours to keep a person healthy.\n\nSpa & wellness centre owners or managers who want to introduce Ayurveda into their service menu; this program will be the ideal choice.\n\nProgram will cover History of Ayurveda, Philosophies, Ayurvedic Wellness Concepts, Tridosha & Panchakarma theories, and 5 major therapies of Ayurveda and its practical demonstration. One-hour theory class & one-hour practical demo on Ayurveda therapies along with 5 sessions of Ayurveda Treatments; make this program a perfect rejuvenation and educational package for the candidate. A certificate will be provided to you after successful completion of the course or workshop.",
    recommendedFor: "Suitable for spa & wellness industry professionals, spa & salon managers, owners, trainers, therapists, doctors, holistic healers, dieticians.",
    highlights: [
      "Learn Detailed Ayurveda",
      "Get Certification",
      "Five Informative Theory Sessions",
      "Five Practical sessions",
      "Five Complimentary Ayurveda therapy sessions"
    ],
    pricing: [
      { location: "Palakkad, Kerala (Kairali- The Ayurvedic Healing Village)*", inr: "₹69,000", usd: "$1,150" },
      { location: "Delhi, Mumbai (non-residential)", inr: "₹42,000", usd: "$700" }
    ],
    schedule: [
      { time: "Day 1", activity: "Theory: What is Ayurveda, History, Branches, Benefits, Abhyangam theory. Practical: Abhyangam therapy session (45 mins)." },
      { time: "Day 2", activity: "Theory: Panchamahabhuta, Tridosha, Saptadhatu, Trimala, Agni, Swastha, Disease & Shirodhara theory. Practical: Shirodhara therapy session (55 mins)." },
      { time: "Day 3", activity: "Theory: Prakriti, Ojas, Podikizhi theory. Practical: Podikizhi session (50 mins)." },
      { time: "Day 4", activity: "Theory: Ayurvedic Medicine (Classical/Proprietary), Products Demo, Udwarthanam theory. Practical: Udwarthanam session (50 mins)." },
      { time: "Day 5", activity: "Theory: Prakriti Questionnaire, Kativasti theory, Dough prep. Practical: Kativasti session (45 mins) & Q&A." }
    ],
    syllabus: [
      {
        title: "1. Basics & Philosophies of Ayurveda",
        desc: "Origin, history, branches, benefits, and core concepts (Tridoshas, Panchamahabhutas, Saptadhatu, Trimala, Agni, Swastha, Disease)."
      },
      {
        title: "2. Prakriti & Pharmacology",
        desc: "Introduction to body constitution (Prakriti), Ojas, classical and proprietary medicines, and Kairali products demonstration."
      },
      {
        title: "3. Abhyangam, Shirodhara & Podikizhi",
        desc: "Detailed theoretical and practical training in Abhyangam (benefits, procedure), Shirodhara (types, benefits, contraindications), and Podikizhi (types, making demo)."
      },
      {
        title: "4. Udwarthanam & Kativasti (with Dough Prep)",
        desc: "Detailed training in Udwarthanam (benefits, procedure, application types) and Kativasti (procedure, dough preparation, benefits) followed by a final Q&A."
      }
    ]
  },
  {
    code: "AATP1-HV",
    slug: "level-one-advanced-ayurveda-training",
    title: {
      en: "Level-One Advanced for Wellness Professionals",
      de: "Level-One Advanced für Wellness-Fachkräfte",
      fr: "Niveau 1 Avancé pour Professionnels",
      ar: "المستوى الأول المتقدّم لأخصائيي العافية",
      ru: "Продвинутый уровень 1 для специалистов"
    },
    duration: "10 days",
    hours: "40 hrs",
    level: "Advanced",
    priceINR: "₹180,000",
    priceUSD: "$3,000",
    image: "delhi-centre-1.jpg",
    desc: {
      en: "Kairali, as the name defines itself, is derived from the Malayalam word for Kerala that truly reflects their roots and age-old conventions of Ayurveda. It uses the ancient form of Ayurveda as the only means to promote the well-being of an individual.\n\nWith Kairali’s Level One Advance Ayurveda Training Program for Wellness Professionals, Kerala (AATP 1), one can learn about Ayurveda in detail and apply its functions in their everyday life.\n\nSpecified Ayurveda therapies are taught daily at our Ayurvedic wellness destination along with theory and practical. 10 days stay at our retreat, Kairali-The Ayurvedic Healing Village, Palakkad, Kerala, is going to make your training more worthy and wonderful.",
      de: "Level-One Advanced – die grundlegenden ayurvedischen Therapien meistern und einfache Wellness-Beratungen führen.",
      fr: "Niveau 1 avancé – maîtriser les thérapies ayurvédiques de base et mener des consultations bien-être simples.",
      ar: "برنامج كايرالي الأكثر طلبًا. إتقان العلاجات الأيورفيدية الأساسية وإجراء استشارات عافية أولية.",
      ru: "Самая популярная программа Kairali. Освойте базовые аюрведические процедуры и научитесь проводить велнес-консультации."
    },
    overview: "Kairali’s most sought after program which enables the candidate to do basic Ayurvedic-wellness consultations with their clients & perform Ayurvedic therapies confidently. Also, the advanced training program can be customized as per candidate’s special requirements & availability.\n\nProgram will cover basics on Human Anatomy & Physiology with Ayurvedic aspects.\n\nStarting from the introduction & history of Ayurveda, the program will cover major topics under Ayurveda including Philosophies, Concepts, Theories, Treatment modalities, Diet & Regimen (Dinacharya) and Seasonal (Ritucharya) precautions in Ayurveda.\n\nA certificate will be provided to you after successful completion of the course or workshop.",
    recommendedFor: "This program is well suited for people from Spa & Wellness fraternity, Therapists and Wellness Counsellors.",
    highlights: [
      "Learn Science of Ayurveda",
      "Be a certified Ayurveda Professional",
      "Be a constitution Analyst",
      "Ten Advanced Theory Sessions",
      "Ten Advanced Practical sessions"
    ],
    pricing: [
      { location: "Palakkad, Kerala (Kairali- The Ayurvedic Healing Village)*", inr: "₹180,000", usd: "$3,000" },
      { location: "Delhi, Mumbai (non-residential)", inr: "₹90,000", usd: "$1,500" }
    ],
    schedule: [
      { time: "Day 1", activity: "Theory: Origin, history, treatises, and importance of Ayurveda. Practical: Abhyangam sitting (Head & Neck) & supine position." },
      { time: "Day 2", activity: "Theory: Panchamahabhuta, Tridosha, Dhatu, Mala, Agni, Ama, Abhyangam theory. Practical: Abhyangam prone position." },
      { time: "Day 3", activity: "Theory: Swastha, health & disease Trigunas, Ojas. Practical: Complete Abhyangam practice." },
      { time: "Day 4", activity: "Theory: Treatment Modalities, Langhana/Brimhana, Shirodhara theory. Practical: Shirodhara session." },
      { time: "Day 5", activity: "Theory: Dosha relations & properties complete, Nasya theory. Practical: Nasya session." },
      { time: "Day 6", activity: "Theory: Dhatu, Mala, Agni & Ama description of diseases, Podikizhi theory. Practical: Podikizhi Kizhi tying & prep." }
    ],
    syllabus: [
      {
        title: "1. Basics & History of Ayurveda",
        desc: "Origin, history, divisions, treatises, Panchamahabhuta, Tridosha, Saptadhatu, Trimala, Agni, Ama, Ojas, Swastha, and Triguna theories."
      },
      {
        title: "2. Human Anatomy & Regimen",
        desc: "Ayurvedic human anatomy & physiology, Dincharya (daily regimen), and Ritucharya (seasonal precautions)."
      },
      {
        title: "3. Dietetics & Diagnostics",
        desc: "Ahara & Vihara (diet/regimen), Dravyaguna basics, Roga Pareeksha, Rogi Pareeksha, and basic Panchakarma concepts."
      },
      {
        title: "4. Practical Therapies Training",
        desc: "Supervised hands-on training in Abhyangam, Shirodhara, Nasya, Podikizhi, Udwarthanam, and Kativasti, followed by a final Q&A."
      }
    ]
  },
  {
    code: "AALCT-HV",
    slug: "advanced-lifestyle-consultant-therapist",
    title: {
      en: "Advanced Lifestyle Consultant & Therapist Training",
      de: "Advanced Lifestyle Consultant & Therapist",
      fr: "Advanced Lifestyle Consultant & Therapist",
      ar: "استشاري ومعالج أسلوب الحياة المتقدم",
      ru: "Advanced Lifestyle Consultant & Therapist"
    },
    duration: "20 days",
    hours: "80 hrs",
    level: "Advanced",
    priceINR: "₹360,000",
    priceUSD: "$6,000",
    image: "kerala-pharmacy-1.jpg",
    desc: {
      en: "Kairali, founded in the year 1989, have been a disciple of the practise of ancient Ayurveda and trying to spread its knowledge in Indian and overseas.\n\nSuccessful in implementing all the necessary keynotes to lead a healthy and positive life, Kairali has also initiated an Advanced Ayurveda Lifestyle and Consultant and Therapist Training Program (AALCT) that is an inclusive practitioner certification training program for all the Ayurveda enthusiasts.\n\nStarting from basics to detailed explanation and demonstration of the varied therapies, everything is taught by the Ayurveda and Yoga experts at our health retreat.",
      de: "Dreiwöchige Praktiker-Zertifizierung: alle Leistungen meistern, inklusive Prakriti-Analyse und 9 Haupttherapien.",
      fr: "La certification complète de praticien : maîtriser tous les services, dont l'analyse Prakriti et 9 thérapies majeures.",
      ar: "شهادة الممارس الكاملة: إتقان جميع الخدمات، بما فيها تحليل «براكريتي» وتسع علاجات رئيسية.",
      ru: "Полная сертификация практика: освоение всего списка услуг, разбор конституции тела (Пракрити) и терапия."
    },
    overview: "Comprehensive study on Ayurveda and its practical aspects which are suitable for those who are from health care or wellness sector to become an Ayurveda expert.\n\nAdvanced Ayurveda Lifestyle and Consultant and Therapist Training Program (AALCT) will cover the complete science in a concise form including basic principles of Ayurveda, Philosophies & theories, Therapies, Panchakarma, Dravyaguna, Prakrithi & Prakrithi Analysis (Body Constitution Analysis), Ayurvedic Diet & Regimen, Ayurvedic way to manage life style disorders, Basic Ayurveda medicines & home remedies; Roga Pareeksha & Rogi Pareeksha.\n\nBenefits: AALCT students will have an opportunity to do projects & training at our international & domestic centres if they are interested. We also consider AALCT students for the position of Ayurvedic Wellness Consultants for our various international locations. A certificate will be provided to you after successful completion of the course or workshop.",
    recommendedFor: "Recommended for those who are from health care and wellness sector to become an Ayurveda expert.",
    highlights: [
      "Learn Science of Ayurveda",
      "Be a certified Ayurveda Professional",
      "Be a constitution Analyst",
      "Ten Advanced Theory Sessions",
      "Ten Advanced Practical Sessions"
    ],
    pricing: [
      { location: "Palakkad, Kerala (Kairali- The Ayurvedic Healing Village)*", inr: "₹360,000", usd: "$6,000" },
      { location: "Delhi & Mumbai (non-residential)", inr: "₹180,000", usd: "$3,000" }
    ],
    schedule: [
      { time: "Day 1", activity: "Theory: Origin, history, treatises, and importance of Ayurveda. Practical: Abhyangam sitting (Head & Neck) & supine position." },
      { time: "Day 2", activity: "Theory: Panchamahabhuta, Tridosha, Dhatu, Mala, Agni, Ama, Abhyangam theory. Practical: Abhyangam prone position." },
      { time: "Day 3", activity: "Theory: Swastha, health & disease Trigunas, Ojas. Practical: Complete Abhyangam practice." },
      { time: "Day 4", activity: "Theory: Treatment Modalities, Langhana/Brimhana, Shirodhara theory. Practical: Shirodhara session." },
      { time: "Day 5", activity: "Theory: Dosha seats, relations, properties, Nasya theory. Practical: Nasya session." },
      { time: "Day 6", activity: "Theory: Dhatu, Mala, Agni & Ama relation with Doshas, Podikizhi theory. Practical: Podikizhi Kizhi tying & prep." }
    ],
    syllabus: [
      {
        title: "1. Foundations & Principles of Ayurveda",
        desc: "Origin, history, divisions, treatises, Panchamahabhuta, Tridosha, Saptadhatu, Trimala, Agni, Ama, Ojas, Swastha Lakshana, and Triguna theories."
      },
      {
        title: "2. Ayurvedic Anatomy & Diagnostics",
        desc: "Human anatomy & physiology, Prakriti definition & constitution analysis, Roga Pareeksha & Rogi Pareeksha methods."
      },
      {
        title: "3. Dietetics, Pharmacology & Panchakarma",
        desc: "Ahara & Vihara (diet/regimen), Dravyaguna (dietetics/Ganas/actions), Ayurvedic medicines & products, and Panchakarma (Poorva, Pradhana, Paschatkarma)."
      },
      {
        title: "4. Practical Therapies & Clinical Ethics",
        desc: "Detailed training in Abhyangam, Shirodhara, Nasya, Podikizhi, Udwarthanam, Kativasti, Elakizhi, Njavarakizhi, therapy etiquettes, and wellness consulting."
      }
    ]
  }
];

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Navigation");
  const f = await getTranslations("FAQ");

  const course = courseData.find((c) => c.slug === slug);
  if (!course) {
    notFound();
  }

  const courseTitle = course.title[locale as keyof typeof course.title] || course.title.en;
  const courseDesc = course.desc[locale as keyof typeof course.desc] || course.desc.en;

  const breadcrumbItems = [
    { label: t("courses"), path: "/courses" },
    { label: courseTitle }
  ];

  // Course schema definition
  const schema: WithContext<Course> = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseTitle,
    "description": courseDesc,
    "provider": {
      "@type": "Organization",
      "name": "Kairali Guru",
      "sameAs": "https://kairali.guru"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "residential",
      "courseWorkload": `PT${course.hours.replace(/[^\d]/g, "")}H`,
      "offers": {
        "@type": "Offer",
        "price": course.priceINR.replace(/[^\d]/g, ""),
        "priceCurrency": "INR",
        "category": "Education"
      }
    }
  };

  const schedule = course.schedule || [
    { time: "06:00", activity: "Wake & self-care (dinacharya)" },
    { time: "06:30", activity: "Yoga session" },
    { time: "07:15", activity: "Pranayama & meditation" },
    { time: "08:00", activity: "Herbal detox drink" },
    { time: "08:30", activity: "Ayurvedic breakfast" },
    { time: "10:00", activity: "Theory / Philosophy Workshop" },
    { time: "12:30", activity: "Ayurvedic vegetarian lunch" },
    { time: "14:00", activity: "Practical therapy training sessions" }
  ];

  const faqs = [
    { question: f("q1"), answer: f("a1") },
    { question: f("q3"), answer: f("a3") },
    { question: f("q6"), answer: f("a6") }
  ];

  return (
    <>
      <SchemaRenderer schema={schema} />
      <main className="min-h-screen bg-sand/30 py-12 px-6 sm:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumbs */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-copper/10 pb-4 mb-8">
            <Breadcrumbs items={breadcrumbItems} locale={locale} />
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-xs font-semibold text-laterite hover:text-palm transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to all courses</span>
            </Link>
          </div>

          {/* Immersive Course Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            {/* Left Content */}
            <div className="lg:col-span-8 text-start space-y-6">
              <span className="font-mono text-[10px] text-laterite font-bold bg-laterite/10 px-3.5 py-1 rounded-full uppercase tracking-wider w-max block">
                Programme Code: {course.code}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight">
                {courseTitle}
              </h1>
              <p className="whitespace-pre-line text-base sm:text-lg text-taupe leading-relaxed font-serif">
                {courseDesc}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-3 gap-6 border-y border-sand-2 py-6 font-sans text-start">
                <div>
                  <span className="text-[10px] text-taupe uppercase tracking-widest font-semibold block">Duration</span>
                  <span className="text-base text-palm font-bold block mt-1">{course.duration}</span>
                </div>
                <div>
                  <span className="text-[10px] text-taupe uppercase tracking-widest font-semibold block">Workload</span>
                  <span className="text-base text-palm font-bold block mt-1">{course.hours}</span>
                </div>
                <div>
                  <span className="text-[10px] text-taupe uppercase tracking-widest font-semibold block">Difficulty</span>
                  <span className="text-base text-palm font-bold block mt-1">{course.level}</span>
                </div>
              </div>

              {/* Overview Section */}
              {course.overview && (
                <div className="pt-6 space-y-3 text-start">
                  <h2 className="font-display text-2xl font-bold text-palm border-b border-sand-2 pb-2">
                    Overview
                  </h2>
                  <p className="whitespace-pre-line text-xs sm:text-sm text-taupe leading-relaxed font-serif">
                    {course.overview}
                  </p>
                </div>
              )}

              {/* Recommended For Section */}
              {course.recommendedFor && (
                <div className="pt-6 space-y-3 text-start">
                  <h2 className="font-display text-2xl font-bold text-palm border-b border-sand-2 pb-2">
                    Recommended For
                  </h2>
                  <p className="whitespace-pre-line text-xs sm:text-sm text-taupe leading-relaxed font-serif">
                    {course.recommendedFor}
                  </p>
                </div>
              )}

              {/* Interactive syllabus preview */}
              <div className="pt-6 space-y-6">
                <h2 className="font-display text-2xl font-bold text-palm border-b border-sand-2 pb-2">
                  Syllabus Structure
                </h2>
                <ol className="flex flex-col gap-6">
                  {(course.syllabus || [
                    { title: "1. Orientation & Foundations", desc: "Introduction to Ayurveda's history, philosophy, the Tridosha system (Vata, Pitta, Kapha), and basic wellness regimens." },
                    { title: "2. Ayurvedic Anatomy & Herbology", desc: "Understanding bodily constitutions, basic herb identification in our medicinal gardens, and natural drug pharmacology." },
                    { title: "3. Classical Practical Therapies", desc: "Supervised hands-on training in therapies like Abhyanga, Shirodhara, Nasya, and Panchakarma detoxification protocols." }
                  ]).map((step, idx) => (
                    <li key={idx} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-palm text-paper-on-dark flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-palm text-sm">{step.title}</h4>
                        <p className="text-xs sm:text-sm text-taupe mt-1 leading-relaxed font-serif">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right Sticky Side Panel */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-8">
              {/* Fact sheet Box */}
              <div className="bg-sand border border-sand-2 rounded-3xl p-6 shadow-sm text-start space-y-6">
                <div>
                  <span className="text-[10px] text-taupe uppercase tracking-wider font-bold block mb-2">Authoritative Fee</span>
                  {course.pricing ? (
                    <div className="space-y-3.5 font-sans">
                      {course.pricing.map((p, idx) => (
                        <div key={idx} className="border-b border-sand-2 last:border-0 pb-2 last:pb-0">
                          <span className="text-[10px] text-laterite font-semibold block">{p.location}</span>
                          <span className="text-2xl font-bold text-palm inline-block mt-0.5">{p.inr}</span>
                          <span className="text-xs text-taupe inline-block ms-2">({p.usd})</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <span className="text-3xl font-bold text-palm block leading-none">{course.priceINR}</span>
                      <span className="text-xs text-taupe block mt-1.5">{course.priceUSD} ( indicative USD equivalent) *</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-sand-2 pt-4 space-y-3.5 text-xs text-taupe">
                  {(course.highlights || [
                    "Includes all accommodation and daily meals (Kerala)",
                    "Practicing BAMS / MD physician advisors"
                  ]).map((hl, idx) => (
                    <div key={idx} className="flex gap-2">
                      <SealCheck size={18} className="text-laterite shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/enquiry"
                  className="w-full text-center bg-palm hover:bg-palm-2 text-paper-on-dark font-semibold py-3 rounded-xl text-xs transition-all shadow-sm block"
                >
                  Request Registration prospectus
                </Link>
              </div>

              {/* Day schedule snapshot */}
              <div className="bg-sand-2/20 border border-sand-2 rounded-3xl p-6 text-start">
                <h3 className="font-display text-base font-bold text-palm mb-4 flex items-center gap-2">
                  <Hourglass size={18} className="text-laterite" />
                  <span>A Day on Campus</span>
                </h3>
                <div className="relative border-s border-copper/30 pl-4 ml-2 space-y-3.5">
                  {schedule.slice(0, 5).map((sched, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -start-[21px] top-1.5 w-2 h-2 rounded-full bg-copper" />
                      <span className="font-mono text-[10px] text-laterite font-bold block">{sched.time}</span>
                      <span className="text-xs text-taupe leading-relaxed block font-serif mt-0.5">{sched.activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Institutional Compliance */}
          <div className="bg-sand border border-sand-2 rounded-3xl p-8 max-w-4xl mx-auto mb-12 text-start font-sans shadow-sm">
            <div className="flex gap-4 items-start">
              <ShieldCheck size={28} className="text-laterite shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-bold text-palm text-lg mb-2">NABH Certification & Legal Compliance</h4>
                <p className="text-xs text-taupe leading-relaxed font-serif">
                  Certificates are issued by the <strong>Kairali Institute of Panchakarma Therapies / Kairali Ayurvedic Centre Pvt Ltd</strong>. All course modules are delivered under clinical BAMS / MD guidelines at our NABH-accredited healing village in Kerala or Delhi. Learnings are completely compliant with international training certifications.
                </p>
              </div>
            </div>
          </div>

          {/* Terms & Enrollment Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20 text-start">
            <div className="bg-sand border border-sand-2 rounded-3xl p-8 shadow-sm">
              <h3 className="font-display font-bold text-palm text-base mb-4">Terms & Conditions</h3>
              <ul className="list-disc pl-5 space-y-2.5 text-xs text-taupe font-serif leading-relaxed">
                <li>Accommodation facility is only available at our Kairali- The Ayurvedic Healing Village, Kerala (included in the cost).</li>
                <li>Other locations to avail training programs are Delhi and Mumbai (non-residential).</li>
                <li>Theory classes are conducted by expert Ayurvedic Doctors.</li>
                <li>Practical sessions are conducted by Senior Ayurvedic Trainers and Ayurvedic Doctors.</li>
                <li>Certificates are issued by Kairali Institute of Panchakarma Therapies / Kairali Ayurvedic Centre.</li>
                <li>Photography and videography is not permitted during practical and training sessions.</li>
                <li>Payment Policy: Full payment in advance to sign up for the program.</li>
                <li>Classes will be from Monday to Friday only at Delhi and Mumbai locations.</li>
                <li>Sundays are off; no classes take place on Public Holidays.</li>
              </ul>
            </div>
            <div className="bg-sand border border-sand-2 rounded-3xl p-8 shadow-sm">
              <h3 className="font-display font-bold text-palm text-base mb-4">Enrollment Guidelines</h3>
              <ul className="list-disc pl-5 space-y-2.5 text-xs text-taupe font-serif leading-relaxed">
                <li>To sign up for the course, please bring a valid identity proof & 2 passport-size photographs.</li>
                <li>There will be a 20% discount for groups with more than 5 students.</li>
                <li>Above rates are applicable from 1st Jan, 2019 to 31st March, 2020.</li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-palm mb-8 text-center">
              Program FAQs
            </h2>
            <FAQAccordion items={faqs} />
          </div>

        </div>
      </main>
    </>
  );
}

export function generateStaticParams() {
  return courseData.map((c) => ({
    slug: c.slug
  }));
}
