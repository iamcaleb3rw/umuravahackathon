"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface Slide {
  logo: StaticImageData;
  path: string;
  description: string;
  img: StaticImageData;
}

interface CarouselProps {
  slides: Slide[];
}

export default function Carousel({ slides }: CarouselProps) {
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
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex gap-10 px-6 md:px-12 flex-col py-12 md:flex-row justify-between items-center aspect-[7/3] bg-muted"
              >
                <div className="flex flex-col gap-12">
                  <div className="bg-white w-[83px] flex items-center justify-center h-[83px] p-2  rounded-xl">
                    <Image src={slide.logo} alt="logo" width={50} height={50} />
                  </div>
                  <div>
                    <p className="font-[100] text-mutedtext">
                      {slide.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-primary font-medium tracking-tight">
                      Learn More
                    </p>
                    <span className="h-6 w-6 bg-primary rounded-full flex items-center justify-center">
                      <ArrowRight color="white" className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <div>
                  <Image src={slide.img} alt="Banner Image" />
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
        {slides.map((_, index) => (
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
