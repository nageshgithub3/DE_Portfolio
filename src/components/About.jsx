const interests = [
  "ETL/ELT pipeline development",
  "Distributed data processing",
  "Data quality and validation",
  "Data modeling",
  "Business intelligence",
];

const techStack = [
  { label: "Python", highlight: true },
  { label: "SQL", highlight: true },
  { label: "PySpark", highlight: true },
  { label: "Azure Databricks", highlight: true },
  { label: "Delta Lake", highlight: true },
  { label: "Power BI", highlight: false },
  { label: "Apache Spark", highlight: false },
  { label: "MySQL", highlight: false },
  { label: "Git / GitHub", highlight: false },
];

const concepts = [
  "Medallion Architecture",
  "Data Pipelines",
  "Data Transformation",
  "Data Validation",
  "ETL/ELT",
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border-dark">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div className="reveal-left">
            <span className="section-label">About Me</span>
            <h2 className="mt-4 font-display font-bold text-4xl lg:text-5xl text-warm-white leading-tight">
              Built for the{" "}
              <span className="font-editorial italic text-gold">real world.</span>
            </h2>

            <p className="mt-8 text-muted-gray font-body text-base leading-relaxed">
              I'm a technology professional at TCS with a strong interest in Data Engineering.
              My technical foundation includes Python, SQL, PySpark, Azure Databricks,
              Delta Lake, and Power BI.
            </p>
            <p className="mt-4 text-muted-gray font-body text-base leading-relaxed">
              I enjoy understanding how raw data moves through a pipeline, how data quality
              is maintained, and how transformed data can support business decisions.
            </p>
            <p className="mt-4 text-muted-gray font-body text-base leading-relaxed">
              Through hands-on learning and projects, I'm developing my skills in data
              processing, data transformation, pipeline design, and analytics. My goal is
              to build reliable and maintainable data solutions that turn complex datasets
              into useful information.
            </p>

            {/* Interests */}
            <div className="mt-10">
              <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-gray mb-4">
                Professional Interests
              </p>
              <ul className="space-y-2 stagger-children">
                {interests.map((interest) => (
                  <li
                    key={interest}
                    className="flex items-center gap-3 text-sm font-body text-warm-white"
                  >
                    <span className="w-4 h-px bg-gold flex-shrink-0" />
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-8 reveal-right">
            {/* Tech Stack */}
            <div className="bg-card border border-border-dark rounded-sm p-6 border-beam hover-lift">
              <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-gray mb-4">
                Technology Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech.label}
                    className={tech.highlight ? "skill-tag-priority skill-tag-animated" : "skill-tag"}
                  >
                    {tech.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Concepts */}
            <div className="bg-card border border-border-dark rounded-sm p-6 border-beam hover-lift">
              <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-gray mb-4">
                Core Concepts
              </p>
              <div className="flex flex-wrap gap-2">
                {concepts.map((concept) => (
                  <span key={concept} className="skill-tag">
                    {concept}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <div className="border border-border-dark rounded-sm p-6 space-y-4 hover-lift">
              <div className="flex justify-between items-center py-3 border-b border-border-dark">
                <span className="text-xs font-display tracking-widest uppercase text-muted-gray">
                  Location
                </span>
                <span className="text-sm font-body text-warm-white">Bengaluru, India</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border-dark">
                <span className="text-xs font-display tracking-widest uppercase text-muted-gray">
                  Current Role
                </span>
                <span className="text-sm font-body text-warm-white">System Engineer @ TCS</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border-dark">
                <span className="text-xs font-display tracking-widest uppercase text-muted-gray">
                  Domain
                </span>
                <span className="text-sm font-body text-gold">Data Engineering</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-xs font-display tracking-widest uppercase text-muted-gray">
                  Degree
                </span>
                <span className="text-sm font-body text-warm-white">B.Tech ECE · 8.51 CGPA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
