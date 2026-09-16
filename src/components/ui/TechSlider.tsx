import { TECH_COLORS, TechLogo } from "@/components/ui/TechLogo";
import { TECHNOLOGIES } from "@/lib/site";

function Tiles({ suffix, copy = false }: { suffix: string; copy?: boolean }) {
  return (
    <ul className="flex shrink-0 list-none flex-nowrap gap-4 pe-4" aria-hidden={copy || undefined}>
      {TECHNOLOGIES.map((tech, i) => (
        <li
          key={`${tech}-${suffix}`}
          className="tech-tile flex min-w-44 shrink-0 items-center gap-3 rounded-3xl border border-line bg-surface px-4 py-4 sm:min-w-60 sm:gap-4 sm:px-6 sm:py-5"
          style={{ animationDelay: `${i * 0.18}s` }}
        >
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-line bg-foreground/10 sm:h-16 sm:w-16"
            style={{ boxShadow: `0 0 28px color-mix(in srgb, ${TECH_COLORS[tech]} 28%, transparent)` }}
          >
            <TechLogo name={tech} className="h-10 w-10" />
          </span>
          <span className="whitespace-nowrap font-display text-base font-semibold tracking-wide text-foreground sm:text-xl">
            {tech}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function TechSlider() {
  return (
    <div className="tech-slider relative">
      <div className="overflow-hidden py-2">
        <div className="tech-marquee flex w-max">
          <Tiles suffix="a" />
          <Tiles suffix="b" copy />
        </div>
      </div>
    </div>
  );
}
