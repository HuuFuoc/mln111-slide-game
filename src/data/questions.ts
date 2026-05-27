import type { QuizQuestion } from "@/types/game";

/**
 * Exactly 10 questions — one per vase. Edit the text/options here to change the
 * quiz; keep the count at 10 and each `vaseId` matching a vase in `board.ts`.
 */
export const questions: QuizQuestion[] = [
  {
    id: "q1",
    vaseId: "vase-1",
    text: "Triết học Mác - Lênin xác định vật chất là gì?",
    options: [
      { id: "A", text: "Là toàn bộ thế giới vật thể tồn tại quanh ta" },
      {
        id: "B",
        text: "Là phạm trù triết học chỉ thực tại khách quan, được đem lại cho con người trong cảm giác",
      },
      { id: "C", text: "Là các nguyên tử và phân tử cấu thành vũ trụ" },
      { id: "D", text: "Là năng lượng và trường vật lý" },
    ],
    correctOptionId: "B",
    explanation:
      "Định nghĩa vật chất của Lênin: vật chất là phạm trù triết học chỉ thực tại khách quan, tồn tại không lệ thuộc vào cảm giác.",
  },
  {
    id: "q2",
    vaseId: "vase-2",
    text: "Theo chủ nghĩa duy vật biện chứng, ý thức có nguồn gốc từ đâu?",
    options: [
      { id: "A", text: "Từ thượng đế hoặc lực lượng siêu nhiên" },
      { id: "B", text: "Từ ý niệm tuyệt đối có sẵn" },
      {
        id: "C",
        text: "Từ vật chất, là sự phản ánh thế giới khách quan vào bộ óc con người",
      },
      { id: "D", text: "Từ bản năng sinh học của con người" },
    ],
    correctOptionId: "C",
    explanation:
      "Ý thức là sự phản ánh hiện thực khách quan vào trong bộ óc con người một cách năng động, sáng tạo.",
  },
  {
    id: "q3",
    vaseId: "vase-3",
    text: "Phép biện chứng duy vật có bao nhiêu quy luật cơ bản?",
    options: [
      { id: "A", text: "2 quy luật" },
      { id: "B", text: "3 quy luật" },
      { id: "C", text: "4 quy luật" },
      { id: "D", text: "5 quy luật" },
    ],
    correctOptionId: "B",
    explanation:
      "Ba quy luật cơ bản: lượng - chất, thống nhất và đấu tranh của các mặt đối lập, và phủ định của phủ định.",
  },
  {
    id: "q4",
    vaseId: "vase-4",
    text: "Quy luật nào được coi là 'hạt nhân' của phép biện chứng?",
    options: [
      { id: "A", text: "Quy luật lượng - chất" },
      { id: "B", text: "Quy luật phủ định của phủ định" },
      { id: "C", text: "Quy luật thống nhất và đấu tranh của các mặt đối lập" },
      { id: "D", text: "Quy luật nhân - quả" },
    ],
    correctOptionId: "C",
    explanation:
      "Lênin gọi quy luật mâu thuẫn là 'hạt nhân của phép biện chứng' vì nó vạch ra nguồn gốc, động lực của sự phát triển.",
  },
  {
    id: "q5",
    vaseId: "vase-5",
    text: "Theo Mác, lực lượng sản xuất bao gồm những yếu tố nào?",
    options: [
      { id: "A", text: "Chỉ có công cụ lao động" },
      { id: "B", text: "Người lao động và tư liệu sản xuất" },
      { id: "C", text: "Tư bản và lao động" },
      { id: "D", text: "Đất đai, vốn và công nghệ" },
    ],
    correctOptionId: "B",
    explanation:
      "Lực lượng sản xuất = người lao động (yếu tố quyết định nhất) + tư liệu sản xuất.",
  },
  {
    id: "q6",
    vaseId: "vase-6",
    text: "Quan hệ sản xuất là quan hệ giữa người với người trong quá trình:",
    options: [
      { id: "A", text: "Phân phối hàng hóa" },
      { id: "B", text: "Tiêu dùng của cải" },
      { id: "C", text: "Sản xuất vật chất" },
      { id: "D", text: "Trao đổi sản phẩm" },
    ],
    correctOptionId: "C",
    explanation:
      "Quan hệ sản xuất là quan hệ kinh tế giữa người với người trong quá trình sản xuất vật chất.",
  },
  {
    id: "q7",
    vaseId: "vase-7",
    text: "Theo Mác, yếu tố nào quyết định sự tồn tại và phát triển của xã hội?",
    options: [
      { id: "A", text: "Ý thức xã hội" },
      { id: "B", text: "Sản xuất vật chất" },
      { id: "C", text: "Tôn giáo và văn hóa" },
      { id: "D", text: "Nhà nước và pháp luật" },
    ],
    correctOptionId: "B",
    explanation:
      "Sản xuất vật chất là cơ sở của sự tồn tại và phát triển của mọi xã hội.",
  },
  {
    id: "q8",
    vaseId: "vase-8",
    text: "Cơ sở hạ tầng của một xã hội là gì?",
    options: [
      { id: "A", text: "Hệ thống giao thông, điện, nước" },
      {
        id: "B",
        text: "Toàn bộ quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội",
      },
      { id: "C", text: "Lực lượng sản xuất của xã hội" },
      { id: "D", text: "Kiến trúc thượng tầng pháp lý" },
    ],
    correctOptionId: "B",
    explanation:
      "Cơ sở hạ tầng là toàn bộ những quan hệ sản xuất hợp thành cơ cấu kinh tế của một xã hội nhất định.",
  },
  {
    id: "q9",
    vaseId: "vase-9",
    text: "Quy luật lượng - chất phát biểu rằng:",
    options: [
      { id: "A", text: "Mọi sự vật đều có khối lượng và chất lượng riêng" },
      {
        id: "B",
        text: "Những thay đổi về lượng đến một giới hạn nhất định sẽ chuyển hóa thành thay đổi về chất, và ngược lại",
      },
      { id: "C", text: "Chất quyết định lượng trong mọi trường hợp" },
      { id: "D", text: "Lượng và chất luôn tách rời nhau" },
    ],
    correctOptionId: "B",
    explanation:
      "Lượng tích lũy đến điểm nút sẽ tạo bước nhảy, làm thay đổi về chất; chất mới lại quy định lượng mới.",
  },
  {
    id: "q10",
    vaseId: "vase-10",
    text: "Hình thái kinh tế - xã hội bao gồm các yếu tố cơ bản nào?",
    options: [
      { id: "A", text: "Văn hóa, tôn giáo, đạo đức" },
      {
        id: "B",
        text: "Lực lượng sản xuất, quan hệ sản xuất và kiến trúc thượng tầng",
      },
      { id: "C", text: "Nhà nước, pháp luật và quân đội" },
      { id: "D", text: "Kinh tế, chính trị và xã hội" },
    ],
    correctOptionId: "B",
    explanation:
      "Hình thái kinh tế - xã hội gồm: lực lượng sản xuất, quan hệ sản xuất (cơ sở hạ tầng) và kiến trúc thượng tầng tương ứng.",
  },
];

export function getQuestionById(id: string): QuizQuestion | undefined {
  return questions.find((q) => q.id === id);
}
