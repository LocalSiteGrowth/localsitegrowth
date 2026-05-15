"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer({ 
  onPrivacyClick, 
  onTermsClick 
}: { 
  onPrivacyClick: () => void; 
  onTermsClick: () => void; 
}) {
  return (
    <footer className="bg-[#080808] border-t border-[#1e1e1e] pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start mb-20">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-4">
              <Image
                src="/logo.png"
                alt="Local Site Growth"
                width={200}
                height={50}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link href="#who-this-is-for" className="text-secondary hover:text-white text-[13px] transition-colors">
              Who This Is For
            </Link>
            <Link href="#what-i-do" className="text-secondary hover:text-white text-[13px] transition-colors">
              What I Do
            </Link>
            <Link href="#how-it-works" className="text-secondary hover:text-white text-[13px] transition-colors">
              How It Works
            </Link>
            <Link href="#demo-sites" className="text-secondary hover:text-white text-[13px] transition-colors">
              Demo Sites
            </Link>
            <Link href="#faq" className="text-secondary hover:text-white text-[13px] transition-colors">
              FAQ
            </Link>
            <Link href="#contact" className="text-secondary hover:text-white text-[13px] transition-colors">
              Contact
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col lg:items-end gap-3">
            <a href="mailto:info@localsitegrowth.com" className="text-secondary hover:text-white text-[13px] transition-colors">
              info@localsitegrowth.com
            </a>
            <a href="tel:+64225707467" className="text-secondary hover:text-white text-[13px] transition-colors">
              +64 22 570 7467
            </a>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="flex flex-col items-center gap-4 pt-10 border-t border-[#1e1e1e]/50">
          <p className="text-[#3a3a3a] text-[12px] text-center">
            © 2026 Local Site Growth · Custom Web Design · Where Details Matter
          </p>
          <div className="flex items-center gap-6">
            <button 
              onClick={onPrivacyClick}
              className="text-[#3a3a3a] hover:text-secondary text-[12px] transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={onTermsClick}
              className="text-[#3a3a3a] hover:text-secondary text-[12px] transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
