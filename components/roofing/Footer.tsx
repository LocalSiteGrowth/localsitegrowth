"use client";

import Link from "next/link";

const navLinks = [
  { label: "SERVICES", href: "#services" },
  { label: "PROJECTS", href: "#projects" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0d0d0d",
        borderTop: "2px solid rgba(220, 38, 38, 0.4)",
        padding: "48px 0 0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "32px",
        }}
        className="roofing-footer-main"
      >
        {/* Logo */}
        <Link
          href="/roofing"
          style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}
        >
          <div
            style={{
              width: "3px",
              height: "32px",
              backgroundColor: "#dc2626",
              flexShrink: 0,
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "20px",
                color: "#ffffff",
                letterSpacing: "0.1em",
                lineHeight: 1,
              }}
            >
              RIDGE &amp; CROWN
            </span>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                color: "#dc2626",
                letterSpacing: "0.3em",
                fontWeight: 700,
                textTransform: "uppercase",
                marginTop: "2px",
              }}
            >
              ROOFING
            </span>
          </div>
        </Link>

        {/* Nav links */}
        <nav style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                color: "#8a8a8a",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textDecoration: "none",
                transition: "color 200ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#dc2626")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8a8a8a")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone */}
        <a
          href="tel:+642257074677"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 700,
            color: "#ffffff",
            textDecoration: "none",
            transition: "color 200ms",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#dc2626")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
        >
          +64 22 5707 467
        </a>
      </div>

      {/* Copyright row */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "32px auto 0",
          padding: "24px 1.5rem",
          borderTop: "1px solid #2a2a2a",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            color: "#2a2a2a",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          © 2026 RIDGE &amp; CROWN ROOFING · ALL RIGHTS RESERVED
        </p>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            color: "#2a2a2a",
          }}
        >
          This is a sample demo website created by{" "}
          <a
            href="https://www.localsitegrowth.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#dc2626",
              textDecoration: "none",
            }}
          >
            localsitegrowth.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
