import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { companyCopy } from "@/content/company";
import { loc, type Locale } from "@/content/types";
import { COMPANY, SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { Mail, MapPin, Phone } from "lucide-react";
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
    title: locale === "ar" ? "اتصل بنا" : "Contact Us",
    description: loc(companyCopy.contactIntro, locale as Locale),
    path: "/contact",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const tn = await getTranslations("nav");
  const tc = await getTranslations("common");
  const tf = await getTranslations("footer");

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: COMPANY.shortName,
          url: `${SITE_URL}/${locale}/contact`,
        }}
      />
      <PageHero eyebrow={tn("contact")} title={tn("contact")} description={loc(companyCopy.contactIntro, l)} />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <a
            href={COMPANY.phoneHref}
            className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-5 hover:border-brand/40"
          >
            <Phone className="mt-0.5 h-5 w-5 text-brand" />
            <span>
              <span className="block text-sm text-muted">{tc("phone")}</span>
              <span className="text-foreground" dir="ltr">
                {COMPANY.phone} ({tf("hr")})
              </span>
            </span>
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-5 hover:border-brand/40"
          >
            <Mail className="mt-0.5 h-5 w-5 text-brand" />
            <span>
              <span className="block text-sm text-muted">{tc("email")}</span>
              <span className="text-foreground">{COMPANY.email}</span>
            </span>
          </a>
          <div className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-5">
            <MapPin className="mt-0.5 h-5 w-5 text-brand" />
            <span>
              <span className="block text-sm text-muted">{tc("office")}</span>
              <span className="text-foreground">{COMPANY.address}</span>
            </span>
          </div>
          <a
            href={COMPANY.linkedin}
            className="inline-flex text-sm text-brand hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {tc("linkedin")}
          </a>
        </div>
        <ContactForm />
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <h2 className="sr-only">{tc("map")}</h2>
        <div className="overflow-hidden rounded-2xl border border-line">
          <iframe
            title={tc("map")}
            className="h-[320px] w-full grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=Riyadh%20Taif%20Road%20Riyadh%20Saudi%20Arabia&z=12&output=embed"
          />
        </div>
      </section>
    </>
  );
}
