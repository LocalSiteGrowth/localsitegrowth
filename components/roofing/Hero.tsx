"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const Hero = () => {
  const tagRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const btn1Ref = useRef<HTMLAnchorElement>(null);
  const btn2Ref = useRef<HTMLAnchorElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const tl = gsap.timeline();

    gsap.fromTo(
      tagRef.current,
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, delay: 0.1, ease: "power2.out" }
    );
    gsap.fromTo(
      line1Ref.current,
      { x: -60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: "power3.out" }
    );
    gsap.fromTo(
      line2Ref.current,
      { x: -60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7, delay: 0.35, ease: "power3.out" }
    );
    gsap.fromTo(
      line3Ref.current,
      { x: -60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7, delay: 0.5, ease: "power3.out" }
    );
    gsap.fromTo(
      subtextRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 0.7, ease: "power2.out" }
    );
    gsap.fromTo(
      [btn1Ref.current, btn2Ref.current],
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.9,
        ease: "power2.out",
        stagger: 0.1,
      }
    );

    const statItems = statsRef.current?.querySelectorAll(".stat-item");
    if (statItems) {
      gsap.fromTo(
        statItems,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 1.1,
          ease: "power2.out",
          stagger: 0.08,
        }
      );
    }

    gsap.fromTo(
      watermarkRef.current,
      { opacity: 0 },
      { opacity: 0.02, duration: 1.5, delay: 0.5, ease: "power2.out" }
    );

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.05, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, delay: 0.3, ease: "power3.out" }
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#0d0d0d",
        overflow: "hidden",
      }}
    >
      {/* Background image — positioned to show roofer on right side */}
      <img
        ref={imageRef}
        src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/e8e6bf84-98fd-44ad-a0e2-d62e991f0200/public"
        alt="Ridge & Crown Roofing — professional roofing work"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "right center",
          zIndex: 0,
        }}
      />

      {/* Gradient overlay — heavy dark on left where text is, fully transparent on right where roofer is */}
      <div
        className="roofing-hero-overlay"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to right, rgba(13,13,13,0.98) 0%, rgba(13,13,13,0.96) 25%, rgba(13,13,13,0.85) 40%, rgba(13,13,13,0.4) 58%, rgba(13,13,13,0.05) 75%, rgba(13,13,13,0.0) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom gradient — fades image into dark at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background:
            "linear-gradient(to top, rgba(13,13,13,1) 0%, rgba(13,13,13,0.0) 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Diagonal red stripe texture */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "100%",
          pointerEvents: "none",
          overflow: "hidden",
          zIndex: 2,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            background:
              "repeating-linear-gradient(45deg, transparent, transparent 200px, rgba(220,38,38,0.08) 200px, rgba(220,38,38,0.08) 204px)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Watermark */}
      <div
        ref={watermarkRef}
        style={{
          position: "absolute",
          bottom: "-20px",
          right: "-20px",
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(160px, 20vw, 280px)",
          color: "#ffffff",
          opacity: 0,
          pointerEvents: "none",
          lineHeight: 1,
          zIndex: 3,
          whiteSpace: "nowrap",
          userSelect: "none",
        }}
      >
        ROOFING
      </div>

      {/* Content — left half only so roofer is visible on right */}
      <div
        style={{
          position: "relative",
          zIndex: 4,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "140px 1.5rem 120px",
        }}
      >
        <div style={{ maxWidth: "560px" }}>

        {/* Red tag */}
        <div
          ref={tagRef}
          style={{
            display: "inline-block",
            backgroundColor: "#dc2626",
            color: "#ffffff",
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            padding: "6px 16px",
            borderRadius: 0,
            marginBottom: "28px",
            textTransform: "uppercase",
          }}
        >
          LICENSED ROOFERS · SINCE 2008
        </div>

        {/* H1 */}
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            lineHeight: 0.9,
            letterSpacing: "0.02em",
            marginBottom: 0,
          }}
        >
          <span
            ref={line1Ref}
            style={{
              display: "block",
              fontSize: "clamp(56px, 7vw, 96px)",
              color: "#ffffff",
            }}
          >
            WE PROTECT
          </span>
          <span
            ref={line2Ref}
            style={{
              display: "block",
              fontSize: "clamp(56px, 7vw, 96px)",
              color: "#ffffff",
            }}
          >
            WHAT MATTERS
          </span>
          <span
            ref={line3Ref}
            style={{
              display: "block",
              fontSize: "clamp(56px, 7vw, 96px)",
              color: "#dc2626",
            }}
          >
            MOST.
          </span>
        </h1>

        {/* Subtext */}
        <p
          ref={subtextRef}
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "17px",
            color: "#8a8a8a",
            lineHeight: 1.7,
            maxWidth: "480px",
            marginTop: "32px",
          }}
        >
          From a single repair to a full re-roof — Ridge &amp; Crown delivers
          roofing that holds up under anything. Residential and commercial work
          done properly, on time, every time.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            marginTop: "40px",
          }}
        >
          <Link
            ref={btn1Ref}
            href="#contact"
            style={{
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
              display: "inline-block",
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
          <Link
            ref={btn2Ref}
            href="#projects"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "#ffffff",
              backgroundColor: "transparent",
              border: "2px solid #2a2a2a",
              padding: "16px 36px",
              borderRadius: 0,
              textDecoration: "none",
              transition: "border-color 200ms, color 200ms",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#dc2626";
              e.currentTarget.style.color = "#dc2626";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#2a2a2a";
              e.currentTarget.style.color = "#ffffff";
            }}
          >
            VIEW OUR WORK
          </Link>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 0,
            marginTop: "48px",
          }}
        >
          {[
            { number: "15+", label: "YEARS EXPERIENCE" },
            { number: "800+", label: "ROOFS COMPLETED" },
            { number: "100%", label: "SATISFACTION GUARANTEED" },
          ].map((stat, i) => (
            <div
              key={i}
              className="stat-item"
              style={{
                padding: "0 32px",
                borderRight: i < 2 ? "2px solid #2a2a2a" : "none",
                borderLeft: i === 0 ? "none" : undefined,
                paddingLeft: i === 0 ? 0 : "32px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "48px",
                  color: "#ffffff",
                  lineHeight: 1,
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11px",
                  color: "#8a8a8a",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginTop: "6px",
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
        @media (max-width: 768px) {
          .roofing-hero-overlay {
            background: linear-gradient(
              to bottom,
              rgba(13,13,13,0.92) 0%,
              rgba(13,13,13,0.80) 50%,
              rgba(13,13,13,0.95) 100%
            ) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
