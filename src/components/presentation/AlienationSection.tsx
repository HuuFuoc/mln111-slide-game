import { AnimatedSection } from './AnimatedSection';

const CONCEPT_TEXT =
  'Tha hóa con người là hiện tượng con người bị tách khỏi bản chất đích thực của mình, đặc biệt trong lao động và trong các quan hệ xã hội. Khi bị tha hóa, những sản phẩm và quan hệ do con người tạo ra lại quay trở lại chi phối, áp bức hoặc làm con người mất đi khả năng phát triển tự do.';

const LABOR_BULLETS = [
  'Trong xã hội có áp bức, lao động không còn là hoạt động sáng tạo tự do.',
  'Người lao động không làm chủ sản phẩm lao động của mình.',
  'Con người bị phụ thuộc vào tiền lương, máy móc, thị trường.',
  'Con người có thể làm việc chỉ để tồn tại, xa lạ với công việc và bản thân.',
];

interface ChainNode {
  label: string;
  sub: string;
  color: string;
  isReversal?: boolean;
  isFinal?: boolean;
}

const CHAIN_NODES: ChainNode[] = [
  {
    label: 'Con người',
    sub: 'Chủ thể sáng tạo, có bản chất xã hội',
    color: '#bc6c25',
  },
  {
    label: 'Lao động',
    sub: 'Hoạt động tạo ra sản phẩm và của cải',
    color: '#bc6c25',
  },
  {
    label: 'Sản phẩm lao động',
    sub: 'Của cải vật chất và quan hệ xã hội',
    color: '#dda15e',
  },
  {
    label: 'Quay lại chi phối',
    sub: 'Sản phẩm trở thành lực lượng xa lạ áp đặt lại',
    color: '#bc4749',
    isReversal: true,
  },
  {
    label: 'Tha hóa',
    sub: 'Con người mất tự do, không còn làm chủ bản thân',
    color: '#bc4749',
    isFinal: true,
  },
];

function IconPerson() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#bc4749" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
    </svg>
  );
}

function IconGear() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#bc4749" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

function IconLoop() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#bc6c25" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

