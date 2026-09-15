import { PageHero } from "@/components/ui/PageHero";
import { getInsight, insights } from "@/content/insights";
import { getService } from "@/content/services";
import { loc, locList, type Locale } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { pageMetadata } from "@/lib/metadata";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    insights.map((i) => ({ locale, slug: i.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getInsight(slug);
  if (!article) return {};
  return pageMetadata({
    locale: locale as Locale,
    title: loc(article.title, locale as Locale),
    description: loc(article.excerpt, locale as Locale),
    path: `/insights/${slug}`,
  });
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const article = getInsight(slug);
  if (!article) notFound();
  const l = locale as Locale;
  const tc = await getTranslations("common");

  return (
    <>
      <PageHero title={loc(article.title, l)} description={loc(article.excerpt, l)} />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-sm text-muted">{tc("insightsBy")}</p>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-white/80">
          {locList(article.body, l).map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <h2 className="mt-12 font-display text-xl font-semibold text-white">{tc("relatedServices")}</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {article.relatedServices.map((s) => {
            const svc = getService(s);
            if (!svc) return null;
            return (
              <li key={s}>
                <Link href={`/services/${s}`} className="text-brand hover:underline">
                  {loc(svc.title, l)}
                </Link>
              </li>
            );
          })}
        </ul>
      </article>
    </>
  );
}
