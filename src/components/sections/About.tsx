import { Code2, Sparkles } from "lucide-react";
import { developerSide, developerValues, hobbies } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Polaroid } from "@/components/ui/Polaroid";
import { Heart, MusicNote, Paw, Sparkle } from "@/components/illustrations/Doodles";

const byId = Object.fromEntries(hobbies.map((h) => [h.id, h]));

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="about-title"
          index="03"
          eyebrow="a little more about me"
          title={
            <>
              Two sides, one <em className="text-purple">very curious</em> person.
            </>
          }
        />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Developer side — notebook page */}
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <span className="tape -top-3 left-10 rotate-[-6deg] [--tape:var(--mint)]" aria-hidden="true" />
              <article className="bg-lined relative -rotate-1 rounded-2xl border-2 border-ink py-8 pl-14 pr-6 shadow-pop-lg sm:pr-8">
                <header className="mb-5 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full border-2 border-ink bg-lavender">
                    <Code2 className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">The developer side</h3>
                </header>
                <div className="space-y-4 text-[1.02rem] leading-8 text-ink-soft">
                  {developerSide.map((p) => (
                    <p key={p.slice(0, 24)} className="text-pretty">
                      {p}
                    </p>
                  ))}
                </div>
                <ul className="mt-6 space-y-2.5">
                  {developerValues.map((v) => (
                    <li key={v.label} className="flex flex-wrap items-baseline gap-x-2">
                      <Sparkles className="size-4 shrink-0 translate-y-0.5 text-purple" aria-hidden="true" />
                      <strong className="font-semibold text-ink">{v.label}</strong>
                      <span className="font-hand text-xl leading-none text-ink-soft">{v.note}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </Reveal>

          {/* Human side — scrapbook */}
          <div className="relative lg:col-span-7">
            <Reveal>
              <h3 className="mb-8 flex flex-wrap items-center gap-3 font-display text-2xl font-semibold tracking-tight">
                <span className="grid size-10 place-items-center rounded-full border-2 border-ink bg-pink">
                  <Heart className="size-5 text-paper" />
                </span>
                The human side
                <span className="font-hand text-2xl font-normal text-coral-text">(the fun part)</span>
              </h3>
            </Reveal>

            <div className="grid grid-cols-2 items-start gap-x-4 gap-y-8 sm:grid-cols-6 sm:gap-x-6 sm:gap-y-10">
              <Polaroid
                hobby={byId.cats}
                aspect="aspect-[4/5]"
                rotate={-3}
                sizes="(min-width: 1024px) 26vw, (min-width: 640px) 45vw, 46vw"
                className="sm:col-span-3 sm:row-span-2"
              />
              <Polaroid
                hobby={byId.aerial}
                aspect="aspect-[3/2]"
                rotate={3}
                delay={0.08}
                sizes="(min-width: 1024px) 26vw, (min-width: 640px) 45vw, 46vw"
                className="sm:col-span-3"
              />
              <Polaroid
                hobby={byId.violin}
                aspect="aspect-[3/2]"
                rotate={-2}
                delay={0.12}
                sizes="(min-width: 1024px) 26vw, (min-width: 640px) 45vw, 92vw"
                className="col-span-2 sm:col-span-3"
              />

              {/* Sticky note */}
              <Reveal className="col-span-2 sm:col-span-2" delay={0.1}>
                <div className="relative h-full rotate-2 rounded-sm bg-butter p-5 shadow-[0_14px_30px_-12px_rgb(43_32_66/0.35)]">
                  <span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-3 [--tape:var(--pink)]" aria-hidden="true" />
                  <p className="font-hand text-2xl leading-tight">Things that make me happy:</p>
                  <ul className="mt-3 space-y-1.5 font-hand text-xl leading-tight">
                    <li className="flex items-center gap-2">
                      <Paw className="size-5 shrink-0 text-pink" /> cats, all of them
                    </li>
                    <li className="flex items-center gap-2">
                      <MusicNote className="size-5 shrink-0 text-lavender" /> a well-tuned violin
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkle className="size-5 shrink-0 text-mint" /> being upside down on silks
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="size-5 shrink-0 text-coral" /> picking up a new creative hobby
                    </li>
                  </ul>
                </div>
              </Reveal>
              <Polaroid
                hobby={byId["cat-nap"]}
                aspect="aspect-square"
                rotate={-4}
                delay={0.14}
                sizes="(min-width: 1024px) 17vw, (min-width: 640px) 30vw, 46vw"
                className="sm:col-span-2"
              />
              <Polaroid
                hobby={byId["cat-ginger"]}
                aspect="aspect-square"
                rotate={4}
                delay={0.18}
                sizes="(min-width: 1024px) 17vw, (min-width: 640px) 30vw, 46vw"
                className="sm:col-span-2"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
