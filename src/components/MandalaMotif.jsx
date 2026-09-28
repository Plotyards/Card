import React from 'react';

export function MandalaCircle({ className = "w-64 h-64 text-wedding-gold/20" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor">
      {/* Concentric rings */}
      <circle cx="100" cy="100" r="95" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="85" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="70" strokeWidth="0.8" />
      <circle cx="100" cy="100" r="50" strokeWidth="1.2" strokeDasharray="2 4" />
      <circle cx="100" cy="100" r="30" strokeWidth="1" />
      <circle cx="100" cy="100" r="12" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />

      {/* 12 Petals array */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 100 100)`}>
          <path
            d="M100 30 C94 45 94 65 100 80 C106 65 106 45 100 30 Z"
            strokeWidth="0.9"
            fill="currentColor"
            fillOpacity="0.05"
          />
          <path
            d="M100 15 C92 30 92 50 100 60 C108 50 108 30 100 15 Z"
            strokeWidth="0.8"
          />
          <circle cx="100" cy="22" r="2" fill="currentColor" />
          <line x1="100" y1="80" x2="100" y2="92" strokeWidth="0.8" />
        </g>
      ))}

      {/* Outer petal tips */}
      {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 100 100)`}>
          <circle cx="100" cy="12" r="1.5" fill="currentColor" />
          <path d="M96 20 Q100 12 104 20" strokeWidth="1" />
        </g>
      ))}
    </svg>
  );
}

export function PaisleyDivider({ className = "my-6 text-wedding-gold", title = "" }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      {/* Left Ornamental Wing */}
      <div className="flex items-center">
        <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-wedding-gold" />
        <span className="inline-block w-1.5 h-1.5 rotate-45 border border-wedding-gold mx-1" />
        <span className="h-[1px] w-4 sm:w-8 bg-wedding-gold" />
      </div>

      {/* Center Motif / Text */}
      {title ? (
        <span className="font-hindi text-base sm:text-lg font-semibold text-wedding-maroon px-2 tracking-wide">
          {title}
        </span>
      ) : (
        <svg viewBox="0 0 40 24" className="w-8 h-5 text-wedding-gold" fill="currentColor">
          <path d="M20 2 C16 6 12 12 14 18 C15 21 18 22 20 22 C22 22 25 21 26 18 C28 12 24 6 20 2 Z" opacity="0.9" />
          <circle cx="20" cy="12" r="2" fill="#600C1F" />
          <circle cx="8" cy="12" r="1.5" />
          <circle cx="32" cy="12" r="1.5" />
          <path d="M4 12 Q8 9 12 12" stroke="currentColor" fill="none" strokeWidth="1" />
          <path d="M28 12 Q32 9 36 12" stroke="currentColor" fill="none" strokeWidth="1" />
        </svg>
      )}

      {/* Right Ornamental Wing */}
      <div className="flex items-center">
        <span className="h-[1px] w-4 sm:w-8 bg-wedding-gold" />
        <span className="inline-block w-1.5 h-1.5 rotate-45 border border-wedding-gold mx-1" />
        <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-wedding-gold" />
      </div>
    </div>
  );
}

export function CornerFlourish({ position = "tl" }) {
  const classes = {
    tl: "top-2 left-2",
    tr: "top-2 right-2 rotate-90",
    bl: "bottom-2 left-2 -rotate-90",
    br: "bottom-2 right-2 rotate-180"
  };

  return (
    <div className={`absolute ${classes[position]} pointer-events-none w-8 h-8 opacity-75 text-wedding-gold`}>
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor">
        <path d="M0 0 L18 0 C18 10 10 18 0 18 Z" fill="currentColor" fillOpacity="0.08" strokeWidth="1" />
        <circle cx="4" cy="4" r="1.5" fill="currentColor" />
        <path d="M0 0 L28 0" strokeWidth="1.5" />
        <path d="M0 0 L0 28" strokeWidth="1.5" />
        <path d="M6 6 Q14 6 14 14 Q6 14 6 6" strokeWidth="1" />
      </svg>
    </div>
  );
}
