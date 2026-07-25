"use client";

import { useRef } from "react";
import { engineeringCapabilities } from "@/lib/site-data";

export default function CapabilitiesCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const move = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.scrollBy({
      left: direction * Math.max(carousel.clientWidth * 0.72, 280),
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-14">
      <div className="mb-5 flex items-center justify-between gap-4 border-b border-black/15 pb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-black/45">
          Swipe to explore
        </p>
        <div className="flex shrink-0">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="View previous capabilities"
            className="grid h-11 w-11 place-items-center border border-black bg-transparent text-lg transition hover:bg-black hover:text-white"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="View next capabilities"
            className="-ml-px grid h-11 w-11 place-items-center border border-black bg-transparent text-lg transition hover:bg-black hover:text-white"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        role="region"
        aria-label="Engineering capabilities carousel"
        tabIndex={0}
        className="flex snap-x snap-mandatory overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {engineeringCapabilities.map((capability, index) => (
          <article
            key={capability}
            className="flex min-h-52 basis-[80%] shrink-0 snap-start flex-col justify-between border-y border-r border-black/15 p-6 first:border-l sm:basis-[44%] lg:basis-[28%] xl:basis-[23%]"
          >
            <span className="text-xs font-bold text-black/30">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-12 text-xl font-semibold leading-tight tracking-[-0.03em]">
              {capability}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
