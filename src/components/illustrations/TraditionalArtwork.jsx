import React from 'react';

// Sacred Ganesha with Golden Arch and Ornaments
export function SacredGaneshaIllustration({ className = "w-28 h-28 text-amber-600" }) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Radiant Halo / Sunburst */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400/20 via-yellow-200/40 to-transparent blur-md transform scale-125" />
      <svg viewBox="0 0 120 120" className={`relative z-10 ${className}`} fill="currentColor">
        <defs>
          <radialGradient id="ganeshaGold" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
            <stop offset="0%" stopColor="#FFF3B0" />
            <stop offset="45%" stopColor="#E5A93C" />
            <stop offset="100%" stopColor="#9C6B15" />
          </radialGradient>
          <linearGradient id="tilakRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF416C" />
            <stop offset="100%" stopColor="#8A0019" />
          </linearGradient>
        </defs>

        {/* Crown (Mukut) */}
        <path d="M60 10 L70 24 L50 24 Z" fill="url(#ganeshaGold)" />
        <path d="M44 24 L76 24 L72 32 L48 32 Z" fill="url(#ganeshaGold)" />
        <circle cx="60" cy="18" r="3" fill="#D32F2F" />

        {/* Head & Forehead */}
        <path d="M46 32 Q60 28 74 32 Q78 44 72 52 Q60 56 48 52 Q42 44 46 32 Z" fill="url(#ganeshaGold)" />

        {/* Tilak / Trishul mark */}
        <path d="M57 32 L63 32 L62 42 L58 42 Z" fill="url(#tilakRed)" />
        <path d="M53 34 Q60 38 67 34 L66 36 Q60 40 54 36 Z" fill="url(#tilakRed)" />
        <circle cx="60" cy="45" r="2.5" fill="#D32F2F" />

        {/* Large Royal Ears */}
        {/* Left Ear */}
        <path d="M46 34 C30 30 22 42 26 56 C30 66 40 68 46 62 Z" fill="url(#ganeshaGold)" opacity="0.95" />
        <path d="M43 38 C32 36 27 45 30 54 C33 60 40 62 43 57 Z" fill="#9C6B15" opacity="0.4" />
        {/* Right Ear */}
        <path d="M74 34 C90 30 98 42 94 56 C90 66 80 68 74 62 Z" fill="url(#ganeshaGold)" opacity="0.95" />
        <path d="M77 38 C88 36 93 45 90 54 C87 60 80 62 77 57 Z" fill="#9C6B15" opacity="0.4" />

        {/* Curved Graceful Trunk (Sondh) with Modak */}
        <path d="M56 48 C53 58 55 72 56 82 C57 90 64 96 74 95 C82 94 88 87 86 80 C84 74 77 75 75 79 C74 83 71 85 67 84 C63 83 62 76 63 68 C64 58 66 52 64 48 Z" fill="url(#ganeshaGold)" />
        <path d="M57 58 Q60 59 63 58" stroke="#7A4E0B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M57 65 Q60 66 63 65" stroke="#7A4E0B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M58 72 Q61 73 64 72" stroke="#7A4E0B" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Tusk */}
        <path d="M51 52 L43 54 L52 56 Z" fill="#FFFBEA" />

        {/* Golden Modak on Trunk Tip */}
        <circle cx="83" cy="80" r="4.5" fill="#FFE082" />
        <circle cx="83" cy="80" r="3" fill="#FFB300" />

        {/* Om Sacred Curve Symbol on side */}
        <path d="M38 74 C40 70 47 70 49 75 C47 78 42 80 38 77 Z" fill="url(#ganeshaGold)" opacity="0.8" />

        {/* Lotus Base */}
        <path d="M35 102 C50 96 70 96 85 102 C75 108 45 108 35 102 Z" fill="#E57373" />
        <path d="M42 105 C52 101 68 101 78 105 C70 110 50 110 42 105 Z" fill="#EF5350" />
      </svg>
    </div>
  );
}

