import Benefits from "@/components/Benefits";
import Categories from "@/components/Categories";
import Explore from "@/components/Explore";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Navigation from "@/components/Navigation";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen border-b">
        <Navigation />
        <Hero />
      </div>

      <Features />
      <Metrics />
      <Categories />
      <Explore />
      <Benefits />
      <Testimonials />
      <Process />
    </main>
  );
}
