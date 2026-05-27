# Game Brief cho Agent — Quiz Vase Zombie Website

## 1. Mục tiêu dự án

Xây dựng một trò chơi web dạng 2D casual quiz game, lấy cảm hứng gameplay từ cơ chế “đập bình ra zombie”:

- Người chơi nhìn thấy nhiều cái bình trên màn hình.
- Khi click/đập một cái bình, bình vỡ và có thể xuất hiện zombie.
- Khi zombie xuất hiện, hệ thống hiển thị một câu hỏi trắc nghiệm.
- Người chơi phải trả lời đúng để tiêu diệt zombie.
- Nếu trả lời sai, zombie tiến gần hơn hoặc gây mất máu.
- Trò chơi kết thúc khi người chơi tiêu diệt hết zombie hoặc khi zombie phá được hàng phòng thủ.

Dự án là website game chạy trên trình duyệt, dùng:

- pnpm
- Next.js App Router
- React
- TypeScript
- React Spring cho animation
- Tailwind CSS cho styling

Người dùng đã chuẩn bị sẵn assets hình ảnh, agent không cần tự tạo asset mới. Agent cần dựng logic, layout, animation và hệ thống câu hỏi dựa trên assets có sẵn.

---

## 2. Phong cách tổng thể

Game có vibe vui, hơi hài, màu sắc rõ ràng, giống game casual 2D. Không cần làm quá nặng về physics hoặc engine phức tạp. Ưu tiên:

- Giao diện dễ hiểu.
- Animation mượt.
- Click vào bình có phản hồi rõ.
- Zombie xuất hiện có cảm giác bất ngờ.
- Câu hỏi và đáp án dễ đọc.
- Game loop rõ ràng, chơi được từ đầu đến cuối.

Không cần làm game engine lớn. Chỉ cần web game component-based.

---

## 3. Tech Stack bắt buộc

```txt
Package manager: pnpm
Framework: Next.js App Router
Language: TypeScript
UI: React + Tailwind CSS
Animation: @react-spring/web
State: React useState/useReducer hoặc Zustand nếu cần
```

Ưu tiên dùng cấu trúc đơn giản, dễ mở rộng, không over-engineer.

---

## 4. Cài đặt dự án đề xuất

```bash
pnpm create next-app quiz-vase-zombie
cd quiz-vase-zombie
pnpm add @react-spring/web clsx
```

Nếu chưa có Tailwind thì cấu hình Tailwind theo chuẩn Next.js hiện tại.

---

## 5. Cấu trúc thư mục đề xuất

```txt
src/
  app/
    page.tsx
    layout.tsx
    globals.css

  components/
    game/
      GameRoot.tsx
      GameBoard.tsx
      Vase.tsx
      Zombie.tsx
      QuestionPanel.tsx
      HUD.tsx
      StartScreen.tsx
      ResultScreen.tsx
      AnswerButton.tsx

  data/
    questions.ts
    levels.ts

  hooks/
    useGameEngine.ts

  types/
    game.ts

  lib/
    game-utils.ts

public/
  assets/
    backgrounds/
    vases/
    zombies/
    characters/
    ui/
    effects/
```

Agent có thể đổi tên component nếu hợp lý, nhưng phải giữ kiến trúc dễ đọc.

---

## 6. Danh sách assets dự kiến

Người dùng đã chuẩn bị assets. Agent cần đọc từ `public/assets/...`.

Ví dụ quy ước file:

```txt
public/assets/backgrounds/garden-bg.png
public/assets/vases/vase-idle.png
public/assets/vases/vase-cracked.png
public/assets/vases/vase-broken.png
public/assets/zombies/zombie-idle.png
public/assets/zombies/zombie-angry.png
public/assets/zombies/zombie-hit.png
public/assets/zombies/zombie-dead.png
public/assets/ui/hammer.png
public/assets/ui/question-box.png
public/assets/effects/break-smoke.png
public/assets/effects/hit-star.png
```

Nếu tên asset thực tế khác, agent cần tạo một file config để mapping asset path, không hard-code lung tung trong nhiều component.

