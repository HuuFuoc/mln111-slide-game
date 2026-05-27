/**
 * Asset preloading for the boot/loading screen.
 *
 * Images are fully decoded ahead of time; sound files are only "warmed up"
 * (network/decoder primed) — `play()` is never called here, so the browser
 * autoplay policy is respected. Everything is best-effort and never rejects,
 * so a missing asset can never get the game stuck on the loading screen.
 */

/** Minimum time the loading screen stays visible (3000-5000ms acceptable). */
export const MIN_LOADING_MS = 3500;

export const IMAGE_ASSETS = [
  "/img/bg.png",
  "/img/binh.png",
  "/img/caybua.png",
  "/img/load.png",
  "/img/nhanvat.png",
  "/img/traloisai.png",
  "/img/anmung.png",
  "/img/zombie.png",
];

export const SOUND_ASSETS = [
  "/sounds/bonk.mp3",
  "/sounds/correct.mp3",
  "/sounds/final.mp3",
  "/sounds/theme.mp3",
  "/sounds/wrong.mp3",
];

export async function preloadImages(paths: string[]): Promise<void> {
  if (typeof window === "undefined") return;
  await Promise.allSettled(
    paths.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = src;
        }),
    ),
  );
}

export function warmupAudio(paths: string[]): void {
  if (typeof window === "undefined") return;
  paths.forEach((src) => {
    try {
      const audio = new Audio(src);
      audio.preload = "auto";
      audio.load();
    } catch {
      // ignore: warmup is best-effort
    }
  });
}
