'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { LANDING_SECTIONS, NAV_ITEMS } from '@/data/presentationSections';
import { StickyNav } from './StickyNav';
import { GLSLHills } from '@/components/ui/glsl-hills';
import { ScopeSection } from './ScopeSection';
import { ConsciousnessSection } from './ConsciousnessSection';
import { HumanNatureSection } from './HumanNatureSection';
import { AlienationSection } from './AlienationSection';
import { LiberationSection } from './LiberationSection';
import { ContentSection } from './ContentSection';
import { CentralQuoteSection } from './CentralQuoteSection';
import { ConclusionSection } from './ConclusionSection';
import { MiniGameSection } from './MiniGameSection';
import { AIUsageSection } from './AIUsageSection';
import { StorySection } from './StorySection';

const SECTION_IDS = NAV_ITEMS.map((n) => n.id);
const NAV_HEIGHT = 72;
const SCROLL_LOCK_MS = 1000;

export function LandingPresentation() {
  const [activeSection, setActiveSection] = useState('hero');

  const activeSectionRef = useRef('hero');
  const isScrollingRef = useRef(false);
  // Tracks the intended destination during programmatic scroll so rapid
  // PageDown presses step from the TARGET, not from an intermediate IO update.
  const targetSectionRef = useRef<string | null>(null);

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  // Scroll-based active section detection — avoids IO race conditions when
  // multiple sections intersect simultaneously during fast scrolling.
  useEffect(() => {
    const update = () => {
      let best = SECTION_IDS[0];
      let bestTop = -Infinity;
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        // Adjusted top: position relative to the bottom edge of the sticky nav.
        // Negative means we've scrolled past it; closest-to-zero wins.
        const top = el.getBoundingClientRect().top - NAV_HEIGHT;
        if (top <= 16 && top > bestTop) {
          bestTop = top;
          best = id;
        }
      }
      setActiveSection((prev) => (prev === best ? prev : best));
    };

    window.addEventListener('scroll', update, { passive: true });
    update(); // initialize on mount
    return () => window.removeEventListener('scroll', update);
  }, []);

  // Scroll so the section's top edge is exactly at the viewport top.
  // No NAV_HEIGHT offset needed: the pill nav hides at scrollY > 80,
  // meaning it's never visible when navigating between content sections.
  // Offsetting by 72px was causing the previous (dark hero) section to
  // bleed through at the top of the viewport.
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }, []);

  // Keyboard navigation: ArrowUp/Down / PageUp/Down jump between sections.
  useEffect(() => {
    const go = (direction: 1 | -1) => {
      if (isScrollingRef.current) return;
      // Step from the in-flight target if one exists, else from current section.
      const base = targetSectionRef.current ?? activeSectionRef.current;
      const currentIdx = (SECTION_IDS as readonly string[]).indexOf(base);
      const nextIdx = Math.max(0, Math.min(SECTION_IDS.length - 1, currentIdx + direction));
      if (nextIdx === currentIdx) return;
      isScrollingRef.current = true;
      targetSectionRef.current = SECTION_IDS[nextIdx];
      scrollToSection(SECTION_IDS[nextIdx]);
      setTimeout(() => {
        isScrollingRef.current = false;
        targetSectionRef.current = null;
      }, SCROLL_LOCK_MS);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      // Don't hijack keys when the user is typing.
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); go(1); }
      else if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); go(-1); }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [scrollToSection]);

  return (
    <div className="bg-[#fefae0]">
      <StickyNav activeSection={activeSection} onNavClick={scrollToSection} />

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#2B160F]">
        <div className="absolute inset-0 z-0">
          <GLSLHills width="100%" height="100%" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.08] tracking-tight mb-6">
            <span className="block text-[#fefae0]">Bản chất con người</span>
            <span className="block text-[#dda15e]">là tổng hòa các quan hệ xã hội</span>
          </h1>
          <p className="text-[#dda15e]/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Thuyết trình về ý thức xã hội, bản chất xã hội, hiện tượng tha hóa và mục tiêu giải phóng con người.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('scope')}
              className="px-8 py-4 bg-[#bc6c25] hover:bg-[#a85a1e] text-white font-bold rounded-xl text-base md:text-lg shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
            >
              Bắt đầu →
            </button>
            <button
              onClick={() => scrollToSection('game')}
              className="px-8 py-4 border-2 border-[#bc6c25] text-[#dda15e] hover:bg-[#bc6c25]/15 font-bold rounded-xl text-base md:text-lg transition-all duration-150"
            >
              Đố Mini Game
            </button>
          </div>
        </div>
      </section>

      <ScopeSection />

      <ConsciousnessSection />
      <HumanNatureSection />
      <AlienationSection />
      <LiberationSection />

      {LANDING_SECTIONS.filter((s) => s.id !== 'consciousness' && s.id !== 'human-nature' && s.id !== 'alienation' && s.id !== 'liberation').map((section, i) => (
        <ContentSection key={section.id} section={section} altBg={i % 2 !== 0} />
      ))}

      <CentralQuoteSection />
      <ConclusionSection />
      <StorySection />
      <MiniGameSection />
      <AIUsageSection />

      <footer className="py-10 px-4 bg-[#2d1810] border-t border-[#bc6c25]/15">
        <div className="max-w-[1120px] mx-auto text-center">
          <p className="text-[#dda15e]/70 text-sm font-semibold mb-1">
            Triết học Mác – Lênin · MLN111
          </p>
          <p className="text-[#dda15e]/38 text-xs">
            Bản chất con người là tổng hòa các quan hệ xã hội
          </p>
        </div>
      </footer>
    </div>
  );
}
