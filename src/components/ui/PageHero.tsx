import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function CTASection({
  title,
  body,
  primary,
  secondary,
  className,
}: {
  title: string;
  body: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-orb absolute start-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rtl:translate-x-1/2" />
        <div className="absolute inset-0 grid-bg" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl font-normal text-muted sm:text-lg">{body}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href={primary.href} size="lg">
            {primary.label}
          </ButtonLink>
          {secondary ? (
            <ButtonLink href={secondary.href} variant="secondary" size="lg">
              {secondary.label}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-orb absolute -top-24 start-1/4 h-80 w-80" />
        <div className="absolute inset-0 grid-bg opacity-70" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        {eyebrow ? (
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-brand">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.1] text-foreground sm:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
