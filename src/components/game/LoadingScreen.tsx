"use client";

import { ASSETS } from "@/lib/assets";

type LoadingScreenProps = {
  /** 0-100. Drives the progress bar and percentage label. */
  progress?: number;
};

export function LoadingScreen({ progress = 0 }: LoadingScreenProps) {
  const pct = Math.max(0, Math.min(100, Math.round(progress)));

  return (
    <div className="absolute inset-0 z-[60] flex items-center justify-center overflow-hidden bg-black">
      {/* load.png fills the board */}
      <img
        src={ASSETS.loading}
        alt=""
        draggable={false}
        className="absolute inset-0 h-full w-full select-none object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered loading card */}
      <div className="relative z-10 flex flex-col items-center gap-4 rounded-2xl border border-white/15 bg-black/55 px-8 py-6 text-center backdrop-blur-sm sm:px-12 sm:py-8">
        <h2 className="flex items-end gap-1 text-2xl font-black tracking-tight text-amber-100 drop-shadow sm:text-3xl">
          Đang tải trò chơi
          <span className="inline-flex">
            <span className="[animation:loading-dot_1.2s_infinite] [animation-delay:0s]">.</span>
            <span className="[animation:loading-dot_1.2s_infinite] [animation-delay:0.2s]">.</span>
            <span className="[animation:loading-dot_1.2s_infinite] [animation-delay:0.4s]">.</span>
          </span>
        </h2>
        <p className="text-sm font-medium text-amber-100/75 sm:text-base">
          Chuẩn bị bình, zombie và búa...
        </p>

        {/* Progress bar */}
        <div className="mt-1 h-3 w-64 overflow-hidden rounded-full bg-white/20 sm:w-80">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 transition-[width] duration-150 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="font-mono text-sm font-bold text-amber-200 sm:text-base">
          {pct}%
        </div>
      </div>
    </div>
  );
}
