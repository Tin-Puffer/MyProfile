export const profile = {
  name: "Nguyen Chi Tin",
  firstName: "Nguyen",
  lastName: "Chi Tin",
  title: "Salesforce Developer",
  availability: "Open to high-impact Salesforce platform roles",
  intro:
    "Salesforce developer shaping reliable operational systems for logistics-driven businesses.",
  summary:
    "With more than two years of hands-on Salesforce delivery, I work where platform customization, business understanding, and integration discipline need to come together. My experience spans Apex, Lightning Web Components, org administration, and API-led system integration across logistics, retail, and warehouse operations.",
  recruiterPitch:
    "Not just building features, but designing Salesforce systems that stay stable, understandable, and useful when real teams depend on them every day.",
  location: "Ho Chi Minh City, Vietnam",
  email: "tinnc.110300@gmail.com",
  phone: "0353 110 300",
  linkedin: "https://www.linkedin.com/in/nguyentin1103/",
  quickBadges: [
    "Apex & LWC Delivery",
    "REST / SOAP Integrations",
    "Business-Facing Implementation",
  ],
  heroStats: [
    { value: "2+ Years", label: "building on Salesforce" },
    { value: "4 Certifications", label: "including Platform Developer II" },
    { value: "Cross-System", label: "CRM, WMS, OMS, NetSuite, e-invoicing" },
  ],
  signatureStrengths: [
    {
      title: "Business to Build",
      text: "Comfortable working with operations, sales, and logistics teams to turn vague requirements into practical Salesforce delivery.",
    },
    {
      title: "Platform Reliability",
      text: "Focuses on stable day-to-day operations through clean logic, secure access control, and maintainable org configuration.",
    },
    {
      title: "Integration Ownership",
      text: "Hands-on with REST, SOAP, and ERP-connected workflows where data quality and sync reliability matter.",
    },
  ],
  operatingPrinciples: [
    "Translate business ambiguity into implementation paths teams can actually maintain.",
    "Design for trust: access control, clean logic, and dependable data movement.",
    "Stay accountable through the full cycle from analysis to deployment and optimization.",
  ],
};

export const experience = [
  {
    company: "Times Cargo Logistic",
    role: "Software Engineer",
    period: "Nov 2024 - Present",
    location: "Ho Chi Minh City",
    summary:
      "Current role focused on keeping Salesforce dependable for logistics and supply chain teams while continuously extending the platform as business workflows evolve.",
    highlights: [
      "Maintains and enhances business-critical Salesforce modules used across multiple operating units.",
      "Implements Apex classes, triggers, and Lightning Web Components for changing operational requirements.",
      "Works directly with stakeholders to analyze workflows and shape practical system improvements.",
      "Owns administration concerns such as users, permission sets, profiles, role hierarchy, and sharing rules.",
      "Supports integrations, data synchronization, cleanup, and migration between Salesforce and internal systems.",
    ],
  },
  {
    company: "AFR Cloud Computing",
    role: "Salesforce Developer",
    period: "Apr 2023 - Jun 2024",
    location: "Ho Chi Minh City",
    summary:
      "Built and implemented Salesforce solutions for enterprise clients across Sales Cloud and Service Cloud with strong exposure to multi-system integration.",
    highlights: [
      "Developed custom Apex logic, Lightning components, and automation workflows aligned to client operations.",
      "Integrated Salesforce with OMS, CMS, CRM, and WMS environments using REST and SOAP APIs.",
      "Partnered with business analysts and stakeholders to convert requirements into technical execution.",
      "Supported Samsung Electronics Korea onsite for internal CRM-related solution delivery.",
      "Contributed across the full SDLC: analysis, design, development, testing, deployment, and handover.",
    ],
  },
];

export const flagshipProject = {
  name: "Salesforce - NetSuite Accounting Integration",
  period: "Jul 2025 - Present",
  role: "Integration Developer, End-to-End Ownership",
  description:
    "Architected a secure bi-directional connection between Salesforce CRM and NetSuite Accounting, covering data mapping, sync design, implementation, deployment, and post-go-live optimization.",
  achievements: [
    "Designed robust data pipelines with transformation rules, retry logic, duplicate prevention, and idempotent handling.",
    "Implemented Apex callouts on Salesforce together with SuiteScript 2.x Scheduled, Map/Reduce, and User Event scripts on NetSuite.",
    "Added monitoring, logging, and custom operational records to make the integration observable and supportable.",
    "Handled both platform sides directly instead of treating the integration as a handoff between teams.",
  ],
  architectureBoards: [
    {
      label: "Architecture",
      title: "Bi-directional CRM x Accounting Sync",
      text: "Designed for consistent movement of customers, invoices, payments, and financial records between both platforms.",
    },
    {
      label: "Execution",
      title: "Salesforce + NetSuite Ownership",
      text: "Implemented callouts, SuiteScript automation, deployment, testing, and operational refinement across both systems.",
    },
    {
      label: "Reliability",
      title: "Traceable and Recoverable Processing",
      text: "Focused on retries, logging, monitoring, and duplicate prevention so failures can be diagnosed instead of hidden.",
    },
  ],
  technologies: [
    "Salesforce Apex",
    "Lightning Platform",
    "REST API",
    "SOAP API",
    "NetSuite SuiteScript 2.x",
    "SuiteTalk",
    "RESTlets",
    "OAuth 1.0",
    "Scheduled Scripts",
    "Map/Reduce",
    "User Event Scripts",
  ],
};

export const skills = [
  {
    category: "Platform",
    items: [
      "Sales Cloud",
      "Service-oriented Salesforce solutions",
      "Lightning Web Components",
      "Salesforce Flow",
      "Org Administration",
      "User & Permission Management",
    ],
  },
  {
    category: "Engineering",
    items: ["Apex Development", "JavaScript", "TypeScript", "HTML/CSS", "SLDS"],
  },
  {
    category: "Integration",
    items: [
      "REST API Integration",
      "SOAP API Integration",
      "NetSuite ERP",
      "VNPT E-Invoicing",
      "Operational Data Sync",
    ],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "Visual Studio Code",
      "Salesforce Data Loader",
      "Salesforce Workbench",
      "AI-assisted coding workflows",
    ],
  },
];

export const certifications = [
  {
    title: "Salesforce Certified Platform Developer II",
    date: "Jul 2025",
    issuer: "Salesforce",
    credentialId: "6474005",
  },
  {
    title: "Salesforce Certified AI Associate",
    date: "May 2025",
    issuer: "Salesforce",
    credentialId: "5897295",
  },
  {
    title: "Salesforce Certified Platform Developer I",
    date: "May 2025",
    issuer: "Salesforce",
    credentialId: "6138702",
  },
  {
    title: "Salesforce Certified JavaScript Developer I",
    date: "Feb 2025",
    issuer: "Salesforce",
    credentialId: "5836329",
  },
];

export const education = {
  school: "Posts and Telecommunications Institute of Technology (PTIT)",
  degree: "Engineer in Information Technology",
  classification: "Good",
  period: "Sep 2018 - Nov 2023",
};
