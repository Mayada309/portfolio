import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { WatchingCat } from "@/components/illustrations/WatchingCat";
import { Blob, MusicNote, Sparkle, Underline, Heart } from "@/components/illustrations/Doodles";

function SpinningBadge() {
  const text = "FRONTEND DEV ✦ CAT PERSON ✦ VIOLINIST ✦ ";
  return (
    <div className="relative grid size-28 place-items-center rounded-full border-2 border-ink bg-butter shadow-pop sm:size-32">
      <svg viewBox="0 0 120 120" className="absolute inset-0 size-full animate-spin-slow" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0" />
        </defs>
        <text className="fill-ink font-sans text-[10.5px] font-bold tracking-[0.18em]">
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <Heart className="size-8 text-coral" />
    </div>
  );
}

function PortraitPlaceholder() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_30%_25%,var(--butter-soft),transparent_45%),radial-gradient(circle_at_75%_70%,var(--pink-soft),transparent_50%),var(--lavender-soft)]">
      {/* concentric rings */}
      <div className="absolute left-1/2 top-[44%] size-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-lavender" />
      <div className="absolute left-1/2 top-[44%] size-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-lavender" />
      {/* round photo: same spot and size as the old coral "MS" circle */}
      <div className="absolute left-1/2 top-[44%] size-[52%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[3px] border-ink bg-coral/80 shadow-[0_0_0_6px_var(--coral)]">
        <Image
          src={profile.photo.src}
          alt={profile.photo.alt}
          fill
          preload
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 210px, 50vw"
          className="object-cover"
        />
      </div>
      {/* a tiny code window */}
      <div className="absolute bottom-[12%] right-[8%] w-[46%] -rotate-3 rounded-xl border-2 border-ink bg-paper p-2 shadow-pop">
        <div className="mb-1.5 flex gap-1">
          <span className="size-2 rounded-full bg-coral" />
          <span className="size-2 rounded-full bg-butter" />
          <span className="size-2 rounded-full bg-mint" />
        </div>
        <p className="font-mono text-[0.6rem] leading-relaxed sm:text-[0.68rem]">
          <span className="text-purple">const</span> me = {"{"}
          <br />
          &nbsp;&nbsp;loves: <span className="text-coral-text">&quot;🐈 🎻&quot;</span>
          <br />
          {"}"}
          <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 animate-blink bg-ink" />
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      tabIndex={-1}
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden px-5 pb-16 pt-28 outline-none sm:px-8 sm:pt-32 lg:min-h-[100svh] lg:pb-24 lg:pt-36"
    >
      {/* Background shapes */}
      <Blob className="absolute -right-40 -top-32 -z-10 size-[34rem] text-lavender/50 sm:-right-24" />
      <Blob className="absolute -bottom-40 -left-44 -z-10 size-[28rem] rotate-90 text-butter/60" />
      <div className="bg-dots absolute inset-x-0 top-0 -z-10 h-full [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
        {/* Copy */}
        <div className="lg:col-span-7">
          <p className="hero-rise mb-3 font-hand text-[1.7rem] leading-none text-purple sm:text-3xl">
            Hi there, I&apos;m{" "}
            <span className="hero-wave inline-block origin-[70%_70%]" aria-hidden="true">
              👋
            </span>
          </p>

          <h1 id="hero-title" className="font-display font-semibold leading-[0.88] tracking-[-0.045em]">
            <span className="hero-slide block [--d:0.08s] text-[clamp(3.6rem,13vw,8.5rem)]">
              Mayada
            </span>
            <span
              className="hero-slide relative inline-block [--d:0.16s] font-display-italic text-[clamp(3.6rem,13vw,8.5rem)] italic text-coral-display"
            >
              Shaaban
              <Underline className="absolute -bottom-2 left-0 h-4 w-full text-butter sm:-bottom-3 sm:h-5" />
            </span>
          </h1>

          <p
            className="hero-rise mt-8 [--d:0.26s] max-w-xl font-display text-[clamp(1.35rem,3.2vw,2rem)] font-medium leading-tight tracking-tight text-balance"
          >
            Frontend Developer <span className="font-hand text-[1.2em] text-purple">&amp;</span>{" "}
            <span className="mark [--hl:var(--mint)]">Creative Problem Solver</span>
          </p>

          <p className="hero-slide mt-5 [--d:0.34s] max-w-xl text-[1.06rem] leading-relaxed text-ink-soft text-pretty sm:text-lg">
            {profile.intro}
          </p>

          <div className="hero-rise mt-9 [--d:0.42s] flex flex-col gap-3 xs:flex-row xs:flex-wrap">
            <a
              href="#projects"
              className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border-2 border-ink bg-purple px-7 py-3.5 font-bold text-white shadow-pop transition-all hover:-translate-y-0.5 hover:shadow-pop-lg active:translate-y-0 active:shadow-none"
            >
              Explore my work
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
            <a
              href={profile.cvPath}
              download
              className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border-2 border-ink bg-paper px-7 py-3.5 font-bold shadow-pop transition-all hover:-translate-y-0.5 hover:bg-butter hover:shadow-pop-lg active:translate-y-0 active:shadow-none"
            >
              <Download className="size-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
              Download CV
            </a>
          </div>

          <a
            href={profile.currently.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-rise mt-8 inline-flex max-w-full [--d:0.5s] items-center gap-2.5 rounded-3xl border-[1.5px] border-dashed border-ink/50 px-4 py-2 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
          >
            <span className="relative flex size-2.5 shrink-0">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint opacity-80" />
              <span className="relative inline-flex size-2.5 rounded-full border border-ink bg-mint" />
            </span>
            <span className="min-w-0">
              Currently {profile.currently.role} at{" "}
              <strong className="whitespace-nowrap text-ink">{profile.currently.company}</strong>
            </span>
          </a>
        </div>

        {/* Portrait composition */}
        <div
          className="hero-pop relative mx-auto w-full max-w-[22rem] sm:max-w-[25rem] lg:col-span-5 lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] border-[3px] border-ink bg-lavender-soft shadow-pop-lg">
            {profile.portrait ? (
              <Image
                src={profile.portrait.src}
                alt={profile.portrait.alt}
                fill
                preload
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 400px, 90vw"
                className="object-cover"
              />
            ) : (
              <PortraitPlaceholder />
            )}
          </div>

          {/* The cat */}
          <div className="absolute -bottom-6 -left-6 w-[42%] sm:-left-10 sm:w-[40%]">
            <WatchingCat />
            <p className="pointer-events-none absolute -bottom-8 left-[72%] rotate-[-6deg] whitespace-nowrap font-hand text-xl leading-none text-purple">
              ← pet me!
            </p>
          </div>

          {/* Stickers */}
          <div className="absolute -right-3 -top-3 sm:-right-8 sm:-top-4">
            <SpinningBadge />
          </div>
          <span
            className="absolute -left-4 top-[18%] animate-float rounded-xl border-2 border-ink bg-mint px-3 py-1.5 font-mono text-sm font-bold shadow-pop [--r:-8deg] sm:-left-10"
            aria-hidden="true"
          >
            &lt;/&gt;
          </span>
          <MusicNote
            className="absolute -right-4 top-[46%] size-12 animate-float-slow text-pink [--r:10deg] sm:-right-10 sm:size-14"
          />
          <Sparkle className="absolute right-[18%] -bottom-6 size-10 animate-float text-butter [--r:0deg]" />
          <Sparkle className="absolute left-[12%] -top-5 size-7 animate-float-slow text-coral" />
        </div>
      </div>
    </section>
  );
}
