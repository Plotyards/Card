import React from 'react';
import { FloralToran, MughalArchFrame, DiyaIllustration } from '../illustrations/TraditionalArtwork';

export default function Scene1Opening() {
  return (
    <div className="relative w-full h-full min-h-screen flex flex-col justify-between items-center bg-[#FAF6EE] text-stone-800 p-4 sm:p-6 overflow-hidden select-none">
      {/* Soft Indian Silk/Parchment Texture Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Top Hanging Floral Toran */}
      <div className="w-full relative z-20 animate-fade-in-down">
        <FloralToran className="w-full max-w-lg mx-auto" />
      </div>

      {/* Center Arch Frame Card */}
      <div className="relative z-10 w-full flex items-center justify-center my-auto py-2">
        <MughalArchFrame variant="gold" className="shadow-2xl">
          {/* Sacred Sanskrit Invocation */}
          <div className="mt-2 mb-3">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300/60 font-hindi text-amber-900 text-xs sm:text-sm tracking-widest font-semibold shadow-inner">
              ॥ श्री गणेशाय नमः ॥
            </span>
          </div>

          {/* Shubh Vivah Calligraphy */}
          <div className="my-2">
            <h1 className="font-hindi text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#7A1326] tracking-wider drop-shadow-sm">
              शुभ विवाह
            </h1>
            <p className="font-serif italic text-xs sm:text-sm text-stone-500 tracking-widest uppercase mt-0.5">
              The Royal Auspicious Wedding
            </p>
          </div>

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-2 my-3 w-3/4">
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-amber-600 text-xs">✦</span>
            <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          {/* Couple Names */}
          <div className="my-2 space-y-1">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3E0513] font-bold tracking-wide">
              Tanish Raj
            </h2>
            <div className="flex items-center justify-center gap-3">
              <span className="h-[1px] w-6 bg-[#D4AF37]" />
              <span className="font-script text-3xl sm:text-4xl text-[#B8860B] leading-none">&amp;</span>
              <span className="h-[1px] w-6 bg-[#D4AF37]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3E0513] font-bold tracking-wide">
              Prachi Arya
            </h2>
          </div>

          {/* Decorative Date Tag */}
          <div className="mt-4 pt-3 border-t border-amber-200/60 w-full flex items-center justify-center gap-2">
            <span className="font-serif text-xs uppercase tracking-widest text-amber-800 font-medium">
              December 2026 • Danapur, Patna
            </span>
          </div>
        </MughalArchFrame>
      </div>

      {/* Bottom Floral Garland & Diyas */}
      <div className="relative z-20 w-full max-w-md mx-auto flex items-center justify-between px-6 pb-2">
        <DiyaIllustration className="w-9 h-9 transform -scale-x-100 drop-shadow" />
        <div className="flex flex-col items-center">
          <span className="text-xs text-amber-800/80 font-serif tracking-widest uppercase">
            Scroll to Enter
          </span>
          <span className="text-amber-600 animate-bounce text-base">⌄</span>
        </div>
        <DiyaIllustration className="w-9 h-9 drop-shadow" />
      </div>
    </div>
  );
}
