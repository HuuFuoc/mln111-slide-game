"use client";

import { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

import { useGameEngine } from "@/hooks/useGameEngine";
import {
  IMAGE_ASSETS,
  MIN_LOADING_MS,
  preloadImages,
  SOUND_ASSETS,
  warmupAudio,
} from "@/lib/preloadAssets";
import { playSfx, stopTheme } from "@/lib/sound";

import { GameBoard } from "./GameBoard";
import { LoadingScreen } from "./LoadingScreen";
import { MuteButton } from "./MuteButton";
import { QuestionEncounter } from "./QuestionEncounter";
import { StartScreen } from "./StartScreen";
import { VictoryScreen } from "./VictoryScreen";

type BootStatus = "loading" | "ready";

export function GameRoot() {
  const {
    state,
    activeQuestion,
    totalVases,
    startGame,
    resetGame,
    handleVaseClick,
    handleAnswer,
  } = useGameEngine();

  const [bootStatus, setBootStatus] = useState<BootStatus>("loading");
  const [loadingProgress, setLoadingProgress] = useState(0);
  const hasPlayedFinalRef = useRef(false);

  // Boot: preload assets + keep the loading screen up for a minimum duration.
  useEffect(() => {
    let cancelled = false;
    const start = Date.now();

    const interval = setInterval(() => {
      if (cancelled) return;
      const pct = Math.min(99, ((Date.now() - start) / MIN_LOADING_MS) * 100);
      setLoadingProgress(pct);
    }, 80);

    let delayTimer: ReturnType<typeof setTimeout>;
    const minimumDelay = new Promise<void>((resolve) => {
      delayTimer = setTimeout(resolve, MIN_LOADING_MS);
    });

    Promise.allSettled([preloadImages(IMAGE_ASSETS), minimumDelay]).then(() => {
      if (cancelled) return;
      warmupAudio(SOUND_ASSETS); // primes audio; never calls play()
      setLoadingProgress(100);
      setBootStatus("ready");
    });

    return () => {
      cancelled = true;
      clearInterval(interval);
      clearTimeout(delayTimer);
    };
  }, []);

  // Play final.mp3 exactly once when the game completes; reset on leaving victory.
  useEffect(() => {
    if (state.status === "victory") {
      if (!hasPlayedFinalRef.current) {
        hasPlayedFinalRef.current = true;
        stopTheme(); // clear the stage so the final sting is heard
        playSfx("final", { volume: 0.85, maxDurationMs: 7000 });
      }
    } else {
      hasPlayedFinalRef.current = false;
    }
  }, [state.status]);

  const canInteract = state.status === "board" && !state.isAnimating;

  const gameFade = useSpring({
    opacity: bootStatus === "ready" ? 1 : 0,
    config: { tension: 180, friction: 24 },
  });

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-zinc-900 p-2 sm:p-6">
      <div className="relative aspect-[16/9] w-full max-w-[1400px] overflow-hidden rounded-2xl border-4 border-amber-950/60 bg-emerald-900 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
        {bootStatus === "loading" ? (
          <LoadingScreen progress={loadingProgress} />
        ) : (
          <animated.div style={{ opacity: gameFade.opacity }} className="absolute inset-0">
            <GameBoard
              vases={state.vases}
              canInteract={canInteract}
              clearedCount={state.clearedCount}
              totalVases={totalVases}
              onVaseClick={handleVaseClick}
            />

            <MuteButton />

            {state.status === "start" && <StartScreen onStart={startGame} />}

            {state.status === "question" && activeQuestion && (
              <QuestionEncounter
                key={activeQuestion.id}
                question={activeQuestion}
                selectedWrongOptionIds={state.selectedWrongOptionIds}
                answeredCorrect={state.lastAnswerCorrect === true}
                onAnswer={handleAnswer}
              />
            )}

            {state.status === "victory" && (
              <VictoryScreen totalVases={totalVases} onReplay={resetGame} />
            )}
          </animated.div>
        )}
      </div>
    </div>
  );
}
