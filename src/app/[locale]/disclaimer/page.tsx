import { setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACT_INFO } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Disclaimer",
  description: "Read the legal disclaimer of Kairali Guru. Clarifies scope of study certificates, local regulations, and limitations of liability.",
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function DisclaimerPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const breadcrumbItems = [
    { label: "Disclaimer" }
  ];

  return (
    <main className="min-h-screen bg-sand py-12 px-6 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto text-start">
        <Breadcrumbs items={breadcrumbItems} locale={locale} />

        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-8 mt-6">
          Legal Disclaimer
        </h1>

        <div className="font-serif text-sm sm:text-base text-taupe leading-relaxed space-y-6">
          <p>
            The educational programmes, syllabus material, lectures, terminology sheets, and practical training details provided by Kairali Guru are intended solely for academic, informational, and professional training purposes.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">No Medical Practice or Advice</h3>
          <p>
            Kairali Guru is an educational institution. Successful completion of our training courses, certifications, or workshops (such as the Level-One Advanced or Advanced Lifestyle Consultant & Therapist programmes) certifies your knowledge of Ayurvedic principles and therapies.
          </p>
          <p>
            <strong>Our training does not confer a licence to practice medicine or prescribe medical treatments in India or any other jurisdiction.</strong> 
          </p>
          <p>
            Ayurvedic clinical practice and the prescription of treatments or medicines are regulated by government bodies (such as the Ministry of Ayush in India). Students are fully responsible for understanding and complying with their local laws, licensing requirements, and scope of practice regulations.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Syllabus & Clinical Accuracy</h3>
          <p>
            While we strive to ensure that all course contents are aligned with standard Ayurvedic treatises, classical pharmacopoeias, and modern clinical guidelines, we do not warrant or guarantee that the information is free from typos, errors, or omissions.
          </p>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Limitation of Liability</h3>
          <p>
            Kairali Guru, its directors, instructors, and clinical advisors shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Any application of Ayurvedic concepts or therapies by students in their own personal or professional practices.</li>
            <li>Any errors in terminology sheets, syllabus curriculums, or portal files.</li>
            <li>Decisions made or actions taken by students in reliance on the academic content.</li>
          </ul>

          <h3 className="font-display text-xl font-bold text-palm pt-4">Contact</h3>
          <p>
            For legal and academic clarification, please contact our registrar:
          </p>
          <div className="bg-sand-2/20 border border-sand-2 rounded-2xl p-6 text-xs sm:text-sm font-sans space-y-2.5">
            <p><strong>Registrar Office:</strong> Admissions Department<br />{CONTACT_INFO.address}</p>
            <p><strong>Email:</strong> {CONTACT_INFO.admissions.email}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
