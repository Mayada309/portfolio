"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/accent";

const MEOWS = ["mrrp?", "meow!", "purrr…", "pet me again", "*slow blink*", "ok, that's enough", "…fine, one more"];

export const PAW_RAIN_EVENT = "portfolio:paw-rain";

/**
 * An illustrated cat whose pupils follow the pointer. Click (or press Enter) to pet it.
 * Five pets triggers a little paw-print shower.
 */
export function WatchingCat({ className }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const [pupil, setPupil] = useState({ x: 0, y: 0 });
  const [pets, setPets] = useState(0);
  const [bubble, setBubble] = useState<string | null>(null);
  const bubbleTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const svg = ref.current;
        if (!svg) return;
        const r = svg.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height * 0.42;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy) || 1;
        const reach = Math.min(1, dist / 260);
        setPupil({ x: (dx / dist) * 4.5 * reach, y: (dy / dist) * 4 * reach });
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => () => clearTimeout(bubbleTimer.current), []);

  const pet = () => {
    const next = pets + 1;
    setPets(next);
    setBubble(MEOWS[(next - 1) % MEOWS.length]);
    clearTimeout(bubbleTimer.current);
    bubbleTimer.current = setTimeout(() => setBubble(null), 1800);
    if (next % 5 === 0) window.dispatchEvent(new Event(PAW_RAIN_EVENT));
  };

  const happy = bubble !== null;

  return (
    <div className={cn("relative", className)}>
      <AnimatePresence>
        {bubble ? (
          <motion.span
            key={bubble + pets}
            role="status"
            initial={{ opacity: 0, y: 8, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.9 }}
            className="absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-2xl border-2 border-ink bg-paper px-3 py-1 font-hand text-xl leading-none shadow-pop"
          >
            {bubble}
          </motion.span>
        ) : null}
      </AnimatePresence>
      <button
        type="button"
        onClick={pet}
        aria-label="Pet the cat"
        className="group block w-full cursor-pointer rounded-3xl"
      >
        <svg ref={ref} viewBox="0 0 200 200" className="w-full overflow-visible" aria-hidden="true">
          {/* tail */}
          <g style={{ transformOrigin: "140px 176px", animation: "tail 2.6s ease-in-out infinite" }}>
            <path
              d="M140 176c30 4 48-10 46-34-1-14-12-20-18-14"
              fill="none"
              stroke="var(--ink)"
              strokeWidth="17"
              strokeLinecap="round"
            />
            <path
              d="M140 176c30 4 48-10 46-34-1-14-12-20-18-14"
              fill="none"
              stroke="var(--lavender)"
              strokeWidth="11"
              strokeLinecap="round"
            />
          </g>
          {/* body */}
          <path
            d="M60 196c-6-36 4-70 40-74 36 4 46 38 40 74Z"
            fill="var(--lavender)"
            stroke="var(--ink)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path d="M84 196c-2-22 4-40 16-42 12 2 18 20 16 42Z" fill="var(--paper)" opacity=".8" />
          {/* paws */}
          <ellipse cx="82" cy="194" rx="12" ry="7" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" />
          <ellipse cx="118" cy="194" rx="12" ry="7" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" />
          {/* ears */}
          <g className="origin-[100px_80px] transition-transform duration-300 group-hover:-translate-y-1">
            <path d="M54 66 50 20l40 26Z" fill="var(--lavender)" stroke="var(--ink)" strokeWidth="3.5" strokeLinejoin="round" />
            <path d="M146 66l4-46-40 26Z" fill="var(--lavender)" stroke="var(--ink)" strokeWidth="3.5" strokeLinejoin="round" />
            <path d="M58 52 56 32l18 13Z" fill="var(--pink)" />
            <path d="M142 52l2-20-18 13Z" fill="var(--pink)" />
          </g>
          {/* head */}
          <ellipse cx="100" cy="84" rx="54" ry="46" fill="var(--lavender)" stroke="var(--ink)" strokeWidth="3.5" />
          {/* forehead stripes */}
          <path d="M92 44v10M100 41v13M108 44v10" stroke="var(--purple)" strokeWidth="3.5" strokeLinecap="round" />
          {/* cheeks */}
          <ellipse cx="66" cy="100" rx="9" ry="6" fill="var(--pink)" opacity=".85" />
          <ellipse cx="134" cy="100" rx="9" ry="6" fill="var(--pink)" opacity=".85" />
          {/* eyes */}
          {happy ? (
            <g fill="none" stroke="var(--ink)" strokeWidth="3.5" strokeLinecap="round">
              <path d="M70 86c4-7 14-7 18 0" />
              <path d="M112 86c4-7 14-7 18 0" />
            </g>
          ) : (
            <g style={{ transformOrigin: "100px 84px", animation: "blink-eyes 5s infinite" }}>
              <ellipse cx="79" cy="84" rx="11" ry="12.5" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" />
              <ellipse cx="121" cy="84" rx="11" ry="12.5" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" />
              <g style={{ transform: `translate(${pupil.x}px, ${pupil.y}px)`, transition: "transform 120ms ease-out" }}>
                <ellipse cx="79" cy="85" rx="5.5" ry="7.5" fill="var(--ink)" />
                <ellipse cx="121" cy="85" rx="5.5" ry="7.5" fill="var(--ink)" />
                <circle cx="81" cy="81" r="2" fill="var(--paper)" />
                <circle cx="123" cy="81" r="2" fill="var(--paper)" />
              </g>
            </g>
          )}
          {/* nose + mouth */}
          <path d="M95 99h10l-5 6Z" fill="var(--coral)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
          <path
            d="M100 105c0 5-4 8-8 6M100 105c0 5 4 8 8 6"
            fill="none"
            stroke="var(--ink)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* whiskers */}
          <g stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" opacity=".75">
            <path d="M58 96 30 90M58 103l-28 3" />
            <path d="M142 96l28-6M142 103l28 3" />
          </g>
          {/* collar */}
          <path d="M66 124c22 10 46 10 68 0" fill="none" stroke="var(--coral)" strokeWidth="7" strokeLinecap="round" />
          <circle cx="100" cy="134" r="6" fill="var(--butter)" stroke="var(--ink)" strokeWidth="2.5" />
        </svg>
      </button>
      <style>{`@keyframes blink-eyes{0%,92%,100%{transform:scaleY(1)}95%{transform:scaleY(.1)}}`}</style>
    </div>
  );
}
