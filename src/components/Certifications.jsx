import { certificationsData } from "../data/certifications";
import { BookOpen, Award } from "lucide-react";

const categories = ["Data Engineering", "Programming", "Analytics"];

export default function Certifications() {
  return (
    <section className="py-24 border-t border-border-dark">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Header */}
          <div className="lg:w-72 flex-shrink-0">
            <span className="section-label">Learning & Certs</span>
            <h2 className="mt-4 font-display font-bold text-4xl text-warm-white leading-tight">
              Engineer by practice.{" "}
              <span className="font-editorial italic text-gold">Curious</span>{" "}
              by nature.
            </h2>
            <p className="mt-4 text-muted-gray font-body text-sm leading-relaxed">
              Continuously developing skills through project-based learning and self-directed study.
            </p>
            <div className="mt-8 flex items-center gap-2 text-xs text-muted-gray font-body">
              <span className="flex items-center gap-1.5 px-2 py-1 border border-blush/30 bg-blush/5 rounded-sm">
                <BookOpen size={10} className="text-blush" />
                <span className="text-blush">Learning</span>
              </span>
              <span className="text-muted-gray/50">= Active skill development</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-10">
            {categories.map((category) => {
              const items = certificationsData.filter((c) => c.category === category);
              return (
                <div key={category}>
                  <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-gray mb-4 pb-3 border-b border-border-dark">
                    {category}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {items.map((cert) => (
                      <div
                        key={cert.id}
                        className="bg-card border border-border-dark rounded-sm p-4 hover:border-gold/30 transition-all duration-300 group"
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="w-7 h-7 rounded-sm bg-secondary border border-border-dark flex items-center justify-center flex-shrink-0">
                            {cert.status === "earned" ? (
                              <Award size={12} className="text-gold" />
                            ) : (
                              <BookOpen size={12} className="text-blush" />
                            )}
                          </div>
                          <span
                            className={
                              cert.status === "earned"
                                ? "status-completed"
                                : "px-2 py-0.5 text-xs font-display font-medium tracking-wide text-blush border border-blush/30 bg-blush/5 rounded-sm"
                            }
                          >
                            {cert.status === "earned" ? "Earned" : "Learning"}
                          </span>
                        </div>
                        <h4 className="font-display font-semibold text-warm-white text-sm mb-1 group-hover:text-gold transition-colors duration-300">
                          {cert.title}
                        </h4>
                        <p className="text-xs font-body text-muted-gray">
                          {cert.issuer}
                        </p>
                        {cert.date && (
                          <p className="text-[10px] font-body text-muted-gray/60 mt-1">
                            {cert.date}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
