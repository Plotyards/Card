import React from 'react';
import { MughalArchFrame, HaldiUrliIllustration, FloralToran } from '../illustrations/TraditionalArtwork';

export default function Scene7Haldi() {
  return (
    <div className="relative w-full h-full min-h-screen flex flex-col justify-between items-center bg-[#FDF6D8] text-stone-800 p-4 sm:p-6 overflow-hidden select-none">
      {/* Radiant Golden-Yellow Haldi Ambient */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#F59E0B_1.5px,transparent_1.5px)] [background-size:20px_20px]" />
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-yellow-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />

      {/* Top Toran with Yellow Marigolds */}
      <div className="w-full relative z-20">
        <FloralToran className="w-full max-w-lg mx-auto" />
      </div>

      {/* Haldi Ceremony Arch Card */}
      <div className="relative z-10 w-full flex items-center justify-center my-auto py-2">
        <MughalArchFrame variant="gold" className="shadow-2xl">
          {/* Haldi Urli with Flowers */}
          <div className="my-1">
            <HaldiUrliIllustration className="w-24 h-16 sm:w-28 sm:h-20 drop-shadow" />
          </div>

          <div className="mt-2 mb-1">
            <span className="font-hindi text-xl sm:text-2xl text-amber-700 font-bold tracking-wider">
              हल्दी की रस्म
            </span>
          </div>

          {/* Title */}
          <div className="my-2">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#78350F] font-extrabold tracking-wide">
              HALDI CEREMONY
            </h2>
            <p className="font-serif italic text-xs text-amber-800 mt-1">
              Blessings dipped in auspicious turmeric &amp; love
            </p>
          </div>

          {/* Date Badge */}
          <div className="my-3 px-6 py-2 rounded-full bg-gradient-to-r from-amber-400/30 via-yellow-300/60 to-amber-400/30 border-2 border-amber-600 shadow-md">
            <p className="font-serif text-base sm:text-lg font-black text-[#78350F] tracking-widest uppercase text-center">
              ✦ 03 DECEMBER 2026 ✦
            </p>
            <p className="font-serif text-xs font-bold text-amber-900 uppercase tracking-wider text-center">
              Thursday • गुरुवार
            </p>
          </div>

          {/* Floral and Ritual Accent */}
          <div className="mt-2 flex items-center justify-center gap-2 text-xs font-serif text-stone-600">
            <span>🌼 Marigold Shower</span>
            <span>•</span>
            <span>उबटन और आशीर्वाद 🌼</span>
          </div>
        </MughalArchFrame>
      </div>

      {/* Bottom Marigold Flowers Accents */}
      <div className="relative z-20 flex items-center justify-center gap-4 pb-2">
        <span className="text-2xl">🌼</span>
        <span className="text-xs font-serif uppercase tracking-widest text-amber-800 font-semibold">
          Golden Sunshine Rituals
        </span>
        <span className="text-2xl">🌼</span>
      </div>
    </div>
  );
}
