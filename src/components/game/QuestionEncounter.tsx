"use client";

import { animated, useSpring } from "@react-spring/web";

import type {
  AnswerOptionId,
  CharacterState,
  QuizQuestion,
  ZombieState,
} from "@/types/game";

import { MainCharacter } from "./MainCharacter";
import { QuestionPanel } from "./QuestionPanel";
import { Zombie } from "./Zombie";

type Props = {
  question: QuizQuestion;
  selectedWrongOptionIds: AnswerOptionId[];
  answeredCorrect: boolean;
  onAnswer: (optionId: AnswerOptionId) => void;
};

export function QuestionEncounter({
  question,
  selectedWrongOptionIds,
  answeredCorrect,
  onAnswer,
}: Props) {
  const overlay = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { tension: 240, friction: 26 },
  });

  // Battle layout: Character (left) -> Question (center) -> Zombie (right).
  // Character state is derived from the active question outcome and persists
  // across retries: once wrong, it stays "wrong" (scared pose) until correct.
  const hasWrong = selectedWrongOptionIds.length > 0;
  const characterState: CharacterState = answeredCorrect
    ? "correct"
    : hasWrong
      ? "wrong"
      : "normal";
  const zombieState: ZombieState = answeredCorrect ? "hit" : "idle";

  return (
    <animated.div
      style={{ opacity: overlay.opacity }}
      className="absolute inset-0 z-40 flex items-center justify-center bg-gradient-to-b from-black/55 via-black/45 to-black/65 px-3 backdrop-blur-sm"
    >
      <div className="grid w-full max-w-[1200px] grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
        {/* LEFT: main character */}
        <div className="hidden justify-center sm:flex">
          <MainCharacter state={characterState} />
        </div>

        {/* CENTER: question card */}
        <div className="flex justify-center">
          <QuestionPanel
            question={question}
            selectedWrongOptionIds={selectedWrongOptionIds}
            answeredCorrect={answeredCorrect}
            onAnswer={onAnswer}
          />
        </div>

        {/* RIGHT: zombie */}
        <div className="hidden justify-center sm:flex">
          <Zombie state={zombieState} wrongTrigger={selectedWrongOptionIds.length} />
        </div>
      </div>
    </animated.div>
  );
}
