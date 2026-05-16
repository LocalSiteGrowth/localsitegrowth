"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  Droplets, 
  AlertTriangle, 
  Home, 
  Flame, 
  Building, 
  ShieldCheck 
} from "lucide-react";

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
      // Heading animation
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

      // Cards staggered animation
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

          {/* Left column — heading, text, image */}
          <div className="services-heading flex flex-col h-full">
            <span className="eyebrow tracking-[0.15em]">Premium Services</span>
            <h2 className="section-heading font-serif">Unmatched Expertise for Every Need</h2>
            <p className="text-secondary text-lg mb-8 font-light max-w-md">
              From bespoke bathroom installations to urgent commercial repairs, we bring an uncompromising level of quality to every project.
            </p>
            <div className="relative flex-grow w-full rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-color)] group min-h-[300px]">
              <img
                src="/images/plumbing/services.png"
                alt="Luxury rainfall showerhead"
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
            </div>
          </div>

          {/* Right column — four service cards */}
          <div className="grid sm:grid-cols-2 gap-6 content-start">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="card-base group"
              >
                <div className="w-12 h-12 bg-accent-color/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-color/20 transition-colors border border-[var(--border-color)]">
                  <service.icon className="text-[var(--accent-color)]" size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-lg font-serif font-semibold mb-3 tracking-wide">{service.title}</h3>
                <p className="text-secondary text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