Ví dụ:

```ts
export const ASSETS = {
  background: "/assets/backgrounds/garden-bg.png",
  vaseIdle: "/assets/vases/vase-idle.png",
  vaseCracked: "/assets/vases/vase-cracked.png",
  vaseBroken: "/assets/vases/vase-broken.png",
  zombieIdle: "/assets/zombies/zombie-idle.png",
  zombieHit: "/assets/zombies/zombie-hit.png",
  zombieDead: "/assets/zombies/zombie-dead.png",
  hammer: "/assets/ui/hammer.png",
};
```

---

## 7. Luồng chơi chính

### 7.1 Start Game

Màn hình đầu gồm:

- Tên game.
- Nút Start.
- Hướng dẫn ngắn:
  - Click vào bình để đập.
  - Nếu zombie xuất hiện, trả lời câu hỏi để tiêu diệt.
  - Sai quá nhiều lần sẽ thua.

Khi bấm Start:

- Chuyển sang màn chơi chính.
- Khởi tạo level đầu tiên.
- Random hoặc load danh sách bình theo config.

---

### 7.2 Game Board

Game board là một khu vườn 2D dạng ngang 16:9.

Trên board có:

- Background khu vườn.
- Nhiều bình được đặt thành grid hoặc theo vị trí custom.
- HUD hiển thị máu, điểm, số zombie còn lại, level hiện tại.
- Question Panel chỉ hiện khi cần trả lời.

Bình có các trạng thái:

```ts
type VaseState = "idle" | "cracking" | "broken";
```

Zombie có các trạng thái:

```ts
type ZombieState = "hidden" | "appearing" | "waitingAnswer" | "attacking" | "hit" | "dead";
```

---

### 7.3 Đập bình

Khi người chơi click vào một bình:

1. Hiển thị animation cây búa đập xuống.
2. Bình rung nhẹ.
3. Bình chuyển sang trạng thái vỡ.
4. Nếu bình có zombie:
   - Zombie xuất hiện từ phía sau hoặc trong bình.
   - Hiển thị Question Panel.
   - Game tạm khóa click các bình khác cho đến khi câu hỏi được xử lý.
5. Nếu bình không có zombie:
   - Hiển thị hiệu ứng “empty” hoặc bụi vỡ.
   - Người chơi tiếp tục chọn bình khác.

Không cho click lại bình đã vỡ.

---

### 7.4 Câu hỏi

Khi zombie xuất hiện, hệ thống chọn câu hỏi tương ứng với zombie hoặc level.

Question Panel gồm:

- Câu hỏi.
- 4 đáp án A/B/C/D.
- Feedback đúng/sai.
- Có thể có thời gian trả lời nếu muốn mở rộng.

Khi trả lời đúng:

1. Đáp án đúng sáng lên.
2. Zombie nhận hit animation.
3. Zombie biến mất hoặc ngã xuống.
4. Tăng điểm.
5. Mở khóa click bình tiếp theo.

Khi trả lời sai:

1. Đáp án sai rung nhẹ hoặc đổi màu.
2. Zombie tiến gần hơn hoặc tấn công.
3. Người chơi mất máu.
4. Có thể cho trả lời lại hoặc chuyển sang câu hỏi khác tùy rule.

Rule đề xuất cho bản MVP:

- Mỗi zombie gắn với 1 câu hỏi.
- Người chơi có 1 lần chọn đáp án.
- Đúng thì zombie chết.
- Sai thì mất 1 máu, zombie vẫn bị xử lý xong để game tiếp tục.
- Khi hết máu thì thua.

---

## 8. Game Rules MVP

```txt
Máu ban đầu: 3
Điểm đúng mỗi câu: +100
Điểm đập bình rỗng: +10
Sai đáp án: -1 máu
Thắng level: tất cả bình đã vỡ và không còn zombie sống
Thua: máu = 0
```

Có thể cấu hình trong `levels.ts`.

---

## 9. Level Design

MVP có thể có 3 level.

### Level 1

- 6 bình.
- 3 bình có zombie.
- Câu hỏi dễ.
- Máu: 3.

