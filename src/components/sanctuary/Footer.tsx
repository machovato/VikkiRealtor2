export function Footer() {
  return (
    <footer className="bg-surface px-6 py-12 text-text-muted md:px-16 border-t border-gold/20">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 md:flex-row md:items-center">
        <span className="display-italic text-2xl text-gold">
          Vikki Markey <span className="not-italic text-lg tracking-wider text-text-muted ml-2">· Conservatory Estates</span>
        </span>
        <p className="eyebrow">© {new Date().getFullYear()} · Vikki Markey, Broker · TREC #0123456</p>
        <p className="text-xs">Prioritizing Relationships over Transactions. Sugar Land, Texas.</p>
      </div>
    </footer>
  );
}
