"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Clock, BadgeCheck, Receipt, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: Clock,
    title: "Fast Response",
    description: "We show up on time and get the job done without unnecessary delays or repeat visits.",
  },
  {
    icon: BadgeCheck,
    title: "Guaranteed Work",
    description: "All work is fully guaranteed. If something isn't right, we come back and fix it at no extra cost.",
  },
  {
    icon: Receipt,
    title: "Upfront Pricing",
    description: "You get a clear quote before any work starts. No hidden fees, no surprises on the invoice.",
  },
  {
    icon: Phone,
    title: "Always Reachable",
    description: "Call us any time — day or night. For emergencies we aim to be on site within the hour.",
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-heading", {
        y: 40,
        opacity: 0,
        duration: 0.75,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".why-heading",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: index * 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      style={{
        backgroundColor: "var(--bg-color)",
        borderTop: "1px solid #1e1e1e",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="container-custom">

        {/* Heading */}
        <div
          className="why-heading"
          style={{
            textAlign: "center",
            maxWidth: "640px",
            margin: "0 auto 64px auto",
          }}
        >
          <span className="eyebrow tracking-[0.15em]">Our Promise</span>
          <h2 className="section-heading font-serif">
            Excellence in Every Detail.
          </h2>
        </div>

        {/* 2x2 card grid — inline styles to guarantee layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {benefits.map((benefit, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="hover-gold-edge"
                style={{
                  backgroundColor: "#111111",
                  border: "1px solid #1e1e1e",
                  borderRadius: "12px",
                  padding: "32px",
                  transition: "border-color 0.3s ease",
                }}
              >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(245, 158, 11, 0.1)",
                  border: "1px solid #1e1e1e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <benefit.icon
                  size={22}
                  strokeWidth={1.5}
                  style={{ color: "#f59e0b" }}
                />
              </div>
              <h3
                style={{
                  color: "#ffffff",
                  fontSize: "17px",
                  fontWeight: 600,
                  marginBottom: "10px",
                }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  color: "#9ca3af",
                  fontSize: "14px",
                  lineHeight: "1.65",
                  margin: 0,
                }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile override and hover styles */}
        <style>{`
          @media (max-width: 640px) {
            .why-grid {
              grid-template-columns: 1fr !important;
            }
          }
          .hover-gold-edge:hover {
            border-color: var(--accent-color) !important;
          }
        `}</style>

      </div>
    </section>
  );
};

export default WhyChooseUs;
