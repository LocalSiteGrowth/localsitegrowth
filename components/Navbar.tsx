"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Who This Is For", href: "#who-this-is-for" },
  { name: "What I Do", href: "#what-i-do" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Demo Sites", href: "#demo-sites" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-[#0f0f0f] border-b border-border py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white text-xl font-bold tracking-tight">
          Local Site Growth
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-secondary hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA & Phone */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+64225707467"
            className="text-accent text-sm font-semibold flex items-center gap-2"
          >
            <Phone size={14} />
            +64 22 570 7467
          </a>
          <Link href="#contact" className="btn-outline text-sm">
            Get a Free Demo
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-[#0a0a0a] z-40 lg:hidden transition-transform duration-300 transform",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex items-center justify-between mb-12">
            <Link
              href="/"
              className="text-white text-xl font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Local Site Growth
            </Link>
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X />
            </button>
          </div>

          <a
            href="tel:+64225707467"
            className="text-accent text-lg font-bold mb-8 flex items-center gap-3"
          >
            <Phone size={20} />
            +64 22 570 7467
          </a>

          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-secondary hover:text-white text-xl font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto">
            <Link
              href="#contact"
              className="btn-primary w-full text-center inline-block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Free Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
