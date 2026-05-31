'use client';

import { useState } from 'react';

interface SpeakerNoteAccordionProps {
  note: string;
  theme?: 'light' | 'dark';
}

export function SpeakerNoteAccordion({ note, theme = 'light' }: SpeakerNoteAccordionProps) {
  const [open, setOpen] = useState(false);

  const buttonClass =
    theme === 'dark'
      ? 'text-[#dda15e]/80 hover:text-[#dda15e]'
      : 'text-[#bc6c25] hover:text-[#bc4749]';

  const contentClass =
    theme === 'dark'
      ? 'bg-white/8 text-[#fefae0]/80'
      : 'bg-[#dda15e]/12 text-[#5c3d2e]';

  return (
    <div className="mt-4 border-t border-[#dda15e]/25 pt-3">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`flex items-center gap-2 text-sm font-medium transition-colors ${buttonClass}`}
      >
        <span>🎙</span>
        <span>Lời thuyết trình</span>
        <span
          className={`text-xs transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          ▾
        </span>
      </button>

      {open && (
        <div className={`mt-3 text-sm leading-relaxed rounded-xl px-4 py-3 ${contentClass}`}>
          {note}
        </div>
      )}
    </div>
  );
}
