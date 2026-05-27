"use client";

import { useState } from "react";
import { animated, useSpring, useTrail } from "@react-spring/web";

const features = [
  { title: "Next.js 16", desc: "App Router + Turbopack" },
  { title: "Tailwind CSS", desc: "Utility-first styling" },
  { title: "React Spring", desc: "Physics-based animations" },
];

export function AnimatedCard() {
  const [flipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(800px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 400, friction: 60 },
  });

  const trail = useTrail(features.length, {
    from: { opacity: 0, y: 24 },
    to: { opacity: 1, y: 0 },
    config: { tension: 220, friction: 22 },
    delay: 200,
  });

  return (
    <div className="flex flex-col items-center gap-10">
      <button
        type="button"
        onClick={() => setFlipped((s) => !s)}
        className="relative h-56 w-80 cursor-pointer"
        aria-label="Flip card"
      >
        <animated.div
          style={{
            opacity: opacity.to((o) => 1 - o),
            transform,
            backfaceVisibility: "hidden",
          }}
          className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-2xl font-semibold text-white shadow-xl"
        >
          Click me
        </animated.div>
        <animated.div
          style={{
            opacity,
            transform: transform.to((t) => `${t} rotateY(180deg)`),
            backfaceVisibility: "hidden",
          }}
          className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-2xl font-semibold text-white shadow-xl"
        >
          Hello React Spring!
        </animated.div>
      </button>

      <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-3">
        {trail.map((style, i) => (
          <animated.div
            key={features[i].title}
            style={style}
            className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {features[i].title}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {features[i].desc}
            </p>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
