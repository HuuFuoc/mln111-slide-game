'use client';

import { useCallback, useEffect, useState } from 'react';
import { LANDING_SECTIONS, NAV_ITEMS } from '@/data/presentationSections';
import { StickyNav } from './StickyNav';
import { HeroSection } from './HeroSection';
import { ScopeSection } from './ScopeSection';
import { ContentSection } from './ContentSection';
import { CentralQuoteSection } from './CentralQuoteSection';
import { ConclusionSection } from './ConclusionSection';
import { MiniGameSection } from './MiniGameSection';

const SECTION_IDS = NAV_ITEMS.map((n) => n.id);
const NAV_HEIGHT = 64; // 3px progress + ~61px nav

export function LandingPresentation() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: `-${NAV_HEIGHT}px 0px -65% 0px`, threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#fefae0]">
      <StickyNav activeSection={activeSection} onNavClick={scrollToSection} />

      {/* Hero is first, rendered without wrapper so it fills full viewport */}
      <HeroSection
        onStart={() => scrollToSection('scope')}
        onGame={() => scrollToSection('game')}
      />

      <ScopeSection />

      {LANDING_SECTIONS.map((section, i) => (
        <ContentSection key={section.id} section={section} altBg={i % 2 !== 0} />
      ))}

      <CentralQuoteSection />
      <ConclusionSection />
      <MiniGameSection />

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#2d1810] text-center">
        <p className="text-[#dda15e]/50 text-sm">
          Triết học Mác – Lênin · MLN111 · Bản chất con người là tổng hòa các quan hệ xã hội
        </p>
      </footer>
    </div>
  );
}
