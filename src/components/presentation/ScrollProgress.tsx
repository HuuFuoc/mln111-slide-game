'use client';

import { useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? scrolled / max : 0);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const spring = useSpring({
    width: `${progress * 100}%`,
    config: { tension: 400, friction: 40, clamp: true },
  });

  return (
    <div className="h-[3px] bg-[#dda15e]/30">
      <animated.div style={spring} className="h-full bg-[#bc6c25]" />
    </div>
  );
}
