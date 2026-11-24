"use client";

import Image from "next/image";
import * as m from "motion/react-m";
import type { Hobby } from "@/data/portfolio";
import { accentVar, cn } from "@/lib/accent";

interface PolaroidProps {
  hobby: Hobby;
  aspect: string;
  rotate: number;
  sizes: string;
  className?: string;
  delay?: number;
}

export function Polaroid({ hobby, aspect, rotate, sizes, className, delay = 0 }: PolaroidProps) {
  return (
    <m.figure
      initial={{ opacity: 0, y: 40, rotate: rotate * 2 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ type: "spring", stiffness: 120, damping: 16, delay }}
      whileHover={{ rotate: 0, y: -8, scale: 1.03, zIndex: 5 }}
      className={cn("relative rounded-md bg-paper p-2.5 pb-3 shadow-[0_14px_30px_-12px_rgb(43_32_66/0.35)] sm:p-3 sm:pb-4", className)}
    >
      <span
        className="tape left-1/2 -top-3 -translate-x-1/2 rotate-[-4deg]"
        style={{ ["--tape" as string]: accentVar[hobby.tape] }}
        aria-hidden="true"
      />
      <div className={cn("relative overflow-hidden rounded-sm", aspect)} style={{ backgroundColor: accentVar[hobby.accent] }}>
        <Image src={hobby.image.src} alt={hobby.image.alt} fill sizes={sizes} className="object-cover" />
      </div>
      <figcaption className="px-1 pt-2.5">
        <span className="block font-display text-base font-semibold leading-tight sm:text-lg">{hobby.title}</span>
        <span className="block font-hand text-lg leading-tight text-ink-soft sm:text-xl">{hobby.caption}</span>
      </figcaption>
    </m.figure>
  );
}
