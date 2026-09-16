"use client";

import { companyCopy } from "@/content/company";
import { loc, type Locale } from "@/content/types";
import { COMPANY } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "invalid" | "not_configured" | "error";

export function ContactForm({ defaultSubject }: { defaultSubject?: string }) {
  const t = useTranslations("form");
  const locale = useLocale() as Locale;
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const next: Record<string, string> = {};
    if (!String(data.firstName || "").trim()) next.firstName = t("required");
    if (!String(data.lastName || "").trim()) next.lastName = t("required");
    if (!String(data.email || "").includes("@")) next.email = t("invalidEmail");
    if (!String(data.subject || "").trim()) next.subject = t("required");
    if (String(data.message || "").trim().length < 10) next.message = t("messageMin");
    if (Object.keys(next).length) {
      setErrors(next);
      setStatus("invalid");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        }),
      });
      if (res.status === 503) {
        setStatus("not_configured");
        return;
      }
      if (!res.ok) {
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field = (name: string, label: string, opts?: { textarea?: boolean; type?: string; optional?: boolean; defaultValue?: string }) => (
    <label className="block text-sm">
      <span className="text-foreground/90">
        {label}
        {opts?.optional ? <span className="text-muted"> ({t("optional")})</span> : null}
      </span>
      {opts?.textarea ? (
        <textarea
          name={name}
          rows={5}
          className={inputClass(errors[name])}
          placeholder={t(`placeholders.${name}`)}
        />
      ) : (
        <input
          name={name}
          type={opts?.type ?? "text"}
          defaultValue={opts?.defaultValue}
          className={inputClass(errors[name])}
          placeholder={t(`placeholders.${name}`)}
          autoComplete={name}
        />
      )}
      {errors[name] ? <span className="mt-1 block text-xs text-brand">{errors[name]}</span> : null}
    </label>
  );

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-line bg-surface p-6 sm:p-8" noValidate>
      <h2 className="font-display text-2xl font-semibold text-foreground">{t("title")}</h2>
      <p className="text-sm text-muted">{loc(companyCopy.contactHelp, locale)}</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {field("firstName", t("firstName"))}
        {field("lastName", t("lastName"))}
      </div>
      {field("email", t("email"), { type: "email" })}
      {field("phone", t("phone"), { type: "tel", optional: true })}
      {field("subject", t("subject"), { defaultValue: defaultSubject })}
      {field("message", t("message"), { textarea: true })}
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? t("submitting") : t("submit")}
      </Button>
      {status === "success" ? (
        <p className="text-sm text-emerald-400" role="status">
          {loc(companyCopy.formSuccess, locale)}
        </p>
      ) : null}
      {status === "not_configured" ? (
        <p className="text-sm text-amber-300" role="status">
          {loc(companyCopy.formNotConfigured, locale)}{" "}
          <a className="underline" href={`mailto:${COMPANY.email}`}>
            {COMPANY.email}
          </a>
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-brand" role="alert">
          {loc(companyCopy.formNotConfigured, locale)}
        </p>
      ) : null}
    </form>
  );
}

function inputClass(error?: string) {
  return cn(
    // 16px text keeps iOS Safari from zooming the viewport on focus.
    "mt-1.5 w-full rounded-xl border bg-surface-2 px-3 py-3 text-base text-foreground placeholder:text-muted focus:border-brand sm:text-sm",
    error ? "border-brand" : "border-line",
  );
}
