"use client";

import { THEME_SCRIPT } from "@/components/theme/theme";
import { useServerInsertedHTML } from "next/navigation";
import { useRef } from "react";

export function ThemeScript() {
  const inserted = useRef(false);

  useServerInsertedHTML(() => {
    if (inserted.current) return null;
    inserted.current = true;
    return (
      <script
        id="repla-theme"
        dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }}
      />
    );
  });

  return null;
}
