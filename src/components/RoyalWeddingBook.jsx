import React, { useState, useRef, useEffect, useCallback } from 'react';
import { flushSync } from 'react-dom';
import gsap from 'gsap';
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
import { Volume2, VolumeX } from 'lucide-react';
import { subscribeMusicState, startMusic, stopMusic } from '../utils/audioManager';

const PAGES = [
  { id: 'ganesh', title: 'Ganesh Blessings', hindi: 'श्री गणेशाय नमः', component: Scene2Ganesh },
  { id: 'groom-family', title: "Groom's Family", hindi: 'वर पक्ष', component: Scene3GroomFamily },
  { id: 'bride-family', title: "Bride's Family", hindi: 'वधू पक्ष', component: Scene4BrideFamily },
  { id: 'roka', title: 'Pooja & Matkor', hindi: 'पूजा एवं मटकोर', component: Scene5Roka },
  { id: 'events-overview', title: 'Celebrations', hindi: 'मांगलिक कार्यक्रम', component: Scene6OverviewEvents },
  { id: 'wedding', title: 'Wedding Ceremony', hindi: 'विवाह संस्कार', component: Scene10WeddingCeremony },
  { id: 'pheras', title: 'Shaadi / Pheras', hindi: 'सात फेरे', component: Scene11ShaadiPheras },
  { id: 'venue', title: 'Wedding Venue', hindi: 'शुभ स्थल', component: Scene12Venue },
  { id: 'countdown', title: 'The Big Day', hindi: 'शुभ मुहूर्त', component: Scene13Countdown },
  { id: 'final', title: 'Cordially Invited', hindi: 'सादर आमंत्रण', component: Scene15FinalInvite },
];

