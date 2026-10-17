import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import { startMusic } from '../utils/audioManager';
import { SacredGaneshaIllustration, FloralToran, DiyaIllustration } from './illustrations/TraditionalArtwork';

export default function RoyalDoorOpening({ onOpened }) {
  const [isOpen, setIsOpen] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const containerRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const sealRef = useRef(null);
  const lightGlowRef = useRef(null);
  const archRef = useRef(null);
  const timerRef = useRef(null);

  // Subtle 3D tilt on mouse / cursor move
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

  // Grand Palace Door Opening sequence
  const handleOpenDoors = () => {
    if (isOpen) return;
    setIsOpen(true);

    // Clear 5-second auto-open timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    // 1. Start celebratory wedding Shehnai music
    startMusic();

    // 2. Celebratory flower petal & gold confetti blast
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
          particleCount: 75,
          spread: 95,
          origin: { y: 0.45 },
          colors: ['#D4AF37', '#F59E0B', '#990000', '#FFFFFF', '#FFD700'],
        });
      }, 320);
    } catch (e) {}

    const tl = gsap.timeline({
      onComplete: () => {
        if (onOpened) onOpened();
      },
    });

    // Step A: Lord Ganesha sacred seal pulses and dissolves into divine golden light
    tl.to(sealRef.current, {
      scale: 1.25,
      opacity: 0,
      duration: 0.22,
      ease: 'power2.in',
    })
    // Step B: Brilliant warm sunlight bursts from behind the gates
    .to(
      lightGlowRef.current,
      {
        opacity: 1,
        scale: 2.2,
        duration: 0.32,
        ease: 'power2.out',
      },
      '-=0.12'
    )
    // Step C: Massive 3D Royal Palace Gates swing wide open
    .to(
      leftDoorRef.current,
      {
        rotateY: -115,
        opacity: 0.05,
        duration: 0.58,
        ease: 'power3.out',
      },
      '-=0.15'
    )
    .to(
      rightDoorRef.current,
      {
        rotateY: 115,
        opacity: 0.05,
        duration: 0.58,
        ease: 'power3.out',
      },
      '<='
    )
    // Step D: Header toran lifts away
    .to(
      archRef.current,
      {
        opacity: 0,
        y: -35,
        duration: 0.28,
        ease: 'power2.in',
      },
      '-=0.35'
    )
    // Step E: Container dissolves smoothly to reveal album slide
    .to(
      containerRef.current,
      {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.2,
        ease: 'power1.out',
      },
      '-=0.1'
    );
  };

  // Automatic Fast Door Opening after 1.2 seconds if not tapped by user
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      handleOpenDoors();
    }, 1200);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onClick={handleOpenDoors}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#0D0103] select-none [perspective:1400px] cursor-pointer touch-manipulation"
      title="Tap anywhere to open palace doors"
    >
      {/* Background Golden Sunlight Burst (revealed as doors swing open) */}
      <div
        ref={lightGlowRef}
        className="absolute inset-0 pointer-events-none opacity-0 flex items-center justify-center z-0"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-amber-400/60 via-yellow-200/70 to-amber-500/60 blur-[100px]" />
      </div>

      {/* Floating Golden Dust Particles & Fireflies */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        {[
          { top: '15%', left: '12%', size: 'w-2 h-2', dur: '4s' },
          { top: '25%', left: '86%', size: 'w-2.5 h-2.5', dur: '5s' },
          { top: '68%', left: '10%', size: 'w-2 h-2', dur: '4.5s' },
          { top: '78%', left: '88%', size: 'w-2.5 h-2.5', dur: '6s' },
          { top: '42%', left: '16%', size: 'w-1.5 h-1.5', dur: '3.5s' },
          { top: '56%', left: '82%', size: 'w-2 h-2', dur: '4s' },
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

      {/* Main Royal Gate Container */}
      <div
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transition: 'transform 0.2s ease-out',
        }}
        className="relative w-full h-full sm:h-[96dvh] sm:max-w-[440px] md:max-w-[460px] sm:rounded-3xl shadow-[0_0_95px_rgba(0,0,0,0.98)] overflow-hidden flex flex-col justify-between bg-[#190206] border-0 sm:border-[3px] sm:border-[#D4AF37]/75"
      >
        {/* Subtle Silk Weave & Golden Lattice Texture on Gate Frame */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#D4AF37_1.2px,transparent_1.2px)] [background-size:20px_20px]" />

        {/* Top Auspicious Floral Toran with Hanging Bells */}
        <div
          ref={archRef}
          className="absolute top-0 left-0 right-0 z-30 flex flex-col items-center pointer-events-none"
        >
          <div className="w-full max-w-sm mx-auto pt-1.5 opacity-95 drop-shadow-md">
            <FloralToran className="w-full" />
          </div>
        </div>

        {/* ========================================================
            3D SPLIT ROYAL HAVELI WOODEN DOORS (LEFT & RIGHT)
            ======================================================== */}
        <div className="absolute inset-0 z-10 flex [transform-style:preserve-3d]">
          {/* Left Palace Door */}
          <div
            ref={leftDoorRef}
            className="w-1/2 h-full [transform-origin:left_center] [transform-style:preserve-3d] shadow-[22px_0_45px_rgba(0,0,0,0.95)] border-r-2 border-[#D4AF37]/80 bg-gradient-to-br from-[#1E0207] via-[#350611] to-[#140104] flex flex-col justify-between p-3 sm:p-5 relative overflow-hidden"
          >
            {/* Outer Carved Wood & Brass Framing */}
            <div className="w-full h-full rounded-l-2xl border-2 border-[#D4AF37]/50 p-2 sm:p-3 flex flex-col justify-between relative bg-black/30 shadow-inner">
              
              {/* Corner Traditional Flourishes */}
              <div className="absolute top-2 left-2 text-amber-400/80 font-serif text-sm pointer-events-none">❧</div>
              <div className="absolute bottom-2 left-2 text-amber-400/80 font-serif text-sm pointer-events-none">❧</div>

              {/* Top Carved Mandala Panel */}
              <div className="h-[28%] rounded-xl border border-amber-500/40 bg-[#26030C]/90 p-2 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
                <svg viewBox="0 0 80 80" className="w-16 h-16 text-amber-400/75 animate-spin-very-slow" fill="none">
                  <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="40" cy="40" r="24" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="40" cy="40" r="10" fill="#D4AF37" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
                  <path d="M40 6 L44 32 L70 40 L44 48 L40 74 L36 48 L10 40 L36 32 Z" fill="currentColor" fillOpacity="0.4" />
                  <circle cx="40" cy="40" r="4" fill="#FFF3B0" />
                </svg>
              </div>

              {/* Left Antique Brass Ring Knocker */}
              <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-800 via-amber-400 to-yellow-100 border-2 border-amber-950 shadow-[0_0_20px_rgba(212,175,55,0.8)] flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-[#32040E] border-2 border-amber-300 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#FFD700]" />
                  </div>
                </div>
                <div className="w-8 h-12 -mt-3 rounded-b-full border-[5px] border-amber-400 bg-gradient-to-b from-transparent to-amber-900/40 shadow-2xl flex items-end justify-center pb-1">
                  <span className="w-2 h-2 rounded-full bg-amber-300 shadow" />
                </div>
              </div>

              {/* Bottom Carved Floral Panel */}
              <div className="h-[28%] rounded-xl border border-amber-500/40 bg-[#26030C]/90 p-2 flex flex-col items-center justify-center relative shadow-inner">
                <svg viewBox="0 0 60 60" className="w-12 h-12 text-amber-400/70" fill="currentColor">
                  <circle cx="30" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="30" cy="30" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M30 14 L34 26 L46 30 L34 34 L30 46 L26 34 L14 30 L26 26 Z" />
                </svg>
              </div>

              {/* Studded Brass Bolts on Left Door Frame */}
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
            className="w-1/2 h-full [transform-origin:right_center] [transform-style:preserve-3d] shadow-[-22px_0_45px_rgba(0,0,0,0.95)] border-l-2 border-[#D4AF37]/80 bg-gradient-to-bl from-[#1E0207] via-[#350611] to-[#140104] flex flex-col justify-between p-3 sm:p-5 relative overflow-hidden"
          >
            {/* Outer Carved Wood & Brass Framing */}
            <div className="w-full h-full rounded-r-2xl border-2 border-[#D4AF37]/50 p-2 sm:p-3 flex flex-col justify-between relative bg-black/30 shadow-inner">
              
              {/* Corner Traditional Flourishes */}
              <div className="absolute top-2 right-2 text-amber-400/80 font-serif text-sm transform scale-x-[-1] pointer-events-none">❧</div>
              <div className="absolute bottom-2 right-2 text-amber-400/80 font-serif text-sm transform scale-x-[-1] pointer-events-none">❧</div>

              {/* Top Carved Mandala Panel */}
              <div className="h-[28%] rounded-xl border border-amber-500/40 bg-[#26030C]/90 p-2 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
                <svg viewBox="0 0 80 80" className="w-16 h-16 text-amber-400/75 animate-spin-very-slow" fill="none">
                  <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="40" cy="40" r="24" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="40" cy="40" r="10" fill="#D4AF37" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
                  <path d="M40 6 L44 32 L70 40 L44 48 L40 74 L36 48 L10 40 L36 32 Z" fill="currentColor" fillOpacity="0.4" />
                  <circle cx="40" cy="40" r="4" fill="#FFF3B0" />
                </svg>
              </div>

              {/* Right Antique Brass Ring Knocker */}
              <div className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-800 via-amber-400 to-yellow-100 border-2 border-amber-950 shadow-[0_0_20px_rgba(212,175,55,0.8)] flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-[#32040E] border-2 border-amber-300 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#FFD700]" />
                  </div>
                </div>
                <div className="w-8 h-12 -mt-3 rounded-b-full border-[5px] border-amber-400 bg-gradient-to-b from-transparent to-amber-900/40 shadow-2xl flex items-end justify-center pb-1">
                  <span className="w-2 h-2 rounded-full bg-amber-300 shadow" />
                </div>
              </div>

              {/* Bottom Carved Floral Panel */}
              <div className="h-[28%] rounded-xl border border-amber-500/40 bg-[#26030C]/90 p-2 flex flex-col items-center justify-center relative shadow-inner">
                <svg viewBox="0 0 60 60" className="w-12 h-12 text-amber-400/70" fill="currentColor">
                  <circle cx="30" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="30" cy="30" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M30 14 L34 26 L46 30 L34 34 L30 46 L26 34 L14 30 L26 26 Z" />
                </svg>
              </div>

              {/* Studded Brass Bolts on Right Door Frame */}
              <div className="absolute top-4 bottom-4 right-1 flex flex-col justify-between pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-amber-700 via-amber-300 to-yellow-100 border border-amber-950 shadow-[0_0_4px_#FFD700]" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            CENTER: ONLY ENGRAVED SACRED LORD GANESHA MEDALLION
            (NO OTHER TEXT, NO WEDDING DETAILS, NO BUTTONS)
            ======================================================== */}
        <div
          ref={sealRef}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Celestial Rotating Halo Rings */}
          <div className="relative flex items-center justify-center">
            {/* Outer Celestial Radiance */}
            <div className="absolute -inset-8 rounded-full border border-dashed border-amber-400/45 animate-celestial-spin" />
            <div className="absolute -inset-12 rounded-full bg-gradient-to-r from-amber-500/30 via-yellow-400/45 to-amber-500/30 blur-2xl animate-pulse" />

            {/* Heavy Ornate Gold Medallion with Intricate Braided Border */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full p-2 bg-gradient-to-tr from-amber-700 via-yellow-300 to-amber-600 shadow-[0_0_60px_rgba(212,175,55,0.95)] flex items-center justify-center">
              {/* Inner Sacred Chamber with ONLY Handcrafted Lord Ganesha */}
              <div className="w-full h-full rounded-full bg-gradient-to-b from-[#380410] to-[#1A0105] border-2 border-amber-300/90 flex flex-col items-center justify-center p-3 shadow-inner relative overflow-hidden">
                
                {/* Radiant Backdrop Behind Ganesha */}
                <div className="absolute inset-0 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:12px_12px] opacity-20 pointer-events-none" />

                {/* The Sacred Engraved Lord Ganesha */}
                <div className="transform scale-95 sm:scale-105 drop-shadow-[0_2px_15px_rgba(255,215,0,0.7)]">
                  <SacredGaneshaIllustration className="w-24 h-24 sm:w-28 sm:h-28" />
                </div>
              </div>
            </div>
          </div>

          {/* Fast Responsive Tap Prompt */}
          <div className="mt-8 flex flex-col items-center pointer-events-none">
            <div className="px-5 py-2 rounded-full bg-black/75 backdrop-blur-md border border-amber-400/60 text-amber-200 text-xs sm:text-sm font-serif shadow-[0_4px_25px_rgba(212,175,55,0.4)] flex items-center gap-2 animate-pulse">
              <span className="text-amber-400">✨</span>
              <span className="font-semibold">Tap to Open</span>
              <span className="text-amber-400/60">•</span>
              <span className="font-hindi text-amber-300 font-bold">कार्ड खोलें</span>
              <span className="text-amber-400">✨</span>
            </div>

            {/* Quick 1.2s Progress Bar */}
            <div className="w-36 h-1 rounded-full bg-black/50 border border-amber-400/30 overflow-hidden mt-2">
              <div
                className="h-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 shadow-[0_0_6px_#FFD700]"
                style={{
                  animation: 'autoSlideProgress 1.2s linear forwards',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
