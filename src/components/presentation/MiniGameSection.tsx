import Link from 'next/link';
import { AnimatedSection } from './AnimatedSection';

const bullets = [
  'Ôn lại luận điểm chính về ý thức xã hội, bản chất và tha hóa',
  'Trả lời câu hỏi nhanh để củng cố kiến thức',
  'Sử dụng ngay sau phần thuyết trình',
];

export function MiniGameSection() {
  return (
    <section
      id="game"
      className="scroll-mt-16 min-h-screen flex flex-col justify-center px-4 py-10 bg-[#dda15e]/10"
    >
      <div className="max-w-2xl mx-auto w-full text-center">
        <AnimatedSection>
          <span className="inline-block mb-4 text-xs font-bold text-[#bc6c25] uppercase tracking-[0.2em]">
            Ôn tập tương tác
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-[#2d1810] mb-5 leading-tight">
            Mini Game ôn tập
          </h2>

          <p className="text-[#5c3d2e]/75 text-base leading-relaxed mb-8 max-w-lg mx-auto">
            Bạn đã hoàn thành mạch thuyết trình. Bây giờ hãy kiểm tra lại kiến thức bằng Mini Game.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={120}>
          <ul className="flex flex-col gap-3 text-left max-w-sm mx-auto mb-10">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-sm text-[#5c3d2e]/75 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bc6c25] flex-shrink-0 mt-1.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection delay={220}>
          <Link
            href="/game"
            className="inline-block px-12 py-4 bg-[#bc6c25] hover:bg-[#a85a1e] hover:-translate-y-0.5 active:translate-y-0 text-white font-bold rounded-2xl text-lg transition-all duration-150 shadow-[0_4px_20px_rgba(188,108,37,0.35)]"
          >
            Mở Mini Game →
          </Link>

          <p className="mt-5 text-xs text-[#5c3d2e]/45">
            Trả lời câu hỏi Triết học Mác – Lênin · Đập bình · Tiêu diệt zombie
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
