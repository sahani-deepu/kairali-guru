"use client";

import { useState, useEffect } from "react";
import { X, CaretLeft, CaretRight, Image as ImageIcon } from "@phosphor-icons/react";
import GalleryImage from "./GalleryImage";
import Image from "next/image";

export interface GalleryItem {
  title: string;
  desc: string;
  category: string;
  img: string;
  images: string[]; // List of photos in the album
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(items.map((item) => item.category)))];

  // Filter items
  const filteredItems = activeCategory === "All"
    ? items
    : items.filter((item) => item.category === activeCategory);

  // Lightbox navigation helpers
  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activeItem) return;
    setActiveImgIndex((prev) => (prev === 0 ? activeItem.images.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activeItem) return;
    setActiveImgIndex((prev) => (prev === activeItem.images.length - 1 ? 0 : prev + 1));
  };

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === "Escape") {
        setActiveItem(null);
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeItem]);

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeItem]);

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-12 justify-start border-b border-copper/10 pb-6 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all border ${
              activeCategory === cat
                ? "bg-laterite text-white border-laterite font-bold shadow-sm"
                : "bg-transparent text-taupe border-copper/15 hover:border-laterite/45 hover:text-palm"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setActiveItem(item);
              setActiveImgIndex(0);
            }}
            className="group bg-sand border border-sand-2 rounded-3xl overflow-hidden hover:shadow-md hover:border-copper/25 transition-all duration-300 flex flex-col justify-between cursor-pointer text-start relative"
          >
            <div className="relative overflow-hidden">
              <GalleryImage img={item.img} title={item.title} />
              
              {/* Premium Hover overlay */}
              <div className="absolute inset-0 bg-palm/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <div className="bg-sand/90 backdrop-blur-md text-palm rounded-full px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-bold shadow-md flex items-center gap-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <ImageIcon size={14} className="text-laterite" />
                  <span>View Album ({item.images?.length || 1})</span>
                </div>
              </div>
            </div>

            <div className="p-6 text-start">
              <span className="font-mono text-[10px] text-laterite font-bold bg-laterite/10 px-2.5 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                {item.category}
              </span>
              <h3 className="font-display font-bold text-palm text-lg mb-2 leading-snug group-hover:text-laterite transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-taupe leading-relaxed font-serif">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-lg transition-opacity duration-300 select-none">
          {/* Top Bar */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 text-white">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-turmeric uppercase font-bold">
                {activeItem.category} Album
              </span>
              <h4 className="font-display text-sm font-semibold tracking-tight">{activeItem.title}</h4>
            </div>
            <button
              onClick={() => setActiveItem(null)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors group"
              aria-label="Close lightbox"
            >
              <X size={20} className="text-white/80 group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex-grow flex items-center justify-between relative px-4 md:px-12 py-4">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 z-30 p-3 bg-black/40 hover:bg-white/15 border border-white/10 rounded-full text-white/80 hover:text-white transition-all shadow-md group"
            >
              <CaretLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Central Image Container */}
            <div className="w-full h-full flex flex-col items-center justify-center max-w-4xl mx-auto p-2">
              <div className="relative w-full h-[60vh] flex items-center justify-center">
                <Image
                  src={`/images/${activeItem.images[activeImgIndex]}`}
                  alt={`${activeItem.title} - View ${activeImgIndex + 1}`}
                  fill
                  className="object-contain rounded-lg shadow-2xl transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
              <div className="mt-4 text-center text-white/70 max-w-2xl px-4">
                <span className="font-mono text-xs text-turmeric font-bold block mb-1">
                  Photo {activeImgIndex + 1} of {activeItem.images.length}
                </span>
                <p className="text-xs font-serif leading-relaxed italic">
                  {activeItem.desc}
                </p>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 z-30 p-3 bg-black/40 hover:bg-white/15 border border-white/10 rounded-full text-white/80 hover:text-white transition-all shadow-md group"
            >
              <CaretRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Bottom Thumbnails Strip */}
          {activeItem.images.length > 1 && (
            <div className="bg-black/50 border-t border-white/10 py-6 px-4 md:px-12 flex justify-center items-center gap-3 overflow-x-auto">
              {activeItem.images.map((imgName, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIndex(idx)}
                  className={`relative w-16 md:w-20 aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                    idx === activeImgIndex
                      ? "border-turmeric scale-105 shadow-lg"
                      : "border-transparent opacity-50 hover:opacity-100 hover:scale-103"
                  }`}
                >
                  <Image
                    src={`/images/${imgName}`}
                    alt="Thumbnail"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
