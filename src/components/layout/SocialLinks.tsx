"use client";

import { COMPANY } from "@/lib/site";
import { cn } from "@/lib/cn";
import { useTranslations } from "next-intl";

function InstagramIcon() {
  return (
    <svg className="h-[1em] w-[1em]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-[1em] w-[1em]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-8.16h2.74l.41-3.18h-3.15V8.62c0-.92.25-1.55 1.58-1.55H16.8V4.23A21 21 0 0 0 14.36 4C11.9 4 10.2 5.5 10.2 8.3v2.36H7.4v3.18h2.8V22h3.3Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="h-[1em] w-[1em]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.5h4.56V24H.22V8.5zM8.34 8.5h4.37v2.11h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v8.77h-4.56V16.3c0-1.84-.03-4.21-2.57-4.21-2.57 0-2.96 2-2.96 4.07V24H8.34V8.5z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg className="h-[1em] w-[1em]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.75 15.5v-7l6.2 3.5-6.2 3.5Z" />
    </svg>
  );
}

const NETWORKS = [
  { key: "instagram" as const, href: COMPANY.instagram, Icon: InstagramIcon },
  { key: "facebook" as const, href: COMPANY.facebook, Icon: FacebookIcon },
  { key: "linkedin" as const, href: COMPANY.linkedin, Icon: LinkedinIcon },
  { key: "youtube" as const, href: COMPANY.youtube, Icon: YoutubeIcon },
];

export function SocialLinks({
  size = "md",
  className,
}: {
  size?: "sm" | "md";
  className?: string;
}) {
  const t = useTranslations("nav");

  return (
    <nav aria-label={t("social")} className={cn("flex items-center gap-2", className)}>
      {NETWORKS.map(({ key, href, Icon }) => (
        <a
          key={key}
          href={href}
          className={cn("social-icon", size === "sm" ? "social-icon-sm" : "social-icon-md")}
          target="_blank"
          rel="noreferrer"
          aria-label={t(key)}
        >
          <Icon />
        </a>
      ))}
    </nav>
  );
}
