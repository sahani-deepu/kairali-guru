import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  Heart, 
  Leaf, 
  Globe, 
  HandHeart, 
  Gift, 
  Tree, 
  Users,
  ShieldCheck,
  Sparkle
} from "@phosphor-icons/react/dist/ssr";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Social Responsibility (CSR) - Kairali Ayurvedic Group",
  description: "Learn about Kairali Ayurvedic Group's commitment to society, environment, and organic business practices through our local outreach and charitable programs.",
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function CSRPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Navigation");

  const breadcrumbItems = [
    { label: t("about"), href: "/about" },
    { label: "CSR" }
  ];

  return (
    <main className="min-h-screen bg-sand py-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto font-sans text-start">
        <Breadcrumbs items={breadcrumbItems} locale={locale} />

        {/* HERO SECTION */}
        <div className="max-w-4xl mb-16 mt-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-laterite block mb-3">
            ETHICAL & SUSTAINABLE COMMITMENT
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-palm leading-tight tracking-tight mb-6">
            Corporate Social Responsibility (CSR)
          </h1>
          <div className="space-y-6 text-base sm:text-lg text-taupe leading-relaxed font-serif">
            <p>
              A business of today must run its activities in a socially acceptable way if it desires to sustain in the long run. Businesses should operate without jeopardizing the fate of the future generation. And for that, business needs to think for the society, environment, and its customers. Continuing business with ethics and contributing to economic development while improving the quality of the life of the workforce and their families is demonstrated by the Kairali Ayurvedic Group. The local community and society at large is always considered to be benefited by our actions.
            </p>
            <p>
              Successful growth of an organization cannot be measured just by its increasing profitable value; rather it lies in the appreciation and recognition by the community. Kerala also known as the Paradise of Ayurveda, is the home of Kairali-The Ayurvedic Healing Village and our success story would not have been same without the ancient knowledge and wisdom that Kerala has bestowed us with. Therefore it’s our responsibility to pay back in the form of taking its care socially, culturally and environmentally.
            </p>
          </div>
        </div>

        {/* CORE PILLARS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Pillar 1: Local Outreach */}
          <div className="bg-sand-2/30 border border-copper/10 rounded-3xl p-8 space-y-6 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-palm/10 flex items-center justify-center text-palm">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold text-palm">Local Outreach</h3>
            <p className="text-xs sm:text-sm text-taupe leading-relaxed font-serif">
              A wide range of vital needs of surrounding population are satisfied by our charitable outreach programs, supporting local farmers and developing local skills.
            </p>
          </div>

          {/* Pillar 2: Charitable Concerns */}
          <div className="bg-sand-2/30 border border-copper/10 rounded-3xl p-8 space-y-6 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-laterite/10 flex items-center justify-center text-laterite">
              <HandHeart size={24} />
            </div>
            <h3 className="text-xl font-bold text-palm">Charitable Concerns</h3>
            <p className="text-xs sm:text-sm text-taupe leading-relaxed font-serif">
              Charitable ventures who are pursuing to help the environment and less privileged members of the community are keenly supported by Kairali.
            </p>
          </div>

          {/* Pillar 3: Organic Practices */}
          <div className="bg-sand-2/30 border border-copper/10 rounded-3xl p-8 space-y-6 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-leaf/10 flex items-center justify-center text-leaf">
              <Leaf size={24} />
            </div>
            <h3 className="text-xl font-bold text-palm">Organic Business</h3>
            <p className="text-xs sm:text-sm text-taupe leading-relaxed font-serif">
              Every area of our business depicts our concern for the environment. Sustainable practices are employed at our organic herb farm and healing village.
            </p>
          </div>
        </div>

        {/* DETAILED SECTIONS */}
        <div className="space-y-20 mb-24">
          
          {/* 1. LOCAL OUTREACH DETAIL */}
          <section className="border-t border-copper/15 pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 space-y-4">
                <span className="text-xs font-semibold tracking-wider text-laterite uppercase">01 / Community</span>
                <h2 className="text-3xl font-display font-light text-palm">Local Outreach</h2>
                <p className="text-xs sm:text-sm text-taupe leading-relaxed font-serif">
                  Empowering the communities surrounding Palakkad and across Kerala through land provision, fair pricing models, educational infrastructure, and medical access.
                </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3 bg-sand border border-copper/10 p-6 rounded-2xl">
                  <h4 className="font-bold text-palm text-sm sm:text-base flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-laterite" />
                    Providing Lands for Cultivation
                  </h4>
                  <p className="text-xs text-taupe leading-relaxed font-serif">
                    Local farmers suffering from financial crisis and economic difficulties who don't have their own land to cultivate are given agricultural lands by Kairali Ayurvedic Group. Surplus grain is either purchased by Kairali or sold to the local co-operative society.
                  </p>
                </div>

                <div className="space-y-3 bg-sand border border-copper/10 p-6 rounded-2xl">
                  <h4 className="font-bold text-palm text-sm sm:text-base flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-laterite" />
                    Buyback on MSP
                  </h4>
                  <p className="text-xs text-taupe leading-relaxed font-serif">
                    We have implemented procedures to buyback grains on MSP (Minimum Support Price) from the farmers who have been given land for cultivation from our grounds.
                  </p>
                </div>

                <div className="space-y-3 bg-sand border border-copper/10 p-6 rounded-2xl">
                  <h4 className="font-bold text-palm text-sm sm:text-base flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-laterite" />
                    Hope Foundation Support
                  </h4>
                  <p className="text-xs text-taupe leading-relaxed font-serif">
                    In alignment with the &ldquo;Hope&rdquo; foundation we focus to help local adults, especially women, in attaining economic independence by upgrading their skills via training.
                  </p>
                </div>

                <div className="space-y-3 bg-sand border border-copper/10 p-6 rounded-2xl">
                  <h4 className="font-bold text-palm text-sm sm:text-base flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-laterite" />
                    Local Healthcare Donations
                  </h4>
                  <p className="text-xs text-taupe leading-relaxed font-serif">
                    Kairali Ayurvedic Group gives donations to the local communities around Palakkad. We also provide financial support, hospital beds, and equipment to the local hospital in Chitoor Village.
                  </p>
                </div>

                <div className="space-y-3 bg-sand border border-copper/10 p-6 rounded-2xl">
                  <h4 className="font-bold text-palm text-sm sm:text-base flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-laterite" />
                    School Development Support
                  </h4>
                  <p className="text-xs text-taupe leading-relaxed font-serif">
                    We have donated computers, tables, chairs, cupboards and money for books to the local school in Kodumbu Village.
                  </p>
                </div>

                <div className="space-y-3 bg-sand border border-copper/10 p-6 rounded-2xl">
                  <h4 className="font-bold text-palm text-sm sm:text-base flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-laterite" />
                    Free Medical Checkups
                  </h4>
                  <p className="text-xs text-taupe leading-relaxed font-serif">
                    Free medical checkups have been offered to almost 5,000 financially weak people, along with free health consultations and 2 nights of in-facility stay at Kairali.
                  </p>
                </div>

                <div className="space-y-3 bg-sand border border-copper/10 p-6 rounded-2xl sm:col-span-2">
                  <h4 className="font-bold text-palm text-sm sm:text-base flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-laterite" />
                    90% Local Staff Hiring & Skills Training
                  </h4>
                  <p className="text-xs text-taupe leading-relaxed font-serif">
                    90% of our staff at The Ayurvedic Healing Village and other treatment centers is from Palakkad or Kerala. This is done with the aim of hiring the locals and contributing directly to their financial and economic development. These all are enabled by contributing to a local skills training program.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. CHARITABLE CONCERNS */}
          <section className="border-t border-copper/15 pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 space-y-4">
                <span className="text-xs font-semibold tracking-wider text-laterite uppercase">02 / Outreach</span>
                <h2 className="text-3xl font-display font-light text-palm">Charitable Concerns</h2>
                <p className="text-xs sm:text-sm text-taupe leading-relaxed font-serif">
                  Active presence of Kairali in key projects pursuing to protect the environment and support less privileged members of the community.
                </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-start">
                <div className="space-y-3 bg-sand border border-copper/10 p-6 rounded-2xl">
                  <div className="text-laterite"><Tree size={20} /></div>
                  <h4 className="font-bold text-palm text-sm sm:text-base">Traveler's Forest</h4>
                  <p className="text-xs text-taupe leading-relaxed font-serif">
                    Kairali supports Blue Yonder's eco-tourism initiative &ldquo;Traveler's Forest,&rdquo; aiding sustainable tourism and forest restoration.
                  </p>
                </div>

                <div className="space-y-3 bg-sand border border-copper/10 p-6 rounded-2xl">
                  <div className="text-laterite"><Globe size={20} /></div>
                  <h4 className="font-bold text-palm text-sm sm:text-base">Hellen Keller School Support</h4>
                  <p className="text-xs text-taupe leading-relaxed font-serif">
                    Instigated by Managing Director Mr. K.V Ramesh, Kairali provides medical care and support to blind children in association with Hellen Keller Centenary Memorial Model School for the Blind.
                  </p>
                </div>

                <div className="space-y-3 bg-sand border border-copper/10 p-6 rounded-2xl">
                  <div className="text-laterite"><Heart size={20} /></div>
                  <h4 className="font-bold text-palm text-sm sm:text-base">Corrective Surgery Program</h4>
                  <p className="text-xs text-taupe leading-relaxed font-serif">
                    Every year, the Kairali Group adopts a girl child in need of medical intervention and provides her with corrective surgery.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. ORGANIC BUSINESS PRACTICES */}
          <section className="border-t border-copper/15 pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 space-y-4">
                <span className="text-xs font-semibold tracking-wider text-laterite uppercase">03 / Ecology</span>
                <h2 className="text-3xl font-display font-light text-palm">Organic Business Practices</h2>
                <p className="text-xs sm:text-sm text-taupe leading-relaxed font-serif">
                  Caring for the environment and nature at every point of our operations through circular practices at our organic herb farm in Kerala.
                </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4 p-4 bg-sand rounded-2xl border border-copper/10">
                  <div className="text-leaf shrink-0 mt-1"><Sparkle size={20} /></div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-palm text-xs sm:text-sm">Vermiculture System</h5>
                    <p className="text-xs text-taupe leading-relaxed font-serif">
                      Employed at the Ayurvedic Healing Village to recycle organic waste for compost which is used as manure to enrich our organic farm soil.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-sand rounded-2xl border border-copper/10">
                  <div className="text-leaf shrink-0 mt-1"><Sparkle size={20} /></div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-palm text-xs sm:text-sm">Zero-Waste Feed Programs</h5>
                    <p className="text-xs text-taupe leading-relaxed font-serif">
                      Waste food unsuitable for vermiculture is sent to local pig farms as feed, ensuring no organic matter goes to landfill.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-sand rounded-2xl border border-copper/10">
                  <div className="text-leaf shrink-0 mt-1"><Sparkle size={20} /></div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-palm text-xs sm:text-sm">Wastage Treatment Plant</h5>
                    <p className="text-xs text-taupe leading-relaxed font-serif">
                      We use a three-tier wastage treatment system to recycle and treat waste products, maximizing output and sustainability.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-sand rounded-2xl border border-copper/10">
                  <div className="text-leaf shrink-0 mt-1"><Sparkle size={20} /></div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-palm text-xs sm:text-sm">Energy Saving Policies</h5>
                    <p className="text-xs text-taupe leading-relaxed font-serif">
                      Using CFL lights and strict energy management reduces electricity usage by 40% and lowers our carbon footprint.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-sand rounded-2xl border border-copper/10">
                  <div className="text-leaf shrink-0 mt-1"><Sparkle size={20} /></div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-palm text-xs sm:text-sm">Eco-Generators & Poly-Bag Ban</h5>
                    <p className="text-xs text-taupe leading-relaxed font-serif">
                      State-of-the-art generators decrease carbon emissions, and we actively educate clients, staff and locals to minimize polythene usage.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-sand rounded-2xl border border-copper/10">
                  <div className="text-leaf shrink-0 mt-1"><Sparkle size={20} /></div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-palm text-xs sm:text-sm">1.25MW Windmill Project</h5>
                    <p className="text-xs text-taupe leading-relaxed font-serif">
                      A 1.25MW windmill is under planning as an alternate green source of energy to power the Healing Village.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. QUALITY, SOUVENIR EVENTS & CROSS-CULTURAL INTEGRATION */}
          <section className="border-t border-copper/15 pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 space-y-4">
                <span className="text-xs font-semibold tracking-wider text-laterite uppercase">04 / Synergy</span>
                <h2 className="text-3xl font-display font-light text-palm">Ethics & Culture</h2>
                <p className="text-xs sm:text-sm text-taupe leading-relaxed font-serif">
                  Preserving the pristine quality of Ayurvedic practices while building cross-cultural exchange.
                </p>
              </div>
              <div className="lg:col-span-8 space-y-8">
                <div className="bg-sand border border-copper/10 p-6 rounded-2xl space-y-3">
                  <h4 className="font-bold text-palm flex items-center gap-2">
                    <ShieldCheck size={20} className="text-laterite" />
                    Product Quality Standards
                  </h4>
                  <p className="text-xs text-taupe leading-relaxed font-serif">
                    Kairali is dedicated to enhancing the good name of Ayurveda and follows the strictest parameters in all its product development, treatment therapies, and clinical practices across the world.
                  </p>
                </div>

                <div className="bg-sand border border-copper/10 p-6 rounded-2xl space-y-3">
                  <h4 className="font-bold text-palm flex items-center gap-2">
                    <Gift size={20} className="text-laterite" />
                    Events & Social Souvenirs
                  </h4>
                  <p className="text-xs text-taupe leading-relaxed font-serif">
                    We released the Silver Jubilee edition of our Souvenir on 5th January 2013. Kairali supports the Navjyoti India Foundation, a non-profit NGO for welfare policing. We sponsored complete education packages (books, uniforms, stationery) for ten (10) children.
                  </p>
                </div>

                <div className="bg-sand border border-copper/10 p-6 rounded-2xl space-y-3">
                  <h4 className="font-bold text-palm flex items-center gap-2">
                    <Globe size={20} className="text-laterite" />
                    Cross Cultural Integration
                  </h4>
                  <p className="text-xs text-taupe leading-relaxed font-serif">
                    We motivate clients to interact with local communities to generate a cross-cultural environment. This fades the knowledge gap, helps clients understand traditional cultures, and exposes the local population to the workings of the modern world.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
