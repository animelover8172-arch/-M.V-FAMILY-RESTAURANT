import React from 'react';
import { Phone, MapPin, MessageSquare, Instagram, Facebook, Globe } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Menu Favorites', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Customer Reviews', href: '#reviews' },
    { name: 'Reserve Table', href: '#reservation' },
    { name: 'Visit & Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-white border-t border-[#E8E4DC] text-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1C1C1C] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C9A45C] inline-block shadow-xs"></span>
                {RESTAURANT_INFO.name}
              </span>
              <p className="text-xs font-serif italic text-[#C9A45C] tracking-wide mt-0.5">
                {RESTAURANT_INFO.hindiName}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#6B6B6B] font-sans max-w-sm leading-relaxed">
              Serving authentic multi-cuisine meals, live acoustic evenings, and warm hospitality for families and food lovers in Sasaram, Bihar.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/919939057069?text=${encodeURIComponent('Hello M.V Family Restaurant')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FAFAF7] border border-[#E8E4DC] flex items-center justify-center text-[#1C1C1C] hover:text-[#C9A45C] hover:border-[#C9A45C] transition-colors shadow-xs"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FAFAF7] border border-[#E8E4DC] flex items-center justify-center text-[#1C1C1C] hover:text-[#C9A45C] hover:border-[#C9A45C] transition-colors shadow-xs"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FAFAF7] border border-[#E8E4DC] flex items-center justify-center text-[#1C1C1C] hover:text-[#C9A45C] hover:border-[#C9A45C] transition-colors shadow-xs"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-ui text-xs font-bold uppercase tracking-widest text-[#1C1C1C]">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-xs font-sans text-[#6B6B6B]">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#C9A45C] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-ui text-xs font-bold uppercase tracking-widest text-[#1C1C1C]">
              Location & Contact
            </h3>
            <div className="space-y-2.5 text-xs text-[#6B6B6B]">
              <p className="flex items-start gap-2 font-sans">
                <MapPin className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C9A45C] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="font-serif font-bold text-[#1C1C1C] hover:text-[#C9A45C]"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </p>
              <p className="text-[11px] font-ui uppercase tracking-wider text-[#6B6B6B] pl-6">
                Open Daily: 10:00 AM – 11:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Developer Section */}
        <div className="mt-10 pt-6 border-t border-[#E8E4DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#6B6B6B]">
          <p>
            © {currentYear} {RESTAURANT_INFO.name}. All rights reserved.
          </p>

          {/* Explicit Developer Credit Required by Prompt */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-center sm:text-right">
            <span className="font-medium text-[#1C1C1C] flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-[#C9A45C]" />
              Designed & Developed by {RESTAURANT_INFO.developerCredit.name}
            </span>
            <a
              href={`https://wa.me/917654224826`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A45C] hover:underline font-medium"
            >
              WhatsApp: {RESTAURANT_INFO.developerCredit.whatsapp}
            </a>
            <a
              href={`tel:+918405918172`}
              className="text-[#1C1C1C] hover:text-[#C9A45C] font-medium"
            >
              Call: {RESTAURANT_INFO.developerCredit.call}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

