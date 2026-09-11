import {
  Blog,
  BlogPost,
  CaseStudy,
  Comment,
  JobOpenings,
  Platform,
  PortfolioMention,
  TrustedPartners,
  WhyEntacrest,
  WorkBenefits,
} from "@/types/global";

export const platforms: Platform[] = [
  {
    slug: "synchgate",
    name: "Synchgate",
    tag: "Payment Orchestration",
    tagline: "The gateway to gateways",
    description:
      "Synchgate is a payment orchestration platform that connects businesses to multiple payment providers through a single, unified interface — so you accept, route, and settle payments without stitching together a dozen integrations yourself.",
    features: [
      { title: "Multi-connector orchestration", desc: "Route transactions across multiple payment providers with automatic failover, instead of depending on one gateway." },
      { title: "Billing & invoicing engine", desc: "Usage-based billing, merchant credit, and automated invoicing built directly into the platform." },
      { title: "Merchant management", desc: "Onboard, verify, and manage merchants with configurable plans and feature gating." },
      { title: "Webhooks & real-time events", desc: "Reliable, signed webhooks for every transaction and settlement event." },
      { title: "Compliance-first infrastructure", desc: "Built around the regulatory and audit requirements payment providers actually enforce." },
      { title: "Developer-first API", desc: "Clean REST APIs, sandbox environments, and documentation engineers actually enjoy using." },
    ],
    url: "https://www.synchgate.com/",
  },
  {
    slug: "ebs",
    name: "EBS",
    tag: "Business Operating System",
    tagline: "Run your SME on one system",
    description:
      "EBS (Entacrest Business Suite) is a business operating system built for African SMEs — invoicing, payroll, point-of-sale, compliance, and virtual accounts in one place, so growing businesses stop duct-taping spreadsheets and disconnected tools together.",
    features: [
      { title: "Invoicing & quotations", desc: "Create, send, and track invoices and quotations without a separate tool." },
      { title: "Payroll", desc: "Run payroll for your team with built-in compliance for local statutory requirements." },
      { title: "Point of sale", desc: "A POS module built for how SMEs actually sell — in-store and online." },
      { title: "Virtual accounts", desc: "Dedicated virtual accounts for collections, reconciled automatically." },
      { title: "Compliance tooling", desc: "Stay audit-ready without hiring a compliance team on day one." },
      { title: "Team & customer management", desc: "One place to manage staff, roles, and customer relationships as you scale." },
    ],
    url: "https://ebs.entacrest.com/",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "ajiroba",
    name: "Ajiroba",
    logo: "/images/clients/ajiroba.png",
    logoClassName: "w-[150px] h-auto object-contain",
    category: "Consumer Fintech · E-commerce",
    summary: "A consumer raffle platform where every draw needs a wallet, a bid, and a payout that actually reconciles.",
    problem: "Ajiroba lets customers fund a wallet, bid on products during live auction windows, and win items through raffle draws — which means real money movement, ticketing logic, and live-draw mechanics all had to work together without breaking trust.",
    solution: "We built the wallet, bidding, and live-draw system on top of payment-grade infrastructure — the same orchestration and reconciliation discipline behind Synchgate — so every ticket sold and every draw result ties back to a verifiable transaction.",
    outcomes: [
      "Wallet top-ups and bidding handled on reliable payment rails",
      "Live raffle draw logic with guaranteed, auditable winners",
      "Extended with a dedicated campaign microsite (campaign.ajiroba.com)",
    ],
    tags: ["Wallets", "Payments", "Web App"],
    url: "https://www.ajiroba.com/",
  },
  {
    slug: "skytrack",
    name: "Skytrack",
    logo: "/images/clients/skytrack.png",
    logoClassName: "w-[64px] h-auto object-contain",
    category: "ICT Training & Certification",
    summary: "A certification testing, ICT training, and business solutions platform that needed to look and run like an institution, not a side project.",
    problem: "Skytrack needed a platform that could handle certification testing workflows, training program delivery, and business consulting inquiries — with the credibility to match the certifications it administers.",
    solution: "We designed and built a platform covering certification testing, training program management, and lead capture for their business solutions arm, backed by the same engineering rigor we bring to regulated fintech work.",
    outcomes: [
      "Unified platform for testing, training, and consulting",
      "Structured intake for enterprise and individual clients",
    ],
    tags: ["Web Platform", "Certification Workflows"],
    url: "https://www.skytrackict.com.ng/",
  },
  {
    slug: "holdbodi",
    name: "HoldBodí",
    logo: "/images/clients/holdbodi.png",
    logoClassName: "w-[150px] h-auto object-contain",
    category: "Social Impact",
    summary: "A community support platform connecting individuals, brands, and volunteers to fight food insecurity — where trust and transparency matter as much as uptime.",
    problem: "HoldBodí needed to coordinate contributions from individuals and brands with volunteers on the ground, with the same transparency and accountability expected of anything that moves money or resources toward a cause.",
    solution: "We built the platform connecting supporters, brand partners, and volunteers, applying the same rigor around data integrity and accountability that we bring to financial systems.",
    outcomes: [
      "A single platform coordinating individuals, brands, and volunteers",
      "Built for transparency and accountability at every step",
    ],
    tags: ["Social Impact", "Web App"],
    url: "https://www.holdbodi.com/",
  },
];

