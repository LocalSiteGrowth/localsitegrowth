"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Decorative "01"
      gsap.fromTo(numRef.current, 
        { opacity: 0 }, 
        { opacity: 0.03, duration: 1.2, delay: 0.5 }
      );

      // Amber line
      gsap.fromTo(lineRef.current,
        { width: 0 },
        { width: "100%", duration: 0.8, delay: 0.2, ease: "power2.out" }
      );

      // Content animations
      gsap.fromTo(eyebrowRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.3 }
      );

      const h1Lines = h1Ref.current?.querySelectorAll(".h1-line");
      h1Lines?.forEach((line, i) => {
        gsap.fromTo(line,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, delay: 0.4 + i * 0.15, ease: "power3.out" }
        );
      });

      gsap.fromTo(subtextRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: 0.9 }
      );

      gsap.fromTo(buttonsRef.current?.children || [],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 1.1, stagger: 0.1 }
      );

      gsap.fromTo(statsRef.current?.children || [],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 1.3, stagger: 0.08 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative pt-32 md:pt-48 pb-0 bg-[#080808] overflow-hidden min-h-screen">
      {/* Decorative Line */}
      <div 
        ref={lineRef}
        className="absolute top-[20%] left-0 h-[1px] bg-[var(--accent-color)] opacity-15"
      />

      {/* Decorative Number */}
      <div 
        ref={numRef}
        className="absolute top-10 right-10 md:top-20 md:right-20 text-[200px] md:text-[300px] font-extrabold text-white pointer-events-none select-none leading-none"
        style={{ opacity: 0 }}
      >
        01
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-[800px]">
          <span 
            ref={eyebrowRef}
            className="inline-block text-[11px] font-semibold tracking-[0.12em] uppercase text-[var(--accent-color)] mb-6"
          >
            Licensed Electricians · Residential & Commercial
          </span>

          <h1 ref={h1Ref} className="flex flex-col gap-2">
            <span className="h1-line text-[48px] md:text-[72px] font-extrabold text-white leading-tight">Wired For</span>
            <span className="h1-line text-[48px] md:text-[72px] font-extrabold text-[var(--accent-color)] leading-tight">Precision.</span>
            <span className="h1-line text-[28px] md:text-[40px] font-light text-white tracking-tight mt-2">Powered By Pride.</span>
          </h1>

          <p 
            ref={subtextRef}
            className="text-[var(--secondary-color)] text-base md:text-lg max-w-[560px] leading-relaxed mt-8"
          >
            Professional electrical services delivered with precision and care. 
            Residential, commercial, and emergency work across the region — every job done to the highest standard.
          </p>

          <div ref={buttonsRef} className="flex flex-wrap gap-4 mt-10">
            <button className="bg-[var(--accent-color)] text-[#080808] font-bold py-4 px-9 rounded-[4px] hover:brightness-110 transition-all flex items-center gap-2">
              Get a Free Quote <span>→</span>
            </button>
            <button className="border border-[#2a2a2a] text-white py-4 px-9 rounded-[4px] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all">
              View Our Work
            </button>
          </div>

          <div ref={statsRef} className="flex items-center gap-6 md:gap-10 mt-16 pb-20">
            <div className="flex flex-col gap-1">
              <span className="text-white text-xl md:text-2xl font-bold">10+ Years</span>
              <span className="text-[var(--secondary-color)] text-[12px] uppercase tracking-wider">In Business</span>
            </div>
            <div className="h-10 w-[1px] bg-[#1e1e1e]" />
            <div className="flex flex-col gap-1">
              <span className="text-white text-xl md:text-2xl font-bold">1,200+</span>
              <span className="text-[var(--secondary-color)] text-[12px] uppercase tracking-wider">Jobs Completed</span>
            </div>
            <div className="h-10 w-[1px] bg-[#1e1e1e]" />
            <div className="flex flex-col gap-1">
              <span className="text-white text-xl md:text-2xl font-bold">24/7</span>
              <span className="text-[var(--secondary-color)] text-[12px] uppercase tracking-wider">Emergency Cover</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[300px] md:h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-transparent opacity-40 z-10" />
        <div className="absolute inset-0 bg-[var(--accent-color)] opacity-[0.05] z-10" />
        <img 
          src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/a181f1ec-cf95-4ff0-4712-f1dceca21b00/publicContain"
          alt="Electrical Work"
          className="w-full h-full object-cover grayscale-[20%]"
        />
      </div>
    </section>
  );
};

export default Hero;
