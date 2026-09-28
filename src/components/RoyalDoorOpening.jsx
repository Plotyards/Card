import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { startMusic } from '../utils/audioManager';

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

    // Start celebratory music upon door opening gesture
    startMusic();

    const tl = gsap.timeline({
      onComplete: () => {
        if (onOpened) onOpened();
      },
    });

    // 1. Seal pulses and bursts open
    tl.to(sealRef.current, {
      scale: 1.25,
      opacity: 0,
      duration: 0.6,
      ease: 'back.in(1.7)',
    })
    // 2. Bright warm golden light glows from behind the doors
    .to(
      lightGlowRef.current,
      {
        opacity: 0.9,
        scale: 1.8,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.4'
    )
    // 3. Left and Right doors swing open in grand 3D perspective
    .to(
      leftDoorRef.current,
      {
        rotateY: -110,
        opacity: 0.1,
        duration: 1.6,
        ease: 'power3.inOut',
      },
      '-=0.5'
    )
    .to(
      rightDoorRef.current,
      {
        rotateY: 110,
        opacity: 0.1,
        duration: 1.6,
        ease: 'power3.inOut',
      },
      '<=' // Run concurrently with left door
    )
    // 4. Arch and container fade out revealing the invitation scene
    .to(
      archRef.current,
      {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: 'power2.in',
      },
      '-=0.8'
    )
    .to(
      containerRef.current,
      {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.6,
        ease: 'power1.out',
      },
      '-=0.2'
    );
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#1A0308] select-none [perspective:1200px]"
    >
      {/* Background Golden Light Burst (revealed as doors swing) */}
      <div
        ref={lightGlowRef}
        className="absolute inset-0 pointer-events-none opacity-0 flex items-center justify-center"
      >
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-amber-400/40 via-yellow-200/50 to-amber-500/40 blur-3xl" />
      </div>

      {/* Royal Temple Arch Header on Top */}
      <div
        ref={archRef}
        className="absolute top-2 sm:top-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-sm px-4 flex flex-col items-center pointer-events-none drop-shadow-2xl"
      >
        <div className="px-5 py-1.5 rounded-full bg-gradient-to-r from-amber-900/90 via-[#3E0513]/95 to-amber-900/90 border border-amber-400/60 shadow-lg flex items-center gap-2">
          <span className="text-amber-400 text-xs">🪔</span>
          <span className="font-hindi text-amber-200 text-xs sm:text-sm font-bold tracking-widest">
            ॥ श्री गणेशाय नमः ॥
          </span>
          <span className="text-amber-400 text-xs">🪔</span>
        </div>
      </div>

      {/* Left Palace Door */}
      <div
        ref={leftDoorRef}
        className="w-1/2 h-full absolute left-0 top-0 z-10 [transform-origin:left_center] [transform-style:preserve-3d] shadow-[15px_0_35px_rgba(0,0,0,0.8)] border-r border-amber-500/40 bg-gradient-to-br from-[#2D060F] via-[#3E0513] to-[#1C0207] flex flex-col justify-between p-3 sm:p-6"
      >
        {/* Intricate Carved Wood Paneling & Gold Studs */}
        <div className="w-full h-full rounded-l-xl border-2 border-[#D4AF37]/50 p-2 sm:p-4 flex flex-col justify-between relative bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]">
          {/* Top Panel */}
          <div className="h-1/3 rounded-lg border border-amber-500/30 bg-[#24030B]/80 p-2 flex items-center justify-center">
            <svg viewBox="0 0 60 60" className="w-12 h-12 text-amber-400/60" fill="currentColor">
              <circle cx="30" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="30" cy="30" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M30 14 L34 26 L46 30 L34 34 L30 46 L26 34 L14 30 L26 26 Z" />
            </svg>
          </div>

          {/* Left Brass Door Ring Handle */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-700 via-amber-400 to-yellow-200 border-2 border-amber-900 shadow-xl flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-[#3E0513] border border-amber-400" />
            </div>
            {/* Hanging Ring */}
            <div className="w-6 h-9 -mt-2 rounded-b-full border-4 border-amber-400 shadow-md" />
          </div>

          {/* Bottom Panel */}
          <div className="h-1/3 rounded-lg border border-amber-500/30 bg-[#24030B]/80 p-2 flex items-center justify-center">
            <span className="font-hindi text-lg sm:text-xl text-amber-400/70 font-bold">
              शुभ
            </span>
          </div>
        </div>
      </div>

      {/* Right Palace Door */}
      <div
        ref={rightDoorRef}
        className="w-1/2 h-full absolute right-0 top-0 z-10 [transform-origin:right_center] [transform-style:preserve-3d] shadow-[-15px_0_35px_rgba(0,0,0,0.8)] border-l border-amber-500/40 bg-gradient-to-bl from-[#2D060F] via-[#3E0513] to-[#1C0207] flex flex-col justify-between p-3 sm:p-6"
      >
        {/* Intricate Carved Wood Paneling & Gold Studs */}
        <div className="w-full h-full rounded-r-xl border-2 border-[#D4AF37]/50 p-2 sm:p-4 flex flex-col justify-between relative bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]">
          {/* Top Panel */}
          <div className="h-1/3 rounded-lg border border-amber-500/30 bg-[#24030B]/80 p-2 flex items-center justify-center">
            <svg viewBox="0 0 60 60" className="w-12 h-12 text-amber-400/60" fill="currentColor">
              <circle cx="30" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="30" cy="30" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M30 14 L34 26 L46 30 L34 34 L30 46 L26 34 L14 30 L26 26 Z" />
            </svg>
          </div>

          {/* Right Brass Door Ring Handle */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-700 via-amber-400 to-yellow-200 border-2 border-amber-900 shadow-xl flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-[#3E0513] border border-amber-400" />
            </div>
            {/* Hanging Ring */}
            <div className="w-6 h-9 -mt-2 rounded-b-full border-4 border-amber-400 shadow-md" />
          </div>

          {/* Bottom Panel */}
          <div className="h-1/3 rounded-lg border border-amber-500/30 bg-[#24030B]/80 p-2 flex items-center justify-center">
            <span className="font-hindi text-lg sm:text-xl text-amber-400/70 font-bold">
              लाभ
            </span>
          </div>
        </div>
      </div>

      {/* Central Royal Medallion & "OPEN INVITATION" Button */}
      <div
        ref={sealRef}
        className="relative z-30 flex flex-col items-center text-center p-4 max-w-[280px] sm:max-w-xs"
      >
        {/* Ornate Gold Medallion */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-amber-600 via-amber-300 to-yellow-100 shadow-[0_0_35px_rgba(212,175,55,0.6)] flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-[#32040E] border-2 border-amber-400/80 flex flex-col items-center justify-center p-2 text-amber-200">
            {/* Sacred Ganesha Emblem */}
            <span className="text-xl sm:text-2xl drop-shadow">🕉️</span>
            <span className="font-hindi text-xs sm:text-sm font-extrabold text-amber-300 tracking-wider mt-0.5">
              शुभ विवाह
            </span>
            <span className="text-[10px] font-serif text-amber-100/90 tracking-widest uppercase mt-0.5">
              Royal Invitation
            </span>
          </div>
        </div>

        {/* Couple Title on Medallion */}
        <div className="mt-3 mb-4 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-400/40">
          <p className="font-serif text-xs sm:text-sm font-bold text-amber-200 tracking-wide">
            Tanish Raj <span className="text-amber-400">&amp;</span> Prachi Arya
          </p>
        </div>

        {/* Grand "OPEN INVITATION" Action Button */}
        <button
          onClick={handleOpenDoors}
          className="group relative px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-[#3E0513] font-serif text-xs sm:text-sm uppercase font-extrabold tracking-[0.2em] shadow-[0_4px_25px_rgba(212,175,55,0.7)] hover:shadow-[0_6px_35px_rgba(212,175,55,0.9)] transform hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/80 animate-pulse"
        >
          <span className="flex items-center gap-2">
            <span>🪔</span>
            <span>OPEN INVITATION</span>
            <span>🪔</span>
          </span>
        </button>

        <p className="font-hindi text-[11px] text-amber-300/80 mt-2 font-medium tracking-wide">
          (दरवाज़ा खोलने के लिए क्लिक करें)
        </p>
      </div>
    </div>
  );
}
