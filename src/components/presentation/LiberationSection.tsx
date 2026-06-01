import { AnimatedSection } from './AnimatedSection';

const CONCEPT_TEXT =
  'Giải phóng con người là giải phóng khỏi những điều kiện xã hội làm cho con người bị áp bức, bóc lột, tha hóa và không thể phát triển toàn diện. Giải phóng con người phải gắn liền với giải phóng xã hội.';

const SOCIAL_BULLETS = [
  'Giải phóng lao động khỏi bóc lột và tha hóa.',
  'Giải phóng giai cấp bị áp bức.',
  'Cải tạo những quan hệ xã hội bất công.',
  'Xây dựng điều kiện để con người phát triển tự do, toàn diện.',
];

const GOAL_BULLETS = [
  'Được phát triển tự do và toàn diện.',
  'Làm chủ lao động và đời sống xã hội.',
  'Phát huy năng lực sáng tạo của bản thân.',
  'Sống trong quan hệ xã hội công bằng, nhân văn và tiến bộ.',
];

interface PathStep {
  label: string;
  sub: string;
  accent: string;
  featured?: boolean;
  muted?: boolean;
}

const PATH_STEPS: PathStep[] = [
  { label: 'Tha hóa', sub: 'Điều kiện cần xóa bỏ', accent: '#bc4749', muted: true },
  { label: 'Giải phóng lao động', sub: 'Xóa bỏ bóc lột, tha hóa', accent: '#bc6c25' },
  { label: 'Cải tạo xã hội', sub: 'Quan hệ công bằng, tiến bộ', accent: '#bc6c25' },
  { label: 'Phát triển tự do', sub: 'Con người làm chủ bản thân', accent: '#bc6c25', featured: true },
];

