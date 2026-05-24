const industries = [
  {
    id: "saas",
    number: "01",
    name: "SaaS",
    description:
      "Subscription platforms, multi-tenant architectures, billing systems, usage dashboards, and the full infrastructure modern SaaS companies need to launch and scale.",
    tags: ["Stripe Billing", "Auth", "Multi-tenancy", "Analytics"],
  },
  {
    id: "real-estate",
    number: "02",
    name: "Real Estate",
    description:
      "Lead capture systems, CRM platforms, property portals, MLS integrations, rebate calculators, and conversion-optimized landing pages for real estate professionals.",
    tags: ["Lead Gen", "CRM", "Google Places", "Mapbox"],
  },
  {
    id: "healthcare",
    number: "03",
    name: "Healthcare",
    description:
      "HIPAA-compliant patient intake systems, secure document uploads, e-signature workflows, clinic dashboards, and audit logging for healthcare providers.",
    tags: ["HIPAA", "e-Signature", "AWS S3", "Audit Logs"],
  },
  {
    id: "fintech",
    number: "04",
    name: "FinTech",
    description:
      "Marketing sites for fintech products, ROI calculators, payment infrastructure, investment dashboards, and financial reporting tools.",
    tags: ["Stripe", "Plaid", "ROI Calculators", "Dashboards"],
  },
  {
    id: "ecommerce",
    number: "05",
    name: "E-Commerce",
    description:
      "Custom storefronts, product catalog systems, cart and checkout flows, inventory management, and order tracking integrations.",
    tags: ["Stripe Checkout", "Inventory", "Order Tracking", "Reviews"],
  },
  {
    id: "trade",
    number: "06",
    name: "Trade & Field Services",
    description:
      "Quoting and invoicing platforms, customer management, job scheduling, deposit collection, and automated follow-ups for trade businesses.",
    tags: ["Quoting", "Stripe Deposits", "Scheduling", "SMS/Email"],
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-28 relative am-section-sep" data-am-section="industries">
      <div className="max-w-7xl mx-auto px-6">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-mono text-muted-foreground/30 tabular-nums tracking-widest">05</span>
          <div className="w-8 h-px bg-border/55" />
          <span className="am-eyebrow">Industries</span>
          <div className="flex-1 h-px bg-gradient-to-r from-border/40 to-transparent" />
        </div>

        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl xl:text-[2.8rem] font-display font-bold text-foreground leading-[1.1]">
            Sectors I Know Well
          </h2>
          <p className="mt-2.5 text-[15px] text-muted-foreground/65 max-w-xl leading-relaxed">
            I've shipped real products in each of these verticals - not just demos.
          </p>
        </div>

        {/* Numbered row layout - each industry is a full-width horizontal row */}
        <div className="flex flex-col divide-y divide-border/40 rounded-2xl border border-border/55 overflow-hidden">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 px-6 py-6 bg-card/30 hover:bg-card/60 transition-colors duration-200"
              data-am-industry={ind.id}
            >
              {/* Number */}
              <span className="text-[1.9rem] font-display font-bold text-primary/15 group-hover:text-primary/25 transition-colors tabular-nums leading-none shrink-0 w-12 text-right hidden sm:block">
                {ind.number}
              </span>

              {/* Name */}
              <div className="sm:w-44 shrink-0">
                <span className="text-[15px] font-display font-bold text-foreground/90 group-hover:text-primary transition-colors duration-200">
                  {ind.name}
                </span>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-8 bg-border/40 shrink-0" />

              {/* Description */}
              <p className="text-[13px] text-muted-foreground/65 leading-relaxed flex-1 min-w-0">
                {ind.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 shrink-0 sm:max-w-[220px]">
                {ind.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono text-primary/60 bg-primary/[0.06] border border-primary/[0.12] rounded-md px-2 py-1"
                  >
                    {t}
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
