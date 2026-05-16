"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const demoSites = [
  {
    image: "/images/plumbing/about.png",
    heading: "Plumbing Business Website",
    body: "Clean, trust-building layout designed to turn visitors into service calls. Perfect for local plumbing businesses looking to grow online.",
    link: "/plumbing",
    objectPosition: "center 25%",
  },
  {
    image: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/a181f1ec-cf95-4ff0-4712-f1dceca21b00/publicContain",
    heading: "Electrician Business Website",
    body: "Professional, easy-to-navigate layout designed to generate calls and project requests for local electricians.",
    link: "/electrician",
  },
  {
    image: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/e8e6bf84-98fd-44ad-a0e2-d62e991f0200/public",
    heading: "Roofing Business Website",
    body: "Clean, high-converting layout designed to turn website visitors into roofing estimates and customer calls.",
    link: "#",
  },
];

export default function DemoSites() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

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

      const cards = stackRef.current?.children;
      if (cards) {
        gsap.from(cards, {
          y: 50,
          opacity: 0,
          duration: 0.7,
          stagger: 0.2,
          scrollTrigger: {
            trigger: stackRef.current,
            start: "top 80%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="demo-sites"
      ref={sectionRef}
      className="section-padding bg-[#0f0f0f]"
    >
      <div className="container-custom">
        <div ref={headingRef} className="text-center mb-16">
          <span className="text-[12px] text-accent font-semibold tracking-[0.1em] uppercase block mb-4">
            Demo Websites
          </span>
          <h2 className="text-3xl md:text-[40px] font-bold text-white mb-6">
            See the Work Before You Commit
          </h2>
          <p className="text-secondary text-base max-w-[560px] mx-auto leading-relaxed">
            Three complete website concepts designed to convert visitors into customers.
          </p>
        </div>

        <div ref={stackRef} className="flex flex-col gap-10 max-w-[800px] mx-auto">
          {demoSites.map((site) => (
            <div
              key={site.heading}
              className="bg-[#111111] border border-[#1e1e1e] rounded-[12px] overflow-hidden group"
            >
              <div className="relative h-[260px] w-full">
                <Image
                  src={site.image}
                  alt={site.heading}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: (site as any).objectPosition || 'center' }}
                />
              </div>
              <div className="p-7 md:p-10">
                <h3 className="text-white text-[18px] font-semibold mb-4">
                  {site.heading}
                </h3>
                <p className="text-secondary text-[14px] md:text-[15px] mb-8 leading-relaxed">
                  {site.body}
                </p>
                {site.link === "#" ? (
                  <button
                    className="btn-outline inline-block text-sm opacity-50 cursor-not-allowed"
                    disabled
                  >
                    Coming Soon
                  </button>
                ) : (
                  <Link
                    href={site.link}
                    className="btn-outline inline-block text-sm"
                  >
                    Preview Demo Website
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-secondary text-[13px] text-center mt-12 italic">
          Sample concepts only — your website will be fully customised to your business.
        </p>
      </div>
    </section>
  );
}
