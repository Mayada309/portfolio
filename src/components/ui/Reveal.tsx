"use client";

import { type HTMLMotionProps } from "motion/react";
import * as m from "motion/react-m";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

/** Fades + lifts its children into view once. Reduced motion is handled by <MotionConfig reducedMotion="user">. */
export function Reveal({ delay = 0, y = 28, children, ...rest }: RevealProps) {
  return (
    <m.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </m.div>
  );
}
