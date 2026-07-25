"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (!video) return;

    const syncPlayback = () => {
      if (motionPreference.matches) {
        video.pause();
        return;
      }

      void video.play().catch(() => {
        // The poster remains visible if a browser blocks autoplay.
      });
    };

    syncPlayback();
    motionPreference.addEventListener("change", syncPlayback);

    return () => {
      motionPreference.removeEventListener("change", syncPlayback);
      video.pause();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      tabIndex={-1}
      onCanPlay={(event) => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          void event.currentTarget.play().catch(() => undefined);
        }
      }}
      className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
    >
      <source src="/videos/sentient-hero.mp4" type="video/mp4" />
    </video>
  );
}
