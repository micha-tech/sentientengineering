import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { COMPANY, META } from "@/lib/constants";

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
      image: `${META.url}${META.ogImage}`,
      description: META.description,
      slogan: COMPANY.tagline,
      areaServed: ["Nigeria", "Africa", "Worldwide"],
      knowsAbout: [
        "Applied AI Engineering",
        "Machine Learning Engineering",
        "Intelligent Systems Engineering",
        "Computer Vision Systems",
        "Robotics and Automation Engineering",
        "AI Automation for Businesses",
        "Industrial AI Solutions",
        "Document Intelligence",
        "Enterprise Knowledge Systems",
        "AI Infrastructure and MLOps",
        "Managed AI Operations",
        "Data and Decision Intelligence",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${META.url}/#website`,
      name: META.siteName,
      url: META.url,
      description: META.description,
      publisher: {
        "@id": `${META.url}/#organization`,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${META.url}/#professional-service`,
      name: META.siteName,
      url: META.url,
      image: `${META.url}${META.ogImage}`,
      description: META.description,
      areaServed: ["Nigeria", "Africa", "Worldwide"],
      serviceType: [
        "Applied AI engineering",
        "Machine learning engineering",
        "Computer vision systems",
        "Robotics and automation engineering",
        "Intelligent systems engineering",
        "Document intelligence",
        "Enterprise AI systems",
        "Managed AI operations",
      ],
      provider: {
        "@id": `${META.url}/#organization`,
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${META.url}/#gyptiq`,
      name: "Gyptiq",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Gyptiq is Sentient Engineering's AI-powered business companion for customer conversations, sales workflows, payments, appointments, and business operations.",
      image: `${META.url}/images/gyptiq-wordmark-light.png`,
      publisher: {
        "@id": `${META.url}/#organization`,
      },
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
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: META.locale,
    siteName: META.siteName,
    title: META.title,
    description: META.description,
    url: META.url,
    images: [
      {
        url: META.ogImage,
        width: 1200,
        height: 630,
        alt: "Applied AI engineering systems by Sentient Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META.title,
    description: META.description,
    creator: META.twitterHandle,
    images: [META.ogImage],
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
    "Applied AI engineering",
    "AI engineering company",
    "Artificial intelligence solutions",
    "Intelligent automation",
    "Computer vision engineering",
    "Enterprise AI systems",
    "AI business systems",
    "Document intelligence",
    "Predictive AI",
    "AI operations",
    "AI engineering Nigeria",
    "Applied AI Africa",
    "Intelligent systems engineering",
    "Computer vision systems",
    "Enterprise knowledge systems",
    "AI infrastructure and MLOps",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} h-full antialiased`}
    >
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
