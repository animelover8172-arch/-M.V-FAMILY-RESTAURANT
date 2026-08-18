import React from 'react';
import { Calendar, Phone, Heart, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FinalCTAProps {
  onReserveClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onReserveClick }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#F1ECE3]/70 border-b border-[#E8E4DC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white border border-[#E8E4DC] rounded-full font-ui text-xs font-bold text-[#1C1C1C] uppercase tracking-[0.2em] shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
          <span>CELEBRATE & DINE</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-[#1C1C1C] max-w-3xl mx-auto leading-tight tracking-tight">
          Good Food Is Better Together.
        </h2>

        <p className="text-sm sm:text-base text-[#6B6B6B] font-sans max-w-xl mx-auto font-normal leading-relaxed">
          Bring your family, meet your friends and make your next meal memorable with authentic flavours and hospitable care at M.V Family Restaurant.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onReserveClick}
            id="final-reserve-btn"
            className="flex items-center gap-2.5 px-8 py-4 bg-[#1C1C1C] text-white hover:bg-[#C9A45C] hover:text-[#1C1C1C] font-ui text-xs font-bold uppercase tracking-widest rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve a Table</span>
          </button>

          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            id="final-call-btn"
            className="flex items-center gap-2.5 px-8 py-4 bg-white text-[#1C1C1C] hover:bg-[#FAFAF7] border border-[#E8E4DC] font-ui text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-200 shadow-xs"
          >
            <Phone className="w-4 h-4 text-[#C9A45C]" />
            <span>Call ({RESTAURANT_INFO.phone})</span>
          </a>
        </div>

        <div className="pt-4 flex items-center justify-center gap-2 text-xs font-sans text-[#6B6B6B]">
          <Heart className="w-3.5 h-3.5 text-[#C9A45C] fill-[#C9A45C]" />
          <span>Proudly Serving Sasaram & Highway Travelers on NH-2</span>
        </div>
      </div>
    </section>
  );
};

