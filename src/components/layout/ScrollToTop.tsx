import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 bg-card/80 backdrop-blur-md text-primary shadow-lg shadow-primary/10 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-200"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.25s ease, transform 0.25s ease, background-color 0.2s, color 0.2s, box-shadow 0.2s",
      }}
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
