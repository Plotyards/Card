import React from 'react';
import GroomFamily from './GroomFamily';
import BrideFamily from './BrideFamily';
import { PaisleyDivider } from './MandalaMotif';
import { HeartHandshake, Sparkles } from 'lucide-react';

export default function CoupleSection() {
  return (
    <section id="families" className="py-16 sm:py-24 px-4 sm:px-6 relative bg-stone-50/50 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wedding-gold/15 border border-wedding-gold/30 text-wedding-maroon-dark text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-wedding-gold" />
            <span>Honoring Our Lineage &amp; Heritage</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-wedding-maroon-dark tracking-wide">
            Two Families, One Celebration
          </h2>

          <p className="font-hindi text-base sm:text-lg text-stone-600 mt-2">
            दो परिवारों का पावन मिलन एवं मंगल परिणय
          </p>

          <PaisleyDivider className="my-4" />

          <p className="font-serif italic text-stone-600 text-sm sm:text-base leading-relaxed">
            With the grace of the Almighty and the deep-rooted blessings of our elders, both the Groom’s and Bride’s families cordially invite you to be part of our joyous celebration.
          </p>
        </div>

        {/* The Two Visually Distinct Cards (Side-by-side on desktop, Stacked on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-stretch">
          
          {/* Card 1: GROOM'S SIDE (वर पक्ष) */}
          <div className="flex flex-col">
            <GroomFamily />
          </div>

          {/* Card 2: BRIDE'S SIDE (वधू पक्ष) */}
          <div className="flex flex-col">
            <BrideFamily />
          </div>

        </div>

        {/* Central Union Accent Indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/80 border border-wedding-gold/40 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-wedding-maroon" />
            <HeartHandshake className="w-5 h-5 text-wedding-gold" />
            <span className="font-serif text-xs sm:text-sm font-semibold text-stone-700 tracking-wide">
              United in Love &amp; Tradition • Tanish &amp; Prachi
            </span>
            <span className="w-2 h-2 rounded-full bg-rose-800" />
          </div>
        </div>

      </div>
    </section>
  );
}
