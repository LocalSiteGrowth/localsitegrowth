"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { MousePointer2, Smartphone, Zap, MessageSquare, MapPin, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: MousePointer2,
    heading: "Effortless to Use",
    body: "A considered layout that puts the right information in front of the right person at the right moment.",
  },
  {
    icon: Smartphone,
    heading: "Every Screen, Every Device",
    body: "Equally refined on a desktop, a tablet, or a phone — no exceptions.",
  },
  {
    icon: Zap,
    heading: "Clarity Over Complexity",
    body: "What you do and where you do it, presented directly — no guesswork required on the visitor's part.",
  },
  {
    icon: MessageSquare,
    heading: "Direct Contact",
    body: "Calling, booking or sending an email is designed to remove every barrier between a visitor and a conversation.",
  },
  {
    icon: MapPin,
    heading: "Live Map Integration",
    body: "A Google Maps embed placed directly on your site — giving visitors your exact location and directions without ever leaving the page.",
  },
  {
    icon: CheckCircle2,
    heading: "Built to Be Believed",
    body: "Reviews and project photos presented with intention — turning a visitor's curiosity into confidence.",
  },
];

export default function WhatIDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

      const featureItems = featuresRef.current?.children;
      if (featureItems) {
        gsap.from(featureItems, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          },
        });
      }

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
      id="what-i-do"
      ref={sectionRef}
      className="section-padding bg-[#0a0a0a]"
    >
      <div className="container-custom">
        <div ref={headingRef} className="mb-16">
          <span className="text-[12px] text-accent font-semibold tracking-[0.1em] uppercase block mb-4">
            What I Do
          </span>
          <h2 className="text-3xl md:text-[40px] font-bold text-white max-w-2xl leading-tight">
            Every detail considered. Every function purposeful.
          </h2>
        </div>

        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 mb-20">
          {features.map((feature) => (
            <div key={feature.heading} className="flex flex-col items-start">
              <feature.icon className="text-accent mb-6" size={24} strokeWidth={1.5} />
              <h3 className="text-white font-semibold text-[16px] mb-3">
                {feature.heading}
              </h3>
              <p className="text-secondary text-[14px] leading-[1.6]">
                {feature.body}
              </p>
            </div>
          ))}
        </div>

        <div ref={imageRef} className="relative max-w-[800px] mx-auto aspect-video rounded-[12px] overflow-hidden">
          <Image
            src="https://www.localsitegrowth.com/assets/uploads/aa502cb4-2fd4-407a-a8d1-a42ba5a5c050/a0d1cf8a-bb78-4e89-97ed-e71cfa6fb101.jpg"
            alt="Work Showcase"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
