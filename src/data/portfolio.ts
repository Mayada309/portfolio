/**
 * All portfolio content lives here. Edit this file to update text, links,
 * experience, projects and images — the components only render this data.
 */

export type Accent = "purple" | "coral" | "butter" | "mint" | "pink" | "lavender" | "sky";

export interface SiteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Profile {
  name: string;
  firstName: string;
  headline: string;
  intro: string;
  email: string;
  github: string;
  linkedin: string;
  cvPath: string;
  /** Round photo inside the hero's arch frame (square image works best). */
  photo: SiteImage;
  /** Optional: an image that fills the WHOLE arch frame instead of the illustrated scene. */
  portrait: SiteImage | null;
  currently: { role: string; company: string; url: string };
}

export const profile: Profile = {
  name: "Mayada Shaaban",
  firstName: "Mayada",
  headline: "Frontend Developer & Creative Problem Solver",
  intro:
    "I build modern web apps with React, Next.js and TypeScript, from multi-tenant AI platforms and real-time streaming chat to document editors and interactive 3D on the web. Outside of work you'll find me with a violin, up on aerial silks, or getting out-negotiated by a cat.",
  email: "mayadaelsayed383@gmail.com",
  github: "https://github.com/Mayada309",
  linkedin: "https://www.linkedin.com/in/mayada-shaaban-25892122a/",
  cvPath: "/cv/Mayada-Shaaban-CV.pdf",
  photo: {
    src: "/images/portrait-mayada.jpg",
    alt: "Mayada Shaaban smiling in front of a red brick wall",
    width: 800,
    height: 1000,
  },
  portrait: null,
  currently: { role: "Frontend Developer", company: "Ilegal Solutions", url: "https://www.ilegalworks.com/en" },
};

export const navItems = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = "home" | (typeof navItems)[number]["id"];

/* ------------------------------------------------------------------ */
/* About                                                              */
/* ------------------------------------------------------------------ */

export const developerSide: string[] = [
  "My path into frontend started with a degree in Computers and Data Science at Alexandria University and a lot of competitive programming (ICPC included). That's where I learned to break a hard problem into small, testable pieces, and I still work that way.",
  "Since then I've built interfaces for people who depend on them: a multi-tenant legal AI platform, AI chat that streams answers in real time, PDF and Word viewers written from scratch, and interactive 3D experiences built with Three.js and Unity WebGL.",
  "I care about the details users feel but rarely name, like a streamed answer that recovers from a dropped connection, a 200-page document that still scrolls smoothly, or an Arabic layout that looks designed for RTL instead of flipped as an afterthought.",
];

export const developerValues = [
  { label: "Curious by default", note: "new tech is a puzzle, not a threat" },
  { label: "Detail-obsessed", note: "loading, error & empty states included" },
  { label: "Bilingual builder", note: "Arabic + English, RTL done right" },
];

export interface Hobby {
  id: string;
  title: string;
  caption: string;
  image: SiteImage;
  accent: Accent;
  tape: Accent;
}

export const hobbies: Hobby[] = [
  {
    id: "cats",
    title: "Certified cat person",
    caption: "Cats are my senior reviewers: strict, judgmental, often asleep.",
    accent: "lavender",
    tape: "pink",
    image: {
      src: "/images/hobbies/my-cat.jpg",
      alt: "A fluffy long-haired tabby cat lounging in a plush cat bed, mid-wink",
      width: 960,
      height: 1200,
    },
  },
  {
    id: "aerial",
    title: "Aerial arts",
    caption: "Where I go to hang out. Literally.",
    accent: "coral",
    tape: "butter",
    image: {
      src: "/images/hobbies/my-aerial-hoop.jpg",
      alt: "Mayada smiling while sitting in an aerial hoop in the desert, mountains behind her",
      width: 1200,
      height: 800,
    },
  },
  {
    id: "violin",
    title: "Violin",
    caption: "Practising scales is just debugging for the ears.",
    accent: "butter",
    tape: "mint",
    image: {
      src: "/images/hobbies/my-violin.jpg",
      alt: "A black violin and its bow leaning against a soft blue, cloud-painted backdrop",
      width: 1200,
      height: 800,
    },
  },
  {
    id: "cat-nap",
    title: "Office supervisor",
    caption: "Approves every PR. Mostly by lying on the keyboard.",
    accent: "mint",
    tape: "lavender",
    image: {
      src: "/images/hobbies/my-cat-keyboard.jpg",
      alt: "A fluffy seal-point cat fast asleep on top of a music keyboard",
      width: 900,
      height: 900,
    },
  },
  {
    id: "cat-ginger",
    title: "Snack negotiations",
    caption: "Ongoing. I'm losing.",
    accent: "pink",
    tape: "coral",
    image: {
      src: "/images/hobbies/my-kitten.jpg",
      alt: "A fluffy grey kitten lying on its back on a dark blanket, paws in the air",
      width: 900,
      height: 900,
    },
  },
];

/* ------------------------------------------------------------------ */
/* Skills (taken directly from the CV — no invented proficiency)      */
/* ------------------------------------------------------------------ */

