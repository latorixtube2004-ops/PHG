'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  images: string[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
  title?: string;
}

export function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
  title,
}: ImageLightboxProps) {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < images.length;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || currentIndex === null) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-2xl transition-all duration-300 p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Top Bar Controls */}
      <div
        className="absolute top-4 start-4 end-4 flex items-center justify-between z-50 pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="liquid-glass-pill-dark px-4 py-1.5 text-xs font-bold text-white shadow-lg border border-white/20 pointer-events-auto">
          {title ? `${title} • ` : ''}
          <span>{currentIndex + 1} / {images.length}</span>
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full liquid-glass-pill-dark flex items-center justify-center text-white hover:text-sky-400 hover:scale-110 active:scale-95 transition-all cursor-pointer pointer-events-auto border border-white/30 shadow-lg"
          aria-label="Close image lightbox"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute start-4 sm:start-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full liquid-glass-pill-dark flex items-center justify-center text-white hover:text-sky-400 hover:scale-110 active:scale-95 transition-all cursor-pointer z-50 border border-white/30 shadow-2xl"
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute end-4 sm:end-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full liquid-glass-pill-dark flex items-center justify-center text-white hover:text-sky-400 hover:scale-110 active:scale-95 transition-all cursor-pointer z-50 border border-white/30 shadow-2xl"
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Main Image Stage */}
      <div
        className="relative w-full max-w-5xl h-[75vh] max-h-[850px] rounded-3xl overflow-hidden shadow-2xl border border-white/30"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex]}
          alt={title || `Enlarged view ${currentIndex + 1}`}
          fill
          priority
          sizes="90vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}
