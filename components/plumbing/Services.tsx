"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Droplets, AlertTriangle, Home, Flame } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Droplets,
    title: "General Plumbing",
    description: "Taps, pipes, fixtures, and general plumbing repairs handled efficiently and to a high standard.",
    image: "https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Callouts",
    description: "Available 24 hours a day, 7 days a week for urgent plumbing issues that cannot wait.",
    image: "https://images.unsplash.com/photo-1526898943670-92bfa9f94c12?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Home,
    title: "Bathroom Renovations",
    description: "Full bathroom fit-outs and renovations, from design through to completion.",
    image: "https://images.unsplash.com/photo-1704731529088-19083feb5b43?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Flame,
    title: "Hot Water Systems",
    description: "Installation, repair, and replacement of hot water cylinders and heat pumps.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [imageHovered, setImageHovered] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

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

        {/* Heading */}
        <div className="services-heading mb-16">
          <span className="eyebrow tracking-[0.15em]">Premium Services</span>
          <h2 className="section-heading font-serif mt-2" style={{ fontWeight: 800 }}>
            Unmatched Expertise for Every Need
          </h2>
          <p className="text-secondary text-lg font-light max-w-2xl mt-4">
            From bespoke bathroom installations to urgent commercial repairs,
            we bring an uncompromising level of quality to every project.
          </p>
        </div>

        {/* Grid: stacked on mobile, side-by-side on desktop */}
        <div
          style={{
            display: "flex",
            flexDirection: isDesktop ? "row" : "column",
            gap: isDesktop ? "3rem" : "2rem",
            alignItems: "stretch",
          }}
        >
          {/* Image */}
          <div
            onMouseEnter={() => setImageHovered(true)}
            onMouseLeave={() => setImageHovered(false)}
            style={{
              width: isDesktop ? "50%" : "100%",
              flexShrink: 0,
              minHeight: isDesktop ? "100%" : "320px",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid #1e1e1e",
            }}
          >
            <img
              src="/images/plumbing/services.png"
              alt="Premium plumbing installation"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transform: imageHovered ? "scale(1.05)" : "scale(1)",
                transition: "transform 1s ease",
              }}
            />
          </div>

          {/* Cards: 2-col on mobile≥480, 1-col on small mobile, fill remaining on desktop */}
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1.5rem",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el; }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  backgroundColor: "#111111",
                  border: `1px solid ${hoveredCard === index ? "var(--accent-color)" : "#1e1e1e"}`,
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "border-color 0.3s ease",
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", height: "160px", overflow: "hidden" }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transform: hoveredCard === index ? "scale(1.07)" : "scale(1)",
                      transition: "transform 0.6s ease",
                    }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, transparent 40%, #111111 100%)",
                  }} />
                </div>
                {/* Content */}
                <div style={{ padding: "20px 24px 24px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 215, 0, 0.1)",
                      border: "1px solid rgba(255, 215, 0, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "14px",
                    }}
                  >
                    <service.icon size={18} strokeWidth={1.5} style={{ color: "var(--accent-color)" }} />
                  </div>
                  <h3
                    style={{
                      color: "#ffffff",
                      fontSize: "17px",
                      fontWeight: 800,
                      marginBottom: "8px",
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      color: "#9ca3af",
                      fontSize: "13px",
                      lineHeight: "1.65",
                      fontFamily: "'Raleway', sans-serif",
                      margin: 0,
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
