import type { MetadataRoute } from "next";

const siteUrl = "https://ahsan-aflal-dev.vercel.app";

const projects = [
  "ahsan-gpt",
  "memora",
  "nexus",
  "ai-eval",
  "model-serve",
  "jarvis",
  "swarm",
  "environment",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/vision",
    "/journey",
    "/projects",
    "/skills",
    "/research",
    "/axon",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency:
        route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.7,
    })),

    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}