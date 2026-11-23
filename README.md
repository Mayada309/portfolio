# Mayada Shaaban — Portfolio

A colourful, scrapbook-flavoured single-page portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Motion** and **Lucide** icons.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint
```

For production, set `NEXT_PUBLIC_SITE_URL` (e.g. `https://your-domain.com`) so Open Graph, the sitemap and canonical URLs are absolute.

## Editing content

**All text lives in one file: `src/data/portfolio.ts`.** Components only render that data.

| What | Where in `portfolio.ts` |
| --- | --- |
| Name, headline, intro, email, GitHub, LinkedIn | `profile` |
| "The developer side" paragraphs + values | `developerSide`, `developerValues` |
| Scrapbook photos & captions | `hobbies` |
| Skills (cards in the Skills section + the marquee) | `skillGroups` |
| Jobs on the timeline | `experience` (the first 3 highlights show, the rest sit behind "Show more") |
| Project cards | `projects` (`mockup` picks the illustrated preview, `size` is `wide` / `tall` / `normal`) |
| Degree, ICPC and other achievements | `education`, `achievements` |
| Photo credits shown in the footer | `photoCredits` |

## Replacing images

All images are in `public/images/`:

```
public/images/portrait-mayada.jpg        ← your photo (hero)
public/images/hobbies/my-cat.jpg         ← your photo
public/images/hobbies/my-aerial-hoop.jpg ← your photo
public/images/hobbies/my-cat-keyboard.jpg ← your photo
public/images/hobbies/my-kitten.jpg       ← your photo
public/images/hobbies/my-violin.jpg       ← your photo
```

To swap any of them:

1. Drop your photo into `public/images/hobbies/` under a new file name.
2. Update the matching `image` entry in `hobbies`: `src`, `alt`, and the real `width`/`height`.
3. If you ever use someone else's photo, add a credit to `photoCredits` and it shows in the footer.

**Your portrait:** the oval photo in the hero is `profile.photo` (4:5 works best). Setting `profile.portrait` instead makes a photo fill the whole arch frame.

**Tip:** when you swap a photo, give the file a new name (and update `src`). Next.js and browsers cache images by URL, so reusing a name can keep showing the old picture.

## Updating the CV

Replace `public/cv/Mayada-Shaaban-CV.pdf` with the new PDF, keeping the same name, or change `profile.cvPath`.

## Theme

Colours are CSS variables at the top of `src/app/globals.css` (`--cream`, `--ink`, `--purple`, `--coral`, `--butter`, `--mint`, `--pink`, `--lavender`, `--sky`…). Change them there and the whole site updates. Fonts (Fraunces, Instrument Sans, Caveat) are set in `src/app/layout.tsx`.

## Structure

```
src/
  app/            layout (fonts, SEO metadata, JSON-LD), page, globals.css, icon, robots, sitemap
  data/           portfolio.ts ← all content
  components/
    layout/       Navbar, Footer, BackToTop, CursorFollower, Providers
    sections/     Hero, Marquee, About, Skills, Experience, Projects, Education, Contact
    mockups/      illustrated (CSS) project previews: not real screenshots
    illustrations/ WatchingCat, EasterEggs, doodle SVGs
    ui/           Reveal, SectionHeading, Polaroid, Tag, BrandIcons
  lib/            accent colour maps, active-section hook
```

## Little extras

- The hero cat's eyes follow your cursor. Click to pet it, and pet it 5 times for a surprise.
- Type `meow` anywhere on the page.
- Check the browser console.
- All motion respects the OS "reduce motion" setting.
