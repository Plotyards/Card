import React from 'react';
import { MughalArchFrame, GroomIllustration, FloralToran } from '../illustrations/TraditionalArtwork';

export default function Scene3GroomFamily() {
  return (
    <div className="relative w-full h-full min-h-screen flex flex-col justify-between items-center bg-[#13271D] text-amber-50 p-4 sm:p-6 overflow-hidden select-none">
      {/* Deep Royal Emerald & Olive Velvet Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      {/* Top Toran */}
      <div className="w-full relative z-20">
        <FloralToran className="w-full max-w-lg mx-auto" />
      </div>

      {/* Groom's Family Arch Frame */}
      <div className="relative z-10 w-full flex items-center justify-center my-auto py-1">
        <MughalArchFrame variant="green" className="shadow-[0_15px_45px_rgba(0,0,0,0.6)]">
          {/* Header Badges */}
          <div className="flex flex-col items-center mb-2">
            <span className="font-hindi text-xl sm:text-2xl text-amber-300 font-bold tracking-wider">
              वर पक्ष
            </span>
            <span className="font-serif uppercase text-[11px] sm:text-xs tracking-[0.3em] text-emerald-200/90 font-medium">
              GROOM'S FAMILY
            </span>
          </div>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent my-1" />

          {/* Groom's Name */}
          <div className="my-1.5">
            <h2 className="font-serif text-3xl sm:text-4xl text-amber-200 font-bold tracking-wide drop-shadow">
              Tanish Raj
            </h2>
            <p className="font-serif italic text-xs text-emerald-300/80 mt-0.5">
              The Groom
            </p>
            <p className="font-serif text-xs sm:text-sm text-stone-200 mt-1 font-medium">
              S/o <span className="text-amber-200 font-semibold">Dr. Ramesh Kumar Lal</span>
            </p>
          </div>

          {/* Lineage Details */}
          <div className="space-y-2.5 my-2 text-stone-200 text-xs sm:text-sm font-serif">
            {/* Grandfather */}
            <div className="p-2 rounded-lg bg-emerald-950/60 border border-amber-400/20">
              <p className="text-amber-300/90 text-[11px] uppercase tracking-wider">Lineage</p>
              <p className="font-semibold text-stone-100 text-sm sm:text-base">
                Grandson of Late Shri Surender Lal Das
              </p>
              <p className="text-emerald-300/80 text-xs">
                Kumarpatti, Darbhanga
              </p>
            </div>

            {/* Maternal Grandparents (Nana - Nani) */}
            <div className="p-2 rounded-lg bg-emerald-950/60 border border-amber-400/20">
              <p className="text-amber-300/90 text-[11px] uppercase tracking-wider">Maternal Blessings</p>
              <p className="text-stone-100 font-medium">
                Nana – <span className="font-semibold text-amber-200">Shri Ramautar Lal</span>
              </p>
              <p className="text-stone-100 font-medium">
                Nani – <span className="font-semibold text-amber-200">Smt. Vibha Devi</span>
              </p>
            </div>

            {/* Residence */}
            <div className="pt-1">
              <p className="text-xs tracking-wider text-emerald-300/90">
                Residence – <span className="font-semibold text-amber-300">Samastipur</span>
              </p>
            </div>
          </div>
        </MughalArchFrame>
      </div>

      {/* Illustrated Groom near bottom */}
      <div className="relative z-20 flex flex-col items-center pb-2">
        <GroomIllustration className="w-24 h-32 transform drop-shadow-xl" />
        <span className="text-[11px] font-serif uppercase tracking-widest text-amber-300/70 mt-1">
          Groom's Side • वर पक्ष
        </span>
      </div>
    </div>
  );
}
