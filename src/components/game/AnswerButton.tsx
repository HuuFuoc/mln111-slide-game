"use client";

import { animated, useSpring } from "@react-spring/web";
import { useEffect } from "react";

import type { AnswerOptionId } from "@/types/game";

type Props = {
  optionId: AnswerOptionId;
  text: string;
  disabled: boolean;
  selectedOptionId: AnswerOptionId | null;
  isCorrect: boolean | null;
  correctOptionId: AnswerOptionId;
  onClick: () => void;
};

export function AnswerButton({
  optionId,
  text,
  disabled,
  selectedOptionId,
  isCorrect,
  correctOptionId,
  onClick,
}: Props) {
  const isSelected = selectedOptionId === optionId;
  const showResult = selectedOptionId !== null;
  const isThisCorrect = optionId === correctOptionId;

  const [spring, api] = useSpring(() => ({
    x: 0,
    scale: 1,
    config: { tension: 500, friction: 15 },
  }));

  useEffect(() => {
    if (isSelected && isCorrect === false) {
      api.start({
        to: async (next) => {
          await next({ x: -8 });
          await next({ x: 8 });
          await next({ x: -6 });
          await next({ x: 6 });
          await next({ x: 0 });
        },
      });
    } else if (isSelected && isCorrect === true) {
      api.start({
        to: async (next) => {
          await next({ scale: 1.06, config: { tension: 400, friction: 12 } });
          await next({ scale: 1, config: { tension: 280, friction: 18 } });
        },
      });
    } else if (showResult && isThisCorrect && !isSelected) {
      // Reveal correct answer with pulse
      api.start({
        to: async (next) => {
          await next({ scale: 1.04, config: { tension: 300, friction: 14 } });
          await next({ scale: 1 });
        },
      });
    }
  }, [isSelected, isCorrect, showResult, isThisCorrect, api]);

  let stateClass =
    "border-amber-900/30 bg-gradient-to-br from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200 text-amber-900";

  if (showResult) {
    if (isThisCorrect) {
      stateClass =
        "border-emerald-600 bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-900 ring-4 ring-emerald-400/60 shadow-emerald-400/50";
    } else if (isSelected) {
      stateClass =
        "border-rose-600 bg-gradient-to-br from-rose-100 to-rose-200 text-rose-900 ring-4 ring-rose-400/60";
    } else {
      stateClass = "border-zinc-300 bg-zinc-100 text-zinc-500 opacity-70";
    }
  }

  return (
    <animated.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        transform: spring.x.to(
          (x) => `translateX(${x}px) scale(${spring.scale.get()})`,
        ),
      }}
      className={`group flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm font-semibold shadow-md transition-all disabled:cursor-not-allowed sm:text-base ${stateClass}`}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-current bg-white/60 text-base font-extrabold sm:h-9 sm:w-9">
        {optionId}
      </span>
      <span className="leading-snug">{text}</span>
    </animated.button>
  );
}
