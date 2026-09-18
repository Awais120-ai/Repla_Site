export type Locale = "en" | "ar";

export type L = Record<Locale, string>;
export type LList = Record<Locale, string[]>;

export function loc(value: L, locale: Locale): string {
  return value[locale];
}

export function locList(value: LList, locale: Locale): string[] {
  return value[locale];
}

export function L(en: string, ar: string): L {
  return { en, ar };
}

export function LL(en: string[], ar: string[]): LList {
  return { en, ar };
}

export type ServiceCategory = "featured" | "catalog" | "specialized";

export type Service = {
  slug: string;
  icon: string;
  category: ServiceCategory;
  parentSlug?: string;
  title: L;
  shortTitle: L;
  tagline: L;
  description: L;
  overview: L;
  problems: LList;
  approach: LList;
  capabilities: LList;
  benefits: LList;
  technologies: string[];
  relatedIndustries: string[];
  relatedServices: string[];
  faqs: { q: L; a: L }[];
};

export type Industry = {
  slug: string;
  icon: string;
  title: L;
  shortTitle: L;
  /** Detail-page H1 (industry-specific software headline). */
  heroTitle: L;
  tagline: L;
  description: L;
  metaTitle: L;
  metaDescription: L;
  overview: L;
  challenges: LList;
  solutions: LList;
  features: LList;
  aiIntro: L;
  aiUseCases: LList;
  technologies: string[];
  whyRepla: LList;
  faqs: { q: L; a: L }[];
  ctaTitle: L;
  ctaBody: L;
  relatedServices: string[];
};

export type Solution = {
  slug: string;
  icon: string;
  title: L;
  tagline: L;
  description: L;
  capabilities: LList;
  relatedServices: string[];
  relatedIndustries: string[];
};

export type Insight = {
  slug: string;
  title: L;
  excerpt: L;
  body: LList;
  relatedServices: string[];
};

export type FaqItem = {
  q: L;
  a: L;
};
