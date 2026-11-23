import { skillGroups } from "@/data/portfolio";
import { Sparkle } from "@/components/illustrations/Doodles";

const items = Array.from(new Set(skillGroups.flatMap((g) => g.skills)));

export function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((s) => (
        <li key={s} className="flex items-center gap-6 pr-6 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          {s}
          <Sparkle className="size-5 text-butter" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="relative z-[2] overflow-hidden py-6">
    <div className="-mx-4 -rotate-2 border-y-[3px] border-ink bg-coral py-4 text-ink">
      <p className="sr-only">Technologies I work with: {items.join(", ")}.</p>
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]" aria-hidden="true">
        {row(false)}
        {row(true)}
      </div>
    </div>
    </div>
  );
}
