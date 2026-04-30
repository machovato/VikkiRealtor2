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
        
        <div className="space-y-6 text-base leading-[1.8] text-text-muted">
          <p>
            My name is Vikki Markey and I am your local realtor for Sugar Land, Houston and the surrounding areas. I grew up in Sugar Land, Texas and attended Clements High School. I am a proud mom of three — one graduate of A&M, one currently enrolled at A&M, and one at George Ranch High School in Richmond, TX.
          </p>
          <p>
            Real estate, to me, is about people — not pressure. I am patient, empathetic, and committed to building a lifelong relationship with you. I will never push you into a decision you don't feel comfortable with. Instead, I will guide you, support you, and advocate for you at every step.
          </p>
          <p>
            As part of the Bridge Group — a team that has sold over $560 Million — you will benefit from proven experience, strong marketing, and powerful negotiation. We offer amazing lender incentives that put money back in your pocket, as well as professional, no-cost photography for listed homes, elegantly hosted open houses, in-house transaction coordinators, and client appreciation events.
          </p>
          <p>
            If you are thinking about buying, selling, or just have questions about the market, I'd truly love to be a resource for you.
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
            <span className="display-serif text-gold text-4xl mb-2">Sugar Land</span>
            <span className="eyebrow text-sage">Born & Raised</span>
          </div>

          <div className="stat-divider hidden xl:flex">
            <div className="stat-divider-icon" />
          </div>

          <div className="flex flex-col items-center">
            <span className="display-serif text-gold text-4xl mb-2">Mom of 3</span>
            <span className="eyebrow text-sage">Family First</span>
          </div>
        </div>
      </div>
      
    </section>
  );
}
