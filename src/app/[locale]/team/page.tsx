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
    title: locale === "ar" ? "الفريق" : "Team",
    description: loc(companyCopy.emptyTeamBody, locale as Locale),
    path: "/team",
  });
}

export default async function TeamPage({
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
        eyebrow={tn("team")}
        title={l === "en" ? "Team" : "الفريق"}
        description={loc(companyCopy.emptyTeamBody, l)}
      />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <EmptyState
          title={loc(companyCopy.emptyTeamTitle, l)}
          body={loc(companyCopy.emptyTeamBody, l)}
          cta={te("cta")}
          href="/contact"
        />
      </section>
    </>
  );
}
