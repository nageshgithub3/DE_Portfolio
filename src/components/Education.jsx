import { educationData } from "../data/education";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-border-dark">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Header */}
          <div className="lg:w-72 flex-shrink-0">
            <span className="section-label">Education</span>
            <h2 className="mt-4 font-display font-bold text-4xl text-warm-white leading-tight">
              Academic<br />Background
            </h2>
            <p className="mt-4 text-muted-gray font-body text-sm leading-relaxed">
              A strong academic foundation across engineering, sciences, and mathematics.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-gold/10 border border-gold/30 rounded-sm flex items-center justify-center">
                <GraduationCap size={16} className="text-gold" />
              </div>
              <div>
                <div className="text-xs text-muted-gray font-body">Highest Qualification</div>
                <div className="text-sm text-warm-white font-display font-medium">B.Tech ECE</div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex-1">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border-dark hidden lg:block" />

              <div className="space-y-0">
                {educationData.map((entry, index) => (
                  <div
                    key={entry.id}
                    className={`relative lg:pl-10 group ${
                      index < educationData.length - 1
                        ? "pb-10 border-b border-border-dark mb-10"
                        : ""
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-3 h-3 rounded-full border-2 border-gold bg-primary group-hover:bg-gold transition-colors duration-300 hidden lg:block -translate-x-1" />

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="text-xs font-display font-semibold tracking-widest uppercase text-gold mb-1">
                          {entry.gradeLabel}:{" "}
                          <span className="text-gold font-bold">{entry.grade}</span>
                        </div>
                        <h3 className="font-display font-semibold text-warm-white text-lg leading-snug">
                          {entry.institution}
                        </h3>
                        <p className="text-sm font-body text-muted-gray mt-1">
                          {entry.qualification}
                        </p>
                        <p className="text-xs font-body text-muted-gray/60 mt-0.5">
                          {entry.location}
                        </p>
                        <p className="mt-3 text-sm font-body text-muted-gray leading-relaxed">
                          {entry.description}
                        </p>
                      </div>

                      <div className="sm:text-right flex-shrink-0">
                        <span className="text-xs font-display text-muted-gray tracking-wide whitespace-nowrap">
                          {entry.startDate} — {entry.endDate}
                        </span>
                      </div>
                    </div>
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
