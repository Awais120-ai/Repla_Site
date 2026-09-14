import { PageHero } from "@/components/ui/PageHero";
import { terms } from "@/content/legal";
import { loc, locList, type Locale } from "@/content/types";
import { pageMetadata } from "@/lib/metadata";
import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale: locale as Locale,
    title: loc(terms.title, locale as Locale),
    description: loc(terms.updated, locale as Locale),
    path: "/terms",
  });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  return (
    <>
      <PageHero title={loc(terms.title, l)} description={loc(terms.updated, l)} />
      <article className="mx-auto max-w-3xl space-y-10 px-4 py-16 sm:px-6">
        {terms.sections.map((section) => (
          <section key={section.title.en}>
            <h2 className="font-display text-2xl text-white">{loc(section.title, l)}</h2>
            {locList(section.body, l).map((p) => (
              <p key={p.slice(0, 20)} className="mt-3 leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </section>
        ))}
      </article>
    </>
  );
}
