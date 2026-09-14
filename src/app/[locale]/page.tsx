import { ButtonLink } from "@/components/ui/Button";
import { IndustryCard, ServiceCard } from "@/components/ui/Cards";
import { CTASection } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatCounter } from "@/components/ui/StatCounter";
import { companyCopy } from "@/content/company";
import { industries } from "@/content/industries";
import { getFeaturedServices } from "@/content/services";
import { loc, type Locale } from "@/content/types";
import { pageMetadata } from "@/lib/metadata";
import { Icon } from "@/components/icons";
import { TechSlider } from "@/components/ui/TechSlider";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return pageMetadata({
    locale: locale as Locale,
    title: "Home",
    description: t("homeDescription"),
    path: "/",
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const t = await getTranslations("home");
  const tn = await getTranslations("nav");
  const tc = await getTranslations("common");
  const featured = getFeaturedServices();

  return (
    <>
      <section className="relative overflow-hidden grain">
        <div className="pointer-events-none absolute inset-0">
          <div className="glow-orb absolute -top-32 start-1/2 h-[32rem] w-[32rem] -translate-x-1/2" />
          <div className="absolute inset-0 grid-bg" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="inline-flex rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              {loc(companyCopy.eyebrow, l)}
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] text-white sm:text-6xl">
              {loc(companyCopy.heroTitle, l)}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {loc(companyCopy.heroBody, l)}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/services" size="lg">
                {tn("exploreServices")}
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                {tn("contact")}
              </ButtonLink>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="rounded-3xl border border-line bg-surface/80 p-6">
              <p className="text-xs uppercase tracking-widest text-muted">{tn("services")}</p>
              <ul className="mt-4 space-y-3">
                {featured.slice(0, 5).map((s, i) => (
                  <li
                    key={s.slug}
                    className="card-hover card-enter flex items-center gap-3 rounded-xl border border-white/5 bg-white/3 px-3 py-3"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/15 text-brand">
                      <Icon name={s.icon} className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-white">{loc(s.shortTitle, l)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-line bg-surface-2 py-12" aria-label={loc(companyCopy.technologiesLabel, l)}>
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="glow-orb absolute start-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <p className="relative mb-8 text-center text-xs uppercase tracking-[0.2em] text-muted">
          {loc(companyCopy.technologiesLabel, l)}
        </p>
        <TechSlider />
        <p className="relative mt-6 text-center text-xs text-muted">{loc(companyCopy.technologiesNote, l)}</p>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <SectionHeader
            eyebrow={tn("about")}
            title={loc(companyCopy.aboutTeaserTitle, l)}
            description={loc(companyCopy.aboutTeaserBody, l)}
          />
          <div className="mt-6">
            <ButtonLink href="/about" variant="secondary">
              {t("aboutCta")}
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="grid grid-cols-2 gap-3 overflow-x-clip">
          {companyCopy.stats.map((s) => (
            <StatCounter
              key={s.value}
              value={s.value}
              numeric={s.numeric}
              suffix={s.suffix}
              label={loc(s.label, l)}
            />
          ))}
        </Reveal>
      </section>

      <section className="border-y border-line bg-black/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader eyebrow={tn("services")} title={t("coreServices")} description={t("coreServicesSub")} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.04}>
                <ServiceCard
                  href={`/services/${s.slug}`}
                  icon={s.icon}
                  title={loc(s.title, l)}
                  description={loc(s.description, l)}
                  cta={tc("viewService")}
                  featured={i === 0}
                />
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/services" variant="secondary">
              {tc("allServices")}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeader title={loc(companyCopy.whyTitle, l)} description={loc(companyCopy.whySubtitle, l)} />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {companyCopy.why.map((item, i) => (
            <Reveal key={item.title.en} delay={i * 0.05}>
              <div className="card-hover h-full rounded-2xl border border-line bg-surface p-6">
                <p className="font-display text-xl font-semibold text-white">{loc(item.title, l)}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{loc(item.body, l)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="industries" className="border-t border-line py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader title={t("industries")} description={t("industriesSub")} />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </section>

      <CTASection
        title={loc(companyCopy.ctaTitle, l)}
        body={loc(companyCopy.ctaBody, l)}
        primary={{ href: "/contact", label: tn("startProject") }}
        secondary={{ href: "/services", label: tn("exploreServices") }}
      />
    </>
  );
}
