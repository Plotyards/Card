import React, { useState, useEffect, useRef, useCallback } from 'react';
import Scene2Ganesh from './scenes/Scene2Ganesh';
import Scene3GroomFamily from './scenes/Scene3GroomFamily';
import Scene4BrideFamily from './scenes/Scene4BrideFamily';
import Scene5Roka from './scenes/Scene5Roka';
import Scene6OverviewEvents from './scenes/Scene6OverviewEvents';
import Scene10WeddingCeremony from './scenes/Scene10WeddingCeremony';
import Scene11ShaadiPheras from './scenes/Scene11ShaadiPheras';
import Scene12Venue from './scenes/Scene12Venue';
import Scene13Countdown from './scenes/Scene13Countdown';
import Scene15FinalInvite from './scenes/Scene15FinalInvite';
import RoyalDoorOpening from './RoyalDoorOpening';
import PetalShower from './PetalShower';
import { Volume2, VolumeX, ChevronDown } from 'lucide-react';
import { subscribeMusicState, startMusic, stopMusic } from '../utils/audioManager';

const SCENES = [
  { id: 'ganesh', name: 'Ganesh Blessings', component: Scene2Ganesh },
  { id: 'groom-family', name: 'वर पक्ष (Groom)', component: Scene3GroomFamily },
  { id: 'bride-family', name: 'वधू पक्ष (Bride)', component: Scene4BrideFamily },
  { id: 'roka', name: 'Pooja & Matkor', component: Scene5Roka },
  { id: 'events-overview', name: 'Celebrations', component: Scene6OverviewEvents },
  { id: 'wedding', name: 'Wedding Ceremony', component: Scene10WeddingCeremony },
  { id: 'pheras', name: 'Shaadi / Pheras', component: Scene11ShaadiPheras },
  { id: 'venue', name: 'Venue & Map', component: Scene12Venue },
  { id: 'countdown', name: 'The Big Day', component: Scene13Countdown },
  { id: 'final', name: ' सादर आमंत्रण', component: Scene15FinalInvite },
];

export default function InvitationPage() {
  const containerRef = useRef(null);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [hasDoorOpened, setHasDoorOpened] = useState(false);

  // Music state subscriber
  useEffect(() => {
    const unsubscribe = subscribeMusicState((playing) => {
      setIsMusicPlaying(playing);
    });
    return unsubscribe;
  }, []);

  // Real-time zero-latency IntersectionObserver to track active scene
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll('.scene-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setActiveSceneIndex(index);
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.5,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Smooth advance to specific scene
  const scrollToScene = useCallback((index) => {
    if (index < 0 || index >= SCENES.length) return;
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll('.scene-card');
    const targetSection = sections[index];
    if (!targetSection) return;

    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, []);

  const handleNext = useCallback(() => {
    if (activeSceneIndex < SCENES.length - 1) {
      scrollToScene(activeSceneIndex + 1);
    }
  }, [activeSceneIndex, scrollToScene]);

  const handlePrev = useCallback(() => {
    if (activeSceneIndex > 0) {
      scrollToScene(activeSceneIndex - 1);
    }
  }, [activeSceneIndex, scrollToScene]);

  // Keyboard navigation (Arrow keys / Space)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const toggleMusic = () => {
    if (isMusicPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  };

  return (
    <div className="w-screen h-screen min-h-screen bg-[#140207] flex items-center justify-center overflow-hidden relative select-none">
      {/* Royal Ambient Indian Backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-red-700/20 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-amber-600/20 blur-[100px] pointer-events-none" />

      {/* Floating Gentle Petals Shower */}
      <PetalShower enabled={true} />

      {/* Primary Mobile-first 9:16 Vertical Invitation Stage */}
      <div className="w-full h-full sm:h-[96dvh] sm:max-w-[440px] md:max-w-[460px] sm:rounded-3xl relative z-20 shadow-[0_0_60px_rgba(0,0,0,0.9)] border-0 sm:border-2 sm:border-[#D4AF37]/50 overflow-hidden">
        {/* GSAP 3D Royal Palace Door Opening Screen */}
        {!hasDoorOpened && (
          <RoyalDoorOpening onOpened={() => setHasDoorOpened(true)} />
        )}

        {/* Scrollable Container with Native GPU-Accelerated Fluid Smooth Snapping */}
        <main
          ref={containerRef}
          className="w-full h-full overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar relative [overscroll-behavior-y:contain] [transform:translateZ(0)]"
          style={{
            scrollSnapType: 'y mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {SCENES.map((scene, idx) => {
            const SceneComponent = scene.component;
            return (
              <section
                key={scene.id}
                data-index={idx}
                className="scene-card w-full h-full min-h-screen sm:min-h-[96dvh] snap-start snap-always relative overflow-hidden flex flex-col justify-center [transform:translateZ(0)] will-change-transform"
              >
                <SceneComponent />
              </section>
            );
          })}
        </main>

        {/* Floating Minimal Gold Music Button (Bottom-Right Corner, unobtrusive, NO PILLS) */}
        <button
          onClick={toggleMusic}
          className={`absolute bottom-3 right-3 z-40 w-11 h-11 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.6)] border transition-all duration-300 ${
            isMusicPlaying
              ? 'bg-gradient-to-tr from-amber-600 to-yellow-400 border-white/80 text-[#3E0513] shadow-[0_0_20px_rgba(212,175,55,0.7)] animate-pulse'
              : 'bg-black/60 backdrop-blur-md border-amber-400/50 text-amber-200 hover:text-white'
          }`}
          title={isMusicPlaying ? 'Mute Music' : 'Play Shehnai & Sitar Music'}
          aria-label="Toggle Wedding Music"
        >
          {isMusicPlaying ? (
            <Volume2 className="w-5 h-5 text-[#2A030C]" />
          ) : (
            <VolumeX className="w-5 h-5 text-amber-300/80" />
          )}
        </button>

        {/* Floating Next Advance Arrow at Bottom Center (Subtle, instant response) */}
        {activeSceneIndex < SCENES.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 z-40 p-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-amber-400/30 text-amber-300/80 hover:text-amber-200 transition-all hover:scale-110 active:scale-95"
            aria-label="Next Card"
            title="Next Card"
          >
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        )}

        {/* Minimal Progress Line Indicator at Very Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30 z-30 pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-yellow-300 transition-all duration-300 ease-out"
            style={{ width: `${((activeSceneIndex + 1) / SCENES.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