export const alsoBuilt: PortfolioMention[] = [
  {
    name: "Gamay",
    logo: "/images/Gamay.svg",
    logoClassName: "size-[56px] object-contain",
    description: "A digital platform built for Gamay Group.",
    url: "https://www.gamay.ng/",
  },
  {
    name: "Ajiroba Campaign",
    logo: "/images/clients/ajiroba.png",
    logoClassName: "w-[110px] h-auto object-contain",
    description: "A dedicated campaign microsite extending the Ajiroba platform.",
    url: "https://campaign.ajiroba.com/",
  },
];

export const whyEntacrest: WhyEntacrest[] = [
  {
    icon: "/icons/security-safe.svg",
    heading: "Regulated by default",
    text: "Compliance and security aren't bolted on. Every system we ship — ours or yours — is built to survive an audit, not just a demo.",
  },
  {
    icon: "/icons/airdrop.svg",
    heading: "Orchestration expertise",
    text: "We've built the hard part before: routing, reconciling, and settling money across multiple providers without losing a kobo.",
  },
  {
    icon: "/icons/like.svg",
    heading: "Built to stay up",
    text: "Synchgate and EBS run in production every day. That same operational discipline goes into every client platform we build.",
  },
  {
    icon: "/icons/recovery-convert.svg",
    heading: "Developer-first delivery",
    text: "Clean APIs, real documentation, and engineers who show up after launch — not just at handover.",
  },
];

export const trustedPartners: TrustedPartners[] = [
  { icon: "/images/clients/ajiroba.png", className: "w-[130px] h-auto object-contain" },
  { icon: "/images/clients/skytrack.png", className: "w-[64px] h-auto object-contain" },
  { icon: "/images/clients/holdbodi.png", className: "w-[130px] h-auto object-contain" },
  { icon: "/images/Gamay.svg", className: "size-[80px] object-contain" },
];

export const workBenefits: WorkBenefits[] = [
  {
    title: "Health Benefits",
    description:
      "We prioritize the well-being of our team with comprehensive health benefits — medical, dental, and vision coverage, along with mental health and wellness support.",
    iconSrc: "/icons/hospital.svg",
  },
  {
    title: "Flexible Hours",
    description:
      "We offer flexible working hours to support work-life balance, letting our team manage schedules in a way that maximises productivity and well-being.",
    iconSrc: "/icons/building.svg",
  },
  {
    title: "Growth Opportunities",
    description:
      "We invest in our team through continuous learning, mentorship, and clear career development paths — empowering every person to reach their full potential.",
    iconSrc: "/icons/receipt-square.svg",
  },
];

