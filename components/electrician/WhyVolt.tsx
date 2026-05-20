"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const points = [
  { num: "01", heading: "Precision First", body: "Every installation is planned and executed to exact specifications. No shortcuts, no approximations." },
  { num: "02", heading: "Transparent Pricing", body: "You receive a clear, itemised quote before work begins. The price you're quoted is the price you pay." },
  { num: "03", heading: "Clean Work", body: "We take pride in leaving every job site clean and tidy. Your home or business is treated with respect throughout." },
  { num: "04", heading: "Fully Guaranteed", body: "All work carries a full workmanship guarantee. If anything isn't right we come back and make it right." },
];

const WhyVolt = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const pointsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.fromTo(eyebrowRef.current,
        prefersReduced ? { opacity: 0 } : { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, scrollTrigger: { trigger: eyebrowRef.current, start: "top 85%" } }
      );

      gsap.fromTo(headingRef.current,
        prefersReduced ? { opacity: 0 } : { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, scrollTrigger: { trigger: headingRef.current, start: "top 85%" } }
      );

      gsap.fromTo(pointsRef.current,
        prefersReduced ? { opacity: 0 } : { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="why-volt" ref={sectionRef} className="relative overflow-hidden" style={{ backgroundColor: "#080808", paddingTop: "110px", paddingBottom: "110px" }}>
      <div className="container-custom">
        <span ref={eyebrowRef} className="inline-block text-[11px] font-semibold tracking-[0.12em] uppercase text-[var(--accent-color)] mb-4">
          Why Volt
        </span>
        <h2 ref={headingRef} className="text-[40px] font-extrabold text-white leading-tight mb-20 max-w-[600px]">
          The Standard We Hold Ourselves To.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {points.map((p, i) => (
            <div
              key={i}
              ref={(el) => { pointsRef.current[i] = el; }}
              className={`py-8 lg:py-0${i > 0 ? " lg:pl-10" : ""}${i < 3 ? " lg:pr-10 lg:border-r lg:border-[#1e1e1e]" : ""}`}
            >
              <span className="text-[var(--accent-color)] text-5xl font-extrabold block mb-4" style={{ opacity: 0.4 }}>
                {p.num}
              </span>
              <h3 className="text-white font-semibold text-lg mb-3">{p.heading}</h3>
              <p className="text-[var(--secondary-color)] text-[15px] leading-[1.7]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVolt;
