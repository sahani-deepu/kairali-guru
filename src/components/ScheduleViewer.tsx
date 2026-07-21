"use client";

import { useState } from "react";
import { CourseSchedule } from "@/lib/coursesData";
import { CaretDown, CaretUp, CheckCircle, Info, Sparkle, X } from "@phosphor-icons/react";

interface ScheduleViewerProps {
  schedule: CourseSchedule[];
}

export default function ScheduleViewer({ schedule }: ScheduleViewerProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [modalItem, setModalItem] = useState<CourseSchedule | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <div className="relative border-s border-copper/30 pl-4 ml-2 space-y-5">
        {schedule.map((item, idx) => {
          const isExpanded = expandedIndex === idx;
          const hasDetails = Boolean(item.details);

          return (
            <div key={idx} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -start-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-copper ring-4 ring-sand transition-all group-hover:scale-125 group-hover:bg-terracotta" />

              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="font-mono text-xs text-laterite font-bold">{item.time}</span>
                {hasDetails && (
                  <button
                    onClick={() => setModalItem(item)}
                    className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-terracotta hover:text-palm bg-terracotta/10 hover:bg-terracotta/20 px-2.5 py-1 rounded-full transition-all cursor-pointer"
                  >
                    <span>Read More</span>
                    <Sparkle size={10} className="text-terracotta" />
                  </button>
                )}
              </div>

              {item.details?.fullTitle && (
                <h4 className="text-xs font-bold text-palm mt-1 leading-snug">
                  {item.details.fullTitle}
                </h4>
              )}

              <p className="text-xs text-taupe leading-relaxed font-serif mt-1">
                {item.activity}
              </p>

              {/* Inline Collapsible details */}
              {hasDetails && isExpanded && (
                <div className="mt-3 p-4 rounded-2xl bg-sand border border-copper/20 text-start space-y-3 font-sans shadow-sm animate-in fade-in slide-in-from-top-2 duration-200">
                  {item.details?.intro && (
                    <p className="text-xs text-bark/90 leading-relaxed font-serif italic border-s-2 border-copper/40 pl-2.5">
                      {item.details.intro}
                    </p>
                  )}

                  {item.details?.topics && item.details.topics.length > 0 && (
                    <div>
                      <span className="text-[10px] font-bold text-laterite uppercase tracking-wider block mb-1.5">
                        Topics Included:
                      </span>
                      <ul className="space-y-1">
                        {item.details.topics.map((tp, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-1.5 text-[11px] text-taupe leading-snug">
                            <CheckCircle size={12} className="text-copper shrink-0 mt-0.5" />
                            <span>{tp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.details?.therapyTitle && (
                    <div>
                      <span className="text-[10px] font-bold text-laterite uppercase tracking-wider block mb-1.5">
                        Therapy Focus:
                      </span>
                      <p className="text-[11px] text-bark font-medium mb-1.5">
                        {item.details.therapyTitle}
                      </p>
                      {item.details.therapyItems && item.details.therapyItems.length > 0 && (
                        <ul className="space-y-1">
                          {item.details.therapyItems.map((th, thIdx) => (
                            <li key={thIdx} className="flex items-start gap-1.5 text-[11px] text-taupe leading-snug">
                              <span className="w-1.5 h-1.5 rounded-full bg-copper/60 shrink-0 mt-1.5" />
                              <span>{th}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {item.details?.conclusion && (
                    <p className="text-[11px] text-palm font-medium pt-2 border-t border-copper/15 leading-relaxed font-serif">
                      {item.details.conclusion}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Detailed Modal for full view when Read More is clicked */}
      {modalItem && modalItem.details && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setModalItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#281A12] border border-copper/30 text-palm rounded-3xl p-6 sm:p-8 max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl relative space-y-5 text-start animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start border-b border-copper/20 pb-4">
              <div>
                <span className="font-mono text-[10px] text-turmeric font-bold uppercase tracking-widest block">
                  {modalItem.time} Detailed Curriculum
                </span>
                <h3 className="font-display text-xl font-bold text-palm mt-1">
                  {modalItem.details.fullTitle || modalItem.activity}
                </h3>
              </div>
              <button
                onClick={() => setModalItem(null)}
                className="p-1.5 rounded-full bg-[#362217] text-palm hover:text-turmeric transition-colors border border-copper/30"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {modalItem.details.intro && (
              <p className="text-xs text-taupe font-serif leading-relaxed italic border-s-2 border-turmeric/50 pl-3">
                {modalItem.details.intro}
              </p>
            )}

            {modalItem.details.topics && modalItem.details.topics.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-turmeric font-mono">
                  Theory Topics Covered:
                </h4>
                <ul className="space-y-1.5 bg-[#362217]/60 p-3.5 rounded-2xl border border-copper/15">
                  {modalItem.details.topics.map((tp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-palm/90 leading-relaxed font-serif">
                      <CheckCircle size={14} className="text-turmeric shrink-0 mt-0.5" />
                      <span>{tp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {modalItem.details.therapyTitle && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-turmeric font-mono">
                  Therapy Focus & Protocols:
                </h4>
                <p className="text-xs text-palm font-medium">
                  {modalItem.details.therapyTitle}
                </p>
                {modalItem.details.therapyItems && modalItem.details.therapyItems.length > 0 && (
                  <ul className="space-y-1.5 bg-[#362217]/60 p-3.5 rounded-2xl border border-copper/15">
                    {modalItem.details.therapyItems.map((th, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-taupe leading-relaxed font-serif">
                        <span className="w-1.5 h-1.5 rounded-full bg-turmeric shrink-0 mt-1.5" />
                        <span>{th}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {modalItem.details.conclusion && (
              <div className="pt-3 border-t border-copper/20">
                <p className="text-xs text-sand font-serif leading-relaxed">
                  {modalItem.details.conclusion}
                </p>
              </div>
            )}

            <button
              onClick={() => setModalItem(null)}
              className="w-full bg-terracotta hover:bg-terracotta/90 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md mt-4"
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </>
  );
}
