/**
 * Centralized, SSR-safe sound manager for the game.
 *
 * - Every sound path lives in `SOUND_PATHS` (single source of truth).
 * - All audio is created lazily in the browser only; nothing runs during SSR.
 * - `play()` rejections (e.g. autoplay policy) are swallowed silently so audio
 *   can never crash or block gameplay.
 * - SFX (bonk/correct/wrong) restart from 0 on each trigger and are hard-capped
 *   to ~3s so a long file can't keep playing.
 * - `theme` loops at a moderate volume and is idempotent: calling `startTheme()`
 *   repeatedly will not restart it.
 */
export type SoundKey = "bonk" | "correct" | "wrong" | "final" | "theme";
export type SfxKey = Exclude<SoundKey, "theme">;

const SOUND_PATHS: Record<SoundKey, string> = {
  bonk: "/sounds/bonk.mp3",
  correct: "/sounds/correct.mp3",
  wrong: "/sounds/wrong.mp3",
  final: "/sounds/final.mp3",
  theme: "/sounds/theme.mp3",
};

const DEFAULT_SFX_MS = 3000;
const THEME_VOLUME = 0.3;

type SfxOptions = {
  volume?: number;
  /** Hard cap on playback length; the SFX is stopped after this many ms. */
  maxDurationMs?: number;
};

const cache = new Map<SoundKey, HTMLAudioElement>();
const sfxTimers = new Map<SoundKey, ReturnType<typeof setTimeout>>();

let muted = false;
let themeStarted = false;

function getAudio(key: SoundKey): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;
  let audio = cache.get(key);
  if (!audio) {
    try {
      audio = new Audio(SOUND_PATHS[key]);
      audio.preload = "auto";
      cache.set(key, audio);
    } catch {
      return null;
    }
  }
  return audio;
}

/**
 * Play a short sound effect. Restarts from the beginning and stops after a
 * capped duration (default 3s; `final` is given a longer cap by its caller).
 */
export function playSfx(key: SfxKey, options: SfxOptions = {}): void {
  const audio = getAudio(key);
  if (!audio) return;
  const { volume = 0.65, maxDurationMs = DEFAULT_SFX_MS } = options;
  try {
    audio.loop = false;
    audio.muted = muted;
    audio.volume = volume;
    audio.currentTime = 0;
    const result = audio.play();
    if (result && typeof result.catch === "function") result.catch(() => {});

    const prev = sfxTimers.get(key);
    if (prev) clearTimeout(prev);
    const timer = setTimeout(() => {
      try {
        audio.pause();
        audio.currentTime = 0;
      } catch {
        // ignore
      }
      sfxTimers.delete(key);
    }, maxDurationMs);
    sfxTimers.set(key, timer);
  } catch {
    // ignore: audio is decorative
  }
}

/** Start the looping background theme. No-op if it is already playing. */
export function startTheme(): void {
  const audio = getAudio("theme");
  if (!audio) return;
  if (themeStarted && !audio.paused) return;
  try {
    audio.loop = true;
    audio.muted = muted;
    audio.volume = THEME_VOLUME;
    const result = audio.play();
    if (result && typeof result.catch === "function") {
      result.catch(() => {
        // Autoplay blocked — allow a later interaction to retry.
        themeStarted = false;
      });
    }
    themeStarted = true;
  } catch {
    themeStarted = false;
  }
}

/** Pause and rewind the background theme. */
export function stopTheme(): void {
  const audio = getAudio("theme");
  if (!audio) return;
  try {
    audio.pause();
    audio.currentTime = 0;
  } catch {
    // ignore
  }
  themeStarted = false;
}

export function setMuted(value: boolean): void {
  muted = value;
  cache.forEach((audio) => {
    audio.muted = value;
  });
}

export function toggleMuted(): boolean {
  setMuted(!muted);
  return muted;
}

export function isMuted(): boolean {
  return muted;
}
