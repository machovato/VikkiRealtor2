export function Services() {
  return (
    <section id="services" className="flex flex-col lg:flex-row min-h-[80vh] w-full bg-background">
      
      {/* Left: Text Content (50%) */}
      <div className="flex w-full lg:w-1/2 flex-col justify-center px-8 py-24 lg:px-16 xl:px-24">
        <span className="eyebrow text-gold mb-6 block">How I Can Help</span>
        <h2 className="display-serif text-text-primary text-[clamp(2.5rem,4vw,3.5rem)] mb-12">
          Guiding you to your <em className="display-italic text-teal">sanctuary.</em>
        </h2>

        <div className="flex flex-col gap-12">
          {/* Buyer Services */}
          <div>
            <span className="eyebrow text-teal mb-4 block">For Buyers</span>
            <h3 className="display-serif text-text-primary text-3xl mb-6">Find Your Sanctuary</h3>
            <ul className="space-y-4">
              {[
                "Neighborhood expertise & school district knowledge",
                "Competitive offer strategies in a tight market",
                "First-time buyer guidance and patience",
                "Negotiation that protects you"
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
            <span className="eyebrow text-terracotta mb-4 block">For Sellers</span>
            <h3 className="display-serif text-text-primary text-3xl mb-6">Sell With Intention</h3>
            <ul className="space-y-4">
              {[
                "Pricing strategy rooted in data, not ego",
                "Professional staging consultation",
                "Marketing that attracts serious buyers",
                "Seamless closing coordination"
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
