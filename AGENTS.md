<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# HFE-ALIJAJ Project Guidelines

Albanian-language service business website for HFE-ALIJAJ, a construction/renovation contractor based in Pejë, Kosovo. **All user-visible text must remain in Albanian (sq).**

## Tech Stack

- **Next.js 16.2.2** — App Router only; no Pages Router used
- **React 19.2.4**, TypeScript throughout
- **Tailwind CSS v4** — configured via `globals.css` `@theme` block, NOT `tailwind.config.js`
- **Framer Motion 12** — scroll-triggered animations on all sections
- **lucide-react** — icon library; do not mix in other icon sets
- **react-hook-form** — form state management

## Build & Dev Commands

```bash
npm run dev      # start dev server
npm run build    # production build (run to verify changes compile)
npm run lint     # ESLint
```

## Architecture

```
app/
  layout.tsx          # Root layout: Navbar + children + Footer + WhatsAppButton + ScrollToTop
  page.tsx            # Home: Hero → Services cards → Stats → WhyUs → Gallery → Contact
  api/contact/        # POST endpoint — validates input, returns JSON in Albanian
  services/
    keramika/         # Ceramic tiling service page
    ujsjelles/        # Plumbing service page
    nxemje-qendrore/  # Central heating service page
  contact/            # Dedicated contact page
  projects/           # Gallery/portfolio page
components/           # Shared UI components (no sub-folders)
hooks/
  useAnimatedCounter.ts   # Animates numeric stats on scroll-into-view
```

## Conventions

**Styling**

- Tailwind v4 uses `@import "tailwindcss"` and `@theme inline { ... }` in `globals.css` — no `tailwind.config.js` exists. Do not create one.
- Global color tokens: `--color-background: #FAFAF8`, `--color-foreground: #1A1714`; accent orange `#D97706`; blue `#2563EB`; red `#DC2626`
- Use `clamp()` for fluid typography sizing (see existing Hero/service pages for examples)

**Animations**

- All section animations use Framer Motion `whileInView` with `viewport: { once: true }` (play once on scroll)
- Standard easing: `[0.25, 0.46, 0.45, 0.94]`
- Stagger children with incrementing `delay` (0.1s increments)

**Images**

- Use `next/image` (`<Image>`) for all images; Unsplash external images are allowed (configured in `next.config.ts`)
- Hero images use `priority` prop

**Routing & Navigation**

- Link to services as `/services/keramika`, `/services/ujsjelles`, `/services/nxemje-qendrore`
- If fixing slow client navigations: export `unstable_instant` from the route — see `node_modules/next/dist/docs/01-app/02-guides/instant-navigation.md`

**Contact API (`/api/contact`)**

- Server-side sanitizes and validates all input before processing
- Email delivery is **not yet implemented** (TODO: integrate Resend or SendGrid)
- `ALLOWED_SERVICES` list must be updated if new services are added

**TypeScript**

- Define interfaces for any structured data passed as props
- Server Components are the default; add `"use client"` only when using browser APIs or React hooks

## Content Rules

- All copy is Albanian only — do not introduce English text in UI
- Business facts: founded 2014, based in Pejë, Kosovo
- Services offered: keramika (tiling), ujsjelles (plumbing), nxemje-qendrore (central heating)
