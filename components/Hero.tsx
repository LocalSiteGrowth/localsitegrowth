"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animations
      gsap.from(eyebrowRef.current, {
        y: 12,
        opacity: 0,
        duration: 0.7,
        delay: 0.2,
      });

      const lines = h1Ref.current?.querySelectorAll(".h1-line");
      if (lines) {
        gsap.from(lines, {
          y: -60,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          delay: 0.3,
          ease: "power2.out",
        });
      }

      gsap.from(subtextRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        delay: 0.9,
      });

      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 1.1,
      });

      // Responsive image animation
      const isMobile = window.innerWidth < 1024;
      gsap.from(imageRef.current, {
        x: isMobile ? 0 : 80,
        y: isMobile ? 50 : 0,
        opacity: 0,
        duration: 0.9,
        delay: 0.3,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Content */}
        <div className="flex flex-col items-start z-10">
          <span
            ref={eyebrowRef}
            className="text-[12px] text-accent font-semibold tracking-[0.08em] uppercase mb-6"
          >
            Custom Web Design · Where Details Matter
          </span>
          <h1
            ref={h1Ref}
            className="text-5xl md:text-6xl lg:text-[82px] font-extrabold text-white leading-[1.05] mb-8 tracking-tight"
          >
            <span className="h1-line block">Get Found.</span>
            <span className="h1-line block">Build Trust.</span>
            <span className="h1-line block text-accent">Be Chosen.</span>
          </h1>
          <p
            ref={subtextRef}
            className="text-secondary text-base md:text-[17px] leading-[1.7] max-w-[520px] mb-10"
          >
            Custom web design that presents your business as credible, established, and accessible.
          </p>
          <div ref={ctaRef} className="flex flex-col items-center sm:items-start gap-4">
            <a href="#contact" className="btn-primary flex items-center gap-2 group">
              Request a Free Website Demo
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <span className="text-secondary text-[13px] px-4">
              No upfront cost. No obligation.
            </span>
          </div>
        </div>

        {/* Image */}
        <div
          ref={imageRef}
          className="group relative aspect-[4/3] lg:aspect-square w-full"
        >
          <div className="relative h-full w-full rounded-[16px] overflow-hidden">
            <Image
              src="https://www.localsitegrowth.com/assets/uploads/aa502cb4-2fd4-407a-a8d1-a42ba5a5c050/f38856ae-1de7-41c8-af0f-8781d69b7b91.jpg"
              alt="Local Site Growth Showcase"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
