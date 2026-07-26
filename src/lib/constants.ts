export const COMPANY = {
  name: "Sentient Engineering",
  businessType: "Applied AI Engineering Company",
  tagline: "Applied AI. Engineered for reality.",
  description:
    "Sentient Engineering is an Applied AI engineering company that builds intelligent business systems, AI agents, process automation, computer vision and industrial AI solutions.",
  email: "hello@sentientengineering.com.ng",
  emailHref: "mailto:hello@sentientengineering.com.ng",
  phone: "+234 707 351 2305",
  phoneHref: "tel:+2347073512305",
  location: "Lagos, Nigeria",
  whatsappMessage:
    "Hello Sentient Engineering, I would like to discuss an AI engineering project for my business.",
  whatsappHref:
    "https://wa.me/2347073512305?text=Hello%20Sentient%20Engineering%2C%20I%20would%20like%20to%20discuss%20an%20AI%20engineering%20project%20for%20my%20business.",
  url: "https://sentientengineering.com.ng",
} as const;

export const META = {
  title: "Sentient Engineering | Applied AI Engineering Company in Nigeria",
  description:
    "Sentient Engineering is an Applied AI engineering company in Lagos, Nigeria. We build AI agents, intelligent business systems, process automation, computer vision and industrial AI solutions.",
  siteName: "Sentient Engineering",
  url: COMPANY.url,
  locale: "en_NG",
  ogImage: "/og.png",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
