"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";
import { useActiveSection } from "@/lib/useActiveSection";
import { cn } from "@/lib/accent";
import { Paw } from "@/components/illustrations/Doodles";

const SECTION_IDS = ["home", ...navItems.map((n) => n.id)] as const;
const MOBILE_COLORS = ["bg-lavender", "bg-coral", "bg-butter", "bg-mint", "bg-pink", "bg-sky"];

export function Navbar() {
  const active = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const trigger = menuButton.current;
    document.body.style.overflow = "hidden";
    firstLink.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onMq);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      trigger?.focus();
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border-2 border-ink bg-paper/90 py-2 pl-3 pr-2 backdrop-blur-md transition-shadow duration-300 sm:pl-4",
          scrolled ? "shadow-pop" : "shadow-none",
        )}
      >
        <a
          href="#home"
          className="group flex min-h-11 items-center gap-2 rounded-full pr-2 font-display text-xl font-semibold tracking-tight"
        >
          <Paw className="size-7 text-pink transition-transform duration-300 group-hover:-rotate-12" />
          <span>
            mayada<span className="text-coral-text">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative block rounded-full px-4 py-2 text-[0.95rem] font-semibold transition-colors",
                    isActive ? "text-ink" : "text-ink-soft hover:text-ink",
                  )}
                >
                  {isActive ? (
                    <m.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full border-[1.5px] border-ink bg-butter"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="hidden items-center gap-1.5 rounded-full border-2 border-ink bg-purple px-4 py-2 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Let&apos;s talk <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <button
            ref={menuButton}
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full border-2 border-ink bg-butter lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <m.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-3 max-h-[calc(100dvh-6rem)] max-w-6xl overflow-y-auto rounded-[2rem] border-2 border-ink bg-paper p-4 shadow-pop-lg lg:hidden"
          >
            <ul className="grid gap-2 sm:grid-cols-2">
              {navItems.map((item, i) => (
                <m.li
                  key={item.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <a
                    ref={i === 0 ? firstLink : undefined}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.id ? "true" : undefined}
                    className={cn(
                      "flex min-h-14 items-center justify-between rounded-2xl border-2 border-ink px-5 font-display text-2xl font-semibold",
                      MOBILE_COLORS[i % MOBILE_COLORS.length],
                    )}
                  >
                    {item.label}
                    {active === item.id ? <Paw className="size-6 text-paper" /> : null}
                  </a>
                </m.li>
              ))}
            </ul>
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-purple font-bold text-white sm:hidden"
            >
              Let&apos;s talk <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </m.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
