export function Philosophy() {
  return (
    <section id="about" className="flex flex-col-reverse lg:flex-row min-h-[80vh] w-full bg-surface">
      
      {/* Left: Full 100% Scene Photo (50%) */}
      <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-[80vh] relative overflow-hidden">
        <img
          src="/bg-morning.png"
          alt="Morning conservatory reading nook"
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
      </div>

      {/* Right: Text Content (50%) */}
      <div className="flex w-full lg:w-1/2 flex-col justify-center px-8 py-24 lg:px-16 xl:px-24">
        <span className="eyebrow text-terracotta mb-6">Meet Vikki</span>
        <h2 className="display-serif text-text-primary mb-8 text-[clamp(2.5rem,5vw,4.5rem)]">
          People, not <br />
          <em className="display-italic text-gold">pressure.</em>
        </h2>
        
        <div className="space-y-6 text-lg leading-[1.8] text-text-muted">
          <p>
            For over two decades, I've been more than a realtor in Houston — I've been a neighbor. Born and raised here, I know the streets, the schools, the hidden gems, and the communities that feel like home the moment you arrive.
          </p>
          <p>
            My work is built on trust, not transactions. Whether you're finding your first sanctuary or selling a beloved family estate, we move at your pace.
          </p>
        </div>

        {/* Stats Row */}
        <div className="mt-16 flex flex-wrap items-center gap-y-8">
          <div className="flex flex-col items-center">
            <span className="display-serif text-gold text-4xl mb-2">$560M+</span>
            <span className="eyebrow text-sage">Team Sales</span>
          </div>
          
          <div className="stat-divider">
            <div className="stat-divider-icon" />
          </div>

          <div className="flex flex-col items-center">
            <span className="display-serif text-gold text-4xl mb-2">Mom of 3</span>
            <span className="eyebrow text-sage">Deep Local Roots</span>
          </div>

          <div className="stat-divider hidden xl:flex">
            <div className="stat-divider-icon" />
          </div>

          <div className="flex flex-col items-center">
            <span className="display-serif text-gold text-4xl mb-2">Native</span>
            <span className="eyebrow text-sage">Houston Born</span>
          </div>
        </div>
      </div>
      
    </section>
  );
}
