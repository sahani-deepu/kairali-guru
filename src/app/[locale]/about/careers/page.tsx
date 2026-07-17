import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  Briefcase, 
  Trophy, 
  Sparkle, 
  MapPin, 
  Heart,
  Envelope,
  User,
  Phone,
  FileArrowUp
} from "@phosphor-icons/react/dist/ssr";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Join Kairali Ayurvedic Group",
  description: "Explore career opportunities in the wellness and hospitality industry. Join our dynamic team at Kairali-The Ayurvedic Healing Village.",
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function CareersPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Navigation");

  const breadcrumbItems = [
    { label: t("about"), href: "/about" },
    { label: "Careers" }
  ];

  const jobOpenings = [
    {
      title: "Business Development Manager",
      experience: "5 to 10 Years",
      type: "Full-Time",
      location: "Corporate Office / New Delhi / Palakkad",
      desc: "We are seeking an experienced and dynamic Business Development Manager to drive the expansion of Kairali Ayurvedic Group's wellness centers, hospitality offerings, and training programs globally. You will build key partnerships, identify new market opportunities, and manage strategic growth pipelines.",
      requirements: [
        "5 to 10 years of proven business development experience in the Hospitality, Wellness, or Healthcare sector.",
        "Demonstrated success in establishing corporate partnerships and managing client portfolios.",
        "Exceptional communication, presentation, and international negotiation skills.",
        "Passion for Ayurveda, wellness culture, and premium hospitality standards."
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-sand py-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto font-sans text-start">
        <Breadcrumbs items={breadcrumbItems} locale={locale} />

        {/* HERO SECTION */}
        <div className="max-w-4xl mb-16 mt-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-laterite block mb-3">
            WORK WITH US
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-6">
            Careers at Kairali
          </h1>
          <div className="space-y-6 text-base sm:text-lg text-taupe leading-relaxed font-serif">
            <p>
              The Hospitality Industry offers you a wide range of exciting opportunities! So here is your chance to get away from your monotonous routine of 9 to 5 and do something exciting. Do you want to make a career which exhilarates and refreshes you up? If yes, then, opportunity awaits here at Kairali-The Ayurvedic Healing Village where we provide you with all this.
            </p>
            <p>
              Kairali Ayurvedic Group follows the practice of rewarding a person for the hard work that he puts in to pursue his duty and responsibilities. This reward may be in form of a luring salary package, providing you with stability or giving you such a joyful environment to work where you can learn, evolve and grow.
            </p>
            <p className="font-sans font-semibold text-palm text-sm sm:text-base">
              To give you a chance to be a part of our energetic and dynamic team at Kairali Ayurvedic Group, check our career opportunities below and submit your application.
            </p>
          </div>
        </div>

        {/* CULTURE & BENEFITS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-sand border border-copper/10 rounded-2xl p-6 space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-palm/10 flex items-center justify-center text-palm">
              <Trophy size={20} />
            </div>
            <h3 className="font-bold text-palm text-sm sm:text-base">Luring Packages</h3>
            <p className="text-xs text-taupe leading-relaxed font-serif">
              We offer attractive salary packages and benefits designed to value and reward the hard work you contribute to our mission.
            </p>
          </div>

          <div className="bg-sand border border-copper/10 rounded-2xl p-6 space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-laterite/10 flex items-center justify-center text-laterite">
              <Sparkle size={20} />
            </div>
            <h3 className="font-bold text-palm text-sm sm:text-base">Stability & Growth</h3>
            <p className="text-xs text-taupe leading-relaxed font-serif">
              Join a 118-year-old lineage offering unparalleled career stability, room to grow, and pathways to professional advancement.
            </p>
          </div>

          <div className="bg-sand border border-copper/10 rounded-2xl p-6 space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-leaf/10 flex items-center justify-center text-leaf font-bold">
              <Heart size={20} className="text-leaf" />
            </div>
            <h3 className="font-bold text-palm text-sm sm:text-base">Joyful Environment</h3>
            <p className="text-xs text-taupe leading-relaxed font-serif">
              Evolve in a peaceful, natural environment where learning, self-care, and professional development go hand-in-hand.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          {/* JOB LISTINGS */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-2xl font-display font-bold text-palm mb-6 flex items-center gap-2">
              <Briefcase size={24} className="text-laterite" />
              Current Openings
            </h2>

            {jobOpenings.map((job, idx) => (
              <div key={idx} className="bg-sand border border-copper/15 rounded-3xl p-8 space-y-6 shadow-sm hover:border-laterite transition-all">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-laterite/10 text-laterite text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {job.experience} Experience
                    </span>
                    <span className="bg-palm/10 text-palm text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-palm">{job.title}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-taupe">
                    <MapPin size={14} className="text-copper shrink-0" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-taupe leading-relaxed font-serif">
                  {job.desc}
                </p>

                <div className="space-y-3 border-t border-copper/10 pt-6">
                  <h4 className="font-bold text-palm text-xs sm:text-sm">Requirements:</h4>
                  <ul className="space-y-2 text-xs text-taupe font-serif list-disc pl-5">
                    {job.requirements.map((req, rIdx) => (
                      <li key={rIdx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* APPLICATION FORM */}
          <div className="lg:col-span-5 bg-sand-2/20 border border-copper/10 rounded-3xl p-8 space-y-6 h-fit">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-palm">Apply Now</h3>
              <p className="text-xs text-taupe leading-relaxed font-serif">
                Submit your details and CV below to join the Kairali family.
              </p>
            </div>

            <form className="space-y-4">
              <div className="space-y-1">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-palm">Full Name</label>
                <div className="relative">
                  <span className="absolute left-3 top-3.5 text-taupe"><User size={14} /></span>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full bg-sand border border-copper/20 rounded-md py-2.5 pl-9 pr-4 text-xs focus:outline-none focus:border-laterite font-sans"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-palm">Email Address</label>
                <div className="relative">
                  <span className="absolute left-3 top-3.5 text-taupe"><Envelope size={14} /></span>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-sand border border-copper/20 rounded-md py-2.5 pl-9 pr-4 text-xs focus:outline-none focus:border-laterite font-sans"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-palm">Phone Number</label>
                <div className="relative">
                  <span className="absolute left-3 top-3.5 text-taupe"><Phone size={14} /></span>
                  <input 
                    type="tel" 
                    placeholder="Enter phone number" 
                    className="w-full bg-sand border border-copper/20 rounded-md py-2.5 pl-9 pr-4 text-xs focus:outline-none focus:border-laterite font-sans"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-palm">Resume Upload</label>
                <div className="border border-dashed border-copper/25 rounded-md p-4 flex flex-col items-center justify-center bg-sand cursor-pointer hover:border-laterite transition-colors">
                  <FileArrowUp size={24} className="text-copper mb-2" />
                  <span className="text-[10px] text-taupe font-semibold font-serif">Upload PDF or Word (Max 5MB)</span>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-palm">Short Cover Note</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about yourself..." 
                  className="w-full bg-sand border border-copper/20 rounded-md p-3 text-xs focus:outline-none focus:border-laterite font-sans"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-laterite hover:bg-laterite/90 text-white font-bold py-3.5 rounded-md text-xs tracking-wider uppercase shadow-sm transition-all"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>

      </div>
    </main>
  );
}
