/**
 * Single source of truth for image asset paths. Components import from here
 * instead of hard-coding "/img/..." strings.
 *
 * Sound paths live separately in `src/lib/sound.ts` (the sound manager owns
 * them). Only a handful of base sprites exist in /public/img, so a couple of
 * logical roles intentionally reuse the same file.
 */
export const ASSETS = {
  background: "/img/bg.png",
  loading: "/img/load.png",

  vaseIdle: "/img/binh.png",
  vaseBroken: "/img/binh.png",

  hammer: "/img/caybua.png",

  // Main character: normal pose, scared "wrong answer" pose, and celebration.
  characterIdle: "/img/nhanvat.png",
  characterWrong: "/img/traloisai.png",
  characterCorrect: "/img/anmung.png",
  characterVictory: "/img/anmung.png",

  zombieIdle: "/img/zombie.png",
} as const;
