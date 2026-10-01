import {
  ProjectDetail,
  type ProjectData,
} from "@/app/projects/project-detail";

const project: ProjectData = {
  number: "07",
  name: "SWARM",
  category: "MULTI-AGENT SYSTEM",
  status: "FUTURE",
  tagline: "Many agents. One coordinated intelligence.",

  description:
    "SWARM is a multi-agent AI system exploring how multiple specialized agents can work together to solve problems that would be difficult for a single agent to handle effectively. The project focuses on coordination, communication, delegation, shared state, and collective task execution.",

  problem:
    "A single AI agent may have to reason about many different responsibilities at once. Complex objectives can become difficult to manage when planning, research, execution, verification, and specialized reasoning all compete for the same context and resources.",

  objective:
    "Design a coordinated multi-agent architecture where specialized agents can receive responsibilities, communicate with one another, share relevant state, delegate tasks, verify results, and contribute toward a common objective.",

  architecture: [
    {
      title: "ORCHESTRATOR",
      description:
        "Understand the overall objective and coordinate the agents required to complete the task.",
      icon: "brain",
    },
    {
      title: "AGENTS",
      description:
        "Deploy specialized agents with clearly defined roles, capabilities, responsibilities, and reasoning contexts.",
      icon: "network",
    },
    {
      title: "DELEGATION",
      description:
        "Break complex objectives into tasks and assign each task to the agent best suited to handle it.",
      icon: "layers",
    },
    {
      title: "COMMUNICATION",
      description:
        "Allow agents to exchange information, intermediate results, requests, and observations.",
      icon: "server",
    },
    {
      title: "SHARED STATE",
      description:
        "Maintain the relevant information required for agents to understand progress and coordinate their work.",
      icon: "database",
    },
    {
      title: "VERIFICATION",
      description:
        "Evaluate agent outputs, identify inconsistencies, and verify that the collective result satisfies the original objective.",
      icon: "target",
    },
  ],

  technologies: [
    "Python",
    "LLMs",
    "Multi-Agent Systems",
    "Agent Orchestration",
    "Tool Calling",
    "Task Delegation",
    "Shared State",
    "Message Passing",
    "Evaluation",
  ],

  experiments: [
    {
      title: "Role specialization",
      description:
        "Experiment with agents designed for different responsibilities such as research, planning, coding, verification, and execution.",
    },
    {
      title: "Task delegation",
      description:
        "Investigate how a coordinating agent can decompose objectives and assign tasks according to agent capabilities.",
    },
    {
      title: "Agent communication",
      description:
        "Explore different communication patterns for exchanging information while avoiding unnecessary context and message overhead.",
    },
    {
      title: "Parallel execution",
      description:
        "Study whether independent tasks can be processed concurrently to improve overall system efficiency.",
    },
    {
      title: "Consensus and verification",
      description:
        "Experiment with mechanisms for checking outputs, resolving disagreements, and determining whether a result is sufficiently reliable.",
    },
  ],

  learning: [
    "Why multiple specialized agents can be useful for complex objectives.",
    "How agent roles and responsibilities can be defined.",
    "How delegation affects system architecture.",
    "How agents can communicate without sharing every piece of context.",
    "How shared state influences multi-agent coordination.",
    "How parallel execution can affect performance.",
    "Why verification becomes increasingly important as systems become more autonomous.",
    "How multi-agent systems differ from single-agent architectures.",
    "How coordination overhead can affect the benefits of additional agents.",
  ],

  future: [
    "Dynamic agent creation.",
    "Advanced agent orchestration.",
    "Hierarchical agent structures.",
    "Parallel task execution.",
    "Agent-to-agent negotiation.",
    "Shared long-term memory.",
    "Automatic agent evaluation.",
    "Integration with NEXUS.",
    "Integration with AI-EVAL.",
    "Integration with JARVIS.",
    "Integration with ENVIRONMENT.",
    "Integration with the broader AXON ecosystem.",
  ],

  accent: "purple",
};

export default function SwarmPage() {
  return <ProjectDetail project={project} />;
}