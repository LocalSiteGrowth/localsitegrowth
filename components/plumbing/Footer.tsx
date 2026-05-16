import Link from "next/link";
import { Droplets } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[var(--bg-color)] border-t border-[var(--border-color)] pt-16 pb-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-transparent border border-[var(--accent-color)] rounded-full flex items-center justify-center">
              <Droplets size={20} className="text-[var(--accent-color)]" strokeWidth={1.5} />
            </div>
            <span className="text-2xl font-serif text-white tracking-wide">
              Flow <span className="text-[var(--accent-color)] italic">Estates</span>
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-8">
            <Link href="#services" className="text-secondary text-[12px] uppercase tracking-widest hover:text-[var(--accent-color)] transition-colors">Services</Link>
            <Link href="#about" className="text-secondary text-[12px] uppercase tracking-widest hover:text-[var(--accent-color)] transition-colors">About</Link>
            <Link href="#why-us" className="text-secondary text-[12px] uppercase tracking-widest hover:text-[var(--accent-color)] transition-colors">Why Us</Link>
            <Link href="#contact" className="text-secondary text-[12px] uppercase tracking-widest hover:text-[var(--accent-color)] transition-colors">Contact</Link>
          </div>

          {/* Contact */}
          <div>
            <a href="tel:+64210000000" className="text-secondary text-lg font-serif hover:text-[var(--accent-color)] transition-colors">
              +64 21 000 0000
            </a>
          </div>
        </div>

        <div className="mt-16 text-center border-t border-[var(--border-color)] pt-8">
          <p className="text-secondary/50 text-xs tracking-wider uppercase">
            © 2026 Flow Estates · All Rights Reserved
          </p>
          <p className="text-secondary/30 text-[10px] mt-3 uppercase tracking-widest">
            This is a sample demo website created by{" "}
            <a 
              href="https://www.localsitegrowth.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[var(--accent-color)] transition-colors underline"
            >
              Local Site Growth
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
