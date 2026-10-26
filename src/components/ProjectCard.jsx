import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div className="group relative bg-card border border-border-dark rounded-sm overflow-hidden hover:border-gold/40 transition-all duration-300 hover:shadow-xl hover:shadow-gold/5 flex flex-col border-beam hover-lift">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className="text-[10px] font-display font-semibold tracking-widest uppercase text-muted-gray">
              {project.category}
            </span>
            <h3 className="mt-1.5 font-display font-bold text-warm-white text-lg leading-snug group-hover:text-gold transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          <span className={project.status === "completed" ? "status-completed" : "status-proposed"}>
            {project.status === "completed" ? "Completed" : "Proposed"}
          </span>
        </div>

        <p className="text-sm font-body text-muted-gray leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-5 flex-1">
          {project.highlights.slice(0, 3).map((highlight, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="w-3 h-px bg-gold flex-shrink-0 mt-2.5" />
              <span className="text-xs font-body text-muted-gray leading-relaxed">
                {highlight}
              </span>
            </li>
          ))}
        </ul>

        {/* Results (if available) */}
        {project.results && (
          <div className="grid grid-cols-2 gap-3 mb-5 pt-4 border-t border-border-dark">
            {project.results.slice(0, 4).map((result) => (
              <div key={result.label}>
                <div className="text-lg font-display font-bold text-gold">{result.value}</div>
                <div className="text-[10px] font-body text-muted-gray uppercase tracking-wide">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag text-[10px]">
              {tech}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3 pt-4 border-t border-border-dark">
          {project.status === "completed" ? (
            <button
              onClick={() => navigate(`/project/${project.id}`)}
              className="flex items-center gap-1.5 text-xs font-display font-semibold text-gold hover:text-warm-white transition-colors duration-200"
            >
              View Project
              <ArrowRight size={14} />
            </button>
          ) : (
            <span className="text-xs font-display text-muted-gray/50">
              In Development
            </span>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-auto flex items-center gap-1.5 text-xs font-body transition-colors duration-200 ${
              project.githubUrl === "#"
                ? "text-muted-gray/30 cursor-not-allowed pointer-events-none"
                : "text-muted-gray hover:text-warm-white"
            }`}
            aria-label={`GitHub repository for ${project.title}`}
          >
            <Github size={14} />
            GitHub
            {project.githubUrl !== "#" && <ExternalLink size={12} />}
          </a>
        </div>
      </div>
    </div>
  );
}
