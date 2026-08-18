import React, { useState } from 'react';
import { Eye, Sparkles } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/restaurantData';
import { GalleryPhoto } from '../types';
import { LightboxModal } from './LightboxModal';

export const GallerySection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Interior', 'Food', 'Ambiance', 'Drinks'];

  const filteredPhotos = GALLERY_PHOTOS.filter(
    (photo) => filterCategory === 'All' || photo.category === filterCategory
  );

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <span className="text-[#C9A45C] font-ui font-bold text-xs uppercase tracking-[0.3em] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              VISUAL GLIMPSE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1C] tracking-tight">
              Moments at M.V
            </h2>
            <p className="text-sm text-[#6B6B6B] max-w-lg font-sans">
              Explore our dining spaces, gourmet dishes, and joyful family gatherings in Sasaram.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-full font-ui text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-[#1C1C1C] text-white shadow-xs'
                    : 'bg-white text-[#6B6B6B] hover:text-[#1C1C1C] hover:bg-[#F1ECE3] border border-[#E8E4DC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group relative rounded-[28px] overflow-hidden bg-white border border-[#E8E4DC] hover:border-[#C9A45C] card-shadow hover:shadow-[0_16px_40px_-12px_rgba(201,164,92,0.15)] transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4" />

                {/* Hover overlay content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="flex justify-end">
                    <span className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#1C1C1C] shadow-xs">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-ui font-bold tracking-wider text-[#C9A45C] bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-xs">
                      {photo.category}
                    </span>
                    <h3 className="font-serif text-white text-base font-bold mt-2">
                      {photo.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border-t border-[#F1ECE3] flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#1C1C1C]">
                    {photo.title}
                  </h4>
                  <p className="text-[11px] text-[#6B6B6B] font-sans truncate max-w-[220px]">
                    {photo.caption}
                  </p>
                </div>
                <span className="text-[10px] font-ui text-[#C9A45C] font-bold uppercase tracking-wider">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        photo={activePhoto}
        photos={filteredPhotos}
        onClose={() => setActivePhoto(null)}
        onSelectPhoto={(p) => setActivePhoto(p)}
      />
    </section>
  );
};

