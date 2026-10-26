/* SVG tool logos as inline components — no external image deps */

const logos = [
  {
    name: "Python",
    color: "#3776AB",
    bg: "rgba(55,118,171,0.1)",
    svg: (
      <svg viewBox="0 0 48 48" className="w-6 h-6">
        <path d="M24 3.5c-5.8 0-10.5 1.2-10.5 5.5v3h10.5v1.5H10.2C6 13.5 3.5 16.5 3.5 24s2.5 10.5 6.7 10.5h3.3V31c0-4.3 3.7-7.5 10.5-7.5s10.5 3.2 10.5 7.5v3.5h3.3c4.2 0 6.7-3 6.7-10.5s-2.5-10.5-6.7-10.5H34.5V9c0-4.3-4.7-5.5-10.5-5.5zm-2.5 6a2 2 0 110 4 2 2 0 010-4z" fill="#3776AB"/>
        <path d="M34.5 34.5v3c0 4.3-4.7 5.5-10.5 5.5s-10.5-1.2-10.5-5.5v-3H10.2C6 34.5 3.5 31.5 3.5 24h10.3v3.5c0 4.3 3.7 7.5 10.5 7.5s10.5-3.2 10.5-7.5V24H44.5c0 7.5-2.5 10.5-6.7 10.5H34.5zM26.5 38.5a2 2 0 110-4 2 2 0 010 4z" fill="#FFD43B"/>
      </svg>
    ),
  },
  {
    name: "SQL",
    color: "#E38C00",
    bg: "rgba(227,140,0,0.1)",
    svg: (
      <svg viewBox="0 0 48 48" className="w-6 h-6">
        <rect x="6" y="6" width="36" height="36" rx="4" fill="rgba(227,140,0,0.15)" stroke="#E38C00" strokeWidth="1.5"/>
        <text x="24" y="30" textAnchor="middle" fill="#E38C00" fontFamily="monospace" fontWeight="bold" fontSize="13">SQL</text>
      </svg>
    ),
  },
  {
    name: "PySpark",
    color: "#E25A1C",
    bg: "rgba(226,90,28,0.1)",
    svg: (
      <svg viewBox="0 0 48 48" className="w-6 h-6">
        <path d="M24 4L8 14v20l16 10 16-10V14L24 4z" fill="rgba(226,90,28,0.15)" stroke="#E25A1C" strokeWidth="1.5"/>
        <path d="M18 22 L24 16 L30 22 L24 28Z" fill="#E25A1C"/>
        <circle cx="24" cy="24" r="3" fill="#fff" opacity="0.8"/>
      </svg>
    ),
  },
  {
    name: "Databricks",
    color: "#FF3621",
    bg: "rgba(255,54,33,0.1)",
    svg: (
      <svg viewBox="0 0 48 48" className="w-6 h-6">
        <path d="M24 6L6 18l18 8 18-8L24 6z" fill="#FF3621" opacity="0.85"/>
        <path d="M6 30l18 12 18-12-18-8-18 8z" fill="#FF3621" opacity="0.5"/>
        <path d="M6 24l18 8 18-8" fill="none" stroke="#fff" strokeWidth="1" opacity="0.3"/>
      </svg>
    ),
  },
  {
    name: "Delta Lake",
    color: "#00A4CC",
    bg: "rgba(0,164,204,0.1)",
    svg: (
      <svg viewBox="0 0 48 48" className="w-6 h-6">
        <path d="M24 6L4 42h40L24 6z" fill="rgba(0,164,204,0.15)" stroke="#00A4CC" strokeWidth="1.5"/>
        <path d="M24 18L14 36h20L24 18z" fill="#00A4CC" opacity="0.6"/>
      </svg>
    ),
  },
  {
    name: "Power BI",
    color: "#F2C811",
    bg: "rgba(242,200,17,0.1)",
    svg: (
      <svg viewBox="0 0 48 48" className="w-6 h-6">
        <rect x="6" y="28" width="8" height="14" rx="1.5" fill="#F2C811"/>
        <rect x="17" y="20" width="8" height="22" rx="1.5" fill="#F2C811" opacity="0.8"/>
        <rect x="28" y="12" width="8" height="30" rx="1.5" fill="#F2C811" opacity="0.6"/>
        <rect x="39" y="6" width="3" height="36" rx="1.5" fill="#F2C811" opacity="0.4"/>
      </svg>
    ),
  },
  {
    name: "Apache Spark",
    color: "#E25A1C",
    bg: "rgba(226,90,28,0.08)",
    svg: (
      <svg viewBox="0 0 48 48" className="w-6 h-6">
        <ellipse cx="24" cy="24" rx="18" ry="10" fill="none" stroke="#E25A1C" strokeWidth="1.5" opacity="0.6"/>
        <path d="M20 14 Q24 8 28 14 Q32 20 24 24 Q16 28 20 34 Q24 40 28 34" fill="none" stroke="#E25A1C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "MySQL",
    color: "#4479A1",
    bg: "rgba(68,121,161,0.1)",
    svg: (
      <svg viewBox="0 0 48 48" className="w-6 h-6">
        <path d="M24 6C14 6 6 10 6 15v18c0 5 8 9 18 9s18-4 18-9V15c0-5-8-9-18-9z" fill="rgba(68,121,161,0.15)" stroke="#4479A1" strokeWidth="1.5"/>
        <ellipse cx="24" cy="15" rx="18" ry="6" fill="#4479A1" opacity="0.3"/>
        <path d="M6 24c0 5 8 9 18 9s18-4 18-9" fill="none" stroke="#4479A1" strokeWidth="1" opacity="0.5"/>
      </svg>
    ),
  },
  {
    name: "Git",
    color: "#F05032",
    bg: "rgba(240,80,50,0.1)",
    svg: (
      <svg viewBox="0 0 48 48" className="w-6 h-6">
        <path d="M44.5 21.5L26.5 3.5a4 4 0 00-5.6 0l-4 4 5 5a4.7 4.7 0 015.9 5.9l4.8 4.8a4.7 4.7 0 11-2.8 2.8l-4.5-4.5V33a4.7 4.7 0 11-3.5 0V21l-6.2-6.2a4.7 4.7 0 110-2.8l-4-4a4 4 0 000 5.6L21 23.5l1 .5-.5 1L3.5 43.5a4 4 0 005.6 0L43.5 27a4 4 0 001-5.5z" fill="#F05032"/>
      </svg>
    ),
  },
  {
    name: "Azure",
    color: "#0089D6",
    bg: "rgba(0,137,214,0.1)",
    svg: (
      <svg viewBox="0 0 48 48" className="w-6 h-6">
        <path d="M22 6L6 38h12l8-18 8 18h12L30 6H22z" fill="#0089D6" opacity="0.8"/>
        <path d="M18 38l6-12 6 12H18z" fill="#0089D6" opacity="0.4"/>
      </svg>
    ),
  },
];

// Duplicate for seamless loop
const allLogos = [...logos, ...logos];

export default function TechMarquee() {
  return (
    <section className="py-10 border-t border-border-dark overflow-hidden">
      <div className="mb-4 container-main">
        <p className="text-xs font-display font-semibold tracking-[0.2em] uppercase text-muted-gray/50 text-center">
          Technologies I work with
        </p>
      </div>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-primary to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-primary to-transparent pointer-events-none" />

        <div className="marquee-track gap-0">
          {allLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center gap-2.5 px-6 py-3 mx-2 rounded-sm border border-border-dark group hover:border-gold/40 transition-all duration-300 flex-shrink-0 cursor-default"
              style={{ background: logo.bg }}
              title={logo.name}
            >
              <span className="transition-transform duration-300 group-hover:scale-110">
                {logo.svg}
              </span>
              <span
                className="text-xs font-display font-semibold tracking-wide whitespace-nowrap"
                style={{ color: logo.color }}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { logos };
