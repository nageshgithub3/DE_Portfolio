import { useRef } from "react";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { useTypewriter } from "../hooks/useAnimations";

/* ═══════════════════════════════════════════════
   INLINE SVG ICONS  (no extra deps)
═══════════════════════════════════════════════ */
const PythonIcon = () => (
  <svg viewBox="0 0 32 32" className="w-5 h-5">
    <path d="M16 2.5c-3.9 0-7 .8-7 3.7V9h7v1H7.4C5 10 3.5 11.7 3.5 16s1.5 6 3.9 6H9v-3c0-2.9 2.5-5 7-5s7 2.1 7 5v2.3h2.2c2.4 0 3.8-1.6 3.8-6.3s-1.4-6-3.8-6H23V9c0-2.9-3.1-3.7-7-3.7zm-1.7 4a1.3 1.3 0 110 2.7 1.3 1.3 0 010-2.7z" fill="#3776AB"/>
    <path d="M23 20.5v2c0 2.9-3.1 3.7-7 3.7s-7-.8-7-3.7v-2H7c-2.4 0-3.8-1.6-3.8-6.3h6.9v2.3c0 2.9 2.5 5 7 5s7-2.1 7-5v-1.5h6.4c0 4.7-1.4 6.3-3.8 6.3H23zm1.7-3a1.3 1.3 0 110-2.7 1.3 1.3 0 010 2.7z" fill="#FFD43B"/>
  </svg>
);

const PySparkIcon = () => (
  <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
    <path d="M16 2L4 9v14l12 7 12-7V9L16 2z" fill="rgba(226,90,28,0.2)" stroke="#E25A1C" strokeWidth="1.4"/>
    <path d="M11 15l5-6 5 6-5 6-5-6z" fill="#E25A1C"/>
    <circle cx="16" cy="16" r="2.5" fill="#fff" opacity="0.9"/>
  </svg>
);

const DatabricksIcon = () => (
  <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
    <path d="M16 3L3 10l13 6 13-6L16 3z" fill="#FF3621" opacity="0.9"/>
    <path d="M3 22l13 7 13-7-13-6-13 6z" fill="#FF3621" opacity="0.5"/>
    <path d="M3 16l13 6 13-6" stroke="#fff" strokeWidth="0.8" opacity="0.25"/>
  </svg>
);

const SQLIcon = () => (
  <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
    <rect x="2" y="2" width="28" height="28" rx="3" fill="rgba(227,140,0,0.15)" stroke="#E38C00" strokeWidth="1.4"/>
    <text x="16" y="21" textAnchor="middle" fill="#E38C00" fontFamily="monospace" fontWeight="bold" fontSize="11">SQL</text>
  </svg>
);

const AzureIcon = () => (
  <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
    <path d="M15 3L3 27h8l5-11 5 11h8L19 3H15z" fill="#0089D6" opacity="0.9"/>
    <path d="M12 27l4-8 4 8H12z" fill="#0089D6" opacity="0.4"/>
  </svg>
);

const PowerBIIcon = () => (
  <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
    <rect x="2"  y="19" width="5" height="11" rx="1" fill="#F2C811"/>
    <rect x="9"  y="13" width="5" height="17" rx="1" fill="#F2C811" opacity="0.82"/>
    <rect x="16" y="7"  width="5" height="23" rx="1" fill="#F2C811" opacity="0.62"/>
    <rect x="23" y="3"  width="5" height="27" rx="1" fill="#F2C811" opacity="0.38"/>
  </svg>
);

