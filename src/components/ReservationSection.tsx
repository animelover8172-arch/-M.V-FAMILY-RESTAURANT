import React, { useState } from 'react';
import { Calendar as CalendarIcon, Users, Phone, Clock, MessageSquare, CheckCircle, Sparkles, Send } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationData } from '../types';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    guests: '2 Guests',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    specialRequest: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const guestOptions = [
    '1 Person',
    '2 Guests',
    '3-4 Guests',
    '5-6 Family Group',
    '7-10 Party Table',
    '10+ Banquet/Hall',
  ];

  const timeOptions = [
    '11:30 AM', '12:30 PM', '01:30 PM', '02:30 PM',
    '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM',
    '09:00 PM', '09:30 PM', '10:00 PM'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and contact phone number.');
      return;
    }

    const ref = `MV-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `*M.V Family Restaurant - Table Reservation Request*\n\n` +
      `👤 *Name:* ${formData.name || 'Guest'}\n` +
      `📞 *Phone:* ${formData.phone || 'Not provided'}\n` +
      `👥 *Guests:* ${formData.guests}\n` +
      `📅 *Date:* ${formData.date}\n` +
      `⏰ *Time:* ${formData.time}\n` +
      (formData.specialRequest ? `📝 *Special Request:* ${formData.specialRequest}\n` : '') +
      `\nPlease confirm table availability.`
    );
    window.open(`https://wa.me/919939057069?text=${text}`, '_blank');
  };

  return (
    <section id="reservation" className="py-14 sm:py-20 bg-[#FAFAF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[36px] sm:rounded-[40px] border border-[#E8E4DC] card-shadow overflow-hidden">
          {/* Header Banner */}
          <div className="px-6 py-8 sm:p-10 border-b border-[#E8E4DC] bg-gradient-to-b from-[#FAFAF7] to-white text-center space-y-2">
            <span className="text-[#C9A45C] font-ui font-bold text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              TABLE BOOKING
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1C] tracking-tight">
              Reserve Your Table
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6B6B] font-sans max-w-md mx-auto">
              Plan your family lunch, dinner celebration, or highway stopover with guaranteed comfortable seating.
            </p>
          </div>

          <div className="p-6 sm:p-10">
            {isSubmitted ? (
              <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-[#F1ECE3] rounded-full flex items-center justify-center mx-auto text-[#C9A45C]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1C1C]">
                  Reservation Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6B6B] font-sans max-w-md mx-auto">
                  Thank you, <strong className="text-[#1C1C1C]">{formData.name}</strong>. Your reservation reference is{' '}
                  <span className="font-mono font-bold text-[#C9A45C]">{bookingRef}</span>. Our team at M.V Family Restaurant will confirm your table shortly.
                </p>

                <div className="bg-[#FAFAF7] p-5 rounded-[24px] border border-[#E8E4DC] max-w-sm mx-auto text-left text-xs font-sans space-y-1.5">
                  <p><strong>Guests:</strong> {formData.guests}</p>
                  <p><strong>Date & Time:</strong> {formData.date} at {formData.time}</p>
                  <p><strong>Contact:</strong> {formData.phone}</p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 pt-4">
                  <button
                    onClick={handleWhatsAppBooking}
                    className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-ui text-xs font-bold uppercase tracking-wider cursor-pointer shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send on WhatsApp as Backup</span>
                  </button>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-white border border-[#E8E4DC] hover:bg-[#F1ECE3] text-[#1C1C1C] rounded-full font-ui text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Book Another Table
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block font-ui text-xs font-bold text-[#1C1C1C] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 font-sans text-sm bg-[#FAFAF7] border border-[#E8E4DC] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A45C]/50 text-[#1C1C1C]"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block font-ui text-xs font-bold text-[#1C1C1C] uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#6B6B6B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 099390 57069"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 font-sans text-sm bg-[#FAFAF7] border border-[#E8E4DC] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A45C]/50 text-[#1C1C1C]"
                      />
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block font-ui text-xs font-bold text-[#1C1C1C] uppercase tracking-wider mb-2">
                      Number of Guests
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-[#6B6B6B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 font-sans text-sm bg-[#FAFAF7] border border-[#E8E4DC] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A45C]/50 text-[#1C1C1C] appearance-none cursor-pointer"
                      >
                        {guestOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block font-ui text-xs font-bold text-[#1C1C1C] uppercase tracking-wider mb-2">
                      Reservation Date
                    </label>
                    <div className="relative">
                      <CalendarIcon className="w-4 h-4 text-[#6B6B6B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 font-sans text-sm bg-[#FAFAF7] border border-[#E8E4DC] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A45C]/50 text-[#1C1C1C] cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block font-ui text-xs font-bold text-[#1C1C1C] uppercase tracking-wider mb-2">
                      Preferred Time
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-[#6B6B6B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 font-sans text-sm bg-[#FAFAF7] border border-[#E8E4DC] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A45C]/50 text-[#1C1C1C] appearance-none cursor-pointer"
                      >
                        {timeOptions.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block font-ui text-xs font-bold text-[#1C1C1C] uppercase tracking-wider mb-2">
                      Special Request (Optional)
                    </label>
                    <input
                      type="text"
                      name="specialRequest"
                      placeholder="e.g. Baby chair, Window side, Birthday cake"
                      value={formData.specialRequest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 font-sans text-sm bg-[#FAFAF7] border border-[#E8E4DC] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A45C]/50 text-[#1C1C1C]"
                    />
                  </div>
                </div>

                {/* Submit buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    id="reservation-submit-btn"
                    className="w-full sm:flex-1 py-4 bg-[#1C1C1C] hover:bg-[#C9A45C] hover:text-[#1C1C1C] text-white font-ui text-xs uppercase font-bold tracking-widest rounded-full transition-all duration-300 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>RESERVE TABLE</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    id="reservation-whatsapp-btn"
                    className="w-full sm:flex-1 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-ui text-xs uppercase font-bold tracking-widest rounded-full transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WHATSAPP RESERVATION</span>
                  </button>
                </div>

                <p className="text-[11px] font-sans text-center text-[#6B6B6B] pt-2">
                  For quick reservations or urgent highway queries, contact us directly on WhatsApp ({RESTAURANT_INFO.whatsapp}) or phone ({RESTAURANT_INFO.phone}).
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

