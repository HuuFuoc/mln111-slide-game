import { AnimatedSection } from './AnimatedSection';

const H1_BULLETS = [
  'Mặt tự nhiên: con người có cơ thể sinh học, nhu cầu sinh tồn, ăn, uống, nghỉ ngơi, phát triển.',
  'Mặt xã hội: con người sống trong xã hội, lao động, giao tiếp, tư duy, sáng tạo văn hóa.',
  'Điểm phân biệt với động vật: đời sống xã hội, ngôn ngữ, tư duy và khả năng sáng tạo.',
];

const H2_BULLETS = [
  'Lao động là hoạt động đặc trưng, phân biệt con người với động vật.',
  'Thông qua lao động: tạo ra của cải vật chất, hình thành ngôn ngữ và tư duy.',
  'Lao động giúp xây dựng các quan hệ xã hội và sáng tạo ra văn hóa.',
  'Lao động phát triển năng lực, nhân cách và ý thức của con người.',
];

const H3_BULLETS = [
  'Bản chất con người không có sẵn một cách cô lập.',
  'Con người được hình thành trong đời sống xã hội.',
  'Nhân cách, ý thức, năng lực chịu ảnh hưởng từ các quan hệ xã hội.',
  'Muốn hiểu con người, phải đặt họ trong hoàn cảnh lịch sử – xã hội cụ thể.',
];

const H4_BULLETS = [
  'Mỗi cá nhân vẫn có ý thức và năng lực riêng.',
  'Cá nhân có sự lựa chọn và trách nhiệm cá nhân.',
  'Mỗi người có khả năng tác động trở lại xã hội.',
  'Con người vừa là sản phẩm của xã hội, vừa là chủ thể sáng tạo và cải tạo xã hội.',
];

const CHAIN_STEPS = [
  {
    label: 'Tự nhiên',
    sub: 'Cơ thể sinh học – Nhu cầu sinh tồn',
    accent: '#dda15e',
    dark: false,
  },
  {
    label: 'Lao động',
    sub: 'Sáng tạo – Biến đổi – Phát triển',
    accent: '#bc6c25',
    dark: false,
  },
  {
    label: 'Xã hội',
    sub: 'Quan hệ – Văn hóa – Lịch sử',
    accent: '#bc6c25',
    dark: false,
  },
  {
    label: 'Bản chất con người',
    sub: 'Tổng hòa các quan hệ xã hội',
    accent: '#bc4749',
    dark: true,
  },
];

function IconHuman({ color = '#bc6c25' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
    </svg>
  );
}

