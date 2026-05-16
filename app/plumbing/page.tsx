"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navbar from "@/components/plumbing/Navbar";
import Hero from "@/components/plumbing/Hero";
import Services from "@/components/plumbing/Services";
import WhyChooseUs from "@/components/plumbing/WhyChooseUs";
import About from "@/components/plumbing/About";
import Contact from "@/components/plumbing/Contact";
import Footer from "@/components/plumbing/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function PlumbingDemo() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      gsap.fromTo(
        mainRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.inOut" }
      );
    }
  }, []);

  return (
    <main 
      ref={mainRef}
      className="relative bg-[#0a0a0a] min-h-screen plumbing-theme"
    >
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Contact />
      <Footer />

      <style jsx global>{`
        .plumbing-theme {
          --color-accent: #2563eb;
          --accent: #2563eb;
        }
        
        .plumbing-theme .btn-primary {
          background-color: #2563eb !important;
        }
        
        .plumbing-theme .text-accent {
          color: #2563eb !important;
        }

        .plumbing-theme .bg-accent {
          background-color: #2563eb !important;
        }

        .plumbing-theme .border-accent {
          border-color: #2563eb !important;
        }

        .plumbing-theme .eyebrow {
          font-size: 12px;
          color: #2563eb;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .plumbing-theme .section-heading {
          font-size: clamp(32px, 5vw, 40px);
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
        }

        .plumbing-theme .hero-vignette::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 30%;
          background: linear-gradient(to top, #0a0a0a, transparent);
          border-radius: 0 0 16px 16px;
          pointer-events: none;
        }
      `}</style>
    </main>
  );
}
