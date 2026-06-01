import { AnimatedSection } from './AnimatedSection';

const points = [
  {
    id: 'p1',
    title: 'Con người không tồn tại cô lập',
    text: 'Ngay từ khi sinh ra, con người đã sống trong các quan hệ xã hội cụ thể: gia đình, nhà trường, lao động, cộng đồng, pháp luật, văn hóa. Tách khỏi các quan hệ đó, ta không thể hiểu đầy đủ con người.',
  },
  {
    id: 'p2',
    title: 'Bản chất mang tính lịch sử – xã hội',
    text: 'Bản chất con người không phải là cái bất biến. Vì các quan hệ xã hội luôn thay đổi theo lịch sử, nên con người cũng thay đổi theo điều kiện lịch sử – xã hội.',
  },
  {
    id: 'p3',
    title: 'Muốn phát triển con người, phải cải tạo quan hệ xã hội',
    text: 'Không thể chỉ kêu gọi thay đổi cá nhân. Cần xây dựng môi trường giáo dục tốt, quan hệ lao động công bằng, pháp luật tiến bộ và văn hóa lành mạnh.',
  },
  {
    id: 'p4',
    title: 'Giải thích tha hóa và giải phóng con người',
    text: 'Khi quan hệ xã hội bất công, con người có thể bị tha hóa. Khi xã hội được cải tạo theo hướng công bằng và nhân văn, con người có điều kiện được giải phóng và phát triển toàn diện.',
  },
];

export function CentralQuoteSection() {
  return (
    <section
      id="central-thesis"
      className="scroll-mt-16 relative overflow-hidden min-h-screen flex flex-col justify-center px-4 py-10 bg-[#fefae0]"
    >
      {/* Background ambient */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 -right-40 w-[560px] h-[560px] rounded-full bg-[#bc4749]/[0.035]" />
        <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#dda15e]/[0.05]" />
      </div>

      <div className="max-w-[1120px] mx-auto w-full relative">

        {/* Main quote */}
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-14">
            <div
              aria-hidden
              className="text-[80px] leading-none text-[#bc4749]/20 font-serif select-none"
            >
              &ldquo;
            </div>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-black text-[#bc4749] leading-tight mb-5 -mt-4 max-w-4xl mx-auto">
              Bản chất con người là tổng hòa các quan hệ xã hội.
            </blockquote>
            <p className="text-[#5c3d2e]/55 text-base italic">
              — C. Mác, Luận cương về Feuerbach
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="h-px w-16 bg-[#bc4749]/30 rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#bc4749]/40" />
              <div className="h-px w-16 bg-[#bc4749]/30 rounded-full" />
            </div>
          </div>
        </AnimatedSection>

        {/* 4 key insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {points.map((point, i) => (
            <AnimatedSection key={point.id} delay={i * 100}>
              <div className="bg-[#faf3d5] border border-[#dda15e]/40 rounded-[20px] p-5 md:p-6 h-full shadow-[0_2px_14px_rgba(93,61,46,0.08)] hover:border-[#bc6c25]/40 hover:shadow-[0_4px_18px_rgba(93,61,46,0.12)] transition-all duration-200">
                <div className="flex items-start gap-3.5 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#bc6c25]/15 text-[#bc6c25] text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <h3 className="text-sm font-bold text-[#2d1810] leading-snug pt-1.5">
                    {point.title}
                  </h3>
                </div>
                <p className="text-[#5c3d2e]/80 text-[15px] leading-[1.75] ml-[46px]">
                  {point.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
