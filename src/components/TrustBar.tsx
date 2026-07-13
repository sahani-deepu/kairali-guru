import { SealCheck, TreeStructure, Medal } from "@phosphor-icons/react/dist/ssr";

export default function TrustBar() {
  const credentials = [
    {
      icon: Medal,
      title: "118-Year Family Lineage",
      desc: "Authentic practice and teaching since 1908"
    },
    {
      icon: SealCheck,
      title: "NABH Accredited Teaching Hospital",
      desc: "National clinical accreditation in Kerala"
    },
    {
      icon: TreeStructure,
      title: "Physician-Led Instruction",
      desc: "Learn from BAMS / MD practicing doctors"
    }
  ];

  return (
    <div className="w-full bg-palm border border-palm-2/45 py-10 px-6 rounded-3xl shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-around gap-12 text-center md:text-start">
        {credentials.map((cred, index) => {
          const IconComponent = cred.icon;
          return (
            <div key={index} className="flex flex-col md:flex-row items-center gap-5 max-w-md">
              <div className="w-14 h-14 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-sand border border-white/20">
                <IconComponent size={28} weight="light" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sand text-lg leading-snug">
                  {cred.title}
                </h4>
                <p className="text-sm font-semibold text-sand-2 mt-1.5 font-sans leading-relaxed">
                  {cred.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
