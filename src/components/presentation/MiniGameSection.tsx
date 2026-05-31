import Link from 'next/link';

export function MiniGameSection() {
  return (
    <section id="game" className="scroll-mt-16 py-20 px-4 bg-[#dda15e]/15">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-6xl mb-5">🏺</div>

        <span className="inline-block mb-3 text-sm font-semibold text-[#bc6c25] uppercase tracking-widest">
          Ôn tập tương tác
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-[#2d1810] mb-4">
          Mini Game ôn tập
        </h2>

        <p className="text-[#5c3d2e] leading-relaxed mb-2 max-w-lg mx-auto">
          Sau phần thuyết trình, người xem có thể tham gia mini game để ôn lại nội dung chính.
        </p>
        <p className="text-[#5c3d2e]/65 text-sm mb-10 max-w-md mx-auto">
          Trả lời câu hỏi Triết học Mác – Lênin để đập bình và tiêu diệt zombie — ba màn chơi
          với độ khó tăng dần.
        </p>

        <Link
          href="/game"
          className="inline-block px-10 py-4 bg-[#bc6c25] hover:bg-[#bc4749] text-white font-bold rounded-2xl text-lg transition-colors shadow-lg"
        >
          Mở Mini Game →
        </Link>

        <p className="mt-6 text-xs text-[#bc6c25]/50">
          Mini game được mở trong cùng cửa sổ trình duyệt
        </p>
      </div>
    </section>
  );
}
