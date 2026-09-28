import React from 'react';
import GaneshaIcon from './GaneshaIcon';
import { MandalaCircle, PaisleyDivider, CornerFlourish } from './MandalaMotif';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden bg-[#FDFBF7]"
    >
      {/* Background Mandala Watermarks */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-25">
        <MandalaCircle className="w-[500px] h-[500px] sm:w-[750px] sm:h-[750px] text-wedding-gold animate-spin-very-slow" />
      </div>

      {/* Decorative Traditional Indian Arch/Frame */}
      <div className="relative w-full max-w-4xl mx-auto rounded-3xl p-6 sm:p-12 md:p-16 text-center royal-border bg-white/60 backdrop-blur-sm shadow-xl">
        
        {/* Corner Motifs */}
        <CornerFlourish position="tl" />
        <CornerFlourish position="tr" />
        <CornerFlourish position="bl" />
        <CornerFlourish position="br" />

        {/* Sacred Invocation */}
        <div className="mb-4 sm:mb-6 animate-pulse-glow">
          <GaneshaIcon className="w-16 h-16 sm:w-20 sm:h-20 text-wedding-maroon mx-auto" showText={true} />
        </div>

        {/* Shubh Vivah Calligraphy */}
        <div className="inline-block py-1 px-6 rounded-full bg-wedding-maroon/5 border border-wedding-gold/40 mb-3 sm:mb-4">
          <span className="font-hindi text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-wedding-maroon">
            शुभ विवाह
          </span>
        </div>

        <p className="font-serif italic text-stone-600 text-sm sm:text-base max-w-md mx-auto mb-2">
          With the blessings of our ancestors and elders, we invite you to celebrate the holy union of
        </p>

        {/* Royal Couple Avatar Illustration */}
        <div className="my-5 flex justify-center items-center">
          <div className="relative group">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1.5 bg-gradient-to-tr from-wedding-gold via-wedding-maroon to-wedding-gold shadow-xl ring-4 ring-wedding-gold/30 overflow-hidden transition-transform duration-500 group-hover:scale-105">
              <img
                src="/avatars/couple-avatar.jpg"
                alt="Tanish Raj & Prachi Arya"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Sacred Tag */}
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-wedding-maroon text-wedding-gold border border-wedding-gold text-[10px] sm:text-xs font-serif font-bold uppercase tracking-wider shadow-md whitespace-nowrap">
              ✦ Tanish &amp; Prachi ✦
            </div>
          </div>
        </div>

        <PaisleyDivider className="my-3 sm:my-5" />

        {/* Grand Couple Names Section */}
        <div className="my-4 sm:my-6 space-y-2">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-wide text-wedding-maroon-dark drop-shadow-sm">
            Tanish Raj
          </h1>

          <div className="flex items-center justify-center gap-3 py-1">
            <span className="h-[1.5px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-wedding-gold" />
            <span className="font-script text-3xl sm:text-5xl text-wedding-gold font-normal px-2 select-none">
              &amp;
            </span>
            <span className="h-[1.5px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-wedding-gold" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-wide text-wedding-maroon-dark drop-shadow-sm">
            Prachi Arya
          </h1>
        </div>

        <PaisleyDivider className="my-3 sm:my-5" />

        {/* Wedding Date & Venue Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-stone-700">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-wedding-cream/80 border border-wedding-gold/30 shadow-sm">
            <Calendar className="w-4 h-4 text-wedding-maroon" />
            <span className="font-serif font-semibold text-xs sm:text-sm tracking-wider uppercase text-wedding-maroon-dark">
              04 December 2026
            </span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-wedding-cream/80 border border-wedding-gold/30 shadow-sm">
            <MapPin className="w-4 h-4 text-wedding-maroon" />
            <span className="font-serif font-semibold text-xs sm:text-sm tracking-wider text-wedding-maroon-dark">
              Danapur, Patna
            </span>
          </div>
        </div>

        {/* Subtext */}
        <p className="mt-8 text-xs sm:text-sm font-hindi text-wedding-maroon/90 font-medium tracking-wide">
          ॥ मंगलम् भगवान विष्णुः मंगलम् गरुड़ध्वजः । मंगलम् पुण्डरीकाक्षो मङ्गलाय तनो हरिः ॥
        </p>

      </div>

      {/* Down Scroll Prompt */}
      <a
        href="#families"
        aria-label="Scroll to family details"
        className="mt-8 sm:mt-10 flex flex-col items-center gap-1 text-wedding-maroon/70 hover:text-wedding-maroon transition-colors cursor-pointer group"
      >
        <span className="text-[11px] uppercase tracking-widest font-semibold font-serif">
          Explore Invitation
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce text-wedding-gold group-hover:scale-110 transition-transform" />
      </a>
    </section>
  );
}
