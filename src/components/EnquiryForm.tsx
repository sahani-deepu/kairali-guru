"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslations } from "next-intl";
import { CheckCircle, ArrowRight, ArrowLeft } from "@phosphor-icons/react";


const enquirySchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .regex(/^[a-zA-Z\s\.]+$/, { message: "Name must contain only letters and spaces." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  country: z.string().min(2, { message: "Please specify your country." }),
  programme: z.string().min(1, { message: "Please select a programme." }),
  phone: z
    .string()
    .min(5, { message: "Please enter a valid phone/WhatsApp number." })
    .regex(/^\+?[0-9\s\-]+$/, { message: "Phone number must contain only digits, spaces, or dashes." }),
  language: z.string().min(1, { message: "Please select your preferred language." }),
  message: z.string().optional(),
  location: z.enum(["kerala", "delhi", "either"]),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms to proceed."
  })
});

type EnquiryFormValues = z.infer<typeof enquirySchema>;

export default function EnquiryForm() {
  const t = useTranslations("Enquiry");
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [isOnline, setIsOnline] = useState(() => {
    if (typeof window !== "undefined") {
      return navigator.onLine;
    }
    return true;
  });

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    reset
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      email: "",
      country: "",
      programme: "",
      phone: "",
      language: "",
      message: "",
      location: "either",
      consent: false
    }
  });

  const goNext = async () => {
    // Validate Step 1 fields before proceeding
    const isStepValid = await trigger(["name", "email", "country", "programme"]);
    if (isStepValid) {
      setStep(2);
    }
  };

  const onSubmit = async (data: EnquiryFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          country: data.country,
          programme: data.programme,
          phone: data.phone,
          language: data.language,
          location: data.location,
          message: data.message || "",
          website_url: honeypot, // Honeypot field for spam bot protection
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Submission failed.");
      }

      setIsSuccess(true);
      reset();
      setHoneypot("");
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : "Submission failed. Please verify your connection or try again.";
      console.error("Error submitting inquiry:", errMsg);
      alert(errMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const programs = [
    { value: "oap", label: "One-Day Ayurveda Workshop" },
    { value: "tap", label: "Three-Day Ayurveda Certificate" },
    { value: "wap", label: "Intensive Ayurveda Training" },
    { value: "aatp1", label: "Level-1 Advanced Ayurveda Training" },
    { value: "aalct", label: "Advanced Lifestyle Consultant & Therapist" }
  ];

  if (isSuccess) {
    return (
      <div className="bg-sand border border-sand-2 rounded-3xl p-8 max-w-lg mx-auto text-center shadow-md animate-in fade-in duration-500 text-start">
        <div className="w-16 h-16 rounded-full bg-palm/10 text-palm flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} weight="fill" />
        </div>
        <h3 className="font-display font-bold text-2xl text-palm mb-4 text-center">
          {t("thankYouTitle")}
        </h3>
        <p className="text-xs sm:text-sm text-taupe leading-relaxed mb-8 text-center font-serif">
          {t("thankYouBody")}
        </p>

        <div className="border-t border-sand-2 pt-6">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-laterite mb-4">
            Next Admissions Steps
          </h4>
          <ol className="flex flex-col gap-5">
            <li className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-terracotta text-white flex items-center justify-center shrink-0 font-mono text-[10px] font-bold shadow-sm">
                1
              </div>
              <div>
                <h5 className="font-bold text-palm text-xs">{t("step1_title")}</h5>
                <p className="text-[10px] text-taupe mt-0.5 font-serif">{t("step1_desc")}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-terracotta text-white flex items-center justify-center shrink-0 font-mono text-[10px] font-bold shadow-sm">
                2
              </div>
              <div>
                <h5 className="font-bold text-palm text-xs">{t("step2_title")}</h5>
                <p className="text-[10px] text-taupe mt-0.5 font-serif">{t("step2_desc")}</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-sand border border-sand-2 rounded-3xl p-8 max-w-lg mx-auto shadow-sm">
      <div className="mb-8 text-start">
        <span className="text-[10px] uppercase tracking-wider text-laterite font-bold font-mono">
          Step {step} of 2
        </span>
        <h3 className="font-display font-bold text-2xl text-palm mt-1">{t("heading")}</h3>
        <p className="text-xs text-taupe mt-1 font-serif">{t("subhead")}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 text-start font-sans">
        {step === 1 ? (
          /* STEP 1 FIELDS */
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-[10px] font-bold text-palm uppercase tracking-wider mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className="w-full bg-sand-2/15 border border-sand-2 rounded-xl px-4 py-2.5 text-xs text-bark focus:outline-none focus:border-palm transition-colors"
                placeholder="Aya Al-Sudais"
              />
              {errors.name && <p className="text-[10px] text-laterite mt-1.5 font-medium">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-[10px] font-bold text-palm uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="w-full bg-sand-2/15 border border-sand-2 rounded-xl px-4 py-2.5 text-xs text-bark focus:outline-none focus:border-palm transition-colors"
                placeholder="aya@domain.com"
              />
              {errors.email && <p className="text-[10px] text-laterite mt-1.5 font-medium">{errors.email.message}</p>}
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-[10px] font-bold text-palm uppercase tracking-wider mb-2">
                Country of Residence
              </label>
              <input
                id="country"
                type="text"
                {...register("country")}
                className="w-full bg-sand-2/15 border border-sand-2 rounded-xl px-4 py-2.5 text-xs text-bark focus:outline-none focus:border-palm transition-colors"
                placeholder="Saudi Arabia"
              />
              {errors.country && <p className="text-[10px] text-laterite mt-1.5 font-medium">{errors.country.message}</p>}
            </div>

            {/* Programme */}
            <div>
              <label htmlFor="programme" className="block text-[10px] font-bold text-palm uppercase tracking-wider mb-2">
                Programme of Interest
              </label>
              <select
                id="programme"
                {...register("programme")}
                className="w-full bg-sand border border-sand-2 rounded-xl px-4 py-2.5 text-xs text-bark focus:outline-none focus:border-palm cursor-pointer"
              >
                <option value="">Select a programme</option>
                {programs.map((prog) => (
                  <option key={prog.value} value={prog.value}>
                    {prog.label}
                  </option>
                ))}
              </select>
              {errors.programme && <p className="text-[10px] text-laterite mt-1.5 font-medium">{errors.programme.message}</p>}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="mt-4 w-full bg-terracotta hover:bg-terracotta/90 text-white font-semibold py-3 rounded-full text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Continue to Step 2</span>
              <ArrowRight size={14} />
            </button>
          </div>
        ) : (
          /* STEP 2 FIELDS */
          <div className="space-y-4">
            {/* Phone/WhatsApp */}
            <div>
              <label htmlFor="phone" className="block text-[10px] font-bold text-palm uppercase tracking-wider mb-2">
                Phone / WhatsApp Number
              </label>
              <input
                id="phone"
                type="text"
                {...register("phone")}
                className="w-full bg-sand-2/15 border border-sand-2 rounded-xl px-4 py-2.5 text-xs text-bark focus:outline-none focus:border-palm transition-colors"
                placeholder="+966 50 123 4567"
              />
              {errors.phone && <p className="text-[10px] text-laterite mt-1.5 font-medium">{errors.phone.message}</p>}
            </div>

            {/* Language */}
            <div>
              <label htmlFor="language" className="block text-[10px] font-bold text-palm uppercase tracking-wider mb-2">
                Preferred Language
              </label>
              <select
                id="language"
                {...register("language")}
                className="w-full bg-sand border border-sand-2 rounded-xl px-4 py-2.5 text-xs text-bark focus:outline-none focus:border-palm cursor-pointer"
              >
                <option value="">Select language</option>
                <option value="en">English</option>
                <option value="ar">Arabic</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="ru">Russian</option>
              </select>
              {errors.language && <p className="text-[10px] text-laterite mt-1.5 font-medium">{errors.language.message}</p>}
            </div>

            {/* Location Preference */}
            <div>
              <span className="block text-[10px] font-bold text-palm uppercase tracking-wider mb-2">
                Preferred Venue
              </span>
              <div className="grid grid-cols-3 gap-3">
                {["kerala", "delhi", "either"].map((loc) => (
                  <label
                    key={loc}
                    className="flex items-center justify-center py-2.5 border border-sand-2 rounded-xl cursor-pointer text-[10px] font-bold text-palm hover:bg-sand-2/30 select-none has-[:checked]:bg-terracotta has-[:checked]:text-white has-[:checked]:border-terracotta transition-all shadow-xs"
                  >
                    <input
                      type="radio"
                      value={loc}
                      {...register("location")}
                      className="sr-only"
                    />
                    <span className="capitalize">{loc}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Comments Message */}
            <div>
              <label htmlFor="message" className="block text-[10px] font-bold text-palm uppercase tracking-wider mb-2">
                Comments (Optional)
              </label>
              <textarea
                id="message"
                rows={3}
                {...register("message")}
                className="w-full bg-sand-2/15 border border-sand-2 rounded-xl px-4 py-2.5 text-xs text-bark focus:outline-none focus:border-palm transition-colors resize-none"
                placeholder="Mention any specific health qualifications or preferences..."
              />
            </div>

            {/* Honeypot field for spam bot protection */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="website_url"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* GDPR Consent */}
            <div className="flex items-start gap-3 mt-2">
              <input
                id="consent"
                type="checkbox"
                {...register("consent")}
                className="mt-1 rounded border-sand-2 text-palm focus:ring-palm cursor-pointer"
              />
              <label htmlFor="consent" className="text-[10px] text-taupe leading-relaxed cursor-pointer select-none font-serif">
                I consent to Kairali storing my data to contact me regarding admissions and courses.
              </label>
            </div>
            {errors.consent && <p className="text-[10px] text-laterite mt-0.5 font-medium">{errors.consent.message}</p>}

            {!isOnline && (
              <div className="bg-laterite/10 border border-laterite/20 text-laterite text-xs font-semibold rounded-xl p-3 text-center animate-pulse mt-4">
                You are currently offline. Please check your network connection to submit.
              </div>
            )}

            {/* Nav controls */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="bg-transparent border border-copper/30 hover:bg-sand-2/20 text-palm font-semibold py-3 rounded-full text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <ArrowLeft size={14} />
                <span>Go Back</span>
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !isOnline}
                className="bg-terracotta hover:bg-terracotta/90 disabled:bg-terracotta/50 text-white font-semibold py-3 rounded-full text-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting && <span className="inline-block w-3.5 h-3.5 border-2 border-paper-on-dark border-t-transparent rounded-full animate-spin" />}
                <span>Submit Form</span>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
