import { MetadataRoute } from "next";

// Define all site URLs
const siteUrls = ["/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.FRONTEND_URL;
  const lastModified = new Date();

  return siteUrls.map((url) => ({
    url: `${baseUrl}${url}`,
    lastModified,
    changeFrequency: "monthly",
    priority: url === "/" ? 1 : 0.8,
  }));
}
