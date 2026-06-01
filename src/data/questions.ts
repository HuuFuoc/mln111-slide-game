import type { QuizQuestion } from "@/types/game";

/**
 * Exactly 10 questions — one per vase. Edit the text/options here to change the
 * quiz; keep the count at 10 and each `vaseId` matching a vase in `board.ts`.
 */
export const questions: QuizQuestion[] = [
  {
    id: "q1",
    vaseId: "vase-1",
    text: "Theo Mác – Lênin, điều gì quyết định nội dung và tính chất của ý thức xã hội?",
    options: [
      { id: "A", text: "Tồn tại xã hội" },
      {
        id: "B",
        text: "Tư tưởng và ý chí của giai cấp cầm quyền trong từng thời kỳ lịch sử",
      },
      {
        id: "C",
        text: "Truyền thống văn hóa và tôn giáo được truyền qua nhiều thế hệ liên tiếp",
      },
      {
        id: "D",
        text: "Hệ thống giáo dục quốc gia và chính sách truyền thông của nhà nước",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Tồn tại xã hội quyết định ý thức xã hội – đời sống vật chất, phương thức sản xuất và hoàn cảnh lịch sử là cơ sở hình thành ý thức xã hội.",
  },
  {
    id: "q2",
    vaseId: "vase-2",
    text: "Ý thức xã hội theo triết học Mác – Lênin bao gồm những gì?",
    options: [
      {
        id: "A",
        text: "Các quy định pháp lý, chính sách nhà nước và bộ máy hành chính quản lý xã hội",
      },
      {
        id: "B",
        text: "Toàn bộ đời sống tinh thần của xã hội: tư tưởng, đạo đức, nghệ thuật, tôn giáo, triết học...",
      },
      { id: "C", text: "Nhận thức và cảm xúc riêng của từng cá nhân" },
      { id: "D", text: "Hệ thống giáo dục và truyền thông đại chúng" },
    ],
    correctOptionId: "B",
    explanation:
      "Ý thức xã hội là toàn bộ đời sống tinh thần của xã hội, bao gồm tư tưởng, tình cảm, quan điểm, đạo đức, pháp luật, nghệ thuật, tôn giáo và các hình thái ý thức khác.",
  },
  {
    id: "q3",
    vaseId: "vase-3",
    text: "Hoàn thành luận điểm của C.Mác: 'Trong tính hiện thực của nó, bản chất con người là...'",
    options: [
      {
        id: "A",
        text: "...sự thống nhất giữa mặt tự nhiên và mặt tinh thần cá nhân",
      },
      {
        id: "B",
        text: "...lý trí và đạo đức được hình thành qua quá trình giáo dục lâu dài",
      },
      { id: "C", text: "...tổng hòa những quan hệ xã hội" },
      {
        id: "D",
        text: "...kết quả của sự tiến hóa sinh học kết hợp với điều kiện môi trường sống",
      },
    ],
    correctOptionId: "C",
    explanation:
      "C.Mác viết: 'Trong tính hiện thực của nó, bản chất con người là tổng hòa những quan hệ xã hội.'",
  },
  {
    id: "q4",
    vaseId: "vase-4",
    text: "Ngoài tạo ra của cải vật chất, lao động còn có ý nghĩa gì đối với con người?",
    options: [
      {
        id: "A",
        text: "Phân chia con người theo giai cấp và địa vị trong xã hội",
      },
      {
        id: "B",
        text: "Là phương tiện để con người cạnh tranh và khẳng định bản thân trong môi trường xã hội",
      },
      {
        id: "C",
        text: "Hình thành tư duy, ngôn ngữ, kỹ năng và các quan hệ xã hội",
      },
      {
        id: "D",
        text: "Giúp con người tìm kiếm sự công nhận và đánh giá từ cộng đồng",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Lao động giúp con người hình thành tư duy, ngôn ngữ, kỹ năng, kỷ luật, quan hệ hợp tác và năng lực sáng tạo – cơ sở để con người trở thành thực thể xã hội.",
  },
  {
    id: "q5",
    vaseId: "vase-5",
    text: "Đâu là biểu hiện cho thấy ý thức xã hội có tính độc lập tương đối?",
    options: [
      {
        id: "A",
        text: "Ý thức xã hội thay đổi ngay sau khi điều kiện kinh tế thay đổi, không có độ trễ nào",
      },
      {
        id: "B",
        text: "Tư tưởng tiến bộ có thể xuất hiện trước khi điều kiện vật chất cho phép",
      },
      {
        id: "C",
        text: "Ý thức xã hội hoàn toàn phụ thuộc vào hệ thống giáo dục và chính sách tuyên truyền của nhà nước",
      },
      {
        id: "D",
        text: "Ý thức xã hội không bao giờ có thể vượt trước hoặc lạc hậu hơn tồn tại xã hội trong thực tế",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Tính độc lập tương đối: ý thức xã hội có thể lạc hậu hơn hoặc vượt trước tồn tại xã hội, kế thừa các giá trị cũ và tác động trở lại xã hội.",
  },
  {
    id: "q6",
    vaseId: "vase-6",
    text: "Theo Mác – Lênin, điều gì khác biệt căn bản nhất giữa con người và các loài vật?",
    options: [
      {
        id: "A",
        text: "Con người có ngôn ngữ, tư duy và lao động có ý thức",
      },
      {
        id: "B",
        text: "Con người có cảm xúc và khả năng yêu thương đồng loại sâu sắc hơn bất kỳ loài nào khác",
      },
      {
        id: "C",
        text: "Con người sống trong xã hội được tổ chức theo hệ thống pháp luật và nhà nước chặt chẽ",
      },
      {
        id: "D",
        text: "Con người có khả năng học tập và ghi nhớ vượt trội so với tất cả các loài sinh vật",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Con người khác với loài vật ở chỗ biết lao động có ý thức, sử dụng công cụ, có tư duy và ngôn ngữ, từ đó sáng tạo ra văn hóa và các quan hệ xã hội.",
  },
  {
    id: "q7",
    vaseId: "vase-7",
    text: "Theo Mác – Lênin, tha hóa con người xảy ra khi nào?",
    options: [
      {
        id: "A",
        text: "Khi con người không theo kịp sự phát triển nhanh chóng của khoa học, công nghệ và đổi mới trong thời đại mới",
      },
      {
        id: "B",
        text: "Khi con người mất kết nối sâu sắc với văn hóa, truyền thống và bản sắc dân tộc đặc thù của mình",
      },
      {
        id: "C",
        text: "Khi con người rời xa gia đình và các mối quan hệ thân thiết, sống một mình nơi đất khách quê người",
      },
      {
        id: "D",
        text: "Khi sản phẩm và quan hệ xã hội do con người tạo ra quay lại chi phối, áp bức con người",
      },
    ],
    correctOptionId: "D",
    explanation:
      "Tha hóa là khi con người bị tách khỏi bản chất đích thực – sản phẩm lao động, thiết chế và quan hệ xã hội do họ tạo ra lại quay lại chi phối, áp bức họ.",
  },
  {
    id: "q8",
    vaseId: "vase-8",
    text: "Trong xã hội có bóc lột, lao động bị tha hóa biểu hiện rõ nhất như thế nào?",
    options: [
      {
        id: "A",
        text: "Người lao động làm ra sản phẩm nhưng không làm chủ sản phẩm, chỉ lao động để tồn tại",
      },
      {
        id: "B",
        text: "Người lao động không hài lòng với tiền lương và điều kiện làm việc hiện tại của mình",
      },
      {
        id: "C",
        text: "Người lao động chỉ làm đúng giờ quy định mà không sẵn sàng nỗ lực thêm",
      },
      {
        id: "D",
        text: "Người lao động thiếu kỹ năng chuyên môn cần thiết cho công việc đang đảm nhiệm",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Trong điều kiện bóc lột, người lao động không làm chủ sản phẩm, phụ thuộc vào tiền lương và thị trường, lao động chỉ để tồn tại – đây là biểu hiện của lao động bị tha hóa.",
  },
  {
    id: "q9",
    vaseId: "vase-9",
    text: "Mục tiêu của giải phóng con người theo Mác – Lênin là gì?",
    options: [
      {
        id: "A",
        text: "Xóa bỏ hoàn toàn sự phân hóa về tài sản và thu nhập giữa các thành viên trong xã hội",
      },
      {
        id: "B",
        text: "Tạo điều kiện để con người phát triển tự do và toàn diện",
      },
      {
        id: "C",
        text: "Giải phóng cá nhân khỏi mọi ràng buộc của gia đình, nhà nước và chuẩn mực xã hội",
      },
      {
        id: "D",
        text: "Đảm bảo mỗi người đều có thu nhập bình đẳng và điều kiện sống ngang nhau trong xã hội",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Mục tiêu của giải phóng con người là tạo điều kiện để con người được phát triển tự do, toàn diện, làm chủ lao động và đời sống xã hội.",
  },
  {
    id: "q10",
    vaseId: "vase-10",
    text: "Theo Mác – Lênin, muốn phát triển con người cần ưu tiên làm gì?",
    options: [
      {
        id: "A",
        text: "Nhắc nhở từng cá nhân tự tu dưỡng đạo đức và ý chí vươn lên trong cuộc sống",
      },
      {
        id: "B",
        text: "Tăng trưởng kinh tế nhanh chóng để nâng cao mức sống vật chất của toàn xã hội",
      },
      {
        id: "C",
        text: "Xây dựng các quan hệ xã hội tiến bộ: giáo dục tốt, lao động công bằng, đời sống kinh tế ổn định",
      },
      {
        id: "D",
        text: "Phát triển văn hóa nghệ thuật và tôn giáo để nâng cao tinh thần cộng đồng",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Vì bản chất con người hình thành trong các quan hệ xã hội, muốn phát triển con người cần xây dựng môi trường xã hội tiến bộ: giáo dục, quan hệ lao động công bằng, kinh tế ổn định, đạo đức và văn hóa lành mạnh.",
  },
];

export function getQuestionById(id: string): QuizQuestion | undefined {
  return questions.find((q) => q.id === id);
}
