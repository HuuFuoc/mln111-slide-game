'use client';

import { useEffect, useRef, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /**
   * once=false (default): animation resets when section leaves viewport,
   * replays when it returns — ideal for snap-scroll presentation.
   * once=true: plays once, never resets.
   */
  once?: boolean;
}

export function AnimatedSection({
  children,
  delay = 0,
  className = '',
  once = false,
}: AnimatedSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Fallback only when once=true (no re-entry possible, observer fires once)
    let fallback: ReturnType<typeof setTimeout> | undefined;
    if (once) {
      fallback = setTimeout(() => setVisible(true), 800);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0, rootMargin: '-4px 0px -4px 0px' }
    );

    observer.observe(el);
    return () => {
      if (fallback) clearTimeout(fallback);
      observer.disconnect();
    };
  }, [once]);

  const spring = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0px)' : 'translateY(28px)',
    // Enter: smooth spring; Exit: near-instant so reset happens while off-screen
    config: visible
      ? { tension: 270, friction: 26 }
      : { duration: 80 },
    delay: visible ? delay : 0,
  });

  return (
    <div ref={containerRef}>
      <animated.div style={spring} className={className}>
        {children}
      </animated.div>
    </div>
  );
}
