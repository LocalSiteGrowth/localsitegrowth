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


    </main>
  );
}
