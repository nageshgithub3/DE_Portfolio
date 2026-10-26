import { Github, Linkedin, Code2, Mail } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/nageshgithub3", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nageshlnkdin/", icon: Linkedin },
  { label: "LeetCode", href: "https://leetcode.com/u/ufXpa37MYp/", icon: Code2 },
  { label: "Email", href: "mailto:rangaswamygarinagesh@gmail.com", icon: Mail },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border-dark py-12">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
                <span className="text-primary font-display font-bold text-sm">N</span>
              </div>
              <span className="font-display font-semibold text-warm-white">Nagesh</span>
            </div>
            <p className="text-xs font-body text-muted-gray">
              Data Engineer · Python · SQL · PySpark · Databricks
            </p>
          </div>

          {/* Nav */}
          <nav>
            <ul className="flex flex-wrap gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="text-xs font-display font-medium tracking-widest uppercase text-muted-gray hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={social.label}
                  className="w-8 h-8 border border-border-dark rounded-sm flex items-center justify-center text-muted-gray hover:border-gold hover:text-gold transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="pt-8 border-t border-border-dark flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-muted-gray/60 text-center sm:text-left">
            Designed with curiosity. Built around dependable data.
          </p>
          <p className="text-xs font-body text-muted-gray/40">
            © {year} Ranga Swamy Gari Nagesh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
