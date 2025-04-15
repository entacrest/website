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
