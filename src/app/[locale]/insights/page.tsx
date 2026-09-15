import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { insights } from "@/content/insights";
import { loc, type Locale } from "@/content/types";
import { Link } from "@/i18n/navigation";
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
    title: locale === "ar" ? "رؤى" : "Insights",
    description:
      locale === "ar"
        ? "مقالات دائمة حول الخدمات التي تقدمها REPLA فعلياً — دون عملاء أو مؤلفين مخترعين."
        : "Evergreen articles about the services REPLA actually delivers — no invented clients or authors.",
    path: "/insights",
  });
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const tn = await getTranslations("nav");
  const tc = await getTranslations("common");

  return (
    <>
      <PageHero
        eyebrow={tn("insights")}
        title={l === "en" ? "Insights" : "رؤى"}
        description={tc("insightsBy")}
      />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <ul className="space-y-4">
          {insights.map((article, i) => (
            <li key={article.slug}>
              <Reveal delay={i * 0.04}>
                <Link
                  href={`/insights/${article.slug}`}
                  className="card-hover block rounded-2xl border border-line bg-surface p-6"
                >
                <h2 className="font-display text-2xl font-semibold text-white">{loc(article.title, l)}</h2>
                <p className="mt-2 text-sm text-muted">{loc(article.excerpt, l)}</p>
                <span className="mt-4 inline-block text-sm text-brand">{tc("readMore")}</span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
