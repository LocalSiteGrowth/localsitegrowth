"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show after 1.5s delay
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("cookie-consent");
      if (!consent) {
        setIsVisible(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    localStorage.setItem("cookie-consent", "true");
    // Wait for animation before removing from DOM
    setTimeout(() => setIsDismissed(true), 500);
  };

  if (isDismissed) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-[100] bg-[#111111] border-t border-[#1e1e1e] p-4 md:px-8 md:py-4 transition-all duration-500 ease-in-out transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-secondary text-[13px] text-center md:text-left">
          This site uses cookies to improve your experience. By continuing, you agree to our cookie use.
        </p>
        <button
          onClick={handleAccept}
          className="bg-accent text-white text-[13px] font-semibold px-5 py-2 rounded-[6px] hover:brightness-110 transition-all"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