function IconBook() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#bc6c25" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function IconChain() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#bc6c25" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dda15e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function IconPath() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#bc6c25" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function LiberationPath() {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:items-stretch">
      {PATH_STEPS.map((step, i) => (
        <div key={i} className="flex flex-col md:flex-row items-center flex-1 min-w-0">
          <div
            className={[
              'flex-1 w-full rounded-xl px-4 py-4 border',
              step.featured
                ? 'bg-[#bc6c25] border-[#bc6c25] shadow-[0_3px_16px_rgba(188,108,37,0.30)]'
                : step.muted
                  ? 'bg-[#bc4749]/10 border-[#bc4749]/30'
                  : 'bg-[#fefae0] border-[#dda15e]/45',
            ].join(' ')}
          >
            <div className="w-2 h-2 rounded-full mb-2.5" style={{ background: step.accent }} />
            <p
              className={[
                'text-sm font-bold leading-snug mb-1',
                step.featured ? 'text-[#fefae0]' : step.muted ? 'text-[#bc4749]' : 'text-[#2d1810]',
              ].join(' ')}
            >
              {step.label}
            </p>
            <p
              className={[
                'text-[11px] leading-snug',
                step.featured ? 'text-[#fefae0]/70' : 'text-[#5c3d2e]/60',
              ].join(' ')}
            >
              {step.sub}
            </p>
          </div>

          {i < PATH_STEPS.length - 1 && (
            <div className="flex items-center justify-center flex-shrink-0 md:px-2">
              <svg className="hidden md:block" width="18" height="14" viewBox="0 0 18 14" fill="none">
                <path d="M0 7H14M10 3l4 4-4 4" stroke="#bc6c25" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg className="md:hidden" width="14" height="18" viewBox="0 0 14 18" fill="none">
                <path d="M7 0v14M3 10l4 4 4-4" stroke="#bc6c25" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function LiberationSection() {
  return (
    <section
      id="liberation"
      className="scroll-mt-16 relative overflow-hidden py-16 md:py-24 px-4 md:px-8"
      style={{ background: 'rgba(221,161,94,0.07)' }}
    >
      {/* Background ambient shapes */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 -left-40 w-[580px] h-[580px] rounded-full bg-[#bc6c25]/[0.04]" />
        <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#dda15e]/[0.055]" />
      </div>

      <div className="max-w-[1120px] mx-auto relative">

        {/* ─── Section header ─── */}
        <AnimatedSection>
          <div className="relative mb-12 md:mb-14">
            <span
              aria-hidden
              className="absolute select-none pointer-events-none font-black text-[#bc6c25]/[0.065] leading-none"
              style={{ fontSize: 'clamp(110px, 18vw, 210px)', top: '-0.12em', left: '-0.04em' }}
            >
              04
            </span>

            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="h-px w-7 bg-[#bc6c25]" />
                <span className="text-[11px] font-bold text-[#bc6c25] uppercase tracking-[0.22em]">
                  Phần 04 · Mục tiêu
                </span>
              </div>

              <h2 className="text-4xl md:text-[54px] font-black text-[#2d1810] leading-[1.05] tracking-tight mb-4">
                Vấn đề giải phóng<br className="hidden md:block" /> con người
              </h2>

              <p className="text-[#5c3d2e]/68 text-base md:text-lg leading-[1.82] max-w-[620px]">
                Giải phóng con người khỏi áp bức, bóc lột và tha hóa — xây dựng
                điều kiện để con người được phát triển tự do và toàn diện.
              </p>

              <div className="flex items-center gap-2 mt-5">
                <div className="h-[3px] w-14 bg-[#bc6c25] rounded-full" />
                <div className="h-[3px] w-5 bg-[#bc6c25]/28 rounded-full" />
                <div className="h-[3px] w-2 bg-[#bc6c25]/12 rounded-full" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ─── Row 1: Concept — full-width horizontal card ─── */}
        <div className="mb-4 md:mb-5">
          <AnimatedSection delay={0}>
            <div className="flex flex-col sm:flex-row bg-[#faf3d5] border border-[#bc6c25]/20 rounded-2xl overflow-hidden shadow-[0_2px_18px_rgba(93,61,46,0.09)]">
              {/* Left accent panel */}
              <div className="sm:w-52 md:w-60 flex-shrink-0 bg-[#bc6c25]/[0.07] border-b sm:border-b-0 sm:border-r border-[#bc6c25]/14 p-5 sm:p-6 flex flex-col justify-between gap-6">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#bc6c25]/14 flex items-center justify-center mb-3">
                    <IconBook />
                  </div>
                  <p className="text-[10px] font-bold text-[#bc6c25] uppercase tracking-[0.2em] mb-1.5">
                    Khái niệm
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-[#2d1810] leading-snug">
                    Giải phóng khỏi áp bức và tha hóa
                  </h3>
                </div>
                <div className="flex gap-1.5">
                  <div className="h-[3px] w-8 bg-[#bc6c25] rounded-full" />
                  <div className="h-[3px] w-3 bg-[#bc6c25]/30 rounded-full" />
                </div>
              </div>

              {/* Right: text */}
              <div className="flex-1 p-5 sm:p-6 md:p-8 flex items-center">
                <p className="text-[#3d2012] text-base md:text-[17px] leading-[1.88]">
                  {CONCEPT_TEXT}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* ─── Row 2: Social transform + Goal ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-5">

          {/* l2: Gắn liền với cải tạo xã hội */}
          <AnimatedSection delay={120}>
            <div className="bg-[#faf3d5] border border-[#dda15e]/40 rounded-[22px] p-6 md:p-7 h-full shadow-[0_3px_18px_rgba(93,61,46,0.09)]">
              <div className="flex items-start gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#bc6c25]/12 flex items-center justify-center flex-shrink-0">
                  <IconChain />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#bc6c25] uppercase tracking-[0.2em] mb-0.5">
                    Điều kiện
                  </p>
                  <h3 className="text-base md:text-[17px] font-bold text-[#2d1810] leading-snug">
                    Gắn liền với cải tạo xã hội
                  </h3>
                </div>
              </div>
              <div className="h-px bg-[#dda15e]/22 mb-5" />
              <ul className="space-y-3.5">
                {SOCIAL_BULLETS.map((b, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-[#5c3d2e] leading-[1.75]">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#bc6c25]/60 flex-shrink-0 mt-[9px]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* l3: Mục tiêu — dark featured */}
          <AnimatedSection delay={220}>
            <div className="bg-[#2B160F] rounded-[22px] p-6 md:p-7 h-full shadow-[0_5px_28px_rgba(45,24,16,0.30)] overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#bc6c25]" />

              <div className="flex items-start gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#dda15e]/14 flex items-center justify-center flex-shrink-0">
                  <IconStar />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#dda15e]/55 uppercase tracking-[0.2em] mb-0.5">
                    Mục tiêu
                  </p>
                  <h3 className="text-base md:text-[17px] font-bold text-[#fefae0] leading-snug">
                    Phát triển tự do và toàn diện
                  </h3>
                </div>
              </div>

              <div className="h-px bg-white/[0.07] mb-5" />

              <ul className="space-y-3.5">
                {GOAL_BULLETS.map((b, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-[#fefae0]/70 leading-[1.75]">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#dda15e]/65 flex-shrink-0 mt-[9px]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

        </div>

        {/* ─── Row 3: Liberation path visual ─── */}
        <AnimatedSection delay={320}>
          <div className="bg-[#faf3d5] border border-[#dda15e]/35 rounded-[22px] p-5 md:p-6 shadow-[0_2px_14px_rgba(93,61,46,0.07)]">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-[#dda15e]/18 flex items-center justify-center flex-shrink-0">
                <IconPath />
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#bc6c25] uppercase tracking-[0.2em] mb-0.5">
                  Con đường
                </p>
                <h3 className="text-base md:text-[17px] font-bold text-[#2d1810] leading-snug">
                  Từ tha hóa đến giải phóng
                </h3>
              </div>
            </div>
            <div className="h-px bg-[#dda15e]/22 mb-5" />
            <LiberationPath />
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
