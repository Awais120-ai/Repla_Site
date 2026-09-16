import { Icon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import { CTASection, PageHero } from "@/components/ui/PageHero";
import { getIndustry, industries } from "@/content/industries";
import { getService } from "@/content/services";
import { loc, locList, type Locale } from "@/content/types";
import { companyCopy } from "@/content/company";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { pageMetadata } from "@/lib/metadata";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    industries.map((i) => ({ locale, slug: i.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return pageMetadata({
    locale: locale as Locale,
    title: loc(industry.title, locale as Locale),
    description: loc(industry.description, locale as Locale),
    path: `/industries/${slug}`,
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const industry = getIndustry(slug);
  if (!industry) notFound();
  const l = locale as Locale;
  const tc = await getTranslations("common");
  const tn = await getTranslations("nav");

  return (
    <>
      <PageHero
        eyebrow={tn("industries")}
        title={loc(industry.title, l)}
        description={loc(industry.tagline, l)}
      />
      <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-6 text-brand">
          <Icon name={industry.icon} className="h-8 w-8" />
        </div>
        <p className="max-w-3xl leading-relaxed text-muted">{loc(industry.description, l)}</p>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">{tc("challenges")}</h2>
            <ul className="mt-4 space-y-3">
              {locList(industry.challenges, l).map((item) => (
                <li key={item} className="rounded-xl border border-line bg-surface p-4 text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">{tc("howWeHelp")}</h2>
            <ul className="mt-4 space-y-3">
              {locList(industry.capabilities, l).map((item) => (
                <li key={item} className="rounded-xl border border-line bg-surface p-4 text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-foreground">{tc("relatedServices")}</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {industry.relatedServices.map((s) => {
              const svc = getService(s);
              if (!svc) return null;
              return (
                <li key={s}>
                  <Link
                    href={`/services/${s}`}
                    className="inline-flex rounded-full border border-line px-3 py-1 text-sm hover:border-brand/50"
                  >
                    {loc(svc.shortTitle, l)}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-8">
            <ButtonLink href="/contact">{tn("startProject")}</ButtonLink>
          </div>
        </section>
      </article>
      <CTASection
        title={loc(companyCopy.ctaTitle, l)}
        body={loc(companyCopy.ctaBody, l)}
        primary={{ href: "/contact", label: tn("startProject") }}
        secondary={{ href: "/industries", label: tc("allIndustries") }}
      />
    </>
  );
}
