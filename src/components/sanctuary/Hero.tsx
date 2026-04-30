export function Hero() {
  return (
    <section id="top" className="flex flex-col lg:flex-row min-h-screen w-full bg-background">
      
      {/* Left: Text Content (50%) */}
      <div className="flex w-full lg:w-1/2 flex-col justify-center px-8 py-32 lg:px-16 xl:px-24 relative z-10">
        <div className="mb-8 animate-rise">
          <span className="eyebrow text-terracotta">Houston Real Estate · Bridge Group</span>
        </div>
        <h1 className="display-serif text-text-primary text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-tight">
          Prioritizing <br />
          <em className="display-italic text-gold">Relationships</em> <br />
          over Transactions
        </h1>
        <p className="mt-8 max-w-md text-base leading-relaxed text-text-muted md:text-lg">
          Serving Sugar Land, Houston, and the communities I've called home for 20 years.
        </p>
        
        <div className="mt-12 flex flex-wrap items-center gap-5">
          <a
            href="#properties"
            className="eyebrow bg-terracotta px-8 py-4 text-white transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(216,140,118,0.3)] rounded-sm"
          >
            Explore Estates
          </a>
          <a
            href="#journey"
            className="eyebrow border border-gold px-8 py-4 text-gold transition-all hover:bg-gold hover:text-white rounded-sm"
          >
            Begin Your Journey
          </a>
        </div>

        {/* Vikki Portrait overlapping the center on desktop */}
        <div className="mt-16 lg:absolute lg:right-0 lg:bottom-16 lg:translate-x-1/2 w-full max-w-[320px] mx-auto lg:mx-0 z-20 animate-rise" style={{ animationDelay: '0.2s' }}>
          <div className="relative window-arch overflow-hidden border-4 border-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] bg-white">
            <img
              src="/vikki.jpg"
              alt="Vikki Markey"
              className="w-full h-auto aspect-[3/4] object-cover hover:scale-[1.02] transition-transform duration-1000"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-2 shadow-sm rounded-sm whitespace-nowrap">
            <span className="display-italic text-lg text-gold">Vikki Markey</span>
          </div>
        </div>
      </div>

      {/* Right: Full 100% Scene Photo (50%) */}
      <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen relative overflow-hidden bg-surface">
        <img
          src="/bg-morning.png"
          alt="Morning conservatory"
          className="absolute inset-0 h-full w-full object-cover object-left"
        />
      </div>
      
    </section>
  );
}
