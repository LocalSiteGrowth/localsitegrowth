import type { Metadata } from "next";
import Navbar from "@/components/electrician/Navbar";
import Hero from "@/components/electrician/Hero";
import Services from "@/components/electrician/Services";
import Projects from "@/components/electrician/Projects";
import WhyVolt from "@/components/electrician/WhyVolt";
import Contact from "@/components/electrician/Contact";
import Footer from "@/components/electrician/Footer";

export const metadata: Metadata = {
  title: "Volt Electrical - Licensed Electricians Available 24/7",
  description:
    "Professional electrical services for residential and commercial properties. Precision workmanship, transparent pricing, and 24/7 emergency cover.",
};

export default function ElectricianPage() {
  return (
    <main className="electrician-theme" style={{ backgroundColor: "#080808", fontFamily: "var(--font-outfit)" }}>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <WhyVolt />
      <Contact />
      <Footer />
    </main>
  );
}
