"use client";

import { useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";

import { useChromaSprite } from "@/hooks/useChromaSprite";
import { ASSETS } from "@/lib/assets";
import type { ActiveZombie } from "@/types/game";

type Props = {
  zombie: ActiveZombie;
};

export function Zombie({ zombie }: Props) {
  const zombieSrc = useChromaSprite(ASSETS.zombie);
  const [spring, api] = useSpring(() => ({
    opacity: 0,
    y: 30,
    scale: 0.6,
    rotate: 0,
    brightness: 1,
    config: { tension: 260, friction: 22 },
  }));

  useEffect(() => {
    switch (zombie.state) {
      case "appearing":
      case "waitingAnswer":
        api.start({
          to: async (next) => {
            await next({ opacity: 1, y: 0, scale: 1, rotate: 0, brightness: 1 });
          },
          from: { opacity: 0, y: 30, scale: 0.6, rotate: 0, brightness: 1 },
        });
        break;
      case "hit":
        api.start({
          to: async (next) => {
            await next({
              brightness: 2.5,
              rotate: -6,
              y: -8,
              config: { tension: 600, friction: 10 },
            });
            await next({
              brightness: 1,
              rotate: 4,
              y: 0,
              config: { tension: 320, friction: 18 },
            });
            await next({
              opacity: 0,
              scale: 0.7,
              y: 26,
              rotate: 12,
              config: { tension: 200, friction: 22 },
            });
          },
        });
        break;
      case "attacking":
        api.start({
          to: async (next) => {
            await next({
              scale: 1.15,
              y: -6,
              rotate: -3,
              config: { tension: 500, friction: 12 },
            });
            await next({
              scale: 1,
              y: 0,
              rotate: 3,
              config: { tension: 400, friction: 14 },
            });
            await next({
              opacity: 0,
              scale: 0.9,
              y: 14,
              config: { tension: 200, friction: 22 },
            });
          },
        });
        break;
      case "dead":
        api.start({
          to: {
            opacity: 0,
            scale: 0.7,
            y: 26,
            rotate: 14,
          },
        });
        break;
    }
  }, [zombie.state, api]);

  return (
    <animated.div
      aria-hidden
      className="pointer-events-none absolute z-20"
      style={{
        left: `${zombie.x}%`,
        top: `${zombie.y}%`,
        transform: spring.y.to(
          (y) =>
            `translate(-50%, calc(-50% + ${y}px)) scale(${spring.scale.get()}) rotate(${spring.rotate.get()}deg)`,
        ),
        opacity: spring.opacity,
        filter: spring.brightness.to((b) => `brightness(${b})`),
      }}
    >
      <img
        src={zombieSrc}
        alt=""
        draggable={false}
        className="h-[150px] w-auto select-none object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] sm:h-[180px]"
      />
    </animated.div>
  );
}
