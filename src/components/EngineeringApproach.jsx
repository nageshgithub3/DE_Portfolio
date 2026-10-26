const steps = [
  {
    number: "01",
    title: "Understand the Data",
    description:
      "Identify source systems, schemas, data types, and business requirements before writing a single line of code.",
  },
  {
    number: "02",
    title: "Validate the Inputs",
    description:
      "Check for missing values, duplicates, invalid records, and inconsistent formats. Garbage in, garbage out.",
  },
  {
    number: "03",
    title: "Transform the Data",
    description:
      "Use SQL and PySpark to clean, standardize, and enrich datasets according to well-defined business rules.",
  },
  {
    number: "04",
    title: "Organize the Pipeline",
    description:
      "Separate raw, cleaned, and business-ready data using Medallion Architecture or a suitable structure.",
  },
  {
    number: "05",
    title: "Validate the Output",
    description:
      "Check record counts, schema consistency, transformation results, and business rule compliance.",
  },
  {
    number: "06",
    title: "Deliver Useful Data",
    description:
      "Prepare curated datasets for reporting, dashboards, and downstream applications that need reliable data.",
  },
];

export default function EngineeringApproach() {
  return (
    <section className="py-24 border-t border-border-dark">
      <div className="container-main">
        <div className="max-w-2xl mb-14 reveal">
          <span className="section-label">My Approach</span>
          <h2 className="mt-4 font-display font-bold text-4xl lg:text-5xl text-warm-white leading-tight">
            Tools are only as good as the{" "}
            <span className="text-gradient-gold">judgment</span> behind them.
          </h2>
          <p className="mt-4 text-muted-gray font-body text-sm leading-relaxed">
            A disciplined, step-by-step approach to building data pipelines that produce trustworthy results.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border-dark border border-border-dark rounded-sm overflow-hidden stagger-children">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-card p-6 lg:p-8 group hover:bg-secondary transition-colors duration-300"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Number */}
              <div className="text-5xl font-display font-bold text-border-dark group-hover:text-gold/20 transition-colors duration-300 mb-4 leading-none">
                {step.number}
              </div>

              <h3 className="font-display font-semibold text-warm-white text-base mb-3 leading-snug group-hover:text-gold transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-muted-gray font-body text-sm leading-relaxed">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-border-dark hidden lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
