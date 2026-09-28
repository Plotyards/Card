import React, { useState, useEffect } from 'react';
import { MughalArchFrame, FloralToran, DiyaIllustration } from '../illustrations/TraditionalArtwork';

export default function Scene13Countdown() {
  const weddingDate = new Date('2026-12-04T10:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [weddingDate]);

  return (
    <div className="relative w-full h-full min-h-screen flex flex-col justify-between items-center bg-[#FAF4E6] text-stone-800 p-4 sm:p-6 overflow-hidden select-none">
      {/* Golden Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#D4AF37_1.2px,transparent_1.2px)] [background-size:22px_22px]" />
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-orange-400/20 blur-3xl pointer-events-none" />

      {/* Top Toran */}
      <div className="w-full relative z-20">
        <FloralToran className="w-full max-w-lg mx-auto" />
      </div>

      {/* Countdown Card */}
      <div className="relative z-10 w-full flex items-center justify-center my-auto py-2">
        <MughalArchFrame variant="gold" className="shadow-2xl">
          <span className="font-hindi text-lg sm:text-xl text-amber-800 font-bold tracking-wider mt-1">
            शुभ घड़ी की प्रतीक्षा
          </span>

          {/* Heading */}
          <div className="my-2">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#600C1F] font-extrabold tracking-wider">
              THE BIG DAY IS HERE
            </h2>
            <p className="font-serif text-xs uppercase tracking-[0.25em] text-amber-900 font-semibold mt-1">
              04 DECEMBER 2026
            </p>
          </div>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent my-2" />

          {/* 4 Countdown Boxes */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full my-4">
            {/* Days */}
            <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-gradient-to-b from-[#FAF5E8] to-[#F3E8CF] border-2 border-amber-400/80 shadow-md">
              <span className="font-serif text-xl sm:text-3xl font-extrabold text-[#600C1F]">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="font-serif text-[10px] sm:text-xs uppercase tracking-wider text-amber-900 font-semibold mt-0.5">
                Days
              </span>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-gradient-to-b from-[#FAF5E8] to-[#F3E8CF] border-2 border-amber-400/80 shadow-md">
              <span className="font-serif text-xl sm:text-3xl font-extrabold text-[#600C1F]">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="font-serif text-[10px] sm:text-xs uppercase tracking-wider text-amber-900 font-semibold mt-0.5">
                Hours
              </span>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-gradient-to-b from-[#FAF5E8] to-[#F3E8CF] border-2 border-amber-400/80 shadow-md">
              <span className="font-serif text-xl sm:text-3xl font-extrabold text-[#600C1F]">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="font-serif text-[10px] sm:text-xs uppercase tracking-wider text-amber-900 font-semibold mt-0.5">
                Minutes
              </span>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-gradient-to-b from-[#FAF5E8] to-[#F3E8CF] border-2 border-amber-400/80 shadow-md">
              <span className="font-serif text-xl sm:text-3xl font-extrabold text-[#D97706] animate-pulse">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="font-serif text-[10px] sm:text-xs uppercase tracking-wider text-amber-900 font-semibold mt-0.5">
                Seconds
              </span>
            </div>
          </div>

          <p className="font-serif italic text-xs text-stone-600 mt-2">
            Counting down every second to an eternity together
          </p>
        </MughalArchFrame>
      </div>

      {/* Bottom Lamps */}
      <div className="relative z-20 flex items-center justify-around w-full max-w-sm pb-2">
        <DiyaIllustration className="w-8 h-8 drop-shadow" />
        <span className="font-serif text-[11px] uppercase tracking-widest text-amber-800 font-semibold">
          Anticipating The Auspicious Muhurat
        </span>
        <DiyaIllustration className="w-8 h-8 transform -scale-x-100 drop-shadow" />
      </div>
    </div>
  );
}
