import React from 'react';
import { MughalArchFrame, WeddingMandapIllustration, FloralToran, DiyaIllustration } from '../illustrations/TraditionalArtwork';

export default function Scene11ShaadiPheras() {
  return (
    <div className="relative w-full h-full min-h-screen flex flex-col justify-between items-center bg-[#2B050E] text-amber-50 p-4 sm:p-6 overflow-hidden select-none">
      {/* Deep Sindoor & Gold Starlight Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-amber-600/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />

      {/* Top Toran */}
      <div className="w-full relative z-20">
        <FloralToran className="w-full max-w-lg mx-auto" />
      </div>

      {/* Mandap & Pheras Arch Frame */}
      <div className="relative z-10 w-full flex items-center justify-center my-auto py-1">
        <MughalArchFrame variant="red" className="shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
          {/* Shubh Vivah Sanskrit Banner */}
          <div className="mt-1 mb-1">
            <span className="font-hindi text-2xl sm:text-3xl text-amber-300 font-extrabold tracking-wider drop-shadow">
              शुभ विवाह
            </span>
          </div>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent my-1" />

          {/* Mandap Illustration with Sacred Fire */}
          <div className="my-1 transform scale-95 sm:scale-100">
            <WeddingMandapIllustration className="w-44 h-32 sm:w-48 sm:h-36 drop-shadow-xl" />
          </div>

          {/* Couple Names */}
          <div className="space-y-0.5 my-1">
            <h2 className="font-serif text-2xl sm:text-3xl text-amber-100 font-bold tracking-wide">
              Tanish Raj
            </h2>
            <div className="flex items-center justify-center gap-2">
              <span className="h-[1px] w-6 bg-amber-400" />
              <span className="font-script text-2xl text-amber-300 leading-none">&amp;</span>
              <span className="h-[1px] w-6 bg-amber-400" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-amber-100 font-bold tracking-wide">
              Prachi Arya
            </h2>
          </div>

          {/* Date & Departure Highlight Badges */}
          <div className="mt-3 space-y-2 w-full px-2">
            <div className="py-1.5 px-4 rounded-full bg-red-950/90 border border-amber-400/80 shadow-inner flex items-center justify-center">
              <p className="font-serif text-xs sm:text-sm font-extrabold text-amber-300 tracking-widest uppercase">
                04 DECEMBER 2026
              </p>
            </div>

            {/* Departure Highlight */}
            <div className="py-1.5 px-4 rounded-full bg-amber-500/20 border border-amber-400/60 flex items-center justify-center gap-2">
              <span className="text-xs text-amber-300">⏰</span>
              <p className="font-serif text-xs sm:text-sm font-bold text-amber-200 tracking-wider">
                Departure – 3:00 PM
              </p>
            </div>
          </div>

          <p className="font-hindi text-[11px] text-amber-200/90 mt-2">
            अग्नि को साक्षी मानकर सात फेरों का पावन बंधन
          </p>
        </MughalArchFrame>
      </div>

      {/* Bottom Diyas */}
      <div className="relative z-20 flex items-center justify-around w-full max-w-sm pb-2">
        <DiyaIllustration className="w-8 h-8 drop-shadow" />
        <span className="font-serif text-[11px] uppercase tracking-widest text-amber-300 font-semibold">
          Shaadi • Sacred Pheras
        </span>
        <DiyaIllustration className="w-8 h-8 transform -scale-x-100 drop-shadow" />
      </div>
    </div>
  );
}
