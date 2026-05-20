import type { Metadata } from "next";
import Navbar from "@/components/roofing/Navbar";
import Hero from "@/components/roofing/Hero";
import Services from "@/components/roofing/Services";
import Projects from "@/components/roofing/Projects";
import About from "@/components/roofing/About";
import Contact from "@/components/roofing/Contact";
import Footer from "@/components/roofing/Footer";

export const metadata: Metadata = {
  title: "Ridge & Crown Roofing - Local Roofers You Can Count On",
  description:
    "Professional roofing services for residential and commercial properties. New roofs, re-roofing, repairs, and 24-hour emergency call-outs. Free quotes available.",
};

export default function RoofingPage() {
  return (
    <main
      className="roofing-theme"
      style={{ backgroundColor: "#0d0d0d", fontFamily: "var(--font-inter)" }}
    >
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
