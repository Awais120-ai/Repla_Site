"use client";

import { TECHNOLOGIES } from "@/lib/site";
import { useEffect, useRef, type MutableRefObject } from "react";

const ICONS: Record<(typeof TECHNOLOGIES)[number], { color: string; mark: React.ReactNode }> = {
  "Next.js": {
    color: "#ffffff",
    mark: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#fff" />
        <path
          fill="#050505"
          d="M16.7 20.1 10.1 8.4H8.6v7.2h1.2v-5.6l5.8 10.2A10 10 0 0 0 16.7 20Z"
        />
        <path fill="#050505" d="M15.2 8.4h-1.3v7.2h1.3z" />
      </svg>
    ),
  },
  React: {
    color: "#61DAFB",
    mark: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
        <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
        <g fill="none" stroke="#61DAFB" strokeWidth="1.15">
          <ellipse cx="12" cy="12" rx="10.2" ry="3.9" />
          <ellipse cx="12" cy="12" rx="10.2" ry="3.9" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10.2" ry="3.9" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
  },
  TypeScript: {
    color: "#3178C6",
    mark: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
        <rect width="24" height="24" rx="5" fill="#3178C6" />
        <path
          fill="#fff"
          d="M13.2 17.4v-1.55c.62.34 1.36.58 2.3.58.7 0 1.08-.24 1.08-.66 0-.4-.32-.6-1.2-.88l-.46-.16c-1.42-.48-2.32-1.18-2.32-2.58 0-1.5 1.24-2.6 3.22-2.6.96 0 1.84.22 2.5.58v1.52c-.6-.34-1.34-.56-2.18-.56-.66 0-1.02.24-1.02.62 0 .4.36.58 1.28.88l.46.16c1.56.54 2.42 1.24 2.42 2.66 0 1.6-1.26 2.66-3.42 2.66-1.06 0-2.08-.26-2.84-.77Zm-6.2.16.12-1.58h2.7V8.7H7.1V7.24h7.7v1.46h-2.9v7.86z"
        />
      </svg>
    ),
  },
  "Node.js": {
    color: "#5FA04E",
    mark: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
        <path
          fill="#5FA04E"
          d="M11.4 2.2 3.7 6.7a1.2 1.2 0 0 0-.6 1v8.6c0 .4.2.8.6 1l7.7 4.5c.4.2.8.2 1.2 0l7.7-4.5c.4-.2.6-.6.6-1V7.7c0-.4-.2-.8-.6-1l-7.7-4.5a1.2 1.2 0 0 0-1.2 0Z"
        />
        <path
          fill="#fff"
          d="M14.1 13.6c0 1.4-1 2.2-2.8 2.2-1.5 0-2.5-.6-3-1.6l1.3-.76c.3.54.8.9 1.7.9.7 0 1.1-.28 1.1-.78 0-.5-.3-.7-1.5-1.02l-.5-.14c-1.7-.46-2.5-1.28-2.5-2.7 0-1.4 1-2.3 2.7-2.3 1.3 0 2.2.46 2.8 1.5l-1.28.74c-.28-.5-.7-.76-1.46-.76-.62 0-1 .28-1 .72 0 .48.34.68 1.5 1l.5.14c1.8.5 2.54 1.28 2.54 2.76Z"
        />
      </svg>
    ),
  },
  Python: {
    color: "#3776AB",
    mark: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
        <path
          fill="#3776AB"
          d="M12.1 3c-4.4 0-4.1 1.9-4.1 1.9v2h5.3v.6H7.2S3 7.2 3 12.1c0 4.9 2.6 4.7 2.6 4.7h1.5v-2.3s0-2.7 3.2-2.7h5.5s3.1 0 3.1-2.5V6.4S16.8 3 12.1 3Zm-2.3 1.3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
        />
        <path
          fill="#FFD43B"
          d="M11.9 21c4.4 0 4.1-1.9 4.1-1.9v-2h-5.3v-.6h6.1S21 16.8 21 11.9c0-4.9-2.6-4.7-2.6-4.7h-1.5v2.3s0 2.7-3.2 2.7H8.2s-3.1 0-3.1 2.5v3.2S7.2 21 11.9 21Zm2.3-1.3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
        />
      </svg>
    ),
  },
  AWS: {
    color: "#FF9900",
    mark: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
        <path
          fill="#fff"
          d="M7.2 9.4c0 .7.2 1.2.5 1.5.4.4.6.5.6.8 0 .3-.3.5-.8.5-.4 0-.8-.1-1.2-.4l-.2.9c.4.2 1 .4 1.6.4 1.2 0 1.9-.6 1.9-1.6 0-.7-.4-1.2-.9-1.5-.4-.3-.6-.5-.6-.8 0-.3.2-.5.7-.5.3 0 .7.1 1 .3l.2-.9c-.4-.2-.8-.3-1.3-.3-1.1 0-1.9.7-1.9 1.6Zm4.3 3.1.9-3.2h-1.1l-.4 1.6-.4-1.6H9.3l1.4 3.9c-.2.5-.4.6-.8.6h-.3v.9h.5c.8 0 1.2-.3 1.5-1.1l.2-.5.7 1.6h1.1l-1.4-3.2Zm3.1.5c.5 0 .9-.1 1.2-.3l-.2-.9c-.2.1-.5.2-.8.2-.7 0-1.2-.5-1.2-1.3 0-.8.5-1.4 1.3-1.4.3 0 .6.1.8.2l.2-.9c-.3-.1-.7-.2-1.1-.2-1.4 0-2.4.9-2.4 2.3 0 1.3.9 2.3 2.2 2.3Zm4.2-3.6h-1.7l-1.1 3.6h1.1l.2-.8h1.4l.2.8h1.2l-1.3-3.6Zm-1.4 2 .4-1.4.4 1.4h-.8Z"
        />
        <path
          fill="none"
          stroke="#FF9900"
          strokeLinecap="round"
          strokeWidth="1.35"
          d="M5.6 16.4c2.8 2.1 7.3 2.7 11.4.2 1-.6 1.9-1.3 2.6-2.1"
        />
        <path fill="#FF9900" d="m19 15.6.7 2.2 1.4-2.7z" />
      </svg>
    ),
  },
  Azure: {
    color: "#0078D4",
    mark: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
        <path fill="#50E6FF" d="m13.2 5 8.3 14.5H9.4L13.2 5Z" />
        <path fill="#0078D4" d="M11.6 8.4 2.5 19.5h8.4l2.6-4.6-3.8-6.5Z" />
        <path fill="#5EA0EF" d="m13.2 5-1.6 3.4 4.9 8.4h4.9L13.2 5Z" />
      </svg>
    ),
  },
  GCP: {
    color: "#4285F4",
    mark: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
        <path fill="#4285F4" d="M12 4.2 7.6 11.8h3.1L12 9.4l1.3 2.4h3.1L12 4.2Z" />
        <path fill="#EA4335" d="m7.6 11.8-2.4 4.2 4.4 0-2-4.2Z" />
        <path fill="#FBBC05" d="m5.2 16 2.2 3.8h4.4l-2.2-3.8H5.2Z" />
        <path fill="#34A853" d="m12.2 16 2.2 3.8h4.4L16.6 16h-4.4Z" />
        <path fill="#4285F4" d="m16.4 11.8 2.4 4.2h-4.4l2-4.2Z" />
      </svg>
    ),
  },
  Docker: {
    color: "#2496ED",
    mark: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
        <path fill="#2496ED" d="M5 11.2h2.1V9.2H5zm2.5 0h2.1V9.2H7.5zm2.5 0h2.1V9.2H10zm2.5 0h2.1V9.2H12.5zM7.5 8.8h2.1V6.8H7.5zm2.5 0h2.1V6.8H10z" />
        <path
          fill="#2496ED"
          d="M3.2 13.2c.9 2.2 3.8 3.6 8.6 3.6 5.4 0 8.4-2 9.6-3.8.6-.9.8-1.8.7-2.6-.8.2-1.8.3-2.6.2.4-.7.6-1.5.5-2.4-.1-1.2-.8-2.2-1.8-2.8l-.4 1.2c.5.4.8 1 .9 1.7-1.4.2-2.8 0-4-.5-1.7-.7-3-2-3.7-3.6l-1.1.5c.8 1.8 2.3 3.3 4.1 4.1 1.3.5 2.8.6 4.2.3.2.4.6.8 1 .9 1.5.5 3.2-.1 3.6-1.2-1.4.8-3.5 1.6-6.8 1.6H4.4c-.5 0-1-.2-1.2-.2Z"
        />
      </svg>
    ),
  },
  Kubernetes: {
    color: "#326CE5",
    mark: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
        <path
          fill="#326CE5"
          d="M12 2 8.4 3.4 5.2 6.2 3.4 10l.4 4 2.2 3.4 3.4 2.2L12 22l3.6-1.4 3.2-2.8 1.8-3.8-.4-4-2.2-3.4L15.6 3.4 12 2Z"
        />
        <circle cx="12" cy="12" r="2.1" fill="#fff" />
        <g stroke="#fff" strokeLinecap="round" strokeWidth="1.2">
          <path d="M12 4.6v3.2M12 16.2v3.2M6.4 7.4l2.6 1.6M15 14.8l2.6 1.6M6.4 16.6 9 15M15 9l2.6-1.6" />
        </g>
      </svg>
    ),
  },
  Flutter: {
    color: "#027DFD",
    mark: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
        <path fill="#54C5F8" d="m13.8 2.2-9 9 3.4 3.4 12.4-12.4z" />
        <path fill="#54C5F8" d="m8.2 14.6 3.4 3.4 3.4-3.4-3.4-3.4z" />
        <path fill="#01579B" d="m11.6 18 3.4 3.4 7.2-7.2-3.4-3.4z" />
        <path fill="#027DFD" d="m11.6 11.2 3.4 3.4 3.4-3.4-3.4-3.4z" />
      </svg>
    ),
  },
  Sanity: {
    color: "#F03E2F",
    mark: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
        <rect width="24" height="24" rx="5" fill="#F03E2F" />
        <path
          fill="#fff"
          d="M8.4 8.6c.8-1.4 2.4-2.3 4.4-2.3 3.1 0 5 1.6 5 3.7 0 1.7-1.1 2.8-3.6 3.4l-1.8.4c-1.1.2-1.6.6-1.6 1.2 0 .8.8 1.3 2.1 1.3 1.6 0 2.8-.6 3.8-1.8l1.5 1.4c-1.3 1.6-3.2 2.5-5.5 2.5-3.2 0-5.2-1.6-5.2-3.8 0-1.8 1.2-3 3.6-3.5l1.9-.4c1-.2 1.5-.6 1.5-1.1 0-.7-.7-1.2-1.9-1.2-1.5 0-2.6.6-3.4 1.7L8.4 8.6Z"
        />
      </svg>
    ),
  },
};

