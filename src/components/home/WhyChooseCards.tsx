"use client";

import { Reveal } from "@/components/ui/Reveal";
import { loc, type Locale } from "@/content/types";
import { cn } from "@/lib/cn";
import { Briefcase, Cpu, Handshake, ShieldCheck, type LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";

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

/** Asymmetric bento placement (4-column grid). */
const BENTO_LAYOUT = [
  "col-span-2 row-span-2 sm:row-span-2 max-sm:row-span-1",
  "col-span-2",
  "col-span-2",
  "col-span-2 sm:col-span-4",
] as const;

/** Per-tile accent for gradient hairline + hover glow (Repla brand family). */
const BENTO_GLOWS = ["#c41e24", "#d9383e", "#a81820", "#e85a5f"] as const;

export function WhyChooseCards({ locale, items }: { locale: Locale; items: Item[] }) {
  return (
    <Reveal>
      <div
        className="why-bento-grid mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:[grid-auto-rows:minmax(140px,auto)] lg:gap-[1.125rem]"
        role="list"
      >
        {items.map((item, i) => (
          <WhyChooseBentoCard
            key={item.title.en}
            item={item}
            locale={locale}
            layout={BENTO_LAYOUT[i] ?? "col-span-2"}
            glow={BENTO_GLOWS[i] ?? BENTO_GLOWS[0]}
            featured={i === 0}
          />
        ))}
      </div>
    </Reveal>
  );
}

function WhyChooseBentoCard({
  item,
  locale,
  layout,
  glow,
  featured,
}: {
  item: Item;
  locale: Locale;
  layout: string;
  glow: string;
  featured: boolean;
}) {
  const Icon = icons[item.icon] ?? Cpu;
  const style = { "--bento-glow": glow } as CSSProperties;

  return (
    <article
      role="listitem"
      style={style}
      className={cn(
        "why-bento-card group relative flex flex-col overflow-hidden rounded-[20px] p-6 motion-safe:transition-[transform,box-shadow,border-color] motion-safe:duration-300 motion-safe:ease-out motion-reduce:transition-none",
        layout,
        featured && "min-h-[280px] sm:min-h-0",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
        aria-hidden
        style={{
          background: `radial-gradient(circle at 85% 0%, color-mix(in srgb, ${glow} 22%, transparent), transparent 58%)`,
        }}
      />
      <div className="relative flex min-h-0 flex-1 flex-col gap-4 sm:justify-end sm:gap-2">
        <div
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] opacity-90 transition-[transform,box-shadow] duration-300 group-hover:scale-[1.03] motion-reduce:transform-none sm:mb-1",
          )}
          style={{ backgroundColor: glow }}
        >
          <Icon className="h-[1.125rem] w-[1.125rem] text-white" aria-hidden />
        </div>
        <div className="mt-auto sm:mt-0">
          <h3
            className={cn(
              "font-display font-bold tracking-[-0.01em] text-foreground",
              featured ? "text-xl sm:text-[1.4rem]" : "text-lg sm:text-[1.05rem]",
            )}
          >
            {loc(item.title, locale)}
          </h3>
          <p
            className={cn(
              "mt-1 text-pretty text-sm leading-relaxed text-muted sm:mt-0.5 sm:text-[0.82rem] sm:leading-[1.45]",
              featured && "sm:max-w-[95%]",
            )}
          >
            {loc(item.body, locale)}
          </p>
        </div>
      </div>
    </article>
  );
}
