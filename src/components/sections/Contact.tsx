import { MessageSquare, Shield, Clock, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Production-Ready Delivery",
    description: "Every project is engineered for manufacturing - not just a working prototype on the bench.",
  },
  {
    icon: Clock,
    title: "End-to-End Ownership",
    description: "From architecture and firmware to PCB layout and factory bring-up. One engineer, full accountability.",
  },
  {
    icon: CheckCircle2,
    title: "Clear Communication",
    description: "Regular progress updates, documented deliverables, and no surprises. Your timeline is respected.",
  },
];

export function Contact() {
  return (
    <section id="hire" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to <span className="text-primary">Start a Project</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Looking for a senior embedded engineer who delivers production-grade results? Let's discuss your project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                data-testid={`card-reason-${idx}`}
                className="bg-card border border-border/50 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-card border border-border/50 rounded-xl p-8 md:p-12 text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-display font-bold mb-3">
            Let's Discuss Your Project
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Reach out to start a conversation about your next embedded systems project. I typically respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground bg-muted/30 rounded-lg px-4 py-2 border border-border/30">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Open to new projects
            </div>
            <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground bg-muted/30 rounded-lg px-4 py-2 border border-border/30">
              <Clock className="w-4 h-4 text-primary/70" />
              Response within 24h
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
