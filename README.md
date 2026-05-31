# Ghulam Mustafa — Portfolio & Resume Website

Personal portfolio built with **Next.js 15 App Router**, **TypeScript**, and **TailwindCSS v4**. Showcases 5+ years of production work across fintech, B2B commerce, enterprise mobile, and AI SaaS.

**Live:** [resume-ghulam.vercel.app](https://resume-ghulam.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | TailwindCSS v4 |
| Animations | Framer Motion |
| OG Image | `next/og` (Satori) |
| Deployment | Vercel |

---

## Features

- **Fully responsive** dark-themed design — mobile-first, tested across breakpoints
- **Dynamic OG image** generated server-side via `next/og` for rich social previews
- **SEO optimised** — structured JSON-LD, `metadataBase`, semantic HTML with `aria-labelledby`
- **Framer Motion** stagger animations with `fadeInUp` and `staggerContainer` patterns
- **8 live project case studies** — each with problem / solution / result / stack breakdown and a direct link
- **Achievements strip** — statement-based cards replacing raw metric dumps
- **Services section** — freelance and contract service offering
- **AI Focus section** — current LLM integration work at Lumida Wealth
- **Accessible** — WCAG 2.1 compliant, `sr-only` headings for screen readers

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, JSON-LD
│   ├── page.tsx            # Page composition
│   └── opengraph-image.tsx # Auto-generated OG image (next/og)
├── sections/               # One file per page section
│   ├── HeroSection.tsx
│   ├── ProjectsSection.tsx
│   ├── AchievementsSection.tsx
│   ├── ServicesSection.tsx
│   ├── SkillsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── EducationSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── AIFocusSection.tsx
│   └── ContactSection.tsx
├── components/
│   ├── layout/             # SiteHeader, SiteFooter
│   └── ui/                 # SectionHeading, SocialIcons
├── data/
│   └── portfolioData.ts    # Single source of truth for all content
├── types/
│   └── portfolio.ts        # Shared TypeScript types
└── lib/
    └── motion.ts           # Reusable Framer Motion variants
```

---

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build
npm start
```

---

## Design Decisions

**Single data file** — all content lives in `src/data/portfolioData.ts`. Updating the site means editing one file, not hunting through components.

**Statement-based achievements** — instead of raw metric cards (`50% / API Latency Cut`), each achievement is written as a natural sentence with a metric pill, making the impact readable without feeling like a list of claims.

**`next/og` for OG image** — file-based convention (`opengraph-image.tsx`) so Next.js handles cache headers, content type, and URL resolution automatically — no manual `openGraph.images` config needed.

**No theme switcher** — dark mode only. Keeps the visual identity consistent and removes unnecessary complexity.

---

## Contact

- **Email:** ghulammustafa.mf@gmail.com
- **LinkedIn:** [linkedin.com/in/ghulam909](https://www.linkedin.com/in/ghulam909)
- **GitHub:** [github.com/GhulamMustufa](https://github.com/GhulamMustufa)
