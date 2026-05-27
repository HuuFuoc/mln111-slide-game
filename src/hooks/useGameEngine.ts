"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";

import { TOTAL_VASES } from "@/data/board";
import { getQuestionById } from "@/data/questions";
import { buildVases } from "@/lib/game-utils";
import { playSfx, startTheme } from "@/lib/sound";
import type {
  AnswerOptionId,
  GameState,
  QuizQuestion,
  VaseModel,
} from "@/types/game";

type Action =
  | { type: "START_GAME" }
  | { type: "CLICK_VASE"; vaseId: string }
  | { type: "OPEN_QUESTION"; vaseId: string }
  | { type: "ANSWER_WRONG"; optionId: AnswerOptionId }
  | { type: "ANSWER_CORRECT"; optionId: AnswerOptionId }
  | { type: "CLEAR_ACTIVE_QUESTION" }
  | { type: "RESET_GAME" };

const VASE_BREAK_DELAY = 420;
const CLEAR_QUESTION_DELAY = 1500;

function initialState(): GameState {
  return {
    status: "start",
    vases: buildVases(),
    activeVaseId: null,
    activeQuestionId: null,
    selectedWrongOptionIds: [],
    clearedCount: 0,
    isAnimating: false,
    lastAnswerCorrect: null,
  };
}

function freshBoard(): GameState {
  return { ...initialState(), status: "board" };
}

function patchVase(
  vases: VaseModel[],
  id: string,
  patch: Partial<VaseModel>,
): VaseModel[] {
  return vases.map((v) => (v.id === id ? { ...v, ...patch } : v));
}

function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case "START_GAME":
      return freshBoard();

    case "CLICK_VASE": {
      if (state.status !== "board" || state.isAnimating) return state;
      const vase = state.vases.find((v) => v.id === action.vaseId);
      if (!vase || vase.state !== "idle") return state;
      return {
        ...state,
        activeVaseId: action.vaseId,
        isAnimating: true,
        vases: patchVase(state.vases, action.vaseId, { state: "breaking" }),
      };
    }

    case "OPEN_QUESTION": {
      const vase = state.vases.find((v) => v.id === action.vaseId);
      if (!vase || vase.state !== "breaking") return state;
      return {
        ...state,
        status: "question",
        activeQuestionId: vase.questionId,
        selectedWrongOptionIds: [],
        lastAnswerCorrect: null,
        isAnimating: false,
        vases: patchVase(state.vases, action.vaseId, { state: "opened" }),
      };
    }

    case "ANSWER_WRONG": {
      if (state.status !== "question" || state.lastAnswerCorrect) return state;
      if (state.selectedWrongOptionIds.includes(action.optionId)) return state;
      // Stay on the same question; just record the wrong pick to mark it red and
      // re-trigger the zombie effect.
      return {
        ...state,
        selectedWrongOptionIds: [
          ...state.selectedWrongOptionIds,
          action.optionId,
        ],
      };
    }

    case "ANSWER_CORRECT": {
      if (
        state.status !== "question" ||
        state.lastAnswerCorrect ||
        !state.activeVaseId
      )
        return state;
      return {
        ...state,
        lastAnswerCorrect: true,
        isAnimating: true,
        clearedCount: state.clearedCount + 1,
        vases: patchVase(state.vases, state.activeVaseId, { state: "cleared" }),
      };
    }

    case "CLEAR_ACTIVE_QUESTION": {
      if (state.status !== "question") return state;
      const won = state.clearedCount >= TOTAL_VASES;
      return {
        ...state,
        status: won ? "victory" : "board",
        activeVaseId: null,
        activeQuestionId: null,
        selectedWrongOptionIds: [],
        lastAnswerCorrect: null,
        isAnimating: false,
      };
    }

    case "RESET_GAME":
      return freshBoard();

    default:
      return state;
  }
}

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
    const pending = timers.current;
    return () => {
      pending.forEach(clearTimeout);
      pending.clear();
    };
  }, []);

  const startGame = useCallback(() => {
    // First user interaction — safe to start the looping theme here.
    startTheme();
    dispatch({ type: "START_GAME" });
  }, []);
  const resetGame = useCallback(() => dispatch({ type: "RESET_GAME" }), []);

  const handleVaseClick = useCallback(
    (vaseId: string) => {
      if (state.status !== "board" || state.isAnimating) return;
      const vase = state.vases.find((v) => v.id === vaseId);
      if (!vase || vase.state !== "idle") return;

      dispatch({ type: "CLICK_VASE", vaseId });
      // Ensure music is running (idempotent) and play the break SFX.
      startTheme();
      playSfx("bonk");
      schedule(() => dispatch({ type: "OPEN_QUESTION", vaseId }), VASE_BREAK_DELAY);
    },
    [state.status, state.isAnimating, state.vases, schedule],
  );

  const handleAnswer = useCallback(
    (optionId: AnswerOptionId) => {
      if (state.status !== "question" || state.lastAnswerCorrect) return;
      const question = state.activeQuestionId
        ? getQuestionById(state.activeQuestionId)
        : undefined;
      if (!question) return;

      if (optionId === question.correctOptionId) {
        dispatch({ type: "ANSWER_CORRECT", optionId });
        playSfx("correct");
        schedule(
          () => dispatch({ type: "CLEAR_ACTIVE_QUESTION" }),
          CLEAR_QUESTION_DELAY,
        );
      } else {
        dispatch({ type: "ANSWER_WRONG", optionId });
        playSfx("wrong");
      }
    },
    [state.status, state.lastAnswerCorrect, state.activeQuestionId, schedule],
  );

  const activeQuestion: QuizQuestion | null = useMemo(
    () =>
      state.activeQuestionId
        ? getQuestionById(state.activeQuestionId) ?? null
        : null,
    [state.activeQuestionId],
  );

  return {
    state,
    activeQuestion,
    totalVases: TOTAL_VASES,
    startGame,
    resetGame,
    handleVaseClick,
    handleAnswer,
  };
}

export type GameEngine = ReturnType<typeof useGameEngine>;
