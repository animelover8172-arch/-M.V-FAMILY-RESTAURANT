import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryPhoto } from '../types';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  photos: GalleryPhoto[];
  onClose: () => void;
  onSelectPhoto: (photo: GalleryPhoto) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  photos,
  onClose,
  onSelectPhoto,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!photo) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, photos]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    onSelectPhoto(photos[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onSelectPhoto(photos[prevIndex]);
  };

  return (
    <div
      id="lightbox-backdrop"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-white rounded-[28px] overflow-hidden card-shadow shadow-2xl flex flex-col border border-[#E8E4DC]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E4DC] bg-[#FAFAF7]">
          <div>
            <span className="text-[11px] font-ui font-bold tracking-widest text-[#C9A45C] uppercase">
              {photo.category} • {currentIndex + 1} of {photos.length}
            </span>
            <h3 className="font-serif text-lg font-bold text-[#1C1C1C]">
              {photo.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#1C1C1C] hover:text-[#C9A45C] rounded-full hover:bg-white transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Image Container */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-black/5 flex items-center justify-center overflow-hidden">
          <img
            src={photo.imageUrl}
            alt={photo.title}
            className="w-full h-full object-contain max-h-[70vh]"
          />

          {/* Nav buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#1C1C1C] shadow-lg hover:text-[#C9A45C] transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#1C1C1C] shadow-lg hover:text-[#C9A45C] transition-all cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Caption bar */}
        <div className="px-6 py-3.5 bg-white border-t border-[#E8E4DC] flex items-center justify-between text-xs text-[#6B6B6B]">
          <span className="font-sans">{photo.caption}</span>
          <span className="font-serif font-bold text-[#1C1C1C]">
            M.V Family Restaurant Sasaram
          </span>
        </div>
      </div>
    </div>
  );
};

