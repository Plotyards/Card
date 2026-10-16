import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import { startMusic } from '../utils/audioManager';
import { SacredGaneshaIllustration, FloralToran, DiyaIllustration } from './illustrations/TraditionalArtwork';
import { Sparkles, Music, Volume2 } from 'lucide-react';

export default function RoyalDoorOpening({ onOpened }) {
  const [isOpen, setIsOpen] = useState(false);
  const [knockerTap, setKnockerTap] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const containerRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const sealRef = useRef(null);
  const lightGlowRef = useRef(null);
  const archRef = useRef(null);

  // Subtle interactive 3D parallax on mouse/cursor move
  const handleMouseMove = (e) => {
    if (isOpen || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 8, y: -y * 8 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Interactive brass knocker tap animation
  const handleKnockerClick = (e) => {
    e.stopPropagation();
    setKnockerTap(true);
    setTimeout(() => setKnockerTap(false), 500);
  };

  // Grand Palace Door Opening sequence
  const handleOpenDoors = () => {
    if (isOpen) return;
    setIsOpen(true);

    // 1. Start celebratory wedding Shehnai music
    startMusic();

    // 2. Spectacular Golden Shower of Festive Confetti & Rose Petals
    try {
      // Left burst
      confetti({
        particleCount: 45,
        angle: 60,
        spread: 55,
        origin: { x: 0.2, y: 0.6 },
        colors: ['#FFD700', '#D4AF37', '#FFA500', '#960018', '#FFF3B0'],
      });
      // Right burst
      confetti({
        particleCount: 45,
        angle: 120,
        spread: 55,
        origin: { x: 0.8, y: 0.6 },
        colors: ['#FFD700', '#D4AF37', '#FFA500', '#960018', '#FFF3B0'],
      });
      // Center celebration shower
      setTimeout(() => {
        confetti({
          particleCount: 70,
          spread: 90,
          origin: { y: 0.45 },
          colors: ['#D4AF37', '#E5A93C', '#800020', '#FFFFFF', '#FFD700'],
        });
      }, 350);
    } catch (e) {}

    const tl = gsap.timeline({
      onComplete: () => {
        if (onOpened) onOpened();
      },
    });

    // Step A: Royal Seal pulses and dissolves into radiant light
    tl.to(sealRef.current, {
      scale: 1.35,
      opacity: 0,
      duration: 0.65,
      ease: 'back.in(2)',
    })
    // Step B: Brilliant Golden Sunlight bursts from behind the gates
    .to(
      lightGlowRef.current,
      {
        opacity: 1,
        scale: 2.5,
        duration: 0.85,
        ease: 'power2.out',
      },
      '-=0.45'
    )
    // Step C: Massive 3D Haveli Doors swing wide open
    .to(
      leftDoorRef.current,
      {
        rotateY: -118,
        opacity: 0.05,
        duration: 1.7,
        ease: 'power3.inOut',
      },
      '-=0.55'
    )
    .to(
      rightDoorRef.current,
      {
        rotateY: 118,
        opacity: 0.05,
        duration: 1.7,
        ease: 'power3.inOut',
      },
      '<='
    )
    // Step D: Header Toran & Arch lifts up
    .to(
      archRef.current,
      {
        opacity: 0,
        y: -45,
        duration: 0.75,
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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#110104] select-none [perspective:1400px]"
    >
      {/* Dynamic Golden Sunlight Burst (revealed as doors swing open) */}
      <div
        ref={lightGlowRef}
        className="absolute inset-0 pointer-events-none opacity-0 flex items-center justify-center z-0"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-amber-400/60 via-yellow-200/70 to-amber-500/60 blur-[100px]" />
      </div>

      {/* Floating Luminous Gold Sparkles & Fireflies in Entrance Aura */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        {[
          { top: '15%', left: '12%', size: 'w-2 h-2', delay: '0s', dur: '4s' },
          { top: '25%', left: '85%', size: 'w-2.5 h-2.5', delay: '1s', dur: '5s' },
          { top: '65%', left: '8%', size: 'w-2 h-2', delay: '2s', dur: '4.5s' },
          { top: '78%', left: '88%', size: 'w-3 h-3', delay: '0.5s', dur: '6s' },
          { top: '40%', left: '18%', size: 'w-1.5 h-1.5', delay: '1.5s', dur: '3.5s' },
          { top: '55%', left: '82%', size: 'w-2 h-2', delay: '2.5s', dur: '4s' },
        ].map((sparkle, i) => (
          <div
            key={i}
            className={`absolute ${sparkle.size} rounded-full bg-gradient-to-tr from-yellow-300 to-amber-100 shadow-[0_0_10px_#FFD700] animate-pulse`}
            style={{
              top: sparkle.top,
              left: sparkle.left,
              animationDelay: sparkle.delay,
              animationDuration: sparkle.dur,
            }}
          />
        ))}
      </div>

      {/* Top Floating Floral Toran & Sacred Temple Crest */}
      <div
        ref={archRef}
        className="absolute top-0 left-0 right-0 z-30 flex flex-col items-center pointer-events-none"
      >
        {/* Authentic Hanging Marigold & Mango Leaves Garland */}
        <div className="w-full max-w-md mx-auto pt-1 opacity-95 drop-shadow-md">
          <FloralToran className="w-full" />
        </div>

        {/* Auspicious Shloka Arch Plaque with Flickering Diyas */}
        <div className="px-5 py-1.5 -mt-1.5 rounded-full bg-gradient-to-r from-[#24030B]/95 via-[#440713]/95 to-[#24030B]/95 border border-[#D4AF37]/80 shadow-[0_4px_25px_rgba(0,0,0,0.85)] flex items-center gap-2.5 backdrop-blur-md">
          <DiyaIllustration className="w-5 h-5 drop-shadow animate-pulse" />
          <div className="flex flex-col items-center">
            <span className="font-hindi text-amber-200 text-xs sm:text-sm font-bold tracking-widest drop-shadow-sm">
              ॥ श्री गणेशाय नमः ॥
            </span>
            <span className="font-hindi text-[9px] text-amber-300/75 tracking-wider hidden sm:block">
              वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ
            </span>
          </div>
          <DiyaIllustration className="w-5 h-5 transform -scale-x-100 drop-shadow animate-pulse" />
        </div>
      </div>

      {/* Left Palace Door */}
      <div
        ref={leftDoorRef}
        style={{
          transform: `rotateY(${tilt.x * 0.3}deg) rotateX(${tilt.y * 0.3}deg)`,
          transition: 'transform 0.2s ease-out',
        }}
        className="w-1/2 h-full absolute left-0 top-0 z-10 [transform-origin:left_center] [transform-style:preserve-3d] shadow-[25px_0_50px_rgba(0,0,0,0.95)] border-r-2 border-[#D4AF37]/70 bg-gradient-to-br from-[#1E0207] via-[#330510] to-[#140104] flex flex-col justify-between p-2.5 sm:p-4 overflow-hidden"
      >
        {/* Subtle Silk Weave & Golden Star Fleck Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Outer Carved Palace Door Frame with Gold Bevel */}
        <div className="relative w-full h-full rounded-l-2xl border-2 border-[#D4AF37]/60 p-2 sm:p-3 flex flex-col justify-between shadow-inner bg-black/25">
          
          {/* Top Panel: Sacred Spinning Golden Mandala */}
          <div className="h-[28%] rounded-xl border border-amber-500/40 bg-[#25030B]/90 p-2 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:10px_10px]" />
            <svg viewBox="0 0 80 80" className="w-14 h-14 text-amber-400/80 animate-spin-very-slow" fill="none">
              <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="40" cy="40" r="22" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="40" cy="40" r="10" fill="#D4AF37" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
              <path d="M40 8 L44 32 L68 40 L44 48 L40 72 L36 48 L12 40 L36 32 Z" fill="currentColor" fillOpacity="0.4" />
              <circle cx="40" cy="40" r="4" fill="#FFF3B0" />
            </svg>
            <span className="text-[9px] font-serif uppercase tracking-[0.25em] text-amber-300/85 mt-1 font-semibold">
              मांगलिक
            </span>
          </div>

          {/* Left Door Handle: Interactive Heavy Royal Brass Ring Knocker */}
          <div
            onClick={handleKnockerClick}
            className={`absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 flex flex-col items-center z-20 cursor-pointer transition-transform duration-300 ${
              knockerTap ? 'scale-110 rotate-6' : 'hover:scale-105'
            }`}
            title="Knock the royal palace door"
          >
            {/* Ornate Brass Backplate with Lion Crest Ring */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-amber-800 via-amber-400 to-yellow-100 border-2 border-amber-950 shadow-[0_0_18px_rgba(212,175,55,0.8)] flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-[#32040E] border-2 border-amber-300 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#FFD700]" />
              </div>
            </div>
            {/* Hanging Heavy Brass Ring */}
            <div className={`w-8 h-12 -mt-3 rounded-b-full border-[5px] border-amber-400 bg-gradient-to-b from-transparent to-amber-900/40 shadow-2xl flex items-end justify-center pb-1 transition-transform ${knockerTap ? 'translate-y-1 rotate-12' : ''}`}>
              <span className="w-2 h-2 rounded-full bg-amber-300 shadow" />
            </div>
          </div>

          {/* Bottom Panel: Auspicious "शुभ" (Shubh) with Lotus Petal Frame */}
          <div className="h-[28%] rounded-xl border border-amber-500/40 bg-[#25030B]/90 p-2 flex flex-col items-center justify-center relative shadow-inner">
            <div className="w-12 h-12 rounded-full border border-amber-400/60 flex items-center justify-center bg-amber-500/15 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              <span className="font-hindi text-xl sm:text-2xl text-amber-300 font-extrabold drop-shadow">
                शुभ
              </span>
            </div>
            <span className="text-[9px] font-serif uppercase tracking-widest text-amber-400/80 mt-1 font-semibold">
              Auspicious
            </span>
          </div>

          {/* Studded Brass Bolts on Left Door edge */}
          <div className="absolute top-4 bottom-4 left-1.5 flex flex-col justify-between pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-amber-700 via-amber-300 to-yellow-100 border border-amber-950 shadow-[0_0_4px_#FFD700]" />
            ))}
          </div>
        </div>
      </div>

      {/* Right Palace Door */}
      <div
        ref={rightDoorRef}
        style={{
          transform: `rotateY(${tilt.x * 0.3}deg) rotateX(${tilt.y * 0.3}deg)`,
          transition: 'transform 0.2s ease-out',
        }}
        className="w-1/2 h-full absolute right-0 top-0 z-10 [transform-origin:right_center] [transform-style:preserve-3d] shadow-[-25px_0_50px_rgba(0,0,0,0.95)] border-l-2 border-[#D4AF37]/70 bg-gradient-to-bl from-[#1E0207] via-[#330510] to-[#140104] flex flex-col justify-between p-2.5 sm:p-4 overflow-hidden"
      >
        {/* Subtle Silk Weave & Golden Star Fleck Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Outer Carved Palace Door Frame with Gold Bevel */}
        <div className="relative w-full h-full rounded-r-2xl border-2 border-[#D4AF37]/60 p-2 sm:p-3 flex flex-col justify-between shadow-inner bg-black/25">
          
          {/* Top Panel: Sacred Spinning Golden Mandala */}
          <div className="h-[28%] rounded-xl border border-amber-500/40 bg-[#25030B]/90 p-2 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:10px_10px]" />
            <svg viewBox="0 0 80 80" className="w-14 h-14 text-amber-400/80 animate-spin-very-slow" fill="none">
              <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="40" cy="40" r="22" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="40" cy="40" r="10" fill="#D4AF37" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
              <path d="M40 8 L44 32 L68 40 L44 48 L40 72 L36 48 L12 40 L36 32 Z" fill="currentColor" fillOpacity="0.4" />
              <circle cx="40" cy="40" r="4" fill="#FFF3B0" />
            </svg>
            <span className="text-[9px] font-serif uppercase tracking-[0.25em] text-amber-300/85 mt-1 font-semibold">
              कल्याणम
            </span>
          </div>

          {/* Right Door Handle: Interactive Heavy Royal Brass Ring Knocker */}
          <div
            onClick={handleKnockerClick}
            className={`absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 flex flex-col items-center z-20 cursor-pointer transition-transform duration-300 ${
              knockerTap ? 'scale-110 -rotate-6' : 'hover:scale-105'
            }`}
            title="Knock the royal palace door"
          >
            {/* Ornate Brass Backplate with Lion Crest Ring */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-amber-800 via-amber-400 to-yellow-100 border-2 border-amber-950 shadow-[0_0_18px_rgba(212,175,55,0.8)] flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-[#32040E] border-2 border-amber-300 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#FFD700]" />
              </div>
            </div>
            {/* Hanging Heavy Brass Ring */}
            <div className={`w-8 h-12 -mt-3 rounded-b-full border-[5px] border-amber-400 bg-gradient-to-b from-transparent to-amber-900/40 shadow-2xl flex items-end justify-center pb-1 transition-transform ${knockerTap ? 'translate-y-1 -rotate-12' : ''}`}>
              <span className="w-2 h-2 rounded-full bg-amber-300 shadow" />
            </div>
          </div>

          {/* Bottom Panel: Auspicious "लाभ" (Labh) with Lotus Petal Frame */}
          <div className="h-[28%] rounded-xl border border-amber-500/40 bg-[#25030B]/90 p-2 flex flex-col items-center justify-center relative shadow-inner">
            <div className="w-12 h-12 rounded-full border border-amber-400/60 flex items-center justify-center bg-amber-500/15 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              <span className="font-hindi text-xl sm:text-2xl text-amber-300 font-extrabold drop-shadow">
                लाभ
              </span>
            </div>
            <span className="text-[9px] font-serif uppercase tracking-widest text-amber-400/80 mt-1 font-semibold">
              Prosperity
            </span>
          </div>

          {/* Studded Brass Bolts on Right Door edge */}
          <div className="absolute top-4 bottom-4 right-1.5 flex flex-col justify-between pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-amber-700 via-amber-300 to-yellow-100 border border-amber-950 shadow-[0_0_4px_#FFD700]" />
            ))}
          </div>
        </div>
      </div>

      {/* Central Royal Medallion & "OPEN INVITATION" Entrance Crest */}
      <div
        ref={sealRef}
        style={{
          transform: `rotateY(${tilt.x * 0.5}deg) rotateX(${tilt.y * 0.5}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        className="relative z-30 flex flex-col items-center text-center p-3 max-w-[320px] sm:max-w-xs"
      >
        {/* Celestial Rotating Golden Sunburst Halo */}
        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-5 rounded-full border border-dashed border-amber-400/40 animate-celestial-spin pointer-events-none" />
          <div className="absolute -inset-9 rounded-full bg-gradient-to-r from-amber-500/25 via-yellow-400/35 to-amber-500/25 blur-xl animate-pulse" />

          {/* Ornate Layered Gold Royal Medallion */}
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1.5 bg-gradient-to-tr from-amber-700 via-yellow-300 to-amber-600 shadow-[0_0_45px_rgba(212,175,55,0.8)] flex items-center justify-center">
            {/* Scalloped Gold Rope Inner Medallion */}
            <div className="w-full h-full rounded-full bg-gradient-to-b from-[#3A0410] to-[#1E0106] border-2 border-amber-300 flex flex-col items-center justify-center p-2 shadow-inner relative overflow-hidden">
              
              {/* Sacred Ganesha Artwork with Halo */}
              <div className="transform scale-75 -my-2 drop-shadow-[0_2px_10px_rgba(255,215,0,0.5)]">
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
        <div className="mt-3.5 mb-2.5 bg-[#1F0208]/90 backdrop-blur-md px-5 py-2 rounded-full border border-amber-400/60 shadow-[0_4px_20px_rgba(0,0,0,0.8)] flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <p className="font-serif text-xs sm:text-sm font-bold text-amber-100 tracking-wide">
            Tanish Raj <span className="font-script text-amber-400 text-base">&amp;</span> Prachi Arya
          </p>
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
        </div>

        {/* Auspicious Date & Venue Badge */}
        <div className="mb-3 px-3 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30">
          <p className="font-serif text-[10px] text-amber-300/90 tracking-widest uppercase font-semibold">
            04 December 2026 • Danapur, Patna
          </p>
        </div>

        {/* Grand "OPEN INVITATION" Royal Button */}
        <button
          onClick={handleOpenDoors}
          className="group relative overflow-hidden px-8 sm:px-10 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 text-[#2E030C] font-serif text-xs sm:text-sm uppercase font-extrabold tracking-[0.22em] shadow-[0_4px_35px_rgba(212,175,55,0.85)] hover:shadow-[0_6px_45px_rgba(212,175,55,1)] transform hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/90"
        >
          {/* Continuous Gold Shimmer Light Sweep */}
          <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none animate-royal-shimmer" />

          <span className="relative z-10 flex items-center justify-center gap-2.5 drop-shadow-sm">
            <DiyaIllustration className="w-4 h-4" />
            <span>OPEN INVITATION</span>
            <DiyaIllustration className="w-4 h-4 transform -scale-x-100" />
          </span>
        </button>

        {/* Music Hint Pill */}
        <div className="mt-2.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-amber-400/30 text-amber-300/90 text-[10px] font-serif shadow">
          <Volume2 className="w-3 h-3 text-amber-400 animate-pulse" />
          <span>Includes Festive Shehnai &amp; Sitar Music</span>
        </div>

        {/* Touch / Click Invitation Prompt */}
        <p className="font-hindi text-xs text-amber-200/90 mt-2 font-medium tracking-wide drop-shadow flex items-center justify-center gap-1.5 animate-pulse">
          <span>✨</span>
          <span>(शाही दरवाज़ा खोलने के लिए यहाँ स्पर्श करें)</span>
          <span>✨</span>
        </p>
      </div>
    </div>
  );
}
