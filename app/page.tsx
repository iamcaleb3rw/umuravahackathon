import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen border-b">
        <Navigation />
        <Hero />
        <Features />
      </div>
    </main>
  );
}
