"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LocalVisibility() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        x: -30,
        opacity: 0,
        duration: 0.75,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
        },
      });

      gsap.from(imageRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-[#111111]"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={contentRef}>
            <span className="text-[12px] text-accent font-semibold tracking-[0.1em] uppercase block mb-4">
              Local Visibility
            </span>
            <h2 className="text-3xl md:text-[40px] font-bold text-white mb-8 leading-tight">
              Get Found Where It Matters
            </h2>
            <p className="text-secondary text-base leading-[1.7]">
              Most customers find businesses through Google before they ever visit a website. What visitors see when they arrive determines whether they stay or move on. A website linked directly to your Google Maps profile, consistent in its information and clean in its presentation, gives your business the kind of online credibility that turns a search result into a genuine enquiry. On any device, at any time.
            </p>
          </div>

          <div ref={imageRef} className="relative aspect-[4/3] rounded-[12px] overflow-hidden">
            <Image
              src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/f644e197-dd1e-4a7b-62ba-62364bb24a00/publicContain"
              alt="Local Visibility"
              fill
              className="object-contain desaturate-[0.3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
