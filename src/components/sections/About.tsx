const coreStack = [
  "React", "Next.js", "TypeScript", "Node.js",
  "Python", "FastAPI", "PostgreSQL", "Tailwind CSS",
  "Drizzle ORM", "Stripe", "OpenAI API", "AWS",
  "Azure", "Docker", "Vercel", "GitHub Actions",
];

const bioParagraphs = [
  "I'm a senior full-stack developer with 10+ years of experience building web applications across the entire stack - from database schema design to polished, production-ready UIs. I specialize in taking ideas from concept to deployed product, fast and without cutting corners.",
  "I've built SaaS platforms, CRMs, healthcare portals, e-commerce systems, and AI-enhanced web products for startups and growing businesses. My workflow combines strong system architecture with modern tooling - and where it genuinely adds value, AI capabilities like LLM integrations and automation pipelines.",
  "I bring structure to complex builds - clear scoping, disciplined architecture choices, and reliable delivery. Every project I take on gets the same standard: production-quality code, thoughtful documentation, and a codebase that stays maintainable long after launch.",
];

export function About() {
  return (
    <section id="about" className="py-28 relative am-section-sep" data-am-section="about">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Section eyebrow ── */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-[10px] font-mono text-muted-foreground/30 tabular-nums tracking-widest">01</span>
          <div className="w-8 h-px bg-border/55" />
          <span className="am-eyebrow">About</span>
          <div className="flex-1 h-px bg-gradient-to-r from-border/40 to-transparent" />
        </div>

        {/* ── Name row ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-8 mb-8 border-b border-border/35">
          <div>
            <h2
              className="text-4xl md:text-5xl xl:text-[3.6rem] font-display font-bold text-foreground leading-[1.07] mb-2"
              data-am-el="name"
            >
              Jhonathan Hunnel
            </h2>
            <p className="text-[13px] font-mono text-primary tracking-[0.16em] uppercase">
              Senior Full-Stack Engineer · SaaS, Web &amp; AI Applications
            </p>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-65" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[11px] font-mono text-emerald-400/80 tracking-[0.16em] uppercase">
                Available for new projects
              </span>
            </div>
          </div>
        </div>

        {/* ── Bio + Stack ── */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 xl:gap-16">

          {/* Bio */}
          <div>
            <div className="space-y-5 text-[15px] text-muted-foreground/85 leading-[1.9] mb-10">
              {bioParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <blockquote className="border-l-[2px] border-primary/35 pl-5 py-0.5">
              <p className="text-[15px] text-muted-foreground/60 leading-relaxed italic">
                "The difference between a good app and a great one is the decisions made before the first line of code."
              </p>
            </blockquote>
          </div>

          {/* Core stack */}
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl border border-border/55 bg-card/50 overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border/40 bg-card/30">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/45" />
                <p className="text-[10px] font-mono text-muted-foreground/45 uppercase tracking-[0.2em]">
                  Core Stack
                </p>
              </div>
              <div className="p-5 flex flex-wrap gap-2">
                {coreStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center text-[11.5px] font-mono text-muted-foreground/75 border border-border/55 bg-card/60 rounded-lg px-3 py-1.5 hover:border-primary/30 hover:text-foreground/85 transition-all duration-150"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
