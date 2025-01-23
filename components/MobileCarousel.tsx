"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
const slides = [
  {
    label: "1",
  },
  {
    label: "2",
  },
];

export default function MobileCarousel() {
  const [slideIndex, setSlideIndex] = useState(0);

  const showNextImage = () => {
    setSlideIndex((index) => (index + 1) % slides.length);
  };

  const showPrevImage = () => {
    setSlideIndex((index) => (index - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="relative w-full">
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${slideIndex * 100}%)` }}
          >
            {slides.map((slide: any, index: number) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex gap-6 px-2 md:px-12 flex-col py-2 md:flex-row  aspect-[1/1] border"
              >
                <div className="bg-primary min-h-[70%] rounded-xl w-full"></div>
                <div className="flex items-center gap-3">
                  <div className="h-14 w-14 bg-primary rounded-full"></div>
                  <div>
                    <p className="text font-semibold">Manzi Jack</p>
                    <p className="text-sm text-mutedtext">Product Designer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            onClick={showPrevImage}
            variant="outline"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={showNextImage}
            variant="outline"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_: any, index: number) => (
          <div
            key={index}
            onClick={() => setSlideIndex(index)}
            className={`h-2 w-2 rounded-full cursor-pointer hover:scale-[1.1] ${
              index === slideIndex ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