// Royal Hanging Floral Toran (Marigold garlands + Mango leaves + Golden bells)
export function FloralToran({ className = "w-full" }) {
  return (
    <div className={`overflow-hidden pointer-events-none ${className}`}>
      <svg viewBox="0 0 400 65" className="w-full h-auto drop-shadow-sm" fill="none" preserveAspectRatio="none">
        {/* Main Golden Cord */}
        <path d="M 0 8 Q 100 16 200 8 Q 300 0 400 8" stroke="#B8860B" strokeWidth="2.5" />
        <path d="M 0 10 Q 100 18 200 10 Q 300 2 400 10" stroke="#FFD700" strokeWidth="1" strokeDasharray="3 3" />

        {/* Mango Leaves (Green triangular shapes) */}
        {[20, 60, 100, 140, 180, 220, 260, 300, 340, 380].map((x, i) => (
          <path
            key={`leaf-${i}`}
            d={`M ${x - 8} 10 Q ${x} 32 ${x} 36 Q ${x} 32 ${x + 8} 10 Z`}
            fill={i % 2 === 0 ? "#2D6A4F" : "#1B4332"}
            stroke="#52B788"
            strokeWidth="0.5"
          />
        ))}

        {/* Scalloped Marigold Flowers Garlands (Orange & Yellow blooms) */}
        {[
          { cx: 20, cy: 12, r: 6, c: "#FF8C00" },
          { cx: 40, cy: 18, r: 5.5, c: "#FFD700" },
          { cx: 60, cy: 22, r: 6, c: "#FF8C00" },
          { cx: 80, cy: 23, r: 5.5, c: "#FFA500" },
          { cx: 100, cy: 20, r: 6, c: "#FFD700" },
          { cx: 120, cy: 15, r: 5.5, c: "#FF8C00" },
          { cx: 140, cy: 18, r: 6, c: "#FFA500" },
          { cx: 160, cy: 22, r: 5.5, c: "#FFD700" },
          { cx: 180, cy: 23, r: 6, c: "#FF8C00" },
          { cx: 200, cy: 21, r: 6.5, c: "#FFD700" },
          { cx: 220, cy: 23, r: 6, c: "#FF8C00" },
          { cx: 240, cy: 22, r: 5.5, c: "#FFA500" },
          { cx: 260, cy: 18, r: 6, c: "#FFD700" },
          { cx: 280, cy: 15, r: 5.5, c: "#FF8C00" },
          { cx: 300, cy: 20, r: 6, c: "#FFA500" },
          { cx: 320, cy: 23, r: 5.5, c: "#FFD700" },
          { cx: 340, cy: 22, r: 6, c: "#FF8C00" },
          { cx: 360, cy: 18, r: 5.5, c: "#FFA500" },
          { cx: 380, cy: 12, r: 6, c: "#FFD700" },
        ].map((flower, i) => (
          <g key={`flower-${i}`}>
            <circle cx={flower.cx} cy={flower.cy} r={flower.r} fill={flower.c} />
            <circle cx={flower.cx} cy={flower.cy} r={flower.r * 0.55} fill="#FFF3B0" />
            <circle cx={flower.cx} cy={flower.cy} r={flower.r * 0.25} fill="#D97706" />
          </g>
        ))}

        {/* Hanging Floral Tassels & Golden Bells */}
        {[60, 140, 200, 260, 340].map((x, i) => (
          <g key={`tassel-${i}`} className="animate-pulse" style={{ animationDuration: `${2.5 + i * 0.3}s` }}>
            {/* Hanging thread with micro beads */}
            <line x1={x} y1="22" x2={x} y2="48" stroke="#D4AF37" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
            {/* Hanging lotus / bell */}
            <path
              d={`M ${x - 5} 48 Q ${x} 56 ${x + 5} 48 L ${x + 4} 52 Q ${x} 58 ${x - 4} 52 Z`}
              fill="#D4AF37"
              stroke="#997A15"
              strokeWidth="0.5"
            />
            {/* Bell clapper bead */}
            <circle cx={x} cy="59" r="2" fill="#B8860B" />
          </g>
        ))}
      </svg>
    </div>
  );
}

