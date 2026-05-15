"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import WhatIDo from "@/components/WhatIDo";
import LocalVisibility from "@/components/LocalVisibility";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import DemoSites from "@/components/DemoSites";
import WhatsIncluded from "@/components/WhatsIncluded";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Modal from "@/components/Modal";

export default function Home() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Initial page fade in using from() so it's visible by default
    if (mainRef.current) {
      gsap.from(mainRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <main 
      ref={mainRef}
      className="relative bg-[#0a0a0a] min-h-screen"
    >
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhoThisIsFor />
      <WhatIDo />
      <LocalVisibility />
      <WhyWorkWithMe />
      <DemoSites />
      <WhatsIncluded />
      <FAQ />
      <Contact />
      <Footer 
        onPrivacyClick={() => setIsPrivacyOpen(true)} 
        onTermsClick={() => setIsTermsOpen(true)} 
      />
      <CookieBanner />

      {/* Privacy Modal */}
      <Modal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
        title="Privacy Policy"
      >
        <div className="space-y-4">
          <p>Last updated: May 15, 2026</p>
          <p>At Local Site Growth, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.</p>
          <h3 className="text-white font-bold text-lg mt-6">Information We Collect</h3>
          <p>We collect information that you provide directly to us through our contact form, including your name, email address, phone number, and business details. We also collect automated information through cookies to improve your browsing experience.</p>
          <h3 className="text-white font-bold text-lg mt-6">How We Use Your Information</h3>
          <p>We use your information to provide and improve our services, communicate with you regarding your demo request, and for internal analytical purposes.</p>
          <h3 className="text-white font-bold text-lg mt-6">Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us at info@localsitegrowth.com.</p>
        </div>
      </Modal>

      {/* Terms Modal */}
      <Modal 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)} 
        title="Terms of Service"
      >
        <div className="space-y-4">
          <p>Last updated: May 15, 2026</p>
          <p>By accessing or using the services of Local Site Growth, you agree to be bound by these Terms of Service.</p>
          <h3 className="text-white font-bold text-lg mt-6">Website Demo</h3>
          <p>Our free website demo is provided with no upfront cost and no obligation. The demo is for conceptual purposes and remains the property of Local Site Growth until a formal agreement is reached and payment is completed.</p>
          <h3 className="text-white font-bold text-lg mt-6">Ownership</h3>
          <p>Upon final payment and approval, full ownership of the finalized website is transferred to the client. Local Site Growth retains the right to display the work in our portfolio.</p>
          <h3 className="text-white font-bold text-lg mt-6">Limitation of Liability</h3>
          <p>Local Site Growth shall not be liable for any indirect, incidental, or consequential damages arising out of the use of our services.</p>
        </div>
      </Modal>
    </main>
  );
}
