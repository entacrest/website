import {
  JobOpenings,
  TrustedPartners,
  WhyEntacrest,
  WorkBenefits,
} from "@/types/global";

export const whyEntacrest: WhyEntacrest[] = [
  {
    icon: "/icons/security-safe.svg",
    heading: "Security",
    text: "Our solutions are built with advanced security layers to safeguard your data from cyber threats and breaches.",
  },
  {
    icon: "/icons/airdrop.svg",
    heading: "Efficient",
    text: "Seamlessly execute business operations with our tailored software, designed for speed and ease of use.",
  },
  {
    icon: "/icons/like.svg",
    heading: "Reliable",
    text: "We develop scalable and high-performance solutions, ensuring seamless operations with minimal downtime.",
  },
  {
    icon: "/icons/recovery-convert.svg",
    heading: "User-Friendly",
    text: "Our products are intuitive and easy to use, providing a seamless experience that enhances productivity.",
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
      "We prioritize the well-being of our team by offering comprehensive health benefits, including medical, dental, and vision coverage, along with mental health support and wellness programs to keep our employees healthy and thriving.",
    iconSrc: "/icons/hospital.svg",
  },
  {
    title: "Flexible hours",
    description:
      "We offer flexible working hours to support work-life balance, allowing our team to manage their schedules in a way that works best for them and their productivity.",
    iconSrc: "/icons/building.svg",
  },
  {
    title: "Growth Opportunities",
    description:
      "We invest in our team’s growth through continuous learning, mentorship, and clear career development paths, empowering employees to reach their full potential.",
    iconSrc: "/icons/receipt-square.svg",
  },
];
