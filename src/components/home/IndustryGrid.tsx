"use client";

import { IndustryCard } from "@/components/ui/Cards";
import { cn } from "@/lib/cn";
import { useEffect, useRef, type ReactNode } from "react";

type Item = {
  href: string;
  icon: string;
  title: string;
  tagline: string;
};

export function IndustryReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
        } else if (entry.boundingClientRect.top > (entry.rootBounds?.height ?? window.innerHeight)) {
          el.classList.remove("is-in");
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{industrySlideCss}</style>
      <div
        ref={ref}
        className={cn("industry-slide", className)}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </>
  );
}

export function IndustryGrid({ items }: { items: Item[] }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = [...grid.querySelectorAll<HTMLElement>(".industry-slide")];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cards.forEach((card) => card.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
          } else if (entry.boundingClientRect.top > (entry.rootBounds?.height ?? window.innerHeight)) {
            entry.target.classList.remove("is-in");
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    cards.forEach((card) => io.observe(card));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{industrySlideCss}</style>
      <div
        ref={gridRef}
        className="industry-grid mt-10 grid gap-3 overflow-x-clip sm:grid-cols-2 lg:grid-cols-4"
      >
        {items.map((item, i) => (
          <div
            key={item.href}
            className="industry-slide h-full"
            style={{ transitionDelay: `${(i % 4) * 80}ms` }}
          >
            <IndustryCard href={item.href} icon={item.icon} title={item.title} tagline={item.tagline} />
          </div>
        ))}
      </div>
    </>
  );
}

const industrySlideCss = `
.industry-slide {
  opacity: 0;
  transform: translateY(56px);
  transition:
    opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform;
}
.industry-slide.is-in {
  opacity: 1;
  transform: translateY(0);
}
@media (prefers-reduced-motion: reduce) {
  .industry-slide {
    opacity: 1;
    transform: none;
    transition: none;
    will-change: auto;
  }
}
`;
