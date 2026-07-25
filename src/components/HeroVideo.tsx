"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (!video) return;

    let playbackTimer: number | undefined;

    const syncPlayback = () => {
      window.clearTimeout(playbackTimer);

      if (motionPreference.matches) {
        video.pause();
        return;
      }

      playbackTimer = window.setTimeout(() => {
        void video.play().catch(() => {
          // The preloaded poster remains visible if autoplay is blocked.
        });
      }, 1200);
    };

    syncPlayback();
    motionPreference.addEventListener("change", syncPlayback);

    return () => {
      window.clearTimeout(playbackTimer);
      motionPreference.removeEventListener("change", syncPlayback);
      video.pause();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      aria-hidden="true"
      muted
      loop
      playsInline
      preload="none"
      tabIndex={-1}
      onPlaying={() => setPlaying(true)}
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 motion-reduce:hidden ${
        playing ? "opacity-100" : "opacity-0"
      }`}
    >
      <source src="/videos/sentient-hero-optimized.mp4" type="video/mp4" />
    </video>
  );
}
