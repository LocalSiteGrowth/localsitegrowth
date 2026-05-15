"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const targetAudience = [
  {
    image: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/dd354785-097f-4d13-f00e-dab31d481d00/publicContain",
    heading: "Service Providers",
    body: "Plumbers, roofers, landscapers, electricians",
  },
  {
    image: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/3a894806-a8ed-4d85-e2dd-8eae081d1800/publicContain",
    heading: "Clinics & Professional Practices",
    body: "Dental clinics, medical practices, accountants, legal offices",
  },
  {
    image: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/e67d32bd-7bfa-49b0-0afe-c9767f660d00/public",
    heading: "Local Shops & Restaurants",
    body: "Cafes, bakeries, retail stores, restaurants, boutique shops",
  },
  {
    image: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/6fa2b01f-4607-4694-4b12-9c1a84bd8500/public",
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
        y: 40,
        opacity: 0,
        duration: 0.75,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      });

      const cards = gridRef.current?.children;
      if (cards) {
        gsap.from(cards, {
          y: 50,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
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
              <img
                src={item.image}
                alt={item.heading}
                style={{ width: '100%', height: '192px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }}
                className="desaturate group-hover:desaturate-0 transition-all duration-500"
              />
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
