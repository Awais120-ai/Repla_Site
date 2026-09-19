import { SocialLinks } from "@/components/layout/SocialLinks";
import { COMPANY } from "@/lib/site";
import { Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";

const cardClass =
  "flex h-full items-start gap-3 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-brand/40";

export async function ContactDetailCards() {
  const tc = await getTranslations("common");
  const tf = await getTranslations("footer");

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <a href={COMPANY.phoneHref} className={cardClass}>
          <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
          <span className="min-w-0">
            <span className="block text-sm text-muted">{tc("phone")}</span>
            <span className="mt-0.5 block text-sm text-foreground sm:text-base" dir="ltr">
              {COMPANY.phone} ({tf("hr")})
            </span>
          </span>
        </a>
        <a href={`mailto:${COMPANY.emailInfo}`} className={cardClass}>
          <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
          <span className="min-w-0">
            <span className="block text-sm text-muted">{tc("email")}</span>
            <span className="mt-0.5 block break-all text-sm text-foreground sm:text-base">
              {COMPANY.emailInfo}
            </span>
          </span>
        </a>
        <a href={`mailto:${COMPANY.email}`} className={cardClass}>
          <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
          <span className="min-w-0">
            <span className="block text-sm text-muted">{tc("email")}</span>
            <span className="mt-0.5 block break-all text-sm text-foreground sm:text-base">
              {COMPANY.email}
            </span>
          </span>
        </a>
        <div className={cardClass}>
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
          <span className="min-w-0">
            <span className="block text-sm text-muted">{tc("office")}</span>
            <span className="mt-0.5 block text-sm leading-relaxed text-foreground sm:text-base">
              {COMPANY.address}
            </span>
          </span>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
}
