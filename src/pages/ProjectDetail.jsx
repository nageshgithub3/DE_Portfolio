import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projectsData } from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MedallionDiagram({ layers }) {
  return (
    <div className="my-8">
      <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-gray mb-4">
        Medallion Architecture
      </p>

      {/* Arrow flow */}
      <div className="flex items-stretch gap-0 overflow-x-auto pb-2">
        {/* Source */}
        <div className="flex-1 min-w-[120px] bg-secondary border border-border-dark rounded-l-sm p-4">
          <div className="text-[10px] font-display font-semibold tracking-widest uppercase text-muted-gray mb-2">Source</div>
          <div className="text-xs font-body text-warm-white">Customer Data</div>
          <div className="text-[10px] text-muted-gray mt-1">CSV / DB</div>
        </div>

        <div className="flex items-center px-2 text-border-dark">→</div>

        {/* Bronze */}
        <div className="flex-1 min-w-[140px] bg-amber-900/15 border border-amber-800/40 p-4">
          <div className="text-[10px] font-display font-semibold tracking-widest uppercase text-amber-500 mb-2">Bronze</div>
          <div className="text-xs font-body text-warm-white mb-2">Raw Data</div>
          <div className="text-[10px] text-muted-gray leading-relaxed">{layers.bronze}</div>
        </div>

        <div className="flex items-center px-2 text-border-dark">→</div>

        {/* Silver */}
        <div className="flex-1 min-w-[140px] bg-slate-800/20 border border-slate-600/30 p-4">
          <div className="text-[10px] font-display font-semibold tracking-widest uppercase text-slate-400 mb-2">Silver</div>
          <div className="text-xs font-body text-warm-white mb-2">Cleaned Data</div>
          <div className="text-[10px] text-muted-gray leading-relaxed">{layers.silver}</div>
        </div>

        <div className="flex items-center px-2 text-border-dark">→</div>

        {/* Gold */}
        <div className="flex-1 min-w-[140px] bg-gold/5 border border-gold/30 p-4">
          <div className="text-[10px] font-display font-semibold tracking-widest uppercase text-gold mb-2">Gold</div>
          <div className="text-xs font-body text-warm-white mb-2">Analytics</div>
          <div className="text-[10px] text-muted-gray leading-relaxed">{layers.gold}</div>
        </div>

        <div className="flex items-center px-2 text-border-dark">→</div>

        {/* Power BI */}
        <div className="flex-1 min-w-[120px] bg-secondary border border-border-dark rounded-r-sm p-4">
          <div className="text-[10px] font-display font-semibold tracking-widest uppercase text-muted-gray mb-2">Output</div>
          <div className="text-xs font-body text-warm-white">Power BI</div>
          <div className="text-[10px] text-muted-gray mt-1">Dashboard</div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <p className="text-muted-gray font-body mb-4">Project not found.</p>
          <button onClick={() => navigate("/")} className="btn-secondary text-sm">
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container-main">
          {/* Back */}
          <button
            onClick={() => navigate("/#projects")}
            className="flex items-center gap-2 text-xs font-display font-medium text-muted-gray hover:text-gold transition-colors mb-10 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>

          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-display font-semibold tracking-widest uppercase text-muted-gray">
                {project.category}
              </span>
              <span className={project.status === "completed" ? "status-completed" : "status-proposed"}>
                {project.status === "completed" ? "Completed" : "Proposed"}
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl lg:text-5xl text-warm-white leading-tight mb-4">
              {project.title}
            </h1>
            <p className="text-muted-gray font-body text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-10 pb-10 border-b border-border-dark">
            <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-gray mb-3">
              Technology Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="skill-tag-priority">{tech}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Problem Statement */}
              <div>
                <h2 className="font-display font-bold text-xl text-warm-white mb-4">
                  Problem Statement
                </h2>
                <p className="text-muted-gray font-body text-sm leading-relaxed">
                  {project.id === "bank-churn" &&
                    "Banks need to identify customers whose activity is declining so that business teams can investigate potential churn and take appropriate action. Raw customer activity and balance data must be cleaned, validated, transformed, and organized before it can support reliable analysis."}
                  {project.id === "data-pipeline" &&
                    "Raw datasets from various source systems often contain quality issues — missing values, duplicates, type mismatches, and structural inconsistencies — that make them unreliable for reporting or downstream consumption without a structured transformation workflow."}
                  {project.id === "customer-analytics" &&
                    "Business stakeholders often lack accessible, meaningful insights from customer data because raw data is scattered, inconsistent, or difficult to query directly. A structured analytics solution is needed to transform raw data into actionable KPIs and dashboards."}
                </p>
              </div>

              {/* Architecture */}
              {project.medallionLayers && (
                <div>
                  <h2 className="font-display font-bold text-xl text-warm-white mb-4">
                    Architecture
                  </h2>
                  <MedallionDiagram layers={project.medallionLayers} />
                </div>
              )}

              {/* Workflow */}
              <div>
                <h2 className="font-display font-bold text-xl text-warm-white mb-4">
                  Data Processing Workflow
                </h2>
                <ul className="space-y-3">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center text-[10px] font-display font-bold text-gold mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-body text-muted-gray leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              {project.results && (
                <div>
                  <h2 className="font-display font-bold text-xl text-warm-white mb-4">
                    Results
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                    {project.results.map((result) => (
                      <div
                        key={result.label}
                        className="bg-card border border-border-dark rounded-sm p-4 text-center"
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
                  <p className="text-xs font-body text-muted-gray/60 leading-relaxed">
                    Note: These results are project-specific, based on the sample dataset used. They are not claims about an actual bank's customer population or predictions of real churn.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="bg-card border border-border-dark rounded-sm p-5 space-y-4">
                <h3 className="text-xs font-display font-semibold tracking-widest uppercase text-muted-gray">
                  Project Info
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-[10px] text-muted-gray/60 uppercase tracking-wide font-display mb-1">Status</div>
                    <span className={project.status === "completed" ? "status-completed" : "status-proposed"}>
                      {project.status === "completed" ? "Completed" : "In Development"}
                    </span>
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-gray/60 uppercase tracking-wide font-display mb-1">Domain</div>
                    <div className="text-sm text-warm-white font-body">{project.category}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-gray/60 uppercase tracking-wide font-display mb-1">Stack</div>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((t) => (
                        <span key={t} className="tech-tag text-[10px]">{t}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="tech-tag text-[10px]">+{project.technologies.length - 3}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="space-y-3">
                {project.githubUrl && project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 btn-secondary w-full justify-center text-xs"
                  >
                    <Github size={14} />
                    GitHub Repository
                    <ExternalLink size={12} />
                  </a>
                )}
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 btn-primary w-full justify-center text-xs"
                  >
                    Live Demo
                    <ExternalLink size={12} />
                  </a>
                )}
                <button
                  onClick={() => navigate("/")}
                  className="btn-secondary w-full justify-center text-xs"
                >
                  <ArrowLeft size={14} />
                  Back to Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
