"use client";

import { TECH_COLORS, TechLogo } from "@/components/ui/TechLogo";
import { TECHNOLOGIES } from "@/lib/site";
import { useEffect, useRef } from "react";

function Tiles({ suffix, copy = false }: { suffix: string; copy?: boolean }) {
  return (
    <ul className="flex shrink-0 list-none flex-nowrap items-center gap-3 pe-3" aria-hidden={copy || undefined}>
      {TECHNOLOGIES.map((tech) => (
        <li
          key={`${tech}-${suffix}`}
          className="tech-tile flex min-w-36 shrink-0 cursor-default items-center gap-2.5 rounded-2xl border border-line bg-surface px-3 py-2.5 sm:min-w-48 sm:gap-3 sm:px-4 sm:py-3"
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

/** Auto marquee: continuous right → left scroll inside the marked content window. */
export function TechSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const marquee = marqueeRef.current;
    if (!track || !marquee) return;

    const rtl = document.documentElement.dir === "rtl";
    const speed = 42; // px / second
    let x = 0;
    let paused = false;
    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(now - last, 48);
      last = now;

      if (!paused) {
        const loop = marquee.scrollWidth / 2;
        if (loop > 0) {
          x += (rtl ? speed : -speed) * (dt / 1000);
          if (!rtl && -x >= loop) x += loop;
          if (rtl && x >= loop) x -= loop;
          marquee.style.transform = `translate3d(${x}px, 0, 0)`;
        }
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
      last = performance.now();
    };

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);
    track.addEventListener("focusin", pause);
    track.addEventListener("focusout", resume);

    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
      track.removeEventListener("focusin", pause);
      track.removeEventListener("focusout", resume);
    };
  }, []);

  return (
    <div className="tech-slider relative mx-auto w-full max-w-7xl px-4 sm:px-6">
      <div ref={trackRef} className="tech-slider-track overflow-hidden py-2">
        <div ref={marqueeRef} className="tech-marquee flex w-max will-change-transform">
          <Tiles suffix="a" />
          <Tiles suffix="b" copy />
        </div>
      </div>
    </div>
  );
}
