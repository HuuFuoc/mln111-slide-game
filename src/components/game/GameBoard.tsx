"use client";

import {
  DEBUG_PLAYFIELD,
  PLAYFIELD_BOUNDS,
  VASE_COLS,
  VASE_ROWS,
} from "@/data/board";
import { ASSETS } from "@/lib/assets";
import type { VaseModel } from "@/types/game";

import { Vase } from "./Vase";

type Props = {
  vases: VaseModel[];
  canInteract: boolean;
  clearedCount: number;
  totalVases: number;
  onVaseClick: (vaseId: string) => void;
};

export function GameBoard({
  vases,
  canInteract,
  clearedCount,
  totalVases,
  onVaseClick,
}: Props) {
  return (
    <div
      className="absolute inset-0 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${ASSETS.background})` }}
    >
      {/* Soft tint so the progress badge and vases read well on a projector */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/30" />

      {/* Progress badge */}
      <div className="pointer-events-none absolute left-1/2 top-4 z-30 -translate-x-1/2 rounded-full border-2 border-amber-900/40 bg-amber-50/95 px-5 py-1.5 text-center shadow-lg backdrop-blur-sm sm:top-5 sm:px-7 sm:py-2">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-700 sm:text-sm">
          Đã phá
        </span>{" "}
        <span className="font-mono text-lg font-black text-amber-900 sm:text-xl">
          {clearedCount}/{totalVases}
        </span>
      </div>

      {/* Playfield: positioned over the grass lawn only. All vase coordinates
          are relative to this layer, never the full board image. */}
      <div
        className={`absolute ${
          DEBUG_PLAYFIELD ? "outline outline-2 outline-red-500" : ""
        }`}
        style={{
          left: PLAYFIELD_BOUNDS.left,
          top: PLAYFIELD_BOUNDS.top,
          width: PLAYFIELD_BOUNDS.width,
          height: PLAYFIELD_BOUNDS.height,
        }}
      >
        {DEBUG_PLAYFIELD && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid"
            style={{
              gridTemplateColumns: `repeat(${VASE_COLS}, 1fr)`,
              gridTemplateRows: `repeat(${VASE_ROWS}, 1fr)`,
            }}
          >
            {Array.from({ length: VASE_ROWS * VASE_COLS }).map((_, i) => (
              <div key={i} className="border border-red-400/40" />
            ))}
          </div>
        )}

        {vases.map((vase) => (
          <Vase
            key={vase.id}
            vase={vase}
            canInteract={canInteract}
            onClick={() => onVaseClick(vase.id)}
          />
        ))}
      </div>
    </div>
  );
}