export type SkillIcon = "frontend" | "languages" | "ai" | "graphics" | "tools";

export interface SkillGroup {
  id: string;
  title: string;
  blurb: string;
  icon: SkillIcon;
  accent: Accent;
  skills: string[];
  /** Optional handwritten footnote shown on the card. */
  note?: string;
}

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    blurb: "My home base.",
    icon: "frontend",
    accent: "lavender",
    skills: ["React.js", "Next.js", "Angular", "React Native", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    note: "Bilingual by default: Arabic + English interfaces with full RTL support (next-intl).",
  },
  {
    id: "ai-docs",
    title: "Document & AI",
    blurb: "Editors, documents and streamed AI answers.",
    icon: "ai",
    accent: "coral",
    skills: ["TipTap", "ProseMirror", "PDF/Word Rendering", "Rich Text Editors", "OCR", "PII Masking", "AI Streaming"],
  },
  {
    id: "3d",
    title: "3D & Graphics",
    blurb: "Things that move and render in 3D.",
    icon: "graphics",
    accent: "mint",
    skills: ["Three.js", "WebGL", "Unity WebGL", "3D Rendering", "Animation"],
  },
  {
    id: "tools",
    title: "Tools & Backend",
    blurb: "Everything around the UI.",
    icon: "tools",
    accent: "butter",
    skills: ["Git", "Docker", "Node.js", "MySQL", "REST APIs", "WebSockets", "i18n", "RTL"],
  },
  {
    id: "languages",
    title: "Programming Languages",
    blurb: "What I write in.",
    icon: "languages",
    accent: "pink",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C++", "PHP"],
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                         */
/* ------------------------------------------------------------------ */

export interface Role {
  company: string;
  url: string;
  title: string;
  type: string;
  start: string;
  end: string;
  location: string;
  overview: string;
  accent: Accent;
  stack: string[];
  highlights: string[];
}

export const experience: Role[] = [
  {
    company: "Ilegal Solutions",
    url: "https://www.ilegalworks.com/en",
    title: "Frontend Developer",
    type: "Full time",
    start: "Jun 2025",
    end: "Present",
    location: "Dubai, UAE",
    accent: "purple",
    overview:
      "Building a multi-tenant legal AI platform: streaming AI chat, custom PDF/Word viewing and editing, rich-text collaboration and privacy tooling for legal documents.",
    stack: ["Next.js", "React", "TypeScript", "TipTap", "ProseMirror", "next-intl"],
    highlights: [
      "Built a multi-tenant legal AI platform with Next.js, React and TypeScript, with separate portals for Super Admins, customers (tenants) and lawyers. Implemented role-based access control (RBAC) and tenant-specific workflows, including optional lawyer reviews of customer documents.",
      "Developed an AI chat interface with real-time streaming responses, conversation history, message updates and handling for loading, errors and interrupted responses. Integrated AI features for document analysis, summarization and translation.",
      "Built custom PDF and Word viewing and editing from scratch: page rendering, pagination, text positioning, zooming, scrolling and navigation across multi-page documents.",
      "Developed rich-text editing with TipTap and ProseMirror (custom extensions, formatting controls, image uploads), plus a commenting system built from scratch so users can select text, leave comments and review changes in context.",
      "Implemented PII masking for legal contracts, so users can identify, review and hide sensitive information while the rest of the document stays readable.",
      "Worked on OCR and document-processing workflows for multiple file formats, and built Arabic and English interfaces with next-intl and full RTL support, with a focus on responsive layouts and smooth interaction with large documents.",
    ],
  },
  {
    company: "GameIN",
    url: "https://www.gamein.ae/eg-en",
    title: "Frontend Developer",
    type: "Full time",
    start: "Nov 2023",
    end: "Jun 2025",
    location: "Dubai, UAE",
    accent: "coral",
    overview:
      "Brought Unity-powered 3D experiences to the web: Three.js/WebGL interfaces, Unity WebGL integrations, animated avatars and a real-time voice AI chatbot.",
    stack: ["React", "Three.js", "WebGL", "Unity WebGL", "WebSockets", "Web Speech API"],
    highlights: [
      "Built interactive 3D web experiences with React, Three.js and WebGL, working with 3D models, animations and user interactions to bring Unity-powered experiences to the web.",
      "Integrated Unity WebGL builds into React apps, handling build initialization, loading states and JavaScript ↔ Unity communication, working closely with Unity developers to connect web interfaces with 3D scenes.",
      "Improved Unity WebGL performance by optimizing build loading, asset delivery and startup behaviour, while addressing browser memory usage and rendering performance.",
      "Worked with 3D characters, models, textures and animations to build interactive avatars with facial expressions and actions triggered by user input.",
      "Developed a real-time AI chatbot with speech-to-text and text-to-speech using the Web Speech API and WebSockets, connecting conversations with animated 3D avatars.",
      "Added Arabic and English support with RTL layouts and improved site performance, reaching a 100/100 Lighthouse SEO score. Integrated Google Tag Manager, Microsoft Clarity, Hotjar and Smartlook to understand user behaviour.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Selected work — professional contributions, not personal products  */
/* ------------------------------------------------------------------ */

export type MockupKind = "portals" | "chat" | "pages" | "comments" | "pii" | "unity" | "avatar";

export interface Project {
  id: string;
  title: string;
  company: string;
  summary: string;
  contributions: string[];
  tags: string[];
  mockup: MockupKind;
  accent: Accent;
  size: "wide" | "tall" | "normal";
}

export const projects: Project[] = [
  {
    id: "legal-ai-platform",
    title: "Multi-tenant legal AI platform",
    company: "Ilegal Solutions",
    summary:
      "Separate portals for Super Admins, customers (tenants) and lawyers, with role-based access and tenant-specific workflows.",
    contributions: ["RBAC across three portals", "Optional lawyer review of customer documents", "Arabic/English with full RTL"],
    tags: ["Next.js", "React", "TypeScript", "next-intl"],
    mockup: "portals",
    accent: "lavender",
    size: "wide",
  },
  {
    id: "ai-chat",
    title: "Streaming AI chat & document analysis",
    company: "Ilegal Solutions",
    summary:
      "A chat interface that streams responses in real time, with conversation history and AI document analysis, summarization and translation.",
    contributions: ["Real-time streamed responses", "Handles loading, errors & interruptions", "Conversation history & message updates"],
    tags: ["AI Streaming", "React", "TypeScript"],
    mockup: "chat",
    accent: "mint",
    size: "tall",
  },
  {
    id: "doc-viewer",
    title: "PDF & Word viewing and editing",
    company: "Ilegal Solutions",
    summary:
      "Document viewing and editing built from scratch, covering page rendering, pagination, text positioning, zoom and navigation across long documents.",
    contributions: ["Custom page rendering & pagination", "Zoom, scroll & multi-page navigation", "OCR & multi-format processing"],
    tags: ["PDF/Word Rendering", "OCR", "TypeScript"],
    mockup: "pages",
    accent: "butter",
    size: "normal",
  },
  {
    id: "rich-text",
    title: "Rich-text editor & commenting",
    company: "Ilegal Solutions",
    summary:
      "Rich-text editing with custom TipTap/ProseMirror extensions, plus a commenting system built from scratch for in-context review.",
    contributions: ["Custom extensions & formatting controls", "Image uploads", "Select text → comment → review"],
    tags: ["TipTap", "ProseMirror", "React"],
    mockup: "comments",
    accent: "pink",
    size: "normal",
  },
  {
    id: "pii",
    title: "PII masking for legal contracts",
    company: "Ilegal Solutions",
    summary:
      "Tools to identify, review and hide personally identifiable information while keeping the rest of a contract readable.",
    contributions: ["Identify sensitive information", "Review before masking", "Readable masked documents"],
    tags: ["PII Masking", "Document processing"],
    mockup: "pii",
    accent: "coral",
    size: "normal",
  },
  {
    id: "unity-webgl",
    title: "Interactive 3D & Unity WebGL on the web",
    company: "GameIN",
    summary:
      "Unity WebGL builds integrated into React apps, alongside Three.js/WebGL experiences with 3D models, animations and interactions.",
    contributions: ["Build initialization & loading states", "JavaScript ↔ Unity communication", "Faster loading & lower memory use"],
    tags: ["Three.js", "WebGL", "Unity WebGL", "React"],
    mockup: "unity",
    accent: "sky",
    size: "wide",
  },
  {
    id: "avatar-chatbot",
    title: "Voice AI chatbot with 3D avatars",
    company: "GameIN",
    summary:
      "A real-time chatbot with speech-to-text and text-to-speech, connected to animated 3D avatars with facial expressions and actions.",
    contributions: ["Web Speech API: STT & TTS", "Real-time messaging via WebSockets", "Expressions triggered by user input"],
    tags: ["WebSockets", "Web Speech API", "3D Animation"],
    mockup: "avatar",
    accent: "purple",
    size: "wide",
  },
];

/* ------------------------------------------------------------------ */
/* Education & achievements                                           */
/* ------------------------------------------------------------------ */

export const education = {
  degree: "Bachelor of Computers and Data Science",
  school: "Alexandria University",
  location: "Alexandria, Egypt",
  start: "Oct 2020",
  end: "Jul 2024",
  gpa: "3.7",
};

export const achievements = [
  {
    title: "ICPC Regional Participant",
    org: "International Collegiate Programming Contest",
    year: "2022",
    location: "Alexandria, Egypt",
    description:
      "Competed in regional programming contests, solving algorithmic and mathematical problems under time pressure as part of a team.",
    accent: "butter" as Accent,
  },
  {
    title: "100/100 Lighthouse SEO",
    org: "GameIN",
    year: "2023 – 2025",
    location: "Dubai, UAE",
    description:
      "Reached a perfect Lighthouse SEO score while adding Arabic/English RTL support and improving site performance.",
    accent: "mint" as Accent,
  },
];

/* Credits for any photos that are not your own (shown in the footer when non-empty) */
export const photoCredits: { what: string; author: string; license: string; url: string }[] = [
];