### Level 2

- 9 bình.
- 5 bình có zombie.
- Câu hỏi trung bình.
- Zombie animation nhanh hơn.

### Level 3

- 12 bình.
- 8 bình có zombie.
- Câu hỏi khó hơn.
- Có thể thêm zombie đặc biệt.

Ví dụ config:

```ts
export const levels = [
  {
    id: 1,
    name: "Level 1",
    playerHealth: 3,
    vases: [
      { id: "v1", x: 18, y: 62, hasZombie: true, questionId: "q1" },
      { id: "v2", x: 32, y: 62, hasZombie: false },
      { id: "v3", x: 46, y: 62, hasZombie: true, questionId: "q2" },
      { id: "v4", x: 60, y: 62, hasZombie: false },
      { id: "v5", x: 74, y: 62, hasZombie: true, questionId: "q3" },
      { id: "v6", x: 88, y: 62, hasZombie: false },
    ],
  },
];
```

`x` và `y` là phần trăm vị trí trong game board.

---

## 10. Data câu hỏi

Tạo file `src/data/questions.ts`.

Schema đề xuất:

```ts
export type Question = {
  id: string;
  text: string;
  options: {
    id: "A" | "B" | "C" | "D";
    text: string;
  }[];
  correctOptionId: "A" | "B" | "C" | "D";
  explanation?: string;
  difficulty: "easy" | "medium" | "hard";
};
```

Ví dụ:

```ts
export const questions: Question[] = [
  {
    id: "q1",
    text: "Trong Next.js App Router, file nào thường dùng để tạo trang chính?",
    options: [
      { id: "A", text: "page.tsx" },
      { id: "B", text: "index.html" },
      { id: "C", text: "main.java" },
      { id: "D", text: "server.xml" },
    ],
    correctOptionId: "A",
    explanation: "Trong App Router, page.tsx là file đại diện cho một route page.",
    difficulty: "easy",
  },
];
```

Agent nên để data câu hỏi tách riêng, không viết trực tiếp trong component.

---

## 11. Trạng thái game

Tạo type rõ ràng:

```ts
export type GameStatus = "start" | "playing" | "question" | "levelComplete" | "gameOver" | "victory";

export type VaseModel = {
  id: string;
  x: number;
  y: number;
  hasZombie: boolean;
  questionId?: string;
  state: "idle" | "cracking" | "broken";
  isOpened: boolean;
};

export type ActiveZombie = {
  id: string;
  vaseId: string;
  questionId: string;
  x: number;
  y: number;
  state: "appearing" | "waitingAnswer" | "hit" | "dead" | "attacking";
};

export type GameState = {
  status: GameStatus;
  levelIndex: number;
  health: number;
  score: number;
  vases: VaseModel[];
  activeZombie: ActiveZombie | null;
  activeQuestionId: string | null;
  answeredVaseIds: string[];
};
```

Nên dùng `useReducer` nếu logic bắt đầu nhiều nhánh. Với MVP nhỏ, `useState` vẫn được, nhưng `useReducer` sẽ dễ bảo trì hơn.

---

## 12. Animation bằng React Spring

### 12.1 Bình idle

- Bình hơi nhún nhẹ hoặc scale 1 -> 1.02 -> 1.
- Hover thì scale 1.05.
- Khi click thì shake ngang.

React Spring gợi ý:

```ts
const spring = useSpring({
  transform: isBreaking
    ? "translateX(0px) rotate(0deg) scale(1)"
    : "translateX(0px) rotate(0deg) scale(1)",
});
```

Có thể dùng `useSpringRef` hoặc `api.start()` để trigger shake.

---

### 12.2 Hammer hit

Khi click bình:

- Hammer xuất hiện phía trên bình.
- Rotate từ -35deg xuống 15deg.
- Scale nhẹ khi impact.
- Sau đó biến mất.

Pseudo:

```txt
hammer opacity: 0 -> 1 -> 0
hammer rotate: -35deg -> 18deg
hammer y: -40px -> 0px
```

---

### 12.3 Vase break

Khi bình vỡ:

