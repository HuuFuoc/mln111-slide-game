import { GameRoot } from '@/components/game/GameRoot';

export const metadata = {
  title: 'MLN111 · Đập Bình Diệt Zombie',
  description:
    'Quiz game triết học Mác - Lênin theo cơ chế đập bình ra zombie. Trả lời đúng để tiêu diệt zombie.',
};

export default function GamePage() {
  return <GameRoot />;
}
