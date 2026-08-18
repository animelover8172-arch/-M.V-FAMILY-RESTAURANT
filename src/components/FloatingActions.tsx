import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello M.V Family Restaurant, I would like to make an inquiry / reservation.'
    );
    window.open(`https://wa.me/919939057069?text=${text}`, '_blank');
  };

  return (
    <div
      id="floating-actions-container"
      className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end space-y-3 pointer-events-none"
    >
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          id="back-to-top-btn"
          className="pointer-events-auto p-3 rounded-full bg-white text-[#1C1C1C] hover:text-[#C9A45C] border border-[#E8E4DC] card-shadow hover:shadow-lg transition-all duration-200 cursor-pointer animate-in fade-in zoom-in-75"
          aria-label="Scroll to top"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${RESTAURANT_INFO.phoneRaw}`}
        id="floating-call-btn"
        className="pointer-events-auto group flex items-center gap-2.5 px-4 py-3 bg-white text-[#1C1C1C] hover:text-[#C9A45C] border border-[#E8E4DC] rounded-full card-shadow hover:shadow-lg transition-all duration-200"
        title="Call 099390 57069"
      >
        <div className="w-7 h-7 rounded-full bg-[#F1ECE3] flex items-center justify-center text-[#C9A45C]">
          <Phone className="w-3.5 h-3.5" />
        </div>
        <span className="font-ui text-xs font-bold tracking-wider hidden sm:inline">
          {RESTAURANT_INFO.phone}
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        id="floating-whatsapp-btn"
        className="pointer-events-auto group flex items-center gap-2.5 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105 cursor-pointer"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-4 h-4 fill-white text-emerald-600" />
        <span className="font-ui text-xs font-bold tracking-wider uppercase">
          WhatsApp
        </span>
      </button>
    </div>
  );
};

