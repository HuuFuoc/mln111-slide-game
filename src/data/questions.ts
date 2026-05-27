import type { Question } from "@/types/game";

export const questions: Question[] = [
  {
    id: "q1",
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
      "Định nghĩa vật chất của Lênin: vật chất là phạm trù triết học chỉ thực tại khách quan, được đem lại cho con người trong cảm giác, tồn tại không lệ thuộc vào cảm giác.",
    difficulty: "easy",
  },
  {
    id: "q2",
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
    difficulty: "easy",
  },
  {
    id: "q3",
    text: "Phép biện chứng duy vật có bao nhiêu quy luật cơ bản?",
    options: [
      { id: "A", text: "2 quy luật" },
      { id: "B", text: "3 quy luật" },
      { id: "C", text: "4 quy luật" },
      { id: "D", text: "5 quy luật" },
    ],
    correctOptionId: "B",
    explanation:
      "Ba quy luật cơ bản: (1) Quy luật thống nhất và đấu tranh của các mặt đối lập, (2) Quy luật chuyển hóa từ những thay đổi về lượng thành thay đổi về chất và ngược lại, (3) Quy luật phủ định của phủ định.",
    difficulty: "easy",
  },
  {
    id: "q4",
    text: "Quy luật nào được coi là 'hạt nhân' của phép biện chứng?",
    options: [
      { id: "A", text: "Quy luật lượng - chất" },
      { id: "B", text: "Quy luật phủ định của phủ định" },
      { id: "C", text: "Quy luật thống nhất và đấu tranh của các mặt đối lập" },
      { id: "D", text: "Quy luật nhân - quả" },
    ],
    correctOptionId: "C",
    explanation:
      "Lênin gọi quy luật mâu thuẫn (thống nhất và đấu tranh của các mặt đối lập) là 'hạt nhân của phép biện chứng' vì nó vạch ra nguồn gốc, động lực của sự vận động và phát triển.",
    difficulty: "medium",
  },
  {
    id: "q5",
    text: "Theo Mác, lực lượng sản xuất bao gồm những yếu tố nào?",
    options: [
      { id: "A", text: "Chỉ có công cụ lao động" },
      { id: "B", text: "Người lao động và tư liệu sản xuất" },
      { id: "C", text: "Tư bản và lao động" },
      { id: "D", text: "Đất đai, vốn và công nghệ" },
    ],
    correctOptionId: "B",
    explanation:
      "Lực lượng sản xuất = người lao động (yếu tố quyết định nhất) + tư liệu sản xuất (gồm tư liệu lao động và đối tượng lao động).",
    difficulty: "medium",
  },
  {
    id: "q6",
    text: "Quan hệ sản xuất là quan hệ giữa người với người trong quá trình:",
    options: [
      { id: "A", text: "Phân phối hàng hóa" },
      { id: "B", text: "Tiêu dùng của cải" },
      { id: "C", text: "Sản xuất vật chất" },
      { id: "D", text: "Trao đổi sản phẩm" },
    ],
    correctOptionId: "C",
    explanation:
      "Quan hệ sản xuất là quan hệ kinh tế giữa người với người trong quá trình sản xuất, gồm ba mặt: sở hữu, tổ chức - quản lý, phân phối sản phẩm.",
    difficulty: "medium",
  },
  {
    id: "q7",
    text: "Theo Mác, yếu tố nào quyết định sự tồn tại và phát triển của xã hội?",
    options: [
      { id: "A", text: "Ý thức xã hội" },
      { id: "B", text: "Sản xuất vật chất" },
      { id: "C", text: "Tôn giáo và văn hóa" },
      { id: "D", text: "Nhà nước và pháp luật" },
    ],
    correctOptionId: "B",
    explanation:
      "Sản xuất vật chất là cơ sở của sự tồn tại và phát triển xã hội, là điểm xuất phát để nghiên cứu lịch sử loài người.",
    difficulty: "easy",
  },
  {
    id: "q8",
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
      "Trong triết học Mác, cơ sở hạ tầng là toàn bộ những quan hệ sản xuất hợp thành cơ cấu kinh tế của một xã hội nhất định.",
    difficulty: "medium",
  },
  {
    id: "q9",
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
      "Sự thay đổi về lượng tích lũy đến điểm nút sẽ tạo bước nhảy, làm thay đổi về chất; chất mới ra đời lại quy định lượng mới.",
    difficulty: "medium",
  },
  {
    id: "q10",
    text: "Hình thái kinh tế - xã hội bao gồm các yếu tố cơ bản nào?",
    options: [
      { id: "A", text: "Văn hóa, tôn giáo, đạo đức" },
      { id: "B", text: "Lực lượng sản xuất, quan hệ sản xuất và kiến trúc thượng tầng" },
      { id: "C", text: "Nhà nước, pháp luật và quân đội" },
      { id: "D", text: "Kinh tế, chính trị và xã hội" },
    ],
    correctOptionId: "B",
    explanation:
      "Hình thái kinh tế - xã hội là một chỉnh thể gồm: lực lượng sản xuất, quan hệ sản xuất (cơ sở hạ tầng) và kiến trúc thượng tầng tương ứng.",
    difficulty: "hard",
  },
  {
    id: "q11",
    text: "Theo Mác - Lênin, động lực trực tiếp của các cuộc cách mạng xã hội là:",
    options: [
      { id: "A", text: "Sự phát triển của khoa học - kỹ thuật" },
      { id: "B", text: "Mâu thuẫn giai cấp và đấu tranh giai cấp" },
      { id: "C", text: "Ý chí của các vĩ nhân" },
      { id: "D", text: "Sự thay đổi của khí hậu" },
    ],
    correctOptionId: "B",
    explanation:
      "Trong xã hội có giai cấp đối kháng, đấu tranh giai cấp là động lực trực tiếp thúc đẩy cách mạng xã hội.",
    difficulty: "hard",
  },
  {
    id: "q12",
    text: "Bản chất của con người theo Mác được thể hiện rõ nhất qua câu nào?",
    options: [
      { id: "A", text: "Con người là sản phẩm của tự nhiên" },
      {
        id: "B",
        text: "Trong tính hiện thực của nó, bản chất con người là tổng hòa các quan hệ xã hội",
      },
      { id: "C", text: "Con người là động vật biết tư duy" },
      { id: "D", text: "Con người là trung tâm của vũ trụ" },
    ],
    correctOptionId: "B",
    explanation:
      "Luận đề nổi tiếng của Mác trong 'Luận cương về Phoiơbắc': bản chất con người không phải là cái trừu tượng cố hữu, mà là tổng hòa các quan hệ xã hội.",
    difficulty: "hard",
  },
  {
    id: "q13",
    text: "Quan hệ giữa cơ sở hạ tầng và kiến trúc thượng tầng được hiểu thế nào?",
    options: [
      { id: "A", text: "Kiến trúc thượng tầng quyết định cơ sở hạ tầng" },
      {
        id: "B",
        text: "Cơ sở hạ tầng quyết định kiến trúc thượng tầng, kiến trúc thượng tầng tác động trở lại cơ sở hạ tầng",
      },
      { id: "C", text: "Hai yếu tố tồn tại độc lập với nhau" },
      { id: "D", text: "Chúng luôn đồng nhất với nhau" },
    ],
    correctOptionId: "B",
    explanation:
      "Cơ sở hạ tầng (kinh tế) là cái quyết định, nhưng kiến trúc thượng tầng (chính trị, pháp luật, tư tưởng...) có tính độc lập tương đối và tác động trở lại cơ sở hạ tầng.",
    difficulty: "hard",
  },
  {
    id: "q14",
    text: "Quy luật phủ định của phủ định nói lên điều gì về sự phát triển?",
    options: [
      { id: "A", text: "Sự phát triển diễn ra theo đường thẳng đi lên" },
      { id: "B", text: "Sự phát triển diễn ra theo vòng tròn khép kín" },
      {
        id: "C",
        text: "Sự phát triển diễn ra theo đường 'xoáy ốc', có tính kế thừa và tiến lên",
      },
      { id: "D", text: "Sự phát triển hoàn toàn ngẫu nhiên, không có quy luật" },
    ],
    correctOptionId: "C",
    explanation:
      "Quy luật phủ định của phủ định chỉ ra khuynh hướng phát triển theo đường xoáy ốc: kế thừa cái tích cực của cái cũ và đạt tới trình độ cao hơn.",
    difficulty: "medium",
  },
  {
    id: "q15",
    text: "Theo quan điểm duy vật lịch sử, ai là người sáng tạo ra lịch sử?",
    options: [
      { id: "A", text: "Các vị anh hùng, lãnh tụ vĩ đại" },
      { id: "B", text: "Quần chúng nhân dân" },
      { id: "C", text: "Giai cấp thống trị" },
      { id: "D", text: "Các nhà tư tưởng và triết gia" },
    ],
    correctOptionId: "B",
    explanation:
      "Quần chúng nhân dân là chủ thể sáng tạo chân chính ra lịch sử: sản xuất vật chất, tinh thần và là động lực của các cuộc cách mạng xã hội.",
    difficulty: "medium",
  },
];

export function getQuestionById(id: string): Question | undefined {
  return questions.find((q) => q.id === id);
}
