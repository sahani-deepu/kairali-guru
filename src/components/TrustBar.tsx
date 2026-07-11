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
    <div className="w-full bg-sand-2/40 border-y border-sand-2 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-around gap-8 text-center md:text-start">
        {credentials.map((cred, index) => {
          const IconComponent = cred.icon;
          return (
            <div key={index} className="flex flex-col md:flex-row items-center gap-4 max-w-sm">
              <div className="w-12 h-12 shrink-0 rounded-full bg-palm/5 flex items-center justify-center text-palm border border-palm/10">
                <IconComponent size={24} weight="light" />
              </div>
              <div>
                <h4 className="font-display font-bold text-palm text-base">
                  {cred.title}
                </h4>
                <p className="text-xs text-taupe mt-1 font-sans">
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
