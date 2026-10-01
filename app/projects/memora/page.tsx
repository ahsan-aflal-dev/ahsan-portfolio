import {
  ProjectDetail,
  type ProjectData,
} from "@/app/projects/project-detail";

const project: ProjectData = {
  number: "02",
  name: "MEMORA",
  category: "MEMORY SYSTEM",
  status: "PLANNING",
  tagline: "Giving intelligent systems a memory.",

  description:
    "MEMORA is a long-term memory system designed to explore how intelligent systems can store, retrieve, organize, and use information across interactions. The project focuses on building memory as an engineering system rather than treating it as a simple database feature.",

  problem:
    "Most AI interactions are isolated. Without persistent memory, an intelligent system can lose important context between sessions, repeat information, and struggle to build a useful understanding of the user or environment.",

  objective:
    "Design and implement a persistent memory architecture that can store information, create useful representations, retrieve relevant memories, manage context, and provide an intelligent system with long-term continuity.",

  architecture: [
    {
      title: "INPUT",
      description:
        "Capture information from conversations, events, tasks, observations, and other system interactions.",
      icon: "database",
    },
    {
      title: "PROCESSING",
      description:
        "Clean, structure, classify, and prepare incoming information before it becomes a memory.",
      icon: "layers",
    },
    {
      title: "EMBEDDINGS",
      description:
        "Transform meaningful information into numerical representations that can be compared semantically.",
      icon: "brain",
    },
    {
      title: "MEMORY STORE",
      description:
        "Persist memories using structured storage while maintaining relationships between different pieces of information.",
      icon: "database",
    },
    {
      title: "RETRIEVAL",
      description:
        "Search for relevant memories using semantic similarity, metadata, recency, and contextual relevance.",
      icon: "network",
    },
    {
      title: "CONTEXT",
      description:
        "Select and assemble useful memories so an intelligent system can use them during reasoning and generation.",
      icon: "server",
    },
  ],

  technologies: [
    "Python",
    "SQLite",
    "Embeddings",
    "Vector Search",
    "FastAPI",
    "LLMs",
    "Semantic Retrieval",
    "Metadata Filtering",
    "Memory Ranking",
  ],

  experiments: [
    {
      title: "Memory representation",
      description:
        "Experiment with different ways of representing conversations, facts, events, preferences, and system experiences as persistent memories.",
    },
    {
      title: "Semantic retrieval",
      description:
        "Compare semantic similarity approaches for finding memories that are relevant to the current context rather than relying only on keyword matching.",
    },
    {
      title: "Memory ranking",
      description:
        "Investigate how relevance, recency, importance, and contextual relationships can influence which memories are retrieved.",
    },
    {
      title: "Context injection",
      description:
        "Study how retrieved memories can be transformed into useful context without overwhelming the reasoning system.",
    },
    {
      title: "Memory lifecycle",
      description:
        "Explore how memories can be created, updated, reinforced, merged, archived, or forgotten over time.",
    },
  ],

  learning: [
    "How persistent memory can be designed for intelligent systems.",
    "How embeddings enable semantic representations.",
    "How vector search can retrieve related information.",
    "Why retrieval quality matters for AI systems.",
    "How metadata can improve semantic retrieval.",
    "How memory relevance changes with context.",
    "How retrieved information can be incorporated into an LLM context.",
    "Why memory management is different from simply storing data.",
    "How persistent memory can support long-running AI agents.",
  ],

  future: [
    "Multiple memory types.",
    "Short-term and long-term memory separation.",
    "Memory importance scoring.",
    "Automatic memory consolidation.",
    "Memory summarization.",
    "Memory conflict resolution.",
    "Improved retrieval and ranking.",
    "Integration with NEXUS.",
    "Integration with JARVIS.",
    "Integration with the broader AXON ecosystem.",
  ],

  accent: "purple",
};

export default function MemoraPage() {
  return <ProjectDetail project={project} />;
}