"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const targetAudience = [
  {
    image: "/images/service-providers.jpg",
    heading: "Service Providers",
    body: "Plumbers, roofers, landscapers, electricians",
  },
  {
    image: "/images/clinics.jpg",
    heading: "Clinics & Professional Practices",
    body: "Dental clinics, medical practices, accountants, legal offices",
  },
  {
    image: "/images/shops.jpg",
    heading: "Local Shops & Restaurants",
    body: "Cafes, bakeries, retail stores, restaurants, boutique shops",
  },
  {
    image: "/images/professionals.jpg",
    heading: "Independent Professionals",
    body: "Consultants, freelancers, coaches, solo business owners",
  },
];

export default function WhoThisIsFor() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
      });

      const cards = gridRef.current?.children;
      if (cards) {
        gsap.from(cards, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="who-this-is-for"
      ref={sectionRef}
      className="section-padding bg-[#0a0a0a]"
    >
      <div className="container-custom">
        <div ref={headingRef} className="text-center mb-16">
          <span className="text-[12px] text-accent font-semibold tracking-[0.1em] uppercase block mb-4">
            Who This Is For
          </span>
          <h2 className="text-3xl md:text-[40px] font-bold text-white mb-6">
            Built for businesses that rely on local reputation.
          </h2>
          <p className="text-secondary text-base max-w-[600px] mx-auto leading-[1.7]">
            Tradespeople, clinics, retailers, independent professionals — if the quality of your work speaks for itself, your website should do the same.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {targetAudience.map((item) => (
            <div
              key={item.heading}
              className="group bg-[#111111] border border-[#1e1e1e] rounded-[12px] transition-all duration-200 hover:border-accent/40 hover:-translate-y-[3px] overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <img
                  src={item.image}
                  alt={item.heading}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.heading}
                </h3>
                <p className="text-secondary text-[15px] leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="btn-outline inline-flex items-center gap-2"
          >
            Request a Free Website Demo
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
