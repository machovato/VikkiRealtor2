import hillCountry from "@/assets/listing-hill-country.jpg";
import austinBungalow from "@/assets/listing-austin-bungalow.jpg";
import marfaAdobe from "@/assets/listing-marfa-adobe.jpg";

const listings = [
  {
    id: "lst-01",
    img: hillCountry,
    title: "The Riverstone Estate",
    detail: "5 bed · 4.5 bath",
    price: "$1.85M",
    badge: "New"
  },
  {
    id: "lst-02",
    img: austinBungalow,
    title: "The Jasmine Craftsman",
    detail: "3 bed · 2.5 bath",
    price: "$985K",
    badge: null
  },
  {
    id: "lst-03",
    img: marfaAdobe,
    title: "The Piney Point Retreat",
    detail: "4 bed · 4 bath",
    price: "$2.45M",
    badge: "Pending"
  },
];

export function Listings() {
  return (
    <section id="properties" className="flex flex-col lg:flex-row min-h-[80vh] w-full bg-background">
      
      {/* Left: Text Content (50%) */}
      <div className="flex w-full lg:w-1/2 flex-col justify-center px-8 py-24 lg:px-16 xl:px-24">
        <p className="eyebrow text-terracotta mb-6 block">A Curated Index</p>
        <h2 className="display-serif text-text-primary text-[clamp(2.5rem,4vw,3.5rem)] mb-6">
          Sanctuaries, <br />
          <em className="display-italic text-gold">currently open.</em>
        </h2>
        <p className="max-w-md text-text-muted mb-12">
          Every property is personally walked, sat in, and considered before it's offered.
          Private viewings by appointment only.
        </p>

        {/* Compact Property List */}
        <div className="flex flex-col gap-8">
          {listings.map((l) => (
            <article
              key={l.id}
              className="group flex items-center gap-6 pb-8 border-b border-gold/10 last:border-0"
            >
              {/* Soft Window Arch Image Frame - Miniature */}
              <div className="relative w-24 h-32 md:w-32 md:h-40 shrink-0 window-arch overflow-hidden shadow-sm bg-surface border-2 border-white">
                <img
                  src={l.img}
                  alt={l.title}
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.05]"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="display-serif text-2xl text-text-primary truncate">{l.title}</h3>
                  {l.badge && (
                    <span className="eyebrow text-[0.65rem] bg-surface text-terracotta px-2 py-0.5 rounded-sm">
                      {l.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-botanical mb-2">{l.detail}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="display-italic text-lg text-gold">{l.price}</span>
                  <a
                    href="#contact"
                    className="eyebrow text-xs text-text-muted hover:text-terracotta transition-colors"
                  >
                    Inquire →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Right: Full 100% Scene Photo (50%) */}
      <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-[80vh] relative overflow-hidden bg-surface">
        <img
          src="/bg-evening.png"
          alt="Evening living room"
          className="absolute inset-0 h-full w-full object-cover object-left"
        />
      </div>
      
    </section>
  );
}
