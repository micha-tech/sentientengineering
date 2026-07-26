import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/diagnostic"],
    },
    sitemap: `${COMPANY.url}/sitemap.xml`,
    host: COMPANY.url,
  };
}
