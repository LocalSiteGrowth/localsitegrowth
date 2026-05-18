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
  },
  {
    name: "RE-ROOFING",
    description:
      "Complete tear-off and replacement of existing roofs. We strip it back and start fresh the right way.",
  },
  {
    name: "ROOF REPAIRS",
    description:
      "Leaks, storm damage, missing tiles, flashing failures — found and fixed before they become bigger problems.",
  },
  {
    name: "GUTTERING & SPOUTING",
    description:
      "Full gutter installation, replacement, and cleaning. Keep water moving where it should.",
  },
  {
    name: "METAL ROOFING",
    description:
      "Long run metal roofing installed to exacting standards. Durable, modern, and built for decades of service.",
  },
  {
    name: "EMERGENCY CALL-OUTS",
    description:
      "Storm damage, active leaks, urgent structural concerns — we respond fast when it matters most.",
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
                borderLeft: "3px solid #dc2626",
                paddingLeft: "24px",
                transition: "all 200ms",
                cursor: "default",
              }}
            >
              <p
                className="roofing-service-name"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "24px",
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
                  fontSize: "14px",
                  color: "#8a8a8a",
                  lineHeight: 1.6,
                  marginTop: "8px",
                }}
              >
                {service.description}
              </p>
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
          border-left-color: #dc2626 !important;
          filter: brightness(1.15);
        }
      `}</style>
    </section>
  );
};

export default Services;
