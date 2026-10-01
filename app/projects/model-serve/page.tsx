import {
  ProjectDetail,
  type ProjectData,
} from "@/app/projects/project-detail";

const project: ProjectData = {
  number: "05",
  name: "MODEL-SERVE",
  category: "AI INFRASTRUCTURE",
  status: "PLANNING",
  tagline: "Turning models into usable systems.",

  description:
    "MODEL-SERVE is an AI infrastructure project focused on taking trained or locally available models and turning them into reliable, accessible services. The project explores the engineering layer between an AI model and the applications that need to use it.",

  problem:
    "A model by itself is not a complete product. Applications need reliable inference endpoints, input validation, request handling, model lifecycle management, monitoring, and predictable interfaces. Without this layer, integrating AI models into real software becomes difficult to maintain and scale.",

  objective:
    "Build a modular model-serving system that can load models, expose inference through APIs, manage requests, measure performance, handle failures, and provide a clean foundation for AI-powered applications.",

  architecture: [
    {
      title: "MODEL",
      description:
        "Load and initialize an AI model together with its required configuration, tokenizer, weights, and runtime dependencies.",
      icon: "brain",
    },
    {
      title: "RUNTIME",
      description:
        "Provide the execution environment responsible for processing inference requests efficiently and consistently.",
      icon: "server",
    },
    {
      title: "API",
      description:
        "Expose a structured interface that allows applications and other services to communicate with the model.",
      icon: "network",
    },
    {
      title: "QUEUE",
      description:
        "Manage incoming inference requests and control how work is scheduled and processed by the model runtime.",
      icon: "layers",
    },
    {
      title: "MONITORING",
      description:
        "Track latency, throughput, failures, resource usage, and other signals that describe system behaviour.",
      icon: "target",
    },
    {
      title: "CLIENT",
      description:
        "Provide a predictable interface through which applications, agents, and other systems can consume model capabilities.",
      icon: "sparkles",
    },
  ],

  technologies: [
    "Python",
    "FastAPI",
    "PyTorch",
    "REST APIs",
    "Model Runtime",
    "Inference",
    "JSON",
    "Async Processing",
    "Monitoring",
  ],

  experiments: [
    {
      title: "Inference API",
      description:
        "Build a simple inference endpoint and investigate how model inputs and outputs can be exposed through a clean API contract.",
    },
    {
      title: "Model loading",
      description:
        "Experiment with loading and initializing different local models while studying memory requirements and startup behaviour.",
    },
    {
      title: "Latency measurement",
      description:
        "Measure request latency, generation speed, and overall response time under different inference configurations.",
    },
    {
      title: "Concurrent requests",
      description:
        "Investigate how multiple requests affect throughput, resource utilization, and model responsiveness.",
    },
    {
      title: "Failure handling",
      description:
        "Explore validation, timeouts, malformed requests, model failures, and other conditions that can occur during inference.",
    },
  ],

  learning: [
    "How AI models become usable services.",
    "How inference differs from model training.",
    "How APIs can expose model capabilities to applications.",
    "How request validation improves reliability.",
    "How latency and throughput affect AI applications.",
    "How model memory requirements influence infrastructure design.",
    "How asynchronous processing can improve service behaviour.",
    "Why monitoring is important for AI infrastructure.",
    "How serving infrastructure connects models with larger intelligent systems.",
  ],

  future: [
    "Multiple model backends.",
    "Dynamic model loading.",
    "Streaming inference.",
    "Request batching.",
    "GPU-aware scheduling.",
    "Model version management.",
    "Performance benchmarking.",
    "Integration with AI-EVAL.",
    "Integration with NEXUS.",
    "Integration with the broader AXON ecosystem.",
  ],

  accent: "purple",
};

export default function ModelServePage() {
  return <ProjectDetail project={project} />;
}