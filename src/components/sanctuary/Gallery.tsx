export function Services() {
  return (
    <section id="services" className="flex flex-col lg:flex-row min-h-[80vh] w-full bg-background">
      
      {/* Left: Text Content (50%) */}
      <div className="flex w-full lg:w-1/2 flex-col justify-center px-8 py-24 lg:px-16 xl:px-24">
        <span className="eyebrow text-gold mb-6 block">No question is a dumb question</span>
        <h2 className="display-serif text-text-primary text-[clamp(2.5rem,4vw,3.5rem)] mb-6">
          I'm Here <em className="display-italic text-teal">for You.</em>
        </h2>
        <p className="text-text-muted mb-12 leading-relaxed">
          Buying or selling a home is one of the biggest financial decisions you'll ever make — and having a trusted Realtor by your side makes all the difference. I bring experience, market knowledge, and negotiation skills that protect your best interests every step of the way. From accurately pricing a home to navigating contracts, inspections, and deadlines, there are countless details that can quickly become overwhelming when you go it alone.
        </p>

        <div className="flex flex-col gap-12">
          {/* Buyer Services */}
          <div>
            <span className="eyebrow text-teal mb-4 block">Finding Your Perfect Home</span>
            <h3 className="display-serif text-text-primary text-3xl mb-6">Buyer Representation</h3>
            <ul className="space-y-4">
              {[
                "Curated property matching to your vision",
                "Exclusive off-market access and previews",
                "Negotiation strategy refined over 15 years",
                "Seamless coordination from offer to close",
                "Post-close concierge & vendor networks"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-text-muted leading-relaxed">
                  <span className="text-teal mr-4 mt-1">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Seller Services */}
          <div className="pt-8 border-t border-gold/20">
            <span className="eyebrow text-terracotta mb-4 block">Commanding Premium Results</span>
            <h3 className="display-serif text-text-primary text-3xl mb-6">Seller Representation</h3>
            <ul className="space-y-4">
              {[
                "Luxury staging and editorial photography",
                "Targeted marketing to qualified buyers",
                "Pricing strategy backed by market data",
                "Multi-channel exposure: digital + print",
                "$560M+ in successful career transactions"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-text-muted leading-relaxed">
                  <span className="text-terracotta mr-4 mt-1">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Right: Full 100% Scene Photo (50%) */}
      <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-[80vh] relative overflow-hidden bg-surface">
        <img
          src="/bg-afternoon.png"
          alt="Afternoon patio"
          className="absolute inset-0 h-full w-full object-cover object-left"
        />
      </div>
      
    </section>
  );
}
