export const COMPANY = {
  name: "Sentient Engineering",
  businessType: "Applied AI Engineering Company",
  tagline: "Applied AI Engineering for Business, Science and Industry.",
  description:
    "Sentient Engineering is an Applied AI engineering company that builds complete intelligent systems for business operations, scientific applications and engineering environments.",
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
    "Applied AI engineering for business, science and industry. Sentient Engineering builds business systems, computer vision, speech, signal intelligence and industrial AI in Lagos, Nigeria.",
  siteName: "Sentient Engineering",
  url: COMPANY.url,
  locale: "en_NG",
  ogImage: "/og.png",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Products", href: "/products" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
] as const;
