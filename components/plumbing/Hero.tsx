"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Eyebrow animation
      gsap.fromTo(
        eyebrowRef.current,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: "power2.out" }
      );

      // H1 staggered animation
      const lines = h1Ref.current?.querySelectorAll(".h1-line");
      if (lines) {
        gsap.fromTo(
          lines,
          { y: -60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
          }
        );
      }

      // Subtext animation
      gsap.fromTo(
        subtextRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: 0.9, ease: "power2.out" }
      );

      // CTA animation
      gsap.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 1.1, ease: "power2.out" }
      );

      // Image animation
      const isMobile = window.innerWidth < 768;
      gsap.fromTo(
        imageRef.current,
        { 
          x: isMobile ? 0 : 80, 
          y: isMobile ? 50 : 0, 
          opacity: 0 
        },
        { 
          x: 0, 
          y: 0, 
          opacity: 1, 
          duration: 0.9, 
          delay: 0.3, 
          ease: "power3.out" 
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-20 lg:pt-0 lg:pb-0 flex items-center overflow-hidden"
    >
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-color/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="container-custom grid lg:grid-cols-2 items-center gap-12 lg:gap-20">
        <div className="relative z-10">
          <h1 
            ref={h1Ref}
            className="text-[48px] md:text-[58px] lg:text-[72px] font-extrabold text-white leading-[1.05] mb-6 flex flex-col font-serif"
          >
            <span className="h1-line">Flawless</span>
            <span className="h1-line">Design.</span>
            <span className="h1-line text-[var(--accent-color)]">Masterfully Built.</span>
          </h1>

          <p 
            ref={subtextRef}
            className="text-secondary text-lg md:text-xl max-w-[520px] mb-10 leading-relaxed font-light"
          >
            High-end plumbing installations and renovations for luxury homes and premium commercial spaces. Crafted to perfection with uncompromising quality.
          </p>

          <div ref={ctaRef} className="space-y-4">
            <Link href="#contact" className="btn-primary text-lg px-10 py-5 tracking-wide">
              Request a Consultation <MoveRight className="ml-2" />
            </Link>
            <p className="text-secondary/60 text-sm pl-1 uppercase tracking-widest text-[11px]">
              Available for exclusive projects.
            </p>
          </div>
        </div>

        <div 
          ref={imageRef}
          className="relative lg:h-[600px] w-full"
        >
          <div className="hero-vignette group relative h-full w-full rounded-tl-[80px] rounded-br-[80px] rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-2xl border border-[var(--border-color)]">
            <img 
              src="/images/plumbing/hero.png"
              alt="Ultra-luxury modern bathroom with gold fixtures"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
