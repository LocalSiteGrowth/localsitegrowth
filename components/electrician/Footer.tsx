import Link from "next/link";

const Footer = () => {
  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Why Volt", href: "#why-volt" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <style>{`
        .volt-footer-link {
          position: relative;
          color: #9ca3af;
          font-size: 12px;
          letter-spacing: 0.04em;
          transition: color 200ms;
          text-decoration: none;
        }
        .volt-footer-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          height: 1px;
          width: 0;
          background-color: #f59e0b;
          transition: width 250ms ease;
        }
        .volt-footer-link:hover {
          color: #f59e0b;
        }
        .volt-footer-link:hover::after {
          width: 100%;
        }
      `}</style>

      <footer style={{ backgroundColor: "#050505", borderTop: "1px solid #1e1e1e", padding: "40px 0" }}>
        <div className="container-custom">
          {/* Main row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/electrician" className="flex items-center">
              <img
                src="/electrician-logo.png"
                alt="Volt Electrical"
                style={{ height: "80px", width: "auto", display: "block" }}
              />
            </Link>

            {/* Nav links */}
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="volt-footer-link">
                  {link.name}
                </a>
              ))}
            </div>

            {/* Phone */}
            <a href="tel:+64225707467" className="volt-footer-link text-[13px]">
              +64 22 5707 467
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
    </>
  );
};

export default Footer;
