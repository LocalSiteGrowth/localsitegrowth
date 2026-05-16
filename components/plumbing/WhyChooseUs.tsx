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
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="why-us" 
      ref={sectionRef}
      className="bg-[var(--bg-color)] section-padding border-t border-[var(--border-color)]"
    >
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16 why-heading">
          <span className="eyebrow tracking-[0.15em]">Our Promise</span>
          <h2 className="section-heading font-serif">Excellence in Every Detail.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="card-base group"
            >
              <div className="w-12 h-12 bg-accent-color/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-color/20 transition-colors border border-[var(--border-color)]">
                <benefit.icon className="text-[var(--accent-color)]" size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-white text-lg font-serif font-semibold mb-3 tracking-wide">{benefit.title}</h3>
              <p className="text-secondary text-sm leading-relaxed font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
