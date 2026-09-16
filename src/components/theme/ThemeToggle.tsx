"use client";

import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/cn";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const t = useTranslations("nav");
  const isLight = theme === "light";

  return (
    <button
      type="button"
      className={cn(
        "inline-flex h-7 w-7 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-foreground/10 hover:text-foreground",
        className,
      )}
      aria-label={isLight ? t("switchToDark") : t("switchToLight")}
      title={isLight ? t("switchToDark") : t("switchToLight")}
      onClick={(event) => toggle({ x: event.clientX, y: event.clientY })}
    >
      <Sun className="theme-icon-sun h-4 w-4" aria-hidden="true" />
      <Moon className="theme-icon-moon h-4 w-4" aria-hidden="true" />
    </button>
  );
}
