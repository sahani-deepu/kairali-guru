"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Lock, FilePdf, BookOpen, GraduationCap, CheckCircle, Clock } from "@phosphor-icons/react";

export default function StudentHubPage() {
  const t = useTranslations("Navigation");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "student@kairali.guru" && password === "kairali1908") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid student credentials. Hint: use student@kairali.guru / kairali1908");
    }
  };

  const breadcrumbItems = [
    { label: "Student Hub" }
  ];

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-sand py-12 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto font-sans">
          <Breadcrumbs items={breadcrumbItems} locale="en" />

          <div className="max-w-md mx-auto bg-sand border border-sand-2 rounded-3xl p-8 shadow-xl mt-12 text-start">
            <div className="w-12 h-12 rounded-full bg-palm/5 flex items-center justify-center text-palm border border-palm/10 mb-6 mx-auto">
              <Lock size={24} className="text-laterite" />
            </div>

            <h1 className="font-display text-2xl font-bold text-palm text-center mb-2">Student Hub Portal</h1>
            <p className="text-xs text-taupe text-center mb-6 leading-relaxed">
              Enter your student credentials to access your study materials, syllabus sheets, and practical schedules.
            </p>

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-palm uppercase tracking-wider mb-2">Student Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@kairali.guru"
                  className="w-full bg-sand-2/20 border border-sand-2 rounded-xl px-4 py-3 text-sm text-bark focus:outline-none focus:border-palm focus:ring-1 focus:ring-palm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-palm uppercase tracking-wider mb-2">Access Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-sand-2/20 border border-sand-2 rounded-xl px-4 py-3 text-sm text-bark focus:outline-none focus:border-palm focus:ring-1 focus:ring-palm"
                  required
                />
              </div>

              {error && <p className="text-xs text-laterite font-semibold mt-1">{error}</p>}

              <button
                type="submit"
                className="bg-palm hover:bg-palm-2 text-paper-on-dark font-semibold py-3 rounded-full text-xs transition-all shadow-md mt-2"
              >
                Sign In to Portal
              </button>
            </form>

            <p className="text-[10px] text-taupe text-center mt-6">
              Forgot credentials? Contact admissions team at info@kairali.com.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-sand py-12 px-6 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-start">
        <Breadcrumbs items={breadcrumbItems} locale="en" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-6 mb-12 border-b border-sand-2 pb-6">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-laterite block mb-1">
              Active Student Portal
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-palm leading-tight tracking-tight">
              Welcome, Ayurvedic Learner
            </h1>
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="border border-copper text-bark hover:bg-sand-2 px-5 py-2 rounded-full text-xs font-semibold transition-all"
          >
            Log Out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Dashboard Panel */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Active Enrolment */}
            <div className="bg-sand border border-sand-2 rounded-3xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-xl text-palm mb-4">Your Enrolment</h3>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-sand-2/20 border border-sand-2 rounded-2xl p-5">
                <div>
                  <span className="font-mono text-[10px] text-laterite font-bold bg-laterite/10 px-2 py-0.5 rounded uppercase tracking-wider block w-max mb-2">
                    AATP1-HV
                  </span>
                  <h4 className="font-display font-bold text-palm text-lg leading-tight">
                    Level-One Advanced for Wellness Professionals
                  </h4>
                  <p className="text-xs text-taupe mt-1">Palakkad Clinical Campus, Kerala</p>
                </div>
                <div className="text-start sm:text-end shrink-0">
                  <span className="text-xs text-taupe block">Status:</span>
                  <span className="text-sm text-tulsi font-bold flex items-center gap-1 mt-0.5">
                    <CheckCircle size={16} weight="fill" />
                    <span>Enrolled</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Course Resources */}
            <div className="bg-sand border border-sand-2 rounded-3xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-xl text-palm mb-4">Study Resources</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="#"
                  className="flex gap-4 p-4 border border-sand-2 rounded-2xl hover:bg-sand-2/20 transition-all text-start"
                >
                  <FilePdf size={32} className="text-laterite shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-palm text-sm">Course Syllabus & Curriculum</h4>
                    <p className="text-xs text-taupe mt-1">Detailed 40-hour syllabus, clinical guidelines, and requirements.</p>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex gap-4 p-4 border border-sand-2 rounded-2xl hover:bg-sand-2/20 transition-all text-start"
                >
                  <BookOpen size={32} className="text-laterite shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-palm text-sm">Ayurvedic Terminology Sheet</h4>
                    <p className="text-xs text-taupe mt-1">Glossary of key terms, Tridosha concepts, and Sanskrit mappings.</p>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Sidebar tracker Panel */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Progress tracker */}
            <div className="bg-sand border border-sand-2 rounded-3xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-lg text-palm mb-4 flex items-center gap-2">
                <GraduationCap size={22} className="text-laterite" />
                <span>Certification Progress</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-palm mb-2">
                    <span>Theory Modules (Online)</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-sand-2/40 rounded-full h-2">
                    <div className="bg-tulsi h-2 rounded-full w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-palm mb-2">
                    <span>Practical Training (In-Person)</span>
                    <span>0%</span>
                  </div>
                  <div className="w-full bg-sand-2/40 rounded-full h-2">
                    <div className="bg-laterite h-2 rounded-full w-0" />
                  </div>
                </div>

                <p className="text-[10px] text-taupe leading-relaxed pt-2">
                  Complete your hands-on practical schedule inside the Kerala village to unlock your graduation certificate.
                </p>
              </div>
            </div>

            {/* Practical Contact Info */}
            <div className="bg-sand border border-sand-2 rounded-3xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-lg text-palm mb-4 flex items-center gap-2">
                <Clock size={22} className="text-laterite" />
                <span>Upcoming Sessions</span>
              </h3>
              <div className="space-y-3 text-xs text-taupe leading-relaxed">
                <div className="border-b border-sand-2 pb-3">
                  <span className="font-bold text-palm block">Practical Orientation Call</span>
                  <span className="block mt-0.5">July 18, 2026 · 14:00 IST</span>
                  <span className="block text-[10px] italic text-laterite">Live on Zoom</span>
                </div>
                <div>
                  <span className="font-bold text-palm block">Kerala Clinical Joining Date</span>
                  <span className="block mt-0.5">August 10, 2026 · 10:00 IST</span>
                  <span className="block text-[10px] italic text-laterite">Palakkad Campus</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
