'use client';

import { animated, useSpring } from '@react-spring/web';

interface HeroSectionProps {
  onStart: () => void;
  onGame: () => void;
}

const NODES = [
  { cx: '8%', cy: '22%', r: 5 },
  { cx: '20%', cy: '58%', r: 3 },
  { cx: '30%', cy: '15%', r: 4 },
  { cx: '55%', cy: '19%', r: 6 },
  { cx: '84%', cy: '26%', r: 3 },
  { cx: '78%', cy: '62%', r: 5 },
  { cx: '92%', cy: '72%', r: 4 },
  { cx: '66%', cy: '82%', r: 3 },
  { cx: '42%', cy: '78%', r: 4 },
  { cx: '12%', cy: '83%', r: 3 },
  { cx: '50%', cy: '50%', r: 3 },
];

const LINES = [
  { x1: '8%', y1: '22%', x2: '20%', y2: '58%' },
  { x1: '20%', y1: '58%', x2: '30%', y2: '15%' },
  { x1: '30%', y1: '15%', x2: '55%', y2: '19%' },
  { x1: '55%', y1: '19%', x2: '84%', y2: '26%' },
  { x1: '84%', y1: '26%', x2: '78%', y2: '62%' },
  { x1: '78%', y1: '62%', x2: '92%', y2: '72%' },
  { x1: '66%', y1: '82%', x2: '92%', y2: '72%' },
  { x1: '42%', y1: '78%', x2: '66%', y2: '82%' },
  { x1: '12%', y1: '83%', x2: '42%', y2: '78%' },
  { x1: '12%', y1: '83%', x2: '20%', y2: '58%' },
  { x1: '8%', y1: '22%', x2: '50%', y2: '50%' },
  { x1: '50%', y1: '50%', x2: '78%', y2: '62%' },
  { x1: '55%', y1: '19%', x2: '50%', y2: '50%' },
];

export function HeroSection({ onStart, onGame }: HeroSectionProps) {
  const chipSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-10px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 200, friction: 28 },
    delay: 80,
  });

  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(22px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 200, friction: 26 },
    delay: 240,
  });

  const subtitleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(16px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 200, friction: 26 },
    delay: 420,
  });

  const btnSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(12px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 200, friction: 26 },
    delay: 580,
  });

  return (
    <section
      id="hero"
      className="min-h-screen bg-[#fefae0] flex flex-col items-center justify-center relative overflow-hidden px-4 pt-16"
    >
      {/* Abstract network background — represents social relations */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none">
        <svg width="100%" height="100%" className="opacity-[0.10]">
          {LINES.map((l, i) => (
            <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#bc6c25" strokeWidth="1.5" />
          ))}
          {NODES.map((n, i) => (
            <circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill="#dda15e" />
          ))}
        </svg>
      </div>

      {/* Soft ambient blobs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#dda15e]/12" />
        <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#bc6c25]/9" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
        <animated.div style={chipSpring}>
          <span className="inline-block mb-7 px-5 py-2 bg-[#dda15e]/25 border border-[#bc6c25]/35 rounded-full text-sm font-semibold text-[#bc6c25] tracking-wide">
            Triết học Mác – Lênin · MLN111
          </span>
        </animated.div>

        <animated.h1
          style={titleSpring}
          className="text-5xl md:text-6xl lg:text-7xl font-black text-[#2d1810] leading-[1.08] tracking-tight mb-8"
        >
          Bản chất con người
          <br />
          là{' '}
          <span className="text-[#bc6c25]">tổng hòa các quan hệ xã hội</span>
        </animated.h1>

        <animated.p
          style={subtitleSpring}
          className="text-lg md:text-xl text-[#5c3d2e]/75 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Một mạch thuyết trình về ý thức xã hội, bản chất xã hội của con người,
          hiện tượng tha hóa và mục tiêu giải phóng con người.
        </animated.p>

        <animated.div
          style={btnSpring}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onStart}
            className="px-8 py-4 bg-[#bc6c25] text-white font-bold rounded-xl text-base md:text-lg shadow-md hover:bg-[#a85a1e] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
          >
            Bắt đầu thuyết trình →
          </button>
          <button
            onClick={onGame}
            className="px-8 py-4 border-2 border-[#bc6c25] text-[#bc6c25] hover:bg-[#bc6c25]/10 font-bold rounded-xl text-base md:text-lg transition-all duration-150"
          >
            Đố Mini Game
          </button>
        </animated.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#bc6c25]/45 text-xs animate-bounce select-none">
        <span className="text-sm font-medium tracking-wide">Cuộn xuống</span>
        <svg width="18" height="11" viewBox="0 0 18 11" fill="none" aria-hidden>
          <path
            d="M1 1L9 9L17 1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
