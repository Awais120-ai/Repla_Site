"use client";

import { useEffect, useRef, useState } from "react";

export function StatCounter({
  value,
  numeric,
  suffix,
  label,
}: {
  value: string;
  numeric: number;
  suffix: string;
  label: string;
}) {
  const [shown, setShown] = useState(value);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!numeric || value === "SA" || value === "2019") {
      setShown(value);
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(value);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const duration = 900;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setShown(`${Math.round(numeric * eased)}${suffix}`);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [numeric, suffix, value]);

  return (
    <div ref={ref} className="card-hover rounded-2xl border border-line bg-surface p-6">
      <p className="font-display text-4xl font-bold text-foreground sm:text-5xl">{shown}</p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}
