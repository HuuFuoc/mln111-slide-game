"use client";

import { useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";

import type { AnswerOptionId } from "@/types/game";

type Props = {
  optionId: AnswerOptionId;
  text: string;
  /** This option was picked and is wrong — stays visible, marked red. */
  isWrong: boolean;
  /** This option is the correct one AND a correct answer was given. */
  isCorrect: boolean;
  /** Disable interaction once the question is solved. */
  locked: boolean;
  onClick: () => void;
};

export function AnswerButton({
  optionId,
  text,
  isWrong,
  isCorrect,
  locked,
  onClick,
}: Props) {
  const [spring, api] = useSpring(() => ({
    x: 0,
    scale: 1,
    config: { tension: 500, friction: 15 },
  }));

  // Shake when this button becomes a wrong pick.
  useEffect(() => {
    if (isWrong) {
      api.start({
        to: async (next) => {
          await next({ x: -8 });
          await next({ x: 8 });
          await next({ x: -6 });
          await next({ x: 6 });
          await next({ x: 0 });
        },
      });
    }
  }, [isWrong, api]);

  // Pop when this button becomes the revealed correct answer.
  useEffect(() => {
    if (isCorrect) {
      api.start({
        to: async (next) => {
          await next({ scale: 1.06, config: { tension: 400, friction: 12 } });
          await next({ scale: 1, config: { tension: 280, friction: 18 } });
        },
      });
    }
  }, [isCorrect, api]);

  let stateClass =
    "border-amber-900/30 bg-gradient-to-br from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200 text-amber-900";
  if (isCorrect) {
    stateClass =
      "border-emerald-600 bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-900 ring-4 ring-emerald-400/70 shadow-emerald-400/50";
  } else if (isWrong) {
    stateClass =
      "border-rose-600 bg-gradient-to-br from-rose-100 to-rose-200 text-rose-900 ring-4 ring-rose-400/60 opacity-80";
  }

  // Wrong picks and a solved question are not clickable; other options stay live
  // so the player can keep trying.
  const disabled = locked || isWrong;

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
      className={`group flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left font-semibold shadow-md transition-all disabled:cursor-not-allowed sm:py-4 sm:text-lg ${stateClass}`}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2 border-current bg-white/60 text-lg font-extrabold sm:h-10 sm:w-10">
        {optionId}
      </span>
      <span className="leading-snug">{text}</span>
    </animated.button>
  );
}
