"use client";

import { animated, useSpring } from "@react-spring/web";
import { useEffect } from "react";

import { ASSETS } from "@/lib/assets";
import type { AnswerFeedback, AnswerOptionId, Question } from "@/types/game";

import { AnswerButton } from "./AnswerButton";

type Props = {
  question: Question;
  feedback: AnswerFeedback;
  onAnswer: (optionId: AnswerOptionId) => void;
};

export function QuestionPanel({ question, feedback, onAnswer }: Props) {
  const spring = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { tension: 280, friction: 26 },
    reset: true,
  });

  const wrongOverlay = useSpring({
    opacity: feedback?.isCorrect === false ? 0.5 : 0,
    config: { tension: 300, friction: 22 },
  });

  const selectedOptionId = feedback?.selectedOptionId ?? null;
  const isCorrect = feedback?.isCorrect ?? null;
  const disabled = feedback !== null;

  // Re-mount via question id so animation replays
  useEffect(() => {
    // no-op: handled by reset:true
  }, [question.id]);

  return (
    <animated.div
      style={{
        opacity: spring.opacity,
        transform: spring.y.to((y) => `translateY(${y}px)`),
      }}
      className="pointer-events-auto absolute inset-x-0 bottom-0 z-40 flex justify-center px-3 pb-3 sm:px-6 sm:pb-6"
    >
      <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border-4 border-amber-900/40 bg-gradient-to-br from-amber-50 via-amber-100 to-orange-100 p-4 shadow-2xl sm:p-6">
        {/* Wrong-answer overlay using provided traloisai.png */}
        <animated.img
          aria-hidden
          src={ASSETS.wrongOverlay}
          alt=""
          style={{ opacity: wrongOverlay.opacity }}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover mix-blend-multiply"
        />

        <div className="relative">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full bg-amber-900 px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-amber-50">
              Câu hỏi
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-900/70">
              {question.difficulty === "easy"
                ? "Dễ"
                : question.difficulty === "medium"
                  ? "Trung bình"
                  : "Khó"}
            </span>
          </div>

          <h3 className="mb-4 text-base font-extrabold leading-snug text-amber-950 sm:text-lg">
            {question.text}
          </h3>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
            {question.options.map((opt) => (
              <AnswerButton
                key={opt.id}
                optionId={opt.id}
                text={opt.text}
                disabled={disabled}
                selectedOptionId={selectedOptionId}
                isCorrect={isCorrect}
                correctOptionId={question.correctOptionId}
                onClick={() => onAnswer(opt.id)}
              />
            ))}
          </div>

          {feedback && question.explanation && (
            <div
              className={`mt-3 rounded-xl border-2 p-3 text-xs font-medium leading-snug sm:text-sm ${
                feedback.isCorrect
                  ? "border-emerald-400 bg-emerald-50 text-emerald-900"
                  : "border-rose-400 bg-rose-50 text-rose-900"
              }`}
            >
              <div className="mb-0.5 text-[11px] font-extrabold uppercase tracking-wider">
                {feedback.isCorrect ? "✅ Chính xác!" : "❌ Sai rồi"}
              </div>
              {question.explanation}
            </div>
          )}
        </div>
      </div>
    </animated.div>
  );
}
