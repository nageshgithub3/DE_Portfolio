export const projectsData = [
  {
    id: "bank-churn",
    title: "Bank Soft Churn Customer Analysis",
    category: "Data Engineering · Customer Analytics",
    description:
      "Developed a data engineering and analytics project to identify potentially inactive banking customers based on account activity and balance data using Medallion Architecture on Azure Databricks.",
    technologies: ["Python", "SQL", "PySpark", "Azure Databricks", "Delta Lake", "Power BI"],
    status: "completed",
    highlights: [
      "Designed a Medallion Architecture (Bronze → Silver → Gold) pipeline for customer data processing.",
      "Implemented data validation, cleaning, and transformation using PySpark on Databricks.",
      "Applied business rules to classify soft-churn customers based on inactivity and balance patterns.",
      "Built Power BI dashboards to visualize customer inactivity trends and churn indicators.",
      "Analyzed 100 customer records and identified 35 potential soft-churn customers (35% rate).",
    ],
    githubUrl: "#",
    liveUrl: "#",
    medallionLayers: {
      bronze: "Ingest raw customer activity and balance datasets. Preserve source data for downstream processing.",
      silver: "Validate records, handle data quality issues, standardize fields, and calculate inactivity features.",
      gold: "Apply churn business rules, aggregate indicators, and prepare curated data for Power BI reporting.",
    },
    results: [
      { label: "Records Analyzed", value: "100" },
      { label: "Soft-Churn Identified", value: "35" },
      { label: "Project Churn Rate", value: "35%" },
      { label: "Architecture", value: "Medallion" },
    ],
  },
  {
    id: "data-pipeline",
    title: "Data Pipeline & Transformation Workflow",
    category: "Data Engineering · ETL/ELT",
    description:
      "A structured data pipeline project demonstrating how raw datasets are ingested, validated, cleaned, transformed, and delivered as curated outputs for downstream reporting.",
    technologies: ["Python", "SQL", "PySpark", "Databricks", "Delta Lake"],
    status: "proposed",
    highlights: [
      "Load raw source data and validate schemas, data types, and completeness.",
      "Identify missing values, duplicates, and inconsistent formats with structured error logging.",
      "Apply data cleaning and transformation rules using PySpark and SQL.",
      "Store processed datasets in Delta Lake with schema enforcement.",
      "Validate transformed output with record counts and business-rule checks.",
    ],
    githubUrl: "#",
  },
  {
    id: "customer-analytics",
    title: "Customer Data Analytics Dashboard",
    category: "Data Analytics · SQL · Power BI",
    description:
      "An analytics solution that converts customer datasets into actionable business metrics using SQL aggregations, customer segmentation, and interactive Power BI dashboards.",
    technologies: ["SQL", "Python", "Power BI"],
    status: "proposed",
    highlights: [
      "Customer segmentation based on activity, balance, and behavioral patterns.",
      "SQL aggregations and joins to compute KPIs and transaction summaries.",
      "Interactive Power BI dashboards with filters, slicers, and drill-throughs.",
      "Revenue and transaction analysis where the dataset supports it.",
      "Business-focused reporting designed for non-technical stakeholders.",
    ],
    githubUrl: "#",
  },
];
