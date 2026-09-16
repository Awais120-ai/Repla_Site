import { Icon } from "@/components/icons";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { loc, type Locale } from "@/content/types";
import { solutions } from "@/content/solutions";
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
    title: locale === "ar" ? "الحلول" : "Solutions",
    description:
      locale === "ar"
        ? "عروض مسمّاة: موارد بشرية، منصة ذكاء اصطناعي، SaaS، خزائن ذكية، روبوت انضمام، وCRM/ERP."
        : "Named offerings: HR & workforce, enterprise AI, SaaS suite, smart lockers, onboarding chatbot, and custom CRM/ERP.",
    path: "/solutions",
  });
}

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const tn = await getTranslations("nav");

  return (
    <>
      <PageHero
        eyebrow={tn("solutions")}
        title={l === "en" ? "Solutions" : "الحلول"}
        description={
          l === "en"
            ? "Named product directions from our live catalog — each one maps to services we already deliver."
            : "اتجاهات منتجات مسمّاة من الفهرس الحالي — كل واحد يرتبط بخدمات نقدمها أصلاً."
        }
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <Link
                href={`/solutions/${s.slug}`}
                className="card-hover block h-full rounded-2xl border border-line bg-surface p-6"
              >
              <Icon name={s.icon} className="h-6 w-6 text-brand" />
              <h2 className="mt-4 font-display text-2xl font-semibold text-foreground">{loc(s.title, l)}</h2>
              <p className="mt-2 text-sm text-muted">{loc(s.tagline, l)}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
