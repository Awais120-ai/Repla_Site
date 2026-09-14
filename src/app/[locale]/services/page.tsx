import { ServiceCard } from "@/components/ui/Cards";
import { CTASection, PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { companyCopy } from "@/content/company";
import { getCatalogServices } from "@/content/services";
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
    title: locale === "ar" ? "خدماتنا" : "Our Services",
    description:
      locale === "ar"
        ? "محفظة خدمات تقنية معلومات شاملة للمؤسسات الحديثة القائمة على الذكاء الاصطناعي."
        : "Comprehensive IT services portfolio for modern, AI-first enterprises.",
    path: "/services",
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const tc = await getTranslations("common");
  const tn = await getTranslations("nav");
  const all = getCatalogServices();
  const featured = all.filter((s) => s.category === "featured");
  const catalog = all.filter((s) => s.category === "catalog");

  return (
    <>
      <PageHero
        eyebrow={tn("services")}
        title={l === "en" ? "Our Services" : "خدماتنا"}
        description={
          l === "en"
            ? "A complete IT services portfolio for modern, AI-first enterprises — from agents to dedicated teams."
            : "محفظة خدمات تقنية معلومات كاملة للمؤسسات الحديثة القائمة على الذكاء الاصطناعي — من الوكلاء إلى الفرق المخصصة."
        }
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-white">{tc("featured")}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.03}>
              <ServiceCard
                href={`/services/${s.slug}`}
                icon={s.icon}
                title={loc(s.title, l)}
                description={loc(s.description, l)}
                cta={tc("viewService")}
                featured={i < 2}
              />
            </Reveal>
          ))}
        </div>
        <h2 className="mt-16 font-display text-2xl font-semibold text-white">{tc("catalog")}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {catalog.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.03}>
              <ServiceCard
                href={`/services/${s.slug}`}
                icon={s.icon}
                title={loc(s.title, l)}
                description={loc(s.description, l)}
                cta={tc("viewService")}
              />
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection
        title={loc(companyCopy.ctaTitle, l)}
        body={loc(companyCopy.ctaBody, l)}
        primary={{ href: "/contact", label: tn("startProject") }}
      />
    </>
  );
}
