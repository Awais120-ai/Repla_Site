import { Icon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { ArrowUpRight } from "lucide-react";

export function ServiceCard({
  href,
  icon,
  title,
  description,
  cta,
  featured = false,
}: {
  href: string;
  icon: string;
  title: string;
  description: string;
  cta: string;
  featured?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "card-hover group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-6",
        featured && "bg-linear-to-b from-brand/10 to-surface",
      )}
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-110">
        <Icon name={icon} className="h-5 w-5" />
      </div>
      <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand">
        {cta}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
      </span>
    </Link>
  );
}

export function IndustryCard({
  href,
  icon,
  title,
  tagline,
}: {
  href: string;
  icon: string;
  title: string;
  tagline: string;
}) {
  return (
    <Link
      href={href}
      className="card-hover group flex h-full flex-col rounded-2xl border border-line bg-surface p-5"
    >
      <div className="mb-4 text-brand transition-transform duration-300 group-hover:scale-110">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{tagline}</p>
    </Link>
  );
}

export function EmptyState({
  title,
  body,
  cta,
  href,
}: {
  title: string;
  body: string;
  cta: string;
  href: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-dashed border-white/15 bg-surface px-6 py-16 text-center sm:px-12">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <h2 className="relative font-display text-3xl font-semibold text-white">{title}</h2>
      <p className="relative mx-auto mt-4 max-w-2xl text-muted">{body}</p>
      <div className="relative mt-8 flex justify-center">
        <ButtonLink href={href}>{cta}</ButtonLink>
      </div>
    </div>
  );
}
