import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PageHero } from "@/components/ui/PageHero";
import { companyCopy } from "@/content/company";
import { generalFaqs } from "@/content/faqs";
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
    title: locale === "ar" ? "الأسئلة الشائعة" : "FAQ",
    description: loc(companyCopy.faqIntro, locale as Locale),
    path: "/faq",
  });
}

export default async function FaqPage({
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
      <PageHero eyebrow={tn("faq")} title={tn("faq")} description={loc(companyCopy.faqIntro, l)} />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <FaqAccordion items={generalFaqs.map((f) => ({ q: loc(f.q, l), a: loc(f.a, l) }))} />
      </section>
    </>
  );
}
