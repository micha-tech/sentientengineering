export type ServiceDomain = "business" | "engineering";

export type ServiceSection = {
  title: string;
  copy: string;
  items: readonly string[];
};

export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  heading: string;
  description: string;
  kicker: string;
  domain: ServiceDomain;
  image: string;
  imageAlt: string;
  challenge: string;
  approach: string;
  useCases: readonly string[];
  outcomes: readonly string[];
  integrations: readonly string[];
  pipeline: readonly string[];
  sections: readonly ServiceSection[];
  related: readonly { href: string; label: string }[];
  note?: string;
};

export const servicePages = [
  {
    slug: "business-systems-automation",
    title: "AI Business Process Automation",
    shortTitle: "Business systems and automation",
    heading: "AI-powered systems that remove operational friction.",
    description:
      "Business process automation that connects sales, administration, inventory and procurement workflows to route approvals, update records and reduce manual work.",
    kicker: "Sales, operations and administration",
    domain: "business",
    image: "/images/automation-hero-banner.png",
    imageAlt:
      "Connected business workflow showing sales, approvals and operations automation",
    challenge:
      "Teams lose time and revenue when customer requests, approvals, documents and operational updates move manually between disconnected tools. The result is slow response, repeated data entry and limited management visibility.",
    approach:
      "We map the complete workflow, identify decisions that require intelligence, and connect the people, data and applications involved. Automation handles repeatable work while approvals, exceptions and audit history remain visible.",
    useCases: [
      "Lead capture, intent classification and qualification",
      "Quotation, RFQ and purchase-order processing",
      "Approval workflows and exception handling",
      "Inventory, procurement and document generation",
      "Customer support and structured follow-up",
      "Management visibility and operational reporting",
    ],
    outcomes: [
      "Shorter sales and service cycles",
      "Lower administrative workload",
      "Fewer missed handoffs",
      "Clearer operational control",
    ],
    integrations: [
      "CRM and ERP platforms",
      "Email, WhatsApp and websites",
      "Inventory and accounting software",
      "Internal applications and databases",
    ],
    pipeline: [
      "Map the operating workflow",
      "Define rules and controls",
      "Connect data and systems",
      "Automate and observe",
    ],
    sections: [
      {
        title: "Enquiries, quotations and orders",
        copy: "A connected revenue workflow can receive enquiries, extract requirements, identify missing information, apply commercial rules and prepare a controlled draft for approval.",
        items: [
          "Enquiry and RFQ intake",
          "Requirement extraction",
          "Product or service matching",
          "Quotation draft generation",
          "Purchase-order extraction",
          "Approval and follow-up tracking",
        ],
      },
      {
        title: "Control remains explicit",
        copy: "Automation should make responsibility clearer. Sensitive decisions remain governed by permissions, human approval, exception queues and traceable records.",
        items: [
          "Role-based permissions",
          "Human approval points",
          "Exception routing",
          "Audit trails",
          "Operational notifications",
          "Management dashboards",
        ],
      },
    ],
    related: [
      { href: "/services/ai-agents-integrations", label: "AI agents" },
      { href: "/services/digital-commerce", label: "Digital commerce" },
      { href: "/work", label: "Selected work" },
    ],
  },
  {
    slug: "ai-agents-integrations",
    title: "AI Agents and Workflow Integration",
    shortTitle: "AI agents and integrations",
    heading: "AI agents that work across the tools your organisation already uses.",
    description:
      "Governed AI agents for websites, WhatsApp, email, voice and business systems that retrieve approved information, update records and escalate sensitive actions.",
    kicker: "Agents, voice and orchestration",
    domain: "business",
    image: "/images/service-ai-agent-integrations.jpg",
    imageAlt:
      "AI agent connected to email, WhatsApp, websites and business systems",
    challenge:
      "Most organisations do not need another isolated chatbot. They need coordinated systems that understand enquiries, retrieve trusted information, update operational records and hand consequential decisions to people.",
    approach:
      "We create specialised agents with defined responsibilities, approved tools, operating boundaries and evaluation criteria. Every integration, escalation path and audit requirement is designed as part of the system.",
    useCases: [
      "Website, WhatsApp and email customer-service agents",
      "Inbound and outbound voice agents",
      "Lead qualification and enquiry routing",
      "CRM and ERP record updates",
      "Enterprise knowledge retrieval",
      "Support triage and human handoff",
    ],
    outcomes: [
      "Faster customer response",
      "More consistent execution",
      "Less repetitive handling",
      "Human control over sensitive actions",
    ],
    integrations: [
      "WhatsApp Business and email",
      "Telephony and call workflows",
      "CRM, ERP and databases",
      "Websites, APIs and internal tools",
    ],
    pipeline: [
      "Define the agent's mandate",
      "Connect approved knowledge",
      "Integrate tools and channels",
      "Evaluate, govern and monitor",
    ],
    sections: [
      {
        title: "Customer-service agents",
        copy: "Agents can interpret intent, retrieve approved business information and progress routine work without concealing when human judgement is required.",
        items: [
          "Intent classification",
          "Customer and product knowledge",
          "Lead qualification",
          "Case routing",
          "Response preparation",
          "Human escalation",
        ],
      },
      {
        title: "Voice agents with operational context",
        copy: "Voice workflows can support inbound questions and structured outbound follow-up while producing summaries and updating the systems teams already rely on.",
        items: [
          "Appointment scheduling",
          "Order-status enquiries",
          "Support triage",
          "Collections reminders",
          "Call summaries",
          "CRM updates and handoff",
        ],
      },
    ],
    related: [
      { href: "/services/business-systems-automation", label: "Automation" },
      { href: "/services/speech-audio-intelligence", label: "Speech intelligence" },
      { href: "/products/sentient-co-lab", label: "Sentient Co-Lab" },
    ],
  },
  {
    slug: "digital-commerce",
    title: "AI-Powered Digital Commerce",
    shortTitle: "AI commerce and revenue intelligence",
    heading: "Commerce systems that understand what customers mean—and help them buy.",
    description:
      "AI-powered commerce systems for intent-based product search, recommendations, technical matching, quotations and intelligent merchandising.",
    kicker: "Commerce, product intelligence and revenue",
    domain: "business",
    image: "/images/industry-commerce.png",
    imageAlt:
      "Digital commerce and delivery operation connected by product intelligence",
    challenge:
      "Customers abandon buying journeys when catalogues are difficult to search, recommendations are irrelevant or technical products require expert interpretation. B2B teams also lose time converting requirements into accurate quotations.",
    approach:
      "We connect catalogue structure, compatibility rules, customer intent, behavioural signals and commercial controls. The result is a buying system that supports discovery and quotation without taking authority away from product and sales teams.",
    useCases: [
      "Intent-based and natural-language product discovery",
      "Personalised and complementary recommendations",
      "Technical product and compatibility matching",
      "Scientific-equipment recommendations",
      "RFQ and B2B quotation assistance",
      "Customer-behaviour and merchandising intelligence",
    ],
    outcomes: [
      "Faster product discovery",
      "More relevant buying journeys",
      "Shorter quotation cycles",
      "Better commercial visibility",
    ],
    integrations: [
      "Commerce platforms and catalogues",
      "Inventory, pricing and compatibility rules",
      "CRM and customer data",
      "Payments, fulfilment and analytics",
    ],
    pipeline: [
      "Structure product knowledge",
      "Interpret customer intent",
      "Apply compatibility and commercial rules",
      "Learn from governed feedback",
    ],
    sections: [
      {
        title: "Product intelligence for complex catalogues",
        copy: "Search can move beyond exact keywords to interpret purpose, specifications and constraints, while compatibility rules keep recommendations commercially and technically relevant.",
        items: [
          "Natural-language catalogue search",
          "Technical product comparison",
          "Accessory compatibility",
          "Intelligent bundles",
          "Complementary products",
          "B2B purchasing assistance",
        ],
      },
      {
        title: "Revenue workflows around discovery",
        copy: "A useful recommendation becomes an operational result when it can move into an RFQ, quotation, approval and structured follow-up process.",
        items: [
          "Requirement capture",
          "RFQ generation",
          "Quotation preparation",
          "Sales-team routing",
          "Follow-up orchestration",
          "Conversion analysis",
        ],
      },
    ],
    related: [
      { href: "/services/scientific-document-intelligence", label: "Scientific equipment intelligence" },
      { href: "/services/business-systems-automation", label: "Business automation" },
      { href: "/work", label: "Selected work" },
    ],
  },
  {
    slug: "computer-vision",
    title: "Computer Vision Systems",
    shortTitle: "Computer vision and visual inspection",
    heading: "Computer vision engineered for real operating environments.",
    description:
      "Complete computer-vision pipelines for inspection, detection, tracking, thermal analysis, geospatial observation and operator decision support.",
    kicker: "Inspection, measurement and visual evidence",
    domain: "engineering",
    image: "/images/computer-vision-detection.webp",
    imageAlt:
      "Computer vision system detecting and classifying objects in an operating environment",
    challenge:
      "Visual inspection is difficult to perform consistently at scale. A model that works in a demonstration may fail when lighting, camera position, motion, weather, dust or the appearance of the inspected object changes.",
    approach:
      "We design the complete vision pipeline—from image source and dataset quality to inference, event logic, operator review, API integration and drift monitoring—then validate it under representative operating conditions.",
    useCases: [
      "Quality, defect and missing-component inspection",
      "Assembly, packaging and product verification",
      "Crack, corrosion and surface-deterioration analysis",
      "Thermal inspection and electrical-hotspot detection",
      "PPE, construction and site-activity monitoring",
      "Drone, satellite and geospatial change detection",
    ],
    outcomes: [
      "More consistent inspection",
      "Earlier issue detection",
      "Traceable operator review",
      "Continuous visual visibility",
    ],
    integrations: [
      "Industrial, CCTV, thermal and mobile cameras",
      "Drone and satellite image sources",
      "Edge devices and cloud platforms",
      "Alerts, work orders and review queues",
    ],
    pipeline: [
      "Acquire and assess images",
      "Prepare and annotate data",
      "Train, adapt and evaluate",
      "Deploy, review and monitor",
    ],
    sections: [
      {
        title: "The complete vision pipeline",
        copy: "The model is one component. Reliable use also depends on the image source, data quality, event rules, integration and a clear process for uncertain results.",
        items: [
          "Camera and image-source selection",
          "Image-quality assessment",
          "Dataset preparation and annotation",
          "Detection, classification and segmentation",
          "Tracking and depth estimation",
          "Edge or cloud inference",
          "Performance evaluation",
          "Accuracy and drift monitoring",
        ],
      },
      {
        title: "Inspection and observation applications",
        copy: "Systems can interpret production lines, sites, infrastructure and geospatial imagery when the target condition and evidence requirements are precisely defined.",
        items: [
          "Object counting and classification",
          "Material and activity tracking",
          "Flood and erosion mapping",
          "Land-use monitoring",
          "Infrastructure change detection",
          "Operator review and evidence capture",
        ],
      },
    ],
    related: [
      { href: "/services/predictive-maintenance", label: "Predictive maintenance" },
      { href: "/services/scientific-engineering-ai", label: "Engineering AI" },
      { href: "/services/biometrics-identity", label: "Biometrics" },
    ],
    note:
      "A computer-vision demonstration proves that a pattern may be detectable. An operational system must also be validated against actual lighting, camera geometry, motion, weather, process variation and failure consequences.",
  },
  {
    slug: "speech-audio-intelligence",
    title: "Speech, Audio and Acoustic Intelligence",
    shortTitle: "Speech, audio and acoustic intelligence",
    heading: "Turn speech, sound and acoustic signals into usable evidence.",
    description:
      "Speech recognition, speaker-aware transcription and acoustic intelligence for meetings, lectures, calls, machinery and scientific audio workflows.",
    kicker: "ASR, diarisation and acoustic analysis",
    domain: "engineering",
    image: "/images/ai-intelligence-portrait.webp",
    imageAlt:
      "Layered audio waveform and data visualisation representing acoustic intelligence",
    challenge:
      "Audio contains operational context that is difficult to search, measure or act on. Speech systems also degrade under noise, specialist vocabulary, overlapping speakers and regional language patterns.",
    approach:
      "We engineer acquisition, enhancement, speech recognition, speaker attribution, acoustic feature extraction, evaluation and downstream workflows as one system, with metrics matched to the intended environment.",
    useCases: [
      "Real-time and batch speech-to-text",
      "Speaker-aware meeting and lecture transcription",
      "Call transcription, subtitles and recording archives",
      "Motor, pump, compressor and generator monitoring",
      "Leak, cavitation, alarm and acoustic-event detection",
      "Scientific audio and bioacoustic classification",
    ],
    outcomes: [
      "Searchable spoken knowledge",
      "Structured meeting records",
      "Earlier acoustic anomaly detection",
      "Measured recognition quality",
    ],
    integrations: [
      "Sentient Co-Lab",
      "Meeting, call and lecture recordings",
      "Microphones and edge devices",
      "Knowledge, reporting and alert systems",
    ],
    pipeline: [
      "Capture and enhance audio",
      "Recognise speech or events",
      "Attribute speakers and time",
      "Structure, evaluate and integrate",
    ],
    sections: [
      {
        title: "Automatic speech recognition",
        copy: "Speech-to-text quality is evaluated for the language, vocabulary, noise and latency requirements of the intended workflow—not from a clean demonstration recording alone.",
        items: [
          "Speaker diarisation",
          "Word-level timestamps",
          "Confidence scoring",
          "Domain and regional vocabulary",
          "Noisy-environment recognition",
          "Multilingual workflows",
          "Word error rate",
          "Speaker-attribution and domain-term accuracy",
        ],
      },
      {
        title: "Meeting and lecture intelligence",
        copy: "Speaker-aware transcripts can become structured minutes, chapters and searchable institutional knowledge while remaining grounded in the source recording.",
        items: [
          "Meeting minutes and lecture notes",
          "Topics, chapters and questions",
          "Decisions and action items",
          "Speaker timelines",
          "Transcript-grounded question answering",
          "Shared notes and knowledge export",
        ],
      },
      {
        title: "Audio and acoustic intelligence",
        copy: "Non-speech audio can reveal events and changing equipment conditions. Systems may combine spectral features, learned representations and contextual operating data.",
        items: [
          "Bearing and machinery acoustics",
          "Environmental sound classification",
          "Voice activity and audio indexing",
          "Speech enhancement and noise suppression",
          "Echo cancellation and call-quality monitoring",
          "Research systems for respiratory, heart or lung sounds",
        ],
      },
    ],
    related: [
      { href: "/products/sentient-co-lab", label: "Sentient Co-Lab" },
      { href: "/services/vibration-signal-analysis", label: "Signal analysis" },
      { href: "/services/predictive-maintenance", label: "Predictive maintenance" },
    ],
    note:
      "Health-related acoustic work is positioned as carefully validated research and decision support. It is not presented as a medical diagnosis without the required clinical and regulatory validation.",
  },
  {
    slug: "vibration-signal-analysis",
    title: "Vibration, Signal and Condition Intelligence",
    shortTitle: "Vibration and signal analysis",
    heading: "See changing machine condition in the signal.",
    description:
      "Vibration and time-frequency analysis using accelerometers, microphones and operating data to support condition screening and maintenance decisions.",
    kicker: "FFT, STFT and condition monitoring",
    domain: "engineering",
    image: "/images/robotics-arm.webp",
    imageAlt:
      "Industrial machine component representing vibration and condition monitoring",
    challenge:
      "Developing mechanical conditions can remain hidden until they affect quality, reliability or uptime. Raw vibration and acoustic measurements are only useful when acquisition, processing and interpretation reflect how the machine actually operates.",
    approach:
      "We combine sensor selection, digital signal processing, operating context and condition models to reveal dominant frequencies, transient events, changing trends and patterns associated with known fault conditions.",
    useCases: [
      "Bearing wear and gear faults",
      "Rotor imbalance and shaft misalignment",
      "Mechanical looseness and resonance",
      "Cavitation and structural vibration",
      "Machine-health screening and condition trending",
      "Remaining-useful-life estimation support",
    ],
    outcomes: [
      "Earlier condition visibility",
      "Consistent field screening",
      "Prioritised specialist inspection",
      "Traceable condition history",
    ],
    integrations: [
      "Accelerometers and gyroscopes",
      "Microphones and temperature sensors",
      "Electrical-current and Industrial IoT data",
      "Maintenance history and work-order systems",
    ],
    pipeline: [
      "Acquire representative signals",
      "Filter and transform",
      "Extract and compare features",
      "Trend, report and escalate",
    ],
    sections: [
      {
        title: "Methods that reveal machine behaviour",
        copy: "FFT reveals dominant frequencies within a signal, while STFT shows how those frequencies change over time. Filtering, envelope analysis and time-series models add context for transient or developing conditions.",
        items: [
          "FFT and spectral analysis",
          "STFT and time-frequency analysis",
          "Digital filtering",
          "Envelope analysis",
          "Feature extraction",
          "Anomaly detection and classification",
          "Trend analysis",
          "Time-series modelling",
        ],
      },
      {
        title: "Smartphone vibration analyser",
        copy: "A smartphone-based system can use the phone accelerometer, gyroscope and microphone for accessible first-line equipment screening and field triage.",
        items: [
          "Time-domain waveforms",
          "FFT spectra",
          "STFT spectrograms",
          "Signal-feature extraction",
          "Known-condition comparison",
          "Inspection history",
          "Screening reports",
          "Specialist escalation",
        ],
      },
    ],
    related: [
      { href: "/services/predictive-maintenance", label: "Predictive maintenance" },
      { href: "/services/speech-audio-intelligence", label: "Acoustic intelligence" },
      { href: "/services/industrial-operations", label: "Industrial operations" },
    ],
    note:
      "Phone sensors can support accessible screening and field triage. They do not replace calibrated industrial instruments, specialist measurement practice or safety-critical engineering judgement.",
  },
  {
    slug: "predictive-maintenance",
    title: "Predictive Maintenance and Reliability Intelligence",
    shortTitle: "Predictive maintenance and reliability",
    heading: "Detect developing equipment risk before it becomes disruption.",
    description:
      "Reliability systems that combine asset baselines, condition signals, anomaly detection and maintenance context to support earlier intervention.",
    kicker: "Condition, risk and maintenance decisions",
    domain: "engineering",
    image: "/images/industry-manufacturing.png",
    imageAlt:
      "Industrial production equipment monitored for reliability and developing maintenance risk",
    challenge:
      "Calendar-based maintenance can replace healthy components too early and still miss faults that develop between inspections. Useful prediction requires representative history, operating context and a disciplined response workflow.",
    approach:
      "We establish asset baselines, combine condition and operating data, detect meaningful deviation and connect risk signals to inspection, work prioritisation and reliability reporting.",
    useCases: [
      "Bearings, motors and pumps",
      "Compressors, generators and gearboxes",
      "Rotating and process equipment",
      "Electrical equipment",
      "Fleet and mobile assets",
      "Maintenance and reliability reporting",
    ],
    outcomes: [
      "Earlier risk detection",
      "Better maintenance prioritisation",
      "Clearer equipment-health visibility",
      "Evidence for intervention decisions",
    ],
    integrations: [
      "Vibration, acoustic and thermal measurements",
      "Electrical current and operating history",
      "Inspection and maintenance records",
      "Work orders and reliability dashboards",
    ],
    pipeline: [
      "Acquire and baseline assets",
      "Detect and classify condition",
      "Estimate risk and health",
      "Prioritise, intervene and learn",
    ],
    sections: [
      {
        title: "The complete reliability workflow",
        copy: "A useful maintenance signal must progress into a clear operational decision and then feed the result of inspection or repair back into the system.",
        items: [
          "Data acquisition",
          "Asset baselining",
          "Anomaly detection",
          "Condition classification",
          "Equipment-health scoring",
          "Fault-risk estimation",
          "Remaining-useful-life estimation",
          "Work-order integration",
        ],
      },
      {
        title: "Conditions that may leave evidence",
        copy: "Depending on instrumentation and operating conditions, a system can help reveal developing patterns that warrant earlier inspection or maintenance action.",
        items: [
          "Bearing wear",
          "Imbalance and misalignment",
          "Looseness and cavitation",
          "Overheating",
          "Abnormal current",
          "Degrading acoustic signatures",
          "Unusual operating behaviour",
          "Maintenance priority changes",
        ],
      },
    ],
    related: [
      { href: "/services/vibration-signal-analysis", label: "Vibration analysis" },
      { href: "/services/computer-vision", label: "Visual inspection" },
      { href: "/services/industrial-operations", label: "Industrial operations" },
    ],
    note:
      "Predictive systems do not guarantee that every failure will be forecast. They are designed to detect developing risk, support earlier intervention and estimate probable maintenance requirements with stated uncertainty.",
  },
  {
    slug: "biometrics-identity",
    title: "Biometric and Facial Recognition Systems",
    shortTitle: "Biometrics and facial recognition",
    heading: "Identity systems designed for security, auditability and responsible use.",
    description:
      "Privacy-conscious biometric identity systems for facial verification, identification, access control, attendance and visitor workflows.",
    kicker: "Identity, access and verification",
    domain: "engineering",
    image: "/images/service-facial-recognition.png",
    imageAlt: "Facial recognition system processing biometric landmarks",
    challenge:
      "Identity workflows become costly and vulnerable when verification is slow, records are unreliable or access decisions cannot be audited. Biometric data also requires strict purpose, retention and access controls.",
    approach:
      "We engineer biometric workflows around a defined lawful and operational purpose, measured thresholds, secure templates, exception handling and human review wherever decisions carry material consequences.",
    useCases: [
      "One-to-one facial verification",
      "One-to-many identification",
      "Access control and attendance",
      "Visitor and event registration",
      "Customer or patient verification",
      "Duplicate identity and exception review",
    ],
    outcomes: [
      "More reliable verification",
      "Stronger access control",
      "Traceable decisions",
      "Responsible exception handling",
    ],
    integrations: [
      "Access-control hardware",
      "Workforce and attendance systems",
      "Customer and patient applications",
      "Identity APIs, SDKs and audit platforms",
    ],
    pipeline: [
      "Detect and assess image quality",
      "Extract protected features",
      "Compare against a defined threshold",
      "Review, audit and retain responsibly",
    ],
    sections: [
      {
        title: "The biometric decision pipeline",
        copy: "Reliable identity work depends on controlled capture and clear decision thresholds—not simply running a face model against an image.",
        items: [
          "Facial detection",
          "Image-quality validation",
          "Feature extraction",
          "Similarity thresholds",
          "Liveness checks",
          "Presentation-attack detection",
          "Duplicate detection",
          "Human exception review",
        ],
      },
      {
        title: "Privacy and operational controls",
        copy: "The system must make purpose, access, retention and accountability visible to the organisation operating it.",
        items: [
          "Encrypted biometric templates",
          "Consent or lawful-basis controls",
          "Retention controls",
          "Role-based access",
          "Audit trails",
          "API and SDK governance",
          "Manual fallback",
          "Human oversight",
        ],
      },
    ],
    related: [
      { href: "/services/computer-vision", label: "Computer vision" },
      { href: "/work", label: "Selected work" },
      { href: "/services/business-systems-automation", label: "Workflow integration" },
    ],
    note:
      "We do not claim access to national or government identity infrastructure. Any such integration would require independently verified authority, licensing and data-governance arrangements.",
  },
  {
    slug: "scientific-engineering-ai",
    title: "Scientific and Engineering AI Systems",
    shortTitle: "Scientific and engineering intelligence",
    heading: "AI systems for research, engineering and technical decisions.",
    description:
      "Applied AI for engineering drawings, field work, forecasting, process optimisation, simulation, materials, molecular data and geospatial risk.",
    kicker: "Research, laboratories and engineering teams",
    domain: "engineering",
    image: "/images/industry-healthcare-laboratory.png",
    imageAlt:
      "Scientific laboratory microscope and analytical equipment in a controlled environment",
    challenge:
      "Technical organisations work across measurements, simulations, drawings, reports and expert procedures that are difficult to connect. The challenge is to accelerate analysis without obscuring evidence, uncertainty or engineering accountability.",
    approach:
      "We combine domain knowledge, data engineering, suitable models and human validation. The system is designed around the evidence and tolerances required for its specific scientific or engineering decision.",
    useCases: [
      "Engineering drawing and schematic intelligence",
      "Field-engineer copilots",
      "Energy-demand and renewable-generation forecasting",
      "Water-network and process intelligence",
      "Simulation surrogate models",
      "Molecular, materials and geospatial intelligence",
    ],
    outcomes: [
      "Faster technical retrieval",
      "More systematic field evidence",
      "Broader scenario exploration",
      "Clearer decision support",
    ],
    integrations: [
      "Technical PDFs, drawings and manuals",
      "SCADA, IoT and production data",
      "FEA, CFD and simulation results",
      "Scientific, molecular and geospatial datasets",
    ],
    pipeline: [
      "Define the technical decision",
      "Assemble and qualify evidence",
      "Model with explicit uncertainty",
      "Validate and integrate into practice",
    ],
    sections: [
      {
        title: "Engineering drawing and field intelligence",
        copy: "Technical copilots can help teams interpret controlled documents and capture field evidence while keeping source material and human escalation available.",
        items: [
          "OCR and vision-language analysis",
          "Symbol, tag, dimension and quantity extraction",
          "Drawing comparison and bill-of-material support",
          "Guided inspection and troubleshooting",
          "Procedure retrieval and safety reminders",
          "Evidence capture and maintenance reporting",
        ],
      },
      {
        title: "Forecasting and process intelligence",
        copy: "Operational models can combine historical measurements with contextual data to support planning, anomaly detection and resource decisions.",
        items: [
          "Power and peak-load forecasting",
          "Renewable-generation forecasting",
          "Leak and pressure anomaly detection",
          "Possible pipe-failure alerts",
          "Energy and waste optimisation",
          "Throughput and downtime-risk support",
        ],
      },
      {
        title: "Simulation and discovery assistance",
        copy: "Surrogate and property models can narrow large search spaces and prioritise deeper analysis or experiments; they do not replace validated simulation or laboratory evidence by default.",
        items: [
          "FEA and CFD surrogate models",
          "Design-space exploration",
          "Molecular property ranking",
          "Solubility and toxicity-risk estimation",
          "Materials candidate ranking",
          "Experiment prioritisation",
          "Flood and erosion mapping",
          "Satellite and drone change detection",
        ],
      },
    ],
    related: [
      { href: "/services/scientific-document-intelligence", label: "Scientific documents" },
      { href: "/services/computer-vision", label: "Computer vision" },
      { href: "/services/vibration-signal-analysis", label: "Signal analysis" },
    ],
    note:
      "Surrogate, molecular and materials models support comparison and prioritisation. Their outputs require domain validation and do not replace regulated evidence, validated engineering simulation or laboratory testing unless specifically proven fit for that purpose.",
  },
  {
    slug: "scientific-document-intelligence",
    title: "Scientific Document Intelligence",
    shortTitle: "Scientific document intelligence",
    heading: "Make technical documents usable without losing their evidence.",
    description:
      "Document intelligence for scientific equipment, laboratory records and research literature, with structured extraction and source-grounded retrieval.",
    kicker: "Equipment, laboratory and literature workflows",
    domain: "engineering",
    image: "/images/industry-healthcare-laboratory.png",
    imageAlt:
      "Laboratory equipment and technical records used in scientific document workflows",
    challenge:
      "Technical information is often fragmented across catalogues, certificates, reports, instrument outputs and research literature. Manual retrieval and comparison are slow, while generated answers can be unsafe when their sources are unclear.",
    approach:
      "We structure documents, preserve provenance, validate extracted fields and ground retrieval in approved source material. Human review is retained for exceptions and consequential scientific decisions.",
    useCases: [
      "Scientific equipment selection and configuration",
      "Compatibility and accessory recommendations",
      "Laboratory result and certificate extraction",
      "Chromatogram and instrument-output workflows",
      "Scientific literature search and comparison",
      "Evidence tables and knowledge-gap identification",
    ],
    outcomes: [
      "Faster technical comparison",
      "Structured laboratory records",
      "Source-grounded answers",
      "Clearer exception review",
    ],
    integrations: [
      "Catalogues, datasheets and protocols",
      "Inventory, pricing and compatibility rules",
      "Certificates, test reports and quality records",
      "Research papers and internal knowledge",
    ],
    pipeline: [
      "Ingest and classify sources",
      "Extract, validate and structure",
      "Retrieve with provenance",
      "Review exceptions and export",
    ],
    sections: [
      {
        title: "Scientific equipment assistant",
        copy: "A controlled assistant can connect experimental requirements to catalogues, compatibility rules, stock and commercial workflows.",
        items: [
          "Instrument recommendations",
          "Accessory and configuration support",
          "Compatibility checking",
          "Technical comparison",
          "RFQ assistance",
          "Product knowledge answers",
        ],
      },
      {
        title: "Laboratory document intelligence",
        copy: "Extraction and validation can turn high-volume laboratory records into searchable, reviewable information without obscuring the original source.",
        items: [
          "Structured result extraction",
          "Range checking",
          "Record generation",
          "Exception identification",
          "Report comparison",
          "Searchable laboratory records",
        ],
      },
      {
        title: "Scientific literature intelligence",
        copy: "Semantic retrieval can accelerate method and result comparison when answers remain citation-linked and users can inspect the underlying evidence.",
        items: [
          "Semantic search",
          "Source-grounded answers",
          "Method and result comparison",
          "Citation-linked summaries",
          "Research relationship mapping",
          "Evidence tables and knowledge gaps",
        ],
      },
    ],
    related: [
      { href: "/services/scientific-engineering-ai", label: "Engineering AI" },
      { href: "/services/digital-commerce", label: "Product intelligence" },
      { href: "/industries/scientific-laboratory-equipment", label: "Laboratory equipment" },
    ],
    note:
      "Generated text is not presented as verified scientific evidence. Citations and extracted results must remain traceable to their sources and be reviewed at the level required by the decision.",
  },
  {
    slug: "industrial-operations",
    title: "Industrial and Operations Intelligence",
    shortTitle: "Industrial operations intelligence",
    heading: "Connect physical condition, planning and operating decisions.",
    description:
      "Industrial AI systems combining maintenance, vision, forecasting, optimisation and operational data for asset-intensive environments.",
    kicker: "Assets, production and supply networks",
    domain: "engineering",
    image: "/images/industry-logistics.png",
    imageAlt:
      "Connected logistics and industrial network showing physical operations and planning",
    challenge:
      "Industrial and supply-chain teams often make expensive decisions with fragmented data, late alerts and limited visibility across assets, suppliers, inventory and fulfilment.",
    approach:
      "We connect condition data, operational systems, predictive models and optimisation to clear decision interfaces. Insights progress into inspection, maintenance, planning, dispatch or procurement workflows.",
    useCases: [
      "Predictive maintenance and vibration monitoring",
      "Acoustic monitoring and computer vision",
      "Demand, inventory and production planning",
      "Process and energy optimisation",
      "Warehouse, route and fleet intelligence",
      "Supplier intelligence and operational dashboards",
    ],
    outcomes: [
      "Earlier operating visibility",
      "Better resource decisions",
      "Reduced disruption risk",
      "More reliable planning",
    ],
    integrations: [
      "ERP, WMS and fleet systems",
      "Sensors, cameras and equipment data",
      "Supplier and procurement platforms",
      "Planning, maintenance and reporting tools",
    ],
    pipeline: [
      "Connect physical and digital evidence",
      "Detect condition and constraint",
      "Recommend and prioritise",
      "Integrate and measure decisions",
    ],
    sections: [
      {
        title: "Condition and reliability",
        copy: "Physical signals from assets become more useful when they are connected to inspection history, operating context and an accountable maintenance response.",
        items: [
          "Predictive maintenance",
          "Vibration and acoustic monitoring",
          "Computer-vision inspection",
          "Thermal and anomaly detection",
          "Maintenance prioritisation",
          "Reliability reporting",
        ],
      },
      {
        title: "Planning and operational intelligence",
        copy: "Forecasting and optimisation can help teams allocate constrained resources across production, inventory, energy, warehouses and transport.",
        items: [
          "Demand forecasting",
          "Inventory intelligence",
          "Production planning",
          "Process optimisation",
          "Warehouse visibility",
          "Route and fleet optimisation",
          "Supplier intelligence",
          "Energy forecasting",
        ],
      },
    ],
    related: [
      { href: "/services/predictive-maintenance", label: "Predictive maintenance" },
      { href: "/services/vibration-signal-analysis", label: "Vibration analysis" },
      { href: "/services/computer-vision", label: "Computer vision" },
    ],
  },
] as const satisfies readonly ServicePage[];

export const businessServicePages = servicePages.filter(
  (service) => service.domain === "business",
);

export const engineeringServicePages = servicePages.filter(
  (service) => service.domain === "engineering",
);

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((service) => service.slug === slug);
}
