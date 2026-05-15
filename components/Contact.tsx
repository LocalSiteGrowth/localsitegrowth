"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const businessTypes = [
  "Plumbing Services",
  "Electrical Services",
  "Roofing Services",
  "HVAC / Heating & Cooling",
  "Landscaping Services",
  "Cleaning Services",
  "Dental / Medical Practice",
  "Restaurant / Cafe",
  "Retail Store",
  "Consultant / Freelancer",
  "Other",
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.75,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      });

      gsap.from(formRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-[#0a0a0a]"
    >
      <div className="container-custom">
        <div ref={headingRef} className="text-center mb-16">
          <span className="text-[12px] text-accent font-semibold tracking-[0.1em] uppercase block mb-4">
            Get Started
          </span>
          <h2 className="text-3xl md:text-[40px] font-bold text-white mb-6">
            Ready to Upgrade Your Online Presence?
          </h2>
          <p className="text-secondary text-base leading-relaxed">
            Request a free demo website — no upfront cost, no obligation.
          </p>
        </div>

        <div ref={formRef} className="max-w-[640px] mx-auto">
          <div className="bg-[#111111] border border-[#1e1e1e] rounded-[12px] p-6 md:p-12 mb-12">
            {isSubmitted ? (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-accent text-3xl font-bold">✓</span>
                </div>
                <h3 className="text-white text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-secondary leading-relaxed">
                  Thank you for your interest. I'll review your information and get back to you shortly to discuss your custom demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-secondary text-[13px] font-medium mb-1.5 ml-1">Full Name</label>
                    <input
                      required
                      type="text"
                      className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-[8px] px-4 py-3 text-white text-[15px] focus:border-accent outline-none transition-colors placeholder:text-[#4a4a4a]"
                      placeholder="e.g. John Smith"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-secondary text-[13px] font-medium mb-1.5 ml-1">Company Name</label>
                    <input
                      required
                      type="text"
                      className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-[8px] px-4 py-3 text-white text-[15px] focus:border-accent outline-none transition-colors placeholder:text-[#4a4a4a]"
                      placeholder="e.g. Smith Plumbing"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-secondary text-[13px] font-medium mb-1.5 ml-1">Business Type</label>
                  <select
                    required
                    className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-[8px] px-4 py-3 text-white text-[15px] focus:border-accent outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled selected>Select your business type</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-secondary text-[13px] font-medium mb-1.5 ml-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-[8px] px-4 py-3 text-white text-[15px] focus:border-accent outline-none transition-colors placeholder:text-[#4a4a4a]"
                      placeholder="e.g. +64 22 570 7467"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-secondary text-[13px] font-medium mb-1.5 ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-[8px] px-4 py-3 text-white text-[15px] focus:border-accent outline-none transition-colors placeholder:text-[#4a4a4a]"
                      placeholder="e.g. info@localsitegrowth.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-secondary text-[13px] font-medium mb-1.5 ml-1">Tell me about your business</label>
                  <textarea
                    rows={4}
                    className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-[8px] px-4 py-3 text-white text-[15px] focus:border-accent outline-none transition-colors placeholder:text-[#4a4a4a] resize-none"
                    placeholder="Tell me a bit about what you do and what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full mt-4 flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : null}
                  Request a Free Website Demo →
                </button>
              </form>
            )}
          </div>

          <div className="text-center">
            <p className="text-secondary text-[13px] mb-4 uppercase tracking-wider">Or reach out directly</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href="tel:+64225707467" className="text-white text-lg font-medium hover:text-accent transition-colors">
                +64 22 570 7467
              </a>
              <a href="mailto:info@localsitegrowth.com" className="text-white text-lg font-medium hover:text-accent transition-colors">
                info@localsitegrowth.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
