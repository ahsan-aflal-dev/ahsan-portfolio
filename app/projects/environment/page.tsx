import {
  ProjectDetail,
  type ProjectData,
} from "@/app/projects/project-detail";

const project: ProjectData = {
  number: "08",
  name: "ENVIRONMENT",
  category: "AGENT ENVIRONMENT",
  status: "FUTURE",
  tagline: "Where intelligence learns through interaction.",

  description:
    "ENVIRONMENT is an experimental platform for studying intelligent systems inside interactive environments. Instead of evaluating an agent only through isolated prompts, the project explores how an agent can perceive a changing environment, take actions, observe consequences, learn from feedback, and improve its behaviour over time.",

  problem:
    "Intelligent behaviour becomes more complex when an AI system must operate inside an environment rather than simply generate a response. The system needs to understand state, choose actions, deal with consequences, recover from mistakes, and adapt as the environment changes.",

  objective:
    "Create a controlled environment where AI agents can interact with simulated or real-world tasks, receive observations and feedback, execute actions, maintain state, and be evaluated on their ability to achieve objectives through interaction.",

  architecture: [
    {
      title: "ENVIRONMENT",
      description:
        "Define the world, available resources, rules, state, constraints, and events that the agent can encounter.",
      icon: "layers",
    },
    {
      title: "OBSERVATION",
      description:
        "Convert the current environment state into information that the agent can understand and reason about.",
      icon: "brain",
    },
    {
      title: "DECISION",
      description:
        "Use reasoning and planning to determine which action should be taken based on the current objective and observed state.",
      icon: "target",
    },
    {
      title: "ACTION",
      description:
        "Execute an action inside the environment and record what the agent attempted to do.",
      icon: "network",
    },
    {
      title: "FEEDBACK",
      description:
        "Capture the consequences of actions, including rewards, failures, state changes, and other environmental signals.",
      icon: "sparkles",
    },
    {
      title: "LEARNING",
      description:
        "Analyze experience and feedback to improve future decisions, strategies, and agent behaviour.",
      icon: "database",
    },
  ],

  technologies: [
    "Python",
    "Agent Systems",
    "Simulation",
    "Reinforcement Learning Concepts",
    "State Management",
    "Planning",
    "Tool Execution",
    "Evaluation",
    "Environment Design",
  ],

  experiments: [
    {
      title: "Environment design",
      description:
        "Create controlled environments with explicit states, actions, rules, objectives, and constraints for repeatable experimentation.",
    },
    {
      title: "State representation",
      description:
        "Investigate how an environment should represent its state so that an agent receives enough information to make useful decisions.",
    },
    {
      title: "Action selection",
      description:
        "Study how agents choose actions when multiple possible paths can lead toward the same objective.",
    },
    {
      title: "Feedback loops",
      description:
        "Explore how environmental consequences can influence subsequent reasoning and decision-making.",
    },
    {
      title: "Agent adaptation",
      description:
        "Experiment with how an agent can adjust its strategy after encountering failures, unexpected states, or changing conditions.",
    },
  ],

  learning: [
    "Why interaction creates different challenges from static prompt-response tasks.",
    "How environments can provide structured state and feedback.",
    "How agents perceive and act within a changing system.",
    "How action consequences influence future decisions.",
    "How state representation affects agent performance.",
    "How planning and adaptation work together.",
    "How controlled environments can make agent research reproducible.",
    "Why feedback is important for autonomous behaviour.",
    "How environment-based experiments can reveal limitations that ordinary benchmarks may miss.",
  ],

  future: [
    "More complex simulated environments.",
    "Persistent world state.",
    "Multiple interacting agents.",
    "Dynamic objectives.",
    "Reward and feedback systems.",
    "Long-horizon tasks.",
    "Agent learning experiments.",
    "Integration with SWARM.",
    "Integration with NEXUS.",
    "Integration with AI-EVAL.",
    "Integration with JARVIS.",
    "Integration with the broader AXON ecosystem.",
  ],

  accent: "purple",
};

export default function EnvironmentPage() {
  return <ProjectDetail project={project} />;
}