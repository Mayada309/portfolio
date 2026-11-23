import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/accent";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  id?: string;
}

export function SectionHeading({ index, eyebrow, title, intro, align = "left", id }: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-12 md:mb-16", align === "center" && "mx-auto text-center")}>
      <p
        className={cn(
          "mb-4 flex items-center gap-3 font-hand text-2xl text-purple",
          align === "center" && "justify-center",
        )}
      >
        <span className="inline-grid size-9 place-items-center rounded-full border-2 border-ink bg-butter font-sans text-xs font-bold text-ink">
          {index}
        </span>
        {eyebrow}
      </p>
      <h2
        id={id}
        className="font-display text-[clamp(2.4rem,6.5vw,4.75rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-balance"
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty",
            align === "center" && "mx-auto",
          )}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
