import { IndustryCard } from "@/components/ui/Cards";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/content/industries";
import { loc, type Locale } from "@/content/types";
import { pageMetadata } from "@/lib/metadata";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale: locale as Locale,
    title: locale === "ar" ? "الصناعات" : "Industries",
    description:
      locale === "ar"
        ? "حلول متخصصة عبر الرعاية الصحية والتقنية المالية والتعليم والعقارات والمزيد."
        : "Specialized solutions across healthcare, fintech, education, real estate, and more.",
    path: "/industries",
  });
}

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const tn = await getTranslations("nav");
  const t = await getTranslations("home");

  return (
    <>
      <PageHero eyebrow={tn("industries")} title={t("industries")} description={t("industriesSub")} />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 0.03}>
              <IndustryCard
                href={`/industries/${ind.slug}`}
                icon={ind.icon}
                title={loc(ind.title, l)}
                tagline={loc(ind.tagline, l)}
              />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
