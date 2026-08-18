import React from 'react';
import { Check, ShieldCheck, Heart, Coffee } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import aboutImage from '../assets/images/regenerated_image_1787077254901.png';

export const AboutSection: React.FC = () => {

  const highlights = [
    { title: 'Family Friendly', desc: 'Spacious seating curated for families & groups' },
    { title: 'Fresh & Delicious Food', desc: 'Prepared fresh to order using finest ingredients' },
    { title: 'Comfortable Ambience', desc: 'Air-conditioned dining with gentle acoustic melodies' },
    { title: 'Hygienic Kitchen', desc: 'Strict cleanliness and food safety standards' },
  ];

  return (
    <section id="about" className="py-14 sm:py-20 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Image with Luxury Prestige Frame */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-[36px] sm:rounded-[40px] overflow-hidden bg-white p-3 sm:p-4 border border-[#E8E4DC] card-shadow">
                <div className="relative aspect-[4/3] rounded-[28px] sm:rounded-[32px] overflow-hidden">
                  <img
                    src={aboutImage}
                    alt="M.V Family Restaurant Interior Sasaram"
                    className="w-full h-full object-cover img-zoom"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>

              {/* Decorative Experience Badge */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white p-4 sm:p-5 rounded-[24px] border border-[#E8E4DC] shadow-lg max-w-[240px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F1ECE3] flex items-center justify-center text-[#C9A45C] shrink-0 border border-[#E8E4DC]/60">
                    <Heart className="w-5 h-5 fill-[#C9A45C]" />
                  </div>
                  <div>
                    <p className="text-xs font-ui font-bold text-[#1C1C1C] uppercase tracking-wider">Warm Hospitality</p>
                    <p className="text-[11px] text-[#6B6B6B] font-sans">Welcoming every guest like family</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Highlights */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="text-[#C9A45C] font-ui font-bold text-xs uppercase tracking-[0.3em]">
                OUR STORY
              </span>
              <div className="w-8 h-[1px] bg-[#C9A45C]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1C] leading-[1.15] tracking-tight">
              A Place Made for Good Food & Great Company
            </h2>

            <p className="text-base text-[#6B6B6B] font-sans leading-relaxed">
              {RESTAURANT_INFO.name} brings together delicious food, comfortable surroundings and warm hospitality for families, friends and food lovers in Sasaram. Situated conveniently on NH-2 near the Toll Plaza in front of Bharat Petroleum, we are the favorite stop for travelers and locals alike.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#E8E4DC] shadow-xs hover:border-[#C9A45C]/50 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-[#F1ECE3] flex items-center justify-center shrink-0 mt-0.5 border border-[#E8E4DC]/60">
                    <Check className="w-3.5 h-3.5 text-[#C9A45C] stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-ui font-bold text-[#1C1C1C] uppercase tracking-wider">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#6B6B6B] leading-normal font-sans mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-5 text-xs font-ui text-[#6B6B6B]">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#C9A45C]" />
                100% Quality Ingredients
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Coffee className="w-4 h-4 text-[#C9A45C]" />
                Highway Rest & Dine
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

