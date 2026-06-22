import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { META } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${META.url}/#organization`,
      name: META.siteName,
      url: META.url,
      logo: `${META.url}/sentientlogo-wordmark.png`,
      description: META.description,
      slogan: "Automation that keeps business moving.",
      knowsAbout: [
        "Business Process Automation",
        "Workflow Automation",
        "AI Assistants",
        "Operational Dashboards",
        "Systems Integration",
        "Managed Automation",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${META.url}/#professional-service`,
      name: META.siteName,
      url: META.url,
      image: `${META.url}/sentientlogo-wordmark.png`,
      description: META.description,
      areaServed: ["Nigeria", "Africa", "Worldwide"],
      serviceType: "Business Process Automation",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${META.url}/#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: META.url,
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: META.title,
    template: "%s | Sentient Engineering",
  },
  description: META.description,
  metadataBase: new URL(META.url),
  openGraph: {
    type: "website",
    locale: META.locale,
    siteName: META.siteName,
    title: META.title,
    description: META.description,
    url: META.url,
    images: [
      {
        url: "/sentientlogo-wordmark.png",
        width: 890,
        height: 230,
        alt: "Sentient Engineering wordmark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META.title,
    description: META.description,
    creator: META.twitterHandle,
    images: ["/sentientlogo-wordmark.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  keywords: [
    "Operations Engineering",
    "Business Operations",
    "Operational Efficiency",
    "Business Performance",
    "Process Improvement",
    "Process Optimization",
    "Business Process Automation",
    "Workflow Automation",
    "AI for Business",
    "AI Automation",
    "Custom Software Development",
    "Data Analytics",
    "Business Intelligence",
    "Operational Dashboards",
    "Business Systems",
    "Operational Excellence",
    "Lean Operations",
    "Systems Integration",
    "Business Process Management",
    "Operations Management",
    "Digital Transformation",
    "SME Operations",
    "Business Optimization",
    "Operations Strategy",
    "Nigeria",
    "Africa",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
