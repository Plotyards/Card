import React, { useMemo } from 'react';

export default function PetalShower({ enabled = true }) {
  if (!enabled) return null;

  // Generate fixed random properties for 18 gentle petals
  const petals = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${(i * 5.5 + Math.sin(i) * 15) % 96}%`,
      delay: `${(i * 0.7) % 8}s`,
      duration: `${8 + (i % 6) * 2}s`,
      size: 14 + (i % 4) * 4,
      isMarigold: i % 3 === 0, // mix of rose petals and marigold petals
      opacity: 0.5 + (i % 5) * 0.1,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal-animation"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            top: '-30px',
          }}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.3}
            viewBox="0 0 30 40"
            fill="none"
            style={{ opacity: petal.opacity }}
          >
            {petal.isMarigold ? (
              // Golden Marigold petal
              <path
                d="M15 0 C25 10 30 25 15 40 C0 25 5 10 15 0 Z"
                fill="url(#marigoldGrad)"
              />
            ) : (
              // Royal Rose petal
              <path
                d="M15 0 C26 8 28 26 15 38 C2 26 4 8 15 0 Z"
                fill="url(#roseGrad)"
              />
            )}
            <defs>
              <linearGradient id="roseGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#C41E3A" />
                <stop offset="60%" stopColor="#960018" />
                <stop offset="100%" stopColor="#5E000E" />
              </linearGradient>
              <linearGradient id="marigoldGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="70%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
}
