"use client";

import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const checklist = [
  "Full business name and branding",
  "Mobile-friendly design across all devices",
  "Clear presentation of your services",
  "Call and enquiry buttons for quick contact",
  "Contact form for direct customer messages",
  "Google Maps integration",
  "Fast-loading performance",
  "Clean, professional layout",
];

const addOns = [
  {
    name: "Website Maintenance",
    desc: "Ongoing updates and technical maintenance",
  },
  {
    name: "Additional Pages",
    desc: "Add extra service pages, team pages, FAQ sections or location pages",
  },
  {
    name: "Booking or Payment Integration",
    desc: "Add simple online booking or payment options",
  },
  {
    name: "Google Business Profile Optimisation",
    desc: "Improve how your business appears on Google Maps",
  },
];

export default function WhatsIncluded() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        x: -30,
        opacity: 0,
        duration: 0.75,
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 85%",
        },
      });

      gsap.from(rightRef.current, {
        x: 30,
        opacity: 0,
        duration: 0.75,
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-[#0a0a0a]"
    >
      <div className="container-custom">
        <div className="mb-16">
          <span className="text-[12px] text-accent font-semibold tracking-[0.1em] uppercase block mb-4">
            What's Included
          </span>
          <h2 className="text-3xl md:text-[40px] font-bold text-white max-w-2xl leading-tight">
            Everything you need for a strong online presence.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Checklist Left */}
          <div ref={leftRef}>
            <ul className="space-y-4">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-4 text-white text-[15px] leading-[1.8]">
                  <Check size={18} className="text-accent mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline & Add-ons Right */}
          <div ref={rightRef} className="space-y-6">
            <div className="p-6 bg-[#111111] border border-[#1e1e1e] rounded-[10px]">
              <span className="text-secondary text-[12px] uppercase block mb-2">Timeline</span>
              <p className="text-white text-[22px] font-bold">2–3 weeks from approval</p>
            </div>

            <div className="p-6 bg-[#111111] border border-[#1e1e1e] rounded-[10px]">
              <span className="text-secondary text-[12px] uppercase block mb-6">Optional Add-Ons</span>
              <div className="space-y-6">
                {addOns.map((addon) => (
                  <div key={addon.name}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-accent font-bold text-[18px]">+</span>
                      <h4 className="text-white text-[15px] font-semibold">{addon.name}</h4>
                    </div>
                    <p className="text-secondary text-[14px] ml-4">{addon.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-secondary text-[13px] italic mt-8">
                Optional — your website is fully functional without any add-ons.
              </p>
            </div>
          </div>
        </div>

        <p className="text-secondary text-[16px] italic text-center mt-20 max-w-2xl mx-auto border-t border-[#1e1e1e] pt-12">
          "The objective is straightforward: make it easy for customers to understand your business and get in touch."
        </p>
      </div>
    </section>
  );
}
