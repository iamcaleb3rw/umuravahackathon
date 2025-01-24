"use client";

import { useRef, useState, useEffect } from "react";
import { VideoCard } from "./videocard";

const VIDEOS = [
  {
    name: "Manzi Jack",
    title: "Product Designer, Kigali",
    avatarUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20154827-Nymwx2YIwIE1hCkNlYVRlekAtnJArC.png",
    videoThumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20154827-Nymwx2YIwIE1hCkNlYVRlekAtnJArC.png",
  },
  {
    name: "Manzi Jack",
    title: "Product Designer, Kigali",
    avatarUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20154827-Nymwx2YIwIE1hCkNlYVRlekAtnJArC.png",
    videoThumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20154827-Nymwx2YIwIE1hCkNlYVRlekAtnJArC.png",
  },
  {
    name: "Manzi Jack",
    title: "Product Designer, Kigali",
    avatarUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20154827-Nymwx2YIwIE1hCkNlYVRlekAtnJArC.png",
    videoThumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20154827-Nymwx2YIwIE1hCkNlYVRlekAtnJArC.png",
  },
  {
    name: "Manzi Jack",
    title: "Product Designer, Kigali",
    avatarUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20154827-Nymwx2YIwIE1hCkNlYVRlekAtnJArC.png",
    videoThumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20154827-Nymwx2YIwIE1hCkNlYVRlekAtnJArC.png",
  },
  {
    name: "Manzi Jack",
    title: "Product Designer, Kigali",
    avatarUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20154827-Nymwx2YIwIE1hCkNlYVRlekAtnJArC.png",
    videoThumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20154827-Nymwx2YIwIE1hCkNlYVRlekAtnJArC.png",
  },
];

const CARD_WIDTH = 500; // Width of each card
const CARD_GAP = 24; // Gap between cards
const VISIBLE_WIDTH = CARD_WIDTH + CARD_GAP; // Visible width including gap
const PARTIAL_CARD_WIDTH = 100; // Width of the partially visible third card

export function TestimonialCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const scrollPosition = index * VISIBLE_WIDTH;
      scrollContainerRef.current.style.transform = `translateX(-${scrollPosition}px)`;
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (scrollContainerRef.current) {
        const transform = new WebKitCSSMatrix(
          getComputedStyle(scrollContainerRef.current).transform
        );
        const scrollPosition = -transform.m41;
        const newIndex = Math.round(scrollPosition / VISIBLE_WIDTH);
        setCurrentIndex(newIndex);
      }
    };

    scrollContainerRef.current?.addEventListener(
      "transitionend",
      handleTransitionEnd
    );
    return () =>
      scrollContainerRef.current?.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
  }, []);

  return (
    <div
      className="w-full"
      style={{ maxWidth: `${VISIBLE_WIDTH * 2 + PARTIAL_CARD_WIDTH + 600}px` }}
    >
      <div className="overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            width: `${VIDEOS.length * VISIBLE_WIDTH}px`,
            gap: `${CARD_GAP}px`,
          }}
        >
          {VIDEOS.map((video, index) => (
            <div
              key={index}
              className="flex-none"
              style={{ width: `${CARD_WIDTH}px` }}
            >
              <VideoCard {...video} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 lg:mt-16 flex justify-center gap-2">
        {VIDEOS.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-primary"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
