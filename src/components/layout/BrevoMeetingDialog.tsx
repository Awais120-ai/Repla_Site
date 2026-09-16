"use client";

import { X } from "lucide-react";
import Script from "next/script";
import { useEffect, useId, useRef, useState } from "react";

export const BREVO_MEETING_URL = "https://meet.brevo.com/muhammad-awais-7/intro";

export function BrevoMeetingPopover({
  id,
  title,
  closeLabel,
}: {
  id: string;
  title: string;
  closeLabel: string;
}) {
  // The booking iframe and Brevo SDK only load once the popover is opened.
  const [opened, setOpened] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onToggle = (event: Event) => {
      if ((event as Event & { newState?: string }).newState === "open") setOpened(true);
    };
    el.addEventListener("toggle", onToggle);
    return () => el.removeEventListener("toggle", onToggle);
  }, []);

  return (
    <>
      {opened ? (
        <Script src="https://cdn.brevo.com/js/sdk-loader.js" strategy="lazyOnload" id="brevo-sdk-loader" />
      ) : null}
      <div
        ref={ref}
        id={id}
        popover="auto"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="m-auto w-[min(56rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-line bg-white p-0 shadow-2xl backdrop:bg-black/75"
      >
        <button
          type="button"
          className="absolute end-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black btn-animate-soft hover:bg-black/5"
          aria-label={closeLabel}
          popoverTarget={id}
          popoverTargetAction="hide"
        >
          <X className="h-4 w-4" />
        </button>
        {opened ? (
          <iframe
            title={title}
            src={BREVO_MEETING_URL}
            className="h-[min(85vh,820px)] w-full bg-white"
            referrerPolicy="no-referrer-when-downgrade"
            allow="clipboard-write"
          />
        ) : (
          <div className="h-[min(85vh,820px)] w-full bg-white" />
        )}
      </div>
    </>
  );
}

export function useBrevoPopoverId() {
  return `brevo-meeting-${useId().replace(/:/g, "")}`;
}
