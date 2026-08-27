export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
  shortBio: string;
  introduction: string;
  biography: readonly string[];
  quote: string;
  focusAreas: readonly string[];
};

export const teamMembers: readonly TeamMember[] = [
  {
    slug: "michael-johnson",
    name: "Michael Johnson",
    role: "Founder & Head of Engineering",
    eyebrow: "Engineering leadership",
    image: "/images/michael-johnson.png",
    imageAlt:
      "Michael Johnson, Founder and Head of Engineering at Sentient Engineering",
    shortBio:
      "Michael defines Sentient Engineering’s engineering direction, product architecture and technical delivery across applied AI, software, cloud, data and signal intelligence.",
    introduction:
      "Michael Johnson is the Founder and Head of Engineering at Sentient Engineering, an applied AI engineering company that designs and deploys intelligent systems for practical business, scientific and engineering challenges.",
    biography: [
      "As the company’s technical leader, Michael is responsible for defining Sentient Engineering’s engineering direction, product architecture, technology strategy and standards of technical delivery. He leads the development of systems that combine artificial intelligence, software engineering, cloud infrastructure, data engineering, automation, sensing and signal processing to solve complex real-world problems.",
      "His work spans the design and development of AI-powered business platforms, intelligent process-automation systems, computer-vision applications, biometric and facial-recognition solutions, speech and audio-intelligence systems, recommendation engines, intelligent search platforms and data-driven decision-support tools. He is also advancing Sentient Engineering’s capabilities in vibration and acoustic analysis, applying FFT and STFT signal processing, sensor data, machine learning, anomaly detection and equipment-health intelligence to industrial monitoring and predictive-maintenance applications.",
      "Michael brings a multidisciplinary, systems-oriented approach to engineering. Rather than treating software, artificial intelligence, cloud infrastructure, automation and operational processes as separate disciplines, he brings them together as interconnected parts of a complete working system. His focus is not simply on building technically impressive products, but on ensuring that every system is reliable, secure, maintainable, commercially relevant and capable of producing measurable outcomes.",
      "Under his leadership, Sentient Engineering develops purpose-built systems for organisations operating across manufacturing, energy and utilities, construction and infrastructure, healthcare, scientific services, logistics and supply chain, retail, B2B commerce and professional services. These systems are designed to reduce operational friction, improve decision-making, shorten response and delivery times, strengthen process visibility, increase productivity and help organisations use their data more intelligently.",
      "Michael’s engineering philosophy is grounded in a simple principle: technology is a tool; the real product is better performance. He believes that automation should follow a disciplined process of understanding, optimising and standardising how work is done. This prevents organisations from merely automating inefficient processes and instead enables them to build operations that are simpler, faster, more accountable and easier to scale.",
      "He is particularly committed to responsible AI engineering. His approach places strong emphasis on human oversight, data protection, security, explainability, operational reliability and appropriate controls for high-impact decisions. For Michael, intelligent systems must not only be capable; they must also be trustworthy, practical and aligned with the needs of the people and organisations they serve.",
      "As a hands-on engineering leader, Michael remains closely involved throughout the product lifecycle—from research, systems analysis and architecture to development, integration, deployment, monitoring and continuous improvement. This allows him to connect high-level business objectives with the technical decisions required to transform an idea into a dependable production system.",
      "Through Sentient Engineering, Michael is working to make advanced engineering and artificial-intelligence capabilities more accessible to African businesses, industries and institutions. His long-term vision is to build an engineering company known for technical depth, disciplined execution, responsible innovation and the creation of intelligent systems that deliver enduring practical value.",
    ],
    quote: "Technology is a tool; the real product is better performance.",
    focusAreas: [
      "Applied AI and product architecture",
      "Software and cloud engineering",
      "Computer vision and biometrics",
      "Speech, audio and signal intelligence",
      "Industrial monitoring and predictive maintenance",
      "Responsible AI and technical governance",
    ],
  },
  {
    slug: "anita-adeniji",
    name: "Anita Adeniji",
    role: "Head of Customer Experience",
    eyebrow: "Customer experience leadership",
    image: "/images/anita-adeniji.png",
    imageAlt:
      "Anita Adeniji, Head of Customer Experience at Sentient Engineering",
    shortBio:
      "Anita shapes trusted client relationships and ensures that customer needs remain clear, represented and connected to meaningful outcomes throughout every engagement.",
    introduction:
      "Anita Adeniji is the Head of Customer Experience at Sentient Engineering, where she leads the company’s efforts to build trusted, responsive and enduring relationships with its clients.",
    biography: [
      "She is responsible for ensuring that every interaction with Sentient Engineering—from initial consultation and project onboarding to implementation, support and long-term engagement—reflects the company’s standards of professionalism, clarity, accountability and care.",
      "A graduate of Environmental Science, Anita brings an analytical and systems-oriented perspective to customer experience leadership. Her academic background has strengthened her understanding of interconnected systems, responsible decision-making, sustainability and the importance of balancing human needs with broader organisational and environmental considerations.",
      "Beyond her academic foundation, Anita is a serial entrepreneur and businesswoman with a practical understanding of the realities organisations face when building, operating and growing a business. Her entrepreneurial experience gives her valuable insight into customer expectations, commercial decision-making, service delivery, relationship management and the importance of creating solutions that produce genuine value.",
      "At Sentient Engineering, Anita serves as an important connection between clients and the company’s engineering teams. She works to ensure that customer needs are properly understood, clearly communicated and thoughtfully represented throughout the design and delivery of every solution. This helps the company develop systems that are not only technically capable but also intuitive, relevant, accessible and aligned with the operational realities of the people who use them.",
      "Her responsibilities include shaping the customer journey, strengthening client onboarding, coordinating customer communication, gathering and interpreting feedback, supporting service-quality improvements and helping teams respond effectively to evolving client requirements. She also contributes to customer-experience standards that make Sentient Engineering’s engagements consistent, transparent and dependable.",
      "Anita believes that exceptional customer experience begins with listening. Her approach is grounded in empathy, clear communication, responsiveness and a sincere commitment to understanding each client’s objectives. Rather than treating customer experience as a support function that begins after a product has been delivered, she views it as an essential part of product strategy, engineering delivery and long-term business success.",
      "Her commercial perspective also enables her to evaluate customer experience through the lens of measurable value. She understands that organisations invest in technology to solve meaningful problems, improve performance, reduce operational difficulty and create opportunities for sustainable growth. She therefore works to ensure that Sentient Engineering remains focused on outcomes—not simply features—and that clients understand how each solution supports their wider business objectives.",
      "As a leader, Anita brings together empathy, business awareness, discipline and a strong sense of responsibility. She advocates for the customer while maintaining the clarity and structure required to deliver complex engineering projects successfully. Her leadership helps Sentient Engineering remain attentive to the human dimension of technology: how people understand it, experience it, trust it and ultimately benefit from it.",
      "Through her work, Anita helps ensure that Sentient Engineering does more than build intelligent systems. She helps the company create meaningful customer relationships, deliver experiences worthy of trust and develop solutions that remain valuable long after implementation.",
    ],
    quote: "Exceptional customer experience begins with listening.",
    focusAreas: [
      "Customer journey and onboarding",
      "Client communication",
      "Customer feedback and insight",
      "Service-quality improvement",
      "Commercial value and outcomes",
      "Long-term customer relationships",
    ],
  },
  {
    slug: "aiyevbekpen-divine-otasowie",
    name: "Aiyevbekpen Divine Otasowie",
    role: "Software Engineer & IT Professional",
    eyebrow: "Software and infrastructure engineering",
    image: "/images/aiyevbekpen-divine-otasowie.png",
    imageAlt:
      "Aiyevbekpen Divine Otasowie, Software Engineer and IT Professional at Sentient Engineering",
    shortBio:
      "Divine contributes full-stack software, backend services, cloud infrastructure and AI-powered applications with a focus on reliability, security and maintainable delivery.",
    introduction:
      "Aiyevbekpen Divine Otasowie is a Software Engineer and IT professional with over four years of experience designing, developing and supporting scalable web applications, backend services, cloud infrastructure and AI-powered digital solutions.",
    biography: [
      "Divine brings a practical, end-to-end understanding of modern software engineering. This includes translating business and user requirements into technical specifications, designing application architecture, developing frontend and backend systems, integrating databases and external services, deploying applications to cloud environments and maintaining systems after release.",
      "With experience across full-stack development, Divine is capable of working across the different layers of a software product. This broad technical perspective supports the development of applications that are functional, secure, maintainable and prepared to scale as organisational requirements evolve.",
      "Divine’s experience in backend engineering includes building and maintaining the services, APIs, data flows and application logic that power modern digital products. Particular attention is given to system reliability, performance, data integrity, security and the quality of communication between interconnected services.",
      "In addition to conventional software systems, Divine contributes to the development of AI-powered applications that use intelligent models and data-driven capabilities to automate processes, improve decision-making, enhance user experiences and solve practical business problems. This work reflects an understanding that artificial intelligence must be thoughtfully integrated into dependable software infrastructure to deliver meaningful value.",
      "Divine also brings valuable knowledge of IT systems and cloud infrastructure management. This combination of software-development and information-technology experience supports a more complete approach to engineering—one that considers not only how an application is built, but also how it is deployed, secured, monitored, supported and maintained throughout its operational life.",
      "At Sentient Engineering, Divine contributes to the delivery of intelligent and purpose-built systems for business, scientific and engineering applications. Working within multidisciplinary project environments, Divine helps transform product requirements and technical designs into reliable software solutions that address real operational needs.",
      "A strong problem-solver, Divine approaches technical challenges with analytical thinking, attention to detail and a commitment to continuous improvement. Whether investigating system behaviour, resolving application issues, improving an existing codebase or developing a new capability, Divine focuses on identifying the underlying problem and implementing a solution that is both technically sound and practically sustainable.",
      "Divine is also experienced in agile working environments where collaboration, adaptability, clear communication and consistent delivery are essential. This includes working with technical and non-technical stakeholders, responding constructively to feedback, managing changing requirements and contributing effectively throughout the software-development lifecycle.",
      "Driven by professional growth and a commitment to engineering excellence, Divine continues to deepen expertise across software development, cloud technologies, artificial intelligence and modern IT infrastructure. The objective remains clear: to build dependable technology that solves meaningful problems, supports organisational growth and delivers lasting value.",
    ],
    quote:
      "Build dependable technology that solves meaningful problems and delivers lasting value.",
    focusAreas: [
      "Full-stack application development",
      "Backend services and APIs",
      "Cloud infrastructure and deployment",
      "AI-powered application integration",
      "System reliability and security",
      "Agile delivery and technical support",
    ],
  },
] as const;

export function getTeamMember(slug: string) {
  return teamMembers.find((member) => member.slug === slug);
}
