"use client";

import { useEffect, useState } from "react";

const hooks = [
  {
    label: "Who we are",
    text: "Applied AI engineers for real business.",
  },
  {
    label: "What we do",
    text: "We build production systems that perform real work.",
  },
  {
    label: "Who we serve",
    text: "Businesses and industries ready to move forward.",
  },
];

export default function TypingValueLine() {
  const [hookIndex, setHookIndex] = useState(0);
  const [visibleText, setVisibleText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setVisibleText(hooks[0].text);
      setHookIndex(0);
      setDeleting(false);
      return;
    }

    const activeText = hooks[hookIndex].text;
    let delay = deleting ? 28 : 48;

    if (!deleting && visibleText === activeText) {
      delay = 1800;
    } else if (deleting && visibleText === "") {
      delay = 300;
    }

    const timer = window.setTimeout(() => {
      if (!deleting && visibleText === activeText) {
        setDeleting(true);
        return;
      }

      if (deleting && visibleText === "") {
        setHookIndex((current) => (current + 1) % hooks.length);
        setDeleting(false);
        return;
      }

      setVisibleText(
        deleting
          ? activeText.slice(0, visibleText.length - 1)
          : activeText.slice(0, visibleText.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, hookIndex, reduceMotion, visibleText]);

  return (
    <>
      <div
        aria-hidden="true"
        className="mt-6 flex min-h-8 max-w-3xl flex-wrap items-center gap-x-3 gap-y-1 text-left text-sm sm:text-base"
      >
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/60">
          {hooks[hookIndex].label}
        </span>
        <span className="hidden h-4 w-px bg-white/20 sm:block" />
        <span className="font-medium text-slate-100">
          {visibleText}
          {!reduceMotion && (
            <span className="ml-0.5 inline-block text-white motion-safe:animate-pulse">
              |
            </span>
          )}
        </span>
      </div>
      <p className="sr-only">
        Who we are: Applied AI engineers for real business. What we do: We
        build production systems that perform real work. Who we serve:
        Businesses and industries ready to move forward.
      </p>
    </>
  );
}
