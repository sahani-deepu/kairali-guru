"use client";

import { useState } from "react";
import { Image as ImageIcon, Camera } from "@phosphor-icons/react";

interface GalleryImageProps {
  img: string;
  title: string;
}

export default function GalleryImage({ img, title }: GalleryImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="aspect-[4/3] bg-sand-2/40 border-b border-sand-2 relative overflow-hidden group">
      {!hasError ? (
        <img
          src={`/images/${img}`}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-10"
          onError={() => setHasError(true)}
        />
      ) : null}
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-taupe/40 p-8 z-0">
        <ImageIcon size={48} className="text-copper/40" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-taupe/60 mt-3 flex items-center gap-1">
          <Camera size={12} />
          <span>{img}</span>
        </span>
        {/* Decorative border elements */}
        <div className="absolute top-4 start-4 w-4 h-4 border-t border-s border-copper/30" />
        <div className="absolute top-4 end-4 w-4 h-4 border-t border-e border-copper/30" />
        <div className="absolute bottom-4 start-4 w-4 h-4 border-b border-s border-copper/30" />
        <div className="absolute bottom-4 end-4 w-4 h-4 border-b border-e border-copper/30" />
      </div>
    </div>
  );
}