export const blogs: BlogPost[] = [
  {
    id: 1,
    title: "The Future Of Nigeria Trends In 2026",
    description:
      "Nigeria's future is bright — driven by a dynamic youth population, rapid technological advancement, and a growing entrepreneurial spirit poised to transform the nation.",
    imageSrc: "/images/blog1.svg",
    datePosted: "12 August 2024",
    author: {
      name: "Bukola Adeniyi",
      profileImage: "/images/avatar.svg",
    },
    text: "Nigeria stands at the cusp of a transformative era, with immense potential to become a leading force in Africa and on the global stage. With a youthful and energetic population—over 60% under the age of 25—the country possesses a powerful demographic advantage. This emerging generation is tech-savvy, innovative, and increasingly entrepreneurial, driving forward industries such as fintech, agritech, creative media, and digital services. The rise of technology hubs across cities like Lagos, Abuja, and Port Harcourt is positioning Nigeria as a regional leader in innovation. The expanding digital economy, fueled by mobile connectivity and a thriving startup culture, is creating new jobs, attracting investment, and opening doors to global markets. Education, though still facing challenges, is experiencing gradual reform and increased private sector involvement, which is expected to produce a more skilled and future-ready workforce. Additionally, infrastructural development in power, transportation, and broadband access is slowly building the foundation for sustained economic growth. Nigerias natural resource wealth—especially in agriculture, oil, and gas—continues to offer economic opportunities. However, there is growing emphasis on economic diversification, sustainability, and green energy, driven by both necessity and innovation. Politically, while governance reforms and accountability remain critical issues, an increasingly active civil society and more engaged electorate are pushing for greater transparency and progress. The spirit of resilience, creativity, and community continues to define Nigeria identity and propel its forward momentum. With the right investments in human capital, governance, and infrastructure, Nigeria future holds the promise of inclusive growth, regional leadership, and a thriving, modern economy.",
  },
  {
    id: 2,
    title: "The Future Of Nigeria Trends In 2026",
    description:
      "Nigeria's future is bright — driven by a dynamic youth population, rapid technological advancement, and a growing entrepreneurial spirit poised to transform the nation.",
    imageSrc: "/images/blog1.svg",
    datePosted: "12 August 2024",
    author: {
      name: "Bukola Adeniyi",
      profileImage: "/images/avatar.svg",
    },
    text: "Nigeria stands at the cusp of a transformative era, with immense potential to become a leading force in Africa and on the global stage. With a youthful and energetic population—over 60% under the age of 25—the country possesses a powerful demographic advantage. This emerging generation is tech-savvy, innovative, and increasingly entrepreneurial, driving forward industries such as fintech, agritech, creative media, and digital services.",
  },
  {
    id: 3,
    title: "The Future Of Nigeria Trends In 2026",
    description:
      "Nigeria's future is bright — driven by a dynamic youth population, rapid technological advancement, and a growing entrepreneurial spirit poised to transform the nation.",
    imageSrc: "/images/blog1.svg",
    datePosted: "12 August 2024",
    author: {
      name: "Bukola Adeniyi",
      profileImage: "/images/avatar.svg",
    },
    text: "Nigeria stands at the cusp of a transformative era, with immense potential to become a leading force in Africa and on the global stage.",
  },
];

export const commentsData: Comment[] = [
  {
    id: "c1",
    user: {
      name: "Ada Johnson",
      profileImage: "/users/ada.jpg",
      jobTitle: "Product Designer at Figma",
    },
    comment: "This post really resonates with me. Thanks for sharing!",
    createdAt: "2h",
    likes: 12,
    replies: [
      {
        id: "r1",
        user: {
          name: "Kene Okoro",
          profileImage: "/users/kene.jpg",
          jobTitle: "UX Engineer at Google",
        },
        comment: "Same here, Ada! It highlights what we've been discussing at work.",
        createdAt: "1h",
        likes: 3,
      },
    ],
  },
  {
    id: "c2",
    user: {
      name: "Tomiwa Bello",
      profileImage: "/users/tomiwa.jpg",
      jobTitle: "Frontend Developer at Andela",
    },
    comment: "Great insights. Nigeria's tech scene has so much potential.",
    createdAt: "5h",
    likes: 28,
    replies: [
      {
        id: "r2",
        user: {
          name: "Sarah Yusuf",
          profileImage: "/users/sarah.jpg",
          jobTitle: "Software Engineer at Flutterwave",
        },
        comment: "Absolutely! The energy is incredible right now.",
        createdAt: "3h",
        likes: 7,
      },
      {
        id: "r3",
        user: {
          name: "Chuka Onwudiwe",
          profileImage: "/users/chuka.jpg",
          jobTitle: "Data Scientist at Paystack",
        },
        comment: "Let's just hope the infrastructure catches up 🤞",
        createdAt: "2h",
        likes: 5,
      },
    ],
  },
];