// Ornate Traditional Indian Arch / Mughal Arch Frame
export function MughalArchFrame({
  children,
  className = "",
  variant = "gold" // "gold" | "green" | "pink" | "red" | "maroon"
}) {
  const getThemeClasses = () => {
    switch (variant) {
      case 'green':
        return {
          outer: 'bg-[#183226]/90 border-[#C5A059]/40 shadow-[0_8px_32px_rgba(20,40,30,0.4)]',
          inner: 'border-[#D4AF37]/35 bg-[#14281E]/70 text-stone-100',
          accent: '#E5C07B',
        };
      case 'pink':
        return {
          outer: 'bg-[#FDF3EE]/95 border-[#E29578]/50 shadow-[0_8px_32px_rgba(226,149,120,0.25)]',
          inner: 'border-[#D4AF37]/40 bg-[#FFF9F5] text-stone-800',
          accent: '#B7415E',
        };
      case 'red':
      case 'maroon':
        return {
          outer: 'bg-[#3E0513]/90 border-[#D4AF37]/50 shadow-[0_12px_40px_rgba(62,5,19,0.5)]',
          inner: 'border-[#E5C07B]/40 bg-[#2A030C]/80 text-[#FFF9F0]',
          accent: '#F3C969',
        };
      case 'gold':
      default:
        return {
          outer: 'bg-[#FFFDF7]/95 border-[#D4AF37]/60 shadow-[0_10px_35px_rgba(212,175,55,0.25)]',
          inner: 'border-[#D4AF37]/40 bg-[#FAF6EC]/80 text-stone-900',
          accent: '#B8860B',
        };
    }
  };

  const theme = getThemeClasses();

  return (
    <div className={`relative w-full max-w-[360px] sm:max-w-md mx-auto p-4 sm:p-6 rounded-t-[140px] rounded-b-2xl border-2 ${theme.outer} backdrop-blur-md transition-all duration-700 ${className}`}>
      {/* Top Architectural Keystone / Kalash Motif */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <svg viewBox="0 0 40 24" className="w-10 h-6 drop-shadow-md" fill={theme.accent}>
          <path d="M20 2 C16 7 10 12 12 18 C14 22 18 22 20 22 C22 22 26 22 28 18 C30 12 24 7 20 2 Z" />
          <circle cx="20" cy="5" r="2" fill="#FFF3B0" />
        </svg>
      </div>

      {/* Decorative Scalloped Arch Crest */}
      <div className="relative pt-2 pb-1 flex flex-col items-center justify-center">
        <svg viewBox="0 0 200 40" className="w-44 h-9 opacity-80" fill="none" stroke={theme.accent}>
          {/* Multi-scallop Mughal arch crest */}
          <path
            d="M 10 38 Q 40 38 60 25 Q 80 12 100 6 Q 120 12 140 25 Q 160 38 190 38"
            strokeWidth="1.5"
          />
          <path
            d="M 25 38 Q 50 38 70 28 Q 85 18 100 14 Q 115 18 130 28 Q 150 38 175 38"
            strokeWidth="0.8"
            strokeDasharray="2 3"
          />
          <circle cx="100" cy="6" r="2.5" fill={theme.accent} />
          <circle cx="60" cy="25" r="1.5" fill={theme.accent} />
          <circle cx="140" cy="25" r="1.5" fill={theme.accent} />
        </svg>
      </div>

      {/* Inner Decorative Arch Border with Corner Motifs */}
      <div className={`relative rounded-t-[120px] rounded-b-xl border border-dashed p-4 sm:p-5 flex flex-col items-center text-center ${theme.inner}`}>
        {/* Subtle Arch Filigree Background */}
        <div className="absolute inset-0 pointer-events-none rounded-t-[120px] rounded-b-xl opacity-5 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:12px_12px]" />

        {/* 4 Corner Flourishes */}
        <span className="absolute bottom-2 left-2 text-xs font-serif text-amber-500/70 select-none">❧</span>
        <span className="absolute bottom-2 right-2 text-xs font-serif text-amber-500/70 select-none transform scale-x-[-1]">❧</span>

        {/* Inner Content */}
        <div className="relative z-10 w-full flex flex-col items-center">
          {children}
        </div>
      </div>

      {/* Bottom Hanging Floral Trim Accent */}
      <div className="flex justify-center items-center gap-1.5 mt-2 opacity-75">
        <span className="h-[1px] w-10 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        <span className="text-[10px] text-amber-400 font-hindi">🪷</span>
        <span className="h-[1px] w-10 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      </div>
    </div>
  );
}

// Sacred Indian Kalash with Coconut, Mango Leaves and Swastik
export function SacredKalashIllustration({ className = "w-20 h-20 text-amber-600" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <defs>
        <radialGradient id="potBrass" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFF2A7" />
          <stop offset="40%" stopColor="#E5A93C" />
          <stop offset="100%" stopColor="#8C530A" />
        </radialGradient>
      </defs>

      {/* Coconut on Top */}
      <ellipse cx="50" cy="30" rx="14" ry="17" fill="#6B3A19" stroke="#4A230B" strokeWidth="1.2" />
      <path d="M 46 15 Q 50 11 54 15" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="47" cy="24" r="1.5" fill="#381807" />
      <circle cx="53" cy="24" r="1.5" fill="#381807" />
      <circle cx="50" cy="28" r="1.5" fill="#381807" />

      {/* Green Mango Leaves Fanning Out */}
      <path d="M 50 40 C 32 35 24 24 20 16 C 26 24 38 34 50 40 Z" fill="#2D6A4F" stroke="#1B4332" strokeWidth="0.8" />
      <path d="M 50 40 C 38 30 34 16 32 6 C 40 18 45 30 50 40 Z" fill="#40916C" stroke="#1B4332" strokeWidth="0.8" />
      <path d="M 50 40 C 50 25 50 12 50 2 C 53 15 54 28 50 40 Z" fill="#52B788" stroke="#1B4332" strokeWidth="0.8" />
      <path d="M 50 40 C 62 30 66 16 68 6 C 60 18 55 30 50 40 Z" fill="#40916C" stroke="#1B4332" strokeWidth="0.8" />
      <path d="M 50 40 C 68 35 76 24 80 16 C 74 24 62 34 50 40 Z" fill="#2D6A4F" stroke="#1B4332" strokeWidth="0.8" />

      {/* Red Sacred Thread (Mauli) tied around neck */}
      <rect x="36" y="44" width="28" height="6" rx="2" fill="#D32F2F" stroke="#B71C1C" strokeWidth="0.8" />
      <line x1="42" y1="44" x2="42" y2="50" stroke="#FFD700" strokeWidth="1" />
      <line x1="50" y1="44" x2="50" y2="50" stroke="#FFD700" strokeWidth="1" />
      <line x1="58" y1="44" x2="58" y2="50" stroke="#FFD700" strokeWidth="1" />

      {/* Golden Brass Kalash Pot */}
      <path
        d="M 38 48 C 30 52 22 64 24 76 C 26 88 38 94 50 94 C 62 94 74 88 76 76 C 78 64 70 52 62 48 Z"
        fill="url(#potBrass)"
        stroke="#B8860B"
        strokeWidth="1.5"
      />

      {/* Red Swastik on Pot Body */}
      <g stroke="#C62828" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="50" y1="62" x2="50" y2="82" />
        <line x1="40" y1="72" x2="60" y2="72" />
        <line x1="50" y1="62" x2="58" y2="62" />
        <line x1="50" y1="82" x2="42" y2="82" />
        <line x1="40" y1="72" x2="40" y2="64" />
        <line x1="60" y1="72" x2="60" y2="80" />
      </g>
      {/* 4 dots */}
      <circle cx="45" cy="67" r="1.2" fill="#C62828" />
      <circle cx="55" cy="67" r="1.2" fill="#C62828" />
      <circle cx="45" cy="77" r="1.2" fill="#C62828" />
      <circle cx="55" cy="77" r="1.2" fill="#C62828" />
    </svg>
  );
}

// Sacred Havan Kund & Agni Fire (Sacred Vedic Fire)
export function SacredHavanKund({ className = "w-24 h-24" }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      <defs>
        <linearGradient id="fireGrad" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#FF1E00" />
          <stop offset="35%" stopColor="#FF7700" />
          <stop offset="70%" stopColor="#FFDD00" />
          <stop offset="100%" stopColor="#FFFFCC" />
        </linearGradient>
        <radialGradient id="fireGlow" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#FF9E00" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FF1E00" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient Fire Aura Glow */}
      <circle cx="60" cy="55" r="42" fill="url(#fireGlow)" />

      {/* Dancing Flames (Agni Devta) */}
      <g className="animate-pulse" style={{ animationDuration: '1.8s' }}>
        {/* Outer Back Flame */}
        <path d="M 60 10 C 72 30 82 45 78 65 C 75 75 68 80 60 80 C 52 80 45 75 42 65 C 38 45 48 30 60 10 Z" fill="url(#fireGrad)" opacity="0.8" />
        {/* Mid Left Flame */}
        <path d="M 50 25 C 40 40 40 55 46 68 C 50 64 54 58 52 48 C 50 40 54 32 50 25 Z" fill="#FFAA00" />
        {/* Mid Right Flame */}
        <path d="M 70 28 C 80 42 78 56 72 68 C 68 62 66 56 68 46 C 70 38 66 34 70 28 Z" fill="#FFAA00" />
        {/* Core Hot White-Yellow Flame */}
        <path d="M 60 35 C 65 48 68 58 65 72 C 63 76 57 76 55 72 C 52 58 55 48 60 35 Z" fill="#FFFFEE" />
      </g>

      {/* Wooden Samidha Logs inside Kund */}
      <line x1="38" y1="78" x2="82" y2="68" stroke="#5D4037" strokeWidth="5" strokeLinecap="round" />
      <line x1="38" y1="68" x2="82" y2="78" stroke="#4E342E" strokeWidth="5" strokeLinecap="round" />

      {/* Stepped Copper/Terracotta Havan Kund Base */}
      <polygon points="26,76 94,76 86,84 34,84" fill="#A8422B" stroke="#6E2312" strokeWidth="1" />
      <polygon points="30,84 90,84 82,92 38,92" fill="#BF5135" stroke="#6E2312" strokeWidth="1" />
      <polygon points="22,92 98,92 92,102 28,102" fill="#8C2D19" stroke="#50180B" strokeWidth="1.2" />

      {/* Golden Swastik / Diya motif on Front */}
      <circle cx="60" cy="97" r="2.5" fill="#FFD700" />
      <circle cx="50" cy="97" r="1.5" fill="#FFD700" />
      <circle cx="70" cy="97" r="1.5" fill="#FFD700" />
    </svg>
  );
}

