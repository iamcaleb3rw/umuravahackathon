import React from "react";
import { TestimonialCarousel } from "./TestimonialCarousel";
import MobileCarousel from "./MobileCarousel";

const Testimonials = () => {
  return (
    <div className="min-h-screen flex flex-col gap-14 pl-3 py-6 xl:py-24 border-b">
      <div className="xl:ml-24">
        <h1 className="text-2xl md:text-4xl text-darktext font-bold leading-tight max-w-[600px]">
          Users are in Love with Skills Challenges Program
        </h1>
        <p className="text-mutedtext max-w-[500px]">
          See what our clients say about working with us. Their success speaks
          for our dedication and expertise.
        </p>
      </div>
      <div className="hidden sm:block xl:ml-24">
        <TestimonialCarousel />
      </div>
      <div className="sm:hidden">
        <MobileCarousel />
      </div>
    </div>
  );
};

export default Testimonials;
