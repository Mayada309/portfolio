import type { ReactNode } from "react";
import { cn } from "@/lib/accent";

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border-[1.5px] border-ink bg-paper px-3 py-1 text-[0.8rem] font-semibold leading-none",
        className,
      )}
    >
      {children}
    </span>
  );
}
