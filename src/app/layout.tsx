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
      image: `${META.url}${META.ogImage}`,
      description: META.description,
      slogan: "Intelligent systems for business and industry.",
      areaServed: ["Nigeria", "Africa", "Worldwide"],
      knowsAbout: [
        "Applied AI Engineering",
        "Machine Learning Engineering",
        "Intelligent Systems Engineering",
        "Computer Vision Systems",
        "Robotics and Automation Engineering",
        "AI Automation for Businesses",
        "Industrial AI Solutions",
        "Data and Decision Intelligence",
        "Operations Engineering",
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
  alternates: {
    canonical: "/",
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
    "Applied AI engineering company",
    "Machine learning engineering company",
    "Intelligent systems engineering",
    "AI solutions for business",
    "Industrial AI solutions",
    "Computer vision systems",
    "AI automation for businesses",
    "Robotics and automation engineering",
    "AI for logistics",
    "AI for manufacturing",
    "AI for healthcare",
    "AI for supply chain",
    "AI for construction",
    "Applied AI company in Nigeria",
    "AI engineering company in Africa",
    "Machine learning solutions for businesses",
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
