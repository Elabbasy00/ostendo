import { MetadataRoute } from "next";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  return {
    name: "Ostendo | System Integration Specialists",
    start_url: "/",
    theme_color: "#101E33",
    short_name: "ostendo",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],

    background_color: "#ffffff",
    display: "standalone",
  };
}
