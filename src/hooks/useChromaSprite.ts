"use client";

import { useEffect, useState } from "react";

const cache = new Map<string, Promise<string>>();

async function processChromaKey(src: string, threshold = 232): Promise<string> {
  const existing = cache.get(src);
  if (existing) return existing;

  const promise = (async () => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to load ${src}`));
      img.src = src;
    });

    const canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return src;
    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    // Soft cutoff: pixels brighter than threshold become transparent; a small
    // ramp below the threshold fades alpha to avoid hard sprite edges.
    const ramp = 18;
    const fadeStart = threshold - ramp;
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const minChan = Math.min(r, g, b);
      if (minChan >= threshold) {
        data[i + 3] = 0;
      } else if (minChan > fadeStart) {
        const ratio = (threshold - minChan) / ramp;
        data[i + 3] = Math.round(data[i + 3] * ratio);
      }
    }
    ctx.putImageData(imageData, 0, 0);
    return canvas.toDataURL("image/png");
  })();

  cache.set(src, promise);
  promise.catch(() => cache.delete(src));
  return promise;
}

export function useChromaSprite(src: string): string {
  const [out, setOut] = useState<string>(src);
  useEffect(() => {
    let active = true;
    processChromaKey(src)
      .then((url) => {
        if (active) setOut(url);
      })
      .catch(() => {
        if (active) setOut(src);
      });
    return () => {
      active = false;
    };
  }, [src]);
  return out;
}
