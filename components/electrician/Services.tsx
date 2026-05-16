"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Residential Wiring",
    desc: "New builds, renovations, rewiring, and all residential electrical work.",
    image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Electrician installing wiring in a wall cavity",
  },
  {
    title: "Switchboard Upgrades",
    desc: "Full switchboard replacements and upgrades to meet current safety standards.",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Modern electrical switchboard upgrade",
  },
  {
    title: "LED Lighting",
    desc: "Design and installation of energy-efficient LED lighting for homes and businesses.",
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Modern interior with premium LED lighting",
  },
  {
    title: "Commercial Electrical",
    desc: "Fit-outs, maintenance, and compliance testing for commercial properties.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Commercial electrical installation in progress",
  },
  {
    title: "Solar & EV Charging",
    desc: "Solar panel installation and electric vehicle charging point setup.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Solar panels installed on roof",
  },
  {
    title: "Emergency Callouts",
    desc: "24 hour emergency electrical service for urgent faults and safety hazards.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Emergency electrician responding to urgent fault",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      gsap.fromTo(subtextRef.current,
        prefersReduced ? { opacity: 0 } : { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.1, scrollTrigger: { trigger: headingRef.current, start: "top 85%" } }
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
      <div className="container-custom">
        {/* Header — full width, subtitle directly below heading */}
        <div className="mb-16 max-w-[700px]">
          <span ref={eyebrowRef} className="inline-block text-[11px] font-semibold tracking-[0.12em] uppercase text-[var(--accent-color)] mb-4">
            What We Do
          </span>
          <h2 ref={headingRef} className="text-[40px] font-extrabold text-white leading-tight mb-5">
            Every Job. Every Standard.
          </h2>
          <p ref={subtextRef} className="text-[var(--secondary-color)] text-base leading-[1.7]">
            From a single power point to a full commercial fit-out — we bring the same level of precision and care to every job we take on.
          </p>
        </div>

        {/* Services grid — card style with photo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="service-card group rounded-lg overflow-hidden transition-all duration-250"
              style={{ backgroundColor: "#0f0f0f", border: "1px solid #1e1e1e" }}
            >
              {/* Photo */}
              <div className="relative overflow-hidden" style={{ height: "200px" }}>
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-70" />
              </div>

              {/* Text */}
              <div className="p-6 border-l-2 border-[rgba(245,158,11,0.3)] ml-0 transition-all duration-200" style={{ borderLeft: "2px solid rgba(245,158,11,0.3)" }}>
                <h3 className="text-white font-semibold text-base mb-2 group-hover:text-[var(--accent-color)] transition-colors duration-200">{s.title}</h3>
                <p className="text-[var(--secondary-color)] text-sm leading-[1.6]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .service-card:hover {
          border-color: rgba(245, 158, 11, 0.3) !important;
          transform: translateY(-3px);
        }
        .service-card:hover > div:last-child {
          border-left-color: var(--accent-color) !important;
        }
      `}</style>
    </section>
  );
};

export default Services;
