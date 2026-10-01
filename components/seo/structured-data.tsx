export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tuan Ahsan Aflal",
    alternateName: "Ahsan",
    jobTitle: "AI/ML Engineer",
    description:
      "AI/ML Engineer building intelligent systems that think, learn, and act.",
    url: "https://ahsan-aflal-dev.vercel.app",
    sameAs: [
      "https://github.com/ahsan-aflal-dev",
      "https://www.linkedin.com/in/tuan-ahsan-37158036",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Agentic AI",
      "Intelligent Systems",
      "Autonomous Agents",
      "Software Engineering",
      "AI Infrastructure",
      "LLM Systems",
    ],
    brand: {
      "@type": "Brand",
      name: "AXON",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}