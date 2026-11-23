import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

export function Sparkle(props: P) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
      <path
        d="M20 2c1.6 9.2 8.8 16.4 18 18-9.2 1.6-16.4 8.8-18 18-1.6-9.2-8.8-16.4-18-18C11.2 18.4 18.4 11.2 20 2Z"
        fill="currentColor"
        stroke="var(--ink)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Squiggle(props: P) {
  return (
    <svg viewBox="0 0 120 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2 12c8-10 14-10 20 0s12 10 20 0 14-10 20 0 12 10 20 0 14-10 20 0 10 8 16 2"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Underline(props: P) {
  return (
    <svg viewBox="0 0 300 24" fill="none" preserveAspectRatio="none" aria-hidden="true" {...props}>
      <path d="M3 16C70 6 170 3 297 10" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M40 21c60-6 130-8 210-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".6" />
    </svg>
  );
}

export function MusicNote(props: P) {
  return (
    <svg viewBox="0 0 40 48" aria-hidden="true" {...props}>
      <path
        d="M14 36V8l22-5v28"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse cx="9" cy="37" rx="7" ry="5.5" fill="currentColor" stroke="var(--ink)" strokeWidth="2.5" />
      <ellipse cx="31" cy="31" rx="7" ry="5.5" fill="currentColor" stroke="var(--ink)" strokeWidth="2.5" />
    </svg>
  );
}

export function Paw(props: P) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
      <g fill="currentColor" stroke="var(--ink)" strokeWidth="2">
        <ellipse cx="20" cy="27" rx="9" ry="8" />
        <ellipse cx="8" cy="17" rx="4" ry="5" />
        <ellipse cx="15.5" cy="9" rx="4" ry="5.2" />
        <ellipse cx="24.5" cy="9" rx="4" ry="5.2" />
        <ellipse cx="32" cy="17" rx="4" ry="5" />
      </g>
    </svg>
  );
}

export function Heart(props: P) {
  return (
    <svg viewBox="0 0 40 36" aria-hidden="true" {...props}>
      <path
        d="M20 33S3 23 3 12C3 6 7.5 2.5 12 2.5c3.6 0 6.3 2 8 5 1.7-3 4.4-5 8-5 4.5 0 9 3.5 9 9.5 0 11-17 21-17 21Z"
        fill="currentColor"
        stroke="var(--ink)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Arrow(props: P) {
  return (
    <svg viewBox="0 0 80 60" fill="none" aria-hidden="true" {...props}>
      <path d="M4 8c20 2 46 12 56 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M48 42l12 8 6-14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Blob(props: P) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M44.7,-58.3C57.3,-50.6,66.5,-37,71.3,-21.7C76.1,-6.4,76.5,10.7,70.3,24.8C64.1,38.9,51.3,50.1,36.9,58.7C22.5,67.3,6.4,73.3,-10.3,73.8C-27.1,74.3,-44.5,69.4,-56.6,58.2C-68.6,47,-75.3,29.6,-76.1,12.5C-76.9,-4.6,-71.9,-21.4,-62,-33.8C-52.2,-46.2,-37.5,-54.2,-23.3,-61.3C-9.1,-68.4,4.6,-74.6,18.4,-73.2C32.2,-71.8,32.2,-66,44.7,-58.3Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
