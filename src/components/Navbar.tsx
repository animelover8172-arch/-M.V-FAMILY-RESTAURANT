import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onReserveClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReserveClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md py-3 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border-b border-[#E8E4DC]'
          : 'bg-[#FAFAF7]/90 backdrop-blur-sm py-4 border-b border-[#E8E4DC]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            id="nav-brand-logo"
            className="flex flex-col group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C9A45C]/40 rounded-lg p-1 transition-transform"
          >
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#1C1C1C] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C9A45C] inline-block shadow-xs"></span>
              {RESTAURANT_INFO.name}
            </span>
            <span className="text-[10px] font-ui uppercase tracking-[0.2em] text-[#6B6B6B] pl-4 -mt-0.5">
              {RESTAURANT_INFO.hindiName} • Sasaram
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[12px] font-ui font-medium uppercase tracking-wider text-[#6B6B6B]" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase()}`}
                className="hover:text-[#C9A45C] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C9A45C] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              id="nav-call-btn"
              className="flex items-center gap-2 px-4 py-2 font-ui text-xs font-semibold uppercase tracking-wider text-[#1C1C1C] bg-[#F1ECE3] hover:bg-[#C9A45C] hover:text-white rounded-full border border-[#E8E4DC] transition-all duration-200"
              title="Call Restaurant"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>

            <button
              onClick={onReserveClick}
              id="nav-reserve-btn"
              className="flex items-center gap-2 bg-[#1C1C1C] text-white px-6 py-2.5 rounded-full font-ui text-xs font-semibold tracking-widest hover:bg-[#C9A45C] hover:text-[#1C1C1C] transition-all duration-300 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span>RESERVE TABLE</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={onReserveClick}
              id="mobile-quick-reserve-btn"
              className="px-3.5 py-1.5 font-ui text-[10px] font-bold text-white bg-[#1C1C1C] rounded-full tracking-widest uppercase"
            >
              Reserve
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 text-[#1C1C1C] hover:text-[#C9A45C] focus:outline-none focus:ring-2 focus:ring-[#C9A45C]/40 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="sm:hidden bg-[#FFFFFF] border-b border-[#E8E4DC] px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-ui text-xs font-semibold uppercase tracking-wider text-[#1C1C1C] hover:text-[#C9A45C] py-2 border-b border-[#F1ECE3]"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 flex flex-col space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReserveClick();
                }}
                className="w-full py-3 bg-[#1C1C1C] text-white rounded-full text-center font-ui text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#C9A45C]"
              >
                <Calendar className="w-4 h-4 text-[#C9A45C]" />
                <span>RESERVE TABLE</span>
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full py-2.5 bg-[#F1ECE3] text-[#1C1C1C] rounded-full text-center font-ui text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C9A45C]" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>

              <p className="text-[11px] text-[#6B6B6B] flex items-center justify-center gap-1.5 pt-2 text-center">
                <MapPin className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
                <span>Sasaram, NH-2, near Toll Plaza</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

