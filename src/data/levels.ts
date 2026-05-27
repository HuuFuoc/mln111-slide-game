import type { LevelConfig } from "@/types/game";

export const levels: LevelConfig[] = [
  {
    id: 1,
    name: "Khởi đầu nhập môn",
    playerHealth: 3,
    vases: [
      { id: "l1-v1", x: 38, y: 78, hasZombie: true, questionId: "q1" },
      { id: "l1-v2", x: 55, y: 78, hasZombie: false },
      { id: "l1-v3", x: 72, y: 78, hasZombie: true, questionId: "q2" },
      { id: "l1-v4", x: 89, y: 78, hasZombie: false },
      { id: "l1-v5", x: 47, y: 52, hasZombie: true, questionId: "q3" },
      { id: "l1-v6", x: 80, y: 52, hasZombie: false },
    ],
  },
  {
    id: 2,
    name: "Phép biện chứng",
    playerHealth: 3,
    vases: [
      { id: "l2-v1", x: 38, y: 78, hasZombie: true, questionId: "q4" },
      { id: "l2-v2", x: 51, y: 78, hasZombie: false },
      { id: "l2-v3", x: 64, y: 78, hasZombie: true, questionId: "q5" },
      { id: "l2-v4", x: 77, y: 78, hasZombie: true, questionId: "q6" },
      { id: "l2-v5", x: 90, y: 78, hasZombie: false },
      { id: "l2-v6", x: 41, y: 56, hasZombie: true, questionId: "q9" },
      { id: "l2-v7", x: 57, y: 56, hasZombie: false },
      { id: "l2-v8", x: 73, y: 56, hasZombie: true, questionId: "q14" },
      { id: "l2-v9", x: 89, y: 56, hasZombie: false },
    ],
  },
  {
    id: 3,
    name: "Duy vật lịch sử",
    playerHealth: 3,
    vases: [
      { id: "l3-v1", x: 38, y: 82, hasZombie: true, questionId: "q7" },
      { id: "l3-v2", x: 51, y: 82, hasZombie: true, questionId: "q8" },
      { id: "l3-v3", x: 64, y: 82, hasZombie: false },
      { id: "l3-v4", x: 77, y: 82, hasZombie: true, questionId: "q10" },
      { id: "l3-v5", x: 90, y: 82, hasZombie: true, questionId: "q11" },
      { id: "l3-v6", x: 38, y: 62, hasZombie: true, questionId: "q12" },
      { id: "l3-v7", x: 51, y: 62, hasZombie: false },
      { id: "l3-v8", x: 64, y: 62, hasZombie: true, questionId: "q13" },
      { id: "l3-v9", x: 77, y: 62, hasZombie: false },
      { id: "l3-v10", x: 90, y: 62, hasZombie: true, questionId: "q15" },
      { id: "l3-v11", x: 45, y: 42, hasZombie: true, questionId: "q1" },
      { id: "l3-v12", x: 83, y: 42, hasZombie: false },
    ],
  },
];

export function getLevel(index: number): LevelConfig | undefined {
  return levels[index];
}
