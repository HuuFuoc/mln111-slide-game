"use client";

import { ASSETS } from "@/lib/assets";
import type { ActiveZombie, VaseModel } from "@/types/game";

import { Vase } from "./Vase";
import { Zombie } from "./Zombie";

type Props = {
  vases: VaseModel[];
  activeZombie: ActiveZombie | null;
  canInteract: boolean;
  onVaseClick: (vaseId: string) => void;
};

export function GameBoard({
  vases,
  activeZombie,
  canInteract,
  onVaseClick,
}: Props) {
  return (
    <div
      className="absolute inset-0 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${ASSETS.background})` }}
    >
      {/* Foreground tint to make HUD/UI more readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/30" />

      {/* Vases */}
      <div className="absolute inset-0">
        {vases.map((vase) => (
          <Vase
            key={vase.id}
            vase={vase}
            canInteract={canInteract}
            onClick={() => onVaseClick(vase.id)}
          />
        ))}
      </div>

      {/* Active zombie */}
      {activeZombie && <Zombie zombie={activeZombie} />}
    </div>
  );
}
