"use client";

import { Icon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { BrevoMeetingPopover, useBrevoPopoverId } from "@/components/layout/BrevoMeetingDialog";
import { Button } from "@/components/ui/Button";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { COMPANY } from "@/lib/site";
import { cn } from "@/lib/cn";
import { ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useId, useState } from "react";

/** Pre-localized nav entries built on the server, so content modules stay out of this bundle. */
export type NavEntry = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  icon: string;
};

export function NavbarClient({
  featured,
  industries,
  solutions,
  technologies,
  technologiesPreview,
}: {
  featured: NavEntry[];
  industries: NavEntry[];
  solutions: NavEntry[];
  technologies: string[];
  technologiesPreview: string;
}) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const menuId = useId();
  const bookingPopoverId = useBrevoPopoverId();
  const bookACallLabel = locale === "ar" ? "احجز مكالمة" : "Book a Call";

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

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled || mobile ? "glass" : "bg-transparent",
      )}
    >
      <div className="hidden border-b border-line lg:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-4 px-4 text-xs text-foreground/80 sm:px-6">
          <div className="flex min-w-0 items-center gap-4">
            <a
              href={`mailto:${COMPANY.emailInfo}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Mail className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              {COMPANY.emailInfo}
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="hidden items-center gap-1.5 transition-colors hover:text-foreground xl:inline-flex"
            >
              <Mail className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              {COMPANY.email}
            </a>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              dir="ltr"
            >
              <Phone className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              {COMPANY.phone}
            </a>
            <span className="hidden items-center gap-1.5 2xl:inline-flex">
              <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              {t("location")}
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-2.5">
            <button
              type="button"
              onClick={switchLocale}
              className="relative rounded-full px-2.5 py-1 text-xs font-medium text-foreground/80 btn-animate-soft hover:bg-foreground/10 hover:text-foreground"
              aria-label={locale === "en" ? t("switchToArabic") : t("switchToEnglish")}
            >
              {locale === "en" ? "العربية" : "English"}
            </button>
            <ThemeToggle />
            <SocialLinks size="sm" />
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="REPLA"
            width={40}
            height={40}
            priority
            sizes="40px"
            className="h-10 w-10 rounded-full"
          />
          <span className="font-display text-lg font-semibold tracking-wide text-foreground">REPLA</span>
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
                  {technologies.map((tech) => (
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
                  {featured.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="flex items-start gap-2 rounded-lg p-2 hover:bg-foreground/5"
                      >
                        <Icon name={s.icon} className="mt-0.5 h-4 w-4 text-brand" />
                        <span className="min-w-0">
                          <span className="block text-sm text-foreground">{s.title}</span>
                          <span className="block text-xs text-muted line-clamp-2">{s.tagline}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
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
                    className="flex items-center gap-2 rounded-lg p-2 text-sm text-foreground/90 hover:bg-foreground/5"
                  >
                    <Icon name={i.icon} className="h-4 w-4 text-brand" />
                    {i.title}
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
                    className="block rounded-lg p-3 hover:bg-foreground/5"
                  >
                    <span className="font-medium text-foreground">{s.title}</span>
                    <span className="mt-1 block text-sm text-muted">{s.tagline}</span>
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
                  <Link href="/about" className="block rounded-lg px-2 py-2 hover:bg-foreground/5">
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="block rounded-lg px-2 py-2 hover:bg-foreground/5">
                    {t("services")}
                  </Link>
                </li>
                <li>
                  <Link href="/about#values" className="block rounded-lg px-2 py-2 hover:bg-foreground/5">
                    {t("process")}
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="block rounded-lg px-2 py-2 hover:bg-foreground/5">
                    {t("industries")}
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="block rounded-lg px-2 py-2 hover:bg-foreground/5">
                    {t("team")}
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="block rounded-lg px-2 py-2 hover:bg-foreground/5">
                    {t("portfolio")}
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="block rounded-lg px-2 py-2 hover:bg-foreground/5">
                    {t("careers")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block rounded-lg px-2 py-2 hover:bg-foreground/5">
                    {t("contact")}
                  </Link>
                </li>
              </ul>
              <div>
                <p className="text-sm text-muted">{t("partnersNote")}</p>
                <p className="mt-3 text-xs uppercase tracking-widest text-muted">{t("technologies")}</p>
                <p className="mt-2 text-sm text-foreground/80">{technologiesPreview}</p>
              </div>
            </div>
          </Mega>
          <NavLink href="/contact" active={pathname === "/contact"}>
            {t("contact")}
          </NavLink>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            type="button"
            size="sm"
            className="btn-slide-round hover:!bg-brand"
            popoverTarget={bookingPopoverId}
            popoverTargetAction="show"
          >
            {bookACallLabel}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle className="h-10 w-10" />
          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-line btn-animate-soft"
            aria-expanded={mobile}
            aria-label={mobile ? t("closeMenu") : t("openMenu")}
            onClick={() => setMobile((v) => !v)}
          >
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobile ? (
        <div className="border-t border-line lg:hidden">
          <div className="mx-auto flex max-h-[80vh] max-w-7xl flex-col gap-1 overflow-y-auto px-4 py-4">
            <MobileLink href="/">{t("home")}</MobileLink>
            <p className="px-2 pt-3 text-xs uppercase tracking-widest text-muted">{t("services")}</p>
            {featured.slice(0, 8).map((s) => (
              <MobileLink key={s.slug} href={`/services/${s.slug}`}>
                {s.shortTitle}
              </MobileLink>
            ))}
            <MobileLink href="/services">{t("viewAll")}</MobileLink>
            <MobileLink href="/industries">{t("industries")}</MobileLink>
            <MobileLink href="/solutions">{t("solutions")}</MobileLink>
            <MobileLink href="/about">{t("about")}</MobileLink>
            <MobileLink href="/team">{t("team")}</MobileLink>
            <MobileLink href="/portfolio">{t("portfolio")}</MobileLink>
            <MobileLink href="/careers">{t("careers")}</MobileLink>
            <MobileLink href="/contact">{t("contact")}</MobileLink>
            <div className="mt-4 flex flex-col gap-3 border-t border-line pt-4">
              <a href={`mailto:${COMPANY.emailInfo}`} className="text-sm text-muted">
                {COMPANY.emailInfo}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="text-sm text-muted">
                {COMPANY.email}
              </a>
              <a href={COMPANY.phoneHref} className="text-sm text-muted" dir="ltr">
                {COMPANY.phone}
              </a>
              <SocialLinks />
              <button
                type="button"
                onClick={switchLocale}
                className="relative min-h-11 self-start rounded-full border border-line px-4 py-2.5 text-sm font-medium btn-animate"
              >
                {locale === "en" ? "العربية" : "English"}
              </button>
              <Button
                type="button"
                className="btn-slide-round hover:!bg-brand"
                popoverTarget={bookingPopoverId}
                popoverTargetAction="show"
                onClick={() => setMobile(false)}
              >
                {bookACallLabel}
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      <BrevoMeetingPopover
        id={bookingPopoverId}
        title={bookACallLabel}
        closeLabel={t("closeMenu")}
      />
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
        "relative rounded-full px-3 py-2 text-sm font-medium btn-animate-soft",
        active ? "text-brand" : "text-foreground/80 hover:text-foreground",
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
          "relative inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground/80 btn-animate-soft hover:text-foreground",
          open && "text-foreground",
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
    <Link
      href={href}
      className="relative flex min-h-11 items-center rounded-lg px-2 py-2.5 font-medium text-foreground/90 btn-animate-soft hover:bg-foreground/5"
    >
      {children}
    </Link>
  );
}
