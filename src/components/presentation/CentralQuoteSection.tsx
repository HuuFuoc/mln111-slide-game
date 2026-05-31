import { AnimatedSection } from './AnimatedSection';

const points = [
  {
    id: 'p1',
    title: 'Con người không tồn tại cô lập',
    text: 'Ngay từ khi sinh ra, con người đã sống trong các quan hệ xã hội cụ thể: gia đình, nhà trường, lao động, cộng đồng, pháp luật, văn hóa. Tách khỏi các quan hệ đó, ta không thể hiểu đầy đủ con người.',
    speakerNote:
      'Trước hết, luận điểm này cho thấy con người không tồn tại như một cá nhân cô lập. Ngay từ khi sinh ra, con người đã sống trong các quan hệ xã hội cụ thể. Gia đình nuôi dưỡng con người. Nhà trường giáo dục con người. Xã hội định hướng hành vi của con người. Lao động rèn luyện năng lực của con người. Do đó, nếu tách con người ra khỏi các quan hệ xã hội thì chúng ta sẽ không thể hiểu đầy đủ con người.',
  },
  {
    id: 'p2',
    title: 'Bản chất con người mang tính lịch sử – xã hội',
    text: 'Bản chất con người không phải là cái bất biến. Vì các quan hệ xã hội luôn thay đổi theo lịch sử, nên con người cũng thay đổi theo điều kiện lịch sử – xã hội.',
    speakerNote:
      'Thứ hai, bản chất con người mang tính lịch sử – xã hội. Các quan hệ xã hội không đứng yên, mà luôn vận động và biến đổi. Vì vậy, con người trong các thời đại khác nhau cũng có đặc điểm tư duy, lối sống, nhu cầu và giá trị khác nhau. Điều này chứng minh rằng bản chất con người không phải là cái bất biến, mà được hình thành và biến đổi trong những điều kiện lịch sử – xã hội cụ thể.',
  },
  {
    id: 'p3',
    title: 'Muốn phát triển con người, phải cải tạo quan hệ xã hội',
    text: 'Không thể chỉ kêu gọi thay đổi cá nhân. Cần xây dựng môi trường giáo dục tốt, quan hệ lao động công bằng, pháp luật tiến bộ và văn hóa lành mạnh.',
    speakerNote:
      'Thứ ba, nếu bản chất con người được hình thành trong các quan hệ xã hội, thì muốn phát triển con người không thể chỉ kêu gọi thay đổi ý thức cá nhân một cách chung chung. Cần phải xây dựng môi trường xã hội tốt hơn. Điều đó bao gồm nâng cao giáo dục, phát triển kinh tế, xây dựng quan hệ lao động công bằng, hoàn thiện pháp luật, phát triển đạo đức và văn hóa lành mạnh.',
  },
  {
    id: 'p4',
    title: 'Giải thích tha hóa và giải phóng con người',
    text: 'Khi quan hệ xã hội bất công, con người có thể bị tha hóa. Khi xã hội được cải tạo theo hướng công bằng và nhân văn, con người có điều kiện được giải phóng và phát triển toàn diện.',
    speakerNote:
      'Luận điểm này cũng giúp giải thích hiện tượng tha hóa và vấn đề giải phóng con người. Khi các quan hệ xã hội trở nên bất công, áp bức hoặc lệch lạc, con người có thể bị tha hóa — không làm chủ lao động, không làm chủ sản phẩm, không làm chủ đời sống. Ngược lại, khi xã hội được cải tạo theo hướng công bằng và nhân văn, con người sẽ có điều kiện được giải phóng và phát triển toàn diện hơn. Vì vậy, giải phóng con người không chỉ là thay đổi từng cá nhân, mà còn là cải tạo những điều kiện xã hội làm con người bị áp bức.',
  },
];

export function CentralQuoteSection() {
  return (
    <section id="central-thesis" className="scroll-mt-16 py-20 px-4 bg-[#2d1810]">
      <div className="max-w-5xl mx-auto">
        {/* Main quote */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div
              aria-hidden
              className="text-[96px] leading-none text-[#bc4749]/25 font-serif mb-0 select-none"
            >
              &ldquo;
            </div>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-black text-[#bc4749] leading-tight mb-5 -mt-4">
              Bản chất con người là tổng hòa các quan hệ xã hội.
            </blockquote>
            <p className="text-[#dda15e]/60 text-sm italic">— C.Mác, Luận cương về Feuerbach</p>
          </div>
        </AnimatedSection>

        {/* 4 key points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {points.map((point, i) => (
            <AnimatedSection key={point.id} delay={i * 100}>
              <div className="bg-[#3d2010]/70 border border-[#bc6c25]/25 rounded-2xl p-6 h-full">
                <div className="flex items-start gap-3 mb-2">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#bc6c25]/30 text-[#dda15e] text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <h3 className="text-base font-semibold text-[#dda15e]">{point.title}</h3>
                </div>
                <p className="text-[#fefae0]/65 text-sm leading-relaxed ml-10">{point.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
