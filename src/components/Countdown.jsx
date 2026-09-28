import React, { useState, useEffect } from 'react';
import { PaisleyDivider, CornerFlourish } from './MandalaMotif';
import { Heart, Sparkles, Clock } from 'lucide-react';

export default function Countdown() {
  const targetDate = new Date('2026-12-04T00:00:00');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', hindi: 'दिन', value: timeLeft.days },
    { label: 'Hours', hindi: 'घंटे', value: timeLeft.hours },
    { label: 'Minutes', hindi: 'मिनट', value: timeLeft.minutes },
    { label: 'Seconds', hindi: 'सेकंड', value: timeLeft.seconds },
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 relative bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl bg-wedding-ivory border-2 border-wedding-gold/40 p-6 sm:p-10 md:p-12 text-center shadow-xl">
          <CornerFlourish position="tl" />
          <CornerFlourish position="tr" />
          <CornerFlourish position="bl" />
          <CornerFlourish position="br" />

          {/* Heading */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-wedding-maroon/10 text-wedding-maroon text-xs uppercase tracking-widest font-semibold mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span>Counting Down The Moments</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-wedding-maroon-dark tracking-wide">
            The Auspicious Day Awaits
          </h2>

          <p className="font-hindi text-sm sm:text-base text-stone-600 mt-1">
            शुभ विवाह की मंगल प्रतीक्षा
          </p>

          <p className="font-serif italic text-stone-600 text-xs sm:text-sm mt-2">
            4 December 2026 • Danapur, Patna
          </p>

          <PaisleyDivider className="my-4 sm:my-6" />

          {/* Countdown Boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 my-6">
            {timeUnits.map((unit) => (
              <div
                key={unit.label}
                className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-white border border-wedding-gold/40 shadow-md group hover:border-wedding-gold transition-colors"
              >
                <span className="font-serif text-3xl sm:text-5xl font-extrabold text-wedding-maroon tracking-tight">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="font-display text-xs sm:text-sm uppercase tracking-widest font-bold text-wedding-gold-dark mt-1">
                  {unit.label}
                </span>
                <span className="font-hindi text-[10px] text-stone-500 font-medium">
                  {unit.hindi}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs text-stone-500 font-serif italic mt-4">
            "Every passing second brings us closer to a lifetime of love and togetherness."
          </p>

        </div>
      </div>
    </section>
  );
}
