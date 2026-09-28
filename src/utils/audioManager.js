// Global Audio Manager for Indian Wedding Ambient Shehnai & Sitar Music

let audioCtx = null;
let isPlaying = false;
let intervalId = null;
let masterGain = null;
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

// Traditional Indian Raga Yaman & Bilawal Swaras in C# (Sa Pa Sa)
const baseFreq = 138.59; // C#3
const notes = [
  baseFreq,            // Sa (138.59 Hz)
  baseFreq * 9 / 8,    // Re (155.91 Hz)
  baseFreq * 5 / 4,    // Ga (173.24 Hz)
  baseFreq * 45 / 32,  // Ma tivra (194.89 Hz)
  baseFreq * 3 / 2,    // Pa (207.88 Hz)
  baseFreq * 5 / 3,    // Dha (231.00 Hz)
  baseFreq * 15 / 8,   // Ni (259.85 Hz)
  baseFreq * 2,        // Taar Sa (277.18 Hz)
  baseFreq * 9 / 4,    // Taar Re (311.83 Hz)
  baseFreq * 5 / 2,    // Taar Ga (346.48 Hz)
];

export const startMusic = async () => {
  if (isPlaying) return;

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

    // Master Gain for pleasant volume
    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.18, audioCtx.currentTime);
    masterGain.connect(audioCtx.destination);

    // Warm Tanpura Drone (Sa - Pa - Sa harmonics)
    const dronePitches = [baseFreq, baseFreq * 1.5, baseFreq * 2];
    dronePitches.forEach((freq) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.035, audioCtx.currentTime);

      // Gentle continuous vibrato
      const lfo = audioCtx.createOscillator();
      const lfoGain = audioCtx.createGain();
      lfo.frequency.setValueAtTime(3.2, audioCtx.currentTime);
      lfoGain.gain.setValueAtTime(1.2, audioCtx.currentTime);
      lfo.connect(osc.frequency);
      lfo.start();

      osc.connect(gain);
      gain.connect(masterGain);
      osc.start();
    });

    // Traditional Shehnai melody sequence (Auspicious wedding raag phrasing)
    const melody = [
      0, 2, 4, 3, 4, 6, 7, 6, 4, 2, 1, 0,
      4, 6, 7, 8, 7, 6, 4, 2, 0, 4, 7, 8
    ];
    let noteIndex = 0;

    const playShehnaiNote = () => {
      if (!isPlaying || !audioCtx) return;

      const idx = melody[noteIndex % melody.length];
      const freq = notes[idx] || baseFreq;

      const osc = audioCtx.createOscillator();
      const oscGain = audioCtx.createGain();

      // Rich Shehnai timbre (sine + gentle saw overtone)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      // Graceful Meend (glide) to next swara
      const nextIdx = melody[(noteIndex + 1) % melody.length];
      const nextFreq = notes[nextIdx] || freq;
      osc.frequency.exponentialRampToValueAtTime(
        nextFreq,
        audioCtx.currentTime + 1.1
      );

      // Envelope with soft attack and decay
      oscGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      oscGain.gain.linearRampToValueAtTime(0.075, audioCtx.currentTime + 0.25);
      oscGain.gain.exponentialRampToValueAtTime(
        0.001,
        audioCtx.currentTime + 1.35
      );

      osc.connect(oscGain);
      oscGain.connect(masterGain);

      osc.start(audioCtx.currentTime);
      osc.stop(audioCtx.currentTime + 1.4);

      noteIndex++;
      intervalId = setTimeout(playShehnaiNote, 1150 + Math.random() * 300);
    };

    playShehnaiNote();
  } catch (err) {
    console.warn("Autoplay audio error:", err);
  }
};

export const stopMusic = () => {
  isPlaying = false;
  notifyListeners();
  if (intervalId) {
    clearTimeout(intervalId);
    intervalId = null;
  }
  if (audioCtx && audioCtx.state === 'running') {
    audioCtx.suspend();
  }
};

export const toggleMusic = () => {
  if (isPlaying) {
    stopMusic();
  } else {
    startMusic();
  }
};

// Autoplay is strictly disabled as requested. Music starts only when user clicks the music button.
export const initAutoplayListeners = () => {
  // No-op to respect user prompt: "Do NOT autoplay sound. Music starts only after user clicks the button."
};
