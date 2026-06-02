export interface ContentBlock {
  id: string;
  title: string;
  text?: string;
  bullets?: string[];
  quote?: string;
  isKeyQuote?: boolean;
  speakerNote: string;
}

export interface LandingSection {
  id: string;
  sectionNumber: string;
  title: string;
  columns?: 2 | 3;
  blocks: ContentBlock[];
}

export const NAV_ITEMS = [
  { id: 'hero', label: 'Mở đầu' },
  { id: 'scope', label: 'Bản đồ' },
  { id: 'consciousness', label: 'Ý thức XH' },
  { id: 'human-nature', label: 'Bản chất' },
  { id: 'alienation', label: 'Tha hóa' },
  { id: 'liberation', label: 'Giải phóng' },
  { id: 'central-thesis', label: 'Luận điểm' },
  { id: 'conclusion', label: 'Kết luận' },
  { id: 'cau-chuyen', label: 'Câu chuyện' },
  { id: 'game', label: 'Mini Game' },
] as const;

export const LANDING_SECTIONS: LandingSection[] = [
  {
    id: 'consciousness',
    sectionNumber: '01',
    title: 'Ý thức xã hội',
    columns: 2,
    blocks: [
      {
        id: 'c1',
        title: 'Khái niệm ý thức xã hội',
        text: 'Ý thức xã hội là toàn bộ đời sống tinh thần của xã hội, bao gồm những quan điểm, tư tưởng, tình cảm, tâm lý, truyền thống, đạo đức, pháp luật, tôn giáo, nghệ thuật, triết học và các hình thái ý thức khác. Ý thức xã hội phản ánh tồn tại xã hội trong từng giai đoạn lịch sử nhất định.',
        speakerNote:
          'Trước hết, cần hiểu ý thức xã hội là toàn bộ đời sống tinh thần của xã hội. Nó bao gồm những quan niệm, tư tưởng, tình cảm, đạo đức, pháp luật, tôn giáo, nghệ thuật, triết học và các hình thái ý thức khác. Theo quan điểm của chủ nghĩa duy vật lịch sử, ý thức xã hội không tự nhiên xuất hiện, mà được hình thành trên cơ sở đời sống vật chất của xã hội. Nói cách khác, xã hội tồn tại như thế nào thì đời sống tinh thần của con người cũng sẽ được hình thành và phản ánh theo những điều kiện xã hội ấy.',
      },
      {
        id: 'c2',
        title: 'Tồn tại xã hội quyết định ý thức xã hội',
        quote: 'Tồn tại xã hội quyết định ý thức xã hội.',
        bullets: [
          'Điều kiện sinh hoạt vật chất quyết định đời sống tinh thần.',
          'Phương thức sản xuất là cơ sở hình thành ý thức xã hội.',
          'Quan hệ kinh tế và hoàn cảnh lịch sử định hình tư tưởng, giá trị.',
          'Xã hội tồn tại như thế nào thì ý thức xã hội được hình thành như thế ấy.',
        ],
        speakerNote:
          'Quan điểm cơ bản của triết học Mác – Lênin là tồn tại xã hội quyết định ý thức xã hội. Tồn tại xã hội ở đây được hiểu là toàn bộ đời sống vật chất của xã hội, trong đó phương thức sản xuất giữ vai trò rất quan trọng. Ví dụ, trong xã hội nông nghiệp truyền thống, con người thường coi trọng kinh nghiệm, cộng đồng làng xã, phong tục tập quán và sự ổn định. Nhưng trong xã hội công nghiệp và hiện đại, con người lại đề cao năng suất, tri thức, kỹ năng, pháp luật và tính cạnh tranh nhiều hơn.',
      },
      {
        id: 'c3',
        title: 'Tính độc lập tương đối của ý thức xã hội',
        bullets: [
          'Ý thức xã hội có thể lạc hậu hơn so với tồn tại xã hội.',
          'Ý thức xã hội có thể vượt trước tồn tại xã hội.',
          'Ý thức xã hội kế thừa những giá trị tinh thần của các thời đại trước.',
          'Ý thức xã hội có thể tác động trở lại tồn tại xã hội.',
        ],
        speakerNote:
          'Mặc dù tồn tại xã hội quyết định ý thức xã hội, nhưng ý thức xã hội không phải là sự phản ánh máy móc, thụ động. Nó có tính độc lập tương đối. Có những quan niệm, tư tưởng đã trở nên lạc hậu nhưng vẫn tiếp tục tồn tại trong đời sống xã hội — ví dụ như một số hủ tục, định kiến giới, tư tưởng trọng nam khinh nữ. Ngược lại, cũng có những tư tưởng tiến bộ có thể đi trước hiện thực, định hướng cho sự phát triển của xã hội. Vì vậy, ý thức xã hội vừa phản ánh tồn tại xã hội, vừa có khả năng tác động trở lại xã hội.',
      },
    ],
  },
  {
    id: 'human-nature',
    sectionNumber: '02',
    title: 'Con người và bản chất con người',
    columns: 2,
    blocks: [
      {
        id: 'h1',
        title: 'Con người là thực thể tự nhiên – xã hội',
        bullets: [
          'Mặt tự nhiên: con người có cơ thể sinh học, nhu cầu sinh tồn, ăn, uống, nghỉ ngơi, phát triển.',
          'Mặt xã hội: con người sống trong xã hội, lao động, giao tiếp, tư duy, sáng tạo văn hóa.',
          'Điểm phân biệt với động vật: đời sống xã hội, ngôn ngữ, tư duy và khả năng sáng tạo.',
        ],
        speakerNote:
          'Sang phần thứ hai, triết học Mác – Lênin xem con người là một thực thể thống nhất giữa mặt tự nhiên và mặt xã hội. Con người có cơ thể sinh học, có nhu cầu ăn uống, nghỉ ngơi, sinh tồn và phát triển. Tuy nhiên, điểm làm cho con người khác với các loài vật chính là đời sống xã hội, lao động, ngôn ngữ, tư duy và khả năng sáng tạo. Con người không chỉ thích nghi với tự nhiên, mà còn biết cải tạo tự nhiên thông qua lao động.',
      },
      {
        id: 'h2',
        title: 'Vai trò của lao động',
        bullets: [
          'Lao động là hoạt động đặc trưng, phân biệt con người với động vật.',
          'Thông qua lao động: tạo ra của cải vật chất, hình thành ngôn ngữ và tư duy.',
          'Lao động giúp xây dựng các quan hệ xã hội và sáng tạo ra văn hóa.',
          'Lao động phát triển năng lực, nhân cách và ý thức của con người.',
        ],
        speakerNote:
          'Trong triết học Mác – Lênin, lao động giữ vai trò đặc biệt quan trọng đối với sự hình thành và phát triển con người. Thông qua lao động, con người tạo ra của cải vật chất để duy trì đời sống. Nhưng lao động không chỉ có ý nghĩa kinh tế — lao động còn giúp con người hình thành tư duy, ngôn ngữ, kỹ năng, ý thức và năng lực sáng tạo. Chính trong quá trình lao động, con người liên hệ với tự nhiên, đồng thời liên hệ với những con người khác.',
      },
      {
        id: 'h3',
        title: 'Bản chất con người là tổng hòa các quan hệ xã hội',
        quote:
          '"Bản chất con người không phải là cái trừu tượng cố hữu của cá nhân riêng biệt. Trong tính hiện thực của nó, bản chất con người là tổng hòa những quan hệ xã hội." — C.Mác',
        isKeyQuote: true,
        bullets: [
          'Bản chất con người không có sẵn một cách cô lập.',
          'Con người được hình thành trong đời sống xã hội.',
          'Nhân cách, ý thức, năng lực chịu ảnh hưởng từ các quan hệ xã hội.',
          'Muốn hiểu con người, phải đặt họ trong hoàn cảnh lịch sử – xã hội cụ thể.',
        ],
        speakerNote:
          'Từ quan điểm trên, C.Mác đưa ra luận điểm nổi tiếng: bản chất con người là tổng hòa các quan hệ xã hội. Đó là quan hệ gia đình, quan hệ lao động, quan hệ giai cấp, quan hệ dân tộc, quan hệ cộng đồng, pháp luật, đạo đức, giáo dục và văn hóa. Ví dụ, một đứa trẻ khi sinh ra chưa thể có đầy đủ nhân cách, tri thức, đạo đức hay kỹ năng sống. Những yếu tố đó được hình thành dần trong quá trình sống, học tập, lao động và giao tiếp với người khác.',
      },
      {
        id: 'h4',
        title: 'Không phủ nhận vai trò cá nhân',
        bullets: [
          'Mỗi cá nhân vẫn có ý thức và năng lực riêng.',
          'Cá nhân có sự lựa chọn và trách nhiệm cá nhân.',
          'Mỗi người có khả năng tác động trở lại xã hội.',
          'Con người vừa là sản phẩm của xã hội, vừa là chủ thể sáng tạo và cải tạo xã hội.',
        ],
        speakerNote:
          'Cần hiểu đúng rằng quan điểm "bản chất con người là tổng hòa các quan hệ xã hội" không phủ nhận vai trò cá nhân. Mỗi người vẫn có ý thức, năng lực, lựa chọn, trách nhiệm và cá tính riêng. Nhưng những yếu tố cá nhân đó không hình thành trong khoảng trống, mà luôn được hình thành trong một môi trường xã hội nhất định. Mỗi cá nhân vừa chịu sự tác động của xã hội, vừa có khả năng tác động trở lại xã hội thông qua hoạt động thực tiễn của mình.',
      },
    ],
  },
  {
    id: 'alienation',
    sectionNumber: '03',
    title: 'Hiện tượng tha hóa con người',
    columns: 2,
    blocks: [
      {
        id: 'a1',
        title: 'Khái niệm tha hóa con người',
        text: 'Tha hóa con người là hiện tượng con người bị tách khỏi bản chất đích thực của mình, đặc biệt trong lao động và trong các quan hệ xã hội. Khi bị tha hóa, những sản phẩm và quan hệ do con người tạo ra lại quay trở lại chi phối, áp bức hoặc làm con người mất đi khả năng phát triển tự do.',
        speakerNote:
          'Theo quan điểm của triết học Mác – Lênin, tha hóa là hiện tượng con người bị tách khỏi bản chất đích thực của mình. Điều này thể hiện rõ trong lao động và trong các quan hệ xã hội. Trong điều kiện tha hóa, những sản phẩm do con người tạo ra, những thiết chế và quan hệ xã hội do con người xây dựng nên lại quay trở lại chi phối con người, làm cho con người mất đi sự tự do và khả năng phát triển toàn diện.',
      },
      {
        id: 'a2',
        title: 'Tha hóa trong lao động và đời sống xã hội',
        bullets: [
          'Trong xã hội có áp bức, lao động không còn là hoạt động sáng tạo tự do.',
          'Người lao động không làm chủ sản phẩm lao động của mình.',
          'Con người bị phụ thuộc vào tiền lương, máy móc, thị trường.',
          'Con người có thể làm việc chỉ để tồn tại, xa lạ với công việc và bản thân.',
        ],
        speakerNote:
          'Trong xã hội có áp bức, bóc lột, đặc biệt khi quan hệ sản xuất bất công tồn tại, lao động có thể không còn là hoạt động sáng tạo tự do của con người. Người lao động có thể bị biến thành công cụ kiếm sống. Họ làm ra sản phẩm nhưng không làm chủ sản phẩm đó. Con người tạo ra của cải, sản phẩm, quy tắc và thiết chế xã hội, nhưng trong điều kiện tha hóa, chính những thứ đó lại quay lại chi phối con người. Trong đời sống hiện đại, một người có thể làm việc chỉ để tồn tại, chịu áp lực bởi tiền bạc, cạnh tranh, địa vị — khi đó con người dễ đánh mất ý nghĩa trong lao động và xa lạ với chính bản thân mình.',
      },
    ],
  },
  {
    id: 'liberation',
    sectionNumber: '04',
    title: 'Vấn đề giải phóng con người',
    columns: 3,
    blocks: [
      {
        id: 'l1',
        title: 'Giải phóng khỏi áp bức và tha hóa',
        text: 'Giải phóng con người là giải phóng khỏi những điều kiện xã hội làm cho con người bị áp bức, bóc lột, tha hóa và không thể phát triển toàn diện. Giải phóng con người phải gắn liền với giải phóng xã hội.',
        speakerNote:
          'Từ hiện tượng tha hóa, triết học Mác – Lênin đặt ra vấn đề giải phóng con người. Giải phóng con người không chỉ là giải phóng về mặt tinh thần hay đạo đức cá nhân. Quan trọng hơn, đó là giải phóng con người khỏi những điều kiện kinh tế – xã hội làm cho con người bị áp bức, bóc lột và tha hóa. Muốn giải phóng con người, cần cải tạo những quan hệ xã hội bất công, giải phóng lao động, xóa bỏ những điều kiện khiến con người bị lệ thuộc.',
      },
      {
        id: 'l2',
        title: 'Gắn liền với cải tạo xã hội',
        bullets: [
          'Giải phóng lao động khỏi bóc lột và tha hóa.',
          'Giải phóng giai cấp bị áp bức.',
          'Cải tạo những quan hệ xã hội bất công.',
          'Xây dựng điều kiện để con người phát triển tự do, toàn diện.',
        ],
        speakerNote:
          'Nói cách khác, giải phóng con người phải gắn liền với giải phóng xã hội. Không thể giải phóng con người chỉ bằng cách thay đổi tư tưởng cá nhân nếu các điều kiện kinh tế – xã hội vẫn còn áp bức và bất công. Vì vậy, phải giải phóng lao động, giải phóng giai cấp bị áp bức và cải tạo những quan hệ xã hội bất công.',
      },
      {
        id: 'l3',
        title: 'Mục tiêu: Phát triển tự do và toàn diện',
        bullets: [
          'Được phát triển tự do và toàn diện.',
          'Làm chủ lao động và đời sống xã hội.',
          'Phát huy năng lực sáng tạo của bản thân.',
          'Sống trong quan hệ xã hội công bằng, nhân văn và tiến bộ.',
        ],
        speakerNote:
          'Theo quan điểm Mác – Lênin, mục tiêu cuối cùng của sự phát triển xã hội là tạo điều kiện để con người được phát triển tự do và toàn diện. Con người không chỉ cần được đáp ứng nhu cầu vật chất, mà còn cần có điều kiện để học tập, lao động sáng tạo, tham gia vào đời sống xã hội và làm chủ cuộc sống của mình. Vì vậy, giải phóng con người không thể tách rời khỏi việc xây dựng những quan hệ xã hội công bằng, nhân văn và tiến bộ.',
      },
    ],
  },
];
