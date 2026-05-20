"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MoveRight, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-heading", {
        y: 40,
        opacity: 0,
        duration: 0.75,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-heading",
          start: "top 85%",
        },
      });

      gsap.from(formRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you'd send data to an API here
  };

  const inputStyles = "w-full bg-[var(--surface-color)] border-b border-[var(--border-color)] px-4 py-4 text-white text-[15px] placeholder-secondary/50 focus:border-[var(--accent-color)] hover:border-[var(--accent-color)] focus:outline-none transition-colors duration-300 rounded-t-lg bg-opacity-50 backdrop-blur-sm";
  const labelStyles = "block text-secondary text-[12px] uppercase tracking-[0.1em] mb-2";

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="bg-[var(--surface-color)] section-padding"
    >
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16 contact-heading">
          <span className="eyebrow tracking-[0.15em]">Private Consultations</span>
          <h2 className="section-heading font-serif">Request a Consultation</h2>
          <p className="text-secondary text-lg font-light">
            Provide your project details below. Our specialists will contact you promptly to arrange an initial discussion.
          </p>
        </div>

        <div 
          ref={formRef}
          className="max-w-[640px] mx-auto bg-[var(--bg-color)] border border-[var(--border-color)] rounded-tl-2xl rounded-br-2xl p-8 md:p-14 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-color)]/5 rounded-bl-[100px] pointer-events-none" />
          {isSubmitted ? (
            <div className="text-center py-12 flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mb-2 border border-[var(--border-color)]">
                <CheckCircle2 size={32} className="text-[var(--accent-color)]" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-white">Inquiry Received</h3>
              <p className="text-secondary font-light text-center">
                Thank you for your interest. A representative will be in touch shortly to discuss your estate's plumbing requirements.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-[var(--accent-color)] hover:opacity-80 transition-all duration-300 hover:scale-105 mt-4 text-xs uppercase tracking-widest"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelStyles}>Full Name</label>
                  <input type="text" id="name" required placeholder="John Doe" className={inputStyles} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelStyles}>Phone Number</label>
                  <input type="tel" id="phone" required placeholder="+64 22 5707 467" className={inputStyles} />
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelStyles}>Email Address</label>
                <input type="email" id="email" required placeholder="john@example.com" className={inputStyles} />
              </div>

              <div>
                <label htmlFor="service" className={labelStyles}>Service Required</label>
                <select id="service" required className={inputStyles} defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option value="General Plumbing">General Plumbing</option>
                  <option value="Emergency Callout">Emergency Callout</option>
                  <option value="Bathroom Renovation">Bathroom Renovation</option>
                  <option value="Hot Water System">Hot Water System</option>
                  <option value="Commercial Plumbing">Commercial Plumbing</option>
                  <option value="Drain Clearing">Drain Clearing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelStyles}>Describe your job</label>
                <textarea id="message" rows={4} required placeholder="Tell us about what you need help with..." className={inputStyles}></textarea>
              </div>

              <button type="submit" className="btn-primary w-full py-5 text-lg tracking-wide uppercase font-semibold text-[14px]">
                Submit Request <MoveRight className="ml-3" size={18} />
              </button>
            </form>
          )}
        </div>

        {/* Google Map */}
        <div className="max-w-[640px] mx-auto mt-10 border border-[var(--border-color)] overflow-hidden rounded-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98956.33189391655!2d174.7063929!3d-36.8484597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x500ef6143a29917!2sAuckland%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1700000000000"
            width="100%"
            height="300"
            style={{ border: 0, display: "block", filter: "grayscale(100%) invert(90%) contrast(85%)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Flow Estates Plumbing service area"
          />
        </div>

        <div className="text-center mt-12">
          <p className="text-secondary text-xs tracking-widest uppercase mb-3">Direct Line</p>
          <a href="tel:+64225707467" className="text-white text-2xl font-serif hover:text-[var(--accent-color)] hover:scale-105 inline-block transition-all duration-300">
            +64 22 5707 467
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
