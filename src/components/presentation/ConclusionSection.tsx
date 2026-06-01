import { AnimatedSection } from './AnimatedSection';

const summaryPoints = [
  {
    num: '01',
    text: 'Ý thức xã hội phản ánh tồn tại xã hội và có tác động trở lại xã hội.',
  },
  {
    num: '02',
    text: 'Con người là thực thể tự nhiên – xã hội, được hình thành qua lao động và quan hệ xã hội.',
  },
  {
    num: '03',
    text: 'Khi quan hệ xã hội bất công, con người có thể bị tha hóa.',
  },
  {
    num: '04',
    text: 'Giải phóng con người phải gắn liền với cải tạo các quan hệ xã hội.',
  },
];

export function ConclusionSection() {
  return (
    <section
      id="conclusion"
      className="scroll-mt-16 min-h-screen flex flex-col justify-center px-4 py-8 md:py-10 bg-[#fefae0]"
    >
      <div className="max-w-[1120px] mx-auto w-full">

        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-8 md:mb-10">
            <span className="text-xs font-bold text-[#bc6c25] uppercase tracking-[0.2em]">
              Kết luận
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#2d1810] mt-2 leading-tight">
              Tổng kết bài thuyết trình
            </h2>
            <div className="h-1 w-14 bg-[#bc6c25] rounded-full mx-auto mt-3" />
          </div>
        </AnimatedSection>

        {/* Summary grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 md:mb-6">
          {summaryPoints.map((pt, i) => (
            <AnimatedSection key={pt.num} delay={i * 70}>
              <div className="flex gap-4 bg-[#faf3d5] border border-[#dda15e]/50 rounded-xl p-4 md:p-5 shadow-[0_2px_10px_rgba(93,61,46,0.07)] hover:border-[#bc6c25]/45 hover:shadow-[0_4px_16px_rgba(93,61,46,0.10)] transition-all duration-200 h-full">
                <span className="text-[36px] font-black text-[#dda15e]/45 leading-none flex-shrink-0 select-none">
                  {pt.num}
                </span>
                <p className="text-[#5c3d2e] text-sm md:text-base leading-relaxed pt-0.5">
                  {pt.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Final statement */}
        <AnimatedSection delay={160}>
          <div className="bg-[#2B160F] rounded-2xl px-6 py-8 md:px-10 md:py-10 text-center border border-[#bc6c25]/15">
            <p className="text-xs font-bold text-[#dda15e]/80 uppercase tracking-[0.2em] mb-4">
              Luận điểm trọng tâm
            </p>
            <blockquote className="text-lg md:text-xl lg:text-2xl font-black text-[#fefae0] leading-relaxed max-w-3xl mx-auto">
              Muốn hiểu con người, phải đặt con người trong đời sống xã hội.{' '}
              <span className="text-[#dda15e]">
                Muốn phát triển con người, phải xây dựng những quan hệ xã hội công bằng và nhân văn.
              </span>
            </blockquote>
          </div>
        </AnimatedSection>

        {/* Bản chốt */}
        <AnimatedSection delay={240}>
          <div className="bg-[#bc6c25]/10 border border-[#bc6c25]/30 rounded-xl p-5 mt-4">
            <h3 className="font-bold text-[#bc6c25] mb-2 text-sm">Bản chốt ngắn gọn cuối bài</h3>
            <p className="text-[#5c3d2e] text-sm leading-relaxed">
              Theo triết học Mác – Lênin, con người không chỉ là một thực thể tự nhiên mà còn là một
              thực thể xã hội. Con người hình thành nhân cách, ý thức, năng lực và lối sống thông qua
              gia đình, nhà trường, lao động, văn hóa, pháp luật và các quan hệ xã hội khác. Vì vậy,{' '}
              <strong className="text-[#bc4749]">
                bản chất con người là tổng hòa các quan hệ xã hội
              </strong>
              . Khi các quan hệ xã hội bất công, con người có thể bị tha hóa. Khi xã hội được cải tạo
              theo hướng tiến bộ, con người có điều kiện được giải phóng và phát triển tự do, toàn diện.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
