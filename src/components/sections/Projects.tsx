"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Check, Download } from "lucide-react";
import { profile, projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mockup } from "@/components/mockups/Mockups";
import { accentSoftBg, accentVar, cn } from "@/lib/accent";
import { Sparkle } from "@/components/illustrations/Doodles";

const SIZE: Record<Project["size"], string> = {
  wide: "md:col-span-2",
  tall: "lg:row-span-2",
  normal: "",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const tall = project.size === "tall";
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      tabIndex={0}
      aria-labelledby={`${project.id}-title`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-[1.75rem] border-2 border-ink bg-paper shadow-pop outline-none transition-[translate,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-pop-lg focus-visible:-translate-y-1.5 focus-visible:shadow-pop-lg focus-visible:ring-4 focus-visible:ring-purple/40",
        SIZE[project.size],
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "relative overflow-hidden border-b-2 border-ink",
          tall ? "h-72 lg:h-auto lg:min-h-80 lg:flex-1" : "h-56 sm:h-60",
        )}
        style={{
          backgroundColor: `color-mix(in oklab, ${accentVar[project.accent]} 55%, var(--paper))`,
          backgroundImage:
            "radial-gradient(color-mix(in oklab, var(--ink) 14%, transparent) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      >
        <div className="absolute inset-0 p-4 sm:p-5">
          <Mockup kind={project.mockup} />
        </div>
        <span className="absolute bottom-2 right-3 font-hand text-base text-ink/60">illustration</span>
      </div>

      <div className={cn("flex flex-col p-5 sm:p-6", accentSoftBg[project.accent], !tall && "flex-1")}>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-ink-soft">
          {project.company} · professional work
        </p>
        <h3 id={`${project.id}-title`} className="font-display text-2xl font-semibold leading-tight tracking-tight">
          {project.title}
        </h3>
        <p className="mt-2 leading-relaxed text-ink-soft text-pretty">{project.summary}</p>
        <ul className="mt-4 space-y-1.5 text-[0.95rem]">
          {project.contributions.map((c) => (
            <li key={c} className="flex items-start gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-purple" aria-hidden="true" strokeWidth={3} />
              {c}
            </li>
          ))}
        </ul>
        <ul className="mt-5 flex flex-wrap gap-1.5 pt-1" aria-label="Technologies">
          {project.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border-[1.5px] border-ink bg-paper px-2.5 py-1 text-xs font-bold leading-none"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative border-y-[3px] border-ink bg-butter-soft px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="projects-title"
          index="04"
          eyebrow="selected work"
          title={
            <>
              Things I&apos;ve <em className="text-coral">helped build</em>
            </>
          }
          intro={
            <>
              Professional contributions from my roles at Ilegal Solutions and GameIN. The previews are{" "}
              <span className="mark [--hl:var(--pink)]">illustrations</span>, not product screenshots. Hover
              over them to see them move.
            </>
          }
        />

        <div className="grid grid-flow-dense grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}

          {/* closing card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative flex flex-col justify-between gap-8 overflow-hidden rounded-[1.75rem] border-2 border-ink bg-purple md:col-span-2 lg:col-span-1 p-6 text-white shadow-pop sm:p-8"
          >
            <Sparkle className="absolute -right-4 -top-4 size-24 rotate-12 text-butter" />
            <p className="relative max-w-[16ch] font-display text-3xl font-semibold leading-tight">
              Want the full story behind these?
            </p>
            <div className="relative flex flex-col gap-3">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-ink bg-butter px-5 font-bold text-ink transition-transform hover:-translate-y-0.5"
              >
                Let&apos;s chat <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href={profile.cvPath}
                download
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-white/80 px-5 font-bold transition-colors hover:bg-white/10"
              >
                <Download className="size-4" aria-hidden="true" /> Grab my CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
