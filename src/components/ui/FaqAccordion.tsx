"use client";

import { cn } from "@/lib/cn";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FaqAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-medium text-white">{item.q}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 text-muted transition-transform",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            {isOpen ? (
              <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
