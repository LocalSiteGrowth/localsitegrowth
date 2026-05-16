"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Wrench } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Jobs Completed", value: "500+" },
  { label: "Emergency Cover", value: "24/7" },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content > *", {
        y: 40,
        opacity: 0,
        duration: 0.75,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
        },
      });

      gsap.from(".about-image", {
        scale: 0.95,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 80%",
        },
      });

      gsap.from(statsRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-stats",
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="bg-[var(--surface-color)] section-padding"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="about-content">
            <span className="eyebrow tracking-[0.15em]">The Gold Standard</span>
            <h2 className="section-heading font-serif">Craftsmanship Refined.</h2>
            <p className="text-secondary text-lg mb-8 leading-relaxed font-light">
              We elevate ordinary plumbing to an art form. Specializing in high-end residential and commercial estates, our expert artisans ensure every fixture, pipe, and detail is flawlessly integrated.
            </p>
            <p className="text-secondary text-lg mb-10 leading-relaxed font-light">
              Experience unparalleled service, meticulous attention to detail, and a commitment to preserving the luxury and integrity of your property.
            </p>

            <div className="about-stats flex flex-wrap gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  ref={(el) => { statsRef.current[index] = el; }}
                  className="flex flex-col"
                >
                  <span className="text-white text-2xl font-bold">{stat.value}</span>
                  <span className="text-secondary text-xs uppercase tracking-wider mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-image relative group">
            <div className="w-full h-[500px] bg-[var(--bg-color)] rounded-tl-2xl rounded-br-2xl rounded-tr-[80px] rounded-bl-[80px] border border-[var(--border-color)] overflow-hidden shadow-2xl">
              <img 
                src="/images/plumbing/about.png"
                alt="Close-up of premium gold faucet craftsmanship"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
