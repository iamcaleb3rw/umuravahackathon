import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen border-b">
        <Navigation />
        <Hero />
        <Features />
        <Metrics />
      </div>
    </main>
  );
}
