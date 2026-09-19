export const SERVICE_VALUES = [
  "web-development",
  "mobile-app-development",
  "software-development",
  "ui-ux-design",
  "ai-machine-learning",
  "cloud-devops",
  "saas-development",
  "custom-software",
  "other",
] as const;

export const INDUSTRY_VALUES = [
  "healthcare",
  "fintech",
  "ecommerce",
  "education",
  "real-estate",
  "logistics",
  "saas-technology",
  "travel-hospitality",
  "entertainment",
  "other",
] as const;

export const BUDGET_VALUES = [
  "under-5k",
  "5k-10k",
  "10k-25k",
  "25k-50k",
  "50k-plus",
  "not-sure",
] as const;

export const TIMELINE_VALUES = [
  "asap",
  "within-1-month",
  "1-3-months",
  "3-6-months",
  "6-plus-months",
  "not-decided",
] as const;

export const SOURCE_VALUES = [
  "google",
  "linkedin",
  "social-media",
  "referral",
  "existing-client",
  "other",
] as const;

export type ServiceValue = (typeof SERVICE_VALUES)[number];
export type IndustryValue = (typeof INDUSTRY_VALUES)[number];
export type BudgetValue = (typeof BUDGET_VALUES)[number];
export type TimelineValue = (typeof TIMELINE_VALUES)[number];
export type SourceValue = (typeof SOURCE_VALUES)[number];

/** English labels for outbound email — UI copy lives in next-intl messages. */
export const SERVICE_LABELS: Record<ServiceValue, string> = {
  "web-development": "Web Development",
  "mobile-app-development": "Mobile App Development",
  "software-development": "Software Development",
  "ui-ux-design": "UI/UX Design",
  "ai-machine-learning": "AI & Machine Learning",
  "cloud-devops": "Cloud & DevOps",
  "saas-development": "SaaS Development",
  "custom-software": "Custom Software Solution",
  other: "Other",
};

export const INDUSTRY_LABELS: Record<IndustryValue, string> = {
  healthcare: "Healthcare",
  fintech: "FinTech",
  ecommerce: "E-commerce",
  education: "Education",
  "real-estate": "Real Estate",
  logistics: "Logistics",
  "saas-technology": "SaaS / Technology",
  "travel-hospitality": "Travel & Hospitality",
  entertainment: "Entertainment",
  other: "Other",
};

export const BUDGET_LABELS: Record<BudgetValue, string> = {
  "under-5k": "Under $5K",
  "5k-10k": "$5K – $10K",
  "10k-25k": "$10K – $25K",
  "25k-50k": "$25K – $50K",
  "50k-plus": "$50K+",
  "not-sure": "Not sure yet",
};

export const TIMELINE_LABELS: Record<TimelineValue, string> = {
  asap: "ASAP",
  "within-1-month": "Within 1 Month",
  "1-3-months": "1–3 Months",
  "3-6-months": "3–6 Months",
  "6-plus-months": "6+ Months",
  "not-decided": "Not Decided Yet",
};

export const SOURCE_LABELS: Record<SourceValue, string> = {
  google: "Google",
  linkedin: "LinkedIn",
  "social-media": "Social Media",
  referral: "Referral",
  "existing-client": "Existing Client",
  other: "Other",
};

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(value: string) {
  const v = value.trim();
  return EMAIL_PATTERN.test(v) && !v.includes(" ");
}

export function labelOf<T extends string>(
  map: Record<T, string>,
  value: string | undefined,
) {
  if (!value) return "—";
  return map[value as T] ?? value;
}
