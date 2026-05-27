import type { LevelConfig, VaseModel } from "@/types/game";

export function buildVases(level: LevelConfig): VaseModel[] {
  return level.vases.map((v) => ({
    ...v,
    state: "idle",
    isOpened: false,
  }));
}

export function countRemainingZombies(vases: VaseModel[]): number {
  return vases.filter((v) => v.hasZombie && !v.isOpened).length;
}

export function countRemainingVases(vases: VaseModel[]): number {
  return vases.filter((v) => !v.isOpened).length;
}

export function isLevelComplete(vases: VaseModel[]): boolean {
  return vases.every((v) => v.isOpened);
}
