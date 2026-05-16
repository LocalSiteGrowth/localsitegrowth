"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Droplets, AlertTriangle, Home, Flame } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Droplets,
    title: "General Plumbing",
    description: "Taps, pipes, fixtures, and general plumbing repairs handled efficiently and to a high standard.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Callouts",
    description: "Available 24 hours a day, 7 days a week for urgent plumbing issues that cannot wait.",
  },
  {
    icon: Home,
    title: "Bathroom Renovations",
    description: "Full bathroom fit-outs and renovations, from design through to completion.",
  },
  {
    icon: Flame,
    title: "Hot Water Systems",
    description: "Installation, repair, and replacement of hot water cylinders and heat pumps.",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-heading", {
        y: 40,
        opacity: 0,
        duration: 0.75,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-heading",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(cardsRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-[var(--bg-color)] section-padding"
    >
      <div className="container-custom">

        {/* Heading row — full width */}
        <div className="services-heading mb-16">
          <span className="eyebrow tracking-[0.15em]">Premium Services</span>
          <h2 className="section-heading font-serif mt-2">
            Unmatched Expertise for Every Need
          </h2>
          <p className="text-secondary text-lg font-light max-w-2xl mt-4">
            From bespoke bathroom installations to urgent commercial repairs,
            we bring an uncompromising level of quality to every project.
          </p>
        </div>

        {/* Content row — image left, cards right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Left — image */}
          <div
            className="group"
            style={{
              position: "relative",
              width: "100%",
              height: "480px",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid #1e1e1e",
            }}
          >
            <img
              src="/images/plumbing/services.png"
              alt="Premium plumbing installation"
              className="group-hover:scale-105 transition-transform duration-1000"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Right — 2x2 cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                style={{
                  backgroundColor: "#111111",
                  border: "1px solid #1e1e1e",
                  borderRadius: "12px",
                  padding: "28px",
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
                  <service.icon
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
                  {service.title}
                </h3>
                <p
                  style={{
                    color: "#9ca3af",
                    fontSize: "14px",
                    lineHeight: "1.65",
                  }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile layout override */}
        <style>{`
          @media (max-width: 768px) {
            .services-grid {
              grid-template-columns: 1fr !important;
            }
            .services-cards {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>

      </div>
    </section>
  );
};

export default Services;
