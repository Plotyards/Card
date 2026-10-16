import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import { startMusic } from '../utils/audioManager';
import { SacredGaneshaIllustration, FloralToran, DiyaIllustration } from './illustrations/TraditionalArtwork';
import { Sparkles, Volume2, Calendar, MapPin, Heart } from 'lucide-react';

export default function RoyalDoorOpening({ onOpened }) {
  const [isOpen, setIsOpen] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const containerRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const sealRef = useRef(null);
  const lightGlowRef = useRef(null);
  const ribbonRef = useRef(null);
  const cardBodyRef = useRef(null);

  // Subtle 3D tilt on mouse / touch movement
  const handleMouseMove = (e) => {
    if (isOpen || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 6, y: -y * 6 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Grand Opening sequence
  const handleOpenDoors = () => {
    if (isOpen) return;
    setIsOpen(true);

    // 1. Start festive wedding shehnai & sitar music
    startMusic();

    // 2. Spectacular celebratory confetti blast (Gold foil, Marigold orange, Crimson rose petals)
    try {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 60,
        origin: { x: 0.15, y: 0.6 },
        colors: ['#FFD700', '#D4AF37', '#FFA500', '#800020', '#FFF3B0'],
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 60,
        origin: { x: 0.85, y: 0.6 },
        colors: ['#FFD700', '#D4AF37', '#FFA500', '#800020', '#FFF3B0'],
      });
      setTimeout(() => {
        confetti({
          particleCount: 80,
          spread: 100,
          origin: { y: 0.45 },
          colors: ['#D4AF37', '#F59E0B', '#990000', '#FFFFFF', '#FFD700'],
        });
      }, 350);
    } catch (e) {}

    const tl = gsap.timeline({
      onComplete: () => {
        if (onOpened) onOpened();
      },
    });

    // Step A: Royal Seal pulses, unlocks and dissolves in radiant light
    tl.to(sealRef.current, {
      scale: 1.3,
      opacity: 0,
      duration: 0.6,
      ease: 'back.in(2)',
    })
    // Step B: Ribbon splits
    .to(
      ribbonRef.current,
      {
        opacity: 0,
        scaleY: 0,
        duration: 0.5,
        ease: 'power2.in',
      },
      '-=0.4'
    )
    // Step C: Brilliant Golden Sunlight bursts from behind the gates
    .to(
      lightGlowRef.current,
      {
        opacity: 1,
        scale: 2.5,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.4'
    )
    // Step D: Massive 3D Royal Velvet Gates swing open like a royal palace door
    .to(
      leftDoorRef.current,
      {
        rotateY: -115,
        opacity: 0.05,
        duration: 1.6,
        ease: 'power3.inOut',
      },
      '-=0.5'
    )
    .to(
      rightDoorRef.current,
      {
        rotateY: 115,
        opacity: 0.05,
        duration: 1.6,
        ease: 'power3.inOut',
      },
      '<='
    )
    // Step E: Container dissolves into the invitation album
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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#0F0104] select-none [perspective:1400px]"
    >
      {/* Background Golden Sunlight Burst (revealed as doors swing open) */}
      <div
        ref={lightGlowRef}
        className="absolute inset-0 pointer-events-none opacity-0 flex items-center justify-center z-0"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-amber-400/60 via-yellow-200/70 to-amber-500/60 blur-[100px]" />
      </div>

      {/* Floating Luminous Sparkles & Star Flecks */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        {[
          { top: '12%', left: '10%', size: 'w-2 h-2', dur: '4s' },
          { top: '22%', left: '88%', size: 'w-2.5 h-2.5', dur: '5s' },
          { top: '70%', left: '8%', size: 'w-2 h-2', dur: '4.5s' },
          { top: '80%', left: '86%', size: 'w-3 h-3', dur: '6s' },
          { top: '45%', left: '14%', size: 'w-1.5 h-1.5', dur: '3.5s' },
          { top: '55%', left: '84%', size: 'w-2 h-2', dur: '4s' },
        ].map((sparkle, i) => (
          <div
            key={i}
            className={`absolute ${sparkle.size} rounded-full bg-gradient-to-tr from-yellow-300 to-amber-100 shadow-[0_0_12px_#FFD700] animate-pulse`}
            style={{
              top: sparkle.top,
              left: sparkle.left,
              animationDuration: sparkle.dur,
            }}
          />
        ))}
      </div>

      {/* Main Luxury Velvet Card Box Container (शाही राजसी निमंत्रण पत्र) */}
      <div
        ref={cardBodyRef}
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transition: 'transform 0.2s ease-out',
        }}
        className="relative w-full h-full sm:h-[96dvh] sm:max-w-[440px] md:max-w-[460px] sm:rounded-3xl shadow-[0_0_90px_rgba(0,0,0,0.98)] overflow-hidden flex flex-col justify-between bg-[#1B0207] border-0 sm:border-[3px] sm:border-[#D4AF37]/70"
      >
        {/* Subtle Silk Weave & Golden Lattice Texture */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#D4AF37_1.2px,transparent_1.2px)] [background-size:20px_20px]" />

        {/* ========================================================
            3D SPLIT ROYAL VELVET DOORS (LEFT & RIGHT)
            ======================================================== */}
        <div className="absolute inset-0 z-10 flex [transform-style:preserve-3d]">
          {/* Left Palace Door */}
          <div
            ref={leftDoorRef}
            className="w-1/2 h-full [transform-origin:left_center] [transform-style:preserve-3d] shadow-[20px_0_40px_rgba(0,0,0,0.95)] border-r-2 border-[#D4AF37]/80 bg-gradient-to-br from-[#220208] via-[#3B0714] to-[#180105] flex flex-col justify-between p-3 sm:p-5 relative overflow-hidden"
          >
            {/* Outer Gold Foil Framing */}
            <div className="w-full h-full rounded-l-2xl border-2 border-[#D4AF37]/50 p-2 sm:p-3 flex flex-col justify-between relative bg-black/25 shadow-inner">
              
              {/* Top Corner Ornament */}
              <div className="absolute top-2 left-2 text-amber-400/80 font-serif text-sm">❧</div>
              <div className="absolute bottom-2 left-2 text-amber-400/80 font-serif text-sm">❧</div>

              {/* Top Carved Mandala Panel */}
              <div className="h-[28%] rounded-xl border border-amber-500/40 bg-[#28040E]/90 p-2 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
                <svg viewBox="0 0 80 80" className="w-14 h-14 text-amber-400/80 animate-spin-very-slow" fill="none">
                  <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="40" cy="40" r="24" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="40" cy="40" r="10" fill="#D4AF37" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
                  <path d="M40 6 L44 32 L70 40 L44 48 L40 74 L36 48 L10 40 L36 32 Z" fill="currentColor" fillOpacity="0.4" />
                  <circle cx="40" cy="40" r="4" fill="#FFF3B0" />
                </svg>
                <span className="text-[9px] font-serif uppercase tracking-[0.25em] text-amber-300/85 mt-1 font-bold">
                  मांगलिक
                </span>
              </div>

              {/* Left Brass Ring Knocker */}
              <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-800 via-amber-400 to-yellow-100 border-2 border-amber-950 shadow-[0_0_18px_rgba(212,175,55,0.8)] flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-[#35050F] border-2 border-amber-300 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#FFD700]" />
                  </div>
                </div>
                <div className="w-8 h-12 -mt-3 rounded-b-full border-[5px] border-amber-400 bg-gradient-to-b from-transparent to-amber-900/40 shadow-2xl flex items-end justify-center pb-1">
                  <span className="w-2 h-2 rounded-full bg-amber-300 shadow" />
                </div>
              </div>

              {/* Bottom "शुभ" Panel */}
              <div className="h-[28%] rounded-xl border border-amber-500/40 bg-[#28040E]/90 p-2 flex flex-col items-center justify-center relative shadow-inner">
                <div className="w-12 h-12 rounded-full border border-amber-400/60 flex items-center justify-center bg-amber-500/15 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                  <span className="font-hindi text-xl sm:text-2xl text-amber-300 font-extrabold drop-shadow">
                    शुभ
                  </span>
                </div>
                <span className="text-[9px] font-serif uppercase tracking-widest text-amber-400/80 mt-1 font-bold">
                  Auspicious
                </span>
              </div>

              {/* Studded Brass Nails on Left Door */}
              <div className="absolute top-4 bottom-4 left-1 flex flex-col justify-between pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-amber-700 via-amber-300 to-yellow-100 border border-amber-950 shadow-[0_0_4px_#FFD700]" />
                ))}
              </div>
            </div>
          </div>

          {/* Right Palace Door */}
          <div
            ref={rightDoorRef}
            className="w-1/2 h-full [transform-origin:right_center] [transform-style:preserve-3d] shadow-[-20px_0_40px_rgba(0,0,0,0.95)] border-l-2 border-[#D4AF37]/80 bg-gradient-to-bl from-[#220208] via-[#3B0714] to-[#180105] flex flex-col justify-between p-3 sm:p-5 relative overflow-hidden"
          >
            {/* Outer Gold Foil Framing */}
            <div className="w-full h-full rounded-r-2xl border-2 border-[#D4AF37]/50 p-2 sm:p-3 flex flex-col justify-between relative bg-black/25 shadow-inner">
              
              {/* Top Corner Ornament */}
              <div className="absolute top-2 right-2 text-amber-400/80 font-serif text-sm transform scale-x-[-1]">❧</div>
              <div className="absolute bottom-2 right-2 text-amber-400/80 font-serif text-sm transform scale-x-[-1]">❧</div>

              {/* Top Carved Mandala Panel */}
              <div className="h-[28%] rounded-xl border border-amber-500/40 bg-[#28040E]/90 p-2 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
                <svg viewBox="0 0 80 80" className="w-14 h-14 text-amber-400/80 animate-spin-very-slow" fill="none">
                  <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="40" cy="40" r="24" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="40" cy="40" r="10" fill="#D4AF37" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
                  <path d="M40 6 L44 32 L70 40 L44 48 L40 74 L36 48 L10 40 L36 32 Z" fill="currentColor" fillOpacity="0.4" />
                  <circle cx="40" cy="40" r="4" fill="#FFF3B0" />
                </svg>
                <span className="text-[9px] font-serif uppercase tracking-[0.25em] text-amber-300/85 mt-1 font-bold">
                  कल्याणम
                </span>
              </div>

              {/* Right Brass Ring Knocker */}
              <div className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-800 via-amber-400 to-yellow-100 border-2 border-amber-950 shadow-[0_0_18px_rgba(212,175,55,0.8)] flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-[#35050F] border-2 border-amber-300 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#FFD700]" />
                  </div>
                </div>
                <div className="w-8 h-12 -mt-3 rounded-b-full border-[5px] border-amber-400 bg-gradient-to-b from-transparent to-amber-900/40 shadow-2xl flex items-end justify-center pb-1">
                  <span className="w-2 h-2 rounded-full bg-amber-300 shadow" />
                </div>
              </div>

              {/* Bottom "लाभ" Panel */}
              <div className="h-[28%] rounded-xl border border-amber-500/40 bg-[#28040E]/90 p-2 flex flex-col items-center justify-center relative shadow-inner">
                <div className="w-12 h-12 rounded-full border border-amber-400/60 flex items-center justify-center bg-amber-500/15 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                  <span className="font-hindi text-xl sm:text-2xl text-amber-300 font-extrabold drop-shadow">
                    लाभ
                  </span>
                </div>
                <span className="text-[9px] font-serif uppercase tracking-widest text-amber-400/80 mt-1 font-bold">
                  Prosperity
                </span>
              </div>

              {/* Studded Brass Nails on Right Door */}
              <div className="absolute top-4 bottom-4 right-1 flex flex-col justify-between pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-amber-700 via-amber-300 to-yellow-100 border border-amber-950 shadow-[0_0_4px_#FFD700]" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            GOLD EMBROIDERED SILK RIBBON & HANGING TORAN
            ======================================================== */}
        <div
          ref={ribbonRef}
          className="absolute inset-x-0 top-0 bottom-0 z-20 pointer-events-none flex flex-col items-center justify-between"
        >
          {/* Top Toran Plaque */}
          <div className="w-full pt-1 opacity-95">
            <FloralToran className="w-full max-w-sm mx-auto" />
            
            {/* Shloka Plaque */}
            <div className="flex justify-center -mt-2">
              <div className="px-5 py-1 rounded-full bg-gradient-to-r from-[#200207]/95 via-[#4A0815]/95 to-[#200207]/95 border border-[#D4AF37]/80 shadow-lg flex items-center gap-2">
                <DiyaIllustration className="w-4 h-4 drop-shadow animate-pulse" />
                <span className="font-hindi text-amber-200 text-xs sm:text-sm font-bold tracking-widest">
                  ॥ श्री गणेशाय नमः ॥
                </span>
                <DiyaIllustration className="w-4 h-4 transform -scale-x-100 drop-shadow animate-pulse" />
              </div>
            </div>
          </div>

          {/* Vertical Simulated Gold Braided Silk Ribbon */}
          <div className="w-3.5 sm:w-4 flex-1 bg-gradient-to-r from-[#997A15] via-[#FFD700] to-[#997A15] shadow-[0_0_15px_rgba(212,175,55,0.7)] my-1 border-x border-[#FFF0BD]/80 opacity-90" />

          {/* Bottom Auspicious Tag */}
          <div className="pb-3 text-center">
            <span className="font-hindi text-[11px] text-amber-300/80 font-medium">
              ॥ मांगलिक विवाह निमंत्रण ॥
            </span>
          </div>
        </div>

        {/* ========================================================
            CENTRAL ROYAL MEDALLION & "OPEN INVITATION" SEAL
            ======================================================== */}
        <div
          ref={sealRef}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center p-4 pointer-events-auto"
        >
          {/* Celestial Rotating Golden Halo Rays */}
          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-6 rounded-full border border-dashed border-amber-400/40 animate-celestial-spin pointer-events-none" />
            <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-amber-500/25 via-yellow-400/40 to-amber-500/25 blur-2xl animate-pulse" />

            {/* 3D Wax Seal Royal Medallion */}
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1.5 bg-gradient-to-tr from-amber-700 via-yellow-300 to-amber-600 shadow-[0_0_50px_rgba(212,175,55,0.9)] flex items-center justify-center">
              {/* Inner Medallion Chamber with Lord Ganesha */}
              <div className="w-full h-full rounded-full bg-gradient-to-b from-[#3E0513] to-[#1E0106] border-2 border-amber-300 flex flex-col items-center justify-center p-2 shadow-inner relative overflow-hidden">
                
                {/* Sacred Ganesha Artwork with Halo */}
                <div className="transform scale-[0.8] -my-2 drop-shadow-[0_2px_12px_rgba(255,215,0,0.6)]">
                  <SacredGaneshaIllustration className="w-20 h-20" />
                </div>

                {/* Shubh Vivah Calligraphy */}
                <span className="font-hindi text-xs sm:text-sm font-extrabold text-amber-200 tracking-wider drop-shadow -mt-1">
                  शुभ विवाह
                </span>
                <span className="text-[9px] font-serif text-amber-300/90 tracking-[0.2em] uppercase font-bold">
                  Royal Invitation
                </span>
              </div>
            </div>
          </div>

          {/* Couple Names Royal Golden Plaque */}
          <div className="mt-4 mb-2 bg-[#220208]/95 backdrop-blur-md px-6 py-2 rounded-full border border-amber-400/70 shadow-[0_4px_25px_rgba(0,0,0,0.85)] flex items-center gap-2.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <p className="font-serif text-xs sm:text-sm font-bold text-amber-100 tracking-wide">
              Tanish Raj <span className="font-script text-amber-400 text-base">&amp;</span> Prachi Arya
            </p>
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          </div>

          {/* Date & Venue Tag */}
          <div className="mb-3 px-3.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/35">
            <p className="font-serif text-[10px] text-amber-300/90 tracking-widest uppercase font-bold">
              04 December 2026 • Danapur, Patna
            </p>
          </div>

          {/* Grand "OPEN INVITATION" Royal Button */}
          <button
            onClick={handleOpenDoors}
            className="group relative overflow-hidden px-8 sm:px-10 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 text-[#2B030B] font-serif text-xs sm:text-sm uppercase font-extrabold tracking-[0.22em] shadow-[0_4px_35px_rgba(212,175,55,0.9)] hover:shadow-[0_6px_45px_rgba(212,175,55,1)] transform hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/95"
          >
            {/* Shimmer Light Sweep */}
            <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none animate-royal-shimmer" />

            <span className="relative z-10 flex items-center justify-center gap-2.5 drop-shadow-sm">
              <DiyaIllustration className="w-4 h-4" />
              <span>OPEN INVITATION</span>
              <DiyaIllustration className="w-4 h-4 transform -scale-x-100" />
            </span>
          </button>

          {/* Music Announcement Pill */}
          <div className="mt-2.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-amber-400/30 text-amber-300/90 text-[10px] font-serif shadow">
            <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Includes Festive Shehnai &amp; Sitar Music</span>
          </div>

          {/* Interactive Tap Prompt */}
          <p className="font-hindi text-xs text-amber-200/90 mt-2 font-medium tracking-wide drop-shadow flex items-center justify-center gap-1.5 animate-pulse">
            <span>✨</span>
            <span>(शाही निमंत्रण खोलने के लिए यहाँ स्पर्श करें)</span>
            <span>✨</span>
          </p>
        </div>
      </div>
    </div>
  );
}
