"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: "Residential Wiring", desc: "New builds, renovations, rewiring, and all residential electrical work." },
  { title: "Switchboard Upgrades", desc: "Full switchboard replacements and upgrades to meet current safety standards." },
  { title: "LED Lighting", desc: "Design and installation of energy-efficient LED lighting for homes and businesses." },
  { title: "Commercial Electrical", desc: "Fit-outs, maintenance, and compliance testing for commercial properties." },
  { title: "Solar & EV Charging", desc: "Solar panel installation and electric vehicle charging point setup." },
  { title: "Emergency Callouts", desc: "24 hour emergency electrical service for urgent faults and safety hazards." },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const numRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.fromTo(numRef.current,
        { opacity: 0 },
        { opacity: 0.02, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );

      gsap.fromTo(eyebrowRef.current,
        prefersReduced ? { opacity: 0 } : { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, scrollTrigger: { trigger: eyebrowRef.current, start: "top 85%" } }
      );

      gsap.fromTo(headingRef.current,
        prefersReduced ? { opacity: 0 } : { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, scrollTrigger: { trigger: headingRef.current, start: "top 85%" } }
      );

      gsap.fromTo(subtextRef.current,
        prefersReduced ? { opacity: 0 } : { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, delay: 0.1, scrollTrigger: { trigger: headingRef.current, start: "top 85%" } }
      );

      gsap.fromTo(itemsRef.current,
        prefersReduced ? { opacity: 0 } : { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.08,
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative overflow-hidden" style={{ backgroundColor: "#080808", paddingTop: "110px", paddingBottom: "110px" }}>
      <div ref={numRef} className="absolute top-0 right-0 text-[200px] font-extrabold text-white pointer-events-none select-none leading-none" style={{ opacity: 0 }}>02</div>

      <div className="container-custom">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="max-w-[500px]">
            <span ref={eyebrowRef} className="inline-block text-[11px] font-semibold tracking-[0.12em] uppercase text-[var(--accent-color)] mb-4">
              What We Do
            </span>
            <h2 ref={headingRef} className="text-[40px] font-extrabold text-white leading-tight">
              Every Job.<br />Every Standard.
            </h2>
          </div>
          <p ref={subtextRef} className="text-[var(--secondary-color)] text-base leading-[1.7] max-w-[420px] lg:mt-16">
            From a single power point to a full commercial fit-out — we bring the same level of precision and care to every job we take on.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="service-item group cursor-default pl-6 transition-all duration-200"
              style={{ borderLeft: "1px solid rgba(245,158,11,0.3)" }}
            >
              <h3 className="text-white font-semibold text-base mb-2 group-hover:text-[var(--accent-color)] transition-colors duration-200">{s.title}</h3>
              <p className="text-[var(--secondary-color)] text-sm leading-[1.6]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .service-item:hover {
          border-left-color: var(--accent-color) !important;
        }
      `}</style>
    </section>
  );
};

export default Services;
