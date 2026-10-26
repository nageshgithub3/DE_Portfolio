import { skillsData } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-border-dark">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Header */}
          <div className="lg:w-72 flex-shrink-0 reveal-left">
            <span className="section-label">Technical Skills</span>
            <h2 className="mt-4 font-display font-bold text-4xl text-warm-white leading-tight">
              Tools &<br />Technologies
            </h2>
            <p className="mt-4 text-muted-gray font-body text-sm leading-relaxed">
              Technologies I work with and continue to develop through projects and hands-on practice.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {skillsData.map((category) => (
              <div key={category.id} className="border-beam bg-card border border-border-dark rounded-sm p-5 hover-lift">
                <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-gray mb-4 pb-3 border-b border-border-dark">
                  {category.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={
                        category.priority?.includes(skill)
                          ? "skill-tag-priority skill-tag-animated"
                          : "skill-tag"
                      }
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Priority skills callout */}
        <div className="mt-16 pt-10 border-t border-border-dark">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 reveal">
            <span className="text-xs font-display font-semibold tracking-widest uppercase text-muted-gray whitespace-nowrap">
              Core Focus →
            </span>
            <div className="flex flex-wrap gap-2">
              {["Python", "SQL", "PySpark", "Azure Databricks", "Delta Lake"].map((skill) => (
                <span key={skill} className="skill-tag-priority skill-tag-animated">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
