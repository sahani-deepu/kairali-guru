"use client";

import { useLocale } from "next-intl";
import { WhatsappLogo } from "@phosphor-icons/react";

import { CONTACT_INFO } from "@/lib/config";

export default function WhatsAppButton() {
  const locale = useLocale();
  
  // Custom message for each language
  const messages = {
    en: "Hello Kairali Guru team, I would like to enquire about your Ayurveda courses.",
    de: "Hallo Kairali Guru Team, ich möchte mich über Ihre Ayurveda-Ausbildungen erkundigen.",
    fr: "Bonjour l'équipe Kairali Guru, je souhaite me renseigner sur vos formations en Ayurveda.",
    ar: "مرحبًا فريق كايرالي غورو، أود الاستفسار عن دورات الأيورفيدا لديكم.",
    ru: "Здравствуйте, команда Kairali Guru! Я хотел бы узнать подробнее о ваших курсах Аюрведы."
  };

  const currentMessage = messages[locale as keyof typeof messages] || messages.en;
  const cleanWhatsappNumber = CONTACT_INFO.admissions.whatsapp.replace(/[^\d]/g, "");
  const whatsappUrl = `https://wa.me/${cleanWhatsappNumber}?text=${encodeURIComponent(currentMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-24 md:bottom-6 end-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#128350] hover:bg-[#0F7A47] text-white shadow-lg transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#128350] focus:ring-offset-2"
    >
      <WhatsappLogo size={32} weight="fill" />
    </a>
  );
}
