"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { COMPANY } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const threshold = Math.min(window.innerHeight * 0.65, 560);
      setVisible(window.scrollY > threshold);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <a
      href={COMPANY.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sentient Engineering on WhatsApp"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-4 right-4 z-40 inline-flex min-h-12 items-center gap-2 border border-black/15 bg-[#25D366] px-3.5 text-sm font-bold text-[#071b11] shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition sm:bottom-6 sm:right-6 sm:px-4 ${
        visible
          ? "translate-y-0 opacity-100 hover:-translate-y-0.5 hover:bg-[#20bd5a]"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <FaWhatsapp aria-hidden="true" className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
