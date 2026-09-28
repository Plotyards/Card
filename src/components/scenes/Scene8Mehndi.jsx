import React from 'react';
import { MughalArchFrame, MehndiIllustration, FloralToran } from '../illustrations/TraditionalArtwork';

export default function Scene8Mehndi() {
  return (
    <div className="relative w-full h-full min-h-screen flex flex-col justify-between items-center bg-[#EBF5ED] text-stone-800 p-4 sm:p-6 overflow-hidden select-none">
      {/* Lush Green Floral Silk Background */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#1B4332_1.2px,transparent_1.2px)] [background-size:22px_22px]" />
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-emerald-300/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-teal-400/20 blur-3xl pointer-events-none" />

      {/* Top Toran with Mango Leaves */}
      <div className="w-full relative z-20">
        <FloralToran className="w-full max-w-lg mx-auto" />
      </div>

      {/* Center Arch */}
      <div className="relative z-10 w-full flex items-center justify-center my-auto py-2">
        <MughalArchFrame variant="gold" className="shadow-2xl">
          {/* Henna / Mehndi Palm Illustration */}
          <div className="my-1 transform hover:rotate-3 transition-transform">
            <MehndiIllustration className="w-24 h-24 drop-shadow" />
          </div>

          <div className="mt-2 mb-1">
            <span className="font-hindi text-xl sm:text-2xl text-[#1B4332] font-bold tracking-wider">
              मेहंदी की रात
            </span>
          </div>

          {/* Title */}
          <div className="my-2">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F3826] font-extrabold tracking-wide">
              MEHNDI CEREMONY
            </h2>
            <p className="font-serif italic text-xs text-[#2D6A4F] mt-1">
              Intricate henna patterns carrying heartfelt whispers of love
            </p>
          </div>

          {/* Date Stamp */}
          <div className="my-3 px-6 py-2 rounded-full bg-emerald-100 border-2 border-emerald-600/50 shadow-sm">
            <p className="font-serif text-sm sm:text-base font-extrabold text-[#081C15] tracking-widest uppercase">
              03 DECEMBER 2026
            </p>
          </div>

          {/* Traditional Motifs */}
          <p className="font-hindi text-xs sm:text-sm text-stone-700 mt-2 font-medium">
            सखियों संग मेहंदी रचाओ, पिया का नाम सजाओ
          </p>
        </MughalArchFrame>
      </div>

      {/* Bottom Henna Vine Decor */}
      <div className="relative z-20 flex items-center justify-center gap-4 pb-2">
        <span className="text-xl">🌿</span>
        <span className="text-xs font-serif uppercase tracking-widest text-[#1B4332] font-semibold">
          Henna Hues &amp; Festive Tunes
        </span>
        <span className="text-xl">🌿</span>
      </div>
    </div>
  );
}
