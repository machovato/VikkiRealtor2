import { Navigation } from "@/components/sanctuary/Navigation";
import { Hero } from "@/components/sanctuary/Hero";
import { Philosophy as About } from "@/components/sanctuary/Philosophy";
import { Services } from "@/components/sanctuary/Gallery";
import { JourneyHome } from "@/components/sanctuary/JourneyHome";
import { Listings as Properties } from "@/components/sanctuary/Listings";
import { Contact } from "@/components/sanctuary/Contact";
import { Footer } from "@/components/sanctuary/Footer";

export default function App() {
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
