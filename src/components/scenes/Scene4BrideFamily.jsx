import React from 'react';
import { MughalArchFrame, BrideIllustration, FloralToran } from '../illustrations/TraditionalArtwork';

export default function Scene4BrideFamily() {
  return (
    <div className="relative w-full h-full min-h-screen flex flex-col justify-between items-center bg-[#FCF4EE] text-stone-800 p-4 sm:p-6 overflow-hidden select-none">
      {/* Soft Rose & Peach Silk Background */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#E29578_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-rose-300/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />

      {/* Top Floral Toran */}
      <div className="w-full relative z-20">
        <FloralToran className="w-full max-w-lg mx-auto" />
      </div>

      {/* Bride's Family Arch Frame */}
      <div className="relative z-10 w-full flex items-center justify-center my-auto py-1">
        <MughalArchFrame variant="pink" className="shadow-[0_15px_45px_rgba(183,65,94,0.18)]">
          {/* Header Badges */}
          <div className="flex flex-col items-center mb-2">
            <span className="font-hindi text-xl sm:text-2xl text-[#B7415E] font-bold tracking-wider">
              वधू पक्ष
            </span>
            <span className="font-serif uppercase text-[11px] sm:text-xs tracking-[0.3em] text-[#A8586E] font-semibold">
              BRIDE'S FAMILY
            </span>
          </div>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#E29578] to-transparent my-1" />

          {/* Bride's Name */}
          <div className="my-2">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#4A0D18] font-bold tracking-wide drop-shadow-sm">
              Prachi Arya
            </h2>
            <p className="font-serif italic text-xs text-[#B7415E] mt-0.5">
              The Bride
            </p>
          </div>

          {/* Parents & Residence Details */}
          <div className="space-y-4 my-3 text-stone-700 text-xs sm:text-sm font-serif w-full px-2">
            {/* Parents Card */}
            <div className="p-3 rounded-lg bg-rose-50/80 border border-rose-200/80 shadow-inner">
              <p className="text-[#B7415E] text-[11px] uppercase tracking-widest font-medium mb-1">
                Daughter of
              </p>
              <p className="font-bold text-[#3E0513] text-base sm:text-lg">
                Shri Kamlesh Lal Arya
              </p>
              <p className="font-script text-2xl text-amber-700 leading-none my-0.5">&amp;</p>
              <p className="font-bold text-[#3E0513] text-base sm:text-lg">
                Smt. Mamta Arya
              </p>
            </div>

            {/* City / Residence */}
            <div className="pt-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 border border-amber-300 text-amber-900 font-semibold text-xs sm:text-sm tracking-wider shadow-sm">
                Danapur – Patna
              </span>
            </div>
          </div>
        </MughalArchFrame>
      </div>

      {/* Illustrated Bride near bottom */}
      <div className="relative z-20 flex flex-col items-center pb-2">
        <BrideIllustration className="w-24 h-32 transform drop-shadow-xl" />
        <span className="text-[11px] font-serif uppercase tracking-widest text-[#B7415E] mt-1 font-medium">
          Bride's Side • वधू पक्ष
        </span>
      </div>
    </div>
  );
}
