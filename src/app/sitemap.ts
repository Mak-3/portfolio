import type { MetadataRoute } from "next";

const SITE_URL = "https://www.mohammedabdullahkhan.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-07-18"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/accessibility-handbook`,
      lastModified: new Date("2025-11-16"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/resources`,
      lastModified: new Date("2026-09-22"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
