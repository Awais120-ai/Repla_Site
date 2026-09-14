import { insights } from "@/content/insights";
import { industries } from "@/content/industries";
import { services } from "@/content/services";
import { solutions } from "@/content/solutions";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";
import type { MetadataRoute } from "next";

const staticPaths = [
  "",
  "/about",
  "/services",
  "/industries",
  "/solutions",
  "/portfolio",
  "/team",
  "/contact",
  "/careers",
  "/insights",
  "/faq",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...services.map((s) => `/services/${s.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...solutions.map((s) => `/solutions/${s.slug}`),
    ...insights.map((i) => `/insights/${i.slug}`),
  ];

  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${SITE_URL}/en${path}`,
          ar: `${SITE_URL}/ar${path}`,
        },
      },
    })),
  );
}
