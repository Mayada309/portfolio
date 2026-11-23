import type { Metadata, Viewport } from "next";
import { Caveat, Fraunces, Instrument_Sans } from "next/font/google";
import { profile } from "@/data/portfolio";
import { Providers } from "@/components/layout/Providers";
import { CursorFollower } from "@/components/layout/CursorFollower";
import { EasterEggs } from "@/components/illustrations/EasterEggs";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
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
  knowsAbout: ["React", "Next.js", "TypeScript", "Three.js", "WebGL", "Unity WebGL", "TipTap", "ProseMirror"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrument.variable} ${caveat.variable} antialiased`}>
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
