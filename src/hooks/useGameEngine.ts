"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";

import { levels } from "@/data/levels";
import { getQuestionById } from "@/data/questions";
import { buildVases, isLevelComplete } from "@/lib/game-utils";
import type {
  ActiveZombie,
  AnswerOptionId,
  GameState,
  Question,
  VaseModel,
} from "@/types/game";

type Action =
  | { type: "START_GAME" }
  | { type: "VASE_CLICKED"; vaseId: string }
  | { type: "VASE_RESOLVED"; vaseId: string }
  | { type: "ANSWER_SELECTED"; optionId: AnswerOptionId }
  | { type: "ZOMBIE_RESOLVED" }
  | { type: "NEXT_LEVEL" }
  | { type: "RESTART" };

const SCORE_EMPTY_VASE = 10;
const SCORE_CORRECT_ANSWER = 100;

function initialState(): GameState {
  const firstLevel = levels[0];
  return {
    status: "start",
    levelIndex: 0,
    health: firstLevel.playerHealth,
    score: 0,
    vases: buildVases(firstLevel),
    activeZombie: null,
    activeQuestionId: null,
    feedback: null,
  };
}

function setVaseState(
  vases: VaseModel[],
  id: string,
  patch: Partial<VaseModel>,
): VaseModel[] {
  return vases.map((v) => (v.id === id ? { ...v, ...patch } : v));
}

function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case "START_GAME": {
      const level = levels[0];
      return {
        ...initialState(),
        status: "playing",
        levelIndex: 0,
        health: level.playerHealth,
        vases: buildVases(level),
      };
    }

    case "VASE_CLICKED": {
      if (state.status !== "playing") return state;
      const vase = state.vases.find((v) => v.id === action.vaseId);
      if (!vase || vase.isOpened || vase.state !== "idle") return state;
      return {
        ...state,
        vases: setVaseState(state.vases, action.vaseId, { state: "cracking" }),
      };
    }

    case "VASE_RESOLVED": {
      const vase = state.vases.find((v) => v.id === action.vaseId);
      if (!vase) return state;

      const updatedVases = setVaseState(state.vases, action.vaseId, {
        state: "broken",
        isOpened: true,
      });

      if (vase.hasZombie && vase.questionId) {
        const zombie: ActiveZombie = {
          id: `z-${vase.id}`,
          vaseId: vase.id,
          questionId: vase.questionId,
          x: vase.x,
          y: vase.y,
          state: "appearing",
        };
        return {
          ...state,
          vases: updatedVases,
          status: "question",
          activeZombie: zombie,
          activeQuestionId: vase.questionId,
          feedback: null,
        };
      }

      const allOpened = isLevelComplete(updatedVases);
      return {
        ...state,
        vases: updatedVases,
        score: state.score + SCORE_EMPTY_VASE,
        status: allOpened ? "levelComplete" : "playing",
      };
    }

    case "ANSWER_SELECTED": {
      if (
        state.status !== "question" ||
        !state.activeZombie ||
        !state.activeQuestionId ||
        state.feedback
      )
        return state;

      const question = getQuestionById(state.activeQuestionId);
      if (!question) return state;

      const isCorrect = action.optionId === question.correctOptionId;
      const newHealth = isCorrect ? state.health : state.health - 1;

      return {
        ...state,
        health: newHealth,
        score: isCorrect ? state.score + SCORE_CORRECT_ANSWER : state.score,
        activeZombie: {
          ...state.activeZombie,
          state: isCorrect ? "hit" : "attacking",
        },
        feedback: { selectedOptionId: action.optionId, isCorrect },
      };
    }

    case "ZOMBIE_RESOLVED": {
      if (!state.activeZombie) return state;
      const allOpened = isLevelComplete(state.vases);

      if (state.health <= 0) {
        return {
          ...state,
          status: "gameOver",
          activeZombie: null,
          activeQuestionId: null,
          feedback: null,
        };
      }

      return {
        ...state,
        status: allOpened ? "levelComplete" : "playing",
        activeZombie: null,
        activeQuestionId: null,
        feedback: null,
      };
    }

    case "NEXT_LEVEL": {
      const nextIndex = state.levelIndex + 1;
      if (nextIndex >= levels.length) {
        return { ...state, status: "victory" };
      }
      const level = levels[nextIndex];
      return {
        ...state,
        status: "playing",
        levelIndex: nextIndex,
        health: level.playerHealth,
        vases: buildVases(level),
        activeZombie: null,
        activeQuestionId: null,
        feedback: null,
      };
    }

    case "RESTART": {
      return { ...initialState(), status: "playing" };
    }

    default:
      return state;
  }
}

const VASE_BREAK_DELAY = 380;
const ZOMBIE_RESOLVE_DELAY = 1200;

export function useGameEngine() {
  const [state, dispatch] = useReducer(reducer, undefined, initialState);
  const timers = useRef<Set<ReturnType<typeof setTimeout>>>(new Set());

  const schedule = useCallback((fn: () => void, delay: number) => {
    const t = setTimeout(() => {
      timers.current.delete(t);
      fn();
    }, delay);
    timers.current.add(t);
  }, []);

  useEffect(() => {
    return () => {
      timers.current.forEach(clearTimeout);
      timers.current.clear();
    };
  }, []);

  const handleVaseClick = useCallback(
    (vaseId: string) => {
      if (state.status !== "playing") return;
      const vase = state.vases.find((v) => v.id === vaseId);
      if (!vase || vase.isOpened || vase.state !== "idle") return;

      dispatch({ type: "VASE_CLICKED", vaseId });
      schedule(() => {
        dispatch({ type: "VASE_RESOLVED", vaseId });
      }, VASE_BREAK_DELAY);
    },
    [state.status, state.vases, schedule],
  );

  const handleAnswer = useCallback(
    (optionId: AnswerOptionId) => {
      if (state.status !== "question" || state.feedback) return;
      dispatch({ type: "ANSWER_SELECTED", optionId });
      schedule(() => {
        dispatch({ type: "ZOMBIE_RESOLVED" });
      }, ZOMBIE_RESOLVE_DELAY);
    },
    [state.status, state.feedback, schedule],
  );

  const startGame = useCallback(() => dispatch({ type: "START_GAME" }), []);
  const nextLevel = useCallback(() => dispatch({ type: "NEXT_LEVEL" }), []);
  const restart = useCallback(() => dispatch({ type: "RESTART" }), []);

  const activeQuestion: Question | null = useMemo(
    () =>
      state.activeQuestionId ? getQuestionById(state.activeQuestionId) ?? null : null,
    [state.activeQuestionId],
  );

  const currentLevel = useMemo(() => levels[state.levelIndex], [state.levelIndex]);

  const remainingZombies = useMemo(
    () => state.vases.filter((v) => v.hasZombie && !v.isOpened).length,
    [state.vases],
  );

  return {
    state,
    currentLevel,
    activeQuestion,
    remainingZombies,
    handleVaseClick,
    handleAnswer,
    startGame,
    nextLevel,
    restart,
  };
}

export type GameEngine = ReturnType<typeof useGameEngine>;
