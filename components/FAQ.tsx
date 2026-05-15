"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "How long does it take to build my website?",
    a: "Most websites take between 2–3 weeks to complete after approval of the demo/design. Simple one page websites can be finished in as little as 1–2 weeks, while larger or more custom projects may take longer depending on complexity, revisions, and how quickly content and feedback are provided.",
  },
  {
    q: "Do I own the website once it's built?",
    a: "Once final payment has been made and the website is approved, you will have full ownership of the website. Optional ongoing maintenance is available for updates, security monitoring, backups, and technical support. You also have full flexibility with hosting — you can choose to have the website hosted and managed through my setup, or it can be moved to your preferred hosting provider at any time.",
  },
  {
    q: "What does it cost?",
    a: "The initial website demo is provided at no upfront cost. After you review the design, pricing is discussed based on the features and functionality required. You see the value of the work before making any commitment.",
  },
  {
    q: "What happens after I submit the form?",
    a: "After reviewing your information, I'll contact you to learn more about your business and what you're looking for in a website. I'll then start building your free custom demo, with opportunities for your input and feedback as the project develops.",
  },
  {
    q: "Do you work with businesses outside of New Zealand?",
    a: "Absolutely. While I'm based in New Zealand, I work with businesses both locally and internationally. With modern communication tools, distance is never a barrier — I can manage projects effectively no matter where you are located.",
  },
  {
    q: "What is included in the website?",
    a: "Every website includes: custom design, mobile-friendly layout, service pages, contact form, call-to-action buttons, Google Maps integration, fast loading speed, and basic SEO setup. Additional features like booking systems or extra pages are available as add-ons.",
  },
  {
    q: "Can I add more pages or features later?",
    a: "Yes, your website can grow with your business. Ongoing maintenance is available and new pages, features, or content can be added whenever needed.",
  },
  {
    q: "How does Google Maps integration work?",
    a: "Your website will include a live Google Maps embed showing your business location directly on the page — giving visitors your exact location and directions without ever leaving the site. If you already have a Google Business Profile, it can be linked to your website to help improve how your business appears in local search results.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

      const items = itemsRef.current?.children;
      if (items) {
        gsap.from(items, {
          x: -30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          scrollTrigger: {
            trigger: itemsRef.current,
            start: "top 85%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="section-padding bg-[#0f0f0f]"
    >
      <div className="container-custom">
        <div ref={headingRef} className="text-center mb-16">
          <span className="text-[12px] text-accent font-semibold tracking-[0.1em] uppercase block mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-[40px] font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div ref={itemsRef} className="max-w-[760px] mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "border-b border-[#1e1e1e] transition-colors duration-300",
                openIndex === index && "border-accent/30"
              )}
            >
              <button
                className="w-full flex items-center justify-between py-6 text-left group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white text-[16px] font-medium pr-8 group-hover:text-accent transition-colors">
                  {faq.q}
                </span>
                <ChevronDown
                  className={cn(
                    "text-secondary transition-transform duration-350",
                    openIndex === index && "rotate-180 text-accent"
                  )}
                  size={20}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-350 ease-in-out",
                  openIndex === index ? "max-h-[500px] mb-6" : "max-h-0"
                )}
              >
                <p className="text-secondary text-[15px] leading-[1.7]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