function Tiles({ suffix, copy = false }: { suffix: string; copy?: boolean }) {
  return (
    <ul className="flex shrink-0 list-none flex-nowrap gap-4 pe-4" aria-hidden={copy || undefined}>
      {TECHNOLOGIES.map((tech, i) => {
        const logo = ICONS[tech];
        return (
          <li
            key={`${tech}-${suffix}`}
            className="tech-tile flex min-w-60 shrink-0 items-center gap-4 rounded-3xl border border-white/8 bg-black/45 px-6 py-5"
            style={{ animationDelay: `${i * 0.18}s` }}
          >
            <span
              className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/8"
              style={{ boxShadow: `0 0 28px color-mix(in srgb, ${logo.color} 28%, transparent)` }}
            >
              {logo.mark}
            </span>
            <span className="font-display text-lg tracking-wide text-white whitespace-nowrap sm:text-xl">
              {tech}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function TechTrack({ pausedRef }: { pausedRef: MutableRefObject<boolean> }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let offset = 0;
    let frame = 0;
    let last = performance.now();
    const speed = 42;

    const tick = (now: number) => {
      const dt = Math.min(now - last, 48) / 1000;
      last = now;
      const loopWidth = el.scrollWidth / 2;
      if (!pausedRef.current && loopWidth > 0) {
        offset += speed * dt;
        if (offset >= loopWidth) offset -= loopWidth;
        const rtl = document.documentElement.dir === "rtl";
        el.style.transform = `translate3d(${offset * (rtl ? 1 : -1)}px, 0, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div ref={ref} className="tech-marquee flex w-max will-change-transform">
      <Tiles suffix="a" />
      <Tiles suffix="b" copy />
    </div>
  );
}

export function TechSlider() {
  const pausedRef = useRef(false);

  return (
    <div
      className="tech-slider relative"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      <div className="overflow-hidden py-2">
        <TechTrack pausedRef={pausedRef} />
      </div>
    </div>
  );
}
