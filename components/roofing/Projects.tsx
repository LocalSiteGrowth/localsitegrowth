"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    tag: "RESIDENTIAL",
    bgWord: "RESIDENTIAL",
    image: "https://images.unsplash.com/photo-1603517431529-6ba96d7525bb?auto=format&fit=crop&w=1200&q=80",
    name: "FULL RE-ROOF · CEDAR SHINGLES",
    description:
      "Complete tear-off and re-roof of a large residential property. New underlay, new battens, premium cedar shingles throughout.",
  },
  {
    tag: "COMMERCIAL",
    bgWord: "COMMERCIAL",
    image: "https://images.unsplash.com/photo-1484265500982-34aebf76c655?auto=format&fit=crop&w=1200&q=80",
    name: "WAREHOUSE METAL ROOF",
    description:
      "Long run metal roofing over a 1,200sqm commercial warehouse. Completed on schedule, zero defects on final inspection.",
  },
  {
    tag: "STORM DAMAGE",
    bgWord: "EMERGENCY",
    image: "https://images.unsplash.com/photo-1633759593085-1eaeb724fc88?auto=format&fit=crop&w=1200&q=80",
    name: "EMERGENCY REPAIR",
    description:
      "Called at 6am after a storm tore sections off a residential roof. On site by 8am, made safe and watertight by midday.",
  },
];

const Projects = () => {
  const ruleRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    gsap.fromTo(
      ruleRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.6,
        ease: "power2.out",
        transformOrigin: "left",
        scrollTrigger: { trigger: ruleRef.current, start: "top 90%", once: true },
      }
    );

    gsap.fromTo(
      eyebrowRef.current,
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: { trigger: eyebrowRef.current, start: "top 90%", once: true },
      }
    );

    gsap.fromTo(
      headingRef.current,
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.75,
        ease: "power2.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 90%", once: true },
      }
    );

    cardRefs.current.forEach((card) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 90%", once: true },
        }
      );
    });
  }, []);

  return (
    <section
      id="projects"
      style={{
        backgroundColor: "#161616",
        padding: "100px 0",
      }}
    >
      {/* Red rule */}
      <div
        ref={ruleRef}
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: "#dc2626",
          opacity: 0.2,
          marginBottom: "80px",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* Eyebrow */}
        <p
          ref={eyebrowRef}
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            color: "#dc2626",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          OUR WORK
        </p>

        {/* Heading */}
        <h2
          ref={headingRef}
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(48px, 6vw, 72px)",
            color: "#ffffff",
            lineHeight: 1,
            marginBottom: "64px",
          }}
        >
          THE PROOF IS ON THE ROOF.
        </h2>

        {/* Cards grid */}
        <div
          className="roofing-projects-grid"
          style={{
            display: "grid",
            gap: "24px",
          }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="roofing-project-card"
              style={{
                backgroundColor: "#1a1a1a",
                border: "2px solid #2a2a2a",
                borderRadius: 0,
                overflow: "hidden",
                transition: "border-color 250ms, transform 250ms",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#dc2626";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2a2a2a";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Image block */}
              <div
                style={{
                  position: "relative",
                  height: "240px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 600ms ease",
                  }}
                  className="roofing-card-img"
                />
                {/* Dark overlay so card content stays legible */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, rgba(13,13,13,0.15) 0%, rgba(13,13,13,0.55) 100%)",
                    pointerEvents: "none",
                  }}
                />
                {/* Diagonal stripe */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(220,38,38,0.15) 40px, rgba(220,38,38,0.15) 43px)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "28px" }}>
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "#dc2626",
                    color: "#ffffff",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    padding: "4px 12px",
                    borderRadius: 0,
                    textTransform: "uppercase",
                  }}
                >
                  {project.tag}
                </span>
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "28px",
                    color: "#ffffff",
                    letterSpacing: "0.04em",
                    marginTop: "12px",
                    marginBottom: 0,
                    lineHeight: 1.1,
                  }}
                >
                  {project.name}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    color: "#8a8a8a",
                    lineHeight: 1.6,
                    marginTop: "8px",
                  }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .roofing-projects-grid {
          grid-template-columns: repeat(3, 1fr) !important;
        }
        @media (max-width: 768px) {
          .roofing-projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .roofing-project-card:hover .roofing-card-img {
          transform: scale(1.06) !important;
        }
      `}</style>
    </section>
  );
};

export default Projects;
