"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    heading: "You Get a Free Demo",
    body: "Before any commitment is made, you receive a demo website built specifically around your business — your services, your contact details, your location — at no cost whatsoever.",
  },
  {
    number: "02",
    heading: "You Review It",
    body: "Open it, explore it, and decide whether it represents your business the way it deserves to be represented.",
  },
  {
    number: "03",
    heading: "You Decide",
    body: "The next move is yours and there is no pressure attached to it. Move forward and your website gets finalised and launched. Walk away and the slate is clean — no cost, no awkward conversation — just an open door if you change your mind.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.75,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Steps animation
      const stepElements = stepsRef.current?.children;
      if (stepElements) {
        gsap.from(stepElements, {
          y: -40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="section-padding bg-[#0f0f0f]"
    >
      <div className="container-custom">
        <div ref={headingRef} className="text-center mb-20">
          <span className="text-[12px] text-accent font-semibold tracking-[0.1em] uppercase block mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-[40px] font-bold text-white">
            Three Steps. No Pressure.
          </h2>
        </div>

        <div ref={stepsRef} className="grid lg:grid-cols-3 gap-12 lg:gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[20px] left-[calc(100%-40px)] w-[calc(100%-80px)] h-[1px] bg-accent/20 z-0" />
              )}
              
              <div className="relative z-10">
                <span className="absolute -top-12 -left-4 text-[100px] font-extrabold text-[#1e1e1e] select-none leading-none z-[-1]">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold text-white mb-4 mt-8">
                  {step.heading}
                </h3>
                <p className="text-secondary text-[15px] leading-[1.7]">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
