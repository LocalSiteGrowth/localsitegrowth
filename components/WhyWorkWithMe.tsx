"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    heading: "See It First",
    body: "A custom website concept is built before any commitment is made. You see the work, then you decide.",
  },
  {
    heading: "Built for Local Businesses",
    body: "Designed specifically to make local companies look professional and established online.",
  },
  {
    heading: "Lead-Focused",
    body: "Every page is built with one goal: getting customers to call or request a quote.",
  },
  {
    heading: "One Point of Contact",
    body: "No middleman or sales reps. You deal directly with the person building the site.",
  },
];

export default function WhyWorkWithMe() {
  const sectionRef = useRef<HTMLElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(profileRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: profileRef.current,
          start: "top 85%",
        },
      });

      const cards = gridRef.current?.children;
      if (cards) {
        gsap.from(cards, {
          y: 50,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-[#0a0a0a]"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-[12px] text-accent font-semibold tracking-[0.1em] uppercase block mb-4">
            The Person Behind The Work
          </span>
          <h2 className="text-3xl md:text-[40px] font-bold text-white mb-12">
            Why Work With Me
          </h2>

          {/* Profile Block */}
          <div ref={profileRef} className="flex flex-col items-center max-w-2xl mx-auto">
            <div className="relative w-[120px] h-[120px] rounded-full border-2 border-accent p-1 mb-6">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="https://www.localsitegrowth.com/assets/uploads/aa502cb4-2fd4-407a-a8d1-a42ba5a5c050/1b85ebe0-e8ca-4299-bd5f-bdd3d3473738.jpg"
                  alt="Tomislav"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="text-white text-[18px] font-semibold mb-1">Tomislav</h3>
            <span className="text-accent text-[13px] font-medium tracking-[0.06em] uppercase mb-6">
              Web Designer · Local Site Growth
            </span>
            <p className="text-secondary text-[15px] leading-[1.75] mb-10">
              Every project starts with a free custom demo built specifically around your business — no assumptions, no obligation until you've seen exactly what you're getting. From the first conversation through to launch, you deal with one person directly.
            </p>
            <div className="w-[60px] h-[1px] bg-[#1e1e1e]" />
          </div>
        </div>

        {/* Benefits Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.heading}
              className="p-8 bg-[#111111] border border-[#1e1e1e] rounded-[12px] transition-all duration-200 hover:border-accent/40 hover:-translate-y-[3px]"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {benefit.heading}
              </h3>
              <p className="text-secondary text-[15px] leading-relaxed">
                {benefit.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
