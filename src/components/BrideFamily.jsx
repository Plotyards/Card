import React from 'react';
import { CornerFlourish, PaisleyDivider } from './MandalaMotif';
import { Home, MapPin, Users, Heart } from 'lucide-react';

export default function BrideFamily() {
  return (
    <div className="relative flex flex-col h-full rounded-2xl bg-[#FFFDF9] p-6 sm:p-8 md:p-10 royal-border-bride shadow-xl transition-transform hover:-translate-y-1 duration-300">
      
      {/* Corner Ornaments */}
      <CornerFlourish position="tl" />
      <CornerFlourish position="tr" />
      <CornerFlourish position="bl" />
      <CornerFlourish position="br" />

      {/* Top Royal Crest & Header for Bride */}
      <div className="text-center pt-2 pb-4">
        {/* Distinctive Bride's Insignia (Sacred Kalash with Coconut & Mango leaves) */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-wedding-burgundy text-wedding-gold border-2 border-wedding-gold/60 shadow-md mb-3">
          <svg viewBox="0 0 40 40" className="w-8 h-8" fill="currentColor">
            {/* Coconut on top */}
            <circle cx="20" cy="11" r="5" fill="#B8860B" />
            {/* Mango Leaves */}
            <path d="M14 13 C12 8 16 6 19 11 Z" fill="#2D6A4F" />
            <path d="M26 13 C28 8 24 6 21 11 Z" fill="#2D6A4F" />
            {/* Kalash Pot */}
            <path d="M15 17 L25 17 L28 24 C29 29 25 32 20 32 C15 32 11 29 12 24 Z" opacity="0.95" />
            <circle cx="20" cy="24" r="2.5" fill="#EF4444" />
            {/* Base */}
            <path d="M16 32 L24 32 L23 35 L17 35 Z" fill="#D4AF37" />
          </svg>
        </div>

        {/* Clear Primary Heading: वधू पक्ष */}
        <div className="inline-block px-4 py-1 rounded-full bg-rose-900/10 border border-rose-900/20 mb-1">
          <span className="font-hindi text-2xl sm:text-3xl font-extrabold text-rose-900 tracking-wider">
            वधू पक्ष
          </span>
        </div>

        {/* Subtitle: BRIDE'S FAMILY */}
        <h2 className="font-display text-sm sm:text-base font-bold tracking-[0.25em] text-wedding-gold-dark uppercase mt-1">
          From the Bride's Family
        </h2>
        <p className="text-[11px] uppercase tracking-widest text-stone-500 font-medium">
          BRIDE'S SIDE
        </p>
      </div>

      <PaisleyDivider className="my-2" />

      {/* Bride's Avatar & Name Prominently Displayed */}
      <div className="flex flex-col items-center text-center py-4 px-3 bg-white/80 rounded-2xl border border-rose-300/50 shadow-sm my-3">
        <div className="relative mb-3 group">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-wedding-gold via-rose-900 to-wedding-gold shadow-lg ring-2 ring-rose-300/50 overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <img
              src="/avatars/bride-avatar.jpg"
              alt="Prachi Arya - Bride"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-rose-900 text-wedding-gold border border-wedding-gold/60 text-[10px] font-serif font-bold uppercase tracking-wider shadow whitespace-nowrap">
            वधू • Bride
          </span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-rose-950 tracking-wide">
          Prachi Arya
        </h3>
        <span className="font-hindi text-sm text-stone-600 block mt-0.5">
          (प्राची आर्य)
        </span>
      </div>

      {/* Bride's Family & Parents Details */}
      <div className="space-y-4 my-2 flex-grow text-stone-800">
        
        {/* Bride's Parents */}
        <div className="p-4 rounded-xl bg-wedding-ivory/95 border border-rose-200/60 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-rose-900/10 text-rose-900 mt-0.5">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-rose-900 block">
                Bride's Parents (माता एवं पिता)
              </span>
              <p className="font-serif text-base sm:text-lg font-bold text-stone-900 mt-0.5 leading-snug">
                D/o Shri Kamlesh Lal Arya
                <br />
                &amp; Smt. Mamta Arya
              </p>
              <p className="font-hindi text-xs text-stone-600 mt-1">
                सुपुत्री श्री कमलेश लाल आर्य एवं श्रीमती ममता आर्य
              </p>
            </div>
          </div>
        </div>

        {/* Bride's Residence / City */}
        <div className="p-4 rounded-xl bg-wedding-ivory/95 border border-rose-200/60 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-rose-900/10 text-rose-900 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-rose-900 block">
                Residence / Native Town
              </span>
              <p className="font-serif text-base sm:text-lg font-bold text-stone-900 mt-0.5">
                Danapur – Patna
              </p>
              <p className="font-hindi text-xs text-stone-600">
                दानापुर – पटना, बिहार
              </p>
            </div>
          </div>
        </div>

        {/* Blessings & Welcome note */}
        <div className="p-4 rounded-xl bg-wedding-ivory/95 border border-rose-200/60 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-rose-900/10 text-rose-900 mt-0.5">
              <Heart className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-rose-900 block">
                Blessings &amp; Cordial Invitation
              </span>
              <p className="font-serif text-sm font-semibold text-stone-800 mt-0.5">
                Inviting you with immense happiness to bless our daughter on her auspicious wedding.
              </p>
              <p className="font-hindi text-xs text-stone-600 mt-1">
                हमारी लाडली बिटिया के पावन परिणयोत्सव में आपका हार्दिक स्वागत है।
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Distinctive Footer Pill */}
      <div className="mt-4 pt-3 text-center border-t border-rose-300/40">
        <span className="inline-block text-xs font-semibold text-rose-900 tracking-wider uppercase">
          ✦ वधू पक्ष • Bride's Side ✦
        </span>
      </div>

    </div>
  );
}
