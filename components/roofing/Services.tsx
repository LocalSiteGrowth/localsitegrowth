"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    name: "NEW ROOF INSTALLATION",
    description:
      "Full residential and commercial roof installations built to specification and local weather conditions.",
    image: "https://images.unsplash.com/photo-1763665814538-8ba04597286c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "RE-ROOFING",
    description:
      "Complete tear-off and replacement of existing roofs. We strip it back and start fresh the right way.",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "ROOF REPAIRS",
    description:
      "Leaks, storm damage, missing tiles, flashing failures — found and fixed before they become bigger problems.",
    image: "https://images.unsplash.com/photo-1681049400158-0ff6249ac315?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "GUTTERING & SPOUTING",
    description:
      "Full gutter installation, replacement, and cleaning. Keep water moving where it should.",
    image: "https://images.unsplash.com/photo-1677945451878-de79f98149c9?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "METAL ROOFING",
    description:
      "Long run metal roofing installed to exacting standards. Durable, modern, and built for decades of service.",
    image: "https://images.unsplash.com/photo-1518736346281-76873166a64a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "EMERGENCY CALL-OUTS",
    description:
      "Storm damage, active leaks, urgent structural concerns — we respond fast when it matters most.",
    image: "https://images.unsplash.com/photo-1544257750-572358f5da22?auto=format&fit=crop&w=800&q=80",
  },
];

const Services = () => {
  const ruleRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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
        scrollTrigger: {
          trigger: ruleRef.current,
          start: "top 90%",
          once: true,
        },
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
        scrollTrigger: {
          trigger: eyebrowRef.current,
          start: "top 90%",
          once: true,
        },
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
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      subtextRef.current,
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subtextRef.current,
          start: "top 90%",
          once: true,
        },
      }
    );

    itemRefs.current.forEach((item) => {
      if (!item) return;
      gsap.fromTo(
        item,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            once: true,
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="services"
      style={{
        backgroundColor: "#0d0d0d",
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
          opacity: 0.3,
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
          WHAT WE DO
        </p>

        {/* Heading */}
        <h2
          ref={headingRef}
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(48px, 6vw, 72px)",
            color: "#ffffff",
            lineHeight: 1,
            marginBottom: "16px",
          }}
        >
          BUILT TO LAST.
        </h2>

        {/* Subtext */}
        <p
          ref={subtextRef}
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            color: "#8a8a8a",
            marginBottom: "64px",
            maxWidth: "560px",
          }}
        >
          Every roof we install or repair is built to handle whatever the weather
          throws at it.
        </p>

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "48px 40px",
          }}
          className="roofing-services-grid"
        >
          {services.map((service, i) => (
            <div
              key={i}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="roofing-service-item"
              style={{
                backgroundColor: "#1a1a1a",
                border: "2px solid #2a2a2a",
                overflow: "hidden",
                transition: "border-color 200ms, transform 200ms",
                cursor: "default",
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
                <img
                  src={service.image}
                  alt={service.name}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 600ms ease",
                  }}
                  className="roofing-service-img"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, rgba(13,13,13,0.1) 0%, rgba(13,13,13,0.5) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
              {/* Text */}
              <div
                style={{
                  borderLeft: "3px solid #dc2626",
                  padding: "20px",
                }}
              >
                <p
                  className="roofing-service-name"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "22px",
                    color: "#ffffff",
                    letterSpacing: "0.04em",
                    marginBottom: 0,
                    transition: "color 200ms",
                  }}
                >
                  {service.name}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    color: "#8a8a8a",
                    lineHeight: 1.6,
                    marginTop: "6px",
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .roofing-services-grid {
          grid-template-columns: repeat(3, 1fr) !important;
        }
        @media (max-width: 1024px) {
          .roofing-services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .roofing-services-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .roofing-service-item:hover .roofing-service-name {
          color: #dc2626 !important;
        }
        .roofing-service-item:hover {
          border-color: #dc2626 !important;
          transform: translateY(-3px);
        }
        .roofing-service-item:hover .roofing-service-img {
          transform: scale(1.06) !important;
        }
      `}</style>
    </section>
  );
};

export default Services;
