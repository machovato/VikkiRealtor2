import { useEffect, useState } from "react";

// White-glow text-shadow: invisible on light linen, gives contrast on the photo side
const unveiledTextShadow =
  "0 0 12px rgba(255,255,255,0.85), 0 1px 3px rgba(255,255,255,0.7)";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gold/20 py-4 shadow-sm"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6">

        {/* Logo / name */}
        <a
          href="#top"
          className="display-italic text-gold text-2xl tracking-tight transition-opacity hover:opacity-80"
          style={scrolled ? {} : { textShadow: unveiledTextShadow }}
        >
          Vikki Markey
        </a>

        {/* Nav links */}
        <div className="hidden items-center gap-10 md:flex">
          {[
            ["About", "#about"],
            ["Services", "#services"],
            ["Journey Home", "#journey"],
            ["Properties", "#properties"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="eyebrow text-text-primary transition-all duration-300 hover:text-gold"
              style={scrolled ? {} : { textShadow: unveiledTextShadow }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="#contact"
          className="eyebrow bg-terracotta text-white px-6 py-3 rounded-sm transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(216,140,118,0.3)]"
        >
          Book a Call
        </a>

      </div>
    </nav>
  );
}
