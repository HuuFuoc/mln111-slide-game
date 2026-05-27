"use client";

import { useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";

import { useChromaSprite } from "@/hooks/useChromaSprite";
import { ASSETS } from "@/lib/assets";
import type { VaseModel } from "@/types/game";

type Props = {
  vase: VaseModel;
  canInteract: boolean;
  onClick: () => void;
};

export function Vase({ vase, canInteract, onClick }: Props) {
  const vaseSrc = useChromaSprite(ASSETS.vaseIdle);
  const hammerSrc = useChromaSprite(ASSETS.hammer);

  const isBreaking = vase.state === "breaking";
  // "opened" and "cleared" both render the vase as gone/broken.
  const isGone = vase.state === "opened" || vase.state === "cleared";
  const interactable = canInteract && vase.state === "idle";

  const [bodySpring, bodyApi] = useSpring(() => ({
    x: 0,
    rotate: 0,
    scale: 1,
    opacity: 1,
    config: { tension: 300, friction: 18 },
  }));

  const [hammerSpring, hammerApi] = useSpring(() => ({
    opacity: 0,
    y: -60,
    rotate: -45,
    scale: 0.9,
    config: { tension: 380, friction: 22 },
  }));

  const [dustSpring, dustApi] = useSpring(() => ({
    opacity: 0,
    scale: 0.4,
    config: { tension: 200, friction: 18 },
  }));

  useEffect(() => {
    if (isBreaking) {
      bodyApi.start({
        to: async (next) => {
          await next({ x: -6, rotate: -4, config: { tension: 600, friction: 12 } });
          await next({ x: 6, rotate: 4 });
          await next({ x: -4, rotate: -3 });
          await next({ x: 0, rotate: 0 });
        },
      });
      hammerApi.start({
        from: { opacity: 0, y: -60, rotate: -45, scale: 0.9 },
        to: async (next) => {
          await next({ opacity: 1, y: 0, rotate: 20, scale: 1, config: { tension: 500, friction: 20 } });
          await next({ opacity: 0, y: -10, rotate: -10, config: { tension: 260, friction: 22 } });
        },
      });
    } else if (isGone) {
      bodyApi.start({
        to: { opacity: 0.32, scale: 0.6, rotate: 22 },
        config: { tension: 220, friction: 22 },
      });
      dustApi.start({
        from: { opacity: 0, scale: 0.4 },
        to: async (next) => {
          await next({ opacity: 0.8, scale: 1.2, config: { tension: 220, friction: 18 } });
          await next({ opacity: 0, scale: 1.6, config: { tension: 140, friction: 24 } });
        },
      });
    }
  }, [isBreaking, isGone, bodyApi, hammerApi, dustApi]);

  return (
    <div
      className="absolute"
      style={{
        left: `${vase.position.x}%`,
        top: `${vase.position.y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="relative aspect-[3/4] w-[clamp(46px,5vw,82px)]">
        {/* Dust burst on break */}
        <animated.div
          aria-hidden
          style={{
            opacity: dustSpring.opacity,
            transform: dustSpring.scale.to((s) => `scale(${s})`),
          }}
          className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(241,217,171,0.95)_0%,rgba(180,140,80,0.55)_40%,transparent_70%)]"
        />

        <animated.button
          type="button"
          onClick={interactable ? onClick : undefined}
          disabled={!interactable}
          aria-label={
            vase.state === "cleared"
              ? "Bình đã phá"
              : `Đập bình ${vase.id}`
          }
          style={{
            transform: bodySpring.x.to(
              (x) =>
                `translateX(${x}px) rotate(${bodySpring.rotate.get()}deg) scale(${bodySpring.scale.get()})`,
            ),
            opacity: bodySpring.opacity,
          }}
          className={`group absolute inset-0 flex items-end justify-center p-0 ${
            interactable
              ? "cursor-pointer transition-transform hover:scale-110"
              : "cursor-default"
          }`}
        >
          <img
            src={vaseSrc}
            alt="Bình"
            draggable={false}
            className={`h-full w-full select-none object-contain drop-shadow-[0_8px_8px_rgba(0,0,0,0.35)] ${
              vase.state === "idle"
                ? "[animation:vase-bob_2.4s_ease-in-out_infinite]"
                : ""
            }`}
          />
        </animated.button>

        {/* Hammer strike during break */}
        <animated.img
          aria-hidden
          src={hammerSrc}
          alt=""
          draggable={false}
          style={{
            opacity: hammerSpring.opacity,
            transform: hammerSpring.y.to(
              (y) =>
                `translate(-50%, ${y}px) rotate(${hammerSpring.rotate.get()}deg) scale(${hammerSpring.scale.get()})`,
            ),
          }}
          className="pointer-events-none absolute left-1/2 top-[-30%] h-[90%] w-auto select-none object-contain drop-shadow-lg"
        />
      </div>
    </div>
  );
}
