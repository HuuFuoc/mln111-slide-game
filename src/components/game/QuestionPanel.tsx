"use client";

import { useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";

import type { AnswerOptionId, QuizQuestion } from "@/types/game";

import { AnswerButton } from "./AnswerButton";

type Props = {
  question: QuizQuestion;
  selectedWrongOptionIds: AnswerOptionId[];
  answeredCorrect: boolean;
  onAnswer: (optionId: AnswerOptionId) => void;
};

export function QuestionPanel({
  question,
  selectedWrongOptionIds,
  answeredCorrect,
  onAnswer,
}: Props) {
  const enter = useSpring({
    from: { opacity: 0, scale: 0.9, y: 24 },
    to: { opacity: 1, scale: 1, y: 0 },
    config: { tension: 280, friction: 24 },
  });

  // Light shake of the whole card on each wrong answer.
  const [shake, shakeApi] = useSpring(() => ({ x: 0, config: { tension: 600, friction: 12 } }));
  const wrongCount = selectedWrongOptionIds.length;
  useEffect(() => {
    if (wrongCount > 0 && !answeredCorrect) {
      shakeApi.start({
        to: async (next) => {
          await next({ x: -7 });
          await next({ x: 7 });
          await next({ x: 0 });
        },
      });
    }
  }, [wrongCount, answeredCorrect, shakeApi]);

  return (
    <animated.div
      style={{
        opacity: enter.opacity,
        transform: enter.scale.to(
          (s) => `translateY(${enter.y.get()}px) scale(${s}) translateX(${shake.x.get()}px)`,
        ),
      }}
      className="pointer-events-auto w-full max-w-2xl rounded-3xl border-4 border-amber-900/40 bg-gradient-to-br from-amber-50 via-amber-100 to-orange-100 p-5 shadow-2xl sm:p-7"
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="rounded-full bg-amber-900 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-50 sm:text-sm">
          Câu hỏi
        </span>
        {answeredCorrect && (
          <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white sm:text-sm">
            ✅ Chính xác!
          </span>
        )}
      </div>

      <h2 className="mb-5 text-lg font-extrabold leading-snug text-amber-950 sm:text-2xl">
        {question.text}
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {question.options.map((opt) => (
          <AnswerButton
            key={opt.id}
            optionId={opt.id}
            text={opt.text}
            isWrong={selectedWrongOptionIds.includes(opt.id)}
            isCorrect={answeredCorrect && opt.id === question.correctOptionId}
            locked={answeredCorrect}
            onClick={() => onAnswer(opt.id)}
          />
        ))}
      </div>

      {answeredCorrect && question.explanation && (
        <div className="mt-4 rounded-xl border-2 border-emerald-400 bg-emerald-50 p-3 text-sm font-medium leading-snug text-emerald-900 sm:text-base">
          {question.explanation}
        </div>
      )}
      {!answeredCorrect && wrongCount > 0 && (
        <div className="mt-4 rounded-xl border-2 border-rose-300 bg-rose-50 p-3 text-center text-sm font-bold text-rose-700 sm:text-base">
          Chưa đúng — thử lại nào! 💪
        </div>
      )}
    </animated.div>
  );
}
