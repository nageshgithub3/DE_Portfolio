import { useState, useRef } from "react";
import { Mail, Linkedin, Github, Code2, Send, CheckCircle, AlertCircle } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "rangaswamygarinagesh@gmail.com",
    href: "mailto:rangaswamygarinagesh@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nageshlnkdin",
    href: "https://www.linkedin.com/in/nageshlnkdin/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/nageshgithub3",
    href: "https://github.com/nageshgithub3",
    icon: Github,
  },
  {
    label: "LeetCode",
    value: "leetcode.com/u/ufXpa37MYp",
    href: "https://leetcode.com/u/ufXpa37MYp/",
    icon: Code2,
  },
];

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const validate = (data) => {
    const errs = {};
    if (!data.name.trim()) errs.name = "Name is required";
    if (!data.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "Invalid email address";
    if (!data.subject.trim()) errs.subject = "Subject is required";
    if (!data.message.trim()) errs.message = "Message is required";
    else if (data.message.trim().length < 10) errs.message = "Message is too short";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    const fd = new FormData(formRef.current);
    const data = {
      name: fd.get("name"),
      email: fd.get("email"),
      subject: fd.get("subject"),
      message: fd.get("message"),
    };

    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");

    // EmailJS integration — configure these in your .env file:
    // VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        // EmailJS not configured — show info message
        console.info("EmailJS not configured. Add environment variables to enable form submission.");
        setStatus("error");
        return;
      }

      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-border-dark">
      <div className="container-main">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="section-label">Contact</span>
          <h2 className="mt-4 font-display font-bold text-4xl lg:text-5xl text-warm-white leading-tight">
            Let's make data{" "}
            <span className="text-gradient-gold">dependable.</span>
          </h2>
          <p className="mt-4 text-muted-gray font-body text-base leading-relaxed">
            If you're looking for a Data Engineering professional who enjoys solving data
            problems and building reliable data workflows, I'd be happy to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Contact Info */}
          <div>
            <div className="space-y-4 mb-10">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-4 p-4 bg-card border border-border-dark rounded-sm hover:border-gold/40 group transition-all duration-300"
                  >
                    <div className="w-9 h-9 bg-secondary border border-border-dark rounded-sm flex items-center justify-center flex-shrink-0 group-hover:border-gold/40 transition-colors duration-300">
                      <Icon size={16} className="text-muted-gray group-hover:text-gold transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-[10px] font-display font-semibold tracking-widest uppercase text-muted-gray">
                        {link.label}
                      </div>
                      <div className="text-sm font-body text-warm-white group-hover:text-gold transition-colors duration-300">
                        {link.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="pt-8 border-t border-border-dark">
              <a
                href="mailto:rangaswamygarinagesh@gmail.com"
                className="btn-primary"
              >
                <Mail size={16} />
                Email Me Directly
              </a>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-display font-semibold tracking-widest uppercase text-muted-gray mb-2">
                    Name <span className="text-gold">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className={`w-full bg-card border rounded-sm px-4 py-3 text-sm font-body text-warm-white placeholder-muted-gray/40 outline-none focus:border-gold/60 transition-colors duration-200 ${errors.name ? "border-red-500/50" : "border-border-dark"}`}
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-display font-semibold tracking-widest uppercase text-muted-gray mb-2">
                    Email <span className="text-gold">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className={`w-full bg-card border rounded-sm px-4 py-3 text-sm font-body text-warm-white placeholder-muted-gray/40 outline-none focus:border-gold/60 transition-colors duration-200 ${errors.email ? "border-red-500/50" : "border-border-dark"}`}
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-display font-semibold tracking-widest uppercase text-muted-gray mb-2">
                  Subject <span className="text-gold">*</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  className={`w-full bg-card border rounded-sm px-4 py-3 text-sm font-body text-warm-white placeholder-muted-gray/40 outline-none focus:border-gold/60 transition-colors duration-200 ${errors.subject ? "border-red-500/50" : "border-border-dark"}`}
                />
                {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-display font-semibold tracking-widest uppercase text-muted-gray mb-2">
                  Message <span className="text-gold">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your opportunity or question..."
                  className={`w-full bg-card border rounded-sm px-4 py-3 text-sm font-body text-warm-white placeholder-muted-gray/40 outline-none focus:border-gold/60 transition-colors duration-200 resize-none ${errors.message ? "border-red-500/50" : "border-border-dark"}`}
                />
                {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>

              {/* Status messages */}
              {status === "success" && (
                <div className="flex items-center gap-3 p-4 bg-success-green/10 border border-success-green/30 rounded-sm">
                  <CheckCircle size={16} className="text-success-green flex-shrink-0" />
                  <p className="text-sm font-body text-success-green">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-sm">
                  <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
                  <p className="text-sm font-body text-red-400">
                    Form submission not configured yet. Please email me directly at{" "}
                    <a href="mailto:rangaswamygarinagesh@gmail.com" className="text-gold underline">
                      rangaswamygarinagesh@gmail.com
                    </a>
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Let's Connect
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
