import { cn } from "@/lib/cn";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg" | "sm";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-[#d4252c] shadow-[0_0_0_1px_rgba(196,30,36,0.4),0_10px_30px_rgba(196,30,36,0.18)]",
  secondary:
    "border border-white/15 bg-white/5 text-foreground hover:border-brand/50 hover:bg-white/10",
  ghost: "text-foreground/80 hover:text-white hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-transform duration-200 ease-out active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: Common & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: Common & { href: string }) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </Link>
  );
}
