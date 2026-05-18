"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: "15+", label: "YEARS IN BUSINESS" },
  { number: "800+", label: "ROOFS COMPLETED" },
  { number: "24H", label: "EMERGENCY RESPONSE" },
  { number: "100%", label: "WORKMANSHIP GUARANTEE" },
];

const About = () => {
  const ruleRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const body1Ref = useRef<HTMLParagraphElement>(null);
  const body2Ref = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    [body1Ref, body2Ref, btnRef].forEach((ref) => {
      gsap.fromTo(
        ref.current,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
        }
      );
    });

    statRefs.current.forEach((stat) => {
      if (!stat) return;
      gsap.fromTo(
        stat,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: stat, start: "top 90%", once: true },
        }
      );
    });
  }, []);

  return (
    <section
      id="about"
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
          WHO WE ARE
        </p>

        {/* Split layout */}
        <div className="roofing-about-grid" style={{ display: "grid", gap: "64px", alignItems: "start" }}>
          {/* Left — text */}
          <div>
            <h2
              ref={headingRef}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(36px, 4vw, 56px)",
                color: "#ffffff",
                lineHeight: 1,
              }}
            >
              LOCAL ROOFERS. REAL RESULTS.
            </h2>

            <p
              ref={body1Ref}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                color: "#8a8a8a",
                lineHeight: 1.8,
                marginTop: "24px",
                maxWidth: "480px",
              }}
            >
              Ridge &amp; Crown has been protecting homes and businesses across
              the region for over 15 years. We&apos;re not a call centre.
              We&apos;re not a franchise. We&apos;re a local team of experienced
              roofers who show up, do the job right, and stand behind every roof
              we touch. No shortcuts. No excuses.
            </p>

            <p
              ref={body2Ref}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                color: "#ffffff",
                lineHeight: 1.8,
                marginTop: "16px",
                fontStyle: "italic",
                maxWidth: "480px",
              }}
            >
              &quot;When the weather turns, you&apos;ll know whether your roof was
              done properly. Ours are.&quot;
            </p>

            <Link
              ref={btnRef}
              href="#contact"
              style={{
                display: "inline-block",
                marginTop: "32px",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#ffffff",
                backgroundColor: "#dc2626",
                padding: "16px 36px",
                borderRadius: 0,
                textDecoration: "none",
                transition: "background-color 200ms",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#b91c1c")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#dc2626")
              }
            >
              GET A FREE QUOTE
            </Link>
          </div>

          {/* Right — stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                ref={(el) => {
                  statRefs.current[i] = el;
                }}
                className="roofing-stat-block"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "2px solid #2a2a2a",
                  borderRadius: 0,
                  padding: "32px",
                  textAlign: "center",
                  transition: "border-color 200ms",
                  cursor: "default",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "#dc2626")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#2a2a2a")
                }
              >
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "56px",
                    color: "#dc2626",
                    lineHeight: 1,
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    color: "#8a8a8a",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginTop: "8px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .roofing-about-grid {
          grid-template-columns: 1fr 1fr !important;
        }
        @media (max-width: 768px) {
          .roofing-about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
