import { type LandingSection } from '@/data/presentationSections';
import { AnimatedSection } from './AnimatedSection';

interface ContentSectionProps {
  section: LandingSection;
  altBg?: boolean;
}

export function ContentSection({ section, altBg = false }: ContentSectionProps) {
  const cols = section.columns ?? 2;
  const gridClass =
    cols === 3
      ? 'grid-cols-1 md:grid-cols-3'
      : 'grid-cols-1 md:grid-cols-2';

  return (
    <section
      id={section.id}
      className={`scroll-mt-16 py-20 px-4 ${altBg ? 'bg-[#dda15e]/8' : 'bg-[#fefae0]'}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <AnimatedSection>
          <div className="flex items-start gap-4 mb-12">
            <span
              aria-hidden
              className="text-[80px] font-black text-[#dda15e]/25 leading-none hidden md:block flex-shrink-0 mt-1"
            >
              {section.sectionNumber}
            </span>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d1810]">{section.title}</h2>
              <div className="h-1 w-14 bg-[#bc6c25] rounded-full mt-3" />
            </div>
          </div>
        </AnimatedSection>

        {/* Content blocks */}
        <div className={`grid ${gridClass} gap-6`}>
          {section.blocks.map((block, i) => (
            <AnimatedSection key={block.id} delay={i * 80}>
              <div className="bg-white border border-[#dda15e]/40 rounded-2xl p-6 shadow-sm h-full flex flex-col">
                <h3 className="text-base font-semibold text-[#bc6c25] mb-3">{block.title}</h3>

                {block.text && (
                  <p className="text-[#5c3d2e] text-sm leading-relaxed mb-3">{block.text}</p>
                )}

                {block.quote && (
                  <blockquote
                    className={[
                      'border-l-4 rounded-r-xl pl-4 pr-3 py-3 mb-3 italic text-sm leading-relaxed',
                      block.isKeyQuote
                        ? 'border-[#bc4749] bg-[#bc4749]/8 text-[#bc4749] font-medium'
                        : 'border-[#bc6c25] bg-[#dda15e]/15 text-[#5c3d2e]',
                    ].join(' ')}
                  >
                    {block.quote}
                  </blockquote>
                )}

                {block.bullets && block.bullets.length > 0 && (
                  <ul className="space-y-2 flex-1">
                    {block.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-[#5c3d2e] leading-relaxed">
                        <span className="text-[#bc6c25] mt-0.5 flex-shrink-0 text-xs">◆</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
