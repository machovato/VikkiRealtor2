import { useState } from "react";

const phases = [
  { id: "loan", label: "The Loan" },
  { id: "search", label: "Find a House" },
  { id: "keys", label: "Get the Keys!" },
];

const stepsData = {
  loan: [
    {
      title: "Connect",
      desc: "Connect with a good loan officer. Have your recent tax returns, bank statements, and paycheck records ready to go. We have several great lenders we can refer you to!",
    },
    {
      title: "Calculate",
      desc: "Calculate with the lender how much you would like to spend on a home, the amount needed for down payment & closing costs.",
    },
    {
      title: "Obtain",
      desc: "Obtain a copy of your pre-qualification letter.",
    },
  ],
  search: [
    {
      title: "Establish",
      desc: "Establish criteria of what you are looking for in a home.",
    },
    {
      title: "Choose",
      desc: "Choose homes you would like to go see based on your criteria and we will schedule your showings.",
    },
    {
      title: "Submit",
      desc: "Submit an offer. Allow us to negotiate on your behalf until you have an executed contract! Submit your Option Fee & Earnest Money to take the house off the market.",
    },
  ],
  keys: [
    {
      title: "Schedule",
      desc: "Schedule an inspector during the Option Period to inspect the property. Let us negotiate repairs if needed.",
    },
    {
      title: "Close",
      desc: "Close transaction at the title company (typically 30-45 days after contract execution). Once the transaction funds, you get the keys!",
    },
    {
      title: "Live",
      desc: "Live happily ever after! (until it's time to sell your home and buy another in the future!)",
    },
  ],
};

export function JourneyHome() {
  const [activePhase, setActivePhase] = useState<"loan" | "search" | "keys">("loan");

  // Calculate the starting index for continuous numbering (1-9)
  const phaseIndex = phases.findIndex((p) => p.id === activePhase);
  const globalStartIdx = phaseIndex * 3;

  return (
    <section id="journey" className="flex flex-col-reverse lg:flex-row min-h-[80vh] w-full bg-surface">
      
      {/* Left: Full 100% Scene Photo (50%) */}
      <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-[80vh] relative overflow-hidden">
        <img
          src="/bg-afternoon.png"
          alt="Afternoon conservatory"
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
      </div>

      {/* Right: Text Content (50%) */}
      <div className="flex w-full lg:w-1/2 flex-col justify-center px-8 py-24 lg:px-16 xl:px-24">
        <span className="eyebrow text-terracotta mb-6 block">First-Time Buyers · Bridge Group</span>
        <h2 className="display-serif text-text-primary text-[clamp(2.5rem,4vw,3.5rem)] mb-4">
          The <em className="display-italic text-gold">Journey</em> Home
        </h2>
        <p className="eyebrow text-text-muted opacity-80 mb-12">Three milestones. Every step guided.</p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {phases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(phase.id as any)}
              className={`eyebrow px-4 py-2 border-b-2 transition-all duration-300 ${
                activePhase === phase.id
                  ? "border-terracotta text-text-primary"
                  : "border-transparent text-text-muted hover:text-text-primary hover:border-gold/50"
              }`}
            >
              {phase.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="relative min-h-[350px]">
          <div className="grid gap-8 animate-rise">
            {stepsData[activePhase].map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg bg-white border border-gold/30 text-gold shadow-sm group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                  {globalStartIdx + idx + 1}
                </div>
                <div>
                  <h4 className="display-serif text-2xl text-text-primary mb-2 transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}
