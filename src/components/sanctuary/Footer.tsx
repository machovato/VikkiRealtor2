export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface px-6 py-14 text-text-muted border-t border-gold/20">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">

        {/* Left: Brand */}
        <div className="flex flex-col items-center gap-1 md:items-start">
          <span className="display-italic text-2xl text-gold">Vikki Markey</span>
          <span className="eyebrow text-[10px] tracking-[0.25em] text-gold/80 uppercase">
            Bridge Group Team Realtor
          </span>
        </div>

        {/* Center: Bridge Group Logo */}
        <a
          href="https://www.bridgegrouprealty.com"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-80 hover:opacity-100 transition-opacity duration-300"
          aria-label="The Bridge Group"
        >
          <img
            src="/bridge_group_logo.png"
            alt="The Bridge Group — eXp Realty"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Right: Legal */}
        <div className="flex flex-col items-center gap-1 text-center md:items-end md:text-right">
          <p className="eyebrow text-[11px] tracking-widest">
            © {year} Vikki Markey · The Bridge Group · eXp Realty
          </p>
          <p className="text-xs text-text-muted/70">
            Licensed Real Estate Agent · Sugar Land, Texas
          </p>
          <p className="text-xs text-text-muted/70">
            Prioritizing Relationships over Transactions.
          </p>
        </div>

      </div>
    </footer>
  );
}
