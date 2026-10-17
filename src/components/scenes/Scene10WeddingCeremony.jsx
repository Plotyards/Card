import React from 'react';
import { MughalArchFrame, RoyalCoupleIllustration, RoyalElephantMotif, FloralToran, DiyaIllustration } from '../illustrations/TraditionalArtwork';

export default function Scene10WeddingCeremony() {
  return (
    <div className="relative w-full h-full min-h-screen flex flex-col justify-between items-center bg-[#380613] text-amber-50 p-4 sm:p-6 overflow-hidden select-none">
      {/* Rich Regal Indian Red & Antique Gold Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-amber-600/20 blur-3xl pointer-events-none" />

      {/* Top Toran with Golden Bells */}
      <div className="w-full relative z-20">
        <FloralToran className="w-full max-w-lg mx-auto" />
      </div>

      {/* Main Wedding Card Arch */}
      <div className="relative z-10 w-full flex items-center justify-center my-auto py-1">
        <MughalArchFrame variant="red" className="shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
          {/* Royal Elephants flanking the Header */}
          <div className="flex items-center justify-between w-full px-2 mb-1">
            <RoyalElephantMotif className="w-12 h-10 opacity-90 drop-shadow" />
            <span className="font-hindi text-xl sm:text-2xl text-amber-300 font-extrabold tracking-wider">
              शुभ विवाह
            </span>
            <RoyalElephantMotif className="w-12 h-10 transform scale-x-[-1] opacity-90 drop-shadow" />
          </div>

          {/* Main Title */}
          <div className="my-1">
            <h2 className="font-serif text-2xl sm:text-3xl text-amber-200 font-extrabold tracking-wider drop-shadow-md">
              WEDDING CEREMONY
            </h2>
            <p className="font-serif italic text-xs text-rose-200 mt-0.5">
              The Grand Sacred Union
            </p>
          </div>

          {/* Date Badge */}
          <div className="my-2 px-6 py-2 rounded-full bg-gradient-to-r from-red-950 via-[#4A0A17] to-red-950 border-2 border-amber-300 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
            <p className="font-serif text-base sm:text-lg font-black text-amber-200 tracking-widest uppercase text-center drop-shadow">
              ✦ 04 DECEMBER 2026 ✦
            </p>
            <p className="font-serif text-xs font-bold text-amber-300 uppercase tracking-wider text-center">
              Friday • शुक्रवार
            </p>
          </div>

          {/* Illustrated Bride + Groom Couple in Traditional Royal Attire */}
          <div className="my-1 transform scale-95 sm:scale-100">
            <RoyalCoupleIllustration className="w-48 h-36" />
          </div>

          {/* Couple Names */}
          <div className="space-y-0.5 my-1">
            <h3 className="font-serif text-2xl sm:text-3xl text-amber-100 font-bold tracking-wide">
              Tanish Raj
            </h3>
            <div className="flex items-center justify-center gap-2">
              <span className="h-[1px] w-6 bg-amber-400" />
              <span className="font-script text-2xl text-amber-300 leading-none">&amp;</span>
              <span className="h-[1px] w-6 bg-amber-400" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-amber-100 font-bold tracking-wide">
              Prachi Arya
            </h3>
          </div>

          <p className="font-serif text-[11px] text-amber-200/80 italic mt-2">
            Sacred Mandap • Agni Devta • Holy Vows
          </p>
        </MughalArchFrame>
      </div>

      {/* Bottom Sacred Diyas */}
      <div className="relative z-20 flex items-center justify-around w-full max-w-sm pb-2">
        <DiyaIllustration className="w-8 h-8 drop-shadow" />
        <span className="font-serif text-[11px] uppercase tracking-widest text-amber-300 font-semibold">
          सात फेरे • सात वचन
        </span>
        <DiyaIllustration className="w-8 h-8 transform -scale-x-100 drop-shadow" />
      </div>
    </div>
  );
}
