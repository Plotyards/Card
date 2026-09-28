import React from 'react';
import GaneshaIcon from './GaneshaIcon';
import { PaisleyDivider, CornerFlourish } from './MandalaMotif';

export default function InvitationMessage() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 relative bg-[#F7F2EA] overflow-hidden">
      <div className="max-w-3xl mx-auto">
        
        {/* Royal Parchment Card */}
        <div className="relative rounded-3xl bg-[#FFFDF9] border-2 border-wedding-gold/40 p-8 sm:p-12 md:p-14 text-center shadow-xl">
          <CornerFlourish position="tl" />
          <CornerFlourish position="tr" />
          <CornerFlourish position="bl" />
          <CornerFlourish position="br" />

          {/* Ganesha */}
          <div className="mb-4">
            <GaneshaIcon className="w-14 h-14 text-wedding-maroon mx-auto" showText={false} />
          </div>

          <h2 className="font-hindi text-3xl sm:text-4xl md:text-5xl font-bold text-wedding-maroon tracking-wider">
            शुभ विवाह
          </h2>

          <PaisleyDivider className="my-5 sm:my-6" />

          {/* Traditional Devanagari Invitation Verse */}
          <div className="font-hindi space-y-3 sm:space-y-4 text-stone-800 text-lg sm:text-2xl md:text-2xl font-medium leading-relaxed">
            <p className="tracking-wide">
              आप सादर आमंत्रित हैं
            </p>
            <p className="font-serif font-bold text-wedding-maroon-dark text-xl sm:text-3xl md:text-4xl tracking-normal py-1">
              Tanish Raj <span className="font-hindi font-normal text-wedding-gold-dark text-lg sm:text-2xl">एवं</span> Prachi Arya
            </p>
            <p className="tracking-wide">
              के शुभ विवाह समारोह में।
            </p>
            <div className="py-2">
              <span className="inline-block w-16 h-0.5 bg-wedding-gold/40" />
            </div>
            <p className="text-stone-700 italic text-base sm:text-xl font-normal leading-relaxed">
              अपनी गरिमामयी उपस्थिति से
              <br />
              इस मंगल अवसर की शोभा बढ़ाएं।
            </p>
          </div>

          <PaisleyDivider className="my-5 sm:my-6" />

          {/* English translation */}
          <p className="font-serif italic text-stone-600 text-xs sm:text-sm max-w-lg mx-auto">
            "We cordially invite you to grace the wedding celebration of Tanish Raj &amp; Prachi Arya with your warm blessings and esteemed presence."
          </p>

          <div className="mt-6 pt-4 border-t border-wedding-gold/20 flex flex-wrap items-center justify-center gap-6 text-xs font-serif uppercase tracking-widest text-wedding-maroon-dark font-semibold">
            <span>वर पक्ष • Groom's Family</span>
            <span className="text-wedding-gold">✦</span>
            <span>वधू पक्ष • Bride's Family</span>
          </div>

        </div>

      </div>
    </section>
  );
}
