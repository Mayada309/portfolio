"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Briefcase, CalendarDays, ChevronDown, GraduationCap, MapPin } from "lucide-react";
import { education, experience, type Role } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { accentBg, accentVar, cn } from "@/lib/accent";

const VISIBLE = 3;

function RoleCard({ role, index }: { role: Role; index: number }) {
  const [open, setOpen] = useState(false);
  const listId = useId();
  const shown = role.highlights.slice(0, VISIBLE);
  const rest = role.highlights.slice(VISIBLE);
  const current = role.end === "Present";

  return (
    <li className="relative pl-12 sm:pl-24">
      {/* Timeline node */}
      <span
        className={cn(
          "absolute left-0 top-2 grid size-9 place-items-center rounded-full border-[3px] border-ink font-display text-base font-bold sm:left-4 sm:size-14 sm:text-xl",
          accentBg[role.accent],
        )}
        aria-hidden="true"
      >
        {role.company.charAt(0)}
      </span>

      <Reveal delay={index * 0.05}>
        <article
          className="relative overflow-hidden rounded-[1.75rem] border-2 border-ink bg-paper shadow-pop transition-shadow duration-300 hover:shadow-pop-lg"
        >
          {/* Ticket header */}
          <header
            className="relative border-b-2 border-dashed border-ink/70 px-4 pb-5 pt-5 sm:px-8 sm:pt-6"
            style={{ backgroundColor: `color-mix(in oklab, ${accentVar[role.accent]} 16%, var(--paper))` }}
          >
            <p className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold text-ink-soft">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-4" aria-hidden="true" />
                <time>{role.start}</time> – <time>{role.end}</time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4" aria-hidden="true" />
                {role.location}
              </span>
              {current ? (
                <span className="ml-auto rotate-6 rounded-full border-2 border-ink bg-mint px-3 py-1 font-hand text-lg leading-none text-ink">
                  now!
                </span>
              ) : null}
            </p>
            <h3 className="font-display text-[clamp(1.6rem,4vw,2.25rem)] font-semibold leading-tight tracking-tight">
              <a
                href={role.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 decoration-coral decoration-[3px] underline-offset-4 hover:underline"
              >
                {role.company}
                <ArrowUpRight
                  className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </h3>
            <p className="mt-1 inline-flex items-center gap-2 font-semibold">
              <Briefcase className="size-4 text-purple" aria-hidden="true" />
              {role.title}
              <span className="font-normal text-ink-soft">· {role.type}</span>
            </p>
          </header>

          <div className="px-4 py-6 sm:px-8">
            <p className="text-lg leading-relaxed text-pretty">{role.overview}</p>

            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Main technologies">
              {role.stack.map((s) => (
                <li key={s}>
                  <Tag>{s}</Tag>
                </li>
              ))}
            </ul>

            <ul id={listId} className="mt-6 space-y-3.5">
              {shown.map((h) => (
                <Highlight key={h} text={h} accent={accentVar[role.accent]} />
              ))}
              <AnimatePresence initial={false}>
                {open
                  ? rest.map((h, i) => (
                      <motion.li
                        key={h}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.04 }}
                        className="overflow-hidden"
                      >
                        <HighlightBody text={h} accent={accentVar[role.accent]} />
                      </motion.li>
                    ))
                  : null}
              </AnimatePresence>
            </ul>

            {rest.length > 0 ? (
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-controls={listId}
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-ink bg-butter-soft px-4 font-semibold transition-colors hover:bg-butter"
              >
                {open ? "Show less" : `Show ${rest.length} more`}
                <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} aria-hidden="true" />
              </button>
            ) : null}
          </div>
        </article>
      </Reveal>
    </li>
  );
}

function HighlightBody({ text, accent }: { text: string; accent: string }) {
  return (
    <div className="flex gap-3 pb-0.5 leading-relaxed text-ink-soft">
      <span
        className="mt-2 size-2.5 shrink-0 rotate-45 rounded-[3px] border-[1.5px] border-ink"
        style={{ backgroundColor: accent }}
        aria-hidden="true"
      />
      <span className="text-pretty">{text}</span>
    </div>
  );
}

function Highlight({ text, accent }: { text: string; accent: string }) {
  return (
    <li>
      <HighlightBody text={text} accent={accent} />
    </li>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="relative px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          id="experience-title"
          index="03"
          eyebrow="where I've been building"
          title={
            <>
              Professional <em className="text-purple">experience</em>
            </>
          }
          intro="Two roles, from 3D on the web to AI-powered legal tools. The key points are visible, and you can expand each role for more."
        />

        <ol className="relative space-y-12">
          {/* the squiggly rail */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-[16.5px] top-4 w-[3px] sm:left-[43px]"
            style={{
              backgroundImage: "linear-gradient(to bottom, var(--ink) 55%, transparent 55%)",
              backgroundSize: "3px 14px",
            }}
          />
          {experience.map((role, i) => (
            <RoleCard key={role.company} role={role} index={i} />
          ))}
          <li className="relative pl-12 sm:pl-24">
            <span
              className="absolute left-0 top-0 grid size-9 place-items-center rounded-full border-[3px] border-ink bg-butter sm:left-4 sm:size-14"
              aria-hidden="true"
            >
              <GraduationCap className="size-4 sm:size-6" />
            </span>
            <Reveal>
              <p className="pt-2 font-hand text-2xl leading-snug text-ink-soft sm:pt-3">
                Before that: {education.degree}, {education.school} ({education.start.slice(-4)}–
                {education.end.slice(-4)}).{" "}
                <a href="#education" className="text-purple underline decoration-wavy underline-offset-4">
                  more below ↓
                </a>
              </p>
            </Reveal>
          </li>
        </ol>
      </div>
    </section>
  );
}
