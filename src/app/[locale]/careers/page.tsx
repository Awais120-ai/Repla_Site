import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { companyCopy } from "@/content/company";
import { loc, type Locale } from "@/content/types";
import { COMPANY } from "@/lib/site";
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
    title: locale === "ar" ? "الوظائف" : "Careers",
    description: loc(companyCopy.careersIntro, locale as Locale),
    path: "/careers",
  });
}

export default async function CareersPage({
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
        eyebrow={tn("careers")}
        title={l === "en" ? "Careers" : "الوظائف"}
        description={loc(companyCopy.careersIntro, l)}
      />
      <section className="mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-muted">
            {l === "en"
              ? "Send an open application to HR. There are no invented job listings on this page."
              : "أرسلوا طلباً مفتوحاً إلى الموارد البشرية. لا توجد قوائم وظائف مختلقة في هذه الصفحة."}
          </p>
          <a href={`mailto:${COMPANY.email}`} className="mt-4 inline-block text-brand hover:underline">
            {COMPANY.email}
          </a>
        </div>
        <ContactForm
          defaultSubject={l === "en" ? "Open application — careers" : "طلب مفتوح — وظائف"}
        />
      </section>
    </>
  );
}
