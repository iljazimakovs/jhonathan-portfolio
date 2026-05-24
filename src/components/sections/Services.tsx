import { Globe, Zap, Bot, ShoppingCart, RefreshCw, LayoutDashboard, GitBranch, Server } from "lucide-react";

const services = [
  {
    id: "mvp",
    number: "01",
    icon: Zap,
    title: "MVP Development",
    description:
      "From Figma or a napkin sketch to a deployed, working product. I scope tightly, build only what matters, and ship in weeks - not months.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Vercel"],
  },
  {
    id: "saas",
    number: "02",
    icon: Globe,
    title: "SaaS Platform Engineering",
    description:
      "Multi-tenant architecture, subscription billing, role-based auth, email automation - full SaaS stack built for scale from day one.",
    tags: ["Auth", "Stripe Subscriptions", "Multi-tenant", "REST APIs"],
  },
  {
    id: "backend",
    number: "03",
    icon: Server,
    title: "Backend APIs & Integrations",
    description:
      "Well-structured REST and GraphQL APIs, third-party service integrations, webhook pipelines, and background job systems that are easy to reason about and easy to change.",
    tags: ["Node.js", "Python", "FastAPI", "GraphQL"],
  },
  {
    id: "ai",
    number: "04",
    icon: Bot,
    title: "AI-Powered Features",
    description:
      "Integrate LLMs, vision models, and AI automation into your product where it genuinely adds value - chatbots, content generation, document processing, and retrieval-based (RAG) systems.",
    tags: ["OpenAI", "RAG", "LangChain", "Automation"],
  },
  {
    id: "ecommerce",
    number: "05",
    icon: ShoppingCart,
    title: "E-Commerce & Payments",
    description:
      "Custom storefronts, checkout flows, subscription management, and payment infrastructure built on Stripe with clean, tested APIs.",
    tags: ["Stripe", "Checkout", "Webhooks", "Subscriptions"],
  },
  {
    id: "workflows",
    number: "06",
    icon: GitBranch,
    title: "Workflow & Process Automation",
    description:
      "Automate repetitive business operations with robust pipelines - data ingestion, reporting, scheduled jobs, notifications, and integration glue that keeps systems in sync.",
    tags: ["BullMQ", "Cron Jobs", "ETL", "Webhooks"],
  },
  {
    id: "modernization",
    number: "07",
    icon: RefreshCw,
    title: "App Modernization",
    description:
      "Migrate legacy codebases to modern stacks. Rewrite, refactor, or incrementally improve without breaking what's already working in production.",
    tags: ["TypeScript", "Next.js App Router", "Prisma", "Drizzle"],
  },
  {
    id: "dashboards",
    number: "08",
    icon: LayoutDashboard,
    title: "Admin Dashboards & CRMs",
    description:
      "Internal tools, reporting dashboards, and CRM systems that teams actually enjoy using. Real-time data, clean tables, and fast interactions.",
    tags: ["TanStack Query", "Recharts", "shadcn/ui", "tRPC"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 relative am-section-sep" data-am-section="services">
      <div className="max-w-7xl mx-auto px-6">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-mono text-muted-foreground/30 tabular-nums tracking-widest">02</span>
          <div className="w-8 h-px bg-border/55" />
          <span className="am-eyebrow">Services</span>
          <div className="flex-1 h-px bg-gradient-to-r from-border/40 to-transparent" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl xl:text-[2.8rem] font-display font-bold text-foreground leading-[1.1]">
              What I Build
            </h2>
            <p className="mt-2.5 text-[15px] text-muted-foreground/65 max-w-xl leading-relaxed">
              From zero-to-one MVPs to full SaaS platforms - web development and AI features where they count.
            </p>
          </div>
        </div>

        {/* 4×2 icon card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="group relative flex flex-col rounded-2xl border border-border/60 bg-card/50 p-6 hover:border-primary/30 hover:bg-card/80 hover:shadow-[0_6px_36px_rgba(124,101,248,0.08)] transition-all duration-250"
                data-am-service={svc.id}
              >
                {/* Icon + number */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/[0.09] border border-primary/[0.15] group-hover:bg-primary/[0.15] transition-colors">
                    <Icon className="w-5 h-5 text-primary/70" />
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground/22 tabular-nums">{svc.number}</span>
                </div>

                <h3 className="text-[15px] font-display font-bold text-foreground mb-3 leading-snug">
                  {svc.title}
                </h3>
                <p className="text-[13px] text-muted-foreground/70 leading-relaxed flex-1 mb-5">
                  {svc.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/35">
                  {svc.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10.5px] font-mono text-muted-foreground/50 border border-border/50 bg-white/[0.025] rounded-md px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
