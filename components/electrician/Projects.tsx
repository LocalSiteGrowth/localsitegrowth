"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    tag: "Residential",
    name: "Full Home Rewire",
    desc: "Complete rewire of a 4-bedroom home including new switchboard, LED lighting throughout, and smoke alarm installation.",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Electrician working on residential wiring",
  },
  {
    tag: "Commercial",
    name: "Office Fit-Out",
    desc: "Full electrical fit-out for a 300sqm commercial office including data cabling, LED panels, and emergency lighting.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Modern commercial office interior",
  },
  {
    tag: "Emergency",
    name: "Switchboard Fault",
    desc: "Emergency response to a switchboard fault in a residential property — fault identified and resolved within 2 hours.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Electrical switchboard panel",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const numRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      gsap.fromTo(cardsRef.current,
        prefersReduced ? { opacity: 0 } : { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative overflow-hidden" style={{ backgroundColor: "#0f0f0f", paddingTop: "110px", paddingBottom: "110px" }}>
      <div className="container-custom">
        <span ref={eyebrowRef} className="inline-block text-[11px] font-semibold tracking-[0.12em] uppercase text-[var(--accent-color)] mb-4">
          Our Work
        </span>
        <h2 ref={headingRef} className="text-[40px] font-extrabold text-white leading-tight mb-16">
          Built to Last. Built to Impress.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="project-card rounded-lg overflow-hidden transition-all duration-[250ms]"
              style={{ backgroundColor: "#111111", border: "1px solid #1e1e1e" }}
            >
              {/* Photo block */}
              <div className="relative overflow-hidden group" style={{ height: "220px" }}>
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div style={{ padding: "28px" }}>
                <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--accent-color)]">{p.tag}</span>
                <h3 className="text-white font-bold text-lg mt-2 mb-3">{p.name}</h3>
                <p className="text-[var(--secondary-color)] text-sm leading-[1.6]">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-card:hover {
          transform: translateY(-4px);
          border-color: rgba(245, 158, 11, 0.3) !important;
        }
      `}</style>
    </section>
  );
};

export default Projects;
