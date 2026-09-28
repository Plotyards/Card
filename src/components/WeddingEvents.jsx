import React from 'react';
import { weddingData } from '../data/weddingData';
import { PaisleyDivider, CornerFlourish } from './MandalaMotif';
import { Calendar, Clock, Sparkles, Heart, Flame, Music, Disc } from 'lucide-react';

export default function WeddingEvents() {
  const getEventIcon = (id) => {
    switch (id) {
      case 'roka':
        return (
          <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 border border-amber-300 flex items-center justify-center shadow-inner">
            <Sparkles className="w-6 h-6 text-amber-700" />
          </div>
        );
      case 'haldi-mehndi-sangeet':
        return (
          <div className="w-12 h-12 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300 flex items-center justify-center shadow-inner">
            <Music className="w-6 h-6 text-yellow-700" />
          </div>
        );
      case 'shaadi':
        return (
          <div className="w-12 h-12 rounded-full bg-wedding-maroon/10 text-wedding-maroon border border-wedding-gold flex items-center justify-center shadow-inner">
            <Flame className="w-6 h-6 text-wedding-maroon animate-pulse" />
          </div>
        );
      default:
        return <Calendar className="w-6 h-6 text-wedding-gold" />;
    }
  };

  return (
    <section id="events" className="py-16 sm:py-24 px-4 sm:px-6 relative bg-[#FDFBF7] scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-wedding-maroon/10 text-wedding-maroon font-serif text-xs uppercase tracking-widest font-semibold mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Ceremonial Timeline</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-wedding-maroon-dark tracking-wide">
            Wedding Programme
          </h2>

          <p className="font-hindi text-base sm:text-lg text-stone-600 mt-1">
            मांगलिक कार्यक्रम विवरण
          </p>

          <PaisleyDivider className="my-4" />

          <p className="font-serif italic text-stone-600 text-sm sm:text-base">
            Join us in the sacred rituals, joyful rhythms, and timeless traditions celebrating Tanish Raj and Prachi Arya.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 sm:space-y-10 relative">
          
          {/* Vertical connecting accent line */}
          <div className="hidden sm:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-[2px] bg-gradient-to-b from-wedding-gold/20 via-wedding-gold to-wedding-gold/20 pointer-events-none" />

          {weddingData.events.map((event, index) => {
            const isShaadi = event.isMainEvent;
            const isEven = index % 2 === 0;

            return (
              <div
                key={event.id}
                className={`relative flex flex-col ${
                  isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                } items-center gap-6 sm:gap-10 group`}
              >
                {/* Content Card */}
                <div
                  className={`w-full sm:w-1/2 rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                    isShaadi
                      ? 'bg-gradient-to-br from-[#FFFDF9] via-[#FAF3E8] to-[#F5ECE0] border-2 border-wedding-gold shadow-lg shadow-wedding-gold/20 sm:scale-105'
                      : 'bg-white border border-wedding-gold/40 shadow-md hover:shadow-lg'
                  }`}
                >
                  <div className="relative">
                    {/* Date Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-wedding-maroon text-wedding-gold font-display text-xs sm:text-sm font-bold tracking-wider mb-3 shadow-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{event.date}</span>
                    </div>

                    {/* Hindi Subtitle */}
                    <p className="font-hindi text-sm text-wedding-maroon font-semibold">
                      {event.hindiTitle}
                    </p>

                    {/* Title */}
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-wedding-maroon-dark tracking-wide mt-1">
                      {event.title}
                    </h3>

                    {/* Departure Note for Shaadi */}
                    {event.subEvent && (
                      <div className="my-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-100/80 border border-red-300 text-wedding-maroon font-serif text-xs sm:text-sm font-bold">
                        <Clock className="w-3.5 h-3.5 text-wedding-maroon" />
                        <span>{event.subEvent}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="font-serif italic text-stone-600 text-xs sm:text-sm leading-relaxed mt-2">
                      {event.description}
                    </p>

                    {/* Decorative bottom motif */}
                    <div className="mt-4 pt-3 border-t border-wedding-gold/20 flex items-center justify-between text-xs text-stone-500 font-medium">
                      <span>{event.day}</span>
                      <span className="text-wedding-gold">✦ ✦ ✦</span>
                      <span>Danapur, Patna</span>
                    </div>

                  </div>
                </div>

                {/* Center Node Icon */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="p-1 rounded-full bg-wedding-ivory border-2 border-wedding-gold shadow-md group-hover:scale-110 transition-transform">
                    {getEventIcon(event.id)}
                  </div>
                </div>

                {/* Spacer for desktop symmetry */}
                <div className="hidden sm:block w-1/2" />
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
