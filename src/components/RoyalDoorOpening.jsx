import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { startMusic } from '../utils/audioManager';
import { SacredGaneshaIllustration, FloralToran, DiyaIllustration } from './illustrations/TraditionalArtwork';
import { Sparkles } from 'lucide-react';

export default function RoyalDoorOpening({ onOpened }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const sealRef = useRef(null);
  const lightGlowRef = useRef(null);
  const archRef = useRef(null);

  const handleOpenDoors = () => {
    if (isOpen) return;
    setIsOpen(true);

    // Start celebratory wedding music upon door opening
    startMusic();

    const tl = gsap.timeline({
      onComplete: () => {
        if (onOpened) onOpened();
      },
    });

    // 1. Seal pulses and bursts with radiant golden light
    tl.to(sealRef.current, {
      scale: 1.25,
      opacity: 0,
      duration: 0.65,
      ease: 'back.in(1.8)',
    })
    // 2. Bright warm golden sunlight burst glows from behind doors
    .to(
      lightGlowRef.current,
      {
        opacity: 1,
        scale: 2.2,
        duration: 0.85,
        ease: 'power2.out',
      },
      '-=0.45'
    )
    // 3. Palace Doors swing open in dramatic 3D perspective
    .to(
      leftDoorRef.current,
      {
        rotateY: -115,
        opacity: 0.05,
        duration: 1.6,
        ease: 'power3.inOut',
      },
      '-=0.55'
    )
    .to(
      rightDoorRef.current,
      {
        rotateY: 115,
        opacity: 0.05,
        duration: 1.6,
        ease: 'power3.inOut',
      },
      '<=' // Synchronous with left door
    )
    // 4. Header arch gracefully lifts away
    .to(
      archRef.current,
      {
        opacity: 0,
        y: -40,
        duration: 0.7,
        ease: 'power2.in',
      },
      '-=0.8'
    )
    .to(
      containerRef.current,
      {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.5,
        ease: 'power1.out',
      },
      '-=0.2'
    );
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#120104] select-none [perspective:1400px]"
    >
      {/* Background Golden Sunlight Burst (revealed as doors open) */}
      <div
        ref={lightGlowRef}
        className="absolute inset-0 pointer-events-none opacity-0 flex items-center justify-center z-0"
      >
        <div className="w-[550px] h-[550px] rounded-full bg-gradient-to-r from-amber-400/50 via-yellow-200/60 to-amber-500/50 blur-[90px]" />
      </div>

      {/* Top Floating Floral Toran & Royal Header Banner */}
      <div
        ref={archRef}
        className="absolute top-0 left-0 right-0 z-30 flex flex-col items-center pointer-events-none"
      >
        {/* Marigold and Mango Leaves Toran */}
        <div className="w-full max-w-md mx-auto pt-1 opacity-90 drop-shadow-md">
          <FloralToran className="w-full" />
        </div>

        {/* Temple Arch Plaque with Glowing Diyas */}
        <div className="px-5 py-1.5 -mt-1 rounded-full bg-gradient-to-r from-[#2A030C]/95 via-[#4A0815]/95 to-[#2A030C]/95 border border-[#D4AF37]/70 shadow-[0_4px_20px_rgba(0,0,0,0.8)] flex items-center gap-2.5 backdrop-blur-md">
          <DiyaIllustration className="w-5 h-5 drop-shadow" />
          <span className="font-hindi text-amber-200 text-xs sm:text-sm font-bold tracking-widest drop-shadow-sm">
            ॥ श्री गणेशाय नमः ॥
          </span>
          <DiyaIllustration className="w-5 h-5 transform -scale-x-100 drop-shadow" />
        </div>
      </div>

      {/* Left Palace Door */}
      <div
        ref={leftDoorRef}
        className="w-1/2 h-full absolute left-0 top-0 z-10 [transform-origin:left_center] [transform-style:preserve-3d] shadow-[20px_0_40px_rgba(0,0,0,0.95)] border-r-2 border-[#D4AF37]/60 bg-gradient-to-br from-[#200207] via-[#350611] to-[#160105] flex flex-col justify-between p-2.5 sm:p-4 overflow-hidden"
      >
        {/* Subtle Silk Weave & Golden Star Fleck Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Outer Carved Palace Door Frame */}
        <div className="relative w-full h-full rounded-l-2xl border-2 border-[#D4AF37]/50 p-2 sm:p-3 flex flex-col justify-between shadow-inner bg-black/20">
          
          {/* Top Panel: Sacred Golden Mandala & Filigree */}
          <div className="h-[28%] rounded-xl border border-amber-500/35 bg-[#25030B]/90 p-2 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:10px_10px]" />
            <svg viewBox="0 0 80 80" className="w-14 h-14 text-amber-400/70 animate-spin-very-slow" fill="none">
              <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="40" cy="40" r="22" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="40" cy="40" r="10" fill="#D4AF37" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
              <path d="M40 8 L44 32 L68 40 L44 48 L40 72 L36 48 L12 40 L36 32 Z" fill="currentColor" fillOpacity="0.4" />
              <circle cx="40" cy="40" r="4" fill="#FFF3B0" />
            </svg>
            <span className="text-[9px] font-serif uppercase tracking-[0.25em] text-amber-300/80 mt-1">
              मांगलिक
            </span>
          </div>

          {/* Left Door Handle: Heavy Royal Brass Ring Knocker */}
          <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 flex flex-col items-center z-20">
            {/* Ornate Brass Backplate */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-amber-800 via-amber-400 to-yellow-100 border-2 border-amber-950 shadow-[0_0_15px_rgba(212,175,55,0.7)] flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-[#32040E] border-2 border-amber-300 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_#FFD700]" />
              </div>
            </div>
            {/* Hanging Heavy Ring */}
            <div className="w-8 h-12 -mt-3 rounded-b-full border-[5px] border-amber-400 bg-gradient-to-b from-transparent to-amber-900/40 shadow-2xl flex items-end justify-center pb-1">
              <span className="w-2 h-2 rounded-full bg-amber-300" />
            </div>
          </div>

          {/* Bottom Panel: Auspicious "शुभ" (Shubh) with Lotus Petal Frame */}
          <div className="h-[28%] rounded-xl border border-amber-500/35 bg-[#25030B]/90 p-2 flex flex-col items-center justify-center relative shadow-inner">
            <div className="w-12 h-12 rounded-full border border-amber-400/50 flex items-center justify-center bg-amber-500/10 shadow-[0_0_12px_rgba(212,175,55,0.3)]">
              <span className="font-hindi text-xl sm:text-2xl text-amber-300 font-extrabold drop-shadow">
                शुभ
              </span>
            </div>
            <span className="text-[9px] font-serif uppercase tracking-widest text-amber-400/70 mt-1">
              Auspicious
            </span>
          </div>

          {/* Studded Brass Bolts on Left Door edge */}
          <div className="absolute top-4 bottom-4 left-1.5 flex flex-col justify-between pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-gradient-to-tr from-amber-700 via-amber-300 to-yellow-100 border border-amber-900 shadow-[0_0_3px_#FFD700]" />
            ))}
          </div>
        </div>
      </div>

      {/* Right Palace Door */}
      <div
        ref={rightDoorRef}
        className="w-1/2 h-full absolute right-0 top-0 z-10 [transform-origin:right_center] [transform-style:preserve-3d] shadow-[-20px_0_40px_rgba(0,0,0,0.95)] border-l-2 border-[#D4AF37]/60 bg-gradient-to-bl from-[#200207] via-[#350611] to-[#160105] flex flex-col justify-between p-2.5 sm:p-4 overflow-hidden"
      >
        {/* Subtle Silk Weave & Golden Star Fleck Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Outer Carved Palace Door Frame */}
        <div className="relative w-full h-full rounded-r-2xl border-2 border-[#D4AF37]/50 p-2 sm:p-3 flex flex-col justify-between shadow-inner bg-black/20">
          
          {/* Top Panel: Sacred Golden Mandala & Filigree */}
          <div className="h-[28%] rounded-xl border border-amber-500/35 bg-[#25030B]/90 p-2 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:10px_10px]" />
            <svg viewBox="0 0 80 80" className="w-14 h-14 text-amber-400/70 animate-spin-very-slow" fill="none">
              <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="40" cy="40" r="22" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="40" cy="40" r="10" fill="#D4AF37" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
              <path d="M40 8 L44 32 L68 40 L44 48 L40 72 L36 48 L12 40 L36 32 Z" fill="currentColor" fillOpacity="0.4" />
              <circle cx="40" cy="40" r="4" fill="#FFF3B0" />
            </svg>
            <span className="text-[9px] font-serif uppercase tracking-[0.25em] text-amber-300/80 mt-1">
              कल्याणम
            </span>
          </div>

          {/* Right Door Handle: Matching Heavy Royal Brass Ring Knocker */}
          <div className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 flex flex-col items-center z-20">
            {/* Ornate Brass Backplate */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-amber-800 via-amber-400 to-yellow-100 border-2 border-amber-950 shadow-[0_0_15px_rgba(212,175,55,0.7)] flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-[#32040E] border-2 border-amber-300 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_#FFD700]" />
              </div>
            </div>
            {/* Hanging Heavy Ring */}
            <div className="w-8 h-12 -mt-3 rounded-b-full border-[5px] border-amber-400 bg-gradient-to-b from-transparent to-amber-900/40 shadow-2xl flex items-end justify-center pb-1">
              <span className="w-2 h-2 rounded-full bg-amber-300" />
            </div>
          </div>

          {/* Bottom Panel: Auspicious "लाभ" (Labh) with Lotus Petal Frame */}
          <div className="h-[28%] rounded-xl border border-amber-500/35 bg-[#25030B]/90 p-2 flex flex-col items-center justify-center relative shadow-inner">
            <div className="w-12 h-12 rounded-full border border-amber-400/50 flex items-center justify-center bg-amber-500/10 shadow-[0_0_12px_rgba(212,175,55,0.3)]">
              <span className="font-hindi text-xl sm:text-2xl text-amber-300 font-extrabold drop-shadow">
                लाभ
              </span>
            </div>
            <span className="text-[9px] font-serif uppercase tracking-widest text-amber-400/70 mt-1">
              Prosperity
            </span>
          </div>

          {/* Studded Brass Bolts on Right Door edge */}
          <div className="absolute top-4 bottom-4 right-1.5 flex flex-col justify-between pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-gradient-to-tr from-amber-700 via-amber-300 to-yellow-100 border border-amber-900 shadow-[0_0_3px_#FFD700]" />
            ))}
          </div>
        </div>
      </div>

      {/* Central Royal Medallion & "OPEN INVITATION" Entrance Crest */}
      <div
        ref={sealRef}
        className="relative z-30 flex flex-col items-center text-center p-3 max-w-[310px] sm:max-w-xs"
      >
        {/* Celestial Rotating Golden Sunburst Halo */}
        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-4 rounded-full border border-dashed border-amber-400/40 animate-celestial-spin pointer-events-none" />
          <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-400/30 to-amber-500/20 blur-xl animate-pulse" />

          {/* Ornate Gold Royal Medallion */}
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1.5 bg-gradient-to-tr from-amber-700 via-yellow-300 to-amber-600 shadow-[0_0_40px_rgba(212,175,55,0.7)] flex items-center justify-center">
            {/* Scalloped Gold Rope Border */}
            <div className="w-full h-full rounded-full bg-gradient-to-b from-[#380410] to-[#200207] border-2 border-amber-300/90 flex flex-col items-center justify-center p-2 shadow-inner relative overflow-hidden">
              
              {/* Sacred Ganesha Artwork */}
              <div className="transform scale-75 -my-2 drop-shadow-[0_2px_8px_rgba(255,215,0,0.4)]">
                <SacredGaneshaIllustration className="w-20 h-20" />
              </div>

              {/* Shubh Vivah Calligraphy */}
              <span className="font-hindi text-xs sm:text-sm font-extrabold text-amber-200 tracking-wider drop-shadow -mt-1">
                शुभ विवाह
              </span>
              <span className="text-[9px] font-serif text-amber-300/90 tracking-[0.2em] uppercase font-semibold">
                Royal Invitation
              </span>
            </div>
          </div>
        </div>

        {/* Couple Names Golden Plaque */}
        <div className="mt-3.5 mb-3 bg-[#1F0208]/85 backdrop-blur-md px-5 py-2 rounded-full border border-amber-400/60 shadow-[0_4px_15px_rgba(0,0,0,0.7)] flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <p className="font-serif text-xs sm:text-sm font-bold text-amber-100 tracking-wide">
            Tanish Raj <span className="font-script text-amber-400 text-base">&amp;</span> Prachi Arya
          </p>
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
        </div>

        {/* Grand "OPEN INVITATION" Royal Button */}
        <button
          onClick={handleOpenDoors}
          className="group relative overflow-hidden px-7 sm:px-9 py-3 rounded-full bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 text-[#2E030C] font-serif text-xs sm:text-sm uppercase font-extrabold tracking-[0.22em] shadow-[0_4px_30px_rgba(212,175,55,0.8)] hover:shadow-[0_6px_40px_rgba(212,175,55,1)] transform hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/90"
        >
          {/* Shimmer Light Sweep Effect */}
          <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none animate-royal-shimmer" />

          <span className="relative z-10 flex items-center justify-center gap-2.5 drop-shadow-sm">
            <DiyaIllustration className="w-4 h-4" />
            <span>OPEN INVITATION</span>
            <DiyaIllustration className="w-4 h-4 transform -scale-x-100" />
          </span>
        </button>

        {/* Touch / Click Invitation Prompt */}
        <p className="font-hindi text-xs text-amber-200/90 mt-2.5 font-medium tracking-wide drop-shadow flex items-center justify-center gap-1.5 animate-pulse">
          <span>✨</span>
          <span>(दरवाज़ा खोलने के लिए यहाँ स्पर्श करें)</span>
          <span>✨</span>
        </p>
      </div>
    </div>
  );
}
