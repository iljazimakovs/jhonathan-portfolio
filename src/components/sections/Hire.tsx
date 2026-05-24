import { Clock, Zap, MessageSquare } from "lucide-react";

const reasons = [
  {
    id: "speed",
    icon: Zap,
    title: "Production-Ready Output",
    description:
      "Every deliverable is built to the same standard - clean architecture, tested code, and deployed products that hold up under real usage.",
  },
  {
    id: "async",
    icon: Clock,
    title: "Full-Stack Ownership",
    description:
      "I handle the entire build - frontend, backend, infrastructure, and integrations - so nothing falls through the cracks between layers.",
  },
  {
    id: "comms",
    icon: MessageSquare,
    title: "Reliable Communication",
    description:
      "Consistent updates, clear progress visibility, and direct answers. You stay informed without having to chase.",
  },
];

export function Hire() {
  return (
    <section id="hire" className="py-28 relative am-section-sep" data-am-section="hire">
      <div className="max-w-7xl mx-auto px-6">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-[10px] font-mono text-muted-foreground/30 tabular-nums tracking-widest">07</span>
          <div className="w-8 h-px bg-border/55" />
          <span className="am-eyebrow">Work Together</span>
          <div className="flex-1 h-px bg-gradient-to-r from-border/40 to-transparent" />
        </div>

        {/* Split layout: big CTA left + reasons right */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-center">

          {/* Left - bold headline + CTA */}
          <div>
            <h2
              className="font-display font-bold text-foreground leading-[1.08] mb-6"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}
              data-am-el="hire-headline"
            >
              Ready to ship
              <br />
              your next
              <br />
              <span className="text-primary">product idea?</span>
            </h2>
            <p className="text-[15px] text-muted-foreground/70 leading-relaxed mb-8 max-w-lg">
              Whether it's an MVP you want to validate in 3 weeks or a full SaaS platform that needs to be
              built right from the start - let's talk about what you're building.
            </p>
          </div>

          {/* Right - stacked reason cards */}
          <div className="flex flex-col gap-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.id}
                  className="flex items-start gap-4 rounded-2xl border border-border/55 bg-card/50 px-5 py-5 hover:border-primary/25 hover:bg-card/80 transition-all duration-200"
                  data-am-reason={reason.id}
                >
                  <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-primary/[0.09] border border-primary/[0.15] shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-primary/65" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-display font-bold text-foreground mb-1.5">{reason.title}</h3>
                    <p className="text-[13px] text-muted-foreground/65 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
