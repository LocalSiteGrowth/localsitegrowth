"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.fromTo(imgRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.9, delay: 0.5, ease: "power2.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative pt-32 md:pt-40 pb-24 bg-[#080808] overflow-hidden min-h-screen">
      <style>{`
        .volt-cta-primary {
          background-color: #f59e0b;
          color: #080808;
          border: 2px solid #f59e0b;
          transition: background-color 200ms, color 200ms;
        }
        .volt-cta-primary:hover {
          background-color: transparent;
          color: #f59e0b;
        }
      `}</style>
      {/* Decorative Line */}
      <div
        ref={lineRef}
        className="absolute top-[20%] left-0 h-[1px] bg-[var(--accent-color)] opacity-15"
      />

      <div className="container-custom relative z-10 h-full flex flex-col justify-center">
        {/* Two-column layout: content left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — content */}
          <div>
            <span
              ref={eyebrowRef}
              className="inline-block text-[11px] font-semibold tracking-[0.12em] uppercase text-[var(--accent-color)] mb-6"
            >
              Licensed Electricians · Residential & Commercial
            </span>

            <h1 ref={h1Ref} className="flex flex-col gap-1">
              <span className="h1-line text-[48px] md:text-[64px] font-extrabold text-white leading-tight">Wired For</span>
              <span className="h1-line text-[48px] md:text-[64px] font-extrabold text-[var(--accent-color)] leading-tight">Precision.</span>
              <span className="h1-line text-[28px] md:text-[36px] font-light text-white tracking-tight mt-2">Powered By</span>
              <span className="h1-line text-[28px] md:text-[36px] font-light text-[var(--accent-color)] tracking-tight">Expertise.</span>
            </h1>

            <p
              ref={subtextRef}
              className="text-[var(--secondary-color)] text-base leading-[1.75] max-w-[500px] mt-8"
            >
              Professional electrical services delivered with precision and care.
              Residential, commercial, and emergency work across the region - every job done to the highest standard.
            </p>

            <div ref={buttonsRef} className="flex flex-wrap gap-4 mt-10">
              <a href="#contact" className="volt-cta-primary py-4 px-9 rounded-[4px] font-bold flex items-center gap-2">
                Get a Free Quote <span>→</span>
              </a>
              <a href="#projects" className="border border-[#2a2a2a] text-white py-4 px-9 rounded-[4px] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all">
                View Our Work
              </a>
            </div>

            <div ref={statsRef} className="flex flex-wrap items-center gap-6 md:gap-10 mt-14">
              <div className="flex flex-col gap-1">
                <span className="text-white text-xl font-bold">10+ Years</span>
                <span className="text-[var(--secondary-color)] text-[12px] uppercase tracking-wider">In Business</span>
              </div>
              <div className="h-10 w-[1px] bg-[#1e1e1e]" />
              <div className="flex flex-col gap-1">
                <span className="text-white text-xl font-bold">1,200+</span>
                <span className="text-[var(--secondary-color)] text-[12px] uppercase tracking-wider">Jobs Completed</span>
              </div>
              <div className="h-10 w-[1px] bg-[#1e1e1e]" />
              <div className="flex flex-col gap-1">
                <span className="text-white text-xl font-bold">24/7</span>
                <span className="text-[var(--secondary-color)] text-[12px] uppercase tracking-wider">Emergency Cover</span>
              </div>
            </div>
          </div>

          {/* Right — hero image */}
          <div ref={imgRef} className="relative rounded-2xl overflow-hidden group" style={{ height: "560px" }}>
            {/* Amber tint overlay */}
            <div className="absolute inset-0 bg-[var(--accent-color)] opacity-[0.05] z-10 pointer-events-none" />
            {/* Dark top blend */}
            <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-[#080808] to-transparent z-10 pointer-events-none" />
            <img
              src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/a181f1ec-cf95-4ff0-4712-f1dceca21b00/publicContain"
              alt="Electrical Work"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