- Shake 2-3 nhịp.
- Đổi image sang broken.
- Spawn effect khói/bụi.

---

### 12.4 Zombie appear

Zombie xuất hiện bằng animation:

```txt
opacity: 0 -> 1
scale: 0.6 -> 1
translateY: 20px -> 0
```

Zombie có thể idle bằng animation nhún nhẹ:

```txt
translateY: 0 -> -4px -> 0
```

---

### 12.5 Zombie hit/dead

Khi trả lời đúng:

```txt
hit: rotate nhẹ + flash + translateX
then dead: opacity 1 -> 0, scale 1 -> 0.8, translateY 0 -> 20px
```

---

### 12.6 Answer feedback

- Đáp án đúng: scale nhẹ, nổi bật.
- Đáp án sai: shake ngang.
- Question panel xuất hiện bằng fade + slide up.

---

## 13. UI Layout

### 13.1 Desktop

Game board nên nằm giữa màn hình, ratio 16:9.

```txt
+------------------------------------------------+
| HUD: HP | Score | Level | Zombies left         |
+------------------------------------------------+
|                                                |
|              Garden Background                 |
|                                                |
|        Vase    Vase    Vase    Vase            |
|                                                |
|        Vase    Vase    Vase    Vase            |
|                                                |
+------------------------------------------------+
| Question Panel, chỉ hiện khi có zombie          |
+------------------------------------------------+
```

### 13.2 Mobile

- Game board vẫn giữ tỉ lệ nhưng co lại theo width.
- Question Panel có thể hiện dưới board.
- Button đáp án to, dễ bấm.

---

## 14. Component Responsibilities

### `GameRoot.tsx`

Vai trò:

- Quản lý toàn bộ trạng thái game.
- Render StartScreen, GameBoard, ResultScreen.
- Truyền handler xuống các component con.

---

### `GameBoard.tsx`

Vai trò:

- Render background.
- Render danh sách Vase.
- Render Zombie active.
- Render effect như hammer, smoke nếu cần.

Props gợi ý:

```ts
type GameBoardProps = {
  vases: VaseModel[];
  activeZombie: ActiveZombie | null;
  canInteract: boolean;
  onVaseClick: (vaseId: string) => void;
};
```

---

### `Vase.tsx`

Vai trò:

- Hiển thị hình bình theo state.
- Xử lý animation hover/click/break.
- Không tự xử lý logic game chính.

---

### `Zombie.tsx`

Vai trò:

- Hiển thị zombie theo state.
- Animation appear/hit/dead.
- Không chứa logic câu hỏi.

---

### `QuestionPanel.tsx`

Vai trò:

- Hiển thị câu hỏi hiện tại.
- Render các đáp án.
- Gọi `onAnswer(optionId)` khi người chơi chọn.
- Hiển thị explanation sau khi trả lời nếu cần.

---

### `HUD.tsx`

Vai trò:

- Hiển thị HP, score, level, số bình còn lại, số zombie còn lại.

---

### `ResultScreen.tsx`

Vai trò:

- Hiển thị kết quả thắng/thua.
- Hiển thị điểm.
- Nút chơi lại.

---

## 15. Game Logic chi tiết

### 15.1 Khi click bình

Pseudo:

```ts
function handleVaseClick(vaseId: string) {
  if (game.status !== "playing") return;

  const vase = findVase(vaseId);
  if (!vase || vase.isOpened) return;

  markVaseAsBreaking(vaseId);

  setTimeout(() => {
    markVaseAsBroken(vaseId);

    if (vase.hasZombie && vase.questionId) {
      spawnZombieFromVase(vase);
      setGameStatus("question");
      setActiveQuestionId(vase.questionId);
    } else {
      addScore(10);
      checkLevelComplete();
    }
  }, 350);
}
```

---

### 15.2 Khi chọn đáp án

Pseudo:

