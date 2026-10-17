import React from 'react';
import { MughalArchFrame, FloralToran, DiyaIllustration, SacredKalashIllustration } from '../illustrations/TraditionalArtwork';
import { Share2, CalendarPlus } from 'lucide-react';

export default function Scene15FinalInvite() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Tanish Raj & Prachi Arya — Wedding Invitation',
        text: '॥ शुभ विवाह ॥ You are cordially invited to celebrate the wedding of Tanish Raj & Prachi Arya on 04 December 2026 at Krishna Banquet Hall, Danapur Patna.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert('Invitation link copied to clipboard! Share it with family & friends.');
    }
  };

  const handleCalendar = () => {
    // Generate Google Calendar Link for 04 Dec 2026
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Wedding: Tanish Raj & Prachi Arya')}&dates=20261204T100000Z/20261204T180000Z&details=${encodeURIComponent('Sacred Wedding of Tanish Raj and Prachi Arya. Venue: Krishna Banquet Hall, Near Chitragupta Mandir, Mithila Colony - Danapur, Patna - 18.')}&location=${encodeURIComponent('Krishna Banquet Hall, Danapur, Patna - 18')}`;
    window.open(gCalUrl, '_blank');
  };

  return (
    <div className="relative w-full h-full min-h-screen flex flex-col justify-between items-center bg-[#FAF5E6] text-stone-800 p-4 sm:p-6 overflow-hidden select-none">
      {/* Traditional Parchment & Royal Gold Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#D4AF37_1.2px,transparent_1.2px)] [background-size:22px_22px]" />
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-rose-400/20 blur-3xl pointer-events-none" />

      {/* Top Toran */}
      <div className="w-full relative z-20">
        <FloralToran className="w-full max-w-lg mx-auto" />
      </div>

      {/* Final Invitation Card Frame */}
      <div className="relative z-10 w-full flex items-center justify-center my-auto py-1">
        <MughalArchFrame variant="gold" className="shadow-2xl">
          <div className="my-0.5">
            <SacredKalashIllustration className="w-12 h-12 sm:w-14 sm:h-14 drop-shadow" />
          </div>

          {/* Hindi Warm Welcome */}
          <div className="my-1.5 space-y-0.5">
            <h2 className="font-hindi text-xl sm:text-2xl font-extrabold text-[#7A1326] tracking-wide">
              आप सादर आमंत्रित हैं
            </h2>
            <p className="font-hindi text-xs sm:text-sm text-stone-700 leading-relaxed font-semibold">
              अपनी गरिमामयी उपस्थिति से<br />
              इस मंगल अवसर की शोभा बढ़ाएं।
            </p>
          </div>

          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent my-1.5" />

          {/* Couple Names */}
          <div className="space-y-0.5 my-1.5">
            <h3 className="font-serif text-xl sm:text-2xl text-[#3E0513] font-bold tracking-wide">
              Tanish Raj
            </h3>
            <div className="flex items-center justify-center gap-2">
              <span className="h-[1px] w-5 bg-amber-400" />
              <span className="font-script text-xl text-amber-700 leading-none">&amp;</span>
              <span className="h-[1px] w-5 bg-amber-400" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#3E0513] font-bold tracking-wide">
              Prachi Arya
            </h3>
          </div>

          {/* RSVP / Cordially Invited By Nana & Nani */}
          <div className="my-2.5 p-2.5 sm:p-3 rounded-2xl bg-gradient-to-b from-amber-50 to-amber-100/90 border-2 border-amber-400 shadow-md w-full max-w-[310px] text-center">
            <p className="font-serif text-[11px] uppercase tracking-[0.25em] text-[#7A1326] font-extrabold">
              ✦ RSVP • निमंत्रक ✦
            </p>
            <p className="font-serif font-black text-sm sm:text-base text-[#3E0513] mt-1 tracking-wide">
              Shri Ramautar Lal &amp; Smt. Vibha Devi
            </p>
            <p className="font-hindi text-xs sm:text-sm text-amber-950 font-extrabold mt-0.5">
              (पूज्य नाना जी एवं नानी जी)
            </p>
          </div>

          {/* Interactive Actions for Guests */}
          <div className="flex items-center justify-center gap-2.5 mt-2 w-full px-2">
            <button
              onClick={handleShare}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-amber-100 hover:bg-amber-200 border border-amber-300 text-amber-900 font-serif text-[11px] font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <Share2 className="w-3.5 h-3.5 text-amber-700" />
              <span>Share Card</span>
            </button>
            <button
              onClick={handleCalendar}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-gradient-to-r from-[#600C1F] to-[#3E0513] hover:from-[#7A1326] hover:to-[#600C1F] text-amber-100 font-serif text-[11px] font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <CalendarPlus className="w-3.5 h-3.5 text-amber-300" />
              <span>Add to Cal</span>
            </button>
          </div>
        </MughalArchFrame>
      </div>

      {/* Bottom Lamps */}
      <div className="relative z-20 flex items-center justify-around w-full max-w-sm pb-2">
        <DiyaIllustration className="w-8 h-8 drop-shadow" />
        <span className="font-hindi text-xs font-semibold text-amber-900">
          ॥ ॐ श्री गणेशाय नमः ॥
        </span>
        <DiyaIllustration className="w-8 h-8 transform -scale-x-100 drop-shadow" />
      </div>
    </div>
  );
}
