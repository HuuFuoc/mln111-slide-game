import { type LandingSection } from '@/data/presentationSections';
import { AnimatedSection } from './AnimatedSection';

interface ContentSectionProps {
  section: LandingSection;
  altBg?: boolean;
}

type SectionMood = 'default' | 'warning' | 'pillar';

interface SectionTheme {
  bg: string;
  mood: SectionMood;
  numColor: string;
  accentClass: string;
  lineClass: string;
  cardBg: string;
  cardBorder: string;
  cardBorderHover: string;
}

const SECTION_THEMES: Record<string, SectionTheme> = {
  consciousness: {
    bg: 'bg-[#fefae0]',
    mood: 'default',
    numColor: 'text-[#dda15e]/25',
    accentClass: 'text-[#bc6c25]',
    lineClass: 'bg-[#bc6c25]',
    cardBg: 'bg-[#faf3d5]',
    cardBorder: 'border-[#dda15e]/50',
    cardBorderHover: 'hover:border-[#bc6c25]/50',
  },
  'human-nature': {
    bg: 'bg-[#dda15e]/10',
    mood: 'default',
    numColor: 'text-[#bc6c25]/18',
    accentClass: 'text-[#bc6c25]',
    lineClass: 'bg-[#bc6c25]',
    cardBg: 'bg-[#faf3d5]',
    cardBorder: 'border-[#dda15e]/50',
    cardBorderHover: 'hover:border-[#bc6c25]/50',
  },
  alienation: {
    bg: 'bg-[#fefae0]',
    mood: 'warning',
    numColor: 'text-[#bc4749]/18',
    accentClass: 'text-[#bc4749]',
    lineClass: 'bg-[#bc4749]',
    cardBg: 'bg-[#faf3d5]',
    cardBorder: 'border-[#bc4749]/25',
    cardBorderHover: 'hover:border-[#bc4749]/45',
  },
  liberation: {
    bg: 'bg-[#dda15e]/8',
    mood: 'pillar',
    numColor: 'text-[#dda15e]/28',
    accentClass: 'text-[#bc6c25]',
    lineClass: 'bg-[#bc6c25]',
    cardBg: 'bg-[#faf3d5]',
    cardBorder: 'border-[#dda15e]/50',
    cardBorderHover: 'hover:border-[#bc6c25]/50',
  },
};

export function ContentSection({ section, altBg = false }: ContentSectionProps) {
  const cols = section.columns ?? 2;
  const theme: SectionTheme = SECTION_THEMES[section.id] ?? {
    bg: altBg ? 'bg-[#dda15e]/8' : 'bg-[#fefae0]',
    mood: 'default',
    numColor: 'text-[#dda15e]/25',
    accentClass: 'text-[#bc6c25]',
    lineClass: 'bg-[#bc6c25]',
    cardBg: 'bg-[#faf3d5]',
    cardBorder: 'border-[#dda15e]/50',
    cardBorderHover: 'hover:border-[#bc6c25]/50',
  };

  const gridCols = cols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';
  const isWarning = theme.mood === 'warning';

  return (
    <section
      id={section.id}
      className={`scroll-mt-16 min-h-screen flex flex-col justify-center px-4 py-8 md:py-10 ${theme.bg}`}
    >
      <div className="max-w-[1120px] mx-auto w-full">

        {/* Section header */}
        <AnimatedSection>
          <div className="flex items-end gap-4 mb-7 md:mb-8">
            <span
              aria-hidden
              className={`text-[80px] font-black ${theme.numColor} leading-none hidden md:block flex-shrink-0 select-none`}
            >
              {section.sectionNumber}
            </span>
            <div className="pb-1">
              <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-2 ${theme.accentClass}`}>
                Nội dung {section.sectionNumber}
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#2d1810] leading-tight">
                {section.title}
              </h2>
              <div className={`h-1 w-14 ${theme.lineClass} rounded-full mt-3`} />
            </div>
          </div>
        </AnimatedSection>

        {/* Content blocks */}
        <div className={`grid grid-cols-1 ${gridCols} gap-3 md:gap-4`}>
          {section.blocks.map((block, i) => {
            /* Full-width dark featured card for key quotes */
            if (block.isKeyQuote) {
              return (
                <div key={block.id} className="col-span-full">
                  <AnimatedSection delay={i * 80}>
                    <div className="bg-[#2B160F] rounded-2xl p-5 md:p-7 border border-[#bc4749]/30">
                      <div className="max-w-4xl mx-auto text-center">
                        <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 ${theme.accentClass}`}>
                          {block.title}
                        </p>
                        <blockquote className="text-lg md:text-xl lg:text-2xl font-black text-[#bc4749] italic leading-relaxed mb-5">
                          {block.quote}
                        </blockquote>
                        {block.bullets && block.bullets.length > 0 && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left">
                            {block.bullets.map((bullet, j) => (
                              <div
                                key={j}
                                className="flex gap-3 text-sm text-[#fefae0]/75 leading-relaxed"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#dda15e] flex-shrink-0 mt-1.5" />
                                <span>{bullet}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              );
            }

            /* Regular block card */
            return (
              <AnimatedSection key={block.id} delay={i * 80}>
                <div
                  className={[
                    'rounded-xl p-4 md:p-5 h-full flex flex-col border shadow-[0_2px_10px_rgba(93,61,46,0.06)] hover:shadow-[0_4px_16px_rgba(93,61,46,0.11)] transition-all duration-200',
                    theme.cardBg,
                    theme.cardBorder,
                    theme.cardBorderHover,
                  ].join(' ')}
                >
                  <h3 className={`text-sm font-bold mb-3 leading-snug ${theme.accentClass}`}>
                    {block.title}
                  </h3>

                  {block.text && (
                    <p className="text-[#5c3d2e] text-sm leading-relaxed mb-3">{block.text}</p>
                  )}

                  {block.quote && !block.isKeyQuote && (
                    <blockquote
                      className={[
                        'border-l-4 rounded-r-lg pl-3 pr-2.5 py-2.5 mb-3 italic text-sm leading-relaxed',
                        isWarning
                          ? 'border-[#bc4749] bg-[#bc4749]/8 text-[#5c3d2e]'
                          : 'border-[#bc6c25] bg-[#dda15e]/12 text-[#5c3d2e]',
                      ].join(' ')}
                    >
                      {block.quote}
                    </blockquote>
                  )}

                  {block.bullets && block.bullets.length > 0 && (
                    <ul className="space-y-2 flex-1">
                      {block.bullets.map((bullet, j) => (
                        <li key={j} className="flex gap-2.5 text-sm text-[#5c3d2e] leading-relaxed">
                          <span
                            className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${isWarning ? 'bg-[#bc4749]' : 'bg-[#bc6c25]'}`}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
