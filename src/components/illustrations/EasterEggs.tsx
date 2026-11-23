"use client";

import { useEffect, useState } from "react";
import { Paw } from "./Doodles";
import { PAW_RAIN_EVENT } from "./WatchingCat";

const SECRET = "meow";
const COLORS = ["var(--pink)", "var(--lavender)", "var(--butter)", "var(--mint)", "var(--coral)"];

interface Drop {
  id: number;
  left: number;
  delay: number;
  size: number;
  color: string;
  duration: number;
}

/**
 * Hidden fun:
 *  - type "meow" anywhere (outside a form field) → paw-print shower
 *  - pet the hero cat five times → paw-print shower
 *  - a note for curious devs in the console
 */
export function EasterEggs() {
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    let buffer = "";
    let clear: ReturnType<typeof setTimeout> | undefined;

    const rain = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const now = Date.now();
      setDrops(
        Array.from({ length: 28 }, (_, i) => ({
          id: now + i,
          left: Math.random() * 100,
          delay: Math.random() * 1.2,
          size: 22 + Math.random() * 26,
          color: COLORS[i % COLORS.length],
          duration: 2.6 + Math.random() * 1.6,
        })),
      );
      clearTimeout(clear);
      clear = setTimeout(() => setDrops([]), 5200);
    };

    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(t.tagName))) return;
      if (e.key.length !== 1) return;
      buffer = (buffer + e.key.toLowerCase()).slice(-SECRET.length);
      if (buffer === SECRET) rain();
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener(PAW_RAIN_EVENT, rain);

    console.log(
      "%c=^.^=  Hi there, fellow dev!",
      "font: 700 16px system-ui; color: #6c4cf1; background: #fff3c9; padding: 6px 10px; border-radius: 8px;",
    );
    console.log("Psst, try typing “meow” anywhere on the page. Or pet the cat five times.");

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(PAW_RAIN_EVENT, rain);
      clearTimeout(clear);
    };
  }, []);

  if (drops.length === 0) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {drops.map((d) => (
        <Paw
          key={d.id}
          className="absolute top-0"
          style={{
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            color: d.color,
            animation: `paw-fall ${d.duration}s ${d.delay}s ease-in forwards`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
