import { useCounter } from "../hooks/useAnimations";

const highlights = [
  {
    stat: "8.51",
    suffix: "",
    prefix: "",
    label: "CGPA",
    title: "Engineering Foundation",
    description:
      "B.Tech in Electronics and Communication Engineering from RGMCET with a strong analytical and technical foundation.",
    color: "#D8B45A",
  },
  {
    stat: "5",
    suffix: "+",
    prefix: "",
    label: "Core Tools",
    title: "Data Engineering",
    description:
      "Hands-on skills in Python, SQL, PySpark, Azure Databricks, and Delta Lake — applied through real data engineering projects.",
    color: "#D8B45A",
  },
  {
    stat: "3",
    suffix: "",
    prefix: "",
    label: "Architecture Layers",
    title: "Medallion Pipelines",
    description:
      "Experience designing Bronze → Silver → Gold architecture with ETL/ELT workflows, data cleaning, and validation.",
    color: "#D8B45A",
  },
  {
    stat: "1",
    suffix: "+",
    prefix: "",
    label: "Live Projects",
    title: "Analytics & Reporting",
    description:
      "Building Power BI dashboards that surface business insights from curated, transformed data layers.",
    color: "#D8B45A",
  },
];

function StatNumber({ stat, suffix, prefix }) {
  const ref = useCounter(stat, 1800);
  return (
    <div className="flex items-baseline gap-0.5">
      {prefix && <span className="text-2xl font-display font-bold text-gold">{prefix}</span>}
      <span ref={ref} className="counter-num text-4xl font-display font-bold text-gold">{stat}</span>
      {suffix && <span className="text-2xl font-display font-bold text-gold">{suffix}</span>}
    </div>
  );
}

export default function Highlights() {
  return (
    <section className="py-20 border-t border-border-dark">
      <div className="container-main">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`p-8 hover:bg-card transition-all duration-300 group reveal hover-lift cursor-default border-border-dark ${
                index < highlights.length - 1
                  ? "border-b sm:border-b-0 sm:border-r lg:border-r"
                  : ""
              } ${index === 1 ? "sm:border-b lg:border-b-0" : ""}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Animated stat */}
              <div className="mb-2">
                <StatNumber stat={item.stat} suffix={item.suffix} prefix={item.prefix} />
                <div className="text-[10px] font-display font-semibold tracking-widest uppercase text-muted-gray mt-0.5">
                  {item.label}
                </div>
              </div>

              <h3 className="font-display font-semibold text-warm-white text-sm mt-4 mb-2 leading-snug group-hover:text-gold transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-muted-gray font-body text-xs leading-relaxed">
                {item.description}
              </p>
              <div className="mt-4 w-8 h-px bg-gold opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
