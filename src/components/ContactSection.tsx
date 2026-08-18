import React from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'M.V Family Restaurant Bharat Petroleum NH-2 Sasaram Bihar 821113'
  )}`;

  return (
    <section id="contact" className="py-14 sm:py-20 bg-white border-b border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <span className="text-[#C9A45C] font-ui font-bold text-xs uppercase tracking-[0.3em]">
            FIND US
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1C] tracking-tight">
            Visit M.V Restaurant
          </h2>
          <p className="text-sm text-[#6B6B6B] font-sans">
            Conveniently situated on NH-2 Sasaram with ample parking and easy access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Details & Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#FAFAF7] rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 border border-[#E8E4DC] card-shadow">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-[#E8E4DC] flex items-center justify-center shrink-0 text-[#C9A45C] shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-ui text-xs font-bold uppercase tracking-wider text-[#6B6B6B]">
                    Address & Landmark
                  </h3>
                  <p className="text-sm font-semibold text-[#1C1C1C] font-sans mt-1 leading-snug">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="text-xs text-[#C9A45C] font-ui font-semibold mt-0.5">
                    Near Toll Plaza • NH-2 Grand Trunk Road
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-[#E8E4DC] flex items-center justify-center shrink-0 text-[#C9A45C] shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-ui text-xs font-bold uppercase tracking-wider text-[#6B6B6B]">
                    Direct Contact
                  </h3>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="text-base font-serif font-bold text-[#1C1C1C] hover:text-[#C9A45C] transition-colors mt-1 block"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <p className="text-xs text-[#6B6B6B] font-sans">
                    Available for reservations & food inquiries
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-[#E8E4DC] flex items-center justify-center shrink-0 text-[#C9A45C] shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h3 className="font-ui text-xs font-bold uppercase tracking-wider text-[#6B6B6B]">
                    Opening Hours
                  </h3>
                  <div className="mt-1 space-y-1 text-xs">
                    {RESTAURANT_INFO.hours.map((h, i) => (
                      <div key={i} className="flex justify-between text-[#1C1C1C]">
                        <span className="font-medium font-sans">{h.days}</span>
                        <span className="font-bold font-ui text-[#C9A45C]">{h.timing}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="pt-2 border-t border-[#E8E4DC]">
                <h3 className="font-ui text-xs font-bold uppercase tracking-wider text-[#6B6B6B] mb-2.5">
                  Available Services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {RESTAURANT_INFO.services.map((svc, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#E8E4DC] rounded-full text-xs font-medium text-[#1C1C1C] shadow-xs"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#C9A45C]" />
                      {svc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Direction Button */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#1C1C1C] hover:bg-[#C9A45C] hover:text-[#1C1C1C] text-white font-ui text-xs uppercase font-bold tracking-widest rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Right Column: Google Maps Area */}
          <div className="lg:col-span-7 rounded-[32px] sm:rounded-[36px] overflow-hidden border border-[#E8E4DC] bg-white card-shadow flex flex-col">
            <div className="p-4 bg-[#FAFAF7] border-b border-[#E8E4DC] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="font-ui text-xs font-bold uppercase tracking-wider text-[#1C1C1C]">
                  Sasaram Highway Location
                </span>
              </div>
              <span className="text-[11px] font-sans text-[#6B6B6B]">
                NH-2 Auwan Toll Plaza
              </span>
            </div>

            {/* Map Frame */}
            <div className="relative flex-1 min-h-[350px] w-full bg-[#F1ECE3]">
              <iframe
                title="M.V Family Restaurant Sasaram Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115456.24177247788!2d83.94503714954443!3d24.953282218898144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398db12bb6730001%3A0x2869068097b6a4a7!2sSasaram%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Floating Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-[20px] border border-[#E8E4DC] shadow-lg">
                <p className="font-serif text-sm font-bold text-[#1C1C1C]">
                  M.V FAMILY RESTAURANT
                </p>
                <p className="text-[11px] text-[#6B6B6B] font-sans mt-0.5">
                  Opposite Bharat Petroleum Petrol Pump, NH-2 Toll Plaza, Sasaram
                </p>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-wider text-[#C9A45C] hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Start Navigation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

