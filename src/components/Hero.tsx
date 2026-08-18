import React from 'react';
import { Star, Calendar, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import heroImage from '../assets/images/regenerated_image_1787077038885.png';

interface HeroProps {
  onReserveClick: () => void;
  onExploreMenuClick: () => void;
}


export const Hero: React.FC<HeroProps> = ({ onReserveClick, onExploreMenuClick }) => {
  return (
    <section id="hero" className="relative pt-24 sm:pt-28 pb-10 sm:pb-16 overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#F1ECE3] rounded-full opacity-60 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Hero Content & Main Card */}
          <div className="lg:col-span-7 bg-white rounded-[36px] sm:rounded-[40px] border border-[#E8E4DC] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden card-shadow">
            {/* Top Rating Pill on Card */}
            <div className="flex items-center justify-between gap-3 mb-6">
              <div className="inline-flex items-center gap-2">
                <span className="text-[#C9A45C] font-ui font-bold text-xs uppercase tracking-[0.3em]">
                  {RESTAURANT_INFO.name}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-[#F1ECE3] px-3.5 py-1.5 rounded-full border border-[#E8E4DC]/60">
                <span className="text-[#C9A45C] text-xs">★★★★★</span>
                <span className="font-ui text-xs font-bold text-[#1C1C1C]">{RESTAURANT_INFO.rating} / 5</span>
                <span className="text-[10px] text-[#6B6B6B] uppercase font-ui tracking-wider hidden sm:inline">
                  {RESTAURANT_INFO.reviewCount} Reviews
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4 my-auto py-2">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.08] text-[#1C1C1C] font-bold tracking-tight">
                Good Food.<br />
                <span className="italic font-normal text-[#C9A45C]">Warm Moments.</span>
              </h1>

              <p className="text-[#6B6B6B] text-base sm:text-lg leading-relaxed max-w-lg font-sans">
                A welcoming family restaurant in Sasaram serving delicious food, warm hospitality and memorable dining experiences.
              </p>
            </div>

            {/* Actions & Buttons */}
            <div className="pt-6 mt-4 border-t border-[#E8E4DC]/70 flex flex-wrap items-center gap-4">
              <button
                onClick={onReserveClick}
                id="hero-reserve-btn"
                className="bg-[#C9A45C] text-white px-7 py-3.5 rounded-full font-ui text-xs font-bold uppercase tracking-widest hover:bg-[#b89348] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>RESERVE TABLE</span>
              </button>

              <button
                onClick={onExploreMenuClick}
                id="hero-menu-btn"
                className="border border-[#1C1C1C] text-[#1C1C1C] px-7 py-3.5 rounded-full font-ui text-xs font-bold uppercase tracking-widest hover:bg-[#1C1C1C] hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#C9A45C]" />
                <span>EXPLORE MENU</span>
              </button>

              <span className="text-[11px] font-ui text-[#6B6B6B] tracking-wide ml-auto hidden sm:inline">
                NH-2 Grand Trunk Road, Sasaram
              </span>
            </div>

            {/* Subtle Abstract Decoration */}
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#F1ECE3] rounded-full opacity-40 blur-3xl pointer-events-none" />
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 bg-white rounded-[36px] sm:rounded-[40px] border border-[#E8E4DC] p-3.5 sm:p-4 card-shadow flex flex-col justify-between relative overflow-hidden">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px] rounded-[28px] sm:rounded-[32px] overflow-hidden group">
              <img
                src={heroImage}
                alt="M.V Family Restaurant Interior Ambiance"
                className="w-full h-full object-cover img-zoom"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent pointer-events-none" />

              {/* Floating Status Pill */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E8E4DC] shadow-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-ui font-semibold text-[#1C1C1C]">Open Today • 10 AM – 11 PM</span>
              </div>

              {/* Bottom Card Caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#E8E4DC]/80 shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-xs font-ui font-bold text-[#1C1C1C] uppercase tracking-wider">
                    Pure Hospitality & Fresh Flavours
                  </p>
                  <p className="text-[11px] text-[#6B6B6B] font-sans">
                    Multi-Cuisine • Live Music • Vegan Options
                  </p>
                </div>
                <div className="px-3 py-1 bg-[#F1ECE3] rounded-full text-[10px] font-ui font-bold uppercase tracking-wider text-[#C9A45C]">
                  Sasaram
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

