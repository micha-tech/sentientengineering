import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/constants";
import {
  industryLandingPages,
  serviceLandingPages,
} from "@/lib/seo-landing-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: COMPANY.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${COMPANY.url}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${COMPANY.url}/products`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${COMPANY.url}/industries`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceLandingPages.map(
    (service) => ({
      url: `${COMPANY.url}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  const industryPages: MetadataRoute.Sitemap = industryLandingPages.map(
    (industry) => ({
      url: `${COMPANY.url}/industries/${industry.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  return [...staticPages, ...servicePages, ...industryPages];
}
