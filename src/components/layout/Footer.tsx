import { cacheLife } from "next/cache";
import { photoCredits, profile } from "@/data/portfolio";
import { Paw } from "@/components/illustrations/Doodles";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

/** Cached so the static shell can include the year; refreshed daily. */
async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  return (
    <footer className="relative z-[2] px-5 pb-28 pt-4 sm:px-8 sm:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t-2 border-dashed border-ink/30 pt-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="flex items-center gap-2 font-display text-xl font-semibold">
            <Paw className="size-6 text-pink" /> mayada<span className="-ml-2 text-coral">.</span>
          </p>
          <p className="mt-2 max-w-md font-hand text-2xl leading-snug text-ink-soft">
            Made with code, creativity, and probably a cat sitting on my keyboard.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <div className="flex gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (opens in a new tab)"
              className="grid size-11 place-items-center rounded-full border-2 border-ink bg-paper transition-colors hover:bg-mint"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
              className="grid size-11 place-items-center rounded-full border-2 border-ink bg-paper transition-colors hover:bg-sky"
            >
              <LinkedinIcon className="size-5" />
            </a>
          </div>
          <p className="text-sm text-ink-soft">
            © <CopyrightYear /> {profile.name}. Psst, try typing <kbd className="rounded border border-ink/40 bg-paper px-1 font-mono text-xs">meow</kbd>.
          </p>
          {photoCredits.length > 0 ? (
          <details className="text-sm text-ink-soft md:text-right">
            <summary className="cursor-pointer select-none py-3 font-semibold hover:text-ink">
              Photo credits
            </summary>
            <ul className="mt-2 space-y-1">
              {photoCredits.map((c) => (
                <li key={c.url}>
                  {c.what}:{" "}
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-purple">
                    {c.author}
                  </a>{" "}
                  ({c.license}, Wikimedia Commons)
                </li>
              ))}
            </ul>
          </details>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
