import {
  ProjectDetail,
  type ProjectData,
} from "@/app/projects/project-detail";

const project: ProjectData = {
  number: "01",
  name: "AHSAN-GPT",
  category: "FOUNDATIONAL LLM SYSTEM",
  status: "PLANNING",
  tagline: "Understanding how language models work from the inside.",
  description:
    "AHSAN-GPT is a long-term learning project focused on understanding language models by progressively building the underlying components rather than treating an API as a black box.",
  problem:
    "Modern AI applications make it easy to call powerful language models without understanding the systems underneath them. That abstraction is useful for shipping products, but it can hide the mechanics that an AI / ML engineer needs to understand.",
  objective:
    "Build a progressively capable language model system while studying the mathematics, data pipeline, tokenization, embeddings, attention, transformer architecture, training process, inference, evaluation, and optimization behind it.",
  architecture: [
    {
      title: "DATA",
      description:
        "Collect, clean, normalize, and prepare a manageable text corpus for experimentation.",
      icon: "database",
    },
    {
      title: "TOKENIZATION",
      description:
        "Convert raw language into representations that a neural network can process.",
      icon: "layers",
    },
    {
      title: "EMBEDDINGS",
      description:
        "Represent tokens in a learned numerical space where relationships can emerge.",
      icon: "brain",
    },
    {
      title: "TRANSFORMER",
      description:
        "Implement the core attention-based architecture used by modern language models.",
      icon: "network",
    },
    {
      title: "TRAINING",
      description:
        "Train the model, monitor loss, experiment with hyperparameters, and study convergence.",
      icon: "flask",
    },
    {
      title: "INFERENCE",
      description:
        "Generate text autoregressively and investigate sampling, context, and decoding.",
      icon: "server",
    },
  ],
  technologies: [
    "Python",
    "NumPy",
    "PyTorch",
    "Tokenization",
    "Embeddings",
    "Attention",
    "Transformers",
    "Gradient Descent",
    "GPU Computing",
  ],
  experiments: [
    {
      title: "Tokenization experiments",
      description:
        "Compare different tokenization strategies and observe how vocabulary design affects sequence representation.",
    },
    {
      title: "Attention implementation",
      description:
        "Implement attention mechanisms manually before relying on higher-level framework abstractions.",
    },
    {
      title: "Model scaling",
      description:
        "Experiment with model dimensions, depth, context length, and training configuration.",
    },
    {
      title: "Training behaviour",
      description:
        "Track loss curves and investigate the relationship between data, optimization, capacity, and generalization.",
    },
  ],
  learning: [
    "How language becomes numerical data.",
    "How embeddings represent information.",
    "Why attention works.",
    "How transformers process sequences.",
    "How gradient-based optimization trains neural networks.",
    "How inference and decoding affect generated output.",
    "Why evaluation matters when building generative systems.",
  ],
  future: [
    "Larger and cleaner datasets.",
    "Improved tokenizer experiments.",
    "More capable transformer architectures.",
    "Instruction tuning experiments.",
    "Evaluation benchmarks.",
    "Efficient inference.",
    "Integration with the broader AXON ecosystem.",
  ],
  accent: "purple",
};

export default function AhsanGptPage() {
  return <ProjectDetail project={project} />;
}