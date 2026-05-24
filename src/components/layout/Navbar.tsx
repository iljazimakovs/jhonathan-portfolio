import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function SiteLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="relative w-9 h-9 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center overflow-hidden">
        <span className="font-display font-black text-primary text-[15px] tracking-tight leading-none">JH</span>
      </div>
      <div className="hidden sm:flex flex-col leading-none ml-0.5">
        <span className="font-display font-bold text-foreground text-[13px] tracking-tight">Jhonathan Hunnel</span>
      </div>
    </div>
  );
}

const navLinks = [
  { label: "About",          href: "#about" },
  { label: "Services",       href: "#services" },
  { label: "Stack",          href: "#skills" },
  { label: "Projects",       href: "#projects" },
  { label: "Industries",     href: "#industries" },
  { label: "Certifications", href: "#certifications" },
];

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="am-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/88 backdrop-blur-2xl border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        <a href="#" className="group" aria-label="Home" data-am-nav="home">
          <SiteLogo className="group-hover:opacity-80 transition-opacity" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              data-am-nav={link.label.toLowerCase()}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary/55 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center">
          <button
            className="flex items-center justify-center w-8 h-8 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-am-action="mobile-menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/97 backdrop-blur-2xl border-b border-border px-6 py-5 flex flex-col gap-4 shadow-2xl shadow-black/30">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[16px] font-medium text-muted-foreground hover:text-primary transition-colors py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
