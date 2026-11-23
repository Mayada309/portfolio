"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { Mic, MessageSquareText, Minus, Plus, ShieldCheck, Sparkles } from "lucide-react";
import type { MockupKind } from "@/data/portfolio";
import { cn } from "@/lib/accent";

/*
 * Abstract, illustrated previews of the kind of UI each project involved.
 * These are NOT product screenshots — every mockup is decorative (aria-hidden by the caller).
 * Most animate on hover/focus of the parent `.group` card.
 */

const Line = ({ w, className }: { w: string; className?: string }) => (
  <span className={cn("block h-2 rounded-full bg-ink/15", className)} style={{ width: w }} />
);

function Window({ children, className, title }: { children: React.ReactNode; className?: string; title?: string }) {
  return (
    <div className={cn("rounded-xl border-2 border-ink bg-paper shadow-pop", className)}>
      <div className="flex items-center gap-1.5 border-b-2 border-ink px-2.5 py-1.5">
        <span className="size-2 rounded-full bg-coral" />
        <span className="size-2 rounded-full bg-butter" />
        <span className="size-2 rounded-full bg-mint" />
        {title ? <span className="ml-1.5 truncate text-[0.65rem] font-bold uppercase tracking-wider">{title}</span> : null}
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

function Portals() {
  const roles = [
    { t: "Super Admin", c: "bg-lavender", cls: "group-hover:-translate-x-[38%] group-hover:-rotate-6" },
    { t: "Tenant", c: "bg-butter", cls: "group-hover:translate-y-[-4%]" },
    { t: "Lawyer", c: "bg-mint", cls: "group-hover:translate-x-[38%] group-hover:rotate-6" },
  ];
  return (
    <div className="relative grid h-full place-items-center">
      {roles.map((r, i) => (
        <Window
          key={r.t}
          title={r.t}
          className={cn(
            "absolute w-[52%] max-w-64 transition-transform duration-500 ease-out",
            i === 0 && "-translate-x-[14%] -rotate-3",
            i === 1 && "z-10",
            i === 2 && "translate-x-[14%] rotate-3",
            r.cls,
          )}
        >
          <span className={cn("mb-2 inline-flex items-center gap-1 rounded-full border-[1.5px] border-ink px-2 py-0.5 text-[0.6rem] font-bold", r.c)}>
            <ShieldCheck className="size-3" /> role: {r.t.toLowerCase()}
          </span>
          <div className="space-y-1.5">
            <Line w="90%" />
            <Line w="70%" />
            <Line w="80%" />
          </div>
        </Window>
      ))}
    </div>
  );
}

const STREAM = "Here's a short summary of the key clauses, with the sections that need a closer look…";

function Chat() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px" });
  const reduce = useReducedMotion();
  // Start with the full message so server and client render identical HTML;
  // the typing loop only kicks in on the client when motion is allowed.
  const [n, setN] = useState(STREAM.length);

  useEffect(() => {
    if (!inView || reduce) return;
    const id = setInterval(() => setN((v) => (v >= STREAM.length + 30 ? 0 : v + 1)), 45);
    return () => clearInterval(id);
  }, [inView, reduce]);

  const shown = STREAM.slice(0, Math.min(n, STREAM.length));
  const streaming = n < STREAM.length;

  return (
    <div ref={ref} className="flex h-full flex-col justify-end gap-3 p-1">
      <div className="ml-auto max-w-[78%] rounded-2xl rounded-br-sm border-2 border-ink bg-purple px-3.5 py-2 text-sm font-medium text-white">
        Can you summarise this contract?
      </div>
      <div className="flex max-w-[88%] gap-2">
        <span className="grid size-8 shrink-0 place-items-center rounded-full border-2 border-ink bg-butter">
          <Sparkles className="size-4" />
        </span>
        <div className="min-h-[4.5rem] rounded-2xl rounded-tl-sm border-2 border-ink bg-paper px-3.5 py-2 text-sm leading-relaxed">
          {shown}
          {streaming ? <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 animate-blink bg-ink" /> : null}
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-full border-2 border-ink bg-paper py-1.5 pl-4 pr-1.5 text-xs text-ink-soft">
        <span className="flex-1 truncate">Ask about this document…</span>
        <span className="grid size-7 place-items-center rounded-full border-2 border-ink bg-mint text-ink">↑</span>
      </div>
    </div>
  );
}

function Pages() {
  return (
    <div className="relative grid h-full place-items-center">
      <div className="absolute left-1/2 top-2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border-2 border-ink bg-paper px-2 py-1 text-[0.65rem] font-bold shadow-pop">
        <Minus className="size-3" /> 100% <Plus className="size-3" />
        <span className="mx-1 h-3 w-px bg-ink/30" /> 3 / 12
      </div>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            "absolute mt-8 h-[72%] w-[38%] max-w-40 rounded-md border-2 border-ink bg-paper p-3 shadow-pop transition-transform duration-500",
            i === 0 && "-translate-x-[30%] -rotate-6 group-hover:-translate-x-[85%] group-hover:-rotate-12",
            i === 1 && "z-10",
            i === 2 && "translate-x-[30%] rotate-6 group-hover:translate-x-[85%] group-hover:rotate-12",
          )}
        >
          <Line w="60%" className="mb-2 h-2.5 bg-ink/30" />
          <div className="space-y-1.5">
            {["95%", "88%", "92%", "70%", "90%", "84%", "60%"].map((w, k) => (
              <Line key={k} w={w} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Comments() {
  return (
    <div className="relative h-full p-1">
      <Window className="h-full">
        <div className="mb-3 flex gap-1">
          {["B", "I", "U", "H1", "🖼"].map((b) => (
            <span key={b} className="grid h-6 min-w-6 place-items-center rounded border-[1.5px] border-ink bg-butter-soft px-1 text-[0.6rem] font-bold">
              {b}
            </span>
          ))}
        </div>
        <div className="space-y-2">
          <Line w="92%" />
          <p className="text-[0.7rem] leading-none text-ink/50">
            The parties agree that{" "}
            <span className="rounded-sm bg-pink/70 px-0.5 text-ink transition-colors group-hover:bg-pink">all notices</span> shall be…
          </p>
          <Line w="85%" />
          <Line w="64%" />
        </div>
      </Window>
      <div className="absolute bottom-3 right-3 w-[55%] translate-y-2 rotate-2 rounded-xl border-2 border-ink bg-paper p-2.5 opacity-90 shadow-pop transition-all duration-500 group-hover:translate-y-0 group-hover:rotate-0 group-hover:opacity-100">
        <p className="mb-1 flex items-center gap-1.5 text-[0.65rem] font-bold">
          <MessageSquareText className="size-3.5 text-purple" /> Comment
        </p>
        <Line w="90%" className="mb-1" />
        <Line w="55%" />
      </div>
    </div>
  );
}

function Pii() {
  const rows = [
    ["Party A:", "40%"],
    ["Address:", "62%"],
    ["ID no.:", "34%"],
    ["Email:", "50%"],
  ] as const;
  return (
    <div className="grid h-full place-items-center p-1">
      <Window className="w-full max-w-72" title="contract.pdf">
        <div className="space-y-2.5">
          {rows.map(([label, w]) => (
            <div key={label} className="flex items-center gap-2 text-[0.7rem] font-semibold">
              <span className="w-14 shrink-0">{label}</span>
              <span className="relative h-3 overflow-hidden rounded-sm bg-coral/25" style={{ width: w }}>
                <span className="absolute inset-0 origin-left scale-x-100 bg-ink transition-transform duration-500 group-hover:scale-x-0" />
              </span>
            </div>
          ))}
          <Line w="88%" />
          <Line w="72%" />
        </div>
        <span className="mt-3 inline-flex items-center gap-1 rounded-full border-[1.5px] border-ink bg-mint px-2 py-0.5 text-[0.6rem] font-bold">
          <ShieldCheck className="size-3" /> 4 items masked
        </span>
      </Window>
    </div>
  );
}

function Unity() {
  return (
    <div className="flex h-full items-center justify-center gap-6 p-2 sm:gap-10">
      <div className="[perspective:600px]">
        <div className="relative size-20 animate-[cube_9s_linear_infinite] [transform-style:preserve-3d] [transform:rotateX(-22deg)_rotateY(38deg)] group-hover:[animation-duration:3s] sm:size-24">
          {[
            "bg-lavender [transform:translateZ(var(--h))]",
            "bg-coral [transform:rotateY(180deg)_translateZ(var(--h))]",
            "bg-butter [transform:rotateY(90deg)_translateZ(var(--h))]",
            "bg-mint [transform:rotateY(-90deg)_translateZ(var(--h))]",
            "bg-pink [transform:rotateX(90deg)_translateZ(var(--h))]",
            "bg-sky [transform:rotateX(-90deg)_translateZ(var(--h))]",
          ].map((c) => (
            <span key={c} className={cn("absolute inset-0 rounded-lg border-2 border-ink [--h:2.5rem] sm:[--h:3rem]", c)} />
          ))}
        </div>
      </div>
      <div className="w-[48%] max-w-52 space-y-3">
        <div className="rounded-xl border-2 border-ink bg-paper p-2.5 shadow-pop">
          <p className="mb-1.5 text-[0.65rem] font-bold">Loading 3D scene…</p>
          <div className="h-2.5 overflow-hidden rounded-full border-[1.5px] border-ink bg-ink/5">
            <span className="block h-full w-[45%] rounded-full bg-purple transition-[width] duration-700 group-hover:w-[100%]" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-1 rounded-full border-2 border-ink bg-butter px-3 py-1 text-[0.65rem] font-bold">
          <span>React</span>
          <span className="animate-pulse">⇄</span>
          <span>Unity</span>
        </div>
      </div>
      <style>{`@keyframes cube{from{transform:rotateX(-22deg) rotateY(0)}to{transform:rotateX(-22deg) rotateY(360deg)}}`}</style>
    </div>
  );
}

function Avatar() {
  return (
    <div className="flex h-full items-center justify-center gap-6 p-2">
      <div className="relative">
        <div className="relative grid size-24 place-items-center rounded-[45%_55%_50%_50%] border-[3px] border-ink bg-butter sm:size-28">
          <div className="absolute top-[38%] flex gap-5">
            <span className="h-3.5 w-3 rounded-full bg-ink transition-transform group-hover:scale-y-[0.2]" />
            <span className="h-3.5 w-3 rounded-full bg-ink transition-transform group-hover:scale-y-[0.2]" />
          </div>
          <span className="absolute top-[64%] h-2.5 w-7 origin-top rounded-b-full border-2 border-t-0 border-ink bg-coral animate-[talk_0.5s_ease-in-out_infinite_alternate]" />
          <span className="absolute left-3 top-[58%] h-2 w-3.5 rounded-full bg-pink" />
          <span className="absolute right-3 top-[58%] h-2 w-3.5 rounded-full bg-pink" />
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex h-10 items-end gap-1">
          {[0.3, 0.7, 0.45, 1, 0.6, 0.85, 0.4, 0.7, 0.5].map((h, i) => (
            <span
              key={i}
              className="w-1.5 origin-bottom rounded-full bg-purple animate-[wave_0.9s_ease-in-out_infinite_alternate]"
              style={{ height: `${h * 100}%`, animationDelay: `${i * 0.08}s` }}
            />
          ))}
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-paper px-3 py-1 text-[0.65rem] font-bold shadow-pop">
          <Mic className="size-3.5 text-coral" /> Listening…
        </span>
      </div>
      <style>{`@keyframes talk{from{transform:scaleY(.35)}to{transform:scaleY(1.2)}}@keyframes wave{from{transform:scaleY(.3)}to{transform:scaleY(1)}}`}</style>
    </div>
  );
}

const MAP: Record<MockupKind, () => React.JSX.Element> = {
  portals: Portals,
  chat: Chat,
  pages: Pages,
  comments: Comments,
  pii: Pii,
  unity: Unity,
  avatar: Avatar,
};

export function Mockup({ kind }: { kind: MockupKind }) {
  const C = MAP[kind];
  return <C />;
}
