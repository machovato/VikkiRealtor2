import { useState } from "react";

const steps = [
  {
    phase: "The Loan",
    num: "01",
    title: "Understanding Your Capacity",
    desc: "Before we look at a single house, we sit down with a trusted local lender to understand not just what you can borrow, but what you are comfortable spending. This protects your peace.",
  },
  {
    phase: "The Search",
    num: "02",
    title: "Walking the Neighborhoods",
    desc: "We don't just look at floor plans. We drive the streets at different times of day. We listen to the traffic. We check the flood plains. We look for the unchangeable things.",
  },
  {
    phase: "The Close",
    num: "03",
    title: "Protecting the Investment",
    desc: "From the inspection period through the appraisal and final walk-through, my team handles the friction. We negotiate fiercely so you don't have to.",
  },
];

export function JourneyHome() {
  const [activeStep, setActiveStep] = useState(1);

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
        <span className="eyebrow text-terracotta mb-6 block">The Journey Home</span>
        <h2 className="display-serif text-text-primary text-[clamp(2.5rem,4vw,3.5rem)] mb-12">
          For First-Time Buyers.
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-botanical to-transparent opacity-20" />

          <div className="space-y-10 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div key={step.num} className="relative pl-16">
                  {/* Node */}
                  <button
                    onClick={() => setActiveStep(idx)}
                    className={`absolute left-4 top-1 -translate-x-1/2 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-500 ${
                      isActive
                        ? "bg-botanical shadow-[0_0_0_6px_rgba(118,156,118,0.15)]"
                        : "bg-surface border border-botanical hover:bg-botanical/10"
                    }`}
                  >
                    <div className={`h-2 w-2 rounded-full ${isActive ? 'bg-white' : 'bg-botanical'}`} />
                  </button>

                  <div 
                    className={`transition-all duration-500 ease-out cursor-pointer ${isActive ? 'opacity-100 translate-y-0' : 'opacity-60 hover:opacity-80'}`}
                    onClick={() => setActiveStep(idx)}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <span className="eyebrow text-botanical">{step.num}</span>
                      <span className="eyebrow text-text-muted tracking-wider">{step.phase}</span>
                    </div>
                    <h3 className={`display-serif transition-all duration-300 ${isActive ? 'text-3xl text-text-primary mb-4' : 'text-2xl text-text-primary'}`}>
                      {step.title}
                    </h3>
                    
                    {isActive && (
                      <div className="animate-rise overflow-hidden">
                        <div className="relative border-l-2 border-terracotta bg-white/60 px-6 py-6 mt-4 rounded-r-md">
                          <p className="relative z-10 text-text-muted leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
    </section>
  );
}
