import React from 'react';
import { MughalArchFrame, TemplePillarsFraming, FloralToran, DiyaIllustration } from '../illustrations/TraditionalArtwork';
import { MapPin, Navigation } from 'lucide-react';

export default function Scene12Venue() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Krishna+Banquet+Hall+Near+Chitragupta+Mandir+Mithila+Colony+Danapur+Patna+18";

  return (
    <div className="relative w-full h-full min-h-screen flex flex-col justify-between items-center bg-[#FAF6EC] text-stone-800 p-4 sm:p-6 overflow-hidden select-none">
      {/* Palace Stone Texture Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#B8860B_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-emerald-200/20 blur-3xl pointer-events-none" />

      {/* Top Toran with Hanging Florals */}
      <div className="w-full relative z-20">
        <FloralToran className="w-full max-w-lg mx-auto" />
      </div>

      {/* Center Grand Architectural Arch */}
      <div className="relative z-10 w-full flex items-center justify-center my-auto py-2">
        <TemplePillarsFraming className="max-w-md mx-auto">
          <MughalArchFrame variant="gold" className="shadow-2xl">
            {/* Architectural Finial Icon */}
            <div className="w-12 h-12 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 mb-2 shadow-inner">
              <MapPin className="w-6 h-6 text-amber-700" />
            </div>

            <span className="font-serif text-[11px] uppercase tracking-[0.3em] text-amber-800 font-bold mb-1">
              WEDDING VENUE
            </span>

            {/* Hall Name */}
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#600C1F] tracking-wide my-1">
              Krishna Banquet Hall
            </h2>

            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent my-2" />

            {/* Address Details */}
            <div className="space-y-1 text-stone-700 text-xs sm:text-sm font-serif my-2 leading-relaxed">
              <p className="font-medium text-stone-900">
                Near Chitragupta Mandir
              </p>
              <p className="text-stone-800">
                Mithila Colony – Danapur
              </p>
              <p className="font-semibold text-amber-900 text-sm sm:text-base">
                Patna – 18
              </p>
            </div>

            {/* GET DIRECTIONS Button */}
            <div className="mt-4 mb-2 w-full px-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#8B1E3F] via-[#600C1F] to-[#3E0513] text-amber-100 font-serif text-xs sm:text-sm uppercase tracking-widest font-bold shadow-lg hover:shadow-xl hover:from-[#A8284C] hover:to-[#600C1F] transition-all duration-300 border border-amber-400/50 group"
              >
                <Navigation className="w-4 h-4 text-amber-300 group-hover:rotate-45 transition-transform" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>

            <p className="font-hindi text-xs text-stone-500 mt-2">
              दानपुर, पटना • पावन वेदी
            </p>
          </MughalArchFrame>
        </TemplePillarsFraming>
      </div>

      {/* Bottom Lamps */}
      <div className="relative z-20 flex items-center justify-around w-full max-w-sm pb-2">
        <DiyaIllustration className="w-8 h-8 drop-shadow" />
        <span className="font-serif text-[11px] uppercase tracking-widest text-amber-800 font-semibold">
          Danapur, Patna • 18
        </span>
        <DiyaIllustration className="w-8 h-8 transform -scale-x-100 drop-shadow" />
      </div>
    </div>
  );
}