// Traditional Clay Diya with Warm Glowing Flame
export function DiyaIllustration({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 60 50" className={className} fill="none">
      <defs>
        <radialGradient id="diyaGlow" cx="50%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#FFE066" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FF922B" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Glow */}
      <circle cx="30" cy="18" r="16" fill="url(#diyaGlow)" className="animate-pulse" />
      {/* Flame */}
      <path d="M30 6 C35 15 36 22 30 25 C24 22 25 15 30 6 Z" fill="#FF8C00" />
      <path d="M30 11 C33 16 33 21 30 23 C27 21 27 16 30 11 Z" fill="#FFFBEA" />
      {/* Wick */}
      <line x1="30" y1="22" x2="30" y2="27" stroke="#333" strokeWidth="1.2" />
      {/* Terracotta Clay Lamp */}
      <path d="M12 28 C12 28 20 32 30 32 C40 32 48 28 48 28 C50 38 42 45 30 45 C18 45 10 38 12 28 Z" fill="#B25E3B" stroke="#7A3619" strokeWidth="1" />
      <ellipse cx="30" cy="28" rx="18" ry="4" fill="#914524" />
      <circle cx="30" cy="38" r="1.5" fill="#E59866" />
    </svg>
  );
}

// Traditional Dholak / Indian Wedding Drum
export function DholakIllustration({ className = "w-24 h-16" }) {
  return (
    <svg viewBox="0 0 100 65" className={className} fill="none">
      <path
        d="M 22 14 C 36 8 64 8 78 14 C 84 20 84 45 78 51 C 64 57 36 57 22 51 C 16 45 16 20 22 14 Z"
        fill="#8D4925"
        stroke="#59280E"
        strokeWidth="1.5"
      />
      <path d="M 28 20 C 42 16 58 16 72 20" stroke="#C27A4C" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="22" cy="32.5" rx="7" ry="18.5" fill="#FFF9EB" stroke="#4A230B" strokeWidth="1.5" />
      <ellipse cx="22" cy="32.5" rx="3.5" ry="9" fill="#3D200E" />
      <ellipse cx="78" cy="32.5" rx="7" ry="18.5" fill="#FFF9EB" stroke="#4A230B" strokeWidth="1.5" />
      <ellipse cx="78" cy="32.5" rx="4" ry="10" fill="#3D200E" />

      {/* Rope / Cord Lacing */}
      <g stroke="#D4AF37" strokeWidth="1.2">
        <line x1="26" y1="16" x2="74" y2="28" />
        <line x1="74" y1="28" x2="26" y2="38" />
        <line x1="26" y1="38" x2="74" y2="48" />
        <line x1="74" y1="18" x2="26" y2="26" />
        <line x1="26" y1="26" x2="74" y2="38" />
        <line x1="74" y1="38" x2="26" y2="48" />
      </g>
      <circle cx="50" cy="27" r="2.5" fill="#FFD700" stroke="#B8860B" strokeWidth="0.8" />
      <circle cx="50" cy="38" r="2.5" fill="#FFD700" stroke="#B8860B" strokeWidth="0.8" />

      {/* Beat Sticks */}
      <line x1="12" y1="58" x2="40" y2="46" stroke="#42220E" strokeWidth="3" strokeLinecap="round" />
      <line x1="88" y1="58" x2="60" y2="46" stroke="#42220E" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// Royal Illustrated Groom (Tanish Raj motif in traditional Indian Sherwani & Safa)
export function GroomIllustration({ className = "w-32 h-44" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 130" className="w-full h-full drop-shadow-md" fill="none">
        <defs>
          <linearGradient id="safaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C92A2A" />
            <stop offset="50%" stopColor="#E03131" />
            <stop offset="100%" stopColor="#861B1B" />
          </linearGradient>
          <linearGradient id="sherwaniGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF6" />
            <stop offset="50%" stopColor="#F5EFE0" />
            <stop offset="100%" stopColor="#E2D6BE" />
          </linearGradient>
        </defs>

        {/* Regal Kalgi / Brooch */}
        <path d="M 50 4 Q 53 -3 50 -8 Q 47 -3 50 4" fill="#D4AF37" stroke="#FFF" strokeWidth="0.5" />
        <circle cx="50" cy="7" r="2.5" fill="#D32F2F" stroke="#FFD700" strokeWidth="0.8" />

        {/* Royal Safa / Pagri */}
        <path d="M 36 20 C 34 10 44 6 50 6 C 56 6 66 10 64 20 C 60 25 40 25 36 20 Z" fill="url(#safaGrad)" stroke="#B8860B" strokeWidth="1" />
        <path d="M 33 16 Q 50 12 67 16" stroke="#FFD700" strokeWidth="1.5" />
        <path d="M 34 20 Q 50 16 66 20" stroke="#FFD700" strokeWidth="1.5" />
        <path d="M 64 16 C 68 22 71 35 70 45" stroke="#C92A2A" strokeWidth="4" strokeLinecap="round" />

        {/* Groom Face Silhouette */}
        <ellipse cx="50" cy="28" rx="10" ry="11" fill="#F8D3B3" />
        <line x1="50" y1="21" x2="50" y2="26" stroke="#C92A2A" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 45 32 Q 50 30 55 32" stroke="#3E2723" strokeWidth="1.2" strokeLinecap="round" />

        {/* Sherwani Collar */}
        <path d="M 42 38 L 58 38 L 60 44 L 40 44 Z" fill="#D4AF37" />

        {/* Sherwani Body */}
        <path
          d="M 32 46 C 36 43 45 42 50 42 C 55 42 64 43 68 46 L 74 110 C 68 114 58 116 50 116 C 42 116 32 114 26 110 Z"
          fill="url(#sherwaniGrad)"
          stroke="#D4AF37"
          strokeWidth="1.2"
        />

        {/* Gold Brocade Button Placket */}
        <line x1="50" y1="44" x2="50" y2="108" stroke="#D4AF37" strokeWidth="2" strokeDasharray="1 3" />
        {[48, 56, 64, 72, 80, 88].map((y) => (
          <circle key={y} cx="50" cy={y} r="1.5" fill="#D4AF37" />
        ))}

        {/* Royal Multi-strand Pearl & Emerald Mala */}
        <path d="M 40 44 Q 50 60 60 44" stroke="#FFF" strokeWidth="2" strokeDasharray="2 2" />
        <path d="M 38 46 Q 50 68 62 46" stroke="#2D6A4F" strokeWidth="2.5" strokeDasharray="3 3" />
        <circle cx="50" cy="68" r="3" fill="#2D6A4F" stroke="#FFD700" strokeWidth="1" />

        {/* Royal Shawl / Stole */}
        <path d="M 32 48 Q 28 75 30 115" stroke="#8B1E3F" strokeWidth="7" strokeLinecap="round" />
        <path d="M 32 48 Q 28 75 30 115" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    </div>
  );
}

// Royal Illustrated Bride (Prachi Arya motif in traditional Indian Bridal Lehenga & Jewelry)
export function BrideIllustration({ className = "w-32 h-44" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 130" className="w-full h-full drop-shadow-md" fill="none">
        <defs>
          <linearGradient id="bridalRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C92A2A" />
            <stop offset="50%" stopColor="#A61E2B" />
            <stop offset="100%" stopColor="#5C0B14" />
          </linearGradient>
          <linearGradient id="chunniSheer" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C92A2A" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Bridal Maang Tikka */}
        <circle cx="50" cy="18" r="2.5" fill="#FFD700" stroke="#C92A2A" strokeWidth="0.8" />
        <line x1="50" y1="12" x2="50" y2="18" stroke="#FFD700" strokeWidth="1.2" />
        <path d="M 40 20 Q 50 16 60 20" stroke="#FFD700" strokeWidth="1.5" strokeDasharray="1.5 1.5" />

        {/* Bridal Sheer Chunni / Odhni */}
        <path
          d="M 32 20 C 32 10 42 6 50 6 C 58 6 68 10 68 20 C 72 40 76 75 75 110 C 65 116 35 116 25 110 C 24 75 28 40 32 20 Z"
          fill="url(#chunniSheer)"
          stroke="#D4AF37"
          strokeWidth="1.5"
        />
        <path d="M 32 20 C 32 10 42 6 50 6 C 58 6 68 10 68 20" stroke="#FFD700" strokeWidth="2.5" strokeDasharray="2 3" />

        {/* Bride Face Silhouette */}
        <ellipse cx="50" cy="27" rx="9" ry="10" fill="#F8D3B3" />
        <circle cx="50" cy="22" r="1.2" fill="#C92A2A" />
        <circle cx="45" cy="29" r="2" fill="none" stroke="#FFD700" strokeWidth="0.9" />
        <path d="M 45 29 Q 40 26 36 23" stroke="#FFD700" strokeWidth="0.7" strokeDasharray="1 1" />

        {/* Choker Necklace & Jhumkas */}
        <path d="M 43 35 Q 50 39 57 35" stroke="#FFD700" strokeWidth="3" />
        <circle cx="39" cy="30" r="1.5" fill="#FFD700" />
        <circle cx="61" cy="30" r="1.5" fill="#FFD700" />

        {/* Bridal Blouse */}
        <path d="M 37 42 C 43 39 57 39 63 42 L 64 56 C 58 59 42 59 36 56 Z" fill="url(#bridalRed)" stroke="#FFD700" strokeWidth="1" />
        <path d="M 42 42 Q 50 54 58 42" stroke="#FFD700" strokeWidth="1.5" />

        {/* Bridal Flared Lehenga */}
        <path
          d="M 38 58 C 45 57 55 57 62 58 L 76 114 C 62 120 38 120 24 114 Z"
          fill="url(#bridalRed)"
          stroke="#D4AF37"
          strokeWidth="1.5"
        />

        {/* Gold Zari Details */}
        <g stroke="#FFD700" strokeWidth="1.2" opacity="0.9">
          <line x1="43" y1="58" x2="35" y2="114" strokeDasharray="2 3" />
          <line x1="50" y1="58" x2="50" y2="116" strokeDasharray="2 3" />
          <line x1="57" y1="58" x2="65" y2="114" strokeDasharray="2 3" />
          <path d="M 24 106 Q 50 114 76 106" strokeWidth="3" />
          <path d="M 24 110 Q 50 118 76 110" strokeWidth="2" strokeDasharray="1 2" />
        </g>

        {/* Red Chooda */}
        <path d="M 32 60 L 30 75" stroke="#C92A2A" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 68 60 L 70 75" stroke="#C92A2A" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="30" cy="79" r="2.5" fill="#FFD700" />
        <circle cx="70" cy="79" r="2.5" fill="#FFD700" />
      </svg>
    </div>
  );
}

// Royal Couple Silhouette in Traditional Attire (Wedding Scene)
export function RoyalCoupleIllustration({ className = "w-48 h-48" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="flex items-end justify-center -space-x-4">
        <GroomIllustration className="w-28 h-40 transform translate-x-2" />
        <BrideIllustration className="w-28 h-40 transform -translate-x-2" />
      </div>
    </div>
  );
}

// Sacred Wedding Mandap with Agni & Sacred Garlands
export function WeddingMandapIllustration({ className = "w-48 h-40" }) {
  return (
    <svg viewBox="0 0 200 160" className={className} fill="none">
      <defs>
        <linearGradient id="mandapGold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF3B0" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8C6514" />
        </linearGradient>
      </defs>

      {/* Mandap Canopy / Dome (Mughal Arch Roof) */}
      <path
        d="M 30 40 Q 60 20 100 10 Q 140 20 170 40 L 165 48 Q 135 32 100 24 Q 65 32 35 48 Z"
        fill="url(#mandapGold)"
        stroke="#8C6514"
        strokeWidth="1.2"
      />
      <circle cx="100" cy="7" r="4" fill="#FFD700" stroke="#8C6514" strokeWidth="1" />
      <polygon points="98,3 102,3 100,0" fill="#FFD700" />

      {/* Hanging Floral Garlands */}
      <path d="M 35 46 Q 65 58 100 50 Q 135 58 165 46" stroke="#FF8C00" strokeWidth="3" strokeDasharray="3 4" />
      <path d="M 45 52 Q 72 64 100 58 Q 128 64 155 52" stroke="#FFD700" strokeWidth="2.5" strokeDasharray="2 3" />

      {/* Pillars */}
      <rect x="36" y="44" width="10" height="96" rx="2" fill="url(#mandapGold)" stroke="#6B4E0F" strokeWidth="1" />
      <line x1="41" y1="44" x2="41" y2="140" stroke="#FFF3B0" strokeWidth="1" />
      <rect x="52" y="46" width="8" height="94" rx="2" fill="#A88225" opacity="0.8" />

      <rect x="154" y="44" width="10" height="96" rx="2" fill="url(#mandapGold)" stroke="#6B4E0F" strokeWidth="1" />
      <line x1="159" y1="44" x2="159" y2="140" stroke="#FFF3B0" strokeWidth="1" />
      <rect x="140" y="46" width="8" height="94" rx="2" fill="#A88225" opacity="0.8" />

      {/* Marigold Wrapping on Pillars */}
      {[55, 75, 95, 115].map((y) => (
        <g key={y}>
          <ellipse cx="41" cy={y} rx="6" ry="2.5" fill="#FF8C00" />
          <ellipse cx="159" cy={y} rx="6" ry="2.5" fill="#FF8C00" />
        </g>
      ))}

      {/* Central Sacred Agni Fire */}
      <g transform="translate(70, 75) scale(0.5)">
        <SacredHavanKund />
      </g>

      {/* Sacred Base Floor Platform */}
      <polygon points="20,140 180,140 190,154 10,154" fill="#8B1E3F" stroke="#D4AF37" strokeWidth="1.5" />
      <rect x="25" y="148" width="150" height="4" fill="#D4AF37" />
    </svg>
  );
}

// Royal Elephant with Golden Howdah
export function RoyalElephantMotif({ className = "w-16 h-14" }) {
  return (
    <svg viewBox="0 0 100 80" className={className} fill="none">
      <path
        d="M 30 35 C 22 35 15 42 16 52 C 16 62 20 70 24 70 L 28 70 C 30 62 34 62 36 70 L 44 70 C 46 60 50 60 52 70 L 58 70 C 60 62 64 62 66 70 L 74 70 C 76 60 80 50 78 40 C 74 32 60 30 50 30 C 40 30 35 35 30 35 Z"
        fill="#555"
      />
      <path d="M 22 45 C 16 46 10 38 12 30 C 14 24 20 22 24 26 C 22 28 18 30 18 34 C 18 38 22 42 26 44 Z" fill="#555" />
      <path d="M 22 42 Q 16 42 18 36" stroke="#FFFDF6" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 35 38 Q 50 36 65 38 L 62 55 Q 50 58 38 55 Z" fill="#8B1E3F" stroke="#D4AF37" strokeWidth="1.2" />
      <circle cx="50" cy="46" r="2.5" fill="#FFD700" />
      <circle cx="28" cy="34" r="2" fill="#FFD700" />
      <path d="M 26 34 L 32 34" stroke="#FFD700" strokeWidth="1" />
    </svg>
  );
}

// Brass Urli with Floating Flowers (for Haldi)
export function HaldiUrliIllustration({ className = "w-28 h-20" }) {
  return (
    <svg viewBox="0 0 100 70" className={className} fill="none">
      <defs>
        <radialGradient id="urliGold" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#FFF2A7" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#784B08" />
        </radialGradient>
      </defs>
      {/* Brass Urli Pot Basin */}
      <ellipse cx="50" cy="44" rx="42" ry="16" fill="url(#urliGold)" stroke="#663E05" strokeWidth="1.5" />
      <ellipse cx="50" cy="42" rx="38" ry="12" fill="#FFE27A" opacity="0.9" />

      {/* Floating Marigolds and Lotus Petals in Water */}
      <circle cx="50" cy="42" r="5" fill="#FF8C00" />
      <circle cx="50" cy="42" r="2" fill="#FFF3B0" />
      <circle cx="36" cy="40" r="4.5" fill="#FF6B6B" />
      <circle cx="64" cy="40" r="4.5" fill="#FF8C00" />
      <circle cx="28" cy="43" r="3.5" fill="#FFA500" />
      <circle cx="72" cy="43" r="3.5" fill="#FFD700" />

      {/* Urli Brass Handles */}
      <path d="M 8 40 C 2 34 2 50 8 46" stroke="#B8860B" strokeWidth="2.5" fill="none" />
      <path d="M 92 40 C 98 34 98 50 92 46" stroke="#B8860B" strokeWidth="2.5" fill="none" />

      {/* Turmeric Powder Mound & Sticks */}
      <ellipse cx="50" cy="56" rx="20" ry="6" fill="#F59E0B" />
      <circle cx="48" cy="54" r="3" fill="#D97706" />
      <circle cx="54" cy="54" r="2.5" fill="#FBBF24" />
    </svg>
  );
}

// Mehndi Henna Cone & Intricate Paisley Palms (for Mehndi)
export function MehndiIllustration({ className = "w-28 h-28" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <defs>
        <radialGradient id="mehndiHenna" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#5D4037" />
          <stop offset="100%" stopColor="#2E180E" />
        </radialGradient>
      </defs>

      {/* Mehndi Cone */}
      <polygon points="75,15 92,20 60,65" fill="#40916C" stroke="#1B4332" strokeWidth="1" />
      <path d="M 75 15 Q 85 14 92 20" stroke="#FFD700" strokeWidth="1.5" />
      {/* Henna tip fine line flowing */}
      <path d="M 60 65 Q 52 70 48 60" stroke="#4A2810" strokeWidth="1.8" strokeLinecap="round" />

      {/* Stylized Hand Palm with Intricate Mandala / Paisley Mehndi */}
      <path
        d="M 28 85 C 22 75 22 55 24 45 C 24 38 32 38 34 45 C 36 34 44 34 46 45 C 48 32 56 32 58 45 C 60 38 68 40 68 48 C 66 60 66 75 62 85 Z"
        fill="#FDF0DF"
        stroke="#4A2810"
        strokeWidth="1.5"
      />

      {/* Intricate Henna Flower in Center Palm */}
      <circle cx="46" cy="62" r="5" stroke="#4A2810" strokeWidth="1.2" strokeDasharray="1 1.5" />
      <circle cx="46" cy="62" r="2.5" fill="#4A2810" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <circle
          key={i}
          cx={46 + 8 * Math.cos((angle * Math.PI) / 180)}
          cy={62 + 8 * Math.sin((angle * Math.PI) / 180)}
          r="1.5"
          fill="#4A2810"
        />
      ))}

      {/* Finger Tips Dipped in Henna (Traditional Gorintaku style) */}
      <path d="M 24 45 C 24 38 32 38 34 45 Z" fill="#4A2810" />
      <path d="M 36 37 C 36 34 44 34 46 37 Z" fill="#4A2810" />
      <path d="M 48 35 C 48 32 56 32 58 35 Z" fill="#4A2810" />
      <path d="M 60 42 C 60 38 68 40 68 44 Z" fill="#4A2810" />
    </svg>
  );
}

