"use client";

import { useEffect, useRef } from "react";
import { animated, useSpring } from "@react-spring/web";

import { useChromaSprite } from "@/hooks/useChromaSprite";
import { ASSETS } from "@/lib/assets";
import type { ZombieState } from "@/types/game";

type Props = {
  state: ZombieState;
  /** Increments on every wrong answer to (re)trigger the attack/laugh effect. */
  wrongTrigger: number;
};

export function Zombie({ state, wrongTrigger }: Props) {
  const src = useChromaSprite(ASSETS.zombieIdle);
  const prevWrong = useRef(wrongTrigger);

  const [spring, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    opacity: 1,
    brightness: 1,
    config: { tension: 280, friction: 18 },
  }));

  // Red rage glow, pulsed imperatively on each wrong answer.
  const [glow, glowApi] = useSpring(() => ({ opacity: 0 }));

  // Wrong answer: lunge forward, shake, flash red (attacking / laughing).
  useEffect(() => {
    if (wrongTrigger === prevWrong.current) return;
    prevWrong.current = wrongTrigger;
    if (wrongTrigger === 0 || state === "hit" || state === "defeated") return;

    api.start({
      to: async (next) => {
        await next({ x: -16, scale: 1.14, rotate: -5, config: { tension: 600, friction: 10 } });
        await next({ x: 9, rotate: 5 });
        await next({ x: -5, rotate: -3 });
        await next({ x: 0, rotate: 0, scale: 1, config: { tension: 320, friction: 16 } });
      },
    });
    glowApi.start({
      to: async (next) => {
        await next({ opacity: 0.75, config: { tension: 500, friction: 14 } });
        await next({ opacity: 0, config: { tension: 120, friction: 20 } });
      },
    });
  }, [wrongTrigger, state, api, glowApi]);

  // Correct answer: zombie is hit, flashes, then is knocked back and fades out.
  useEffect(() => {
    if (state === "hit" || state === "defeated") {
      api.start({
        to: async (next) => {
          await next({ brightness: 2.6, scale: 1.08, rotate: -8, y: -10, config: { tension: 600, friction: 9 } });
          await next({ brightness: 1, rotate: 6, y: 0, config: { tension: 320, friction: 16 } });
          await next({ opacity: 0, scale: 0.7, y: 30, rotate: 26, config: { tension: 180, friction: 22 } });
        },
      });
    } else if (state === "idle") {
      glowApi.set({ opacity: 0 });
      api.start({
        from: { opacity: 0, scale: 0.7, y: 24 },
        to: { opacity: 1, scale: 1, y: 0, rotate: 0, brightness: 1, x: 0 },
      });
    }
  }, [state, api, glowApi]);

  return (
    <div className="pointer-events-none relative flex items-end justify-center">
      <animated.div
        aria-hidden
        style={{ opacity: glow.opacity }}
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(244,63,94,0.9)_0%,rgba(220,38,38,0.45)_45%,transparent_72%)] blur-md"
      />
      <animated.img
        src={src}
        alt="Zombie"
        draggable={false}
        style={{
          opacity: spring.opacity,
          filter: spring.brightness.to((b) => `brightness(${b})`),
          transform: spring.x.to(
            (x) =>
              `translate(${x}px, ${spring.y.get()}px) scale(${spring.scale.get()}) rotate(${spring.rotate.get()}deg)`,
          ),
        }}
        className="relative h-[140px] w-auto select-none object-contain drop-shadow-[0_12px_12px_rgba(0,0,0,0.5)] sm:h-[220px] lg:h-[260px]"
      />
    </div>
  );
}
