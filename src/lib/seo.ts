import type { Metadata } from "next";
import { COMPANY, META } from "@/lib/constants";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function absoluteUrl(path = "/") {
  if (path === "/") return COMPANY.url;
  return `${COMPANY.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  image = META.ogImage,
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: META.locale,
      siteName: META.siteName,
      title,
      description,
      url: canonical,
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: `${title} by Sentient Engineering`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: META.twitterHandle,
      images: [absoluteUrl(image)],
    },
  };
}
