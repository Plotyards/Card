import React from 'react';
import { MughalArchFrame, SangeetDanceIllustration, DholakIllustration, FloralToran } from '../illustrations/TraditionalArtwork';

export default function Scene9Sangeet() {
  return (
    <div className="relative w-full h-full min-h-screen flex flex-col justify-between items-center bg-[#240B1A] text-amber-50 p-4 sm:p-6 overflow-hidden select-none">
      {/* Festive Deep Wine & Gold Starlight Night */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-pink-700/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-purple-700/20 blur-3xl pointer-events-none" />

      {/* Top Toran */}
      <div className="w-full relative z-20">
        <FloralToran className="w-full max-w-lg mx-auto" />
      </div>

      {/* Sangeet Celebration Arch Card */}
      <div className="relative z-10 w-full flex items-center justify-center my-auto py-2">
        <MughalArchFrame variant="maroon" className="shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          {/* Dancing Silhouettes Illustration */}
          <div className="my-1">
            <SangeetDanceIllustration className="w-36 h-24 sm:w-44 sm:h-28" />
          </div>

          <div className="mt-1 mb-1">
            <span className="font-hindi text-xl sm:text-2xl text-amber-300 font-bold tracking-wider">
              संगीत संध्या
            </span>
          </div>

          {/* Sangeet Title */}
          <div className="my-2">
            <h2 className="font-serif text-3xl sm:text-4xl text-amber-200 font-extrabold tracking-wide drop-shadow">
              SANGEET NIGHT
            </h2>
            <p className="font-serif italic text-xs text-rose-300 mt-1">
              An evening of joyful rhythms, celebratory dance &amp; music
            </p>
          </div>

          {/* Date Stamp */}
          <div className="my-3 px-6 py-2 rounded-full bg-rose-900/60 border-2 border-amber-400 shadow-sm">
            <p className="font-serif text-sm sm:text-base font-extrabold text-amber-200 tracking-widest uppercase">
              03 DECEMBER 2026
            </p>
          </div>

          {/* Musical Details */}
          <div className="flex items-center justify-center gap-3 text-xs font-serif text-stone-300 mt-2">
            <DholakIllustration className="w-12 h-8" />
            <span>धमाकेदार प्रस्तुतियां एवं डीजे नाइट</span>
          </div>
        </MughalArchFrame>
      </div>

      {/* Bottom Musical Sparkles */}
      <div className="relative z-20 flex items-center justify-around w-full max-w-sm pb-2 text-amber-300">
        <span className="text-xl animate-pulse">✨</span>
        <span className="text-xs font-serif uppercase tracking-widest text-amber-300 font-semibold">
          Dance • Celebrate • Rejoice
        </span>
        <span className="text-xl animate-pulse">✨</span>
      </div>
    </div>
  );
}
