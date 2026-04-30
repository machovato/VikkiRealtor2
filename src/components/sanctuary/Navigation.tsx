export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gold/20 py-4 shadow-sm">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6">

        <a href="#top" className="display-italic text-gold text-2xl tracking-tight transition-opacity hover:opacity-80">
          Vikki Markey
        </a>

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
            >
              {label}
            </a>
          ))}
        </div>

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
