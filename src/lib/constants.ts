export const COMPANY = {
  name: "Sentient Engineering",
  tagline: "Applied intelligence for real operations",
  description:
    "Sentient Engineering applies AI, automation, computer vision, and data technologies to consequential business and industrial problems.",
  email: "hello@sentientengineering.com",
  phone: "",
  url: "https://sentientengineering.com",
} as const;

export const META = {
  title:
    "Sentient Engineering | Enterprise AI Engineering and Automation",
  description:
    "Sentient Engineering designs, integrates, and deploys enterprise AI and intelligent automation for real business and industrial operations.",
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
