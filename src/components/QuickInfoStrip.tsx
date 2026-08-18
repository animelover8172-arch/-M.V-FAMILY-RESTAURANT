import React from 'react';
import { Star, Utensils, Bike, Music2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const QuickInfoStrip: React.FC = () => {
  const infoItems = [
    {
      icon: Star,
      primary: `${RESTAURANT_INFO.rating} ★ Rating`,
      secondary: `${RESTAURANT_INFO.reviewCount} Google Reviews`,
      badge: '4.6',
    },
    {
      icon: Utensils,
      primary: 'Dine-In',
      secondary: 'Family Friendly Comfort',
    },
    {
      icon: Bike,
      primary: 'Pickup & Delivery',
      secondary: 'Fast & Hygienic Packaging',
    },
    {
      icon: Music2,
      primary: 'Live Music',
      secondary: 'Selected Evenings',
    },
  ];

  return (
    <div id="quick-info-strip" className="relative z-10 -mt-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#F1ECE3]/60 rounded-[30px] border border-[#E8E4DC] px-6 sm:px-10 py-4 sm:py-5 shadow-xs">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x lg:divide-[#E8E4DC]">
          {infoItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-3.5 ${
                  idx !== 0 ? 'lg:pl-8' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#E8E4DC] shadow-xs">
                  <Icon className="w-4 h-4 text-[#C9A45C]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <p className="font-ui text-xs font-bold uppercase tracking-widest text-[#1C1C1C] truncate">
                    {item.primary}
                  </p>
                  <p className="text-[11px] text-[#6B6B6B] truncate font-sans">
                    {item.secondary}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

