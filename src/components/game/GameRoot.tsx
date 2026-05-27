"use client";

import { levels } from "@/data/levels";
import { useGameEngine } from "@/hooks/useGameEngine";

import { GameBoard } from "./GameBoard";
import { HUD } from "./HUD";
import { QuestionPanel } from "./QuestionPanel";
import { ResultScreen } from "./ResultScreen";
import { StartScreen } from "./StartScreen";

export function GameRoot() {
  const {
    state,
    currentLevel,
    activeQuestion,
    remainingZombies,
    handleVaseClick,
    handleAnswer,
    startGame,
    nextLevel,
    restart,
  } = useGameEngine();

  const canInteract = state.status === "playing";

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-zinc-900 p-2 sm:p-6">
      <div className="relative aspect-[16/9] w-full max-w-[1400px] overflow-hidden rounded-2xl border-4 border-amber-950/60 bg-emerald-900 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
        <GameBoard
          vases={state.vases}
          activeZombie={state.activeZombie}
          canInteract={canInteract}
          onVaseClick={handleVaseClick}
        />

        {state.status !== "start" && (
          <HUD
            health={state.health}
            maxHealth={currentLevel.playerHealth}
            score={state.score}
            levelName={currentLevel.name}
            levelIndex={state.levelIndex}
            totalLevels={levels.length}
            remainingZombies={remainingZombies}
          />
        )}

        {state.status === "question" && activeQuestion && (
          <QuestionPanel
            key={activeQuestion.id}
            question={activeQuestion}
            feedback={state.feedback}
            onAnswer={handleAnswer}
          />
        )}

        {state.status === "start" && <StartScreen onStart={startGame} />}

        {state.status === "levelComplete" && (
          <ResultScreen
            variant="levelComplete"
            score={state.score}
            levelName={currentLevel.name}
            onPrimary={nextLevel}
            primaryLabel={
              state.levelIndex + 1 >= levels.length
                ? "Xem chiến thắng"
                : "Level tiếp theo"
            }
          />
        )}

        {state.status === "gameOver" && (
          <ResultScreen
            variant="gameOver"
            score={state.score}
            levelName={currentLevel.name}
            onPrimary={restart}
            primaryLabel="Chơi lại"
          />
        )}

        {state.status === "victory" && (
          <ResultScreen
            variant="victory"
            score={state.score}
            onPrimary={restart}
            primaryLabel="Chơi lại từ đầu"
          />
        )}
      </div>
    </div>
  );
}
