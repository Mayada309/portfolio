import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { profile } from "@/data/portfolio";
import { Providers } from "@/components/layout/Providers";
import { CursorFollower } from "@/components/layout/CursorFollower";
import { EasterEggs } from "@/components/illustrations/EasterEggs";
import "./globals.css";

/*
 * Self-hosted, subset fonts (Fraunces, Instrument Sans, Caveat from Google Fonts,
 * SIL OFL). The files keep their variable axes and OpenType features but only
 * the characters the site uses: printable ASCII plus
 *   U+00A0 U+00A9 U+00B7 U+00D7 U+2013-2014 U+2018-2019 U+201C-201D U+2022
 *   U+2026 U+2190-2194 U+21B3 U+21C4 U+2265 U+2726 U+2728
 * That cuts the fonts loaded before first paint from ~255KB to ~128KB. Any other
 * character still renders, from the fallback font. To add characters, re-run
 * `pyftsubset <google latin woff2> --unicodes=<list> --layout-features='*' --flavor=woff2`.
 */
const fraunces = localFont({
  variable: "--font-fraunces",
  // opsz 9-144 kept for optical sizing; wght trimmed to the 400-700 the site uses.
  src: [{ path: "./fonts/fraunces-subset.woff2", weight: "400 700", style: "normal" }],
  display: "swap",
  fallback: ["Georgia", "serif"],
  adjustFontFallback: "Times New Roman",
});

/**
 * Fraunces italic is only used for the hero surname, so this is a 3KB file
 * with just its glyphs (S, h, a, b, n; semibold, opsz 9-144) from Google
 * Fonts' `text=` subsetting. If the hero text changes, regenerate it.
 */
const frauncesItalic = localFont({
  variable: "--font-fraunces-italic",
  src: [{ path: "./fonts/fraunces-italic-shaaban.woff2", weight: "600", style: "italic" }],
  display: "swap",
  fallback: ["Georgia", "serif"],
  adjustFontFallback: "Times New Roman",
});

const instrument = localFont({
  variable: "--font-instrument",
  src: [{ path: "./fonts/instrument-sans-subset.woff2", weight: "400 700", style: "normal" }],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const caveat = localFont({
  variable: "--font-caveat",
  src: [{ path: "./fonts/caveat-subset.woff2", weight: "400 700", style: "normal" }],
  display: "swap",
  fallback: ["cursive"],
});

/** Set NEXT_PUBLIC_SITE_URL in production (e.g. https://mayada.dev) for correct absolute OG URLs. */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const description =
  "Mayada Shaaban is a frontend developer building React, Next.js and TypeScript apps: AI interfaces, document editors, interactive 3D and bilingual RTL experiences. Also: cats, violin and aerial silks.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} · Frontend Developer & Creative Problem Solver`,
    template: `%s · ${profile.name}`,
  },
  description,
  keywords: [
    "Mayada Shaaban",
    "Frontend Developer",
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "Three.js",
    "Unity WebGL",
    "AI interfaces",
    "RTL",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    title: `${profile.name} · Frontend Developer`,
    description,
    url: "/",
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · Frontend Developer`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fff7ec",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Frontend Developer",
  email: `mailto:${profile.email}`,
  url: siteUrl,
  sameAs: [profile.github, profile.linkedin],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Alexandria University" },
  knowsAbout: ["React", "Next.js", "Angular", "TypeScript", "Three.js", "WebGL", "Unity WebGL", "TipTap", "ProseMirror"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${frauncesItalic.variable} ${instrument.variable} ${caveat.variable} antialiased`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Providers>
          {children}
          <CursorFollower />
          <EasterEggs />
        </Providers>
      </body>
    </html>
  );
}
