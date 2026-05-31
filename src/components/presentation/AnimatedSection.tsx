'use client';

import { useEffect, useRef, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function AnimatedSection({
  children,
  delay = 0,
  className = '',
  once = true,
}: AnimatedSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Fallback: always show content after 800ms even if observer never fires
    const fallback = setTimeout(() => setVisible(true), 800);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: '0px 0px -20px 0px' }
    );

    observer.observe(el);
    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, [once]);

  const spring = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0px)' : 'translateY(28px)',
    config: { tension: 250, friction: 28 },
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
