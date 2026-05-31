import { AnimatedSection } from './AnimatedSection';

const summaryPoints = [
  'Ý thức xã hội phản ánh tồn tại xã hội và có tác động trở lại xã hội.',
  'Con người là thực thể tự nhiên – xã hội, được hình thành qua lao động và quan hệ xã hội.',
  'Khi quan hệ xã hội bất công, con người có thể bị tha hóa.',
  'Giải phóng con người phải gắn liền với cải tạo các quan hệ xã hội.',
];

export function ConclusionSection() {
  return (
    <section id="conclusion" className="scroll-mt-16 py-20 px-4 bg-[#fefae0]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#bc6c25] uppercase tracking-widest">
              Kết luận
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d1810] mt-2">
              Tổng kết bài thuyết trình
            </h2>
            <div className="h-1 w-12 bg-[#bc6c25] rounded-full mx-auto mt-4" />
          </div>
        </AnimatedSection>

        {/* Summary grid */}
        <AnimatedSection delay={80}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {summaryPoints.map((pt, i) => (
              <div
                key={i}
                className="flex gap-3 bg-white border border-[#dda15e]/40 rounded-xl p-4 shadow-sm"
              >
                <span className="text-[#bc6c25] font-black text-lg flex-shrink-0 leading-snug">
                  {i + 1}.
                </span>
                <p className="text-[#5c3d2e] text-sm leading-relaxed">{pt}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Main conclusion quote */}
        <AnimatedSection delay={160}>
          <div className="bg-[#bc6c25] rounded-3xl px-8 py-10 md:px-12 md:py-14 text-center mb-8 shadow-lg">
            <div className="text-4xl mb-4">💬</div>
            <blockquote className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
              Muốn hiểu con người, phải đặt con người trong đời sống xã hội. Muốn phát triển
              con người, phải xây dựng những quan hệ xã hội tiến bộ, công bằng và nhân văn.
            </blockquote>
          </div>
        </AnimatedSection>

        {/* Bản chốt ngắn gọn */}
        <AnimatedSection delay={240}>
          <div className="bg-[#dda15e]/15 border border-[#dda15e]/45 rounded-2xl p-6 md:p-8">
            <h3 className="font-semibold text-[#bc6c25] mb-3 text-base">
              Bản chốt ngắn gọn cuối bài
            </h3>
            <p className="text-[#5c3d2e] text-sm leading-relaxed">
              Theo triết học Mác – Lênin, con người không chỉ là một thực thể tự nhiên mà còn
              là một thực thể xã hội. Con người hình thành nhân cách, ý thức, năng lực và lối
              sống thông qua gia đình, nhà trường, lao động, văn hóa, pháp luật và các quan hệ
              xã hội khác. Vì vậy,{' '}
              <strong className="text-[#bc4749]">
                bản chất con người là tổng hòa các quan hệ xã hội
              </strong>
              . Khi các quan hệ xã hội bất công, con người có thể bị tha hóa. Khi xã hội được
              cải tạo theo hướng tiến bộ, con người có điều kiện được giải phóng và phát triển
              tự do, toàn diện.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
