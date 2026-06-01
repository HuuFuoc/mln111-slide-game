import { AnimatedSection } from './AnimatedSection';

const humanItems = [
  'Xác định luận điểm và phạm vi nội dung',
  'Nghiên cứu giáo trình Triết học Mác – Lênin',
  'Lên ý tưởng cấu trúc, bố cục và thông điệp',
  'Kiểm duyệt toàn bộ nội dung trước khi trình bày',
];

const aiItems = [
  'Xây dựng giao diện và trải nghiệm tương tác',
  'Thiết kế bố cục, màu sắc và chuyển động',
  'Lập trình mini game ôn tập',
];

export function AIUsageSection() {
  return (
    <section className="py-16 px-4 bg-[#fefae0] border-t border-[#bc6c25]/15">
      <div className="max-w-2xl mx-auto">
        <AnimatedSection>
          <span className="inline-block mb-3 text-xs font-bold text-[#bc6c25] uppercase tracking-[0.2em]">
            Minh bạch AI
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[#2d1810] mb-3 leading-tight">
            Khai báo sử dụng AI
          </h2>
          <p className="text-[#5c3d2e]/75 text-sm leading-relaxed mb-8">
            Ý tưởng, nội dung và luận điểm do nhóm tự nghiên cứu và thực hiện.
            Trí tuệ nhân tạo hỗ trợ phần kỹ thuật giao diện.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <AnimatedSection delay={80}>
            <div className="rounded-xl border border-[#dda15e]/45 p-5 bg-[#faf3d5]">
              <p className="text-xs font-bold text-[#bc6c25] uppercase tracking-[0.15em] mb-3">
                Con người
              </p>
              <ul className="flex flex-col gap-2">
                {humanItems.map((item) => (
                  <li key={item} className="flex gap-2.5 text-xs text-[#5c3d2e]/75 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-[#dda15e] flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={160}>
            <div className="rounded-xl border border-[#bc6c25]/30 p-5 bg-[#faf3d5]">
              <p className="text-xs font-bold text-[#bc6c25] uppercase tracking-[0.15em] mb-3">
                AI hỗ trợ
              </p>
              <ul className="flex flex-col gap-2">
                {aiItems.map((item) => (
                  <li key={item} className="flex gap-2.5 text-xs text-[#5c3d2e]/75 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-[#bc6c25] flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