function AlienationChain() {
  return (
    <div className="flex flex-col gap-0">
      {CHAIN_NODES.map((node, i) => (
        <div key={i}>
          {i > 0 && (
            <div className="flex items-center justify-center py-2">
              <div className="flex flex-col items-center gap-0.5">
                {node.isReversal ? (
                  <>
                    <div className="w-px h-4 border-l-2 border-dashed border-[#bc4749]/55" />
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
                      <path d="M1 1l4 4 4-4" stroke="#bc4749" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                ) : (
                  <>
                    <div className="w-px h-4 bg-[#bc6c25]/35" />
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
                      <path d="M1 1l4 4 4-4" stroke="#bc6c25" strokeOpacity="0.45" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </div>
            </div>
          )}

          <div
            className={[
              'rounded-xl px-4 py-3 flex items-start gap-3 border',
              node.isFinal
                ? 'bg-[#2d1810] border-[#bc4749]/50'
                : node.isReversal
                  ? 'bg-[#bc4749]/10 border-[#bc4749]/35'
                  : 'bg-[#fefae0] border-[#dda15e]/45',
            ].join(' ')}
          >
            <div
              className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-[5px]"
              style={{ background: node.color }}
            />
            <div className="min-w-0">
              <p
                className={[
                  'text-sm font-bold leading-snug mb-0.5',
                  node.isFinal ? 'text-[#fefae0]' : node.isReversal ? 'text-[#bc4749]' : 'text-[#2d1810]',
                ].join(' ')}
              >
                {node.label}
              </p>
              <p
                className={[
                  'text-[11px] leading-snug',
                  node.isFinal ? 'text-[#fefae0]/50' : node.isReversal ? 'text-[#5c3d2e]' : 'text-[#5c3d2e]/60',
                ].join(' ')}
              >
                {node.sub}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function AlienationSection() {
  return (
    <section
      id="alienation"
      className="scroll-mt-16 relative overflow-hidden py-16 md:py-24 px-4 md:px-8 bg-[#fefae0]"
    >
      {/* Background ambient shapes — red-tinted for tension */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 -right-40 w-[560px] h-[560px] rounded-full bg-[#bc4749]/[0.038]" />
        <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#bc4749]/[0.025]" />
        <div
          className="absolute inset-0 opacity-[0.014]"
          style={{
            backgroundImage: 'radial-gradient(circle, #bc4749 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-[1120px] mx-auto relative">

        {/* ─── Section header ─── */}
        <AnimatedSection>
          <div className="relative mb-12 md:mb-14">
            <span
              aria-hidden
              className="absolute select-none pointer-events-none font-black leading-none"
              style={{
                fontSize: 'clamp(110px, 18vw, 210px)',
                top: '-0.12em',
                left: '-0.04em',
                color: 'rgba(188,71,73,0.07)',
              }}
            >
              03
            </span>

            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="h-px w-7 bg-[#bc4749]" />
                <span className="text-[11px] font-bold text-[#bc4749] uppercase tracking-[0.22em]">
                  Phần 03 · Trọng tâm
                </span>
              </div>

              <h2 className="text-4xl md:text-[54px] font-black text-[#2d1810] leading-[1.05] tracking-tight mb-4">
                Hiện tượng tha hóa<br className="hidden md:block" /> con người
              </h2>

              <p className="text-[#5c3d2e]/68 text-base md:text-lg leading-[1.82] max-w-[620px]">
                Khi con người bị chính sản phẩm, lao động và quan hệ xã hội
                do mình tạo ra quay lại chi phối và tước đoạt tự do phát triển.
              </p>

              <div className="flex items-center gap-2 mt-5">
                <div className="h-[3px] w-14 bg-[#bc4749] rounded-full" />
                <div className="h-[3px] w-5 bg-[#bc4749]/28 rounded-full" />
                <div className="h-[3px] w-2 bg-[#bc4749]/12 rounded-full" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ─── Row 1: Two main content cards ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-5">

          {/* ── a1: Concept ── */}
          <AnimatedSection delay={0}>
            <div className="bg-[#faf3d5] border border-[#bc4749]/30 rounded-[22px] p-6 md:p-7 h-full shadow-[0_3px_20px_rgba(93,61,46,0.10)]">
              <div className="flex items-start gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#bc4749]/10 flex items-center justify-center flex-shrink-0">
                  <IconPerson />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#bc4749] uppercase tracking-[0.2em] mb-0.5">
                    Khái niệm
                  </p>
                  <h3 className="text-base md:text-[17px] font-bold text-[#2d1810] leading-snug">
                    Khái niệm tha hóa con người
                  </h3>
                </div>
              </div>
              <div className="h-px bg-[#bc4749]/15 mb-5" />
              <p className="text-[#5c3d2e] text-[15px] leading-[1.75]">{CONCEPT_TEXT}</p>
            </div>
          </AnimatedSection>

          {/* ── a2: Labor & social life ── */}
          <AnimatedSection delay={120}>
            <div className="bg-[#faf3d5] border border-[#bc4749]/30 rounded-[22px] p-6 md:p-7 h-full shadow-[0_3px_20px_rgba(93,61,46,0.10)]">
              <div className="flex items-start gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#bc4749]/10 flex items-center justify-center flex-shrink-0">
                  <IconGear />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#bc4749] uppercase tracking-[0.2em] mb-0.5">
                    Biểu hiện
                  </p>
                  <h3 className="text-base md:text-[17px] font-bold text-[#2d1810] leading-snug">
                    Tha hóa trong lao động và đời sống xã hội
                  </h3>
                </div>
              </div>
              <div className="h-px bg-[#bc4749]/15 mb-5" />
              <ul className="space-y-3.5">
                {LABOR_BULLETS.map((b, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-[#5c3d2e] leading-[1.75]">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#bc4749]/65 flex-shrink-0 mt-[9px]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

        </div>

        {/* ─── Row 2: Chain diagram + Insight quote ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">

          {/* ── Chain diagram ── */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={200}>
              <div className="bg-[#faf3d5] border border-[#dda15e]/40 rounded-[22px] p-6 md:p-7 h-full shadow-[0_3px_18px_rgba(93,61,46,0.09)]">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#dda15e]/18 flex items-center justify-center flex-shrink-0">
                    <IconLoop />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#bc6c25] uppercase tracking-[0.2em] mb-0.5">
                      Sơ đồ
                    </p>
                    <h3 className="text-base md:text-[17px] font-bold text-[#2d1810] leading-snug">
                      Chuỗi tha hóa
                    </h3>
                  </div>
                </div>
                <div className="h-px bg-[#dda15e]/22 mb-5" />
                <AlienationChain />
              </div>
            </AnimatedSection>
          </div>

          {/* ── Insight quote block ── */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={280}>
              <div className="bg-[#2d1810] rounded-[22px] p-6 md:p-8 h-full shadow-[0_5px_32px_rgba(45,24,16,0.32)] overflow-hidden relative">
                {/* Top accent strip */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#bc4749]" />

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#bc4749]/18 border border-[#bc4749]/30 rounded-full text-[10px] font-bold text-[#bc4749] uppercase tracking-[0.18em] mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bc4749]" />
                  Luận điểm cốt lõi
                </div>

                {/* Quote */}
                <div className="relative mb-5">
                  <span aria-hidden className="absolute -top-4 -left-1 text-[72px] text-[#dda15e]/15 font-serif leading-none select-none">
                    &ldquo;
                  </span>
                  <blockquote className="text-[#fefae0] text-lg md:text-xl lg:text-[22px] font-bold italic leading-[1.65] tracking-[-0.01em] relative z-10 pl-1">
                    Trong điều kiện tha hóa, con người mất khả năng phát triển tự do vì bị chính những thứ mình tạo ra — sản phẩm, lao động, quan hệ xã hội — quay lại chi phối ngược lại.
                  </blockquote>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-1 h-px bg-[#bc4749]/25" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#bc4749]/50" />
                  <div className="flex-1 h-px bg-[#bc4749]/25" />
                </div>

                {/* 3 insight mini-cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { icon: '→', label: 'Con người tạo ra', value: 'Sản phẩm và thiết chế xã hội' },
                    { icon: '↩', label: 'Trong điều kiện áp bức', value: 'Sản phẩm quay lại chi phối' },
                    { icon: '⊗', label: 'Hệ quả', value: 'Con người mất tự do phát triển' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/[0.04] rounded-xl p-3.5 border border-white/[0.07]">
                      <p className="text-[#dda15e] text-xl font-black mb-2 leading-none">{item.icon}</p>
                      <p className="text-[10px] text-[#dda15e]/55 uppercase tracking-[0.15em] mb-1 font-bold">{item.label}</p>
                      <p className="text-[#fefae0]/72 text-sm leading-snug">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>

      </div>
    </section>
  );
}
