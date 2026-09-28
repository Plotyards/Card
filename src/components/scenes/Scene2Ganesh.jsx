import React from 'react';
import { SacredGaneshaIllustration, MughalArchFrame, FloralToran, DiyaIllustration } from '../illustrations/TraditionalArtwork';

export default function Scene2Ganesh() {
  return (
    <div className="relative w-full h-full min-h-screen flex flex-col justify-between items-center bg-[#FDFBF7] text-stone-800 p-4 sm:p-6 overflow-hidden select-none">
      {/* Traditional Temple Stone Parchment Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Top Toran */}
      <div className="w-full relative z-20">
        <FloralToran className="w-full max-w-lg mx-auto" />
      </div>

      {/* Central Temple Shrine Frame */}
      <div className="relative z-10 w-full flex items-center justify-center my-auto py-2">
        <MughalArchFrame variant="gold" className="shadow-2xl">
          {/* Sacred Ganesha Motif */}
          <div className="my-2 transform hover:scale-105 transition-transform duration-500">
            <SacredGaneshaIllustration className="w-24 h-24 sm:w-28 sm:h-28" />
          </div>

          {/* Sanskrit Sloka */}
          <p className="font-hindi text-sm sm:text-base text-amber-900 font-semibold tracking-wider mt-1 mb-2">
            वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।<br />
            निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
          </p>

          <p className="font-serif italic text-xs sm:text-sm text-stone-600 tracking-wide my-1">
            "With the blessings of Lord Ganesha"
          </p>

          {/* Invitation Invitation Callout */}
          <div className="my-3 py-1">
            <p className="font-serif uppercase text-xs tracking-[0.25em] text-[#8B1E3F] font-semibold">
              We invite you to celebrate<br />the wedding of
            </p>
          </div>

          {/* Couple Names */}
          <div className="space-y-1 my-1">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3E0513] font-bold tracking-wide">
              Tanish Raj
            </h2>
            <div className="flex items-center justify-center gap-2">
              <span className="h-[1px] w-8 bg-amber-400" />
              <span className="font-script text-3xl sm:text-4xl text-[#B8860B] leading-none">&amp;</span>
              <span className="h-[1px] w-8 bg-amber-400" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3E0513] font-bold tracking-wide">
              Prachi Arya
            </h2>
          </div>

          <p className="font-serif text-xs text-stone-500 italic mt-3">
            Together with their families
          </p>
        </MughalArchFrame>
      </div>

      {/* Bottom Subtle Lamp Decor */}
      <div className="relative z-20 flex items-center justify-center gap-6 pb-2">
        <DiyaIllustration className="w-8 h-8" />
        <span className="text-xs font-serif tracking-widest text-amber-800 uppercase">
          Auspicious Beginning
        </span>
        <DiyaIllustration className="w-8 h-8 transform -scale-x-100" />
      </div>
    </div>
  );
}
