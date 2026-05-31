'use client';

import { animated, useSpring } from '@react-spring/web';

interface HeroSectionProps {
  onStart: () => void;
  onGame: () => void;
}

export function HeroSection({ onStart, onGame }: HeroSectionProps) {
  const chipSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { tension: 200, friction: 28 },
    delay: 80,
  });

  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-18px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 220, friction: 28 },
    delay: 200,
  });

  const subtitleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(16px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 220, friction: 28 },
    delay: 360,
  });

  const btnSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(12px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 220, friction: 28 },
    delay: 520,
  });

  return (
    <section
      id="hero"
      className="min-h-[88vh] bg-[#fefae0] flex flex-col items-center justify-center relative overflow-hidden px-4 pt-16"
    >
      {/* Background decoration */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <div className="text-[360px] font-black text-[#dda15e]/10 leading-none">⊕</div>
      </div>
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#dda15e]/10 to-transparent pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
        <animated.div style={chipSpring}>
          <span className="inline-block mb-6 px-4 py-1.5 bg-[#dda15e]/25 border border-[#bc6c25]/30 rounded-full text-sm font-medium text-[#bc6c25] tracking-wide">
            Triết học Mác – Lênin · MLN111
          </span>
        </animated.div>

        <animated.h1
          style={titleSpring}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-[#2d1810] leading-tight mb-6"
        >
          Bản chất con người là{' '}
          <span className="text-[#bc4749]">tổng hòa các quan hệ xã hội</span>
        </animated.h1>

        <animated.p
          style={subtitleSpring}
          className="text-lg md:text-xl text-[#5c3d2e] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Vận dụng quan điểm triết học Mác – Lênin để làm rõ mối quan hệ giữa con người, ý
          thức xã hội, tha hóa và giải phóng con người.
        </animated.p>

        <animated.div
          style={btnSpring}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onStart}
            className="px-8 py-3.5 bg-[#bc6c25] hover:bg-[#bc4749] text-white font-bold rounded-xl transition-colors shadow-md text-base md:text-lg"
          >
            Bắt đầu thuyết trình →
          </button>
          <button
            onClick={onGame}
            className="px-8 py-3.5 border-2 border-[#bc6c25] text-[#bc6c25] hover:bg-[#bc6c25] hover:text-white font-bold rounded-xl transition-colors text-base md:text-lg"
          >
            🎮 Đến Mini Game
          </button>
        </animated.div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#bc6c25]/50 text-xs animate-bounce select-none">
        <span>Cuộn xuống</span>
        <span className="text-base">↓</span>
      </div>
    </section>
  );
}
