import { getFeaturedServices } from "@/content/services";
import { loc, type Locale } from "@/content/types";
import { companyCopy } from "@/content/company";
import { Link } from "@/i18n/navigation";
import { COMPANY } from "@/lib/site";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

export async function Footer() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("footer");
  const tn = await getTranslations("nav");
  const featured = getFeaturedServices();

  return (
    <footer className="border-t border-line bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image src="/logo.png" alt="REPLA" width={40} height={40} className="h-10 w-10 rounded-full" />
            <span className="font-display text-lg font-semibold">REPLA</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {loc(companyCopy.footerBlurb, locale)}
          </p>
          <a
            href={COMPANY.linkedin}
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-brand"
            rel="noreferrer"
            target="_blank"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.5h4.56V24H.22V8.5zM8.34 8.5h4.37v2.11h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v8.77h-4.56V16.3c0-1.84-.03-4.21-2.57-4.21-2.57 0-2.96 2-2.96 4.07V24H8.34V8.5z" />
            </svg>
            LinkedIn
          </a>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted">{t("company")}</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-brand">
                {tn("about")}
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-brand">
                {tn("team")}
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-brand">
                {tn("careers")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand">
                {tn("contact")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted">{t("services")}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {featured.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-brand">
                  {loc(s.shortTitle, locale)}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services/ui-ux-design" className="hover:text-brand">
                UI/UX
              </Link>
            </li>
            <li>
              <Link href="/services/iot-embedded-systems" className="hover:text-brand">
                IoT
              </Link>
            </li>
            <li>
              <Link href="/services/blockchain-web3" className="hover:text-brand">
                Web3
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted">{t("resources")}</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/portfolio" className="hover:text-brand">
                {tn("portfolio")}
              </Link>
            </li>
            <li>
              <Link href="/insights" className="hover:text-brand">
                {tn("insights")}
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-brand">
                {tn("faq")}
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-brand">
                {t("privacy")}
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-brand">
                {t("terms")}
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-xs font-medium uppercase tracking-widest text-muted">
            {t("contactInfo")}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <a href={COMPANY.phoneHref} className="hover:text-white" dir="ltr">
                {COMPANY.phone} ({t("hr")})
              </a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                {COMPANY.email}
              </a>
            </li>
            <li>{COMPANY.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-muted sm:px-6">
          © {COMPANY.copyrightYear} {COMPANY.shortName}. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
