export interface CoursePricing {
  location: string;
  inr: string;
  usd: string;
}

export interface CourseSchedule {
  time: string;
  activity: string;
}

export interface CourseSyllabus {
  title: string;
  desc: string;
}

export interface CourseData {
  code: string;
  slug: string;
  title: {
    en: string;
    de: string;
    fr: string;
    ar: string;
    ru: string;
  };
  duration: string;
  hours: string;
  level: {
    en: string;
    de: string;
    fr: string;
    ar: string;
    ru: string;
  };
  priceINR: string;
  priceUSD: string;
  image: string;
  desc: {
    en: string;
    de: string;
    fr: string;
    ar: string;
    ru: string;
  };
  overview?: string;
  recommendedFor?: string;
  highlights?: string[];
  pricing?: CoursePricing[];
  schedule?: CourseSchedule[];
  syllabus?: CourseSyllabus[];
}

export const courses: CourseData[] = [
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
    level: {
      en: "Beginner",
      de: "Einsteiger",
      fr: "Débutant",
      ar: "مبتدئ",
      ru: "Начальный"
    },
    priceINR: "₹15,500",
    priceUSD: "$258",
    image: "kerala-garden-1.jpg",
    desc: {
      en: "‘Ayur’ meaning ‘life’ and ‘Veda’ meaning ‘science’ thus unites together to form the ‘Science of Life’. This discipline is practiced from the past 5000 years and hence, Kairali Ayurvedic Group comes up with the Ayurveda Training Programs of varied levels.\n\nOut of the five Ayurvedic Training Programs, the One Day Ayurveda Workshop Program (OAP) is an attempt to create general awareness about the discipline of Ayurveda and to educate people for a healthy standard of life.",
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
      { location: "Palakkad, Kerala (Kairali- The Ayurvedic Healing Village)*", inr: "₹15,500", usd: "$258" },
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
    level: {
      en: "Beginner",
      de: "Einsteiger",
      fr: "Débutant",
      ar: "مبتدئ",
      ru: "Начальный"
    },
    priceINR: "₹42,500",
    priceUSD: "$708",
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
      { location: "Palakkad, Kerala (Kairali- The Ayurvedic Healing Village)*", inr: "₹42,500", usd: "$708" },
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
    level: {
      en: "Intermediate",
      de: "Mittelstufe",
      fr: "Intermédiaire",
      ar: "متوسط",
      ru: "Средний"
    },
    priceINR: "₹69,000",
    priceUSD: "$1,150",
    image: "Traditional Therapy (1).jpg",
    desc: {
      en: "The learning of Ayurveda can never be complete in one’s lifetime. The more you learn the wiser and expert you become in that field. Ayurveda is an ancient practise that enriches the body, mind and soul. It is not just a discipline to study but a way of life.\n\nKeeping in mind this vision, Kairali Ayurvedic Group motivated the initiation of Ayurvedic Training Programs to cater to the specific requirements of the individual.\n\nThe Intensive Ayurveda Training Program (WAP) focuses on the learning of the basics of Ayurveda, its origin, the different therapies (both theory and practical) and the basic concepts on Ayurvedic Philosophy.",
      de: "Intensivtraining – die @import \"tailwindcss\"; fünf zentralen Therapien (Abhyangam, Shirodhara, Podikizhi, Udwarthanam, Kativasti) plus Philosophie.",
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
    level: {
      en: "Advanced",
      de: "Fortgeschritten",
      fr: "Avancé",
      ar: "متقدم",
      ru: "Продвинутый"
    },
    priceINR: "₹180,000",
    priceUSD: "$3,000",
    image: "Traditional Therapy (4).jpg",
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
      en: "Advanced Ayurveda Lifestyle Consultant and Therapist Training Program (AALCT)",
      de: "Advanced Lifestyle Consultant & Therapist",
      fr: "Advanced Lifestyle Consultant & Therapist",
      ar: "استشاري ومعالج أسلوب الحياة المتقدم",
      ru: "Advanced Lifestyle Consultant & Therapist"
    },
    duration: "20 days",
    hours: "80 hrs",
    level: {
      en: "Advanced",
      de: "Fortgeschritten",
      fr: "Avancé",
      ar: "متقدم",
      ru: "Продвинутый"
    },
    priceINR: "₹360,000",
    priceUSD: "$6,000",
    image: "Kati & Greeva Basti.jpg",
    desc: {
      en: "Kairali, founded in the year 1989, have been a disciple of the practise of ancient Ayurveda and trying to spread its knowledge in Indian and overseas.\n\nSuccessful in implementing all the necessary keynotes to lead a healthy and positive life, Kairali has also initiated an Advanced Ayurveda Lifestyle and Consultant and Therapist Training Program (AALCT) that is an inclusive practitioner certification training program for all the Ayurveda enthusiasts.\n\nStarting from basics to detailed explanation and demonstration of the varied therapies, everything is taught by the Ayurveda and Yoga experts at our health retreat.",
      de: "Dreiwöchige Praktiker-Zertifizierung: alle Leistungen meistern, inklusive Prakriti-Analyse und 9 Haupttherapien.",
      fr: "La certification complète de praticien : maîtriser tous les services, dont l'analyse Prakriti et 9 thérapies majeures.",
      ar: "شهادة الممارس الكاملة: إتقان جميع الخدمات، بما فيها تحليل «براكريتي» وتسع علاجات رئيسية.",
      ru: "Полная сертификация практика: освоение всего списка услуг, разбор конституции тела (Пракрити) и терапия."
    },
    overview: "Comprehensive study on Ayurveda and its practical aspects which are suitable for those who are from health care or wellness sector to become an Ayurveda expert.\n\nAdvanced Ayurveda Lifestyle and Consultant and Therapist Training Program (AALCT) will cover the complete science in a concise form including basic principles of Ayurveda, Philosophies & theories, Therapies, Panchakarma, Dravyaguna, Prakrithi & Prakrithi Analysis (Body Constitution Analysis), Ayurvedic Diet & Regimen, Ayurvedic way to manage life style disorders, Basic Ayurveda medicines & home remedies; Roga Pareeksha & Rogi Pareeksha.",
    recommendedFor: "Recommended for those who are from health care and wellness sector to become an Ayurveda expert.",
    highlights: [
      "Inclusive practitioner certification training",
      "Opportunity for projects & training at domestic & international centres",
      "Consideration for Ayurvedic Wellness Consultant positions globally",
      "Includes accommodation and vegetarian meals during stay (Kerala)",
      "Daily group Yoga & Meditation sessions included",
      "Complimentary Ayurveda cooking demo & weekly village walk"
    ],
    pricing: [
      { location: "Palakkad, Kerala (Kairali- The Ayurvedic Healing Village)*", inr: "₹360,000", usd: "$6,000" },
      { location: "Delhi & Mumbai (non-residential)", inr: "₹180,000", usd: "$3,000" }
    ],
    schedule: [
      { time: "Day 1", activity: "Theory: Introduction, Origin & History, Branches, Divisions, Acharyas, Treatises, and Importance of Ayurveda. Practical: Abhyangam-1 (Head & Neck in sitting position, and body in supine position)." },
      { time: "Day 2", activity: "Theory: Basic Principles of Ayurveda (Panchamahabhuta, Tridosha, Saptadhatu, Trimala, Agni, Ama) and Abhyangam Theory-1. Practical: Abhyangam-2 (Body in prone position)." },
      { time: "Day 3", activity: "Theory: Swastha Lakshana, Health & Disease according to Ayurveda, Trigunas, Ojas, and Abhyangam Theory-2. Practical: Complete Abhyangam practice." },
      { time: "Day 4", activity: "Theory: Treatment Modalities (Langhana & Brimhana, Samana & Shodhana) and Shirodhara Theory. Practical: Shirodhara session." },
      { time: "Day 5", activity: "Theory: Qualities, seats, and relations of Doshas; Abhyangam & Shirodhara instructions wrap-up; Nasya treatment theory. Practical: Nasya treatment." },
      { time: "Day 6", activity: "Theory: Detailed Dhatu, Mala, Agni & Ama relation with Doshas, classifications of diseases; Podikizhi theory. Practical: Podikizhi (Kizhi preparation, tying, and application in supine position)." },
      { time: "Day 7", activity: "Theory: Dinacharya (Daily Regimen), Ritucharya (seasonal precautions), and Human Anatomy & Physiology. Practical: Podikizhi application in prone position." },
      { time: "Day 8", activity: "Theory: Human Anatomy & Physiology (Part 2), and Udwarthanam theory. Practical: Udwarthanam session." },
      { time: "Day 9", activity: "Theory: Roga Pareeksha & Rogi Pareeksha methods, and Introduction to Panchakarma & Udhgarshanam theory. Practical: Udhgarshanam session." },
      { time: "Day 10", activity: "Theory: Prakriti definition & basics, Prakriti analysis questionnaire, body constitution analysis, and Kativasti theory. Practical: Kativasti session." },
      { time: "Day 11", activity: "Theory: Ahara & Vihara (Diet & Regimen) and Dravyaguna (Ayurvedic Dietetics, Dravya Ganas, Dravya actions). Practical: Njavara Kizhi and Elakizhi preparation." },
      { time: "Day 12", activity: "Theory: Introduction to Ayurvedic Medicines (preparations, classical & proprietary products, products demo). Practical: Elakizhi (supine position)." },
      { time: "Day 13", activity: "Theory: Introduction to Panchakarma (Snehanam & Swedanam, video demo). Practical: Elakizhi (prone position)." },
      { time: "Day 14", activity: "Theory: Poorva Karma & Paschatkarma, Vamanam, Virechanam, and Nasyam. Practical: Njavarakizhi (supine position)." },
      { time: "Day 15", activity: "Theory: Vasti treatment (types, procedure), Raktamoksha, and Panchakarma precautions/contraindications. Practical: Njavarakizhi (prone position)." },
      { time: "Day 16", activity: "Theory: Nadee Pareeksha & vital readings taking, and wellness consultation. Practical: Abhyangam repeat." },
      { time: "Day 17", activity: "Theory: Ayurvedic wellness consultation, body constitution analysis, and client program development. Practical: Patient consultation, case file preparation, and program development." },
      { time: "Day 18", activity: "Theory: Complete theory revision and Q&A session. Practical: Practical Q&A session." },
      { time: "Day 19", activity: "Theory: Pada-chathushtayam, statutory requirements, talk lines, and regulatory bodies. Practical: Therapy etiquette, room/tray preparation, steam generator operations, and pharmacy operations." },
      { time: "Day 20", activity: "Theory: Theory examination (objective type) and concluding session. Practical: Practical exam and practical concluding session." }
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
