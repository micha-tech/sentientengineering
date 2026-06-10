import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { META } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Sentient Engineering",
    default: META.title,
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
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sentient Engineering - Engineering Better Operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META.title,
    description: META.description,
    site: META.twitterHandle,
    creator: META.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "operations consulting",
    "operational efficiency consulting",
    "business process optimization",
    "workflow automation",
    "operations engineering",
    "business systems engineering",
    "operational excellence",
    "business process improvement",
    "digital transformation consulting",
    "process automation",
    "operational performance improvement",
    "cost optimization consulting",
    "technology strategy consulting",
    "custom business systems",
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
      className={`${inter.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${META.url}/#organization`,
                  name: META.siteName,
                  url: META.url,
                  description: META.description,
                  logo: `${META.url}/logo.png`,
                  sameAs: ["#"],
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "London",
                    addressCountry: "GB",
                  },
                },
                {
                  "@type": "ProfessionalService",
                  "@id": `${META.url}/#professional-service`,
                  name: META.siteName,
                  url: META.url,
                  description: META.description,
                  areaServed: "Worldwide",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Operations Engineering Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Operational Excellence Audits",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Workflow & Process Optimization",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Business Systems Engineering",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Automation & Intelligent Operations",
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "FAQPage",
                  "@id": `${META.url}/#faq`,
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "What exactly is operations engineering?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Operations engineering is the discipline of analyzing business operations, identifying inefficiencies, and engineering systems combining process design, technology, and automation to improve performance.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How is Sentient Engineering different from a software agency?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "A software agency starts with technology. We start with operations. Technology is one of many tools used to solve operational problems.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What is an Operations Audit and how does it work?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "An Operations Audit is a structured analysis of your business operations. We interview stakeholders, map processes, analyze data, and identify inefficiencies with quantified business impact.",
                      },
                    },
                  ],
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${META.url}/#breadcrumb`,
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
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background font-sans">
        {children}
      </body>
    </html>
  );
}
