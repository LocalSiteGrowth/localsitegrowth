"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { label: "SERVICES", href: "#services" },
    { label: "PROJECTS", href: "#projects" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: "#0d0d0d",
          borderBottom: "1px solid #2a2a2a",
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
            height: "72px",
          }}
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
                  fontSize: "28px",
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

          {/* Desktop Nav */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: "32px" }}
            className="roofing-desktop-nav"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  color: "#ffffff",
                  textDecoration: "none",
                  transition: "color 200ms",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#dc2626")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="tel:+6421000000"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                color: "#dc2626",
                textDecoration: "none",
              }}
            >
              +64 21 000 0000
            </a>

            <Link
              href="#contact"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#ffffff",
                backgroundColor: "#dc2626",
                padding: "10px 24px",
                borderRadius: "0",
                textDecoration: "none",
                transition: "background-color 200ms",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#b91c1c")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#dc2626")
              }
            >
              FREE QUOTE
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
            }}
            className="roofing-hamburger"
          >
            <Menu size={28} color="#dc2626" strokeWidth={2.5} />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            backgroundColor: "#0d0d0d",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
            }}
          >
            <X size={32} color="#dc2626" strokeWidth={2.5} />
          </button>

          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "32px",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "48px",
                  color: "#ffffff",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  transition: "color 200ms",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#dc2626")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="tel:+6421000000"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "18px",
                fontWeight: 700,
                color: "#dc2626",
                textDecoration: "none",
                marginTop: "16px",
              }}
            >
              +64 21 000 0000
            </a>
          </nav>
        </div>
      )}

      <style>{`
        .roofing-desktop-nav { display: flex !important; }
        .roofing-hamburger { display: none !important; }
        @media (max-width: 768px) {
          .roofing-desktop-nav { display: none !important; }
          .roofing-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
