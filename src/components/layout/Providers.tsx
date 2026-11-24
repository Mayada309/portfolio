"use client";

import type { ReactNode } from "react";
import { LazyMotion, MotionConfig } from "motion/react";

const loadFeatures = () => import("@/lib/motionFeatures").then((mod) => mod.default);

/**
 * Motion respects the visitor's OS "reduce motion" setting everywhere.
 * Components use the lightweight `m.*` elements; the animation features load
 * asynchronously after hydration, keeping them off the first-paint path.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
