import { AnimatedCard } from "./components/AnimatedCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 bg-zinc-50 px-6 py-16 dark:bg-black">
      <header className="text-center">
        <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          Next.js + Tailwind + React Spring
        </h1>
        <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
          Dự án khởi tạo sẵn, bấm vào thẻ bên dưới để xem animation.
        </p>
      </header>
      <AnimatedCard />
    </main>
  );
}
