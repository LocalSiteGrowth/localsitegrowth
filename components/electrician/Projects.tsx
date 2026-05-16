"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Home, Building2, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    icon: Home,
    tag: "Residential",
    name: "Full Home Rewire",
    desc: "Complete rewire of a 4-bedroom home including new switchboard, LED lighting throughout, and smoke alarm installation.",
  },
  {
    icon: Building2,
    tag: "Commercial",
    name: "Office Fit-Out",
    desc: "Full electrical fit-out for a 300sqm commercial office including data cabling, LED panels, and emergency lighting.",
  },
  {
    icon: Zap,
    tag: "Emergency",
    name: "Switchboard Fault",
    desc: "Emergency response to a switchboard fault in a residential property — fault identified and resolved within 2 hours.",
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
      <div ref={numRef} className="absolute top-0 right-0 text-[200px] font-extrabold text-white pointer-events-none select-none leading-none" style={{ opacity: 0 }}>03</div>

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
              {/* Icon block */}
              <div
                className="flex items-center justify-center"
                style={{ height: "220px", background: "linear-gradient(135deg, #111111, #1a1a1a)" }}
              >
                <p.icon size={48} color="#f59e0b" strokeWidth={1.5} />
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
