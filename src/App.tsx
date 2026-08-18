import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickInfoStrip } from './components/QuickInfoStrip';
import { AboutSection } from './components/AboutSection';
import { SignatureMenu } from './components/SignatureMenu';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { CustomerReviews } from './components/CustomerReviews';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const scrollToReservation = () => {
    const el = document.getElementById('reservation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#1C1C1C] antialiased">
      {/* Top Navigation */}
      <Navbar onReserveClick={scrollToReservation} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onReserveClick={scrollToReservation}
          onExploreMenuClick={scrollToMenu}
        />

        {/* Quick Info Strip */}
        <QuickInfoStrip />

        {/* About Section */}
        <AboutSection />

        {/* Signature Menu Section */}
        <SignatureMenu />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Experience Highlights */}
        <ExperienceSection />

        {/* Editorial Photo Gallery */}
        <GallerySection />

        {/* Customer Reviews & Google Rating */}
        <CustomerReviews />

        {/* Reservation Panel */}
        <ReservationSection />

        {/* Location, Hours & Map Section */}
        <ContactSection />

        {/* Final Call to Action */}
        <FinalCTA onReserveClick={scrollToReservation} />
      </main>

      {/* Footer & Credits */}
      <Footer />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />
    </div>
  );
}
