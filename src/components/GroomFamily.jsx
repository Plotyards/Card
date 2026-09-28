import React from 'react';
import { CornerFlourish, PaisleyDivider } from './MandalaMotif';
import { Home, MapPin, Users, Heart } from 'lucide-react';

export default function GroomFamily() {
  return (
    <div className="relative flex flex-col h-full rounded-2xl bg-[#FFFDF9] p-6 sm:p-8 md:p-10 royal-border-groom shadow-xl transition-transform hover:-translate-y-1 duration-300">
      
      {/* Corner Ornaments */}
      <CornerFlourish position="tl" />
      <CornerFlourish position="tr" />
      <CornerFlourish position="bl" />
      <CornerFlourish position="br" />

      {/* Top Royal Crest & Header for Groom */}
      <div className="text-center pt-2 pb-4">
        {/* Distinctive Groom's Insignia (Royal Turban / Pagdi Emblem) */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-wedding-maroon text-wedding-gold border-2 border-wedding-gold/60 shadow-md mb-3">
          <svg viewBox="0 0 40 40" className="w-8 h-8" fill="currentColor">
            {/* Traditional Groom Pagdi/Turban with Kalgi (Feather/Jewel) */}
            <path d="M20 7 C20 4 21 2 23 2 C23 4 22 6 21 7 Z" fill="#D4AF37" />
            <circle cx="21" cy="7" r="1.5" fill="#EF4444" />
            {/* Pagdi wraps */}
            <path d="M12 24 C10 20 12 14 18 10 C24 8 30 11 31 16 C32 20 28 24 22 25 Z" opacity="0.9" />
            <path d="M9 25 C11 20 16 16 23 15 C29 15 32 18 33 22 C33 26 27 28 20 28 C14 28 10 26 9 25 Z" />
            <path d="M8 26 C12 28 28 28 32 26 C33 28 31 31 20 31 C10 31 7 28 8 26 Z" opacity="0.8" />
          </svg>
        </div>

        {/* Clear Primary Heading: वर पक्ष */}
        <div className="inline-block px-4 py-1 rounded-full bg-wedding-maroon/10 border border-wedding-maroon/20 mb-1">
          <span className="font-hindi text-2xl sm:text-3xl font-extrabold text-wedding-maroon tracking-wider">
            वर पक्ष
          </span>
        </div>

        {/* Subtitle: GROOM'S FAMILY */}
        <h2 className="font-display text-sm sm:text-base font-bold tracking-[0.25em] text-wedding-gold-dark uppercase mt-1">
          From the Groom's Family
        </h2>
        <p className="text-[11px] uppercase tracking-widest text-stone-500 font-medium">
          GROOM'S SIDE
        </p>
      </div>

      <PaisleyDivider className="my-2" />

      {/* Groom's Avatar & Name Prominently Displayed */}
      <div className="flex flex-col items-center text-center py-4 px-3 bg-white/80 rounded-2xl border border-wedding-gold/40 shadow-sm my-3">
        <div className="relative mb-3 group">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-wedding-gold via-wedding-maroon to-wedding-gold shadow-lg ring-2 ring-wedding-gold/40 overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <img
              src="/avatars/groom-avatar.jpg"
              alt="Tanish Raj - Groom"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-wedding-maroon text-wedding-gold border border-wedding-gold/60 text-[10px] font-serif font-bold uppercase tracking-wider shadow whitespace-nowrap">
            वर • Groom
          </span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-wedding-maroon-dark tracking-wide">
          Tanish Raj
        </h3>
        <span className="font-hindi text-sm text-stone-600 block mt-0.5">
          (तनिष राज)
        </span>
        <p className="font-serif text-xs sm:text-sm font-semibold text-wedding-maroon mt-1">
          S/o Dr. Ramesh Kumar Lal
        </p>
      </div>

      {/* Groom's Lineage & Ancestral Family Details */}
      <div className="space-y-4 my-2 flex-grow text-stone-800">
        
        {/* Paternal Lineage */}
        <div className="p-4 rounded-xl bg-wedding-ivory/90 border border-wedding-gold/25 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-wedding-maroon/10 text-wedding-maroon mt-0.5">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-wedding-maroon block">
                Grandfather / Lineage
              </span>
              <p className="font-serif text-base sm:text-lg font-bold text-stone-900 mt-0.5">
                Grandson of Late Shri Surender Lal Das
              </p>
              <p className="font-hindi text-xs text-stone-600">
                स्व० सुरेन्द्र लाल दास जी के पौत्र
              </p>
            </div>
          </div>
        </div>

        {/* Ancestral / Native Place */}
        <div className="p-4 rounded-xl bg-wedding-ivory/90 border border-wedding-gold/25 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-wedding-maroon/10 text-wedding-maroon mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-wedding-maroon block">
                Native / Ancestral Origin
              </span>
              <p className="font-serif text-base sm:text-lg font-bold text-stone-900 mt-0.5">
                Kishanpatti, Darbhanga
              </p>
              <p className="font-hindi text-xs text-stone-600">
                किशनपट्टी, दरभंगा
              </p>
            </div>
          </div>
        </div>

        {/* Maternal Grandparents (Nana - Nani) */}
        <div className="p-4 rounded-xl bg-wedding-ivory/90 border border-wedding-gold/25 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-wedding-maroon/10 text-wedding-maroon mt-0.5">
              <Heart className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-wedding-maroon block">
                Maternal Grandparents (नाना - नानी)
              </span>
              <div className="font-serif text-sm sm:text-base font-semibold text-stone-900 mt-1 space-y-0.5">
                <p>Nana – <span className="font-bold">Shri Ramautar Lal</span></p>
                <p>Nani – <span className="font-bold">Smt. Vibha Devi</span></p>
              </div>
              <p className="font-hindi text-xs text-stone-600 mt-1">
                नाना – श्री रामावतार लाल | नानी – श्रीमती विभा देवी
              </p>
            </div>
          </div>
        </div>

        {/* Residence */}
        <div className="p-4 rounded-xl bg-wedding-ivory/90 border border-wedding-gold/25 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-wedding-maroon/10 text-wedding-maroon mt-0.5">
              <Home className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-wedding-maroon block">
                Current Residence
              </span>
              <p className="font-serif text-base sm:text-lg font-bold text-stone-900 mt-0.5">
                Residence – Samastipur
              </p>
              <p className="font-hindi text-xs text-stone-600">
                निवास – समस्तीपुर
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Distinctive Footer Pill */}
      <div className="mt-4 pt-3 text-center border-t border-wedding-gold/30">
        <span className="inline-block text-xs font-semibold text-wedding-maroon tracking-wider uppercase">
          ✦ वर पक्ष • Groom's Side ✦
        </span>
      </div>

    </div>
  );
}
