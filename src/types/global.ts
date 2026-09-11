export interface WhyEntacrest {
  icon: string;
  heading: string;
  text: string;
}
export interface TrustedPartners {
  icon: string;
  className: string;
}
export interface Inputs {
  value: "first_name" | "last_name" | "email" | "message" | "phone";
  placeholder: string;
}
export interface JobApplicationInputs {
  value: "first_name" | "last_name" | "email" | "role";
  placeholder: string;
}
export interface JobOpenings {
  title: string;
  description: string;
  details: string[];
  open: boolean;
}
export interface Job {
  id: string;
  description: string;
  is_active: boolean;
  mode: string;
  title: string;
  type: string;
}

export interface JobCardProps {
  job: Job;
}

export interface WorkBenefits {
  title: string;
  description: string;
  iconSrc: string;
}

export interface PlatformFeature {
  title: string;
  desc: string;
}

export interface Platform {
  slug: string;
  name: string;
  tag: string;
  tagline: string;
  description: string;
  features: PlatformFeature[];
  url: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  logo: string;
  logoClassName?: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  outcomes: string[];
  tags: string[];
  url: string;
}

export interface PortfolioMention {
  name: string;
  logo: string;
  logoClassName?: string;
  description: string;
  url: string;
}

export interface Author {
  name: string;
  profileImage: string;
}
export interface Blog {
  id: number;
  title: string;
  body: string;
  image: string;
  user: string;
  date_created: string;
  slug: string;
  top_blog: boolean;
}
export interface BlogPost {
  id: number | string;
  title: string;
  description: string;
  imageSrc: string;
  datePosted: string;
  author: Author;
  text: string;
}
export type User = {
  name: string;
  profileImage: string;
  jobTitle: string;
};

export type Reply = {
  id: string;
  user: User;
  comment: string;
  createdAt: string; // e.g. "2h", "1d"
  likes: number;
};

export type Comment = {
  id: string;
  user: User;
  comment: string;
  createdAt: string;
  likes: number;
  replies: Reply[];
};
