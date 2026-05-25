import {
  Blog,
  BlogPost,
  Comment,
  JobOpenings,
  TrustedPartners,
  WhyEntacrest,
  WorkBenefits,
} from "@/types/global";

export const whyEntacrest: WhyEntacrest[] = [
  {
    icon: "/icons/security-safe.svg",
    heading: "Security",
    text: "Our products are built with advanced security layers — PCI-DSS compliant infrastructure protecting every transaction.",
  },
  {
    icon: "/icons/airdrop.svg",
    heading: "Efficient",
    text: "SynchGate and all Entacrest products are designed for speed, ensuring seamless execution at scale.",
  },
  {
    icon: "/icons/like.svg",
    heading: "Reliable",
    text: "We build scalable, high-performance financial infrastructure engineered for maximum uptime and minimal disruption.",
  },
  {
    icon: "/icons/recovery-convert.svg",
    heading: "Developer-friendly",
    text: "Clean APIs, full documentation, sandbox environments, and SDK support — built with developers in mind from day one.",
  },
];

export const trustedPartners: TrustedPartners[] = [
  { icon: "/images/Gamay.svg", className: "size-[100px]" },
  { icon: "/images/Epis.svg", className: "size-[100px]" },
  { icon: "/images/Nomba.svg", className: "w-[100px] h-[80px]" },
  { icon: "/images/OSD.svg", className: "size-[100px]" },
  { icon: "/images/cove.jpg", className: "size-[100px]" },
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
