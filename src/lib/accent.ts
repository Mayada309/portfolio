import type { Accent } from "@/data/portfolio";

/** Static class maps so Tailwind can see every class at build time. */
export const accentBg: Record<Accent, string> = {
  purple: "bg-purple text-white",
  coral: "bg-coral",
  butter: "bg-butter",
  mint: "bg-mint",
  pink: "bg-pink",
  lavender: "bg-lavender",
  sky: "bg-sky",
};

export const accentSoftBg: Record<Accent, string> = {
  purple: "bg-lavender-soft",
  coral: "bg-coral-soft",
  butter: "bg-butter-soft",
  mint: "bg-mint-soft",
  pink: "bg-pink-soft",
  lavender: "bg-lavender-soft",
  sky: "bg-[color-mix(in_oklab,var(--sky)_35%,var(--paper))]",
};

export const accentVar: Record<Accent, string> = {
  purple: "var(--purple)",
  coral: "var(--coral)",
  butter: "var(--butter)",
  mint: "var(--mint)",
  pink: "var(--pink)",
  lavender: "var(--lavender)",
  sky: "var(--sky)",
};

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
