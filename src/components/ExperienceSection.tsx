import React from 'react';
import { EXPERIENCE_ITEMS } from '../data/restaurantData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-14 sm:py-20 bg-white border-y border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <span className="text-[#C9A45C] font-ui font-bold text-xs uppercase tracking-[0.3em]">
            HOSPITALITY & AMBIANCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1C] tracking-tight">
            The M.V Experience
          </h2>
          <p className="text-sm text-[#6B6B6B] font-sans">
            Thoughtfully crafted moments for every occasion on the Grand Trunk Road.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {EXPERIENCE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group bg-[#FAFAF7] rounded-[28px] overflow-hidden border border-[#E8E4DC] hover:border-[#C9A45C] transition-all duration-300 card-shadow hover:shadow-[0_16px_40px_-12px_rgba(201,164,92,0.15)] flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-xs text-[10px] font-ui font-bold text-[#1C1C1C] rounded-full uppercase tracking-wider shadow-xs">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1C1C1C]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] font-sans mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8E4DC]/60 flex items-center gap-1.5 text-[10px] font-ui font-bold uppercase tracking-wider text-[#C9A45C]">
                  <span>Available Daily at M.V</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

