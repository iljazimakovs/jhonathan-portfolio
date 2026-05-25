import { useState, useRef, useCallback, useEffect } from "react";
import { useLocation } from "wouter";
import {
  X,
  ArrowRight,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Search,
  ThumbsUp,
  Link2,
  Check,
} from "lucide-react";

interface Project {
  slug: string;
  title: string;
  role: string;
  category: string;
  filterSlugs: string[];
  highlight: string;
  description: string;
  longDescription: string;
  tech: string[];
  tags: string[];
  gradient: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
}

interface FilterCategory {
  name: string;
  slug: string;
}

export const filterCategories: FilterCategory[] = [
  { name: "All Projects", slug: "all" },
];

const projects: Project[] = [
  {
    slug: "rebux-landing-page",
    title: "Rebux: High-Converting Real Estate Rebate Landing Page",
    role: "Full-Stack Developer · UI/UX Design · Frontend Development · API Integration · Lead Capture System",
    category: "MVP",
    filterSlugs: ["mvp", "fullstack"],
    highlight: "Real Estate MVP",
    description:
      "Conversion-optimized landing page for a real estate rebate service - interactive rebate calculator, multi-step lead form, and full marketing stack integration.",
    longDescription:
      "A high-converting landing page built for Rebux, a real estate rebate startup. The page features an interactive rebate calculator that estimates buyer savings in real time, a multi-step lead capture form with Google Places autocomplete for property address input, and reCAPTCHA v3 for spam protection. Leads flow directly into Mailerlite for automated email nurturing. GA4 tracks funnel events end-to-end for continuous CRO iteration.",
    tech: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS 4",
      "Mailerlite API",
      "Google Places API",
      "reCAPTCHA v3",
      "GA4",
    ],
    tags: ["Landing Page", "Lead Generation", "Real Estate", "CRO"],
    gradient: "from-blue-600/20 to-cyan-600/20",
    images: [
      "/images/rebux-1.jpg",
      "/images/rebux-2.jpg",
      "/images/rebux-3.jpg",
      "/images/rebux-4.jpg",
    ],
    highlights: [
      "Interactive rebate calculator showing real-time buyer savings estimates",
      "Multi-step lead form with Google Places autocomplete for address entry",
      "reCAPTCHA v3 integration for invisible spam protection without friction",
      "Mailerlite API integration for automated lead nurturing sequences",
      "GA4 event tracking across the full funnel for conversion rate optimization",
      "Built and deployed in under 2 weeks from design to production",
    ],
  },
  {
    slug: "autonomize-ai-platform",
    title: "AI Intelligence Platform for Healthcare Operations",
    role: "Full-Stack Developer · AI Integration · Agentic Workflow Architecture · Healthcare SaaS Engineering",
    category: "AI",
    filterSlugs: ["ai", "saas", "fullstack"],
    highlight: "Healthcare AI Platform",
    description:
      "AI-native healthcare intelligence platform - agentic workflow orchestration, 50+ EHR connectors, and autonomous AI agents for clinical and operational automation at enterprise scale.",
    longDescription:
      "Built an AI-native healthcare intelligence platform serving large U.S. health enterprises. The platform unifies fragmented point solutions into a single agentic workflow layer covering prior authorization, care management, claims processing, appeals & grievances, and clinical audits. Core architecture includes a self-learning knowledge graph of 10M+ clinical, regulatory, and coverage concepts, a visual AI Studio for designing and versioning agentic workflows, a curated marketplace of 160+ ready-to-deploy agents, and a Command Center for real-time operational observability with full audit trails. Compliance is embedded at every layer with human-in-the-loop controls, HIPAA-grade security, and 50+ pre-built connectors for EHRs, FHIR APIs, claims systems, and legacy inputs.",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "React",
      "Node.js",
      "OpenAI API",
      "FHIR APIs",
      "AWS",
      "Tailwind CSS",
    ],
    tags: ["AI", "Healthcare", "Workflow Automation", "SaaS"],
    gradient: "from-violet-600/20 to-blue-600/20",
    images: [
      "/images/autonomize-1.jpg",
      "/images/autonomize-2.jpg",
      "/images/autonomize-3.jpg",
      "/images/autonomize-4.jpg",
      "/images/autonomize-5.jpg",
      "/images/autonomize-6.jpg",
      "/images/autonomize-7.jpg",
      "/images/autonomize-8.jpg",
    ],
    highlights: [
      "Agentic workflow orchestration across prior authorization, care management, claims, appeals, and clinical audits",
      "Self-learning knowledge graph with 10M+ clinical, regulatory, and coverage concepts updated with every decision",
      "Visual AI Studio for designing, configuring, and versioning agentic workflows without sacrificing technical rigor",
      "Command Center with real-time KPI observability, full lifecycle tracing, and human-AI handoff audit trails",
      "160+ ready-to-deploy healthcare agents and workflows activating in days, not months",
      "Production-grade compliance with HIPAA-grade security, audit logging, and human-in-the-loop controls",
    ],
  },
  {
    slug: "simplydepo-b2b-portal",
    title: "SimplyDepo – B2B Wholesale Ordering & Field Sales Platform",
    role: "Full-Stack Developer · B2B Portal Architecture · ERP Integration · Dashboard Engineering",
    category: "SaaS",
    filterSlugs: ["saas", "fullstack"],
    highlight: "Wholesale Distribution SaaS",
    description:
      "Mobile-first B2B ordering and field sales platform for CPG distributors - customer self-service portal, account-based pricing, live inventory sync, route optimization, and real-time rep dashboards.",
    longDescription:
      "Built a full-stack B2B wholesale ordering platform for CPG brands, distributors, and merchandisers. The platform unifies customer self-service ordering, field rep workflows, and distribution operations into a single system. Core features include a branded B2B storefront where wholesale customers log in to browse catalogs, view account-specific pricing, place orders, and access full order history. Field reps use a mobile-first app with offline support to capture orders, log store visits, and manage routes in real time. The backend integrates with QuickBooks, Stripe, and Shopify via a REST API layer, with custom pricing rules, multi-user account permissions, and territory management. A real-time dashboard gives managers live visibility into orders, rep activity, fulfillment status, and sales performance by route and region.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "REST API",
      "QuickBooks API",
      "Stripe",
      "Tailwind CSS",
    ],
    tags: ["B2B Portal", "Wholesale", "ERP Integration", "SaaS"],
    gradient: "from-blue-600/20 to-teal-600/20",
    images: [
      "/images/simplydepo-1.jpg",
      "/images/simplydepo-2.jpg",
      "/images/simplydepo-3.jpg",
      "/images/simplydepo-4.jpg",
      "/images/simplydepo-5.jpg",
      "/images/simplydepo-6.jpg",
      "/images/simplydepo-7.jpg",
      "/images/simplydepo-8.jpg",
      "/images/simplydepo-9.jpg",
      "/images/simplydepo-10.jpg",
      "/images/simplydepo-11.jpg",
    ],
    liveUrl: "https://simplydepo.com/",
    highlights: [
      "Branded B2B self-service storefront with account-specific pricing, catalog browsing, and 24/7 order submission",
      "Customer order history and one-click reorder workflows reducing rep touchpoints by 70%",
      "Live inventory availability sync eliminating backorder surprises at checkout",
      "Mobile-first field rep app with offline order capture, visit logging, and real-time sync on reconnect",
      "AI-powered route optimization reducing travel time and increasing daily store coverage by 120%",
      "QuickBooks integration for automatic order-to-invoice flow with zero manual re-entry",
      "Multi-user account management with role-based permissions across reps, managers, and customers",
      "Real-time dashboards with KPIs by rep, territory, product line, and fulfillment status",
    ],
  },
  {
    slug: "patient-intake-system",
    title: "Patient Intake System",
    role: "Full-Stack Developer",
    category: "Full-Stack",
    filterSlugs: ["fullstack", "saas"],
    highlight: "HIPAA Healthcare App",
    description:
      "Full-stack patient intake platform for healthcare clinics - replaces paper forms with a secure, HIPAA-compliant digital solution with clinic dashboard.",
    longDescription:
      "Full-stack patient intake platform for healthcare clinics. Replaces paper forms with a secure digital solution. Patient side: multi-step form, insurance photo upload, e-signature, and auto-save. Clinic side: dashboard with submission list, search/filter, status tracking, PDF export, and audit logging. Built for HIPAA compliance with encryption and access controls.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "AWS S3", "Tailwind CSS"],
    tags: ["Healthcare", "HIPAA", "SaaS", "Forms"],
    gradient: "from-teal-600/20 to-emerald-600/20",
    images: [
      "/images/patient-intake-2.jpg",
      "/images/patient-intake-1.jpg",
      "/images/patient-intake-3.jpg",
      "/images/patient-intake-4.jpg",
    ],
    liveUrl: "https://patient-intake-form.vercel.app/intake/demo",
    highlights: [
      "Multi-step patient form with auto-save, insurance photo upload, and e-signature",
      "Clinic dashboard with submission list, search, filter by status, and date range",
      "PDF export of completed intake forms for clinical records",
      "Audit logging for all form access and status changes",
      "Built for HIPAA compliance with encryption at rest and strict access controls",
    ],
  },
  {
    slug: "jobnix-crm-platform",
    title: "Jobnix – Professional Quoting & CRM Platform for Trade Businesses",
    role: "Full-Stack Developer",
    category: "SaaS",
    filterSlugs: ["saas", "fullstack"],
    highlight: "Trade SaaS CRM",
    description:
      "Full-stack SaaS quoting platform for trade professionals - itemized quotes, customer engagement tracking, Stripe deposits, and automated follow-ups.",
    longDescription:
      "Built a full-stack SaaS quoting platform for trade professionals. Users create itemized quotes, track customer engagement (viewed, accepted, declined), and collect deposits via Stripe. Features include a real-time dashboard with revenue metrics, customer CRM, automated email/SMS follow-ups (Resend + Twilio), and professional PDF generation. Delivered end-to-end: database schema, REST APIs, auth flow, responsive UI, and third-party integrations.",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Stripe API",
      "Twilio API",
      "Resend",
      "Drizzle ORM",
    ],
    tags: ["SaaS", "CRM", "Stripe", "Trade"],
    gradient: "from-blue-600/20 to-indigo-600/20",
    images: [
      "/images/jobnix-1.jpg",
      "/images/jobnix-2.jpg",
      "/images/jobnix-3.jpg",
      "/images/jobnix-4.jpg",
    ],
    highlights: [
      "Itemized quote builder with real-time line item calculation and PDF export",
      "Customer engagement tracking - view, accept, and decline events per quote",
      "Stripe integration for deposit collection with automated payment confirmation",
      "Real-time dashboard showing revenue metrics, pending quotes, and acceptance rates",
      "Customer CRM with full quote history, contact details, and summary stats",
      "Automated email and SMS follow-ups via Resend and Twilio for outstanding quotes",
    ],
  },
  {
    slug: "cruise-group-booking-platform",
    title: "Custom Cruise Group Booking Platform – Themed Sailing & Event Management",
    role: "Full-Stack Developer · System Architecture · Payment Integration · Admin Dashboard",
    category: "SaaS",
    filterSlugs: ["saas", "fullstack"],
    highlight: "Cruise Booking SaaS",
    description:
      "Scalable group cruise booking platform for themed sailings - cabin inventory management, guest self-service portal, flexible payment plans, and a full admin dashboard with automations.",
    longDescription:
      "Built a custom cruise group booking platform for themed sailing events and large-scale charters supporting 2,000+ guests per sailing. The platform handles the full guest journey from landing page discovery through cabin selection, payment plan enrollment, and post-booking portal access. Operators manage cabin inventory manually with statuses (available, held, sold, assigned, blocked), upload deck plans, and configure unlimited add-ons including merchandise, excursions, private events, and upgrades. Payment Cloud integration supports deposits, recurring payment schedules, and automated failed payment reminders. The admin dashboard provides full booking and guest management, promo code and referral tracking, affiliate/commission reporting, and exportable reports. Automated email flows handle confirmations, balance reminders, upsells, and cruise line booking number triggers.",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Payment Cloud API",
      "Resend",
      "AWS S3",
      "Tailwind CSS",
    ],
    tags: ["SaaS", "Booking Platform", "Cruise", "Payments"],
    gradient: "from-blue-600/20 to-sky-600/20",
    images: [
      "/images/cruise-platform-1.jpg",
      "/images/cruise-platform-2.jpg",
      "/images/cruise-platform-3.jpg",
      "/images/cruise-platform-4.jpg",
      "/images/cruise-platform-5.jpg",
      "/images/cruise-platform-6.jpg",
      "/images/cruise-platform-7.jpg",
      "/images/cruise-platform-8.jpg",
      "/images/cruise-platform-9.jpg",
      "/images/cruise-platform-10.jpg",
      "/images/cruise-platform-11.jpg",
      "/images/cruise-platform-12.jpg",
      "/images/cruise-platform-13.jpg",
      "/images/cruise-platform-14.jpg",
    ],
    liveUrl: "https://cabinselect.com/",
    highlights: [
      "Multi-sailing event management with dedicated landing pages and guest booking portals per event",
      "Cabin inventory system with manual upload, deck plan display, and statuses: available, held, sold, assigned, blocked",
      "Guest cabin selection flow with optional paid upgrade for specific cabin number assignment",
      "Payment Cloud integration supporting deposits, recurring plans, custom schedules, and failed payment reminders",
      "Unlimited add-ons engine for merchandise, excursions, private events, insurance, and transportation",
      "Admin dashboard with full booking/guest management, promo codes, referral and affiliate/commission tracking, and export",
    ],
  },
  {
    slug: "loftie-ai",
    title: "Loftie AI – Room Decluttering & Home Styling Web App",
    role: "Full-Stack Developer & AI Integration Specialist",
    category: "AI",
    filterSlugs: ["ai", "saas"],
    highlight: "AI Image Generation",
    description:
      "AI-powered web app that transforms cluttered room photos into styled, decluttered spaces - with a personalized step-by-step plan and audio guidance.",
    longDescription:
      "Built an AI-powered web app that transforms cluttered room photos into styled, decluttered spaces. Users upload a room photo and receive an AI-generated 'after' image with clutter removed, plus a personalized step-by-step decluttering plan. Features drag-and-drop image upload, real-time preview, AI vision analysis and image generation via Google Gemini 2.0 Flash, text-to-speech audio guidance, email delivery of results via Resend, and an admin dashboard for managing transformations.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Google Gemini 2.0",
      "OpenAI TTS",
      "Resend",
    ],
    tags: ["AI", "Image Generation", "SaaS", "Home"],
    gradient: "from-green-600/20 to-teal-600/20",
    images: ["/images/loftie-1.jpg"],
    highlights: [
      "Drag-and-drop image upload with real-time preview before submission",
      "Google Gemini 2.0 Flash for AI vision analysis and photorealistic room transformation",
      "Preserves original room layout and appearance while removing clutter",
      "Text-to-speech audio guidance via OpenAI TTS / ElevenLabs for decluttering steps",
      "Email delivery of before/after results and personalized plan via Resend",
      "Admin dashboard for reviewing and managing all user transformations",
    ],
  },
  {
    slug: "regex-saas-landing-page",
    title: "High-Converting SaaS Landing Page for REGex CRM",
    role: "UI/UX Designer & Frontend Developer",
    category: "Full-Stack",
    filterSlugs: ["fullstack", "mvp"],
    highlight: "CRO-Focused Design",
    description:
      "High-converting dark-themed landing page for REGex, a SaaS CRM for real estate wholesalers - persuasion-focused design with ROI calculator, social proof, and tiered pricing.",
    longDescription:
      "Designed and developed a high-converting landing page for REGex, a SaaS CRM targeting real estate wholesalers. Created a dark-themed, modern interface with strategic use of green gradients to drive conversions. Implemented persuasion-focused sections including problem-agitation copy, social proof with testimonials, ROI calculator, tiered pricing cards, and FAQ accordion. Built with Next.js and Tailwind CSS, fully responsive across all devices with smooth animations, strategic CTAs, and trust indicators.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    tags: ["Landing Page", "UI/UX", "CRO", "SaaS"],
    gradient: "from-green-600/20 to-emerald-600/20",
    images: [
      "/images/regex-1.jpg",
      "/images/regex-2.jpg",
      "/images/regex-3.jpg",
    ],
    highlights: [
      "Dark-themed design with green accent palette engineered for maximum conversion",
      "Problem-agitation hero section with trust indicators - ratings, user counts, deal volume",
      "ROI calculator letting prospects quantify their potential gains before signing up",
      "Tiered pricing cards with highlighted recommended plan and feature comparison",
      "Testimonials and social proof section with real wholesaler success stories",
      "Fully responsive with smooth Framer Motion animations and strategic CTA placement",
    ],
  },
  {
    slug: "brand-os",
    title: "Brand OS – AI-Powered Design System & Brand Identity Creator",
    role: "Full-Stack Developer",
    category: "AI",
    filterSlugs: ["ai", "saas", "fullstack"],
    highlight: "AI Brand System",
    description:
      "AI-powered SaaS app for creating comprehensive brand systems through natural conversation - strategy, voice, colors, typography, and logo generation in one place.",
    longDescription:
      "Built an AI-powered SaaS web app for creating comprehensive brand systems. Users interact with an AI consultant (powered by OpenAI & Anthropic Claude) to develop brand strategy, voice guides, color palettes, typography, and logos through natural conversation. Features Google Fonts and FontShare integration with live previews, color management with auto RGB/HSL conversion, moodboard visualization, and design token export in JSON, CSS, and Tailwind formats. Built with Next.js 14, TypeScript, PostgreSQL, Prisma ORM, and TanStack Query.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "OpenAI API",
      "Anthropic Claude",
      "TanStack Query",
    ],
    tags: ["AI", "SaaS", "Design Systems", "Branding"],
    gradient: "from-violet-600/20 to-purple-600/20",
    liveUrl: "https://design-system-creator-fawn.vercel.app/demo",
    images: [
      "/images/brandos-1.jpg",
      "/images/brandos-2.jpg",
      "/images/brandos-3.jpg",
      "/images/brandos-4.jpg",
    ],
    highlights: [
      "AI consultant (GPT & Claude) guides users through brand strategy via natural conversation",
      "Google Fonts and FontShare integration with live typography previews",
      "Color palette builder with automatic RGB/HSL conversion and moodboard visualization",
      "Design token export in JSON, CSS variables, and Tailwind config formats",
      "Multi-step project board tracking progress across strategy, voice, colors, typography, logo, and export",
      "Full SaaS architecture with PostgreSQL, Prisma ORM, and TanStack Query for data management",
    ],
  },
  {
    slug: "scorebug",
    title: "Scorebug – Live Sports Scoring Application",
    role: "Full-Stack Developer – Frontend Architecture & UI/UX Design",
    category: "Full-Stack",
    filterSlugs: ["fullstack"],
    highlight: "Real-Time Scoreboard",
    description:
      "Broadcast-quality live basketball scoring app with real-time stats, team management, a flexible theme engine, and full game history - built with React 19 and Tailwind CSS v4.",
    longDescription:
      "Built a broadcast-quality live basketball scoring app using React 19, TypeScript, and Tailwind CSS v4. Features a real-time scoreboard with click-to-update stats and animated feedback, team management with custom colors and player rosters, and a flexible theme engine with ESPN/TNT-inspired presets plus a custom theme builder. Persistent localStorage architecture auto-saves game progress. Fully responsive across desktop and mobile.",
    tech: ["React 19", "TypeScript", "Tailwind CSS v4"],
    tags: ["Sports", "Real-Time", "Frontend", "UI/UX"],
    gradient: "from-orange-600/20 to-amber-600/20",
    images: [
      "/images/scorebug-1.jpg",
      "/images/scorebug-2.jpg",
      "/images/scorebug-3.jpg",
      "/images/scorebug-4.jpg",
      "/images/scorebug-5.jpg",
      "/images/scorebug-6.jpg",
    ],
    highlights: [
      "Real-time scoreboard with click-to-increment stats and animated score feedback",
      "Team management system with custom team colors and full player roster support",
      "Flexible theme engine with ESPN/TNT-inspired presets and a custom theme builder",
      "Persistent localStorage architecture - game progress auto-saves across sessions",
      "Game history view with full box scores for completed games",
      "Configurable stat columns (PTS, REB, AST, STL, BLK, PF, 3PT) with quick presets",
    ],
  },
  {
    slug: "regex-crm",
    title: "Full-Stack Real Estate Wholesaling CRM with Stripe & Auth",
    role: "Full-Stack Developer",
    category: "SaaS",
    filterSlugs: ["saas", "fullstack"],
    highlight: "Production SaaS CRM",
    description:
      "Production-ready SaaS CRM for real estate wholesalers - Kanban pipelines, deal tracking, Stripe billing, calendar scheduling, and multi-tenant architecture built on Next.js and PostgreSQL.",
    longDescription:
      "Production-ready SaaS CRM for real estate wholesalers built with Next.js 16 App Router, TypeScript, and PostgreSQL. Implemented secure authentication with NextAuth.js v5, Stripe subscription billing with tiered plans, and a comprehensive REST API. Features Kanban-style pipelines for sellers, buyers, and deals, a deal calculator, document management, calendar scheduling, task automation, and team collaboration. Uses Prisma ORM for type-safe database operations, deployed on Vercel with Neon PostgreSQL. Includes full onboarding flow, compliance tracking, and multi-tenant architecture.",
    tech: [
      "Next.js 16",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "NextAuth.js v5",
      "Stripe",
      "Neon",
    ],
    tags: ["SaaS", "CRM", "Real Estate", "Stripe"],
    gradient: "from-blue-600/20 to-indigo-600/20",
    images: [
      "/images/regex-crm-1.jpg",
      "/images/regex-crm-2.jpg",
      "/images/regex-crm-3.jpg",
    ],
    highlights: [
      "Kanban-style lead pipeline with stages: New Lead, Contacted, Qualified, Offer Sent, Under Contract, Closed",
      "Deal tracker with projected and realized profit - Offer Drafted, Under Contract, In Escrow, Closed views",
      "Stripe subscription billing with tiered plans and full onboarding flow",
      "NextAuth.js v5 authentication with multi-tenant architecture and compliance tracking",
      "Calendar scheduling for property viewings, closings, and follow-ups with today's agenda sidebar",
      "Document management, task automation, and team collaboration features",
    ],
  },
  {
    slug: "draz-investments-group",
    title: "Draz Investments Group – Luxury Real Estate Development Website",
    role: "Web Designer & Developer, Brand Identity",
    category: "Full-Stack",
    filterSlugs: ["fullstack", "mvp"],
    highlight: "Luxury Real Estate Brand",
    description:
      "Full website design and development for a luxury real estate development company - brand identity, investor-facing portfolio pages, and a visual-first design to attract high-net-worth clients.",
    longDescription:
      "Draz Investments Group is a luxury real estate development company that needed a website reflecting their identity, mission, and portfolio. The challenge was crafting a clear message that conveys their business values to visitors and investors. The result: 'A Full Service Luxury Real Estate Development Company' as the hero statement. The rest of the site was kept visual-first to build familiarity with their past projects. The portfolio page is the centerpiece - each project (Malibu, Beverly Hills, Dana Point) gets its own detailed page with full image galleries and written descriptions to give potential investors a thorough overview of the company's history and quality.",
    tech: [
      "Webflow",
      "SCSS",
      "JavaScript",
      "PHP",
      "HTML",
      "Figma",
      "Adobe Photoshop",
    ],
    tags: ["Real Estate", "Web Design", "Brand Identity", "Webflow"],
    gradient: "from-yellow-600/20 to-amber-600/20",
    liveUrl: "https://drazinvestments.com/",
    images: ["/images/draz-1.jpg", "/images/draz-2.jpg", "/images/draz-3.jpg"],
    highlights: [
      "Brand identity and messaging strategy - crafted core value proposition for luxury real estate audience",
      "Visual-first design with full-screen photography to showcase luxury properties",
      "Investor-facing portfolio page listing all past projects: Malibu, Beverly Hills, Dana Point",
      "Individual project detail pages with photo galleries, video embeds, and property descriptions",
      "Full information architecture including About, Why DIG, Portfolio, Services, Press, and Contact sections",
      "Built in Webflow with custom SCSS, JavaScript, and Figma prototyping",
    ],
  },
];

