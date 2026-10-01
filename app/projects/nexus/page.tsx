import {
  ProjectDetail,
  type ProjectData,
} from "@/app/projects/project-detail";

const project: ProjectData = {
  number: "03",
  name: "NEXUS",
  category: "AGENT SYSTEM",
  status: "PLANNING",
  tagline: "Connecting intelligence to action.",

  description:
    "NEXUS is an agent architecture focused on turning intelligence into purposeful action. It explores how an AI system can understand a goal, reason about what needs to happen, select appropriate tools, execute actions, observe results, and continue until the objective is reached.",

  problem:
    "A language model can generate useful responses, but reasoning alone does not create an autonomous system. An intelligent agent needs a structured way to plan, use tools, observe its environment, maintain state, recover from failures, and adapt its actions based on results.",

  objective:
    "Build a modular agent system that connects reasoning with planning, tool selection, execution, observation, memory, and state management while keeping each component understandable, testable, and replaceable.",

  architecture: [
    {
      title: "GOAL",
      description:
        "Receive a high-level objective and transform it into a structured representation that the agent can reason about.",
      icon: "target",
    },
    {
      title: "REASONING",
      description:
        "Analyze the objective, available information, constraints, and current state to determine what should happen next.",
      icon: "brain",
    },
    {
      title: "PLANNING",
      description:
        "Break complex objectives into smaller actionable steps and determine an execution sequence.",
      icon: "layers",
    },
    {
      title: "TOOLS",
      description:
        "Select and invoke appropriate tools, APIs, functions, or external capabilities required to complete a task.",
      icon: "server",
    },
    {
      title: "EXECUTION",
      description:
        "Carry out planned actions while tracking inputs, outputs, failures, and intermediate state.",
      icon: "network",
    },
    {
      title: "OBSERVATION",
      description:
        "Inspect the results of actions and feed new information back into the reasoning loop for adaptation.",
      icon: "sparkles",
    },
  ],

  technologies: [
    "Python",
    "LLMs",
    "Agent Architecture",
    "Tool Calling",
    "Planning",
    "State Management",
    "FastAPI",
    "Memory",
    "Function Execution",
  ],

  experiments: [
    {
      title: "Goal decomposition",
      description:
        "Explore different strategies for breaking high-level objectives into smaller, measurable actions.",
    },
    {
      title: "Tool selection",
      description:
        "Investigate how an agent can determine which tool is appropriate for a particular step and when a tool should not be used.",
    },
    {
      title: "Planning strategies",
      description:
        "Compare sequential planning, dynamic planning, and replanning when the environment changes during execution.",
    },
    {
      title: "Observation loops",
      description:
        "Study how execution results can influence subsequent reasoning instead of forcing an agent to follow a fixed plan.",
    },
    {
      title: "Failure recovery",
      description:
        "Experiment with detecting failed actions, understanding failure causes, and generating alternative execution strategies.",
    },
  ],

  learning: [
    "How an LLM can become part of a larger agent architecture.",
    "Why reasoning and execution need to be separated.",
    "How planning can decompose complex objectives.",
    "How tools extend an AI system beyond text generation.",
    "How state allows agents to maintain task continuity.",
    "Why observation is essential for autonomous behaviour.",
    "How agents can recover from failed actions.",
    "How modular architecture makes agent systems easier to test and evolve.",
    "Why reliable tool execution is as important as reasoning quality.",
  ],

  future: [
    "Persistent agent state.",
    "Integration with MEMORA.",
    "Advanced planning strategies.",
    "Parallel tool execution.",
    "Agent evaluation through AI-EVAL.",
    "Multi-agent coordination through SWARM.",
    "Environment interaction through ENVIRONMENT.",
    "Integration with JARVIS.",
    "Integration with the broader AXON ecosystem.",
  ],

  accent: "purple",
};

export default function NexusPage() {
  return <ProjectDetail project={project} />;
}