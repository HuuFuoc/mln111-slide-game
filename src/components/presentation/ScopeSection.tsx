import { AnimatedSection } from './AnimatedSection';

interface RoadmapItem {
  step: string;
  role: string;
  chapter: string;
  title: string;
  desc: string;
  source: string;
  featured: boolean;
}

const roadmapItems: RoadmapItem[] = [
  {
    step: '01',
    role: 'Nền tảng',
    chapter: 'Chương IV',
    title: 'Ý thức xã hội',
    desc: 'Khái niệm, quan hệ với tồn tại xã hội, tính độc lập tương đối và tác động trở lại.',
    source: 'Giáo trình Triết học Mác – Lênin 2019, tr. 419–447',
    featured: false,
  },
  {
    step: '02',
    role: 'Trọng tâm',
    chapter: 'Chương V · Mục 1',
    title: 'Con người và bản chất con người',
    desc: 'Con người là thực thể tự nhiên – xã hội. Vai trò lao động và luận điểm con người là tổng hòa các quan hệ xã hội.',
    source: 'Giáo trình Triết học Mác – Lênin 2019, tr. 247–253',
    featured: true,
  },
  {
    step: '03',
    role: 'Mở rộng',
    chapter: 'Chương V · Mục 2',
    title: 'Tha hóa và giải phóng con người',
    desc: 'Hiện tượng tha hóa trong lao động, đời sống xã hội và vấn đề giải phóng con người.',
    source: 'Giáo trình Triết học Mác – Lênin 2019, tr. 253–257',
    featured: false,
  },
];

function RoadmapCard({ item }: { item: RoadmapItem }) {
  const f = item.featured;
  return (
    <div
      className={[
        'group relative rounded-2xl flex flex-col overflow-hidden',
        'transition-all duration-200 cursor-default hover:-translate-y-1',
        f
          ? [
              'bg-[#fff8ee] p-7 md:p-8',
              'border-2 border-[#bc4749]/55',
              'shadow-[0_4px_24px_rgba(188,71,73,0.09)]',
              'hover:border-[#bc4749]/80 hover:shadow-[0_8px_32px_rgba(188,71,73,0.15)]',
            ].join(' ')
          : [
              'bg-[#faf3d5] p-7 md:p-8',
              'border border-[#dda15e]/50',
              'shadow-[0_2px_12px_rgba(93,61,46,0.07)]',
              'hover:border-[#bc6c25]/60 hover:shadow-[0_6px_24px_rgba(93,61,46,0.11)]',
            ].join(' '),
      ].join(' ')}
    >
      {/* Decorative background step number */}
      <span
        aria-hidden
        className={[
          'absolute -right-1 -top-2 text-[88px] font-black leading-none',
          'select-none pointer-events-none transition-opacity duration-200',
          f
            ? 'text-[#bc4749]/10 group-hover:text-[#bc4749]/20'
            : 'text-[#dda15e]/18 group-hover:text-[#dda15e]/30',
        ].join(' ')}
      >
        {item.step}
      </span>

      <div className="relative flex flex-col flex-1">
        {/* Step pill + role badge */}
        <div className="flex items-center gap-2.5 mb-4">
          <span
            className={[
              'flex-shrink-0 w-7 h-7 rounded-full text-xs font-black flex items-center justify-center leading-none',
              f ? 'bg-[#bc4749] text-white' : 'bg-[#bc6c25]/15 text-[#bc6c25]',
            ].join(' ')}
          >
            {item.step}
          </span>
          <span
            className={[
              'text-[11px] font-bold uppercase tracking-[0.15em] px-2.5 py-[3px] rounded-md leading-none',
              f
                ? 'bg-[#bc4749]/10 text-[#bc4749] border border-[#bc4749]/25'
                : 'bg-[#bc6c25]/10 text-[#bc6c25]',
            ].join(' ')}
          >
            {item.role}
          </span>
        </div>

        {/* Chapter sub-label */}
        <span className="block text-[11px] font-semibold text-[#bc6c25]/60 uppercase tracking-wider mb-2">
          {item.chapter}
        </span>

        {/* Title */}
        <h3
          className={[
            'font-bold leading-snug mb-3',
            f ? 'text-xl md:text-2xl text-[#2d1810]' : 'text-lg md:text-xl text-[#2d1810]',
          ].join(' ')}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className={[
            'leading-[1.7] flex-1 mb-5',
            f ? 'text-sm md:text-base text-[#3d2012]' : 'text-sm text-[#5c3d2e]',
          ].join(' ')}
        >
          {item.desc}
        </p>

        {/* Citation */}
        <div className="border-t border-[#dda15e]/25 pt-3 mt-auto">
          <p className="text-[11px] text-[#5c3d2e]/55 leading-snug">
            Nguồn: {item.source}
          </p>
        </div>
      </div>
    </div>
  );
}

function RoadmapConnector() {
  return (
    <div className="md:self-center">
      {/* Mobile: vertical connector */}
      <div className="md:hidden flex flex-col items-center py-3 gap-1">
        <div className="w-px h-7 bg-[#dda15e]/40" />
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path
            d="M7 1v9M2.5 7l4.5 5 4.5-5"
            stroke="#bc6c25"
            strokeOpacity="0.55"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {/* Desktop: horizontal connector */}
      <div className="hidden md:flex items-center gap-0.5">
        <div className="flex-1 h-px bg-[#dda15e]/40" />
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="flex-shrink-0">
          <path
            d="M2 8h10M8 3.5l4.5 4.5-4.5 4.5"
            stroke="#bc6c25"
            strokeOpacity="0.55"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export function ScopeSection() {
  return (
    <section
      id="scope"
      className="scroll-mt-16 py-20 md:py-28 px-4 bg-[#fefae0] relative overflow-hidden"
    >
      {/* Subtle radial warmth behind content */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 65% at 50% 55%, rgba(221,161,94,0.065) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1120px] mx-auto w-full relative">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-14 md:mb-16">
            <span className="text-xs font-bold text-[#bc6c25] uppercase tracking-[0.2em]">
              Phạm vi bài thuyết trình
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#2d1810] mt-3 leading-tight">
              Ba nội dung chính
            </h2>
            <div className="h-1 w-14 bg-[#bc6c25] rounded-full mx-auto mt-4 mb-5" />
            <p className="text-[#5c3d2e] text-base md:text-lg leading-[1.75] max-w-[680px] mx-auto">
              Ba phần này tạo thành mạch lập luận: từ ý thức xã hội, đến bản chất xã hội của con người,
              rồi phân tích tha hóa và vấn đề giải phóng con người.
            </p>
          </div>
        </AnimatedSection>

        {/* Roadmap
            Desktop: 5-col grid → [card] [48px connector] [card] [48px connector] [card]
            Mobile:  single column, RoadmapConnector shows vertical arrow  */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_48px_1fr_48px_1fr] md:items-start">
          <AnimatedSection delay={0}>
            <RoadmapCard item={roadmapItems[0]} />
          </AnimatedSection>

          <RoadmapConnector />

          <AnimatedSection delay={150}>
            <RoadmapCard item={roadmapItems[1]} />
          </AnimatedSection>

          <RoadmapConnector />

          <AnimatedSection delay={300}>
            <RoadmapCard item={roadmapItems[2]} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
