"use client";

import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/cn";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";

export function ThemeToggle({
  className,
  size = "sm",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  const { theme, toggle } = useTheme();
  const t = useTranslations("nav");
  const isLight = theme === "light";

  return (
    <button
      type="button"
      className={cn("social-icon", size === "sm" ? "social-icon-sm" : "social-icon-md", className)}
      aria-label={isLight ? t("switchToDark") : t("switchToLight")}
      title={isLight ? t("switchToDark") : t("switchToLight")}
      onClick={(event) => toggle({ x: event.clientX, y: event.clientY })}
    >
      <Sun
        className={cn("theme-icon-sun", size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4")}
        aria-hidden="true"
      />
      <Moon
        className={cn("theme-icon-moon", size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4")}
        aria-hidden="true"
      />
    </button>
  );
}