function IconLabor({ color = '#bc6c25' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconIndividual({ color = '#bc4749' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function FormationChain() {
  return (
    <div className="flex flex-col gap-0">
      {CHAIN_STEPS.map((step, i) => (
        <div key={i}>
          {/* Connector arrow */}
          {i > 0 && (
            <div className="flex items-center justify-center py-1.5">
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-px h-4 bg-[#bc6c25]/35" />
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="#bc6c25" strokeOpacity="0.45" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          )}
          {/* Step node */}
          <div
            className={[
              'rounded-xl px-4 py-3 flex items-center gap-3 border',
              step.dark
                ? 'bg-[#2d1810] border-[#bc4749]/35'
                : 'bg-[#faf3d5] border-[#dda15e]/45',
            ].join(' ')}
          >
            <div
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ background: step.accent }}
            />
            <div className="min-w-0">
              <p
                className={[
                  'text-sm font-bold leading-none mb-1',
                  step.dark ? 'text-[#fefae0]' : 'text-[#2d1810]',
                ].join(' ')}
              >
                {step.label}
              </p>
              <p
                className={[
                  'text-[11px] leading-snug',
                  step.dark ? 'text-[#fefae0]/55' : 'text-[#5c3d2e]/60',
                ].join(' ')}
              >
                {step.sub}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function HumanNatureSection() {
  return (
    <section
      id="human-nature"
      className="scroll-mt-16 relative overflow-hidden py-16 md:py-24 px-4 md:px-8"
      style={{ background: 'rgba(221,161,94,0.09)' }}
    >
      {/* Background decorations */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 -left-40 w-[580px] h-[580px] rounded-full bg-[#bc6c25]/[0.045]" />
        <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#dda15e]/[0.055]" />
      </div>

      <div className="max-w-[1120px] mx-auto relative">

        {/* ─── Section header ─── */}
        <AnimatedSection>
          <div className="relative mb-12 md:mb-14">
            {/* Watermark */}
            <span
              aria-hidden
              className="absolute select-none pointer-events-none font-black text-[#bc6c25]/[0.065] leading-none"
              style={{ fontSize: 'clamp(110px, 18vw, 210px)', top: '-0.12em', left: '-0.04em' }}
            >
              02
            </span>

            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="h-px w-7 bg-[#bc6c25]" />
                <span className="text-[11px] font-bold text-[#bc6c25] uppercase tracking-[0.22em]">
                  Phần 02 · Trọng tâm
                </span>
              </div>

              <h2 className="text-4xl md:text-[54px] font-black text-[#2d1810] leading-[1.05] tracking-tight mb-4">
                Con người và bản chất<br className="hidden md:block" /> con người
              </h2>

              <p className="text-[#5c3d2e]/68 text-base md:text-lg leading-[1.82] max-w-[600px]">
                Con người là thực thể thống nhất giữa tự nhiên và xã hội — bản chất
                không có sẵn mà được hình thành qua lao động và quan hệ xã hội.
              </p>

              <div className="flex items-center gap-2 mt-5">
                <div className="h-[3px] w-14 bg-[#bc6c25] rounded-full" />
                <div className="h-[3px] w-5 bg-[#bc6c25]/28 rounded-full" />
                <div className="h-[3px] w-2 bg-[#bc6c25]/12 rounded-full" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ─── Cards grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">

          {/* ── h1: Thực thể tự nhiên–xã hội ── */}
          <AnimatedSection delay={0}>
            <div className="bg-[#faf3d5] border border-[#dda15e]/40 rounded-2xl p-5 md:p-6 h-full shadow-[0_2px_16px_rgba(93,61,46,0.08)]">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#bc6c25]/12 flex items-center justify-center flex-shrink-0">
                  <IconHuman />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#bc6c25] uppercase tracking-[0.2em] mb-0.5">
                    Bản thể
                  </p>
                  <h3 className="text-base md:text-[17px] font-bold text-[#2d1810] leading-snug">
                    Con người là thực thể tự nhiên – xã hội
                  </h3>
                </div>
              </div>
              <div className="h-px bg-[#dda15e]/22 mb-4" />
              <ul className="space-y-3">
                {H1_BULLETS.map((b, i) => (
                  <li key={i} className="flex gap-2.5 text-sm md:text-[15px] text-[#5c3d2e] leading-[1.75]">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#bc6c25]/60 flex-shrink-0 mt-[8px]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* ── h2: Vai trò lao động ── */}
          <AnimatedSection delay={110}>
            <div className="bg-[#faf3d5] border border-[#dda15e]/40 rounded-2xl p-5 md:p-6 h-full shadow-[0_2px_16px_rgba(93,61,46,0.08)]">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#bc6c25]/12 flex items-center justify-center flex-shrink-0">
                  <IconLabor />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#bc6c25] uppercase tracking-[0.2em] mb-0.5">
                    Động lực
                  </p>
                  <h3 className="text-base md:text-[17px] font-bold text-[#2d1810] leading-snug">
                    Vai trò của lao động
                  </h3>
                </div>
              </div>
              <div className="h-px bg-[#dda15e]/22 mb-4" />
              <ul className="space-y-3">
                {H2_BULLETS.map((b, i) => (
                  <li key={i} className="flex gap-2.5 text-sm md:text-[15px] text-[#5c3d2e] leading-[1.75]">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#bc6c25]/60 flex-shrink-0 mt-[8px]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* ── h3: Quote block — full width ── */}
          <div className="md:col-span-2">
            <AnimatedSection delay={190}>
              <div className="bg-[#faf3d5] border border-[#bc6c25]/25 rounded-2xl overflow-hidden shadow-[0_3px_20px_rgba(93,61,46,0.10)]">
                {/* Top accent strip */}
                <div className="h-1 bg-[#bc6c25] w-full" />

                <div className="p-6 md:p-8">
                  {/* Badge */}
                  <div className="flex items-center justify-center mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#bc6c25]/10 border border-[#bc6c25]/25 rounded-full text-[11px] font-bold text-[#bc6c25] uppercase tracking-[0.18em]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bc6c25]" />
                      Luận điểm trung tâm
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="relative text-center max-w-3xl mx-auto mb-7">
                    <span aria-hidden className="absolute -top-6 left-1/2 -translate-x-1/2 text-[80px] text-[#dda15e]/22 font-serif leading-none select-none">
                      &ldquo;
                    </span>
                    <blockquote className="text-lg md:text-xl lg:text-2xl font-bold italic text-[#2d1810] leading-[1.65] tracking-[-0.01em] relative z-10">
                      Bản chất con người không phải là cái trừu tượng cố hữu của cá nhân riêng biệt. Trong tính hiện thực của nó, bản chất con người là tổng hòa những quan hệ xã hội.
                    </blockquote>
                    <p className="mt-3 text-sm font-semibold text-[#bc6c25]">
                      — C.Mác
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-1 h-px bg-[#bc6c25]/18" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#bc6c25]/35" />
                    <div className="flex-1 h-px bg-[#bc6c25]/18" />
                  </div>

                  {/* Bullets — 2 cols */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {H3_BULLETS.map((b, i) => (
                      <li key={i} className="flex gap-2.5 text-sm md:text-[15px] text-[#5c3d2e] leading-[1.75]">
                        <span className="w-[5px] h-[5px] rounded-full bg-[#bc6c25]/55 flex-shrink-0 mt-[8px]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* ── h4: Vai trò cá nhân ── */}
          <AnimatedSection delay={270}>
            <div className="bg-[#faf3d5] border border-[#bc4749]/22 rounded-2xl p-5 md:p-6 h-full shadow-[0_2px_14px_rgba(93,61,46,0.07)]">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#bc4749]/10 flex items-center justify-center flex-shrink-0">
                  <IconIndividual />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#bc4749]/60 uppercase tracking-[0.2em] mb-0.5">
                    Cân bằng
                  </p>
                  <h3 className="text-base md:text-[17px] font-bold text-[#2d1810] leading-snug">
                    Không phủ nhận vai trò cá nhân
                  </h3>
                </div>
              </div>
              <div className="h-px bg-[#bc4749]/14 mb-4" />
              <ul className="space-y-3">
                {H4_BULLETS.map((b, i) => (
                  <li key={i} className="flex gap-2.5 text-sm md:text-[15px] text-[#5c3d2e] leading-[1.75]">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#bc4749]/55 flex-shrink-0 mt-[8px]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* ── Diagram: Formation chain ── */}
          <AnimatedSection delay={360}>
            <div className="bg-[#faf3d5] border border-[#dda15e]/40 rounded-2xl p-5 md:p-6 h-full shadow-[0_2px_14px_rgba(93,61,46,0.07)]">
              {/* Header */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-9 h-9 rounded-xl bg-[#dda15e]/18 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#bc6c25" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
                    <path d="m5.64 5.64 2.12 2.12M16.24 16.24l2.12 2.12M5.64 18.36l2.12-2.12M16.24 7.76l2.12-2.12" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#bc6c25] uppercase tracking-[0.2em] mb-0.5">
                    Sơ đồ
                  </p>
                  <h3 className="text-base md:text-[17px] font-bold text-[#2d1810] leading-snug">
                    Chuỗi hình thành bản chất
                  </h3>
                </div>
              </div>

              <div className="h-px bg-[#dda15e]/22 mb-5" />

              <FormationChain />
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
