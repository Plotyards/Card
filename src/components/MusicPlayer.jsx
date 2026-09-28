import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { subscribeMusicState, toggleMusic, startMusic } from '../utils/audioManager';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeMusicState((state) => {
      setIsPlaying(state);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center">
      <div className="relative group">
        {/* Floating tooltip */}
        <div className="absolute bottom-full right-0 mb-2 hidden group-hover:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900/90 text-wedding-gold text-xs font-medium whitespace-nowrap shadow-lg backdrop-blur-sm pointer-events-none transition-all">
          <Music className="w-3.5 h-3.5" />
          <span>{isPlaying ? 'Pause Wedding Shehnai' : 'Play Wedding Shehnai'}</span>
        </div>

        {/* Music Button */}
        <button
          onClick={toggleMusic}
          aria-label={isPlaying ? "Mute wedding music" : "Play wedding music"}
          className={`relative flex items-center gap-2.5 px-4 py-2.5 rounded-full shadow-lg border backdrop-blur-md transition-all duration-300 cursor-pointer ${
            isPlaying
              ? 'bg-wedding-maroon text-wedding-gold border-wedding-gold shadow-gold-md scale-105'
              : 'bg-white/95 text-stone-700 border-wedding-gold/50 hover:border-wedding-gold hover:text-wedding-maroon shadow-md'
          }`}
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-4 h-4 animate-bounce text-wedding-gold" />
              <div className="flex items-end gap-0.5 h-3.5 px-0.5">
                <span className="w-0.5 h-full bg-wedding-gold animate-[pulse_0.6s_ease-in-out_infinite]" />
                <span className="w-0.5 h-2 bg-wedding-gold animate-[pulse_0.9s_ease-in-out_infinite]" />
                <span className="w-0.5 h-3 bg-wedding-gold animate-[pulse_0.7s_ease-in-out_infinite]" />
              </div>
              <span className="text-xs font-serif font-semibold tracking-wider uppercase hidden sm:inline">
                Shehnai Playing
              </span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-wedding-maroon" />
              <span className="text-xs font-serif font-semibold tracking-wider uppercase hidden sm:inline">
                Play Shehnai
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
