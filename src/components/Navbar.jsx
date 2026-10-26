import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md border-b border-border-dark shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container-main">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center group-hover:bg-gold-dim transition-colors duration-300">
              <span className="text-primary font-display font-bold text-sm">N</span>
            </div>
            <span className="font-display font-semibold text-warm-white text-sm tracking-wide hidden sm:block">
              Nagesh
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className={`text-xs font-display font-medium tracking-widest uppercase transition-colors duration-200 ${
                    activeSection === link.href.slice(1)
                      ? "text-gold"
                      : "text-muted-gray hover:text-warm-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="https://drive.google.com/file/d/107VClsp0ARn15aOnqBXitlaO5R_RTxNw/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-muted-gray hover:text-gold transition-colors"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen border-b border-border-dark" : "max-h-0"
        } bg-secondary/98 backdrop-blur-md`}
      >
        <div className="container-main py-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className={`block text-sm font-display font-medium tracking-widest uppercase py-2 transition-colors duration-200 ${
                    activeSection === link.href.slice(1)
                      ? "text-gold"
                      : "text-muted-gray"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-border-dark">
            <a
              href="https://drive.google.com/file/d/107VClsp0ARn15aOnqBXitlaO5R_RTxNw/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center text-xs"
            >
              <Download size={14} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
