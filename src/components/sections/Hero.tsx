import { ArrowRight, Github } from "lucide-react";
import { useEffect, useState } from "react";

const bullets = [
  "Full-stack engineering across the entire product - from architecture to production deployment",
  "Clean, scalable web platforms with AI capabilities integrated where they genuinely matter",
  "Consistent delivery, clear communication, and code built to last beyond the first release",
];

const rotatingPhrases = [
  "that ships fast.",
  "that scales clean.",
  "that builds AI.",
  "that delivers.",
];

/* ─────────────────────────────────────────────
   Orbital SVG diagram (right column)
───────────────────────────────────────────── */
function OrbitalDiagram() {
  const cx = 250, cy = 250;
  const outerR = 183, innerR = 116;

  const toXY = (deg: number, r: number) => {
    const rad = (deg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  const nodes: { label: string; sub: string; deg: number; accentDot?: boolean }[] = [
    { label: "Full-Stack",  sub: "React · Node",     deg: 180,  accentDot: true  },
    { label: "MVP Launch",  sub: "2–4 wks",          deg: 333               },
    { label: "AI Features", sub: "OpenAI · Gemini",  deg: 27                },
    { label: "SaaS",        sub: "Auth · Billing",   deg: 213,  accentDot: true  },
  ];

  const scattered: { text: string; deg: number; r: number }[] = [
    { text: "TypeScript",  deg: 270, r: 225 },
    { text: "Next.js",     deg: 298, r: 213 },
    { text: "PostgreSQL",  deg: 82,  r: 220 },
    { text: "Node.js",     deg: 58,  r: 213 },
    { text: "OpenAI API",  deg: 140, r: 218 },
    { text: "Stripe",      deg: 252, r: 218 },
    { text: "Vercel",      deg: 235, r: 207 },
    { text: "tRPC · REST", deg: 348, r: 207 },
  ];

  const ringDots = [0, 55, 110, 225, 280, 335];

  return (
    <svg
      viewBox="0 0 500 500"
      className="w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] xl:max-w-[540px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="hg-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="hsl(252,83%,67%)" stopOpacity="0.13" />
          <stop offset="60%"  stopColor="hsl(252,83%,67%)" stopOpacity="0.04" />
          <stop offset="100%" stopColor="hsl(252,83%,67%)" stopOpacity="0"    />
        </radialGradient>
        <radialGradient id="hg-center" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="hsl(252,83%,67%)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="hsl(252,83%,67%)" stopOpacity="0"    />
        </radialGradient>
        <filter id="hg-glow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="hg-glow-strong">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <style>{`
          @keyframes hg-spin-cw  { to { transform: rotate(360deg);  } }
          @keyframes hg-spin-ccw { to { transform: rotate(-360deg); } }
          @keyframes hg-float-a {
            0%, 100% { transform: translateY(0px);  }
            50%      { transform: translateY(-5px); }
          }
          @keyframes hg-float-b {
            0%, 100% { transform: translateY(0px);  }
            50%      { transform: translateY(-4px); }
          }
          @keyframes hg-float-c {
            0%, 100% { transform: translateY(0px);  }
            50%      { transform: translateY(-6px); }
          }
          @keyframes hg-float-d {
            0%, 100% { transform: translateY(0px);  }
            50%      { transform: translateY(-3px); }
          }
          @keyframes hg-twinkle {
            0%, 100% { opacity: 0.28; }
            50%      { opacity: 0.58; }
          }
          @keyframes hg-center-pulse {
            0%, 100% { opacity: 0.28; }
            50%      { opacity: 0.52; }
          }
          @keyframes hg-badge-glow {
            0%, 100% { opacity: 1; }
            50%      { opacity: 0.75; }
          }
          @keyframes hg-dot-pulse {
            0%, 100% { opacity: 0.7;  r: 2.5; }
            50%      { opacity: 1;    r: 3.5; }
          }
          @keyframes hg-dash-flow {
            to { stroke-dashoffset: -28; }
          }
          @keyframes hg-satellite-trail {
            0%, 100% { opacity: 1;   }
            50%      { opacity: 0.6; }
          }
        `}</style>
      </defs>

      {/* Ambient background glow */}
      <circle cx={cx} cy={cy} r={220} fill="url(#hg-bg)" />

      {/* ── Outer dashed ring - rotates CW slowly ── */}
      <g style={{ transformOrigin: `${cx}px ${cy}px`, animation: "hg-spin-cw 72s linear infinite" }}>
        <circle
          cx={cx} cy={cy} r={outerR}
          stroke="hsl(252,83%,67%)" strokeOpacity="0.18"
          strokeWidth="1" strokeDasharray="5 9"
        />
        {ringDots.map((deg) => {
          const { x, y } = toXY(deg, outerR);
          return (
            <circle key={`dot-${deg}`} cx={x} cy={y} r={2.5}
              fill="hsl(252,83%,67%)" fillOpacity="0.45"
              filter="url(#hg-glow)"
            />
          );
        })}
      </g>

      {/* ── Satellite dot 1 - bright, fast orbit ── */}
      <g style={{ transformOrigin: `${cx}px ${cy}px`, animation: "hg-spin-cw 9s linear infinite" }}>
        <circle cx={cx + outerR} cy={cy} r={5}
          fill="hsl(252,83%,67%)"
          filter="url(#hg-glow-strong)"
          style={{ animation: "hg-satellite-trail 4.5s ease-in-out infinite" }}
        />
      </g>

      {/* ── Satellite dot 2 - faint, counter-orbit ── */}
      <g style={{ transformOrigin: `${cx}px ${cy}px`, animation: "hg-spin-ccw 15s linear infinite" }}>
        <circle cx={cx + outerR} cy={cy} r={3}
          fill="hsl(252,83%,67%)" fillOpacity="0.35"
          filter="url(#hg-glow)"
        />
      </g>

      {/* ── Inner ring - counter-rotates slowly ── */}
      <g style={{ transformOrigin: `${cx}px ${cy}px`, animation: "hg-spin-ccw 48s linear infinite" }}>
        <circle
          cx={cx} cy={cy} r={innerR}
          stroke="hsl(252,83%,67%)" strokeOpacity="0.3"
          strokeWidth="1"
        />
        {/* small inner ring dots */}
        {[45, 135, 225, 315].map((deg) => {
          const { x, y } = toXY(deg, innerR);
          return (
            <circle key={`idot-${deg}`} cx={x} cy={y} r={1.5}
              fill="hsl(252,83%,67%)" fillOpacity="0.3"
            />
          );
        })}
      </g>

      {/* ── Radial lines - flowing dash animation ── */}
      {nodes.map((n) => {
        const outer = toXY(n.deg, outerR);
        const inner = toXY(n.deg, innerR);
        return (
          <line
            key={`line-${n.label}`}
            x1={inner.x} y1={inner.y}
            x2={outer.x} y2={outer.y}
            stroke="hsl(252,83%,67%)"
            strokeOpacity="0.18"
            strokeWidth="1"
            strokeDasharray="2 5"
            style={{ animation: "hg-dash-flow 2.4s linear infinite" }}
          />
        );
      })}

      {/* ── Scattered tech labels - staggered twinkle ── */}
      {scattered.map((s, i) => {
        const { x, y } = toXY(s.deg, s.r);
        return (
          <text
            key={s.text}
            x={x} y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="hsl(220,15%,92%)"
            fontSize="8.5"
            fontFamily="'JetBrains Mono', monospace"
            fillOpacity="0.32"
            style={{ animation: `hg-twinkle ${3.2 + (i % 4) * 0.6}s ease-in-out ${i * 0.45}s infinite` }}
          >
            {s.text}
          </text>
        );
      })}

      {/* ── Center glow - breathing pulse ── */}
      <circle
        cx={cx} cy={cy} r={76}
        fill="url(#hg-center)"
        style={{ animation: "hg-center-pulse 3.2s ease-in-out infinite" }}
      />

      {/* ── Center card ── */}
      <rect
        x={cx - 58} y={cy - 34}
        width={116} height={68}
        rx={14}
        fill="hsl(238,18%,8%)"
        stroke="hsl(252,83%,67%)" strokeOpacity="0.35" strokeWidth="1"
      />
      <text
        x={cx} y={cy - 6}
        textAnchor="middle"
        fill="hsl(252,83%,67%)"
        fontSize="22"
        fontFamily="'Outfit', sans-serif"
        fontWeight="800"
        filter="url(#hg-glow)"
        letterSpacing="2"
        style={{ animation: "hg-badge-glow 3.2s ease-in-out infinite" }}
      >
        JH
      </text>
      <text
        x={cx} y={cy + 14}
        textAnchor="middle"
        fill="hsl(220,15%,92%)"
        fontSize="7.5"
        fontFamily="'JetBrains Mono', monospace"
        fillOpacity="0.4"
        letterSpacing="2"
      >
        FULL-STACK DEV
      </text>

      {/* ── Node badges - floating, staggered ── */}
      {nodes.map((n, i) => {
        const { x, y } = toXY(n.deg, outerR);
        const W = 98, H = 40;
        const floatAnims = ["hg-float-a", "hg-float-b", "hg-float-c", "hg-float-d"];
        const floatDurs  = [3.4, 4.0, 3.7, 4.3];
        return (
          <g key={`node-${n.label}`}>
            {/* glow halo */}
            <rect
              x={x - W / 2 - 4} y={y - H / 2 - 4}
              width={W + 8} height={H + 8}
              rx={15}
              fill="hsl(252,83%,67%)" fillOpacity="0.06"
            />
            {/* badge bg */}
            <rect
              x={x - W / 2} y={y - H / 2}
              width={W} height={H}
              rx={11}
              fill="hsl(238,18%,9%)"
              stroke="hsl(252,83%,67%)"
              strokeOpacity={n.accentDot ? 0.45 : 0.24}
              strokeWidth="1"
            />
            {/* accent dot */}
            <circle
              cx={x - W / 2 + 10} cy={y}
              r={3}
              fill="hsl(252,83%,67%)"
              fillOpacity={n.accentDot ? 0.75 : 0.32}
              filter={n.accentDot ? "url(#hg-glow)" : undefined}
              style={{ animation: `hg-badge-glow ${2.4 + i * 0.3}s ease-in-out ${i * 0.5}s infinite` }}
            />
            {/* label */}
            <text
              x={x + 2} y={y - 6}
              textAnchor="middle"
              fill="hsl(220,15%,92%)"
              fontSize="10.5"
              fontWeight="600"
              fillOpacity="0.92"
            >
              {n.label}
            </text>
            {/* sub label */}
            <text
              x={x + 2} y={y + 9}
              textAnchor="middle"
              fill="hsl(220,15%,92%)"
              fontSize="7.5"
              fontFamily="'JetBrains Mono', monospace"
              fillOpacity="0.38"
            >
              {n.sub}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Hero section
───────────────────────────────────────────── */
export function Hero() {
  const [idx, setIdx]         = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const iv = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % rotatingPhrases.length);
        setVisible(true);
      }, 340);
    }, 3200);
    return () => clearInterval(iv);
  }, []);

  return (
    <section
      id="am-hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-background"
    >
      {/* subtle grid */}
      <div className="am-grid-lg absolute inset-0 pointer-events-none opacity-25" />
      {/* ambient violet glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "10%", top: "50%", transform: "translateY(-50%)",
          width: "52vw", height: "52vw",
          background: "radial-gradient(circle, hsl(252,83%,67%,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-28 lg:py-0 grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_540px] gap-10 xl:gap-14 items-center">

          {/* ── LEFT ── */}
          <div className="flex flex-col" style={{ animation: "amFadeUp 0.55s ease both" }}>

            {/* headline */}
            <h1
              className="font-display font-bold leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 3.6vw, 3.8rem)" }}
              data-am-el="headline"
            >
              <span className="block text-foreground">Senior Full-Stack</span>
              <span className="block text-foreground">Engineer</span>
              <span
                className="block text-primary"
                style={{
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  opacity:   visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(6px)",
                  minHeight: "1.1em",
                }}
              >
                {rotatingPhrases[idx]}
              </span>
            </h1>

            {/* bullets */}
            <ul className="flex flex-col gap-4 mb-8">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-[5px] w-4 h-4 rounded-full border border-primary/55 flex items-center justify-center shrink-0">
                    <span className="w-[5px] h-[5px] rounded-full bg-primary" />
                  </span>
                  <span className="text-[16px] text-foreground/80 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-[14px] hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-px"
                data-am-cta="view-work"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/users/alonso-fernandez"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-primary/35 text-primary font-semibold text-[14px] hover:bg-primary/[0.08] hover:border-primary/55 transition-all"
                data-am-cta="github"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>

            {/* stats strip */}
            <div className="flex items-stretch rounded-xl border border-white/[0.08] bg-white/[0.03] w-fit overflow-hidden">
              {[
                { value: "10+", label: "Years Exp." },
                { value: "50+", label: "Apps Shipped" },
                { value: "15+", label: "Clients" },
                { value: "3wk", label: "Avg. MVP" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col items-center justify-center px-5 py-3.5 ${i < 3 ? "border-r border-white/[0.08]" : ""}`}
                  data-am-metric={s.label.toLowerCase().replace(/[\s.]/g, "-")}
                >
                  <span className="block text-[22px] font-display font-bold text-foreground leading-none mb-1">
                    {s.value}
                  </span>
                  <span className="text-[11px] font-mono text-muted-foreground/60 uppercase tracking-[0.14em] whitespace-nowrap">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT - orbital diagram ── */}
          <div
            className="flex items-center justify-center mt-10 lg:mt-0"
            style={{ animation: "amFadeUp 0.6s ease 0.15s both" }}
            data-am-el="orbital-diagram"
          >
            <OrbitalDiagram />
          </div>

        </div>
      </div>
    </section>
  );
}
