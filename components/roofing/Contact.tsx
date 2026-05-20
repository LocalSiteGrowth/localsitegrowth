"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const serviceOptions = [
  "New Roof Installation",
  "Re-Roofing",
  "Roof Repairs",
  "Guttering & Spouting",
  "Metal Roofing",
  "Emergency Call-Out",
  "Other",
];

const fieldStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "#0d0d0d",
  border: "2px solid #2a2a2a",
  borderRadius: 0,
  color: "#ffffff",
  fontSize: "15px",
  fontFamily: "Inter, sans-serif",
  padding: "14px 16px",
  outline: "none",
  transition: "border-color 200ms",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "Inter, sans-serif",
  fontSize: "11px",
  fontWeight: 700,
  color: "#8a8a8a",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  marginBottom: "8px",
};

const Contact = () => {
  const ruleRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const fieldRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    description: "",
  });

  useEffect(() => {
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    gsap.fromTo(
      ruleRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.6,
        ease: "power2.out",
        transformOrigin: "left",
        scrollTrigger: { trigger: ruleRef.current, start: "top 90%", once: true },
      }
    );

    gsap.fromTo(
      eyebrowRef.current,
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: { trigger: eyebrowRef.current, start: "top 90%", once: true },
      }
    );

    gsap.fromTo(
      headingRef.current,
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.75,
        ease: "power2.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 90%", once: true },
      }
    );

    gsap.fromTo(
      subtextRef.current,
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: { trigger: subtextRef.current, start: "top 90%", once: true },
      }
    );

    gsap.fromTo(
      formRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: formRef.current, start: "top 90%", once: true },
      }
    );

    fieldRefs.current.forEach((field) => {
      if (!field) return;
      gsap.fromTo(
        field,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: { trigger: field, start: "top 90%", once: true },
        }
      );
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "#dc2626";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "#2a2a2a";
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#161616",
        padding: "100px 0",
      }}
    >
      {/* Red rule */}
      <div
        ref={ruleRef}
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: "#dc2626",
          opacity: 0.3,
          marginBottom: "80px",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          textAlign: "center",
        }}
      >
        {/* Eyebrow */}
        <p
          ref={eyebrowRef}
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            color: "#dc2626",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          GET IN TOUCH
        </p>

        {/* Heading */}
        <h2
          ref={headingRef}
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(48px, 6vw, 72px)",
            color: "#ffffff",
            lineHeight: 1,
            marginBottom: "16px",
          }}
        >
          GET YOUR FREE QUOTE.
        </h2>

        {/* Subtext */}
        <p
          ref={subtextRef}
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            color: "#8a8a8a",
            marginBottom: "48px",
          }}
        >
          No obligation. No sales pitch. Just a straight answer on what your
          roof needs.
        </p>

        {/* Form container */}
        <div
          ref={formRef}
          style={{
            backgroundColor: "#1a1a1a",
            border: "2px solid #2a2a2a",
            borderRadius: 0,
            padding: "48px",
            maxWidth: "680px",
            margin: "0 auto",
            textAlign: "left",
          }}
          className="roofing-form-container"
        >
          {submitted ? (
            <div
              style={{
                textAlign: "center",
                padding: "48px 0",
              }}
            >
              <p
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "32px",
                  color: "#ffffff",
                  letterSpacing: "0.04em",
                  marginBottom: "12px",
                }}
              >
                REQUEST RECEIVED
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "16px",
                  color: "#8a8a8a",
                }}
              >
                We&apos;ll be in touch shortly to discuss your roofing needs.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Full Name */}
              <div
                ref={(el) => { fieldRefs.current[0] = el; }}
              >
                <label style={labelStyle}>Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ ...fieldStyle, caretColor: "#dc2626" }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              {/* Phone */}
              <div
                ref={(el) => { fieldRefs.current[1] = el; }}
              >
                <label style={labelStyle}>Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+64 22 5707 467"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{ ...fieldStyle, caretColor: "#dc2626" }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              {/* Email */}
              <div
                ref={(el) => { fieldRefs.current[2] = el; }}
              >
                <label style={labelStyle}>Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ ...fieldStyle, caretColor: "#dc2626" }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              {/* Service */}
              <div
                ref={(el) => { fieldRefs.current[3] = el; }}
              >
                <label style={labelStyle}>Service Required</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{
                    ...fieldStyle,
                    appearance: "none",
                    color: formData.service ? "#ffffff" : "#3a3a3a",
                    cursor: "pointer",
                  }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                >
                  <option value="" disabled style={{ color: "#3a3a3a", backgroundColor: "#0d0d0d" }}>
                    Select a service
                  </option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt} style={{ color: "#ffffff", backgroundColor: "#0d0d0d" }}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div
                ref={(el) => { fieldRefs.current[4] = el; }}
              >
                <label style={labelStyle}>Describe Your Job</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your roofing project..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  style={{
                    ...fieldStyle,
                    resize: "vertical",
                    caretColor: "#dc2626",
                  }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  backgroundColor: "#dc2626",
                  color: "#ffffff",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  letterSpacing: "0.1em",
                  borderRadius: 0,
                  border: "none",
                  padding: "18px",
                  cursor: "pointer",
                  transition: "background-color 200ms",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#b91c1c")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#dc2626")
                }
              >
                REQUEST FREE QUOTE →
              </button>
            </form>
          )}
        </div>

        {/* Google Map */}
        <div
          style={{
            maxWidth: "680px",
            margin: "40px auto 0",
            border: "2px solid #2a2a2a",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98956.33189391655!2d174.7063929!3d-36.8484597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x500ef6143a29917!2sAuckland%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1700000000000"
            width="100%"
            height="300"
            style={{ border: 0, display: "block", filter: "grayscale(100%) invert(90%) contrast(85%)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ridge & Crown Roofing service area"
          />
        </div>

        {/* Contact info */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 0,
            marginTop: "40px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ padding: "0 40px", textAlign: "center" }}>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                color: "#dc2626",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              CALL US
            </p>
            <a
              href="tel:+642257074677"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "28px",
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

          <div
            style={{
              width: "2px",
              height: "48px",
              backgroundColor: "#2a2a2a",
              flexShrink: 0,
            }}
            className="roofing-contact-divider"
          />

          <div style={{ padding: "0 40px", textAlign: "center" }}>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                color: "#dc2626",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              EMAIL US
            </p>
            <a
              href="mailto:info@localsitegrowth.com"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                color: "#ffffff",
                textDecoration: "none",
                transition: "color 200ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#dc2626")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
            >
              info@localsitegrowth.com
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .roofing-form-container {
          padding: 48px !important;
        }
        @media (max-width: 480px) {
          .roofing-form-container {
            padding: 24px !important;
          }
          .roofing-contact-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
