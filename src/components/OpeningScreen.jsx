import React, { useState } from 'react';
import GaneshaIcon from './GaneshaIcon';
import { MandalaCircle, PaisleyDivider, CornerFlourish } from './MandalaMotif';
import { MailOpen, Sparkles, Heart, Music, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { startMusic } from '../utils/audioManager';

export default function OpeningScreen({ isOpen, onOpen }) {
  const [step, setStep] = useState('sealed'); // 'sealed' | 'unfolding' | 'revealed'

  const handleBreakSeal = (e) => {
    e?.stopPropagation();
    if (step !== 'sealed') return;

    // Immediately start music with user gesture
    startMusic();

    // Burst golden celebration particles and rose petals
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#D4AF37', '#960018', '#FFD700', '#F59E0B']
      });
    } catch (err) {}

    setStep('unfolding');

    setTimeout(() => {
      setStep('revealed');
    }, 600);
  };

  const handleEnterCelebration = () => {
    // Ensure music is active
    startMusic();

    // Confetti shower
    try {
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.4 },
        colors: ['#D4AF37', '#600C1F', '#B8860B', '#E29578']
      });
    } catch (err) {}

    onOpen();
  };

  if (isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/90 backdrop-blur-md overflow-y-auto">
      {/* Background Rotating Mandalas */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-20">
        <MandalaCircle className="w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] text-wedding-gold animate-spin-very-slow" />
      </div>

      {/* Floating Diyas & Ambient Indian Garland Aura */}
      <div className="absolute top-4 left-4 sm:left-12 flex items-center gap-2 text-amber-400/80 animate-pulse hidden sm:flex">
        <Flame className="w-5 h-5 text-amber-500 fill-amber-400" />
        <span className="font-hindi text-xs text-amber-200">शुभ मंगलम्</span>
      </div>
      <div className="absolute top-4 right-4 sm:right-12 flex items-center gap-2 text-amber-400/80 animate-pulse hidden sm:flex">
        <span className="font-hindi text-xs text-amber-200">कल्याणम्</span>
        <Flame className="w-5 h-5 text-amber-500 fill-amber-400" />
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-lg my-auto perspective-1000">

        {step === 'sealed' || step === 'unfolding' ? (
          /* ========================================================
             STAGE 1: THE ROYAL ENVELOPE (शाही लिफाफा)
             ======================================================== */
          <div
            onClick={handleBreakSeal}
            className={`relative rounded-3xl bg-[#4A0815] p-6 sm:p-10 text-center shadow-2xl border-2 border-wedding-gold cursor-pointer transition-all duration-700 select-none ${
              step === 'unfolding' ? 'scale-95 opacity-0 -translate-y-4' : 'scale-100 opacity-100 hover:scale-[1.01]'
            }`}
          >
            {/* Ornate Gold Corners */}
            <CornerFlourish position="tl" />
            <CornerFlourish position="tr" />
            <CornerFlourish position="bl" />
            <CornerFlourish position="br" />

            {/* Top Auspicious Garland Line */}
            <div className="flex items-center justify-center gap-2 text-wedding-gold/80 mb-2">
              <span className="h-[1px] w-12 bg-wedding-gold/60" />
              <span className="font-hindi text-xs tracking-widest text-wedding-gold-light">
                ॥ श्री गणेशाय नमः ॥
              </span>
              <span className="h-[1px] w-12 bg-wedding-gold/60" />
            </div>

            {/* Header: शुभ विवाह */}
            <div className="py-2">
              <h1 className="font-hindi text-3xl sm:text-4xl font-extrabold text-wedding-gold tracking-widest drop-shadow-md">
                शुभ विवाह
              </h1>
              <p className="font-display text-[11px] uppercase tracking-[0.3em] text-amber-200/90 font-semibold mt-1">
                Royal Wedding Invitation
              </p>
            </div>

            {/* Couple Names on Envelope */}
            <div className="py-4 my-1">
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                Tanish Raj
              </h2>
              <div className="flex items-center justify-center gap-3 my-0.5">
                <span className="h-[1px] w-8 bg-wedding-gold/60" />
                <span className="font-script text-2xl text-wedding-gold">&amp;</span>
                <span className="h-[1px] w-8 bg-wedding-gold/60" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                Prachi Arya
              </h2>
            </div>

            {/* Interactive 3D Gold Wax Seal (शाही मुहर) */}
            <div className="py-6 flex flex-col items-center justify-center">
              <div className="relative group">
                {/* Glowing Aura Ring */}
                <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-md animate-pulse" />
                
                {/* 3D Wax Seal Button */}
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#FFE58F] via-[#D4AF37] to-[#8C6D14] p-1.5 shadow-[0_8px_25px_rgba(0,0,0,0.6)] border-2 border-[#FFF0BD] flex items-center justify-center group-hover:scale-105 active:scale-95 transition-transform">
                  <div className="w-full h-full rounded-full border border-dashed border-[#8C6D14]/70 flex flex-col items-center justify-center bg-gradient-to-b from-[#F2C94C]/40 to-[#B8860B]/60 shadow-inner">
                    <GaneshaIcon className="w-10 h-10 text-stone-900" showText={false} />
                    <span className="text-[8px] font-bold text-stone-900 uppercase tracking-widest mt-0.5">
                      OPEN
                    </span>
                  </div>
                </div>
              </div>

              {/* Pulsing prompt */}
              <div className="mt-4 flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-wedding-gold/40 text-amber-200 text-xs font-serif tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-wedding-gold animate-bounce" />
                <span>Tap Seal to Open with Royal Music</span>
              </div>
            </div>

            {/* Envelope Flap Accent & Date */}
            <div className="pt-2 border-t border-wedding-gold/30 flex items-center justify-between text-[11px] text-amber-100/80 font-serif">
              <span>Danapur, Patna</span>
              <span className="text-wedding-gold font-bold">✦ 04 DEC 2026 ✦</span>
              <span>4 December 2026</span>
            </div>

          </div>
        ) : (
          /* ========================================================
             STAGE 2: THE REVEALED ROYAL CARD (निमंत्रण पत्र)
             ======================================================== */
          <div className="relative rounded-3xl bg-[#FFFDF9] p-6 sm:p-10 text-center shadow-2xl border-2 border-wedding-gold animate-[fadeIn_0.5s_ease-out]">
            <CornerFlourish position="tl" />
            <CornerFlourish position="tr" />
            <CornerFlourish position="bl" />
            <CornerFlourish position="br" />

            <div className="border border-wedding-gold/40 rounded-2xl p-6 sm:p-8 bg-white/70 shadow-inner relative">
              
              {/* Sacred Ganesha */}
              <div className="mb-2">
                <GaneshaIcon className="w-14 h-14 text-wedding-maroon mx-auto" />
              </div>

              {/* Shubh Vivah */}
              <h2 className="font-hindi text-3xl sm:text-4xl font-extrabold text-wedding-maroon tracking-wider">
                शुभ विवाह
              </h2>

              <PaisleyDivider className="my-3" />

              {/* Couple Name */}
              <div className="py-1">
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-wedding-maroon-dark tracking-wide">
                  Tanish Raj
                </h3>
                <span className="font-script text-2xl text-wedding-gold block my-0.5">&amp;</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-wedding-maroon-dark tracking-wide">
                  Prachi Arya
                </h3>
              </div>

              <PaisleyDivider className="my-3" />

              {/* Invitation Message */}
              <p className="font-serif italic text-stone-700 text-sm sm:text-base leading-relaxed my-2">
                Together with their families,
                <br />
                we invite you to celebrate
                <br />
                their wedding.
              </p>

              <div className="my-3 py-1.5 px-4 rounded-xl bg-wedding-maroon/10 border border-wedding-maroon/20 inline-block text-xs font-serif font-bold text-wedding-maroon">
                4 December 2026 • Danapur, Patna
              </div>

              {/* Enter Celebration Button */}
              <div className="mt-5">
                <button
                  type="button"
                  onClick={handleEnterCelebration}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-wedding-maroon via-wedding-burgundy to-wedding-maroon text-wedding-gold font-display text-sm tracking-wider uppercase font-bold shadow-lg hover:shadow-gold-md hover:scale-105 active:scale-95 transition-all duration-300 border border-wedding-gold cursor-pointer"
                >
                  <MailOpen className="w-4 h-4 text-wedding-gold" />
                  <span>Enter Celebration (प्रवेश करें)</span>
                  <Sparkles className="w-4 h-4 text-wedding-gold" />
                </button>
              </div>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-stone-500 font-serif">
                <Music className="w-3.5 h-3.5 text-wedding-gold" />
                <span>Wedding Shehnai music is active</span>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
