"use client";

import { useState } from "react";
import { Check, Copy, Mail, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Heart, Sparkle, Paw } from "@/components/illustrations/Doodles";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const socials = [
    { label: "LinkedIn", href: profile.linkedin, Icon: LinkedinIcon, bg: "bg-sky" },
    { label: "GitHub", href: profile.github, Icon: GithubIcon, bg: "bg-mint" },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative px-4 py-24 sm:px-8 md:py-32">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border-[3px] border-ink bg-purple px-5 py-14 text-white shadow-pop-lg sm:rounded-[3rem] sm:px-12 sm:py-20 lg:px-20">
          {/* decorations */}
          <div aria-hidden="true">
            <div className="absolute -right-24 -top-24 size-72 rounded-full bg-purple-deep" />
            <div className="absolute -bottom-32 -left-16 size-80 rounded-full bg-[color-mix(in_oklab,var(--purple)_70%,var(--pink))]" />
            <Sparkle className="absolute right-[8%] top-[14%] size-12 animate-float text-butter" />
            <Heart className="absolute bottom-[12%] right-[30%] hidden size-10 animate-float-slow text-pink [--r:-12deg] md:block" />
            <Paw className="absolute bottom-[8%] right-[6%] hidden size-9 rotate-[-20deg] text-mint sm:block" />
          </div>

          <div className="relative grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="mb-4 font-hand text-3xl text-butter">say hello!</p>
              <h2
                id="contact-title"
                className="font-display text-[clamp(2.5rem,7vw,5.2rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-balance"
              >
                Let&apos;s build something <em className="text-butter">delightful</em> together.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/85 text-pretty">
                Whether it&apos;s a frontend role, a tricky interface problem or a project that needs equal parts
                engineering and imagination, my inbox is open. Cat photos are also accepted.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-5">
              <a
                href={`mailto:${profile.email}`}
                className="group flex min-h-16 items-center gap-4 rounded-2xl border-2 border-ink bg-butter p-3 pr-5 text-ink shadow-pop transition-transform hover:-translate-y-1"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl border-2 border-ink bg-paper">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold uppercase tracking-wider text-ink-soft">Email me</span>
                  <span className="block break-words text-sm font-semibold leading-snug xs:text-base sm:text-lg">
                    {profile.email.split("@")[0]}
                    <wbr />@{profile.email.split("@")[1]}
                  </span>
                </span>
                <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={copy}
                className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full border-2 border-white/70 px-4 text-sm font-bold transition-colors hover:bg-white/10"
              >
                {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
                <span aria-live="polite">{copied ? "Copied! Talk soon" : "Copy email address"}</span>
              </button>

              <div className="grid grid-cols-2 gap-4">
                {socials.map(({ label, href, Icon, bg }, i) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 border-ink ${bg} px-3 sm:gap-2.5 sm:px-4 font-bold text-ink shadow-pop transition-transform hover:-translate-y-1 ${i === 0 ? "hover:-rotate-2" : "hover:rotate-2"}`}
                  >
                    <Icon className="size-5 shrink-0" />
                    {label}
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
