"use client";

import { animated, useSpring, useTrail } from "@react-spring/web";

import { useChromaSprite } from "@/hooks/useChromaSprite";
import { ASSETS } from "@/lib/assets";

type Props = {
  onStart: () => void;
};

const tips = [
  "Đập 10 chiếc bình — mỗi bình giấu một câu hỏi.",
  "Trả lời đúng để hạ zombie và phá vỡ chiếc bình.",
  "Sai cũng không sao: cứ thử lại đến khi đúng!",
];

export function StartScreen({ onStart }: Props) {
  const characterSrc = useChromaSprite(ASSETS.characterIdle);

  const title = useSpring({
    from: { opacity: 0, y: -20, scale: 0.9 },
    to: { opacity: 1, y: 0, scale: 1 },
    config: { tension: 220, friction: 18 },
  });

  const character = useSpring({
    from: { opacity: 0, x: -40 },
    to: { opacity: 1, x: 0 },
    config: { tension: 200, friction: 22 },
    delay: 200,
  });

  const trail = useTrail(tips.length, {
    from: { opacity: 0, x: 24 },
    to: { opacity: 1, x: 0 },
    config: { tension: 220, friction: 22 },
    delay: 350,
  });

  const button = useSpring({
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1 },
    config: { tension: 260, friction: 18 },
    delay: 600,
  });

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-black/30 via-black/50 to-black/70 px-4">
      <div className="grid w-full max-w-4xl grid-cols-1 items-center gap-6 sm:grid-cols-[auto_1fr] sm:gap-10">
        <animated.img
          src={characterSrc}
          alt="Nhân vật chính"
          draggable={false}
          style={{
            opacity: character.opacity,
            transform: character.x.to((x) => `translateX(${x}px)`),
          }}
          className="mx-auto h-40 w-auto select-none object-contain drop-shadow-2xl sm:h-64"
        />

        <div className="flex flex-col items-start gap-5">
          <animated.div
            style={{
              opacity: title.opacity,
              transform: title.y.to((y) => `translateY(${y}px) scale(${title.scale.get()})`),
            }}
          >
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300 sm:text-sm">
              MLN111 · Mini Game
            </div>
            <h1 className="bg-gradient-to-br from-amber-100 via-amber-300 to-orange-500 bg-clip-text text-4xl font-black leading-tight tracking-tight text-transparent drop-shadow-lg sm:text-6xl">
              Phá Bình Diệt Zombie
            </h1>
            <p className="mt-2 text-sm font-medium text-amber-100/80 sm:text-base">
              10 chiếc bình · 10 câu hỏi · trả lời đúng để chiến thắng 🔨
            </p>
          </animated.div>

          <ul className="flex flex-col gap-2">
            {trail.map((style, i) => (
              <animated.li
                key={i}
                style={style}
                className="flex items-start gap-2 text-sm text-amber-50 sm:text-base"
              >
                <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                <span>{tips[i]}</span>
              </animated.li>
            ))}
          </ul>

          <animated.button
            type="button"
            onClick={onStart}
            style={{
              opacity: button.opacity,
              transform: button.scale.to((s) => `scale(${s})`),
            }}
            className="group mt-2 inline-flex items-center gap-3 rounded-2xl border-4 border-amber-900/40 bg-gradient-to-br from-amber-400 via-orange-400 to-rose-500 px-8 py-3 text-lg font-extrabold uppercase tracking-wider text-amber-950 shadow-2xl transition-transform hover:scale-105 active:scale-95 sm:text-xl"
          >
            <span aria-hidden className="text-2xl transition-transform group-hover:rotate-12">
              🔨
            </span>
            Bắt đầu chơi
          </animated.button>
        </div>
      </div>
    </div>
  );
}
