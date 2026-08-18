import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { CUSTOMER_REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

export const CustomerReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-14 sm:py-20 bg-white border-y border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[#C9A45C] font-ui font-bold text-xs uppercase tracking-[0.3em]">
              GENUINE TESTIMONIALS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1C] tracking-tight mt-1">
              Loved by Our Guests
            </h2>
            <p className="text-sm text-[#6B6B6B] font-sans mt-1">
              Honest impressions from travelers and local families visiting Sasaram.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="flex items-center gap-4 bg-[#FAFAF7] p-4 sm:p-5 rounded-[24px] border border-[#E8E4DC] card-shadow">
            <div className="w-12 h-12 rounded-full bg-white flex flex-col items-center justify-center border border-[#E8E4DC] text-[#1C1C1C] shadow-xs">
              <span className="text-base font-serif font-bold leading-none">{RESTAURANT_INFO.rating}</span>
              <div className="flex text-[#C9A45C] text-[10px] mt-0.5">
                <Star className="w-2.5 h-2.5 fill-current" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#C9A45C]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs font-ui font-bold text-[#1C1C1C] uppercase tracking-wider mt-0.5">
                {RESTAURANT_INFO.reviewCount} Verified Google Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CUSTOMER_REVIEWS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-[#FAFAF7] rounded-[28px] p-6 sm:p-7 border border-[#E8E4DC] hover:border-[#C9A45C] card-shadow hover:shadow-[0_16px_40px_-12px_rgba(201,164,92,0.15)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Quote icon & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C9A45C]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E8E4DC]" />
                </div>

                {/* Review Content */}
                <p className="text-xs sm:text-sm text-[#1C1C1C]/90 font-sans leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 mt-5 border-t border-[#E8E4DC] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white border border-[#E8E4DC] flex items-center justify-center font-serif font-bold text-xs text-[#1C1C1C] shadow-xs">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="text-xs font-ui font-bold text-[#1C1C1C] uppercase tracking-wider flex items-center gap-1">
                      {item.name}
                      {item.isVerified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline" />
                      )}
                    </h4>
                    <span className="text-[10px] text-[#6B6B6B] font-sans">
                      {item.source} • {item.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Google Review Link / Notice */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#6B6B6B] font-sans">
            Have you dined with us recently? We would love to hear your feedback on Google Maps!
          </p>
        </div>
      </div>
    </section>
  );
};