```ts
function handleAnswer(optionId: string) {
  const question = getActiveQuestion();
  if (!question || !activeZombie) return;

  const isCorrect = optionId === question.correctOptionId;

  if (isCorrect) {
    addScore(100);
    setZombieState("hit");

    setTimeout(() => {
      setZombieState("dead");
      clearActiveZombie();
      clearActiveQuestion();
      setGameStatus("playing");
      checkLevelComplete();
    }, 700);
  } else {
    decreaseHealth(1);
    setZombieState("attacking");

    setTimeout(() => {
      clearActiveZombie();
      clearActiveQuestion();

      if (healthAfterDecrease <= 0) {
        setGameStatus("gameOver");
      } else {
        setGameStatus("playing");
        checkLevelComplete();
      }
    }, 700);
  }
}
```

Lưu ý: phải tránh bug stale state khi tính `healthAfterDecrease`. Nếu dùng React state, nên tính trong reducer hoặc dùng callback state.

---

### 15.3 Check thắng level

Level hoàn thành khi:

```txt
Tất cả bình đã opened = true
Và activeZombie = null
```

Nếu còn level tiếp theo:

- Hiển thị màn Level Complete.
- Nút Next Level.

Nếu hết level:

- Hiển thị Victory Screen.

---

## 16. Interaction Rules

- Không cho click nhiều bình cùng lúc khi đang có câu hỏi.
- Không cho spam click vào cùng một bình.
- Khi animation đập bình đang chạy, disable tương tác tạm thời với bình đó.
- Khi question panel đang hiện, các bình còn lại phải bị khóa.
- Button đáp án sau khi chọn phải disable để tránh chọn nhiều lần.
- Game Over thì toàn bộ board ngừng nhận click.

---

## 17. Âm thanh nếu có asset audio

Nếu người dùng có chuẩn bị âm thanh, agent có thể thêm:

```txt
break.mp3       khi bình vỡ
zombie.mp3      khi zombie xuất hiện
correct.mp3     khi trả lời đúng
wrong.mp3       khi trả lời sai
victory.mp3     khi thắng
lose.mp3        khi thua
```

Nên tạo helper:

```ts
function playSound(src: string) {
  const audio = new Audio(src);
  audio.volume = 0.6;
  audio.play().catch(() => {});
}
```

Không được để âm thanh autoplay trước khi người dùng tương tác vì trình duyệt có thể chặn.

---

## 18. Responsive và Performance

Yêu cầu:

- Board dùng `aspect-ratio: 16 / 9`.
- Assets dùng `next/image` nếu phù hợp, nhưng với game sprite có thể dùng `img` thường để dễ animation.
- Animation chỉ nên dùng `transform` và `opacity`.
- Tránh animate `width`, `height`, `top`, `left` quá nhiều.
- Với object game, vị trí có thể dùng `left/top` theo phần trăm, nhưng animation nên dùng `transform`.
- Không dùng canvas trong MVP nếu không cần.

---

## 19. Styling Direction

Dùng Tailwind CSS.

Gợi ý style:

```txt
Game container:
- rounded-2xl
- overflow-hidden
- shadow-xl
- border

HUD:
- semi-transparent panel
- readable text

Question panel:
- large readable question
- answer buttons grid 2x2 desktop, 1 column mobile
- hover/active feedback
```

Không cần UI quá phức tạp, nhưng phải nhìn giống game, không giống form web bình thường.

---

## 20. Accessibility cơ bản

- Các đáp án là button thật.
- Có thể bấm bằng bàn phím.
- Text câu hỏi đủ contrast.
- Không để animation làm mất khả năng đọc.
- Có trạng thái disabled rõ ràng.

---

## 21. Những lỗi cần tránh

- Không viết toàn bộ game trong một file duy nhất.
- Không hard-code câu hỏi trong component.
- Không để người chơi click nhiều bình khi đang trả lời câu hỏi.
- Không để state zombie và state question bị lệch nhau.
- Không dùng setTimeout quá rối mà không cleanup.
- Không để asset path rải rác khắp nơi.
- Không làm UI chỉ giống quiz app, phải có cảm giác game.
- Không dùng thư viện game engine nặng nếu không cần.

---

## 22. Thứ tự triển khai đề xuất cho Agent

### Phase 1 — Setup

