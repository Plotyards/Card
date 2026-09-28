import React from 'react';
import { MughalArchFrame, DholakIllustration, FloralToran } from '../illustrations/TraditionalArtwork';

export default function Scene6OverviewEvents() {
  return (
    <div className="relative w-full h-full min-h-screen flex flex-col justify-between items-center bg-[#FBF3DC] text-stone-800 p-4 sm:p-6 overflow-hidden select-none">
      {/* Vibrant Festive Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="absolute top-1/4 left-0 w-60 h-60 rounded-full bg-yellow-400/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-60 h-60 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />

      {/* Top Toran */}
      <div className="w-full relative z-20">
        <FloralToran className="w-full max-w-lg mx-auto" />
      </div>

      {/* Center Arch */}
      <div className="relative z-10 w-full flex items-center justify-center my-auto py-2">
        <MughalArchFrame variant="gold" className="shadow-2xl">
          {/* Dholak & Instruments Illustration */}
          <div className="my-1">
            <DholakIllustration className="w-24 h-16 transform hover:scale-105 transition-transform" />
          </div>

          <span className="font-serif text-[11px] uppercase tracking-[0.3em] text-amber-800 font-bold mt-1">
            Festive Celebrations
          </span>

          {/* Triple Festivity Title */}
          <div className="my-3 space-y-1">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#B45309] font-extrabold tracking-wide">
              Haldi
            </h2>
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rotate-45 bg-[#047857]" />
              <h2 className="font-serif text-3xl sm:text-4xl text-[#047857] font-extrabold tracking-wide">
                Mehndi
              </h2>
              <span className="w-2 h-2 rotate-45 bg-[#047857]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#9F1239] font-extrabold tracking-wide">
              Sangeet
            </h2>
          </div>

          {/* Date Badge */}
          <div className="my-3 px-6 py-2 rounded-full bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 border border-amber-400 shadow-sm">
            <p className="font-serif text-sm sm:text-base font-extrabold text-[#3E0513] tracking-widest uppercase">
              03 DECEMBER 2026
            </p>
          </div>

          {/* Decorative Details */}
          <p className="font-hindi text-xs sm:text-sm text-stone-700 mt-2 font-medium">
            गीत, संगीत, हल्दी एवं मेहंदी का उल्लास
          </p>
        </MughalArchFrame>
      </div>

      {/* Bottom Musical Instruments & Umbrella Accents */}
      <div className="relative z-20 flex items-center justify-around w-full max-w-sm pb-2">
        <span className="text-xl">🪘</span>
        <span className="font-serif text-[11px] uppercase tracking-widest text-amber-900 font-semibold">
          Rhythms &amp; Radiance
        </span>
        <span className="text-xl">🪕</span>
      </div>
    </div>
  );
}
