import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/sanctuary/Navigation";
import { Hero } from "@/components/sanctuary/Hero";
import { Philosophy as About } from "@/components/sanctuary/Philosophy";
import { Services } from "@/components/sanctuary/Gallery";
import { JourneyHome } from "@/components/sanctuary/JourneyHome";
import { Listings as Properties } from "@/components/sanctuary/Listings";
import { Contact } from "@/components/sanctuary/Contact";
import { Footer } from "@/components/sanctuary/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vikki Markey · Conservatory Estates" },
      {
        name: "description",
        content:
          "A luxury real estate sanctuary for buyers and sellers in Sugar Land, Houston, and surrounding communities. Prioritizing relationships over transactions.",
      },
      { property: "og:title", content: "Vikki Markey · Conservatory Estates" },
      {
        property: "og:description",
        content: "Find your sanctuary in Houston. Real estate guided by relationships, not pressure.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <JourneyHome />
      <Properties />
      <Contact />
      <Footer />
    </main>
  );
}
