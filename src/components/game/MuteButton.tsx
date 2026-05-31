"use client";

import { useState } from "react";

import { isMuted, toggleMuted } from "@/lib/sound";

export function MuteButton() {
  const [muted, setMuted] = useState(isMuted());

  return (
    <button
      type="button"
      onClick={() => setMuted(toggleMuted())}
      aria-label={muted ? "Bật âm thanh" : "Tắt âm thanh"}
      title={muted ? "Bật âm thanh" : "Tắt âm thanh"}
      className="absolute right-3 top-3 z-50 flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber-900/30 bg-amber-50/90 text-xl shadow-lg backdrop-blur-sm transition-transform hover:scale-110 active:scale-95 sm:right-5 sm:top-5"
    >
      <span aria-hidden>{muted ? "🔇" : "🔊"}</span>
    </button>
  );
}