export default function RoyalWeddingBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [targetPage, setTargetPage] = useState(1);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [hasDoorOpened, setHasDoorOpened] = useState(false);
  const isFlippingRef = useRef(false);

  const bookStageRef = useRef(null);
  const activePageRef = useRef(null);
  const incomingPageRef = useRef(null);
  const pageShadowRef = useRef(null);

  // Music state subscriber
  useEffect(() => {
    const unsubscribe = subscribeMusicState((playing) => {
      setIsMusicPlaying(playing);
    });
    return unsubscribe;
  }, []);

  // Luxury Royal Silk Album Page Turn (Silky smooth, zero distortion, GPU accelerated)
  const turnToPage = useCallback((newIndex, direction = 'next') => {
    if (isFlippingRef.current) return;
    if (newIndex < 0 || newIndex >= PAGES.length) return;
    if (newIndex === currentPage) return;

    isFlippingRef.current = true;

    // Synchronously render the incoming scene component before animation starts
    flushSync(() => {
      setTargetPage(newIndex);
    });

    const activeEl = activePageRef.current;
    const incomingEl = incomingPageRef.current;
    const shadowEl = pageShadowRef.current;

    if (!activeEl || !incomingEl) {
      setCurrentPage(newIndex);
      isFlippingRef.current = false;
      return;
    }

    incomingEl.style.display = 'flex';

    const tl = gsap.timeline({
      onComplete: () => {
        // Synchronously update current page before clearing props to eliminate any flicker
        flushSync(() => {
          setCurrentPage(newIndex);
        });
        gsap.set([activeEl, incomingEl], {
          clearProps: 'all',
        });
        if (shadowEl) shadowEl.style.opacity = '0';
        incomingEl.style.display = 'none';
        isFlippingRef.current = false;
      },
    });

    if (direction === 'next') {
      // 1. Incoming page starts underneath, softly scaled
      gsap.set(incomingEl, {
        zIndex: 1,
        opacity: 0.85,
        scale: 0.96,
        y: 0,
        xPercent: 0,
      });

      // 2. Active page slides gracefully to the left like silk parchment
      gsap.set(activeEl, {
        zIndex: 10,
        transformOrigin: 'left center',
        boxShadow: '-8px 0 25px rgba(0,0,0,0.4)',
      });

      tl.to(
        activeEl,
        {
          xPercent: -100,
          opacity: 0.8,
          duration: 0.56,
          ease: 'power2.out',
        },
        0
      ).to(
        incomingEl,
        {
          scale: 1,
          opacity: 1,
          duration: 0.56,
          ease: 'power2.out',
        },
        0
      );
    } else {
      // Previous page glides smoothly in from the left side
      gsap.set(incomingEl, {
        zIndex: 10,
        xPercent: -100,
        opacity: 0.95,
        transformOrigin: 'left center',
        boxShadow: '10px 0 30px rgba(0,0,0,0.5)',
      });

      gsap.set(activeEl, {
        zIndex: 1,
        scale: 1,
        opacity: 1,
      });

      tl.to(
        incomingEl,
        {
          xPercent: 0,
          opacity: 1,
          duration: 0.56,
          ease: 'power2.out',
        },
        0
      ).to(
        activeEl,
        {
          scale: 0.96,
          opacity: 0.85,
          duration: 0.56,
          ease: 'power2.out',
        },
        0
      );
    }
  }, [currentPage]);

  const handleNext = useCallback(() => {
    if (currentPage < PAGES.length - 1 && !isFlippingRef.current) {
      turnToPage(currentPage + 1, 'next');
    }
  }, [currentPage, turnToPage]);

  const handlePrev = useCallback(() => {
    if (currentPage > 0 && !isFlippingRef.current) {
      turnToPage(currentPage - 1, 'prev');
    }
  }, [currentPage, turnToPage]);

  // Instant wheel scroll response in ANY direction (zero delay!)
  useEffect(() => {
    const stage = bookStageRef.current;
    if (!stage) return;

    let wheelCooldown = false;

    const onWheel = (e) => {
      e.preventDefault();
      if (isFlippingRef.current || wheelCooldown) return;

      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = isHorizontal ? e.deltaX : e.deltaY;

      if (Math.abs(delta) > 10) {
        wheelCooldown = true;
        setTimeout(() => {
          wheelCooldown = false;
        }, 360);

        if (delta > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    };

    stage.addEventListener('wheel', onWheel, { passive: false });
    return () => stage.removeEventListener('wheel', onWheel);
  }, [handleNext, handlePrev]);

  // Instant Touch Swipe in ANY direction (Up/Down AND Left/Right)
  useEffect(() => {
    const stage = bookStageRef.current;
    if (!stage) return;

    let touchStartX = 0;
    let touchStartY = 0;

    const onTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const onTouchEnd = (e) => {
      if (isFlippingRef.current) return;
      const diffX = touchStartX - e.changedTouches[0].clientX;
      const diffY = touchStartY - e.changedTouches[0].clientY;

      const isHorizontal = Math.abs(diffX) >= Math.abs(diffY);
      const mainDiff = isHorizontal ? diffX : diffY;

      // Swiping Left or Up -> Next Page
      // Swiping Right or Down -> Previous Page
      if (Math.abs(mainDiff) > 18) {
        if (mainDiff > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    };

    stage.addEventListener('touchstart', onTouchStart, { passive: true });
    stage.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      stage.removeEventListener('touchstart', onTouchStart);
      stage.removeEventListener('touchend', onTouchEnd);
    };
  }, [handleNext, handlePrev]);

  // Tap-to-turn (Right side turns next, left side turns prev)
  const handleStageClick = (e) => {
    if (e.target.closest('button') || e.target.closest('a')) return;
    if (isFlippingRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;

    if (clickX > rect.width * 0.65) {
      handleNext();
    } else if (clickX < rect.width * 0.35) {
      handlePrev();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleNext, handlePrev]);

  const toggleMusic = () => {
    if (isMusicPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  };

  const CurrentSceneComponent = PAGES[currentPage].component;
  const IncomingSceneComponent = PAGES[targetPage] ? PAGES[targetPage].component : CurrentSceneComponent;

  return (
    <div className="w-screen h-screen min-h-screen bg-[#110105] flex items-center justify-center overflow-hidden relative select-none">
      {/* Luxury Royal Silk Ambient Backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:26px_26px]" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-red-700/20 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-amber-600/20 blur-[100px] pointer-events-none" />

      {/* Floating Gentle Petals Shower */}
      <PetalShower enabled={true} />

      {/* Main Luxury Wedding Book Container */}
      <div
        ref={bookStageRef}
        onClick={handleStageClick}
        className="w-full h-full sm:h-[96dvh] sm:max-w-[440px] md:max-w-[460px] sm:rounded-3xl relative z-20 shadow-[0_0_80px_rgba(0,0,0,0.95)] border-0 sm:border-[3px] sm:border-[#D4AF37]/60 overflow-hidden flex flex-col justify-between bg-[#1A0308] cursor-pointer touch-none"
        title="Scroll or Swipe to turn pages"
      >
        {/* GSAP 3D Royal Palace Door Opening Screen */}
        {!hasDoorOpened && (
          <RoyalDoorOpening onOpened={() => setHasDoorOpened(true)} />
        )}

        {/* Book Left Spine Binding (Simulated Gold Thread Dori & Velvet Spine) */}
        <div className="absolute left-0 top-0 bottom-0 w-3 sm:w-3.5 bg-gradient-to-r from-[#2A030C] via-[#520918] to-transparent z-40 pointer-events-none border-r border-[#D4AF37]/40">
          <div className="h-full flex flex-col justify-around py-8 items-center">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-1.5 h-3 rounded-full bg-[#D4AF37] shadow-[0_0_4px_#FFD700]" />
            ))}
          </div>
        </div>

        {/* Page Shadow Layer */}
        <div
          ref={pageShadowRef}
          className="absolute inset-0 z-30 pointer-events-none bg-black/60 opacity-0"
        />

        {/* Active Page */}
        <div
          ref={activePageRef}
          className="w-full h-full relative z-10 flex flex-col justify-center overflow-hidden [transform:translateZ(0)] [backface-visibility:hidden] will-change-transform"
        >
          <CurrentSceneComponent />
        </div>

        {/* Incoming Page Buffer */}
        <div
          ref={incomingPageRef}
          className="w-full h-full absolute inset-0 z-0 hidden flex flex-col justify-center overflow-hidden [transform:translateZ(0)] [backface-visibility:hidden] will-change-transform"
        >
          <IncomingSceneComponent />
        </div>

        {/* Floating Minimal Gold Music Button (Bottom-Right) */}
        <button
          onClick={toggleMusic}
          className={`absolute bottom-3 right-3 z-40 w-10 h-10 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.6)] border transition-all duration-300 ${
            isMusicPlaying
              ? 'bg-gradient-to-tr from-amber-600 to-yellow-400 border-white/80 text-[#3E0513] shadow-[0_0_20px_rgba(212,175,55,0.7)] animate-pulse'
              : 'bg-black/60 backdrop-blur-md border-amber-400/50 text-amber-200 hover:text-white'
          }`}
          title={isMusicPlaying ? 'Mute Music' : 'Play Shehnai & Sitar Music'}
          aria-label="Toggle Wedding Music"
        >
          {isMusicPlaying ? (
            <Volume2 className="w-4 h-4 text-[#2A030C]" />
          ) : (
            <VolumeX className="w-4 h-4 text-amber-300/80" />
          )}
        </button>

        {/* Subtle Page Counter (Bottom-Left) */}
        <div className="absolute bottom-2.5 left-6 z-40 pointer-events-none">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-sm border border-amber-400/30 text-amber-200/90 text-[10px] font-serif shadow-sm">
            <span className="font-hindi text-amber-300">पृष्ठ {String(currentPage + 1).padStart(2, '0')} / {String(PAGES.length).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Sleek Golden Progress Ribbon at Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/40 z-40 pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 transition-all duration-300 ease-out"
            style={{ width: `${((currentPage + 1) / PAGES.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
