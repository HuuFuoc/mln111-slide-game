"use client";

import { animated, useSpring } from "@react-spring/web";

import { ASSETS } from "@/lib/assets";

type Variant = "levelComplete" | "gameOver" | "victory";

type Props = {
  variant: Variant;
  score: number;
  levelName?: string;
  onPrimary: () => void;
  primaryLabel: string;
  onSecondary?: () => void;
  secondaryLabel?: string;
};

const COPY: Record<Variant, { title: string; emoji: string; subtitle: string; accent: string }> = {
  levelComplete: {
    title: "Hoàn thành level!",
    emoji: "🏆",
    subtitle: "Bạn đã đập sạch các bình và tiêu diệt mọi zombie.",
    accent: "from-emerald-400 via-emerald-300 to-lime-300",
  },
  victory: {
    title: "Chiến thắng!",
    emoji: "👑",
    subtitle: "Bạn đã vượt qua tất cả các level. Một nhà triết học thực thụ!",
    accent: "from-yellow-300 via-amber-300 to-orange-300",
  },
  gameOver: {
    title: "Game Over",
    emoji: "💀",
    subtitle: "Lũ zombie đã chiếm khu vườn. Thử lại nào!",
    accent: "from-rose-400 via-rose-300 to-orange-300",
  },
};

export function ResultScreen({
  variant,
  score,
  levelName,
  onPrimary,
  primaryLabel,
  onSecondary,
  secondaryLabel,
}: Props) {
  const copy = COPY[variant];

  const card = useSpring({
    from: { opacity: 0, y: 30, scale: 0.9 },
    to: { opacity: 1, y: 0, scale: 1 },
    config: { tension: 240, friction: 20 },
  });

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <animated.div
        style={{
          opacity: card.opacity,
          transform: card.y.to(
            (y) => `translateY(${y}px) scale(${card.scale.get()})`,
          ),
        }}
        className="w-full max-w-md overflow-hidden rounded-3xl border-4 border-amber-900/40 bg-gradient-to-br from-amber-50 to-orange-100 shadow-2xl"
      >
        <div className={`bg-gradient-to-br ${copy.accent} px-6 py-5 text-center`}>
          <div className="text-6xl drop-shadow sm:text-7xl">{copy.emoji}</div>
          <h2 className="mt-1 text-3xl font-black tracking-tight text-amber-950 drop-shadow sm:text-4xl">
            {copy.title}
          </h2>
          {levelName && (
            <div className="mt-1 text-sm font-semibold text-amber-900/80">
              {levelName}
            </div>
          )}
        </div>

        <div className="flex flex-col items-center gap-4 px-6 py-6">
          <p className="text-center text-sm text-amber-900 sm:text-base">
            {copy.subtitle}
          </p>

          <div className="flex items-center gap-3 rounded-2xl border-2 border-amber-900/30 bg-white/70 px-5 py-3 shadow-inner">
            <img
              src={ASSETS.character}
              alt=""
              className="h-12 w-12 object-contain"
            />
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-amber-700">
                Tổng điểm
              </div>
              <div className="font-mono text-3xl font-black text-amber-900">
                {score}
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-2 pt-2 sm:flex-row">
            {onSecondary && secondaryLabel && (
              <button
                type="button"
                onClick={onSecondary}
                className="flex-1 rounded-xl border-2 border-amber-900/30 bg-white/80 px-5 py-2.5 text-sm font-bold text-amber-900 shadow-sm transition-transform hover:scale-[1.02] active:scale-95"
              >
                {secondaryLabel}
              </button>
            )}
            <button
              type="button"
              onClick={onPrimary}
              autoFocus
              className="flex-1 rounded-xl border-2 border-amber-900/40 bg-gradient-to-br from-amber-400 via-orange-400 to-rose-500 px-5 py-2.5 text-sm font-extrabold uppercase tracking-wider text-amber-950 shadow-lg transition-transform hover:scale-[1.03] active:scale-95"
            >
              {primaryLabel}
            </button>
          </div>
        </div>
      </animated.div>
    </div>
  );
}
