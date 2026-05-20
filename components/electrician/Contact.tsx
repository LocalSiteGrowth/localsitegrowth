"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const labelStyles: React.CSSProperties = {
  display: "block",
  color: "#9ca3af",
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  fontWeight: 600,
  marginBottom: "8px",
};

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formFieldsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.fromTo(eyebrowRef.current,
        prefersReduced ? { opacity: 0 } : { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, scrollTrigger: { trigger: eyebrowRef.current, start: "top 85%" } }
      );

      gsap.fromTo(headingRef.current,
        prefersReduced ? { opacity: 0 } : { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, scrollTrigger: { trigger: headingRef.current, start: "top 85%" } }
      );

      gsap.fromTo(formFieldsRef.current,
        prefersReduced ? { opacity: 0 } : { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.5, stagger: 0.06,
          scrollTrigger: { trigger: sectionRef.current, start: "top 60%" }
        }
      );

      gsap.fromTo(rightColRef.current,
        prefersReduced ? { opacity: 0 } : { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, scrollTrigger: { trigger: rightColRef.current, start: "top 75%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative overflow-hidden" style={{ backgroundColor: "#0f0f0f", paddingTop: "110px", paddingBottom: "110px" }}>
      <style>{`
        .volt-input {
          width: 100%;
          background-color: #111111;
          border: 1px solid #1e1e1e;
          border-radius: 4px;
          color: #ffffff;
          font-size: 15px;
          padding: 12px 16px;
          outline: none;
          transition: border-color 0.2s;
          font-family: inherit;
        }
        .volt-input:hover,
        .volt-input:focus {
          border-color: #f59e0b;
        }
        .volt-input::placeholder {
          color: #3a3a3a;
        }
        .volt-input option {
          background-color: #111111;
          color: #ffffff;
        }
        .volt-cta-submit {
          background-color: #f59e0b;
          color: #080808;
          border: 2px solid #f59e0b;
          transition: background-color 200ms, color 200ms;
        }
        .volt-cta-submit:hover {
          background-color: transparent;
          color: #f59e0b;
        }
      `}</style>

      <div className="container-custom">
        <span ref={eyebrowRef} className="inline-block text-[11px] font-semibold tracking-[0.12em] uppercase text-[var(--accent-color)] mb-4">
          Get In Touch
        </span>
        <h2 ref={headingRef} className="text-[40px] font-extrabold text-white leading-tight mb-16">
          Start With a Free Quote.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Form */}
          <div>
            {isSubmitted ? (
              <div className="flex flex-col items-start gap-4 py-12">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(245,158,11,0.1)", border: "1px solid #1e1e1e" }}>
                  <CheckCircle2 size={28} color="#f59e0b" />
                </div>
                <h3 className="text-2xl font-bold text-white">Quote Request Received</h3>
                <p className="text-[var(--secondary-color)]">Thanks for reaching out. We'll be in touch shortly to discuss your job.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-[var(--accent-color)] text-sm uppercase tracking-widest mt-4 hover:scale-105 transition-all duration-300"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {[
                  { label: "Full Name", id: "name", type: "text", placeholder: "John Smith" },
                  { label: "Phone Number", id: "phone", type: "tel", placeholder: "+64 22 5707 467" },
                  { label: "Email Address", id: "email", type: "email", placeholder: "john@example.com" },
                ].map((field, i) => (
                  <div key={field.id} ref={(el) => { formFieldsRef.current[i] = el; }}>
                    <label htmlFor={field.id} style={labelStyles}>{field.label}</label>
                    <input
                      type={field.type}
                      id={field.id}
                      required
                      placeholder={field.placeholder}
                      className="volt-input"
                    />
                  </div>
                ))}

                <div ref={(el) => { formFieldsRef.current[3] = el; }}>
                  <label htmlFor="service" style={labelStyles}>Service Required</label>
                  <select
                    id="service"
                    required
                    defaultValue=""
                    className="volt-input"
                    style={{ appearance: "none" }}
                  >
                    <option value="" disabled>Select a service</option>
                    <option>Residential Wiring</option>
                    <option>Switchboard Upgrade</option>
                    <option>LED Lighting</option>
                    <option>Commercial Electrical</option>
                    <option>Solar & EV Charging</option>
                    <option>Emergency Callout</option>
                    <option>Other</option>
                  </select>
                </div>

                <div ref={(el) => { formFieldsRef.current[4] = el; }}>
                  <label htmlFor="message" style={labelStyles}>Describe Your Job</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Tell us what you need..."
                    className="volt-input"
                    style={{ resize: "vertical" }}
                  />
                </div>

                <div ref={(el) => { formFieldsRef.current[5] = el; }}>
                  <button
                    type="submit"
                    className="volt-cta-submit w-full font-bold text-[15px] rounded-[4px]"
                    style={{ padding: "16px", letterSpacing: "0.04em" }}
                  >
                    Request a Free Quote →
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right — contact details */}
          <div ref={rightColRef} className="flex flex-col gap-8">
            {/* Testimonial */}
            <div>
              <div className="text-[var(--accent-color)] font-extrabold" style={{ fontSize: "120px", opacity: 0.2, lineHeight: 0.8 }}>&ldquo;</div>
              <p className="text-white text-lg italic leading-[1.6] mt-4">
                Called Volt at 9pm with a switchboard fault. They were on site within an hour, had it fixed by midnight, and cleaned up before they left. Outstanding service.
              </p>
              <p className="text-[var(--secondary-color)] text-[13px] mt-4">- Sarah M., Residential Client</p>
            </div>

            <div style={{ borderTop: "1px solid #1e1e1e", paddingTop: "32px" }} className="flex flex-col gap-6">
              <div>
                <span className="block text-[var(--secondary-color)] text-[12px] uppercase tracking-widest mb-2">Call Us Anytime</span>
                <a href="tel:+64225707467" className="text-white font-bold text-xl hover:text-[var(--accent-color)] hover:scale-105 inline-block transition-all duration-300">
                  +64 22 5707 467
                </a>
              </div>
              <div>
                <span className="block text-[var(--secondary-color)] text-[12px] uppercase tracking-widest mb-2">Email</span>
                <a href="mailto:info@localsitegrowth.com" className="text-[var(--secondary-color)] text-sm hover:text-[var(--accent-color)] transition-colors">
                  info@localsitegrowth.com
                </a>
              </div>
              <p className="text-[var(--accent-color)] text-[13px] font-semibold">Available 24/7 for electrical emergencies.</p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div style={{ marginTop: "48px", border: "1px solid #1e1e1e", overflow: "hidden" }}>
          <iframe
            src="https://maps.google.com/maps?q=24a+Hidden+Lakes+Avenue+Te+Anau+New+Zealand&output=embed"
            width="100%"
            height="300"
            style={{ border: 0, display: "block", filter: "grayscale(100%) invert(90%) contrast(85%)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Volt Electrical service area"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
