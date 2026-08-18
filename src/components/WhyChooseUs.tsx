import React from 'react';
import { Sparkles, Users, Music, Truck } from 'lucide-react';
import { WHY_CHOOSE_US_ITEMS } from '../data/restaurantData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#C9A45C]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#C9A45C]" />;
      case 'Music':
        return <Music className="w-5 h-5 text-[#C9A45C]" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-[#C9A45C]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C9A45C]" />;
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
          <span className="text-[#C9A45C] font-ui font-bold text-xs uppercase tracking-[0.3em]">
            DISTINCTION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1C] tracking-tight">
            Why Guests Choose M.V
          </h2>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[28px] p-6 sm:p-7 border border-[#E8E4DC] hover:border-[#C9A45C] card-shadow hover:shadow-[0_16px_40px_-12px_rgba(201,164,92,0.15)] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#F1ECE3] flex items-center justify-center border border-[#E8E4DC]/60">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1C1C1C]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6B6B] font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-[#F1ECE3] flex items-center justify-between">
                <span className="text-[10px] font-ui font-bold text-[#C9A45C] uppercase tracking-wider">
                  M.V Standard
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

