import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="flex flex-col lg:flex-row min-h-[80vh] w-full bg-surface">
      
      {/* Left: Text Content (50%) */}
      <div className="flex w-full lg:w-1/2 flex-col justify-center px-8 py-24 lg:px-16 xl:px-24 bg-background">
        <p className="eyebrow text-terracotta mb-6 block">Let's Connect</p>
        <h2 className="display-serif text-text-primary text-[clamp(2.5rem,4vw,3.5rem)] mb-3">
          An Open Door <br />
          <em className="display-italic text-gold">Awaits.</em>
        </h2>
        <p className="display-italic text-xl text-gold/80 mb-8">
          Every home has a story. Let's find yours.
        </p>
        <p className="max-w-md text-text-muted leading-relaxed mb-12">
          Whether you are searching for your dream home or ready to list, Vikki is here to guide you with expertise, warmth, and complete discretion.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-8 w-full max-w-md"
        >
          {(
            [
              ["name", "Your Name", "text"],
              ["email", "Email Address", "email"],
            ] as const
          ).map(([id, label, type]) => (
            <div key={id}>
              <label htmlFor={id} className="eyebrow block text-botanical mb-2">
                {label}
              </label>
              <input
                id={id}
                type={type}
                required
                className="w-full border-b border-botanical/30 bg-transparent py-3 text-lg text-text-primary placeholder:text-sage/40 transition-all focus:border-botanical focus:outline-none focus:shadow-[0_2px_12px_rgba(118,156,118,0.1)]"
              />
            </div>
          ))}

          <div>
            <label htmlFor="intent" className="eyebrow block text-botanical mb-2">
              I'm Looking To
            </label>
            <select
              id="intent"
              required
              className="w-full border-b border-botanical/30 bg-transparent py-3 text-lg text-text-primary transition-all focus:border-botanical focus:outline-none focus:shadow-[0_2px_12px_rgba(118,156,118,0.1)] cursor-pointer appearance-none"
            >
              <option value="" disabled selected>Select one...</option>
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
              <option value="both">Buy & Sell</option>
              <option value="explore">Just Exploring</option>
            </select>
          </div>

          <div>
            <label htmlFor="msg" className="eyebrow block text-botanical mb-2">
              Tell me about the home you're imagining...
            </label>
            <textarea
              id="msg"
              rows={4}
              required
              className="w-full resize-none border-b border-botanical/30 bg-transparent py-3 text-lg text-text-primary placeholder:text-sage/40 transition-all focus:border-botanical focus:outline-none focus:shadow-[0_2px_12px_rgba(118,156,118,0.1)]"
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="mt-4 eyebrow inline-block bg-terracotta px-8 py-4 text-white rounded-sm transition-all hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(216,140,118,0.3)] disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
          >
            {sent ? "Received — talk soon" : "Send Inquiry"}
          </button>
        </form>

        <dl className="mt-16 space-y-4 text-sm max-w-md border-t border-gold/10 pt-8">
          <div className="flex justify-between border-b border-gold/10 pb-4">
            <dt className="eyebrow text-teal">Email</dt>
            <dd className="text-text-muted text-right">vikki@bridgegroup.com</dd>
          </div>
          <div className="flex justify-between border-b border-gold/10 pb-4 mt-4">
            <dt className="eyebrow text-teal">Phone</dt>
            <dd className="text-text-muted text-right">(713) 248-5323</dd>
          </div>
          <div className="flex justify-between mt-4">
            <dt className="eyebrow text-teal">Office</dt>
            <dd className="text-text-muted text-right">5800 Post Oak Blvd, Houston, TX 77056</dd>
          </div>
        </dl>
      </div>

      {/* Right: Full 100% Scene Photo (50%) */}
      <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-[80vh] relative overflow-hidden">
        <img
          src="/bg-evening.png"
          alt="Evening living room"
          className="absolute inset-0 h-full w-full object-cover object-left"
        />
      </div>
      
    </section>
  );
}
