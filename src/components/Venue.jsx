import React from 'react';
import { weddingData } from '../data/weddingData';
import { PaisleyDivider, CornerFlourish } from './MandalaMotif';
import { MapPin, Navigation, Building2, Compass, ExternalLink } from 'lucide-react';

export default function Venue() {
  const { venue } = weddingData;

  return (
    <section id="venue" className="py-16 sm:py-24 px-4 sm:px-6 relative bg-white scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-wedding-maroon/10 text-wedding-maroon text-xs uppercase tracking-widest font-semibold mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Ceremony Location</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-wedding-maroon-dark tracking-wide">
            Wedding Venue
          </h2>

          <p className="font-hindi text-base sm:text-lg text-stone-600 mt-1">
            विवाह स्थल
          </p>

          <PaisleyDivider className="my-4" />

          <p className="font-serif italic text-stone-600 text-sm sm:text-base">
            We eagerly anticipate welcoming you and your family to celebrate the blessed marriage of Tanish Raj &amp; Prachi Arya.
          </p>
        </div>

        {/* Venue Luxury Card */}
        <div className="relative rounded-3xl bg-[#FFFDF9] p-8 sm:p-12 royal-border shadow-xl overflow-hidden">
          <CornerFlourish position="tl" />
          <CornerFlourish position="tr" />
          <CornerFlourish position="bl" />
          <CornerFlourish position="br" />

          <div className="max-w-xl mx-auto text-center space-y-6">
            
            {/* Grand Location Emblem */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-wedding-maroon text-wedding-gold border-2 border-wedding-gold/60 shadow-lg mb-2">
              <Building2 className="w-8 h-8" />
            </div>

            {/* Venue Name */}
            <div>
              <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-wedding-maroon-dark tracking-wide">
                {venue.name}
              </h3>
              <p className="font-hindi text-lg font-semibold text-wedding-gold-dark mt-1">
                कृष्णा बैंक्वेट हॉल
              </p>
            </div>

            {/* Address Details - Exactly as specified */}
            <div className="p-6 rounded-2xl bg-white/80 border border-wedding-gold/30 shadow-sm text-stone-800 space-y-2">
              <div className="flex items-center justify-center gap-2 text-wedding-maroon font-serif font-bold text-base sm:text-lg">
                <MapPin className="w-5 h-5 text-wedding-maroon shrink-0" />
                <span>{venue.landmark}</span>
              </div>
              <p className="font-serif text-sm sm:text-base text-stone-700">
                {venue.colony}
              </p>
              <p className="font-serif font-semibold text-sm sm:text-base text-stone-900 tracking-wide">
                {venue.cityPin}
              </p>
            </div>

            {/* Directions Action Button */}
            <div className="pt-2">
              <a
                href={venue.mapQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-wedding-maroon via-wedding-burgundy to-wedding-maroon text-wedding-gold font-display text-sm tracking-wider uppercase font-bold shadow-lg hover:shadow-gold-md hover:scale-105 active:scale-95 transition-all duration-300 border border-wedding-gold cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-wedding-gold group-hover:rotate-45 transition-transform duration-300" />
                <span>Get Directions</span>
                <ExternalLink className="w-4 h-4 text-wedding-gold/80" />
              </a>
              <p className="text-xs text-stone-500 font-serif italic mt-3">
                Opens in Google Maps • Danapur, Patna
              </p>
            </div>

            {/* Note */}
            <div className="pt-4 border-t border-wedding-gold/25 text-xs text-stone-600 flex items-center justify-center gap-2">
              <Compass className="w-4 h-4 text-wedding-maroon" />
              <span>Easy landmark access near Chitragupta Mandir in Mithila Colony</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
