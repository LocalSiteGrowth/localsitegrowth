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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        isScrolled
          ? "bg-[var(--bg-color)]/80 backdrop-blur-md border-[var(--border-color)] py-4 shadow-xl"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-transparent border border-[var(--accent-color)] rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
            <Droplets size={20} className="text-[var(--accent-color)]" strokeWidth={1.5} />
          </div>
          <span className="text-2xl font-serif text-white tracking-wide">
            Flow <span className="text-[var(--accent-color)] italic">Estates</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] uppercase tracking-widest font-medium text-secondary hover:text-[var(--accent-color)] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-8 border-l border-[var(--border-color)] pl-8">
            <a
              href="tel:+64210000000"
              className="flex items-center gap-2 text-[var(--accent-color)] hover:brightness-110 transition-all font-serif text-lg"
            >
              <Phone size={18} />
              <span>+64 21 000 0000</span>
            </a>
            <Link href="#contact" className="btn-primary py-3 px-6 text-xs tracking-widest uppercase">
              Consultation
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
          "fixed inset-0 top-[76px] bg-[var(--bg-color)] z-40 md:hidden transition-transform duration-500 flex flex-col p-6 gap-8",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <a
          href="tel:+64210000000"
          className="flex items-center gap-3 text-[var(--accent-color)] text-2xl font-serif py-4 border-b border-[var(--border-color)]"
        >
          <Phone size={24} />
          <span>+64 21 000 0000</span>
        </a>
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg tracking-widest uppercase font-medium text-secondary hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Link
          href="#contact"
          className="btn-primary w-full mt-auto mb-10 py-5 text-sm uppercase tracking-widest text-center"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Request Consultation
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