// Sangeet Musical Dance Silhouettes with Instruments
export function SangeetDanceIllustration({ className = "w-40 h-28" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 160 100" className="w-full h-full drop-shadow-sm" fill="none">
        {/* Musical Notes & Sparkles Floating */}
        <g fill="#FFD700" className="animate-pulse" style={{ animationDuration: '2s' }}>
          <text x="30" y="24" fontSize="14" fontFamily="serif">♪</text>
          <text x="120" y="20" fontSize="18" fontFamily="serif">♫</text>
          <text x="75" y="15" fontSize="12" fontFamily="serif">♩</text>
          <circle cx="45" cy="18" r="1.5" />
          <circle cx="110" cy="30" r="1.5" />
        </g>

        {/* Dancing Female Silhouette */}
        <path
          d="M 52 30 C 55 26 62 26 64 30 C 66 36 60 38 58 42 L 56 50 C 62 52 70 50 74 42 L 72 40 M 52 50 C 46 56 40 66 38 85 C 48 90 70 90 80 85 C 76 68 70 56 64 52 Z"
          fill="#D4AF37"
          opacity="0.9"
        />
        {/* Odhni Swirl in Dance */}
        <path d="M 40 45 Q 60 35 84 48 Q 92 60 86 78" stroke="#FF6B6B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Dancing Male Silhouette with Dhol */}
        <path
          d="M 108 30 C 111 26 117 26 120 30 C 122 36 118 38 116 42 L 115 54 C 110 56 102 62 100 85 L 128 85 C 128 66 125 56 120 52 Z"
          fill="#B8860B"
          opacity="0.9"
        />
        {/* Safa feather tip */}
        <path d="M 115 26 Q 118 20 122 24" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" />

        {/* Ground Floral Rangoli */}
        <ellipse cx="80" cy="90" rx="55" ry="6" fill="#8B1E3F" opacity="0.3" />
      </svg>
    </div>
  );
}

