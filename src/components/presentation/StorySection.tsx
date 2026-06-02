import { AnimatedSection } from './AnimatedSection';

const STORY_URL = 'https://mln111-self.vercel.app/';

export function StorySection() {
  return (
    <section
      id="cau-chuyen"
      className="scroll-mt-16 min-h-[70vh] flex flex-col justify-center px-4 py-20 bg-[#dda15e]/10"
    >
      <div className="max-w-2xl mx-auto w-full">
        <AnimatedSection>
          <span className="inline-block mb-4 text-xs font-bold text-[#bc6c25] uppercase tracking-[0.2em]">
            Mạch tự sự
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-[#2d1810] leading-[1.05] tracking-tight mb-6">
            Câu chuyện
          </h2>

          <p className="text-[#5c3d2e]/75 text-base md:text-lg leading-relaxed mb-3 max-w-lg">
            Lý luận trở nên có ý nghĩa khi được đặt vào đời sống thực.
          </p>
          <p className="text-[#5c3d2e]/55 text-sm leading-relaxed mb-10 max-w-lg">
            Câu chuyện này minh họa cách các quan hệ xã hội — gia đình, nhà trường, lao động —
            cùng nhau hình thành nên bản chất của một con người cụ thể.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={120}>
          <a
            href={STORY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#bc6c25] hover:bg-[#a85a1e] hover:-translate-y-0.5 active:translate-y-0 text-white font-bold rounded-2xl text-base transition-all duration-150 shadow-[0_4px_20px_rgba(188,108,37,0.30)]"
          >
            Đọc câu chuyện
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <p className="mt-4 text-xs text-[#5c3d2e]/40">
            Mở trang mới · mln111-self.vercel.app
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
