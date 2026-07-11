"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 w-full text-start">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-sand-2 rounded-2xl bg-sand-2/20 overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              className="w-full flex justify-between items-center p-5 text-palm hover:text-laterite transition-colors text-base font-semibold focus:outline-none"
            >
              <span>{item.question}</span>
              <CaretDown
                size={18}
                className={`text-copper transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            
            <div
              className={`grid transition-all duration-300 ease-editorial ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="p-5 pt-0 text-sm leading-relaxed text-taupe font-serif">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
