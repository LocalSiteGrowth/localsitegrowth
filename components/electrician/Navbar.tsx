"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Why Volt", href: "#why-volt" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0a0a0a] border-b border-[#1e1e1e] py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/electrician" className="flex items-center gap-2 group">
          <span className="text-2xl tracking-tighter">
            <span className="text-white font-extrabold">Volt</span>
            <span className="text-[var(--accent-color)] font-light ml-1">Electrical</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] uppercase tracking-widest font-medium text-[var(--secondary-color)] hover:text-white transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-8 pl-8 border-l border-[#1e1e1e]">
            <a
              href="tel:+64210000000"
              className="text-[13px] font-semibold text-[var(--accent-color)] hover:brightness-110 transition-all"
            >
              +64 21 000 0000
            </a>
            <Link
              href="#contact"
              className="border border-[var(--accent-color)] text-[var(--accent-color)] px-5 py-2 rounded-[4px] text-[13px] font-medium tracking-widest uppercase hover:bg-[var(--accent-color)] hover:text-[#080808] transition-all duration-200"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[var(--accent-color)]"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-[#0a0a0a] opacity-[0.98] z-[60] flex flex-col items-center justify-center gap-8 transition-transform duration-500",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          className="absolute top-8 right-8 text-[var(--accent-color)]"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-2xl font-medium text-white tracking-widest uppercase"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        
        <a
          href="tel:+64210000000"
          className="text-xl font-semibold text-[var(--accent-color)] mt-4"
        >
          +64 21 000 0000
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
