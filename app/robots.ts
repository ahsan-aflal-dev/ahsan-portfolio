import type { MetadataRoute } from "next";

const siteUrl = "https://ahsan-aflal-dev.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/_next/",
      ],
    },

    sitemap: `${siteUrl}/sitemap.xml`,
  };
}