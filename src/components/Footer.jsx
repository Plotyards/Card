import React from 'react';
import GaneshaIcon from './GaneshaIcon';
import { MandalaCircle, PaisleyDivider, CornerFlourish } from './MandalaMotif';
import { Heart, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#38040E] text-wedding-ivory pt-16 pb-12 px-4 sm:px-6 overflow-hidden border-t-2 border-wedding-gold/40">
      
      {/* Background Subtle Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10">
        <MandalaCircle className="w-[500px] h-[500px] text-wedding-gold animate-spin-very-slow" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
        
        {/* Sacred Ganesha */}
        <div className="opacity-90">
          <GaneshaIcon className="w-14 h-14 text-wedding-gold mx-auto" showText={false} />
        </div>

        {/* Closing Poetic Quote */}
        <div className="max-w-xl mx-auto">
          <p className="font-serif italic text-lg sm:text-2xl text-wedding-gold-light leading-relaxed font-medium">
            "Two families,
            <br />
            one beautiful beginning,
            <br />
            and a lifetime of togetherness."
          </p>
        </div>

        <PaisleyDivider className="my-6 text-wedding-gold" />

        {/* Couple Names */}
        <div className="space-y-1">
          <h3 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-wide text-white drop-shadow">
            Tanish Raj
          </h3>
          <p className="font-script text-3xl sm:text-4xl text-wedding-gold font-normal">
            &amp;
          </p>
          <h3 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-wide text-white drop-shadow">
            Prachi Arya
          </h3>
        </div>

        {/* Shubh Vivah Calligraphy */}
        <div className="pt-2">
          <span className="font-hindi text-2xl sm:text-3xl font-bold tracking-widest text-wedding-gold border-b-2 border-wedding-gold/40 pb-1">
            शुभ विवाह
          </span>
        </div>

        {/* Final Blessing Message */}
        <div className="pt-4 max-w-lg mx-auto">
          <p className="font-serif italic text-sm sm:text-base text-stone-300 leading-relaxed">
            With love and blessings,
            <br />
            we look forward to celebrating
            <br />
            this beautiful occasion with you.
          </p>
        </div>

        {/* Families Respects Banner */}
        <div className="pt-6 border-t border-wedding-gold/20 flex flex-wrap items-center justify-center gap-4 text-xs font-serif uppercase tracking-widest text-wedding-gold/80">
          <span className="px-3 py-1 rounded-full bg-white/5 border border-wedding-gold/20">
            वर पक्ष (Groom's Family)
          </span>
          <span>✦</span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-wedding-gold/20">
            वधू पक्ष (Bride's Family)
          </span>
        </div>

        {/* Back to top button */}
        <div className="pt-8">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-wedding-gold/40 text-wedding-gold text-xs font-serif uppercase tracking-widest transition-all cursor-pointer"
          >
            <ChevronUp className="w-4 h-4" />
            <span>Back To Top</span>
          </button>
        </div>

        <p className="text-[11px] text-stone-400 font-serif pt-4">
          Celebrating the sacred wedding of Tanish Raj &amp; Prachi Arya • December 2026
        </p>

      </div>
    </footer>
  );
}
