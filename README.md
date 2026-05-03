# stavcorcos.dev

> Personal portfolio — built with Next.js 16, TypeScript, and Tailwind CSS v4.

&nbsp;

## Stack

| Layer | Tech |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | [Fraunces](https://fonts.google.com/specimen/Fraunces) · [DM Mono](https://fonts.google.com/specimen/DM+Mono) |
| Bundler | Turbopack |
| Deployment | Vercel |

&nbsp;

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind import, @theme tokens, pseudo-elements
│   ├── layout.tsx         # Root layout + metadata
│   └── page.tsx           # Home — composes all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Fixed nav with scroll spy + mobile menu
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx       # Blinking cursor, terminal snippet
│   │   ├── About.tsx      # Bio + skill tags
│   │   ├── Work.tsx       # Featured + other projects
│   │   ├── Experience.tsx # Timeline
│   │   └── Contact.tsx
│   └── ui/
│       └── ProjectCard.tsx
├── hooks/
│   └── useScrollSpy.ts    # Highlights active nav item on scroll
├── lib/
│   ├── data.ts            # All content lives here — edit this first
│   └── utils.ts           # cn() helper
└── types/
    └── index.ts
```

&nbsp;

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (Turbopack)
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000).

&nbsp;

## Customisation

**All content is in one file:** [`src/lib/data.ts`](src/lib/data.ts)

```ts
// Add a project
export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "My Project",
    description: "What it does and why it matters.",
    tags: ["Next.js", "TypeScript"],
    liveUrl: "https://...",
    githubUrl: "https://github.com/...",
    featured: true,   // shows large, in the main grid
    year: 2025,
  },
];
```

**Design tokens** are defined in `globals.css` under `@theme` and flow through as Tailwind utilities (`text-amber`, `bg-surface`, etc.):

```css
@theme {
  --color-amber: #e8a230;
  --color-bg:    #0d0f14;
  /* ... */
}
```

Change a token once, it updates everywhere.

&nbsp;

## Design Decisions

**Why so little CSS?**
Tailwind v4 handles ~95% of styles via utility classes. The only things left in `globals.css` are genuinely inexpressible in JSX: `::before`/`::after` pseudo-elements (hero glow, nav underline, timeline dot, heading rule), the scrollbar, `::selection`, and the scanline body texture.

**Why no component library?**
Everything is bespoke. A portfolio is the one place where generic UI is the wrong call.