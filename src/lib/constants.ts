export const COMPANY = {
  name: "Sentient Engineering",
  tagline: "Applied AI. Engineered for reality.",
  description:
    "Sentient Engineering designs, builds, deploys, and manages applied AI systems for businesses and industries.",
  email: "hello@sentientengineering.com",
  phone: "",
  url: "https://sentientengineering.com.ng",
} as const;

export const META = {
  title: "Sentient Engineering | Applied AI Engineering Company",
  description:
    "Sentient Engineering designs, builds, deploys, and manages applied AI systems, intelligent automation, computer vision, enterprise AI, document intelligence, and AI-powered business platforms.",
  siteName: "Sentient Engineering",
  url: COMPANY.url,
  locale: "en_US",
  twitterHandle: "@sentienteng",
  ogImage: "/og.png",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;
