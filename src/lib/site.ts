export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://replatechnologies.com";

export const COMPANY = {
  legalName: "REPLA Technologies Pvt. Ltd.",
  shortName: "REPLA Technologies",
  brand: "REPLA",
  founded: 2019,
  hqCountry: "Saudi Arabia",
  hqCity: "Riyadh",
  address:
    "Riyadh - Taif Road, Riyadh, 'Asir SA, Riyadh, Saudi Arabia",
  phone: "+92 335 0970604",
  phoneHref: "tel:+923350970604",
  email: "hr.replatech@gmail.com",
  emailInfo: "info@replatechnologies.co.uk",
  linkedin: "https://www.linkedin.com/company/replatech",
  instagram: "https://www.instagram.com/replatechnologies/",
  facebook: "https://www.facebook.com/replatechnologies",
  youtube: "https://www.youtube.com/@replatechnologies",
  copyrightYear: 2026,
} as const;

export const TECHNOLOGIES = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "Azure",
  "GCP",
  "Docker",
  "Kubernetes",
  "Flutter",
  "Sanity",
] as const;
