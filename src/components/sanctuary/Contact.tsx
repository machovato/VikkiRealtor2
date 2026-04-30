import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="flex flex-col-reverse lg:flex-row min-h-[80vh] w-full bg-surface">
      
      {/* Left: Full 100% Scene Photo (50%) */}
      <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-[80vh] relative overflow-hidden">
        <img
          src="/bg-evening.png"
          alt="Evening living room"
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
      </div>

      {/* Right: Text Content (50%) */}
      <div className="flex w-full lg:w-1/2 flex-col justify-center px-8 py-24 lg:px-16 xl:px-24 bg-background">
        <p className="eyebrow text-terracotta mb-6 block">Begin the conversation</p>
        <h2 className="display-serif text-text-primary text-[clamp(2.5rem,4vw,3.5rem)] mb-8">
          Let's find your <br />
          <em className="display-italic text-gold">sanctuary.</em>
        </h2>
        <p className="max-w-md text-text-muted leading-relaxed mb-12">
          A short note is enough. Tell us where you are in the process, what you're hoping for,
          or simply that a listing caught your eye. I respond personally within a day.
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
              ["name", "Your name", "text"],
              ["email", "Email", "email"],
              ["region", "Region of interest (Sugar Land, Heights...)", "text"],
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
            <label htmlFor="msg" className="eyebrow block text-botanical mb-2">
              A few words
            </label>
            <textarea
              id="msg"
              rows={4}
              required
              className="w-full resize-none border-b border-botanical/30 bg-transparent py-3 text-lg text-text-primary placeholder:text-sage/40 transition-all focus:border-botanical focus:outline-none focus:shadow-[0_2px_12px_rgba(118,156,118,0.1)]"
              placeholder="What kind of sanctuary are you imagining?"
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="mt-4 eyebrow inline-block bg-terracotta px-8 py-4 text-white rounded-sm transition-all hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(216,140,118,0.3)] disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
          >
            {sent ? "Received — talk soon" : "Book a Private Consultation"}
          </button>
        </form>

        <dl className="mt-16 space-y-4 text-sm max-w-md border-t border-gold/10 pt-8">
          <div className="flex justify-between border-b border-gold/10 pb-4">
            <dt className="eyebrow text-teal">Studio</dt>
            <dd className="text-text-muted text-right">2245 Texas Drive · Sugar Land</dd>
          </div>
          <div className="flex justify-between">
            <dt className="eyebrow text-teal">Direct</dt>
            <dd className="text-text-muted text-right">vikki@conservatoryestates.com</dd>
          </div>
        </dl>
      </div>
      
    </section>
  );
}
