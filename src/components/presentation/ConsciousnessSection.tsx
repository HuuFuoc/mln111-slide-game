import { AnimatedSection } from './AnimatedSection';

const C2_BULLETS = [
  'Điều kiện sinh hoạt vật chất quyết định đời sống tinh thần.',
  'Phương thức sản xuất là cơ sở hình thành ý thức xã hội.',
  'Quan hệ kinh tế và hoàn cảnh lịch sử định hình tư tưởng, giá trị.',
  'Xã hội tồn tại như thế nào thì ý thức xã hội được hình thành như thế ấy.',
];

const C3_BULLETS = [
  'Ý thức xã hội có thể lạc hậu hơn so với tồn tại xã hội.',
  'Ý thức xã hội có thể vượt trước tồn tại xã hội.',
  'Ý thức xã hội kế thừa những giá trị tinh thần của các thời đại trước.',
  'Ý thức xã hội có thể tác động trở lại tồn tại xã hội.',
];

function IconBook() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#bc6c25" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#dda15e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function IconCycle() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#bc4749" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

export function ConsciousnessSection() {
  return (
    <section
      id="consciousness"
      className="scroll-mt-16 relative overflow-hidden py-16 md:py-24 px-4 md:px-8 bg-[#fefae0]"
    >
      {/* Ambient background shapes */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-[#dda15e]/[0.055]" />
        <div className="absolute -bottom-28 -left-28 w-[400px] h-[400px] rounded-full bg-[#bc6c25]/[0.04]" />
        {/* Faint grid dots */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #bc6c25 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-[1120px] mx-auto relative">
        {/* ─── Section header ─── */}
        <AnimatedSection>
          <div className="relative mb-12 md:mb-14">
            {/* Watermark "01" */}
            <span
              aria-hidden
              className="absolute select-none pointer-events-none font-black text-[#bc6c25]/[0.07] leading-none"
              style={{
                fontSize: 'clamp(110px, 18vw, 210px)',
                top: '-0.12em',
                left: '-0.04em',
              }}
            >
              01
            </span>

            <div className="relative z-10">
              {/* Label with line */}
              <div className="flex items-center gap-2.5 mb-3">
                <div className="h-px w-7 bg-[#bc6c25]" />
                <span className="text-[11px] font-bold text-[#bc6c25] uppercase tracking-[0.22em]">
                  Phần 01 · Nền tảng
                </span>
              </div>

              <h2 className="text-4xl md:text-[54px] font-black text-[#2d1810] leading-[1.05] tracking-tight mb-4">
                Ý thức xã hội
              </h2>

              <p className="text-[#5c3d2e]/68 text-base md:text-lg leading-[1.82] max-w-[580px]">
                Toàn bộ đời sống tinh thần của xã hội — phản ánh và tương tác
                biện chứng với điều kiện vật chất trong từng giai đoạn lịch sử.
              </p>

              {/* Accent bar */}
              <div className="flex items-center gap-2 mt-5">
                <div className="h-[3px] w-14 bg-[#bc6c25] rounded-full" />
                <div className="h-[3px] w-5 bg-[#bc6c25]/28 rounded-full" />
                <div className="h-[3px] w-2 bg-[#bc6c25]/12 rounded-full" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ─── Cards grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">

          {/* ── c1: Definition — full-width horizontal card ── */}
          <div className="lg:col-span-3">
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
                      Khái niệm ý thức xã hội
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
                    Ý thức xã hội là toàn bộ đời sống tinh thần của xã hội, bao gồm những quan điểm, tư tưởng, tình cảm, tâm lý, truyền thống, đạo đức, pháp luật, tôn giáo, nghệ thuật, triết học và các hình thái ý thức khác. Ý thức xã hội phản ánh tồn tại xã hội trong từng giai đoạn lịch sử nhất định.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* ── c2: Causality — dark featured card, 2 cols ── */}
          <div className="lg:col-span-2">
            <AnimatedSection delay={130}>
              <div className="bg-[#2d1810] rounded-2xl p-6 md:p-7 h-full shadow-[0_4px_28px_rgba(45,24,16,0.28)]">
                {/* Header */}
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-[#dda15e]/14 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IconArrow />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#dda15e]/55 uppercase tracking-[0.2em] mb-0.5">
                      Nguyên lý cốt lõi
                    </p>
                    <h3 className="text-lg md:text-xl font-bold text-[#fefae0] leading-snug">
                      Tồn tại xã hội quyết định ý thức xã hội
                    </h3>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-5 pl-4 border-l-2 border-[#dda15e]/50">
                  <span
                    aria-hidden
                    className="absolute -top-4 -left-0.5 text-[42px] text-[#dda15e]/20 font-serif leading-none select-none"
                  >
                    &ldquo;
                  </span>
                  <p className="text-[#dda15e] text-base md:text-lg italic font-semibold leading-relaxed">
                    Tồn tại xã hội quyết định ý thức xã hội.
                  </p>
                </div>

                <div className="border-t border-white/[0.07] mb-5" />

                <ul className="space-y-3">
                  {C2_BULLETS.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm md:text-[15px] text-[#fefae0]/68 leading-relaxed"
                    >
                      <span className="w-[5px] h-[5px] rounded-full bg-[#dda15e]/65 flex-shrink-0 mt-[9px]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* ── c3: Relative independence — 1 col ── */}
          <div className="lg:col-span-1">
            <AnimatedSection delay={240}>
              <div className="bg-[#faf3d5] border border-[#bc4749]/20 rounded-2xl p-5 md:p-6 h-full shadow-[0_2px_14px_rgba(93,61,46,0.07)]">
                {/* Header */}
                <div className="flex items-start gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#bc4749]/10 flex items-center justify-center flex-shrink-0">
                    <IconCycle />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#bc4749]/55 uppercase tracking-[0.2em] mb-0.5">
                      Đặc tính
                    </p>
                    <h3 className="text-base md:text-[17px] font-bold text-[#2d1810] leading-snug">
                      Tính độc lập tương đối
                    </h3>
                  </div>
                </div>

                {/* Connector line */}
                <div className="h-px bg-[#bc4749]/12 mb-4" />

                <ul className="space-y-3">
                  {C3_BULLETS.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-sm text-[#5c3d2e] leading-relaxed"
                    >
                      <span className="w-[5px] h-[5px] rounded-full bg-[#bc4749]/65 flex-shrink-0 mt-[8px]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
