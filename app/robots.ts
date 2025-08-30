import type { MetadataRoute } from "next";
import { siteUrl } from "./constants/profile";

export const dynamic = "force-static";

// Sub-projects deployed under this domain, each publishing its own sitemap.
const subProjects = [
  "tools",
  "qr",
  "shrink-image",
  "split-bill",
  "uuid",
  "datetime",
  "flutter_bloc_cubit_create",
  "aes256",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: [
      `${siteUrl}/sitemap.xml`,
      ...subProjects.map((path) => `${siteUrl}/${path}/sitemap.xml`),
    ],
    host: siteUrl,
  };
}
