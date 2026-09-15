"use client";

import { Icon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { solutions } from "@/content/solutions";
import { loc, type Locale } from "@/content/types";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { COMPANY, TECHNOLOGIES } from "@/lib/site";
import { cn } from "@/lib/cn";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useId, useState } from "react";

const featuredNav = [
  "ai-intelligent-automation",
  "custom-software-development",
  "web-development",
  "mobile-app-development",
  "cloud-devops",
  "cybersecurity",
  "iot-embedded-systems",
  "ui-ux-design",
  "quality-assurance",
  "api-development",
  "dedicated-development-teams",
];

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobile(false);
    setOpen(null);
  }, [pathname]);

  const switchLocale = () => {
    router.replace(pathname, { locale: locale === "en" ? "ar" : "en" });
  };

  const featured = featuredNav
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled || mobile ? "glass" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="REPLA" width={40} height={40} className="h-10 w-10 rounded-full" />
          <span className="font-display text-lg font-semibold tracking-wide text-white">REPLA</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <NavLink href="/" active={pathname === "/"}>
            {t("home")}
          </NavLink>
          <Mega
            id={`${menuId}-services`}
            label={t("services")}
            open={open === "services"}
            onOpen={() => setOpen("services")}
            onClose={() => setOpen(null)}
          >
            <div className="grid gap-8 lg:grid-cols-[180px_1fr]">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted">{t("technologies")}</p>
                <ul className="mt-3 space-y-1 text-sm text-muted">
                  {TECHNOLOGIES.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-widest text-muted">{t("services")}</p>
                  <Link href="/services" className="text-sm text-brand hover:underline">
                    {t("viewAll")}
                  </Link>
                </div>
                <ul className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                  {featured.map((s) =>
                    s ? (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="flex items-start gap-2 rounded-lg p-2 hover:bg-white/5"
                        >
                          <Icon name={s.icon} className="mt-0.5 h-4 w-4 text-brand" />
                          <span>
                            <span className="block text-sm text-white">{loc(s.title, locale)}</span>
                            <span className="block text-xs text-muted line-clamp-2">
                              {loc(s.tagline, locale)}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ) : null,
                  )}
                </ul>
              </div>
            </div>
          </Mega>
          <Mega
            id={`${menuId}-industries`}
            label={t("industries")}
            open={open === "industries"}
            onOpen={() => setOpen("industries")}
            onClose={() => setOpen(null)}
          >
            <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link
                    href={`/industries/${i.slug}`}
                    className="flex items-center gap-2 rounded-lg p-2 text-sm text-white/90 hover:bg-white/5"
                  >
                    <Icon name={i.icon} className="h-4 w-4 text-brand" />
                    {loc(i.title, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </Mega>
          <Mega
            id={`${menuId}-solutions`}
            label={t("solutions")}
            open={open === "solutions"}
            onOpen={() => setOpen("solutions")}
            onClose={() => setOpen(null)}
          >
            <ul className="grid gap-2 sm:grid-cols-2">
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/solutions/${s.slug}`}
                    className="block rounded-lg p-3 hover:bg-white/5"
                  >
                    <span className="font-medium text-white">{loc(s.title, locale)}</span>
                    <span className="mt-1 block text-sm text-muted">{loc(s.tagline, locale)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Mega>
          <Mega
            id={`${menuId}-company`}
            label={t("company")}
            open={open === "company"}
            onOpen={() => setOpen("company")}
            onClose={() => setOpen(null)}
          >
            <div className="grid gap-8 sm:grid-cols-2">
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/about" className="block rounded-lg px-2 py-2 hover:bg-white/5">
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="block rounded-lg px-2 py-2 hover:bg-white/5">
                    {t("services")}
                  </Link>
                </li>
                <li>
                  <Link href="/about#values" className="block rounded-lg px-2 py-2 hover:bg-white/5">
                    {t("process")}
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="block rounded-lg px-2 py-2 hover:bg-white/5">
                    {t("industries")}
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="block rounded-lg px-2 py-2 hover:bg-white/5">
                    {t("team")}
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="block rounded-lg px-2 py-2 hover:bg-white/5">
                    {t("portfolio")}
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="block rounded-lg px-2 py-2 hover:bg-white/5">
                    {t("careers")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block rounded-lg px-2 py-2 hover:bg-white/5">
                    {t("contact")}
                  </Link>
                </li>
              </ul>
              <div>
                <p className="text-sm text-muted">{t("partnersNote")}</p>
                <p className="mt-3 text-xs uppercase tracking-widest text-muted">{t("technologies")}</p>
                <p className="mt-2 text-sm text-white/80">{TECHNOLOGIES.slice(0, 6).join(" · ")}</p>
              </div>
            </div>
          </Mega>
          <NavLink href="/contact" active={pathname === "/contact"}>
            {t("contact")}
          </NavLink>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-white"
            dir="ltr"
          >
            <Phone className="h-4 w-4" />
            {COMPANY.phone}
          </a>
          <button
            type="button"
            onClick={switchLocale}
            className="rounded-full border border-white/15 px-3 py-1.5 text-sm font-medium text-white hover:border-brand/50"
            aria-label={locale === "en" ? t("switchToArabic") : t("switchToEnglish")}
          >
            {locale === "en" ? "العربية" : "English"}
          </button>
          <ButtonLink href="/contact" size="sm">
            {t("startProject")}
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 lg:hidden"
          aria-expanded={mobile}
          aria-label={mobile ? t("closeMenu") : t("openMenu")}
          onClick={() => setMobile((v) => !v)}
        >
          {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobile ? (
        <div className="border-t border-line lg:hidden">
          <div className="mx-auto flex max-h-[80vh] max-w-7xl flex-col gap-1 overflow-y-auto px-4 py-4">
            <MobileLink href="/">{t("home")}</MobileLink>
            <p className="px-2 pt-3 text-xs uppercase tracking-widest text-muted">{t("services")}</p>
            {featured.slice(0, 8).map((s) =>
              s ? (
                <MobileLink key={s.slug} href={`/services/${s.slug}`}>
                  {loc(s.shortTitle, locale)}
                </MobileLink>
              ) : null,
            )}
            <MobileLink href="/services">{t("viewAll")}</MobileLink>
            <MobileLink href="/industries">{t("industries")}</MobileLink>
            <MobileLink href="/solutions">{t("solutions")}</MobileLink>
            <MobileLink href="/about">{t("about")}</MobileLink>
            <MobileLink href="/team">{t("team")}</MobileLink>
            <MobileLink href="/portfolio">{t("portfolio")}</MobileLink>
            <MobileLink href="/careers">{t("careers")}</MobileLink>
            <MobileLink href="/contact">{t("contact")}</MobileLink>
            <div className="mt-4 flex flex-col gap-3 border-t border-line pt-4">
              <a href={COMPANY.phoneHref} className="text-sm text-muted" dir="ltr">
                {COMPANY.phone}
              </a>
              <button
                type="button"
                onClick={switchLocale}
                className="self-start rounded-full border border-white/15 px-3 py-1.5 text-sm font-medium"
              >
                {locale === "en" ? "العربية" : "English"}
              </button>
              <ButtonLink href="/contact">{t("startProject")}</ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-full px-3 py-2 text-sm font-medium transition-colors",
        active ? "text-brand" : "text-white/80 hover:text-white",
      )}
    >
      {children}
    </Link>
  );
}

function Mega({
  id,
  label,
  open,
  onOpen,
  onClose,
  children,
}: {
  id: string;
  label: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-white/80 hover:text-white",
          open && "text-white",
        )}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => (open ? onClose() : onOpen())}
        onFocus={onOpen}
      >
        {label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
      </button>
      {open ? (
        <div
          id={id}
          className="absolute start-1/2 top-full z-50 w-[min(920px,calc(100vw-2rem))] -translate-x-1/2 pt-3 rtl:translate-x-1/2"
        >
          <div className="glass rounded-2xl p-6 shadow-2xl">{children}</div>
        </div>
      ) : null}
    </div>
  );
}

function MobileLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="rounded-lg px-2 py-2 font-medium text-white/90 hover:bg-white/5">
      {children}
    </Link>
  );
}
