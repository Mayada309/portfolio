"use client";

import { useEffect, useState } from "react";
import { useMotionValue, useSpring } from "motion/react";
import * as m from "motion/react-m";

/**
 * Custom cursor: a precise dot plus a soft ring that trails it and grows over
 * interactive elements. Replaces the native cursor (hidden via the
 * `custom-cursor` class) on desktop / fine pointers only; off with reduced
 * motion, where the native cursor stays.
 */
export function CursorFollower() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add("custom-cursor");
    return () => root.classList.remove("custom-cursor");
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
      const t = e.target as Element | null;
      setHovering(Boolean(t?.closest("a, button, [role='button'], summary, label")));
    };
    const leave = () => setHidden(true);
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <m.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[70] rounded-full border-2 border-purple mix-blend-multiply"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 54 : 26,
          height: hovering ? 54 : 26,
          backgroundColor: hovering ? "rgba(255, 223, 126, 0.55)" : "rgba(205, 189, 255, 0)",
          opacity: hidden ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      <m.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[71] size-1.5 rounded-full bg-ink"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
