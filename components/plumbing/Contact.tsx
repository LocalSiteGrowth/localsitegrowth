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

  const inputStyles = "w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-[15px] placeholder-[#4a4a4a] focus:border-accent focus:outline-none transition-colors";
  const labelStyles = "block text-secondary text-[13px] font-medium mb-1.5";

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="bg-[#0a0a0a] section-padding"
    >
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16 contact-heading">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="section-heading">Get a Free Quote Today</h2>
          <p className="text-secondary text-lg">
            Fill out the form below and we'll get back to you within a few hours.
          </p>
        </div>

        <div 
          ref={formRef}
          className="max-w-[640px] mx-auto bg-[#111111] border border-border rounded-2xl p-6 md:p-12 shadow-2xl"
        >
          {isSubmitted ? (
            <div className="text-center py-12 flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 size={32} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
              <p className="text-secondary">
                Thanks — we'll be in touch shortly to discuss your plumbing requirements.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-accent hover:underline mt-4 text-sm"
              >
                Send another message
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
                  <input type="tel" id="phone" required placeholder="+64 21 000 0000" className={inputStyles} />
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

              <button type="submit" className="btn-primary w-full py-4 text-lg">
                Request a Free Quote <MoveRight className="ml-2" />
              </button>
            </form>
          )}
        </div>

        <div className="text-center mt-12">
          <p className="text-secondary text-sm mb-2">Prefer to call?</p>
          <a href="tel:+64210000000" className="text-white text-xl font-bold hover:text-accent transition-colors">
            +64 21 000 0000
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
