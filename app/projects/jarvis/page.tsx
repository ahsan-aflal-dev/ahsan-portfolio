import {
  ProjectDetail,
  type ProjectData,
} from "@/app/projects/project-detail";

const project: ProjectData = {
  number: "06",
  name: "JARVIS",
  category: "PERSONAL AI SYSTEM",
  status: "LONG TERM",
  tagline: "An intelligent system built around its human.",

  description:
    "JARVIS is a long-term personal AI project focused on building a persistent, adaptive assistant that can understand requests, reason about tasks, remember useful information, use tools, interact with software, and gradually become a more capable personal computing system.",

  problem:
    "Most AI assistants are designed around individual conversations or isolated commands. They often lack persistent memory, meaningful task continuity, reliable tool execution, and the ability to interact deeply with the user's computing environment.",

  objective:
    "Build a local-first personal AI architecture that combines reasoning, persistent memory, skills, tools, planning, automation, voice interaction, and environmental awareness into one modular intelligent system.",

  architecture: [
    {
      title: "HERMES",
      description:
        "Provide the primary reasoning layer responsible for understanding requests, deciding what needs to happen, and coordinating the system.",
      icon: "brain",
    },
    {
      title: "MEMORY",
      description:
        "Maintain persistent knowledge and useful context so the system can remember information across conversations and tasks.",
      icon: "database",
    },
    {
      title: "SKILLS",
      description:
        "Organize reusable capabilities that allow JARVIS to perform specialized tasks instead of relying only on general reasoning.",
      icon: "layers",
    },
    {
      title: "TOOLS",
      description:
        "Connect reasoning with software, APIs, files, applications, system operations, and other executable capabilities.",
      icon: "server",
    },
    {
      title: "AUTOMATION",
      description:
        "Execute multi-step workflows across the computer and connected applications while tracking the state of each task.",
      icon: "network",
    },
    {
      title: "INTERACTION",
      description:
        "Provide natural interfaces through text and voice while maintaining continuity between interactions.",
      icon: "sparkles",
    },
  ],

  technologies: [
    "Python",
    "Local LLMs",
    "Ollama",
    "Agent Architecture",
    "Persistent Memory",
    "Tool Calling",
    "Automation",
    "FastAPI",
    "Voice Interfaces",
  ],

  experiments: [
    {
      title: "Reasoning architecture",
      description:
        "Experiment with a dedicated reasoning layer capable of interpreting user requests and coordinating downstream capabilities.",
    },
    {
      title: "Persistent memory",
      description:
        "Investigate how conversations, preferences, tasks, and useful information can be stored and retrieved across sessions.",
    },
    {
      title: "Skill system",
      description:
        "Design modular skills that allow JARVIS to gain new capabilities without rebuilding the entire core architecture.",
    },
    {
      title: "Tool execution",
      description:
        "Explore reliable tool selection and execution for tasks involving files, applications, APIs, and the local computing environment.",
    },
    {
      title: "Computer automation",
      description:
        "Experiment with controlled workflows that allow JARVIS to interact with applications and perform multi-step tasks.",
    },
    {
      title: "Voice interaction",
      description:
        "Investigate speech input and output as a natural interface while maintaining the same underlying reasoning and memory architecture.",
    },
  ],

  learning: [
    "How multiple AI components can form one personal system.",
    "How persistent memory changes the behaviour of an assistant.",
    "How reasoning can be separated from tools and execution.",
    "How modular skills allow an AI system to expand over time.",
    "How AI agents can interact with a real computing environment.",
    "Why tool reliability is critical for autonomous systems.",
    "How local models can support privacy-oriented AI systems.",
    "How voice interfaces can connect humans with agent architectures.",
    "How long-running AI systems require state, memory, and recovery mechanisms.",
  ],

  future: [
    "More capable local reasoning models.",
    "Advanced persistent memory.",
    "Adaptive personality and interaction.",
    "Expanded skill library.",
    "Reliable computer automation.",
    "Voice-first interaction.",
    "Environmental awareness.",
    "Integration with MEMORA.",
    "Integration with NEXUS.",
    "Integration with SWARM.",
    "Integration with ENVIRONMENT.",
    "Integration with the broader AXON ecosystem.",
  ],

  accent: "purple",
};

export default function JarvisPage() {
  return <ProjectDetail project={project} />;
}