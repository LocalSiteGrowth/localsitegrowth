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
      className="bg-[#0f0f0f] section-padding"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="about-content">
            <span className="eyebrow">About Us</span>
            <h2 className="section-heading">Local Plumbers. Proper Service.</h2>
            <p className="text-secondary text-lg mb-8 leading-relaxed">
              Flow Plumbing Services has been keeping homes and businesses running smoothly for over a decade. 
              We're a local team that takes pride in our work — showing up on time, communicating clearly, 
              and leaving every job cleaner than we found it.
            </p>
            <p className="text-secondary text-lg mb-10 leading-relaxed">
              No subcontractors, no call centres. Just experienced plumbers who care about doing the job right.
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

          <div className="about-image relative">
            <div className="w-full h-[400px] bg-[#111111] rounded-2xl border border-border flex items-center justify-center group overflow-hidden">
              <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors" />
              <Wrench size={64} className="text-accent relative z-10 group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
