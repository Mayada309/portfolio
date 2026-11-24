"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, useScroll, useSpring } from "motion/react";
import * as m from "motion/react-m";
import { ArrowUp } from "lucide-react";

/** Floating back-to-top button with a scroll-progress ring. */
export function BackToTop() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  const [visible, setVisible] = useState(false);

  useEffect(() => scrollYProgress.on("change", (v) => setVisible(v > 0.08)), [scrollYProgress]);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    document.getElementById("home")?.focus({ preventScroll: true });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <m.button
          type="button"
          onClick={toTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ y: -4, rotate: -6 }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-4 right-4 z-40 grid size-14 place-items-center rounded-full border-2 border-ink bg-butter shadow-pop sm:bottom-6 sm:right-6"
        >
          <svg viewBox="0 0 56 56" className="absolute inset-0 size-full -rotate-90" aria-hidden="true">
            <m.circle
              cx="28"
              cy="28"
              r="24"
              fill="none"
              stroke="var(--purple)"
              strokeWidth="3.5"
              strokeLinecap="round"
              style={{ pathLength: progress }}
            />
          </svg>
          <ArrowUp className="size-5" aria-hidden="true" />
        </m.button>
      ) : null}
    </AnimatePresence>
  );
}