/* ═══════════════════════════════════════════════
   FLOATING TECH BADGE
═══════════════════════════════════════════════ */
function TechBadge({ name, color, bg, border, glow, icon, animClass, style }) {
  return (
    <div
      className={`absolute z-30 ${animClass} flex items-center gap-2 px-3 py-2 rounded-sm
        backdrop-blur-sm cursor-default select-none
        hover:scale-110 hover:brightness-110 transition-transform duration-300`}
      style={{
        background: bg,
        border: `1px solid ${border}`,
        boxShadow: `0 4px 20px ${glow}, 0 0 0 1px ${border}`,
        ...style,
      }}
    >
      <span className="flex-shrink-0">{icon}</span>
      <span className="text-[11px] font-display font-semibold tracking-wide whitespace-nowrap"
        style={{ color }}>
        {name}
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   ANIMATED CONNECTOR BETWEEN LAYERS
   Particles flow top→bottom via SVG animateMotion
═══════════════════════════════════════════════ */
function LayerConnector({ fromColor, toColor, id }) {
  return (
    <div className="relative w-full flex justify-center" style={{ height: 28, zIndex: 10 }}>
      <svg
        width="100%" height="28"
        viewBox="0 0 260 28"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id={`lg-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={fromColor} stopOpacity="0.6"/>
            <stop offset="100%" stopColor={toColor}   stopOpacity="0.6"/>
          </linearGradient>
          <filter id={`glow-${id}`}>
            <feGaussianBlur stdDeviation="2.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Vertical dashed spine */}
        <line x1="130" y1="0" x2="130" y2="28"
          stroke={`url(#lg-${id})`} strokeWidth="1" strokeDasharray="3 3"/>

        {/* Left/right faint edge lines */}
        <line x1="0.5" y1="0" x2="0.5" y2="28" stroke={fromColor} strokeWidth="0.5" opacity="0.12"/>
        <line x1="259.5" y1="0" x2="259.5" y2="28" stroke={fromColor} strokeWidth="0.5" opacity="0.12"/>

        {/* Particle 1 */}
        <circle r="3" fill={fromColor} filter={`url(#glow-${id})`}>
          <animateMotion repeatCount="indefinite" dur="1.4s" begin="0s"
            path="M 130,0 L 130,28"/>
          <animate attributeName="opacity"
            values="0;0;1;1;0" keyTimes="0;0.05;0.15;0.85;1"
            dur="1.4s" repeatCount="indefinite" begin="0s"/>
        </circle>

        {/* Particle 2 (offset) */}
        <circle r="2.2" fill={toColor} filter={`url(#glow-${id})`}>
          <animateMotion repeatCount="indefinite" dur="1.4s" begin="0.7s"
            path="M 130,0 L 130,28"/>
          <animate attributeName="opacity"
            values="0;0;0.8;0.8;0" keyTimes="0;0.05;0.15;0.85;1"
            dur="1.4s" repeatCount="indefinite" begin="0.7s"/>
        </circle>
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   LAYER CARDS  (fully static — no movement)
═══════════════════════════════════════════════ */
function BronzeCard() {
  return (
    <div className="w-full rounded-sm" style={{
      background: "rgba(120,53,15,0.09)",
      border: "1px solid rgba(217,119,6,0.40)",
    }}>
      <div className="p-4 lg:p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-display font-bold tracking-[0.2em] uppercase"
            style={{ color: "#D97706" }}>Bronze</span>
          <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"/>
        </div>
        <p className="text-[10px] font-body text-muted-gray mb-3">Raw Data Ingestion</p>
        <div className="flex gap-1.5 flex-wrap">
          {["CSV","JSON","DB"].map(t => (
            <span key={t} className="px-2 py-0.5 text-[9px] font-display font-semibold rounded-sm"
              style={{ background:"rgba(120,53,15,0.35)", color:"#D97706",
                border:"1px solid rgba(217,119,6,0.38)" }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SilverCard() {
  return (
    <div className="w-full rounded-sm" style={{
      background: "rgba(71,85,105,0.10)",
      border: "1px solid rgba(148,163,184,0.30)",
    }}>
      <div className="p-4 lg:p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-display font-bold tracking-[0.2em] uppercase"
            style={{ color: "#94A3B8" }}>Silver</span>
          <span className="w-2.5 h-2.5 rounded-full animate-pulse"
            style={{ backgroundColor:"#94A3B8", animationDelay:"0.5s",
              boxShadow:"0 0 8px #94A3B8" }}/>
        </div>
        <p className="text-[10px] font-body text-muted-gray mb-3">Clean & Validate</p>
        <div className="flex gap-1.5 flex-wrap">
          {["PySpark","SQL"].map(t => (
            <span key={t} className="px-2 py-0.5 text-[9px] font-display font-semibold rounded-sm"
              style={{ background:"rgba(71,85,105,0.35)", color:"#94A3B8",
                border:"1px solid rgba(148,163,184,0.30)" }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function GoldCard() {
  return (
    <div className="w-full rounded-sm" style={{
      background: "rgba(120,90,10,0.10)",
      border: "1px solid rgba(216,180,90,0.48)",
      boxShadow: "0 0 28px rgba(216,180,90,0.10), inset 0 1px 0 rgba(216,180,90,0.08)",
    }}>
      <div className="p-4 lg:p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-display font-bold tracking-[0.2em] uppercase"
            style={{ color: "#D8B45A" }}>Gold</span>
          <span className="w-2.5 h-2.5 rounded-full animate-pulse"
            style={{ backgroundColor:"#D8B45A", animationDelay:"1s",
              boxShadow:"0 0 10px #D8B45A" }}/>
        </div>
        <p className="text-[10px] font-body text-muted-gray mb-3">Business Analytics</p>
        <div className="flex gap-1.5 flex-wrap">
          {["Power BI","Insights"].map(t => (
            <span key={t} className="px-2 py-0.5 text-[9px] font-display font-semibold rounded-sm"
              style={{ background:"rgba(120,90,10,0.35)", color:"#D8B45A",
                border:"1px solid rgba(216,180,90,0.40)" }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MEDALLION PIPELINE  — right-side hero viz
═══════════════════════════════════════════════ */
function MedallionPipeline() {
  return (
    <div className="relative w-full select-none" style={{ minHeight: 500 }}>

      {/* ── Floating tech badges ── */}
      <TechBadge name="Python"
        color="#3776AB" bg="rgba(55,118,171,0.13)"
        border="rgba(55,118,171,0.40)" glow="rgba(55,118,171,0.18)"
        icon={<PythonIcon/>} animClass="tool-float-1"
        style={{ top: 0, left: 10 }}/>

      <TechBadge name="PySpark"
        color="#E25A1C" bg="rgba(226,90,28,0.13)"
        border="rgba(226,90,28,0.40)" glow="rgba(226,90,28,0.16)"
        icon={<PySparkIcon/>} animClass="tool-float-2"
        style={{ top: 36, right: 0 }}/>

      <TechBadge name="Databricks"
        color="#FF3621" bg="rgba(255,54,33,0.13)"
        border="rgba(255,54,33,0.40)" glow="rgba(255,54,33,0.16)"
        icon={<DatabricksIcon/>} animClass="tool-float-3"
        style={{ top: "38%", left: 0 }}/>

      <TechBadge name="SQL"
        color="#E38C00" bg="rgba(227,140,0,0.13)"
        border="rgba(227,140,0,0.40)" glow="rgba(227,140,0,0.15)"
        icon={<SQLIcon/>} animClass="tool-float-4"
        style={{ top: "46%", right: 0 }}/>

      <TechBadge name="Power BI"
        color="#F2C811" bg="rgba(242,200,17,0.11)"
        border="rgba(242,200,17,0.40)" glow="rgba(242,200,17,0.14)"
        icon={<PowerBIIcon/>} animClass="tool-float-5"
        style={{ bottom: 80, left: 8 }}/>

      <TechBadge name="Azure DB"
        color="#0089D6" bg="rgba(0,137,214,0.12)"
        border="rgba(0,137,214,0.38)" glow="rgba(0,137,214,0.14)"
        icon={<AzureIcon/>} animClass="tool-float-6"
        style={{ bottom: 88, right: 0 }}/>

      {/* ── Radial ambient glow behind cards ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background:
          "radial-gradient(ellipse 260px 340px at 50% 54%, rgba(216,180,90,0.06) 0%, transparent 70%)",
      }}/>

      {/* ── Stacked layer cards + connectors ── */}
      <div className="absolute inset-x-0 flex flex-col" style={{ top: 58, padding: "0 58px" }}>
        <BronzeCard/>
        <LayerConnector fromColor="#D97706" toColor="#94A3B8" id="bs"/>
        <SilverCard/>
        <LayerConnector fromColor="#94A3B8" toColor="#D8B45A" id="sg"/>
        <GoldCard/>
      </div>

    </div>
  );
}

/* ═══════════════════════════════════════════════
   HERO EXPORT
   LEFT side: preserved exactly as before
   RIGHT side: replaced with MedallionPipeline
═══════════════════════════════════════════════ */
export default function Hero() {
  const heroRef = useRef(null);
  const typeRef = useTypewriter(
    "I make data trustworthy before it reaches a dashboard or a model.",
    38, 800
  );

  const handleExplore = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* ── Ambient orbs ── */}
      <div className="orb orb-gold  w-[500px] h-[500px] top-[-10%] right-[-5%]"/>
      <div className="orb orb-blush w-[400px] h-[400px] bottom-[10%] left-[-5%]"/>
      <div className="orb orb-green w-[300px] h-[300px] top-[40%]  left-[30%]"/>

      <div className="container-main w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[80vh]">

          {/* ══ LEFT — Text (unchanged) ══ */}
          <div className="order-2 lg:order-1">

            <div className="reveal" style={{ transitionDelay: "0ms" }}>
              <span className="section-label">Data Engineering · Python · SQL · Big Data</span>
            </div>

            <h1
              className="mt-6 font-display font-bold text-4xl md:text-5xl lg:text-[3.4rem]
                leading-[1.1] tracking-tight text-warm-white reveal typewriter-cursor"
              style={{ transitionDelay: "150ms", minHeight: "7rem" }}
            >
              <span ref={typeRef}/>
            </h1>

            <p className="mt-6 text-muted-gray font-body text-base lg:text-lg leading-relaxed max-w-xl reveal"
              style={{ transitionDelay: "300ms" }}>
              I'm Nagesh, a Data Engineer at TCS with a background in Electronics and
              Communication Engineering. I work with Python, SQL, PySpark, and Databricks
              while developing my expertise in data pipelines, data transformation, and analytics.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 reveal" style={{ transitionDelay: "450ms" }}>
              <button onClick={handleExplore} className="btn-primary hover-lift">
                Explore My Work
                <ArrowDown size={16}/>
              </button>
              <a
                href="https://drive.google.com/file/d/107VClsp0ARn15aOnqBXitlaO5R_RTxNw/view?usp=sharing"
                target="_blank" rel="noopener noreferrer"
                className="btn-secondary hover-lift"
              >
                <Download size={16}/>
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2 text-muted-gray reveal"
              style={{ transitionDelay: "600ms" }}>
              <MapPin size={14} className="text-gold"/>
              <span className="text-xs font-body tracking-wide">Bengaluru, India · Data Engineering</span>
              <span className="text-xs text-border-dark mx-2">|</span>
              <span className="flex items-center gap-1.5 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-success-green animate-pulse"/>
                <span className="text-success-green">Open to Opportunities</span>
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-2 stagger-children" style={{ transitionDelay: "750ms" }}>
              {["Python","SQL","PySpark","Azure Databricks","Delta Lake","Power BI"].map(t => (
                <span key={t}
                  className="tech-tag skill-tag-animated text-xs hover:border-gold/40 hover:text-warm-white transition-all duration-200 cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ══ RIGHT — Medallion Pipeline (NEW) ══ */}
          <div className="order-1 lg:order-2 flex items-center justify-center reveal-right"
            style={{ transitionDelay: "200ms" }}>
            <div className="w-full max-w-sm mx-auto">
              <MedallionPipeline/>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs font-display tracking-widest uppercase text-muted-gray">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-gray to-transparent"/>
      </div>
    </section>
  );
}
