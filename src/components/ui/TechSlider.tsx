import { TECH_COLORS, TechLogo } from "@/components/ui/TechLogo";
import { TECHNOLOGIES } from "@/lib/site";

function Tiles({ suffix, copy = false }: { suffix: string; copy?: boolean }) {
  return (
    <ul className="flex shrink-0 list-none flex-nowrap gap-3 pe-3" aria-hidden={copy || undefined}>
      {TECHNOLOGIES.map((tech, i) => (
        <li
          key={`${tech}-${suffix}`}
          className="tech-tile flex min-w-36 shrink-0 items-center gap-2.5 rounded-2xl border border-line bg-surface px-3 py-2.5 sm:min-w-48 sm:gap-3 sm:px-4 sm:py-3"
          style={{ animationDelay: `${i * 0.18}s` }}
        >
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-foreground/10 sm:h-11 sm:w-11"
            style={{ boxShadow: `0 0 20px color-mix(in srgb, ${TECH_COLORS[tech]} 28%, transparent)` }}
          >
            <TechLogo name={tech} className="h-7 w-7 sm:h-8 sm:w-8" />
          </span>
          <span className="whitespace-nowrap font-display text-sm font-semibold tracking-wide text-foreground sm:text-base">
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
