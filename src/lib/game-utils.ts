import { TOTAL_VASES, VASE_LAYOUT } from "@/data/board";
import { questions } from "@/data/questions";
import type { VaseModel } from "@/types/game";

/**
 * Build the 10 fresh vases for a new game from the static layout, pairing each
 * vase with the question whose `vaseId` matches. Throws early if a vase has no
 * matching question so a misconfigured board never ships an "empty" vase.
 */
export function buildVases(): VaseModel[] {
  return VASE_LAYOUT.map((layout) => {
    const question = questions.find((q) => q.vaseId === layout.id);
    if (!question) {
      throw new Error(`Vase "${layout.id}" has no matching question`);
    }
    return {
      id: layout.id,
      questionId: question.id,
      state: "idle" as const,
      position: { x: layout.x, y: layout.y },
    };
  });
}

export function isVictory(vases: VaseModel[]): boolean {
  return (
    vases.length === TOTAL_VASES && vases.every((v) => v.state === "cleared")
  );
}
