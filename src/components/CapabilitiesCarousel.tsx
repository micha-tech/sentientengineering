"use client";

import { useRef } from "react";
import { engineeringCapabilities } from "@/lib/site-data";
import AutomationIcon from "./AutomationIcon";

const capabilityIcons = [
  "spark",
  "message",
  "layers",
  "pulse",
  "code",
  "chart",
  "target",
  "bot",
  "headset",
  "workflow",
  "database",
  "cloud",
  "audit",
  "coins",
  "shield",
  "arrow",
] as const;

export default function CapabilitiesCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const move = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.scrollBy({
      left: direction * Math.max(carousel.clientWidth * 0.75, 280),
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-12">
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          Swipe or use the arrows to explore all capabilities.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="View previous capabilities"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-lg text-[#071b20] transition hover:border-[#2f7d44] hover:bg-[#2f7d44] hover:text-white"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="View next capabilities"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-lg text-[#071b20] transition hover:border-[#2f7d44] hover:bg-[#2f7d44] hover:text-white"
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
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {engineeringCapabilities.map((capability, index) => (
          <article
            key={capability}
            className="group flex min-h-52 basis-[82%] shrink-0 snap-start flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(7,27,32,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#8fd3bf] hover:shadow-[0_16px_36px_rgba(7,27,32,0.09)] sm:basis-[46%] lg:basis-[30%] xl:basis-[23%]"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#e7f3ee] text-[#2f7d44] transition duration-300 group-hover:bg-[#2f7d44] group-hover:text-white">
                <AutomationIcon
                  name={capabilityIcons[index]}
                  className="h-6 w-6"
                />
              </span>
              <span className="text-xs font-bold text-slate-400">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-8 text-lg font-semibold leading-7 text-[#071b20]">
              {capability}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
