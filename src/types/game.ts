export type AnswerOptionId = "A" | "B" | "C" | "D";

export type QuizQuestion = {
  id: string;
  vaseId: string;
  text: string;
  options: { id: AnswerOptionId; text: string }[];
  correctOptionId: AnswerOptionId;
  explanation?: string;
};

export type VaseState = "idle" | "breaking" | "opened" | "cleared";

export type VaseModel = {
  id: string;
  questionId: string;
  state: VaseState;
  position: {
    x: number;
    y: number;
  };
};

export type GameStatus = "start" | "board" | "question" | "victory";

/** Visual animation states driven by the active question outcome. */
export type CharacterState = "normal" | "wrong" | "correct";
export type ZombieState = "idle" | "attack" | "hit" | "defeated";

export type GameState = {
  status: GameStatus;
  vases: VaseModel[];
  activeVaseId: string | null;
  activeQuestionId: string | null;
  selectedWrongOptionIds: AnswerOptionId[];
  clearedCount: number;
  isAnimating: boolean;
  /** true after a correct answer, until the overlay closes. */
  lastAnswerCorrect: boolean | null;
};
