import { Github } from "lucide-react";

const socialLinks = [
  { label: "GitHub", icon: Github, href: "https://github.com/jhonathan-humnel", target: "_blank" },
];

const navCols = [
  {
    heading: "Portfolio",
    links: [
      { label: "About",           href: "#about" },
      { label: "Services",        href: "#services" },
      { label: "Tech Stack",      href: "#skills" },
      { label: "Projects",        href: "#projects" },
    ],
  },
  {
    heading: "More",
    links: [
      { label: "Industries",      href: "#industries" },
      { label: "Certifications",  href: "#certifications" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="am-footer" className="relative border-t border-border/40 bg-background" data-am-section="footer">

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 md:gap-16">

          {/* Left - brand + tagline */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center">
                <span className="font-display font-black text-primary text-[13px] tracking-tight leading-none">JH</span>
              </div>
              <span className="font-display font-bold text-foreground text-[13px] tracking-tight">Jhonathan Hunnel</span>
            </div>
            <p className="text-[13.5px] text-muted-foreground/60 leading-relaxed max-w-xs">
              Senior full-stack engineer building MVPs, SaaS platforms, and AI-enhanced web applications.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              <span className="text-[11px] font-mono text-emerald-400/70 tracking-[0.15em] uppercase">
                Available for new projects
              </span>
            </div>
          </div>

          {/* Nav columns */}
          {navCols.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <p className="text-[10px] font-mono text-muted-foreground/35 uppercase tracking-[0.2em] mb-1">
                {col.heading}
              </p>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13px] text-muted-foreground/55 hover:text-foreground transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] font-mono text-muted-foreground/30">
            © {year} Jhonathan Hunnel. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.target}
                  rel={s.target === "_blank" ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="flex items-center justify-center w-8 h-8 rounded-lg border border-border/45 text-muted-foreground/45 hover:text-foreground hover:border-primary/35 hover:bg-primary/[0.06] transition-all duration-150"
                  data-am-social={s.label.toLowerCase()}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
