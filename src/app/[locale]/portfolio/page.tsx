import { EmptyState } from "@/components/ui/Cards";
import { PageHero } from "@/components/ui/PageHero";
import { companyCopy } from "@/content/company";
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
    title: locale === "ar" ? "الأعمال" : "Portfolio",
    description: loc(companyCopy.emptyPortfolioBody, locale as Locale),
    path: "/portfolio",
  });
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const tn = await getTranslations("nav");
  const te = await getTranslations("empty");

  return (
    <>
      <PageHero
        eyebrow={tn("portfolio")}
        title={l === "en" ? "Portfolio / Case studies" : "الأعمال / دراسات الحالة"}
        description={loc(companyCopy.emptyPortfolioBody, l)}
      />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <EmptyState
          title={loc(companyCopy.emptyPortfolioTitle, l)}
          body={loc(companyCopy.emptyPortfolioBody, l)}
          cta={te("cta")}
          href="/contact"
        />
      </section>
    </>
  );
}
