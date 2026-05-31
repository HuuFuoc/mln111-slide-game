import { AnimatedSection } from './AnimatedSection';

const scopeCards = [
  {
    roman: 'I',
    chapter: 'Chương IV',
    title: 'Ý thức xã hội',
    desc: 'Khái niệm, quan hệ với tồn tại xã hội, tính độc lập tương đối và tác động trở lại.',
    ref: 'Giáo trình Triết học Mác – Lênin 2019: tr. 419–447',
  },
  {
    roman: 'II',
    chapter: 'Chương V · Mục 1',
    title: 'Con người và bản chất con người',
    desc: 'Con người là thực thể tự nhiên – xã hội. Vai trò lao động. Bản chất con người là tổng hòa các quan hệ xã hội.',
    ref: 'Giáo trình Triết học Mác – Lênin 2019: tr. 247–253',
  },
  {
    roman: 'III',
    chapter: 'Chương V · Mục 2',
    title: 'Tha hóa và giải phóng con người',
    desc: 'Hiện tượng tha hóa trong lao động, đời sống xã hội và vấn đề giải phóng con người.',
    ref: 'Giáo trình Triết học Mác – Lênin 2019: tr. 253–257',
  },
];

export function ScopeSection() {
  return (
    <section id="scope" className="scroll-mt-16 py-20 px-4 bg-[#fefae0]">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#bc6c25] uppercase tracking-widest">
              Phạm vi bài thuyết trình
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d1810] mt-2">
              Ba nội dung chính
            </h2>
            <div className="h-1 w-12 bg-[#bc6c25] rounded-full mx-auto mt-4" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scopeCards.map((card, i) => (
            <AnimatedSection key={card.roman} delay={i * 100}>
              <div className="bg-white border border-[#dda15e]/50 rounded-2xl p-6 shadow-sm h-full hover:border-[#bc6c25]/50 hover:shadow-md transition-all duration-200">
                <div className="text-5xl font-black text-[#dda15e]/40 leading-none mb-3">
                  {card.roman}
                </div>
                <div className="text-xs font-semibold text-[#bc6c25] uppercase tracking-wide mb-1">
                  {card.chapter}
                </div>
                <h3 className="text-xl font-bold text-[#2d1810] mb-3">{card.title}</h3>
                <p className="text-[#5c3d2e] text-sm leading-relaxed mb-5">{card.desc}</p>
                <div className="text-xs text-[#bc6c25]/80 bg-[#dda15e]/15 px-3 py-1.5 rounded-lg">
                  📖 {card.ref}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
