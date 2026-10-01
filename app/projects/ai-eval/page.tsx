import {
  ProjectDetail,
  type ProjectData,
} from "@/app/projects/project-detail";

const project: ProjectData = {
  number: "04",
  name: "AI-EVAL",
  category: "RESEARCH / EVALUATION",
  status: "PLANNING",
  tagline: "Measuring intelligence instead of assuming it.",

  description:
    "AI-EVAL is an evaluation framework focused on systematically measuring the behaviour, reliability, and capabilities of intelligent systems. The project explores how AI systems can be tested using repeatable experiments instead of relying only on subjective impressions.",

  problem:
    "AI systems can appear impressive while still producing unreliable, inconsistent, or incorrect results. Without structured evaluation, it becomes difficult to understand whether a model or agent is actually improving, where it fails, and how different system configurations compare.",

  objective:
    "Build a reproducible evaluation system capable of defining test cases, executing AI systems against controlled tasks, collecting results, calculating meaningful metrics, analyzing failures, and producing reports that make system behaviour measurable.",

  architecture: [
    {
      title: "DATASET",
      description:
        "Define structured evaluation datasets containing prompts, tasks, expected behaviours, constraints, and reference answers where appropriate.",
      icon: "database",
    },
    {
      title: "TEST RUNNER",
      description:
        "Execute models and AI systems against standardized evaluation cases while keeping the experiment configuration consistent.",
      icon: "server",
    },
    {
      title: "JUDGING",
      description:
        "Analyze generated outputs using deterministic checks, reference comparisons, model-based evaluation, or task-specific criteria.",
      icon: "target",
    },
    {
      title: "METRICS",
      description:
        "Convert evaluation results into measurable signals such as accuracy, relevance, consistency, latency, and task success.",
      icon: "layers",
    },
    {
      title: "FAILURE ANALYSIS",
      description:
        "Identify recurring failure patterns and investigate where models or agent components break down.",
      icon: "network",
    },
    {
      title: "REPORTING",
      description:
        "Produce structured results that make experiments reproducible and allow different system versions to be compared.",
      icon: "sparkles",
    },
  ],

  technologies: [
    "Python",
    "Evaluation Pipelines",
    "Benchmarking",
    "Test Datasets",
    "Metrics",
    "LLM Evaluation",
    "Statistical Analysis",
    "JSON",
    "Experiment Tracking",
  ],

  experiments: [
    {
      title: "Task-based evaluation",
      description:
        "Create controlled tasks designed to measure specific capabilities instead of evaluating a model only through general conversations.",
    },
    {
      title: "Metric design",
      description:
        "Experiment with different quantitative and qualitative metrics for measuring correctness, relevance, consistency, and task completion.",
    },
    {
      title: "Model comparison",
      description:
        "Run identical evaluation cases against different models or configurations and study where their behaviours differ.",
    },
    {
      title: "Agent evaluation",
      description:
        "Evaluate complete agent workflows rather than judging only the underlying language model.",
    },
    {
      title: "Failure analysis",
      description:
        "Group and investigate unsuccessful results to identify recurring weaknesses and potential improvements.",
    },
  ],

  learning: [
    "Why evaluation is essential when building AI systems.",
    "How benchmarks can measure specific capabilities.",
    "How evaluation datasets should be designed.",
    "Why a single metric rarely describes an entire AI system.",
    "How deterministic and model-based evaluation differ.",
    "How to evaluate agent behaviour and task completion.",
    "How reproducibility improves AI experimentation.",
    "How failure analysis can guide system development.",
    "Why evaluation should happen continuously throughout development.",
  ],

  future: [
    "Large evaluation datasets.",
    "Automated evaluation pipelines.",
    "Custom benchmark suites.",
    "Agent trajectory evaluation.",
    "Safety and reliability evaluation.",
    "Regression testing for AI systems.",
    "Integration with MODEL-SERVE.",
    "Evaluation of NEXUS agents.",
    "Evaluation of JARVIS.",
    "Integration with the broader AXON ecosystem.",
  ],

  accent: "purple",
};

export default function AiEvalPage() {
  return <ProjectDetail project={project} />;
}