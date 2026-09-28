import React from 'react';
import { MughalArchFrame, FloralToran, DiyaIllustration } from '../illustrations/TraditionalArtwork';

export default function Scene14Blessing() {
  return (
    <div className="relative w-full h-full min-h-screen flex flex-col justify-between items-center bg-[#FAF7F0] text-stone-800 p-4 sm:p-6 overflow-hidden select-none">
      {/* Soft Ivory / Pastel Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-rose-200/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />

      {/* Top Toran */}
      <div className="w-full relative z-20">
        <FloralToran className="w-full max-w-lg mx-auto" />
      </div>

      {/* Center Arch Card */}
      <div className="relative z-10 w-full flex items-center justify-center my-auto py-2">
        <MughalArchFrame variant="gold" className="shadow-2xl">
          <span className="text-2xl mb-1">🪷</span>

          {/* Emotional Blessing Quote */}
          <div className="my-3 px-3 py-2">
            <p className="font-serif italic text-base sm:text-lg text-[#600C1F] leading-relaxed font-medium">
              “Two families,<br />
              one beautiful beginning,<br />
              and a lifetime of togetherness.”
            </p>
          </div>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent my-2" />

          {/* Couple Names */}
          <div className="space-y-1 my-2">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3E0513] font-bold tracking-wide">
              Tanish Raj
            </h2>
            <div className="flex items-center justify-center gap-2">
              <span className="h-[1px] w-6 bg-amber-400" />
              <span className="font-script text-3xl sm:text-4xl text-[#B8860B] leading-none">&amp;</span>
              <span className="h-[1px] w-6 bg-amber-400" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3E0513] font-bold tracking-wide">
              Prachi Arya
            </h2>
          </div>

          {/* Shubh Vivah Stamp */}
          <div className="mt-3">
            <span className="inline-block px-5 py-1.5 rounded-full bg-amber-100 border border-amber-300 font-hindi text-base sm:text-lg text-amber-900 font-bold tracking-widest shadow-sm">
              शुभ विवाह
            </span>
          </div>
        </MughalArchFrame>
      </div>

      {/* Bottom Lamps */}
      <div className="relative z-20 flex items-center justify-around w-full max-w-sm pb-2">
        <DiyaIllustration className="w-8 h-8 drop-shadow" />
        <span className="font-serif text-[11px] uppercase tracking-widest text-amber-800 font-semibold">
          Love • Blessings • Eternity
        </span>
        <DiyaIllustration className="w-8 h-8 transform -scale-x-100 drop-shadow" />
      </div>
    </div>
  );
}
