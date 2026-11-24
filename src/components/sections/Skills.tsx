"use client";

import * as m from "motion/react-m";
import { Box, Braces, FileText, LayoutTemplate, Wrench, type LucideIcon } from "lucide-react";
import { skillGroups, type SkillIcon } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { accentBg, accentSoftBg, cn } from "@/lib/accent";

const ICONS: Record<SkillIcon, LucideIcon> = {
  frontend: LayoutTemplate,
  languages: Braces,
  ai: FileText,
  graphics: Box,
  tools: Wrench,
};

/* Bento placement + organic corner shapes per card (lg+). */
const LAYOUT: Record<string, string> = {
  frontend: "md:col-span-2 lg:col-span-4 rounded-[2.5rem_1.25rem_2.5rem_1.25rem]",
  "ai-docs": "lg:col-span-2 rounded-[1.25rem_2.5rem_1.25rem_2.5rem]",
  "3d": "lg:col-span-2 rounded-[2.5rem_2.5rem_1.25rem_2.5rem]",
  tools: "lg:col-span-2 rounded-[1.25rem_2.5rem_2.5rem_2.5rem]",
  languages: "lg:col-span-2 rounded-[2.5rem_1.25rem_2.5rem_2.5rem]",
};

const TILTS = [-3, 2, -1.5, 3, -2.5, 1.5];

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative overflow-hidden border-y-[3px] border-ink bg-lavender-soft px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          id="skills-title"
          index="01"
          eyebrow="my toolbox"
          title={
            <>
              Skills &amp; <em className="text-coral-display">technologies</em>
            </>
          }
          intro="The tools I reach for, grouped by the kind of problem they solve. Hover around, they like the attention."
        />

        <div className="grid grid-flow-dense grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6 lg:gap-7">
          {skillGroups.map((group, gi) => {
            const Icon = ICONS[group.icon];
            const big = group.id === "frontend";
            return (
              <m.article
                key={group.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.7, delay: gi * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-[2rem] border-2 border-ink p-6 shadow-pop transition-shadow duration-300 hover:shadow-pop-lg sm:p-8",
                  accentSoftBg[group.accent],
                  LAYOUT[group.id],
                )}
              >
                <Icon
                  className="pointer-events-none absolute -bottom-6 -right-6 size-36 rotate-12 text-ink/[0.06] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110"
                  aria-hidden="true"
                />
                <div className="mb-5 flex items-center gap-4">
                  <span
                    className={cn(
                      "grid size-12 shrink-0 place-items-center rounded-2xl border-2 border-ink transition-transform duration-300 group-hover:-rotate-6",
                      accentBg[group.accent],
                    )}
                  >
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight sm:text-[1.7rem]">
                      {group.title}
                    </h3>
                    <p className="font-hand text-xl leading-tight text-ink-soft">{group.blurb}</p>
                  </div>
                </div>

                <ul className={cn("relative flex flex-wrap gap-2.5", big && "lg:gap-3")} aria-label={`${group.title} skills`}>
                  {group.skills.map((skill, i) => (
                    <m.li
                      key={skill}
                      whileHover={{ rotate: TILTS[i % TILTS.length], y: -4, scale: 1.06 }}
                      transition={{ type: "spring", stiffness: 400, damping: 14 }}
                      className={cn(
                        "cursor-default select-none rounded-full border-2 border-ink bg-paper px-4 py-2 font-semibold leading-none transition-colors hover:bg-butter",
                        big ? "text-base lg:px-5 lg:py-3 lg:text-xl" : "text-[0.92rem]",
                      )}
                    >
                      {skill}
                    </m.li>
                  ))}
                </ul>
                {group.note ? (
                  <p className="relative mt-6 max-w-md pt-2 font-hand text-2xl leading-snug text-purple lg:mt-auto">
                    ↳ {group.note}
                  </p>
                ) : null}
              </m.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
