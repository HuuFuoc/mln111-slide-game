'use client';

import { useEffect, useState } from 'react';
import { ScrollProgress } from './ScrollProgress';
import { NAV_ITEMS } from '@/data/presentationSections';

interface StickyNavProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

export function StickyNav({ activeSection, onNavClick }: StickyNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress — always at the very top */}
      <div className="fixed top-0 left-0 right-0 z-[60]">
        <ScrollProgress />
      </div>

      {/* Centered pill nav — visible when at top */}
      <nav
        className={[
          'fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-300',
          scrolled
            ? 'opacity-0 -translate-y-6 pointer-events-none'
            : 'opacity-100 translate-y-0',
        ].join(' ')}
      >
        <div className="bg-[#fefae0]/95 backdrop-blur-md border border-[#dda15e]/40 shadow-lg rounded-full px-2 py-1.5 flex items-center gap-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            const isGame = item.id === 'game';
            return (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={[
                  'flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200',
                  isActive
                    ? 'bg-[#bc6c25] text-white shadow-sm'
                    : isGame
                      ? 'text-[#bc4749] hover:bg-[#bc4749]/10 border border-[#bc4749]/50'
                      : 'text-[#5c3d2e]/80 hover:bg-[#dda15e]/30 hover:text-[#bc6c25]',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Right sidebar — visible when scrolled */}
      <aside
        className={[
          'fixed right-5 top-1/2 -translate-y-1/2 z-[55] transition-all duration-300',
          scrolled
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-10 pointer-events-none',
        ].join(' ')}
      >
        <div className="bg-[#fefae0]/90 backdrop-blur-md border border-[#dda15e]/40 shadow-xl rounded-2xl py-3 px-2.5 flex flex-col gap-3">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            const isGame = item.id === 'game';
            return (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                aria-label={item.label}
                className="group relative flex items-center justify-center w-5 h-5"
              >
                <span
                  className={[
                    'block rounded-full transition-[width,height,background-color,box-shadow] duration-200',
                    isActive
                      ? 'w-3 h-3 bg-[#bc6c25] shadow-[0_0_0_3px_rgba(188,108,37,0.20)]'
                      : isGame
                        ? 'w-2 h-2 bg-[#bc4749]/45 group-hover:bg-[#bc4749] group-hover:w-2.5 group-hover:h-2.5'
                        : 'w-2 h-2 bg-[#5c3d2e]/22 group-hover:bg-[#dda15e] group-hover:w-2.5 group-hover:h-2.5',
                  ].join(' ')}
                />
                {/* Tooltip — appears to the left on hover */}
                <span className="absolute right-full mr-3 z-[60] bg-[#2d1810] text-[#fefae0] text-xs font-medium px-2.5 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none shadow-lg">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
}
