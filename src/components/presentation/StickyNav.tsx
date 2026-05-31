'use client';

import { ScrollProgress } from './ScrollProgress';
import { NAV_ITEMS } from '@/data/presentationSections';

interface StickyNavProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

export function StickyNav({ activeSection, onNavClick }: StickyNavProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <ScrollProgress />
      <nav className="bg-[#fefae0]/96 backdrop-blur-sm border-b border-[#dda15e]/40 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 md:px-6">
          <div className="flex items-center gap-1 overflow-x-auto py-2.5 scrollbar-hide">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              const isGame = item.id === 'game';
              return (
                <button
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={[
                    'flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200',
                    isActive
                      ? 'bg-[#bc6c25] text-white shadow-sm'
                      : 'text-[#bc6c25] hover:bg-[#dda15e]/30 hover:text-[#bc4749]',
                    isGame ? 'ml-2 border border-[#bc6c25]/40' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {isGame && <span className="mr-1">🎮</span>}
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
