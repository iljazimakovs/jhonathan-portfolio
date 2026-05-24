# Full-Stack Developer Portfolio — Jhonathan Hunnel

## Overview
A modern, dark-themed portfolio website for a Senior Full-Stack Developer specializing in MVPs, SaaS products, AI-powered features, and production-ready web applications.

## Tech Stack
- **Frontend:** React, Tailwind CSS, shadcn/ui, Wouter (routing), TanStack Query
- **Backend:** Express.js, Node.js
- **Database:** PostgreSQL with Drizzle ORM
- **Styling:** Dark mode with violet/indigo accent (hsl 252 83% 67%)

## Design System
- **Primary accent:** Violet/Indigo `hsl(252, 83%, 67%)` — #7C65F8
- **Background:** Near-black charcoal `hsl(238, 22%, 5%)`
- **Card:** `hsl(238, 18%, 8%)`
- **Border:** `hsl(238, 12%, 13%)`
- **Foreground:** `hsl(220, 15%, 92%)`
- **Fonts:** Inter (sans), Outfit (display), JetBrains Mono (mono)

## Architecture
Single-page portfolio with sections:
- **Navbar** — Fixed top nav with `[ FS ]` bracket logo, smooth scroll anchors, underline hover effect
- **Hero** — Headline, subtext, capabilities terminal card, stats, violet particle field
- **About** — Bio, stat grid, core stack panel
- **Services** — 6 core services with numbered list layout
- **Skills** — 6 tech stack categories (table row layout)
- **Projects** — 10 projects with filter tabs, card grid (6 visible + Load More), click-to-expand modal
- **Industries** — 6 industry verticals as individual cards
- **Certifications** — Edchart certifications with badge display
- **Hire** — CTA section with reason cards
- **Footer** — Social links (Email, GitHub, LinkedIn, Upwork), copyright

## Key Files
- `src/pages/home.tsx` — Main page composing all sections
- `src/components/layout/Navbar.tsx` — Navigation with `[ FS ]` logo
- `src/components/sections/Hero.tsx` — Hero with violet particle field + terminal card
- `src/components/sections/About.tsx` — About / bio section
- `src/components/sections/Services.tsx` — Services list
- `src/components/sections/Skills.tsx` — Tech stack table
- `src/components/sections/Project.tsx` — Projects grid + modal (all project data inline)
- `src/components/sections/Industries.tsx` — Industry experience grid
- `src/components/sections/Certifications.tsx` — Certifications section
- `src/components/sections/Hire.tsx` — CTA / hire me section
- `src/components/sections/Footer.tsx` — Footer
- `src/index.css` — Theme variables, grid patterns, violet color palette
- `server/routes.ts` — API routes (POST /api/messages)
- `shared/schema.ts` — Drizzle schema (messages table)

## Projects in Portfolio (10 total)
1. Rebux – Real Estate Rebate Landing Page
2. Jobnix – Trade SaaS CRM Platform
3. Patient Intake System – HIPAA Healthcare App
4. Loftie AI – Room Decluttering AI App
5. REGex SaaS Landing Page – CRO Design
6. Brand OS – AI Brand Identity Creator
7. Scorebug – Live Sports Scoring App
8. REGex CRM – Full-Stack Real Estate CRM
9. Poplar Finance – FinTech Marketing Site
10. Draz Investments Group – Luxury Real Estate Site

## Data Attributes (for programmatic access)
- `data-nav` — navbar links
- `data-section` — major section identifiers
- `data-stack` — skills categories
- `data-service` — service items
- `data-industry` — industry cards
- `data-portfolio-item` — project cards
- `data-modal` — project modal
- `data-filter` — project filter tabs
- `data-action` — interactive buttons
- `data-metric` — hero stats

## Customization Checklist
- [ ] Update GitHub URL in `Hero.tsx` (CTAs) and `Footer.tsx`
- [ ] Update LinkedIn URL in `Footer.tsx`
- [ ] Update Upwork URL in `Footer.tsx`
- [ ] Update email in `Footer.tsx`

## User Preferences
- Senior-level, professional, clean — not overcomplicated
- Dark charcoal theme with violet/indigo accent
- Upwork-compliant (no direct contact info)
