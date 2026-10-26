import { experienceData } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-border-dark">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Header */}
          <div className="lg:w-72 flex-shrink-0 reveal-left">
            <span className="section-label">Experience</span>
            <h2 className="mt-4 font-display font-bold text-4xl text-warm-white leading-tight">
              Professional<br />Journey
            </h2>
            <p className="mt-4 text-muted-gray font-body text-sm leading-relaxed">
              Building data engineering skills through real-world training and project experience.
            </p>
          </div>

          {/* Timeline */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border-dark hidden lg:block" />

              <div className="space-y-0">
                {experienceData.map((exp, index) => (
                  <div
                    key={exp.id}
                    className={`relative lg:pl-10 group reveal ${
                      index < experienceData.length - 1
                        ? "pb-12 border-b border-border-dark mb-12"
                        : ""
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-gold bg-primary group-hover:bg-gold transition-colors duration-300 hidden lg:block -translate-x-1" />

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <span className="section-label text-[10px]">{exp.domain}</span>
                        <h3 className="mt-2 font-display font-bold text-warm-white text-xl lg:text-2xl">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-body text-gold mt-1">
                          {exp.company}
                        </p>
                        <p className="text-xs font-body text-muted-gray mt-0.5">
                          {exp.location}
                        </p>
                      </div>
                      <div className="sm:text-right flex-shrink-0">
                        <span className="inline-block px-3 py-1 text-xs font-display text-muted-gray border border-border-dark rounded-sm whitespace-nowrap">
                          {exp.startDate} — {exp.endDate}
                        </span>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2.5 stagger-children">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-4 h-px bg-gold flex-shrink-0 mt-3" />
                          <span className="text-sm font-body text-muted-gray leading-relaxed">
                            {resp}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
