"use client";

import { useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";

import { useChromaSprite } from "@/hooks/useChromaSprite";
import { ASSETS } from "@/lib/assets";
import type { CharacterState } from "@/types/game";

type Props = {
  state: CharacterState;
};

export function MainCharacter({ state }: Props) {
  // Image swap by state: scared pose on wrong, celebration pose on correct,
  // normal pose otherwise. The "wrong" pose persists for the whole question
  // until a correct answer flips state to the celebration pose.
  const isWrong = state === "wrong";
  const isCorrect = state === "correct";
  const characterImage = isWrong
    ? ASSETS.characterWrong
    : isCorrect
      ? ASSETS.characterCorrect
      : ASSETS.characterIdle;
  const src = useChromaSprite(characterImage);

  const [spring, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    config: { tension: 300, friction: 18 },
  }));

  // Golden aura only while celebrating a correct answer.
  const aura = useSpring({
    opacity: state === "correct" ? 0.9 : 0,
    scale: state === "correct" ? 1.1 : 0.6,
    config: { tension: 220, friction: 18 },
  });

  useEffect(() => {
    if (state === "correct") {
      // punch / power-up celebration bounce
      api.start({
        to: async (next) => {
          await next({ scale: 1.18, y: -14, rotate: -6, config: { tension: 500, friction: 10 } });
          await next({ scale: 1.05, y: 0, rotate: 4, config: { tension: 320, friction: 14 } });
          await next({ scale: 1.1, y: -6, rotate: 0, config: { tension: 260, friction: 16 } });
          await next({ scale: 1, y: 0 });
        },
      });
    } else if (state === "wrong") {
      // scared flinch: recoil back + shake
      api.start({
        to: async (next) => {
          await next({ x: 10, rotate: 4, config: { tension: 600, friction: 9 } });
          await next({ x: -6, rotate: -3 });
          await next({ x: 4, rotate: 2 });
          await next({ x: 0, rotate: 0, config: { tension: 300, friction: 16 } });
        },
      });
    } else {
      api.start({ to: { x: 0, y: 0, scale: 1, rotate: 0 } });
    }
  }, [state, api]);

  return (
    <div className="pointer-events-none relative flex items-end justify-center">
      <animated.div
        aria-hidden
        style={{
          opacity: aura.opacity,
          transform: aura.scale.to((s) => `scale(${s})`),
        }}
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(253,224,71,0.85)_0%,rgba(251,191,36,0.45)_45%,transparent_72%)] blur-md"
      />
      <animated.img
        src={src}
        alt={
          isWrong
            ? "Nhân vật hoảng hốt"
            : isCorrect
              ? "Nhân vật ăn mừng"
              : "Nhân vật chính"
        }
        draggable={false}
        style={{
          transform: spring.x.to(
            (x) =>
              `translate(${x}px, ${spring.y.get()}px) scale(${spring.scale.get()}) rotate(${spring.rotate.get()}deg)`,
          ),
        }}
        className={`relative h-[140px] w-auto select-none object-contain drop-shadow-[0_12px_12px_rgba(0,0,0,0.45)] sm:h-[220px] lg:h-[260px] ${
          state === "normal"
            ? "[animation:vase-bob_2.6s_ease-in-out_infinite]"
            : ""
        }`}
      />
    </div>
  );
}
