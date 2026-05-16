import Link from "next/link";

const Footer = () => {
  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Why Volt", href: "#why-volt" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer style={{ backgroundColor: "#050505", borderTop: "1px solid #1e1e1e", padding: "40px 0" }}>
      <div className="container-custom">
        {/* Main row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/electrician" className="text-2xl tracking-tighter">
            <span className="text-white font-extrabold">Volt</span>
            <span className="text-[var(--accent-color)] font-light ml-1">Electrical</span>
          </Link>

          {/* Nav links */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[12px] tracking-widest text-[var(--secondary-color)] hover:text-[var(--accent-color)] hover:scale-105 inline-block transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Phone */}
          <a href="tel:+64210000000" className="text-[var(--secondary-color)] text-[13px] hover:text-[var(--accent-color)] hover:scale-105 inline-block transition-all duration-200">
            +64 21 000 0000
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8" style={{ borderTop: "1px solid #1a1a1a" }}>
          <p style={{ color: "#2a2a2a", fontSize: "11px" }}>
            © 2026 Volt Electrical · All Rights Reserved
          </p>
          <p style={{ color: "#2a2a2a", fontSize: "11px", marginTop: "8px" }}>
            This is a sample demo website created by{" "}
            <a
              href="https://www.localsitegrowth.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-color)] hover:brightness-110 transition-all"
            >
              localsitegrowth.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
