export interface CoursePricing {
  location: string;
  inr: string;
  usd: string;
}

export interface CourseScheduleDetails {
  fullTitle?: string;
  intro?: string;
  topics?: string[];
  therapyTitle?: string;
  therapyItems?: string[];
  conclusion?: string;
}

export interface CourseSchedule {
  time: string;
  activity: string;
  details?: CourseScheduleDetails;
}

export interface CourseSyllabus {
  title: string;
  desc: string;
}

export interface CourseFAQ {
  question: string;
  answer: string;
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
  faqs?: CourseFAQ[];
  whyChoose?: string;
  whatYouWillLearn?: string;
  learningExpectations?: string;
  certificateProgression?: string;
  enquiryAdmissions?: string;
  importantGuidance?: string;
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
    image: "Forehead Therapy.jpg",
    desc: {
      en: "The One Day Ayurveda Program is a three-hour introductory workshop for adults who want a structured first look at Ayurveda. The program combines two hours of guided theory with a one-hour complementary therapy session.\n\nParticipants are introduced to the history, philosophy, branches, classical texts, medicines and therapy practices associated with Ayurveda. The program is designed for general awareness and introductory learning rather than advanced or clinical training.",
      de: "Eintägiger Ayurveda-Workshop mit Zertifikat – eine authentische Einführung in die Tridoshas und erste Anwendungen.",
      fr: "Atelier d'Ayurveda d'une journée avec certificat – une introduction authentique aux Tridoshas et premiers soins.",
      ar: "ورشة أيورفيدا ليوم واحد مع شهادة – مقدمة أصيلة للمبادئ، والدوشا الثلاث، وتجربة أولى للممارسة.",
      ru: "Однодневное введение в Аюрведу с сертификатом — принципы, три доши и первые практические шаги."
    },
    overview: "Program at a Glance\n\n• Program: One Day Ayurveda Program\n• Program code: OAP\n• Duration: 3 hours\n• Format: 2 hours of theory and 1 hour of complementary therapy\n• Level: Introductory\n• Faculty: Ayurvedic doctors and trainers\n• Locations: Delhi and Palakkad, Kerala\n• Certificate: Participation certificate, subject to current program policy",
    recommendedFor: "• People interested in learning the fundamentals of Ayurveda\n• Participants exploring Ayurveda training for the first time\n• Wellness professionals seeking a general orientation to Ayurvedic concepts\n• Individuals considering a longer Kairali Guru training program\n• Adults looking for a concise educational and experiential workshop\n\nNo previous knowledge of Ayurveda is required.",
    whyChoose: "Participants often choose the One Day Ayurveda Program because it offers:\n\n• A concise introduction to Ayurveda in a manageable time frame\n• A clear, structured theory module covering key foundational topics\n• A complementary therapy component that adds experiential depth to the learning\n• A non-residential option at Kairali Ayurvedic Centre for those based in or visiting Delhi and nearby locations\n• A way to explore Ayurveda training before committing to longer formats such as TAP, WAP, AATP‑1, or AALC‑2\n\nFor participants seeking an accessible but meaningful starting point, this workshop provides a carefully defined orientation to Ayurveda.",
    whatYouWillLearn: "The One Day Ayurveda Program theory module includes the following topics:\n\n• What is Ayurveda\n• Origin and history of Ayurveda\n• Branches of Ayurveda\n• Brief overview of the philosophy of Ayurveda\n• Scriptures and ancient compendiums on Ayurveda\n• Why to learn Ayurveda and associated benefits\n• Importance of Ayurveda in the 21st century\n• Video demonstration on Ayurvedic therapies\n• Introduction to Ayurvedic medicines, including classical and proprietary preparations\n• Kairali products demonstration\n\nTogether, these areas provide a broad orientation to Ayurvedic knowledge, traditional texts, and basic therapeutic ideas, suitable for an introductory workshop.",
    learningExpectations: "To maintain the quality of the learning experience, participants are expected to:\n\n• Attend the full workshop session\n• Follow the guidance shared by faculty and program staff\n• Approach the content with attention, curiosity, and respect for traditional knowledge\n• Share relevant health details where necessary before participating in complementary therapy sessions\n\nThe format is intentionally focused and best suited to participants who want engaged learning rather than a casual drop-in.",
    certificateProgression: "A participation certificate may be provided on completion of the program, as applicable under current policy.\n\nParticipants who wish to continue their learning may later explore other Kairali Guru offerings, including longer programs such as the 3 Day Ayurveda Certificate Program (TAP), the One Week Ayurveda Program (WAP), and advanced training formats, subject to availability and eligibility requirements.",
    enquiryAdmissions: "For current batch schedules, training-centre options, and enrolment guidance, participants can use the standard enquiry process with Kairali Guru. The admissions team can assist with:\n\n• Current batch availability\n• Centre options (Kairali Ayurvedic Centre and Kairali – The Ayurvedic Healing Village)\n• Program suitability and progression pathways\n• Participation requirements and administrative details",
    importantGuidance: "• This program is educational and experiential in nature. It is not a substitute for medical education, diagnosis, treatment, or emergency care.\n• Complementary therapy sessions included in the workshop form part of the structured learning experience.\n• Participants with serious or complex health conditions should consult their primary physician before enrolment and share relevant information before joining therapy sessions.\n• Program structure, locations, inclusions, fees, and schedules may be updated from time to time in accordance with current policy and the official training framework.",
    highlights: [
      "Learn Basics of Ayurveda",
      "Get Certification",
      "One Informative Theory Session",
      "One Complimentary Ayurveda therapy session"
    ],
    pricing: [
      { location: "Palakkad, Kerala (Kairali- The Ayurvedic Healing Village - Residential)*", inr: "Per-Night Villa Tariff", usd: "From ₹18,410 / $263 / night" },
      { location: "Delhi (non-residential)", inr: "₹13,500", usd: "$160" }
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
    ],
    faqs: [
      {
        question: "What is the format of the One Day Ayurveda Program?",
        answer: "It is a one-day introductory workshop structured as 2 hours of theory class and 1 hour of complementary therapy, delivered as a concise training module."
      },
      {
        question: "Do I need prior knowledge of Ayurveda to join OAP?",
        answer: "No. The program begins with basic concepts such as what Ayurveda is, its origins, branches, and philosophy, and is suitable for beginners."
      },
      {
        question: "What topics are covered in the theory session?",
        answer: "The module covers what Ayurveda is, origin and history, branches, philosophy, scriptures and compendiums, reasons to learn Ayurveda, importance in the 21st century, a video demonstration on therapies, introduction to classical and proprietary medicines, and Kairali products demonstration."
      },
      {
        question: "Is the workshop residential?",
        answer: "At Kairali Ayurvedic Centre, the workshop is non-residential and the fee does not include accommodation or food. At Kairali – The Ayurvedic Healing Village, programs may follow a stay-linked per-night tariff structure, where rates include stay and standard inclusions as per the selected category."
      },
      {
        question: "What is the fee at Kairali Ayurvedic Centre?",
        answer: "At Kairali Ayurvedic Centre, the OAP fee is 13,500 INR or 160 USD per student for a 3-hour session. Accommodation and food are not included."
      },
      {
        question: "Does OAP provide a professional qualification?",
        answer: "No. This is an introductory awareness program. It does not confer a medical degree, independent clinical qualification, or licence to practise. A participation certificate may be provided upon completion, as applicable."
      },
      {
        question: "Can I progress to longer programs after OAP?",
        answer: "Yes. Participants who wish to deepen their learning can later consider longer programs such as Advanced Ayurveda Lifestyle Consultant & Therapist Training Program or Level 1 Advanced Ayurveda Training Program, subject to availability and eligibility."
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
    priceINR: "₹37,000",
    priceUSD: "$495",
    image: "_R6_3502.jpg",
    desc: {
      en: "The 3 Day Ayurveda training Program is a carefully structured short-term learning experience for participants who want a credible introduction to Ayurveda through guided theory, practical orientation, and direct exposure to traditional therapies. Designed for wellness enthusiasts, yoga practitioners, spa and hospitality professionals, and serious learners, the program combines foundational Ayurvedic knowledge with supervised learning in a professional setting.\n\nAs part of Kairali Guru, the training initiative of Kairali Ayurvedic Group, this program reflects a wider commitment to structured Ayurveda education through authentic, instructor-led training. It is especially suited to those seeking an Ayurveda training program in India that is concise, well-organised, and rooted in traditional principles.",
      de: "Dreitägiges Kurzzeit-Zertifikat – Grundlagen des Ayurveda und erste Therapien, ideal für Wellness-Fachkräfte.",
      fr: "Certificat court de trois jours – les fondements de l'Ayurveda et les premières thérapies, idéal pour les professionnels.",
      ar: "شهادة قصيرة من ثلاثة أيام – أساسيات الأيورفيدا وأولى العلاجات، مثالية لأخصائيي العافية.",
      ru: "Короткий структурированный сертификат, охватывающий основы Аюрведы и вводные терапевтические методы."
    },
    overview: "About the Program\n\nThe 3 Day Ayurveda Training Program (TAP) offers a short but structured introduction to key Ayurvedic principles and selected therapies through guided learning over three days. It is suitable for serious beginners, wellness-oriented learners, and professionals seeking introductory exposure in a supervised environment.\n\nEach day combines theory, practical learning, and one complementary therapy session. The program is educational and experiential in nature and does not confer a medical degree, statutory licence, or independent clinical qualification.\n\nProgram at a Glance\n\n• Program name: 3 Day Ayurveda Training Program\n• Program code: TAP\n• Duration: 3 days\n• Daily structure: 1 hour theory + 1 hour practical + 1 complementary therapy session\n• Faculty: Ayurvedic doctors and senior trainers\n• Key therapies covered: Abhyangam, Shirodhara, Podikizhi\n• Level: Introductory\n• Ideal for: Wellness professionals, yoga practitioners, spa and hospitality professionals, and serious beginners\n• Outcome: Completion certificate on successful participation, as per current program policy",
    recommendedFor: "This program is designed for participants who want a structured and authentic introduction to Ayurveda in a professional learning environment.\n\nIt is especially suitable for:\n• Wellness enthusiasts who want to move beyond general information into guided study\n• Yoga practitioners looking to deepen their understanding of Ayurvedic lifestyle concepts\n• Spa, hospitality, and wellness professionals seeking stronger theoretical and practical grounding\n• Doctors, nutritionists, therapists, and counsellors who want introductory exposure to Ayurvedic thought\n• Learners interested in an Ayurveda training program in India that is short, focused, and well guided\n\nThe program is best suited to adults who can attend all sessions over three consecutive days and engage sincerely with both the theoretical and experiential elements of the curriculum.",
    whyChoose: "Participants often choose this short-term Ayurveda training program because it offers:\n\n• A serious introduction to Ayurveda in a short format\n• A clear balance of theory, practical learning, and therapy exposure\n• Instruction grounded in traditional Ayurvedic concepts\n• A credible learning experience suitable for both personal enrichment and professional development\n• A strong foundation for those considering more advanced Ayurveda training later\n\nFor participants looking for Ayurveda training in India that is accessible yet meaningful, this program offers a carefully paced and professionally guided start.",
    learningExpectations: "To maintain the quality of the learning experience, participants are expected to:\n\n• Attend all sessions across the complete three-day schedule\n• Follow the guidance shared by doctors and trainers\n• Approach the program with attention, curiosity, and respect for traditional knowledge\n• Share any relevant health concerns before participating in therapy sessions, where required\n\nThe format is intentionally focused and suits learners who want meaningful engagement rather than a casual overview.",
    certificateProgression: "Completion certificate on successful participation, as per current program policy.\n\nThose who wish to continue their learning may later explore other Kairali Guru offerings, including longer-format Ayurveda training programs, subject to program availability and eligibility requirements.",
    enquiryAdmissions: "For current batch dates, available training locations, stay category preferences, and enrolment guidance, participants may contact the Kairali Guru team through the enquiry process. The admissions team can assist with:\n\n• Current batch availability\n• Location options\n• Stay category selection\n• Program guidance\n• Participation requirements",
    importantGuidance: "• This program is educational and experiential in nature.\n• It is not a substitute for medical education, diagnosis, treatment, or emergency care.\n• Therapy sessions included in the course form part of the structured learning experience.\n• Participants with serious or complex health conditions should consult their primary physician before enrolment and share relevant information before joining therapy sessions.\n• Program structure, locations, inclusions, and administrative details may be updated from time to time in accordance with current policy.",
    highlights: [
      "Learn Basics of Ayurveda",
      "Get Certification",
      "Three Informative Theory sessions",
      "Three Practical sessions",
      "Three Complimentary Ayurveda therapy sessions"
    ],
    pricing: [
      { location: "Palakkad, Kerala (Kairali- The Ayurvedic Healing Village - Residential)*", inr: "Per-Night Villa Tariff", usd: "From ₹18,410 / $263 / night" },
      { location: "Delhi (non-residential)", inr: "₹37,000", usd: "$495 (3-hour sessions for 3 days)" }
    ],
    schedule: [
      {
        time: "Day 1",
        activity: "Foundations of Ayurveda and Abhyangam: History, branches, relevance, Abhyangam theory & guided therapy session.",
        details: {
          fullTitle: "Day 1: Foundations of Ayurveda and Abhyangam",
          intro: "The first day introduces participants to the broad framework of Ayurveda and its relevance in contemporary wellness and lifestyle learning.",
          topics: [
            "What Ayurveda is",
            "Origin and history of Ayurveda",
            "Branches of Ayurveda",
            "Why learning Ayurveda remains relevant today",
            "The importance of Ayurveda in modern wellness"
          ],
          therapyTitle: "The therapy focus for Day 1 is Abhyangam. Participants are introduced to:",
          therapyItems: [
            "What Abhyangam is",
            "Its traditional importance",
            "The basic procedure",
            "Do’s and don’ts",
            "Pre- and post-session considerations",
            "General contraindications"
          ],
          conclusion: "The day concludes with practical orientation and one guided Abhyangam session."
        }
      },
      {
        time: "Day 2",
        activity: "Core Ayurvedic Concepts and Shirodhara: Panchamahabhuta, Tridosha, Saptadhatu, Agni, Ama, Swastha & Shirodhara session.",
        details: {
          fullTitle: "Day 2: Core Ayurvedic Concepts and Shirodhara",
          intro: "The second day deepens conceptual understanding through important Ayurvedic principles used in traditional health and lifestyle thinking.",
          topics: [
            "Panchamahabhuta theory",
            "Tridosha",
            "Saptadhatu",
            "Trimala",
            "Agni",
            "Ama",
            "Srotas",
            "Swastha lakshana",
            "The Ayurvedic understanding of health and disease"
          ],
          therapyTitle: "The therapy focus for Day 2 is Shirodhara. Participants learn about:",
          therapyItems: [
            "What Shirodhara is",
            "Its traditional role",
            "Types of Shirodhara",
            "Procedure",
            "Do’s and don’ts",
            "Pre- and post-session considerations",
            "General contraindications"
          ],
          conclusion: "The day also includes practical orientation and one guided Shirodhara session."
        }
      },
      {
        time: "Day 3",
        activity: "Prakriti, Ayurvedic Medicines, and Podikizhi: Constitution, medicines, product demo, Podikizhi prep & guided session.",
        details: {
          fullTitle: "Day 3: Prakriti, Ayurvedic Medicines, and Podikizhi",
          intro: "The final day brings together constitution-based understanding, introductory medicine concepts, and orientation to another important traditional therapy.",
          topics: [
            "Introduction to Prakriti",
            "Ojas",
            "Tejas",
            "Prana",
            "Treatment modalities",
            "Padachathushatya",
            "Introduction to Ayurvedic medicines, including classical and proprietary categories",
            "Kairali products demonstration as part of the course structure"
          ],
          therapyTitle: "The therapy focus for Day 3 is Podikizhi. Participants are introduced to:",
          therapyItems: [
            "What Podikizhi is",
            "Its traditional importance",
            "Types of kizhi",
            "Podikizhi preparation demonstration",
            "Procedure",
            "Do’s and don’ts",
            "Pre- and post-session considerations",
            "General contraindications"
          ],
          conclusion: "The day concludes with practical orientation and one guided Podikizhi session."
        }
      }
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
    ],
    faqs: [
      {
        question: "What is the pricing model for the 3 Day Ayurveda Training Program?",
        answer: "At Kairali – The Ayurvedic Healing Village, the residential format follows a per-night all-inclusive pricing model. The total is calculated according to the selected villa category, occupancy, and confirmed 3-night stay. At Kairali Ayurvedic Centre, the program is presented in a non-residential format."
      },
      {
        question: "Is there one fixed package fee for this program?",
        answer: "No. The program is not presented with one bundled single price. The total depends on the selected villa category, occupancy, and per-night rate."
      },
      {
        question: "How is the total fee calculated?",
        answer: "The total fee is calculated as the applicable per-night rate multiplied by 3 nights."
      },
      {
        question: "What does the per-night rate cover?",
        answer: "The per-night rate follows the all-inclusive program structure attached to the selected stay category."
      },
      {
        question: "Which therapies are included in the program?",
        answer: "The program includes guided orientation and therapy exposure in Abhyangam, Shirodhara, and Podikizhi."
      },
      {
        question: "Will I receive a certificate?",
        answer: "Yes. Participants who successfully complete the program receive a completion certificate for the 3 Day Ayurveda training Program."
      },
      {
        question: "Do I need prior knowledge of Ayurveda?",
        answer: "No prior formal study is required. The program begins with foundational concepts and is suitable for beginners as well as professionals seeking more structured understanding."
      },
      {
        question: "Does this program qualify me to practice Ayurveda independently?",
        answer: "No. This is a short-term educational program and does not provide independent clinical or medical qualification."
      },
      {
        question: "Can I continue to a more advanced program later?",
        answer: "Yes. Participants who wish to deepen their learning may later explore longer Ayurveda training programs offered by Kairali Guru, subject to availability and eligibility."
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
    priceINR: "₹61,000",
    priceUSD: "$655",
    image: "Traditional Therapy (1).jpg",
    desc: {
      en: "The One Week Ayurveda Program (WAP) is a short-term Ayurveda training course designed to give participants a more immersive introduction to authentic Ayurveda, key concepts, and selected therapies across five structured days.\n\nEach training day combines classroom theory, hands-on practical exposure, and a guided complementary therapy session, helping participants connect Ayurvedic principles with real-world wellness practice in a focused but accessible format.\n\nThis program is part of the wider Kairali Guru training framework and is suitable for participants who want to move beyond a single workshop (such as OAP or TAP) into a multi-day learning experience, without immediately committing to longer advanced programs.",
      de: "Intensivtraining – die fünf zentralen Therapien (Abhyangam, Shirodhara, Podikizhi, Udwarthanam, Kativasti) plus Philosophie.",
      fr: "Formation intensive – les cinq thérapies essentielles (Abhyangam, Shirodhara, Podikizhi, Udwarthanam, Kativasti) et la philosophie.",
      ar: "تدريب مكثّف – العلاجات الخمسة الأساسية (أبهيانغام، شيرودارا، بوديكيزهي، أودوارتانام، كاتيفاستي) مع الفلسفة.",
      ru: "Интенсивная практическая подготовка по пяти ключевым процедурам: Абхьянгам, Широдхара, Подикижи, Удвартанам и Кативасти."
    },
    overview: "Program at a Glance\n\n• Program name: One Week Ayurveda Program (WAP)\n• Program code: WAP\n• Duration (module): 5 days\n• Daily schedule: 1 hour theory + 1 hour practical + 1 hour complementary therapy\n• Level: Introductory / structured orientation\n• Format: Short-term Ayurveda training with daily classroom and therapy exposure\n• Ideal for: Wellness learners, spa and wellness professionals, yoga and holistic lifestyle enthusiasts, Ayurveda beginners seeking deeper introductory training\n• Outcome: Participation in the full module; a participation or course-completion certificate may be provided, as applicable under current policy",
    recommendedFor: "This program is designed for participants who wish to gain a structured, multi-day introduction to Ayurveda and selected therapies in an organised training setting.\n\nIt is especially suitable for:\n• Individuals who have attended shorter workshops (OAP, TAP) and want deeper exposure\n• Spa and wellness professionals seeking foundational training in core Ayurvedic therapies\n• Wellness and yoga practitioners who want to understand Ayurvedic concepts for personal practice or client support\n• Ayurveda enthusiasts ready for an immersive, yet still introductory, course\n\nThe program is best suited to adults who can commit to attending all five days, engage with the theory content, follow practical training guidance, and participate in complementary therapy sessions as appropriate.",
    whyChoose: "Participants often choose the One Week Ayurveda Program because it offers:\n\n• A deeper introduction to Ayurveda than a single-day workshop, within a still manageable timeframe\n• A clear, structured day-wise curriculum covering fundamental concepts and five core therapies\n• Daily practical exposure and complementary therapy sessions that bring theory to life\n• A non-residential option at Kairali Ayurvedic Centre for those based in or visiting Delhi and nearby areas\n• A residential learning pathway at Kairali – The Ayurvedic Healing Village for immersive retreat-based training\n• A way to explore Ayurveda more seriously before moving into advanced programs such as AATP‑1 or AALC‑2\n\nFor participants seeking an accessible but meaningful step beyond basic awareness, WAP provides a carefully defined training path.",
    learningExpectations: "To maintain the quality of the learning experience, participants are expected to:\n\n• Attend all five training days and be present for both classroom and practical components\n• Follow the guidance shared by faculty, trainers, and program staff\n• Approach the content with attention, curiosity, and respect for traditional knowledge\n• Share relevant health details where necessary before participating in complementary therapy sessions\n\nThe format is intentionally structured and best suited to participants who value engaged learning rather than casual drop-in attendance.",
    certificateProgression: "A participation or course-completion certificate may be provided on completion of the program, as applicable under current policy.\n\nParticipants who wish to continue their learning may later explore other Kairali Guru offerings, including:\n• Three Day Ayurveda Program (TAP)\n• Advanced Ayurveda Training Program – Level 1 (AATP‑1)\n• Advanced Ayurveda Lifestyle Consultant & Therapist Program – Level 2 (AALC‑2)\n\nAvailability, eligibility, and centre options for these programs are subject to current schedule and operational policy.",
    enquiryAdmissions: "For current batch schedules, training-centre options, and enrolment guidance, participants can use the standard enquiry process with Kairali Guru. The admissions team can assist with:\n\n• Current batch availability and upcoming start dates\n• Centre options (Kairali Ayurvedic Centre and Kairali – The Ayurvedic Healing Village)\n• Program suitability and progression pathways\n• Participation requirements and administrative details, including payments and documentation",
    importantGuidance: "• This program is educational and experiential in nature. It is not a substitute for medical education, diagnosis, treatment, or emergency care.\n• Complementary therapy sessions form part of the structured learning experience.\n• Participants with serious or complex health conditions should consult their primary physician before enrolment and share relevant information before joining therapy sessions.\n• Program structure, locations, inclusions, fees, and schedules may be updated in accordance with current policy and the official training framework.",
    highlights: [
      "Learn Detailed Ayurveda",
      "Get Certification",
      "Five Informative Theory Sessions",
      "Five Practical sessions",
      "Five Complimentary Ayurveda therapy sessions"
    ],
    pricing: [
      { location: "Palakkad, Kerala (Kairali- The Ayurvedic Healing Village - Residential)*", inr: "Per-Night Villa Tariff", usd: "From ₹18,410 / $263 / night" },
      { location: "Delhi (non-residential)", inr: "₹61,000", usd: "$655 (3-hour sessions for 5 days)" }
    ],
    schedule: [
      {
        time: "Day 1",
        activity: "Theory: Introduction to Ayurveda, origins, branches & Abhyangam theory. Practical: Abhyangam therapy training & session.",
        details: {
          fullTitle: "Day 1 – Introduction to Ayurveda and Abhyangam",
          intro: "The first day lays the foundation of Ayurvedic knowledge and introduces Abhyangam body therapy.",
          topics: [
            "What is Ayurveda",
            "Origin and history of Ayurveda",
            "Branches of Ayurveda",
            "Why learn Ayurveda and associated benefits",
            "Importance of Ayurveda in the 21st century"
          ],
          therapyTitle: "Theory & Practical of Abhyangam Therapy:",
          therapyItems: [
            "What is Abhyangam",
            "Importance and benefits of Abhyangam",
            "Abhyangam procedure",
            "Do’s and don’ts of Abhyangam",
            "Pre- and post-requirements of Abhyangam",
            "Contraindications for Abhyangam",
            "Abhyangam practical training",
            "Abhyangam therapy session"
          ]
        }
      },
      {
        time: "Day 2",
        activity: "Theory: Basic principles of Ayurveda (Panchamahabhuta, Tridosha, Saptadhatu, Agni) & Shirodhara theory. Practical: Shirodhara training & session.",
        details: {
          fullTitle: "Day 2 – Basic Principles of Ayurveda and Shirodhara",
          intro: "Explores core Ayurvedic concepts of bio-humours and systemic health alongside Shirodhara oil-pouring therapy.",
          topics: [
            "Panchamahabhuta theory",
            "Tridosha (Vata, Pitta, Kapha)",
            "Saptadhatu (bodily tissues)",
            "Trimala (waste products)",
            "Agni (digestive fire)",
            "Ama (metabolic toxins)",
            "Srotas (bodily channels)",
            "Swastha lakshana (signs of health)",
            "Definition of health and disease"
          ],
          therapyTitle: "Theory & Practical of Shirodhara Therapy:",
          therapyItems: [
            "What is Shirodhara",
            "Benefits of Shirodhara",
            "Types of Shirodhara",
            "Shirodhara procedure",
            "Do’s and don’ts of Shirodhara",
            "Pre- and post-requirements of Shirodhara",
            "Contraindications for Shirodhara",
            "Shirodhara practical training",
            "Shirodhara therapy session"
          ]
        }
      },
      {
        time: "Day 3",
        activity: "Theory: Prakriti, Ojas & Podikizhi therapy. Practical: Podikizhi herbal bolus making, training & session.",
        details: {
          fullTitle: "Day 3 – Prakriti and Podikizhi",
          intro: "Understands individual constitutional types (Prakriti), vitality (Ojas), and Podikizhi herbal bundle therapy.",
          topics: [
            "Introduction to Prakriti (mind-body constitution)",
            "Ojas (vital energy & immunity)"
          ],
          therapyTitle: "Theory & Practical of Podikizhi Therapy:",
          therapyItems: [
            "What is Podikizhi",
            "Benefits of Podikizhi",
            "Types of Kizhi (herbal bundles)",
            "Podikizhi making demonstration",
            "Podikizhi procedure",
            "Do’s and don’ts of Podikizhi",
            "Pre- and post-requirements of Podikizhi",
            "Contraindications for Podikizhi",
            "Podikizhi practical training",
            "Podikizhi therapy session"
          ]
        }
      },
      {
        time: "Day 4",
        activity: "Theory: Ayurvedic medicines, classical/proprietary preparations, product demo & Udhwarthanam theory. Practical: Udhwarthanam training & session.",
        details: {
          fullTitle: "Day 4 – Ayurvedic Medicines and Udhwarthanam",
          intro: "Covers traditional Ayurvedic pharmacology, formulation types, product demonstrations, and Udhwarthanam dry powder scrub therapy.",
          topics: [
            "Introduction to Ayurvedic medicines",
            "Classical preparations",
            "Proprietary preparations",
            "Kairali products demonstration"
          ],
          therapyTitle: "Theory & Practical of Udhwarthanam Therapy:",
          therapyItems: [
            "What is Udhwarthanam",
            "Importance and benefits of Udhwarthanam",
            "Udhwarthanam procedure",
            "Two types of application",
            "Do’s and don’ts of Udhwarthanam",
            "Pre- and post-requirements of Udhwarthanam",
            "Contraindications for Udhwarthanam",
            "Udhwarthanam practical training",
            "Udhwarthanam therapy session"
          ]
        }
      },
      {
        time: "Day 5",
        activity: "Theory: Prakriti questionnaire & Kativasti treatment. Practical: Dough preparation, Kativasti training, session & doubt-clearing.",
        details: {
          fullTitle: "Day 5 – Prakriti Questionnaire and Kativasti",
          intro: "Concludes with self-assessment tools, Kativasti dough reservoir oil pooling therapy, practical application, and instructor Q&A.",
          topics: [
            "Prakriti assessment questionnaire",
            "Doubt-clearing & program integration session"
          ],
          therapyTitle: "Theory & Practical of Kativasti Treatment:",
          therapyItems: [
            "What is Kativasti",
            "Importance and benefits of Kativasti",
            "Kativasti procedure",
            "Do’s and don’ts of Kativasti",
            "Pre- and post-requirements of Kativasti",
            "Contraindications for Kativasti",
            "Dough preparation demonstration",
            "Kativasti practical training",
            "Kativasti therapy session"
          ],
          conclusion: "Together, these sessions provide a comprehensive introductory view of Ayurveda theory and practical therapy orientation, suitable for serious beginners and wellness-focused learners."
        }
      }
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
    ],
    faqs: [
      {
        question: "What is the format of the One Week Ayurveda Program?",
        answer: "It is a five-day introductory training program structured as 1 hour of theory class, 1 hour of practical training, and 1 hour of complementary therapy per day."
      },
      {
        question: "Do I need prior knowledge of Ayurveda to join WAP?",
        answer: "No. The program begins with basic concepts such as what Ayurveda is, its origins, branches, and philosophy, and then builds up to more detailed topics and therapies. It is suitable for serious beginners."
      },
      {
        question: "What topics are covered in the theory sessions?",
        answer: "The module covers what Ayurveda is, origin and history, branches, basics such as Panchamahabhuta, Tridosha, Saptadhatu, Trimala, Agni, Ama, Srotas, Swastha lakshana, Prakriti, Ojas, and detailed therapy theory for Abhyangam, Shirodhara, Podikizhi, Udhwarthanam, and Kativasti, along with an introduction to classical and proprietary Ayurvedic medicines."
      },
      {
        question: "Is the program residential?",
        answer: "At Kairali Ayurvedic Centre, WAP is non-residential and the fee does not include accommodation or food. At Kairali – The Ayurvedic Healing Village, training may follow a stay-linked per-night tariff structure, where rates include stay and standard inclusions as per the selected villa category."
      },
      {
        question: "What is the fee at Kairali Ayurvedic Centre?",
        answer: "At Kairali Ayurvedic Centre, the WAP fee is 61,000 INR or 655 USD per student for 3-hour sessions over 5 days. Accommodation and food are not included in this fee."
      },
      {
        question: "Does WAP provide a professional qualification?",
        answer: "No. This is a structured introductory program. It does not confer a medical degree, independent clinical qualification, or licence to practise. A participation or course-completion certificate may be provided upon completion, as applicable."
      },
      {
        question: "Can I progress to longer programs after WAP?",
        answer: "Yes. Participants who wish to deepen their learning can later consider advanced programs such as AATP‑1 and AALC‑2, subject to availability and eligibility requirements."
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
    priceINR: "₹130,000",
    priceUSD: "$1,400",
    image: "Traditional Therapy (4).jpg",
    desc: {
      en: "The Advanced Ayurveda Training Program – Level 1 (AATP‑1) is a structured two-week Ayurveda training course designed for participants who want deeper exposure than a short introductory workshop while still remaining within a foundational Level 1 scope. It combines classroom theory and supervised practical learning across weekday sessions in a format intended for serious learners, wellness professionals, and committed beginners seeking a stronger introduction to authentic Ayurveda.\n\nEach class day is part of a 4-hour training structure, and the official module defines AATP‑1 as 20 hours of theory and 20 hours of practical training, totalling 40 hours over two weeks. The curriculum introduces participants to core Ayurvedic principles, health concepts, daily and seasonal regimens, and selected therapies such as Abhyangam, Shirodhara, Nasyam, and Podikizhi through a clearly sequenced training plan.\n\nThis program is part of the wider Kairali Guru training framework and is suitable for learners who want to move beyond shorter programs such as OAP, TAP, or WAP into a more disciplined training format. It is an educational and experiential program and should not be positioned as a medical qualification, professional licence, or statutory right to practise Ayurveda.",
      de: "Level-One Advanced – die grundlegenden ayurvedischen Therapien meistern und einfache Wellness-Beratungen führen.",
      fr: "Niveau 1 avancé – maîtriser les thérapies ayurvédiques de base et mener des consultations bien-être simples.",
      ar: "برنامج كايرالي الأكثر طلبًا. إتقان العلاجات الأيورفيدية الأساسية وإجراء استشارات عافية أولية.",
      ru: "Самая популярная программа Kairali. Освойте базовые аюрведические процедуры и научитесь проводить велнес-консультации."
    },
    overview: "About the Program\n\nThe Advanced Ayurveda Training Program – Level 1 offers a guided pathway through key Ayurvedic concepts and selected therapies using an officially defined 40-hour module. The program runs over two weeks from Monday to Friday, with 4-hour classes and an even split between theory and practical training.\n\nParticipants are introduced to Introduction to Ayurveda, origin and history, branches and divisions, Acharya’s of Ayurveda, treatises, Panchamahabuta, Tridosha, Saptadatus, Trimalas, Agni, Ama, Swastha Lakshana, health and disease concepts, Trigunas, Ojas, treatment modalities, Srotas, disease classifications, Dincharya, Ritucharya, Tejas, Prana, and Human Anatomy & Physiology – Part 1. Therapy-focused practical training includes Abhyangam, Shirodhara, Nasyam, and Podikizhi within the supervised training structure.\n\nThis program is educational and experiential. It is intended for learning, orientation, and supervised skill development, and it does not confer a medical degree, independent clinical qualification, or licence to practise Ayurveda.\n\nProgram at a Glance\n\n• Program name: Advanced Ayurveda Training Program – Level 1 (AATP‑1)\n• Program code: AATP‑1\n• Duration (module): 2 weeks / 10 instructional days\n• Daily schedule: 4-hour classes, Monday to Friday\n• Total academic hours: 20 hours theory + 20 hours practical = 40 hours\n• Level: Foundational advanced / Level 1 structured training\n• Format: Two-week Ayurveda training with integrated classroom theory and supervised practical sessions\n• Therapy focus: Abhyangam, Shirodhara, Nasyam, and Podikizhi\n• Ideal for: Serious Ayurveda learners, wellness and spa professionals, yoga practitioners, holistic lifestyle enthusiasts, and beginners seeking a more structured training experience\n• Outcome: Participation in the full module; a participation or course-completion certificate may be provided, as applicable under current policy, without implying statutory licence or medical qualification.",
    recommendedFor: "This program is designed for participants who want a structured, multi-day introduction to Ayurveda that goes deeper than a workshop while staying within a guided Level 1 framework.\n\nIt is especially suitable for:\n• Individuals who have attended shorter workshops such as OAP, TAP, or WAP and want deeper exposure\n• Spa and wellness professionals seeking stronger foundational training in selected Ayurvedic therapies\n• Yoga and wellness practitioners who want to understand Ayurvedic principles for personal practice or client support\n• Ayurveda enthusiasts ready for a more immersive, yet still foundational, course\n\nThe program is best suited to adults who can commit to attending all training days, engage seriously with theory content, follow practical guidance, and participate in supervised sessions as appropriate.",
    whyChoose: "Participants often choose the Advanced Ayurveda Training Program – Level 1 because it offers:\n\n• A deeper introduction to Ayurveda than a one-day or short workshop format\n• A structured curriculum that connects theory with supervised practical training\n• Exposure to core therapies including Abhyangam, Shirodhara, nasyam, and Podikizhi\n• A non-residential KAC option for learners who prefer city-based training\n• A residential KTAHV option for learners who want an immersive stay-based Ayurveda learning environment\n\nFor participants seeking a meaningful step between short orientation programs and longer advanced courses, AATP‑1 provides a clearly defined Level 1 training path.",
    learningExpectations: "To maintain the quality of the learning experience, participants are expected to:\n\n• Attend all scheduled classes across the full program duration\n• Follow the guidance shared by faculty, trainers, and program staff\n• Approach the program with attention, curiosity, and respect for traditional knowledge\n• Share relevant health concerns before participating in therapy sessions, where appropriate\n\nThe format is intentionally structured and best suited to participants who value engaged learning rather than casual attendance.",
    certificateProgression: "A participation or course-completion certificate may be provided on successful completion of the program, as applicable under current policy. This should be presented as a course-completion outcome only and not as a professional licence or statutory qualification.\n\nParticipants who wish to continue their learning may later explore other Kairali Guru offerings, including longer-format Ayurveda training programs such as AALC‑2, subject to availability, eligibility, and current operational policy.",
    enquiryAdmissions: "For current batch schedules, training-centre options, stay category preferences, and enrolment guidance, participants can use the standard enquiry process with Kairali Guru. The admissions team can assist with:\n\n• Current batch availability and upcoming start dates\n• Centre options\n• Program suitability and progression pathways\n• Participation requirements and administrative details, including payments and documentation",
    importantGuidance: "• This program is educational and experiential in nature. It is not a substitute for medical education, diagnosis, treatment, or emergency care.\n• Practical training and therapy sessions form part of the structured learning experience. Participants with serious or complex health conditions should consult their primary physician before enrolment and share relevant information before joining therapy sessions.\n• Program structure, locations, inclusions, fees, and schedules may be updated in accordance with current policy and the official training framework.",
    whatYouWillLearn: "The Advanced Ayurveda Training Program – Level 1 curriculum is organised day by day as follows, based on the currently visible official module content. The visible AATP‑1 extract covers Day 1 to Day 7; the page should not invent detailed Day 8 to Day 10 lesson breakdown unless the complete internal module is separately provided.",
    highlights: [
      "Learn Science of Ayurveda",
      "Be a certified Ayurveda Professional",
      "Be a constitution Analyst",
      "Ten Advanced Theory Sessions",
      "Ten Advanced Practical sessions"
    ],
    pricing: [
      { location: "Palakkad, Kerala (Kairali- The Ayurvedic Healing Village - Residential)*", inr: "Per-Night Villa Tariff", usd: "From ₹18,410 / $263 / night" },
      { location: "Delhi (non-residential)", inr: "₹130,000", usd: "$1,400 (3-hour sessions for 10 days)" }
    ],
    schedule: [
      {
        time: "Day 1",
        activity: "Theory: Introduction to Ayurveda, origin, history, branches, Acharyas & treatises. Practical: Abhyangam-1 (Head, Neck & supine position).",
        details: {
          fullTitle: "Day 1 – Introduction to Ayurveda and Abhyangam",
          intro: "First instructional day introducing foundational Ayurvedic history, classical texts, and initial Abhyangam massage techniques.",
          topics: [
            "Introduction to Ayurveda",
            "Origin & History of Ayurveda",
            "Branches of Ayurveda",
            "Divisions of Ayurveda",
            "Acharya’s of Ayurveda",
            "Treatises in Ayurveda",
            "Importance of Ayurveda"
          ],
          therapyTitle: "Practical Training:",
          therapyItems: [
            "Abhyangam‑1: Head & Neck at sitting position",
            "Abhyangam-1: Body at supine position"
          ]
        }
      },
      {
        time: "Day 2",
        activity: "Theory: Basic principles (Panchamahabhuta, Tridosha, Saptadatus, Trimalas, Agni, Ama) & Abhyangam Theory-1. Practical: Abhyangam-2 (prone position).",
        details: {
          fullTitle: "Day 2 – Basic Principles of Ayurveda and Abhyangam",
          intro: "Explores core Ayurvedic concepts of elements, humours, tissues, and waste products alongside prone position Abhyangam.",
          topics: [
            "Basic Principles of Ayurveda",
            "Panchamahabuta",
            "Tridosha",
            "Saptadatus",
            "Trimalas",
            "Agni",
            "Concept of Ama",
            "Abhyangam Theory‑1"
          ],
          therapyTitle: "Practical Training:",
          therapyItems: [
            "Abhyangam‑2: Body at prone position"
          ]
        }
      },
      {
        time: "Day 3",
        activity: "Theory: Swastha Lakshana, health & disease concepts, Trigunas, Ojas & Abhyangam Theory-2. Practical: Complete Abhyangam.",
        details: {
          fullTitle: "Day 3 – Swastha Lakshana and Abhyangam Completion",
          intro: "Covers definitions of health, disease, mental qualities (Trigunas), vitality (Ojas), and complete Abhyangam integration.",
          topics: [
            "Swastha Lakshana",
            "Health & Disease according to Ayurveda",
            "Trigunas",
            "Ojas",
            "Abhyangam Theory‑2"
          ],
          therapyTitle: "Practical Training:",
          therapyItems: [
            "Abhyangam – Complete full-body practical application"
          ]
        }
      },
      {
        time: "Day 4",
        activity: "Theory: Padachathushtaya, treatment modalities (Langhana/Brimhana, Samana/Shodhana) & Shirodhara theory. Practical: Shirodhara.",
        details: {
          fullTitle: "Day 4 – Treatment Modalities and Shirodhara",
          intro: "Teaches four pillars of treatment, therapeutic lines of care, and Shirodhara oil-pouring therapy.",
          topics: [
            "Padachathushtaya (four pillars of treatment)",
            "Treatment Modalities",
            "Langhana & Brimhana",
            "Samana & Shodhana",
            "Shirodhara Theory Part"
          ],
          therapyTitle: "Practical Training:",
          therapyItems: [
            "Shirodhara supervised therapy session"
          ]
        }
      },
      {
        time: "Day 5",
        activity: "Theory: Abhyangam & Shirodhara instructions complete, Nasyam treatment theory. Practical: Nasyam session.",
        details: {
          fullTitle: "Day 5 – Shirodhara Completion and Nasyam",
          intro: "Completes oil-pouring therapy instructions and introduces Nasyam nasal administration therapy.",
          topics: [
            "Abhyangam & Shirodhara theory and instructions complete",
            "Nasyam treatment theory complete"
          ],
          therapyTitle: "Practical Training:",
          therapyItems: [
            "Nasyam nasal administration practical training"
          ]
        }
      },
      {
        time: "Day 6",
        activity: "Theory: Dosha, Dhatu, Mala, Agni, Ama, Srotas concept, disease classifications & Podikizhi theory. Practical: Kizhi prep, tying & supine application.",
        details: {
          fullTitle: "Day 6 – Dosha, Dhatu, Mala, Srotas, and Podikizhi",
          intro: "Deepens theory on bodily channels (Srotas), pathology, and Podikizhi herbal bolus preparation.",
          topics: [
            "Detailed theory on Dosha, Dhatu, Mala, Agni & Ama",
            "Concept of Srotas (bodily channels)",
            "Description & classifications of Diseases",
            "Theory part of Podikizhi therapy"
          ],
          therapyTitle: "Practical Training:",
          therapyItems: [
            "Podikizhi: Kizhi preparation",
            "Tying of Kizhi (herbal bolus)",
            "Kizhi application on supine position"
          ]
        }
      },
      {
        time: "Day 7",
        activity: "Theory: Dincharya, Ritucharya, Ojas, Tejas, Prana & Human Anatomy Part-1. Practical: Podikizhi prone position application.",
        details: {
          fullTitle: "Day 7 – Dincharya, Ritucharya, Ojas, Tejas, Prana, and Podikizhi",
          intro: "Teaches daily and seasonal lifestyle regimens, subtle vital energies, human anatomy, and prone position Podikizhi.",
          topics: [
            "Dincharya (daily regimen)",
            "Ritucharya (seasonal regimen)",
            "Ojas, Tejas, Prana (subtle vital energies)",
            "Human Anatomy & Physiology – Part 1"
          ],
          therapyTitle: "Practical Training:",
          therapyItems: [
            "Podikizhi application on prone position"
          ],
          conclusion: "Together, these sessions provide a structured Level 1 introduction to Ayurvedic theory and supervised practical therapy learning."
        }
      }
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
    ],
    faqs: [
      {
        question: "What is the format of the Advanced Ayurveda Training Program – Level 1?",
        answer: "It is a two-week introductory-to-foundational training program structured as weekday 4-hour classes from Monday to Friday, with 20 hours of theory and 20 hours of practical training, totalling 40 hours."
      },
      {
        question: "Do I need prior knowledge of Ayurveda to join AATP‑1?",
        answer: "No formal prior study is required, but the program is best suited to serious learners ready for a more structured training experience. The curriculum begins with Introduction to Ayurveda, origin and history, branches and divisions, and then progresses into foundational concepts and selected therapies."
      },
      {
        question: "What topics are covered in the theory sessions?",
        answer: "The module covers Introduction to Ayurveda, origin and history, branches and divisions, Acharya’s and treatises, Panchamahabuta, Tridosha, Saptadatus, Trimalas, Agni, Ama, Swastha Lakshana, health and disease concepts, Trigunas, Ojas, treatment modalities, Srotas, disease classifications, Dincharya, Ritucharya, Tejas, Prana, and Human Anatomy & Physiology – Part 1."
      },
      {
        question: "Which therapies are included in the practical training?",
        answer: "AATP‑1 includes supervised practical training in Abhyangam, Shirodhara, nasyam, and Podikizhi, including Kizhi preparation, tying, and application in supine and prone positions as shown in the visible module extract."
      },
      {
        question: "Is the program residential?",
        answer: "At Kairali Ayurvedic Centre, AATP‑1 is non-residential and the fee does not include accommodation or food. At Kairali – The Ayurvedic Healing Village, the program may follow a stay-linked per-night tariff structure where rates include stay and standard residential inclusions as per the selected villa category."
      },
      {
        question: "What is the fee at Kairali Ayurvedic Centre?",
        answer: "At Kairali Ayurvedic Centre, the AATP‑1 fee is 130,000 INR or 1,400 USD per student for 3-hour sessions across 10 days, as listed in the Kairali Ayurvedic Centre – Ayurveda Training Program V2 table."
      },
      {
        question: "Does AATP‑1 provide a professional qualification?",
        answer: "No. This is a structured educational and experiential program. It does not confer a medical degree, independent clinical qualification, or licence to practise Ayurveda. A participation or course-completion certificate may be provided upon completion, as applicable."
      },
      {
        question: "Can I progress to longer programs after AATP‑1?",
        answer: "Yes. Participants who wish to deepen their learning may later consider longer or more advanced Kairali Guru offerings such as AALC‑2, subject to availability and eligibility requirements."
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
    priceINR: "₹250,000",
    priceUSD: "$2,700",
    image: "Kati & Greeva Basti.jpg",
    desc: {
      en: "The Advanced Ayurveda Lifestyle Consultant & Therapist Training Program (AALC‑2) is an advanced-level structured Ayurveda training program designed for participants seeking deeper educational exposure to Ayurvedic principles, wellness-oriented application, and supervised practical learning.\n\nAcross four weeks and twenty instructional days, the program combines detailed theory sessions and guided practical training to help participants build stronger understanding of Ayurveda lifestyle concepts and selected therapies in a responsible, well-framed way. It is intended for education and skill development within the scope of the course and should not be understood as a standalone medical qualification or licence to practise Ayurveda.",
      de: "Dreiwöchige Praktiker-Zertifizierung: alle Leistungen meistern, inklusive Prakriti-Analyse und 9 Haupttherapien.",
      fr: "La certification complète de praticien : maîtriser tous les services, dont l'analyse Prakriti et 9 thérapies majeures.",
      ar: "شهادة الممارس الكاملة: إتقان جميع الخدمات، بما فيها تحليل «براكريتي» وتسع علاجات رئيسية.",
      ru: "Полная сертификация практика: освоение всего списка услуг, разбор конституции тела (Пракрити) и терапия."
    },
    overview: "About the Program\n\nAALC‑2 is a more extensive four-week Level 2 training program intended for learners who want broader and deeper educational exposure to Ayurveda than the shorter foundational courses provide. It builds on core concepts and practicals through a structured 80-hour module delivered Monday to Friday.\n\nThe program remains educational and experiential in nature. It should be positioned as a structured training pathway and not as a statutory licence, medical degree, or unrestricted professional qualification.\n\nProgram at a Glance\n\n• Program name: Advanced Ayurveda Lifestyle Consultant & Therapist Training Program\n• Program code: AALC‑2\n• Duration: 4 weeks / 20 instructional days\n• Daily schedule: 2 hours theory + 2 hours practical\n• Total training: 80 hours (40 hours theory + 40 hours practical)\n• Level: Advanced structured Ayurveda training\n• Format: Classroom-based and supervised practical training\n• Focus: Ayurveda lifestyle concepts, dietetics, body constitution, selected therapies, Panchakarma basics, wellness-oriented program design, and professional etiquette\n• Ideal for: Wellness professionals, spa therapists, yoga and holistic practitioners, and serious Ayurveda learners with prior basic training\n• Outcome: A course-completion certificate will be provided, as applicable under current policy. The certificate confirms completion of the educational program and does not grant statutory licence or independent clinical authority.",
    recommendedFor: "This program is suited to participants from the wellness sector and serious Ayurveda learners who wish to deepen their understanding of Ayurvedic concepts, selected therapies, and wellness-oriented program design within the scope of structured training.\n\nIt is especially suitable for:\n• Spa and wellness centre staff seeking structured advanced exposure to Ayurveda lifestyle concepts and therapies\n• Yoga and holistic practitioners wanting to integrate Ayurveda concepts into their wellness work responsibly\n• Learners who have completed foundational programs and now want a four-week intensive format\n• Serious students committed to attending all sessions and engaging with both theory and supervised practical learning\n\nThis program is designed for educational and skill-development purposes and is best suited to participants who value a disciplined, guided learning environment.",
    whatYouWillLearn: "Ayurveda Concepts and Lifestyle Foundations\n• Deeper reinforcement of core Ayurvedic principles relevant to wellness\n• Lifestyle guidance within the course scope, focusing on routine, environment, and body constitution\n• Integration of dietetics concepts with lifestyle understanding in training exercises\n\nBody Constitution and Wellness-Oriented Understanding\n• Structured learning in body constitution (Prakriti) and related analysis tools used within a training setting\n• Guided work with questionnaires and case-style files to understand constitution-linked program design\n• Orientation to wellness programs linked to body constitution, within supervised learning rather than independent clinical practice\n\nTherapy Training and Practical Exposure\nThe program includes supervised learning in the following therapies:\n• Abhyangam\n• Shirodhara\n• Nasyam\n• Podikizhi\n• Udwarthanam\n• Udhgarshanam\n• Kativasti\n• Elakizhi\n• Njavarakizhi\nEach therapy module is designed to help participants understand procedure flow, precautions, do’s and don’ts, and pre- and post-session considerations appropriate to a structured training environment.\n\nPanchakarma and Professional Practice Orientation\n• Introductory and contextual learning related to Panchakarma procedures and their place in Ayurveda\n• Professional etiquette modules covering therapist behaviour, treatment-room preparation, treatment-tray set-up, and communication in wellness settings\n• Exposure to operational elements such as equipment handling and pharmacy-related orientation within the course-defined scope\n\nTogether, these learning areas provide a deeper view of how Ayurveda lifestyle and therapy knowledge may be applied responsibly in wellness-oriented environments.",
    whyChoose: "Participants often choose AALC‑2 because it offers:\n\n• A longer and more intensive learning experience than short introductory Ayurveda programs\n• Progressive supervised exposure to multiple therapies in a structured educational setting\n• Deeper understanding of Ayurveda lifestyle concepts and wellness-oriented program design\n• Practical orientation to etiquette, preparation, and operational elements relevant to wellness environments\n\nThe program is best positioned as a serious educational pathway for developing Ayurveda lifestyle and therapist-oriented skills within clearly defined course boundaries.",
    learningExpectations: "To support a high-quality training experience, participants are expected to:\n\n• Attend sessions consistently across all 20 instructional days\n• Follow faculty and trainer guidance during both theory and practical modules\n• Practise therapies and program-design exercises responsibly within training instructions\n• Respect confidentiality and boundaries during case-style and consultation-oriented work\n• Remain mindful that the learning applies to wellness contexts and does not replace medical training or authorisation\n\nThis program is intensive and best suited to participants prepared for disciplined, engaged participation.",
    certificateProgression: "On successful completion, a course-completion certificate may be provided in line with current policy and assessment outcomes.\n\nThe certificate confirms participation and completion of the AALC‑2 educational program. It is not a statutory licence, does not represent a medical degree, and does not independently authorise clinical practice.\n\nParticipants who wish to continue learning may explore suitable future programs within the Kairali Guru framework, subject to availability, eligibility criteria, and current policy.",
    enquiryAdmissions: "Step 1 – Submit Enquiry\nShare your basic details and preferred centre so the admissions team can understand your interest and suggest appropriate batch options.\n\nStep 2 – Discuss Suitability and Schedule\nAn admissions representative will help you review current batch dates, centres, prior-learning expectations, and practical considerations such as daily timings and fee structure.\n\nStep 3 – Confirm Enrolment\nOnce you are comfortable with the program fit and schedule, you can complete formal enrolment and make the required advance payment to secure your seat.",
    importantGuidance: "• AALC‑2 is an educational and experiential training program. It must not be used as a substitute for medical education, diagnosis, treatment, or emergency care.\n• The page should not be presented as a promise of statutory licensing, independent medical qualification, guaranteed employment, or unrestricted practice rights.\n• Participants with serious or complex health conditions should consult their primary physician before joining therapy-related sessions and share relevant information for safe participation.\n• Program structure, centres, inclusions, fees, and schedules may be updated in line with current policy and training framework approvals. Prospective participants should confirm current details at the time of enquiry and enrolment.",
    highlights: [
      "Inclusive practitioner certification training",
      "Opportunity for projects & training at domestic & international centres",
      "Consideration for Ayurvedic Wellness Consultant positions globally",
      "Includes accommodation and vegetarian meals during stay (Kerala)",
      "Daily group Yoga & Meditation sessions included",
      "Complimentary Ayurveda cooking demo & weekly village walk"
    ],
    pricing: [
      { location: "Palakkad, Kerala (Kairali- The Ayurvedic Healing Village - Residential)*", inr: "Per-Night Villa Tariff", usd: "From ₹18,410 / $263 / night" },
      { location: "Delhi (non-residential)", inr: "₹250,000", usd: "$2,700 (3-hour sessions for 20 days)" }
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
    ],
    faqs: [
      {
        question: "What is the format of the Advanced Ayurveda Lifestyle Consultant & Therapist Training Program?",
        answer: "It is a four-week structured training program delivered over 20 instructional days, with 2 hours of theory and 2 hours of practical training each day, excluding Sundays."
      },
      {
        question: "Who is this program suitable for?",
        answer: "It is suited to wellness-sector participants and serious Ayurveda learners who want deeper educational exposure to Ayurvedic concepts, selected therapies, and wellness-oriented program design within a structured training environment."
      },
      {
        question: "Which therapies are included?",
        answer: "The program includes supervised learning in Abhyangam, Shirodhara, nasyam, Podikizhi, Udwarthanam, Udhgarshanam, Kativasti, Elakizhi, and Njavarakizhi."
      },
      {
        question: "Is the program residential?",
        answer: "At Kairali Ayurvedic Centre, the program is non-residential and does not include accommodation or food. At Kairali – The Ayurvedic Healing Village, participation may be structured within a stay-linked per-night tariff, where residential inclusions are attached to villa selection and number of nights."
      },
      {
        question: "What is the fee at Kairali Ayurvedic Centre?",
        answer: "The AALC‑2 fee at Kairali Ayurvedic Centre is 250,000 INR or 2,700 USD per student for 3-hour sessions over 20 days. Accommodation and food are not included."
      },
      {
        question: "Does AALC‑2 give a medical licence or statutory qualification?",
        answer: "No. It is an advanced educational and experiential course for structured learning and supervised skill development. It does not confer a statutory licence, medical degree, or unrestricted authority to practise Ayurveda."
      },
      {
        question: "Does the program guarantee employment or placement?",
        answer: "No. The program should not be presented as a placement or employment guarantee. Any future work opportunities would depend on separate recruitment processes, approvals, and eligibility outside the course page."
      }
    ]
  }
];
