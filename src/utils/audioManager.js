// Global Audio Manager for Indian Wedding Music
// Features: Rich Shehnai & Tanpura Web Audio Synthesizer + Custom MP3 playback support

let audioCtx = null;
let isPlaying = false;
let intervalId = null;
let masterGain = null;
let customAudio = null;
let customAudioUrl = null;
const listeners = new Set();

const notifyListeners = () => {
  listeners.forEach((callback) => callback(isPlaying));
};

export const subscribeMusicState = (callback) => {
  listeners.add(callback);
  callback(isPlaying);
  return () => listeners.delete(callback);
};

export const getIsMusicPlaying = () => isPlaying;

// Traditional Indian Raga Kalyan / Bilawal Wedding Swaras in C# (Sa Pa Sa)
const baseFreq = 138.59; // C#3
const notes = [
  baseFreq,            // 0: Sa (138.59 Hz)
  baseFreq * 9 / 8,    // 1: Re (155.91 Hz)
  baseFreq * 5 / 4,    // 2: Ga (173.24 Hz)
  baseFreq * 4 / 3,    // 3: Shuddha Ma (184.79 Hz)
  baseFreq * 45 / 32,  // 4: Ma tivra (194.89 Hz)
  baseFreq * 3 / 2,    // 5: Pa (207.88 Hz)
  baseFreq * 5 / 3,    // 6: Dha (231.00 Hz)
  baseFreq * 15 / 8,   // 7: Ni (259.85 Hz)
  baseFreq * 2,        // 8: Taar Sa (277.18 Hz)
  baseFreq * 9 / 4,    // 9: Taar Re (311.83 Hz)
  baseFreq * 5 / 2,    // 10: Taar Ga (346.48 Hz)
];

// Auspicious Wedding Shehnai Dhun phrasing (Mangalam / Vivah Raag)
const melody = [
  0, 2, 5, 7, 8, 7, 5, 2, 4, 2, 1, 0,
  5, 7, 8, 9, 8, 7, 5, 7, 8, 10, 8, 7,
  5, 2, 0, 2, 5, 8, 7, 5, 2, 1, 0
];

export const setCustomAudioTrack = (urlOrFile) => {
  if (customAudio) {
    customAudio.pause();
    customAudio = null;
  }
  if (typeof urlOrFile === 'string') {
    customAudioUrl = urlOrFile;
  } else if (urlOrFile instanceof File || urlOrFile instanceof Blob) {
    customAudioUrl = URL.createObjectURL(urlOrFile);
  }
  if (isPlaying) {
    stopMusic();
    startMusic();
  }
};

export const startMusic = async () => {
  if (isPlaying) return;

  // 1. If custom MP3 track exists, play it
  if (customAudioUrl) {
    try {
      if (!customAudio) {
        customAudio = new Audio(customAudioUrl);
        customAudio.loop = true;
        customAudio.volume = 0.85;
      }
      await customAudio.play();
      isPlaying = true;
      notifyListeners();
      return;
    } catch (e) {
      console.warn("Custom audio playback error, falling back to Shehnai synth:", e);
    }
  }

  // 2. Rich Multi-Harmonic Shehnai & Tanpura Synthesizer
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      await audioCtx.resume();
    }

    isPlaying = true;
    notifyListeners();

    // Master Gain
    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.32, audioCtx.currentTime);
    masterGain.connect(audioCtx.destination);

    // Warm Tanpura Drone (Sa - Pa - Sa chords with shimmering chorus)
    const dronePitches = [baseFreq, baseFreq * 1.5, baseFreq * 2];
    dronePitches.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = idx === 1 ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.045, audioCtx.currentTime);

      // Lowpass filter for smooth acoustic tanpura resonance
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450 + idx * 100, audioCtx.currentTime);

      // Gentle continuous vibrato
      const lfo = audioCtx.createOscillator();
      const lfoGain = audioCtx.createGain();
      lfo.frequency.setValueAtTime(2.8 + idx * 0.4, audioCtx.currentTime);
      lfoGain.gain.setValueAtTime(1.5, audioCtx.currentTime);
      lfo.connect(osc.frequency);
      lfo.start();

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);
      osc.start();
    });

    let noteIndex = 0;

    const playShehnaiNote = () => {
      if (!isPlaying || !audioCtx) return;

      const idx = melody[noteIndex % melody.length];
      const freq = notes[idx] || baseFreq;

      // Authentic Shehnai Dual-Oscillator (Main Reed + Harmonic overtone)
      const reedOsc = audioCtx.createOscillator();
      const sawOsc = audioCtx.createOscillator();
      const noteGain = audioCtx.createGain();
      const reedFilter = audioCtx.createBiquadFilter();

      reedOsc.type = 'triangle';
      sawOsc.type = 'sawtooth';

      reedOsc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      sawOsc.frequency.setValueAtTime(freq * 2, audioCtx.currentTime);

      // Shehnai acoustic filter
      reedFilter.type = 'bandpass';
      reedFilter.frequency.setValueAtTime(freq * 1.8, audioCtx.currentTime);
      reedFilter.Q.setValueAtTime(2.2, audioCtx.currentTime);

      // Meend (Graceful pitch glide to next swara)
      const nextIdx = melody[(noteIndex + 1) % melody.length];
      const nextFreq = notes[nextIdx] || freq;
      reedOsc.frequency.exponentialRampToValueAtTime(nextFreq, audioCtx.currentTime + 0.95);
      sawOsc.frequency.exponentialRampToValueAtTime(nextFreq * 2, audioCtx.currentTime + 0.95);

      // Expressive Shehnai Envelope
      noteGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      noteGain.gain.linearRampToValueAtTime(0.14, audioCtx.currentTime + 0.18);
      noteGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.15);

      reedOsc.connect(reedFilter);
      sawOsc.connect(reedFilter);
      reedFilter.connect(noteGain);
      noteGain.connect(masterGain);

      // Soft Temple Chime Bell every 4 notes
      if (noteIndex % 4 === 0) {
        try {
          const bellOsc = audioCtx.createOscillator();
          const bellGain = audioCtx.createGain();
          bellOsc.type = 'sine';
          bellOsc.frequency.setValueAtTime(1108.73, audioCtx.currentTime); // C#6
          bellGain.gain.setValueAtTime(0.025, audioCtx.currentTime);
          bellGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.8);
          bellOsc.connect(bellGain);
          bellGain.connect(masterGain);
          bellOsc.start();
          bellOsc.stop(audioCtx.currentTime + 1.8);
        } catch (e) {}
      }

      reedOsc.start(audioCtx.currentTime);
      sawOsc.start(audioCtx.currentTime);
      reedOsc.stop(audioCtx.currentTime + 1.2);
      sawOsc.stop(audioCtx.currentTime + 1.2);

      noteIndex++;
      intervalId = setTimeout(playShehnaiNote, 950 + Math.random() * 200);
    };

    playShehnaiNote();
  } catch (err) {
    console.warn("Wedding music audio error:", err);
  }
};

export const stopMusic = () => {
  isPlaying = false;
  notifyListeners();
  if (customAudio) {
    try {
      customAudio.pause();
    } catch (e) {}
  }
  if (intervalId) {
    clearTimeout(intervalId);
    intervalId = null;
  }
  if (audioCtx && audioCtx.state === 'running') {
    try {
      audioCtx.suspend();
    } catch (e) {}
  }
};

export const toggleMusic = () => {
  if (isPlaying) {
    stopMusic();
  } else {
    startMusic();
  }
};
