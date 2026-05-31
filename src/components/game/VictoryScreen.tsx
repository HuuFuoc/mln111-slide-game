"use client";

import { animated, useSpring } from "@react-spring/web";

import { useChromaSprite } from "@/hooks/useChromaSprite";
import { ASSETS } from "@/lib/assets";

type Props = {
  totalVases: number;
  onReplay: () => void;
};

const CONFETTI_COLORS = ["#fbbf24", "#34d399", "#f472b6", "#60a5fa", "#f87171"];

// Deterministic pseudo-random from an index — keeps render pure and avoids any
// SSR/client hydration mismatch (no Math.random, no time-based values).
function seeded(i: number, salt: number): number {
  const v = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return v - Math.floor(v);
}

const CONFETTI = Array.from({ length: 60 }).map((_, i) => ({
  left: seeded(i, 1) * 100,
  delay: seeded(i, 2) * 2.5,
  duration: 2.5 + seeded(i, 3) * 2,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  size: 6 + seeded(i, 4) * 8,
}));

export function VictoryScreen({ totalVases, onReplay }: Props) {
  const characterSrc = useChromaSprite(ASSETS.characterVictory);

  const card = useSpring({
    from: { opacity: 0, y: 30, scale: 0.85 },
    to: { opacity: 1, y: 0, scale: 1 },
    config: { tension: 240, friction: 18 },
  });

  const hero = useSpring({
    from: { opacity: 0, scale: 0.6, y: 30 },
    to: { opacity: 1, scale: 1, y: 0 },
    delay: 150,
    config: { tension: 220, friction: 14 },
  });

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-900/70 via-black/60 to-emerald-900/70 px-4 backdrop-blur-sm">
      {/* Confetti */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {CONFETTI.map((c, i) => (
          <span
            key={i}
            className="absolute top-[-10%] rounded-sm"
            style={{
              left: `${c.left}%`,
              width: c.size,
              height: c.size * 1.4,
              backgroundColor: c.color,
              animation: `confetti-fall ${c.duration}s linear ${c.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <animated.div
        style={{
          opacity: card.opacity,
          transform: card.y.to((y) => `translateY(${y}px) scale(${card.scale.get()})`),
        }}
        className="relative z-10 flex w-full max-w-lg flex-col items-center gap-4 rounded-3xl border-4 border-amber-300/60 bg-gradient-to-br from-amber-50 to-orange-100 px-6 py-8 text-center shadow-2xl"
      >
        <animated.img
          src={characterSrc}
          alt="Nhân vật chiến thắng"
          draggable={false}
          style={{
            opacity: hero.opacity,
            transform: hero.y.to((y) => `translateY(${y}px) scale(${hero.scale.get()})`),
          }}
          className="h-44 w-auto select-none object-contain drop-shadow-[0_14px_14px_rgba(0,0,0,0.4)] sm:h-56"
        />

        <h2 className="text-3xl font-black tracking-tight text-amber-950 drop-shadow sm:text-4xl">
          🎉 Hoàn thành thử thách!
        </h2>
        <p className="text-base font-semibold text-amber-900 sm:text-lg">
          Bạn đã phá hết {totalVases} chiếc bình.
        </p>

        <button
          type="button"
          onClick={onReplay}
          autoFocus
          className="mt-2 inline-flex items-center gap-2 rounded-2xl border-4 border-amber-900/40 bg-gradient-to-br from-amber-400 via-orange-400 to-rose-500 px-8 py-3 text-lg font-extrabold uppercase tracking-wider text-amber-950 shadow-xl transition-transform hover:scale-105 active:scale-95"
        >
          <span aria-hidden className="text-2xl">
            🔄
          </span>
          Chơi lại
        </button>
      </animated.div>
    </div>
  );
}
