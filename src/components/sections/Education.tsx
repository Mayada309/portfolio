import { CalendarDays, Gauge, GraduationCap, MapPin, Trophy } from "lucide-react";
import { achievements, education } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { accentBg, accentSoftBg, cn } from "@/lib/accent";
import { Sparkle } from "@/components/illustrations/Doodles";

const ACH_ICONS = [Trophy, Gauge];

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="relative px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="education-title"
          index="05"
          eyebrow="the foundations"
          title={
            <>
              Education &amp; <em className="text-purple">achievements</em>
            </>
          }
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Degree */}
          <Reveal className="lg:col-span-7">
            <article className="relative h-full overflow-hidden rounded-[2rem] border-2 border-ink bg-paper p-6 shadow-pop-lg sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-3 rounded-[1.5rem] border-2 border-dashed border-lavender sm:inset-4"
              />
              <div className="relative">
                <span className="mb-6 grid size-14 place-items-center rounded-2xl border-2 border-ink bg-lavender">
                  <GraduationCap className="size-7" aria-hidden="true" />
                </span>
                <p className="font-hand text-2xl text-coral">Bachelor&apos;s degree</p>
                <h3 className="mt-1 max-w-[18ch] font-display text-[clamp(1.9rem,4.5vw,2.9rem)] font-semibold leading-[1.02] tracking-tight text-balance">
                  {education.degree}
                </h3>
                <p className="mt-4 text-xl font-semibold">{education.school}</p>
                <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-ink-soft">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="size-4" aria-hidden="true" />
                    {education.start} – {education.end}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-4" aria-hidden="true" />
                    {education.location}
                  </span>
                </p>
              </div>

              {/* GPA stamp */}
              <div className="relative mt-8 flex justify-end sm:absolute sm:bottom-10 sm:right-10 sm:mt-0">
                <div className="grid size-32 rotate-[-10deg] place-items-center rounded-full border-[3px] border-ink bg-butter text-center shadow-pop transition-transform duration-300 hover:rotate-0 hover:scale-105 sm:size-36">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em]">GPA</p>
                    <p className="font-display text-5xl font-bold leading-none tracking-tight">{education.gpa}</p>
                  </div>
                </div>
                <Sparkle className="absolute -right-2 -top-3 size-8 text-coral sm:-right-4" />
              </div>
            </article>
          </Reveal>

          {/* Achievements */}
          <div className="grid grid-cols-1 gap-8 lg:col-span-5">
            {achievements.map((a, i) => {
              const Icon = ACH_ICONS[i % ACH_ICONS.length];
              return (
                <Reveal key={a.title} delay={0.08 * (i + 1)}>
                  <article
                    className={cn(
                      "group relative h-full rounded-[2rem] border-2 border-ink p-6 shadow-pop transition-transform duration-300 hover:-rotate-1 sm:p-8",
                      accentSoftBg[a.accent],
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={cn(
                          "grid size-12 shrink-0 place-items-center rounded-2xl border-2 border-ink transition-transform group-hover:rotate-12",
                          accentBg[a.accent],
                        )}
                      >
                        <Icon className="size-6" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-ink-soft">
                          {a.year} · {a.location}
                        </p>
                        <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight">{a.title}</h3>
                        <p className="mt-0.5 font-semibold">{a.org}</p>
                      </div>
                    </div>
                    <p className="mt-4 leading-relaxed text-ink-soft text-pretty">{a.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
