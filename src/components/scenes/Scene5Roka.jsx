import React from 'react';
import { MughalArchFrame, SacredKalashIllustration, SacredHavanKund, DiyaIllustration, FloralToran } from '../illustrations/TraditionalArtwork';

export default function Scene5Roka() {
  return (
    <div className="relative w-full h-full min-h-screen flex flex-col justify-between items-center bg-[#FAF4E6] text-stone-800 p-4 sm:p-6 overflow-hidden select-none">
      {/* Warm Golden Saffron Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#D4AF37_1.2px,transparent_1.2px)] [background-size:22px_22px]" />
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-orange-400/20 blur-3xl pointer-events-none" />

      {/* Top Toran */}
      <div className="w-full relative z-20">
        <FloralToran className="w-full max-w-lg mx-auto" />
      </div>

      {/* Pooja & Matkor Scene Card */}
      <div className="relative z-10 w-full flex items-center justify-center my-auto py-2">
        <MughalArchFrame variant="gold" className="shadow-2xl">
          {/* Sacred Kalash / Matkas Illustration */}
          <div className="flex items-center justify-center -space-x-3 my-1">
            <SacredKalashIllustration className="w-16 h-16 sm:w-20 sm:h-20 transform -rotate-6 drop-shadow" />
            <SacredKalashIllustration className="w-16 h-16 sm:w-20 sm:h-20 transform rotate-6 drop-shadow" />
          </div>

          <span className="font-serif text-[11px] uppercase tracking-[0.25em] text-amber-800 font-semibold mt-1">
            Auspicious Ceremonial Ritual
          </span>

          {/* Center Title */}
          <div className="my-2">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#600C1F] font-bold tracking-wide">
              Pooja
            </h2>
            <div className="flex items-center justify-center gap-2 my-0.5">
              <span className="h-[1px] w-6 bg-amber-500" />
              <span className="font-script text-2xl text-amber-700">&amp;</span>
              <span className="h-[1px] w-6 bg-amber-500" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#600C1F] font-semibold tracking-wide">
              Matkor
            </h3>
          </div>

          {/* Date Stamp with Ornate Gold Frame Border */}
          <div className="my-3 px-6 py-2 rounded-full bg-gradient-to-r from-amber-400/30 via-yellow-300/50 to-amber-400/30 border-2 border-amber-600/80 shadow-md">
            <p className="font-serif text-base sm:text-lg font-black text-[#2B040C] tracking-widest uppercase">
              ✦ 02 DECEMBER 2026 ✦
            </p>
            <p className="font-serif text-xs font-bold text-amber-900 uppercase tracking-wider text-center">
              Wednesday • बुधवार
            </p>
          </div>

          {/* Traditional Havan Fire motif */}
          <div className="mt-2 flex flex-col items-center">
            <SacredHavanKund className="w-16 h-16" />
            <p className="font-hindi text-xs text-amber-900 mt-1 font-bold">
              पवित्र शगुन एवं मांगलिक विधान
            </p>
          </div>
        </MughalArchFrame>
      </div>

      {/* Bottom Floating Diyas & Flower decor */}
      <div className="relative z-20 flex items-center justify-between w-full max-w-sm px-6 pb-2">
        <DiyaIllustration className="w-8 h-8 drop-shadow" />
        <span className="font-serif text-xs font-extrabold tracking-widest text-amber-950 uppercase bg-amber-200/60 px-3 py-0.5 rounded-full border border-amber-400/50">
          02 • 12 • 2026
        </span>
        <DiyaIllustration className="w-8 h-8 transform -scale-x-100 drop-shadow" />
      </div>
    </div>
  );
}
