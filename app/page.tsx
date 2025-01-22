import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen border-b">
        <Navigation />
        <Hero />
      </div>
    </main>
  );
}
