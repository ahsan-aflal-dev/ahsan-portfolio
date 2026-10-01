export type AxonDomain = {
  number: string;
  name: string;
  description: string;
  status: string;
  href: string;
};

export const axonDomains: AxonDomain[] = [
  {
    number: "01",
    name: "INTELLIGENCE",
    description:
      "Models, learning systems, representations, and the foundations of machine intelligence.",
    status: "ACTIVE",
    href: "/projects",
  },
  {
    number: "02",
    name: "SYSTEMS",
    description:
      "Engineering intelligent software that connects models, data, memory, tools, and infrastructure.",
    status: "ACTIVE",
    href: "/projects",
  },
  {
    number: "03",
    name: "AGENTS",
    description:
      "Systems that reason about goals, use tools, observe outcomes, and take action.",
    status: "DEVELOPING",
    href: "/projects/nexus",
  },
  {
    number: "04",
    name: "RESEARCH",
    description:
      "Experiments and investigations designed to understand how intelligent systems behave.",
    status: "DEVELOPING",
    href: "/research",
  },
  {
    number: "05",
    name: "AUTONOMY",
    description:
      "Long-term exploration of multi-agent systems, environments, adaptation, and autonomous intelligence.",
    status: "FUTURE",
    href: "/projects/swarm",
  },
  {
    number: "06",
    name: "EXPERIMENTS",
    description:
      "A space for ideas that may become systems, projects, tools, or entirely new directions.",
    status: "ONGOING",
    href: "/research",
  },
];