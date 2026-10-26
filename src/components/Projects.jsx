import { projectsData } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-border-dark">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 reveal">
          <div>
            <span className="section-label">Selected Projects</span>
            <h2 className="mt-4 font-display font-bold text-4xl lg:text-5xl text-warm-white leading-tight">
              Curiosity,{" "}
              <span className="font-editorial italic text-gold">put to work.</span>
            </h2>
          </div>
          <p className="text-muted-gray font-body text-sm max-w-md lg:text-right leading-relaxed">
            Projects that demonstrate hands-on data engineering skills, structured thinking, and real-world problem-solving.
          </p>
        </div>

        {/* Featured Project — Full Width */}
        <div className="mb-8 reveal">
          <div className="group relative bg-card border border-border-dark rounded-sm overflow-hidden hover:border-gold/40 transition-all duration-300 hover:shadow-xl hover:shadow-gold/5 border-beam hover-lift">
            <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-display font-semibold tracking-widest uppercase text-muted-gray">
                      {projectsData[0].category}
                    </span>
                    <span className="status-completed">Completed</span>
                    <span className="ml-auto px-2 py-0.5 text-[10px] font-display font-semibold text-gold border border-gold/30 bg-gold/5 rounded-sm">
                      Featured
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-warm-white text-2xl lg:text-3xl leading-snug group-hover:text-gold transition-colors duration-300 mb-4">
                    {projectsData[0].title}
                  </h3>

                  <p className="text-sm font-body text-muted-gray leading-relaxed mb-6">
                    {projectsData[0].description}
                  </p>

                  {/* Medallion Architecture */}
                  <div className="mb-6">
                    <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-gray mb-3">
                      Medallion Architecture
                    </p>
                    <div className="flex items-center gap-0 text-xs">
                      <div className="flex-1 bg-amber-900/20 border border-amber-800/40 rounded-sm p-3">
                        <div className="font-display font-semibold text-amber-500 mb-1 uppercase tracking-wide text-[10px]">Bronze</div>
                        <div className="text-muted-gray text-[10px] font-body">Raw ingestion</div>
                      </div>
                      <div className="w-4 h-px bg-border-dark flex-shrink-0" />
                      <div className="flex-1 bg-slate-800/30 border border-slate-600/30 rounded-sm p-3">
                        <div className="font-display font-semibold text-slate-400 mb-1 uppercase tracking-wide text-[10px]">Silver</div>
                        <div className="text-muted-gray text-[10px] font-body">Clean & validate</div>
                      </div>
                      <div className="w-4 h-px bg-border-dark flex-shrink-0" />
                      <div className="flex-1 bg-gold/5 border border-gold/30 rounded-sm p-3">
                        <div className="font-display font-semibold text-gold mb-1 uppercase tracking-wide text-[10px]">Gold</div>
                        <div className="text-muted-gray text-[10px] font-body">Business analytics</div>
                      </div>
                    </div>
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {projectsData[0].technologies.map((tech) => (
                      <span key={tech} className="tech-tag text-[10px]">{tech}</span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center gap-4">
                    <a
                      href={`/project/bank-churn`}
                      className="btn-primary text-xs"
                    >
                      View Project Details
                    </a>
                    <a
                      href={projectsData[0].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs"
                    >
                      GitHub Repository
                    </a>
                  </div>
                </div>

                {/* Right — Results */}
                <div>
                  <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-gray mb-4">
                    Project Results
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6 stagger-children">
                    {projectsData[0].results?.map((result) => (
                      <div
                        key={result.label}
                        className="bg-secondary border border-border-dark rounded-sm p-4 hover:border-gold/30 transition-colors duration-300 hover-lift"
                      >
                        <div className="text-2xl font-display font-bold text-gold mb-1">
                          {result.value}
                        </div>
                        <div className="text-[10px] font-body text-muted-gray uppercase tracking-wide">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs font-body text-muted-gray/70 leading-relaxed">
                    These are project-specific results based on the dataset used, not claims about an actual bank's customer population.
                  </p>

                  {/* Highlights */}
                  <div className="mt-6 space-y-2">
                    {projectsData[0].highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="w-3 h-px bg-gold flex-shrink-0 mt-2.5" />
                        <span className="text-xs font-body text-muted-gray leading-relaxed">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
          {projectsData.slice(1).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
