export const COMPANY = {
  name: "Sentient Engineering",
  tagline: "Intelligent systems for business and industry",
  description:
    "Sentient Engineering designs and deploys applied AI, machine learning, computer vision, robotics, automation, data intelligence, and intelligent systems for businesses and industries.",
  email: "hello@sentientengineering.com",
  phone: "",
  url: "https://sentientengineering.com",
} as const;

export const META = {
  title:
    "Sentient Engineering | Applied AI, Machine Learning and Intelligent Systems",
  description:
    "Sentient Engineering designs applied AI, machine learning, computer vision, robotics, automation, and intelligent systems for businesses and industries.",
  siteName: "Sentient Engineering",
  url: COMPANY.url,
  locale: "en_US",
  twitterHandle: "@sentienteng",
  ogImage: "/sentientlogo-wordmark.png",
} as const;

export const NAV_LINKS = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Industries", href: "#industries" },
  { label: "Gyptiq", href: "#gyptiq" },
  { label: "Company", href: "#company" },
  { label: "Contact", href: "#contact" },
] as const;
