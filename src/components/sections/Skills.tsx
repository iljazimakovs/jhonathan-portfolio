const categories = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      "React", "Next.js", "TypeScript", "Tailwind CSS",
      "Framer Motion", "shadcn/ui", "Radix UI", "Vite", "SASS",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      "Node.js", "Express", "NestJS", "Python",
      "FastAPI", "Flask", "C#/.NET", "tRPC",
      "REST APIs", "GraphQL", "Zod", "BullMQ",
    ],
  },
  {
    id: "databases",
    label: "Databases & ORM",
    skills: [
      "PostgreSQL", "MySQL", "Redis", "MongoDB",
      "Drizzle ORM", "Prisma ORM", "Neon", "Supabase", "Firebase",
    ],
  },
  {
    id: "ai",
    label: "AI & Integrations",
    skills: [
      "OpenAI API", "Anthropic Claude", "Google Gemini", "Google APIs",
      "LangChain", "RAG Architecture", "OpenClaw",
      "Pinecone", "Resend", "Twilio",
    ],
  },
  {
    id: "devops",
    label: "Cloud & DevOps",
    skills: [
      "AWS (S3, EC2, Lambda)", "Azure", "Docker", "Terraform",
      "GitHub Actions CI/CD", "Vercel", "Cloudflare", "Railway",
    ],
  },
  {
    id: "tools",
    label: "Payments & Quality",
    skills: [
      "Stripe", "Stripe Connect", "Stripe Billing",
      "Cypress", "Jest", "Figma", "Linear", "Postman", "Bubble", "Webflow",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 relative am-section-sep" data-am-section="skills">
      <div className="max-w-7xl mx-auto px-6">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-mono text-muted-foreground/30 tabular-nums tracking-widest">03</span>
          <div className="w-8 h-px bg-border/55" />
          <span className="am-eyebrow">Tech Stack</span>
          <div className="flex-1 h-px bg-gradient-to-r from-border/40 to-transparent" />
        </div>

        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl xl:text-[2.8rem] font-display font-bold text-foreground leading-[1.1]">
            Tools of the Trade
          </h2>
          <p className="mt-2.5 text-[15px] text-muted-foreground/65 max-w-xl leading-relaxed">
            The specific technologies I use on every project - modern, production-tested, and battle-hardened.
          </p>
        </div>

        {/* 3×2 category card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-2xl border border-border/60 bg-card/50 overflow-hidden hover:border-primary/25 hover:shadow-[0_4px_30px_rgba(124,101,248,0.06)] transition-all duration-250"
              data-am-stack={cat.id}
            >
              {/* Card header */}
              <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-border/40 bg-card/35">
                <span className="w-[5px] h-[5px] rounded-full bg-primary/55 shrink-0" />
                <span className="text-[11px] font-mono font-semibold text-muted-foreground/55 uppercase tracking-[0.2em]">
                  {cat.label}
                </span>
              </div>

              {/* Skill pills grid */}
              <div className="p-5 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center text-[11.5px] font-mono text-muted-foreground/70 border border-border/55 bg-background/30 rounded-lg px-3 py-1.5 hover:border-primary/30 hover:text-foreground/85 hover:bg-primary/[0.05] transition-all duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
