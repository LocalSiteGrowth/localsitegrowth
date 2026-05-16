import Link from "next/link";
import { Droplets } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#080808] border-t border-border pt-16 pb-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <Droplets size={18} className="text-white fill-current" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Flow <span className="text-accent">Plumbing</span>
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-8">
            <Link href="#services" className="text-secondary text-[13px] hover:text-white transition-colors">Services</Link>
            <Link href="#about" className="text-secondary text-[13px] hover:text-white transition-colors">About</Link>
            <Link href="#why-us" className="text-secondary text-[13px] hover:text-white transition-colors">Why Us</Link>
            <Link href="#contact" className="text-secondary text-[13px] hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Contact */}
          <div>
            <a href="tel:+64210000000" className="text-secondary text-[13px] hover:text-white transition-colors">
              +64 21 000 0000
            </a>
          </div>
        </div>

        <div className="mt-16 text-center border-t border-white/5 pt-8">
          <p className="text-[#3a3a3a] text-xs">
            © 2026 Flow Plumbing Services · All Rights Reserved
          </p>
          <p className="text-[#3a3a3a] text-[11px] mt-2">
            This is a sample demo website created by{" "}
            <a 
              href="https://www.localsitegrowth.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors underline"
            >
              Local Site Growth
            </a>
            . localsitegrowth.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
