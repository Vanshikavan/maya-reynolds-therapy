# Dr. Maya Reynolds, PsyD — Therapy website (Grow My Therapy )
A homepage clone of [Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home),
redesigned for an imaginary Santa Monica psychologist, **Dr. Maya Reynolds, PsyD**, with a new
palette, profile-based copy, new imagery and a custom **"Our Office"** section.

- **Live site:** _add Vercel URL here_
- **Layout clone (Part 1):** `/clone` on the same deployment — the original template's structure,
  copy and palette, rendered through the exact same components
- **Video walkthrough:** _add Loom URL here_

## Stack

- Next.js 16 (App Router, static export of both routes) + TypeScript
- Tailwind CSS v4 with CSS-variable design tokens
- `next/font` (Cormorant Garamond, Mulish, Corinthia) and `next/image`
- No UI libraries; every component is hand-written

## How it's put together

```
src/
  app/
    page.tsx            → redesign (Dr. Maya Reynolds)      /
    clone/page.tsx      → original layout clone             /clone
    layout.tsx          → fonts + SEO metadata
    globals.css         → design tokens, type scale, button styles
  content/
    types.ts            → the shape of a homepage's content
    original.tsx        → copy + images of the original site
    maya.tsx            → all copy for Dr. Reynolds (from her profile)
  components/
    HomePage.tsx        → section order (same as the original template)
    Header.tsx / Footer.tsx / ui.tsx / Reveal.tsx
    sections/           → Hero, Intro, Help, Banner, Expertise, Approach,
                          Statement, Specialties, Office*, Faq*, Cta
```

Both routes render the **same** section components; only the content object and the theme
wrapper differ. That is the point of the architecture: the layout was cloned once, then the
palette, copy and photos were swapped without touching the structure.

### Theme tokens

All colours live in `globals.css` as CSS variables and are exposed to Tailwind as
`bg-cream`, `text-ink`, `bg-primary`, etc.

| Token | Redesign (Dr. Reynolds) | Original (clone) |
| --- | --- | --- |
| `cream` — light section background | `#FAF7F2` warm ivory | `#F6F4EE` |
| `sand` — accent band background | `#E7DCCB` warm sand | `#E3D9CA` |
| `primary` — buttons, footer bar, banner tint | `#3F556B` slate blue | `#86B3B3` teal |
| `secondary` — script accents, brand tagline | `#C4826A` clay | `#86B3B3` teal |
| `ink` / `text` — headings / body | `#2A313A` / `#4B5661` | `#2B2B2B` / `#4E5D6C` |

The redesign palette was taken from Dr. Reynolds' actual office photos: warm oak floors and
exposed brick (clay, sand), soft grey-blue upholstery (slate), white walls and natural light
(ivory). Contrast for body text on every background is ≥ 7:1.

### Type scale

Headings use the original's fluid formula `(size − 1) × 1.2vw + 1rem` with the same scale
values (H1 3.6, H2 2.9, H3 2.4, H4 1.7, body 1.1), weight 300 serif headings, weight 300
sans body at 1.8 line-height, and uppercase 0.14em-tracked labels and buttons.

## Copy

Every line in `src/content/maya.tsx` is derived from Dr. Reynolds' profile: licensed clinical
psychologist in Santa Monica, CA; adults with anxiety, panic, trauma and burnout; CBT, EMDR,
mindfulness-based and body-oriented methods; in-person and California telehealth; a quiet,
private, light-filled office. The three featured services are **Anxiety & Panic**,
**Trauma & EMDR** and **Burnout & Perfectionism**. Local SEO: "therapy in Santa Monica",
"anxiety & trauma therapy", "telehealth across California" appear in the H1, section headings,
body copy, meta title/description and a `Psychologist` JSON-LD block.

The "Request a consultation" button uses a placeholder `mailto:` until the client supplies a
booking link or email.

## Images

- Dr. Reynolds' portrait and both office photos come from her profile.
- Remaining photography is from Unsplash (free licence), chosen for warm, low-saturation
  Southern-California light that matches the office: shoreline at golden hour, Santa Monica
  palms, a boardwalk at sunset, quiet moments of journaling, meditation and work by a window.
- Files are pre-cropped to their layout ratios and served through `next/image`.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000  and  http://localhost:3000/clone
npm run build    # production build
```

## Deploying

The project is a standard Next.js app — import the GitHub repository into Vercel (or Netlify)
with default settings; no environment variables are required. After deploying, update
`meta.url` in `src/content/maya.tsx` so the canonical URL and JSON-LD point at the live domain.
