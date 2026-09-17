"use client";

import { Reveal } from "@/components/ui/Reveal";
import { loc, type Locale } from "@/content/types";
import { cn } from "@/lib/cn";
import { Briefcase, Cpu, Handshake, ShieldCheck, type LucideIcon } from "lucide-react";
import { useState } from "react";

const icons: Record<string, LucideIcon> = {
  Cpu,
  Briefcase,
  ShieldCheck,
  Handshake,
};

type Item = {
  icon: string;
  title: { en: string; ar: string };
  body: { en: string; ar: string };
};

export function WhyChooseCards({ locale, items }: { locale: Locale; items: Item[] }) {
  // Track which card is open so flex never resets all siblings while crossing the gap.
  const [active, setActive] = useState(0);

  return (
    <>
      <style>{whyChooseRowCss}</style>
      <div
        className="why-choose-row mt-10 hidden h-72 gap-4 lg:flex"
        onMouseLeave={() => setActive(0)}
      >
        {items.map((item, i) => (
          <WhyChooseCard
            key={item.title.en}
            item={item}
            locale={locale}
            variant="row"
            active={active === i}
            onActivate={() => setActive(i)}
          />
        ))}
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:hidden">
        {items.map((item, i) => (
          <Reveal key={item.title.en} delay={i * 0.05}>
            <WhyChooseCard item={item} locale={locale} variant="grid" />
          </Reveal>
        ))}
      </div>
    </>
  );
}

function WhyChooseCard({
  item,
  locale,
  variant,
  active = false,
  onActivate,
}: {
  item: Item;
  locale: Locale;
  variant: "row" | "grid";
  active?: boolean;
  onActivate?: () => void;
}) {
  const Icon = icons[item.icon] ?? Cpu;

  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-2xl border bg-surface p-6",
        variant === "grid" && "card-hover border-line",
        variant === "row" &&
          "why-choose-card border-line transition-[flex-grow,border-color,box-shadow] duration-500 ease-out",
        variant === "row" && (active ? "why-choose-card-active" : "why-choose-card-idle"),
      )}
      onMouseEnter={onActivate}
    >
      {variant === "row" ? (
        <div
          className="why-choose-glow pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(196,30,36,0.16),transparent_55%)] opacity-0 transition-opacity duration-500"
          aria-hidden="true"
        />
      ) : null}
      <div className="relative flex min-h-0 flex-1 flex-col">
        <div className="why-choose-icon mb-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand transition-colors duration-500">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <h3 className="font-display text-xl font-semibold text-foreground">{loc(item.title, locale)}</h3>
        <p
          className={cn(
            "mt-2 text-sm leading-relaxed text-muted",
            variant === "row" && "why-choose-copy",
          )}
        >
          {loc(item.body, locale)}
        </p>
      </div>
    </article>
  );
}

const whyChooseRowCss = `
.why-choose-row .why-choose-card-idle {
  flex: 1 1 0%;
  border-color: var(--line);
  box-shadow: none;
}
.why-choose-row .why-choose-card-active {
  flex: 2.5 1 0%;
  border-color: color-mix(in srgb, var(--brand) 45%, transparent);
  box-shadow: 0 18px 50px rgba(196, 30, 36, 0.14);
}
.why-choose-row .why-choose-copy {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0.7;
  max-height: 4.875em;
  transition: opacity 0.45s ease-out;
}
.why-choose-row .why-choose-card-active .why-choose-glow {
  opacity: 1;
}
.why-choose-row .why-choose-card-active .why-choose-copy {
  display: block;
  -webkit-line-clamp: unset;
  line-clamp: unset;
  overflow: visible;
  max-height: none;
  opacity: 1;
}
.why-choose-row .why-choose-card-active .why-choose-icon {
  border-color: color-mix(in srgb, var(--brand) 50%, transparent);
  background: color-mix(in srgb, var(--brand) 20%, transparent);
}
@media (prefers-reduced-motion: reduce) {
  .why-choose-row .why-choose-card {
    transition-duration: 0.2s;
  }
  .why-choose-row .why-choose-copy {
    transition-duration: 0.2s;
  }
}
`;