const categoryDot: Record<string, string> = {
  MVP: "bg-sky-400",
  SaaS: "bg-violet-400",
  "Full-Stack": "bg-cyan-400",
  AI: "bg-emerald-400",
};

const defaultDot = "bg-primary/60";

function parseRecommendedSlugs(ids: string): Set<string> {
  if (!ids) return new Set();
  return new Set(ids.split("~").filter(Boolean));
}

function ProjectCard({
  project,
  onOpen,
  onToggleRecommended,
}: {
  project: Project;
  isRecommended: boolean;
  onOpen: () => void;
  onToggleRecommended: (e: React.MouseEvent) => void;
}) {
  const dot = categoryDot[project.category] ?? defaultDot;
  return (
    <div
      className="group rounded-2xl overflow-hidden border border-border/60 bg-card hover:border-primary/30 hover:shadow-[0_8px_40px_rgba(124,101,248,0.10)] transition-all duration-300 cursor-pointer flex flex-col"
      onClick={onOpen}
      data-portfolio-item={project.slug}
    >
      {/* Thumbnail */}
      <div
        className={`aspect-video relative overflow-hidden ${!project.images?.length ? `bg-gradient-to-br ${project.gradient}` : "bg-black"}`}
      >
        {project.images?.length ? (
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

        {/* Category badge */}
        <div
          className="absolute bottom-3 left-3 z-10"
          onClick={onToggleRecommended}
          data-badge={project.slug}
        >
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-medium uppercase tracking-[0.16em] text-white/65 select-none">
            <span className={`w-[5px] h-[5px] rounded-full shrink-0 ${dot}`} />
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pt-4 pb-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-foreground/95 text-[14.5px] leading-snug mb-1.5 group-hover:text-primary transition-colors duration-200 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-[13px] text-muted-foreground/70 leading-relaxed mb-4 line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono text-foreground/35 bg-white/[0.035] border border-white/[0.06] rounded-md px-2 py-[3px]"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[10px] font-mono text-foreground/22 border border-white/[0.04] rounded-md px-2 py-[3px]">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center justify-end pt-3.5 border-t border-white/[0.05] mt-auto">
          <span className="flex items-center gap-1 text-[11px] font-semibold text-primary/55 group-hover:text-primary transition-colors duration-200">
            View case study
            <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </div>
  );
}

function ModalImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Reset whenever the image source changes
  useEffect(() => {
    setLoaded(false);
    setError(false);
    // If the browser already has this image cached, onLoad won't fire
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div className="relative rounded-xl overflow-hidden border border-border/40 bg-[hsl(238,22%,6%)]">
      {!loaded && !error && (
        <div className="absolute inset-0 z-10">
          <div className="w-full h-full bg-[hsl(238,18%,8%)]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(124,101,248,0.04) 40%, rgba(124,101,248,0.08) 50%, rgba(124,101,248,0.04) 60%, transparent 100%)",
              backgroundSize: "200% 100%",
              animation: "shimmerSweep 1.6s ease-in-out infinite",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-full border border-white/[0.05]" />
              <div
                className="absolute inset-0 rounded-full border border-transparent"
                style={{
                  borderTopColor: "hsl(252 83% 67% / 0.7)",
                  borderRightColor: "hsl(252 83% 67% / 0.2)",
                  animation: "spin 0.9s linear infinite",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-1 h-1 rounded-full bg-primary/50"
                  style={{ animation: "pulse 0.9s ease-in-out infinite" }}
                />
              </div>
            </div>
          </div>
          <div className="aspect-video w-full" />
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setLoaded(true);
          setError(true);
        }}
        className="w-full h-auto block"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.35s ease" }}
      />
    </div>
  );
}

function ProjectModal({
  project,
  allProjects,
  onClose,
  onSelect,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  project: Project;
  allProjects: Project[];
  onClose: () => void;
  onSelect: (p: Project) => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const others = allProjects.filter((p) => p.slug !== project.slug);
  const [otherOffset, setOtherOffset] = useState(0);
  const VISIBLE_OTHERS = 3;

  const visibleOthers = others.slice(otherOffset, otherOffset + VISIBLE_OTHERS);
  const canGoPrev = otherOffset > 0;
  const canGoNext = otherOffset + VISIBLE_OTHERS < others.length;

  useEffect(() => {
    setOtherOffset(0);
  }, [project.slug]);

  // Preload current project images immediately on switch
  useEffect(() => {
    project.images?.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
    // Also preload thumbnail of every other project for smooth "More Projects" browsing
    allProjects.forEach((p) => {
      if (p.slug !== project.slug && p.images?.[0]) {
        const img = new window.Image();
        img.src = p.images[0];
      }
    });
  }, [project.slug, allProjects]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  const projectUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/project/${project.slug}`
      : `/project/${project.slug}`;

  const [copiedUrl, setCopiedUrl] = useState(false);
  const copyProjectUrl = () => {
    navigator.clipboard.writeText(projectUrl).then(() => {
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      data-modal="project"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal panel — flex column, no single scroll; each column scrolls independently on lg */}
      <div className="relative w-full max-w-6xl max-h-[92vh] bg-card border border-border/60 rounded-2xl shadow-2xl shadow-black/50 z-10 flex flex-col overflow-hidden">

        {/* Header — always pinned at top (parent doesn't scroll) */}
        <div className="shrink-0 flex items-center justify-between px-6 py-4 border-b border-border/50 bg-card/96 backdrop-blur-sm z-20">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={onPrev}
              disabled={!hasPrev}
              className="shrink-0 flex items-center justify-center w-7 h-7 rounded-lg border border-border/50 text-muted-foreground hover:bg-muted/40 hover:text-foreground disabled:opacity-20 transition-all"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onNext}
              disabled={!hasNext}
              className="shrink-0 flex items-center justify-center w-7 h-7 rounded-lg border border-border/50 text-muted-foreground hover:bg-muted/40 hover:text-foreground disabled:opacity-20 transition-all"
              aria-label="Next project"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <h2 className="font-display font-bold text-foreground text-base sm:text-[17px] leading-tight truncate">
              {project.title}
            </h2>
          </div>
          <div className="flex items-center gap-2 shrink-0 ml-4">
            <button
              onClick={copyProjectUrl}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/50 text-muted-foreground text-xs font-semibold hover:bg-muted/40 hover:text-foreground transition-all"
              title="Copy link to this project"
            >
              {copiedUrl ? (
                <Check className="w-3 h-3 text-emerald-400" />
              ) : (
                <Link2 className="w-3 h-3" />
              )}
              {copiedUrl ? "Copied!" : "Share"}
            </button>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all"
              >
                <ExternalLink className="w-3 h-3" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/50 text-foreground text-xs font-semibold hover:bg-muted/40 transition-all"
              >
                <Github className="w-3 h-3" />
                Source
              </a>
            )}
            <button
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 rounded-lg border border-border/50 text-muted-foreground hover:bg-muted/40 hover:text-foreground transition-all"
              aria-label="Close"
              data-action="close-modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Two-column body
            Mobile: single scroll (overflow-y-auto, columns stacked)
            Desktop lg: overflow-hidden — each column scrolls independently */}
        <div className="flex-1 overflow-y-auto lg:overflow-hidden flex flex-col lg:flex-row lg:items-stretch min-h-0">

          {/* LEFT — independent scroll on desktop */}
          <div className="lg:w-[35%] flex flex-col border-b lg:border-b-0 lg:border-r border-border/40 p-6 gap-6 shrink-0 lg:overflow-y-auto lg:min-h-0">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground/45 mb-1.5">
                My Role
              </p>
              <p className="text-[13.5px] text-foreground font-medium leading-relaxed">
                {project.role}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground/45 mb-1.5">
                Project Description
              </p>
              <p className="text-[13.5px] text-muted-foreground/80 leading-relaxed">
                {project.longDescription}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground/45 mb-2">
                Skills &amp; Technologies
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono text-primary/75 bg-primary/[0.07] border border-primary/[0.14] rounded-lg px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground/45 mb-2">
                Key Highlights
              </p>
              <ul className="space-y-2.5">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[13px] text-muted-foreground/80"
                  >
                    <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile links */}
            <div className="flex flex-wrap items-center gap-3 sm:hidden pt-1">
              <button
                onClick={copyProjectUrl}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border/50 text-muted-foreground text-sm font-semibold hover:bg-muted/40 transition-all"
              >
                {copiedUrl ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Link2 className="w-3.5 h-3.5" />
                )}
                {copiedUrl ? "Copied!" : "Share"}
              </button>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border/50 text-foreground text-sm font-semibold hover:bg-muted/40 transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  Source
                </a>
              )}
            </div>
          </div>

          {/* RIGHT — independent scroll on desktop (images + more projects) */}
          <div className="flex-1 flex flex-col lg:overflow-y-auto lg:min-h-0">
            <div className="p-4 space-y-3">
              {project.images && project.images.length > 0 ? (
                project.images.map((src, i) => (
                  <ModalImage
                    key={`${project.slug}-img-${i}`}
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                  />
                ))
              ) : (
                <div
                  className={`w-full h-48 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                >
                  <span className="text-sm text-white/35 font-mono">
                    No preview available
                  </span>
                </div>
              )}
            </div>

            {/* More Projects carousel */}
            <div className="border-t border-border/40 px-4 pt-5 pb-6">
              <p className="text-[13px] font-semibold text-foreground/80 mb-4">
                More Projects
              </p>
              <div className="relative flex items-center gap-2">
                <button
                  onClick={() => setOtherOffset((o) => Math.max(0, o - 1))}
                  disabled={!canGoPrev}
                  className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-border/50 bg-card text-muted-foreground hover:bg-muted/50 hover:text-foreground disabled:opacity-20 transition-all"
                  aria-label="Previous projects"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex-1 grid grid-cols-3 gap-3">
                  {visibleOthers.map((p) => (
                    <button
                      key={p.slug}
                      onClick={() => onSelect(p)}
                      className="group text-left overflow-hidden hover:opacity-85 transition-opacity"
                      data-related-project={p.slug}
                    >
                      <div
                        className={`w-full aspect-[4/3] rounded-xl overflow-hidden ${p.images?.length ? "bg-black" : `bg-gradient-to-br ${p.gradient}`}`}
                      >
                        {p.images?.length ? (
                          <img
                            src={p.images[0]}
                            alt={p.title}
                            className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <div
                              className="absolute inset-0 opacity-25"
                              style={{
                                backgroundImage:
                                  "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
                                backgroundSize: "12px 12px",
                              }}
                            />
                          </div>
                        )}
                      </div>
                      <p className="mt-1.5 text-[11.5px] font-medium text-foreground/70 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                        {p.title}
                      </p>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() =>
                    setOtherOffset((o) =>
                      Math.min(others.length - VISIBLE_OTHERS, o + 1),
                    )
                  }
                  disabled={!canGoNext}
                  className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-border/50 bg-card text-muted-foreground hover:bg-muted/50 hover:text-foreground disabled:opacity-20 transition-all"
                  aria-label="Next projects"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Project({
  initialSlug,
  initialCategory,
  initialRecommendedIds,
}: {
  initialSlug?: string;
  initialCategory?: string;
  initialRecommendedIds?: string;
}) {
  const [, setLocation] = useLocation();
  const closingRef = useRef(false);

  const [recommended, setRecommended] = useState<Set<string>>(() => {
    if (initialRecommendedIds)
      return parseRecommendedSlugs(initialRecommendedIds);
    return new Set();
  });

  const [activeCategory, setActiveCategory] = useState<string>(() => {
    if (initialRecommendedIds) {
      const decoded = parseRecommendedSlugs(initialRecommendedIds);
      return decoded.size > 0 ? "recommended" : "all";
    }
    return initialCategory || "all";
  });

  const [selectedSlug, setSelectedSlug] = useState<string | null>(
    initialSlug ?? null,
  );
  const [visibleCount, setVisibleCount] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (initialRecommendedIds && !closingRef.current) {
      const decoded = parseRecommendedSlugs(initialRecommendedIds);
      if (decoded.size > 0) {
        setRecommended(decoded);
        setActiveCategory("saved");
      }
      setTimeout(() => {
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [initialRecommendedIds]);

  useEffect(() => {
    if (initialSlug) setSelectedSlug(initialSlug);
  }, [initialSlug]);

  useEffect(() => {
    if (initialCategory && !closingRef.current) {
      setActiveCategory(initialCategory);
      setTimeout(() => {
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [initialCategory]);

  useEffect(() => {
    setVisibleCount(3);
  }, [searchQuery]);

  useEffect(() => {
    if (selectedSlug) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedSlug]);

  const categoryBaseUrl =
    activeCategory === "saved"
      ? recommended.size > 0
        ? `/saved/${Array.from(recommended).join("~")}`
        : "/"
      : activeCategory === "all"
        ? "/"
        : `/category/${activeCategory}`;

  const toggleRecommended = useCallback(
    (slug: string, e: React.MouseEvent) => {
      e.stopPropagation();
      setRecommended((prev) => {
        const next = new Set(prev);
        if (next.has(slug)) next.delete(slug);
        else next.add(slug);
        if (activeCategory === "saved") {
          if (next.size > 0)
            setLocation(`/saved/${Array.from(next).join("~")}`);
          else {
            setActiveCategory("all");
            setLocation("/");
          }
        }
        return next;
      });
    },
    [activeCategory, setLocation],
  );

  const getRecommendedUrl = () => {
    if (recommended.size === 0) return "";
    const ids = Array.from(recommended).join("~");
    const base = typeof window !== "undefined" ? window.location.origin : "";
    return `${base}/saved/${ids}`;
  };

  const copyRecommendedLink = () => {
    const url = getRecommendedUrl();
    if (url) {
      navigator.clipboard.writeText(url).then(() => {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      });
    }
  };

  // First 12 projects are the normal "All" pool reachable via load more
  const BASE_LIMIT = 12;
  const regularPool = projects.slice(0, BASE_LIMIT);
  // Saved projects beyond index 12 are pinned to the top of "All"
  const savedBeyondBase = projects
    .slice(BASE_LIMIT)
    .filter((p) => recommended.has(p.slug));

  const categoryFiltered =
    activeCategory === "saved"
      ? projects.filter((p) => recommended.has(p.slug))
      : activeCategory === "all"
        ? [...savedBeyondBase, ...regularPool]
        : projects.filter((p) => p.filterSlugs.includes(activeCategory));

  const rawFiltered = searchQuery.trim()
    ? projects.filter((p) => {
      const q = searchQuery.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.longDescription.toLowerCase().includes(q) ||
        p.highlight.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q)) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.highlights.some((h) => h.toLowerCase().includes(q))
      );
    })
    : categoryFiltered;

  // Deduplicate by slug
  const seenSlugs = new Set<string>();
  const filteredProjects = rawFiltered.filter((p) => {
    if (seenSlugs.has(p.slug)) return false;
    seenSlugs.add(p.slug);
    return true;
  });

  // Pool controlled by visibleCount / load more (excludes always-visible pinned items)
  const loadMorePool =
    activeCategory === "all"
      ? regularPool
      : activeCategory === "saved"
        ? []
        : filteredProjects;

  // What is actually rendered in the grid
  const visibleProjects =
    activeCategory === "saved"
      ? filteredProjects
      : searchQuery.trim()
        ? filteredProjects
        : activeCategory === "all"
          ? [...savedBeyondBase, ...regularPool.slice(0, visibleCount)]
          : filteredProjects.slice(0, visibleCount);

  // Show load more only when not saved, not searching, cap not yet reached, and more items exist
  const showLoadMore =
    activeCategory !== "saved" &&
    !searchQuery.trim() &&
    visibleCount < BASE_LIMIT &&
    loadMorePool.length > visibleCount;

  const handleCategoryChange = (slug: string) => {
    setActiveCategory(slug);
    setVisibleCount(3);
    setSearchQuery("");
    if (slug === "saved") {
      if (recommended.size > 0)
        setLocation(`/saved/${Array.from(recommended).join("~")}`);
      else setLocation("/");
    } else if (slug === "all") {
      setLocation("/");
    } else {
      setLocation(`/category/${slug}`);
    }
  };

  const openProject = (project: Project) => {
    closingRef.current = false;
    setSelectedSlug(project.slug);
    setLocation(`/project/${project.slug}`);
  };

  const closeProject = () => {
    closingRef.current = true;
    setSelectedSlug(null);
    setLocation(categoryBaseUrl);
    setTimeout(() => {
      closingRef.current = false;
    }, 200);
  };

  const selectedProject = selectedSlug
    ? (projects.find((p) => p.slug === selectedSlug) ?? null)
    : null;
  const selectedInFiltered = selectedProject
    ? filteredProjects.findIndex((p) => p.slug === selectedSlug)
    : -1;
  const hasPrev = selectedInFiltered > 0;
  const hasNext =
    selectedInFiltered < filteredProjects.length - 1 &&
    selectedInFiltered !== -1;

  const handlePrev = () => {
    if (hasPrev) {
      const prev = filteredProjects[selectedInFiltered - 1];
      setSelectedSlug(prev.slug);
      setLocation(`/project/${prev.slug}`);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      const next = filteredProjects[selectedInFiltered + 1];
      setSelectedSlug(next.slug);
      setLocation(`/project/${next.slug}`);
    }
  };

  return (
    <section id="projects" className="py-24 relative section-divide">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] font-mono text-muted-foreground/30 tracking-widest">
              04
            </span>
            <div className="w-8 h-px bg-border/60" />
            <span className="section-label">Selected Work</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground leading-tight">
                Projects I've Shipped
              </h2>
              <p className="mt-2 text-muted-foreground/70 text-[15px] max-w-lg leading-relaxed">
                Real client work - MVPs, SaaS platforms, AI integrations, and
                production-ready applications.
              </p>
            </div>
            {/* Search */}
            <div className="relative shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/40 pointer-events-none" />
              <input
                data-input="search-projects"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects…"
                className="w-full sm:w-56 pl-9 pr-8 py-2 rounded-xl text-[13px] font-mono bg-white/[0.035] border border-white/[0.07] text-foreground placeholder:text-muted-foreground/35 focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all"
              />
              {searchQuery && (
                <button
                  data-action="clear-search"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground/45 hover:text-foreground transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Filter tabs - only shown when there are saved projects */}
          {recommended.size > 0 && (
            <div
              className="flex flex-wrap items-center gap-1.5"
              data-filters="projects"
            >
              {filterCategories.map((cat) => (
                <button
                  key={cat.slug}
                  data-filter={cat.slug}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`px-3.5 py-1.5 rounded-lg text-[12px] font-mono font-medium transition-all ${activeCategory === cat.slug && !searchQuery
                    ? "bg-primary/15 text-primary border border-primary/25"
                    : "text-muted-foreground/65 hover:text-foreground hover:bg-white/[0.04] border border-transparent"
                    }`}
                >
                  {cat.name}
                </button>
              ))}
              <button
                data-filter="saved"
                onClick={() =>
                  handleCategoryChange(
                    activeCategory === "saved" ? "all" : "saved",
                  )
                }
                className={`px-3.5 py-1.5 rounded-lg text-[12px] font-mono font-medium transition-all flex items-center gap-1.5 ${activeCategory === "saved" && !searchQuery
                  ? "bg-amber-500/15 text-amber-400 border border-amber-500/25"
                  : "text-muted-foreground/65 hover:text-amber-400/80 hover:bg-amber-500/10 border border-transparent"
                  }`}
              >
                <ThumbsUp className="w-3 h-3" />
                Saved
                <span
                  className={`inline-flex items-center justify-center w-4 h-4 rounded-full text-[9px] font-bold leading-none ${activeCategory === "saved" && !searchQuery
                    ? "bg-amber-400/25 text-amber-300"
                    : "bg-white/[0.07] text-muted-foreground/50"
                    }`}
                >
                  {recommended.size}
                </span>
              </button>
              <button
                data-action="copy-saved-link"
                onClick={copyRecommendedLink}
                className="px-3 py-1.5 rounded-lg text-[12px] font-mono font-medium text-muted-foreground/45 hover:text-foreground hover:bg-white/[0.04] transition-all flex items-center gap-1.5 border border-transparent"
                title="Copy shareable link"
              >
                {copiedLink ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Link2 className="w-3 h-3" />
                )}
                {copiedLink ? "Copied" : "Share"}
              </button>
            </div>
          )}

          {searchQuery && (
            <p className="mt-3 text-[11px] font-mono text-muted-foreground/30">
              {filteredProjects.length} result
              {filteredProjects.length !== 1 ? "s" : ""} for &ldquo;
              {searchQuery}&rdquo;
            </p>
          )}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              isRecommended={recommended.has(project.slug)}
              onOpen={() => openProject(project)}
              onToggleRecommended={(e) => toggleRecommended(project.slug, e)}
            />
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground/45 font-mono text-[13px]">
              {searchQuery.trim()
                ? `No projects match "${searchQuery}".`
                : activeCategory === "saved"
                  ? "No saved projects yet. Click the category dot on any card to save it."
                  : "No projects in this category."}
            </p>
          </div>
        )}

        {/* Load more */}
        {showLoadMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount((v) => Math.min(BASE_LIMIT, v + 3))}
              data-action="load-more"
              className="px-6 py-2.5 rounded-xl border border-white/[0.07] bg-white/[0.025] text-[13px] font-mono font-medium text-muted-foreground/65 hover:border-primary/30 hover:text-foreground hover:bg-white/[0.04] transition-all"
            >
              Load {Math.min(3, loadMorePool.length - visibleCount)} more
              <span className="ml-2 text-muted-foreground/30">
                ({Math.min(loadMorePool.length, BASE_LIMIT) - visibleCount} remaining)
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          allProjects={projects}
          onClose={closeProject}
          onSelect={(p) => {
            setSelectedSlug(p.slug);
            setLocation(`/project/${p.slug}`);
          }}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={hasPrev}
          hasNext={hasNext}
        />
      )}
    </section>
  );
}
