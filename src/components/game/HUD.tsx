"use client";

import { ASSETS } from "@/lib/assets";

type Props = {
  health: number;
  maxHealth: number;
  score: number;
  levelName: string;
  levelIndex: number;
  totalLevels: number;
  remainingZombies: number;
};

export function HUD({
  health,
  maxHealth,
  score,
  levelName,
  levelIndex,
  totalLevels,
  remainingZombies,
}: Props) {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-start justify-between gap-3 p-3 sm:p-5">
      <div className="pointer-events-auto flex items-center gap-3 rounded-2xl border border-amber-900/30 bg-gradient-to-br from-amber-50/95 to-amber-100/95 px-3 py-2 shadow-lg backdrop-blur-sm sm:px-4 sm:py-3">
        <img
          src={ASSETS.character}
          alt="Nhân vật"
          className="h-12 w-12 object-contain drop-shadow sm:h-14 sm:w-14"
        />
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            {Array.from({ length: maxHealth }).map((_, i) => (
              <span
                key={i}
                className={`text-lg leading-none transition-all sm:text-2xl ${
                  i < health
                    ? "text-red-500 drop-shadow"
                    : "text-zinc-300 grayscale"
                }`}
              >
                ♥
              </span>
            ))}
          </div>
          <div className="text-xs font-bold uppercase tracking-wide text-amber-900 sm:text-sm">
            Điểm:{" "}
            <span className="font-mono text-base text-amber-700 sm:text-lg">
              {score}
            </span>
          </div>
        </div>
      </div>

      <div className="pointer-events-auto flex flex-col items-end gap-1 rounded-2xl border border-emerald-900/30 bg-gradient-to-br from-emerald-50/95 to-emerald-100/95 px-3 py-2 text-right shadow-lg backdrop-blur-sm sm:px-4 sm:py-3">
        <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 sm:text-xs">
          Level {levelIndex + 1}/{totalLevels}
        </div>
        <div className="text-sm font-extrabold text-emerald-900 sm:text-base">
          {levelName}
        </div>
        <div className="flex items-center gap-1 text-xs font-semibold text-emerald-800 sm:text-sm">
          <span aria-hidden>🧟</span>
          <span>còn lại: {remainingZombies}</span>
        </div>
      </div>
    </div>
  );
}
