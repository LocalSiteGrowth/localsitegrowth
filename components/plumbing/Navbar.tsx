"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Droplets, Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-[#0f0f0f] border-[#1e1e1e] py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Droplets size={18} className="text-white fill-current" />
          </div>
          <span className="text-xl font-extrabold text-white tracking-tight">
            Flow <span className="text-accent">Plumbing</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[14px] font-medium text-secondary hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-6 border-l border-border pl-6">
            <a
              href="tel:+64210000000"
              className="flex items-center gap-2 text-accent font-semibold hover:brightness-110 transition-all"
            >
              <Phone size={16} />
              <span>+64 21 000 0000</span>
            </a>
            <Link href="#contact" className="btn-primary py-2 px-5 text-sm">
              Get a Free Quote
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] bg-[#0f0f0f] z-40 md:hidden transition-transform duration-300 flex flex-col p-6 gap-8",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <a
          href="tel:+64210000000"
          className="flex items-center gap-3 text-accent text-xl font-bold py-4 border-b border-border"
        >
          <Phone size={24} />
          <span>+64 21 000 0000</span>
        </a>
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-secondary hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Link
          href="#contact"
          className="btn-primary w-full mt-auto mb-10 py-4 text-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Get a Free Quote
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
