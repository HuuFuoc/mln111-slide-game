export type AnswerOptionId = "A" | "B" | "C" | "D";

export type Question = {
  id: string;
  text: string;
  options: { id: AnswerOptionId; text: string }[];
  correctOptionId: AnswerOptionId;
  explanation?: string;
  difficulty: "easy" | "medium" | "hard";
};

export type VaseState = "idle" | "cracking" | "broken";

export type ZombieState =
  | "appearing"
  | "waitingAnswer"
  | "hit"
  | "dead"
  | "attacking";

export type GameStatus =
  | "start"
  | "playing"
  | "question"
  | "levelComplete"
  | "gameOver"
  | "victory";

export type VaseConfig = {
  id: string;
  x: number;
  y: number;
  hasZombie: boolean;
  questionId?: string;
};

export type LevelConfig = {
  id: number;
  name: string;
  playerHealth: number;
  vases: VaseConfig[];
};

export type VaseModel = VaseConfig & {
  state: VaseState;
  isOpened: boolean;
};

export type ActiveZombie = {
  id: string;
  vaseId: string;
  questionId: string;
  x: number;
  y: number;
  state: ZombieState;
};

export type AnswerFeedback = {
  selectedOptionId: AnswerOptionId;
  isCorrect: boolean;
} | null;

export type GameState = {
  status: GameStatus;
  levelIndex: number;
  health: number;
  score: number;
  vases: VaseModel[];
  activeZombie: ActiveZombie | null;
  activeQuestionId: string | null;
  feedback: AnswerFeedback;
};
