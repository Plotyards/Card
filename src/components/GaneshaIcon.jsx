import React from 'react';

export default function GaneshaIcon({ className = "w-16 h-16 text-wedding-gold", showText = true }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="currentColor"
        aria-label="Lord Ganesha Motif"
      >
        {/* Sacred Traditional Stylized Lord Ganesha Silhouette & Tilak */}
        <path d="M50 8 C47 8 44 11 44 14 C44 17 47 20 50 20 C53 20 56 17 56 14 C56 11 53 8 50 8 Z" fill="currentColor" />
        {/* Crown / Mukut */}
        <path d="M42 22 L58 22 L54 16 L50 12 L46 16 Z" fill="currentColor" />
        {/* Tilak mark */}
        <path d="M49 24 L51 24 L51 32 L49 32 Z" fill="#E53E3E" />
        <circle cx="50" cy="35" r="1.5" fill="#E53E3E" />
        
        {/* Head & Ears */}
        {/* Left Ear */}
        <path d="M38 28 C30 26 22 34 25 46 C27 54 36 56 40 52 C38 46 38 36 38 28 Z" fill="currentColor" opacity="0.9" />
        {/* Right Ear */}
        <path d="M62 28 C70 26 78 34 75 46 C73 54 64 56 60 52 C62 46 62 36 62 28 Z" fill="currentColor" opacity="0.9" />

        {/* Trunk (Sondh) gracefully curved to the left / right */}
        <path d="M46 32 C43 40 45 52 46 62 C47 70 48 76 54 78 C59 80 63 77 62 72 C61 68 56 68 55 71 C54 73 51 72 50 67 C49 60 48 48 54 32 Z" fill="currentColor" />

        {/* Modak in trunk */}
        <circle cx="63" cy="71" r="2.5" fill="#D4AF37" />

        {/* Sacred Om curve accents */}
        <path d="M34 68 C36 63 42 62 45 66 C43 69 38 71 34 68 Z" fill="currentColor" opacity="0.8" />
        
        {/* Subtle base lotus petals */}
        <path d="M30 84 C40 80 60 80 70 84 C62 88 38 88 30 84 Z" fill="currentColor" opacity="0.6" />
        <path d="M36 86 C45 83 55 83 64 86 C58 89 42 89 36 86 Z" fill="currentColor" opacity="0.8" />
      </svg>
      {showText && (
        <span className="font-hindi text-xs md:text-sm tracking-widest text-wedding-gold-dark mt-1 font-medium">
          ॥ श्री गणेशाय नमः ॥
        </span>
      )}
    </div>
  );
}