- Tạo project Next.js với pnpm.
- Cài React Spring.
- Tạo cấu trúc thư mục.
- Tạo data câu hỏi và level config.

### Phase 2 — Static UI

- Render background.
- Render HUD.
- Render grid bình.
- Render StartScreen và ResultScreen.

### Phase 3 — Core Game Logic

- Click bình.
- Bình vỡ.
- Spawn zombie.
- Hiện câu hỏi.
- Chọn đáp án.
- Cập nhật máu/điểm.
- Win/Lose condition.

### Phase 4 — Animation

- Hammer hit.
- Vase shake/break.
- Zombie appear/hit/dead.
- Question panel transition.
- Answer feedback.

### Phase 5 — Polish

- Responsive.
- Âm thanh nếu có.
- Thêm level.
- Chỉnh timing animation.
- Sửa lỗi spam click.

---

## 23. Acceptance Criteria

Agent hoàn thành đúng khi:

- Chạy được bằng `pnpm dev`.
- Vào game có màn Start.
- Bấm Start vào board game.
- Click bình thì bình vỡ.
- Bình có zombie thì zombie xuất hiện.
- Câu hỏi hiện ra đúng lúc.
- Trả lời đúng thì zombie bị tiêu diệt và cộng điểm.
- Trả lời sai thì mất máu.
- Hết máu thì Game Over.
- Mở hết bình thì qua level hoặc Victory.
- Animation bằng React Spring hoạt động mượt.
- Code chia component rõ ràng.
- Data câu hỏi và level nằm riêng.

---

## 24. Yêu cầu code style

- Dùng TypeScript rõ ràng, hạn chế `any`.
- Component nhỏ, dễ đọc.
- Tách type vào `src/types/game.ts`.
- Tách config level/câu hỏi vào `src/data`.
- Tách helper logic vào `src/lib/game-utils.ts` nếu cần.
- Không lạm dụng global state nếu MVP chưa cần.
- Tên biến rõ nghĩa: `activeZombie`, `activeQuestion`, `openedVases`, `playerHealth`, `currentLevel`.

---

## 25. Prompt triển khai nhanh cho coding agent

Hãy xây dựng một website game bằng Next.js App Router + TypeScript + Tailwind CSS + React Spring. Game có cơ chế nhiều cái bình trên một khu vườn. Người chơi click vào bình để đập bình. Nếu bình có zombie, zombie xuất hiện và hệ thống hiển thị câu hỏi trắc nghiệm. Người chơi trả lời đúng thì zombie bị tiêu diệt và được cộng điểm. Trả lời sai thì mất máu. Hết máu thì thua. Mở hết bình và xử lý hết zombie thì thắng level, hết level thì Victory.

Yêu cầu kỹ thuật:

- Dùng pnpm.
- Dùng Next.js App Router.
- Dùng TypeScript.
- Dùng Tailwind CSS.
- Dùng @react-spring/web cho animation.
- Không dùng game engine nặng.
- Tách component rõ ràng: GameRoot, GameBoard, Vase, Zombie, QuestionPanel, HUD, StartScreen, ResultScreen.
- Tách data câu hỏi vào `src/data/questions.ts`.
- Tách level config vào `src/data/levels.ts`.
- Tách type vào `src/types/game.ts`.
- Assets đọc từ `public/assets`.
- Không hard-code asset path ở nhiều nơi, nên có asset config.
- Board giữ tỉ lệ 16:9.
- Khi đang trả lời câu hỏi, khóa click các bình khác.
- Không cho chọn nhiều đáp án một lúc.
- Có trạng thái Start, Playing, Question, Level Complete, Game Over, Victory.

Animation cần có:

- Bình hover scale nhẹ.
- Khi đập bình, có hammer animation.
- Bình rung và đổi sang trạng thái broken.
- Zombie appear bằng opacity/scale/translateY.
- Zombie hit/dead khi trả lời đúng.
- Câu hỏi xuất hiện bằng fade/slide.
- Đáp án sai shake nhẹ.
- Đáp án đúng nổi bật.

Ưu tiên tạo bản MVP chạy ổn trước, sau đó polish animation và responsive.
