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
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] font-bold text-white mb-3">
            How It Works
          </h2>
          <div className="mx-auto h-[2px] w-[120px] bg-accent" />
        </div>

        <div ref={stepsRef} className="grid lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[10px] p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-accent font-bold text-[15px]">{step.number}</span>
                <h3 className="text-white font-bold text-[15px]">{step.heading}</h3>
              </div>
              <p className="text-secondary text-[14px] leading-[1.75]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
