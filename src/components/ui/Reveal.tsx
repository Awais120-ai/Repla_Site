"use client";

import { cn } from "@/lib/cn";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (reduce) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    const fallback = window.setTimeout(() => setShown(true), 900);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [reduce]);

  return (
    <div
      ref={ref}
      className={cn(
        shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        "motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-out",
        className,
      )}
      style={{ transitionDelay: shown ? `${delay}s` : undefined }}
    >
      {children}
    </div>
  );
}