// Ornate Indian Temple Architectural Pillars
export function TemplePillarsFraming({ children, className = "" }) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Left Carved Stone Pillar */}
      <div className="absolute left-1 top-0 bottom-0 w-4 sm:w-6 pointer-events-none opacity-40 sm:opacity-70 flex flex-col justify-between z-10">
        <div className="h-12 bg-gradient-to-b from-[#B8860B] to-transparent border-t-2 border-l-2 border-[#D4AF37]" />
        <div className="h-full border-l-2 border-dashed border-[#D4AF37]/50 mx-auto" />
        <div className="h-12 bg-gradient-to-t from-[#B8860B] to-transparent border-b-2 border-l-2 border-[#D4AF37]" />
      </div>

      {/* Right Carved Stone Pillar */}
      <div className="absolute right-1 top-0 bottom-0 w-4 sm:w-6 pointer-events-none opacity-40 sm:opacity-70 flex flex-col justify-between z-10">
        <div className="h-12 bg-gradient-to-b from-[#B8860B] to-transparent border-t-2 border-r-2 border-[#D4AF37]" />
        <div className="h-full border-r-2 border-dashed border-[#D4AF37]/50 mx-auto" />
        <div className="h-12 bg-gradient-to-t from-[#B8860B] to-transparent border-b-2 border-r-2 border-[#D4AF37]" />
      </div>

      {children}
    </div>
  );
}
