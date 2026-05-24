import { BadgeCheck } from "lucide-react";

const certifications = [
  {
    id: "edchart-js-dev",
    badge: "/images/cert-edchart-js-dev.png",
    title: "Edchart Certified JavaScript Developer",
    issuer: "EDCHART INC",
    level: "Subject Matter Expert",
    year: "2024",
    description:
      "Validates expertise in one of the most widely used programming languages in web development. Covers fundamental concepts such as variables, loops, functions, and objects, along with advanced topics like asynchronous programming, closures, and event handling - demonstrating the ability to build dynamic, interactive web applications using JavaScript.",
    tags: ["JavaScript", "Async Programming", "Closures", "Event Handling", "ES6+", "Subject Matter Expert"],
  },
  {
    id: "aspnet-mvc",
    badge: "/images/cert-edchart-aspnet.png",
    title: "ASP.NET MVC Web Applications Developer",
    issuer: "EdChart",
    level: "Subject Matter Expert",
    year: "2024",
    description:
      "Globally recognized credential validating expertise in building scalable, secure, and responsive web applications using Microsoft's ASP.NET MVC framework. Assesses skills in routing, controllers, Razor views, Entity Framework, and more. Digital badge issued via Credly.",
    tags: ["ASP.NET MVC", "C#", "Entity Framework", "Razor Views", "Routing", "Microsoft"],
  },
  {
    id: "coursera-python-ai",
    badge: "/images/cert-coursera-python.png",
    title: "Python for Everybody Specialization",
    issuer: "Coursera",
    level: "Specialization",
    year: "2024",
    description:
      "Comprehensive specialization covering Python fundamentals, data structures, accessing web data, databases, and data visualization. Builds a strong foundation in Python programming for data-driven and AI-powered application development.",
    tags: ["Python", "Data Structures", "Web APIs", "SQL", "Data Visualization"],
  },
  {
    id: "coursera-ai",
    badge: "/images/cert-coursera-ai.png",
    title: "AI For Everyone",
    issuer: "Coursera",
    level: "Professional Certificate",
    year: "2024",
    description:
      "Andrew Ng's course demystifying AI for practitioners and builders. Covers AI capabilities, machine learning workflows, building AI projects, and navigating AI strategy - giving a practical understanding of how to integrate AI features into real-world products.",
    tags: ["Artificial Intelligence", "Machine Learning", "AI Strategy", "Deep Learning", "DeepLearning.AI"],
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-28 relative am-section-sep" data-am-section="certifications">
      <div className="max-w-7xl mx-auto px-6">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-mono text-muted-foreground/30 tabular-nums tracking-widest">06</span>
          <div className="w-8 h-px bg-border/55" />
          <span className="am-eyebrow">Certifications</span>
          <div className="flex-1 h-px bg-gradient-to-r from-border/40 to-transparent" />
        </div>

        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl xl:text-[2.8rem] font-display font-bold text-foreground leading-[1.1]">
            Credentials
          </h2>
          <p className="mt-2.5 text-[15px] text-muted-foreground/65 max-w-xl leading-relaxed">
            Verified certifications demonstrating foundational to advanced technical competencies.
          </p>
        </div>

        {/* Horizontal landscape cards - 1 per row on mobile, up to 3 on desktop */}
        <div className="flex flex-col gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group flex flex-col sm:flex-row gap-6 rounded-2xl border border-border/60 bg-card/50 p-6 hover:border-primary/30 hover:shadow-[0_4px_30px_rgba(124,101,248,0.07)] transition-all duration-250"
              data-am-cert={cert.id}
            >
              {/* Badge - larger than before */}
              <div className="shrink-0 flex items-center justify-center w-full sm:w-44 h-44 rounded-xl border border-border/50 bg-background/40 overflow-hidden">
                {cert.badge ? (
                  <img
                    src={cert.badge}
                    alt={`${cert.title} badge`}
                    className="w-full h-full object-contain p-2"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                ) : (
                  <BadgeCheck className="w-10 h-10 text-primary/40" />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 min-w-0 gap-2">
                <div>
                  <h3 className="text-[15px] font-display font-bold text-foreground leading-snug mb-0.5">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[12px] font-semibold text-primary/75">{cert.issuer}</span>
                  </div>
                </div>

                <p className="text-[13px] text-muted-foreground/65 leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-1">
                  {cert.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10.5px] font-mono text-primary/60 bg-primary/[0.06] border border-primary/[0.12] rounded-md px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
